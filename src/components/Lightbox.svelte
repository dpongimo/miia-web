<script>
  import { onMount } from "svelte";
  import { GetClient } from "../js/hydrus-connection.js";
  import { GetMetadataTable, cleanMetadata } from "../js/local-database";

  import RequestedFile from "./RequestedFile.svelte";

  export let file_ids = [];
  export let index = 0;
  export let enabled = false;
  export let loaded_range = 2;

  /** Last index observed to help detect when a scroll event needs to fire */
  let last_index = 0;

  /** @type {Map<string, object>}*/
  let cached_metadata = new Map();

  /** @type {Client}*/
  let client;

  /** @type {Element[]} */
  let dom_file_refs = [];

  /**
   * Does basic caching of file_id metadata
   * @param {string} file_id
   */
  async function getMetadata(file_id) {
    const db = {};
    db.files = GetMetadataTable();
    return await db.files.get(file_id);
  }

  /**
   * @param {number} target_index
   */
  function isFileReadyToLoad(target_index) {
    return (
      target_index >= index - loaded_range &&
      target_index <= index + loaded_range
    );
  }

  $: if (index !== last_index) {
    if (dom_file_refs && dom_file_refs[index]) {
      last_index = index;
      dom_file_refs[index].scrollIntoView({
        behavior: "smooth",
        block: "center",
        inline: "center",
      });
    }
  }

  // function setURLIndex(file_id) {
  //   if ("URLSearchParams" in window) {
  //     const search_params = new URLSearchParams(window.location.search);
  //     search_params.set("id", file_ids[index]);
  //     const relative_path_query =
  //       window.location.pathname + "?" + search_params.toString();
  //     history.pushState(null, "", relative_path_query);
  //   }
  // }

  onMount(() => {});
</script>

<style lang="scss">
  .background {
    // Center on page
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    width: var(--window-width);
    height: var(--window-height);
    background-color: rgba(0, 0, 0, 0.9);

    // Elevate to set height
    z-index: 10;

    // Container for the files
    // Designed to scroll left and right
    .files {
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: row;
      position: absolute;
      height: 100%;
      width: var(--window-width);
      overflow: scroll visible;
      // Individual file
      .file {
        // flex
        flex-grow: 1;
        // Important for any children so they can be centered
        position: relative;
        // Should be the max size
        min-width: 100vw;
        height: 100vh;
        max-width: var(--window-width);
        max-height: var(--window-height);
        // Allow the user to scroll and zoom the individual file
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

      <!-- {#if typeof index === 'number'}
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
        {/if} -->
      {#each file_ids as this_id, this_i (this_id)}
        <div
          class="file"
          class:current={index === this_i}
          bind:this={dom_file_refs[this_i]}>
          {#await getMetadata(this_id)}

            <div
              class="spinner-border"
              role="status"
              title="Querying {this_id}'s metadata" />

          {:then metadata}

            <!-- <p style="color: yellow">
              From
              <code>file_ids[{file_ids.length}]</code>
              : select index
              <code>{this_i}</code>
            </p> -->
            <RequestedFile
              file_id={this_id}
              enabled={(this_i >= index - loaded_range && this_i <= index + loaded_range)}
              {metadata} />

          {:catch error}

            <p style="color: yellow">
              From
              <code>file_ids[{file_ids.length}]</code>
              : select index
              <code>{this_i}</code>
            </p>
            <pre style="color: red">{error.message}</pre>
            {@debug error}
          {/await}
        </div>
      {/each}
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
