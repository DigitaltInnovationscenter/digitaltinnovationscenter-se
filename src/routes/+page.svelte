<script lang="ts">
  import CardGrid from "$lib/components/CardGrid.svelte";
  import Container from "$lib/components/Container.svelte";
  import Hero from "$lib/components/Hero.svelte";
  import ProjectCarousel from "$lib/components/ProjectCarousel.svelte";
  import ProjectGrid from "$lib/components/ProjectGrid.svelte";
  import { setContext } from "svelte";

  export let data;

  setContext("cms_url", data.cms_url);

  console.log(data);
</script>

<div class="flex flex-col">
  {#each data.pages as page}
    {#if page.__component == "block.hero"}
      <Hero data={page} />
    {:else if page.__component == "block.project-carousel"}
      <Container bgColor="bg-gray-100">
        <ProjectCarousel data={page} />
      </Container>
    {:else if page.__component == "block.card-grid"}
      <Container bgColor="bg-gray-100">
        <CardGrid data={page} />
      </Container>
    {:else if page.__component == "block.project-grid"}
      <Container bgColor="bg-white">
        <ProjectGrid data={page} />
      </Container>
    {/if}
  {/each}
</div>
