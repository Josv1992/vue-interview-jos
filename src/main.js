import Vue from 'vue'
import VueRouter from 'vue-router'
import store from './store/index.js';
import App from './App.vue'
import ToDoList from './components/ToDoList';
import Contact from './components/Contact';
import Legal from './components/Legal';
import About from './components/About';


Vue.use(VueRouter)

const routes = [
  { path: '/', component: ToDoList },
  { path: '/contact', component: Contact },
  { path: '/legal', component: Legal },
  { path: '/about', component: About },
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
