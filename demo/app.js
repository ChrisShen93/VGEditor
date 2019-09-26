import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './main.vue'
import './iconfont'
import './global.styl'

Vue.use(VueRouter)

const router = new VueRouter({
  routes: [
    { path: '/flow', component: () => import('./flow') },
    { path: '/koni', component: () => import('./koni') },
    { path: '/mind', component: () => import('./mind') }
  ]
})

new Vue({
  router,
  render: h => h(App)
}).$mount('#demo')
