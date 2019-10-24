import router from "../router";

export const auth = {
	state: {
		id: null,
		access: null,
		online: true,
	},
	mutations: {
		SET_DATA(state, data) {
			state.id = data.id
			state.access = data.access
		},
		LOGIN(state, data) {
			window.localStorage.setItem('id', data.id)
			window.localStorage.setItem('token', data.token)
			router.go('/')
		},
		LOGOUT(state) {
			state.id = null
			window.localStorage.clear()
			router.push({ name: 'auth' })
		},
		ONLINE(state, data) {
			state.online = data
		},
	},
	getters: {
		auth: state => !!state.id,
	},
}

export const form = {
	state: {
		form: {},
	},
	mutations: {
		FORM(state, data) {
			state.form = {}
			Object.assign(state.form, data)
		},
		FORM_UPDATE(state, data) {
			Object.assign(state.form, data)
		},
	},
}

export const breadcrumbs = {
	state: {
		route: [],
	},
	mutations: {
		ROUTE(state, data) {
			state.route = data
		},
	},
}
