<template>
  <div class="item row">
    <!-- <b-button class="remove col-1 finish" 
      type="button" 
      aria-label="Finish" 
      alt="Finish" 
      v-on:click="finishItem(itemInfo)">
        <span aria-hidden="true">&check;</span>
    </b-button> -->
    <div  class="col-11">
      <slot></slot>
    </div>
      <b-button class="remove col-1 close" 
        type="button" 
        aria-label="Close" 
        alt="Remove" 
        v-on:click="removeItem(itemInfo)">
          <span aria-hidden="true">&times;</span>
      </b-button>
  </div>
</template>
<script>
import { mapActions, mapGetters } from "vuex";

export default {

  props: {
      itemInfo: {
          type: Object,
          default() {
              return {
                  val: String,
                  key: Number
              }
          }
      },
  },

  data: function() {
  return {
      taskItem: {
      val: "test",
      key: 0,
      }
  }
  },
  computed: {
  ...mapGetters(["taskItems"]),
  },

  methods: {
  ...mapActions(["removeItem"]),
  }
}
</script>

<style lang="sass">
.item 
  height: 3rem
  line-height: 3rem
  border-bottom: 1px solid #f0f0f0
  margin-left: 0
  margin-right: 0

.remove 
  color: white
  font-weight: bolder
  background-color: #660011!important
  border-radius: 0
  &:hover
    color: #ccc

.finish 
  color: white
  font-weight: bolder
  background-color: #009900!important
  border-radius: 0
  padding-left: 0.5rem
  &:hover
    color: #ccc

</style>
