<script lang="ts">
  import "./app.css";
  import Header from "$lib/components/Header.svelte";
  import Footer from "$lib/components/Footer.svelte";
</script>

<main class="flex flex-col">
  <Header />
  <slot />
  <Footer />
</main>
