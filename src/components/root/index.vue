<template>
	<div id="container">
		<initBlock></initBlock>
		<!--exchangesBlock></exchangesBlock-->
		<featuresBlock></featuresBlock>
		<tariffBlock></tariffBlock>
		<actionBlock></actionBlock>
	</div>
</template>

<script>

	import initBlock from './init-block'
	import exchangesBlock from './exchanges-block'
	import featuresBlock from './features-block'
	import actionBlock from './action-block'

	import tariffBlock from './tariff-block'

	export default {
		mounted() {
			this.test()
		},
		updated() {
			// this.test()
		},
		methods: {
			test() {

			}
		},
		components: {
			initBlock,
			exchangesBlock,
			featuresBlock,
			actionBlock,
			tariffBlock,
		}

	}
</script>
