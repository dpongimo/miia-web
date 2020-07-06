<script>
  import { onMount } from "svelte";
  import { GetClient } from "../js/hydrus-connection.js";

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

<h1>Miia Web!</h1>
<p>a web client for Hydrus</p>

<Setup />

<TagSearch />
