import Vue from 'vue'
import VueRouter from 'vue-router'
import store from './store/index.js';
import App from './App.vue'
import Contact from './components/Contact';


Vue.use(VueRouter)

const routes = [
  { path: '/', component: App },
  { path: '/contact', component: Contact }
]

const router = new VueRouter({
  routes
})

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
