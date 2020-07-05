<script>
  import { onMount } from "svelte";
  import { Connect, GetClient } from "../js/hydrus-connection.js";
  onMount(() => {
    const client = GetClient();
    client.request_new_permissions("miia-web", [0, 1], (response) => {
      console.log(response);
      client.access_key = response.access_key;
    });
  });
</script>

<style lang="scss">

</style>

<svelte:head>
  <title>Miia Web</title>
</svelte:head>

<h1>Great success!</h1>

<figure>
  <img alt="Success Kid" src="successkid.jpg" />
  <figcaption>Have fun with Sapper!</figcaption>
</figure>

<p>
  <strong>
    Try editing this file (src/routes/index.svelte) to test live reloading.
  </strong>
</p>
