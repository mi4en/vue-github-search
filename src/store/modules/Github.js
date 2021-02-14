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

const state = {
	users: [],
	loading: false,
};

const actions = {
	async searchUsers({ commit }, text) {
		state.loading = true;

		const res = await axios.get(
			`https://api.github.com/search/users?q=${text}&client_id=${githubClientId}&client_secret=${githubClientSecret}`,
		);

		commit('SEARCH_USERS', res.data.items);
	},
};

const mutations = {
	SEARCH_USERS: (users) => {
		state.users = users;
		state.loading = false;
	},
};

export default {
	namespaced: true,
	state,
	actions,
	mutations,
};
