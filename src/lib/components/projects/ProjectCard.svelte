<script lang="ts">
  import { browser } from "$app/environment";
  import { PUBLIC_CMS_URL } from "$env/static/public";
  import { parseMarkdown } from "$lib/utils/helperFunctions";
  import type {
    ProjectCardData,
    ProjectCardDataAttributes,
  } from "$lib/interfaces";

  export let projectCardData: ProjectCardData | null = null;

  let id: number | null = null;
  let attributes: ProjectCardDataAttributes | null = null;

  let imageUrl: string = "";
  let postUrl: string = "";
  let ctaUrl: string = "";
  let ctaText: string = "";

  $: if (projectCardData) {
    ({ id, attributes } = projectCardData);
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

{#if projectCardData && id && attributes}
  <!-- md:w-auto min-w-[80vw] md:max-w-[417px] -->
  <a
    href={postUrl}
    class="bg-white flex flex-col md:rounded-2xl shadow-md hover:shadow-xl transition overflow-hidden md:w-auto min-w-[80vw] md:min-w-[0px] max-h-[88px] md:max-h-full"
  >
    <div class="grow md:grid md:grid-cols-1 flex flex-row">
      <div
        class="aspect-square md:aspect-[1.7/1] overflow-hidden relative min-w-[88px]"
      >
        <img
          src={imageUrl}
          class="w-full absolute left-1/2 transform -translate-x-1/2 top-1/2 -translate-y-1/2"
          alt="Bild som representerar {attributes.MainHeader}"
        />
      </div>
      <div class="md:p-8 md:w-full col-span-2 md:col-span-1 px-4">
        <a
          href={postUrl}
          class="hover:underline text-md md:text-2xl font-semibold mb-4 text-secondary-purple-100"
        >
          {attributes.MainHeader}
        </a>
        {#if attributes.RepeatableRichText && attributes.RepeatableRichText[0]}
          <p class="my-4 text-gray-600 hidden md:block md:text-2xl">
            {#if browser}
              {@html parseMarkdown(
                attributes.RepeatableRichText[0].Content.slice(0, 250)
              )}
            {/if}
          </p>
          <p
            class="text-gray-600 block md:hidden text-sm"
            style="
              display: -webkit-box;
              -webkit-line-clamp: 3;
              -webkit-box-orient: vertical;
              overflow: hidden;
              text-overflow: ellipsis;
            "
          >
            {#if browser}
              {@html parseMarkdown(
                attributes.RepeatableRichText[0].Content.slice(0, 250)
              )}
            {/if}
          </p>
        {/if}
      </div>
    </div>
    <div class="md:py-8">
      {#if attributes.CTA && attributes.CTA[0]}
        <a
          href={ctaUrl}
          class="rounded-full bg-secondary-purple-100 text-white md:py-3 md:px-6 transition hover:opacity-75"
        >
          {ctaText}
        </a>
      {/if}
    </div>
  </a>
{:else}
  <!-- TODO: Loading component ... -->
{/if}
