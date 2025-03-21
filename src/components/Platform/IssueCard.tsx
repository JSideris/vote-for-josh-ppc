import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
	faShoppingCart,
	faGlobe,
	faLeaf,
	faHospital,
	faShieldAlt,
	faBalanceScale
} from '@fortawesome/free-solid-svg-icons';
import { IssueCardProps } from '../../types';

const IssueCard: React.FC<IssueCardProps> = ({ icon, title, description }) => {
	// Icon mapping
	const iconMap: { [key: string]: any } = {
		'faGlobe': faGlobe,
		'faShoppingCart': faShoppingCart,
		'faLeaf': faLeaf,
		'faHospital': faHospital,
		'faShieldAlt': faShieldAlt,
		'faBalanceScale': faBalanceScale
	};

	return (
		<div className="issue-card">
			<div className="issue-icon" aria-hidden="true">
				<FontAwesomeIcon icon={iconMap[icon]} />
			</div>
			<div className="issue-content">
				<h3>{title}</h3>
				<p>{description}</p>
			</div>
		</div>
	);
};

export default IssueCard;