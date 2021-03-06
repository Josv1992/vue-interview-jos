export default {
  resetOld: ({ commit }) => {
    commit('reset', {
      taskItems: []
    })
  },

  reset: ({ commit }) => {
    commit('reset')
  },

  addItem: ({ commit }, item) => {
    commit('addItem', item)
  },

  removeItem: ({ commit }, item) => {
    commit('removeItem', item)
  },
}
