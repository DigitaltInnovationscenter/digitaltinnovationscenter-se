<script lang="ts">
  import Hero from "$lib/components/shared/Hero.svelte";
  import OurTech from "$lib/components/projects/OurTech.svelte";
  import ProjectHighlight from "$lib/components/projects/ProjectHighlight.svelte";
  import ProjectsOverview from "$lib/components/projects/ProjectsOverview.svelte";
  import type { PageData, ProjectHighlightData } from "$lib/interfaces";

  export let data: PageData;
</script>

{#each data.pages as page}
  {#if page.__component == "block.project-hero"}
    <Hero heroData={page} />
  {:else if page.__component == "block.section-project" && page.Header === "focused-project"}
    <ProjectHighlight data={page.projects.data} />
  {:else if page.__component == "block.section-project" && page.Header === "all-projects"}
    <ProjectsOverview projectData={page.projects.data} />
  {:else if page.__component == "block.tech-group"}
    <OurTech data={page.TechCard} />
  {/if}
{/each}
