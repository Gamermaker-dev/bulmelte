<script lang="ts">
	import Delete from '$lib/bulma/elements/Delete.svelte';
	import clsx from 'clsx';

	export let open: boolean = false;
	export let card: boolean = false;
</script>

<div class={clsx('modal', open && 'is-active')}>
	<div class="modal-background" />
	{#if card}
		<div class="modal-card">
			<slot name="head">
				<slot name="title" />
				<Delete />
			</slot>
			<slot name="body" />
			<slot name="foooter" />
		</div>
	{:else}
		<div class="modal-content">
			<slot />
		</div>
	{/if}
	<button class="modal-close is-large" aria-label="close" on:click={() => (open = false)} />
</div>
