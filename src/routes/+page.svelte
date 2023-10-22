<script lang="ts">
  import AddEntry from "$lib/components/addEntry.svelte";
  import BottomNavBar from "$lib/components/bottomNavBar.svelte";
  import NavBar from "$lib/components/navBar.svelte";
  import { Page } from "konsta/svelte";
</script>

<section
  class="w-full overflow-x-hidden h-screen grid place-items-center max-w-xl !mx-auto"
>
  <Page>
    <NavBar />

    <AddEntry />

    <BottomNavBar />
  </Page>
</section>
