<template>
  <section id="event" class="event-section section">
    <div class="top-background">
      <h2 class="tw-w-3/4 tw-mx-auto">Sự kiện cưới</h2>
      <p class="tw-w-3/4 tw-mx-auto tw-text-sm tw-text-gray tw-font-comfortaa">
        ...tình yêu không phải là nhìn chằm chằm vào nhau, mà là nhìn chằm chằm về cùng một hướng...
      </p>
    </div>
    <div class="container tw-text-center tw-mx-auto">
      <div class="tw-flex tw-text-center">
        <div class="col col-xs-12" ref="event">
          <transition name="fade">
            <div class="event-grids" v-if="showP">
              <div class="grid">
                <h3 class="tw-font-comfortaa">Lễ vu quy</h3>
                <div class="img-wrap">
                  <a-image
                    src="https://cdn.biihappy.com/ziiweb/default/website/7744fc9739685fe61c53cd8fe2cf7e52.png"
                    alt=""
                  />
                </div>
                <p>
                  <strong class="tw-font-comfortaa">10:00 21/01/2024</strong>
                </p>
                <p class="tw-font-comfortaa">
                    Thôn Tháp, Xã Đồng Tháp, Huyện Đan Phượng, Hà nội
                </p>
                <div class="calendar-button tw-font-comfortaa">Thêm vào lịch</div>
                <a target="_blank" href="https://www.google.com/maps/search/Th%C3%B4n+th%C3%A1p,+X%C3%A3+%C4%90%C3%B2ng+th%C3%A1p,Huy%E1%BB%87n+%C4%90an+Ph%C6%B0%E1%BB%A3ng,+H%C3%A0+n%E1%BB%99i/@21.0841347,105.6325028,14z/data=!3m1!4b1!4m6!2m5!3m4!2s20.386861,+106.076422!4m2!1d106.0764216!2d20.3868609?hl=vi-VN&entry=ttu" class="see-location-button tw-font-comfortaa">Xem bản đồ</a>
              </div>
              <div class="grid">
                <h3 class="tw-font-comfortaa">Tiệc cưới nhà nữ</h3>
                <div class="img-wrap">
                  <a-image
                    src="https://cdn.biihappy.com/ziiweb/default/website/0ea5ba9f2cbe132b3fe488103eb61817.png"
                    alt=""
                  />
                </div>
                <p>
                  <strong class="tw-font-comfortaa">17:00 20/01/2024</strong>
                </p>
                <p class="tw-font-comfortaa">
                  Thôn Tháp, Xã Đồng Tháp, Huyện Đan Phượng, Hà nội
                </p>
                <div class="calendar-button tw-font-comfortaa">Thêm vào lịch</div>
                <a target="_blank" href="https://www.google.com/maps/search/Th%C3%B4n+th%C3%A1p,+X%C3%A3+%C4%90%C3%B2ng+th%C3%A1p,Huy%E1%BB%87n+%C4%90an+Ph%C6%B0%E1%BB%A3ng,+H%C3%A0+n%E1%BB%99i/@21.0841347,105.6325028,14z/data=!3m1!4b1!4m6!2m5!3m4!2s20.386861,+106.076422!4m2!1d106.0764216!2d20.3868609?hl=vi-VN&entry=ttu" class="see-location-button tw-font-comfortaa">Xem bản đồ</a>
              </div>
              <div class="grid">
                <h3 class="tw-font-comfortaa">Lễ cưới</h3>
                <div class="img-wrap">
                  <a-image
                    src="https://cdn.biihappy.com/ziiweb/default/website/eee1cb36b560f0d80f513c4e9be666db.png"
                    alt=""
                  />
                </div>
                <p>
                  <strong class="tw-font-comfortaa">12:00 21/01/2024</strong>
                </p>
                <p class="tw-font-comfortaa">
                  Thôn Tháp, xã Cộng hoà, huyện Vụ Bản, tỉnh Nam Định
                </p>
                <div class="calendar-button tw-font-comfortaa">Thêm vào lịch</div>
                <a target="_blank" href="https://www.google.com/maps/@20.3868801,106.0736223,16.64z?hl=vi-VN&entry=ttu" class="see-location-button tw-font-comfortaa">Xem bản đồ</a>
              </div>
              <div class="grid">
                <h3 class="tw-font-comfortaa tw-font-comfortaa">Tiệc cưới nhà nam</h3>
                <div class="img-wrap">
                  <a-image
                    src="https://cdn.biihappy.com/ziiweb/default/website/21b07b7d583692f49091b87facbf2c92.png"
                    alt=""
                  />
                </div>
                <p>
                  <strong class="tw-font-comfortaa">17:00 20/01/2024</strong>
                </p>
                <p class="tw-font-comfortaa">
                  Thôn Tháp, xã Cộng Hoà, huyện Vụ Bản, tỉnh Nam Định
                </p>
                <div class="calendar-button tw-font-comfortaa">Thêm vào lịch</div>
                <a target="_blank" href="https://www.google.com/maps/@20.3868801,106.0736223,16.64z?hl=vi-VN&entry=ttu" class="see-location-button tw-font-comfortaa">Xem bản đồ</a>
              </div>
            </div>
          </transition>
        </div>
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
.event-section {
  position: relative;
  text-align: center;
  background-color: #f2eded;
  padding-bottom: 60px;
  .container {
    max-width: 970px;
  }
  .top-background {
    background: url('../assets/images/DAQ_3141-min.jpg')
      center center/cover no-repeat;
    width: 100%;
    height: 60%;
    position: absolute;
    left: 0;
    top: 0;
    padding-top: 60px;
    &::before {
      content: '';
      background: rgba(0, 0, 0, 0.3);
      width: 100%;
      height: 100%;
      position: absolute;
      left: 0;
      top: 0;
      z-index: 1;
    }
    h2 {
      position: relative;
      font-family: 'Dancing Script', cursive;
      font-size: 60px;
      text-transform: capitalize;
      color: #fff;
      z-index: 2;
      margin-bottom: 10px;
      @media (max-width: 991px) {
        font-size: 40px;
        font-size: 2.66667rem;
      }
    }
    p {
      position: relative;
      color: #fff;
      font-size: 1.05rem;
      z-index: 2;
      @media (max-width: 991px) {
        font-size: 15.5px;
      }
    }
  }
  .container {
    .event-grids {
      display: flex;
      margin: 355px 0 0;
      flex-wrap: wrap;
      justify-content: center;
      position: relative;
      z-index: 1;
      .grid {
        background: url('https://linhda0611.iwedding.info/templates/template15/images/bg.png');
        width: calc(25% - 20px);
        float: left;
        padding: 20px;
        margin: 0 10px 30px;
        text-align: center;
        box-shadow: 0px 4px 13.65px 7.35px rgba(178, 201, 211, 0.18);
        @media only screen and (max-width: 991px) {
          width: calc(50% - 30px);
        }
        @media (max-width: 550px) {
          width: calc(100% - 15px);
        }
        h3 {
          text-transform: uppercase;
          font-size: 1rem;
          position: relative;
          padding-bottom: 16px;
          margin-bottom: 28px;
          &::after {
            content: '';
            width: 60px;
            left: 50%;
            bottom: 0;
            height: 2px;
            transform: translate(-50%);
            background-color: #c89d9c;
            position: absolute;
          }
        }
        p {
          font-size: 15px;
          line-height: 28px;
          margin-bottom: 10px;
        }
        .img-wrap {
          margin-bottom: 20px;
          img {
            width: 100%;
          }
        }
        .calendar-button {
          padding: 8px 20px;
          border: 1px solid #d2d2d2;
          border-radius: 60px;
          font-weight: 700;
          font-size: 16px;
          background-color: #f5f5f5;
          margin-bottom: 10px;
          &:hover {
            background-color: #fff;
            cursor: pointer;
          }
        }
        .see-location-button {
          font-size: 15px;
          font-weight: bold;
          padding: 10px 21px 8px;
          border: 2px solid #c89d9c;
          color: #818492;
          border-radius: 60px;
          display: block;
          &:hover {
            background-color: #c89d9c;
            color: #fff;
          }
        }
      }
    }
  }
}

