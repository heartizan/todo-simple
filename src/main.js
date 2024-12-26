import Vue from 'vue'
import {createRouter,createMemoryHistory} from 'vue-router'
import App from './app.vue'
import '../src/assets/styles/global.scss'
import routes from '@/router/routes'

Vue.config.productionTip = false
const router = createRouter({
  history: createMemoryHistory(),
  routes,
})

// Vue.use(router)

new Vue({
  render: h => h(App),  
}).use(router).$mount('#app')
