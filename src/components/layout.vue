<template>
	<div style="min-height: 100vh;">
		<theader />
		<!--transition :name="transitionName" mode="out-in"/-->
		<router-view></router-view>
		<tfooter />
	</div>
</template>

<script>
	import theader from './modules/header'
	import tfooter from './modules/footer.vue'

	export default {
		data: () => ({
			transitionName: 'page'
		}),
		/*
		beforeRouteUpdate(to, from, next) {
			const toDepth = to.path.split('/').length
			const fromDepth = from.path.split('/').length
			this.transitionName = toDepth < fromDepth ? 'slide-right' : 'slide-left'
			next()
		},
		*/
		components: {
			theader,
			tfooter,
		}
	}
</script>

<style lang="scss">
	.page-enter-active,
	.page-leave-active {
		transition: all 400ms;
	}

	.page-enter {
		opacity: 0;
		transform: translateX(50px)
	}

	.page-leave-to {
		opacity: 0;
		transform: translateX(-50px)
	}
</style>
