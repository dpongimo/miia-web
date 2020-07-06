<script>
  import { Client } from "hydrus.js";

  import { onMount } from "svelte";
  import {
    GetClient,
    GetKeys,
    required_permissions,
  } from "../js/hydrus-connection.js";
  import { ShowError, Connected } from "../js/stores.js";

  let address = "http://127.0.0.1:45869";
  let access_keys = [];
  let selected_key;
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
    const local_keys_json = localStorage.getItem("access_keys");
    if (!!local_keys_json) {
      access_keys = JSON.parse(local_keys_json);
      if (access_keys.length > 0) {
        selected_key = access_keys[0];
      }
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
    if(connecting) return;
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
      access_keys.push(access_key);

      localStorage.setItem("access_keys", JSON.stringify(access_keys));
      selected_key = access_key;
    } catch (error) {
      console.error(error);
    }
  }

  async function validateKey() {
    const client = GetClient();
    client.access_key = selected_key;
    try {
      const { human_description } = await client.verify_access_key(
        selected_key
      );
      localStorage.setItem("access_keys", JSON.stringify(access_keys));
      console.log(human_description);
      key_validated = true;
      Connected.set(true);
    } catch (error) {
      console.error(error);
    }
  }
</script>

<style lang="scss">

</style>

{#if !address_validated}
  <div id="connect-address">
    <p>Hydrus Client URL</p>
    <input value={address} />

    <button on:click={connect} class="btn btn-primary" class:disabled={connecting}>Connect</button>
    {#if connecting}
      <div class="alert alert-primary d-flex align-items-left" role="alert">
        <div class="spinner-border" role="status" aria-hidden="true" />
        <p>
          Connecting to
          <strong>{address}</strong>
          ...
        </p>

      </div>
    {/if}
  </div>
{:else if !key_validated}
  <div id="connect-key">
    {#if access_keys.length > 0}
      <div class="request-new-key">
        <button on:click={requestSessionKey}>Request Temporary Key</button>
      </div>
      <div class="previous-keys">
        <p>Previous Keys</p>
        <select value={selected_key}>
          {#each access_keys as key}
            <option value={key}>{key}</option>
          {/each}
        </select>
        <button on:click={validateKey}>Use Key</button>
      </div>
    {/if}

    <div class="add-manual-key">
      <input type="text" value={entered_key} />
      <button
        on:click={() => {
          access_keys.push(entered_key);
          selected_key = entered_key;
          validateKey();
        }}>
        Validate Manual Key
      </button>
    </div>
  </div>
{/if}
