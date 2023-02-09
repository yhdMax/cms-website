import request from '/@/utils/request';

/**
 * （不建议写成 request.post(xxx)，因为这样 post 时，无法 params 与 data 同时传参）
 *
 * 登录api接口集合
 * @method signIn 用户登录
 * @method signOut 用户退出登录
 */

const Url = {
	service: {
		'getCaptcha': '/captcha',
		'signin': '/login'
	}
}
const requestServiceName = 'service'
export default {
	GetCaptcha () {
		return request({
			url: Url[requestServiceName].getCaptcha,
			method: 'get'
		})
	},
	SignIn(data: object) {
		return request({
			url: Url[requestServiceName].signin,
			method: 'post',
			data,
		});
	},
	signOut: (data: object) => {
		return request({
			url: '/user/signOut',
			method: 'post',
			data,
		});
	},
};
