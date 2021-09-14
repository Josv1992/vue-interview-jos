<template>
  <div class="contact">
    <h1>Contact</h1>
    <div v-if="!isMobile">
     <b-img class="image-contact" :src="require('@/assets/photos/Dog_Large.webp')" alt="Photo of a cute dog" ></b-img>
    </div>
    <div v-else>
      <b-img class="image-contact" :src="require('@/assets/photos/Dog_Mobile.webp')" alt="Photo of a cute dog" ></b-img>
    </div>
  </div>
</template>

<script>
import VueWindow from "./VueWindow";

export default { 
  computed: {
    isMobile() {
        return VueWindow.isMobile;
    }
  },

  metaInfo: {
    title: 'Contact',
    meta: [
      { vmid: 'description', name: 'description', content: 'The Contact page' }
    ]
  },
}

</script>

<style lang="sass">
.image-contact
  margin-bottom: 6rem
  max-width: 100%
  max-height: 100%


</style>
