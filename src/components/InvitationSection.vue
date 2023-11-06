<script lang="ts" setup>
import { ref, onMounted, onUnmounted } from 'vue';

const invitation = ref<HTMLElement | null>(null);
const showP = ref<boolean>(false);
let clock: any = null;
let days = ref<any>('');
let hours = ref<any>('');
let minutes = ref<any>('');
let seconds = ref<any>('');
let weddingDay = ref<any>('');

const scrolling = async () => {
  if (
    invitation.value &&
    invitation.value.getBoundingClientRect().top < window.innerHeight &&
    invitation.value.getBoundingClientRect().bottom >= 0
  ) {
    showP.value = true;
  } else {
    showP.value = false;
  }
};

const formatDayOfWeek = (date: string) => {
  if (date) {
    const options: any = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    const formattedDate = new Date(date).toLocaleDateString('en-US', options);
    return formattedDate;
  } else {
    return '';
  }
};
clock = setInterval(() => {
  weddingDay = new Date('December 1, 2023 11:13:00');
  const distance = weddingDay - Date.now();

  if (distance < 0) {
    clearInterval(clock);
    days = '';
    hours = '';
    minutes = '';
    seconds.value = '';
  } else {
    days = Math.floor(distance / (1000 * 60 * 60 * 24));
    hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    seconds.value = Math.floor((distance % (1000 * 60)) / 1000);
  }
}, 1000);

onMounted(() => {
  window.addEventListener('scroll', scrolling);
});

onUnmounted(() => {
  window.removeEventListener('scroll', scrolling);
});
</script>

<template>
  <section
    id="invitation-section"
    class="invitation-section"
    @scroll="scrolling()"
    ref="invitation"
  >
    <div class="tw-container">
      <div class="tw-block lg:tw-flex">
        <div class="tw-container tw-text-center">
          <div
            class="title tw-text-center tw-mb-4 xs:tw-py-10 md:tw-py-20 md:tw-text-6xl xs:tw-text-3xl tw-text-pink tw-font-dancingScript"
            id="wedding-title"
          >
            {{ formatDayOfWeek(weddingDay) }}
          </div>
          <div class="countdown tw-flex tw-justify-evenly">
            <div
              id="days"
              class="countdown-item xs:tw-mr-4 lg:tw-mr-0 xs:tw-w-2/12 lg:tw-w-3/12 xs:tw-text-xl md:tw-text-5xl tw-text-pink tw-font-dancingScript"
            >
              {{ days }} days
            </div>
            <div
              id="hours"
              class="countdown-item xs:tw-mr-4 lg:tw-mr-0 xs:tw-w-2/12 lg:tw-w-3/12 xs:tw-text-xl md:tw-text-5xl tw-text-pink tw-font-dancingScript"
            >
              {{ hours }} hours
            </div>
            <div
              id="minutes"
              class="countdown-item xs:tw-mr-4 lg:tw-mr-0 xs:tw-w-2/12 lg:tw-w-3/12 xs:tw-text-xl md:tw-text-5xl tw-text-pink tw-font-dancingScript"
            >
              {{ minutes }} minutes
            </div>
            <div
              id="seconds"
              class="countdown-item xs:tw-mr-4 lg:tw-mr-0 xs:tw-w-2/12 lg:tw-w-3/12 xs:tw-text-xl md:tw-text-5xl tw-text-pink tw-font-dancingScript"
            >
              {{ seconds }} seconds
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
.invitation-section {
  background: url('https://linhda0611.iwedding.info/templates/template15/images/bg.png');
  padding: 40px 0 100px;
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
