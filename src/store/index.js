import Vue from 'vue'
import Vuex from 'vuex'

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
