<template>
	<div class="home">
		<Search />
		<Users />
	</div>
</template>

<script>
	import Search from '@/components/users/Search.vue';
	import Users from '@/components/users/Users.vue';

	export default {
		name: 'Home',
		components: {
			Search,
			Users,
		},
	};
</script>
