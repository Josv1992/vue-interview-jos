<template>
  <div id="app">
    <Menu></Menu>
    
    <div class="item-creator">
      <input 
        type="text"
        id="taskItem"
        v-model.trim="taskItem.val"
        v-on:keypress.enter="addItem(taskItem)"
        >
      <button v-on:click="addItem(taskItem)" v-bind:disabled="taskItem.val === ''">
        Add
      </button>
    </div>

    <Item v-for="(item, i) in taskItems" :key="i">{{item}}</Item>

    <Footer></Footer>
  </div>
</template>

<script>
import Menu from './components/Menu';
import Item from './components/Item';
import Footer from './components/Footer';

import { mapActions, mapGetters } from "vuex";

export default {
  name: 'app',
  components: {
    Menu,
    Item,
    Footer
  },

  data() {
    return {
      taskItem: {
        val: ""
      }
    }
  },

  computed: {
    ...mapGetters(["taskItems"]),
  },

  methods: {
    ...mapActions(["addItem"]),
  }
}
</script>

<style>
html, body {
  margin: 0;
  padding: 0;
}

* {
  box-sizing: border-box;
}

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 3rem;
}

#app .item-creator {
  height: 4rem;
  line-height: 4rem;
}

.item-creator input:hover {
          box-shadow: 0px 4px 5px 2px rgba(13, 110, 255, 0.733);
        -webkit-box-shadow: 0px 4px 5px 2px rgba(13, 110, 255, 0.733);
        -moz-box-shadow: 0px 4px 5px 2px rgba(13, 110, 255, 0.733);
}
</style>