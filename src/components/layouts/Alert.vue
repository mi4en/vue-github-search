<template>
	<div :class="`alert alert-${alert.type}`">
		<i class="fas fa-info-circle"></i> {{ alert.msg }}
	</div>
</template>

<script>
	import { mapState } from 'vuex';

	export default {
		name: 'Alert',

		computed: {
			...mapState('Alert', ['alert']),
		},
		mounted() {
			console.log('alert: ', this.alert);
		},
	};
</script>

<style></style>
