<script lang="ts">
  export let text: string;
  export let href: string;
</script>

<button
  class="bg-purple-500 hover:bg-purple-700 text-white py-2 px-4 rounded-full"
>
  <a {href}>{text}</a>
</button>
