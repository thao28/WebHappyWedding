<template>
  <section id="couple" class="couple-section" ref="couple">
    <div class="tw-container">
      <div class="tw-block md:tw-flex">
        <div class="tw-w-full tw-h-full">
          <div class="title">
            <h2>Cô dâu & Chú rể</h2>
            <p>
              Tình yêu là khi hạnh phúc của nửa kia chính là mong muốn lớn nhất của bạn
            </p>
          </div>
        </div>
      </div>
      <div class="tw-block sm:tw-flex">
        <div class="tw-w-full tw-h-full ">
          <div class="couple-area ">
            <transition name="slide-right">
              <div class="couple-row tw-bg-[#f9f9f9]" v-if="showP">
                <div class="img-holder">
                  <a-image
                    class="tw-w-full tw-h-full"
                    :src="image1"
                    alt=""
                  />
                </div>
                <div class="detail slide-right">
                  <div class="inner">
                    <h2>Phạm Hiếu</h2>
                    <p>
                      Chàng trai Song Tử là những người đáng tin cậy và chân thành trong tình yêu😍. Song Tử cũng khá lãng mạn và tâm lý, luôn dành nhiều sự quan tâm và những điều tốt đẹp nhất cho người yêu.
                    </p>
                  </div>
                </div>
              </div>
            </transition>
            <transition name="slide-left">
              <div class="couple-row tw-bg-[#f9f9f9]" v-if="showP">
                <div class="detail tw-h-full">
                  <div class="inner">
                    <h2>Thanh Trà</h2>
                    <p>
                      Cô gái cung Thiên Bình nhiệt tình, hoà đồng và thân thiện. Thích khám phá và đặt
                      chân đến những vùng đất mới😍 Ước mơ lớn nhất của cô dâu là được làm vợ của
                      chú rể🤣
                    </p>
                  </div>
                </div>
                <div class="img-holder slide-right tw-h-full">
                  <a-image
                    class="tw-w-full tw-h-full"
                    :src="image2"
                    alt="image2"
                  />
                </div>
              </div>
            </transition>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
.couple-section {
  padding: 60px 0;
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
    display:block;
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
            object-fit: cover;
          }
        }
      }
      .detail {
        width: 50%;
        height:100%;
        background-color: #f9f9f9;
        @media only screen and (max-width: 991px) {
          width: 100%;
          height: 100%;
          &:last-child {
            margin-bottom: 60px;
          }
        }
        .inner {
          height:100%;
          padding: 50px;
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
  padding: 60px 0;
  overflow: hidden;
  .invitation-box {
    background: #fff;
    height: 583px;
    max-width: 580px;
    padding: 60px 35px;
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
import image1 from "@/assets/images/3-min.jpg";
import image2 from "@/assets/images/4-min.jpg";
const couple = ref<HTMLElement | null>(null);
const showP = ref<boolean>(false);

const scrolling = async () => {
  if (
    couple.value &&
    couple.value.getBoundingClientRect().top < window.innerHeight &&
    couple.value.getBoundingClientRect().bottom >= 0
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
