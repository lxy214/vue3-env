import { createStore } from 'vuex';
import { homeOptions } from './modules/home';
import { commonOptions } from './modules/common';

export default createStore({
	modules: {
		homeOptions,
		commonOptions
	}
});
