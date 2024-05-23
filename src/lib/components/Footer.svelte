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
      name: "Nyheter",
      path: "/news",
    },
  ];

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

  let copied = false;

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

  $: route = $page.route.id;
</script>

<div class="bg-[#eeeeee]">
  <div class="flex justify-between max-w-[1366px] w-full m-auto px-10 py-20">
    <div class="flex flex-col items-start gap-4">
      <img class="pb-4" src={logo} alt="logotype" />
      <p class="max-w-[250px]">
        Har du några funderingar? Du får gärna kontakta oss! Det gör du via
        mejlen nedanför.
      </p>
      <button class:copied on:click={copyMailToClipboard}
        ><img src={copy} class="w-6 h-6 inline-block" alt="copy-icon" /><span
          class="pl-2 underline">Kopiera mejdadressen här!</span
        ></button
      >
    </div>
    <div>
      <h1 class="pb-8 font-bold">Sidor</h1>
      <ul class="flex flex-col gap-2">
        {#each links as link}
          <li aria-current={route === link.path ? "page" : undefined}>
            <a href={link.path}>{link.name}</a>
          </li>
        {/each}
      </ul>
    </div>
    <div>
      <h1 class="pb-8 font-bold">Följ oss</h1>
      <ul class="flex flex-row gap-2">
        {#each socialMediaLinks as link}
          <li><img src={link.img} alt={link.name} /></li>
        {/each}
      </ul>
      <p class="pt-8">2023 Innovationscenter</p>
    </div>
  </div>
</div>

<style>
  .copied {
    background-color: #f9f9f9;
    color: #f00;
  }
</style>
