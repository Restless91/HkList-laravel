import{b as w,Z,_ as H,r as _,e as C,c as E,m as a,k as t,s as m,w as g,E as M,x as L,y as K,V as O,A as Q,z as P,J as W,v as R,o as X,j as Y,q as A,t as $,$ as z,B as q,F as h,M as ee,O as te,a0 as ae}from"./.pnpm-Mf6j6NBF.js";import{i as U}from"./index-CtsYjQAc.js";import{_ as le}from"./_plugin-vue_export-helper-DlAUqK2U.js";const oe=n=>U.post("/admin/group",n),ne=n=>U.get(`/admin/group?page=${n.page}&size=${n.size}`),ue=n=>U.patch(`/admin/group/${n.id}`,n),se=n=>U.delete("/admin/group",{data:{group_ids:[n.id]}}),de=n=>U.delete("/admin/group",{data:{group_ids:n}}),ie=w({__name:"AddGroup",props:{modelValue:{},modelModifiers:{}},emits:Z(["getGroups"],["update:modelValue"]),setup(n,{emit:i}){const b=i,v=H(n,"modelValue"),y=_(!1),s=_({name:"",count:0,size:0}),r=_(null),x={name:[{required:!0,message:"请输入组名",trigger:"blur"}],count:[{required:!0,message:"请输入可解析个数",trigger:"blur"}],size:[{required:!0,message:"请输入可解析大小",trigger:"blur"}]},S=async V=>{if(!(!V||!await V.validate()))try{y.value=!0,await oe(s.value),M.success("添加成功")}finally{y.value=!1}},F=V=>{b("getGroups"),V()},B=()=>{v.value=!1,b("getGroups")};return(V,u)=>{const G=L,k=K,l=O,o=Q,c=P,p=W,D=R;return C(),E(p,{title:"添加用户组",width:"60%",modelValue:v.value,"onUpdate:modelValue":u[5]||(u[5]=d=>v.value=d),"before-close":F},{footer:a(()=>[t(c,{type:"info",onClick:u[3]||(u[3]=d=>B())},{default:a(()=>[m("取消")]),_:1}),t(c,{type:"primary",onClick:u[4]||(u[4]=d=>S(r.value))},{default:a(()=>[m("添加")]),_:1})]),default:a(()=>[g((C(),E(o,{ref_key:"addGroupFormRef",ref:r,model:s.value,rules:x,"label-width":"auto"},{default:a(()=>[t(k,{label:"组名",prop:"name"},{default:a(()=>[t(G,{modelValue:s.value.name,"onUpdate:modelValue":u[0]||(u[0]=d=>s.value.name=d)},null,8,["modelValue"])]),_:1}),t(k,{label:"可解析个数",prop:"count"},{default:a(()=>[t(l,{modelValue:s.value.count,"onUpdate:modelValue":u[1]||(u[1]=d=>s.value.count=d)},null,8,["modelValue"])]),_:1}),t(k,{label:"可解析大小",prop:"size"},{default:a(()=>[t(l,{modelValue:s.value.size,"onUpdate:modelValue":u[2]||(u[2]=d=>s.value.size=d)},null,8,["modelValue"])]),_:1})]),_:1},8,["model"])),[[D,y.value]])]),_:1},8,["modelValue"])}}}),re=w({__name:"GroupManagement",setup(n){const i=_(!1),b=_(15),v=_(1),y=_(),s=_([]),r=async()=>{try{i.value=!0;const l=await ne({page:v.value,size:b.value});y.value=l.data}finally{i.value=!1}},x=async l=>{l.edit=!(l.edit??!1)},S=async l=>{l.edit=!(l.edit??!0),await F(l)},F=async l=>{try{i.value=!0,await ue(l),M.success("修改用户组成功")}finally{i.value=!1,await r()}},B=async l=>{try{i.value=!0,await se(l),M.success("删除用户组成功")}finally{i.value=!1,await r()}},V=async()=>{try{i.value=!0;const l=s.value.map(o=>o.id);await de(l),M.success("批量删除用户组成功")}finally{i.value=!1,await r()}},u=l=>s.value=l;X(r);const G=_(!1),k=()=>G.value=!G.value;return(l,o)=>{var I,N;const c=P,p=ee,D=L,d=O,T=te,j=ae,J=R;return C(),Y(h,null,[t(ie,{onGetGroups:r,modelValue:G.value,"onUpdate:modelValue":o[0]||(o[0]=e=>G.value=e)},null,8,["modelValue"]),t(c,{type:"primary",onClick:o[1]||(o[1]=e=>r())},{default:a(()=>[m("刷新列表")]),_:1}),t(c,{type:"primary",onClick:o[2]||(o[2]=e=>k())},{default:a(()=>[m("添加用户组")]),_:1}),t(c,{type:"danger",disabled:s.value.length<=0,onClick:o[3]||(o[3]=e=>V())},{default:a(()=>[m(" 批量删除 ")]),_:1},8,["disabled"]),g((C(),E(T,{data:((I=y.value)==null?void 0:I.data)??[],border:"","show-overflow-tooltip":"",class:"table",onSelectionChange:u},{default:a(()=>[t(p,{type:"selection",width:"40"}),t(p,{prop:"id",label:"ID"}),t(p,{prop:"name",label:"组名"},{default:a(({row:e})=>[g(A("span",null,$(e.name),513),[[z,!e.edit]]),g(t(D,{modelValue:e.name,"onUpdate:modelValue":f=>e.name=f},null,8,["modelValue","onUpdate:modelValue"]),[[z,e.edit]])]),_:1}),t(p,{prop:"count",label:"可解析次数"},{default:a(({row:e})=>[g(A("span",null,$(e.count),513),[[z,!e.edit]]),g(t(d,{modelValue:e.count,"onUpdate:modelValue":f=>e.count=f},null,8,["modelValue","onUpdate:modelValue"]),[[z,e.edit]])]),_:1}),t(p,{prop:"size",label:"可解析大小"},{default:a(({row:e})=>[g(A("span",null,$(e.size),513),[[z,!e.edit]]),g(t(d,{modelValue:e.size,"onUpdate:modelValue":f=>e.size=f},null,8,["modelValue","onUpdate:modelValue"]),[[z,e.edit]])]),_:1}),t(p,{prop:"created_at",label:"创建时间"},{default:a(({row:e})=>[m($(new Date(e.created_at).toLocaleString()),1)]),_:1}),t(p,{prop:"updated_at",label:"更新时间"},{default:a(({row:e})=>[m($(new Date(e.updated_at).toLocaleString()),1)]),_:1}),t(p,{width:"150",label:"操作",fixed:"right"},{default:a(({row:e})=>[e.edit?q("",!0):(C(),E(c,{key:0,size:"small",type:"primary",onClick:f=>x(e)},{default:a(()=>[m(" 编辑 ")]),_:2},1032,["onClick"])),e.edit?(C(),E(c,{key:1,size:"small",type:"primary",onClick:f=>S(e)},{default:a(()=>[m(" 保存 ")]),_:2},1032,["onClick"])):q("",!0),t(c,{size:"small",type:"danger",onClick:f=>B(e)},{default:a(()=>[m("删除")]),_:2},1032,["onClick"])]),_:1})]),_:1},8,["data"])),[[J,i.value]]),t(j,{"current-page":v.value,"onUpdate:currentPage":o[4]||(o[4]=e=>v.value=e),"page-size":b.value,"onUpdate:pageSize":o[5]||(o[5]=e=>b.value=e),"page-sizes":[15,30,50,100],total:((N=y.value)==null?void 0:N.total)??100,layout:"sizes, prev, pager, next",onSizeChange:r,onCurrentChange:r},null,8,["current-page","page-size","total"])],64)}}}),_e=le(re,[["__scopeId","data-v-0ec54341"]]);export{_e as default};
