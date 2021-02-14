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

	<Spinner v-if="loading" />
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
			...mapActions('Github', ['searchUsers', 'toggleLoading']),
			async onSubmit() {
				this.toggleLoading();

				try {
					const res = await this.searchUsers(this.text);
					console.log(res);
				} catch (error) {
					console.error(error);
				} finally {
					this.toggleLoading();
				}
			},
		},
	};
</script>

<style></style>
