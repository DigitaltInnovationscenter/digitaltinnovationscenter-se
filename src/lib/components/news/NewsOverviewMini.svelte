<script>
  import Container from "../shared/Container.svelte";
  import NewsCardMini from "./NewsCardMini.svelte";

  export let data;
</script>

<Container backgroundColor="bg-white" paddingTop="pt-0">
  <div class="max-w-[1362px] w-full m-auto space-y-20">
    <div class="pl-3">
      <h3 class="text-4xl font-semibold">Tidigare inlägg</h3>
      <div class="w-24 h-1 bg-[#9B4AFF] mt-5"></div>
    </div>
    <div class="grid grid-cols-3 gap-7">
      {#each data.Projects as card}
        <NewsCardMini data={card} />
      {/each}
    </div>
  </div>
</Container>
