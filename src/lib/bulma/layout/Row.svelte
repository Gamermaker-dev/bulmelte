<script lang="ts">
	import clsx from 'clsx';

	type ResponsiveSizes = 'mobile' | 'desktop';

	export let responsive: ResponsiveSizes | undefined = undefined;
	export let isVertical: boolean = false;
	export let isMultiline: boolean = false;
	export let isCentered: boolean = false;

	export let isGapless: boolean = false;

	type GapSizes = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8;
	export let gap: GapSizes | undefined = undefined;
</script>

<div
	class={clsx(
		'columns',
		typeof responsive !== 'undefined' && `is-${responsive}`,
		isVertical && 'is-vcentered',
		isMultiline && 'is-multiline',
		isCentered && 'is-centered',
		isGapless && 'is-gapless',
		typeof gap !== 'undefined' && `is-variable is-${gap}`
	)}
>
	<slot />
</div>
