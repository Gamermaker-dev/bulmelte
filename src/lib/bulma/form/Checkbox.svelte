<script lang="ts">
	export let value: any = undefined;
	export let checked: boolean = false;
	export let label: string | undefined = undefined;
	export let disabled: boolean = false;

	$: hasLabel = typeof label !== 'undefined';
</script>

<label class="checkbox" {disabled}>
	<input type="checkbox" bind:value bind:checked {disabled} on:change />
	{#if hasLabel}{label}{/if}
</label>
