<template>
	<section id="user">
		<router-link to="/" class="btn btn-light">Back To Search</router-link>
		Hireable <i v-if="user.hireable" class="fas fa-check text-success" />
		<i v-else class="fas fa-check text-success" />

		<div class="card grid-2">
			<div class="all-center">
				<img :src="user.avatar_url" class="round-img" alt="" />
				<h1>{{ user.name }}</h1>
				<p>{{ user.location }}</p>
			</div>

			<div>
				<div v-if="user.bio">
					<h3>Bio</h3>
					<p>{{ user.bio }}</p>
					<a :href="user.html_url" target="_blanc" class="btn btn-dark my-1"
						>Visit Github Profile
					</a>
					<ul>
						<li v-if="user.login">
							<div><strong>Username: </strong> {{ user.login }}</div>
						</li>
						<li v-if="user.company">
							<div><strong>Company: </strong> {{ user.company }}</div>
						</li>
						<li v-if="user.blog">
							<div><strong>Blog: </strong> {{ user.blog }}</div>
						</li>
					</ul>
				</div>
			</div>
		</div>

		<div class="card text-center">
			<div class="badge badge-primary">Followers: {{ user.followers }}</div>
			<div class="badge badge-success">Following: {{ user.following }}</div>
			<div class="badge badge-light">Public Repos: {{ user.public_repos }}</div>
			<div class="badge badge-dark">Public Gists: {{ user.public_gists }}</div>
		</div>

		<Repos :repos="repos" />

		<Spinner v-if="loading" />
	</section>
</template>

<script>
	import { mapActions, mapState } from 'vuex';
	import Repos from '../components/Repos/Repos.vue';

	export default {
		name: 'User',
		components: {
			Repos,
		},

		computed: {
			...mapState('Github', ['user', 'loading', 'repos']),
		},
		methods: {
			...mapActions('Github', ['getUser', 'getUserRepos']),
		},
		async mounted() {
			try {
				await this.getUser(this.$route.params.login);
				await this.getUserRepos(this.$route.params.login);
			} catch (error) {
				console.error(error);
			}
		},
	};
</script>

<style scoped>
	img {
		width: 150px;
	}
</style>
