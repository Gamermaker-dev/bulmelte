import type { Colors } from "./Colors";
import type { InputType } from "./InputType";
import type { Sizes } from "./Sizes";

export type FieldType = {
    label: string;
	input: InputType[];
    hasAddons?: boolean;
    groupAlignment?: 'centered' | 'right';
    multiline?: boolean;
    horizontal?: boolean;
    hint?: string;
    error?: string;
    success?: string;
}