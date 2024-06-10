<script lang="ts">
  import { browser } from "$app/environment";
  import { PUBLIC_CMS_URL } from "$env/static/public";
  import { parseMarkdown } from "$lib/assets/helperFunctions";
  export let data: any;
  $: ({ id, attributes } = data);
</script>

{#if id && browser}
  <a
    href="/projects/{id}"
    class="bg-white flex flex-col rounded-2xl shadow-md hover:shadow-xl transition overflow-hidden"
  >
    <div class="grow">
      <div style="aspect-ratio: 1.7/1;" class="overflow-hidden relative">
        <!-- svelte-ignore a11y-img-redundant-alt -->
        <img
          src={PUBLIC_CMS_URL + attributes.Banner.data[0].attributes.url}
          class="w-full absolute left-1/2 transform -translate-x-1/2 top-1/2 -translate-y-1/2"
          alt="image"
        />
      </div>
      <div class="p-8">
        <a
          href="/projects/{id}"
          class="hover:underline text-2xl font-semibold mb-4 text-[#9B4AFF]"
          >{attributes.MainHeader}</a
        >
        {#if attributes.RepeatableRichText && attributes.RepeatableRichText[0]}
          <p class="my-4 text-gray-600">
            {@html parseMarkdown(
              attributes.RepeatableRichText[0].Content.slice(0, 250)
            )}
          </p>
        {/if}
      </div>
    </div>
    <div class="px-8 pb-8">
      {#if attributes.CTA[0]}
        <a
          href={attributes.CTA[0].url}
          class="rounded-full bg-[#9B4AFF] text-white py-3 px-6 transition hover:opacity-75"
          >{attributes.CTA[0].text}</a
        >
      {/if}
    </div>
  </a>
{/if}
