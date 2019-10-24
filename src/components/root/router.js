export  const root = {
	path: '/',
	name: 'root',
	meta: {
		name: 'root'
	},
	component: () => import('./index.vue')
}


export default [
	root
]
