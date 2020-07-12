<script>
  import { onMount } from "svelte";
  import { GetClient } from "../js/hydrus-connection.js";

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
    if (cached_metadata.has(file_id)) {
      return cached_metadata.get(file_id);
    } else {
      if (!client) client = GetClient();
      const { metadata } = await client.get_file_metadata({
        file_ids: [file_id],
      });
      cached_metadata.set(file_id, metadata[0]);
      return metadata[0];
    }
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
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.9);
    z-index: 1;
    .images {
      display: flex;
      justify-content: center;
      align-items: center;
      position: absolute;
      width: 100%;
      height: 100%;
      .image {
        max-width: 100vw;
        max-height: 100vh;
      }
    }
  }

  .nav-buttons {
    z-index: 1;
    position: absolute;
    top: 0;
    height: 100%;
    background: none;
    border: none;
    padding: 0 10vw;
    opacity: 0.2;
    transition: opacity 200ms linear;

    &:hover {
      opacity: 1;
    }

    &#previous {
      left: 0;
    }
    &#next {
      right: 0;
    }
  }

  .close {
    z-index: 1;
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
    <div class="images">
      <div class="image current">
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
