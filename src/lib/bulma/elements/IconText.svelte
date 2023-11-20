<script lang="ts">
	import clsx from 'clsx';
	import type { Colors } from '../types/Colors';

	export let color: Colors | undefined = undefined;
</script>

<span class={clsx('icon-text', typeof color !== 'undefined' && `has-text-${color}`)}>
	<slot />
</span>
