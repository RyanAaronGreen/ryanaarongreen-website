<template lang="pug">
  .four-oh-four
    .inner
    span.background-text!="404"

</template>

<script>
// @ is an alias to /src

export default {
  name: 'home',
  data() {
    return {
      heading: 'Ryan Aaron Green,<br><span>Web Developer & Designer</span>'
    }
  },
  components: {},
};
</script>

<style lang="scss" scoped>
  @import '~assets/styles/_variables.scss';
  .four-oh-four {
    position: relative;
    width: 100%;
    height: 100%;
    background-color:#fff;
    overflow: hidden;

    .background-text {
      position: absolute;
      bottom: 0%;
      right: -40px;
      white-space: nowrap;
      font-size: 600px;
      font-weight: 700;
      opacity: 1;
      z-index: 1;
    }
  }

</style>
