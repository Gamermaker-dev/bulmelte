<script lang="ts">
	import clsx from 'clsx';
	import type { Colors } from '../types/Colors';
	import type { Sizes } from '../types/Sizes';

	export let color: Colors | undefined = undefined;
	export let isLight: boolean = false;
	export let isResponsive: boolean = false;
	export let isFullwidth: boolean = false;
	export let isOutlined: boolean = false;
	export let isInverted: boolean = false;
	export let isRounded: boolean = false;
	export let isHovered: boolean = false;
	export let isFocused: boolean = false;
	export let isActive: boolean = false;
	export let isLoading: boolean = false;
	export let isStatic: boolean = false;
	export let isSelected: boolean = false;

	export let disabled: boolean = false;

	export let size: Sizes | undefined = undefined;
</script>

<button
	class={clsx(
		'button',
		typeof color !== 'undefined' && `is-${color}`,
		typeof size !== 'undefined' && `is-${size}`,
		isResponsive && 'is-responsive',
		isLight && 'is-light',
		isFullwidth && 'is-fullwidth',
		isOutlined && 'is-outlined',
		isInverted && 'is-inverted',
		isRounded && 'is-rounded',
		isHovered && 'is-hovered',
		isFocused && 'is-focused',
		isActive && 'is-active',
		isLoading && 'is-loading',
		isStatic && 'is-static',
		isSelected && 'is-selected'
	)}
	{disabled}
	on:click
>
	<slot />
</button>
