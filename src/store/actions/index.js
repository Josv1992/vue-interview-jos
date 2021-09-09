export default {
  reset: ({ commit }) => {
    commit('reset', {
      taskItems: []
    })
  },

  addItem: ({ commit }, item) => {
    console.log(item),
    commit('addItem', item.val)
  },
}
