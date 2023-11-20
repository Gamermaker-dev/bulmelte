<script lang="ts">
	import type { Colors } from '../types/Colors';
	import type { Sizes } from '../types/Sizes';
	import clsx from 'clsx';

	export let color: Colors | undefined = undefined;
	export let size: Sizes | undefined = undefined;

	export let max: number = 100;
	export let value: number | undefined = undefined;
</script>

<progress
	class={clsx(
		'progress',
		typeof color !== undefined && `is-${color}`,
		typeof size !== 'undefined' && `is-${size}`
	)}
	{max}
	{value}>{value ?? 0}%</progress
>
