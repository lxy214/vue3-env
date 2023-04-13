export const homeOptions = {
	namespaced: true, // 命名空间方法为了让map方法写成mapState('homeOptions',[])
	state: {
		info: '123'

	},
	actions: {

	},
	mutations: {
	// 进行数据更新，改变数据状态
		setInfo(state, data) {
			state.info = data;
		}
	},
	// 当state中的数据需要进行加工后使用时，可以使用getter加工
	getters: {

	}
};