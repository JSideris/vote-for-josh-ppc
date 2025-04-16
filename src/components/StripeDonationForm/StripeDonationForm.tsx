import React, { useState, useEffect, useCallback } from 'react';
import { CardElement, useStripe, useElements } from '@stripe/react-stripe-js';
import './StripeDonationForm.css';

const StripeDonationForm: React.FC = () => {
  const stripe = useStripe();
  const elements = useElements();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    street: '',
    city: '',
    province: '',
    postalCode: '',
    amount: '',
    isIndividual: false,
    isEligible: false,
    isAdult: false,
  });
  const [error, setError] = useState<string | null>(null);
  const [cardError, setCardError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [isElectionOver, setIsElectionOver] = useState(false);
  const [taxCredit, setTaxCredit] = useState<number>(0);
  const [effectiveCost, setEffectiveCost] = useState<number>(0);

  const MAX_DONATION_AMOUNT = 1750;
  const ELECTION_DATE = new Date(2025, 3, 28); // April 28, 2025
  const DONATION_END_DATE = new Date(2025, 4, 28); // May 28, 2025 (30 days after election)
  const PARTY_DONATION_URL = 'https://donate.peoplespartyofcanada.ca/york/';

  // Calculate tax credit based on donation amount
  const calculateTaxCredit = (donationAmount: string) => {
    console.log(`calculateTaxCredit called with: "${donationAmount}"`);
    
    const amount = parseFloat(donationAmount);
    console.log(`Parsed amount: ${amount}, isNaN: ${isNaN(amount)}`);
    
    if (isNaN(amount) || amount <= 0) {
      console.log("Invalid amount, setting credits to 0");
      setTaxCredit(0);
      setEffectiveCost(0);
      return;
    }
    
    let credit = 0;
    
    // First $400: 75% credit
    if (amount > 0) {
      const firstTier = Math.min(amount, 400);
      credit += firstTier * 0.75;
      console.log(`First tier: ${firstTier.toFixed(2)} * 75% = ${(firstTier * 0.75).toFixed(2)}`);
    }
    
    // Next $350 ($400 to $750): 50% credit
    if (amount > 400) {
      const secondTier = Math.min(amount - 400, 350);
      credit += secondTier * 0.5;
      console.log(`Second tier: ${secondTier.toFixed(2)} * 50% = ${(secondTier * 0.5).toFixed(2)}`);
    }
    
    // Over $750 (up to $1,275): 33.3% credit
    if (amount > 750) {
      const thirdTier = Math.min(amount - 750, 525);
      credit += thirdTier * 0.333;
      console.log(`Third tier: ${thirdTier.toFixed(2)} * 33.3% = ${(thirdTier * 0.333).toFixed(2)}`);
    }
    
    // Maximum credit is $650 (for donations of $1,275 or more)
    const finalCredit = Math.min(credit, 650);
    console.log(`Final tax credit: ${finalCredit.toFixed(2)}`);
    console.log(`Effective cost: ${(amount - finalCredit).toFixed(2)}`);
    
    const creditValue = parseFloat(finalCredit.toFixed(2));
    const costValue = parseFloat((amount - finalCredit).toFixed(2));
    
    console.log(`Setting tax credit state to: ${creditValue}`);
    console.log(`Setting effective cost state to: ${costValue}`);
    
    // Update state with calculated values
    setTaxCredit(creditValue);
    setEffectiveCost(costValue);
  };

  // Check if donation period is over (election + 30 days)
  useEffect(() => {
    const currentDate = new Date();
    setIsElectionOver(currentDate > DONATION_END_DATE);
  }, []);

  // Handle card element change to provide immediate validation feedback
  const handleCardChange = (event: any) => {
    setCardError(event.error ? event.error.message : null);
  };

  // Run the tax credit calculation whenever amount changes
  useEffect(() => {
    if (formData.amount) {
      calculateTaxCredit(formData.amount);
    }
  }, [formData.amount, calculateTaxCredit]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target;
    
    // Enforce the maximum donation amount
    if (name === 'amount' && parseFloat(value) > MAX_DONATION_AMOUNT) {
      setError(`The maximum allowable donation is ${MAX_DONATION_AMOUNT} CAD.`);
      setFormData(prev => ({
        ...prev,
        [name]: MAX_DONATION_AMOUNT.toString()
      }));
      return;
    }
    
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value,
    }));
    
    // Clear general error when user makes changes
    setError(null);
  };

  const validateForm = () => {
    // Validate form fields
    const requiredFields = ['name', 'email', 'street', 'city', 'province', 'postalCode', 'amount'];
    for (const field of requiredFields) {
      if (!(formData as any)[field]) {
        setError(`Please fill out all required fields. The ${field.replace(/([A-Z])/g, ' $1').toLowerCase()} field is missing.`);
        return false;
      }
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      setError('Please enter a valid email address.');
      return false;
    }

    // Validate amount
    if (isNaN(parseFloat(formData.amount)) || parseFloat(formData.amount) <= 0) {
      setError('Please enter a valid donation amount greater than 0.');
      return false;
    }
    
    // Enforce maximum donation amount
    if (parseFloat(formData.amount) > MAX_DONATION_AMOUNT) {
      setError(`The maximum allowable donation is ${MAX_DONATION_AMOUNT} CAD.`);
      return false;
    }

    // Check eligibility checkboxes
    if (!formData.isIndividual) {
      setError('Please confirm that you are donating as an individual, not a corporation.');
      return false;
    }

    if (!formData.isEligible) {
      setError('Please confirm that you are a Canadian citizen or permanent resident.');
      return false;
    }
    
    if (!formData.isAdult) {
      setError('You must be at least 18 years old to make a political donation.');
      return false;
    }

    // Validate card input
    const cardElement = elements?.getElement(CardElement);
    if (!cardElement) {
      setError('Unable to find card element. Please refresh and try again.');
      return false;
    }

    if (cardError) {
      setError('Please check your card information: ' + cardError);
      return false;
    }

    return true;
  };

  const handleSubmit = async (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    if (!stripe || !elements) {
      setError('Stripe has not been properly initialized. Please refresh and try again.');
      return;
    }

    // Run all validations
    if (!validateForm()) {
      return;
    }

    setLoading(true);
    setError(null);
    
    try {
      // Call server to create payment intent
      const response = await fetch('/create-payment-intent', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ amount: parseFloat(formData.amount) * 100 }), // Convert to cents
      });
      
      if (!response.ok) {
        const errorData = await response.json().catch(() => null);
        throw new Error(errorData?.message || 'Failed to create payment intent.');
      }
      
      const { clientSecret } = await response.json();
      
      // Confirm the payment
      const result = await stripe.confirmCardPayment(clientSecret, {
        payment_method: {
          card: elements.getElement(CardElement)!,
          billing_details: {
            name: formData.name,
            email: formData.email,
            address: {
              line1: formData.street,
              city: formData.city,
              state: formData.province,
              postal_code: formData.postalCode,
              country: 'CA',
            },
          },
        },
      });
      
      if (result.error) {
        // Show the exact error from Stripe
        setError(result.error.message || 'Payment failed. Please check your card details and try again.');
      } else if (result.paymentIntent.status === 'succeeded') {
        setSuccess(true);
        // Optionally, call server to record donation and send receipt
        await fetch('/record-donation', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            name: formData.name,
            email: formData.email,
            address: {
              street: formData.street,
              city: formData.city,
              province: formData.province,
              postalCode: formData.postalCode,
            },
            amount: formData.amount,
            paymentIntentId: result.paymentIntent.id,
          }),
        }).catch(err => console.error('Error recording donation:', err));
      }
    } catch (err: any) {
      setError(err.message || 'An error occurred. Please try again.');
    }
    
    setLoading(false);
  };

  if (isElectionOver) {
    return (
      <div className="donation-form-container">
        <div className="donation-form-election-over">
          <h2>Donation Period Has Ended</h2>
          <p>The election was held on April 28, 2025. Donations can no longer be accepted for this candidate campaign as the 30-day post-election donation period has ended.</p>
          <p>If you'd like to support the People's Party of Canada, you can make a donation directly to the party:</p>
          <a href={PARTY_DONATION_URL} className="btn" target="_blank" rel="noopener noreferrer">
            Donate to the Party
          </a>
        </div>
      </div>
    );
  }

  if (success) {
    return (
      <div className="donation-form-container">
        <div className="donation-form-success">
          <h2>Thank You for Your Support!</h2>
          <p>Your donation has been processed successfully.</p>
          <p>A tax receipt will be sent to your email address after the election period, in accordance with Elections Canada regulations.</p>
          <p>Your contribution makes a real difference in our campaign.</p>
        </div>
      </div>
    );
  }

  return (
    <div className="donation-form-container">
      <h2 className="donation-form-title">Support Our Campaign</h2>
      <p className="donation-form-intro">Thank you for supporting our campaign! Please fill out the form below to make your donation. A tax receipt will be sent to the email address provided after the election period.</p>
      <p className="donation-form-notice">
        Note: The maximum annual contribution limit for 2025 is $1,750 per individual. 
        {ELECTION_DATE < new Date() ? 
          " Although the election has occurred, donations can still be accepted until May 28, 2025 (30 days after election day)." : 
          " Please ensure your donation does not exceed this limit when combined with any previous contributions."}
      </p>
      
      <div className="donation-form-field">
        <label className="donation-form-label">Full Name:</label>
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          className="donation-form-input"
          required
        />
      </div>
      
      <div className="donation-form-field">
        <label className="donation-form-label">Email:</label>
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          className="donation-form-input"
          required
        />
      </div>
      
      <div className="donation-form-field">
        <label className="donation-form-label">Street Address:</label>
        <input
          type="text"
          name="street"
          value={formData.street}
          onChange={handleChange}
          className="donation-form-input"
          required
        />
      </div>
      
      <div className="donation-form-field">
        <label className="donation-form-label">City:</label>
        <input
          type="text"
          name="city"
          value={formData.city}
          onChange={handleChange}
          className="donation-form-input"
          required
        />
      </div>
      
      <div className="donation-form-field">
        <label className="donation-form-label">Province:</label>
        <input
          type="text"
          name="province"
          value={formData.province}
          onChange={handleChange}
          className="donation-form-input"
          required
        />
      </div>
      
      <div className="donation-form-field">
        <label className="donation-form-label">Postal Code:</label>
        <input
          type="text"
          name="postalCode"
          value={formData.postalCode}
          onChange={handleChange}
          className="donation-form-input"
          required
        />
      </div>
      
      <div className="donation-form-field">
        <label className="donation-form-label">Donation Amount (CAD):</label>
        <input
          type="number"
          name="amount"
          value={formData.amount}
          onChange={handleChange}
          className="donation-form-input"
          required
          min="1"
          max={MAX_DONATION_AMOUNT}
        />
        <span className="donation-form-helper-text">Maximum donation: ${MAX_DONATION_AMOUNT} CAD</span>
        
        {formData.amount && parseFloat(formData.amount) > 0 && (
          <div className="donation-form-tax-credit">
            <p>Estimated Tax Credit: <strong>${taxCredit}</strong></p>
            <p>Your Effective Cost: <strong>${effectiveCost}</strong></p>
            <small className="donation-form-tax-note">
              This is an estimate based on federal political contribution tax credits. 
              Your actual tax credit may vary depending on your tax situation and previous political contributions.
            </small>
          </div>
        )}
      </div>
      
      <div className="donation-form-checkbox-container">
        <input
          type="checkbox"
          name="isIndividual"
          checked={formData.isIndividual}
          onChange={handleChange}
          className="donation-form-checkbox"
          required
          id="checkbox-individual"
        />
        <label htmlFor="checkbox-individual" className="donation-form-checkbox-label">
          I confirm I am donating as an individual, not a corporation.
        </label>
      </div>
      
      <div className="donation-form-checkbox-container">
        <input
          type="checkbox"
          name="isEligible"
          checked={formData.isEligible}
          onChange={handleChange}
          className="donation-form-checkbox"
          required
          id="checkbox-eligible"
        />
        <label htmlFor="checkbox-eligible" className="donation-form-checkbox-label">
          I confirm I am a Canadian citizen or permanent resident and this contribution is made from my own funds.
        </label>
      </div>
      
      <div className="donation-form-checkbox-container">
        <input
          type="checkbox"
          name="isAdult"
          checked={formData.isAdult}
          onChange={handleChange}
          className="donation-form-checkbox"
          required
          id="checkbox-adult"
        />
        <label htmlFor="checkbox-adult" className="donation-form-checkbox-label">
          I confirm I am at least 18 years of age.
        </label>
      </div>
      
      <div className="donation-form-card-container">
        <label className="donation-form-label">Card Details:</label>
        <CardElement 
          onChange={handleCardChange}
          options={{
            style: {
              base: {
                fontSize: '16px',
                color: '#424770',
                fontFamily: 'Raleway, Cabin, "Segoe UI", Tahoma, Geneva, Verdana, sans-serif',
                '::placeholder': {
                  color: '#aab7c4',
                },
              },
              invalid: {
                color: '#9e2146',
              },
            },
          }} 
        />
        {cardError && <div className="donation-form-card-error">{cardError}</div>}
      </div>
      
      {error && <div className="donation-form-error">{error}</div>}
      
      <button
        type="button"
        onClick={handleSubmit}
        disabled={loading || !stripe}
        className="donation-form-button"
      >
        {loading ? 'Processing...' : 'Donate Now'}
      </button>
    </div>
  );
};

export default StripeDonationForm;