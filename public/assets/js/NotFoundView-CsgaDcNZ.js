import{b as i,r as c,o as l,M as d,j as r,q as s,t as _,u as p,n as u,e as h}from"./.pnpm-DQd76FlD.js";const v="/assets/png/qrcode-39AXYHGT.png",m={class:"page"},f={class:"container"},g=s("div",{class:"font-h1"},":(",-1),B=s("div",{class:"tip"},"你的电脑遇到问题, 需要重新启动",-1),M=s("div",{class:"tip"},"我们只收集某些错误信息, 然后自动为你重新启动",-1),q={class:"complete"},x={class:"percentage"},R=s("span",null,"% 完成",-1),T={class:"details"},k={class:"qr-image"},w=["src"],C=s("div",{class:"stopcode"},[s("div",{class:"stopcode-text"}," 有关问题的详细信息和可能的解决方法, 请访问 https://cutt.ly/kwErLg0w "),s("div",{class:"stopcode-text"},[s("p",null,"如需致电支持人员, 请向他们提供以下信息:"),s("p",null,"终止代码: TRICKED BY RICKROLL")])],-1),D=i({__name:"NotFoundView",setup(E){const n=u(),t=c(0),e=c(0);function a(){t.value+=Math.floor(Math.random()*25),t.value>=100?(t.value=100,n.push("/")):o()}const o=()=>e.value=setTimeout(a,Math.random()*500+500);return l(()=>o()),d(()=>clearTimeout(e.value)),(I,L)=>(h(),r("div",m,[s("div",f,[g,B,M,s("div",q,[s("span",x,_(t.value),1),R]),s("div",T,[s("div",k,[s("img",{src:p(v)},null,8,w)]),C])])]))}});export{D as default};
