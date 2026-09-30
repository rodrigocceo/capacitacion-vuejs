import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import { createPinia } from 'pinia'

import 'bootstrap/dist/css/bootstrap.min.css'

const app = createApp(App)
const pina = createPinia()

app.use(router)
app.use(pina)

app.mount('#app')
