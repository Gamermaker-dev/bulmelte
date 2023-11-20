<script lang="ts">
	import type { FieldType } from '$lib/bulma/types/FieldType';
	import clsx from 'clsx';
	import Input from './Input.svelte';
	import TextArea from './TextArea.svelte';
	import Select from './Select.svelte';
	import Checkbox from './Checkbox.svelte';
	import Radio from './Radio.svelte';
	import File from './File.svelte';

	export let field: FieldType;

	$: isGrouped = field.input.length > 0;
</script>

<div
	class={clsx(
		'field',
		isGrouped && 'is-grouped',
		typeof field.groupAlignment !== 'undefined' && `is-grouped-${field.groupAlignment}`,
		field.hasAddons && 'has-addons'
	)}
>
	{#each field.input as input}
		<label class="label">{field.label}</label>
		{#if input.type === 'textarea'}
			<TextArea
				bind:value={input.value}
				color={input.color}
				size={input.size}
				isFocused={input.isFocused}
				isHovered={input.isHovered}
				isLoading={input.isLoading}
				loadingSize={input.loadingSize}
				hasFixedSize={input.hasFixedSize}
				disabled={input.disabled}
				readonly={input.readonly}
			/>
		{:else if input.type === 'select'}
			<Select
				bind:value={input.value}
				options={input.options}
				color={input.color}
				size={input.size}
				isMultiple={input.isMultiple}
				multipleLength={input.multipleLength}
				isRounded={input.isRounded}
				isHovered={input.isHovered}
				isFocused={input.isFocused}
				isActive={input.isActive}
				isLoading={input.isLoading}
				icon={input.icon}
				iconSize={input.iconSize}
			/>
		{:else if input.type === 'checkbox'}
			<Checkbox
				bind:value={input.value}
				label={input.label}
				bind:checked={input.checked}
				disabled={input.disabled}
				on:change
			/>
		{:else if input.type === 'radio'}
			<Radio bind:value={input.value} name={input.name} options={input.options} />
		{:else if input.type === 'file'}
			<File
				bind:value={input.value}
				label={input.label}
				hasName={input.hasName}
				ctaIsRight={input.ctaIsRight}
				isFullWidth={input.isFullWidth}
				isBoxed={input.isBoxed}
				color={input.color}
				size={input.size}
				alignment={input.alignment}
			/>
		{:else}
			<Input
				bind:value={input.value}
				color={input.color}
				type={input.type}
				size={input.size}
				isRounded={input.isRounded}
				isFocused={input.isFocused}
				isHovered={input.isHovered}
				isLoading={input.isLoading}
				isStatic={input.isStatic}
				disabled={input.disabled}
				readonly={input.readonly}
				leftIcon={input.leftIcon}
				rightIcon={input.rightIcon}
			/>
		{/if}
		{#if field.error}
			<p class="help is-danger">{field.error}</p>
		{:else if field.success}
			<p class="help is-succes">{field.success}</p>
		{:else if field.hint}
			<p class="help is-info">{field.hint}</p>
		{/if}
	{/each}
</div>
