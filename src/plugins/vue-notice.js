import Noty from 'noty'

const options = {
	timeout: 5000,
}

export default {
	install: (Vue, opts) => {
		Vue.prototype.$notice = function (data) {
			return new Noty(Object.assign(options, opts, data)).show()
		}
	}
}
