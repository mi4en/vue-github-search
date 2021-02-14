<template>
	<div class="card text-center">
		<img :src="user.avatar_url" alt="" class="round-img" />
		<h3>{{ user.login_url }}</h3>
		<router-link :to="`/user/${user.login}`" class="btn btn-dark btn-sm my-1">
			More
		</router-link>
	</div>
</template>

<script>
	export default {
		name: 'UserItem',

		props: {
			user: {
				type: Object,
				required: true,
			},
		},
	};
</script>

<style>
	img {
		width: 60px;
	}
</style>
