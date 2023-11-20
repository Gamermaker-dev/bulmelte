<script lang="ts">
	import type { Sizes } from '$lib/bulma/types/Sizes';
	import clsx from 'clsx';

	export let isParent: boolean = false;
	export let isChild: boolean = false;
	export let isAncestor: boolean = false;

	export let isVertical: boolean = false;
	export let size: Sizes | undefined = undefined;

	$: hasSize = typeof size !== 'undefined';
</script>

<div
	class={clsx(
		'tile',
		isAncestor && 'is-ancestor',
		isParent && 'is-parent',
		isChild && 'is-child',
		isVertical && 'is-vertical',
		hasSize && `is-${size}`
	)}
>
	<slot />
</div>
