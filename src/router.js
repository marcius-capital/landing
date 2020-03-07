import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)

// Routes
import home from './components/home/router'

const router = new VueRouter({
	routes: [home],
	mode: 'history',
})

// When user router, scroll to the top of the document
function scrollToTop() {
	document.body.scrollTop = 0; // For Safari
	document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}

router.beforeEach((to, from, next) => {
	scrollToTop()
	next()
})

export default router
