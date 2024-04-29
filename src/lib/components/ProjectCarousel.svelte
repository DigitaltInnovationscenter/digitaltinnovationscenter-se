<script lang="ts">
  import Heading from "$lib/components/Heading.svelte";
  import LargeCard from "./LargeCard.svelte";

  export let data: any;
</script>

<div class="flex flex-col gap-10 pt-32">
  <Heading class="self-start text-start">
    {@html data.Header}
  </Heading>
  {#each data.Projects as project}
    <LargeCard data={project} />
  {/each}
</div>
