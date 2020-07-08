<script context="module">
  import { GetClient } from "../../js/hydrus-connection.js";

  export async function preload({ params, query }) {
    const tags = JSON.parse(params.tags);
    try {
      const client = GetClient();
      const { file_ids } = await client.search_files(tags, true, true);
      return { file_ids, tags };
    } catch (error) {
      return { file_ids: null, tags };
    }
  }
</script>

<script>
  import { onMount } from "svelte";
  import Lazy from "svelte-lazy";
  export let file_ids, tags;

  let client;

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
  });

  async function getThumbnail(file_id) {
    if (!client) client = GetClient();
    return await client.get_thumbnail({ file_id });
  }
</script>

<style lang="scss">
  .card-img {
    width: 100%;
    height: 125px;
  }
</style>

<p>hey</p>
<div class="card-columns">
  {#each file_ids as this_id}
    <div class="card">
      <Lazy
        height={300}
        offset={150}
        fadeOption={{ delay: 100, duration: 200 }}>
        {#await getThumbnail(this_id)}
          <div class="card-body">
            <div class="spinner-border" role="status" aria-hidden="true" />
            <p>Querying</p>
          </div>
        {:then thumbnail_blob}
          <img
            class="card-img"
            src={URL.createObjectURL(thumbnail_blob)}
            alt={this_id} />
        {:catch error}
          <div class="card-body">
            <pre style="color: red">{error.message}</pre>
          </div>
        {/await}
      </Lazy>
    </div>
  {/each}
</div>
