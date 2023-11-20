import type { Colors } from './Colors';
import type { Sizes } from './Sizes';

export type FileType = {
	type: 'file';
	value: string;
	label?: string;
	hasName?: boolean;
	ctaIsRight?: boolean;
	isFullWidth?: boolean;
	isBoxed?: boolean;
	color?: Colors;
	size?: Sizes;
	alignment?: 'centered' | 'right';
};
