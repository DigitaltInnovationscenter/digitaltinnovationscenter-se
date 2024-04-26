<script>
	import { page } from "$app/stores";
	import logo from "$lib/images/svelte-logo.svg";
</script>

<header class="flex flex-row justify-between">
	<a href="https://www.digitaltinnovationscenter.se">
		<img src="https://via.placeholder.com/150x30" />
		<!-- <img src={logo} alt="SvelteKit" /> -->
	</a>

	<nav>
		<ul class="flex flex-row">
			<li aria-current={$page.url.pathname === "/" ? "page" : undefined}>
				<a href="/">Start</a>
			</li>
			<li aria-current={$page.url.pathname === "/about" ? "page" : undefined}>
				<a href="/about">Om oss</a>
			</li>
			<li aria-current={$page.url.pathname === "/blog" ? "page" : undefined}>
				<a href="/projects">Projekt</a>
			</li>
			<li aria-current={$page.url.pathname === "/blog" ? "page" : undefined}>
				<a href="/news">Nyheter</a>
			</li>
		</ul>
	</nav>
</header>
