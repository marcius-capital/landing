<template>
	<div class="h50 tariff-block flex-centered">
		<div class="container container-landing container-padding grid-xl">

			<div class="text-semibold h25 h3 flex-centered">Tariffs</div>

			<div class="row row-landing">

			<div class="column col-6 col-md-12" v-for="(i,index) in schema">
				<div class="square background-secondary ">
					<div class="square-item flex-centered text-center">
						<div class="content-padding">
							<div class="h3 text-semibold"> {{i.name}} </div>
							<div class="text-secondary h5"> {{i.description}} </div>
						</div>
					</div>
				</div>
			</div>


			<!--span class="text-sm label" style="margin-left: 10px">SOON</span-->
			<!--span class="tooltip c-hand" data-tooltip="Payouts after subscribing on you">
									<i class="material-icons text-sm"> help </i>
								</span-->

		</div>

		</div>
	</div>
</template>

<script>
	export default {
		data: () => ({
			schema: [
				{
					name: 'Base',
					description: 'Free forever. Manual and automatic trading.',
				},
				{
					name: 'Advanced',
					description: 'Trade well? Received 50% from each subscription on you.',
				},
			]
		}),
	}
</script>

<style scoped>

</style>
