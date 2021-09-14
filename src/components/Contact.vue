<template>
  <div class="contact">
    <h1>Contact</h1>
    <span>Here's a photo of my dog, feel free to contact her:</span>
    <div v-if="!isMobile">
     <b-img class="image-contact" :src="require('@/assets/photos/Dog_Large.webp')" width="712" height="712" alt="Photo of a cute dog" ></b-img>
    </div>
    <div v-else>
      <b-img class="image-contact" :src="require('@/assets/photos/Dog_Mobile.webp')" width="400" height="400" alt="Photo of a cute dog" ></b-img>
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
