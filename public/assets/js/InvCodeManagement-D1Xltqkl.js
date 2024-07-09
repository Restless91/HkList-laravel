import{b as P,$ as Q,a0 as W,r as m,e as v,c as I,m as l,k as a,x as c,w as y,j as T,F as j,_ as X,E as x,I as Y,J as h,z as ee,Z as G,y as J,B as ae,A as Z,O as le,v as H,o as te,q as A,t as E,a1 as U,C as R,S as ne,U as oe,a2 as de}from"./.pnpm-DQd76FlD.js";import{i as z}from"./index-B_xKmOdF.js";import{_ as ue}from"./_plugin-vue_export-helper-DlAUqK2U.js";const se=s=>z.post("/admin/inv_code",s),ie=s=>z.post("/admin/inv_code/generate",s),pe=s=>z.get(`/admin/inv_code?page=${s.page}&size=${s.size}`),re=s=>z.patch(`/admin/inv_code/${s.id}`,s),ce=s=>z.delete("/admin/inv_code",{data:{inv_code_ids:[s.id]}}),me=s=>z.delete("/admin/inv_code",{data:{inv_code_ids:s}}),ve=P({__name:"AddInvCode",props:{modelValue:{},modelModifiers:{}},emits:Q(["getInvCodes"],["update:modelValue"]),setup(s,{emit:i}){const b=i,C=W(s,"modelValue"),_=m(!1),t=m({type:"single",group_id:2,name:"",can_count:10}),p=m(null),D={group_id:[{required:!0,message:"请输入邀请码用户组ID",trigger:"blur"}],name:[{required:!0,message:"请输入邀请码名称",trigger:"blur"}],can_count:[{required:!0,message:"请输入可注册次数",trigger:"blur"}],count:[{required:!0,message:"请输入邀请码个数",trigger:"blur"}]},M=async V=>{if(!(!V||!await V.validate()))try{_.value=!0,t.value.type==="single"?await se({type:"single",name:t.value.name,can_count:t.value.can_count,group_id:t.value.group_id}):await ie({type:"random",count:t.value.count,can_count:t.value.can_count,group_id:t.value.group_id}),x.success("添加成功")}finally{_.value=!1}},F=V=>{b("getInvCodes"),V()},B=()=>{C.value=!1,b("getInvCodes")};return(V,d)=>{const k=Y,q=h,n=ee,u=G,g=J,r=ae,$=Z,S=le,w=H;return v(),I(S,{title:"添加邀请码",width:"60%",modelValue:C.value,"onUpdate:modelValue":d[7]||(d[7]=o=>C.value=o),"before-close":F},{footer:l(()=>[a($,{type:"info",onClick:d[5]||(d[5]=o=>B())},{default:l(()=>[c("取消")]),_:1}),a($,{type:"primary",onClick:d[6]||(d[6]=o=>M(p.value))},{default:l(()=>[c("添加")]),_:1})]),default:l(()=>[y((v(),I(r,{ref_key:"addInvCodeFormRef",ref:p,model:t.value,rules:D,"label-width":"auto"},{default:l(()=>[a(n,{label:"创建方式",prop:"type"},{default:l(()=>[a(q,{modelValue:t.value.type,"onUpdate:modelValue":d[0]||(d[0]=o=>t.value.type=o)},{default:l(()=>[(v(),T(j,null,X(["single","random"],o=>a(k,{key:o,label:o,value:o},null,8,["label","value"])),64))]),_:1},8,["modelValue"])]),_:1}),a(n,{label:"可用次数",prop:"can_count"},{default:l(()=>[a(u,{modelValue:t.value.can_count,"onUpdate:modelValue":d[1]||(d[1]=o=>t.value.can_count=o)},null,8,["modelValue"])]),_:1}),a(n,{label:"用户组ID",prop:"group_id"},{default:l(()=>[a(u,{modelValue:t.value.group_id,"onUpdate:modelValue":d[2]||(d[2]=o=>t.value.group_id=o)},null,8,["modelValue"])]),_:1}),t.value.type==="single"?(v(),I(n,{key:0,label:"邀请码名称",prop:"name"},{default:l(()=>[a(g,{modelValue:t.value.name,"onUpdate:modelValue":d[3]||(d[3]=o=>t.value.name=o)},null,8,["modelValue"])]),_:1})):(v(),I(n,{key:1,label:"邀请码个数",prop:"count"},{default:l(()=>[a(u,{modelValue:t.value.count,"onUpdate:modelValue":d[4]||(d[4]=o=>t.value.count=o)},null,8,["modelValue"])]),_:1}))]),_:1},8,["model"])),[[w,_.value]])]),_:1},8,["modelValue"])}}}),_e=P({__name:"InvCodeManagement",setup(s){const i=m(!1),b=m(15),C=m(1),_=m(),t=m([]),p=async()=>{try{i.value=!0;const n=await pe({page:C.value,size:b.value});_.value=n.data}finally{i.value=!1}},D=async n=>{n.edit=!(n.edit??!1)},M=async n=>{n.edit=!(n.edit??!0),await F(n)},F=async n=>{try{i.value=!0,await re(n),x.success("修改邀请码成功")}finally{i.value=!1,await p()}},B=async n=>{try{i.value=!0,await ce(n),x.success("删除邀请码成功")}finally{i.value=!1,await p()}},V=async()=>{try{i.value=!0;const n=t.value.map(u=>u.id);await me(n),x.success("删除邀请码成功")}finally{i.value=!1,await p()}},d=n=>t.value=n;te(p);const k=m(!1),q=()=>k.value=!k.value;return(n,u)=>{var L,N,O;const g=Z,r=ne,$=J,S=G,w=oe,o=de,K=H;return v(),T(j,null,[a(ve,{onGetInvCodes:p,modelValue:k.value,"onUpdate:modelValue":u[0]||(u[0]=e=>k.value=e)},null,8,["modelValue"]),a(g,{type:"primary",onClick:u[1]||(u[1]=e=>p())},{default:l(()=>[c("刷新列表")]),_:1}),a(g,{type:"primary",onClick:u[2]||(u[2]=e=>q())},{default:l(()=>[c("添加邀请码")]),_:1}),a(g,{type:"danger",disabled:t.value.length<=0,onClick:u[3]||(u[3]=e=>V())},{default:l(()=>[c(" 批量删除 ")]),_:1},8,["disabled"]),y((v(),I(w,{data:((L=_.value)==null?void 0:L.data)??[],border:"","show-overflow-tooltip":"",class:"table",onSelectionChange:d},{default:l(()=>[a(r,{type:"selection",width:"40"}),a(r,{prop:"id",label:"ID"}),a(r,{prop:"name",label:"邀请码名称"},{default:l(({row:e})=>[y(A("span",null,E(e.name),513),[[U,!e.edit]]),y(a($,{modelValue:e.name,"onUpdate:modelValue":f=>e.name=f},null,8,["modelValue","onUpdate:modelValue"]),[[U,e.edit]])]),_:1}),a(r,{prop:"group_id",label:"用户组ID"},{default:l(({row:e})=>[y(A("span",null,E(e.group_id),513),[[U,!e.edit]]),y(a(S,{modelValue:e.group_id,"onUpdate:modelValue":f=>e.group_id=f},null,8,["modelValue","onUpdate:modelValue"]),[[U,e.edit]])]),_:1}),a(r,{prop:"can_count",label:"可用次数"},{default:l(({row:e})=>[y(A("span",null,E(e.can_count),513),[[U,!e.edit]]),y(a(S,{modelValue:e.can_count,"onUpdate:modelValue":f=>e.can_count=f},null,8,["modelValue","onUpdate:modelValue"]),[[U,e.edit]])]),_:1}),a(r,{prop:"use_count",label:"已使用次数"}),a(r,{prop:"created_at",label:"创建时间"},{default:l(({row:e})=>[c(E(new Date(e.created_at).toLocaleString()),1)]),_:1}),a(r,{prop:"updated_at",label:"更新时间"},{default:l(({row:e})=>[c(E(new Date(e.updated_at).toLocaleString()),1)]),_:1}),a(r,{width:"150",label:"操作",fixed:"right"},{default:l(({row:e})=>[e.edit?R("",!0):(v(),I(g,{key:0,size:"small",type:"primary",onClick:f=>D(e)},{default:l(()=>[c(" 编辑 ")]),_:2},1032,["onClick"])),e.edit?(v(),I(g,{key:1,size:"small",type:"primary",onClick:f=>M(e)},{default:l(()=>[c(" 保存 ")]),_:2},1032,["onClick"])):R("",!0),a(g,{size:"small",type:"danger",onClick:f=>B(e)},{default:l(()=>[c("删除")]),_:2},1032,["onClick"])]),_:1})]),_:1},8,["data"])),[[K,i.value]]),a(o,{"current-page":C.value,"onUpdate:currentPage":u[4]||(u[4]=e=>C.value=e),"page-size":b.value,"onUpdate:pageSize":u[5]||(u[5]=e=>b.value=e),"page-sizes":[15,50,100,500,((N=_.value)==null?void 0:N.total)??100],total:((O=_.value)==null?void 0:O.total)??100,layout:"sizes, prev, pager, next",onSizeChange:p,onCurrentChange:p},null,8,["current-page","page-size","page-sizes","total"])],64)}}}),Ce=ue(_e,[["__scopeId","data-v-afffcae2"]]);export{Ce as default};
