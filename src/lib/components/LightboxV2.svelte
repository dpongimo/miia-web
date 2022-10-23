<script lang="ts">
	import { onMount } from "svelte";
	import { GetClient } from "../js/hydrus-connection.js";
	import { GetMetadataTable, cleanMetadata } from "../js/local-database";

	import RequestedFile from "./RequestedFile.svelte";

	// All file_ids in this gallery
	export let file_ids: string[] = [];
	// Current index of the file_ids
	export let index = 0;
	// Should the Lightbox be shown right now
	export let enabled = false;
	// How many files should be requested on either side of the currently requested item
	export let loaded_range = 2;
	// Should the click controls be shown?
	let show_click_controls = true;
	let current_object_fit: "contain" | "cover" | "fill" = "contain";
	let show_scroll: boolean = false;

	// let dom_file_refs: HTMLElement[] = [];
	let dom_files: HTMLElement;

	let loaded_file_ids: string[] = [];
	$: loaded_file_ids = file_ids.slice(
		Math.max(index - loaded_range, 0),
		Math.min(index + loaded_range + 1, file_ids.length)
	);

	// $: {
	//   if (file_ids && index !== 0) {
	//     setURLIndex(file_ids[index]);
	//   }
	// }

	/**
	 * Gets metadata from the local metadata database
	 * @param {string} file_id
	 */
	async function getMetadata(file_id: string) {
		const files = GetMetadataTable();
		return await files.get({ file_id });
	}

	/**
	 * TODO: Replace with Sapper's logic
	 */
	function setURLIndex(file_id: string) {
		if ("URLSearchParams" in window) {
			const search_params = new URLSearchParams(window.location.search);
			search_params.set("id", file_ids[index]);
			const relative_path_query = window.location.pathname + "?" + search_params.toString();
			history.replaceState(null, "", relative_path_query);
		}
	}

	function cycleObjectFit(event: Event) {
		if (current_object_fit === "contain") {
			current_object_fit = "cover";
		} else if (current_object_fit === "cover") {
			current_object_fit = "fill";
		} else {
			current_object_fit = "contain";
			dom_files.scroll({
				top: 0,
				behavior: "smooth"
			});
		}
		console.log("Fit is now", current_object_fit);
	}

	$: {
		if (current_object_fit === "contain") {
			show_scroll = false;
		} else {
			show_scroll = true;
		}
	}

	$: if (enabled) {
		console.log(index);
		// Reset object fit to contain every time index changes
		current_object_fit = "contain";
	}

	onMount(() => {});

	// Touch events
	/** The relative index of the current image with reguards to the loaded_file_ids array */
	let offset_index = 0;
	$: offset_index = index - Math.max(index - loaded_range, 0);
	let touch_start_x: number = null;
	let transition_x: number = 0;

	function touchStart(event: UIEvent) {
		touch_start_x = unifyTouchAndClick(event).clientX;
	}
	function touchEnd(event: UIEvent) {
		if (touch_start_x !== null) {
			const delta_x = unifyTouchAndClick(event).clientX - touch_start_x;
			const sign = Math.sign(delta_x);

			if (sign === 0) {
				// do nothing, was a tap!
			} else if (Math.sign(delta_x) < 0) {
				index = Math.min(index + 1, file_ids.length);
			} else {
				index = Math.max(index - 1, 0);
			}

			transition_x = 0;
			touch_start_x = null;
		}
	}
	function drag(event: UIEvent) {
		if (touch_start_x !== null) {
			transition_x = Math.round(unifyTouchAndClick(event).clientX - touch_start_x);
		}
	}

	function unifyTouchAndClick(event) {
		return event.changedTouches ? event.changedTouches[0] : event;
	}
</script>

