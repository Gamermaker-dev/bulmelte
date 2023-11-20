import type { Colors } from './Colors';
import type { Sizes } from './Sizes';

export type TextFieldType = {
	value: any;
	type: 'text' | 'password' | 'email' | 'tel';
	color?: Colors;
	size?: Sizes;
	isRounded?: boolean;
	isHovered?: boolean;
	isFocused?: boolean;
	isLoading?: boolean;
	isStatic?: boolean;
	disabled?: boolean;
	readonly?: boolean;
	leftIcon?: string;
	rightIcon?: string;
	loadingSize?: Sizes;
};
