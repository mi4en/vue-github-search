<template>
	<div>
		<img :src="spinner" alt="loading..." class="spinner" />
	</div>
</template>

<script>
	import spinner from '@/assets/spinner.gif';

	export default {
		name: 'Spinner',

		data() {
			return {
				spinner,
			};
		},
	};
</script>

<style scoped>
	.spinner {
		display: block;
		width: 200px;
		margin: auto;
	}
</style>
