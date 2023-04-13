import axios from 'axios';
// import { message } from 'ant-design-vue'


/** =================设定全局域名=================* */
if (process.env.VUE_APP_FLAG == "development") { // 开发环境
	axios.defaults.baseURL = 'http://tw.twgiot.com:30021/twdt-admin/1';
} else if (process.env.VUE_APP_FLAG == "production") { // 正式环境
	axios.defaults.baseURL = 'http://tw.twgiot.com:30021/twdt-admin/2';
} else if (process.env.VUE_APP_FLAG == "test") { // 测试环境
	axios.defaults.baseURL = 'http://tw.twgiot.com:30021/twdt-admin/3';
}
/** =================设定请求拦截interceptor=================* */
axios.interceptors.request.use(
	config => {
		const token = window.localStorage.getItem('mtoken') || '';
		token && (config.headers.token = token);
		return config;
	},
	error => {
		return Promise.reject(error);
	}
);

/** =================请求回调拦截interceptor=================* */
axios.interceptors.response.use(
	response => {
		switch (response.data.code) {
			case 0:
				return response.data;
			case 200:
				return response.data;
			case 401:
				localStorage.setItem('mtoken', '');
				// window.location.href='./#/login';
				return Promise.reject(response);
			case 403:
				// message.destroy();
				// message.warning(response.data.msg);
				return Promise.reject(response);
			case 500:
			case 10004:
				// message.warning(response.data.msg)
				return Promise.reject(response);
			case 10001:
				// message.warning(response.data.msg)
				return Promise.reject(response);
			default:
				return Promise.reject(response);
		}
	},
	error => {
		console.log(error);
		// message.warning('您当前网络不稳定')
		return Promise.reject(error);
	}
);

export default axios;
