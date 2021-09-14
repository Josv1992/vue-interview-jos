<template>
  <div class="about container">
    <h1>About</h1>
    <p>This is the about page, with info about this website, to find out more about me personally, check out my about page:</p>

    <router-link to="/aboutme" class="link">About Me</router-link>

  </div>
</template>

<script>
export default {
  name: 'About',
  metaInfo: {
    title: 'About',
    meta: [
      { vmid: 'description', name: 'description', content: 'About page' }
    ]
  },
}

</script>

<style lang="sass">
.link
  color: blue

.about
  max-width: 500px

</style>
