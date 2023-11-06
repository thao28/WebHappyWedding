<template>
  <img
    ref="heart"
    class="heart"
    src="https://linhda0611.iwedding.info/common/imgs/heart.png"
    alt="heart"
  />
</template>

<style lang="scss" scss scoped>
.heart {
  z-index: 999;
  width: 16px;
}
</style>

<script lang="ts" setup>
import { ref } from 'vue';

const heart = ref<HTMLElement | null>(null);
// let heartElement = heart.value;
// const a = () => {
//   console.log(heartElement);
// };

// setInterval(a, 500);
</script>
