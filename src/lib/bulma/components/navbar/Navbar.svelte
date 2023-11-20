<script lang="ts">
	import type { Colors } from '$lib/bulma/types/Colors';
	import clsx from 'clsx';
	import type { NavbarItemType } from '../../types/NavbarItem';
	import NavbarBrand from './NavbarBrand.svelte';
	import NavbarMenu from './NavbarMenu.svelte';
	import NavbarSection from './NavbarSection.svelte';

	export let navbar: NavbarItemType[] = [];
	export let color: Colors = 'primary';

	export let isSpaced: boolean = false;
	export let hasShadow: boolean = false;

	$: startItems = navbar.filter((n) => n.placement === 'start');
	$: endItems = navbar.filter((n) => n.placement === 'end');
</script>

<nav
	class={clsx('navbar', `is-${color}`, isSpaced && 'is-spaced', hasShadow && 'has-shadow')}
	role="navigation"
	aria-label="main navigation"
>
	<NavbarBrand><img src="src/logo.jpg" width="128" height="256" /></NavbarBrand>

	<NavbarMenu>
		<NavbarSection slot="start" section="start" items={startItems} />
		<NavbarSection slot="end" section="end" items={endItems} />
	</NavbarMenu>
</nav>
