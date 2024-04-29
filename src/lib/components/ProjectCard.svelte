<script>
  import { getContext } from "svelte";
  import Button from "./Button.svelte";

  export let data;

  const cms_url = getContext("cms_url");

  const publishDate = new Date(data.Date);

  const options = { month: "short", day: "numeric", year: "numeric" };
  const formattedDate = publishDate.toLocaleDateString("sv-SE", options);
</script>

<div class="bg-white container flex flex-col gap-5 items-start max-w-[400px]">
  <img src={`${cms_url}${data.Image.data.attributes.url}`} alt="placeholder" />
  <div class="bg-purple-100 rounded p-2">{formattedDate}</div>
  <h1 class="text-2xl">{data.Header}</h1>
  <p>
    {data.Body}
  </p>
</div>
