<script lang="ts">
  import { PUBLIC_CMS_URL } from "$env/static/public";
  export let data: any;
</script>

{#if data}
  <a
    href="/"
    class="bg-white flex flex-col rounded-2xl shadow-md hover:shadow-xl transition overflow-hidden"
  >
    <div class="grow">
      <div style="aspect-ratio: 1.7/1;" class="overflow-hidden relative">
        <!-- svelte-ignore a11y-img-redundant-alt -->
        <img
          src={PUBLIC_CMS_URL + data.Banner.data[0].attributes.url}
          class="w-full absolute left-1/2 transform -translate-x-1/2 top-1/2 -translate-y-1/2"
          alt="image"
        />
      </div>
      <div class="p-8">
        <a
          href="/"
          class="hover:underline text-2xl font-semibold mb-4 text-[#9B4AFF]"
          >{data.MainHeader}</a
        >
        {#if data.RRT && data.RRT[0]}
          <p class="my-4 text-gray-600">
            {data.RRT[0].Content}
          </p>
        {/if}
      </div>
    </div>
    <div class="px-8 pb-8">
      {#if data.CTA[0]}
        <a
          href={data.CTA[0].url}
          class="rounded-full bg-[#9B4AFF] text-white py-3 px-6 transition hover:opacity-75"
          >{data.CTA[0].text}</a
        >
      {/if}
    </div>
  </a>
{/if}
