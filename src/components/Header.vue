<template>
  <header
    class="header tw-divide-y tw-divide-[#efefef] tw-fixed tw-top-0 tw-left-0 tw-w-full tw-z-10 tw-bg-white"
  >
    <div class="header-menu tw-py-4 lg:tw-hidden md:tw-block">
      <div class="tw-flex tw-flex-row">
        <div class="nav-bar-header">
          <div class="logo tw-ml-4">
            <a href="#">
              <span class="tw-text-3xl tw-text-pink">D</span>
              <span class="tw-text-3xl tw-text-pink">♥</span>
              <span class="tw-text-3xl tw-text-pink">L</span>
            </a>
          </div>
          <div class="toggle-button tw-mr-4" @click="() => toggleMobileNav(!mobileNav)">
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
          </div>
          <transition name="slide">
            <ul
              v-if="mobileNav"
              class="mobile-list-item tw-text-left tw-bg-white tw-z-10 tw-fixed tw-top-0 tw-h-screen tw-right-0"
              id="mySidenav"
              v-click-outside="() => toggleMobileNav(false)"
            >
              <!-- <div class="close-button" @click="toggleMobileNav">X</div> -->
              <li class="item tw-block">
                <a
                  href="#couple"
                  class="item-link tw-block tw-py-2.5 tw-pl-10 tw-pr-24 tw-font-comfortaa tw-text-sm hover:tw-text-pink"
                  >Cặp đôi</a
                >
              </li>
              <li class="item tw-block">
                <a
                  href="#story"
                  class="item-link tw-block tw-py-2.5 tw-pl-10 tw-pr-24 tw-font-comfortaa tw-text-sm hover:tw-text-pink"
                  >Chuyện tình yêu</a
                >
              </li>
              <li class="item tw-block">
                <a
                  href="#album"
                  class="item-link tw-block tw-py-2.5 tw-pl-10 tw-pr-24 tw-font-comfortaa tw-text-sm hover:tw-text-pink"
                  >Album cưới</a
                >
              </li>
              <li class="item tw-block">
                <a
                  href="#event"
                  class="item-link tw-block tw-py-2.5 tw-pl-10 tw-pr-24 tw-font-comfortaa tw-text-sm hover:tw-text-pink"
                  >Sự kiện</a
                >
              </li>
              <li class="item tw-block">
                <a
                  href="#wish"
                  class="item-link tw-block tw-py-2.5 tw-pl-10 tw-pr-24 tw-font-comfortaa tw-text-sm hover:tw-text-pink"
                  >Lời chúc</a
                >
              </li>
              <li class="item tw-block">
                <a
                  href="#donation"
                  class="item-link tw-block tw-py-2.5 tw-pl-10 tw-pr-24 tw-font-comfortaa tw-text-sm hover:tw-text-pink"
                  >Mừng cưới</a
                >
              </li>
            </ul>
          </transition>
        </div>
      </div>
    </div>
  </header>
</template>

<style lang="scss" scoped>
.nav-bar-header {
  display: flex;
  width: 100%;
  justify-content: space-between;
  align-items: center;
  .toggle-button {
    cursor: pointer;
    background-color: #c89d9c;
    width: 40px;
    height: 35px;
    border: 0;
    padding: 5px 10px;
    outline: 0;
    right: 15px;
    top: 12px;
    .icon-bar {
      background-color: #fff;
      display: block;
      height: 2px;
      margin-bottom: 5px;
    }
  }
  .mobile-list-item {
    border-left: 1px solid #cccccc;
    border-right: 1px solid #cccccc;
    .close-button {
      font-family: Comfortaa;
      cursor: pointer;
      position: absolute;
      top: 30%;
      left: -31px;
      background-color: #ffff;
      text-align: center;
      line-height: 30px;
      width: 30px;
      height: 30px;
    }
    .item-link {
      border-bottom: 1px solid #f2f2f2;
    }
  }
}
</style>

<script lang="ts" setup>
import { ref } from 'vue';

let mobileNav = ref<boolean>(false);

const toggleMobileNav = (value: any) => {
  mobileNav.value = value;
};
</script>
