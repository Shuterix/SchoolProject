import { createApp } from 'vue'
import App from '@/_config/App.vue'
import router from '@/_config/router'

import '@/_themes/tailwind.css'
import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'

import '@/_themes/global.css'

const app = createApp(App)

app.use(router)

app.mount('#app')
