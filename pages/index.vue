<template lang="pug">
  .home.d-flex
    .container
      .content
        .text-wrapper
          h1.h1(v-html="heading")
          span.divider.divider--dark
          p.p1!="Design with a purpose; develop as an art."
          div.connect
            span!="Connect With Me:"
            ul.connect__list
              //- li.connect__item
              //-   a.connect__link.linkedin(title="LinkedIn" rel="external" target="_blank" href="https://www.linkedin.com/in/ryan-aaron-green")
              //-     img(src="~/assets/images/social/linkedin.svg")
              li.connect__item
                a.connect__link.dribbble(title="Dribbble" rel="external" target="_blank" href="https://dribbble.com/ryanaarongreen")
                  DribbbleIcon
              li.connect__item
                a.connect__link.github(title="Github" rel="external" target="_blank" href="https://github.com/RyanAaronGreen")
                  GitHubIcon
              li.connect__item
                a.connect__link.twitter(title="Twitter" rel="external" target="_blank" href="https://twitter.com/ryanaarongreen")
                  TwitterIcon



</template>

<script>
// @ is an alias to /src
import TwitterIcon from '~/components/social-icons/Twitter.vue';
import DribbbleIcon from '~/components/social-icons/Dribbble.vue';
import GitHubIcon from '~/components/social-icons/GitHub.vue';

export default {
  name: 'home',
  data() {
    return {
      heading: 'Ryan Aaron Green,<br><span>Web Developer & Designer</span>'
    }
  },
  components: {
    DribbbleIcon,
    GitHubIcon,
    TwitterIcon,
  },
};
</script>

<style lang="scss">
  @import '~assets/styles/_variables.scss';
  @import '~assets/styles/_animations.scss';
  .home {
    position: relative;
    width: 100%;
    height: 100%;
    background-color: rgb(117, 202, 117);
    overflow: hidden;
    background: linear-gradient(110deg, #1d8f4d, #1aff1a);

    .inner {
      z-index: 2;
    }

    .connect {
      display: flex;
      align-items: center;
      @media (max-width: 600px) {
        display: block;
      }
      span {
        display: inline-block;
        color: #fff;
        font-family: $pts;
        font-size: 18px;
        @media (max-width: 600px) {
          display: block;
        }
      }
      &__list {
        display: inline-block;
        padding: 0 20px;
        @media (max-width: 600px) {
          padding: 0;
          margin: 5px 0 20px;
        }
      }
      &__item {
        display: inline-block;
        margin-right: 10px;

      }
      &__link {
        height: 35px;
        width: 35px;
        display: inline-block;
        border-radius: 100%;
        background-color: #fff;
        background-position: center;
        background-repeat:  no-repeat;
        color: transparent;
        position: relative;
        transition: all 0.3s;
        svg {
          transition: all 0.3s;
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          path {
            transition: all 0.3s;
          }
        }
        &.twitter {
          svg {
            height: 20px;
            path {
              fill: #000;
            }
          }
        }
        &.linkedin {
           svg {
            height: 16px;
            path {
              fill: #000;
            }
          }
        }
        &.dribbble {
          svg {
            height: 20px;
            path {
              fill: #000;
            }
          }
        }
        &.github {
          svg {
            height: 20px;
            path {
              fill: #000;
            }
          }
        }
        &.email {
          svg {
            height: 20px;
            path {
              fill: #000;
            }
          }
        }

        &:hover {
          svg {
            path {
              fill: #fff;
            }
          }
          &.twitter {
            background-color: #1da1f2;
          }
          &.linkedin {
            background-color: #0077B5;
          }
          &.dribbble {
            background-color: #ea4c89;
          }
          &.github {
            background-color: #24292e;
          }
          &.email {
            background-color: $brand-green;
          }
        }
      }

    }
    .content {
      width: 100%;
      height: 100%;
      display: flex;
      flex-direction: column-reverse;
      align-content: flex-start;
      padding-bottom: 5%;
      z-index: 2;
      opacity: 0;
      animation: fade-up-and-in 2s cubic-bezier(.17,.67,.26,.98) 0.4s 1 normal forwards;

      .h1 {
        color: #fff;
        font-size: 72px;
        line-height: 72px;
        /deep/ span {
          color: $brand-black;
        }

        @media (max-width: 600px) {
          font-size: 30px;
          line-height: 30px;
        }
      }
      .divider {
        height: 10px;
        width: 400px;
        max-width: 100%;
        background-color: #fff;
        display: block;
         @media (max-width: 600px) {
          height: 5px;
        }
      }
      .p1 {
        color: #fff;
        font-size: 30px;
        font-family: $pts;
         @media (max-width: 600px) {
          font-size: 26px;
          line-height: 30px;
        }
      }
    }
    .background-text {
      position: absolute;
      bottom: 68%;
      left: -40px;
      white-space: nowrap;
      font-size: 100px;
      font-weight: 700;
      opacity: 0.05;
      z-index: 1;
    }
  }

</style>
