<template lang="pug">
  #app
    header
      .container
        router-link.logo(to="/")
          rg-logo

        button.mobile-toggle(@click="toggle = !toggle" :class="{'active': toggle}")
          span.line.line-one
          span.line.line-two
          span.line.line-three

        nav.header-menu(:class="{'nav-active': toggle}")
          ul.menu(@click="toggle = !toggle")
            li.menu__item()
              NuxtLink.menu__link(to="/about") About
            li.menu__item
              NuxtLink.menu__link(to="/work") Work

    transition(name="component-fade" mode="out-in")
      router-view.content
        Nuxt


</template>
<script>
import Logo from '~/components/Logo.vue';
export default {
  data() {
    return {
      toggle: false
    }
  },
  methods: {
  },
  components: {
    'rg-logo': Logo,
  },
};
</script>

<style lang="scss">
@import "~bootstrap/scss/bootstrap-grid.scss";
@import '~assets/styles/_fonts.scss';
@import '~assets/styles/_layout.scss';
@import '~assets/styles/_variables.scss';

.component-fade-enter-active, .component-fade-leave-active {
  transition: opacity .5s ease;
}
.component-fade-enter, .component-fade-leave-to
/* .component-fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}

html,
body {
  position: relative;
  width: 100%;
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  height: 100vh;

}

#app {
  font-family: 'Montserrat', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  padding: 0;
  margin: 0;
  height: 100%;
  position: relative;
  box-sizing: border-box;
}
.content {
  padding-top: 80px;
  box-sizing: border-box;
}
.mobile-toggle {
  display: none;
  position: fixed;
  top: 20px;
  right: 10px;
  z-index: 99;
  border: 0;
  background-color: transparent;
  height: 30px;
  width: 30px;
  &.active {
    .line {
      &-one {
        transform: translate(-50%, -50%) rotate(-45deg);
      }
      &-two {
        transform: translate(-50%, -50%) rotate(45deg);
        opacity: 0;
      }
      &-three {
        transform: translate(-50%, -50%) rotate(45deg);
      }
    }
  }
  .line {
    position: absolute;
    display: block;
    width: 28px;
    height: 4px;
    background-color: #111;
    margin-bottom: 2px;
    transition: all 0.3s;
    &-one {
      top: 50%;
      left: 50%;
      transform: translate(-50%, 150%) rotate(0);
    }
    &-two {
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%) rotate(0);
      opacity: 1;
    }
    &-three {
      top: 50%;
      left: 50%;
      transform: translate(-50%, -250%) rotate(0);
    }
  }
  @media (max-width: 600px) {
    display: block;
  }
}
header {
  position: absolute;
  width: 100%;
  top: 20px;
  left: 0;
  z-index: 9;
    @media (max-width: 600px) {
      top: 0;
      position: fixed;
    }
  .logo {
    display: inline-block;

    @media (max-width: 600px) {
      position: absolute;
      top: 10px;
      left: 10px;
    }
  }
  .header-menu {
    display: inline-block;
    float: right;

    @media (max-width: 600px) {
      position: fixed;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      background: #eee;
      display: none;
      justify-content: center;
      align-items: center;
      flex-direction: column;

      &.nav-active {
        display: flex;
      }
    }
  }
  .menu {
    text-align: right;
    margin: 0;
    float: right;
    @media (max-width: 600px) {
      text-align: center;
      float: none;
      padding: 0;
    }
    &__list {
      list-style-type: none;
    }
    &__item {
      list-style-type: none;
      display: inline-block;
      margin-left: 40px;
      @media (max-width: 600px) {
        text-align: center;
        display: block;
        margin: 10px 0;
      }
    }
    &__link {
      color: $brand-black;
      text-transform: uppercase;
      font-weight: 700;
      text-decoration: none;
      line-height: 50px;
      transition: all 0.2s ease-out;
      @media (max-width: 600px) {
        font-size: 30px;
      }
      &:hover {
        opacity: 0.6;
      }
    }
  }

  a {
    font-weight: bold;
    color: #2c3e50;
    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
