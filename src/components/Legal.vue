<template>
  <div class="legal container">
    <h1>Legal</h1>
    <p>This is the legal info page, with containing legal info about this website.</p>

  </div>
</template>

<script>
export default {
  name: 'Legal',
  metaInfo: {
    title: 'Legal',
    meta: [
      { vmid: 'description', name: 'description', content: 'Legal Info page' }
    ]
  },
}

</script>


<style lang="sass">
.legal
  max-width: 500px

</style>
