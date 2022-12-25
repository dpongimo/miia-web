<script>
	import { onMount } from "svelte";
	// import "$lib/scss/global.scss";
	import Nav from "$lib/components/Nav.svelte";

	export let segment;

	/** @type {Element} */
	let dom_body;

	let window_height = "100vh";
	let window_outer_height = "100vh";
	let window_width = "100vw";

	onMount(() => {
		dom_body = document.querySelector("body");

		resize();
	});

	function resize() {
		requestAnimationFrame(_doResize);
	}

	function _doResize() {
		window_outer_height = window.outerHeight + "px";
		window_height = window.innerHeight + "px";
		window_width = dom_body.clientWidth + "px";
	}
</script>

<Nav {segment} />

<main
	style="--window-height: {window_height}; --window-width: {window_width};
  --window-outer-height: {window_outer_height}"
>
	<slot />
</main>
