<script lang="ts">
  import { Icon, ArrowRight, ArrowUp } from "svelte-hero-icons";

  export let data;
</script>

<div class="h-full min-h-[550px] bg-[#F9FAFB] w-full relative">
  <div
    class="h-full w-full flex items-center pb-6 absolute top-0 left-0 z-50 pt-[90px]"
  >
    <div class="w-full max-w-[1366px] px-10 m-auto flex flex-col items-center">
      <span class="font-bold text-[#9B4AFF] text-lg">{data.SubHeader}</span>
      <h6
        class="font-bold text-5xl text-slate-800 leading-snug text-center mb-8"
      >
        {data.MainHeader}
      </h6>
      <p class="text-center max-w-[450px] text-lg text-gray-500">
        {data.Description}
      </p>
    </div>
  </div>
</div>
