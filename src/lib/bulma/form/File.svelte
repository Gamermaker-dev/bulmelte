<script lang="ts">
	import type { Colors } from '$lib/bulma/types/Colors';
	import type { Sizes } from '$lib/bulma/types/Sizes';
	import clsx from 'clsx';

	export let value: any;
	export let label: string = 'Choose a file...';

	export let hasName: boolean = false;
	export let ctaIsRight: boolean = false;
	export let isFullWidth: boolean = false;
	export let isBoxed: boolean = false;

	export let color: Colors | undefined = undefined;
	export let size: Sizes | undefined = undefined;
	export let alignment: 'centered' | 'right' | undefined = undefined;

	let files: FileList | undefined = undefined;
	let fileName: string = '';

	$: if (typeof files !== 'undefined' && files.length > 0) fileName = files[0].name;
</script>

<div
	class={clsx(
		'file',
		hasName && 'has-name',
		ctaIsRight && 'is-right',
		isFullWidth && 'is-fullwidth',
		isBoxed && 'is-boxed',
		typeof color !== 'undefined' && `is-${color}`,
		typeof size !== 'undefined' && `is-${size}`,
		typeof alignment !== 'undefined' && `is-${alignment}`
	)}
>
	<label class="file-label">
		<input id="file_input" class="file-input" type="file" bind:value name="file" bind:files />
		<span class="file-cta">
			<span class="file-label">
				{label}
			</span>
			<span class="file-name">
				{fileName}
			</span>
		</span>
	</label>
</div>
