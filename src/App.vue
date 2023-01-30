<!--
 * @Author       : Eug
 * @Date         : 2022-11-03 15:56:24
 * @LastEditTime : 2022-11-07 11:12:44
 * @LastEditors  : Eug
 * @Descripttion : Descripttion
 * @FilePath     : /h5link/src/App.vue
-->
<template>
  <div class="appic-container">
    <form-info></form-info>
  </div>
</template>

<script>
  import FormInfo from './page/formInfo.vue'
export default {
  name: 'App',
  components: {
    FormInfo
  }
}
</script>

<style lang="scss">
  @import './assets/style/media.scss';
</style>
