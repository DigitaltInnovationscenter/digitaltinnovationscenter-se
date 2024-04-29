<script lang="ts">
  import Heading from "$lib/components/Heading.svelte";
  import EventCard from "./EventCard.svelte";

  export let data;
</script>

<div class="flex flex-col items-start pt-32 gap-10">
  <Heading>Det här gör vi just nu</Heading>
  <div class="flex gap-10">
    <EventCard />
    <EventCard />
    <EventCard />
  </div>
</div>
