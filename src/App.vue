<template>
  <div id="app" >
    <script v-html="jsonld" type="application/ld+json"></script>
      <Menu></Menu>
    <main class="content-wrap">
      <router-view></router-view>
    </main>

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
  // watch: {
  //   $route(to, _from) {
  //     document.title = to.meta.title || "ToDoList";
  //   },
  // },

  data() {
    const jsonld = {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      "itemListElement": [{
        "@type": "ListItem",
        "position": 1,
        "name": "Placeholder",
        "item": "https://example.com/placeholder"
      }, {
        "@type": "ListItem",
        "position": 2,
        "name": "The Lord of the Rings",
        "item": "https://example.com/placeholder/2"
      }]
    }
    return {
      jsonld,
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
  position: relative
  min-height: 100vh

.content-wrap
  padding-top: 2rem


</style>
