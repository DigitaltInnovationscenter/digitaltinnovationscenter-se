<script lang="ts">
  import { setContext } from "svelte";
  import Explorative from "$lib/components/start/Explorative.svelte";
  import Hero from "$lib/components/start/Hero.svelte";
  import ProjectSwiper from "$lib/components/start/ProjectSwiper.svelte";
  import NewsOverview from "$lib/components/shared/NewsOverview.svelte";

  export let data: any;

  setContext("cms_url", data.cms_url);
</script>

<svelte:head>
  <title>Digitalt Innovationscenter - Start</title>
</svelte:head>

<div class="flex flex-col">
  {#each data.pages as page}
    {#if page.__component == "block.text-hero"}
      <Hero heroData={page} />
    {:else if page.__component == "block.section-project"}
      <ProjectSwiper swiperData={page} />
    {:else if page.__component == "block.tech-group"}
      <Explorative exploreData={page} />
    {:else if page.__component == "block.section-post"}
      <NewsOverview
        header={page.Header}
        newsCardData={page.posts.data}
        headerType="simple"
      />
    {/if}
  {/each}
</div>
