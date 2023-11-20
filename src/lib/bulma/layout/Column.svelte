<script lang="ts">
	import clsx from 'clsx';

	type ColumnSize =
		| 1
		| 2
		| 3
		| 4
		| 5
		| 6
		| 7
		| 8
		| 9
		| 10
		| 11
		| 12
		| 'full'
		| 'four-fifths'
		| 'three-quarters'
		| 'two-thirds'
		| 'three-fifths'
		| 'half'
		| 'two-fifths'
		| 'one-third'
		| 'one-quarter'
		| 'one-fifth';

	type NarrowSize = 'mobile' | 'tablet' | 'touch' | 'desktop' | 'widescreen' | 'fullhd' | 'normal';

	export let size: ColumnSize | undefined = undefined;
	export let offset: ColumnSize | undefined = undefined;
	export let narrow: NarrowSize | undefined = undefined;

	type ResponsiveSizes =
		| 'three-quarters-mobile'
		| 'two-thirds-tablet'
		| 'half-desktop'
		| 'one-thrid-widescreen'
		| 'one-quarter-fullhd';
	export let responsive: ResponsiveSizes | undefined = undefined;
</script>

<div
	class={clsx(
		'column',
		typeof size !== 'undefined' && `is-${size}`,
		typeof offset !== 'undefined' && `is-offset-${offset}`,
		typeof narrow !== 'undefined' && `is-narrow-${narrow}`,
		typeof responsive !== 'undefined' && `is-${responsive}`
	)}
>
	<slot />
</div>
