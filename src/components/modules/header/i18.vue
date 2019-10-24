<template>
	<div class="text-lowercase i18 d-inline-block text-white">
		ru
		<!--span @click="setLang('en')" v-if="$store.state.i18n.locale === 'ru'">En</span>
		<span @click="setLang('ru')" v-else>Ru</span-->
	</div>
</template>

<script>
	export default {
		data: () => ({}),
		mounted() {
			if (window.navigator.language === 'ru' || 'ru-RU') this.setLang('ru')
		},
		computed: {
			lang: {
				get() {
					this.$i18n.set(window.localStorage.getItem('lang' || 'en'))
					return window.localStorage.getItem('lang') || 'en'
				},
				set(data) {
					this.$i18n.set(data)
					return window.localStorage.setItem('lang', data)
				}
			}
		},
		methods: {
			setLang(data) {
				this.$i18n.set(data)
				return window.localStorage.setItem('lang', data)
			}
		}
	}
</script>


<style lang="scss">
	.i18 {
		margin-right: 20px;
	}
</style>
