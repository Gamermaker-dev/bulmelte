<script lang="ts">
	import clsx from 'clsx';
	import type { Sizes } from '../../types/Sizes';

	export let size: Sizes | undefined = undefined;
</script>

<section class={clsx('section', typeof size !== 'undefined' && `is-${size}`)}>
	<slot />
</section>
