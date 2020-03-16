<template>
	<div id="container">

		<section class="p-relative" v-for="(i, index) in items" :data-anchor="'page-' + index" id="'page-' + index">

			<div class="container grid-lg h100 flex-centered-vertical">
				<div class="width100 ">
					<div class="row text-center-sm">
						<div class="column col-8 col-sm-12">
							<div class="description h6 mb2" v-html="i.description"></div>

							<div class="h1 text-semibold mb2" v-html="i.title"></div>

							<a class="btn btn-lg" href="https://docs.google.com/forms/d/e/1FAIpQLSd8c8Nrbceh2h_jYRA5ulG3QdKpCKvO6VbkN43mjBN3ccg0UQ/viewform"
								style="padding: 0 40px;">Get early access</a>
						</div>
					</div>
				</div>
			</div>

			<div class="background-image block-filled" :style="'background: url(' + i.img +')'"></div>

		</section>

		<!--div class="page-number">
			<span>0{{index}}</span>
		</div-->

	</div>
</template>

<script>

	// images
	import side1 from './img/side1.jpg'
	import side2 from './img/side2.jpg'
	import side3 from './img/side3.jpg'
	import side4 from './img/side4.jpg'

	export default {
		data: () => ({
			index: 1,
			instance: null,
			items: [
				{
					title: 'Boost your capital for free',
					description: 'Start earning more with our <b>mobile</b> and <b>desktop</b> apps',
					img: side1,
				},
				{
					title: 'Capital for Traders',
					description: '<b>Manual</b> and <b>automatic</b> trading on crypto-exchange: Binance',
					img: side2,
				},
				{
					title: 'Capital for <s>Investors</s> All',
					description: 'Will earn <b>48%</b>* per annum. Сhoose your own trader',
					img: side3,
				},
				{
					title: 'Join and start earning',
					description: 'Try our hackable solution <b>for free forever</b>',
					img: side4
				}
			],
			show: true
		}),
		mounted() {

		},

	}
</script>


<style lang="scss" scoped>
	#container {
		display: block !important;
	}

	.background-image {
		position: absolute;
		filter: brightness(80%);
		z-index: -1;
	}

	@media (min-width: 600px) {
		.description {
			width: 250px;
		}

		.page-number {
			position: fixed;
			right: 20px;
			bottom: 40px;
			z-index: 999999;

			span {
				transform: rotate(90deg);
				;
			}

			&:before {
				content: '';
				position: absolute;
				width: 2px;
				height: 100px;
				right: 5px;
				top: 30px;
				background: white;
			}
		}
	}

	.description {
		position: relative;

		&:before {
			content: '';
			position: absolute;
			background: white;
			height: 2px;
			width: 100%;
			left: -120%;
			top: 50%;
		}
	}
</style>
