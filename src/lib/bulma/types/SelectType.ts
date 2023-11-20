import type { Colors } from './Colors';
import type { Sizes } from './Sizes';

export type SelectType = {
	value: any;
	type: 'select';
    options: { label: string; value: any }[];
	color?: Colors;
	size?: Sizes;
    isMultiple?: boolean;
    multipleLength?: number;
	isRounded?: boolean;
	isHovered?: boolean;
	isFocused?: boolean;
    isActive?: boolean;
	isLoading?: boolean;
	isStatic?: boolean;
	disabled?: boolean;
	readonly?: boolean;
	icon?: string;
	iconSize?: Sizes;
};
