import { createApp } from 'vue'
import router from './routes/index'
import './style.css'
import App from './App.vue'
import i18n from './lang'

createApp(App)
  .use(router)
  .use(i18n)
  .mount('#app')
