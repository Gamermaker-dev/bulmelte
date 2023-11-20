<script lang="ts">
	import type { Colors } from '$lib/bulma/types/Colors';
	import type { Sizes } from '$lib/bulma/types/Sizes';
	import clsx from 'clsx';
	import Icon from '../elements/Icon.svelte';

	export let value: any;
	export let options: { label: string; value: any }[] = [];

	export let color: Colors | undefined = undefined;
	export let size: Sizes | undefined = undefined;

	export let isMultiple: boolean = false;
	export let multipleLength: number | undefined = undefined;

	export let isRounded: boolean = false;
	export let isHovered: boolean = false;
	export let isFocused: boolean = false;
	export let isActive: boolean = false;
	export let isLoading: boolean = false;

	export let icon: string = '';
	export let iconSize: Sizes | undefined = undefined;

	$: hasIcon = icon.length > 0;

	$: if (typeof multipleLength === 'undefined') multipleLength = 1;
</script>

<div class={clsx('control', hasIcon && 'has-icons-left')}>
	<div
		class={clsx(
			'select',
			isMultiple && 'is-multiple',
			typeof color !== 'undefined' && `is-${color}`,
			typeof size !== 'undefined' && `is-${size}`,
			isRounded && 'is-rounded',
			isLoading && 'is-loading'
		)}
	>
		<select
			class={clsx(isHovered && 'is-hovered', isFocused && 'is-focused', isActive && 'is-active')}
			multiple={isMultiple}
			size={multipleLength}
			on:change={(e) => (value = e.currentTarget.value)}
		>
			{#each options as opt}
				<option value={opt.value}>{opt.label}</option>
			{/each}
		</select>
	</div>
	{#if hasIcon}
		<Icon {icon} placement="left" size={iconSize} />
	{/if}
</div>
