<script>
  import { onMount, tick } from "svelte";

  import { timeout } from "../js/helpers.js";

  import Thumbnail from "./Thumbnail.svelte";
  import Lightbox from "./Lightbox.svelte";

  /** @type {string[]} */
  export let file_ids = [];
  let old_files_ids = [];
  /** How far should each batch load */
  export let range = 10;
  /** What is the current file open? */
  export let index = 0;
  /** Last index observed to help detect when a scroll event needs to fire */
  let last_index = 0;

  /** @type {string[]} */
  let loaded_file_ids = [];
  /** @type {Element[]} */
  let dom_thumbnail_refs = [];
  /** @type {Element} */
  let dom_gallery;

  let furthest_index = 0;
  let lightbox_enabled = false;

  let file_data = new Map();

  /** @type {Element} */
  let dom_next_batch;

  // Reload if the file_ids array changes
  $: {
    if (file_ids !== old_files_ids) {
      old_files_ids = file_ids;
      loaded_file_ids = [];
    }
  }

  $: {
    if (furthest_index >= loaded_file_ids.length - 2 && file_ids.length > 0) {
      if (loaded_file_ids.length === 0) {
        preloadEnoughBatches();
      } else {
        loadNextBatch();
      }
    }
  }

  $: {
    furthest_index = Math.max(index, furthest_index);
  }

  $: {
    if (file_ids.length > 0 && index !== last_index) {
      if (dom_thumbnail_refs && dom_thumbnail_refs[index]) {
        last_index = index;
        dom_thumbnail_refs[index].scrollIntoView({
          behavior: "smooth",
          block: "center",
          inline: "center",
        });
      }
    }
  }

  onMount(() => {
    const next_batch_observer = new IntersectionObserver((all_observed) => {
      for (const observed of all_observed) {
        switch (observed.target) {
          case dom_next_batch:
            loadNextBatch();
            break;
        }
      }
    });
    next_batch_observer.observe(dom_next_batch);

    return () => {
      next_batch_observer.disconnect();
    };
  });

  function loadNextBatch() {
    if (file_ids.length > 0 && file_ids.length !== loaded_file_ids.length) {
      const prev_end = loaded_file_ids.length;
      const new_end = prev_end + range - 1;
      const next_segment = file_ids.slice(
        prev_end,
        Math.min(new_end, file_ids.length)
      );
      loaded_file_ids = loaded_file_ids.concat(next_segment);
      // furthest_index += range;
    }
  }

  async function preloadEnoughBatches() {
    while (dom_gallery.scrollHeight < window.innerHeight) {
      loadNextBatch();
      await tick();
      await timeout(200);
    }
  }
</script>

<style lang="scss">
  .next-batch-placeholder {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    position: absolute;
    min-height: 300px;
    max-height: 50vh;
    background-color: rgb(228, 228, 228);
  }

  .entry {
    display: inline-block;
  }
</style>

<Lightbox
  bind:index
  bind:enabled={lightbox_enabled}
  bind:file_ids={loaded_file_ids} />

<div class="gallery" bind:this={dom_gallery}>
  {#each loaded_file_ids as this_id, i (this_id)}
    <div class="entry" bind:this={dom_thumbnail_refs[i]}>
      <Thumbnail
        file_id={this_id}
        active={index == i}
        on:click={(event) => {
          index = i;
          lightbox_enabled = true;
        }} />
    </div>
  {/each}
  <div class="next-batch-placeholder" bind:this={dom_next_batch}>
    <div
      class="alert alert-primary d-flex align-items-center"
      on:click={loadNextBatch}>
      <span>Loaded {loaded_file_ids.length} / {file_ids.length}</span>
    </div>
  </div>
</div>
