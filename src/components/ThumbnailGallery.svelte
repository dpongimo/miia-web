<script>
  import Thumbnail from "./Thumbnail.svelte";
  import Lightbox from "./Lightbox.svelte";

  /** @type {string[]} */
  export let file_ids = [];
  export let range = 10;

  let file_data = new Map();

	// TODO: Dynamically paginate the results
  // let file_ids_subset = [];


  let current_lightbox_index = 0;

  let lightbox_enabled = false;

  
</script>

<Lightbox bind:index={current_lightbox_index} bind:enabled={lightbox_enabled} />

<div class="gallery">
  {#each file_ids as this_id, i}
    <Thumbnail
      file_id={this_id}
      on:click={(event) => {
        current_lightbox_index = i;
        lightbox_enabled = true;
      }} />
  {/each}
</div>
