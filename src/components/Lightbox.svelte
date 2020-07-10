<script>
  import { onMount } from "svelte";
  import { GetClient } from "../js/hydrus-connection.js";

  import RequestedFile from "./RequestedFile.svelte";

  export let file_ids = [];
  export let index = 0;
  export let enabled = false;
  /** @type {Map<number, object>}*/
  let cached_metadata = new Map();

  /** @type {Client}*/
  let client;

  async function loadMetadata(file_id) {
    if (!client) client = GetClient();
    return await client.get_file_metadata();
  }

  onMount(() => {});
</script>

{#if enabled}
  <div class="background">
    <div class="images">
      <div class="current">
        <RequestedFile file_id={file_ids[index]} />
      </div>
    </div>
    {#if index > 0}
      <button
        id="previous"
        on:click={() => {
          index--;
        }}>
        ◀
      </button>
    {/if}
    {#if index < file_ids.length - 1}
      <button
        id="next"
        on:click={() => {
          index++;
        }}>
        ▶
      </button>
    {/if}
  </div>
{/if}
