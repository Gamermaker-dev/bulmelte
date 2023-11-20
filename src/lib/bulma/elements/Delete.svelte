<script lang="ts">
	import type { Sizes } from '../types/Sizes';
	import clsx from 'clsx';

	export let size: Sizes | undefined = undefined;
</script>

<button class={clsx('delete', typeof size !== 'undefined' && `is-${size}`)} on:click />
