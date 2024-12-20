<template>
  <theme-switch-icon @click="toggleTheme"/>
</template>

<script>
import ThemeSwitchIcon from '@/assets/icons/ThemeSwitchIcon.vue'

export default {
  components:{
    ThemeSwitchIcon
  },
  data(){
    return{
      checked:true
    }
  },
  methods: {
    toggleTheme() {
      if (this.checked) {
        document.documentElement.classList.add('dark-theme');
      } else {
        document.documentElement.classList.remove('dark-theme');
      }
      this.checked = !this.checked
      this.$store.commit('setDarkThemeStatus')
    }
  },
  name: 'theme-switcher',
}
</script>
