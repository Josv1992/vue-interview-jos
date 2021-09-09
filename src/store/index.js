import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

import getters from './getters'
import actions from './actions'
import mutations from './mutations'

const store = new Vuex.Store({
  state: {
    taskItems: [
      'Wash car', 
      'Do groceries', 
      'Finish this assignment'
    ]
  },
  actions,
  mutations,
  getters
})

export default store;
