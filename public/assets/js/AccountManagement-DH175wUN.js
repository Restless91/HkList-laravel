import{b as P,_ as j,$ as H,r as v,f as b,c as C,n as l,l as e,x as u,w as M,E as m,G as J,z as O,y as Q,B as W,A as T,K as X,v as R,o as Y,k as Z,q as ee,t as k,a0 as te,F as ae,N as le,P as ne,a1 as oe}from"./.pnpm-CM6hScpc.js";import{i as f}from"./index-waDZgT28.js";import{r as se}from"./registerkeyDown-BdEXfbVb.js";import{_ as ce}from"./_plugin-vue_export-helper-DlAUqK2U.js";const ue=s=>f.post("/admin/account",s),ie=s=>f.get(`/admin/account?page=${s.page}&size=${s.size}`),de=s=>f.patch("/admin/account",{account_ids:[s.id]}),re=s=>f.patch("/admin/account",{account_ids:s}),pe=s=>f.delete("/admin/account",{data:{account_ids:[s.id]}}),me=s=>f.delete("/admin/account",{data:{account_ids:s}}),I=s=>f.patch("/admin/account/switch",{account_ids:[s.account.id],switch:s.switch}),N=s=>f.patch("/admin/account/switch",s),ve=P({__name:"AddAccount",props:{modelValue:{},modelModifiers:{}},emits:j(["getAccounts"],["update:modelValue"]),setup(s,{emit:o}){const w=o,y=H(s,"modelValue"),_=v(!1),d=v({cookie:""}),c=v(null),S={cookie:[{required:!0,message:"请输入Cookie",trigger:"blur"}]},$=async g=>{if(!(!g||!await g.validate()))try{_.value=!0,(await ue({cookie:d.value.cookie.split(`
`)})).data.have_repeat&&m.info("存在重复的cookie,已自动过滤"),m.success("添加成功")}finally{_.value=!1}};se("Enter",()=>$(c.value));const h=g=>{w("getAccounts"),g()},x=()=>{y.value=!1,w("getAccounts")};return(g,p)=>{const E=J,z=O,D=Q,A=W,V=T,n=X,t=R;return b(),C(n,{title:"添加账号",width:"60%",modelValue:y.value,"onUpdate:modelValue":p[3]||(p[3]=i=>y.value=i),"before-close":h},{footer:l(()=>[e(V,{type:"info",onClick:p[1]||(p[1]=i=>x())},{default:l(()=>[u("取消")]),_:1}),e(V,{type:"primary",onClick:p[2]||(p[2]=i=>$(c.value))},{default:l(()=>[u("添加")]),_:1})]),default:l(()=>[M((b(),C(A,{ref_key:"addAccountFormRef",ref:c,model:d.value,rules:S,"label-width":"auto"},{default:l(()=>[e(z,{label:"提示"},{default:l(()=>[e(E,null,{default:l(()=>[u("可以使用换行来分割多个账号")]),_:1})]),_:1}),e(z,{label:"Cookie",prop:"cookie"},{default:l(()=>[e(D,{type:"textarea",modelValue:d.value.cookie,"onUpdate:modelValue":p[0]||(p[0]=i=>d.value.cookie=i)},null,8,["modelValue"])]),_:1})]),_:1},8,["model"])),[[t,_.value]])]),_:1},8,["modelValue"])}}}),_e=P({__name:"AccountManagement",setup(s){const o=v(!1),w=v(15),y=v(1),_=v(),d=v([]),c=async()=>{try{o.value=!0;const n=await ie({page:y.value,size:w.value});_.value=n.data}finally{o.value=!1}},S=async n=>{try{o.value=!0,await de(n),m.success("更新账户信息成功")}finally{o.value=!1,await c()}},$=async()=>{try{o.value=!0;const n=d.value.map(t=>t.id);await re(n),m.success("批量更新账户成功")}finally{o.value=!1,await c()}},h=async n=>{try{o.value=!0,await pe(n),m.success("删除账户成功")}finally{o.value=!1,await c()}},x=async()=>{try{o.value=!0;const n=d.value.map(t=>t.id);await me(n),m.success("批量删除账户成功")}finally{o.value=!1,await c()}},g=async n=>{try{o.value=!0,await I({account:n,switch:1}),m.success("启用账户成功")}finally{o.value=!1,await c()}},p=async n=>{try{o.value=!0,await I({account:n,switch:0}),m.success("禁用账户成功")}finally{o.value=!1,await c()}},E=async()=>{try{o.value=!0;const n=d.value.map(t=>t.id);await N({account_ids:n,switch:1}),m.success("批量启用账户成功")}finally{o.value=!1,await c()}},z=async()=>{try{o.value=!0;const n=d.value.map(t=>t.id);await N({account_ids:n,switch:0}),m.success("批量禁用账户成功")}finally{o.value=!1,await c()}},D=n=>d.value=n;Y(c);const A=v(!1),V=()=>A.value=!A.value;return(n,t)=>{var B,L,U;const i=T,r=le,q=ne,G=oe,K=R;return b(),Z(ae,null,[e(ve,{onGetAccounts:c,modelValue:A.value,"onUpdate:modelValue":t[0]||(t[0]=a=>A.value=a)},null,8,["modelValue"]),e(i,{type:"primary",onClick:t[1]||(t[1]=a=>c())},{default:l(()=>[u("刷新列表")]),_:1}),e(i,{type:"primary",onClick:t[2]||(t[2]=a=>V())},{default:l(()=>[u("添加账号")]),_:1}),e(i,{type:"primary",disabled:d.value.length<=0,onClick:t[3]||(t[3]=a=>$())},{default:l(()=>[u(" 批量更新信息 ")]),_:1},8,["disabled"]),e(i,{type:"primary",disabled:d.value.length<=0,onClick:t[4]||(t[4]=a=>E())},{default:l(()=>[u(" 批量启用 ")]),_:1},8,["disabled"]),e(i,{type:"primary",disabled:d.value.length<=0,onClick:t[5]||(t[5]=a=>z())},{default:l(()=>[u(" 批量禁用 ")]),_:1},8,["disabled"]),e(i,{type:"danger",disabled:d.value.length<=0,onClick:t[6]||(t[6]=a=>x())},{default:l(()=>[u(" 批量删除 ")]),_:1},8,["disabled"]),M((b(),C(q,{data:((B=_.value)==null?void 0:B.data)??[],border:"","show-overflow-tooltip":"",class:"table",onSelectionChange:D},{default:l(()=>[e(r,{type:"selection",width:"40"}),e(r,{prop:"id",label:"ID"}),e(r,{prop:"baidu_name",label:"百度用户名"}),e(r,{prop:"netdisk_name",label:"网盘用户名"}),e(r,{prop:"cookie",label:"Cookie"}),e(r,{prop:"vip_type",label:"会员类型"}),e(r,{prop:"switch",label:"状态"},{default:l(({row:a})=>[M(ee("span",null,k(a.switch?"启用":"禁用"),513),[[te,!a.edit]])]),_:1}),e(r,{prop:"reason",label:"禁用原因"}),e(r,{prop:"svip_end_at",label:"超级会员结束时间"},{default:l(({row:a})=>[u(k(new Date(a.svip_end_at).toLocaleString()),1)]),_:1}),e(r,{prop:"last_use_at",label:"上次使用时间"},{default:l(({row:a})=>[u(k(new Date(a.last_use_at).toLocaleString()),1)]),_:1}),e(r,{prop:"created_at",label:"创建时间"},{default:l(({row:a})=>[u(k(new Date(a.created_at).toLocaleString()),1)]),_:1}),e(r,{prop:"updated_at",label:"更新时间"},{default:l(({row:a})=>[u(k(new Date(a.updated_at).toLocaleString()),1)]),_:1}),e(r,{width:"220",label:"操作",fixed:"right"},{default:l(({row:a})=>[e(i,{size:"small",type:"primary",onClick:F=>S(a)},{default:l(()=>[u("更新信息")]),_:2},1032,["onClick"]),a.switch===0?(b(),C(i,{key:0,size:"small",type:"primary",onClick:F=>g(a)},{default:l(()=>[u(" 启用 ")]),_:2},1032,["onClick"])):(b(),C(i,{key:1,size:"small",type:"primary",onClick:F=>p(a)},{default:l(()=>[u("禁用")]),_:2},1032,["onClick"])),e(i,{size:"small",type:"danger",onClick:F=>h(a)},{default:l(()=>[u("删除")]),_:2},1032,["onClick"])]),_:1})]),_:1},8,["data"])),[[K,o.value]]),e(G,{"current-page":y.value,"onUpdate:currentPage":t[7]||(t[7]=a=>y.value=a),"page-size":w.value,"onUpdate:pageSize":t[8]||(t[8]=a=>w.value=a),"page-sizes":[15,50,100,500,((L=_.value)==null?void 0:L.total)??100],total:((U=_.value)==null?void 0:U.total)??100,layout:"sizes, prev, pager, next",onSizeChange:c,onCurrentChange:c},null,8,["current-page","page-size","page-sizes","total"])],64)}}}),Ae=ce(_e,[["__scopeId","data-v-ce3d3177"]]);export{Ae as default};
