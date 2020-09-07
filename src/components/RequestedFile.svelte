<script lang="ts">
  import { debug } from "svelte/internal";
  import { onMount } from "svelte";

  import { GetClient, IsMIMEAllowed } from "../js/hydrus-connection.js";
  import { Client } from "async-hydrus.js";

  export let file_id: string;
  /** Metadata returned from Hydrus */
  export let metadata = undefined;
  /** API control to load the file */
  export let enabled: boolean = false;
  export let object_fit: "contain" | "cover" = "contain";
  let object_url: string;

  let client: Client;

  export let file: File;

  onMount(() => {
    return () => {
      if (object_url) {
        URL.revokeObjectURL(object_url);
      }
    };
  });

  async function getFileURL(target_id) {
    if (object_url) {
      URL.revokeObjectURL(object_url);
    }

    const client = GetClient();
    const blob = await client.get_file({ file_id: file_id });
    file = new File([blob], String(file_id) + metadata.ext, {
      type: metadata.mime,
    });
    object_url = URL.createObjectURL(file);
    return object_url;
  }

  // $: console.log(enabled, file_id);
</script>

<style lang="scss">
  .media-container {
    color: white;
    max-height: 100%;
    max-width: 100%;
    &.contain {
      object-fit: contain;
    }

    &.cover {
      max-height: none;
    }
  }

  .spinner-border {
    color: white;
    max-width: 128px;
    max-height: 128px;
  }

  .img-fluid {
    // width: calc(100% / var(--n, 1));
    height: 100%;
    width: 100%;
    // fallback
    &.contain {
      object-fit: contain;
      max-height: 100%;
      max-width: 100%;
    }

    &.cover {
      max-height: none;
    }
  }
</style>

{#if enabled && typeof metadata === 'object' && IsMIMEAllowed(metadata.mime)}
  <div
    class="media-container"
    class:contain={object_fit === 'contain'}
    class:cover={object_fit === 'cover'}>
    {#await getFileURL(file_id)}
      <div
        class="spinner-border"
        role="status"
        title="Downloading {file_id}"
        aria-hidden="true" />
      <h4>{file_id}</h4>
    {:then this_object_url}
      <!-- <img
        class="img-fluid"
        style="max-height: {scale_mode === 'width+height' ? 'var(--window-height)' : ''}"
        src={this_object_url}
        alt="" /> -->
      <img
        class="img-fluid"
        class:contain={object_fit === 'contain'}
        class:cover={object_fit === 'cover'}
        src={this_object_url}
        on:dblclick|preventDefault={() => {
          if (object_fit === 'contain') {
            object_fit = 'cover';
          } else {
            object_fit = 'contain';
          }
          console.log('Fit is now', object_fit);
        }}
        alt="" />
      <!-- {#if metadata.mime.includes('image')}
      {:else if metadata.mime.includes('video')}
        <video muted loop playsinline autoplay src={this_object_url} />
      {/if} -->
      <!-- <h5>
        <code>{file_id}</code>
      </h5>
      <p>
        Enabled:
        <code>{enabled}</code>
      </p> -->
    {:catch error}
      {@debug error}
      <pre style="color: red">{error.message}</pre>
    {/await}
  </div>
{/if}
