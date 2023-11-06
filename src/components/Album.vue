<template>
  <section id="album" class="wedding-album">
    <div class="tw-container">
      <div class="sm:tw-block tw-flex tw-px-3.5">
        <div class="tw-w-3/4 tw-mx-auto">
          <div class="title tw-font-comfortaa">
            <h2>Album Hình Cưới</h2>
            <p>
              Được ai đó yêu sâu sắc sẽ mang lại cho bạn sức mạnh, trong khi yêu ai đó sâu sắc sẽ
              cho bạn dũng khí.
            </p>
          </div>
          <a class="album-button" href="#">Xem Album</a>
        </div>
      </div>
      <div class="tw-columns-3xs">
        <img class="tw-mb-4" v-for="image in images" :src="image.url" />
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
.wedding-album {
  padding: 100px 0;
  text-align: center;
  .title {
    position: relative;
    text-align: center;
    padding-top: 70px;
    &::after {
      content: '';
      background: url('https://linhda0611.iwedding.info/templates/template15/images/sec-title-flower.png')
        center center/cover no-repeat local;
      width: 126px;
      height: 59px;
      position: absolute;
      top: 0;
      left: 50%;
      transform: translateX(-50%);
    }
    h2 {
      font-family: 'Dancing Script';
      font-size: 36px;
      margin-bottom: 14px;
      font-weight: 700;
    }
    p {
      font-size: 1.05rem;
    }
  }
  .album-button {
    text-align: center;
    display: inline-block;
    background-color: #c89d9c;
    color: #fff;
    line-height: 17.6px;
    padding: 15px 50px 15px 25px;
    font-weight: 600;
    border: 0;
    border-radius: 0;
    position: relative;
    margin-top: 20px;
    margin-bottom: 52px;
    &:hover {
      background-color: #b58887;
      color: #fff;
      text-decoration: none;
    }
  }
  .gallery-container {
    gap: 15px;
    margin: 0 -7.5px;
  }
}
</style>

<script lang="ts" setup>
interface Image {
  id: number;
  url: string;
}

const images:Image[] = [
  {
    id: 1,
    url: 'https://cdn.biihappy.com/ziiweb/website/647a951e7a0e7dd068022467/galleries/647aa1d0b2cdf2182f00ef34/small.jpg',
  },
  {
    id: 2,
    url: 'https://cdn.biihappy.com/ziiweb/website/647a951e7a0e7dd068022467/galleries/647aa1d0b2cdf2182f00ef34/small.jpg',
  },
  {
    id: 11,
    url: 'https://cdn.biihappy.com/ziiweb/website/647a951e7a0e7dd068022467/galleries/647aa1eddaed22d1650854e3/small.jpg',
  },
  {
    id: 3,
    url: 'https://cdn.biihappy.com/ziiweb/website/647a951e7a0e7dd068022467/galleries/647aa1d0b2cdf2182f00ef34/small.jpg',
  },
  {
    id: 4,
    url: 'https://cdn.biihappy.com/ziiweb/website/647a951e7a0e7dd068022467/galleries/647aa1e798a36973a90b78c8/small.jpg',
  },
  {
    id: 5,
    url: 'https://cdn.biihappy.com/ziiweb/website/647a951e7a0e7dd068022467/galleries/647aa1d0b2cdf2182f00ef34/small.jpg',
  },
  {
    id: 6,
    url: 'https://cdn.biihappy.com/ziiweb/website/647a951e7a0e7dd068022467/galleries/647aa1f575a686ad730eb564/small.jpg',
  },
  {
    id: 7,
    url: 'https://cdn.biihappy.com/ziiweb/website/647a951e7a0e7dd068022467/galleries/647aa1fb410fa9c8e304f356/small.jpg',
  },
  {
    id: 8,
    url: 'https://cdn.biihappy.com/ziiweb/website/647a951e7a0e7dd068022467/galleries/647aa1d0b2cdf2182f00ef34/small.jpg',
  },
  {
    id: 9,
    url: 'https://cdn.biihappy.com/ziiweb/website/647a951e7a0e7dd068022467/galleries/647aa1d0b2cdf2182f00ef34/small.jpg',
  },
  {
    id: 10,
    url: 'https://cdn.biihappy.com/ziiweb/website/647a951e7a0e7dd068022467/galleries/647aa1fb410fa9c8e304f356/small.jpg',
  },
];
</script>
