<template>
  <div class="main">

  
    <image-opened/>
    <custom-cursor/>
    <canvas-bg/>
    
    <div class="main__wrapper">

      <!-- <div class="main__router-container"> -->
        <!-- <router-view/> -->
      <!-- </div> -->
      
      <base-nav class="main__nav block"/>
      
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


.main {
  //display: flex;
  //justify-content: center;
  //flex-direction: column;
  height: 100vh;
  overflow: hidden;

  &__wrapper{
    width: 1280px;
    position: relative;
    margin: auto;
    height: 100%;
    overflow: visible;
    
    

    @media (max-width: 1400px){
      width: 100%;
      box-sizing: border-box;
      margin: 0px;
    }
    @media (max-width: 700px){
      padding: 0px;
      height: 82vh;
    }
  }
  
  &__router-container{
    height: 100%;
    box-sizing: border-box;
    color:var(--main-color);
    padding: 20px 0px;

    @media (max-width: 700px){
      padding: 20px;
      overflow-y: scroll;
      box-sizing: border-box;
    }
  }

  &__nav{
    display: flex;
    position: fixed;
    bottom: 0;
    left: 0;
    right: 0;
  }
}
</style>
