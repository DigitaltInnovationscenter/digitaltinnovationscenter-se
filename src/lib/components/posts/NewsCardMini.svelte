<script lang="ts">
  import { formatDate } from "$lib/utils/helperFunctions";
  import { PUBLIC_CMS_URL } from "$env/static/public";
  import type {
    NewsCardMiniData,
    NewsCardMiniAttributes,
  } from "$lib/interfaces";

  export let newsCardMiniData: NewsCardMiniData;

  let id: number;
  let attributes: NewsCardMiniAttributes;
  let author: string = "";
  let imageUrl: string = "";
  let postUrl: string = "";

  $: if (newsCardMiniData) {
    ({ id, attributes } = newsCardMiniData);
    author = attributes.Author || "Innovationscenter";
    imageUrl = PUBLIC_CMS_URL + attributes.Banner.data[0].attributes.url;
    postUrl = `/posts/${id}`;
  }
</script>

<a
  href={postUrl}
  class="flex flex-row space-x-4 p-3 hover:bg-gray-100 rounded-xl cursor-pointer relative top-0 hover:-top-2 transition-all duration-300 delay-100 min-w-[95vw] md:min-w-[0px]"
>
  <div
    class="aspect-square min-w-[80px] h-[80px] bg-neutral-50 relative rounded-lg overflow-hidden"
  >
    <img
      src={imageUrl}
      alt="Bild som representerar rubriken {attributes.Header}"
      class="w-full h-full object-cover absolute left-0 top-0"
    />
  </div>
  <div class="flex flex-col justify-between">
    <div class="grow">
      <a
        href={postUrl}
        class="hover:underline text-lg font-semibold leading-snug"
        >{attributes.Header}</a
      >
    </div>
    <div class="flex flex-row items-center space-x-2 text-gray-500 text-xs">
      <span>{formatDate(attributes.Date)}</span>
      <span class="inline w-1 h-1 rounded-full bg-gray-500"></span>

      <!-- {#if attributes.Author}
        <a href={postUrl} class="hover:underline">{attributes.Author}</a>
      {:else}
        <a href={postUrl} class="hover:underline">Innovationscenter</a>
      {/if} -->
      <!-- <span class="inline w-1 h-1 rounded-full bg-gray-500"></span> -->
      <span>{attributes.TimeToRead} min läsning</span>
    </div>
  </div>
</a>
