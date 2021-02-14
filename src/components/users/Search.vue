<template>
	<section id="search">
		<form @submit.prevent="onSubmit" class="form">
			<input
				type="text"
				name="text"
				placeholder="Search Users..."
				v-model="text"
			/>
			<input type="submit" value="Search" class="btn btn-dark btn-block" />
		</form>

		<button
			v-if="users.length > 0"
			class="btn btn-light btn-block"
			@click="clearUsers"
		>
			Clear
		</button>
	</section>
</template>

<script>
	import { mapActions, mapState } from 'vuex';

	export default {
		name: 'Search',

		data() {
			return {
				text: '',
			};
		},
		computed: {
			...mapState('Github', ['users', 'loading']),
		},
		methods: {
			...mapActions('Github', ['searchUsers']),
			async onSubmit() {
				this.loading = true;

				try {
					await this.searchUsers(this.text);
				} catch (error) {
					console.error(error);
				}
			},
		},
	};
</script>

<style></style>
