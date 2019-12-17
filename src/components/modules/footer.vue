<template>
	<div class="footer flex-centered">
		<div class="container grid-lg">
			<div class="text-center">
				<div class="text-secondary">© {{new Date().getFullYear()}}	{{$store.state.name}}. All rights reserved. </div>
				<div>
					<a v-for="i in items" :href="i.link" class="link link-padding" target="_blank">{{i.name}}</a>
				</div>
			</div>
		</div>
	</div>
</template>

<script>

	export default {
		data: () => ({
			items: [
				{
					name: 'Discord',
					link: 'https://discordapp.com/invite/DaWfrPx',
				},
				{
					name: 'Telegram',
					link: 'https://t.me/joinchat/G5DV0xUO-pvjEmoWc7dBUg'
				},
				{
					name: 'GitHub',
					link: 'https://github.com/marcius-capital'
				},
			]
		}),
	}
</script>
