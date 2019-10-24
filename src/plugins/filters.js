import Vue from 'vue'
import moment from 'moment'

Vue.filter('date', (data, format) => moment.unix(data / 1000).format(format))

Vue.filter('online', (data) => {
  if (data) return moment.unix(data / 1000).fromNow()
})

Vue.filter('avatar', (data) => {
  const text = String(data)
  if (text.match(/\w+/g).length > 1) {
    return text.slice(0, 1) + text.split(' ')[1].slice(0, 1)
  }
  return text.slice(0, 1)
})

Vue.filter('workStatus', (data) => {
	if (data === 0) return 'Pending'
	else if (data === 1) return 'In Work'
	else if (data === 2) return 'Completed'
})


/* Pay */
Vue.filter('currency', function(value) {
	return '$' + value.toFixed(2);
});

/* Tag: <div v-html="$options.filters.tag(tags)"></div> */
Vue.filter('tag', function(value, _class) {
	let arr = value.split(",").map(data => `<span class="${_class}">${data}</span>`)
	return arr.join('')
});


// Регистрируем глобальную пользовательскую директиву `v-focus`
Vue.directive('focus', {
	// Когда привязанный элемент вставлен в DOM...
	inserted: function (el) {
		// Переключаем фокус на элемент
		el.focus()
	}
})
