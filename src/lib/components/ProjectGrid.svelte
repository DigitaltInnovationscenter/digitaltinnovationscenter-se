<script lang="ts">
  import Heading from "$lib/components/Heading.svelte";
  import ProjectCard from "./ProjectCard.svelte";

  export let data;
</script>

<div class="flex flex-col items-center md:items-start pt-32 gap-10">
  <Heading>{data.Header}</Heading>
  <div class="flex gap-10 flex-col md:flex-row items-center">
    {#each data.Projects as project}
      <ProjectCard data={project} />
    {/each}
  </div>
</div>
