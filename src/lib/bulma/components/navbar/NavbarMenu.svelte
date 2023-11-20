<script lang="ts">
	import clsx from "clsx";

    export let active: boolean = false;
</script>

<div class={clsx('navbar-menu', active && 'is-active')}>
    <slot name="start" />
    <slot name="end" />
</div>
