import React from 'react';
import './Hero.css';
import { useDonationModal } from '../DonationModalContext';

const Hero: React.FC = () => {

	const { openDonationModal } = useDonationModal();

	const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
		e.preventDefault();

		const targetId = e.currentTarget.getAttribute('href');
		if (targetId) {
			const targetElement = document.querySelector(targetId);

			if (targetElement) {
				window.scrollTo({
					top: targetElement.getBoundingClientRect().top + window.pageYOffset - 70,
					behavior: 'smooth'
				});
			}
		}
	};

	const buttonStyle = {
		fontFamily: "Raleway, Cabin, 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
		fontSize: "1rem",
		lineHeight: "1.6"
	};

	return (
		<section className="hero" id="home">
			<div className="hero-content">
				<h1>Joshua Sideris for Richmond Hill South</h1>
				<p>PPC Candidate • Engineering • Entrepreneur • Problem Solver</p>
				<div className="hero-buttons">
					<a href="#get-involved" className="btn btn-primary" onClick={handleLinkClick}>
						Get Involved
					</a>
					<button 
						style={buttonStyle}
						className="btn btn-secondary"
						onClick={openDonationModal}
					>
						Donate Now
					</button>
					{/* <a href="https://donate.stripe.com/5kAcNGb0K2027vyfYY" target='_blank' className="btn btn-secondary">
						Donate Now
					</a> */}
					<a href="#platform" className="btn btn-primary" onClick={handleLinkClick}>
						Learn More
					</a>
				</div>
			</div>
		</section>
	);
};

export default Hero;