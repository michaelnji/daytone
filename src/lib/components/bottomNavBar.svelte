<script>
  // @ts-nocheck

  import { Icon, Tabbar, TabbarLink } from "konsta/svelte";
  import {
    Home,
    Today,
    Bar_chart,
    Settings,
  } from "svelte-google-materialdesign-icons";
  import AddEntry from "./addEntry.svelte";
  let activeTab = "Home";
  let isTabbarLabels = true;
  let isTabbarIcons = true;
</script>

<Tabbar
  labels={isTabbarLabels}
  icons={isTabbarIcons}
  class="left-0 right-0 bottom-0 fixed mx-auto"
>
  {#if isTabbarIcons}
    <TabbarLink
      active={activeTab === "Home"}
      onClick={() => (activeTab = "Home")}
      label={isTabbarLabels ? "Home" : undefined}
    >
      <svelte:fragment slot="icon">
        <Icon>
          <Home slot="material" class="w-6 h-6 focus:outline-0" tabindex="-1" />
        </Icon>
      </svelte:fragment>
    </TabbarLink>
    <TabbarLink
      active={activeTab === "Calendar"}
      onClick={() => (activeTab = "Calendar")}
      label={isTabbarLabels ? "Calendar" : undefined}
    >
      <svelte:fragment slot="icon">
        <Icon>
          <Today slot="material" class="w-6 h-6 focus:outline-0" tabindex="-1" />
        </Icon>
      </svelte:fragment>
    </TabbarLink>
    <TabbarLink
      active={activeTab === "Stats"}
      onClick={() => (activeTab = "Stats")}
      label={isTabbarLabels ? "Stats" : undefined}
    >
      <svelte:fragment slot="icon">
        <Icon>
          <Bar_chart slot="material" class="w-6 h-6 focus:outline-0" tabindex="-1" />
        </Icon>
      </svelte:fragment>
    </TabbarLink>
    <TabbarLink
      active={activeTab === "Settings"}
      onClick={() => (activeTab = "Settings")}
      label={isTabbarLabels ? "Settings" : undefined}
    >
      <svelte:fragment slot="icon">
        <Icon>
          <Settings slot="material" class="w-6 h-6 focus:outline-0" tabindex="-1" />
        </Icon>
      </svelte:fragment>
    </TabbarLink>
  {:else}
    <TabbarLink
      active={activeTab === "Home"}
      onClick={() => (activeTab = "Home")}
      label={isTabbarLabels ? "Home" : undefined}
    />
    <TabbarLink
      active={activeTab === "Calendar"}
      onClick={() => (activeTab = "Calendar")}
      label={isTabbarLabels ? "Calendar" : undefined}
    />
    <TabbarLink
      active={activeTab === "Stats"}
      onClick={() => (activeTab = "Stats")}
      label={isTabbarLabels ? "Stats" : undefined}
    />
    <TabbarLink
      active={activeTab === "Settings"}
      onClick={() => (activeTab = "Settings")}
      label={isTabbarLabels ? "Settings" : undefined}
    />
  {/if}
</Tabbar>
