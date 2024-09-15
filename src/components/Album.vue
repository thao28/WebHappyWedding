<template>
  <section id="album" class="wedding-album">
    <div class="lg:tw-container">
      <div class="sm:tw-block tw-flex tw-px-3.5">
        <div class="tw-w-3/4 tw-mx-auto">
          <div class="title tw-font-comfortaa tw-mb-8">
            <h2>Album Hình Cưới</h2>
            <p class="text-family">
              Được ai đó yêu sâu sắc sẽ mang lại cho bạn sức mạnh, trong khi yêu ai đó sâu sắc sẽ
              cho bạn dũng khí.
            </p>
          </div>
        </div>
      </div>
      <div class="tw-columns-3xs">
        <a-image-preview-group>
          <a-image class="tw-mb-4" v-for="image in imgaes" :src="image.url" alt=""/>
        </a-image-preview-group>
        
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
.text-family {
  font-family: 'Dancing Script';
}
.wedding-album {
  padding: 100px 0;
  text-align: center;
  .title {
    position: relative;
    text-align: center;
    padding-top: 70px;
    &::after {
      content: '';
      background: url('https://linhda0611.iwedding.info/templates/template15/imgaes/sec-title-flower.png')
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
import image1 from "@/assets/imgaes/album1.jpg";
import image2 from "@/assets/imgaes/album2.jpg";
import image3 from "@/assets/imgaes/album3.jpg";
import image4 from "@/assets/imgaes/album4.jpg";
import image5 from "@/assets/imgaes/album5.jpg";
import image6 from "@/assets/imgaes/album6.jpg";
import image7 from "@/assets/imgaes/album7.jpg";
import image8 from "@/assets/imgaes/album8.jpg";
import image9 from "@/assets/imgaes/album9.jpg";
import image10 from "@/assets/imgaes/album10.jpg";
import image11 from "@/assets/imgaes/album11.jpg";
import image12 from "@/assets/imgaes/album12.jpg";
import image13 from "@/assets/imgaes/album13.jpg";
import image14 from "@/assets/imgaes/album14.jpg";
import image15 from "@/assets/imgaes/album15.jpg";
import image16 from "@/assets/imgaes/album16.jpg";
import image17 from "@/assets/imgaes/album17.jpg";
import image18 from "@/assets/imgaes/album18.jpg";
import image19 from "@/assets/imgaes/album19.jpg";
import image20 from "@/assets/imgaes/album20.jpg";
import image21 from "@/assets/imgaes/album21.jpg";
import image22 from "@/assets/imgaes/album22.jpg";
import image23 from "@/assets/imgaes/album23.jpg";
import image24 from "@/assets/imgaes/album24.jpg";

interface Image {
  id: number;
  url: string;
}

const imgaes:Image[] = [
{
    id: 7,
    url: image7,
  },

  {
    id: 1,
    url:image1,
  },
  {
    id: 2,
    url: image2,
  },
  {
    id: 15,
    url:image15,
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
    id: 8,
    url: image8,
  },
  {
    id: 6,
    url:image6,
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
  {
    id: 14,
    url: image14,
  },

  {
    id: 16,
    url: image16,
  },
  {
    id: 17,
    url: image17,
  },
  {
    id: 18,
    url: image18,
  },
  {
    id: 19,
    url:image19,
  },
  {
    id: 20,
    url:image20,
  },
   {
    id: 21,
    url: image21,
  },
   {
    id: 22,
    url: image22,
  },
  {
    id: 23,
    url: image23,
  },
   {
    id: 24,
    url: image24,
  },
];
</script>
