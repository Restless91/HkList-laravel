import{b as P,_ as W,$ as X,r as _,e as g,c as I,m as t,k as a,x as p,w as C,j as T,F as G,Z as h,E as x,I as ee,J as ae,z as le,Y as J,y as Y,B as te,A as Z,O as ne,v as H,o as oe,q as A,t as E,a0 as z,C as R,u as de,S as ue,U as se,a1 as ie}from"./.pnpm-fc_Lr1wI.js";import{i as U}from"./index-CtYSmbnK.js";import{c as L}from"./copy-08SGvsTk.js";import{_ as pe}from"./_plugin-vue_export-helper-DlAUqK2U.js";const re=i=>U.post("/admin/inv_code",i),me=i=>U.post("/admin/inv_code/generate",i),ce=i=>U.get(`/admin/inv_code?page=${i.page}&size=${i.size}`),ve=i=>U.patch(`/admin/inv_code/${i.id}`,i),_e=i=>U.delete("/admin/inv_code",{data:{inv_code_ids:[i.id]}}),ge=i=>U.delete("/admin/inv_code",{data:{inv_code_ids:i}}),fe=P({__name:"AddInvCode",props:{modelValue:{},modelModifiers:{}},emits:W(["getInvCodes"],["update:modelValue"]),setup(i,{emit:m}){const k=m,V=X(i,"modelValue"),f=_(!1),l=_({type:"single",group_id:2,name:"",can_count:10}),c=_(null),D={group_id:[{required:!0,message:"请输入邀请码用户组ID",trigger:"blur"}],name:[{required:!0,message:"请输入邀请码名称",trigger:"blur"}],can_count:[{required:!0,message:"请输入可注册次数",trigger:"blur"}],count:[{required:!0,message:"请输入邀请码个数",trigger:"blur"}]},M=async b=>{if(!(!b||!await b.validate()))try{f.value=!0,l.value.type==="single"?await re({type:"single",name:l.value.name,can_count:l.value.can_count,group_id:l.value.group_id}):await me({type:"random",count:l.value.count,can_count:l.value.can_count,group_id:l.value.group_id}),x.success("添加成功")}finally{f.value=!1}},F=b=>{k("getInvCodes"),b()},j=()=>{V.value=!1,k("getInvCodes")};return(b,u)=>{const $=ee,B=ae,y=le,n=J,o=Y,s=te,r=Z,q=ne,S=H;return g(),I(q,{title:"添加邀请码",width:"60%",modelValue:V.value,"onUpdate:modelValue":u[7]||(u[7]=d=>V.value=d),"before-close":F},{footer:t(()=>[a(r,{type:"info",onClick:u[5]||(u[5]=d=>j())},{default:t(()=>[p("取消")]),_:1}),a(r,{type:"primary",onClick:u[6]||(u[6]=d=>M(c.value))},{default:t(()=>[p("添加")]),_:1})]),default:t(()=>[C((g(),I(s,{ref_key:"addInvCodeFormRef",ref:c,model:l.value,rules:D,"label-width":"auto"},{default:t(()=>[a(y,{label:"创建方式",prop:"type"},{default:t(()=>[a(B,{modelValue:l.value.type,"onUpdate:modelValue":u[0]||(u[0]=d=>l.value.type=d)},{default:t(()=>[(g(),T(G,null,h(["single","random"],d=>a($,{key:d,label:d,value:d},null,8,["label","value"])),64))]),_:1},8,["modelValue"])]),_:1}),a(y,{label:"可用次数",prop:"can_count"},{default:t(()=>[a(n,{modelValue:l.value.can_count,"onUpdate:modelValue":u[1]||(u[1]=d=>l.value.can_count=d)},null,8,["modelValue"])]),_:1}),a(y,{label:"用户组ID",prop:"group_id"},{default:t(()=>[a(n,{modelValue:l.value.group_id,"onUpdate:modelValue":u[2]||(u[2]=d=>l.value.group_id=d)},null,8,["modelValue"])]),_:1}),l.value.type==="single"?(g(),I(y,{key:0,label:"邀请码名称",prop:"name"},{default:t(()=>[a(o,{modelValue:l.value.name,"onUpdate:modelValue":u[3]||(u[3]=d=>l.value.name=d)},null,8,["modelValue"])]),_:1})):(g(),I(y,{key:1,label:"邀请码个数",prop:"count"},{default:t(()=>[a(n,{modelValue:l.value.count,"onUpdate:modelValue":u[4]||(u[4]=d=>l.value.count=d)},null,8,["modelValue"])]),_:1}))]),_:1},8,["model"])),[[S,f.value]])]),_:1},8,["modelValue"])}}}),ye=P({__name:"InvCodeManagement",setup(i){const m=_(!1),k=_(15),V=_(1),f=_(),l=_([]),c=async()=>{try{m.value=!0;const n=await ce({page:V.value,size:k.value});f.value=n.data}finally{m.value=!1}},D=async n=>{n.edit=!(n.edit??!1)},M=async n=>{n.edit=!(n.edit??!0),await F(n)},F=async n=>{try{m.value=!0,await ve(n),x.success("修改邀请码成功")}finally{m.value=!1,await c()}},j=async n=>{try{m.value=!0,await _e(n),x.success("删除邀请码成功")}finally{m.value=!1,await c()}},b=async()=>{try{m.value=!0;const n=l.value.map(o=>o.id);await ge(n),x.success("删除邀请码成功")}finally{m.value=!1,await c()}},u=n=>l.value=n;oe(c);const $=_(!1),B=()=>$.value=!$.value,y=(n=!0)=>{if(!n){L(l.value.map(s=>s.name).join(`
`));return}const o=l.value.map(s=>[s.name,s.group.count,s.group.size].join(" | "));o.unshift(["邀请码","可用次数","可下载量"].join(" | ")),L(o.join(`
`))};return(n,o)=>{var N,w,O;const s=Z,r=ue,q=Y,S=J,d=se,K=ie,Q=H;return g(),T(G,null,[a(fe,{onGetInvCodes:c,modelValue:$.value,"onUpdate:modelValue":o[0]||(o[0]=e=>$.value=e)},null,8,["modelValue"]),a(s,{type:"primary",onClick:o[1]||(o[1]=e=>c())},{default:t(()=>[p("刷新列表")]),_:1}),a(s,{type:"primary",onClick:o[2]||(o[2]=e=>B())},{default:t(()=>[p("添加邀请码")]),_:1}),a(s,{type:"primary",disabled:l.value.length<=0,onClick:o[3]||(o[3]=e=>y())},{default:t(()=>[p(" 批量复制 ")]),_:1},8,["disabled"]),a(s,{type:"primary",disabled:l.value.length<=0,onClick:o[4]||(o[4]=e=>y())},{default:t(()=>[p(" 批量复制(无格式) ")]),_:1},8,["disabled"]),a(s,{type:"danger",disabled:l.value.length<=0,onClick:o[5]||(o[5]=e=>b())},{default:t(()=>[p(" 批量删除 ")]),_:1},8,["disabled"]),C((g(),I(d,{data:((N=f.value)==null?void 0:N.data)??[],border:"","show-overflow-tooltip":"",class:"table",onSelectionChange:u},{default:t(()=>[a(r,{type:"selection",width:"40"}),a(r,{prop:"id",label:"ID"}),a(r,{prop:"name",label:"邀请码名称"},{default:t(({row:e})=>[C(A("span",null,E(e.name),513),[[z,!e.edit]]),C(a(q,{modelValue:e.name,"onUpdate:modelValue":v=>e.name=v},null,8,["modelValue","onUpdate:modelValue"]),[[z,e.edit]])]),_:1}),a(r,{prop:"group_id",label:"用户组ID"},{default:t(({row:e})=>[C(A("span",null,E(e.group_id),513),[[z,!e.edit]]),C(a(S,{modelValue:e.group_id,"onUpdate:modelValue":v=>e.group_id=v},null,8,["modelValue","onUpdate:modelValue"]),[[z,e.edit]])]),_:1}),a(r,{prop:"can_count",label:"可用次数"},{default:t(({row:e})=>[C(A("span",null,E(e.can_count),513),[[z,!e.edit]]),C(a(S,{modelValue:e.can_count,"onUpdate:modelValue":v=>e.can_count=v},null,8,["modelValue","onUpdate:modelValue"]),[[z,e.edit]])]),_:1}),a(r,{prop:"use_count",label:"已使用次数"}),a(r,{prop:"created_at",label:"创建时间"},{default:t(({row:e})=>[p(E(new Date(e.created_at).toLocaleString()),1)]),_:1}),a(r,{prop:"updated_at",label:"更新时间"},{default:t(({row:e})=>[p(E(new Date(e.updated_at).toLocaleString()),1)]),_:1}),a(r,{width:"200",label:"操作",fixed:"right"},{default:t(({row:e})=>[e.edit?R("",!0):(g(),I(s,{key:0,size:"small",type:"primary",onClick:v=>D(e)},{default:t(()=>[p(" 编辑 ")]),_:2},1032,["onClick"])),e.edit?(g(),I(s,{key:1,size:"small",type:"primary",onClick:v=>M(e)},{default:t(()=>[p(" 保存 ")]),_:2},1032,["onClick"])):R("",!0),a(s,{size:"small",type:"primary",onClick:v=>de(L)(e.name)},{default:t(()=>[p(" 复制 ")]),_:2},1032,["onClick"]),a(s,{size:"small",type:"danger",onClick:v=>j(e)},{default:t(()=>[p("删除")]),_:2},1032,["onClick"])]),_:1})]),_:1},8,["data"])),[[Q,m.value]]),a(K,{"current-page":V.value,"onUpdate:currentPage":o[6]||(o[6]=e=>V.value=e),"page-size":k.value,"onUpdate:pageSize":o[7]||(o[7]=e=>k.value=e),"page-sizes":[15,50,100,500,((w=f.value)==null?void 0:w.total)??100],total:((O=f.value)==null?void 0:O.total)??100,layout:"total, sizes, prev, pager, next, jumper",onSizeChange:c,onCurrentChange:c},null,8,["current-page","page-size","page-sizes","total"])],64)}}}),ke=pe(ye,[["__scopeId","data-v-3f8aea2f"]]);export{ke as default};