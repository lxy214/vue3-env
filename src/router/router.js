import { createRouter, createWebHashHistory } from 'vue-router';
import routes from './routes/root';

import { beforeEach } from './hooks';

const router = createRouter({
	history: createWebHashHistory(),
	routes
});
router.beforeEach(beforeEach);
window.$router = router;
export default router;