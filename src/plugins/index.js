import Vue from 'vue'
import VueCarousel from 'vue-carousel'

Vue.use(VueCarousel)

import './filters'

//import {} from './plugins'
import VueNotice from './vue-notice'

Vue.use(VueNotice)

/* Global event Bus */
Vue.prototype.$bus = new Vue()
