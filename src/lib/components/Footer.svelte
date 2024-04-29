<script>
  import behanch from "$lib/images/behanch.svg";
  import facebook from "$lib/images/facebook.svg";
  import twitter from "$lib/images/twitter.svg";
  import youtube from "$lib/images/youtube.svg";
  import copy from "$lib/images/copy.svg";

  let copied = false;

  const copyMailToClipboard = (e) => {
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

<div class="bg-gray-100 flex justify-between px-10 py-5">
  <div class="flex flex-col items-start gap-4">
    <img class="pb-4" src="https://via.placeholder.com/150x30" />
    <p class="max-w-[250px]">
      Har du några funderingar? Du får gärna kontakta oss! Det gör du via mejlen
      nedanför.
    </p>
    <button class:copied on:click={copyMailToClipboard}
      ><img src={copy} class="w-6 h-6 inline-block" /><span
        class="pl-2 underline">Kopiera mejdadressen här!</span
      ></button
    >
  </div>
  <div>
    <h1 class="pb-8 font-bold">Sidor</h1>
    <ul class="flex flex-col gap-2">
      <li>Om oss</li>
      <li>Våra projekt</li>
      <li>Nyheter</li>
      <li>Jobba hos oss</li>
    </ul>
  </div>
  <div>
    <h1 class="pb-8 font-bold">Följ oss</h1>
    <ul class="flex flex-row gap-2">
      <li><img src={behanch} /></li>
      <li><img src={twitter} /></li>
      <li><img src={youtube} /></li>
      <li><img src={facebook} /></li>
    </ul>
    <p class="pt-8">2023 Innovationscenter</p>
  </div>
</div>

<style>
  .copied {
    background-color: #f9f9f9;
    color: #f00;
  }
</style>
