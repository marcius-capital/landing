import Vue from 'vue'
import VueRouter from 'vue-router'

/* Routes */
import root from './components/root/router'


Vue.use(VueRouter)

const router = new VueRouter({
	routes: [...root],
	mode: 'history',
})

/* Validate user in each routes */

const getAuth = () => !!window.localStorage.getItem('id')

// When user router, scroll to the top of the document
function scrollToTop() {
	document.body.scrollTop = 0; // For Safari
	document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}

router.beforeEach((to, from, next) => {
	(to.meta.index && !getAuth()) ? next({name: 'auth'}) : next()

	/*
	store.commit('setAuthData', {
		id: window.localStorage.getItem('id'),
		access: 0,
	})
	*/

//	document.title = (to.meta.name === 'root') ? store.state.name : `${store.state.name} | ${to.meta.name}`

	scrollToTop()
})

export default router
