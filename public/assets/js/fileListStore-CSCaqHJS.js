import{u as d,e as $,f as D,h as M,j as P}from"./index-CY8zHUnN.js";import{d as j,r as l,E as i}from"./.pnpm-DQd76FlD.js";const E=d(),A=j("fileListStore",()=>{const r=l(!1),t=l({surl:"",url:"",pwd:"",dir:"/",password:"",token:""}),f=l(null),x=()=>{const s=t.value.dir.split("/");s.pop();const v=s.join("/");return v===""?"/":v},S=async()=>{if(!(!f.value||!await f.value.validate())){if(t.value.surl==="")return i.error("获取链接surl失败");try{u.value=[],r.value=!0;const s=await $(t.value);n.value=s.data,t.value.dir!=="/"&&n.value.list.unshift({category:-1,fs_id:0,isdir:1,local_ctime:0,local_mtime:0,server_ctime:0,server_mtime:0,size:0,md5:"",path:x(),server_filename:"..",dlink:""}),i.success("获取文件列表成功")}finally{r.value=!1}}},o=l({hit_captcha:!1,vcode_str:"",vcode_img:"",vcode_input:""}),n=l({uk:0,shareid:0,randsk:"",list:[]}),u=l([]),p=l([]),z=async(s,v=!1)=>{var k,L;if(r.value){i.info("请勿重复点击~");return}const w=d().config.min_single_file;let c=[];if(s){const e=n.value.list.find(a=>a.fs_id===s);if(!e)i.error("获取文件信息失败");else if(e.size<w){i.error("文件过小不会被解析!");return}c=[s]}else{let e=u.value.filter(a=>a.isdir!==1);e.length!==u.value.length&&i.error("文件夹不会被解析!"),e=e.filter(a=>a.size>w),e.length!==u.value.length&&i.error("文件过小不会被解析!"),c=e.map(a=>a.fs_id)}if(c.length>(((L=(k=d())==null?void 0:k.config)==null?void 0:L.max_once)??20)){i.error(`一次最多解析${d().config.max_once}个文件`);return}if(c.length===0){i.error("满足要求的文件数量为0");return}let _;try{r.value=!0;const e={uk:n.value.uk,shareid:n.value.shareid,randsk:n.value.randsk,fs_ids:c,password:t.value.password,token:t.value.token,url:t.value.url,surl:t.value.surl,dir:t.value.dir,pwd:t.value.pwd};if(o.value.hit_captcha){if(!o.value.vcode_str||!o.value.vcode_input){i.error("请先输入验证码");return}e.vcode_str=o.value.vcode_str,e.vcode_input=o.value.vcode_input}if(_=await D(e),i.success("解析成功,下载链接请下滑"),o.value={hit_captcha:!1,vcode_str:"",vcode_img:"",vcode_input:""},v)return r.value=!1,await m(),_.data.map(a=>({...a,index:0}));p.value=_.data.map(a=>({...a,index:0}))}catch(e){const{code:a,message:y}=e;if(a&&y&&y.includes("验证码")){const F=await M({password:t.value.password});o.value={hit_captcha:!0,vcode_str:F.data.vcode,vcode_img:F.data.img,vcode_input:""}}}finally{r.value=!1,await m(),await E.getConfig(!1)}},h=l({group_name:"",count:0,size:0}),g=l(""),m=async()=>{try{r.value=!0;const s=await P({token:t.value.token});h.value=s.data,g.value=""}catch(s){g.value=s.message}finally{r.value=!1}};return{pending:r,fileList:n,getFileList:S,getFileListForm:t,getFileListFormRef:f,selectedRows:u,downloadLinks:p,getDownloadLinks:z,limitForm:h,getLimit:m,limitMessage:g,vcode:o}});export{A as u};