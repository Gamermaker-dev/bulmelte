<script lang="ts">
	import clsx from 'clsx';

	export let active: boolean = false;
</script>

<a
	role="button"
	class={clsx('navbar-burger', active && 'is-active')}
	aria-label="menu"
	aria-expanded="false"
	on:click
>
	<span aria-hidden="true" />
	<span aria-hidden="true" />
	<span aria-hidden="true" />
</a>
