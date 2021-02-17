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
	};
</script>

<style></style>
