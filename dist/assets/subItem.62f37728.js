import{j as u,a as x,a9 as o,k as t,l as i,Z as b,F as s,x as c,y as a,E as m,m as l,D as p,$ as g,C as L,u as $}from"./vue.09b0b6fd.js";import{o as B}from"./other.025d7c4b.js";import"./preload-helper.101896b7.js";import"./index.cd2848f1.js";import"./index.267886fd.js";import"./_commonjsHelpers.042e6b4d.js";import"./index.b0527c30.js";import"./keepAliveNames.f963730e.js";import"./routesList.03d4b3dd.js";import"./themeConfig.8c3a6188.js";import"./storage.6b2e7cd0.js";import"./userInfo.1848b259.js";import"./loading.30ca9f2d.js";import"./tagsViewRoutes.3552ab17.js";import"./index.730cd2ba.js";import"./index.c421c646.js";import"./index.e5604ec3.js";import"./vue-i18n.cjs.d84b7b96.js";import"./toolsValidate.7cb139e2.js";const I=["onClick"],S=u({name:"navMenuSubItem"}),U=u({...S,props:{chil:{type:Array,default:()=>[]}},setup(_){const d=_,h=x(()=>d.chil),k=n=>{B.handleOpenLink(n)};return(n,w)=>{const r=o("SvgIcon"),f=o("sub-item",!0),y=o("el-sub-menu"),C=o("el-menu-item");return t(!0),i(s,null,b($(h),e=>(t(),i(s,null,[e.children&&e.children.length>0?(t(),c(y,{index:e.path,key:e.path},{title:a(()=>[m(r,{name:e.meta.icon},null,8,["name"]),l("span",null,p(n.$t(e.meta.title)),1)]),default:a(()=>[m(f,{chil:e.children},null,8,["chil"])]),_:2},1032,["index"])):(t(),c(C,{index:e.path,key:e.path},{default:a(()=>[!e.meta.isLink||e.meta.isLink&&e.meta.isIframe?(t(),i(s,{key:0},[m(r,{name:e.meta.icon},null,8,["name"]),l("span",null,p(n.$t(e.meta.title)),1)],64)):(t(),i("a",{key:1,class:"w100",onClick:g(N=>k(e),["prevent"])},[m(r,{name:e.meta.icon},null,8,["name"]),L(" "+p(n.$t(e.meta.title)),1)],8,I))]),_:2},1032,["index"]))],64))),256)}}});export{U as default};
