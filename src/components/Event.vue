<template>
  <section id="event" class="event-section section">
    <div class="top-background">
      <h2 class="tw-w-3/4 tw-mx-auto">Sự kiện cưới</h2>
      <p class="tw-w-3/4 tw-mx-auto tw-text-sm tw-text-gray tw-font-comfortaa text-family">
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
                  <strong class="tw-font-comfortaa">09:00 22/09/2024</strong>
                </p>
                <p class="tw-font-comfortaa">
                    Bình Tân, Bắc Bình, Bình Thuận 
                </p>
                <div class="calendar-button tw-font-comfortaa">Thêm vào lịch</div>
                <a target="_blank" href="https://www.google.com/maps?q=Rio+Wedding+Restaurant,+B%C3%ACnh+Nh%C6%A1n,+B%C3%ACnh+T%C3%A2n,+B%E1%BA%AFc+B%C3%ACnh,+B%C3%ACnh+Thu%E1%BA%ADn,+Vi%E1%BB%87t+Nam&ftid=0x3176bcf0b7b727ed:0xcc5487f3abc4b3a4&entry=gps&lucs=,94226966,94224825,94227247,94227248,47071704,47069508,94218641,94203019,47084304,94208458,94208447&g_ep=CAISDTYuMTI5LjEuODA5MjAYACDXggMqYyw5NDIyNjk2Niw5NDIyNDgyNSw5NDIyNzI0Nyw5NDIyNzI0OCw0NzA3MTcwNCw0NzA2OTUwOCw5NDIxODY0MSw5NDIwMzAxOSw0NzA4NDMwNCw5NDIwODQ1OCw5NDIwODQ0N0ICSlA%3D&g_st=ifm" class="see-location-button tw-font-comfortaa">Xem bản đồ</a>
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
                  <strong class="tw-font-comfortaa">11:00 22/09/2024</strong>
                </p>
                <p class="tw-font-comfortaa">
                  Nhà hàng Rio, Bình Tân, Bắc Bình, Bình Thuận 
                </p>
                <div class="calendar-button tw-font-comfortaa">Thêm vào lịch</div>
                <a target="_blank" href="https://www.google.com/maps?q=Rio+Wedding+Restaurant,+B%C3%ACnh+Nh%C6%A1n,+B%C3%ACnh+T%C3%A2n,+B%E1%BA%AFc+B%C3%ACnh,+B%C3%ACnh+Thu%E1%BA%ADn,+Vi%E1%BB%87t+Nam&ftid=0x3176bcf0b7b727ed:0xcc5487f3abc4b3a4&entry=gps&lucs=,94226966,94224825,94227247,94227248,47071704,47069508,94218641,94203019,47084304,94208458,94208447&g_ep=CAISDTYuMTI5LjEuODA5MjAYACDXggMqYyw5NDIyNjk2Niw5NDIyNDgyNSw5NDIyNzI0Nyw5NDIyNzI0OCw0NzA3MTcwNCw0NzA2OTUwOCw5NDIxODY0MSw5NDIwMzAxOSw0NzA4NDMwNCw5NDIwODQ1OCw5NDIwODQ0N0ICSlA%3D&g_st=ifm" class="see-location-button tw-font-comfortaa">Xem bản đồ</a>
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
                  <strong class="tw-font-comfortaa">09:00 22/09/2024</strong>
                </p>
                <p class="tw-font-comfortaa">
                  Bình Tân, Bắc Bình, Bình Thuận 
                </p>
                <div class="calendar-button tw-font-comfortaa">Thêm vào lịch</div>
                <a target="_blank" href="https://www.google.com/maps?q=Rio+Wedding+Restaurant,+B%C3%ACnh+Nh%C6%A1n,+B%C3%ACnh+T%C3%A2n,+B%E1%BA%AFc+B%C3%ACnh,+B%C3%ACnh+Thu%E1%BA%ADn,+Vi%E1%BB%87t+Nam&ftid=0x3176bcf0b7b727ed:0xcc5487f3abc4b3a4&entry=gps&lucs=,94226966,94224825,94227247,94227248,47071704,47069508,94218641,94203019,47084304,94208458,94208447&g_ep=CAISDTYuMTI5LjEuODA5MjAYACDXggMqYyw5NDIyNjk2Niw5NDIyNDgyNSw5NDIyNzI0Nyw5NDIyNzI0OCw0NzA3MTcwNCw0NzA2OTUwOCw5NDIxODY0MSw5NDIwMzAxOSw0NzA4NDMwNCw5NDIwODQ1OCw5NDIwODQ0N0ICSlA%3D&g_st=ifm" class="see-location-button tw-font-comfortaa">Xem bản đồ</a>
              </div>
              <div class="grid">
                <h3 class="tw-font-comfortaa">Tiệc cưới nhà nam</h3>
                <div class="img-wrap">
                  <a-image
                    src="https://cdn.biihappy.com/ziiweb/default/website/21b07b7d583692f49091b87facbf2c92.png"
                    alt=""
                  />
                </div>
                <p>
                  <strong class="tw-font-comfortaa">11:00 22/09/2024</strong>
                </p>
                <p class="tw-font-comfortaa">
                  Nhà hàng Rio, Bình Tân, Bắc Bình, Bình Thuận 
                </p>
                <div class="calendar-button tw-font-comfortaa">Thêm vào lịch</div>
                <a target="_blank" href="https://www.google.com/maps?q=Rio+Wedding+Restaurant,+B%C3%ACnh+Nh%C6%A1n,+B%C3%ACnh+T%C3%A2n,+B%E1%BA%AFc+B%C3%ACnh,+B%C3%ACnh+Thu%E1%BA%ADn,+Vi%E1%BB%87t+Nam&ftid=0x3176bcf0b7b727ed:0xcc5487f3abc4b3a4&entry=gps&lucs=,94226966,94224825,94227247,94227248,47071704,47069508,94218641,94203019,47084304,94208458,94208447&g_ep=CAISDTYuMTI5LjEuODA5MjAYACDXggMqYyw5NDIyNjk2Niw5NDIyNDgyNSw5NDIyNzI0Nyw5NDIyNzI0OCw0NzA3MTcwNCw0NzA2OTUwOCw5NDIxODY0MSw5NDIwMzAxOSw0NzA4NDMwNCw5NDIwODQ1OCw5NDIwODQ0N0ICSlA%3D&g_st=ifm" class="see-location-button tw-font-comfortaa">Xem bản đồ</a>
              </div>
            </div>
          </transition>
        </div>
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
.text-family {
  font-family: 'Dancing Script';
}
.event-section {
  position: relative;
  text-align: center;
  background-color: #f2eded;
  padding-bottom: 60px;
  .container {
    max-width: 970px;
  }
  .top-background {
    background: url('../assets/imgaes/slider1.jpg')
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
