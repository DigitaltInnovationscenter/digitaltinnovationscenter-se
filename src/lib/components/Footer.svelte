<script lang="ts">
  import linkedin from "$lib/images/linkedin.svg";
  import facebook from "$lib/images/facebook.svg";
  import x from "$lib/images/x.svg";
  import youtube from "$lib/images/youtube.svg";
  import copy from "$lib/images/copy.svg";
  import logo from "$lib/images/logo.svg";
  import { page } from "$app/stores";

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

  const socialMediaLinks = [
    {
      name: "linkedin",
      href: "https://www.linkedin.com/company/digitalt-innovationscenter/",
      img: linkedin,
    },
    {
      name: "x",
      href: "https://twitter.com/digitaltinnovc",
      img: x,
    },
    {
      name: "youtube",
      href: "https://www.youtube.com/@digitaltinnovationscenter2060",
      img: youtube,
    },
    {
      name: "facebook",
      href: "https://www.facebook.com/DigitaltInnovationscenter",
      img: facebook,
    },
  ];

  let copied = false;

  const copyMailToClipboard = (e: MouseEvent) => {
    e.preventDefault();
    const mail = "info@digitaltinnovationscenter.se";
    navigator.clipboard.writeText(mail);
    const target = e.target as HTMLElement;
    target.classList.remove("transition");
    copied = true;
    setTimeout(() => {
      target.classList.add("transition");
      copied = false;
    }, 250);
  };

  $: route = $page.route.id;
</script>

<div class="bg-default-gray-100">
  <div
    class="lg:flex lg:justify-between grid grid-cols-2 gap-24 max-w-[1366px] w-full m-auto px-10 py-20"
  >
    <div class="col-span-2 flex flex-col items-start gap-6">
      <a href="/">
        <img src={logo} alt="logotype" />
      </a>
      <p class="max-w-[250px] font-thin text-primary-dark-400]">
        Har du några funderingar? Du får gärna kontakta oss! Det gör du via
        mejlen nedanför.
      </p>
      <button class:copied on:click={copyMailToClipboard}
        ><img src={copy} class="w-6 h-6 inline-block" alt="copy-icon" /><span
          class="pl-2 text-primary-dark-200] hover:text-secondary-purple-100"
          >Kopiera mejladressen här!</span
        ></button
      >
    </div>
    <div class="flex flex-col gap-6">
      <h1 class="font-bold text-primary-dark-200]">Sidor</h1>
      <ul class="flex flex-col gap-2 font-thin text-primary-dark-400]">
        {#each links as link}
          <li aria-current={route === link.path ? "page" : undefined}>
            <a href={link.path}>{link.name}</a>
          </li>
        {/each}
      </ul>
    </div>
    <div class="flex flex-col gap-6">
      <h1 class=" font-bold text-primary-dark-200]">Följ oss</h1>
      <ul class="flex flex-row gap-2">
        {#each socialMediaLinks as link}
          <a href={link.href}><li><img src={link.img} alt={link.name} /></li></a
          >
        {/each}
      </ul>
      <p class="font-thin text-primary-dark-400]">2024 Innovationscenter</p>
    </div>
  </div>
</div>

<style>
  .copied {
    background-color: #f9f9f9;
    color: #f00;
  }
</style>
