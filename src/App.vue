<template>
  <div id="app">
    <Menu></Menu>
    
    <div class="item-creator">
      <input type="text">
      <button>
        Add
      </button>
    </div>

    <Item v-for="item in items" :key="item">{{item}}</Item>

    <Footer></Footer>
  </div>
</template>

<script>
import Menu from './components/Menu';
import Item from './components/Item';
import Footer from './components/Footer';

export default {
  name: 'app',
  components: {
    Menu,
    Item,
    Footer
  },

  data() {
    return {
      items: [
        'Wash car', 
        'Do groceries', 
        'Finish this assignment'
      ]
    }
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
