<template>
  <section id="couple" class="couple-section" ref="couple">
    <div class="tw-container">
      <div class="tw-block md:tw-flex">
        <div class="tw-w-full">
          <div class="title">
            <h2>Cô dâu & Chú rể</h2>
            <p>
              Tình yêu là điều kiện trong đó hạnh phúc của người khác là điều cần thiết cho chính
              bạn.
            </p>
          </div>
        </div>
      </div>
      <div class="tw-block sm:tw-flex">
        <div class="tw-w-full">
          <div class="couple-area">
            <div class="couple-row">
              <transition name="slide-right">
                <div class="img-holder" v-if="showP">
                  <img
                    class="tw-w-full"
                    src="https://cdn.biihappy.com/ziiweb/website/647a951e7a0e7dd068022467/129d1550e15d4353f9a428a8745e6271.jpeg"
                    alt=""
                  />
                </div>
              </transition>
              <transition name="slide-left">
                <div class="detail slide-right" v-if="showP">
                  <div class="inner">
                    <h2>Văn Đà</h2>
                    <p>
                      Chàng trai Cự Giải sâu sắc và chín chắn. Yêu gia đình và thích trẻ con🥰 Trở
                      thành cô dâu xinh đẹp nhất là ước mơ của mọi cô gái, biến người mình yêu thành
                      cô dâu hạnh phúc nhất chính là ước mơ của chú rể.
                    </p>
                  </div>
                </div>
              </transition>
            </div>
            <div class="couple-row">
              <transition name="slide-right">
                <div class="detail" v-if="showP">
                  <div class="inner">
                    <h2>Thuỳ Linh</h2>
                    <p>
                      Cô gái cung Kim Ngưu nhiệt tình, hoà đồng và thân thiện. Thích khám phá và đặt
                      chân đến những vùng đất mới😍 Ước mơ lớn nhất của cô dâu là được làm vợ của
                      chú rể🤣
                    </p>
                  </div>
                </div>
              </transition>
              <transition name="slide-left">
                <div class="img-holder slide-right" v-if="showP">
                  <img
                    class="tw-w-full"
                    src="https://cdn.biihappy.com/ziiweb/website/647a951e7a0e7dd068022467/66eed7617572e6f734c7c8f96a24ce60.jpeg"
                    alt=""
                  />
                </div>
              </transition>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
.couple-section {
  padding: 120px 0;
  @media only screen and (max-width: 768px) {
    .row {
      padding: 0;
      .col {
        padding-right: 0;
        padding-left: 0;
      }
    }
  }
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
    p {
      font-size: 1.05rem;
      font-weight: 300;
      margin-bottom: 0;
    }
  }
  .couple-area {
    .couple-row {
      display: flex;
      @media only screen and (max-width: 991px) {
        display: block;
      }
      .img-holder {
        width: 50%;
        @media only screen and (max-width: 991px) {
          width: 100%;
        }
        img {
          max-width: 100%;
          @media only screen and (min-width: 992px) {
            height: 474px;
            object-fit: cover;
          }
        }
      }
      .detail {
        width: 50%;
        background-color: #f9f9f9;
        position: relative;
        height: 474px;
        @media only screen and (max-width: 991px) {
          position: relative;
          width: 100%;
          height: auto;
          &:last-child {
            margin-bottom: 60px;
          }
        }
        .inner {
          position: absolute;
          top: 50%;
          transform: translateY(-50%);
          padding: 50px;
          @media only screen and (max-width: 991px) {
            top: auto;
            transform: none;
            position: relative;
          }
          h2 {
            font-size: 2.4rem;
            font-family: 'Dancing Script';
            margin-bottom: 23.4px;
          }
          p {
            color: #444;
            font-size: 16px;
            line-height: 1.8em;
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
import { ref, onMounted, onUnmounted } from 'vue';

const couple = ref<HTMLElement | null>(null);
const showP = ref<boolean>(false);

const scrolling = async () => {
  if (
    couple.value &&
    couple.value.getBoundingClientRect().top < window.innerHeight &&
    couple.value.getBoundingClientRect().bottom >= 0
  ) {
    showP.value = true;
  } else {
    showP.value = false;
  }
};

onMounted(() => {
  window.addEventListener('scroll', scrolling);
});

onUnmounted(() => {
  window.removeEventListener('scroll', scrolling);
});
</script>
