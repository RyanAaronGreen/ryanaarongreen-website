<template lang="pug">
  svg(class="rg-logo" xmlns="http://www.w3.org/2000/svg" version="1.1" viewBox="0 0 76.57 81.51")
    g(id="rg-logo" data-name="rg-logo")
      path(id="c-shape" class="cls-1" d="M49.71 62.12c-14 8.77-34.38 4.57-43.15-9.39S4 20.34 18 11.57")
      path(id="main-shape" class="cls-1" d="M17.23 62.88V7.25a4.77 4.77 0 0 1 7.38-4L72.7 34.92a3 3 0 0 1-.48 5.25l-17.38 7.39L70 72l-11.81 6.17L43.54 52.3 27 59.59V16.26l29.4 20.15L27 48.84")
</template>

<script>
export default {
  name: 'Logo',
};
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
  .rg-logo {
    display: inline-block;
    z-index: 2;
    width: 50px;
    position: relative;
    top: 0px;
    left: 0;
    opacity: 1;
      .cls-1{fill:none;stroke:#0a0a0a;stroke-width:5px}
  }

  #c-shape {
    stroke-dasharray: 120;
    stroke-dashoffset: -110;
    animation: dashc 2s cubic-bezier(.53,1.13,.78,1) forwards;

    @media (max-width: 600px) {
      animation: none;
      stroke-dashoffset: 0;
    }
  }

  #main-shape {
    stroke-dasharray: 350;
    stroke-dashoffset: 350;
    animation: dash 2s cubic-bezier(.53,1.13,.78,1) forwards;
     @media (max-width: 600px) {
      animation: none;
      stroke-dashoffset: 0;
    }
  }
  @keyframes fadein {
      to {
          opacity: 1;
      }
  }
  @keyframes dash {
      to {
          stroke-dashoffset: 0;
      }
  }
  @keyframes dashc{
      to {
          stroke-dashoffset: 0;
      }
  }
</style>
