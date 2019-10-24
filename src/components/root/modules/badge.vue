<template>
	<div class="row" >
		<div class="column col-6 col-sm-12 tooltip" data-tooltip="Available for testers">
			<img class="badge" :src="googleBadge" alt="">
		</div>
		<div class="column col-6 col-sm-12">
			<a class="btn btn-link" :href="`http://${$store.state.url}`">Authenticate</a>
		</div>
	</div>
</template>

<script>
	import googleBadge from '../../../static/img/badges/google-play-badge.svg'

	export default {
		data: () => ({
			googleBadge: googleBadge,
		}),
	}
</script>
