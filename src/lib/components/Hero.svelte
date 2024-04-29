<script lang="ts">
  import { getContext } from "svelte";
  import Button from "./Button.svelte";

  export let data: any;

  const cms_url = getContext("cms_url");

  console.log(data);
</script>

<div class="bg-gray-50 p-10">
  <div class="container flex items-center mx-auto">
    <div class="flex-1 w-full justify-center flex flex-col gap-10 items-start">
      <h1 class="text-left text-4xl">{data.Header}</h1>
      <Button text={data.CTA.text} href={data.CTA.url} />
    </div>
    <img
      class="object-contain flex-1 basis-0 w-full min-w-0"
      src={`${cms_url}${data.Image.data.attributes.url}`}
    />
  </div>
</div>
