import { createApp } from 'vue'

import App from './App.vue'

import router from './router/router.js'
import usestore from './store/index'

createApp(App).
use(router).
use(usestore).
mount('#app')
