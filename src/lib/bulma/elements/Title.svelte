<script lang="ts">
	import clsx from 'clsx';

	export let size: 1 | 2 | 3 | 4 | 5 | 6 | undefined = undefined;
</script>

<p class={clsx('title', typeof size !== 'undefined' && `is-${size}`)}>
	<slot />
</p>
