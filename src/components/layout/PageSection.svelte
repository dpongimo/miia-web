<script>
  import { onMount } from "svelte";

  /** @type {string} */
  export let min_height = "";
  export let background = {
    /** @type {string} */
    video: null,
    /** @type {string} */
    image: null,
    /** @type {string} */
    image_position: null,
    /** @type {string} */
    color: null,
    /** @type {string} */
    text_color: null,
  };
  /** @type {string} */
  export let text_shadow = undefined;
  /** @type {string} */
  export let justify = undefined;
  /** @type {string} */
  export let page_padding = "10vh";

  /** @type {Element} */
  let dom_video;
  /** @type {Element} */
  let dom_section;

  onMount(() => {
    // Align starting flex
    const observer = new IntersectionObserver((container) => {
      if (container[0].isIntersecting) {
        if (!!dom_video) {
          dom_video.play();
        }
      } else if (!container[0].isIntersecting) {
        if (!!dom_video) {
          dom_video.pause();
        }
      }
    });

    observer.observe(dom_section);

    return () => {
      observer.disconnect();
    };
  });
</script>

<style lang="scss">
  section {
    z-index: -1;
    width: 100%;
    background-repeat: no-repeat;
    background-size: cover;
    & > div {
      padding-top: var(--page-padding);
      padding-bottom: var(--page-padding);
    }

    .video-stage video {
      position: absolute;
      display: block;
      width: 100%;
      top: 50%;
      left: 50%;
      width: auto;
      min-width: 100%;
      height: auto;
      min-height: 100%;
      transform: translateX(-50%) translateY(-50%);
    }
    .container {
      z-index: 0;
    }
  }
</style>

<section
  style="background-color: {background.color}; background-image: {background.image};
  min-height: {min_height}; color: {background.text_color}; text-shadow: {text_shadow};
  background-position: {background.image_position}; --page-padding: {page_padding}"
  bind:this={dom_section}>
  {#if !!background.video}
    <div class="video-stage">
      <video
        preload
        autobuffer
        autoplay
        muted
        loop
        playsinline
        src={background.video}
        bind:this={dom_video} />
    </div>
  {/if}
  <div class="container">
    <div class="row" style="justify-content: {justify}">
      <slot />
    </div>
  </div>
</section>
