<script lang="ts">
	import clsx from 'clsx';
	import Delete from '../elements/Delete.svelte';
	import type { Colors } from '../types/Colors';
	import type { Sizes } from '../types/Sizes';

	export let message: string;
	export let header: string = '';
	export let color: Colors | undefined = undefined;
	export let size: Sizes | undefined = undefined;

	$: hasColor = color != undefined;
	$: hasSize = size != undefined;
	$: hasHeader = header.length > 0;
</script>

<article class={clsx('message', hasColor && `is-${color}`, hasSize && `is-${size}`)}>
	{#if hasHeader}
		<div class="message-header">
			<p>{header}</p>
			<Delete />
		</div>
	{/if}
	<div class="message-body">
		{@html message}
	</div>
</article>
