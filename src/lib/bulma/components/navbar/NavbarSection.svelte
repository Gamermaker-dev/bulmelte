<script lang="ts">
	import type { NavbarItemType } from '$lib/bulma/types/NavbarItem';
	import clsx from 'clsx';
	import NavbarItem from './NavbarItem.svelte';
	import NavbarDivider from './NavbarDivider.svelte';

	export let section: 'start' | 'end';
	export let items: NavbarItemType[] = [];
</script>

<div class={clsx(`navbar-${section}`)}>
	{#each items as item}
		{#if typeof item.dropdownItems === 'undefined'}
			<NavbarItem isLink href={item.url}>{item.label}</NavbarItem>
		{:else}
			<NavbarItem isDropdown>
				{#each item.dropdownItems as _d}
					<NavbarItem isLink href={_d.url}>{_d.label}</NavbarItem>
					{#if _d.hasDivider}
						<NavbarDivider />
					{/if}
				{/each}
			</NavbarItem>
		{/if}
	{/each}
</div>
