<script lang="ts">
  import ActiveProjectCard from "./ActiveProjectCard.svelte";

  export let data: any = [];
</script>

<div class="w-full bg-[#eeeeee]">
  <div class="w-full bg-white py-24 rounded-t-[50px]">
    <div class="max-w-[1280px] w-full m-auto py-24 space-y-20">
      <div class="w-full text-left">
        <h3 class="text-6xl font-bold text-slate-800">
          {data.Header}
        </h3>
      </div>
      <div class="grid grid-cols-3 gap-6">
        {#each data.Projects as card}
          <ActiveProjectCard data={card} />
        {/each}
      </div>
    </div>
  </div>
</div>
