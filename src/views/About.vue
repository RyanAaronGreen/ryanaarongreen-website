<template>
  <div class="about d-flex">
    <div class="container">
      <div class="text-wrapper">
        <h2>Good enough is not good enough...</h2>
        <p class="paragraph">
          Growing up, my dad always told me that “Good enough is not good
          enough.” I’ve let that be the guideline to how I approach everything
          that I do and as a result, I always try to bring my best.
        </p>
        <p class="paragraph">
          I am a designer turned web developer and I have a passion for creating
          well crafted things. I love figuring out the “best” way to go about
          doing something and you can find me always trying to learn something
          new.
        </p>
      </div>
    </div>
  </div>
</template>

<style scoped>
.about {
  position: relative;
  width: 100%;
  height: 100%;
  background-color: #fff;
  overflow: hidden;
  @media (max-width: 600px) {
    overflow: visible;
    padding-bottom: 100px;
    height: auto;
  }
  .inner {
    z-index: 2;
  }

  .container {
    display: flex;
    align-items: center;
    @media (max-width: 600px) {
      display: block;
    }
  }
  .text-wrapper {
    display: block;
    width: 700px;
    margin: 0 auto;
    max-width: 100%;
    opacity: 0;
    animation: fade-up-and-in 2s cubic-bezier(0.17, 0.67, 0.26, 0.98) 0s 1
      normal forwards;
  }
  .content {
    width: 100%;
    height: 100%;
    z-index: 2;

    .h1 {
      color: #fff;
      font-size: 72px;
      line-height: 72px;
      /deep/ span {
        color: $brand-black;
      }
    }

    .p2 {
      font-size: 18px;
      line-height: 32px;
      font-family: $pts;
      width: 600px;
      color: $brand-black;
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
