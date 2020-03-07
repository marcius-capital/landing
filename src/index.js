import Vue from 'vue'

import router from './router'
import store from './store/index'
import './plugins'


// Custom styles
import 'material-icons'
import '@marcius-capital/fonts'

import './static/default.scss'

// Components
import './components/modules/components'

import App from './components/layout.vue'

new Vue({
	el: '#app',
	render: h => h(App),
	router,
	store,
})
