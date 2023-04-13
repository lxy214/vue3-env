export const carConfig = [
	{
		path: '/car',
		redirect: '/car-main'
	},
	{
		path: '/car-main',
		name: 'carMain',
		meta: { 
			requiresAuth: true,
			keepAlive: true // 设置页面是否需要使用缓存
		},
		component: () => import('@views/car/main.vue')
	}
];