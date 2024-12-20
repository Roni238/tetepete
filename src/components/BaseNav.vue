<template>
    <nav class="nav">

        <div class="nav__links">
            <router-link class="nav__link" :to="link.href"
                @mouseenter="this.$store.dispatch('cursorModule/cursorEnter')" 
                @mouseleave="this.$store.dispatch('cursorModule/cursorLeave')"
                v-for="link in links" :key="link.link"
            >
                <p class="nav__link-title"> {{link.title}} </p>
                
                <component class="nav__link-icon" :is="link.icon"/>
                
            </router-link> 
        </div>

        
        <theme-switcher class="nav__theme-switcher" @mouseenter="this.$store.dispatch('cursorModule/cursorEnter')" @mouseleave="this.$store.dispatch('cursorModule/cursorLeave')"/>
      
    </nav>
</template>
<script>
import ThemeSwitcher from '@/components/ThemeSwitcher.vue'

export default {
    name: 'base-nav',
    components: {
     ThemeSwitcher,
    },
    data(){
        return {
            links : [
                {
                    href:'/',
                    title: 'Главная',
                    icon: 'main-icon'
                },
                {
                    href:'/projects',
                    title: 'Проекты',
                    icon: 'projects-icon'
                },
                {
                    href:'/skills',
                    title: 'Навыки',
                    icon: 'skills-icon'
                },
                {
                    href:'/work-experience',
                    title: 'Опыт работы',
                    icon: 'work-experience-icon'
                },
            ]
        }
    }
}
</script>
<style lang="scss" scoped>
.nav{
    box-sizing: border-box;
    border-radius: 10px;
    animation: goTop 1.3s;
    padding: 15px;
    overflow: hidden;
    height: 45px;
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    
    
    @media (max-width: 700px){
        justify-content: start;
        position: absolute;
        top: auto;
        left: 0px;
        right: 0px;
    }

    &__links {
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 30px;

        @media (max-width: 700px){
            gap: 45px;
        }
        @media (max-width: 380px){
            gap: 25px;
        }
    }

    &__link {
        line-height: 15px !important;
        text-decoration: none;
        color:var(--link-color);

        &::before {
            content: "";
            position: absolute;
            bottom: -15px;
            left: 0;
            right: 0;
            height: 2px;
            background-color: var(--accent-color);
            transform: scaleX(0);
            transform-origin: center;
            transition: transform 0.3s ease;

            @media (max-width: 700px){
                display: none;
            }
        }
        &:hover{
            color : var(--accent-color);
        }
        &:hover::before {
            transform: scaleX(1);
        }
        &.router-link-exact-active {
            color: var(--accent-color);      
        }
    }

    &__link-title{
        @media (max-width: 700px){
            display: none;
        }
    }

    &__link-icon{
        height: 30px;
        width: 30px;
        fill:var(--link-color);
        display: none;

        @media (max-width: 700px) {
            display: block;
        }
    }

    &__theme-switcher{
      margin-left: auto;
      fill: var(--link-color);
      position: absolute;
      right: 15px;
      height: 30px;
      width: 30px;
    }
}

@keyframes goTop {
    0% {transform: translateY(35px);opacity: 0;}
    100% {transform: translateY(0px);opacity: 1;}
}
</style>