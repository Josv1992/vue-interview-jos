import Vue from 'vue'

export default {
  resetOld(state, newState) {
    state.taskItems = newState.taskItems;
  },

  addItem(state, item) {
    if (item.val !== "") {
      state.taskItems.push({val: item.val, "key": item.key});
      localStorage.setItem('taskItems', JSON.stringify(state.taskItems));
    }
  },

  removeItem(state, item) {
    console.log('removing ', item.val)
    Vue.delete(state.taskItems, item.key);
  }
}
