<script lang="ts">
  let className = "";
  export { className as class };
</script>

<h1 class={`text-4xl font-bold ${className}`}>
  <slot />
</h1>
