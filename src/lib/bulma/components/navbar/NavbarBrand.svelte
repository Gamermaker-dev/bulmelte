<script lang="ts">
	import NavbarBurger from './NavbarBurger.svelte';
	import NavbarItem from './NavbarItem.svelte';

	let burgerActive: boolean = false;
</script>

<div class="navbar-brand">
	<NavbarItem isLink><slot /></NavbarItem>

	<NavbarBurger active={burgerActive} on:click={() => (burgerActive = !burgerActive)} />
</div>
