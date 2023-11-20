import type { Colors } from './Colors';

export type NavbarItemType = {
	label: string;
	url?: string;
	dropdownItems?: {
		label: string;
		url: string;
		hasDivider?: boolean;
	}[];
	placement: 'start' | 'end';
};
