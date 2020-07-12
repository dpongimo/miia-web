<script>
  import { debug } from "svelte/internal";
  import { onMount } from "svelte";

  import { GetClient, IsMIMEAllowed } from "../js/hydrus-connection.js";

  /**  */
  export let file_id;
  /** Metadata returned from Hydrus */
  export let metadata;
  /** @type {string} */
  let object_url;

  /** @type {Client}*/
  let client;

  /** @type {File}*/
  export let file;

  onMount(async () => {
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
</script>

<style lang="scss">
  .spinner-border {
    color: white;
    max-width: 10vw;
    width: 100%;
    max-height: 10vh;
    height: 100%;
  }
</style>

{#if typeof metadata === 'object' && IsMIMEAllowed(metadata.mime)}

  {#await getFileURL(file_id)}

    <div class="spinner-border" role="status" aria-hidden="true" />
    <p>Downloading {file_id}</p>

  {:then this_object_url}

    <img class="img-fluid" src={this_object_url} alt="" />

  {:catch error}

    {@debug error}
    <pre style="color: red">{error.message}</pre>

  {/await}
{/if}
