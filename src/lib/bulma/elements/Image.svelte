<script lang="ts">
	import clsx from 'clsx';
	import type { ImageSizes } from '../types/ImageSizes';
	import type { Ratios } from '../types/Ratios';

	export let src: string;

	export let size: ImageSizes | undefined = undefined;
	export let ratio: Ratios | undefined = undefined;

	export let isRounded: boolean = false;
</script>

<figure
	class={clsx(
		'image',
		typeof size !== 'undefined' && `is-${size}x${size}`,
		typeof ratio !== 'undefined' && `is-${ratio}`
	)}
>
	<img class={clsx(isRounded && 'is-rounded')} {src} />
</figure>
