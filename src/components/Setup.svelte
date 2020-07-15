<script>
  import { Client } from "async-hydrus.js";

  import { onMount } from "svelte";
  import { GetClient, required_permissions } from "../js/hydrus-connection.js";
  import { ShowError, Connected } from "../js/stores.js";
  import { space } from "svelte/internal";

  /** From DOM Input */
  let address = "https://127.0.0.1:45869";
  let selected_key = "";
  /** From DOM Input */
  let entered_key = "";
  /** State */
  let connecting = false;
  /** 
   * Last connection observed
   * @type {Error}
   */
  let error_ref = undefined;
  export let address_validated = false;
  export let key_validated = false;
  let key_request_failed = false;
  let key_validate_failed = false;

  onMount(() => {
    // Get default address
    const local_address_json = localStorage.getItem("address");
    if (!!local_address_json) {
      address = JSON.parse(local_address_json);
    }
    // Get default key
    const local_key_json = localStorage.getItem("access_key");
    if (local_key_json) {
      selected_key = JSON.parse(local_key_json);
      entered_key = JSON.parse(local_key_json);
    }
    (async () => {
      if (!!local_address_json) {
        try {
          await connect();
        } catch (error) {
          console.error(error);
          error_ref = error;
        }
      }
    })();
  });

  async function connect() {
    if (connecting) return;
    error_ref = "";
    connecting = true;
    const client = GetClient(address);
    console.log(client.address);
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
      error_ref = error;
      address_validated = false;
    }
    connecting = false;
  }

  async function requestSessionKey() {
    const client = GetClient();
    error_ref = "";
    key_request_failed = false;
    try {
      const { access_key } = await client.request_new_permissions(
        "miia-web",
        required_permissions
      );

      localStorage.setItem("access_key", JSON.stringify(selected_key));
      selected_key = access_key;
      entered_key = selected_key;
      key_validate_failed = false;
    } catch (error) {
      console.error(error);
      error_ref = error;
      key_request_failed = true;
    }
  }

  async function validateKey() {
    connecting = true;
    key_validate_failed = false;
    key_request_failed = false;
    const client = GetClient();
    client.access_key = selected_key;
    error_ref = "";
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
      error_ref = error;
      key_validated = false;
      key_validate_failed = true;
    }
    connecting = false;
  }
</script>

<style lang="scss">
  .embed-responsive {
    background-color: black;
  }
</style>

