import { createStore } from 'vuex';
import Alert from './modules/Alert';
import Github from './modules/Github';

export default createStore({
	modules: { Alert, Github },
});
