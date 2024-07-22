<script lang="ts">
  let copied = false;

  const copyMailToClipboard = (e: any) => {
    e.preventDefault();
    const mail = "info@digitaltinnovationscenter.se";
    navigator.clipboard.writeText(mail);
    e.target.classList.remove("transition");
    copied = true;
    setTimeout(() => {
      e.target.classList.add("transition");
      copied = false;
    }, 250);
  };
</script>

<div class="h-screen w-full flex items-center justify-center">
  <div class="flex flex-col items-center space-y-6">
    <div class="text-[360px] font-bold leading-none gradient-404-text">404</div>
    <div class="text-5xl font-bold text-gray-800">
      Hoppsan! Här var det tomt.
    </div>
    <div class="text-lg max-w-[460px] text-center font-light text-gray-700">
      Den sidan du försöker besöka verkar inte finnas. Gå tillbaka till
      <a href="/" class="underline text-secondary-purple-100">startsidan</a>
      eller
      <!-- svelte-ignore missing-declaration -->
      <button
        on:click={copyMailToClipboard}
        class:copied
        class="underline text-secondary-purple-100">mejla oss</button
      >
      <span class="text-gray-400">(tryck för att kopiera mejladressen)</span>.
    </div>
  </div>
</div>

<style>
  .copied {
    background-color: #f9f9f9;
    color: #f00;
  }

  .gradient-404-text {
    background: -webkit-linear-gradient(#9b4aff, #fff);
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }
</style>
