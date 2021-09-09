<template>
  <div class="item">
    <slot></slot>
    <button class="remove" v-on:click="removeItem(itemInfo)">
        Remove
    </button>
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
    remove2() {
        console.log(this.itemInfo);

    },
    remove() {
        this.$destroy();
        this.$el.parentNode.removeChild(this.$el);
    },
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
    background-color: crimson
    height: 25px
    line-height: 12px

</style>
