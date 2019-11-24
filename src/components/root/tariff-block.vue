<template>
	<div class="background-secondary  h50 tariff-block flex-centered">
		<div class="container container-padding grid-md">
			<div class="row">

				<div class="column col-6 col-md-12">
					<div class="content text-center tariff-item active">
						<div class="content-header mb">
							<div class="h4">
								Base
							</div>
							<div class="text-secondary h5">
								Free forever
							</div>
						</div>
						<div class="content-body">
							Trading terminal, bots, all possibilities
						</div>
					</div>
				</div>

				<div class="column col-6 col-md-12">
					<div class="content text-center tariff-item">
						<div class="content-header mb ">
							<div class="h4 flex-centered">
								Advanced
								<span class="text-sm label" style="margin-left: 10px">SOON</span>
							</div>
							<div class="h5">
								<span class="text-secondary">Will pay 50%</span>
								<span class="tooltip c-hand" data-tooltip="Payouts after subscribing on you">
									<i class="material-icons text-sm"> help </i>
								</span>

							</div>
						</div>
						<div class="content-body">
							Trading well? Get paid for your subscribers!<br>
						</div>
					</div>
				</div>

				<!--div class="column col-6 col-sm-12">
					<div class="content text-center" style="padding: 1rem; border: 1px solid  rgba(255,255,255,.1);">
						<div class="content-header mb">
							<div class="flex-centered h4">
								Hedge
								<span class="text-sm label" style="margin-left: 10px">SOON</span>
							</div>
							<div class="text-secondary h5">
								Get 30% from profit
							</div>
						</div>
						<div class="content-body">
							Trust management of your assets.
						</div>
					</div>
				</div-->

			</div>

		</div>
	</div>
</template>

<script>
	export default {
		data: () => ({
			schema: [
				{
					name: 'Trading terminal',
					icon: '',
				},
				{
					name: 'Bots',
					icon: '',
				},
				{
					name: '',
					icon: '',
				}
			]
		}),
	}
</script>

<style scoped>

</style>
