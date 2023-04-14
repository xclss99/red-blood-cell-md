import { createApp } from 'vue'
import App from './App.vue'

import pinia from './store'
import { setupNaiveUI } from './plugins'

import './assets/styles/main.css'
import 'splitpanes/dist/splitpanes.css'

const setupApp = async () => {
  const app = createApp(App)

  // tree shaking NaiveUI
  setupNaiveUI(app)

  app.use(pinia)

  app.mount('#app')

  console.log('tauri-vite-app running at port 1420')
}

setupApp()
