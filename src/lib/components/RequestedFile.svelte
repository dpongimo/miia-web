<script lang="ts">
	import { debug } from "svelte/internal";
	import { onMount } from "svelte";

	import { GetClient, IsMIMEAllowed } from "../js/hydrus-connection.js";
	import { Client } from "async-hydrus.js";
	import { GetFileMetadata } from "../js/local-database.js";

	export let file_id: string;
	/** Metadata returned from Hydrus */
	export let metadata = undefined;
	/** API control to load the file */
	export let enabled: boolean = false;
	export let object_fit: "contain" | "cover" | "fill" = "cover";
	let object_url: string;

	export let file: File = undefined;

	onMount(() => {
		return () => {
			if (object_url) {
				URL.revokeObjectURL(object_url);
			}
		};
	});

	async function getFileURL() {
		if (object_url) {
			URL.revokeObjectURL(object_url);
		}

		const client = GetClient();
		const blob = await client.get_file({ file_id: file_id });
		file = new File([blob], String(file_id) + metadata.ext, {
			type: metadata.mime
		});
		object_url = URL.createObjectURL(file);
		return object_url;
	}

	async function getMetadata() {
		try {
			metadata = await GetFileMetadata(Number(file_id));
		} catch (error) {
			console.error(`Failed to load file metadata for ${file_id}`, error);
		}
	}

	// $: console.log(enabled, file_id);
</script>

{#if enabled}
	{#if typeof metadata === "object"}
		{#await getFileURL()}
			<div class="spinner-border" role="status" title="Downloading {file_id}" aria-hidden="true" />
			<h4>{file_id}</h4>
		{:then this_object_url}
			{#if IsMIMEAllowed(metadata.mime)}
				<!-- <img
        class="img-fluid"
        style="max-height: {scale_mode === 'width+height' ? 'var(--window-height)' : ''}"
        src={this_object_url}
        alt="" /> -->
				{#if metadata.mime.includes("image")}
					<img
						class="img-fluid"
						style="object-fit: {object_fit}; width: {object_fit === 'fill'
							? '100%'
							: ''}; height: {object_fit === 'fill' ? '100%' : ''};"
						src={this_object_url}
						alt=""
					/>
				{:else if metadata.mime.includes("video")}
					<video muted loop playsinline autoplay src={this_object_url} />
				{/if}
				<!-- <h5>
        <code>{file_id}</code>
      </h5>
      <p>
        Enabled:
        <code>{enabled}</code>
      </p> -->
			{:else}
				<div class="error">
					<p>
						File's MIME type was <code>{metadata.mime}</code> which can't be handled yet.
						{@debug metadata}
					</p>
				</div>{/if}
		{:catch error}
			<div class="error">
				<pre>{error.message}</pre>
				{@debug error}
			</div>
		{/await}
	{:else}{getMetadata()}{/if}

	<!-- </div> -->
{/if}

<style lang="scss">
	* {
		color: white;
	}

	.spinner-border {
		color: white;
		max-width: 128px;
		max-height: 128px;
	}

	.img-fluid {
		display: block;
		max-height: 100%;
		max-width: 100%;
		margin: 0 auto;
		object-fit: contain;
	}

	.error {
		pre {
			color: var(--bs-danger, red);
		}
	}
</style>
