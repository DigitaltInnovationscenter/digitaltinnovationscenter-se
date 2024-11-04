<script lang="ts">
  import { setContext } from "svelte";
  import Hero from "$lib/components/start/Hero.svelte";
  import ProjectSwiper from "$lib/components/start/ProjectSwiper.svelte";
  import NewsOverview from "$lib/components/shared/NewsOverview.svelte";
  import OurTech from "$lib/components/projects/OurTech.svelte";

  export let data: any;

  setContext("cms_url", data.cms_url);
</script>

<svelte:head>
  <title>Digitalt Innovationscenter - Start</title>
  <meta name="description" content="Startsida för Digitalt Innovationscenter" />
</svelte:head>

<div class="flex flex-col">
  {#each data.pages as page}
    {#if page.__component == "block.text-hero"}
      <Hero heroData={page} />
    {:else if page.__component == "block.section-project"}
      <ProjectSwiper swiperData={page} />
    {:else if page.__component == "block.tech-group"}
      <OurTech techCardData={page.TechCard} fgColor="bg-default-gray-50" />
    {:else if page.__component == "block.section-post"}
      <NewsOverview
        header={page.Header}
        newsCardData={page.posts}
        headerType="simple"
        bgColor="bg-default-gray-50"
      />
    {/if}
  {/each}
</div>
