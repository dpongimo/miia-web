<script>
  import { onMount } from "svelte";
  import { GetClient } from "../js/hydrus-connection.js";

  import ThumbnailGallery from "../components/ThumbnailGallery.svelte";
  import TagSearch from "../components/TagSearch.svelte";

  /** @type {string[]} */
  let file_ids = [];

  /** @type {string[]} */
  let tags = [];

  /** @type {Element} */
  let dom_tags;

  let client;
  let start, end;
  let first_id;

  onMount(() => {
    const query_string = window.location.search;
    const url_params = new URLSearchParams(query_string);
    const tags_string = url_params.get("q");

    if (tags_string) {
      const tentative_tags = JSON.parse(tags_string);
      // Little bit of type safety to prevent dumbass users
      tags = tentative_tags;
    }

    const id_string = url_params.get("id");
    if (id_string) {
    }
  });

  async function updateTagSearch(tags_to_search) {
    if (dom_tags) {
      const client = GetClient();
      const new_file_ids = await client.search_files(
        tags_to_search,
        true,
        true
      );
      file_ids = new_file_ids["file_ids"];
    }
  }

  $: {
    console.log("update!!");
    updateTagSearch(tags);
  }
</script>

<style lang="scss">

</style>

<h1>Search Results for</h1>

<div class="tags" bind:this={dom_tags} />

<div class="card">
  <details>
    <summary class="card-header">
      <span>Search:</span>
      {#each tags as tag}
        <span type="button" class="btn btn-secondary btn-sm">{tag}</span>
      {/each}
    </summary>
    <div class="card-body">
      <TagSearch
        {tags}
        onSearch={(new_tags) => {
          console.log('tags set');
          tags = new_tags;
        }} />
    </div>
  </details>
</div>

<ThumbnailGallery bind:file_ids />
