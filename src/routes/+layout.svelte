<script lang="ts">
  import "./app.css";
  import Navbar from "$lib/components/Navbar.svelte";
  import Footer from "$lib/components/Footer.svelte";
</script>

<main class="flex flex-col">
  <Navbar />
  <slot />
  <Footer />
</main>
