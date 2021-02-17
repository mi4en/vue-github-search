const Alert = {
	namespaced: true,

	state: {
		alertShow: false,
		alert: {
			type: 'light',
			msg: 'asd',
		},
	},

	actions: {
		setAlert({ commit }, payload) {
			setTimeout(() => {
				commit('CLEAR_ALERT');
			}, 3000);
			commit('SET_ALERT', payload);
		},
	},

	mutations: {
		SET_ALERT: (state, { type, msg }) => {
			state.alert.type = type;
			state.alert.msg = msg;
			state.alertShow = true;
		},
		CLEAR_ALERT: state => {
			state.alert = {};
			state.alertShow = false;
		},
	},
};

export default Alert;
