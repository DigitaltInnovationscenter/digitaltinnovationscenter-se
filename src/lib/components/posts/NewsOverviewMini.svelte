<script lang="ts">
  import Container from "../shared/Container.svelte";
  import NewsCardMini from "./NewsCardMini.svelte";
  import type { NewsCardMiniData } from "$lib/interfaces";
  export let newsCardMiniData: NewsCardMiniData[];
</script>

<Container backgroundColor="bg-white" paddingTop="pt-0">
  <div class="max-w-[1362px] w-full m-auto space-y-20">
    <div class="px-10">
      <h3 class="text-4xl font-semibold">Tidigare inlägg</h3>
      <div class="w-24 h-1 bg-secondary-purple-100 mt-5"></div>
    </div>
    <div
      class="grid md:grid-cols-3 gap-14 md:grid-rows-1 grid-rows-3 grid-flow-col md:grid-flow-row md:overflow-visible overflow-x-scroll pb-8 px-10"
    >
      {#each newsCardMiniData as card}
        <NewsCardMini newsCardMiniData={card} />
      {/each}
    </div>
  </div>
</Container>
