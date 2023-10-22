<script>
  import "../app.postcss";
  import { App } from "konsta/svelte";
</script>

<App theme="material" class="w-full max-w-4xl mx-auto dark" safeAreas>
  <slot />
</App>
