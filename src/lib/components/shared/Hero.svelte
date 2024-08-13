<script lang="ts">
  import type { SharedHeroData } from "$lib/interfaces";
  export let heroData: SharedHeroData;
  export let bgColor: string = "bg-primary-gray-100]";
  export let suffix: string = "";
</script>

<div class="h-full min-h-[550px] {bgColor} w-full relative">
  <div
    class="h-full w-full flex items-center pb-6 absolute top-0 left-0 pt-[90px]"
  >
    <div
      class="w-full max-w-[1366px] px-10 m-auto flex flex-col items-start lg:items-center"
    >
      <span
        class="font-bold text-secondary-purple-100 text-lg text-left lg:text-center w-full"
      >
        {heroData.SubHeader}
      </span>
      <h3
        class="font-bold text-4xl lg:text-5xl text-slate-800 text-left lg:text-center mb-8 block w-full max-w-[700px] leading-tight"
      >
        {heroData.MainHeader}
        {#if suffix !== ""}
          <span class="text-horizon-primary-green relative -left-2">*</span>
        {/if}
      </h3>
      <p
        class="p-0 text-lg text-left lg:text-center text-gray-500 max-w-[450px]"
      >
        {heroData.Description}
      </p>
    </div>
  </div>
</div>
