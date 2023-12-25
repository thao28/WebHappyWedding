import { createApp } from 'vue';
import App from './App.vue';
import store from './stores';
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faVolumeXmark, faVolumeHigh } from '@fortawesome/free-solid-svg-icons'
import vClickOutside from "click-outside-vue3";
import {Form,Modal,Input,Radio,Button,Image,Space,QRCode} from 'ant-design-vue';


library.add(faVolumeXmark, faVolumeHigh)

import "./assets/tailwind.css";
import "./style.css";
const app = createApp(App);


app.use(store)
app.use(vClickOutside)
app.use(Form)
app.use(Modal)
app.use(Input)
app.use(Radio)
app.use(Button)
app.use(Image)
app.use(Space)
app.use(QRCode);
app.component("font-awesome-icon", FontAwesomeIcon);
// mount app
app.mount("#app");

