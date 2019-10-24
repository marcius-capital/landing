<template>
	<button class="btn btn-link btn-menu">
		<input type="checkbox" id="menu-checkbox" name="menu-checkbox" v-model="checkbox">
		<label class="flex-centered" id="menu-label" for="menu-checkbox"></label>

		<!-- menu -->
		<modal :name="'menu'" :event="'menu'" :_class="'modal-lg'" @open="open">
			<div slot="header"/>
			<div slot="body" class="menu-container" @click="$bus.$emit('menu')">
				<div class="menu-cluster">
					<router-link class="menu-item" :to="{name: 'landing'}">Главная</router-link>
					<router-link class="menu-item" :to="{name: 'service'}">Оплата</router-link>
				</div>
				<div class="menu-cluster">
					<div class="menu-item">
						<a class="text-small" :href="'mailto:' + $store.state.mail">{{$store.state.mail}}</a><br>
						<a class="text-small" href="tel:+79776762034">+79776762034</a>
					</div>
				</div>
			</div>
		</modal>
	</button>
</template>

<script>
	export default {
		data: () => ({
			checkbox: false,
		}),
		methods: {
			open(data) {
				this.checkbox = data
			}
		}
	}
</script>

<style lang="scss">
	$transition: 0.3s;

	.btn-menu {
		box-shadow: none !important;
	}

	#menu-checkbox {
		display: none;
		position: absolute;
		top: 0;
		left: 0;
	}

	#menu-label {
		position: relative;
		width: 30px;
		height: 30px;
		cursor: pointer;
		z-index: 9999;

		&:before,
		&:after {
			content: "";
			position: absolute;
			width: 20px;
			height: 1px;
			background: white;
			-webkit-transition: $transition;
			opacity: 1;
		}

		&:before {
			top: 10px;
		}
		&:after {
			top: 17px;
		}
	}

	#menu-checkbox:checked ~ #menu-label:before {
		-webkit-transform: rotate(45deg);
		-webkit-transition: $transition;
		top: 14px;
		color: black;
	}

	#menu-checkbox:checked ~ #menu-label:after {
		-webkit-transform: rotate(-45deg);
		top: 14px;
	}

	/* Menu  */
	.menu-container {
		width: 200px;
		margin: auto;

		.menu-cluster {

			.menu-item {
				display: block;
				padding: 30px;
				color: #000000;
				font-size: 20px;
				border-bottom: 1px solid #eee;

				&:last-child {
					border: none;
				}
			}
		}

	}

</style>
