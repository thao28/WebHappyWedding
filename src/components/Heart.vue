<template>
  <img
    class="heart"
    :style="heartStyle"
    src="https://linhda0611.iwedding.info/common/imgs/heart.png"
  />
</template>

<style lang="scss" scss scoped>
.heart {
  position: fixed;
  transform: translateY(0);
  animation: fall 10s infinite;
}

@keyframes fall {
  0% {
    transform: translateY(0vh) translateX(-10vw);
  }
  100% {
    transform: translateY(105vh) translateX(10vw);
  }
}
</style>

<script lang="ts" setup>

const heartStyle = {
  zIndex: '9999',
  left: `${Math.random() * 100}vw`,
  animationDuration: `${Math.random() * 2 + 5}s`,
  width: `${Math.random() * 20}px`,
};
</script>
