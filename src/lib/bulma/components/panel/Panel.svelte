<script lang="ts">
	import clsx from 'clsx';
	import type { Colors } from '../../types/Colors';

	export let title: string;
	export let color: Colors | undefined = undefined;

	$: hasColor = color != undefined;
</script>

<nav class={clsx('panel', hasColor && `is-${color}`)}>
	<p class="panel-heading">
		{title}
	</p>
	<slot />
</nav>
