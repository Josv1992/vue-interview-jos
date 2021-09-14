<template>
  <div class="about">
    <h1>About</h1>

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

</style>
