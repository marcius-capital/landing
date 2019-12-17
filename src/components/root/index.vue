<template>
	<div id="container">
		<initBlock />
		<!--div class="divider" /-->
		<directions />
		<!--exchangesBlock></exchangesBlock-->
		<featuresBlock />

		<div class="divider" />

		<!--statistic /-->

		<tariffBlock />
		<actionBlock />

	</div>
</template>

<script>

	import initBlock from './blocks/init'
	import directions from './blocks/directions'
	import exchangesBlock from './blocks/exchanges'
	import featuresBlock from './blocks/features'
	import actionBlock from './blocks/action'

	import tariffBlock from './blocks/tariff'

	import statistic from './blocks/statistic'

	export default {
		components: {
			initBlock,
			directions,
			exchangesBlock,
			featuresBlock,
			actionBlock,
			tariffBlock,

			statistic,
		}

	}
</script>
