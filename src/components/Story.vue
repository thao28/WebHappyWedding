<template>
  <section id="story" class="story-section section">
    <div class="lg:tw-container">
      <div class="sm:tw-block tw-flex tw-px-3.5">
        <div class="tw-w-3/4 tw-mx-auto">
          <div class="title">
            <h2>Chuyện Tình Yêu</h2>
            <p class="tw-text-sm tw-text-gray tw-font-comfortaa">
              “Đố ai định nghĩa được tình yêu
              <br/>
              Có khó gì đâu được yêu chiều
              <br/>
              Quan tâm, chia sẻ và giúp đỡ
              <br/>
              Hy sinh lo lắng cho người yêu”
            </p>
          </div>
        </div>
      </div>
      <div class="sm:tw-block tw-flex" ref="story">
        <div class="col">
          <div class="story-block">
            <ul>
              <li>
                <transition name="slide-right">
                  <div class="detail" v-if="showP">
                    <h3 class="tw-font-comfortaa text-family tw-text-[30px]">Lời tỏ tình dễ thương</h3>
                    <p class="tw-font-comfortaa text-family">
                      Một mình giữa phố thị nấp tập. Mỗi chiều cuối tuần thường chạy xe vòng quanh
                      qua những con phố, len lỏi trong từng dòng người tấp nập. Hay thậm chí là ghé
                      vào một quán cà phê ven đường để ngồi đó và cảm nhận về cuộc sống của riêng
                      mình. Đôi khi lạc lõng và hơi cô đơn. Nhưng rồi một ngày đẹp trời, người con
                      trai ấy xuất hiện, nắm tay rồi thủ thỉ vào tai: “Hy vọng sau này anh được làm
                      những điều ấy cùng em”.
                    </p>
                  </div>
                </transition>
                <transition name="slide-left">
                  <div class="img-holder" v-if="showP">
                    <a-image
                      :src="image1"
                      alt="image1"
                    />
                  </div>
                </transition>
              </li>
              <li>
                <transition name="slide-right">
                  <div class="img-holder" v-if="showP">
                    <a-image
                     :src="image2"
                      alt="image2"
                    />
                  </div>
                </transition>
                <transition name="slide-left">
                  <div class="detail" v-if="showP">
                    <h3 class="tw-font-comfortaa text-family !tw-text-[30px]">Phút Giây Cầu Hôn</h3>
                    <p class="tw-font-comfortaa text-family" >
                     2 năm bên nhau không phải là quãng thời gian quá dài, nhưng đủ cho chúng ta nhận ra được rất nhiều điều. Yêu nhau, vun vén hạnh phúc và cùng nỗ lực vượt qua những khó khăn trong cuộc sống. Chúng ta từ 2 con người xa lạ mà bước vào cuộc đời nhau. Và giờ đây chúng ta tiếp tục cùng nhau sang trang mới. Giây phút anh ngỏ lời “Làm vợ anh nhé!”, em đã nguyện ý đời này, đi đâu cũng được, miễn là cùng anh.
                    </p>
                  </div>
                </transition>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped lang="scss">
.story-section {
  padding: 60px 0;
  @media screen and (max-width: 991px) {
    padding: 50px 0;
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
    }
  }

  .story-block {
    padding: 70px;
    border-radius: 4px;
    @media only screen and (max-width: 600px) {
      padding: 50px 25px;
    }
    @media only screen and (min-width: 800px) {
      box-shadow: 0px 4px 13.65px 7.35px rgba(178, 201, 211, 0.16);
    }

    ul {
      position: relative;
      @media only screen and (min-width: 601px) {
        &::before {
          content: '';
          background: #c89d9c;
          width: 3px;
          height: 100%;
          position: absolute;
          left: calc(50% - 1.5px);
          top: 0;
        }
        &::after {
          content: '';
          background: #c89d9c;
          width: 20px;
          height: 20px;
          position: absolute;
          left: calc(50% - 10px);
          top: 0;
          border-radius: 50%;
        }
      }
      li {
        display: flex;
        @media only screen and (max-width: 600px) {
          display: block;
          padding-bottom: 30px;
          margin-bottom: 30px;
          border-bottom: 2px dashed #c89d9c;
        }
        &:nth-child(odd) {
          position: relative;
          padding-bottom: 60px;
          margin-bottom: 60px;
          img {
            margin-left: 60px;
            @media only screen and (max-width: 991px) {
              margin-left: 50px;
            }
            @media only screen and (max-width: 600px) {
              margin-left: 0;
            }
          }
          @media only screen and (min-width: 601px) {
            &::before {
              content: '';
              background: #fff;
              border: 3px solid #c89d9c;
              width: 20px;
              height: 20px;
              position: absolute;
              left: 50%;
              transform: translateX(-50%);
              bottom: 0;
              border-radius: 50%;
            }
            &::after {
              content: '';
              width: 110px;
              height: 1px;
              background-color: #fff;
              border-bottom: 2px dashed #c89d9c;
              position: absolute;
              left: calc(50% - 140px);
              bottom: 8px;
            }
          }
          .detail {
            padding-right: 60px;
            text-align: right;
            @media only screen and (max-width: 600px) {
              text-align: left;
              padding-right: 0;
            }
          }
        }
        &:nth-child(even) {
          .img-holder {
            img {
              float: right;
              margin-right: 60px;
              @media only screen and (max-width: 991px) {
                margin-right: 50px;
              }
              @media only screen and (max-width: 600px) {
                margin-right: 0;
                margin-bottom: 15px;
              }
            }
          }
          .detail {
            padding-left: 60px;
            text-align: left;
            @media only screen and (max-width: 600px) {
              padding-left: 0;
            }
          }
        }
        @media only screen and (min-width: 601px) {
          &::after {
            content: '';
            background: #c89d9c;
            width: 20px;
            height: 20px;
            position: absolute;
            left: calc(50% - 10px);
            bottom: 0;
            border-radius: 50%;
          }
        }
        .detail {
          @media only screen and (max-width: 600px) {
            width: 100%;
          }
          width: 50%;
          h3 {
            color: #202a41;
            font-size: 1.5rem;
            line-height: 1.8em;
            margin-bottom: 9.6px;
            @media only screen and (max-width: 600px) {
              font-size: 20px;
            }
          }
          span {
            color: #c89d9c;
            display: block;
            font-size: 16px;
            margin-bottom: 23px;
          }
          p {
            color: #444;
            line-height: 1.6em;
            font-size: 16px;
            margin-bottom: 10px;
            @media only screen and (max-width: 991px) {
              font-size: 14.6px;
              font-size: 0.88rem;
            }
          }
        }
        .img-holder {
          width: 50%;
          @media only screen and (max-width: 600px) {
            width: 100%;
          }
          img {
            width: 100%;
            @media only screen and (min-width: 992px) {
              max-width: 356px;
            }
            @media only screen and (min-width: 1200px) {
              max-width: 456px;
            }
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

.text-family {
  font-family: 'Dancing Script';
}
</style>

<script lang="ts" setup>
import { ref, onMounted, onUnmounted } from 'vue';
import image1 from "@/assets/imgaes/totinh.jpg";
import image2 from "@/assets/imgaes/chure1.jpg";
const story = ref<HTMLElement | null>(null);
const showP = ref<boolean>(false);

const scrolling = async () => {
  if (
    story.value &&
    story.value.getBoundingClientRect().top < window.innerHeight &&
    story.value.getBoundingClientRect().bottom >= 0
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
