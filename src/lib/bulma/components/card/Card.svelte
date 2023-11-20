<script lang="ts">
	$: hasHeader = $$slots.header;
	$: hasImage = $$slots.image;
	$: hasFooter = $$slots.footer;
</script>

<div class="card">
	{#if hasHeader}
		<div class="card-header">
			<slot name="header" />
		</div>
	{/if}
	{#if hasImage}
		<div class="card-image">
			<slot name="image" />
		</div>
	{/if}
	<div class="card-content">
		<slot />
	</div>
	{#if hasFooter}
		<div class="card-footer">
			<slot name="footer" />
		</div>
	{/if}
</div>
