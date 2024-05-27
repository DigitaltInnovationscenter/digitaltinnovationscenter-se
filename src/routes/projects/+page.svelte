<script lang="ts">
  import Hero from "$lib/components/projects/Hero.svelte";
  import OurTech from "$lib/components/projects/OurTech.svelte";
  import ProjectHighlight from "$lib/components/projects/ProjectHighlight.svelte";
  import ProjectsOverview from "$lib/components/projects/ProjectsOverview.svelte";

  export let data;
</script>

{#each data.pages as page}
  {#if page.__component == "block.project-hero"}
    <Hero data={page} />
  {:else if page.__component == "block.project-group"}
    <ProjectHighlight data={page.Project[0]} />
    <ProjectsOverview data={page.Project.slice(1)} />
  {:else if page.__component == "block.tech-group"}
    <OurTech data={page.TechCard} />
  {/if}
{/each}
