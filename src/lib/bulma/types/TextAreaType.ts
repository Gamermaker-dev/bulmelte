import type { Colors } from './Colors';
import type { Sizes } from './Sizes';

export type TextAreaType = {
	value: any;
	type: 'textarea';
	color?: Colors;
	size?: Sizes;
	isHovered?: boolean;
	isFocused?: boolean;
	isLoading?: boolean;
	isStatic?: boolean;
	disabled?: boolean;
	readonly?: boolean;
	loadingSize?: Sizes;
	hasFixedSize?: boolean;
};
