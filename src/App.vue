<template>
  <div class="main">

  
    <image-opened/>
    <custom-cursor/>
    <!-- <canvas-bg/> -->
    
    <div class="main__wrapper">

      <div class="main__router-container block">
        <!-- <router-view/> -->
      </div>
      
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
    max-width: 1320px;
    position: relative;
    margin: auto;
    height: 100%;
    overflow: visible;
    padding: 20px;
    display: flex;
    flex-direction: column;
    box-sizing: border-box;
    gap: 20px;
    

    @media (max-width: 1400px){
      //width: 100%;
      //box-sizing: border-box;
      //margin: 0px;
    }
    @media (max-width: 700px){
      
      //height: 82vh;
    }
  }
  
  &__router-container{
    //margin-top: 32px;
    //height: calc( 100vh - 45px - var(--gap)*2 );
    //margin-bottom: var(--gap);
    //box-sizing: border-box;
    //color:var(--main-color);
    //padding: 20px 0px;
    
    height: 100%;
    

    @media (max-width: 700px){
      
      //height: calc( 100%);
      //padding: 20px;
      //overflow-y: scroll;
      //box-sizing: border-box;
    }
  }

  &__nav{

    @media (max-width: 700px){
      display: flex;
      position: sticky;
      bottom: 0;
      left: 0;
      right: 0;
    }
  }
}
</style>
