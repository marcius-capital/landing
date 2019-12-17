<template>
	<div class="h50 flex-centered">
		<div class="container container-padding container-padding grid-xl">

			<div class="row row-landing">

				<div class="column col-6 col-md-12" v-for="(i,index) in schema">
					<div class="square image" :style="'background: url(' + i.image + ')'">
						<div class="square-item flex-centered text-center" >
							<div class="content-padding">
								<div class="h3 text-semibold"> {{i.name}} </div>
								<div class="h5 mb" v-html="i.description"></div>
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
					name: 'Capital for Traders',
					description: `Manual and automatic trading<br>on crypto-exchange`,
					image: 'https://images.pexels.com/photos/1181248/pexels-photo-1181248.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
				},
				{
					name: 'Capital for Investors',
					description: 'Will earn you 48% per annum*',
					image: 'https://images.unsplash.com/photo-1528567656495-d439e32f6be1?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80',
					link: ''
				},
			]
		}),
	}
</script>

<style scoped>

</style>
