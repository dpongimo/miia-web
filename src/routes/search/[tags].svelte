<script context="module">
  import { GetClient } from "../../js/hydrus-connection.js";

  export async function preload({ params, query }) {
    const tags = JSON.parse(params.tags);
    try {
      const client = GetClient();
      client.fetch = this.fetch;
      const { file_ids } = await client.search_files(tags, true, true);
      return { file_ids, tags };
    } catch (error) {
      return { file_ids: null, tags };
    }
  }
</script>

<script>
  import { onMount } from "svelte";
  import ThumbnailGallery from "../../components/ThumbnailGallery.svelte";
  export let file_ids, tags;

  let client;
  let start, end;
  let first_id;

  onMount(() => {
    if (file_ids === null) {
      (async () => {
        const client = GetClient();
        const { file_ids: new_file_ids } = await client.search_files(
          tags,
          true,
          true
        );
        file_ids = new_file_ids;
      })();
    }
    file_ids = file_ids.slice(0, 10);
  });

  async function getThumbnail(file_id) {
    if (!client) client = GetClient();
    return await client.get_thumbnail({ file_id });
  }
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
