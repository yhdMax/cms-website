import{_ as C}from"./preload-helper.101896b7.js";import{j as A,ap as b,r as D,ar as m,K as q,a as L,d as z,w as g,a9 as S,z as I,G as N,u as n,k as F,l as O,E as f,y as w,x as P,B as j,q as H}from"./vue.09b0b6fd.js";import{p as $}from"./index.b0527c30.js";import{u as G}from"./routesList.03d4b3dd.js";import{u as K}from"./themeConfig.8c3a6188.js";import{u as J}from"./tagsViewRoutes.3552ab17.js";import{e as a}from"./mitt.7f99bbc0.js";import"./storage.6b2e7cd0.js";const Q={class:"h100"},U=A({name:"layoutAside"}),ne=A({...U,setup(X){const R=b(()=>C(()=>import("./index.f21d4cf9.js"),["assets/index.f21d4cf9.js","assets/vue.09b0b6fd.js","assets/themeConfig.8c3a6188.js","assets/logo-mini.de45931e.js","assets/_plugin-vue_export-helper.c27b6911.js","assets/index.880bac10.css"])),T=b(()=>C(()=>import("./vertical.96da5476.js"),["assets/vertical.96da5476.js","assets/preload-helper.101896b7.js","assets/vue.09b0b6fd.js","assets/themeConfig.8c3a6188.js","assets/other.025d7c4b.js","assets/index.cd2848f1.js","assets/index.267886fd.js","assets/_commonjsHelpers.042e6b4d.js","assets/index.b0527c30.js","assets/keepAliveNames.f963730e.js","assets/routesList.03d4b3dd.js","assets/storage.6b2e7cd0.js","assets/userInfo.1848b259.js","assets/loading.30ca9f2d.js","assets/loading.70fbfd85.css","assets/tagsViewRoutes.3552ab17.js","assets/index.730cd2ba.js","assets/index.c421c646.js","assets/index.8b89e2e0.css","assets/index.e5604ec3.js","assets/vue-i18n.cjs.d84b7b96.js","assets/toolsValidate.7cb139e2.js"])),r=D(),p=G(),B=K(),E=J(),{routesList:M}=m(p),{themeConfig:i}=m(B),{isTagsViewCurrenFull:V}=m(E),l=q({menuList:[],clientWidth:0}),W=L(()=>{const{layout:e,isCollapse:t,menuBar:s}=i.value,o=["#FFFFFF","#FFF","#fff","#ffffff"].includes(s)?"layout-el-aside-br-color":"";if(l.clientWidth<=1e3)if(t){document.body.setAttribute("class","el-popup-parent--hidden");const x=document.querySelector(".layout-container"),d=document.createElement("div");return d.setAttribute("class","layout-aside-mobile-mode"),x.appendChild(d),d.addEventListener("click",u),[o,"layout-aside-mobile","layout-aside-mobile-open"]}else return u(),[o,"layout-aside-mobile","layout-aside-mobile-close"];else return e==="columns"?t?[o,"layout-aside-pc-1"]:[o,"layout-aside-pc-220"]:t?[o,"layout-aside-pc-64"]:[o,"layout-aside-pc-220"]}),k=L(()=>{let{layout:e,isShowLogo:t}=i.value;return t&&e==="defaults"||t&&e==="columns"}),u=()=>{const e=document.querySelector(".layout-aside-mobile-mode");e==null||e.setAttribute("style","animation: error-img-two 0.3s"),setTimeout(()=>{var s;(s=e==null?void 0:e.parentNode)==null||s.removeChild(e)},300),document.body.clientWidth<1e3&&(i.value.isCollapse=!1),document.body.setAttribute("class","")},c=()=>{if(i.value.layout==="columns")return!1;l.menuList=y(M.value)},y=e=>e.filter(t=>{var s;return!((s=t.meta)!=null&&s.isHide)}).map(t=>(t=Object.assign({},t),t.children&&(t.children=y(t.children)),t)),h=e=>{l.clientWidth=e},_=e=>{let{layout:t}=i.value;if(t!=="columns")return!1;e||a.emit("restoreDefault"),p.setColumnsMenuHover(e)};return z(()=>{h(document.body.clientWidth),c(),a.on("setSendColumnsChildren",e=>{l.menuList=e.children}),a.on("setSendClassicChildren",e=>{let{layout:t,isClassicSplitMenu:s}=i.value;t==="classic"&&s&&(l.menuList=[],l.menuList=e.children)}),a.on("getBreadcrumbIndexSetFilterRoutes",()=>{c()}),a.on("layoutMobileResize",e=>{h(e.clientWidth),u()})}),g(i.value,e=>{e.isShowLogoChange!==e.isShowLogo&&r.value&&r.value.update()}),g($.state,e=>{let{layout:t,isClassicSplitMenu:s}=e.themeConfig.themeConfig;if(t==="classic"&&s)return!1;c()},{deep:!0}),(e,t)=>{const s=S("el-scrollbar"),v=S("el-aside");return I((F(),O("div",Q,[f(v,{class:H(["layout-aside",n(W)])},{default:w(()=>[n(k)?(F(),P(n(R),{key:0})):j("",!0),f(s,{class:"flex-auto",ref_key:"layoutAsideScrollbarRef",ref:r,onMouseenter:t[0]||(t[0]=o=>_(!0)),onMouseleave:t[1]||(t[1]=o=>_(!1))},{default:w(()=>[f(n(T),{menuList:l.menuList},null,8,["menuList"])]),_:1},512)]),_:1},8,["class"])],512)),[[N,!n(V)]])}}});export{ne as default};
