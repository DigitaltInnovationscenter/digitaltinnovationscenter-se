<script lang="ts">
  import { formatDate, parseMarkdown } from "$lib/utils/helperFunctions";
  import { PUBLIC_CMS_URL } from "$env/static/public";
  import { browser } from "$app/environment";

  import type { NewsCardData } from "$lib/interfaces";

  export let cardData: NewsCardData;
  $: ({ id, attributes } = cardData);
</script>

{#if cardData}
  <a
    href="/posts/{attributes.slug ?? id}"
    class="lg:p-4 lg:hover:bg-gray-100 border border-transparent rounded-2xl flex flex-col cursor-pointer relative top-0 lg:hover:-top-4 transition-all duration-300 delay-100"
  >
    <div class="grow">
      <div class="aspect-[1.68/1] overflow-hidden mb-6 rounded-xl relative">
        <img
          src={PUBLIC_CMS_URL + attributes.Banner.data[0].attributes.url}
          class="w-full h-full object-cover absolute left-1/2 transform -translate-x-1/2 top-1/2 -translate-y-1/2"
          alt="Bild som representerar {attributes.Header}"
        />
      </div>

      <div class="mb-6">
        <span
          class="py-2 px-4 bg-alternative-purple-400 rounded-lg text-sm text-primary-dark-100"
          >{formatDate(attributes.Date)}</span
        >
      </div>
      <a
        href="/posts/{attributes.slug ?? id}"
        class="text-2xl font-semibold mb-4 text-gray-800 hover:underline transition"
      >
        {attributes.Header}
      </a>
      <p class="mb-8 mt-4 text-gray-600 truncate-lines">
        {#if browser}
          {@html parseMarkdown(attributes.RepeatableRichText[0].Content)}
        {/if}
      </p>
    </div>
    <div class="flex flex-row items-center space-x-3 text-gray-500">
      {#if attributes.Author}
        <a href="/" class="hover:underline">{attributes.Author}</a>
      {:else}
        <a href="/" class="hover:underline">Innovationscenter</a>
      {/if}
      <span class="inline w-1 h-1 rounded-full bg-gray-500"></span><span
        >{attributes.TimeToRead} min läsning</span
      >
    </div>
  </a>
{/if}

<style>
  .truncate-lines {
    display: -webkit-box;
    -webkit-box-orient: vertical;
    overflow: hidden;
    text-overflow: ellipsis;
    -webkit-line-clamp: 3; /* Default to 3 lines */
  }
</style>
