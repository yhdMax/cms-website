import{j as P,ar as q,aq as R,aH as U,K as $,a as B,a9 as n,al as D,k as _,x as f,y as e,E as o,m as y,q as z,z as v,C as E,D as j}from"./vue.09b0b6fd.js";import{u as A}from"./vue-i18n.cjs.d84b7b96.js";import{S as N,a as M}from"./storage.6b2e7cd0.js";import{u as O}from"./themeConfig.8c3a6188.js";import{i as H,b as J}from"./index.267886fd.js";import{a as K}from"./formatTime.29ac8c52.js";import{N as L}from"./loading.30ca9f2d.js";import{az as C}from"./index.c421c646.js";import{_ as G}from"./_plugin-vue_export-helper.c27b6911.js";import"./_commonjsHelpers.042e6b4d.js";import"./index.b0527c30.js";import"./keepAliveNames.f963730e.js";import"./routesList.03d4b3dd.js";import"./preload-helper.101896b7.js";import"./userInfo.1848b259.js";import"./tagsViewRoutes.3552ab17.js";import"./index.730cd2ba.js";import"./index.cd2848f1.js";const Q=P({name:"loginAccount"}),W=P({...Q,setup(X){const{t:S}=A(),V=O(),{themeConfig:I}=q(V),m=R(),g=U(),t=$({isShowPassword:!1,ruleForm:{userName:"admin",password:"123456",code:"1234"},loading:{signIn:!1}}),b=B(()=>K(new Date)),k=async()=>{if(t.loading.signIn=!0,N.set("token",Math.random().toString(36).substr(0)),M.set("userName",t.ruleForm.userName),I.value.isRequestRoutes){const a=await J();w(a)}else{const a=await H();w(a)}},w=a=>{var s,u,l,r;if(a)C.warning("抱歉，您没有登录权限"),N.clear();else{let i=b.value;(s=m.query)!=null&&s.redirect?g.push({path:(u=m.query)==null?void 0:u.redirect,query:Object.keys((l=m.query)==null?void 0:l.params).length>0?JSON.parse((r=m.query)==null?void 0:r.params):""}):g.push("/");const p=S("message.signInText");C.success(`${i}，${p}`),L.start()}t.loading.signIn=!1};return(a,s)=>{const u=n("ele-User"),l=n("el-icon"),r=n("el-input"),i=n("el-form-item"),p=n("ele-Unlock"),F=n("ele-Position"),d=n("el-col"),h=n("el-button"),T=n("el-form"),x=D("waves");return _(),f(T,{size:"large",class:"login-content-form"},{default:e(()=>[o(i,{class:"login-animation1"},{default:e(()=>[o(r,{text:"",placeholder:a.$t("message.account.accountPlaceholder1"),modelValue:t.ruleForm.userName,"onUpdate:modelValue":s[0]||(s[0]=c=>t.ruleForm.userName=c),clearable:"",autocomplete:"off"},{prefix:e(()=>[o(l,{class:"el-input__icon"},{default:e(()=>[o(u)]),_:1})]),_:1},8,["placeholder","modelValue"])]),_:1}),o(i,{class:"login-animation2"},{default:e(()=>[o(r,{type:t.isShowPassword?"text":"password",placeholder:a.$t("message.account.accountPlaceholder2"),modelValue:t.ruleForm.password,"onUpdate:modelValue":s[2]||(s[2]=c=>t.ruleForm.password=c),autocomplete:"off"},{prefix:e(()=>[o(l,{class:"el-input__icon"},{default:e(()=>[o(p)]),_:1})]),suffix:e(()=>[y("i",{class:z(["iconfont el-input__icon login-content-password",t.isShowPassword?"icon-yincangmima":"icon-xianshimima"]),onClick:s[1]||(s[1]=c=>t.isShowPassword=!t.isShowPassword)},null,2)]),_:1},8,["type","placeholder","modelValue"])]),_:1}),o(i,{class:"login-animation3"},{default:e(()=>[o(d,{span:15},{default:e(()=>[o(r,{text:"",maxlength:"4",placeholder:a.$t("message.account.accountPlaceholder3"),modelValue:t.ruleForm.code,"onUpdate:modelValue":s[3]||(s[3]=c=>t.ruleForm.code=c),clearable:"",autocomplete:"off"},{prefix:e(()=>[o(l,{class:"el-input__icon"},{default:e(()=>[o(F)]),_:1})]),_:1},8,["placeholder","modelValue"])]),_:1}),o(d,{span:1}),o(d,{span:8},{default:e(()=>[v((_(),f(h,{class:"login-content-code"},{default:e(()=>[E("1234")]),_:1})),[[x]])]),_:1})]),_:1}),o(i,{class:"login-animation4"},{default:e(()=>[v((_(),f(h,{type:"primary",class:"login-content-submit",round:"",onClick:k,loading:t.loading.signIn},{default:e(()=>[y("span",null,j(a.$t("message.account.accountBtnText")),1)]),_:1},8,["loading"])),[[x]])]),_:1})]),_:1})}}});const ge=G(W,[["__scopeId","data-v-97b1a253"]]);export{ge as default};