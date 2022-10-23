<script>
	import { Hydrus as Client } from "@dpongimo/async-hydrus.js";
	import { onMount } from "svelte";
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

	export let onSearch = (tags) => {
		goto(`/tags?q=${JSON.stringify(tags)}`);
	};
</script>

<section id="search" class="container">
	<form
		on:submit|preventDefault={() => {
			if (tag_input.length > 0) {
				addTag();
			} else {
				onSearch(tags);
			}
		}}
	>
		<div class="input-group">
			{#each tags as tag}
				<button
					type="button"
					class="btn btn-secondary btn-sm"
					title="Remove tag '{tag}'"
					on:click|preventDefault={() => {
						removeTag(tag);
					}}
				>
					{tag}
					<span class="badge" aria-hidden="true">&times;</span>
				</button>
			{/each}
			<input
				type="text"
				class="form-control"
				placeholder="tag:to add"
				aria-label="Tag to add to search query"
				aria-describedby="add-tag"
				bind:value={tag_input}
			/>
			<button
				class="btn"
				class:btn-success={tag_input.length === 0 && tags.length > 0}
				class:btn-primary={tag_input.length > 0}
				class:disabled={tag_input.length === 0 && tags.length === 0}
				type="submit"
				id="search"
				disabled={tags.length === 0 && tag_input.length === 0}
			>
				{tag_input.length > 0 ? "Add Tag" : "Search"}
			</button>
		</div>
		<div id="query" class="row">
			<div id="tags" class="col">
				<h3 class="sr-only sr-only-focusable">Search Tags</h3>
			</div>
			<div id="action" class="col-auto text-center" />
		</div>
	</form>
</section>

<style lang="scss">
</style>
