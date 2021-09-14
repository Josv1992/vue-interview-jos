<template>
  <div>
    <ItemCreator></ItemCreator>
      <b-list-group class="item-list list-group">
        <Item v-for="item in taskItems" :key="item.key" :itemInfo="item">{{item.val}}</Item>
      </b-list-group>
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
  metaInfo: {
  title: 'To Do List',
    meta: [
      { vmid: 'description', name: 'description', content: 'To "Do List' }
    ]
  },

  computed: {
    ...mapGetters(["taskItems"]),
  },
}
</script>

<style lang="sass">
.item-list
  border: 1px solid #ccc
  margin-top: 2rem

.item
	&:nth-child(even) 
		background-color: #e0e0e0 


@media (min-width: 1024px)
  .item-list
    max-width: 700px
    margin: 0 auto
    margin-top: 2rem
    border: 1px solid black

</style>
