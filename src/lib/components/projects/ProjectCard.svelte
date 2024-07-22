<!-- src/lib/components/ProjectCard.svelte -->
<script lang="ts">
  import { browser } from "$app/environment";
  import { PUBLIC_CMS_URL } from "$env/static/public";
  import { parseMarkdown } from "$lib/utils/helperFunctions";
  import type {
    ProjectCardData,
    ProjectCardDataAttributes,
  } from "$lib/interfaces";

  export let data: ProjectCardData | null = null;

  let id: number | null = null;
  let attributes: ProjectCardDataAttributes | null = null;

  let imageUrl: string = "";
  let postUrl: string = "";
  let ctaUrl: string = "";
  let ctaText: string = "";

  $: if (data) {
    ({ id, attributes } = data);
    if (attributes) {
      imageUrl = PUBLIC_CMS_URL + attributes.Banner.data[0].attributes.url;
      postUrl = `/projects/${id}`;
      if (attributes.CTA && attributes.CTA[0]) {
        ctaUrl = attributes.CTA[0].url;
        ctaText = attributes.CTA[0].text;
      }
    }
  }
</script>

{#if data && id && attributes}
  <a
    href={postUrl}
    class="bg-white flex flex-col rounded-2xl shadow-md hover:shadow-xl transition overflow-hidden"
  >
    <div class="grow">
      <div style="aspect-ratio: 1.7/1;" class="overflow-hidden relative">
        <!-- svelte-ignore a11y-img-redundant-alt -->
        <img
          src={imageUrl}
          class="w-full absolute left-1/2 transform -translate-x-1/2 top-1/2 -translate-y-1/2"
          alt="Bild som representerar {attributes.MainHeader}"
        />
      </div>
      <div class="p-8">
        <a
          href={postUrl}
          class="hover:underline text-2xl font-semibold mb-4 text-secondary-purple-100"
        >
          {attributes.MainHeader}
        </a>
        {#if attributes.RepeatableRichText && attributes.RepeatableRichText[0]}
          <p class="my-4 text-gray-600">
            {#if browser}
              {@html parseMarkdown(
                attributes.RepeatableRichText[0].Content.slice(0, 250)
              )}
            {/if}
          </p>
        {/if}
      </div>
    </div>
    <div class="px-8 pb-8">
      {#if attributes.CTA && attributes.CTA[0]}
        <a
          href={ctaUrl}
          class="rounded-full bg-secondary-purple-100 text-white py-3 px-6 transition hover:opacity-75"
        >
          {ctaText}
        </a>
      {/if}
    </div>
  </a>
{:else}
  <!-- TODO: Loading component ... -->
{/if}
