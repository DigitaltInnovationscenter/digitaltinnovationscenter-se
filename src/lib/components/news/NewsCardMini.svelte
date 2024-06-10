<script lang="ts">
  import { formatDate } from "$lib/assets/helperFunctions";
  import { PUBLIC_CMS_URL } from "$env/static/public";
  export let data: any;
  $: data = data.attributes;
</script>

{#if data}
  <div
    class="flex flex-row space-x-4 p-3 hover:bg-gray-100 transition rounded-xl cursor-pointer relative top-0 hover:-top-2 transition-all duration-300 delay-100"
  >
    <div
      class="aspect-square min-w-[80px] h-[80px] bg-neutral-50 relative rounded-lg overflow-hidden"
    >
      <!-- svelte-ignore a11y-img-redundant-alt -->
      <img
        src={PUBLIC_CMS_URL + data.Banner.data[0].attributes.url}
        alt="image"
        class="min-w-full min-h-full absolute absolute left-1/2 transform -translate-x-1/2 top-1/2 -translate-y-1/2"
      />
    </div>
    <div class="flex flex-col justify-between">
      <div class="grow">
        <a href="/" class="hover:underline text-lg font-semibold leading-snug"
          >{data.Header}</a
        >
      </div>
      <div class="flex flex-row items-center space-x-2 text-gray-500 text-xs">
        <span>{formatDate(data.Date)}</span>
        <span class="inline w-1 h-1 rounded-full bg-gray-500"></span>

        {#if data.Author}
          <a href="/" class="hover:underline">{data.Author}</a>
        {:else}
          <a href="/" class="hover:underline">Innovationscenter</a>
        {/if}
        <span class="inline w-1 h-1 rounded-full bg-gray-500"></span><span
          >{data.TimeToRead} min läsning</span
        >
      </div>
    </div>
  </div>
{/if}
