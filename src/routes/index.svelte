<script>
  import { onMount } from "svelte";
  import { GetClient } from "../js/hydrus-connection.js";

  import PageSection from "../components/layout/PageSection.svelte";
  import Setup from "../components/Setup.svelte";
  import TagSearch from "../components/TagSearch.svelte";

  let connected = false;
  let tabs = [];
</script>

<style lang="scss">

</style>

<svelte:head>
  <title>Miia Web</title>
</svelte:head>
<PageSection>
  <div class="col">
    <h1>Miia Web!</h1>
    <p>a web client for Hydrus</p>
  </div>
</PageSection>

<PageSection>
  <div class="col col-12">
    <Setup />
  </div>
  <div class="col col-12">
    <h2>New Search</h2>
    <TagSearch />
  </div>
</PageSection>
