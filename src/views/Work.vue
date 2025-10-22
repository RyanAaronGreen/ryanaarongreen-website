<script setup>
const websiteContent =
  'Below you will find a collection of work that I had the opportunity to work on ranging from being the sole frontend developer on the project to being a part of a larger team.';

const logoContent =
  'I have also had the opportunity to work on a number of different logo projects where I was a part of helping develop the overall branding for the project.';

// Use absolute paths from project root for Vite
const rawWebsites = [
  {
    image: '/images/work/work-august-baby.webp',
    company: 'Personal Project',
    title: 'August Baby Boutique Shopify',
    link: 'https://augustbaby.co/',
  },
  {
    image: '/images/work/work-pinnacle.jpg',
    company: 'Zipline Interactive Project',
    title: 'Pinnacle Investigations Site',
    link: 'https://pinnacleprof.com/',
  },
  {
    image: '/images/work/work-rescue.jpg',
    company: 'Zipline Interactive Project',
    title: 'Rescue Pest Control Site',
    link: 'https://rescue.com/',
  },
  {
    image: '/images/work/work-neuvana.webp',
    company: 'Symboliq Media Project',
    title: 'Neuvana eCommerce Integration',
    link: 'https://neuvanalife.com/',
  },
  {
    image: '/images/work/work-prodentmax.webp',
    company: 'Symboliq Media Project',
    title: 'Prodent Max',
    link: 'https://prodentmax.com/',
  },
  {
    image: '/images/work/work-bassford-remele.png',
    company: '14Four Project',
    title: 'Bassford Remele',
    link: 'https://www.bassford.com/',
  },
  {
    image: '/images/work/work-chewy-ht3.png',
    company: '14Four Project',
    title: 'Quaker HT3 Promo Site',
  },
  {
    image: '/images/work/work-globalcu.jpg',
    company: 'Zipline Interactive Project',
    title: 'Global Credit Union',
  },
  {
    image: '/images/work/work-one1brands.png',
    company: '14Four Project',
    title: 'ONE Brands Shopify',
    link: 'https://one1brands.com/',
  },
  {
    image: '/images/work/work-smile.jpg',
    company: '14Four Project',
    title: 'Smile with Lays Microsite',
  },
  {
    image: '/images/work/work-nissinfoods.png',
    company: '14Four Project',
    title: 'Nissin Foods Fan Store',
  },
  {
    image: '/images/work/work-understanding-color.png',
    company: 'Personal Project',
    title: 'Understanding Computer Color',
    link: 'https://ryanaarongreen.github.io/computer-color-study/',
  },
];

// Use new URL with import.meta.url for Vite
const websites = rawWebsites.map((site) => ({
  ...site,
  image: new URL(site.image, import.meta.url).href,
}));
</script>

