import Vue from 'vue'
import VeeValidate from 'vee-validate'

/* Secondary imports */
import router from './router'
import store from './store/index'
import './plugins'

/* Material design icons */
import 'material-icons'

/* Custom styles */
import './static/default.scss'
import './static/fonts/HelveticaNeueCyr/stylesheet.scss'

/* Components */
import './components/modules/components'

import App from './components/layout.vue'

Vue.use(VeeValidate)

new Vue({
	el: '#app',
	render: h => h(App),
	router,
	store,
})
