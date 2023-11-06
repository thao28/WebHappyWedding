<template>
  <img
    @click="a"
    ref="heart"
    class="tw-w-4 tw-h-4 tw-duration-10000 z-50"
    src="https://linhda0611.iwedding.info/common/imgs/heart.png"
    alt="heart"
  />
</template>

<script lang="ts" setup>
// function createHeart() {
//   const heart = document.createElement('img');
//   heart.classList.add('heart');
//   heart.style.zIndex = '9999';
//   heart.style.left = Math.random() * 100 + 'vw';
//   heart.style.animationDuration = Math.random() * 2 + 5 + 's';
//   heart.style.width = Math.random() * 20 + 'px';

//   heart.src = 'https://linhda0611.iwedding.info/common/imgs/heart.png';

//   document.body.appendChild(heart);
//   setTimeout(() => {
//     if (heart.getBoundingClientRect().top > 1000) {
//       heart.remove();
//     }
//   }, 5000);
// }
// setInterval(createHeart, 500);

import { ref } from 'vue';

const heart = ref<HTMLElement | null>(null);
let heartElement = heart.value;
const a = () => {
  console.log(heartElement);
};
</script>
