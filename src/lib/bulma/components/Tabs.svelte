<script lang="ts">
	import clsx from 'clsx';
	import { createEventDispatcher } from 'svelte';
	import type { Alignments } from '../types/Alignments';
	import Icon from '../elements/Icon.svelte';
	import type { Sizes } from '../types/Sizes';

	export let tab: number;
	export let tabs: string[];

	const dispatch = createEventDispatcher<{
		tabChange: { tab: number };
	}>();

	export let alignment: Alignments | undefined = undefined;
	export let size: Sizes | undefined = undefined;
	export let boxed: boolean = false;
	export let toggle: boolean = false;
	export let rounded: boolean = false;
	export let fullwidth: boolean = false;
	export let icon: string = '';

	$: hasAlignment = alignment != undefined;
	$: hasSize = size != undefined;
	$: hasIcon = icon.length > 0;
</script>

<div
	class={clsx(
		'tabs',
		hasAlignment && `is-${alignment}`,
		hasSize && `is-${size}`,
		boxed && 'is-boxed',
		toggle && 'is-toggle',
		rounded && 'is-toggle-rounded',
		fullwidth && 'is-fullwidth'
	)}
>
	<ul>
		{#each tabs as _t, _i}
			<li class={clsx(_i === tab && 'is-active')}>
				<a
					on:click|preventDefault={() => {
						tab = _i;
						dispatch('tabChange', { tab });
					}}
				>
					{#if hasIcon}
						<Icon {icon} />
						<span>{_t}</span>
					{:else}
						{_t}
					{/if}
				</a>
			</li>
		{/each}
	</ul>
</div>
