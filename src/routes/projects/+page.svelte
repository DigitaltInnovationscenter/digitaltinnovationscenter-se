<script lang="ts">
  import Hero from "$lib/components/shared/Hero.svelte";
  import OurTech from "$lib/components/projects/OurTech.svelte";
  import ProjectHighlight from "$lib/components/projects/ProjectHighlight.svelte";
  import ProjectsOverview from "$lib/components/projects/ProjectsOverview.svelte";
  import type { PageData } from "$lib/interfaces";

  export let data: PageData;
</script>

<svelte:head>
  <title>Digitalt Innovationscenter - Projekt</title>
  <meta
    name="description"
    content="Projektsida för Digitalt Innovationscenter"
  />
</svelte:head>

{#each data.pages as page}
  {#if page.__component == "block.project-hero"}
    <Hero heroData={page} />
  {:else if page.__component == "block.section-project" && page.Header === "focused-project"}
    <ProjectHighlight projectData={page.projects} />
  {:else if page.__component == "block.section-project" && page.Header === "all-projects"}
    <ProjectsOverview projectData={page.projects} />
  {:else if page.__component == "block.tech-group"}
    <OurTech
      techCardData={page.TechCard}
      bgColor="bg-white"
      fgColor="bg-default-gray-100"
    />
  {/if}
{/each}