</style>

<script lang="ts" setup>

// import { ref } from 'vue';

// export default {
//   name: 'Donation',
//   data() {
//     const showP = ref(false);
//     return {
//       showP,
//     };
//   },
//   mounted() {
//     window.addEventListener('scroll', this.scrolling);
//     this.topPositionEl = this.$refs.event.getBoundingClientRect();
//   },
//   updated() {
//     window.addEventListener('scroll', this.scrolling);
//   },
//   unmounted() {
//     window.removeEventListener('scroll', this.scrolling);
//   },
//   methods: {
//     scrolling() {
//       if (
//         this.$refs.event.getBoundingClientRect().top < window.innerHeight &&
//         this.$refs.event.getBoundingClientRect().bottom >= 0
//       ) {
//         this.showP = true;
//       } else {
//         this.showP = false;
//       }
//     },
//   },
// };

import { ref, onMounted, onUnmounted} from 'vue';

const event = ref<HTMLElement | null>(null);
const showP = ref<boolean>(false);

const scrolling = async () => {
  if (
    event.value &&
    event.value.getBoundingClientRect().top < window.innerHeight &&
    event.value.getBoundingClientRect().bottom >= 0
  ) {
    showP.value = true;
  } 
};

onMounted(() => {
  window.addEventListener('scroll', scrolling);
});

onUnmounted(() => {
  window.removeEventListener('scroll', scrolling);
});
</script>
