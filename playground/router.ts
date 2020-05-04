import { createRouter, createWebHistory } from 'vue-router';
import Home from './views/home.vue';
import Flow from './views/flow.vue';
import Mind from './views/mind.vue';

const router = createRouter({
  history: createWebHistory(),
  strict: true,
  routes: [
    { path: '/', component: Home },
    { path: '/flow', component: Flow },
    { path: '/mind', component: Mind },
  ],
});

export default router;
