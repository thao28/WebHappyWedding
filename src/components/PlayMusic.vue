<template>
  <button class="btn-music" @click="toggleAudio">
    <font-awesome-icon v-if="isPlaying" :icon="['fas', 'volume-high']" />
    <font-awesome-icon v-else :icon="['fas', 'volume-xmark']" />
  </button>
  <audio ref="audioElement" preload="auto" volume="0.5" :src="audioSrc" loop>
  </audio>
</template>

<style lang="scss" scoped>
.btn-music {
  display: block;
  position: fixed;
  text-align: center;
  color: #fff;
  background-color: #df4758;
  border-radius: 50%;
  position: fixed;
  bottom: 70px;
  left: 50px;
  width: 40px;
  height: 40px;
  z-index: 999;
  &::after {
    content: "";
    position: absolute;
    border-radius: 50%;
    z-index: -1;
    background-color: rgba(242, 59, 67, 0.3);
    width: 120%;
    height: 120%;
    left: -10%;
    top: -10%;
    z-index: 1;
    animation: blowUpModal 0.5s infinite;
    @keyframes blowUpModal {
      0% {
        transform: scale(1);
      }
      100% {
        transform: scale(1.1);
      }
    }
  }
}
</style>

<script lang="ts" setup>
import { ref } from "vue";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import audioSrc from "@/assets/mp3/ChucVoNguNgon.mp3";

let isPlaying = ref<boolean>(false);
let audioElement = ref<any>(null);

const toggleAudio = () => {
  if (isPlaying.value) {
    audioElement.value.pause();
  } else {
    console.log(audioElement)
    if(audioElement.value){
      audioElement.value.play();
    }
  }
  isPlaying.value = !isPlaying.value;
};
</script>
