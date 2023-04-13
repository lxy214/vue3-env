import routes from './routes/root';

class HooksManager {
	constructor(options = {}) {
		this._init();	
	}

	_init() {

	}

	refreshUserInfo = () => {
		
	}

	createLoginAuth = () => {
		
	}

	clearLoginAuth = () => {
		
	}

	beforeEach = (to, from) => {
		let isRedirect = false;
		routes.forEach(item => {
			if (to.path == item.path) {
				isRedirect = true;
			}
		});
		if (!isRedirect) {
			window.$router.push('/');
		}	
	}

	afterEach = (to, from) => {

	}
}
const { createLoginAuth, clearLoginAuth, beforeEach, afterEach, refreshUserInfo } = new HooksManager();
export {
	createLoginAuth, clearLoginAuth, beforeEach, afterEach, refreshUserInfo
};
