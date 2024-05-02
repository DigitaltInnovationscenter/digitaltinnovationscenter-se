<script>
  import Heading from "$lib/components/Heading.svelte";
  import Card from "./Card.svelte";

  export let data;
</script>

<div class="flex gap-10 flex-col items-start pt-64 pb-32">
  <Heading>{data.Header}</Heading>
  <div class="flex gap-10 flex-col md:flex-row">
    {#each data.Cards as card}
      <Card data={card} />
    {/each}
  </div>
</div>
