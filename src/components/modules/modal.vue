<template>
	<div>
		<a @click="toggle" v-if="!event && !button">{{name}}</a>
		<transition name="modal">
			<div class="modal active" :class="_class" v-if="show">
				<div class="modal-overlay" @click="toggle"></div>
				<div class="modal-container">
					<div class="modal-header">
						<div class="modal-title btn-block" v-if="!header">{{name}}</div>
						<slot name="header"></slot>
					</div>
					<div class="modal-body">
						<slot name="body"></slot>
					</div>
					<div class="modal-footer" v-if="footer">
						<slot name="footer"></slot>
					</div>
				</div>
			</div>
		</transition>
	</div>
</template>

<script>
	export default {
		props: ['name', '_class', 'event'],
		data: () => ({
			show: false
		}),
		mounted() {
			if (this.event) this.$bus.$on(this.event, this.toggle)
		},
		computed: {
			header() {
				return !!this.$slots.header
			},
			footer() {
				return !!this.$slots.footer
			},
			container() {
				return !!this.$slots.container
			}
		},
		methods: {
			toggle() {
				(this.show) ? this.show = false : this.show = true;
				this.$emit('open', this.show)
			},
		},
	}
</script>

<style lang="scss">
	$padding: 25px;

	.modal {
		&.modal-md {
			.modal-container {
				max-width: 400px;
			}
		}

		.modal-container {
			padding: 0;
			border-radius: 5px;
			box-shadow: 0 5px 30px rgba(0, 0, 0, 0.1);
		}

		.modal-header {
			font-weight: 500;
			padding: $padding;
			padding-bottom: 0;

			.tab {
				a {
					padding-top: 0;
				}
			}
		}

		.modal-body {
			padding: $padding;
		}

		.modal-footer {
			padding: $padding;
			padding-top: 0;
		}
	}

	/* Modal animation */
	.modal {
		transition: opacity .3s ease !important;
		.modal-container {
			animation: initial !important;
			transition: all .3s ease;
		}
	}

	.modal-enter {
		opacity: 0 !important;
	}

	.modal-leave-active {
		opacity: 0 !important;
	}

	.modal-enter .modal-container,
	.modal-leave-active .modal-container {
		-webkit-transform: scale(1.1);
		transform: scale(1.1);
	}

</style>
