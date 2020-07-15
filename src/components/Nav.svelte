<script>
  export let segment;
</script>

<style lang="scss">
  %link-style {
    font-size: 1.25rem;
    color: var(--bs-dark);
    // text-shadow: 0 1px rgba(0, 0, 0, 0.5);
    transition: text-shadow 100ms linear;
    text-decoration: none !important;
    &:hover {
      // text-shadow: 0 4px rgba(0, 0, 0, 0.5);
      text-decoration: none;
    }
    &:focus {
      outline: none;
    }
  }

  nav {
    // background: linear-gradient(
    //   0deg,
    //   rgba(0, 0, 0, 0) 0,
    //   rgba(0, 0, 0, 0.75) 100%
    // );
    width: 100%;
    position: fixed;
    z-index: 100;
    top: 0;
    padding: 1rem;
    .nav-link {
      transition: opacity 500ms linear;
      a {
        @extend %link-style;
        position: relative;
        &:after {
          // Creates a border-bottom
          transition: box-shadow 500ms linear, opacity 500ms linear;
          box-shadow: none;
          background-color: var(--bs-secondary);
          opacity: 0;
          bottom: -4px;
          content: "";
          display: block;
          height: 1px;
          left: 50%;
          position: absolute;
          transform: translate(-50%, 0);
          width: 100%;
        }

        &.logo {
          color: var(--bs-primary);
        }
      }

      &.active a:after {
        box-shadow: 0 1px 0 rgba($color: black, $alpha: 0.5);
        opacity: 1;
      }
    }
  }
  :global(.start-hidden) {
    opacity: 0;
    visibility: collapse;
  }
</style>

<nav class="" role="navigation">
  <div class="nav flex-sm-row">
    <div class="nav-link col-xs-auto">
      <a href="." class="logo">
        <!-- <img src="" class="img-fluid" alt="Miia Web!" height="27"/> -->
        Miia Web!
      </a>
    </div>
    <div class="nav-link col-xs-auto" class:active={segment === 'tags'}>
      <a class="align-middle" href="/tags">Tag Search</a>
    </div>
  </div>
</nav>
