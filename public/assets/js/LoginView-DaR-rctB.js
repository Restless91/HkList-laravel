import{b as E,r as m,k as F,w as x,c as L,n as o,u as R,p as B,v as C,f as _,q as d,e as f,t as N,l as s,s as g,E as h,x as q,y as I,z as S,A as $}from"./.pnpm-Ddnih9Rt.js";import{g as A,a as D,l as U,s as z,b as M}from"./index-CdKk1Oin.js";import{f as T}from"./favicon-BrYC5Vmz.js";import{_ as j}from"./_plugin-vue_export-helper-DlAUqK2U.js";const G={class:"container"},H=["src"],J=E({__name:"LoginView",setup(K){const r=R();A()==="1"&&r.push("/admin");const v=()=>r.push("/register"),n=m(!1),a=m({username:"",password:""}),p=m(null),w={username:[{required:!0,message:"请输入用户名",trigger:"blur"}],password:[{required:!0,message:"请输入密码",trigger:"blur"}]},y=async u=>{if(!(!u||!await u.validate()))try{n.value=!0;const e=await U({username:a.value.username,password:a.value.password});h.success("登陆成功"),z("1");const t=e.data.role;M(t),r.push(`/${t}`)}finally{n.value=!1}};return(u,e)=>{const t=q,i=I,c=S,V=$,b=B,k=C;return _(),F("div",G,[x((_(),L(b,null,{default:o(()=>[d("h1",null,[d("img",{src:f(T),alt:"logo"},null,8,H)]),d("h2",null,"登陆 | "+N(f(D)()),1),s(V,{ref_key:"loginFormRef",ref:p,model:a.value,rules:w,"label-width":"auto"},{default:o(()=>[s(i,{label:"用户名",prop:"username"},{default:o(()=>[s(t,{modelValue:a.value.username,"onUpdate:modelValue":e[0]||(e[0]=l=>a.value.username=l)},null,8,["modelValue"])]),_:1}),s(i,{label:"密码",prop:"password"},{default:o(()=>[s(t,{modelValue:a.value.password,"onUpdate:modelValue":e[1]||(e[1]=l=>a.value.password=l),type:"password"},null,8,["modelValue"])]),_:1}),s(i,{class:"center"},{default:o(()=>[s(c,{type:"primary",onClick:e[2]||(e[2]=l=>v())},{default:o(()=>[g("注册")]),_:1}),s(c,{type:"primary",onClick:e[3]||(e[3]=l=>y(p.value))},{default:o(()=>[g("登陆")]),_:1})]),_:1})]),_:1},8,["model"])]),_:1})),[[k,n.value]])])}}}),X=j(J,[["__scopeId","data-v-35e85a93"]]);export{X as default};
