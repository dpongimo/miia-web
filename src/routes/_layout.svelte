<script>

</script>

<style lang="scss">
  // Imports bootstrap with any custom variables.

  // @import "~bootstrap/scss/bootstrap";

  // Required
  @import "~bootstrap/scss/functions";
  @import "~bootstrap/scss/variables";
  @import "~bootstrap/scss/mixins";

  $body-bg: #111;
  $body-color: #eee;

  $font-family-base: gill-sans-nova, sans-serif;
  $font-size-base: 1.25rem;
  $h1-font-size: $font-size-base * 2.5 * 2 * 1;
  $h2-font-size: $font-size-base * 2 * 1;
  $h3-font-size: $font-size-base * 1.75 * 1;
  $h4-font-size: $font-size-base * 1.5 * 1;
  $h5-font-size: $font-size-base * 1.25 * 1;
  $h6-font-size: $font-size-base * 2;

  $light: #eeeeee;
  $dark: #111111;

  $theme-colors: (
    "light": $light,
    "dark": $dark,
  );

  :global(body),
  :global(html) {
    // scrollbar-width: thin;
    scrollbar-color: dark;
    scrollbar-color: var(--light) rgba(var(--dark-rgb), 0.5);

    &::-webkit-scrollbar {
      background-color: rgba(var(--dark-rgb), 0.5);
    }
    &::-webkit-scrollbar-thumb {
      background: var(--light);
    }
  }

  @function hexToRGB($hex) {
    @return red($hex), green($hex), blue($hex);
  }

  :global(:root) {
    --light-rgb: #{hexToRGB($light)};
    --dark-rgb: #{hexToRGB($dark)};
  }

  :global(:-webkit-scrollbar) {
    background-color: #111;
  }
  :global(:-webkit-scrollbar-thumb) {
    background: #aaa;
  }

  // Optional
  @import "~bootstrap/scss/root";
  @import "~bootstrap/scss/reboot";
  @import "~bootstrap/scss/type";
  @import "~bootstrap/scss/images";
  @import "~bootstrap/scss/code";
  @import "~bootstrap/scss/grid";
  @import "~bootstrap/scss/tables";
  // @import "~bootstrap/scss/forms";
  @import "~bootstrap/scss/buttons";
  @import "~bootstrap/scss/transitions";
  // @import "~bootstrap/scss/dropdown";
  @import "~bootstrap/scss/button-group";
  // @import "~bootstrap/scss/input-group";
  // @import "~bootstrap/scss/custom-forms";
  @import "~bootstrap/scss/nav";
  // @import "~bootstrap/scss/navbar";
  @import "~bootstrap/scss/card";
  // @import "~bootstrap/scss/breadcrumb";
  // @import "~bootstrap/scss/pagination";
  // @import "~bootstrap/scss/badge";
  // @import "~bootstrap/scss/jumbotron";
  // @import "~bootstrap/scss/alert";
  // @import "~bootstrap/scss/progress";
  @import "~bootstrap/scss/media";
  @import "~bootstrap/scss/list-group";
  // @import "~bootstrap/scss/close";
  // @import "~bootstrap/scss/toasts";
  @import "~bootstrap/scss/modal";
  // @import "~bootstrap/scss/tooltip";
  // @import "~bootstrap/scss/popover";
  // @import "~bootstrap/scss/carousel";
  // @import "~bootstrap/scss/spinners";
  @import "~bootstrap/scss/utilities";
  @import "~bootstrap/scss/print";

  main {
    position: relative;
    max-width: 56em;
    background-color: white;
    padding: 2em;
    margin: 0 auto;
    box-sizing: border-box;
  }
</style>

<main>
  <slot />
</main>
