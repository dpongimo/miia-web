<script>
  import { Client } from "async-hydrus.js";

  import { onMount } from "svelte";
  import { GetClient, required_permissions } from "../js/hydrus-connection.js";
  import { ShowError, Connected } from "../js/stores.js";

  let address = "http://127.0.0.1:45869";
  let selected_key = "";
  let entered_key = "";
  let connecting = false;
  let show_error = "";
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
          show_error = String(error);
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
    show_error = "";
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
      show_error = String(error);
    }
    connecting = false;
  }

  async function requestSessionKey() {
    const client = GetClient();
    show_error = "";
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
      show_error = String(error);
    }
  }

  async function validateKey() {
    connecting = true;
    const client = GetClient();
    client.access_key = selected_key;
    show_error = "";
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
      show_error = String(error);
    }
    connecting = false;
  }
</script>

<style lang="scss">

</style>

{#if !address_validated}
  <form id="connect-address input-group" on:submit|preventDefault={connect}>
    <label for="url-input" class="form-label">Hydrus Client URL</label>
    <div class="input-group">
      <input
        id="url-input"
        class="form-control"
        type="url"
        aria-describedby="url-help"
        bind:value={address} />

      <button
        on:click={connect}
        class="btn btn-primary"
        type="submit"
        class:disabled={connecting}
        disabled={connecting}>
        Connect
      </button>

    </div>
    <div id="url-help" class="form-text">
      The IP address or domain and port of your Hydrus Client
    </div>
  </form>
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
  {#if show_error.length > 0}
    <div class="alert alert-danger alert-dismissible fade show" role="alert">
      <h4 class="alert-heading">
        Error {address_validated ? 'while validating your key' : 'while connecting'}
      </h4>

      <hr />
      <code class="mb-0">{show_error}</code>

      <button
        type="button"
        class="close"
        data-dismiss="alert"
        aria-label="Close"
        on:click={() => {
          show_error = '';
        }}>
        <span aria-hidden="true">&times;</span>
      </button>
    </div>
  {/if}
{:else if !key_validated}
  <form
    id="connect-key"
    on:submit|preventDefault={() => {
      if (entered_key) {
        selected_key = entered_key;
        validateKey();
      } else {
        requestSessionKey();
      }
    }}>
    <label for="key-input" class="form-label">Hydrus Client URL</label>
    <div class="input-group">
      {#if !selected_key}
        <div class="request-new-key">
          <button class="btn btn-primary" on:click={requestSessionKey}>
            Request Temporary Key
          </button>
        </div>
      {/if}
      <input
        id="key-input"
        class="form-control"
        type="password"
        aria-describedby="key-help"
        bind:value={entered_key} />
      <button
        class="btn"
        class:btn-secondary={!selected_key}
        class:btn-primary={!!selected_key}
        type="submit">
        Validate Key
      </button>
    </div>
    <div id="key-help" class="form-text">
      The generated API key from your Hydrus Client
    </div>
  </form>
{/if}
