<script lang="ts">
  export let data: any = [];
</script>

<a
  href="/"
  class="p-8 bg-white flex flex-col rounded-2xl shadow-lg hover:shadow-xl transition"
>
  <div class="grow">
    <a
      href="/"
      class="hover:underline text-2xl font-semibold mb-4 text-[#9B4AFF]"
      >{data.Header}</a
    >
    <p class="mb-16 mt-4 text-gray-600">
      {data.Content}
    </p>
    <a
      href="/"
      class="rounded-full bg-[#9B4AFF] text-white py-3 px-6 transition hover:opacity-75"
      >Läs mer</a
    >
  </div>
</a>
