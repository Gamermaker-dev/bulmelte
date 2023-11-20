<script lang="ts">
	import type { Colors } from '$lib/bulma/types/Colors';
	import type { Sizes } from '$lib/bulma/types/Sizes';
	import clsx from 'clsx';
	import Icon from '../elements/Icon.svelte';

	export let value: string;
	export let type: 'text' | 'password' | 'email' | 'tel' = 'text';

	export let color: Colors | undefined = undefined;
	export let size: Sizes | undefined = undefined;

	export let isRounded: boolean = false;

	export let isHovered: boolean = false;
	export let isFocused: boolean = false;
	export let isLoading: boolean = false;
	export let isStatic: boolean = false;

	export let disabled: boolean = false;
	export let readonly: boolean = false;

	export let leftIcon: string = '';
	export let rightIcon: string = '';

	$: hasLeftIcon = leftIcon.length > 0;
	$: hasRightIcon = rightIcon.length > 0;
</script>

<div
	class={clsx(
		'control',
		isLoading && 'is-loading',
		typeof size !== 'undefined' && `is-${size}`,
		hasLeftIcon && 'has-icons-left',
		hasRightIcon && 'has-icons-right'
	)}
>
	<input
		class={clsx(
			'input',
			typeof color !== 'undefined' && `is-${color}`,
			typeof size !== 'undefined' && `is-${size}`,
			isRounded && 'is-rounded',
			isHovered && 'is-hovered',
			isFocused && 'is-focused',
			isStatic && 'is-static'
		)}
		{type}
		{disabled}
		{readonly}
		{value}
		on:change={(e) => (value = e.currentTarget.value)}
	/>
	{#if hasLeftIcon}
		<Icon icon={leftIcon} placement="left" />
	{/if}
	{#if hasRightIcon}
		<Icon icon={rightIcon} placement="right" />
	{/if}
</div>
