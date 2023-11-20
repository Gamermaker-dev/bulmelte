<script lang="ts">
	import clsx from 'clsx';

	export let isLink: boolean = false;
	export let isDropdown: boolean = false;
	export let href: string = '#';
</script>

{#if isLink}
	<a class="navbar-item" {href}>
		<slot />
	</a>
{:else}
	<div class={clsx('navbar-item', isDropdown && 'has-dropdown is-hoverable')}>
		<slot />
	</div>
{/if}
