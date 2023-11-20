<script lang="ts">
	import type { Tables } from '../types/Tables';
	import clsx from 'clsx';
	import type { TableData } from '../types/TableData';

	export let types: Tables[] = [];
	export let headers: string[] = [];
	export let data: TableData[] = [];

	let tableStyles = '';

	$: {
		types.forEach((_t) => {
			tableStyles = `${tableStyles}is-${_t} `;
		});

		tableStyles = tableStyles.trim();
	}
</script>

<table class={clsx('table', types.length > 0 && `${tableStyles}`)}>
	<thead>
		<tr>
			{#each headers as header}
				<th>{header}</th>
			{/each}
		</tr>
	</thead>
	<tbody>
		{#each data as row}
			<tr class={clsx(row.isSelected && 'is-selected')}>
				{#each row.value as cell}
					<td>{cell}</td>
				{/each}
			</tr>
		{/each}
	</tbody>
</table>
