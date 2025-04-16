// Issue card interface
export interface IssueCardProps {
	icon: string;
	title: string;
	description: string;
	detailedTitle?: string;
	detailedContent?: React.ReactNode;
}

// Involvement card interface
export interface InvolvementCardProps {
	icon: string;
	title: string;
	description: string;
	buttonText: string;
	buttonLink?: string;
	onButtonClick?: () => void;
	additionalText?: string;
}

// Social link interface
export interface SocialLinkProps {
	platform: string;
	url: string;
	icon: string;
}