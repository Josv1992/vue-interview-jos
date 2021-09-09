<template>
  <div id="app">
    <Menu></Menu>
    <ItemCreator></ItemCreator>
    <div class="item-list">
      <Item v-for="item in taskItems" :key="item.key" :propObj="anObject">{{item.val}}</Item>
    </div>

    <Footer></Footer>
  </div>
</template>

<script>
import Menu from './components/Menu';
import Item from './components/Item';
import Footer from './components/Footer';
import ItemCreator from './components/ItemCreator';

import { mapGetters } from "vuex";

export default {
  name: 'app',
  props: {
    anObject: Object
  },
  components: {
    Menu,
    Item,
    Footer,
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


  test() {
  console.log(localStorage.getItem('taskItems'));
}

}
</script>

<style lang="sass">
html, body 
  margin: 0 
  padding: 0 
* 
  box-sizing: border-box 
#app 
  font-family: 'Avenir', Helvetica, Arial, sans-serif 
  -webkit-font-smoothing: antialiased 
  -moz-osx-font-smoothing: grayscale 
  text-align: center 
  color: #2c3e50 
  margin-top: 3rem 
  height: 4rem 
  line-height: 4rem 

.item
	&:nth-child(even) 
		background-color: #e0e0e0 


</style>