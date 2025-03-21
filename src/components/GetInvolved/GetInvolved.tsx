import React from 'react';
import InvolvementCard from './InvolvementCard';
import { InvolvementCardProps } from '../../types';
import './GetInvolved.css';

const GetInvolved: React.FC = () => {
	const involvementOptions: InvolvementCardProps[] = [
		{
			icon: 'faHandHoldingDollar',
			title: 'Donate',
			description: 'Your contribution makes a real difference in our campaign to bring fresh leadership to Ottawa.',
			buttonText: 'Donate Now',
			buttonLink: 'https://donate.peoplespartyofcanada.ca/york/',
			additionalText: '(Choose Joshua Sideris from the designation list)'
		},
		{
			icon: 'faEnvelope',
			title: 'Get Updates',
			description: 'Stay informed about our campaign, events, and important news from Richmond Hill South.',
			buttonText: 'Subscribe',
			buttonLink: 'https://docs.google.com/forms/d/e/1FAIpQLSd-QKZU6KtD3ZA1JKlaGPQCg1elBhR65PCCS4aPTmV3Q06-Ng/viewform?usp=dialog'
		},
		{
			icon: 'faPeopleCarry',
			title: 'Volunteer',
			description: 'Join our team of dedicated volunteers and help make a difference in your community.',
			buttonText: 'Join Us',
			buttonLink: 'https://docs.google.com/forms/d/e/1FAIpQLSe6ogestHIK-CHglgaVI0-Qc4euuIraw8Yp-apoZHInkZH1hA/viewform?usp=dialog'
		},
		{
			icon: 'faComment',
			title: 'Contact Us',
			description: 'Have questions or want to share your concerns? Reach out to our campaign team.',
			buttonText: 'Get in Touch',
			buttonLink: 'https://docs.google.com/forms/d/e/1FAIpQLSdy4obzDpzxdhMtIAZtfRTMJLSo1hdoZfQuzNneeRiwJ1Ps_g/viewform?usp=dialog'
		}
	];

	return (
		<section id="get-involved" className="get-involved">
			<h2 className="section-title">Get Involved</h2>
			<div className="involvement-options">
				{involvementOptions.map((option, index) => (
					<InvolvementCard
						key={index}
						icon={option.icon}
						title={option.title}
						description={option.description}
						buttonText={option.buttonText}
						buttonLink={option.buttonLink}
						additionalText={option.additionalText}
					/>
				))}
			</div>
		</section>
	);
};

export default GetInvolved;