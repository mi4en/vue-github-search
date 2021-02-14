<template>
	<div class="users-grid">
		<UserItem v-for="user in users" :key="user.id" :user="user" />
	</div>
</template>

<script>
	import { mapState } from 'vuex';
	import UserItem from '@/components/users/UserItem.vue';

	export default {
		name: 'Users',
		components: {
			UserItem,
		},
		computed: {
			...mapState('Github', ['users']),
		},
	};
</script>

<style scoped>
	.users-grid {
		display: grid;
		grid-template-columns: repeat(3, 1fr);
		grid-column-gap: 1rem;
	}
</style>
