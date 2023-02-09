/*
 * @Author       : Eug
 * @Date         : 2023-02-07 16:33:57
 * @LastEditTime : 2023-02-07 16:37:08
 * @LastEditors  : Eug
 * @Descripttion : Descripttion
 * @FilePath     : /github_vue_next_admin/src/api/index.ts
 */
import loginApi from './login'
import menuApi from './menu'
export default {
  ...loginApi,
  ...menuApi
}