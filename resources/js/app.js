import './bootstrap';
import { createApp } from 'vue'
import App from './Layout/App.vue'
import router from './Router/index'

const app = createApp()

app.component('app', App)

app.use(router).mount('#app')
