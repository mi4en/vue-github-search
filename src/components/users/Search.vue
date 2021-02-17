<template>
	<section id="search">
		<Alert v-if="alertShow" />

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
			...mapState('Alert', ['alertShow']),
		},
		methods: {
			...mapActions('Github', ['searchUsers', 'toggleLoading', 'clearUsers']),
			...mapActions('Alert', ['setAlert']),
			async onSubmit() {
				if (this.text === '') {
					this.setAlert({ type: 'light', msg: 'Please enter search term' });
				} else {
					this.toggleLoading();

					try {
						await this.searchUsers(this.text);
						this.text = '';
					} catch (error) {
						console.error(error);
					} finally {
						this.toggleLoading();
					}
				}
			},
		},
	};
</script>

<style></style>
