<script lang="ts">
  import { setContext } from "svelte";
  import Explorative from "$lib/components/start/Explorative.svelte";
  import Hero from "$lib/components/start/Hero.svelte";
  import ProjectSwiper from "$lib/components/start/ProjectSwiper.svelte";
  import NewsOverview from "$lib/components/shared/NewsOverview.svelte";
  export let data;

  setContext("cms_url", data.cms_url);
</script>

<div class="flex flex-col">
  {#each data.pages as page}
    {#if page.__component == "block.hero"}
      <Hero data={page} />
    {:else if page.__component == "block.project-carousel"}
      <ProjectSwiper data={page} />
    {:else if page.__component == "block.card-grid"}
      <Explorative data={page} />
    {:else if page.__component == "block.project-grid"}
      <NewsOverview data={page} />
    {/if}
  {/each}
</div>
