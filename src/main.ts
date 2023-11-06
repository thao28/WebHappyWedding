import { createApp } from 'vue';
import App from './App.vue';
import store from './stores';

import "./assets/tailwind.css";

const app = createApp(App);
  


app.use(store)
// mount app
app.mount("#app");

