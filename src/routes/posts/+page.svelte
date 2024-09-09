<script lang="ts">
  import NewsOverviewMini from "$lib/components/posts/NewsOverviewMini.svelte";
  import Hero from "$lib/components/shared/Hero.svelte";
  import NewsOverview from "$lib/components/shared/NewsOverview.svelte";

  export let data;
</script>

<svelte:head>
  <title>Digitalt Innovationscenter - Aktuellt</title>
  <meta name="description" content="About this app" />
</svelte:head>

{#if data.pages}
  {#each data.pages as page}
    {#if page.__component == "block.text-hero"}
      <Hero heroData={page} />
    {:else if page.__component === "block.section-post"}
      <NewsOverview
        bgColor="bg-default-gray-50"
        headerType={null}
        newsCardData={page.posts.data.slice(0, 3)}
      />
      <NewsOverviewMini newsCardMiniData={page.posts.data.slice(3)} />
    {/if}
  {/each}
{/if}
