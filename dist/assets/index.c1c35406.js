import{r as b,o as d,c as p,a as P,d as z,b as _,u as C,e as M,f as B,g as O,h as y,i as A,w as c,j as l,k as n,N as j,l as V,m as D,n as W,p as H,z as R,q as F,s as U,t as h,v as u,x as q,y as G,A as x,B as g,I as K,P as Z,H as J,M as Q,C as X,D as Y,G as ee,E as te,F as k,J as oe,K as ne,L as se,T as L,O as ae,Q as re,R as le,S as N,U as ie,V as ce,W as de,X as ue,Y as _e,Z as pe}from"./vendor.041c4190.js";const he=function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))a(t);new MutationObserver(t=>{for(const r of t)if(r.type==="childList")for(const i of r.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&a(i)}).observe(document,{childList:!0,subtree:!0});function o(t){const r={};return t.integrity&&(r.integrity=t.integrity),t.referrerpolicy&&(r.referrerPolicy=t.referrerpolicy),t.crossorigin==="use-credentials"?r.credentials="include":t.crossorigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function a(t){if(t.ep)return;t.ep=!0;const r=o(t);fetch(t.href,r)}};he();var m=(s,e)=>{const o=s.__vccOpts||s;for(const[a,t]of e)o[a]=t;return o};const me={};function fe(s,e){const o=b("router-view");return d(),p(o)}var ve=m(me,[["render",fe]]);const ge=P(),ye="modulepreload",E={},we="/vue3-starter/",w=function(e,o){return!o||o.length===0?e():Promise.all(o.map(a=>{if(a=`${we}${a}`,a in E)return;E[a]=!0;const t=a.endsWith(".css"),r=t?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${a}"]${r}`))return;const i=document.createElement("link");if(i.rel=t?"stylesheet":ye,t||(i.as="script",i.crossOrigin=""),i.href=a,document.head.appendChild(i),t)return new Promise((f,T)=>{i.addEventListener("load",f),i.addEventListener("error",T)})})).then(()=>e())},$e="zoom-fade",v=z({id:"setting",state:()=>({darkTheme:!1,animationType:$e}),getters:{getDarkTheme(){return this.darkTheme}},actions:{}}),be=_({setup(s){return window.$message=C(),(e,o)=>null}}),xe=_({setup(s){return window.$dialog=M(),(e,o)=>null}}),ke=_({setup(s){return window.$loading=B(),(e,o)=>null}}),Le=_({setup(s){return window.$notification=O(),(e,o)=>null}}),Ne=_({setup(s){const e=v();let o=y(()=>e.darkTheme?A:void 0);return(a,t)=>(d(),p(n(U),{locale:n(R),"date-locale":n(F),theme:n(o)},{default:c(()=>[l(n(H),null,{default:c(()=>[l(ke),l(n(j),null,{default:c(()=>[l(xe),l(n(V),null,{default:c(()=>[l(Le),l(n(D),null,{default:c(()=>[l(be),W(a.$slots,"default")]),_:3})]),_:3})]),_:3})]),_:3})]),_:3},8,["locale","date-locale","theme"]))}}),Ee={},Se={t:"1638346678304",class:"icon",viewBox:"0 0 1024 1024",version:"1.1",xmlns:"http://www.w3.org/2000/svg","p-id":"4867",width:"200",height:"200"},Ie=u("path",{d:"M384 0v96a541.44 541.44 0 0 1 384.64 159.296 542.208 542.208 0 0 1 159.296 384.64h96c0-353.472-286.528-640-640-640z",fill:"","p-id":"4868"},null,-1),Te=u("path",{d:"M384 192v96c94.016 0 182.4 36.608 248.896 103.104S736 545.984 736 640H832a448 448 0 0 0-448-448zM480 384l-64 64L192 512l-192 416 25.344 25.344 232.832-232.832a64 64 0 1 1 45.248 45.248l-232.832 232.832 25.344 25.344 416-192 64-224 64-64-160-160z",fill:"","p-id":"4869"},null,-1),Pe=[Ie,Te];function ze(s,e){return d(),h("svg",Se,Pe)}var Ce=m(Ee,[["render",ze]]);const Me={},Be={t:"1638346723832",class:"icon",viewBox:"0 0 1039 1024",version:"1.1",xmlns:"http://www.w3.org/2000/svg","p-id":"6437",width:"200",height:"200"},Oe=u("path",{d:"M517.15869 689.974811c-7.738035 0-14.186398-2.579345-20.634761-6.448363L265.672544 540.372796 16.765743 398.508816c-10.31738-5.15869-16.765743-16.765743-16.765743-28.372796 0-11.607053 6.448363-21.924433 15.476071-28.372796L496.523929 56.745592c12.896725-7.738035 27.083123-7.738035 39.979849 0l490.075567 291.465995c11.607053 7.738035 16.765743 23.214106 9.027708 34.821159-7.738035 11.607053-23.214106 16.765743-34.821159 9.027707L517.15869 104.463476 70.93199 370.13602l221.823678 126.387909L517.15869 635.808564l277.279597-170.236776c11.607053-7.738035 28.372796-3.869018 36.110831 9.027708 7.738035 11.607053 3.869018 28.372796-9.027707 36.110831L537.793451 683.526448c-6.448363 3.869018-14.186398 6.448363-20.634761 6.448363z",fill:"","p-id":"6438"},null,-1),Ae=u("path",{d:"M517.15869 981.440806c-9.027708 0-16.765743-3.869018-21.924433-12.896725-7.738035-11.607053-3.869018-28.372796 9.027708-36.110832l472.020151-290.176322c11.607053-7.738035 28.372796-3.869018 36.110831 9.027708 7.738035 11.607053 3.869018 28.372796-9.027708 36.110831L530.055416 977.571788c-3.869018 2.579345-9.027708 3.869018-12.896726 3.869018z",fill:"","p-id":"6439"},null,-1),je=u("path",{d:"M323.707809 864.080605c-5.15869 0-9.027708-1.289673-14.186398-3.869018L30.952141 683.526448c-11.607053-7.738035-15.476071-23.214106-7.738035-36.110831 7.738035-11.607053 23.214106-15.476071 36.110831-7.738035l279.858942 176.685138c11.607053 7.738035 15.476071 23.214106 7.738035 36.110832-6.448363 6.448363-14.186398 11.607053-23.214105 11.607053z",fill:"","p-id":"6440"},null,-1),Ve=u("path",{d:"M517.15869 834.418136c-7.738035 0-14.186398-2.579345-20.634761-6.448363L30.952141 537.793451c-11.607053-7.738035-15.476071-23.214106-7.738035-36.110831 7.738035-11.607053 23.214106-15.476071 36.110831-7.738036L517.15869 780.251889l459.123426-281.148614c11.607053-7.738035 28.372796-3.869018 36.110831 9.027707 7.738035 11.607053 3.869018 28.372796-9.027708 36.110832l-465.571788 283.727959c-6.448363 3.869018-14.186398 6.448363-20.634761 6.448363z",fill:"","p-id":"6441"},null,-1),De=[Oe,Ae,je,Ve];function We(s,e){return d(),h("svg",Be,De)}var He=m(Me,[["render",We]]);const Re=_({props:{collapsed:{type:Boolean},inverted:{type:Boolean}},setup(s){function e(r){return()=>x(g,null,{default:()=>x(r)})}const o=[{label:"\u9996\u9875",key:"home-index",icon:e(J)},{label:"\u5173\u4E8E",key:"about",icon:e(K),children:[{label:"\u5173\u4E8E\u9879\u76EE",key:"about-project",icon:e(He)},{label:"\u5173\u4E8E\u4F5C\u8005",key:"about-author",icon:e(Z)}]},{label:"\u4F5C\u8005\u535A\u5BA2",key:"https://wyatex.gitee.io",icon:e(Ce)}],a=q();function t(r){/http(s)?:/.test(r)?window.open(r):a.push({name:r})}return(r,i)=>(d(),p(n(G),{options:o,inverted:s.inverted,collapsed:s.collapsed,"collapsed-width":64,"collapsed-icon-size":20,indent:24,"default-value":"home-index","onUpdate:value":t},null,8,["inverted","collapsed"]))}});const Fe=s=>(oe("data-v-4f4e960b"),s=s(),ne(),s),Ue={class:"layout-header"},qe={class:"layout-header-left"},Ge={class:"ml-1 layout-header-trigger layout-header-trigger-min"},Ke={class:"flex items-center h-full"},Ze=k("\u6DF1\u8272"),Je=k("\u6D45\u8272"),Qe={class:"layout-header-right"},Xe=Fe(()=>u("span",null," github ",-1)),Ye=_({props:{collapsed:{type:Boolean},inverted:{type:Boolean}},emits:["update:collapsed"],setup(s){const e=v(),o=()=>{window.open("https://github.com/Wyatex/Vue3-starter")},a=t=>{e.darkTheme=t};return(t,r)=>(d(),h("div",Ue,[u("div",qe,[u("div",{class:"ml-1 layout-header-trigger layout-header-trigger-min",onClick:r[0]||(r[0]=()=>t.$emit("update:collapsed",!s.collapsed))},[s.collapsed?(d(),p(n(g),{key:0,size:"18"},{default:c(()=>[l(n(Q))]),_:1})):(d(),p(n(g),{key:1,size:"18"},{default:c(()=>[l(n(X))]),_:1}))]),u("div",Ge,[u("div",Ke,[l(n(Y),{"onUpdate:value":a},{checked:c(()=>[Ze]),unchecked:c(()=>[Je]),_:1})])])]),u("div",Qe,[u("div",{class:"layout-header-trigger layout-header-trigger-min",onClick:o},[l(n(te),{placement:"bottom"},{trigger:c(()=>[l(n(g),{size:"18"},{default:c(()=>[l(n(ee))]),_:1})]),default:c(()=>[Xe]),_:1})])])]))}});var et=m(Ye,[["__scopeId","data-v-4f4e960b"]]);const tt={setup(s){const{animationType:e}=v();return(o,a)=>{const t=b("router-view");return d(),p(t,null,{default:c(({Component:r,route:i})=>[l(L,{name:n(e),mode:"out-in",appear:""},{default:c(()=>[(d(),h("div",{key:i.name},[(d(),p(se(r)))]))]),_:2},1032,["name"])]),_:1})}}};var ot="/vue3-starter/assets/logo.03d6d6da.png";const nt={class:"logo"},st={key:0,src:ot,alt:""},at={key:1,class:"title"},rt=_({props:{collapsed:{type:Boolean}},setup(s){const e=v(),o=y(()=>e.animationType);return(a,t)=>(d(),h("div",nt,[l(L,{name:n(o),mode:"out-in",appear:""},{default:c(()=>[s.collapsed?(d(),h("img",st)):(d(),h("h2",at,"Vue3 Starter"))]),_:1},8,["name"])]))}});var lt=m(rt,[["__scopeId","data-v-40a0ad0a"]]);const it=_({setup(s){const e=v(),o=ae(!1),a=y(()=>e.darkTheme),t=()=>{document.body.clientWidth<=950?o.value=!0:o.value=!1};return re(()=>{window.addEventListener("resize",t),window.$loading.finish()}),(r,i)=>(d(),p(Ne,null,{default:c(()=>[l(n(N),{class:"layout","has-sider":""},{default:c(()=>[l(n(le),{collapsed:o.value,"collapsed-width":64,width:200,inverted:n(a),"collapse-mode":"width",class:"layout-sider","show-trigger":"bar",onCollapse:i[0]||(i[0]=f=>o.value=!0),onExpand:i[1]||(i[1]=f=>o.value=!1)},{default:c(()=>[l(lt,{collapsed:o.value},null,8,["collapsed"]),l(Re,{collapsed:o.value,inverted:n(a)},null,8,["collapsed","inverted"])]),_:1},8,["collapsed","inverted"]),l(n(N),{inverted:n(a)},{default:c(()=>[l(n(ie),{inverted:n(a),position:"absolute"},{default:c(()=>[l(et,{collapsed:o.value,"onUpdate:collapsed":i[2]||(i[2]=f=>o.value=f),inverted:n(a)},null,8,["collapsed","inverted"])]),_:1},8,["inverted"]),l(n(ce),{class:de(["layout-content",{"layout-default-background":n(a)===!1}]),"content-style":"height: 100%;"},{default:c(()=>[l(tt)]),_:1},8,["class"])]),_:1},8,["inverted"])]),_:1})]),_:1}))}});var S=m(it,[["__scopeId","data-v-569f6d49"]]);const ct=[{path:"/home",name:"home",component:S,children:[{path:"",name:"home-index",component:()=>w(()=>import("./homePage.94166435.js"),["assets/homePage.94166435.js","assets/homePage.e5458e9e.css","assets/vendor.041c4190.js"])}]},{path:"/about",name:"about",component:S,children:[{path:"project",name:"about-project",component:()=>w(()=>import("./HelloWorld.0abc8b69.js"),["assets/HelloWorld.0abc8b69.js","assets/HelloWorld.0678769b.css","assets/vendor.041c4190.js"])},{path:"author",name:"about-author",component:()=>w(()=>import("./HelloWorld.0abc8b69.js"),["assets/HelloWorld.0abc8b69.js","assets/HelloWorld.0678769b.css","assets/vendor.041c4190.js"])}]}];var dt=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:ct});const I={"./modules/example.ts":dt},$=[];Object.keys(I).forEach(s=>{const e=I[s].default||{},o=Array.isArray(e)?[...e]:[e];$.push(...o)});$.push({path:"/",name:"Root",redirect:"/home"});const ut=ue({history:_e(),routes:$});pe(ve).use(ge).use(ut).mount("#app");export{m as _,ot as a};
