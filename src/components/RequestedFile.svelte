<script>
  import { debug } from "svelte/internal";
  import { onMount } from "svelte";

  import { GetClient } from "../js/hydrus-connection.js";

  /**  */
  export let file_id;
  /** Metadata returned from Hydrus */
  export let return_metadata;

  /** @type {Client}*/
  let client;

  onMount(async () => {
    return_metadata = await loadMetadata(file_id);
    debugger;
  });

  

  async function loadFile(file_id) {
    if (!client) client = GetClient();
    return await client.get_file_metadata();
  }
</script>
