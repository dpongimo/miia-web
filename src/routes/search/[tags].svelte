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
</script>

{#each file_ids as this_id}
  <Lazy
    height={300}
    offset={150}
    fadeOption={{ delay: 100, duration: 200 }}>
    <p>{this_id}</p>
  </Lazy>
{/each}
