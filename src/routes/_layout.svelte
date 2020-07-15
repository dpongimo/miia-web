<script>
  import Nav from "../components/Nav.svelte";

  export let segment;
</script>

<style lang="scss" global>
  @import "./scss/global.scss";
</style>

<Nav {segment} />

<main>
  <slot />
</main>
