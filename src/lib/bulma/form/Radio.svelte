<script lang="ts">
	import type { RadioButton } from '$lib/bulma/types/RadioButton';

	export let value: any;
	export let name: string;
	export let options: RadioButton[];
</script>

<div class="control">
	{#each options as opt}
		<label class="radio" disabled={opt.disabled} on:click={() => (value = opt.value)}>
			<input type="radio" {name} disabled={opt.disabled} checked={opt.value === value} />
			{opt.label}
		</label>
	{/each}
</div>
