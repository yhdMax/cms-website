import{az as D}from"./index.c421c646.js";import{j as f,r as T,K as I,d as N,a9 as s,al as V,k as h,l as _,E as o,y as b,z as L,m as l,D as p,B,C as E,aE as z,aF as K}from"./vue.09b0b6fd.js";import{_ as M}from"./_plugin-vue_export-helper.c27b6911.js";import"./index.cd2848f1.js";const u=n=>(z("data-v-65050040"),n=n(),K(),n),P={class:"tree-container layout-pd"},R={class:"tree-head"},j={class:"tree-head-check"},F=u(()=>l("div",{class:"tree-head-one"},"商品 ID",-1)),U=u(()=>l("div",{style:{flex:"1",display:"flex"}},[l("div",{class:"tree-head-two"},"商品名称"),l("div",{class:"tree-head-three"},"描述")],-1)),q={class:"tree-custom-node"},G={style:{flex:"1"}},H={key:0,style:{flex:"1",display:"flex"}},J={style:{flex:"1"}},O={style:{flex:"1"}},Q=f({name:"pagesTree"}),W=f({...Q,setup(n){const t=T(),e=I({treeCheckAll:!1,treeLoading:!1,treeTableData:[],treeDefaultProps:{children:"children",label:"label"},treeSelArr:[],treeLength:0}),m=r=>{let a=0;r.map(c=>{c.children&&(a+=c.children.length)}),e.treeLength=a+r.length},g=()=>{e.treeCheckAll?t.value.setCheckedNodes(e.treeTableData):t.value.setCheckedKeys([])},v=()=>{e.treeSelArr=[],e.treeSelArr=t.value.getCheckedNodes(),e.treeSelArr.length==e.treeLength?e.treeCheckAll=!0:e.treeCheckAll=!1},k=()=>{if(t.value.getCheckedNodes().length<=0){D.warning("请选择元素");return}},S=()=>{e.treeTableData=[{id:1,label:"12987121",label1:"好滋好味鸡蛋仔",label2:"荷兰优质淡奶，奶香浓而不腻",isShow:!0,children:[{id:11,label:"一级 1-1",label1:"好滋好味鸡蛋仔",label2:"荷兰优质淡奶，奶香浓而不腻",isShow:!1},{id:12,label:"一级 1-2",label1:"好滋好味鸡蛋仔",label2:"荷兰优质淡奶，奶香浓而不腻",isShow:!1}]},{id:2,label:"12987122",label1:"好滋好味鸡蛋仔",label2:"荷兰优质淡奶，奶香浓而不腻",isShow:!0,children:[{id:21,label:"二级 2-1",label1:"好滋好味鸡蛋仔",label2:"荷兰优质淡奶，奶香浓而不腻",isShow:!1},{id:22,label:"二级 2-2",label1:"好滋好味鸡蛋仔",label2:"荷兰优质淡奶，奶香浓而不腻",isShow:!1}]},{id:3,label:"12987123",label1:"好滋好味鸡蛋仔",label2:"荷兰优质淡奶，奶香浓而不腻",isShow:!0,children:[{id:31,label:"二级 3-1",label1:"好滋好味鸡蛋仔",label2:"荷兰优质淡奶，奶香浓而不腻",isShow:!1},{id:32,label:"二级 3-2",label1:"好滋好味鸡蛋仔",label2:"荷兰优质淡奶，奶香浓而不腻",isShow:!1},{id:33,label:"二级 3-3",label1:"好滋好味鸡蛋仔",label2:"荷兰优质淡奶，奶香浓而不腻",isShow:!1}]}],m(e.treeTableData)};return N(()=>{S()}),(r,a)=>{const c=s("el-checkbox"),C=s("el-tree"),x=s("SvgIcon"),w=s("el-button"),y=s("el-card"),A=V("loading");return h(),_("div",P,[o(y,{shadow:"hover",header:"element plus Tree 树形控件改成表格"},{default:b(()=>[L((h(),_("div",null,[l("div",R,[l("div",j,[o(c,{modelValue:e.treeCheckAll,"onUpdate:modelValue":a[0]||(a[0]=d=>e.treeCheckAll=d),onChange:g},null,8,["modelValue"])]),F,U]),o(C,{data:e.treeTableData,"show-checkbox":"","node-key":"id",ref_key:"treeTableRef",ref:t,props:e.treeDefaultProps,onCheck:v},{default:b(({node:d,data:i})=>[l("span",q,[l("span",G,p(d.label),1),i.isShow?(h(),_("span",H,[l("span",J,p(i.label1),1),l("span",O,p(i.label2),1)])):B("",!0)])]),_:1},8,["data","props"])])),[[A,e.treeLoading]]),o(w,{onClick:k,class:"mt15",size:"default",type:"primary"},{default:b(()=>[o(x,{name:"iconfont icon-shuxingtu"}),E(" 选择元素 ")]),_:1})]),_:1})])}}});const ee=M(W,[["__scopeId","data-v-65050040"]]);export{ee as default};
