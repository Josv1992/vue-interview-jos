<template>
  <div class="item-creator">
    <input 
      type="text"
      id="taskItem"
      class="task-input-field"
      v-model.trim="taskItem.val"
      v-on:keypress.enter="addItem(taskItem)"
      >
    <b-button 
      class="add-button" 
      v-on:click="addItem(taskItem)" 
      v-bind:disabled="taskItem.val === ''"
      variant="primary"
      >
      Add
    </b-button>
  </div>
</template>

<script>
import { mapActions } from "vuex";

export default {
  name: 'ItemCreator',

  data() {
    return {
      taskItem: {
        val: "",
        key: 0,
      }
    }
  },
  methods: {
    ...mapActions(["addItem"]),
  }
}
</script>

<style lang="sass">
.item-creator
  height: 4rem
  line-height: 4rem

.task-input-field
  &:hover 
    box-shadow: 0px 4px 5px 2px rgba(13, 110, 255, 0.733) 
    -webkit-box-shadow: 0px 4px 5px 2px rgba(13, 110, 255, 0.733) 
    -moz-box-shadow: 0px 4px 5px 2px rgba(13, 110, 255, 0.733) 

.task-input-field
  max-height: 2rem

.add-button
  margin-left: 20px

</style>