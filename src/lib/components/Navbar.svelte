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
      path: "/posts",
    },
  ];

  $: route = $page.route.id;
</script>

<header class="bg-white/75 fixed w-full top-0 z-[100]">
  <div class="py-6 max-w-[1366px] w-full flex flex-row justify-between m-auto">
    <a href="/">
      <img src={logo} alt="logotype" />
    </a>

    <nav class="flex items-center">
      <ul class="flex flex-row space-x-16">
        {#each links as link}
          <li
            class="font-light inline-block w-[60px]"
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
