<script lang="ts">
	import clsx from 'clsx';
	import Button from '../elements/Button.svelte';

	export let label: string = '';
	export let items: { label?: string; value?: string; href?: string; hasDivider?: boolean }[] = [];

	export let isActive: boolean = false;
	export let isHoverable: boolean = false;
	export let isRight: boolean = false;
	export let isUp: boolean = false;
</script>

<div
	class={clsx(
		'dropdown',
		isActive && 'is-active',
		isHoverable && 'is-hoverable',
		isRight && 'is-right',
		isUp && 'is-up'
	)}
>
	<div class="dropdown-trigger">
		<Button on:click={() => (isActive = !isActive)}>{label}</Button>
		<!-- TODO: Add icon for dropdown -->
	</div>
	<div class="dropdown-menu">
		<div class="dropdown-content">
			{#each items as item}
				{#if typeof item.href !== 'undefined'}
					<a href={item.href} class="dropdown-item">{item.value}</a>
				{:else}
					<div class="dropdown-item" on:click>{item.label}</div>
				{/if}
				{#if item.hasDivider}
					<hr class="dropdown-divider" />
				{/if}
			{/each}
		</div>
	</div>
</div>