<section class="container">
  <form
    id="connect-address input-group"
    on:submit|preventDefault={() => {
      if (!address_validated) {
        connect();
      } else if (!key_validated) {
        if (entered_key) {
          selected_key = entered_key;
          validateKey();
        } else {
          requestSessionKey();
        }
      }
    }}>
    <label for="url-input" class="form-label">Your Hydrus Client API URL</label>
    <div class="input-group">
      <input
        id="url-input"
        class="form-control"
        class:is-valid={address_validated}
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

    <label for="key-input" class="form-label">Your Hydrus Client API Key</label>
    <div class="input-group">
      {#if !entered_key}
        <div class="request-new-key">
          <button class="btn btn-primary" on:click={requestSessionKey}>
            Request Key
          </button>
        </div>
      {/if}
      <input
        id="key-input"
        class="form-control"
        class:is-valid={key_validated}
        type="password"
        aria-describedby="key-help"
        on:change={() => {
          key_validated = false;
        }}
        bind:value={entered_key} />
      <button
        class="btn"
        disabled={!entered_key}
        class:btn-secondary={!entered_key}
        class:btn-primary={!!entered_key}
        type="submit">
        Validate Key
      </button>
    </div>
    <div id="key-help" class="form-text">
      The generated API key from your Hydrus Client
    </div>
  </form>
  {#if !address_validated}
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
    {#if error_ref && error_ref.constructor == TypeError}
      <div class="alert alert-danger alert-dismissible fade show" role="alert">
        <h4 class="alert-heading">
          Error {address_validated ? 'while validating your key' : 'while connecting'}
        </h4>

        <hr />

        <div class="row">
          <div class="col col-12 col-md-7 col-lg-8">
            <h4>Fixes</h4>
            <p>
              Depending on what the Test Connection box says you can fix the
              problem in various ways.
            </p>
            <div class="accordian">
              <div class="card">
                <details>
                  <summary class="card-header">
                    <span>
                      Did Not Connect: Potential Security Issue
                      <span class="badge bg-secondary">Most Likely</span>
                    </span>
                  </summary>
                  <div class="card-body">
                    <p>
                      To authorize your connection, you'll need to tell your
                      browser to trust your Hydrus Client's self-signed HTTPS
                      certificate.
                    </p>
                    <p>
                      In the Test Connection box, you'll need to allow the
                      connection. This varies by browser but you'll press
                      something like:
                    </p>
                    <ol>
                      <li class="m-2">
                        <span class="btn btn-secondary btn-sm disabled">
                          Advanced...
                        </span>
                      </li>
                      <li class="m-2">
                        <span class="btn btn-secondary btn-sm disabled">
                          Accept the Risk and Continue
                        </span>
                        <ul>
                          <li>
                            <p>
                              If this button doesn't show up,
                              <a
                                href={address}
                                target="_blank"
                                class="btn btn-primary">
                                click here
                              </a>
                              and try again.
                            </p>
                          </li>
                        </ul>

                      </li>
                    </ol>
                  </div>
                </details>
              </div>
              <div class="card">
                <details>
                  <summary class="card-header">
                    <span>Unable to connect</span>
                  </summary>
                  <div class="card-body">
                    <p>
                      Make sure that you're allowing Hydrus Client through your
                      OS's firewall.
                    </p>
                    <p>
                      Make sure the address you entered
                      <code class="badge bg-secondary">{address}</code>
                      is correct.
                      <a
                        target="_blank"
                        rel="noreferrer noopener"
                        href="https://uca.edu/it/knowledgebase-legacy/finding-your-ip-address-lan/">
                        University of Central Arkansas has a decent guide on
                        finding your local IP address.
                      </a>
                      A good address will use a format similar to:
                    </p>
                    <ul>
                      <li>
                        <code>https://127.0.0.1:45869</code>
                        <span>
                          Hydrus Client is directly on the same computer
                        </span>
                      </li>
                      <li>
                        <code>https://192.168.1.150:45869</code>
                        <ul>
                          <li>
                            <span>Hydrus Client is on your LAN</span>
                          </li>
                        </ul>
                      </li>
                      <li>
                        <code>https://your-exact-pc-name.local:45869</code>
                        <ul>
                          <li>
                            <span>
                              Hydrus Client is on your LAN and you are accessing
                              from an iOS or MacOS device
                            </span>
                          </li>
                        </ul>
                      </li>
                      <li>
                        <code>https://your-exact-pc-name:45869</code>
                        <ul>
                          <li>
                            <span>
                              Hydrus Client is on your LAN and you are accessing
                              from a Windows device that is set to "Private
                              Network"
                            </span>
                          </li>
                        </ul>
                      </li>
                    </ul>
                  </div>
                </details>
              </div>
              <div class="card">
                <details>
                  <summary class="card-header">
                    <span>The connection was reset</span>
                  </summary>
                  <div class="card-body">
                    <p>
                      Your address and port are correct, but you're connecting
                      to Hydrus over HTTP instead of HTTPS.
                    </p>
                    <p>
                      Make sure that
                      <strong>use https</strong>
                      is checked in
                      <code>services / manage services / edit: client api</code>
                    </p>
                  </div>
                </details>
              </div>
            </div>
          </div>

          <div class="col col-12 col-md-5 col-lg-4">
            <div class="card">
              <h5 class="card-header">
                <h5>Test Connection</h5>
              </h5>
              <div class="card-body">
                <div class="embed-responsive embed-responsive-1by1">
                  <iframe src={address} title="Invalid HTTPS Fix" />
                </div>
              </div>
            </div>
          </div>
        </div>

        <button
          type="button"
          class="close"
          data-dismiss="alert"
          aria-label="Close"
          on:click={() => {
            error_ref = undefined;
          }}>
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
    {:else if error_ref != undefined}
      <div class="alert alert-danger alert-dismissible fade show" role="alert">
        <h4 class="alert-heading">
          Error {address_validated ? 'while validating your key' : 'while connecting'}
        </h4>

        <hr />
        <code class="mb-0">{String(error_ref)}</code>

        <button
          type="button"
          class="close"
          data-dismiss="alert"
          aria-label="Close"
          on:click={() => {
            error_ref = undefined;
          }}>
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
    {/if}
  {/if}
  {#if key_request_failed || key_validate_failed}
    <div class="alert alert-danger" role="alert">
      <h4 class="alert-heading">
        Error {key_request_failed ? 'while requesting a new key' : ''} {key_validate_failed ? 'while validating your key' : ''}
      </h4>
      {#if key_request_failed}
        <p>
          To request a new key, open Hydrus Client and go to
          <code>services / review services / local / client api</code>
          and press
          <code>add / from api request</code>
        </p>
      {/if}
      {#if key_validate_failed}
        <p>
          If you just created a key, make sure to
          <strong>apply</strong>
          your changes before validating again.
        </p>
        <p>
          If you need a new key, press
          <button class="btn btn-primary btn-sm" on:click={requestSessionKey}>
            Request Key
          </button>
        </p>
      {/if}

    </div>
  {/if}
</section>
