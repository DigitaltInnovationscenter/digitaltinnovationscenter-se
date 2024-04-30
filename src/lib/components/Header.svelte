<script>
	import { page } from "$app/stores";
	import logo from "$lib/images/logo.svg";
</script>

<header class="flex flex-row justify-between px-10 py-5 bg-gray-50">
	<a href="https://www.digitaltinnovationscenter.se">
		<img src={logo} />
		<!-- <img src={logo} alt="SvelteKit" /> -->
	</a>

	<nav>
		<ul class="flex flex-row gap-5">
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
