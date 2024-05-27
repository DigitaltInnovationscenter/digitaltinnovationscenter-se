<script lang="ts">
  import ProjectCard from "./ProjectCard.svelte";

  export let data;
</script>

<div class="w-full bg-[#eeeeee]">
  <div class="w-full bg-white py-10 rounded-t-[50px]">
    <div class="max-w-[1280px] w-full m-auto py-48 space-y-20">
      <div class="space-y-2">
        <span class="font-bold text-[#9B4AFF]">Fler projekt</span>
        <h3 class="text-4xl font-bold">Läs gärna om våra andra projekt</h3>
      </div>
      <div class="grid grid-cols-3 gap-14">
        {#each data as card}
          <ProjectCard data={card} />
        {/each}
      </div>
    </div>
  </div>
</div>
