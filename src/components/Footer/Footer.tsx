import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXTwitter } from '@fortawesome/free-brands-svg-icons';
import './Footer.css';

const Footer: React.FC = () => {
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

	return (
		<footer className="footer" id="contact">
			<div className="footer-content">
				<div className="footer-logo">
					JOSH <span>SIDERIS</span> for Richmond Hill South
				</div>
				<p>Authorized by Olivia Gajadhar, Official Agent for Joshua Sideris</p>
				<div className="footer-links">
					<a href="#home" onClick={handleLinkClick}>Home</a>
					<a href="#about" onClick={handleLinkClick}>About</a>
					<a href="#platform" onClick={handleLinkClick}>Platform</a>
					<a href="#get-involved" onClick={handleLinkClick}>Get Involved</a>
				</div>
				<div className="footer-social">
					<a href="https://x.com/joshsideris" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
						<FontAwesomeIcon icon={faXTwitter} />
					</a>
					{/* Additional social media links can be added here */}
				</div>
				<p>&copy; {new Date().getFullYear()} Joshua Sideris Campaign. All Rights Reserved.</p>
			</div>
		</footer>
	);
};

export default Footer;