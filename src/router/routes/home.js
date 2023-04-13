export const homeConfig = [
	{
		path: '/',
		redirect: '/home-main'
	},
	// {
	// 	path: '/',
	// 	name: 'home',
	// 	meta: { 
	// 		requiresAuth: true,
	// 		keepAlive: true // 设置页面是否需要使用缓存 
	// 	},
	// 	component: () => import('@views/home/home.vue')
	// },
	{
		path: '/home-main',
		name: 'homeMain',
		meta: { 
			requiresAuth: true,
			keepAlive: true // 设置页面是否需要使用缓存
		},
		component: () => import('@views/home/main.vue')
	},
	{
		path: '/home2',
		name: 'home2',
		meta: { 
			requiresAuth: true,
			keepAlive: true // 设置页面是否需要使用缓存
		},
		component: () => import('@views/home/home2.vue')
	}
];