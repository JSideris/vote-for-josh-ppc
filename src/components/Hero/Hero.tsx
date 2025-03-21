import React from 'react';
import './Hero.css';

const Hero: React.FC = () => {
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
		<section className="hero" id="home">
			<div className="hero-content">
				<h1>Joshua Sideris for Richmond Hill South</h1>
				<p>PPC Candidate • Engineer • Entrepreneur • Problem Solver</p>
				<div className="hero-buttons">
					<a href="#get-involved" className="btn btn-primary" onClick={handleLinkClick}>
						Get Involved
					</a>
					<a href="#platform" className="btn" onClick={handleLinkClick}>
						Learn More
					</a>
				</div>
			</div>
		</section>
	);
};

export default Hero;