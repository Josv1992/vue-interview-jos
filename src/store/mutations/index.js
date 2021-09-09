export default {
  reset(state, newState) {
    state.taskItems = newState.taskItems;
  },

  addItem(state, item) {
    state.taskItems.push(item);
  },

  removeItem(state, item) {
    state.taskItems.splice(item);
  }
}
