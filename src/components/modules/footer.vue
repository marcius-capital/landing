<template>
	<div class="footer flex-centered-vertical">
		<div class="container grid-xl text-center-sm">
			<a v-for="i in items" :href="i.link" class="link link-padding text-light" target="_blank">{{i.name}}</a>
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
