export const loginConfig = [
	{
		path: '/login',
		name: 'login',
		meta: { requiresAuth: true },
		component: () => import('@views/login/main.vue')
	}
];