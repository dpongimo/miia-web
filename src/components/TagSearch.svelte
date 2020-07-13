<script>
  import { Client } from "async-hydrus.js";

  import { onMount } from "svelte";
  import { goto } from "@sapper/app";
  import { GetClient } from "../js/hydrus-connection.js";
  import { ShowError } from "../js/stores.js";

  export let tags = ["landscape"];
  let tag_input = "";

  function addTag() {
    console.log(tag_input);
    if (!tags.includes(tag_input)) {
      tags.push(tag_input);
      tags = tags;
    }
    tag_input = "";
  }

  function removeTag(tag) {
    const index = tags.indexOf(String(tag));
    console.log(tag, index);
    tags.splice(index, 1);
    tags = tags;
  }

  function search() {
    goto("/tags?q=" + JSON.stringify(tags));
  }
</script>

<style lang="scss">

</style>

<div id="search">
  <h2>Search</h2>
  <form>
    <div class="input-group">
      {#each tags as tag}
        <button
          type="button"
          class="btn btn-secondary btn-sm"
          title="Remove tag '{tag}'"
          on:click|preventDefault={() => {
            removeTag(tag);
          }}>
          {tag}
          <span class="badge" aria-hidden="true">&times;</span>
        </button>
      {/each}
      <input
        type="text"
        class="form-control"
        placeholder="tag:to-add"
        aria-label="Tag to add to search query"
        aria-describedby="add-tag"
        bind:value={tag_input} />
      <button
        class="btn"
        class:btn-primary={tag_input.length > 0}
        class:btn-outline-secondary={tag_input.length === 0}
        disabled={tag_input.length === 0}
        type="button"
        id="add-tag"
        on:click|preventDefault={addTag}>
        Add Tag
      </button>
      <a
        class="btn btn-success"
        type="search"
        id="search"
        disabled={tags.length === 0}
        href="/tags?q={JSON.stringify(tags)}">
        Search
      </a>
    </div>
    <div id="query" class="row">
      <div id="tags" class="col">
        <h3 class="sr-only sr-only-focusable">Search Tags</h3>
      </div>
      <div id="action" class="col-auto text-center" />
    </div>
  </form>

</div>
