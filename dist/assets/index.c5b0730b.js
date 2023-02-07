import{j as b,r as g,ar as P,K as V,o as H,a4 as $,a9 as a,z as T,G as L,k as B,l as N,m as t,q as G,$ as r,C as K,D as m,E as n,y as u,_ as W,T as J,J as U,aE as j,aF as O}from"./vue.09b0b6fd.js";import{f as _}from"./formatTime.29ac8c52.js";import{L as Q}from"./storage.6b2e7cd0.js";import{u as X}from"./themeConfig.8c3a6188.js";import{_ as Z}from"./_plugin-vue_export-helper.c27b6911.js";const d=l=>(j("data-v-a2ad8bfb"),l=l(),O(),l),ee=d(()=>t("div",{class:"layout-lock-screen-mask"},null,-1)),oe={class:"layout-lock-screen"},te=["onTouchstart","onTouchmove","onTouchend"],ne={class:"layout-lock-screen-date-box"},se={class:"layout-lock-screen-date-box-time"},ce={class:"layout-lock-screen-date-box-minutes"},ie={class:"layout-lock-screen-date-box-info"},ae={class:"layout-lock-screen-date-top"},le=d(()=>t("div",{class:"layout-lock-screen-date-top-text"},"上滑解锁",-1)),re={class:"layout-lock-screen-login"},ue={class:"layout-lock-screen-login-box"},de=d(()=>t("div",{class:"layout-lock-screen-login-box-img"},[t("img",{src:"https://img2.baidu.com/it/u=1978192862,2048448374&fm=253&fmt=auto&app=138&f=JPEG?w=504&h=500"})],-1)),me=d(()=>t("div",{class:"layout-lock-screen-login-box-name"},"Administrator",-1)),_e={class:"layout-lock-screen-login-box-value"},fe={class:"layout-lock-screen-login-icon"},pe=b({name:"layoutLockScreen"}),ve=b({...pe,setup(l){const f=g(),p=g(),x=X(),{themeConfig:s}=P(x),e=V({transparency:1,downClientY:0,moveDifference:0,isShowLoockLogin:!1,isFlags:!1,querySelectorEl:"",time:{hm:"",s:"",mdq:""},setIntervalTime:0,isShowLockScreen:!1,isShowLockScreenIntervalTime:0,lockScreenPassword:""}),D=o=>{e.isFlags=!0,e.downClientY=o.clientY},I=o=>{e.isFlags=!0,e.downClientY=o.touches[0].clientY},C=o=>{e.moveDifference=o.clientY-e.downClientY,v()},M=o=>{e.moveDifference=o.touches[0].clientY-e.downClientY,v()},v=()=>{if(e.isFlags){const o=e.querySelectorEl,i=e.transparency-=1/200;if(e.moveDifference>=0)return!1;o.setAttribute("style",`top:${e.moveDifference}px;cursor:pointer;opacity:${i};`),e.moveDifference<-400&&(o.setAttribute("style",`top:${-o.clientHeight}px;cursor:pointer;transition:all 0.3s ease;`),e.moveDifference=-o.clientHeight,setTimeout(()=>{var c;o&&((c=o.parentNode)==null||c.removeChild(o))},300)),e.moveDifference===-o.clientHeight&&(e.isShowLoockLogin=!0,p.value.focus())}},h=()=>{e.isFlags=!1,e.transparency=1,e.moveDifference>=-400&&e.querySelectorEl.setAttribute("style","top:0px;opacity:1;transition:all 0.3s ease;")},E=()=>{U(()=>{e.querySelectorEl=f.value})},k=()=>{e.time.hm=_(new Date,"HH:MM"),e.time.s=_(new Date,"SS"),e.time.mdq=_(new Date,"mm月dd日，WWW")},Y=()=>{k(),e.setIntervalTime=window.setInterval(()=>{k()},1e3)},q=()=>{s.value.isLockScreen?e.isShowLockScreenIntervalTime=window.setInterval(()=>{if(s.value.lockScreenTime<=1)return e.isShowLockScreen=!0,S(),!1;s.value.lockScreenTime--},1e3):clearInterval(e.isShowLockScreenIntervalTime)},S=()=>{s.value.isDrawer=!1,Q.set("themeConfig",s.value)},y=()=>{s.value.isLockScreen=!1,s.value.lockScreenTime=30,S()};return H(()=>{E(),Y(),q()}),$(()=>{window.clearInterval(e.setIntervalTime),window.clearInterval(e.isShowLockScreenIntervalTime)}),(o,i)=>{const c=a("SvgIcon"),A=a("ele-Right"),R=a("el-icon"),z=a("el-button"),F=a("el-input");return T((B(),N("div",null,[ee,t("div",{class:G(["layout-lock-screen-img",{"layout-lock-screen-filter":e.isShowLoockLogin}])},null,2),t("div",oe,[t("div",{class:"layout-lock-screen-date",ref_key:"layoutLockScreenDateRef",ref:f,onMousedown:D,onMousemove:C,onMouseup:h,onTouchstart:r(I,["stop"]),onTouchmove:r(M,["stop"]),onTouchend:r(h,["stop"])},[t("div",ne,[t("div",se,[K(m(e.time.hm),1),t("span",ce,m(e.time.s),1)]),t("div",ie,m(e.time.mdq),1)]),t("div",ae,[n(c,{name:"ele-Top"}),le])],40,te),n(J,{name:"el-zoom-in-center"},{default:u(()=>[T(t("div",re,[t("div",ue,[de,me,t("div",_e,[n(F,{placeholder:"请输入密码",ref_key:"layoutLockScreenInputRef",ref:p,modelValue:e.lockScreenPassword,"onUpdate:modelValue":i[0]||(i[0]=w=>e.lockScreenPassword=w),onKeyup:i[1]||(i[1]=W(r(w=>y(),["stop"]),["enter","native"]))},{append:u(()=>[n(z,{onClick:y},{default:u(()=>[n(R,{class:"el-input__icon"},{default:u(()=>[n(A)]),_:1})]),_:1})]),_:1},8,["modelValue"])])]),t("div",fe,[n(c,{name:"ele-Microphone",size:20}),n(c,{name:"ele-AlarmClock",size:20}),n(c,{name:"ele-SwitchButton",size:20})])],512),[[L,e.isShowLoockLogin]])]),_:1})])],512)),[[L,e.isShowLockScreen]])}}});const ge=Z(ve,[["__scopeId","data-v-a2ad8bfb"]]);export{ge as default};