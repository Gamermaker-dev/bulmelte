<script lang="ts">
	import clsx from 'clsx';
	import type { Colors } from '../types/Colors';
	import type { Sizes } from '../types/Sizes';
	import Delete from './Delete.svelte';
	import { createEventDispatcher } from 'svelte';

	export let color: Colors | undefined = undefined;
	export let size: Sizes | undefined = undefined;

	export let isLight: boolean = false;

	export let isRounded: boolean = false;
	export let isDelete: boolean = false;

	export let appendDelteButton: boolean = false;

	const dispatch = createEventDispatcher();
</script>

<span
	class={clsx(
		'tag',
		typeof color !== 'undefined' && `is-${color}`,
		isLight && 'is-light',
		typeof size !== 'undefined' && `is-${size}`,
		isRounded && 'is-rounded',
		isDelete && 'is-delete'
	)}
	on:click
>
	<slot />
	{#if appendDelteButton}
		<Delete on:click={() => dispatch('close')} />
	{/if}
</span>
