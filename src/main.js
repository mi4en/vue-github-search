import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';

import Spinner from './components/layouts/Spinner.vue';
import Alert from './components/layouts/Alert.vue';

const app = createApp(App);

app.component('Spinner', Spinner);
app.component('Alert', Alert);

app
	.use(store)
	.use(router)
	.mount('#app');
