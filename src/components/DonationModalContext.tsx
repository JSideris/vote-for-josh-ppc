import React, { createContext, useState, useContext, ReactNode } from 'react';
import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';
import SlideUpModal from '../components/SlideUpModal/SlideUpModal';
import StripeDonationForm from '../components/StripeDonationForm/StripeDonationForm';

// Replace with your actual Stripe publishable key
// const stripePromise = loadStripe('pk_test_51REUFWIKuaSIpfFGkQXP1dodY8YTgBPkqwBE7TgqEzkMKKCyNwbtbl0iutZspYZ25h3sJD9PnYW9Tflb7Jjje4Wr00yrjxxqCv');
const stripePromise = loadStripe('pk_live_51REUFWIKuaSIpfFG3eVYTZlwfPGegxQBWOEdKbcvx2DAK2twRU3mAowtmFQSMr9lqTRm3GdHY7yNKhUiCfOQargE00Asnd71b9');

interface DonationModalContextProps {
  openDonationModal: () => void;
  closeDonationModal: () => void;
  isDonationModalOpen: boolean;
}

const DonationModalContext = createContext<DonationModalContextProps | undefined>(undefined);

export const useDonationModal = () => {
  const context = useContext(DonationModalContext);
  if (context === undefined) {
    throw new Error('useDonationModal must be used within a DonationModalProvider');
  }
  return context;
};

interface DonationModalProviderProps {
  children: ReactNode;
}

export const DonationModalProvider: React.FC<DonationModalProviderProps> = ({ children }) => {
  const [isDonationModalOpen, setIsDonationModalOpen] = useState(false);

  const openDonationModal = () => {
    setIsDonationModalOpen(true);
  };

  const closeDonationModal = () => {
    setIsDonationModalOpen(false);
  };

  return (
    <DonationModalContext.Provider
      value={{
        openDonationModal,
        closeDonationModal,
        isDonationModalOpen
      }}
    >
      {children}
      
      {/* Stripe Donation Modal */}
      <Elements stripe={stripePromise}>
        <SlideUpModal
          isOpen={isDonationModalOpen}
          onClose={closeDonationModal}
          title="Make a Donation"
        >
          <StripeDonationForm />
        </SlideUpModal>
      </Elements>
    </DonationModalContext.Provider>
  );
};