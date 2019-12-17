<template>
	<div class="h100 init-block flex-centered container">

		<div class="text-center">
			<h1 class="text-semibold">Boost for free.</h1>
			<div class="mb h5">Start earning more with our mobile and web application</div>
			<actionButtons/>
		</div>

	</div>
</template>

<script>
	import phoneImg from '../../../static/img/phones-group.png'

	import actionButtons from '../modules/action-buttons'

	export default {
		data: () => ({
			image: phoneImg,
		}),
		components: {
			actionButtons
		}
	}

</script>
