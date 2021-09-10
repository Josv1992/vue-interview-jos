import Vue from 'vue'
import Vuex from 'vuex'
import { BootstrapVue } from 'bootstrap-vue'
import VueRouter from 'vue-router'

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'


Vue.use(VueRouter)
Vue.use(BootstrapVue)
Vue.use(Vuex)

import getters from './getters'
import actions from './actions'
import mutations from './mutations'

if (localStorage.getItem('taskItems') === null) {
  localStorage.setItem('taskItems', "[]");
}

const store = new Vuex.Store({
  state: {
    taskItems: JSON.parse(localStorage.getItem('taskItems'))
  },
  actions,
  mutations,
  getters
})

export default store;
