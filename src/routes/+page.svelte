<script>
  import {
    Page,
    Navbar,
    NavbarBackLink,
    BlockTitle,
    Block,
    Button,
    Actions,
    ActionsButton,
    ActionsLabel,
    ActionsGroup,
  } from "konsta/svelte";

  let actionsOneOpened = false;
  let actionsTwoOpened = false;
</script>

<section
  class="w-full overflow-x-hidden h-screen grid place-items-center max-w-xl !mx-auto"
>
  <Page>
    <Navbar title="Day tone"  />
    <Block  inset class="space-y-4">
      <p class=" text-md-dark-primary font-bold">
        Action Sheet is a slide-up pane for presenting the user with a set of
        alternatives for how to proceed with a given task.
      </p>
    </Block>
    <BlockTitle>Open Action Sheet</BlockTitle>
    <Block strong inset class="flex space-x-4 rtl:space-x-reverse">
      <Button onClick={() => (actionsOneOpened = true)}>One group</Button>
      <Button onClick={() => (actionsTwoOpened = true)}>Two groups</Button>
    </Block>
    <Actions
      opened={actionsOneOpened}
      onBackdropClick={() => (actionsOneOpened = false)}
    >
      <ActionsGroup>
        <ActionsLabel>Do something</ActionsLabel>
        <ActionsButton onClick={() => (actionsOneOpened = false)} bold>
          Button 1
        </ActionsButton>
        <ActionsButton onClick={() => (actionsOneOpened = false)}>
          Button 2
        </ActionsButton>
        <ActionsButton onClick={() => (actionsOneOpened = false)}>
          Cancel
        </ActionsButton>
      </ActionsGroup>
    </Actions>
    <Actions
      opened={actionsTwoOpened}
      onBackdropClick={() => (actionsTwoOpened = false)}
    >
      <ActionsGroup>
        <ActionsLabel>Do something</ActionsLabel>
        <ActionsButton onClick={() => (actionsTwoOpened = false)} bold>
          Button 1
        </ActionsButton>
        <ActionsButton onClick={() => (actionsTwoOpened = false)}>
          Button 2
        </ActionsButton>
      </ActionsGroup>
      <ActionsGroup>
        <ActionsButton onClick={() => (actionsTwoOpened = false)}>
          Cancel
        </ActionsButton>
      </ActionsGroup>
    </Actions></Page
  >
</section>
