import{c as u}from"./commonFunction.ea0db1de.js";import{j as p,K as i,a9 as a,k as _,l as V,E as t,y as n,u as f,C as y}from"./vue.09b0b6fd.js";import"./_commonjsHelpers.042e6b4d.js";import"./formatTime.29ac8c52.js";import"./vue-i18n.cjs.d84b7b96.js";import"./index.c421c646.js";import"./index.cd2848f1.js";const b={class:"layout-pd"},h=p({name:"funClipboard"}),T=p({...h,setup(v){const{copyText:r}=u(),o=i({copyVal:"https://gitee.com/lyt-top/vue-next-admin",shearVal:""});return(C,e)=>{const c=a("el-alert"),m=a("el-button"),s=a("el-input"),d=a("el-card");return _(),V("div",b,[t(d,{shadow:"hover",header:"复制剪切演示"},{default:n(()=>[t(c,{title:"感谢优秀的 `vue-clipboard3`，项目地址：https://github.com/JamieCurnow/vue-clipboard3`",type:"success",closable:!1,class:"mb15"}),t(s,{placeholder:"请输入内容",modelValue:o.copyVal,"onUpdate:modelValue":e[1]||(e[1]=l=>o.copyVal=l)},{append:n(()=>[t(m,{onClick:e[0]||(e[0]=l=>f(r)(o.copyVal))},{default:n(()=>[y("复制链接")]),_:1})]),_:1},8,["modelValue"]),t(s,{placeholder:"先点击上方 `复制链接` 按钮，然后 `Ctrl + V` 进行粘贴！ ",modelValue:o.shearVal,"onUpdate:modelValue":e[2]||(e[2]=l=>o.shearVal=l),class:"mt15"},null,8,["modelValue"])]),_:1})])}}});export{T as default};
