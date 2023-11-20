export type MenuItem = {
	label?: string;
	items?: {
		label: string;
		isActive?: boolean;
		link?: string;
		items?: {
			label: string;
			isActive?: boolean;
			link?: string;
		}[];
	}[];
};
