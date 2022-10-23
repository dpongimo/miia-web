<script>
	import { onMount, tick } from "svelte";

	import { timeout } from "../js/helpers.js";
	import { syncMetadata } from "../js/local-database";

	import Thumbnail from "./Thumbnail.svelte";
	import LightboxV2 from "./LightboxV2.svelte";

	/** @type {string[]} */
	export let file_ids = [];
	let old_files_ids = [];
	/** How far should each batch load */
	export let range = 10;
	/** What is the current file open? */
	export let index = 0;
	/** Last index observed to help detect when a scroll event needs to fire */
	let last_index = 0;

	/** @type {string[]} */
	let loaded_file_ids = [];
	/** @type {Element[]} */
	let dom_thumbnail_refs = [];
	/** @type {Element} */
	let dom_gallery;

	let furthest_index = 0;
	let lightbox_enabled = false;

	// TODO: Replace with database
	let file_data = new Map();

	/** @type {Element} */
	let dom_next_batch;

	// Reload if the file_ids array changes
	$: if (file_ids !== old_files_ids) {
		reset();
	}

	// Preload the next batches if the user has progressed far enough
	$: if (furthest_index >= loaded_file_ids.length - 2 && file_ids.length > 0) {
		// If this is the first preload, fill the screen
		if (loaded_file_ids.length === 0) {
			preloadEnoughBatches();
		} else {
			loadNextBatch();
		}
	}

	// Keep track of the furthest the user has been
	$: furthest_index = Math.max(index, furthest_index);

	// Scroll to the current index if the index is adjusted independantly
	$: if (file_ids.length > 0 && index !== last_index) {
		// But only do it client side
		if (dom_thumbnail_refs && dom_thumbnail_refs[index]) {
			last_index = index;
			dom_thumbnail_refs[index].scrollIntoView({
				behavior: "smooth",
				block: "center",
				inline: "center"
			});
		}
	}

	onMount(() => {
		const next_batch_observer = new IntersectionObserver((all_observed) => {
			for (const observed of all_observed) {
				switch (observed.target) {
					case dom_next_batch:
						loadNextBatch();
						break;
				}
			}
		});
		next_batch_observer.observe(dom_next_batch);

		return () => {
			next_batch_observer.disconnect();
		};
	});

	function reset() {
		// These reset the same state of the gallery
		old_files_ids = file_ids;
		furthest_index = 0;
		index = 0;
		last_index = 0;
		loaded_file_ids = [];
	}

	function loadNextBatch() {
		if (file_ids.length > 0 && file_ids.length !== loaded_file_ids.length) {
			const prev_end = loaded_file_ids.length;
			const new_end = prev_end + range - 1;
			const next_segment = file_ids.slice(prev_end, Math.min(new_end, file_ids.length));
			syncMetadata(next_segment);
			loaded_file_ids = loaded_file_ids.concat(next_segment);
			// furthest_index += range;
		}
	}

	async function preloadEnoughBatches() {
		while (dom_gallery.scrollHeight < window.innerHeight) {
			loadNextBatch();
			await tick();
			await timeout(200);
		}
	}
</script>

<LightboxV2 bind:index bind:enabled={lightbox_enabled} bind:file_ids />

<div class="gallery" bind:this={dom_gallery}>
	{#each loaded_file_ids as this_id, i (this_id)}
		<div class="entry" bind:this={dom_thumbnail_refs[i]}>
			<Thumbnail
				file_id={this_id}
				active={index == i}
				on:click={(event) => {
					index = i;
					lightbox_enabled = true;
				}}
			/>
		</div>
	{/each}
	<div
		class="next-batch-placeholder text-center"
		style="background-color: {file_ids && file_ids.length ? '' : 'transparent'}"
		bind:this={dom_next_batch}
	>
		<div class="container">
			{#if file_ids && file_ids.length > 0}
				<div class="row">
					<div class="col col-12">
						<p>Loaded {loaded_file_ids.length} / {file_ids.length}</p>
						<div class="progress">
							<div
								class="progress-bar"
								role="progressbar"
								style="width: {(loaded_file_ids.length / file_ids.length) * 100}%;"
								aria-valuenow={loaded_file_ids.length}
								aria-valuemin="0"
								aria-valuemax={file_ids.length}
							>
								{loaded_file_ids.length}
							</div>
						</div>
					</div>
				</div>

				<div class="col">
					<button
						class="btn btn-primary m-3"
						disabled={loaded_file_ids.length >= file_ids.length}
						on:click|preventDefault={loadNextBatch}
					>
						Load More
					</button>
				</div>
			{/if}
		</div>
	</div>
</div>

<style lang="scss">
	.next-batch-placeholder {
		display: flex;
		flex-direction: column;
		width: 100%;
		position: absolute;
		min-height: 300px;
		max-height: 50vh;
		background-color: rgb(228, 228, 228);
	}

	.entry {
		display: inline-block;
	}
</style>
