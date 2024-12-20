<template>
    <main class="skills-content block">
            <h1 class="skills-content__title">Мои навыки:</h1>
            
            <ul class="skills-content__list">
                <li>HTML 5,CSS 3, JS, TS</li>
                <li>ECMAScript 6+</li>
                <li>Vue3, Vue-Router, Vuex</li>
                <li>Nuxt</li>
                <li>SASS, SCSS</li>
                <li>Node.js</li>
                <li>Express js</li>
                <li>Git, GitHub, GitLab</li>
                <li>SQL, MySql, MongoDB</li>
                <li>Axios</li>
                <li>Json, XML</li>
                <li>HTTP/HTTPS</li>
                <li>Nginx/Apache2</li>
                <li>БЭМ</li>
                <li>Webpack</li>
                <li>Figma</li>
                <li>Rest API</li>
                <li>Photoshop</li>
                <li>Кроссбраузерная верстка</li>
                <li>Адаптивная и отзывчивая верстка</li>
                <li>Понимание SEO-оптимизации и META тегов</li>
                <li>Понимаю основы веб-дизайна и графики</li>
                <li>Знаком с PHP</li>
                <li>Emmet</li>
                <li>Умение отладки приложений и поиска ошибок</li>
                <li>Умение документировать код и составлять техническую документацию</li>
                <li>Знаком с Redux и React</li>
                <li>Умение искать и прользоваться npm пакетами</li>
                <li>Понимание http и https протоколов</li>
                <li>Понимание принципов производительности Web-страниц</li>
            </ul> 
    </main>
</template>
<script>
export default {
    name: 'skills-view',
}
</script>
<style lang="scss" scoped>
    
    .skills-content{
        height: 100%;
        border-radius: 15px;
        box-sizing: border-box;
        padding: 20px 20px;
        color: var(--text-color);

        &__title{
            padding-bottom: 10px;
        }

        &__list{
            list-style: none;
            overflow-y: scroll;
            height: calc( 100% - 40px);

            li{
                font-size: 16px;
                margin: 10px 15px;
            }

            &::-webkit-scrollbar {
                width: 12px; 
              }
              &::-webkit-scrollbar-track {
                background: var(--bg-second-color);  
                border-radius: 20px;
              }
              &::-webkit-scrollbar-thumb {
                background-color: var(--link-color);
                border-radius: 20px;
              }
        }
    }
</style>