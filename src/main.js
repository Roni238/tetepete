import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import '@/css/_variables.css';
import '@/css/main.css';
import icons from '@/assets/icons' 

const app = createApp(App).use(store).use(router)
app.mount('#app')

icons.forEach( icon => app.component(icon.name, icon) )




