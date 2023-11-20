import type { CheckboxType } from './CheckboxType';
import type { FileType } from './FileType';
import type { RadioType } from './RadioType';
import type { SelectType } from './SelectType';
import type { TextAreaType } from './TextAreaType';
import type { TextFieldType } from './TextFieldType';

export type InputType =
	| TextFieldType
	| TextAreaType
	| SelectType
	| CheckboxType
	| RadioType
	| FileType;
