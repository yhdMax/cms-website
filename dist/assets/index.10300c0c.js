import{j as r,aH as f,K as h,a9 as s,k as N,l as v,m as t,E as a,y as l,C as o,D as y}from"./vue.09b0b6fd.js";import{az as d}from"./index.c421c646.js";import"./index.cd2848f1.js";const b={class:"layout-padding"},I={class:"layout-padding-auto layout-padding-view"},x={class:"flex-margin",style:{width:"400px"}},k=t("div",null,"1、设置非国际化：格式：tagsViewName=xxx",-1),z=t("br",null,null,-1),C=t("div",null,'2、设置国际化：格式：tagsViewName=JSON.stringify({"zh-cn":"测试用","en":"test+page","zh-tw":"測試用"})',-1),D=t("br",null,null,-1),S=t("div",null,"3、设置国际化后，去顶栏切换语言查看演示效果",-1),B=t("br",null,null,-1),E=t("div",null,[o(" 4、 "),t("a",{href:"https://gitee.com/q7but",target:"_black"},"感谢@q7but"),o("、 "),t("a",{href:"https://gitee.com/lyt-top/vue-next-admin/pulls/22/files",target:"_black"},"!22 add 添加自定义 tagVIewName 拓展,支持国际化")],-1),T=r({name:"paramsDynamic"}),G=r({...T,setup(q){const _=f(),e=h({value:"",tagsViewName:"",tagsViewNameIsI18n:!1}),g=()=>{if(!e.tagsViewName)return d.warning("动态路由tagsViewName为必填，因为路由配置了");if(!e.value)return d.warning("路由参数id值为必填");_.push({name:"paramsDynamicDetails",params:{t:"vue-next-admin",id:e.value,tagsViewName:e.tagsViewName}}),e.value=""},p=()=>{e.tagsViewNameIsI18n=!e.tagsViewNameIsI18n,e.tagsViewNameIsI18n?e.tagsViewName=JSON.stringify({"zh-cn":"我是动态路由",en:"Im dynamic routing","zh-tw":"我是動態路由"}):e.tagsViewName="我是动态路由测试tagsViewName(非国际化)"};return(J,n)=>{const w=s("el-alert"),c=s("el-input"),m=s("SvgIcon"),u=s("el-button"),V=s("el-result");return N(),v("div",b,[t("div",I,[t("div",x,[a(V,{icon:"warning",title:"动态路由",subTitle:"可 `开启 TagsView 共用` 进行单标签测试"},{extra:l(()=>[a(w,{type:"success",closable:!1,class:"mb30"},{default:l(()=>[k,z,C,D,S,B,E]),_:1}),a(c,{modelValue:e.tagsViewName,"onUpdate:modelValue":n[0]||(n[0]=i=>e.tagsViewName=i),placeholder:"请输入tagsView 名称",clearable:"",class:"mb15",style:{width:"400px"}},null,8,["modelValue"]),a(c,{modelValue:e.value,"onUpdate:modelValue":n[1]||(n[1]=i=>e.value=i),placeholder:"请输入路由参数id值",clearable:"",style:{width:"400px"}},null,8,["modelValue"]),a(u,{type:"primary",size:"default",class:"mt15",onClick:g},{default:l(()=>[a(m,{name:"iconfont icon-dongtai"}),o(" 动态路由传参 ")]),_:1}),a(u,{type:"primary",size:"default",class:"mt15",onClick:p},{default:l(()=>[a(m,{name:"iconfont icon-fuhao-zhongwen"}),o(" "+y(e.tagsViewNameIsI18n?"普通的演示":"国际化演示"),1)]),_:1})]),_:1})])])])}}});export{G as default};
