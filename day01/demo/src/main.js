import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

import 'virtual:windi.css'

import './assets/main.css'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import 'windi.css'

const app = createApp(App)

app.use(createPinia())
app.use(router)
app.use(ElementPlus)
app.mount('#app')
