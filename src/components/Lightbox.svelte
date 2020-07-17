<script>
  import { onMount } from "svelte";
  import { GetClient } from "../js/hydrus-connection.js";
  import { GetMetadataTable, cleanMetadata } from "../js/local-database.js";

  import RequestedFile from "./RequestedFile.svelte";

  export let file_ids = [];
  export let index = 0;
  export let enabled = false;

  /** @type {Map<string, object>}*/
  let cached_metadata = new Map();

  /** @type {Client}*/
  let client;

  // $: {
  //   if (file_ids && index !== 0) {
  //     setURLIndex(file_ids[index]);
  //   }
  // }

  /**
   * Does basic caching of file_id metadata
   * @param {string} file_id
   */
  async function getMetadata(file_id) {
    const db = {};
    db.files = GetMetadataTable();
    // if (cached_metadata.has(file_id)) {

    //   return cached_metadata.get(file_id);
    // } else {
    if (!client) client = GetClient();
    const data = await client.get_file_metadata({
      file_ids: [file_id],
    });
    const metadata = cleanMetadata(data.metadata[0]);
    db.files.put(metadata, [file_id])
    
    // const result = await db.files.where({ file_id });
    // cached_metadata.set(file_id, metadata[0]);
    return metadata;
    // }
  }

  function setURLIndex(file_id) {
    if ("URLSearchParams" in window) {
      const search_params = new URLSearchParams(window.location.search);
      search_params.set("id", file_ids[index]);
      const relative_path_query =
        window.location.pathname + "?" + search_params.toString();
      history.pushState(null, "", relative_path_query);
    }
  }

  onMount(() => {});
</script>

<style lang="scss">
  .background {
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    width: var(--window-width);
    height: var(--window-height);
    background-color: rgba(0, 0, 0, 0.9);
    z-index: 10;
    .files {
      display: flex;
      justify-content: center;
      align-items: center;
      position: absolute;
      width: 100%;
      height: 100%;
      .file {
        position: relative;
        max-width: var(--window-width);
        max-height: var(--window-height);
        overflow: scroll scroll;
        scrollbar-width: thin;
      }
    }
  }

  .nav-buttons {
    z-index: 11;
    position: absolute;
    top: 0;
    height: 100%;
    border: none;
    padding: 0 2.5vw;
    opacity: 0.2;
    transition: opacity 200ms linear;
    background: rgb(0, 0, 0);

    $gradient: rgba(0, 0, 0, 0.5) 0%, rgba(0, 0, 0, 0) 100%;

    &:hover {
      opacity: 1;
    }

    &#previous {
      left: 0;
      background: linear-gradient(90deg, $gradient);
    }
    &#next {
      right: 0;
      background: linear-gradient(270deg, $gradient);
    }
  }

  .close {
    z-index: 11;
    position: absolute;
    top: 32px;
    right: 32px;
  }

  .spinner-border {
    color: white;
    max-width: 128px;
    max-height: 128px;
  }
</style>

{#if enabled}
  <div class="background">
    <div class="files">
      <div class="file current">
        {#if typeof index === 'number'}
          {#await getMetadata(file_ids[index])}
            <div
              class="spinner-border"
              role="status"
              title="Querying {file_ids[index]}'s metadata" />
          {:then metadata}
            <RequestedFile file_id={file_ids[index]} {metadata} />
          {:catch error}
            <p style="color: yellow">
              Querying
              <code>{index}</code>
              of
              <code>file_ids[{file_ids.length}]</code>
              {file_ids[index]}'s metadata
            </p>
            <pre style="color: red">{error.message}</pre>
            {@debug error}
          {/await}
        {:else}
          <pre style="color: red">index [{index}] is not a number</pre>
        {/if}
      </div>
    </div>
    {#if index > 0}
      <button
        id="previous"
        class="nav-buttons"
        on:click={() => {
          index--;
        }}>
        ◀
      </button>
    {/if}
    {#if index < file_ids.length - 1}
      <button
        id="next"
        class="nav-buttons"
        on:click={() => {
          index++;
        }}>
        ▶
      </button>
    {/if}
    <button
      class="close"
      on:click={() => {
        enabled = false;
      }}>
      ❌
    </button>
  </div>
{/if}
