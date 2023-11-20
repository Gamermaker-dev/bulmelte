<script lang="ts">
	import clsx from 'clsx';

	export let items: string[] = [];
	export let type: 'lower-alpha' | 'lower-roman' | 'upper-alpha' | 'upper-roman' = 'upper-roman';
</script>

<ol class={clsx(`is-${type}`)}>
	{#each items as item}
		<li>{item}</li>
	{/each}
</ol>
