import { createApp } from 'vue';
import App from './App.vue';
import store from './stores';
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faVolumeXmark, faVolumeHigh } from '@fortawesome/free-solid-svg-icons'
import vClickOutside from "click-outside-vue3";
import Antd from 'ant-design-vue';


library.add(faVolumeXmark, faVolumeHigh)

import "./assets/tailwind.css";
import "./style.css";
const app = createApp(App);


app.use(store)
app.use(vClickOutside)
app.use(Antd)
    .component('font-awesome-icon', FontAwesomeIcon)
// mount app
app.mount("#app");

