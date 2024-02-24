import './bootstrap';
import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './Layout/App.vue'
import router from './Router/index'

const app = createApp()
const pinia = createPinia()

app.component('app', App)

app.use(router).use(pinia).mount('#app')
