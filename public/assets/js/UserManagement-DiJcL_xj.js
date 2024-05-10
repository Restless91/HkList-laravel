import{b as R,Z as K,_ as Q,r as v,e as V,c as w,m as a,k as l,s as _,w as c,j as L,F as N,W as T,E as x,x as j,y as h,X as G,Y as J,A as ee,z as W,J as le,v as X,o as ae,q as S,t as z,$ as U,B as P,M as te,O as se,a0 as oe}from"./.pnpm-Mf6j6NBF.js";import{i as M}from"./index-CtsYjQAc.js";import{_ as ne}from"./_plugin-vue_export-helper-DlAUqK2U.js";const de=d=>M.post("/admin/user",d),ue=d=>M.get(`/admin/user?page=${d.page}&size=${d.size}`),re=d=>M.patch(`/admin/user/${d.id}`,d),ie=d=>M.delete("/admin/user",{data:{user_ids:[d.id]}}),pe=d=>M.delete("/admin/user/switch",{data:{user_ids:d}}),me=R({__name:"AddUser",props:{modelValue:{},modelModifiers:{}},emits:K(["getUsers"],["update:modelValue"]),setup(d,{emit:p}){const C=p,y=Q(d,"modelValue"),b=v(!1),u=v({username:"",password:"",role:"user",group_id:void 0}),m=v(null),D={username:[{required:!0,message:"请输入账户用户名",trigger:"blur"}],password:[{required:!0,message:"请输入账户密码",trigger:"blur"}]},F=async k=>{if(!(!k||!await k.validate()))try{b.value=!0,await de(u.value),x.success("添加成功")}finally{b.value=!1}},I=k=>{C("getUsers"),k()},B=()=>{y.value=!1,C("getUsers")};return(k,o)=>{const f=j,$=h,t=G,n=J,g=ee,i=W,E=le,A=X;return V(),w(E,{title:"添加用户",width:"60%",modelValue:y.value,"onUpdate:modelValue":o[6]||(o[6]=s=>y.value=s),"before-close":I},{footer:a(()=>[l(i,{type:"info",onClick:o[4]||(o[4]=s=>B())},{default:a(()=>[_("取消")]),_:1}),l(i,{type:"primary",onClick:o[5]||(o[5]=s=>F(m.value))},{default:a(()=>[_("添加")]),_:1})]),default:a(()=>[c((V(),w(g,{ref_key:"addUserFormRef",ref:m,model:u.value,rules:D,"label-width":"auto"},{default:a(()=>[l($,{label:"用户名",prop:"username"},{default:a(()=>[l(f,{modelValue:u.value.username,"onUpdate:modelValue":o[0]||(o[0]=s=>u.value.username=s)},null,8,["modelValue"])]),_:1}),l($,{label:"密码",prop:"password"},{default:a(()=>[l(f,{modelValue:u.value.password,"onUpdate:modelValue":o[1]||(o[1]=s=>u.value.password=s)},null,8,["modelValue"])]),_:1}),l($,{label:"权限",prop:"role"},{default:a(()=>[l(n,{modelValue:u.value.role,"onUpdate:modelValue":o[2]||(o[2]=s=>u.value.role=s)},{default:a(()=>[(V(),L(N,null,T(["user","admin"],s=>l(t,{key:s,label:s,value:s},null,8,["label","value"])),64))]),_:1},8,["modelValue"])]),_:1}),l($,{label:"用户组ID",prop:"group_id"},{default:a(()=>[l(f,{modelValue:u.value.group_id,"onUpdate:modelValue":o[3]||(o[3]=s=>u.value.group_id=s)},null,8,["modelValue"])]),_:1})]),_:1},8,["model"])),[[A,b.value]])]),_:1},8,["modelValue"])}}}),ce=R({__name:"UserManagement",setup(d){const p=v(!1),C=v(15),y=v(1),b=v(),u=v([]),m=async()=>{try{p.value=!0;const t=await ue({page:y.value,size:C.value});b.value=t.data}finally{p.value=!1}},D=async t=>{t.edit=!(t.edit??!1)},F=async t=>{t.edit=!(t.edit??!0),await I(t)},I=async t=>{try{p.value=!0,await re(t),x.success("修改用户成功")}finally{p.value=!1,await m()}},B=async t=>{try{p.value=!0,await ie(t),x.success("删除用户成功")}finally{p.value=!1,await m()}},k=async()=>{try{p.value=!0;const t=u.value.map(n=>n.id);await pe(t),x.success("批量删除用户成功")}finally{p.value=!1,await m()}},o=t=>u.value=t;ae(m);const f=v(!1),$=()=>f.value=!f.value;return(t,n)=>{var O,q;const g=W,i=te,E=j,A=G,s=J,Y=se,Z=oe,H=X;return V(),L(N,null,[l(me,{onGetUsers:m,modelValue:f.value,"onUpdate:modelValue":n[0]||(n[0]=e=>f.value=e)},null,8,["modelValue"]),l(g,{type:"primary",onClick:n[1]||(n[1]=e=>m())},{default:a(()=>[_("刷新列表")]),_:1}),l(g,{type:"primary",onClick:n[2]||(n[2]=e=>$())},{default:a(()=>[_("添加用户")]),_:1}),l(g,{type:"danger",disabled:u.value.length<=0,onClick:n[3]||(n[3]=e=>k())},{default:a(()=>[_(" 批量删除 ")]),_:1},8,["disabled"]),c((V(),w(Y,{data:((O=b.value)==null?void 0:O.data)??[],border:"","show-overflow-tooltip":"",class:"table",onSelectionChange:o},{default:a(()=>[l(i,{type:"selection",width:"40"}),l(i,{prop:"id",label:"ID"}),l(i,{prop:"group_id",label:"用户组ID"},{default:a(({row:e})=>[c(S("span",null,z(e.group_id),513),[[U,!e.edit]]),c(l(E,{modelValue:e.group_id,"onUpdate:modelValue":r=>e.group_id=r},null,8,["modelValue","onUpdate:modelValue"]),[[U,e.edit]])]),_:1}),l(i,{prop:"inv_code_id",label:"邀请码ID"}),l(i,{prop:"username",label:"用户名"},{default:a(({row:e})=>[c(S("span",null,z(e.username),513),[[U,!e.edit]]),c(l(E,{modelValue:e.username,"onUpdate:modelValue":r=>e.username=r},null,8,["modelValue","onUpdate:modelValue"]),[[U,e.edit]])]),_:1}),l(i,{prop:"password",label:"密码"},{default:a(({row:e})=>[c(S("span",null,z(e.password),513),[[U,!e.edit]]),c(l(E,{modelValue:e.password,"onUpdate:modelValue":r=>e.password=r},null,8,["modelValue","onUpdate:modelValue"]),[[U,e.edit]])]),_:1}),l(i,{prop:"role",label:"权限"},{default:a(({row:e})=>[c(S("span",null,z(e.role),513),[[U,!e.edit]]),c(l(s,{modelValue:e.role,"onUpdate:modelValue":r=>e.role=r},{default:a(()=>[(V(),L(N,null,T(["user","admin"],r=>l(A,{key:r,label:r,value:r},null,8,["label","value"])),64))]),_:2},1032,["modelValue","onUpdate:modelValue"]),[[U,e.edit]])]),_:1}),l(i,{prop:"created_at",label:"创建时间"},{default:a(({row:e})=>[_(z(new Date(e.created_at).toLocaleString()),1)]),_:1}),l(i,{prop:"updated_at",label:"更新时间"},{default:a(({row:e})=>[_(z(new Date(e.updated_at).toLocaleString()),1)]),_:1}),l(i,{width:"150",label:"操作",fixed:"right"},{default:a(({row:e})=>[e.edit?P("",!0):(V(),w(g,{key:0,size:"small",type:"primary",onClick:r=>D(e)},{default:a(()=>[_(" 编辑 ")]),_:2},1032,["onClick"])),e.edit?(V(),w(g,{key:1,size:"small",type:"primary",onClick:r=>F(e)},{default:a(()=>[_(" 保存 ")]),_:2},1032,["onClick"])):P("",!0),l(g,{size:"small",type:"danger",onClick:r=>B(e)},{default:a(()=>[_("删除")]),_:2},1032,["onClick"])]),_:1})]),_:1},8,["data"])),[[H,p.value]]),l(Z,{"current-page":y.value,"onUpdate:currentPage":n[4]||(n[4]=e=>y.value=e),"page-size":C.value,"onUpdate:pageSize":n[5]||(n[5]=e=>C.value=e),"page-sizes":[15,30,50,100],total:((q=b.value)==null?void 0:q.total)??100,layout:"sizes, prev, pager, next",onSizeChange:m,onCurrentChange:m},null,8,["current-page","page-size","total"])],64)}}}),ge=ne(ce,[["__scopeId","data-v-03d19aad"]]);export{ge as default};
