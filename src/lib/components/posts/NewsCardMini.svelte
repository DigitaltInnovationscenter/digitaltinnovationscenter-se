<script lang="ts">
  import { formatDate } from "$lib/utils/helperFunctions";
  import { PUBLIC_CMS_URL } from "$env/static/public";
  import type { NewsCardMiniData } from "$lib/interfaces";
  import { goto } from "$app/navigation";

  export let newsCardMiniData: NewsCardMiniData;

  let author: string = "";
  let imageUrl: string = "";
  let postUrl: string = "";

  $: if (newsCardMiniData) {
    author = newsCardMiniData.Author || "Innovationscenter";
    imageUrl = PUBLIC_CMS_URL + newsCardMiniData.Banner[0].url;
    postUrl = `/posts/${newsCardMiniData.slug ?? newsCardMiniData.documentId}`;
  }
</script>

<!-- svelte-ignore a11y-click-events-have-key-events -->
<!-- svelte-ignore a11y-no-static-element-interactions -->
<div
  on:click={() => {
    goto(postUrl);
  }}
  class="flex flex-row space-x-4 hover:bg-gray-100 rounded-xl cursor-pointer relative top-0 hover:-top-2 transition-all duration-300 delay-100 min-w-[95vw] md:min-w-[0px] p-2 box-content"
>
  <div
    class="aspect-square min-w-[80px] h-[80px] bg-neutral-50 relative rounded-lg overflow-hidden"
  >
    <img
      src={imageUrl}
      alt="Bild som representerar rubriken {newsCardMiniData.Header}"
      class="w-full h-full object-cover absolute left-1/2 transform -translate-x-1/2 top-1/2 -translate-y-1/2"
    />
  </div>
  <div class="flex flex-col justify-between">
    <div class="grow">
      <a
        href={postUrl}
        class="hover:underline text-lg font-semibold leading-snug truncate-2-lines"
        >{newsCardMiniData.Header}</a
      >
    </div>
    <div class="flex flex-row items-center space-x-2 text-gray-500 text-xs">
      <span>{formatDate(newsCardMiniData.Date)}</span>
      <span class="inline w-1 h-1 rounded-full bg-gray-500"></span>
      <span>{newsCardMiniData.TimeToRead} min läsning</span>
    </div>
  </div>
</div>

<style>
  .truncate-2-lines {
    display: -webkit-box;
    line-clamp: 2;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    overflow: hidden;
    text-overflow: ellipsis;
  }
</style>
