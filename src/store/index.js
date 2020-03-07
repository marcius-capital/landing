import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
	state: {
		name: 'Marcius Capital',
		email: 'contact@marcius.co',
	},
})

export default store
