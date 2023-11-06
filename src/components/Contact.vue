<template>
  <section id="wish" class="contact-section section" ref="contact">
    <div class="sm:tw-container">
      <div class="sm:tw-block tw-flex tw-px-3.5">
        <div class="tw-w-3/4 tw-mx-auto">
          <div class="title">
            <h2>Sổ Lưu Bút</h2>
            <p class="tw-font-comfortaa tw-text-gray">
              Cảm ơn bạn rất nhiều vì đã gửi những lời chúc mừng tốt đẹp nhất đến đám cưới của chúng
              tôi!
            </p>
          </div>
        </div>
      </div>
      <div class="tw-block md:tw-flex">
        <transition name="slide-right">
          <div
            class="lg:tw-w-1/2 lg:tw-mr-6 md:tw-mr-6 md:tw-w-7/12 sm:tw-w-full xs:tw-mb-8"
            v-if="showP"
          >
            <div class="contact-form slide-left">
              <form
                @submit.prevent="onSubmit"
                action=""
                class="tw-block md:tw-flex md:tw-w-full md:tw-flex-wrap"
              >
                <div class="sm:tw-w-full md:tw-w-6/12 md:tw-pr-4">
                  <input
                    type="text"
                    v-model="data.name"
                    placeholder="Nhập họ tên*"
                    class="tw-font-comfortaa"
                  />
                </div>
                <div class="sm:tw-w-full md:tw-w-6/12">
                  <input
                    type="text"
                    v-model="data.email"
                    placeholder="Nhập email"
                    class="tw-font-comfortaa"
                  />
                </div>
                <div class="sm:tw-w-full md:tw-w-full">
                  <textarea
                    v-model="data.message"
                    placeholder="Nhập lời chúc của bạn"
                    class="tw-font-comfortaa tw-max-h-48"
                  ></textarea>
                </div>
                <div class="sm:tw-w-full md:tw-w-full submit-button">
                  <button type="submit" class="tw-font-comfortaa">Gửi lời chúc</button>
                </div>
              </form>
            </div>
          </div>
        </transition>
        <transition name="slide-left">
          <div class="lg:tw-w-1/2 md:tw-w-5/12 sm:tw-w-full" v-if="showP">
            <div class="wish-box slide-right">
              <div class="wish-box-item" v-for="wish in wishList" :key="wish.id">
                <strong class="tw-font-comfortaa">{{ wish.name }}</strong>
                <p class="tw-font-comfortaa tw-w-full tw-text-clip tw-overflow-hidden">
                  {{ wish.message }}
                </p>
              </div>
            </div>
          </div>
        </transition>
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
.contact-section {
  background: url('https://linhda0611.iwedding.info/templates/template15/images/bg.png');
  padding: 120px 0;
  @media only screen and (max-width: 991px) {
    padding: 100px 0;
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
  .contact-form {
    padding: 65px 45px;
    height: 450px;
    background-color: #fff;
    border: 2px solid #c89d9c;
    position: relative;
    @media only screen and (max-width: 768px) {
      height: auto;
    }
    &::before {
      content: '';
      width: calc(100% - 4px);
      height: calc(100% - 4px);
      border: 2px solid #c89d9c;
      position: absolute;
      left: 2px;
      top: 2px;
    }
    input {
      background-color: #fbfbfb;
      width: 100%;
      height: 50px;
      font-size: 0.93rem;
      color: #797979;
      padding: 6px 15px;
      border: 1px solid #edf3f5;
      position: relative;
      margin-bottom: 25px;
    }
    textarea {
      background-color: #fbfbfb;
      height: 150px;
      width: 100%;
      padding-top: 15px;
      font-size: 0.93rem;
      color: #797979;
      padding: 6px 15px;
      border: 1px solid #edf3f5;
      position: relative;
      margin-bottom: 25px;
    }
    .submit-button {
      text-align: center;
      button {
        background-color: #c89d9c;
        color: #fff;
        padding: 15px 50px 15px 25px;
        font-weight: 600;
        border: 0;
        font-size: 15.5px;
        position: relative;
        &:hover {
          background-color: #b58887;
          color: #fff;
          cursor: pointer;
        }
      }
    }
  }
  .wish-box {
    overflow-y: auto;
    height: 450px;
    background-color: #fff;
    color: #333;
    border: 5px solid #c89d9c;
    &::-webkit-scrollbar {
      width: 6px;
    }
    &::-webkit-scrollbar-thumb {
      background-color: #ccc;
    }
    .wish-box-item {
      padding: 10px;
      &:nth-child(odd) {
        background-color: rgb(200 157 156 / 20%);
      }
      strong {
        font-size: 15px;
      }
      p {
        font-size: 15px;
        color: #333;
        margin: 0.5rem 0;
      }
    }
  }
}

</style>

<script lang="ts" setup>
import { ref, onMounted, onUnmounted, computed } from 'vue';
import { useStore } from 'vuex';

const contact = ref<HTMLElement | null>(null);
const showP = ref<boolean>(false);
const store = useStore<any>();

const getAllWishItems = () => store.dispatch('wishList/getAllWishItems');
getAllWishItems();
const wishList = computed(() => store.getters['wishList/wishList']);

interface Data {
  name: string;
  email: string;
  message: string;
}

let data = ref<Data>({
  name: '',
  email: '',
  message: '',
});

const scrolling = async () => {
  if (
    contact.value &&
    contact.value.getBoundingClientRect().top < window.innerHeight &&
    contact.value.getBoundingClientRect().bottom >= 0
  ) {
    showP.value = true;
  } 
};

const onSubmit = () => {
  store.dispatch('wishList/postWishItem', data.value).then(() => {
    data.value = {
      name: '',
      email: '',
      message: '',
    };
  });
};

onMounted(() => {
  window.addEventListener('scroll', scrolling);
});

onUnmounted(() => {
  window.removeEventListener('scroll', scrolling);
});

// export default {
// name: 'Contact',
// data() {
//   const showP = ref(false);
//   return {
//     showP,
//     data: {
//       name: '',
//       email: '',
//       message: '',
//     },
//   };
// },
// computed: {
//   ...mapGetters(['wishList']),
// },
// created() {
//   this.$store.dispatch('getAllWishItems');
//   this.$store.getters.getItem;
// },
// mounted() {
//   window.addEventListener('scroll', this.scrolling);
//   this.topPositionEl = this.$refs.contact.getBoundingClientRect();
// },
// updated() {
//   window.addEventListener('scroll', this.scrolling);
// },
// unmounted() {
//   window.removeEventListener('scroll', this.scrolling);
// },
// methods: {
//   scrolling() {
//     if (
//       this.$refs.contact.getBoundingClientRect().top < window.innerHeight &&
//       this.$refs.contact.getBoundingClientRect().bottom >= 0
//     ) {
//       this.showP = true;
//     } else {
//       this.showP = false;
//     }
//   },

//   // async getData() {
//   //   try {
//   //     const response = await axios.get(
//   //       'https://sheet.best/api/sheets/c0acd53c-4d9c-4477-a4b4-0f8e0047bfd7'
//   //     );
//   //     this.wishList = response.data;
//   //   } catch (error) {
//   //     console.error('Error getting data:', error);
//   //   }
//   // },

//   onSubmit() {
//     this.$store.dispatch('postWishItem', this.data).then(() => {
//       console.log(this.data);
//       this.data = {
//         message: '',
//         name: '',
//         email: '',
//       };
//     });

//     // try {
//     //   const response = await axios.post(
//     //     'https://sheet.best/api/sheets/c0acd53c-4d9c-4477-a4b4-0f8e0047bfd7',
//     //     this.data
//     //   );
//     //   if (response.status === 200) {
//     //     this.wishList.push(this.data);
//     //     this.data = {
//     //       message: '',
//     //       name: '',
//     //       email: '',
//     //     };
//     //   }
//     // } catch (e) {
//     //   console.error('Error getting data:', error);
//     // }
//   },
// },
// };
</script>
