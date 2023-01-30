<!--
 * @Author       : Eug
 * @Date         : 2022-11-03 18:35:34
 * @LastEditTime : 2022-11-08 16:27:28
 * @LastEditors  : Eug
 * @Descripttion : Descripttion
 * @FilePath     : /h5link/src/page/formInfo.vue
-->
<template>
  <div class="form-info-container">
    
    <div class="enter-mask" v-if="isSuccess">
      <div class="tooltip-container">
        <div class="loader"></div>
        <div class="tootip-info">提交成功</div>
    </div>
    </div>
    <div class="form-info-container-banner-img">
      <img src="../assets/image/banner_top.jpg" alt="">
    </div>
    <div class="form-info-container-forms">
        <div class="form-header"> 我们将改变你的人生,为你量身定制未来规划 </div>
      <div class="form-item">
        <div class="form-item-form-header">姓名</div>
        <input type="text" placeholder="请输入您的姓名" v-model="form.name" maxlength="20" @input="useChangeName('name')" />
        <div class="info-error">{{ form.nameError }}</div>
      </div>
      <div class="form-item">
        <div class="form-item-form-header">电话</div>
        <input type="text" placeholder="请输入您的电话" v-model="form.phone" @input="useChangePhone('phone')" />
        <div class="info-error">{{ form.phoneError }}</div>
      </div>
      <div class="form-item">
        <div class="form-item-form-header">保就业方向</div>
        <div class="info-error">{{ form.directionError }}</div>
        <div class="form-item-form-radios">
          <p v-for="itm, idx in selectList" :key="itm.label"
            :style="[{ width: idx === 6 ? '100%' : '33%' }, { paddingLeft: idx === 2 || idx === 5 ? '3px' : '0px' }]">
            <label>
              <input type="radio" name="value" :value="itm.value" v-model="form.direction"
                @change="useDirectionChange('direction')" />
              <span>{{ itm.value }}</span>
            </label>
          </p>
        </div>
      </div>
      <button class="submit-btn" @click="useSubmit" type="submit">免费获取</button>
    </div>
    <div class="form-info-container-professional">
      <img src="../assets/image/professional.jpg" alt="">
    </div>
    <div class="form-info-container-course">
      <img src="../assets/image/course.jpg" alt="">
    </div>
    <div class="form-info-container-school">
      <img src="../assets/image/school.jpg" alt="">
    </div>
    <div class="form-info-container-forms">
      <div class="footer-header">-改变人生 从我开始-</div>
      <div class="form-item">
        <div class="form-item-form-header">姓名</div>
        <input type="text" placeholder="请输入您的姓名" v-model="form.footName" maxlength="20" @input="useFootChangeName('footName')" />
        <div class="info-error">{{ form.footNameError }}</div>
      </div>
      <div class="form-item">
        <div class="form-item-form-header">电话</div>
        <input type="text" placeholder="请输入您的电话" v-model="form.footPhone" @input="useFootChangePhone('footPhone')" />
        <div class="info-error">{{ form.footPhoneError }}</div>
      </div>
      <button class="submit-btn footer-btn" @click="useFootSubmit">点击咨询 专业老师答疑问</button>
    </div>
    
  </div>
</template>

