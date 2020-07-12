<script>
  import { onMount } from "svelte";
  import { GetClient } from "../js/hydrus-connection.js";

  import ThumbnailGallery from "../components/ThumbnailGallery.svelte";

  /** @type {string[]} */
  let file_ids = [];

  /** @type {string[]} */
  let tags = [];

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
      console.log(tags);
      (async () => {
        const new_file_ids = await searchFiles(tags);
        file_ids = new_file_ids["file_ids"];
      })();
    }

    const id_string = url_params.get("id");
    if (id_string) {
    }
  });

  async function searchFiles(target_tags) {
    const client = GetClient();
    return await client.search_files(target_tags, true, true);
  }

  // async function getThumbnail(file_id) {
  //   if (!client) client = GetClient();
  //   return await client.get_thumbnail({ file_id });
  // }
</script>

<style lang="scss">

</style>

<h1>Search Results for</h1>

<div class="tags">
  {#each tags as tag}
    <span type="button" class="btn btn-secondary btn-sm">{tag}</span>
  {/each}
</div>

<ThumbnailGallery {file_ids} />
