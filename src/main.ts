import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store/index'

import AppContainer from './components/common/AppContainer.vue'

const app = createApp(App)
app.component('app-container', AppContainer)

app.use(router)
app.use(store)

app.mount('#app')