<template>
  <div class="work">
    <div class="section">
      <div class="container">
        <div class="row">
          <div class="col-12 col-md-8 offset-md-2">
            <div class="work-heading">
              <h2>Websites</h2>
              <p class="paragraph" v-html="websiteContent"></p>
            </div>
          </div>
        </div>
        <div class="row">
          <div
            class="col-12 col-sm-6 col-md-4 list-item"
            v-for="website in websites"
            :key="website.title"
          >
            <component
              :is="website.link ? 'a' : 'div'"
              class="work__link"
              :href="website.link"
              target="_blank"
              rel="nofollow noreferrer"
            >
              <span class="company company--14four"></span>
              <div class="overlay">
                <div class="meta">
                  <span class="title" v-html="website.title"></span
                  ><span class="company" v-html="website.company"></span>
                </div>
                <button v-if="website.link">View Project</button>
              </div>
              <img :src="website.image" alt="" />
            </component>
          </div>
        </div>
      </div>
    </div>
    <div class="section section--grey">
      <div class="container">
        <div class="row">
          <div class="col-12 col-md-8 offset-md-2">
            <div class="work-heading">
              <h2>Design</h2>
              <p class="paragraph" v-html="logoContent"></p>
            </div>
          </div>
        </div>
        <div class="row">
          <div class="col-12 col-sm-6 col-md-4">
            <img
              class="design-tile"
              src="/images/design/design-mealmate.webp"
              alt=""
            />
          </div>
          <div class="col-12 col-sm-6 col-md-4">
            <img
              class="design-tile"
              src="/images/design/design-august-baby.webp"
              alt=""
            />
          </div>
          <div class="col-12 col-sm-6 col-md-4">
            <img
              class="design-tile"
              src="/images/design/design-jetpack.png"
              alt=""
            />
          </div>
          <div class="col-12 col-sm-6 col-md-4">
            <img
              class="design-tile"
              src="/images/design/design-playactivate.png"
              alt=""
            />
          </div>
          <div class="col-12 col-sm-6 col-md-4">
            <img
              class="design-tile"
              src="/images/design/design-lakewood.png"
              alt=""
            />
          </div>
          <div class="col-12 col-sm-6 col-md-4">
            <img
              class="design-tile"
              src="/images/design/design-reviewlocal.png"
              alt=""
            />
          </div>
          <div class="col-12 col-sm-6 col-md-4">
            <img
              class="design-tile"
              src="/images/design/design-talk-about-talking.png"
              alt=""
            />
          </div>
          <div class="col-12 col-sm-6 col-md-4">
            <img
              class="design-tile"
              src="/images/design/design-littlethings.png"
              alt=""
            />
          </div>
          <div class="col-12 col-sm-6 col-md-4">
            <img
              class="design-tile"
              src="/images/design/design-housefly.png"
              alt=""
            />
          </div>
          <div class="col-12 col-sm-6 col-md-4">
            <img
              class="design-tile"
              src="/images/design/design-monstermore.png"
              alt=""
            />
          </div>
          <div class="col-12 col-sm-6 col-md-4">
            <img
              class="design-tile"
              src="/images/design/design-health-insurance-zen.png"
              alt=""
            />
          </div>
          <div class="col-12 col-sm-6 col-md-4">
            <img
              class="design-tile"
              src="/images/design/design-retalent.png"
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.list {
  backface-visibility: hidden;
  z-index: 1;
}
.list-move {
  transition: all 600ms ease-in-out 50ms;
}
.list-enter-active {
  transition: all 400ms ease-out;
}
.list-leave-active {
  transition: all 200ms ease-in;
  position: absolute;
  z-index: 0;
}
.list-enter,
.list-leave-to {
  opacity: 0;
}
@keyframes fade-up-and-in {
  0% {
    opacity: 0;
    transform: translate(0, 30px);
  }
  100% {
    opacity: 1;
    transform: translate(0, 0);
  }
}
.paragraph {
  font-size: 1.2em;
  line-height: 1.8em;
}
@media (max-width: 600px) {
  .paragraph {
    font-size: 1em;
  }
}
@keyframes fadeIn {
  0% {
    opacity: 0;
    transform: scale(1) translate(0, 40px);
  }
  100% {
    opacity: 1;
    transform: scale(1) translate(0, 0);
  }
}
.list-item {
  opacity: 0;
  animation: fade-up-and-in 2s cubic-bezier(0.17, 0.67, 0.26, 0.98) 0.4s 1
    normal forwards;
}
.list-item:nth-child(n + 4) {
  animation-delay: 0.7s;
}
.work {
  position: relative;
  width: 100%;
  height: 100%;
  background-color: #fff;
}
.work-heading {
  display: block;
  margin-bottom: 50px;
}
.work-heading h2 {
  margin-bottom: 5px;
  padding: 0;
  opacity: 0;
  animation: fade-up-and-in 1s cubic-bezier(0.17, 0.67, 0.26, 0.98) 0s 1 normal
    forwards;
}
.work-heading .paragraph {
  padding: 0;
  margin: 0;
  opacity: 0;
  animation: fade-up-and-in 1s cubic-bezier(0.17, 0.67, 0.26, 0.98) 0s 1 normal
    forwards;
}
@media (max-width: 600px) {
  .work-heading .paragraph {
    font-size: 16px;
    line-height: 24px;
  }
}
.work .section {
  padding: 20px 0;
}
.work .section--grey {
  background-color: #eee;
}
.work .overlay {
  transform: translate(0, 100%);
  position: absolute;
  padding: 15px 10px;
  opacity: 0;
  left: 0;
  right: 0;
  height: 60px;
  bottom: 0;
  background-color: #111111;
  transition: all 0.5s cubic-bezier(0.17, 0.67, 0.26, 0.98);
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.work .overlay .meta {
  display: inline-block;
}
.work .overlay .meta .company {
  color: #2ecc71;
  font-weight: 900;
  text-transform: uppercase;
  font-size: 10px;
  line-height: 12px;
  letter-spacing: 0.02em;
  display: block;
  margin-right: 10px;
  position: relative;
  padding-bottom: 4px;
}
.work .overlay .meta .company:after {
  content: '';
  position: absolute;
  left: 0;
  top: 100%;
  width: 70px;
  border-bottom: 2px solid #fff;
}
.work .overlay .meta .title {
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
.work .overlay button {
  cursor: pointer;
  background-color: transparent;
  color: #000;
  font-size: 12px;
  text-transform: uppercase;
  font-weight: 700;
  padding: 5px 10px;
  background-color: #fff;
  border: 2px solid #fff;
  transition: all 0.3s cubic-bezier(0.17, 0.67, 0.26, 0.98);
}
.work .overlay button:hover {
  background-color: rgba(0, 0, 0, 0.8);
  color: #fff;
}
.work .overlay .company {
  color: #fff;
}
.work .overlay .description {
  color: #fff;
}
.work .design-tile {
  box-shadow: 3px 3px 12px 0px rgba(0, 0, 0, 0.2);
  margin-bottom: 20px;
}
.work__link {
  display: inline-block;
  box-shadow: 1px 1px 12px 0px rgba(0, 0, 0, 0.2);
  margin-bottom: 20px;
  transform-origin: center;
  transform: scale(1);
  transition: all 0.15s ease-out;
  overflow: hidden;
}
.work__link:hover .overlay {
  transform: translate(0);
  opacity: 1;
}
.work .inner {
  z-index: 2;
}
.work .content {
  width: 100%;
  height: 100%;
  display: flex;
  z-index: 2;
}
.work .content .h1 {
  color: #fff;
  font-size: 72px;
  line-height: 72px;
}
.:deep(.work .content .h1 span) {
  color: #111111;
}
.work .content .divider {
  height: 10px;
  width: 400px;
  max-width: 100%;
  background-color: #fff;
  display: block;
}
.work .content .p1 {
  color: #fff;
  font-size: 48px;
  font-family: 'PT Serif', serif;
}
.work .background-text {
  position: absolute;
  bottom: 38%;
  left: -40px;
  white-space: nowrap;
  font-size: 200px;
  font-weight: 700;
  opacity: 1;
  z-index: 1;
}
</style>
