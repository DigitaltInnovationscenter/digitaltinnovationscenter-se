<script lang="ts">
  import { ArrowTopRightOnSquare, Icon } from "svelte-hero-icons";
  import ExploreCard from "./ExploreCard.svelte";

  export let data: any = [];
</script>

<div class="w-full">
  <div class="w-full bg-[#eeeeee] py-10">
    <div class="max-w-[1280px] w-full m-auto py-24 space-y-20">
      <div class="w-full text-center">
        <h3 class="text-6xl font-bold text-slate-800">
          {data.Header}
        </h3>
      </div>
      <div class="grid grid-cols-3 gap-10">
        {#each data.Cards as card}
          <ExploreCard data={card} />
        {/each}
      </div>
      <div class="w-full text-center text-[#9B4AFF]">
        <a
          href="/"
          class="flex items-center justify-center transition hover:opacity-50 font-semibold"
        >
          Dokumentation av utveckling <Icon
            src={ArrowTopRightOnSquare}
            class="w-6 h-6 inline ml-2"
          />
        </a>
      </div>
    </div>
  </div>
</div>
