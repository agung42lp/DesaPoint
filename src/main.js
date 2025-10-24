import './assets/app.css'
import { createApp } from 'vue'
import Home from './Pages/Home.vue'
import router from './router'

createApp(Home).use(router).mount('#app')
