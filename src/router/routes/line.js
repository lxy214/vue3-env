export const lineConfig = [
	{
		path: '/line',
		redirect: '/line-main'
	},
	{
		path: '/line-main',
		name: 'lineMain',
		meta: { 
			requiresAuth: true,
			keepAlive: true // 设置页面是否需要使用缓存
		},
		component: () => import('@views/line/main.vue')
	}
];