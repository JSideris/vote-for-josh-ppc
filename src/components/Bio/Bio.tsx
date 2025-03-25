import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXTwitter } from '@fortawesome/free-brands-svg-icons';
import './Bio.css';
import { SocialLinkProps } from '../../types';

const Bio: React.FC = () => {
	const socialLinks: SocialLinkProps[] = [
		{
			platform: 'Twitter',
			url: 'https://x.com/joshsideris',
			icon: 'faXTwitter'
		},
		// Add more social media links as needed
		// {
		//   platform: 'Facebook',
		//   url: '#',
		//   icon: 'faFacebookF'
		// },
		// {
		//   platform: 'Instagram',
		//   url: '#',
		//   icon: 'faInstagram'
		// },
		// {
		//   platform: 'LinkedIn',
		//   url: '#',
		//   icon: 'faLinkedinIn'
		// }
	];

	return (
		<section id="about" className="container">
			<h2 className="section-title">About Joshua</h2>
			<div className="bio">
				<div className="bio-image">
					<img src="/assets/images/josh-profile.jpg" alt="Joshua Sideris, PPC candidate for Richmond Hill South" />
				</div>
				<div className="bio-text">
					<h3>PPC Candidate—Not a Career Politician</h3>
					<p>
						I'm Joshua Sideris, and I'm running as the People's Party of Canada candidate to be your next Member of Parliament for Richmond Hill South. 
						I'm not a career politician—I'm an engineer, an entrepreneur, and a problem solver. 
						My life's work has been about building solutions that matter, from cutting&#8209;edge technology that saves lives to tools that bring people together. 
						Now, I want to bring that same energy and expertise to Ottawa to serve our community.
					</p>
					<div className="social-links">
						{socialLinks.map((link, index) => (
							<a
								key={index}
								href={link.url}
								target="_blank" rel="noopener"
								rel="noopener noreferrer"
								aria-label={`Follow Joshua Sideris on ${link.platform}`}
							>
								<FontAwesomeIcon icon={faXTwitter} />
							</a>
						))}
					</div>
				</div>
			</div>
		</section>
	);
};

export default Bio;