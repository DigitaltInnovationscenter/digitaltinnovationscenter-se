<script lang="ts">
  import ProjectCard from "./ProjectCard.svelte";
  import type { ProjectCardData } from "$lib/interfaces";

  export let projectData: ProjectCardData[];
</script>

<div class="w-full bg-default-gray-100">
  <div class="w-full bg-white px-10 md:px-0 py-10 rounded-t-[50px]">
    <div class="max-w-[1362px] w-full m-auto py-48 space-y-20">
      <div class="space-y-2">
        <span class="font-bold text-secondary-purple-100">Fler projekt</span>
        <h3 class="text-4xl font-bold">Läs gärna om våra andra projekt</h3>
      </div>
      <div
        class="grid md:grid-cols-3 gap-14 md:grid-rows-1 grid-rows-2 grid-flow-col md:grid-flow-row md:overflow-visible overflow-x-scroll pb-8"
      >
        {#each projectData as card}
          <ProjectCard projectCardData={card} />
        {/each}
      </div>
    </div>
  </div>
</div>
