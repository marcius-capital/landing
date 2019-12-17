<template>
	<div class="h50 action-block flex-centered">
		<div class="container grid-sm text-center">
			<div class="mb">
				<div class="h3 text-semibold">Join and start earning</div>
			</div>

			<actionButtons style="max-width: 380px; margin: 0 auto"></actionButtons>
		</div>

	</div>
</template>

<script>
    import actionButtons from '../modules/action-buttons'

    export default {

        components: {
            actionButtons
        }
    }
</script>
