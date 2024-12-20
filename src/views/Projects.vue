<template>
  <main class="projects">
    <div class="projects__content">
      <div class="projects__slider" ref="slider">
        <project-slide class="projects__slider" ref="slider" v-for="(project, index) in getProjects" :key="index" :project="project"/>
      </div>
    </div>
    
    <div class="projects__slider-buttons">
      <button class="projects__slider-button" 
        @click="changeSlide(-1)"
        @mouseenter="this.$store.dispatch('cursorModule/cursorEnter')" 
        @mouseleave="this.$store.dispatch('cursorModule/cursorLeave')" 
      > 
        ❮
      </button>

      <button class="projects__slider-button"
        @click="changeSlide(1)"
        @mouseenter="this.$store.dispatch('cursorModule/cursorEnter')" 
        @mouseleave="this.$store.dispatch('cursorModule/cursorLeave')" 
      >
        ❯
      </button>
    </div>
  </main>
</template>

<script>
import ProjectSlide from '@/components/ProjectSlide.vue';
import { mapGetters } from "vuex"

export default {
  data() {
    return {
      currentPage: 0,
    }
  },
  components:{
    ProjectSlide
  },
  computed: {
    ...mapGetters(["getProjects"])
  },
  methods: {
    changeSlide(direction) {
      this.currentPage = (this.currentPage + direction + this.getProjects.length) % this.getProjects.length
      const slider = this.$refs.slider
      console.log(slider)
      slider.style.transform = `translateX(-${this.currentPage * 1300}px)`
    }
  }
}
</script>

<style scoped lang="scss">

  .projects{
    height: 100%;

    @media(max-width: 700px){
      height: auto;
    }

    &__content{
      height: 100%;
      width: 100%;
      position: relative;
      line-height: 1.1;

      @media(max-width: 700px){
        height: calc(100% - 40px);
        flex-direction: column;
        width: auto;
      }
    }

    &__slider{
      display: flex;
      transition: transform 0.9s ease-in-out;
      width: 100%;
      height: 100%;

      @media(max-width: 700px){
        flex-direction: column;
        gap: 30px;
        transform: translateX(0px) !important;
      }
    }

    &__slider-buttons{
      width: 100%;
      top: calc(50% - 25px);
      position: absolute;
      display: flex;
      justify-content: space-between;
    }

    &__slider-button{
      height: 50px;
      width: 50px;
      font-size: 30px;
      color: var(--btn-color);
      background:none;
      border: none;

      @media(max-width: 700px){
        display: none;
      }
    }
  }
</style>
