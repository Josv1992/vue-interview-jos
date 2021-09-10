<template>
  <div class="item row">
    <div  class="col-9">
      <slot></slot>
    </div>
      <b-button class="remove col-3 close" 
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
  padding: 0.5rem 2rem
  line-height: 2rem
  border-bottom: 1px solid #f0f0f0

.remove 
  color: crimson
  font-weight: bolder

</style>
