<template>
	<Navbar />
	<router-view />
</template>

<script>
	import Navbar from './components/layouts/Navbar.vue';

	export default {
		components: {
			Navbar,
		},
	};
</script>

<style>
	@import './assets/css/styles.css';
</style>
