import Vue from 'vue'
import Vuex from 'vuex'

/* Modules */
import { forms } from '../components/modules/store'

Vue.use(Vuex)

const store = new Vuex.Store({
	state: {
		name: 'Marcius Capital',
		mail: 'contact@marcius.co',
		version: '0.0.1',
		url: 'app.marcius.capital'
	},
	modules: {
		forms,
	},
})

export default store
