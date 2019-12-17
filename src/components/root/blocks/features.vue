<template>
	<div class="features-block flex-centered h50">

		<div class="container grid-xl">
			<div class="row">
				<div class="column col-4 col-md-12" v-for="(i,index) in schema" :key="index">

					<div class="square square50">
						<div class="square-item flex-centered">
							<div class="text-center">
								<div class="h4 text-semibold">{{i.title}}</div>
								<div class="h6 text-secondary text-semibold">{{i.description}}</div>
							</div>
						</div>
					</div>

				</div>
			</div>

		</div>


	</div>
</template>

<script>

	export default {
		data: () => ({
			schema: [
				{
					title: 'Free forever',
					description: 'Trading terminal, bots, etc.',
					icon: 'money_off'
				},
				{
					title: 'Cross-platform',
					description: 'Web and mobile applications',
					icon: 'phonelink',
				},
				/*
				{
					title: 'Real-time data',
					description: 'Connected directly to exchanges',
					icon: 'access_time',
				},
				 */
				{
					title: 'Secure',
					description: 'API keys are encrypted',
					icon: 'verified_user',
				},

			],
		})
	}
</script>
