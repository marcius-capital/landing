<template>
	<div style="border-top: .05rem solid rgba(255,255,255,.05)">
		<div class="flex-centered" style="height: 100px">
			<img :src="binance" style="opacity: .1; height: 40px">
		</div>
		<!--div class="container grid-md" style="border-bottom: 1px solid rgba(255,255,255,.1)"></div-->
	</div>

</template>

<script>
	import binance from '../../../static/binance-logo.svg'

	export default {
		data: () => ({
			binance: binance
		})
	}
</script>
