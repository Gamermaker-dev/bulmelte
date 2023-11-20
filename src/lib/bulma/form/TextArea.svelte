<script lang="ts">
	import type { Colors } from '$lib/bulma/types/Colors';
	import type { Sizes } from '$lib/bulma/types/Sizes';
	import clsx from 'clsx';

	export let value: string;
	export let placeholder: string | undefined = undefined;
	export let rows: number | undefined = undefined;

	export let color: Colors | undefined = undefined;
	export let size: Sizes | undefined = undefined;

	export let isHovered: boolean = false;
	export let isFocused: boolean = false;
	export let isLoading: boolean = false;
	export let hasFixedSize: boolean = false;

	export let loadingSize: Sizes | undefined = undefined;

	export let disabled: boolean = false;
	export let readonly: boolean = false;
</script>

<div
	class={clsx(
		'control',
		isLoading && 'is-loading',
		typeof loadingSize !== 'undefined' && `is-${loadingSize}`
	)}
>
	<textarea
		class={clsx(
			'textarea',
			typeof color !== 'undefined' && `is-${color}`,
			typeof size !== 'undefined' && `is-${size}`,
			isHovered && 'is-hovered',
			isFocused && 'is-focused',
			hasFixedSize && 'has-fixed-size'
		)}
		{placeholder}
		{rows}
		bind:value
		{disabled}
		{readonly}
	/>
</div>
