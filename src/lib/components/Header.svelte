<script>
  import { page } from "$app/stores";
  import logo from "$lib/images/logo.svg";
</script>

<header class="flex flex-row justify-between px-10 py-6 bg-gray-50">
  <a href="https://www.digitaltinnovationscenter.se">
    <img src={logo} />
  </a>

  <nav class="flex items-center">
    <ul class="flex flex-row space-x-16">
      <li aria-current={$page.url.pathname === "/" ? "page" : undefined}>
        <a href="/">Start</a>
      </li>
      <li aria-current={$page.url.pathname === "/about/" ? "page" : undefined}>
        <a href="/about">Om oss</a>
      </li>
      <li
        aria-current={$page.url.pathname === "/projects/" ? "page" : undefined}
      >
        <a href="/projects">Projekt</a>
      </li>
      <li aria-current={$page.url.pathname === "/news/" ? "page" : undefined}>
        <a href="/news">Nyheter</a>
      </li>
    </ul>
  </nav>
</header>
