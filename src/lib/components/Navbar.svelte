<script lang="ts">
  import { page } from "$app/stores";
  import logo from "$lib/images/logo.svg";
  import { Icon, Bars3 } from "svelte-hero-icons";
  import { Button, Modal } from "flowbite-svelte";
  import copy from "$lib/images/copy.svg";
  import linkedin from "$lib/images/linkedin.svg";
  import facebook from "$lib/images/facebook.svg";
  import x from "$lib/images/x.svg";
  import youtube from "$lib/images/youtube.svg";

  let copied = false;

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

  let defaultModal = false;

  const copyMailToClipboard = (e: any) => {
    e.preventDefault();
    const mail = "info@digitaltinnovationscenter.se";
    navigator.clipboard.writeText(mail);
    e.target.classList.remove("transition");
    copied = true;
    setTimeout(() => {
      e.target.classList.add("transition");
      copied = false;
    }, 250);
  };

  const socialMediaLinks = [
    {
      name: "linkedin",
      img: linkedin,
    },
    {
      name: "x",
      img: x,
    },
    {
      name: "youtube",
      img: youtube,
    },
    {
      name: "facebook",
      img: facebook,
    },
  ];
</script>

<header class="bg-white/75 fixed w-full top-0 z-[100]">
  <div
    class="px-4 lg:px-10 py-6 max-w-[1366px] w-full flex flex-row items-center justify-between m-auto min-h-[70px]"
  >
    <a href="/" class="block h-full w-full grow min-w-[200px]">
      <img src={logo} alt="logotype" />
    </a>
    <div class="flex justify-end h-full w-full grow min-w-[200px] lg:hidden">
      <button class="p-2" on:click={() => (defaultModal = !defaultModal)}>
        <Icon src={Bars3} class="w-6" />
      </button>
    </div>

    <nav class="lg:items-center hidden lg:flex">
      <ul class="flex flex-row space-x-16">
        {#each links as link}
          <li
            class="font-light inline-block w-[60px] hover:text-[#9B4AFF] transition-colors duration-200 text-[#374151]"
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

<Modal
  title="Terms of Service"
  bind:open={defaultModal}
  autoclose
  classDialog="shadow-none"
  backdropClass="fixed inset-0 z-40 bg-white"
  headerClass="hidden"
  footerClass="border-none"
  bodyClass="!p-8 md:p-5 space-y-4 flex-1 overflow-y-auto overscroll-contain border-none"
  class="shadow-none"
>
  <ul class="flex flex-col items-center justify-center text-center">
    {#each links as link}
      <li
        class="font-light mb-8 inline-block w-[60px] hover:text-[#9B4AFF] transition-colors duration-200 text-[#374151]"
        aria-current={route === link.path ? "page" : undefined}
        class:active={route === link.path}
      >
        <a href={link.path} on:click={() => (defaultModal = false)}
          >{link.name}</a
        >
      </li>
    {/each}
    <li
      class="mt-8 font-light inline-block hover:text-[#9B4AFF] transition-colors duration-200 text-[#374151]"
    >
      <button on:click={() => (defaultModal = false)}>X</button>
    </li>
  </ul>
  <svelte:fragment slot="footer">
    <!-- <div class="max-w-[250px] m-auto mt-12 space-y-6">
      <h6 class="font-bold">Kontakt</h6>
      <p>
        Har du några funderingar? Du får gärna kontakta oss! Det gör du via vår
        mejl eller sociala medier.
      </p>
      <button class="font-semibold" on:click={copyMailToClipboard}
        ><img src={copy} class="w-6 h-6 inline-block" alt="copy-icon" />
        <span class="underline">Kopiera mejladressen här!</span></button
      >
      <ul class="flex flex-row gap-2">
        {#each socialMediaLinks as link}
          <li><img src={link.img} alt={link.name} /></li>
        {/each}
      </ul>
    </div> -->
  </svelte:fragment>
</Modal>

<style>
  .active {
    color: #1f2a37;
    font-weight: bold;
  }
</style>