<script>
import { reactive, toRefs } from 'vue'
export default {
  setup() {
    const state = reactive({
      form: {
        name: '',
        phone: '',
        direction: '',
        nameError: '',
        phoneError: '',
        directionError: '',
        
        footName: '',
        footPhone: '',
        footNameError: '',
        footPhoneError: '',
      },
      isSubmit: false,
      isFotSubmit: false,

      isSuccess: false,
      selectList: [
        {
          label: '航空类企业',
          value: '航空类企业'
        },
        {
          label: '学前教育类企业',
          value: '学前教育类企业'
        },
        {
          label: '轨道类企业',
          value: '轨道类企业'
        },
        {
          label: '机械类企业',
          value: '机械类企业'
        },
        {
          label: '形象设计类企业',
          value: '形象设计类企业'
        },
        {
          label: '餐饮类企业',
          value: '餐饮类企业'
        },
        {
          label: '计算机设计类企业',
          value: '计算机设计类企业'
        }
      ]
    })
    const useChangeName = (curname) => {
      const { name } = state.form
      state.form.name = name.replace(/\s*/g, '')
      if ((name.trim() !== '') && name.length >= 20) {
        nameErrorInfo('此项最多输入20个字符,请检查', !!(curname))
      } else if (name.trim() === '') {
        nameErrorInfo('此项不可为空,请输入', !!(curname))
      } else {
        nameErrorInfo('', !!(curname))
        return true
      }
      return false
    }

    const useChangePhone = (curname) => {
      const { phone } = state.form
      const isPhone = /^1[3456789]\d{9}$/;
      const isMob = /^0(-|\d)*$/;
      state.form.phone = phone.replace(/([a-zA-Z]|[\u4e00-\u9fa5]|\s*)/g, '')
      // eslint-disable-next-line no-case-declarations
      if ((isPhone.test(phone) || isMob.test(phone))) {
        state.form.phone = phone.trim()
        phoneErrorInfo('', !!(curname))
        return true
      } else if (phone.trim() === '') {
        phoneErrorInfo('此项不可为空,请输入', !!(curname))
      } else {
        phoneErrorInfo('请输入正确的电话号码', !!(curname))
      }
      return false
    }
    const useDirectionChange = (curname) => {
      const { direction } = state.form
      if (!direction) {
        directionErrorInfo('至少选择一个选项', !!(curname))
        return false
      }
      directionErrorInfo('', !!(curname))
      return true
    }

    const useFootChangeName = (curname) => {
      const { footName } = state.form
      state.form.footName = footName.replace(/\s*/g, '')
      if ((footName.trim() !== '') && footName.length >= 20) {
        footNameErrorInfo('此项最多输入20个字符,请检查', !!(curname))
      } else if (footName.trim() === '') {
        footNameErrorInfo('此项不可为空,请输入', !!(curname))
      } else {
        footNameErrorInfo('', !!(curname))
        return true
      }
      return false
    }

    const useFootChangePhone = (curname) => {
      const { footPhone } = state.form
      const isPhone = /^1[3456789]\d{9}$/;
      const isMob = /^0(-|\d)*$/;
      state.form.footPhone = footPhone.replace(/([a-zA-Z]|[\u4e00-\u9fa5]|\s*)/g, '')
      // eslint-disable-next-line no-case-declarations
      if ((isPhone.test(footPhone) || isMob.test(footPhone))) {
        state.form.phone = footPhone.trim()
        footPhoneErrorInfo('', !!(curname))
        return true
      } else if (footPhone.trim() === '') {
        footPhoneErrorInfo('此项不可为空,请输入', !!(curname))
      } else {
        footPhoneErrorInfo('请输入正确的电话号码', !!(curname))
      }
      return false
    }


    const nameErrorInfo = (err = '', edit = false) => {
      state.form.nameError = err
      if (edit) state.isSubmit = false
    }
    const phoneErrorInfo = (err = '', edit = false) => {
      state.form.phoneError = err
      if (edit) state.isSubmit = false
    }
    const directionErrorInfo = (err = '', edit = false) => {
      state.form.directionError = err
      if (edit) state.isSubmit = false
    }
    const footNameErrorInfo = (err = '', edit = false) => {
      state.form.footNameError = err
      if (edit) state.isFotSubmit = false
    }
    const footPhoneErrorInfo = (err = '', edit = false) => {
      state.form.footPhoneError = err
      if (edit) state.isFotSubmit = false
    }

    const submitRequest = (url, methods) => {
      return new Promise(resolve => {
        let xhr = new XMLHttpRequest()
        xhr.onreadystatechange = () => {
          if (xhr.readyState === 4 && xhr.status === 200) {
            resolve(xhr)
          }
        }
        xhr.open(methods, url)
        xhr.send()
      })
    }
    
    const useSubmit = () => {
      const isNull = [useChangeName, useChangePhone, useDirectionChange].map(itm => itm())
      const { direction, name, phone } = state.form
      if (isNull.every(itm => itm) && !state.isSubmit) {
        state.isSubmit = true
        submitRequest(`https://test-dsp.atomhike.com/postback/v2/dGVzdF9odV8wNzI4?job=${direction}&name=${name}&tel=${phone}`, 'GET')
        .then (() => {
          state.isSuccess = true
          setTimeout(() => {
            state.isSuccess = false
          }, 2000)
        })
      }
      return false
    }
    const useFootSubmit = () => {
      const { footName, footPhone } = state.form
      const isNull = [useFootChangeName, useFootChangePhone].map(itm => itm())
      if (isNull.every(itm => itm) && !state.isFotSubmit) {
        state.isFotSubmit = true
        submitRequest(`https://test-dsp.atomhike.com/postback/v2/dGVzdF9odV8wNzI4?name=${footName}&tel=${footPhone}`, 'GET')
        .then (() => {
          state.isSuccess = true
          setTimeout(() => {
            state.isSuccess = false
          }, 2000)
        })
      }
      return false
    }
    return {
      ...toRefs(state),
      useChangeName,
      useChangePhone,
      useDirectionChange,
      useSubmit,
      useFootChangePhone,
      useFootChangeName,
      useFootSubmit
    }
  }
}
</script>

