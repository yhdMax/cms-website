import dayjs from 'dayjs'

interface logFner {
  capsule: Function
  colorful: Function
  default: Function
  primary: Function
  success: Function
  warning: Function
  danger: Function
}


/**
 * @description 返回颜色值
 * @param {String} type 样式类型  [ primary, success, warning, danger ]
 * @param {String} color return color
 * @return color
 */

const typeColor = (type: string = 'default', color: string = '') => {
  switch (type) {
    case 'default': color = '#35495E'; break;
    case 'primary': color = '#3488ff'; break;
    case 'success': color = '#43B883'; break;
    case 'warning': color = '#e6a23c'; break;
    case 'danger': color = '#f56c6c'; break;
    default: ; break;
  }
  return color
}

let log: logFner = {
  /**
   * @description 打印一个[ title | text ] 样式的信息
   * @param {String} title 标题
   * @param {String} info 具体信息
   * @param {String} type style type
   * @return
   */

  capsule(title: string, info: string, type: string, module: any) {
    console.log(
      `%c ${title}-${module ? module + '-' : ''}[${dayjs().format('YYYY-MM-DD HH:mm:ss')}] %c ${info} %c`,
      'background:#35495E; padding: 1px; border-radius: 3px 0 0 3px; color: #fff;',
      `background:${typeColor(type)}; padding: 1px; border-radius: 0 3px 3px 0;  color: #fff;`,
      'background:transparent'
    )
  },

  /**
   * @description 打印彩色信息
   * @param {Object} textArr 包含type text 等
   * @return
   */

  colorful(textArr: { text: string, type: string, map: Function }) {
    console.log(
      `%c${textArr.map((t: any) => t.text || '').join('%c')}`,
      ...textArr.map((t: any) => `color: ${typeColor(t.type)};`)
    )
  },

  /**
   * @description 打印default样式的字
   * @param {String} text 文字
   * @return
   */

  default(text: string) {
    log.colorful({ text })
  },

  /**
   * @description 打印primary样式的字
   * @param {String} text 文字
   * @return
   */

  primary(text: string) {
    log.colorful({ text, type: 'primary' })
  },

  /**
   * @description 打印success样式的字
   * @param {String} text 文字
   * @return
   */

  success(text: string) {
    log.colorful({ text, type: 'success' })
  },

  /**
   * @description 打印warning样式的字
   * @param {String} text 文字
   * @return
   */

  warning(text: string) {
    log.colorful({ text, type: 'warning' })
  },

  /**
   * @description 打印danger样式的字
   * @param {String} text 文字
   * @return
   */

  danger(text: string) {
    log.colorful({ text, type: 'danger' })
  }
}

export default log