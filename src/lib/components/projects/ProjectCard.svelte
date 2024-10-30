<script lang="ts">
  import { browser } from "$app/environment";
  import { PUBLIC_CMS_URL } from "$env/static/public";
  import { parseMarkdown } from "$lib/utils/helperFunctions";
  import type { ProjectCardData } from "$lib/interfaces";

  export let projectCardData: ProjectCardData | null = null;

  let imageUrl: string = "";
  let postUrl: string = "";
  let ctaUrl: string = "";
  let ctaText: string = "";

  $: if (projectCardData) {
    imageUrl = PUBLIC_CMS_URL + projectCardData.Banner[0].url;
    postUrl = `/projects/${projectCardData.slug ?? projectCardData.documentId}`;
    if (projectCardData.CTA && projectCardData.CTA[0]) {
      ctaUrl = projectCardData.CTA[0].url;
      ctaText = projectCardData.CTA[0].text;
    }
  }
</script>

{#if projectCardData && projectCardData.documentId}
  <a
    href={postUrl}
    class="bg-white flex flex-col md:rounded-2xl shadow-none md:shadow-md md:hover:shadow-xl transition overflow-hidden md:w-auto min-w-[80vw] md:min-w-[0px] max-h-[88px] md:max-h-full"
  >
    <div class="grow md:grid md:grid-cols-1 flex flex-row">
      <div
        class="aspect-square md:aspect-[1.7/1] overflow-hidden relative min-w-[88px] h-[88px] lg:h-auto"
      >
        <img
          src={imageUrl}
          class="rounded-lg md:rounded-none w-full h-full object-cover absolute left-1/2 transform -translate-x-1/2 top-1/2 -translate-y-1/2"
          alt="Bild som representerar {projectCardData.MainHeader}"
        />
      </div>
      <div class="md:p-8 md:w-full col-span-2 md:col-span-1 px-4">
        <a
          href={postUrl}
          class="hover:underline text-md md:text-2xl font-semibold mb-4 text-primary-dark-200 md:text-secondary-purple-100"
        >
          {projectCardData.MainHeader}
        </a>
        {#if projectCardData.RepeatableRichText && projectCardData.RepeatableRichText[0]}
          <p
            class="mt-1 md:my-4 text-gray-600 text-sm md:text-lg truncate-lines"
          >
            {#if browser}
              {@html parseMarkdown(
                projectCardData.RepeatableRichText[0].Content.slice(0, 250),
              )}
            {/if}
          </p>
        {/if}
      </div>
    </div></a
  >
{:else}
  <!-- TODO: Loading component ... -->
{/if}

<style>
  .truncate-lines {
    display: -webkit-box;
    -webkit-box-orient: vertical;
    overflow: hidden;
    text-overflow: ellipsis;
    -webkit-line-clamp: 3; /* Default to 3 lines */
    line-clamp: 3;
  }

  @media (min-width: 1024px) {
    /* lg breakpoint */
    .truncate-lines {
      line-clamp: 6;
      -webkit-line-clamp: 6; /* Change to 6 lines on large screens */
    }
  }
</style>
