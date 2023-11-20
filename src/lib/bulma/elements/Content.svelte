<script lang="ts">
	import clsx from 'clsx';
	import type { Sizes } from '../types/Sizes';

	export let size: Sizes | undefined = undefined;
</script>

<div class={clsx('content', typeof size !== 'undefined' && `is-${size}`)}>
	<slot />
</div>
