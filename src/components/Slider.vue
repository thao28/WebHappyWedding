<template>
  <div class="banner tw-w-full xs:tw-h-auto tw-h-[100vh] tw-relative">
    <Carousel :autoplay="3000" :transition="1500" :itemsToShow="1" :wrapAround="true">
      <Slide v-for="(image, index) in images" :key="image.id">
        <div class="tw-w-full tw-h-full tw-justify-items-center tw-items-center">
          <img class="slide-img" :src="image.url" alt="" loading="lazy" />
        </div>
      </Slide>
    </Carousel>
    <div class="slide-text tw-absolute tw-left-1/2 tw-top-1/2">
      <div class="tw-flex tw-items-center tw-mb-3">
        <div class="title tw-font-dancingScript tw-text-white tw-text-3xl md:tw-text-5xl tw-text-center tw-min-w-[250px]">Phạm Hiếu</div>
        <HeartFilled class="tw-text-3xl md:tw-text-5xl tw-text-white tw-mx-3"/>
        <div class="title tw-font-dancingScript tw-text-white tw-text-3xl md:tw-text-5xl tw-text-center tw-min-w-[250px]">Thanh Trà</div>
      </div>
      <h4 class="sub-title tw-font-comfortaa tw-text-center tw-text-white">21 Tháng 1 Năm 2024</h4>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { Carousel, Slide } from 'vue3-carousel';
import 'vue3-carousel/dist/carousel.css';
import {HeartFilled} from "@ant-design/icons-vue";
import slider1 from "@/assets/images/slider1.png";
import slider2 from "@/assets/images/2-min.png"
import slider3 from "@/assets/images/DAQ_3141-min.jpg"
interface Image {
  id: number;
  url: string;
}

const images: Image[] = [
  {
    id: 1,
    url: slider3,
  },
  {
    id: 2,
    url: slider2,
  },
    {
    id: 3,
    url: slider1,
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
