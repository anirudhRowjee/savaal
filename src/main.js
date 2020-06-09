import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'

// vue-bootstrap imports
import BootstrapVue from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'


import { library } from '@fortawesome/fontawesome-svg-core'
import { faCoffee, faPaperPlane, faCheck, faArrowRight, faArrowLeft, faHeart, faBook, faPencilAlt, faTrophy, faClock } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

library.add(
  faCoffee,
  faArrowRight,
  faArrowLeft,
  faHeart,
  faBook, 
  faPencilAlt, 
  faTrophy ,
  faClock,
  faCheck,
  faPaperPlane

)

Vue.component('font-awesome-icon', FontAwesomeIcon)



Vue.use(BootstrapVue)

Vue.config.productionTip = true

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
