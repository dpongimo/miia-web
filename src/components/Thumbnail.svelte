<script>
  import { onMount, createEventDispatcher } from "svelte";
  import { GetClient } from "../js/hydrus-connection.js";
  import { calculateAspectRatioFit } from "../js/helpers.js";

  /** @type {string} */
  export let file_id;

  export let max_width = 200;
  export let max_height = 200;
  /** @type {Image} */
  let dom_image;
  let image_width, image_height;

  const dispatch = createEventDispatcher();

  onMount(async () => {});

  async function getThumbnail(file_id) {
    const client = GetClient();
    return await client.get_thumbnail({ file_id });
  }

  function setSize() {
    const size = calculateAspectRatioFit(
      dom_image.naturalWidth,
      dom_image.naturalHeight,
      max_width,
      max_height
    );
    // debugger;
    dom_image.width = size.width;
    dom_image.height = size.height;
  }

  /**
   * @param {Event} event
   */
  function onClick(event) {
    dispatch("click", {
      source_event: event,
      file_id,
      dom_image,
    });
  }
</script>

<style lang="scss">
  // img {
  //   display: inline-block;
  // }
  .card {
    display: inline-block;
  }

  .loading {
    cursor: progress;
  }

  img {
    cursor: pointer;
  }
</style>

<div class="card">
  {#await getThumbnail(file_id)}
    <div class="card-body loading">
      <div class="spinner-border" role="status" aria-hidden="true" />
      <p>Querying {file_id}</p>
    </div>
  {:then thumbnail_blob}
    <!-- class="card-img" -->
    <img
      src={URL.createObjectURL(thumbnail_blob)}
      alt={file_id}
      bind:this={dom_image}
      on:load={setSize}
      on:click={onClick} />
    <!-- width={width ? width : 200}
      height={height ? height : 200} -->
  {:catch error}
    <div class="card-body">
      <pre style="color: red">{error.message}</pre>
    </div>
  {/await}
</div>
