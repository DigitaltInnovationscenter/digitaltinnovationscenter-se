<script lang="ts">
  export let data: any = [];
</script>

<div class="p-8 bg-white flex flex-col rounded-2xl shadow-lg">
  <div class="grow">
    <a
      href="/"
      class="hover:underline text-2xl font-semibold mb-4 text-[#9B4AFF]"
      >{data.Header}</a
    >
    <p class="mb-8 mt-4 text-gray-600">
      {data.Body}
    </p>
  </div>
  <div>
    <a
      href={data.Button.url}
      class="rounded-full bg-[#9B4AFF] text-white py-3 px-6 transition hover:opacity-75"
      >{data.Button.text}</a
    >
  </div>
</div>
