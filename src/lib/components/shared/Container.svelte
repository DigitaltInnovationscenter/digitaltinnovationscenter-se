<script lang="ts">
  export let backgroundColor = "";
  export let foreGroundColor = "";
  export let rounded = true;
</script>

<div class="w-full {backgroundColor} m-auto">
  <div
    class="w-full {foreGroundColor} pt-36 pb-48 {rounded
      ? 'rounded-t-[80px]'
      : ''}"
  >
    <slot />
  </div>
</div>
