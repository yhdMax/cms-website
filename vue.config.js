/* 
 * @Author       : Eug
 * @Date         : 2022-11-03 15:56:24
 * @LastEditTime : 2022-11-07 11:12:18
 * @LastEditors  : Eug
 * @Descripttion : Descripttion
 * @FilePath     : /h5link/vue.config.js
 */
const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  pluginOptions: {
    'style-resources-loader': {
        preProcessor: 'scss',
        patterns: []
    }
  }
})
