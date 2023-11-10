<template>
  <section id="wish" class="contact-section section" ref="contact">
    <div class="lg:tw-container">
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
      <a-modal
        v-model:open="open"
        title="Gửi lời chúc"
        @ok="handleOk"
        :footer="null"
        centered="true"
      >
        <a-form
          ref="formRef"
          :rules="rules"
          :model="formState"
          :label-col="labelCol"
          layout="vertical"
        >
          <a-form-item name="name" label="Tên">
            <a-input v-model:value="formState.name" />
          </a-form-item>
          <a-form-item name="email" label="Email">
            <a-input v-model:value="formState.email" />
          </a-form-item>
          <a-form-item name="message" label="Gửi lời chúc">
            <a-textarea v-model:value="formState.message" />
          </a-form-item>
          <a-form-item name="go" label="Đi Đám Cưới">
            <a-radio-group v-model:value="formState.go">
              <a-radio value="1">Có</a-radio>
              <a-radio value="2">Không</a-radio>
            </a-radio-group>
          </a-form-item>
          <a-form-item class="">
            <a-button class="send-wish tw-bg-pink" type="primary" @click="handleOk"
              >Gửi lời chúc</a-button
            >
            <a-button style="margin-left: 10px" @click="closeModal">Cancel</a-button>
          </a-form-item>
        </a-form>
      </a-modal>
      <div class="tw-block md:tw-flex">
        <div class="tw-w-full" v-if="showP">
          <div class="wish-box slide-right">
            <div class="wish-box-item" v-for="wish in wishList" :key="wish.id">
              <strong class="tw-font-comfortaa">{{ wish.name }}</strong>
              <p class="tw-font-comfortaa tw-w-full tw-text-clip tw-overflow-hidden">
                {{ wish.message }}
              </p>
            </div>
          </div>
        </div>
      </div>
      <div class="tw-mt-14 tw-w-full tw-text-center">
        <a-button
          class="send-wish tw-bg-pink tw-m-auto tw-py-6 tw-px-10 tw-items-center tw-flex tw-text-xl"
          type="primary"
          @click="showModal"
          >Gửi lời chúc</a-button
        >
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
.contact-section {
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

  .send-wish {
    &:hover {
      background-color: #b58887;
    }
  }
}
</style>

<script lang="ts" setup>
import { ref, onMounted, onUnmounted, computed, reactive, toRaw } from 'vue';
import type { Rule } from 'ant-design-vue/es/form';
import type { UnwrapRef } from 'vue';
import { useStore } from 'vuex';

const contact = ref<HTMLElement | null>(null);
const showP = ref<boolean>(false);
const store = useStore<any>();
const open = ref<boolean>(false);
const formRef = ref();

// Ant
const rules: Record<string, Rule[]> = {
  name: [{ required: true, message: 'Vui lòng điền tên', trigger: 'blur' }],
  email: [
    {
      required: true,
      message: 'Vui lòng điền email',
      trigger: 'change',
      type: 'email',
    },
  ],
  message: [
    {
      required: false,
    },
  ],
  go: [
    {
      required: true,
      message: 'Vui lòng Chọn đi hay Không',
      trigger: 'change',
    },
  ],
};

interface FormState {
  name: string;
  email: string;
  go: string;
  message: string;
}
let formState: UnwrapRef<FormState> = reactive({
  name: '',
  email: '',
  go: '',
  message: '',
});

const labelCol = { style: { width: '150px' } };

const showModal = () => {
  open.value = true;
};

const closeModal = () => {
  resetForm();
  open.value = false;
};

const handleOk = (e: MouseEvent) => {
  formRef.value
    .validate()
    .then(() => {
      open.value = false;
      store.dispatch('wishList/postWishItem', formState);
      resetForm();
      console.log('values', formState, toRaw(formState));
    })
    .catch((error) => {
      console.log('error', error);
    });
};

const resetForm = () => {
  formRef.value.resetFields();
};

const getAllWishItems = () => store.dispatch('wishList/getAllWishItems');
getAllWishItems();
const wishList = computed(() => store.getters['wishList/wishList']);

const scrolling = async () => {
  if (
    contact.value &&
    contact.value.getBoundingClientRect().top < window.innerHeight &&
    contact.value.getBoundingClientRect().bottom >= 0
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
