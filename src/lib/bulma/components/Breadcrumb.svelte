<script lang="ts">
	import clsx from 'clsx';
	import type { Alignments } from '../types/Alignments';
	import type { Sizes } from '../types/Sizes';
	import type { Breadcrumb } from '../types/Breadcrumb';
	import Icon from '../elements/Icon.svelte';
	import type { Separators } from '../types/Separators';

	export let breadcrumbs: Breadcrumb[] = [];

	export let alignment: Alignments | undefined = undefined;
	export let size: Sizes | undefined = undefined;
	export let separator: Separators | undefined = undefined;
</script>

<nav
	class={clsx(
		'breadcrumb',
		typeof alignment !== 'undefined' && `is-${alignment}`,
		typeof size !== 'undefined' && `is-${size}`,
		typeof separator !== 'undefined' && `has-${separator}-separator`
	)}
	aria-label="breadcrumbs"
>
	<ul>
		{#each breadcrumbs as crumb}
			{#if crumb.isActive}
				<li class="is-active">
					<a href={crumb.url} aria-current="page">
						{#if typeof crumb.icon !== 'undefined'}
							<Icon icon={crumb.icon} text={crumb.label} {size} />
						{:else}
							{crumb.label}
						{/if}
					</a>
				</li>
			{/if}
		{/each}
	</ul>
</nav>
