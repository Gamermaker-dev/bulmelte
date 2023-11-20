<script lang="ts">
	import clsx from 'clsx';
	import type { Colors } from '../types/Colors';
	import type { Sizes } from '../types/Sizes';

	export let icon: string;
	export let text: string | undefined = undefined;

	$: hasText = typeof text !== 'undefined';

	export let color: Colors | undefined = undefined;
	export let size: Sizes | undefined = undefined;
	export let placement: 'left' | 'right' | undefined = undefined; // for inputs with icons
</script>

<span
	class={clsx(
		'icon',
		typeof color !== 'undefined' && `has-text-${color}`,
		typeof size !== 'undefined' && `is-${size}`,
		typeof placement !== 'undefined' && `is-${placement}`
	)}
>
	<i class={clsx(icon)} />
</span>
{#if hasText}
	<span>{text}</span>
{/if}
