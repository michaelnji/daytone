<script lang=ts>
  import { Fab } from "konsta/svelte";
  import { Add } from "svelte-google-materialdesign-icons";

     
</script>

 <!-- Right Bottom -->
  <Fab class="fixed right-4-safe bottom-24-safe z-20">
    <svelte:component this={Add} tabindex="-1" class='focus:outline-0' slot="icon" />
  </Fab>