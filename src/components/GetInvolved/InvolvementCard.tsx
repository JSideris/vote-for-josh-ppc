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
	onButtonClick,
	additionalText
}) => {
	// Icon mapping
	const iconMap: { [key: string]: any } = {
		'faHandHoldingDollar': faHandHoldingDollar,
		'faEnvelope': faEnvelope,
		'faPeopleCarry': faPeopleCarry,
		'faComment': faComment
	};

	const buttonStyle = {
		fontFamily: "Raleway, Cabin, 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
		fontSize: "1rem",
		lineHeight: "1.6"
	};

	return (
		<div className="involvement-card">
			<div className="involvement-icon" aria-hidden="true">
				<FontAwesomeIcon icon={iconMap[icon]} />
			</div>
			<h3>{title}</h3>
			<p>{description}</p>
			{onButtonClick ? (
				<button onClick={onButtonClick} className="btn" style={buttonStyle}>
					{buttonText}
				</button>
			) : (
				<a href={buttonLink} className="btn" target="_blank" rel="noopener noreferrer">
					{buttonText}
				</a>
			)}
			{additionalText && <small>{additionalText}</small>}
		</div>
	);
};

export default InvolvementCard;