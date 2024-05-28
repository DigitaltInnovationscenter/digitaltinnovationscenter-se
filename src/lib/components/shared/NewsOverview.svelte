<script lang="ts">
  import Container from "./Container.svelte";
  import NewsCard from "./NewsCard.svelte";

  export let data: any = [];
</script>

<Container backgroundColor="bg-[#eeeeee]" foreGroundColor="bg-white">
  <div class="max-w-[1280px] w-full m-auto space-y-20">
    <div class="w-full text-left">
      <h3 class="text-6xl font-bold text-slate-800">
        {data.Header}
      </h3>
    </div>
    <div class="grid grid-cols-3 gap-6">
      {#each data.Projects as card}
        <NewsCard data={card} />
      {/each}
    </div>
  </div>
</Container>
