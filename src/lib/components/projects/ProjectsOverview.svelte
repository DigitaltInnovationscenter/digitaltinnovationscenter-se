<script lang="ts">
  import ProjectCard from "./ProjectCard.svelte";
  import type { ProjectCardData } from "$lib/interfaces";

  export let projectData: ProjectCardData[];

  let sortedProjectData: ProjectCardData[];

  function sortProjectsByDate(
    projectData: ProjectCardData[]
  ): ProjectCardData[] {
    return projectData.sort((a, b) => {
      const dateA = a.attributes.date;
      const dateB = b.attributes.date;

      if (dateA === null && dateB === null) {
        return 0;
      } else if (dateA === null) {
        return 1;
      } else if (dateB === null) {
        return -1;
      } else {
        return new Date(dateB).getTime() - new Date(dateA).getTime();
      }
    });
  }

  // Sort the project data
  $: sortedProjectData = sortProjectsByDate(projectData);
</script>

<div class="w-full bg-default-gray-100">
  <div class="w-full bg-white lg:py-10 rounded-t-[50px]">
    <div class="max-w-[1362px] w-full m-auto py-48 space-y-20">
      <div class="space-y-2 px-10 lg:px-0">
        <span class="font-bold text-secondary-purple-100">Fler projekt</span>
        <h3 class="text-4xl font-bold">Läs gärna om våra andra projekt</h3>
      </div>
      <div
        class="grid md:grid-cols-3 gap-14 md:grid-rows-1 grid-rows-3 grid-flow-col md:grid-flow-row md:overflow-visible overflow-x-scroll pb-8 px-10 lg:px-0"
      >
        {#each sortedProjectData as card}
          <ProjectCard projectCardData={card} />
        {/each}
      </div>
    </div>
  </div>
</div>
