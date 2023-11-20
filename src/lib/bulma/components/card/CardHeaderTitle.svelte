<script lang="ts">
	import clsx from 'clsx';

	export let isCentered: boolean = false;
</script>

<div class={clsx('card-header-title', isCentered && 'is-centered')}>
	<slot />
</div>
