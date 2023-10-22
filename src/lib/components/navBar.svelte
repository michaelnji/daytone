<script lang="ts">
  import { Button, Icon, Navbar } from "konsta/svelte";
  import { Arrow_back_ios, Arrow_forward_ios} from 'svelte-google-materialdesign-icons'
</script>

<Navbar
  centerTitle
  title="October 2023"
  subtitle="Sunday 13th"
 
>
  <Button slot='right' class='mr-2' tonal>
    <Icon >
    <Arrow_forward_ios size='16' tabindex="-1" class='focus:outline-0'></Arrow_forward_ios>
  </Icon>
  </Button>
  <Button slot='left' class='ml-2' tonal>
    <Icon >
    <Arrow_back_ios size='16' tabindex="-1" class='focus:outline-0'></Arrow_back_ios>
  </Icon>
  </Button>
</Navbar>
