<script lang="ts">
	import clsx from 'clsx';
	import type { Sizes } from '../types/Sizes';

	export let size: Sizes | undefined = undefined;

	export let hasAddons: boolean = false;
</script>

<div class={clsx('tags', typeof size !== 'undefined' && `are-${size}`, hasAddons && 'has-addons')}>
	<slot />
</div>
