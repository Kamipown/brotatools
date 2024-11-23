import '@/assets/styles/index.scss'

import { createApp } from 'vue'

import App from '@/App.vue'
import router from '@/router'
import store from '@/store'

import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'

library.add(fas)

const app = createApp(App).use(router).use(store)

app.mount('#root')
