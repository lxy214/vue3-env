import { createApp } from 'vue';
import ElementPlus from 'element-plus';
import dataV from '@jiaminghi/data-view';
import API from '@constants/api/root';
import global from '@constants/global';
import App from '@components/layout/index';
// 将自动注册所有组件为全局组件
// vue router
import router from './router/router.js';
// vuex
import vuex from './store/root.js';
import axios from './utils/axiosHttp';
import 'element-plus/dist/index.css';
import setTitle from './components/_common/set-title/set-title.vue';
import '@assets/font/font.css';
import '@assets/css/common.scss';
import '@assets/css/global.scss';

const app = createApp(App);
app.component('set-title', setTitle);
app.config.globalProperties.$http = axios;
app.config.globalProperties.global = global;
app.config.globalProperties.API = API;
app.provide({
	axios,
	global,
	API
});
app.use(router);
app.use(vuex);
app.use(ElementPlus);
app.use(dataV);
app.mount('#app');

