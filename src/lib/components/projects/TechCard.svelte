<script lang="ts">
  import { CodeBracket, Icon } from "svelte-hero-icons";
  import type { TechCardData } from "$lib/interfaces";
  export let techCardData: TechCardData;
</script>

<div class="border border-gray-200 flex flex-col rounded-2xl overflow-hidden">
  <div class="grow text-center p-8 space-y-8">
    <div class="w-full flex items-center justify-center relative">
      <div
        class="w-8 h-8 bg-alternative-purple-900] rounded-full absolute -top-1 left-[47%]"
      ></div>
      <Icon
        src={CodeBracket}
        class="w-8 h-8 text-secondary-purple-100 relative z-50"
      />
    </div>
    <div class="space-y-2">
      <a
        href="/"
        class="hover:underline text-2xl font-semibold mb-2 text-slate-800"
        >{techCardData.Header}</a
      >
      <p class="text-gray-500">
        {techCardData.Content}
      </p>
    </div>
  </div>
</div>
