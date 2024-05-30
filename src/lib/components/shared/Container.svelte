<script lang="ts">
  export let backgroundColor = "";
  export let foreGroundColor = "";
  export let rounded = true;
  export let paddingTop = "pt-36";
</script>

<div class="w-full {backgroundColor} m-auto">
  <div
    class="w-full {foreGroundColor} {paddingTop} pb-48 {rounded
      ? 'rounded-t-[80px]'
      : ''}"
  >
    <slot />
  </div>
</div>
