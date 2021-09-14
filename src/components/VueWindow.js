import Vue from "vue";

const vueWindow = new Vue({
  data() {
    return {
      innerWidth: 0
    };
  },
  created() {
    this.innerWidth = window.innerWidth;
    window.addEventListener('resize', () => {
      this.innerWidth = window.innerWidth;
    });
  },
  computed: {
    isMobile() {
      return this.innerWidth <= 760;
    }
  }
});

export default vueWindow;