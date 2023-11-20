<script lang="ts">
	import clsx from 'clsx';

	export let centered: boolean = false;
</script>

<div class={clsx('level-item', centered && 'has-text-centered')}>
	<slot />
</div>
