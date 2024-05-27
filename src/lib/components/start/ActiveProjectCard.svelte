<script lang="ts">
  import img from "$lib/images/0_3 5.png";
  import { formatDate } from "$lib/assets/helperFunctions";
  import { PUBLIC_CMS_URL } from "$env/static/public";

  export let data: any;
</script>

<div
  class="p-4 hover:bg-gray-100 transition rounded-2xl flex flex-col cursor-pointer"
>
  <div class="grow">
    <!-- svelte-ignore a11y-img-redundant-alt -->
    <div class="aspect-[1.68/1] overflow-hidden mb-6 rounded-xl">
      <img
        src={PUBLIC_CMS_URL + data.Image.data.attributes.url}
        class="w-full h-full"
        alt="image"
      />
    </div>
    <div class="mb-6">
      <span class="py-2 px-4 bg-[#DAB1FF] rounded-lg text-sm"
        >{formatDate(data.Date)}</span
      >
    </div>
    <a
      href={undefined}
      class="text-2xl font-semibold mb-4 text-gray-800 hover:underline transition"
      >{data.Header}</a
    >
    <p class="mb-8 mt-4 text-gray-600">
      {data.Body}
    </p>
  </div>
  <div class="flex flex-row items-center space-x-3 text-gray-500">
    <a href="/" class="hover:underline">{data.Author}</a><span
      class="inline w-1 h-1 rounded-full bg-gray-500"
    ></span><span>{data.TimeToRead} min läsning</span>
  </div>
</div>
