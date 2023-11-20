import type { RadioButton } from "./RadioButton";

export type RadioType = {
	type: 'radio';
	value: any;
	name: string;
	options: RadioButton[];
};
