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

		toggleLoading({ commit }) {
			commit('TOGGLE_LOADING');
		},
	},

	mutations: {
		SEARCH_USERS: (state, users) => (state.users = users),

		CLEAR_USERS: state => (state.users = []),

		TOGGLE_LOADING: state => (state.loading = !state.loading),
	},
};

export default Github;
