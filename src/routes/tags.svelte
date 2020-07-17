<script>
  import { onMount } from "svelte";
  import { GetClient } from "../js/hydrus-connection.js";
  import { GetMetadataTable, cleanMetadata } from "../js/local-database.js";

  import ThumbnailGallery from "../components/ThumbnailGallery.svelte";
  import TagSearch from "../components/TagSearch.svelte";
  import PageSection from "../components/layout/PageSection.svelte";

  /** @type {string[]} */
  let file_ids = [];

  /** @type {string[]} */
  let tags = [];

  /** @type {Element} */
  let dom_tags;

  /** Is the page ready to query? */
  let ready = false;

  let client;
  let start, end;
  let first_id;

  onMount(() => {
    ready = true;
    const query_string = window.location.search;
    const url_params = new URLSearchParams(query_string);
    const tags_string = url_params.get("q");

    if (tags_string) {
      const tentative_tags = JSON.parse(tags_string);
      // Little bit of type safety to prevent dumbass users
      tags = tentative_tags;
    }

    // Jump to the ?id= tag for resuming a search
    const id_string = url_params.get("id");
    if (id_string) {
    }
  });

  async function updateTagSearch(tags_to_search) {
    if (ready) {
      const client = GetClient();
      const new_file_ids = await client.search_files(
        tags_to_search,
        true,
        true
      );
      file_ids = new_file_ids["file_ids"];
      console.log("Recieved ", file_ids.length, " files.");
      await loadMetadata(file_ids);
    }
  }

  async function loadMetadata(file_ids_to_search) {
    if (ready) {
      const client = GetClient();
      const db = {};
      db.files = GetMetadataTable();
      
      const { metadata: ref_metadata } = await client.get_file_metadata({
        file_ids: file_ids_to_search,
      });

      const metadata = [];
      for (const this_metadata of ref_metadata) {
        metadata.push(cleanMetadata(this_metadata));
      }

      await db.files.bulkPut(metadata);
    }
  }

  $: {
    updateTagSearch(tags);
  }
</script>

<style lang="scss">

</style>

<PageSection>
  <div class="col">
    <div class="card">
      <details>
        <summary class="card-header" bind:this={dom_tags}>
          <span>Search:</span>
          {#each tags as tag}
            <span class="badge bg-secondary">{tag}</span>
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
  </div>
</PageSection>

<ThumbnailGallery bind:file_ids />
