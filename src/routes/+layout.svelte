<script>
  import "../app.postcss";
  import { App } from "konsta/svelte";
</script>

<App theme="material" class="w-full mx-auto " safeAreas>
  <slot />
</App>
