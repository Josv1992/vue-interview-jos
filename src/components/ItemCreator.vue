<template>
  <div class="item-creator">
    <input 
      type="text"
      id="taskItem"
      class="task-input-field"
      v-model.trim="taskItem.val"
      v-on:keypress.enter="addItem(taskItem)"
      >
    <button class="add-button" v-on:click="addItem(taskItem)" v-bind:disabled="taskItem.val === ''">
      Add
    </button>
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
  padding-top: 4rem
  height: 4rem
  line-height: 4rem

.item-creator 
  input 
  &:hover 
    box-shadow: 0px 4px 5px 2px rgba(13, 110, 255, 0.733) 
      -webkit-box-shadow: 0px 4px 5px 2px rgba(13, 110, 255, 0.733) 
      -moz-box-shadow: 0px 4px 5px 2px rgba(13, 110, 255, 0.733) 

.task-input-field

.add-button
  height: 25px
  line-height: 1rem

</style>