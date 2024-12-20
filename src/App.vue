<template>
  <div class="app">

  
    <image-opened/>
    <custom-cursor/>
    <!-- <canvas-bg/> -->
    
    <div class="app__wrapper">
      <router-view/>
      
      <base-nav class="app__nav block"/>
    </div>
  </div>
</template>
<script>
import CustomCursor from '@/components/CustomCursor.vue'
import CanvasBg from '@/components/CanvasBg.vue'

import ImageOpened from '@/components/ImageOpened.vue'
import BaseNav from '@/components/BaseNav.vue'

export default{
components: {
  CustomCursor,
  CanvasBg,
  ImageOpened,
  BaseNav,
},
mounted(){
  // this.notifyServer();
},
methods: {
  async notifyServer() {
    await fetch(`https://light-food.ru/api/visitin?site=Резюме&width=${screen.width}`, {
      method: 'GET',
      mode: 'no-cors',
    })
  }
}
}
</script>
<style lang="scss" scoped>

.app {
  height: 100vh;

  &__wrapper{
    max-width: 1320px;
    position: relative;
    margin: auto;
    height: 100%;
    overflow: scroll;
    padding: 20px;
    display: flex;
    flex-direction: column;
    box-sizing: border-box;
    gap: 20px;
    

    @media (max-width: 1400px){
      height: calc(100% - 65px);
    }
    @media (max-width: 700px){
      padding: 20px;
    }
  }
  
  

  &__nav{
      display: flex;
      position: sticky;
      bottom: 0;
      left: 0;
      right: 0;

      @media (max-width: 700px){
        display: flex;
        position: fixed;
        bottom: 10px;
        left: 10px;
        right: 10px;
      }
  }
}
</style>
