<script>
	import { onMount } from "svelte";
	import { GetClient } from "$lib/js/hydrus-connection.js";

	import PageSection from "$lib/components/layout/PageSection.svelte";
	import Setup from "$lib/components/Setup.svelte";
	import TagSearch from "$lib/components/TagSearch.svelte";

	let connected = false;
	let tabs = [];

	let address_validated = false;
	let key_validated = false;
	let login_open = false;
	$: login_open = !address_validated || !key_validated;
</script>

<svelte:head>
	<title>Miia Web</title>
</svelte:head>

<PageSection>
	<div class="col col-12">
		<h1>Miia Web!</h1>
		<p>a web client for Hydrus</p>
	</div>
	<div class="col col-12">
		<div class="card">
			<button
				class="card-header text-left"
				on:click={() => {
					login_open = !login_open;
				}}
			>
				<span>Hydrus Setup</span>
				{#if address_validated}
					<span class="badge bg-secondary">Connected</span>
				{:else}
					<span class="badge bg-danger">Not Connected</span>
				{/if}
				{#if key_validated}
					<span class="badge bg-secondary">Authenticated</span>
				{:else}
					<span class="badge bg-danger">Not Authenticated</span>
				{/if}
			</button>
			{#if login_open}
				<div class="setup">
					<Setup bind:address_validated bind:key_validated />
				</div>
			{/if}
		</div>
	</div>
</PageSection>

<PageSection>
	<div class="col col-12">
		<h2>New Search</h2>
		<TagSearch />
	</div>
</PageSection>

<style lang="scss">
	.card-header {
		border: none;
	}

	.setup {
		margin: 5vw;
	}
</style>
