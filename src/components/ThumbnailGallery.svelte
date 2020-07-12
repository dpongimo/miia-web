<script>
  import { onMount } from "svelte";

  import Thumbnail from "./Thumbnail.svelte";
  import Lightbox from "./Lightbox.svelte";

  /** @type {string[]} */
  export let file_ids = [];

  // TODO: Dynamically paginate the results
  /** @type {string[]} */
  let loaded_file_ids = [];
  /** @type {Element[]} */
  let dom_thumbnail_refs = [];
  export let range = 10;
  export let index = 0;
  let furthest_index = 0;
  let lightbox_enabled = false;

  let file_data = new Map();

  /** @type {Element} */
  let dom_next_batch;

  // $: {
  //   if (file_ids.length > 0 && loaded_file_ids.length === 0) {
  //     loadNextBatch();
  //   }
  // }

  $: {
    if (furthest_index >= loaded_file_ids.length - 2 && file_ids.length > 0) {
      console.log(furthest_index, loaded_file_ids.length);
      loadNextBatch();
    }
  }

  $: {
    furthest_index = Math.max(index, furthest_index);
  }

  $: {
    if (file_ids.length > 0) {
      if (dom_thumbnail_refs && dom_thumbnail_refs[index])
        dom_thumbnail_refs[index].scrollIntoView({
          behavior: "smooth",
          block: "center",
          inline: "center",
        });
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

    // setTimeout(() => {
    //   loadNextBatch();
    // }, 1000);

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

<div class="gallery">
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
