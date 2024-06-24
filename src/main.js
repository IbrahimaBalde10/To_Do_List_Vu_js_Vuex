// main.js 

import { createApp } from 'vue';
import App from './App.vue';
import store from './store'; //change the location as per your project directory (if needed)

const app = createApp(App);

app.use(store);

app.mount('#app')