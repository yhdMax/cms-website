/*
 * @Author       : Eug
 * @Date         : 2022-12-25 17:35:49
 * @LastEditTime : 2022-12-29 10:48:27
 * @LastEditors  : Eug
 * @Descripttion : Descripttion
 * @FilePath     : /vue-next-admin/src/utils/request.ts
 */
import axios, { AxiosInstance, AxiosRequestConfig } from 'axios';
import { ElMessage, ElMessageBox } from 'element-plus';
import { Session } from '/@/utils/storage';
import Cookies from 'js-cookie';
import qs from 'qs';
import util from 'util.ts'


// 创建一个error
const createError = (msg: string) => {
	const error = new Error(msg)

	logError(error)
	throw error
}

// 记录并打印错误
const logError = (err: Error) => {
	// 将错误推入日志
	console.log(import.meta.env, 'meta')
	// 打印到控制台
	// if (import.meta.NODE_ENV === 'development') {
	// 	util.log.danger('>>>>>> Error >>>>>>')
	// 	console.log(err)
	// }
}


// 配置新建一个 axios 实例
const service: AxiosInstance = axios.create({
	baseURL: import.meta.env.APP_API,
	timeout: 50000,
	headers: { 'Content-Type': 'application/json' },
	paramsSerializer: {
		serialize(params) {
			return qs.stringify(params, { allowDots: true });
		},
	},
	// 非同源携带cookie
	withCredentials: true
});

// 添加请求拦截器
service.interceptors.request.use(
	(config: AxiosRequestConfig) => {
		// 在发送请求之前做些什么 token
		// if (Session.get('token')) {
		// 	config.headers!['Authorization'] = `${Session.get('token')}`;
		// }
		
		// 携带version 保持和admin版本一致
		if (Cookies.get('version')) {
			config.headers!['X-Token'] = Cookies.get('version')
		}
		return config;
	},
	(error) => {
		console.log(error)
		// 对请求错误做些什么
		return Promise.reject(error);
	}
);

// 添加响应拦截器
service.interceptors.response.use(
	(response) => {
		// 对响应数据做点什么
		const res = response.data;
		if (res.code && res.code !== 0) {
			// `token` 过期或者账号已在别处登录
			if (res.code === 401 || res.code === 4001) {
				Session.clear(); // 清除浏览器全部临时缓存
				window.location.href = '/'; // 去登录页
				ElMessageBox.alert('你已被登出，请重新登录', '提示', {})
					.then(() => {})
					.catch(() => {});
			}
			return Promise.reject(service.interceptors.response);
		} else {
			return response.data;
		}
	},
	(error) => {
		// 对响应错误做点什么
		if (error.message.indexOf('timeout') != -1) {
			ElMessage.error('网络超时');
		} else if (error.message == 'Network Error') {
			ElMessage.error('网络连接错误');
		} else {
			if (error.response.data) ElMessage.error(error.response.statusText);
			else ElMessage.error('接口路径找不到');
		}
		return Promise.reject(error);
	}
);

// 导出 axios 实例
export default service;
