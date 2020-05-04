import { createApp } from 'vue';
import { globalState } from './store';
import App from './app.vue';
import router from './router';

const app = createApp(App);
app.provide('state', globalState);
app.use(router);

app.mount('#app');
