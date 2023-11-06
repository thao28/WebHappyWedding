<template>
  <section id="donation" class="donate-section">
    <div class="sm:tw-container">
      <div class="sm:tw-block tw-flex tw-px-3.5">
        <div class="tw-w-3/4 tw-mx-auto">
          <div class="title">
            <h2>Hộp mừng cưới</h2>
          </div>
        </div>
      </div>
      <div class="tw-flex" ref="donation">
        <div class="md:tw-w-11/12 lg:tw-w-9/12 tw-mx-auto">
          <div class="donate-modal">
            <div class="donate-body-modal">
              <div class="donate-box">
                <transition name="slide-right">
                  <div class="donate-card" v-if="showP">
                    <h3 class="tw-font-comfortaa">Mừng cưới đến chú rể</h3>
                    <p class="tw-font-comfortaa">Ngân hàng: <strong>Techcombank</strong></p>
                    <p class="tw-font-comfortaa">Tên tài khoản: <strong>Đào Văn Đà</strong></p>
                    <p class="tw-font-comfortaa">Số tài khoản: <strong>19038213820018</strong></p>
                    <p class="tw-font-comfortaa">Chi nhánh: <strong>Ha Noi</strong></p>
                  </div>
                </transition>
                <transition name="slide-left">
                  <div class="donate-card" v-if="showP">
                    <h3 class="tw-font-comfortaa">Mừng cưới đến cô dâu</h3>
                    <img
                      class="tw-mx-auto"
                      src="https://cdn.biihappy.com/ziiweb/website/647a951e7a0e7dd068022467/c22112567c0314ba40c9e414356ece51.jpeg"
                      alt=""
                    />
                    <p class="tw-font-comfortaa">Ngân hàng: <strong>Vietinbank</strong></p>
                    <p class="tw-font-comfortaa">
                      Tên tài khoản: <strong>Phạm Thị Thuỳ Linh</strong>
                    </p>
                    <p class="tw-font-comfortaa">Số tài khoản: <strong>0985506725</strong></p>
                    <p class="tw-font-comfortaa">Chi nhánh: <strong>Bac Ha Noi</strong></p>
                  </div>
                </transition>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
.donate-section {
  background-color: #f2eded;
  padding: 120px 0;
  .title {
    position: relative;
    text-align: center;
    margin-bottom: 52px;
    padding-top: 70px;
    &::after {
      content: '';
      background: url('https://linhda0611.iwedding.info/templates/template15/images/sec-title-flower.png')
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
  }
  .donate-modal {
    margin: auto;
    padding: 0;
    width: 100%;
    max-width: 850px;
    .donate-body-modal {
      padding: 0 15px;
      .donate-box {
        display: flex;
        flex-wrap: wrap;
        justify-content: space-evenly;
        .donate-card {
          width: calc(50% - 40px);
          margin: 10px;
          padding: 20px;
          border: 3px solid #c89d9c;
          border-radius: 10px;
          text-align: center;
          background-color: #fff;
          margin-top: 0;
          &:hover {
            box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2);
          }
          @media only screen and (max-width: 699px) {
            width: 100%;
            margin: 20px 5px;
          }
          h3 {
            padding: 0;
            margin: 0;
            margin-bottom: 20px;
            font-weight: bold;
            font-size: 18px;
            line-height: 30px;
          }
          p {
            margin: 10px 0;
            font-size: 15px;
          }
          img {
            max-width: 150px;
          }
          strong {
            color: #444;
          }
        }
      }
    }
  }
}
.invitation-section {
  background: url('https://linhda0611.iwedding.info/templates/template15/images/bg.png');
  padding: 120px 0;
  overflow: hidden;
  .invitation-box {
    background: #fff;
    height: 583px;
    max-width: 580px;
    padding: 120px 70px;
    box-shadow: 0px 3px 24px 0px rgba(0, 0, 0, 0.06);
    text-align: center;
    margin: 0 auto;
    position: relative;
    z-index: 1;
    @media (max-width: 991px) {
      max-width: 500px;
      margin: 25px auto;
      height: auto;
    }
    &::after {
      content: '';
      width: calc(100% - 100px);
      height: calc(100% - 100px);
      position: absolute;
      left: 50px;
      top: 50px;
      border: 5px solid rgb(129 103 103 / 40%);
    }

    .inner {
      h2 {
        font-family: 'Great Vibes';
        font-size: 2.6rem;
        margin-bottom: 30px;
      }
      span {
        font-size: 1rem;
        font-weight: 300;
        color: #797979;
      }
      h3 {
        font-size: 1.4rem;
        font-weight: 600;
        margin: 0.83em 0 1em;
      }
      p {
        font-size: 1.1rem;
        margin-bottom: 34px;
        @media (max-width: 991px) {
          font-size: 13px;
        }
      }
      a {
        background-color: #c89d9c;
        color: #fff;
        padding: 15px 50px 15px 25px;
        font-size: 16px;
        line-height: 16px;
        font-weight: 600;
        border: 0;
        border-radius: 0;
        display: inline-block;
        position: relative;
        z-index: 1;
      }
      table {
        width: 100%;
        .calendar-month {
          text-align: center;
          font-size: 15px;
          margin-bottom: 5px;
          font-weight: 600;
          color: #203447;
          text-transform: uppercase;
        }
        th {
          text-align: center;
          padding: 8px 0;
          color: #484747;
          border-top: 1px solid #cfcfd0;
          border-bottom: 1px solid #cfcfd0;
          font-size: 14px;
          line-height: 14px;
          font-weight: normal;
        }

        tr {
          &:nth-child(2) td {
            padding-top: 20px;
            line-height: 40px;
          }
        }

        td {
          font-size: 14px;
          text-align: center;
          width: 40px;
          height: 40px;
          vertical-align: middle;
          color: #484747;
        }
      }
      .calendar {
        margin-top: -50px;
        padding-bottom: 20px;
      }

      .count-down-clock {
        display: flex;
        max-width: 700px;
        padding-top: 24px;
        border-top: 1px solid #e3e3e6;
        .box {
          text-align: center;
          float: left;
          width: 25%;
          h2 {
            font-size: 3.6rem;
            color: rgb(200, 157, 156);
            font-family: 'Great Vibes';
            margin-bottom: 0;
            line-height: 48px;
          }
          span {
            color: rgb(200, 157, 156);
          }
        }
      }
    }

    .left-vec {
      background: url('https://linhda0611.iwedding.info/templates/template15/images/invitation-left-img.png')
        center center/cover no-repeat;
      width: 220px;
      height: 414px;
      position: absolute;
      left: -150px;
      top: -100px;
    }

    .right-vec {
      background: url('https://linhda0611.iwedding.info/templates/template15/images/invitation-right-image.png')
        center center/cover no-repeat;
      width: 400px;
      height: 508px;
      position: absolute;
      right: -120px;
      bottom: -100px;
      z-index: -1;
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
//     this.topPositionEl = this.$refs.donation.getBoundingClientRect();
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
//         this.$refs.donation.getBoundingClientRect().top < window.innerHeight &&
//         this.$refs.donation.getBoundingClientRect().bottom >= 0
//       ) {
//         this.showP = true;
//       } else {
//         this.showP = false;
//       }
//     },
//   },
// };

import { ref, onMounted, onUnmounted } from 'vue';

const donation = ref<HTMLElement | null>(null);
const showP = ref<boolean>(false);

const scrolling = async () => {
  if (
    donation.value &&
    donation.value.getBoundingClientRect().top < window.innerHeight &&
    donation.value.getBoundingClientRect().bottom >= 0
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
