<template>
	<div class="block init-block flex-centered">

		<div class="container grid-md">
			<div class="row">

				<div class="column col-6 col-md-12 flex-centered-vertical">
					<div class="width100 text-center-md">
						<div class="text-secondary text-uppercase mb">Easy, Smart, Secure</div>
						<div class="h2 mb2">Boost trading<br>profit for free</div>

						<!--Action buttons-->
						<actionButtons/>

					</div>
				</div>

				<div class="column col-6 col-md-12 flex-centered image">
					<img :src="image" alt="" style="height: 70vh">
				</div>

			</div>
		</div>
	</div>
</template>

<script>
	import phoneImg from '../../static/img/phones-group.png'

	import actionButtons from './modules/action-buttons'

	export default {
		data: () => ({
			image: phoneImg,
		}),
		components: {
			actionButtons
		}
	}

</script>
