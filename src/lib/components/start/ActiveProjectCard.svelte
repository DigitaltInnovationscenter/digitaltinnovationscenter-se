<script lang="ts">
  import img from "$lib/images/0_3 5.png";
  import { formatDate } from "$lib/assets/helperFunctions";

  export let data: any = {
    header: "",
    date: "",
    content: "",
    href: "",
    author: "",
    timeToRead: "",
  };
</script>

<div class="p-6 bg-white flex flex-col">
  <div class="grow">
    <!-- svelte-ignore a11y-img-redundant-alt -->
    <img src={img} class="w-full mb-6 rounded-xl" alt="image" />
    <div class="mb-6">
      <span class="py-2 px-4 bg-[#DAB1FF] rounded-lg text-sm"
        >{formatDate(data.date)}</span
      >
    </div>
    <h3 class="text-2xl font-semibold mb-4 text-slate-800">{data.header}</h3>
    <p class="mb-8">
      {data.content}
    </p>
  </div>
  <div class="flex flex-row items-center space-x-3 text-gray-500">
    <span>{data.author}</span><span
      class="inline w-1 h-1 rounded-full bg-gray-500"
    ></span><span>{data.timeToRead} min läsning</span>
  </div>
</div>
