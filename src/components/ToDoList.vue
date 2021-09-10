<template>
  <div>
    <ItemCreator></ItemCreator>
      <div class="item-list list-group">
        <Item v-for="item in taskItems" :key="item.key" :itemInfo="item">{{item.val}}</Item>
      </div>
  </div>
</template>

<script>
import Item from './Item';
import ItemCreator from './ItemCreator';

import { mapGetters } from "vuex";

export default {
  name: 'app',
  components: {
    Item,
    ItemCreator
  },

  data() {
    return {
      taskItem: {
        val: "",
        key: 0
      }
    }
  },

  computed: {
    ...mapGetters(["taskItems"]),
  },

}
</script>

<style lang="sass">
.item-list
  margin-top: 1rem

.item
	&:nth-child(even) 
		background-color: #e0e0e0 


@media (min-width: 1024px)
  .item-list
    max-width: 700px
    margin: 0 auto
    margin-top: 5rem
    border: 1px solid black

</style>
