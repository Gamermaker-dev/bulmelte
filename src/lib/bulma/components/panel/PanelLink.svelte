<script lang="ts">
	import clsx from 'clsx';
	import PanelIcon from './PanelIcon.svelte';

	export let label: string;
	export let active: boolean = false;
	export let icon: string = '';

	$: hasIcon = icon.length > 0;
</script>

<a class={clsx('panel-block', active && 'is-active')} on:click
	>{#if hasIcon}
		<PanelIcon {icon} />
	{/if}{label}</a
>
