<script lang="ts">
	import clsx from 'clsx';
	import { createEventDispatcher } from 'svelte';
	import type { Alignments } from '../types/Alignments';
	import type { Sizes } from '../types/Sizes';

	export let page: number;
	export let totalPages: number;

	export let placement: Alignments | undefined = undefined;
	export let size: Sizes | undefined = undefined;
	export let rounded: boolean = false;

	const dispatch = createEventDispatcher<{
		pageChange: { page: number };
	}>();

	const goToPage = (newPage: number) => {
		page = newPage;
		dispatch('pageChange', { page });
	};

	$: hasAlignment = placement != undefined;
	$: hasSize = size != undefined;

	$: previousPage = page - 1;
	$: nextPage = page + 1;
	$: allOtherPages = Array.from({ length: totalPages })
		.map((v, i) => i + 1)
		.filter((v) => v !== 1 || v !== totalPages);
</script>

<!-- svelte-ignore a11y-no-redundant-roles -->
<nav
	class={clsx(
		'pagination',
		hasAlignment && `is-${placement}`,
		hasSize && `is-${size}`,
		rounded && 'is-rounded'
	)}
	role="navigation"
	aria-label="pagination"
>
	<a
		class={clsx('pagination-previous', page === 1 && 'is-disabled')}
		on:click={() => {
			if (page > 1) goToPage(page - 1);
		}}>Previous</a
	>
	<a
		class={clsx('pagination-next', page === totalPages && 'is-disabled')}
		on:click={() => {
			if (page < totalPages) goToPage(page + 1);
		}}>Next Page</a
	>
	<ul class="pagination-list">
		<li>
			<a
				class={clsx('pagination-link', page === 1 && 'is-current')}
				aria-label="Goto page 1"
				on:click={() => goToPage(1)}>1</a
			>
		</li>
		{#if totalPages > 5}
			{#if page > 2}
				<li><span class="pagination-ellipsis">&hellip;</span></li>
			{/if}
			<li>
				<a
					class="pagination-link"
					aria-label="Goto page {previousPage}"
					on:click={() => goToPage(previousPage)}>{previousPage}</a
				>
				<a
					class="pagination-link is-current"
					aria-label="Goto page {page}"
					on:click={() => goToPage(page)}>{page}</a
				>
				<a
					class="pagination-link"
					aria-label="Goto page {nextPage}"
					on:click={() => goToPage(nextPage)}>{nextPage}</a
				>
			</li>
			{#if page < totalPages - 1}
				<li><span class="pagination-ellipsis">&hellip;</span></li>
			{/if}
		{:else}
			{#each allOtherPages as otherPage}
				<li>
					<a
						class={clsx('pagination-link', otherPage === page && 'is-current')}
						on:click={() => goToPage(otherPage)}>{otherPage}</a
					>
				</li>
			{/each}
		{/if}
		<li>
			<a
				class={clsx('pagination-link', page === totalPages && 'is-current')}
				aria-label="Goto page {totalPages}"
				on:click={() => goToPage(totalPages)}>{totalPages}</a
			>
		</li>
	</ul>
</nav>
