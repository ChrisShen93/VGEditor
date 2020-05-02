import { createApp } from 'vue';
import { globalState } from './store';
import App from './app.vue';

const app = createApp(App);
app.provide('state', globalState);

app.mount('#app');
