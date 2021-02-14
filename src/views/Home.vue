<template>
	<section class="home">
		<Search />
	</section>
</template>

<script>
	import Search from '@/components/users/Search.vue';

	export default {
		name: 'Home',
		components: {
			Search,
		},
	};
</script>
