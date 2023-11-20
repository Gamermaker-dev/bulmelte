<script lang="ts">
	import clsx from 'clsx';

	export let icon: string;
</script>

<span class="panel-icon">
	<i class={clsx(icon)} aria-hidden="true" />
</span>
