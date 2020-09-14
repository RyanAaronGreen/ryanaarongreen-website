<template lang="pug">
  .work
    .section
      .container
        .row
            .col-12.col-md-8.offset-md-2
              .work-heading
                h2 Websites
                p.paragraph(v-html="websiteContent")

        .row()
          .col-12.col-sm-6.col-md-4.list-item(v-for="website in websites" :key="website.title")
            a.work__link(:href="website.link" target="_blank")
              span.company.company--14four
              div.overlay
                .meta
                  span.title(v-html="website.title")
                  span.company(v-html="website.company")
                button View Project
              img(:src="website.image" alt="")


    .section.section--grey
      .container
        .row
          .col-12.col-md-8.offset-md-2
            .work-heading
              h2 Design
              p.paragraph(v-html="logoContent")
        .row
          .col-12.col-sm-6.col-md-4
            img.design-tile(src="~/assets/images/design/design-jetpack.png" alt="")
          .col-12.col-sm-6.col-md-4
            img.design-tile(src="~/assets/images/design/design-playactivate.png" alt="")
          .col-12.col-sm-6.col-md-4
            img.design-tile(src="~/assets/images/design/design-lakewood.png" alt="")
          .col-12.col-sm-6.col-md-4
            img.design-tile(src="~/assets/images/design/design-reviewlocal.png" alt="")
          .col-12.col-sm-6.col-md-4
            img.design-tile(src="~/assets/images/design/design-monstermore.png" alt="")
          .col-12.col-sm-6.col-md-4
            img.design-tile(src="~/assets/images/design/design-health-insurance-zen.png" alt="")

          .col-12.col-sm-6.col-md-4
            img.design-tile(src="~/assets/images/design/design-retalent.png" alt="")
          .col-12.col-sm-6.col-md-4
            img.design-tile(src="~/assets/images/design/design-talk-about-talking.png" alt="")
          .col-12.col-sm-6.col-md-4
            img.design-tile(src="~/assets/images/design/design-littlethings.png" alt="")
          .col-12.col-sm-6.col-md-4
            img.design-tile(src="~/assets/images/design/design-housefly.png" alt="")


</template>

<script>
// @ is an alias to /src

export default {
  name: 'Work',
  data() {
    return {
      websiteContent: "Below you will find a collection of work that I had the opportunity to work on ranging from being the sole frontend developer on the project to being a part of a larger team.",
      logoContent: "I have also had the opportunity to work on a number of different logo projects where I was a part of helping develop the overall branding for the project.",

      websites: [
        {
          image: require('~/assets/images/work/work-nissinfoods.png'),
          company: '14Four Project',
          title: 'Nissin Fan Store Shopify',
          link: 'https://nissinfanstore.com/'
        },
        {
          image: require('~/assets/images/work/work-bassford-remele.png'),
          company: '14Four Project',
          title: 'Bassford Remele',
          link: 'https://www.bassford.com/'
        },
        {
          image: require('~/assets/images/work/work-chewy-ht3.png'),
          company: '14Four Project',
          title: 'Quaker HT3 Promo Site',
          link: 'https://www.quakerht3.com/'
        },
        {
          image: require('~/assets/images/work/work-globalcu.jpg'),
          company: 'Zipline Interactive Project',
          title: 'Global Credit Union',
          link: 'https://www.globalcu.org/'
        },
        {
          image: require('~/assets/images/work/work-one1brands.png'),
          company: '14Four Project',
          title: 'ONE Brands Shopify',
          link: 'https://one1brands.com/'
        },
        {
          image: require('~/assets/images/work/work-pinnacle.jpg'),
          company: 'Zipline Interactive Project',
          title: 'Pinnacle Investigations Site',
          link: 'https://pinnacleprof.com/'
        },
        {
          image: require('~/assets/images/work/work-rescue.jpg'),
          company: 'Zipline Interactive Project',
          title: 'Rescue Pest Control Site',
          link: 'https://rescue.com/'
        },
        {
          image: require('~/assets/images/work/work-smile.jpg'),
          company: '14Four Project',
          title: 'Smile with Lays Microsite',
          link: 'https://tma-lays-smiles.stage.14four.com/'
        },
        {
          image: require('~/assets/images/work/work-understanding-color.png'),
          company: 'Personal Project',
          title: 'Understanding Computer Color',
          link: 'https://ryanaarongreen.github.io/computer-color-study/'
        }
      ]

    }
  },
  components: {

  },
};
</script>

