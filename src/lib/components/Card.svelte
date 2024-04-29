<script>
  import Button from "./Button.svelte";
  import Heading from "./Heading.svelte";

  export let data;
</script>

<div
  class="bg-white container p-10 rounded flex flex-col items-start drop-shadow"
>
  <h1 class="text-purple-800">{data.Header}</h1>
  <p class="pb-8">
    {data.Body}
  </p>
  <Button class="mt-auto" text={data.Button.text} href={data.Button.url} />
</div>
