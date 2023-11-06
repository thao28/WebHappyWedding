<template>
  <footer class="site-footer">
    <div class="inner">
      <div class="couple-pic">
        <img
          src="https://cdn.biihappy.com/ziiweb/website/647a951e7a0e7dd068022467/e85f1c0e6a46f92a165ed78a79ff1a09.jpeg"
          alt=""
        />
      </div>
      <h2>Thank you</h2>
    </div>
  </footer>
</template>

<style lang="scss" scoped>
.site-footer {
  background: url('https://linhda0611.iwedding.info/templates/template15/images/footer-shape.png')
    center bottom/100% no-repeat local;
  text-align: center;
  height: 100vh;
  min-height: 900px;
  position: relative;
  .inner {
    width: 100%;
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    .couple-pic {
      background: url('https://linhda0611.iwedding.info/templates/template15/images/footer-couple-pic-frame.png')
        center center/cover no-repeat;
      width: 511px;
      height: 470px;
      margin: 0 auto;
      position: relative;
      @media only screen and (max-width: 991px) {
        width: 300px;
        height: 276px;
      }
      img {
        max-width: 75%;
        border-radius: 50%;
        position: absolute;
        left: 48%;
        top: 44%;
        transform: translate(-50%, -50%);
      }
    }
    h2 {
      font-family: 'Dancing Script';
      font-size: 72px;
      line-height: 1.8em;
      margin: 57.6px 0;
      @media only screen and (max-width: 991px) {
        font-size: 52px;
      }
    }
  }
}
</style>
