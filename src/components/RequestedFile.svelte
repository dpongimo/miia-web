<script>
  import { debug } from "svelte/internal";
  import { onMount } from "svelte";

  import { GetClient, IsMIMEAllowed } from "../js/hydrus-connection.js";

  /** @type {Number}  */
  export let file_id;
  /** Metadata returned from Hydrus */
  export let metadata = undefined;
  /** API control to load the file */
  export let enabled = false;
  /** @type {string} */
  let object_url;

  /** @type {Client}*/
  let client;

  /** @type {File}*/
  export let file = null;

  onMount(() => {
    return () => {
      if (object_url) {
        URL.revokeObjectURL(object_url);
      }
    };
  });

  async function getFileURL(target_id) {
    if (object_url) {
      URL.revokeObjectURL(object_url);
    }

    const client = GetClient();
    const blob = await client.get_file({ file_id: file_id });
    file = new File([blob], String(file_id) + metadata.ext, {
      type: metadata.mime,
    });
    object_url = URL.createObjectURL(file);
    return object_url;
  }

  // $: console.log(enabled, file_id);
</script>

<style lang="scss">
  .media-container {
    color: white;
  }

  .spinner-border {
    color: white;
    max-width: 128px;
    max-height: 128px;
  }

  .img-fluid {
    max-height: 100%;
  }
</style>

{#if enabled && typeof metadata === 'object' && IsMIMEAllowed(metadata.mime)}
  <div class="media-container">
    {#await getFileURL(file_id)}

      <div
        class="spinner-border"
        role="status"
        title="Downloading {file_id}"
        aria-hidden="true" />
      <h4>{file_id}</h4>

    {:then this_object_url}

    <img class="img-fluid" src={this_object_url} alt="" />
      <!-- {#if metadata.mime.includes('image')}
      {:else if metadata.mime.includes('video')}
        <video muted loop playsinline autoplay src={this_object_url} />
      {/if} -->
      <!-- <h5>
        <code>{file_id}</code>
      </h5>
      <p>
        Enabled:
        <code>{enabled}</code>
      </p> -->

    {:catch error}

      {@debug error}
      <pre style="color: red">{error.message}</pre>

    {/await}
  </div>
{/if}
