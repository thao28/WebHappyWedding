<template>
  <div class="banner tw-w-full tw-h-[100vh] tw-relative">
    <Carousel :autoplay="1000" :itemsToShow="1" :wrapAround="true">
      <Slide v-for="(image, index) in images" :key="image.id">
        <div class="tw-w-full tw-h-full tw-justify-items-center tw-items-center">
          <img class="slide-img" :src="image.url" alt="" />
        </div>
      </Slide>
    </Carousel>
    <div class="slide-text tw-absolute tw-left-1/2 tw-top-1/2">
      <h2 class="title tw-font-dancingScript tw-text-white tw-text-3xl md:tw-text-5xl">
        Văn Đà Thuỳ Linh
      </h2>
      <h4 class="sub-title tw-font-comfortaa tw-text-center tw-text-white">11 Tháng 6 2023</h4>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { Carousel, Slide } from 'vue3-carousel';
import 'vue3-carousel/dist/carousel.css';

interface Image {
  id:number,
  url:string
}

const images:Image[] = [
  {
    id: 1,
    url: 'https://cdn.biihappy.com/ziiweb/website/647a951e7a0e7dd068022467/templates/6174ef83a62963738e0a367c/ff47ee5c7f44475387a85dc2f20256d3.jpg',
  },
  {
    id: 2,
    url: 'https://cdn.biihappy.com/ziiweb/website/647a951e7a0e7dd068022467/templates/6174ef83a62963738e0a367c/998c2c9dd0aabc89cdaf457478c4b908.jpg',
  },
];
</script>

<style lang="scss" scoped>
.banner {
  &::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba(0, 0, 0, 0.3);
  }
}
.slide-img {
  width: 100%;
  vertical-align: middle;
  max-height: 100vh;
  display: flex;
  object-fit: cover;
  z-index: 0;
  vertical-align: sub;
}
.slide-text {
  z-index: 1;
  transform: translate(-50%, -50%);
}
</style>
