const __vite__fileDeps=["assets/js/UserView-CYoEbyql.js","assets/js/.pnpm-BPJ2h7HZ.js","assets/css/.pnpm-C0WEy9r9.css","assets/css/UserView-V0M9nBA1.css","assets/js/LoginView-BJg_KuFb.js","assets/js/registerkeyDown-DnxsfoLV.js","assets/js/_plugin-vue_export-helper-DlAUqK2U.js","assets/css/LoginView-COcoaMoo.css","assets/js/RegisterView-CrER8xIi.js","assets/css/RegisterView-CLE_VDq3.css","assets/js/AdminView-d-FFyrYL.js","assets/js/NotFoundView-CM18mO-S.js","assets/css/NotFoundView-B8o8jygP.css"],__vite__mapDeps=i=>i.map(i=>__vite__fileDeps[i]);
import{a as S,E as m,d as w,r as A,u as R,b,o as I,c as P,e as O,f as T,R as k,g as C,h as D,i as V,j as $}from"./.pnpm-BPJ2h7HZ.js";(function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))u(s);new MutationObserver(s=>{for(const o of s)if(o.type==="childList")for(const r of o.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&u(r)}).observe(document,{childList:!0,subtree:!0});function t(s){const o={};return s.integrity&&(o.integrity=s.integrity),s.referrerPolicy&&(o.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?o.credentials="include":s.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function u(s){if(s.ep)return;s.ep=!0;const o=t(s);fetch(s.href,o)}})();const q="modulepreload",x=function(e){return"/"+e},f={},d=function(n,t,u){let s=Promise.resolve();if(t&&t.length>0){document.getElementsByTagName("link");const o=document.querySelector("meta[property=csp-nonce]"),r=(o==null?void 0:o.nonce)||(o==null?void 0:o.getAttribute("nonce"));s=Promise.all(t.map(a=>{if(a=x(a),a in f)return;f[a]=!0;const p=a.endsWith(".css"),v=p?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${a}"]${v}`))return;const i=document.createElement("link");if(i.rel=p?"stylesheet":q,p||(i.as="script",i.crossOrigin=""),i.href=a,r&&i.setAttribute("nonce",r),document.head.appendChild(i),p)return new Promise((E,L)=>{i.addEventListener("load",E),i.addEventListener("error",()=>L(new Error(`Unable to preload CSS for ${a}`)))})}))}return s.then(()=>n()).catch(o=>{const r=new Event("vite:preloadError",{cancelable:!0});if(r.payload=o,window.dispatchEvent(r),!r.defaultPrevented)throw o})},J=()=>localStorage.getItem("login_state")??"0",g=e=>localStorage.setItem("login_state",e),W=()=>localStorage.getItem("login_role")??"user",h=e=>localStorage.setItem("login_role",e),N=()=>localStorage.getItem("announce")??"",H=e=>localStorage.setItem("announce",e),K=async()=>(await d(async()=>{const{default:e}=await import("./package-DcTPxRgJ.js");return{default:e}},[])).default.version,j=()=>{var e;return((e=document.querySelector("meta[name='app_name']"))==null?void 0:e.getAttribute("content"))??"94list-laravel"},G=()=>{const e=localStorage.getItem("aria2_config");return e?JSON.parse(e):{host:"http://localhost",port:6800,token:""}},Q=e=>localStorage.setItem("aria2_config",JSON.stringify(e)),l=S.create({baseURL:"/api/v1",timeout:1/0,headers:{Accept:"application/json","Content-Type":"application/json"}});l.interceptors.response.use(e=>e.data,e=>{var t;const n=(t=e.response.data)==null?void 0:t.message;return n?n==="用户未登陆"?(m.error("登陆已过期, 请重新登陆!"),g("0"),setTimeout(()=>location.href="/login",1e3)):n==="Too Many Attempts."?m.error("请求量过大! 请等待10分钟后重试!"):n==="用户权限不足"?(m.error("用户权限不足, 请联系管理员!"),h("user"),setTimeout(()=>location.href="/user",1e3)):m.error(n):m.error("服务器异常, 请稍后再试"),Promise.reject(e.response.data)});const c=e=>typeof e=="string"?parseInt(e):e,M=()=>l.get("/parse/config"),X=async e=>{const n=await l.post("/parse/get_file_list",e);return n.data.list=n.data.list.map(t=>(t.category=c(t.category),t.fs_id=c(t.fs_id),t.isdir=c(t.isdir),t.local_ctime=c(t.local_ctime),t.local_mtime=c(t.local_mtime),t.server_ctime=c(t.local_mtime),t.server_mtime=c(t.local_mtime),t.size=c(t.size),t)),n},Y=e=>l.post("/parse/get_download_links",e),Z=()=>l.get("/parse/limit"),ee=e=>l.post("/user/login",e),te=e=>l.post("/user/register",e),U=()=>l.delete("/user"),B=w("mainStore",()=>{const e=A({show_announce:!1,announce:"",user_agent:"",debug:!1,max_once:0,have_account:!1,have_login:!1,need_inv_code:!1,need_password:!1,is_https:!1}),n=R();return{config:e,logout:async()=>{try{await U()}finally{g("0"),h("user"),n.push("/"),m.success("退出登陆成功~")}}}}),F=b({__name:"App",setup(e){const n=B();return I(async()=>{const t=window.matchMedia("(prefers-color-scheme: dark)");u(t),t.addEventListener("change",u);function u(r){r.matches?document.querySelector("html").classList.add("dark"):document.querySelector("html").classList.remove("dark")}const o=(await M()).data;o.announce=o.announce.replaceAll("[NextLine]","<br>"),o.announce===N()&&(o.show_announce=!1),n.config={...o,is_https:document.location.protocol==="https:"},g(o.have_login?"1":"0")}),(t,u)=>(T(),P(O(k)))}}),y=C({history:D("/"),routes:[{path:"/",name:"index",redirect:"/user"},{path:"/user",name:"user",meta:{title:"前台解析中心"},component:()=>d(()=>import("./UserView-CYoEbyql.js"),__vite__mapDeps([0,1,2,3]))},{path:"/login",name:"login",meta:{title:"登陆"},component:()=>d(()=>import("./LoginView-BJg_KuFb.js"),__vite__mapDeps([4,1,2,5,6,7]))},{path:"/register",name:"register",meta:{title:"注册"},component:()=>d(()=>import("./RegisterView-CrER8xIi.js"),__vite__mapDeps([8,1,2,5,6,9]))},{path:"/admin",name:"admin",meta:{title:"后台控制中心"},component:()=>d(()=>import("./AdminView-d-FFyrYL.js"),__vite__mapDeps([10,1,2]))},{path:"/404",name:"404",meta:{title:"404页面不存在"},component:()=>d(()=>import("./NotFoundView-CM18mO-S.js"),__vite__mapDeps([11,1,2,12]))},{path:"/:pathMatch(.*)",redirect:"/404"}]});y.beforeEach((e,n,t)=>{document.title=`${e.meta.title} | ${j()}`,t()});const _=V(F);_.use($());_.use(y);_.mount("#app");export{d as _,j as a,h as b,W as c,H as d,X as e,Y as f,J as g,Z as h,l as i,G as j,Q as k,ee as l,K as m,te as r,g as s,B as u};
