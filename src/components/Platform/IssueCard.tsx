import React, { useState } from 'react';
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
import SlideUpModal from '../SlideUpModal/SlideUpModal';

const IssueCard: React.FC<IssueCardProps> = ({ 
	icon, 
	title, 
	description,
	detailedTitle, 
	detailedContent 
}) => {
	const [isModalOpen, setIsModalOpen] = useState(false);

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
		<>
			<div className="issue-card">
				<div className="issue-icon" aria-hidden="true">
					<FontAwesomeIcon icon={iconMap[icon]} />
				</div>
				<div className="issue-content">
					<h3>{title}</h3>
					<p>{description}</p>
					<br />
					{
						detailedTitle && (
							<button 
								className="btn-primary btn" 
								onClick={() => setIsModalOpen(true)}
								aria-label={`Learn more about ${title}`}
							>
								Learn More
							</button>
						)
					}
				</div>
			</div>

			{
				detailedContent && (
					<SlideUpModal
						isOpen={isModalOpen}
						onClose={() => setIsModalOpen(false)}
						title={detailedTitle || title}
					>
						{detailedContent}
					</SlideUpModal>
				)
			}
		</>
	);
};

export default IssueCard;