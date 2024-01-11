<template>
  <section id="album" class="wedding-album">
    <div class="lg:tw-container">
      <div class="sm:tw-block tw-flex tw-px-3.5">
        <div class="tw-w-3/4 tw-mx-auto">
          <div class="title tw-font-comfortaa tw-mb-8">
            <h2>Album Hình Cưới</h2>
            <p>
              Được ai đó yêu sâu sắc sẽ mang lại cho bạn sức mạnh, trong khi yêu ai đó sâu sắc sẽ
              cho bạn dũng khí.
            </p>
          </div>
        </div>
      </div>
      <div class="tw-columns-3xs">
        <a-image-preview-group>
          <a-image class="tw-mb-4" v-for="image in images" :src="image.url" alt=""/>
        </a-image-preview-group>
        
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
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #c89d9c;
    color: #fff;
    line-height: 17.6px;
    width:200px;
    height:38px;
    font-weight: 600;
    border: 0;
    border-radius: 4px;
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
import {ref} from "vue";
import image1 from "@/assets/images/28-min.png";
import image2 from "@/assets/images/47-min.png";
import image3 from "@/assets/images/55-min.png";
import image4 from "@/assets/images/155-min.png";
import image5 from "@/assets/images/160-min.png";
import image6 from "@/assets/images/DAQ_2990-min.jpg";
import image7 from "@/assets/images/DAQ_3050-min.jpg";
import image8 from "@/assets/images/DAQ_3060-min.jpg";
import image9 from "@/assets/images/DAQ_3141-min.jpg";
import image10 from "@/assets/images/DAQ_3220-min.jpg";
import image11 from "@/assets/images/DAQ_3240-min.jpg";
import image12 from "@/assets/images/DAQ_3523-min.jpg";
import image13 from "@/assets/images/DAQ_3612-min.jpg";
interface Image {
  id: number;
  url: string;
}

const images:Image[] = [
  {
    id: 1,
    url:image1,
  },
  {
    id: 2,
    url: image2,
  },
  {
    id: 3,
    url: image3,
  },
  {
    id: 4,
    url: image4,
  },
  {
    id: 5,
    url: image5,
  },
  {
    id: 6,
    url:image6,
  },
  {
    id: 7,
    url: image7,
  },
  {
    id: 8,
    url: image8,
  },
  {
    id: 9,
    url: image9,
  },
  {
    id: 10,
    url:image10,
  },
  {
    id: 11,
    url:image11,
  },
   {
    id: 12,
    url: image12,
  },
   {
    id: 13,
    url: image13,
  },
];
</script>
