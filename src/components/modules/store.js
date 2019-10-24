export const forms = {
	state: {
		form: {},
	},
	mutations: {
		formMutation(state, data) {
			state.form = {}
			Object.assign(state.form, data)
		},
		formUpdateMutation(state, data) {
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
