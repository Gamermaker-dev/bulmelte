<script lang="ts">
	import clsx from 'clsx';
	import { createEventDispatcher } from 'svelte';

	let tab: number;
	let tabs: string[] = [];

	const dispatch = createEventDispatcher<{
		tabChange: { tab: number };
	}>();
</script>

<p class="panel-tabs">
	{#each tabs as _t, _i}
		<a
			class={clsx(tab === _i && 'is-active')}
			on:click={() => {
				tab = _i;
				dispatch('tabChange', { tab });
			}}>{_t}</a
		>
	{/each}
</p>
