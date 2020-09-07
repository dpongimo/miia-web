<script lang="ts">
  import { onMount } from "svelte";
  import { GetClient } from "../js/hydrus-connection.js";
  import { syncMetadata } from "../js/local-database";

  import ThumbnailGallery from "../components/ThumbnailGallery.svelte";
  import TagSearch from "../components/TagSearch.svelte";
  import PageSection from "../components/layout/PageSection.svelte";
  import { Client } from "async-hydrus.js";

  let file_ids: string[] = [];
  let tags: string[] = [];
  let dom_tags: HTMLElement;

  /** Is the page ready to query? */
  let ready = false;

  let start: number, end: number;
  let first_id: number;

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
    }
  }

  $: {
    updateTagSearch(tags);
  }
</script>

<style lang="scss">
</style>

<svelte:head>
  <title>{tags.join(', ')} - Miia Web!</title>
</svelte:head>
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
