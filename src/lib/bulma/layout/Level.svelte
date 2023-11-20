<script lang="ts">
	import clsx from 'clsx';

	export let isMobile: boolean = false;

	$: hasLeft = $$slots.left;
	$: hasRight = $$slots.right;
</script>

<nav class={clsx('level', isMobile && 'is-mobile')}>
	{#if hasLeft}
		<div class="level-left">
			<slot name="left" />
		</div>
	{/if}
	<slot />
	{#if hasRight}
		<div class="level-right">
			<slot name="right" />
		</div>
	{/if}
</nav>
