<template>
  <img
    ref="heart"
    class="heart"
    :style="heartStyle"
    src="https://linhda0611.iwedding.info/common/imgs/heart.png"
    @load="startAnimation"
  />
</template>

<style lang="scss" scss scoped></style>

<script lang="ts" setup>
import { ref } from 'vue';

const heart = ref<any | HTMLElement>(null);
let heartValue;

const heartStyle = {
  zIndex: '9999',
  left: `${Math.random() * 100}vw`,
  animationDuration: `${Math.random() * 2 + 5}s`,
  width: `${Math.random() * 20}px`,
};

setTimeout(() => {
  heartValue = heart.value;
  const rect = heartValue.getBoundingClientRect();
  if (rect.top > 1000) {
    heartValue.remove();
  }
}, 5000);
</script>
