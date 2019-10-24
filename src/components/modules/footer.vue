<template>
	<div class="footer flex-centered-vertical ">
		<div class="container grid-lg unit content-padding">
			<!--div class="unit-section hide-sm">With <span style="margin: 0 0.1rem">❤️</span> from <a  href="//marcius.co" target="_blank" style="margin-left: 0.1rem">Marcius, Inc.</a></div-->
			<div class="unit-section social-icons text-center-sm">
				<a :href="i.link" v-for="i in items" class="social-icon" :class="i.name.toLowerCase()" target="_blank" />
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
