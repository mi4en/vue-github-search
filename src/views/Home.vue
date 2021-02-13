<template>
	<div class="home">
		<Search />
	</div>
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
