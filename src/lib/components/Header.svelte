<script>
  import { page } from "$app/stores";
  import logo from "$lib/images/logo.svg";

  const links = [
    {
      name: "Start",
      path: "/",
    },
    {
      name: "Om oss",
      path: "/about",
    },
    {
      name: "Projekt",
      path: "/projects",
    },
    {
      name: "Aktuellt",
      path: "/news",
    },
  ];

  $: route = $page.route.id;
</script>

<header class="bg-gray-50">
  <div
    class="px-10 py-6 max-w-[1366px] w-full flex flex-row justify-between m-auto"
  >
    <a href="/">
      <img src={logo} alt="logotype" />
    </a>

    <nav class="flex items-center">
      <ul class="flex flex-row space-x-16">
        {#each links as link}
          <li
            aria-current={route === link.path ? "page" : undefined}
            class:active={route === link.path}
          >
            <a href={link.path}>{link.name}</a>
          </li>
        {/each}
      </ul>
    </nav>
  </div>
</header>

<style>
  .active {
    font-weight: bold;
  }
</style>
