<template>
	<div class="h50 action-block flex-centered">
		<div class="container grid-sm text-center">
			<div class="mb hide-md">
				<div class="h4">Trading has never been so easy</div>
			</div>

			<actionButtons style="max-width: 380px; margin: 0 auto"></actionButtons>
		</div>

	</div>
</template>

<script>
    import actionButtons from './modules/action-buttons'

    export default {

        components: {
            actionButtons
        }
    }
</script>
