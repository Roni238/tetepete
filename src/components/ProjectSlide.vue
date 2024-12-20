<template>
  <div class="slide block">

          <div class="slide__text-content">
            <h2 class="slide__slide-title">{{ project.title }}</h2>

            <template v-if="getScreenWidth > 700">
              <p>{{project.description}}</p>
            </template>
            
            <template v-else>
              <p>
                {{ isTextExpanded(index) ? project.description : truncatedText(project.description) }}
  
                <span class="slide__read-more" v-if="project.description.length > 300" @click="toggleText(index)">
                  {{ isTextExpanded(index) ? 'Скрыть' : 'Далее' }}
                </span>
              </p>
            </template>
          </div>
          
          <div class="slide__bottom-panel">
            <a class="slide__open-button"
              v-if="project.codeLink"
              :href="project.codeLink"
              target="_blank"
              @mouseenter="this.$store.dispatch('cursorModule/cursorEnter')" 
              @mouseleave="this.$store.dispatch('cursorModule/cursorLeave')" 
            >
                Смотреть код
            </a>

            <button class="slide__open-button"
              @mouseenter="this.$store.dispatch('cursorModule/cursorEnter')" 
              @mouseleave="this.$store.dispatch('cursorModule/cursorLeave')" 
              @click="this.$store.commit('setNameCurrentImage', project.images)"
            >
                Смотреть фото
            </button>

            <a class="slide__open-button"
              v-if="project.projectLink"
              :href="project.projectLink"
              target="_blank"
              @mouseenter="this.$store.dispatch('cursorModule/cursorEnter')" 
              @mouseleave="this.$store.dispatch('cursorModule/cursorLeave')" 
            >
                Смотреть работу
            </a>

          </div>
        </div>
    
</template>

<script>
import { mapGetters } from "vuex"

export default {
    name: 'projects-slider',
    data() {
        return {
            expandedTexts: {}
        }
    },
    props: {
      project: {
        type: Object,
        required: true
      }
    },
    computed: {
        ...mapGetters(["getScreenWidth"])
    },
    methods:{
        isTextExpanded(index) {
            return this.expandedTexts[index] || false
        },
        truncatedText(text, limit = 300) {
          return text.length > limit ? `${text.slice(0, limit)}...` : text;
        },
        toggleText(index) {
            this.expandedTexts[index] = !this.isTextExpanded(index)
        }
    }
}
</script>

<style lang="scss" scoped>
    .slide {
      box-sizing: border-box;
      height: 100%;
      width: 1200px;
      border-radius: 10px;
      margin-right: 100px;
      display: flex;
      flex-direction: column;
      align-items: center;
      color: var(--text-color);
      padding: 25px;
      flex-shrink: 0;
      
      @media(max-width: 700px){
        width: calc(100vw - 40px);
        height: auto;
        margin-right: 0px;
      }

        &__text-content{
            overflow-y: hidden;
            width: 100%;
            white-space: pre-line;
            box-sizing: border-box;
        }

        &__slide-title{
            margin-bottom: 20px;
        }
        
        &__read-more{
            color: var(--main-color);
            cursor: pointer;
            font-weight: bold;
            margin-left: 5px;
        }
        &__bottom-panel{
            width: 100%;
            justify-content: space-evenly;
            display: flex;
            position: absolute;
            bottom: 0px;
            padding: 20px 70px;
            box-sizing: border-box;
            z-index: 1;
            align-items: center;

            @media(max-width: 700px){
              position: static;
              padding: 20px 0px 0px 0px;
              display: block;
            }
        }
        &__open-button{
            background: none;
            font-size: 18px;
            border: solid var(--main-color) 2px;
            border-radius: 5px;
            box-shadow: var(--main-color) 0px 0px 10px 0px;
            padding: 7px 15px;
            text-decoration: none;
            color:var(--text-color);
            font-family: 'Radiotechnika', sans-serif;

            @media(max-width: 700px){
              box-sizing: border-box;
              width: 100%;
              display: block;
              margin-bottom: 10px;
              justify-content: center;
              display: flex;
              font-size: 16px;
            }
        }
    }
</style>