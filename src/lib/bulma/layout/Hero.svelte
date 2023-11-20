<script lang="ts">
	import clsx from 'clsx';
	import type { Colors } from '../../types/Colors';

	export let color: Colors | undefined = undefined;
	export let size:
		| 'small'
		| 'medium'
		| 'large'
		| 'halfheight'
		| 'fullheight'
		| 'fullheight-with-navbar'
		| undefined = undefined;

	$: hasHead = $$slots.head;
	$: hasFoot = $$slots.foot;
</script>

<section
	class={clsx(
		'hero',
		typeof color !== 'undefined' && `is-${color}`,
		typeof size !== 'undefined' && `is-${size}`
	)}
>
	{#if hasHead}
		<div class="hero-head">
			<slot name="head" />
		</div>
	{/if}
	<div class="hero-body">
		<slot />
	</div>
	{#if hasFoot}
		<div class="hero-foot">
			<slot name="foot" />
		</div>
	{/if}
</section>