<style lang="scss">
.appic-container {
  width: 100%;
  height: 100%;
  position: relative;
  .enter-mask {
    background-color: rgba(0, 0, 0, 0.5);
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    transition: 0.3s;
    -webkit-transition: 0.3s;
    z-index: 999;
    .tooltip-container {
      width: 50%;
      height: 20%;
      background: white;
      position: absolute;
      top: 0;
      left: 0;
      bottom: 0;
      right: 0;
      margin: auto;
      border-radius: 10%;
      z-index: 99;
      opacity: 1;
      .tootip-info {
        font-size: 15px;
        text-align: center;
        margin-top: 10%;
      }
    }
  }
  .form-info-container {
    width: 100%;
    height: 100%;
    max-width: 550px;
    font-size: 14px;
    overflow: scroll;

    &-banner-img {
      width: 100%;
      height: 55%;
      background: #4273c7;

      img {
        width: 100%;
        height: 100%;
      }
    }

    &-forms {
      padding: 0 20px;
      box-sizing: border-box;
      --placeholder-color: #999999;
      --input-error-color: #ff4444;
      color: rgb(128, 128, 128);

      .form-header {
        font-size: 17px;
        font-weight: 500;
        color: black;
        line-height: 50px;
      }

      .footer-header {
        font-size: 20px;
        color: #e36c2c;
        line-height: 70px;
        font-weight: 900;
        text-align: center;
      }

      .footer-btn {
        border-radius: 10px;
      }

      .form-item {
        font-size: 14px;

        >input {
          width: 100%;
          background-color: #f6f6f6;
          border: none;
          border-radius: 3px;
          outline: none;
          padding: 13px 10px;
          margin-bottom: 5px;
          box-sizing: border-box;
          font-size: 15px;
        }

        &-form-header {
          color: black;
          // font-weight: 500;
          font-size: 15px;
          line-height: 50px;
        }

        &-form-radios {
          display: flex;
          flex-wrap: wrap;
          font-size: 13px;

          >p {
            input {
              width: 12px;
            }

            label {
              display: flex;
            }

            overflow: hidden;
            margin-top: 15px;

            span {
              margin-left: 5px;
            }
          }
        }

        .info-error {
          color: #ff4444;
          margin-left: 5px;
        }

        &-form-header::after {
          content: '*';
          color: #ff4444;
          margin-left: 5px;
        }

        ::-webkit-input-placeholder {
          /* Chrome/Safari/Opera */
          color: rgb(128, 128, 128);
          font-size: 15px;
        }

        ::-moz-placeholder {
          /* Firefox 19+ */
          color: rgb(128, 128, 128);
          font-size: 15px;
        }

        :-ms-input-placeholder {
          /* IE 10+ 注意这里只有一个冒号 */
          color: rgb(128, 128, 128);
          font-size: 15px;
        }

        ::placeholder {
          /* W3C */
          color: rgb(128, 128, 128);
          font-size: 15px;
        }
      }

      .submit-btn {
        margin-top: 20px;
        width: 100%;
        outline: none;
        border: none;
        color: #fff;
        padding: 15px 0;
        font-size: 20px;
        text-align: center;
        background: linear-gradient(90deg, #e36d2d, #ee8f34);
        margin-bottom: 10px;
        font-weight: 500;
      }
    }

    &-professional {
      width: 100%;
      height: 75%;

      img {
        width: 100%;
        height: 100%;
      }
    }

    &-course {
      width: 100%;
      height: 87%;

      img {
        width: 100%;
        height: 100%;
      }
    }

    &-school {
      width: 100%;
      height: 67%;

      img {
        width: 100%;
        height: 100%;
      }
    }
  }

}

// 圆圈
.loader {
  position: relative;
  width: 60px;
  height: 60px;
  border-radius: 50%;
  border: 4px solid rgba(165, 220, 134, 0.2);
  border-left-color: #A5DC86;
  margin: 0 auto;
  margin-top: 10%;
  animation: animation_collect 1s ease 1 both; //infinite永远执行
}

// 圆圈动画代码
@keyframes animation_collect {
  0% {
    transform: rotate(270deg);
    border-left-color: #A5DC86;
  }

  25% {
    border-left-color: #A5DC86;
  }

  50% {
    border-left-color: #A5DC86;
  }

  75% {
    border-left-color: #A5DC86;
  }

  100% {
    border-left-color: rgba(165, 220, 134, 0.2);
    transform: rotate(0deg);
  }
}


//对号
.loader::before {
  position: absolute;
  content: '';
  top: 50%;
  left: 7px;
  border: 4px solid #A5DC86;
  border-left-width: 0;
  border-bottom-width: 0;
  transform: scaleX(-1) rotate(135deg);
  transform-origin: left top;
  // 设置动画延迟1s执行，先执行外层圆圈动画 结束后执行该动画
  animation: animation_true 0.5s 1s linear 1 both;
  // 外层执行动画执行时，里面不显示，但是不能使用display:none,所以用opacity代替
  opacity: 0;
}

@keyframes animation_true {
  0% {
    opacity: 0;
    width: 0px;
    height: 0px;
  }

  33% {
    opacity: 1;
    width: 20px;
    height: 0px;
  }

  100% {
    opacity: 1;
    width: 20px;
    height: 40px;
  }
}
</style>