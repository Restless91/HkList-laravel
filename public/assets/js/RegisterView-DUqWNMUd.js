import"./base-DzfnSdGl.js";import{v as C}from"./el-loading-Dqc-yn7H.js";import{E as R}from"./el-card-D0AZMfBh.js";import{E as x,a as B}from"./el-form-item-Ct3QjCMy.js";import{E as N}from"./el-button-DtYNY52B.js";import{E as S}from"./el-input-BEQYXOrs.js";import{r as q}from"./user-Cd5hS_vJ.js";import{f as I}from"./favicon-BrYC5Vmz.js";import{d as L,g as U,r as m,m as h,c as D,w as M,e as w,f as t,h as $,o as d,i as p,u as c,t as j,j as A,a as r,n as T,k as V,E as z}from"./index-niWMSR8p.js";import{_ as G}from"./_plugin-vue_export-helper-DlAUqK2U.js";import"./use-form-item-DsYTp4Yb.js";import"./index-Bbp7VP7R.js";const H={class:"container"},J=["src"],K=L({__name:"RegisterView",setup(O){const l=$();U()==="1"&&l.push("/admin");const y=()=>l.push("/login"),n=m(!1),e=m({username:"",password:"",inv_code:""}),_=m(null),f={username:[{required:!0,message:"请输入用户名",trigger:"blur"}],password:[{required:!0,message:"请输入密码",trigger:"blur"}]},g=h();g.config.need_inv_code&&(f.inv_code=[{required:!0,message:"请输入邀请码",trigger:"blur"}]);const E=async u=>{if(!(!u||!await u.validate()))try{n.value=!0,await q({username:e.value.username,password:e.value.password,inv_code:e.value.inv_code}),z.success("注册成功"),l.push("/login")}finally{n.value=!1}};return(u,o)=>{const i=S,s=x,v=N,b=B,k=R,F=C;return d(),D("div",H,[M((d(),w(k,null,{default:t(()=>[p("h1",null,[p("img",{src:c(I),alt:"logo"},null,8,J)]),p("h2",null,"注册 | "+j(c(A)()),1),r(b,{ref_key:"registerFormRef",ref:_,model:e.value,rules:f,"label-width":"auto"},{default:t(()=>[r(s,{label:"用户名",prop:"username"},{default:t(()=>[r(i,{modelValue:e.value.username,"onUpdate:modelValue":o[0]||(o[0]=a=>e.value.username=a)},null,8,["modelValue"])]),_:1}),r(s,{label:"密码",prop:"password"},{default:t(()=>[r(i,{modelValue:e.value.password,"onUpdate:modelValue":o[1]||(o[1]=a=>e.value.password=a),type:"password"},null,8,["modelValue"])]),_:1}),c(g).config.need_inv_code?(d(),w(s,{key:0,label:"邀请码",prop:"inv_code"},{default:t(()=>[r(i,{modelValue:e.value.inv_code,"onUpdate:modelValue":o[2]||(o[2]=a=>e.value.inv_code=a)},null,8,["modelValue"])]),_:1})):T("",!0),r(s,{class:"center"},{default:t(()=>[r(v,{type:"primary",onClick:o[3]||(o[3]=a=>y())},{default:t(()=>[V("登陆")]),_:1}),r(v,{type:"primary",onClick:o[4]||(o[4]=a=>E(_.value))},{default:t(()=>[V("注册")]),_:1})]),_:1})]),_:1},8,["model"])]),_:1})),[[F,n.value]])])}}}),le=G(K,[["__scopeId","data-v-a420fdc8"]]);export{le as default};