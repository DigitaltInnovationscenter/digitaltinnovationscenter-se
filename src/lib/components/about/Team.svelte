<script lang="ts">
  import Container from "../shared/Container.svelte";
  import MemberCard from "./MemberCard.svelte";
  import type { TeamData } from "$lib/interfaces";

  export let teamData: TeamData;
</script>

<Container backgroundColor="bg-white" foreGroundColor="bg-default-gray-100">
  <div class="max-w-[1362px] m-auto space-y-12 px-10">
    <h3 class="text-4xl lg:text-6xl pt-24 lg:pt-0 font-bold text-slate-800">
      {teamData.header}
    </h3>
    <div
      class="flex overflow-x-auto sm:overflow-hidden sm:grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-10 pb-12 sm:pb-0"
    >
      {#each teamData.content as member}
        <MemberCard {member} />
      {/each}
    </div>
  </div>
</Container>
