import Vue from 'vue'
import VueRouter from 'vue-router'
import store from './store/index.js';
import App from './App.vue'
import VueMeta from 'vue-meta'


import { BootstrapVue } from 'bootstrap-vue'

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'


Vue.use(BootstrapVue)
import { routes } from './routes.js'


Vue.use(VueRouter)
Vue.use(VueMeta)


const router = new VueRouter({
  routes
})

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
