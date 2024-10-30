<script lang="ts">
  import { PUBLIC_CMS_URL } from "$env/static/public";
  import { formatDate, parseMarkdown } from "$lib/utils/helperFunctions";
  import Container from "$lib/components/shared/Container.svelte";
  import { ArrowRight, Icon } from "svelte-hero-icons";
  import linkedin from "$lib/images/linkedin.svg";
  import facebook from "$lib/images/facebook.svg";
  import x from "$lib/images/x.svg";
  import youtube from "$lib/images/youtube.svg";
  import NewsOverview from "$lib/components/shared/NewsOverview.svelte";
  import { browser } from "$app/environment";
  import type { PostData } from "$lib/interfaces";

  export let data: PostData;

  $: ({ post, latestPosts } = data);

  const socialMediaLinks = [
    {
      name: "linkedin",
      img: linkedin,
    },
    {
      name: "x",
      img: x,
    },
    {
      name: "youtube",
      img: youtube,
    },
    {
      name: "facebook",
      img: facebook,
    },
  ];
</script>

<svelte:head>
  <title>Digitalt Innovationscenter - {post.Header}</title>
  <meta
    name="description"
    content={post.RepeatableRichText[0].Content.slice(0, 155)}
  />
</svelte:head>

{#if browser}
  <Container>
    <div class="space-y-12 px-6">
      <div class="max-w-[1362px] w-full m-auto space-y-8 pt-24 lg:pt-0 lg:px-0">
        <div class="flex flex-row items-center space-x-6">
          <a href="/" class="hover:underline">Start</a>
          <div><Icon src={ArrowRight} class="w-4 h-4" /></div>
          <a href="/posts" class="hover:underline">Aktuellt</a>
          <div><Icon src={ArrowRight} class="w-4 h-4" /></div>
          <div class="font-medium text-secondary-purple-100 truncate">
            {post.Header}
          </div>
        </div>
        <div class="flex items-center justify-center">
          <img
            src={PUBLIC_CMS_URL + post.Banner[0].url}
            class="rounded-xl"
            alt="bild som reperesenterar artikeln {post.Header}"
          />
        </div>
      </div>
      <div class="max-w-[680px] w-full m-auto space-y-8">
        <div>
          <h1 class="text-4xl font-bold">{post.Header}</h1>
        </div>

        <div class="flex flex-row items-center space-x-3 text-gray-500 text-sm">
          <span>{formatDate(post.Date)}</span>
          <span class="inline w-1 h-1 rounded-full bg-gray-500"></span>
          {#if post.Author}
            <a href="/" class="hover:underline">{post.Author}</a>
          {:else}
            <a href="/" class="hover:underline">Innovationscenter</a>
          {/if}
          <span class="inline w-1 h-1 rounded-full bg-gray-500"></span><span
            >{post.TimeToRead} min läsning</span
          >
        </div>
        <div>
          {#each post.RepeatableRichText as { Content }}
            {@html parseMarkdown(Content)}
          {/each}
        </div>
        <div class="pt-12 flex flex-row items-center space-x-2">
          <span class="text-gray-500">Dela det här inlägget</span>
          <ul class="flex flex-row gap-2">
            {#each socialMediaLinks as link}
              <li><img src={link.img} alt={link.name} class="w-8" /></li>
            {/each}
          </ul>
        </div>
      </div>
    </div>
  </Container>
{/if}
<NewsOverview
  newsCardData={latestPosts}
  headerType="extra"
  bgColor="bg-white"
  fgColor="bg-default-gray-100"
/>
