<template>
  <div id="app" class="container">
      <Menu></Menu>
    <div class="content-wrap">
      <router-view></router-view>
    </div>

      <Footer></Footer>
  </div>
</template>

<script>
import Menu from './components/Menu';
import Footer from './components/Footer';

import { mapGetters } from "vuex";

export default {
  name: 'app',
  components: {
    Menu,
    Footer,
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
  line-height: 4rem
  position: relative
  min-height: 100vh

.container
  padding: 0

.content-wrap
  padding-top: 4rem
  padding-bottom: 4rem

</style>