{#if enabled}
	<div
		class="background"
		style="--n: max({loaded_file_ids.length}, 1); --i: {offset_index}; --tx: {transition_x !== null
			? transition_x
			: 0}px"
	>
		<div
			class="files"
			class:cover={current_object_fit === "cover"}
			class:contain={current_object_fit === "contain"}
			class:fill={current_object_fit === "fill"}
			class:smooth={touch_start_x === null}
			style="overflow-y: {show_scroll ? 'scroll' : 'hidden'}"
			on:dblclick|preventDefault={cycleObjectFit}
			on:mousedown|preventDefault={touchStart}
			on:touchstart|preventDefault={touchStart}
			on:mousemove|preventDefault={drag}
			on:touchmove|preventDefault={drag}
			on:mouseup={touchEnd}
			on:touchend|preventDefault={touchEnd}
			bind:this={dom_files}
		>
			<!-- TODO: This should update in a smoother way -->
			{#each loaded_file_ids as this_id, this_i (this_id)}
				<!-- <div
          class="file"
          class:current={index === (this_i + Math.max(index - loaded_range, 0))}
          > -->
				<div class="file" class:current={index === this_i + Math.max(index - loaded_range, 0)}>
					<RequestedFile file_id={this_id} enabled={true} bind:object_fit={current_object_fit} />
				</div>
			{/each}
		</div>
		{#if show_click_controls}
			{#if index > 0}
				<button
					id="previous"
					class="nav-buttons"
					on:click={() => {
						index--;
					}}
				>
					◀
				</button>
			{/if}
			{#if index < file_ids.length - 1}
				<button
					id="next"
					class="nav-buttons"
					on:click={() => {
						index++;
					}}
				>
					▶
				</button>
			{/if}
		{/if}
		<button
			class="close"
			on:click|preventDefault={() => {
				enabled = false;
			}}
		>
			❌
		</button>
	</div>
{/if}

<style lang="scss">
	.background {
		position: fixed;
		top: 0;
		bottom: 0;
		left: 0;
		right: 0;
		width: var(--window-width);
		height: var(--window-height);
		background-color: rgba(0, 0, 0, 0.9);
		z-index: 10;
		--n: 1;
		--i: 0;
		--tx: 0;
	}

	.files {
		display: flex;
		// justify-content: center;
		align-items: center;
		// position: absolute;
		width: 100%;
		width: calc(var(--n) * 100%);
		height: 100%;

		// Advance the current item
		// -100% is the size of each item
		// transform: translate(calc(var(--i, 0) / var(--n, 1) * -100%));
		transform: translate(calc(var(--i, 0) / var(--n, 1) * -100% + var(--tx, 0px)));

		// Browsers seem to complain about will-change budget, disabiling
		// will-change: transform;

		// TODO: Work on smooth file_id window advancing
		&.smooth {
			// transition: transform 0.2s cubic-bezier(0, 0.55, 0.45, 1);
		}

		overflow: hidden;
		scrollbar-width: thin;
		&.cover .file.current {
			max-height: var(--window-height, 100vh);
		}
		&.contain .file.current {
			height: 100%;
		}
		&.fill .file.current {
			min-height: 100%;
		}
	}

	.file {
		// position: relative;
		// min-width: 100%;
		width: 100%;
		// max-width: calc(100% / var(--n, 1));
		// height: 100%;
		max-width: var(--window-width);
		pointer-events: none;
		// max-height: var(--window-height);
	}

	.nav-buttons {
		z-index: 11;
		position: absolute;
		top: 0;
		height: 100%;
		border: none;
		padding: 0 2.5vw;
		opacity: 0.2;
		transition: opacity 200ms linear;
		background: rgb(0, 0, 0);

		$gradient: rgba(0, 0, 0, 0.5) 0%, rgba(0, 0, 0, 0) 100%;

		&:hover {
			opacity: 1;
		}

		&#previous {
			left: 0;
			background: linear-gradient(90deg, $gradient);
		}
		&#next {
			right: 0;
			background: linear-gradient(270deg, $gradient);
		}
	}

	.close {
		z-index: 11;
		position: absolute;
		top: 32px;
		right: 32px;
	}
</style>
