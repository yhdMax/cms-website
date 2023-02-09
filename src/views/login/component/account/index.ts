/*
 * @Author       : Eug
 * @Date         : 2023-02-09 16:47:46
 * @LastEditTime : 2023-02-09 19:06:20
 * @LastEditors  : Eug
 * @Descripttion : Descripttion
 * @FilePath     : /github_vue_next_admin/src/views/login/component/account/index.ts
 */
import { reactive } from 'vue'
export const useState = () => {
  return reactive({
    isShowPassword: false,
    ruleForm: {
      name: 'admin',
      password: '1234',
      code: '',
    },
    formRules: {
      name: [{ required: true, message: '用户名必填', trigger: 'blur' }],
      password: [{ required: true, message: '用户密码必填', trigger: 'blur' }],
      code: [{ required: true, message: '验证码必填', trigger: 'blur' }]
    },
    codeUrl: '',
    loading: {
      signIn: false,
    }
  })
}

export const useMethods = () => {

}