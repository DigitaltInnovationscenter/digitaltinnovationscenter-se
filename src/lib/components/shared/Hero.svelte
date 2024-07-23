<script lang="ts">
  import type { SharedHeroData } from "$lib/interfaces";
  export let data: SharedHeroData;
  export let bgColor: string = "bg-primary-gray-100]";
  export let suffix: string = "";
</script>

<div class="h-full min-h-[550px] {bgColor} w-full relative">
  <div
    class="h-full w-full flex items-center pb-6 absolute top-0 left-0 pt-[90px]"
  >
    <div class="w-full max-w-[1366px] px-10 m-auto flex flex-col items-center">
      <span class="font-bold text-secondary-purple-100 text-lg"
        >{data.SubHeader}</span
      >
      <h6
        class="font-bold text-4xl lg:text-5xl text-slate-800 text-center mb-8 block w-full max-w-[700px] leading-tight"
      >
        {data.MainHeader}
        {#if suffix !== ""}
          <span class="text-horizon-primary-green relative -left-2">*</span>
        {/if}
      </h6>
      <p class="text-center max-w-[450px] text-lg text-gray-500">
        {data.Description}
      </p>
    </div>
  </div>
</div>
