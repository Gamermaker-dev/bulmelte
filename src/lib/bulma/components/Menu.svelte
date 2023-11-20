<script lang="ts">
	import clsx from 'clsx';
	import type { MenuItem } from '../types/MenuItem';

	export let menuList: MenuItem[] = [];
</script>

<aside class="menu">
	{#each menuList as item}
		{#if item.label != undefined}
			<p class="menu-label">{item.label}</p>
		{/if}
		{#if item.items != undefined}
			<ul class="menu-list">
				{#each item.items as menuItem}
					<li>
						{#if menuItem.items != undefined}
							<ul>
								{#each menuItem.items as subItem}
									<li>
										<a href={subItem.link} class={clsx(subItem.isActive && 'is-active')}
											>{subItem.label}</a
										>
									</li>
								{/each}
							</ul>
						{:else}
							<a href={menuItem.link} class={clsx(menuItem.isActive && 'is-active')}
								>{menuItem.label}</a
							>
						{/if}
					</li>
				{/each}
			</ul>
		{/if}
	{/each}
</aside>
