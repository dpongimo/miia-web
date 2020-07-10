<script>
  import { Client } from "async-hydrus.js";

  import { onMount } from "svelte";
  import { GetClient, required_permissions } from "../js/hydrus-connection.js";
  import { ShowError, Connected } from "../js/stores.js";

  let address = "http://127.0.0.1:45869";
  let selected_key = "";
  let entered_key = "";
  let connecting = false;
  let address_validated = false;
  let key_validated = false;

  onMount(() => {
    // Get default address
    const local_address_json = localStorage.getItem("address");
    if (!!local_address_json) {
      address = JSON.parse(local_address_json);
    }
    // Get default key
    const local_key_json = localStorage.getItem("access_key");
    if (!!local_key_json) {
      selected_key = JSON.parse(local_key_json);
    }
    (async () => {
      if (!!local_address_json) {
        try {
          await connect();
        } catch (error) {
          console.error(error);
        }
      }
    })();
    // If default, do connect now
    // client_ref = GetClient();
    // If default, validate key
    // Done!
  });

  async function connect() {
    if (connecting) return;
    connecting = true;
    const client = GetClient(address);

    try {
      const { version } = await client.api_version();
      console.log(`Connected with API version: ${version}`);
      localStorage.setItem("address", JSON.stringify(address));
      address_validated = true;
      if (!!selected_key) {
        await validateKey();
      }
    } catch (error) {
      console.error(error);
      ShowError.set(error);
      Connected.set(false);
    }
    connecting = false;
  }

  async function requestSessionKey() {
    const client = GetClient();
    try {
      const { access_key } = await client.request_new_permissions(
        "miia-web",
        required_permissions
      );

      localStorage.setItem("access_key", JSON.stringify(selected_key));
      selected_key = access_key;
      entered_key = selected_key;
    } catch (error) {
      console.error(error);
    }
  }

  async function validateKey() {
    connecting = true;
    const client = GetClient();
    client.access_key = selected_key;
    try {
      const { human_description } = await client.verify_access_key(
        selected_key
      );
      localStorage.setItem("access_key", JSON.stringify(selected_key));
      console.log(human_description);
      key_validated = true;
      Connected.set(true);
    } catch (error) {
      console.error(error);
    }
    connecting = false;
  }
</script>

<style lang="scss">

</style>

{#if !address_validated}
  <div id="connect-address">
    <p>Hydrus Client URL</p>
    <input bind:value={address} />

    <button
      on:click={connect}
      class="btn btn-primary"
      class:disabled={connecting}>
      Connect
    </button>
    {#if connecting}
      <div class="alert alert-primary d-flex align-items-left" role="alert">
        <div class="spinner-border" role="status" aria-hidden="true" />
        {#if !address_validated}
          <p>
            Connecting to
            <strong>{address}</strong>
            ...
          </p>
        {/if}
        {#if !key_validated && !!selected_key}
          <p>Validating key...</p>
        {/if}
      </div>
    {/if}
  </div>
{:else if !key_validated}
  <div id="connect-key">
    {#if !selected_key}
      <div class="request-new-key">
        <button class="btn btn-primary" on:click={requestSessionKey}>
          Request Temporary Key
        </button>
      </div>
    {/if}

    <div class="add-manual-key input-group">
      <input class="form-control" type="password" bind:value={entered_key} />
      <button
        class="btn"
        class:btn-secondary={!selected_key}
        class:btn-primary={!!selected_key}
        on:click={() => {
          selected_key = entered_key;
          validateKey();
        }}>
        Validate Manual Key
      </button>
    </div>
  </div>
{/if}
