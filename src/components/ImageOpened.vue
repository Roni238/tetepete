<template>
    <div class="image-opened" v-if="getNameCurrentImage.length">
      <div class="image-opened__close" 
        @click="this.$store.commit('setNameCurrentImage', '')"
        @mouseenter="this.$store.dispatch('cursorModule/cursorEnter')" @mouseleave="this.$store.dispatch('cursorModule/cursorLeave')"
      >
        ×
      </div>

      <image-slider :images="getNameCurrentImage" />
    </div>
  </template>
  
  
<script>
import {mapGetters} from 'vuex'
import ImageSlider from '@/components/ImageSlider.vue'

export default{
    computed:{
        ...mapGetters({
            getNameCurrentImage:'getNameCurrentImage',
        })
    },
    components: {
      ImageSlider
        
    },
    name:'image-opened'
}
</script>

<style lang="scss" scoped>
  .image-opened {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.677);
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 1000;
    padding: 100px 200px;
    box-sizing: border-box;
    backdrop-filter: blur(3px);

    @media (max-width: 700px){
      padding: 100px 20px;
    }

    &__close{
      position: fixed;
      top: 20px;
      right: 20px;
      font-size: 50px;
      color: var(--btn-color);
    }
  }
  </style>