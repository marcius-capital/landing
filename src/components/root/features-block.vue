<template>
	<div class="background-secondary content block features-block flex-centered">

		<div class="container grid-md">
			<div class="row">
				<!--Left-->
				<div class="features-section column col-4 col-md-12 text-right text-left-sm"
						 style="justify-content: flex-end;">
					<div class="features-item tile tile-list" v-for="i in itemsLeft">
						<div class="tile-section tile-icon show-sm">
							<i class="material-icons">{{i.icon}}</i>
						</div>
						<!--Center-->
						<div class="tile-section">
							<i class="material-icons hide-sm">{{i.icon}}</i>
							<div class="h5">{{i.title}}</div>
							<div class="text-secondary">{{i.description}}</div>
						</div>
					</div>
				</div>
				<div class="column col-4 flex-centered hide-md">
					<img :src="image" alt="" style="height: 70vh">
				</div>
				<!--Right-->
				<div class="features-section column col-4 col-md-12">
					<div class="features-item tile tile-list" v-for="i in itemsRight">
						<div class="tile-section tile-icon show-sm">
							<i class="material-icons">{{i.icon}}</i>
						</div>
						<div class="tile-section">
							<i class="material-icons hide-sm">{{i.icon}}</i>
							<div class="h5">{{i.title}}</div>
							<div class="text-secondary">{{i.description}}</div>
						</div>
					</div>
				</div>
			</div>
		</div>

	</div>
</template>

<script>
	import phoneImg from '../../static/img/phone2.png'

	export default {
		data: () => ({
			itemsLeft: [
				{
					'title': 'Free forever',
					'description': 'Trading terminal, bots, etc.',
					icon: 'money_off'
				},
				{
					'title': 'Real-time data',
					'description': 'Connected directly to exchanges',
					icon: 'access_time',
				},
			],
			itemsRight: [
				{
					'title': 'Cross-platform',
					'description': 'Web and mobile applications',
					icon: 'phonelink',
				},
				{
					'title': 'Secure',
					'description': 'API keys are encrypted',
					icon: 'verified_user',
				},
			],
			image: phoneImg
		})
	}
</script>
