import { createApp } from 'vue'
import App from './App.vue'
import './index.css'
import { routes } from './routes'
import createDemoRouter from './router'


const app = createApp(App)

const router = createDemoRouter(app, routes)

app.use(router)

app.mount('#app')
