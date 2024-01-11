<template>
  <Heart v-for="index in 15" :key="index" />
  <Header />
  <Slider />
  <InvitationSection />
  <CoupleSection />
  <!-- <Accessibilities /> -->
  <Story />
  <Event />
  <Album />
  <!-- <Contact /> -->
  <Donation />
  <Footer />
  <PlayMusic />
</template>

<script lang="ts" setup>
import Header from './components/Header.vue';
import Slider from './components/Slider.vue';
import InvitationSection from './components/InvitationSection.vue';
import CoupleSection from './components/CoupleSection.vue';
import Story from './components/Story.vue';
import Event from './components/Event.vue';
import Album from './components/Album.vue';
import Donation from './components/Donation.vue';
import Footer from './components/Footer.vue';
import PlayMusic from './components/PlayMusic.vue';
import Heart from './components/Heart.vue';

</script>
