import { createApp } from 'vue'
import App from './App.vue'

// Vuetify
import 'vuetify/styles'
import '@mdi/font/css/materialdesignicons.css'
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'
import router from '../src/router/router'  

const vuetify = createVuetify({
  components,
  directives,
})

createApp(App).use(router).use(vuetify).mount('#app')
