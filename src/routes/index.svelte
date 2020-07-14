<script>
  import { onMount } from "svelte";
  import { GetClient } from "../js/hydrus-connection.js";

  import PageSection from "../components/layout/PageSection.svelte";
  import Setup from "../components/Setup.svelte";
  import TagSearch from "../components/TagSearch.svelte";

  let connected = false;
  let tabs = [];

  let address_validated = false;
  let key_validated = false;
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
    <div class="card">
      <details>
        <summary class="card-header">
          <span>Connect to Hydrus</span>
          {#if address_validated}
            <span class="badge bg-secondary">Connected</span>
          {:else}
            <span class="badge bg-danger">Not Connected</span>
          {/if}
          {#if key_validated}
            <span class="badge bg-secondary">Authenticated</span>
          {:else}
            <span class="badge bg-danger">Not Authenticated</span>
          {/if}
        </summary>
        <Setup bind:address_validated bind:key_validated />
      </details>
    </div>
  </div>
  <div class="col col-12">
    <h2>New Search</h2>
    <TagSearch />
  </div>
</PageSection>