<style lang="scss" scoped>
  @import '~assets/styles/_transitions.scss';
  @import '~assets/styles/_variables.scss';
  @import '~assets/styles/_animations.scss';


  @keyframes fadeIn {
    0% { opacity: 0; transform: scale(1) translate(0, 40px)}
    100% { opacity: 1; transform: scale(1) translate(0, 0)}
  }
  .list-item {
    opacity: 0;
    animation: fade-up-and-in 2s cubic-bezier(.17,.67,.26,.98) 0.4s 1 normal forwards;

    &:nth-child(n + 4) {
      animation-delay: 0.7s;
    }
  }

  .work {
    position: relative;
    width: 100%;
    height: 100%;
    background-color: #fff;

    &-heading {
      h2 {
        margin-bottom: 5px;
        padding: 0;
        opacity: 0;
        animation: fade-up-and-in 1s cubic-bezier(.17,.67,.26,.98) 0s 1 normal forwards;

      }
      .paragraph {
        padding: 0;
        margin: 0;
        opacity: 0;
        animation: fade-up-and-in 1s cubic-bezier(.17,.67,.26,.98) 0s 1 normal forwards;
         @media (max-width: 600px) {
          font-size: 16px;
          line-height: 24px;
        }
      }
      display: block;
      margin-bottom: 50px;
    }
    .section {
      padding: 20px 0;
      &--grey {
        background-color: #eee;
      }
    }
    .overlay {
      transform: translate(0, 100%);
      position: absolute;
      padding: 15px 10px;
      opacity: 0;
      cursor: pointer;
      left: 0;
      right: 0;
      height: 60px;
      bottom: 0;
      background-color: rgba($brand-black, 1);
      transition: all 0.5s cubic-bezier(.17,.67,.26,.98);
      display: flex;
      align-items: center;
      justify-content: space-between;
      .meta {
        display: inline-block;
        .company {
          color: $brand-green;
          font-weight: 900;
          text-transform: uppercase;
          font-size: 10px;
          line-height: 12px;
          letter-spacing: 0.02em;
          display: block;
          margin-right: 10px;
          position: relative;
          padding-bottom: 4px;
          &:after {
            content: '';
            position: absolute;
            left: 0;
            top: 100%;
            width: 70px;
            border-bottom: 2px solid #fff;
          }
        }
        .title {
          display: block;
          color: #fff;
          font-size: 12px;
          line-height: 16px;
          font-weight: 900;
          margin-right: 10px;
          margin-bottom: 0;
          padding: 0;
          position: relative;

        }
      }


      button {
        cursor: pointer;
        background-color: transparent;
        color: #000;
        font-size: 12px;
        text-transform: uppercase;
        font-weight: 700;
        padding: 5px 10px;
        background-color: #fff;
        border: 2px solid #fff;
        transition: all 0.3s cubic-bezier(.17,.67,.26,.98);
        &:hover {
          background-color: rgba(#000, 0.8);
          color: #fff;
        }
      }
      .company {
        color: #fff;
      }
      .description {
        color: #fff;
      }
    }
    .design-tile {
      box-shadow: 3px 3px 12px 0px rgba(0,0,0,0.2);
      margin-bottom: 20px;
    }

    &__link {
      display: inline-block;
      box-shadow: 1px 1px 12px 0px rgba(0,0,0,0.2);
      margin-bottom: 20px;
      transform-origin: center;
      transform: scale(1);
      transition: all 0.15s ease-out;
      overflow: hidden;
      &:hover {
        .overlay {
          transform: translate(0);
          opacity: 1;
        }
      }
    }
    .inner {
      z-index: 2;
    }

    .content {
      width: 100%;
      height: 100%;
      display: flex;
      z-index: 2;
      .h1 {
        color: #fff;
        font-size: 72px;
        line-height: 72px;
        /deep/ span {
          color: $brand-black;
        }
      }
      .divider {
        height: 10px;
        width: 400px;
        max-width: 100%;
        background-color: #fff;
        display: block;
      }
      .p1 {
        color: #fff;
        font-size: 48px;
        font-family: $pts;
      }
    }
    .background-text {
      position: absolute;
      bottom: 38%;
      left: -40px;
      white-space: nowrap;
      font-size: 200px;
      font-weight: 700;
      opacity: 1;
      z-index: 1;
    }
  }

</style>
