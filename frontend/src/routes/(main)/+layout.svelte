<script>
  import Navbar from "../../components/Navbar.svelte";
</script>

<div>
  <div>
    <Navbar />
  </div>

  <main class="m-auto h-full w-[952px]">
    <!-- Populated by page.svelte -->
    <slot />
  </main>
</div>
