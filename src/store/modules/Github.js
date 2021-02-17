import axios from 'axios';

let githubClientId;
let githubClientSecret;

if (process.env.NODE_ENV !== 'production') {
	githubClientId = process.env.VUE_APP_GITHUB_CLIENT_ID;
	githubClientSecret = process.env.VUE_APP_GITHUB_CLIENT_SECRET;
} else {
	githubClientId = process.env.GITHUB_CLIENT_ID;
	githubClientSecret = process.env.GITHUB_CLIENT_SECRET;
}

const Github = {
	namespaced: true,

	state: {
		users: [],
		user: {},
		repos: [],
		loading: false,
	},

	actions: {
		async searchUsers({ commit }, text) {
			const res = await axios.get(
				`https://api.github.com/search/users?q=${text}&client_id=${githubClientId}&client_secret=${githubClientSecret}`,
			);
			commit('SEARCH_USERS', res.data.items);

			return res;
		},

		clearUsers({ commit }) {
			commit('CLEAR_USERS');
		},

		async getUser({ commit }, username) {
			const res = await axios.get(
				`https://api.github.com/users/${username}?client_id=${githubClientId}&client_secret=${githubClientSecret}`,
			);
			commit('GET_USER', res.data);
		},

		async getUserRepos({ commit }, username) {
			const res = await axios.get(
				`https://api.github.com/users/${username}/repos?per_page=5&sort=created:asc&client_id=${githubClientId}&client_secret=${githubClientSecret}`,
			);

			commit('GET_USER_REPOS', res.data);
		},

		toggleLoading({ commit }) {
			commit('TOGGLE_LOADING');
		},
	},

	mutations: {
		SEARCH_USERS: (state, users) => (state.users = users),

		CLEAR_USERS: state => (state.users = []),

		GET_USER: (state, user) => (state.user = user),

		GET_USER_REPOS: (state, repos) => (state.repos = repos),

		TOGGLE_LOADING: state => (state.loading = !state.loading),
	},
};

export default Github;
