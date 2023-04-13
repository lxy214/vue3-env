export const flowConfig = [
	{
		path: '/flow',
		redirect: '/flow-main'
	},
	{
		path: '/flow-main',
		name: 'flowMain',
		meta: { 
			requiresAuth: true,
			keepAlive: true // 设置页面是否需要使用缓存
		},
		component: () => import('@views/flow/main.vue')
	}
];