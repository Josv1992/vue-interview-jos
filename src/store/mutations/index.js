export default {
  resetOld(state, newState) {
    state.taskItems = newState.taskItems;
  },

  addItem(state, item) {
    if (item.val !== "") {
      const key = new Date().getTime();
      state.taskItems.push({val: item.val, "key": key});
      localStorage.setItem('taskItems', JSON.stringify(state.taskItems));
    }
  },

  removeItem(state, item) {
    for (let i in state.taskItems) {
      if (state.taskItems[i].key === item.key) {
        state.taskItems.splice(i, 1);
      }
    }
    localStorage.setItem('taskItems', JSON.stringify(state.taskItems));
  },
}
