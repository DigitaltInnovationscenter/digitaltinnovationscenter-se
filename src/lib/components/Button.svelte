<script lang="ts">
  export let text: string;
  export let href: string;

  let classname = "";
  export { classname as class };
</script>

<button
  class={`bg-purple-500 hover:bg-purple-700 text-white py-2 px-4 rounded-full ${classname}`}
>
  <a {href}>{text}</a>
</button>
