<script lang="ts">
	import clsx from 'clsx';
	import type { Sizes } from '../types/Sizes';

	export let size: Sizes | undefined = undefined;
	export let hasAddons: boolean = false;
	export let alignment: 'centered' | 'right' | undefined = undefined;
</script>

<div
	class={clsx(
		'buttons',
		typeof size !== 'undefined' && `are-${size}`,
		hasAddons && 'has-addons',
		typeof alignment !== 'undefined' && `is-${alignment}`
	)}
>
	<slot />
</div>
