<script setup>
import TwitterIcon from '@/social-icons/Twitter.vue';
import DribbbleIcon from '@/social-icons/Dribbble.vue';
import GitHubIcon from '@/social-icons/GitHub.vue';

const heading = 'Ryan Aaron Green,<br><span>Web Developer & Designer</span>';
</script>

<template>
  <div class="home d-flex">
    <div class="container">
      <div class="content">
        <div class="text-wrapper">
          <h1 class="h1" v-html="heading"></h1>
          <span class="divider divider--dark"></span>
          <p class="p1">Design with a purpose; develop as an art.</p>
          <div class="connect">
            <span>Connect With Me:</span>
            <ul class="connect__list">
              <li class="connect__item">
                <a
                  class="connect__link dribbble"
                  title="Dribbble"
                  rel="external"
                  target="_blank"
                  href="https://dribbble.com/ryanaarongreen"
                >
                  <DribbbleIcon></DribbbleIcon
                ></a>
              </li>
              <li class="connect__item">
                <a
                  class="connect__link github"
                  title="Github"
                  rel="external"
                  target="_blank"
                  href="https://github.com/RyanAaronGreen"
                >
                  <GitHubIcon></GitHubIcon
                ></a>
              </li>
              <li class="connect__item">
                <a
                  class="connect__link twitter"
                  title="Twitter"
                  rel="external"
                  target="_blank"
                  href="https://twitter.com/ryanaarongreen"
                >
                  <TwitterIcon></TwitterIcon
                ></a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
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
.home {
  position: relative;
  width: 100%;
  height: 100%;
  background-color: #75ca75;
  overflow: hidden;
  background: linear-gradient(110deg, #1d8f4d, #1aff1a);
}
.home .inner {
  z-index: 2;
}
.home .connect {
  display: flex;
  align-items: center;
}
@media (max-width: 600px) {
  .home .connect {
    display: block;
  }
}
.home .connect span {
  display: inline-block;
  color: #fff;
  font-family: 'PT Serif', serif;
  font-size: 18px;
}
@media (max-width: 600px) {
  .home .connect span {
    display: block;
  }
}
.home .connect__list {
  display: inline-block;
  padding: 0 20px;
}
@media (max-width: 600px) {
  .home .connect__list {
    padding: 0;
    margin: 5px 0 20px;
  }
}
.home .connect__item {
  display: inline-block;
  margin-right: 10px;
}
.home .connect__link {
  height: 35px;
  width: 35px;
  display: inline-block;
  border-radius: 100%;
  background-color: #fff;
  background-position: center;
  background-repeat: no-repeat;
  color: transparent;
  position: relative;
  transition: all 0.3s;
}
.home .connect__link svg {
  transition: all 0.3s;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
.home .connect__link svg path {
  transition: all 0.3s;
}
.home .connect__link.twitter svg {
  height: 20px;
}
.home .connect__link.twitter svg path {
  fill: #000;
}
.home .connect__link.linkedin svg {
  height: 16px;
}
.home .connect__link.linkedin svg path {
  fill: #000;
}
.home .connect__link.dribbble svg {
  height: 20px;
}
.home .connect__link.dribbble svg path {
  fill: #000;
}
.home .connect__link.github svg {
  height: 20px;
}
.home .connect__link.github svg path {
  fill: #000;
}
.home .connect__link.email svg {
  height: 20px;
}
.home .connect__link.email svg path {
  fill: #000;
}
.home .connect__link:hover svg path {
  fill: #fff;
}
.home .connect__link:hover.twitter {
  background-color: #1da1f2;
}
.home .connect__link:hover.linkedin {
  background-color: #0077b5;
}
.home .connect__link:hover.dribbble {
  background-color: #ea4c89;
}
.home .connect__link:hover.github {
  background-color: #24292e;
}
.home .connect__link:hover.email {
  background-color: #2ecc71;
}
.home .content {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column-reverse;
  align-content: flex-start;
  padding-bottom: 5%;
  z-index: 2;
  opacity: 0;
  animation: fade-up-and-in 2s cubic-bezier(0.17, 0.67, 0.26, 0.98) 0.4s 1
    normal forwards;
}
.home .content .h1 {
  color: #fff;
  font-size: 72px;
  line-height: 72px;
}
.home .content .h1 /deep/ span {
  color: #111111;
}
@media (max-width: 600px) {
  .home .content .h1 {
    font-size: 30px;
    line-height: 30px;
  }
}
.home .content .divider {
  height: 10px;
  width: 400px;
  max-width: 100%;
  background-color: #fff;
  display: block;
}
@media (max-width: 600px) {
  .home .content .divider {
    height: 5px;
  }
}
.home .content .p1 {
  color: #fff;
  font-size: 30px;
  font-family: 'PT Serif', serif;
}
@media (max-width: 600px) {
  .home .content .p1 {
    font-size: 26px;
    line-height: 30px;
  }
}
.home .background-text {
  position: absolute;
  bottom: 68%;
  left: -40px;
  white-space: nowrap;
  font-size: 100px;
  font-weight: 700;
  opacity: 0.05;
  z-index: 1;
}
</style>
