import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
	faHandHoldingDollar,
	faEnvelope,
	faPeopleCarry,
	faComment
} from '@fortawesome/free-solid-svg-icons';
import { InvolvementCardProps } from '../../types';

const InvolvementCard: React.FC<InvolvementCardProps> = ({
	icon,
	title,
	description,
	buttonText,
	buttonLink,
	additionalText
}) => {
	// Icon mapping
	const iconMap: { [key: string]: any } = {
		'faHandHoldingDollar': faHandHoldingDollar,
		'faEnvelope': faEnvelope,
		'faPeopleCarry': faPeopleCarry,
		'faComment': faComment
	};

	return (
		<div className="involvement-card">
			<div className="involvement-icon" aria-hidden="true">
				<FontAwesomeIcon icon={iconMap[icon]} />
			</div>
			<h3>{title}</h3>
			<p>{description}</p>
			<a href={buttonLink} className="btn" target="_blank" rel="noopener noreferrer">
				{buttonText}
			</a>
			{additionalText && <small>{additionalText}</small>}
		</div>
	);
};

export default InvolvementCard;