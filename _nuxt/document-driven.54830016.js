import P from"./DocumentDrivenEmpty.f19c41a6.js";import h from"./ContentRenderer.b527f6ab.js";import L from"./DocumentDrivenNotFound.d98433aa.js";import{k as x,d as c,H as R,P as g,i as k,I as C,J as b,K as u,r as B,L as y,M as N,N as S,O as l,T,Q as j,R as A,S as w,U as D,V as E,W as O,X as H,b as d,c as $,g as f,w as _,Y as v}from"./entry.719a620a.js";import"./ContentRendererMarkdown.3821870f.js";import"./ButtonLink.63e480b7.js";import"./ContentSlot.b2891a44.js";const q=c({name:"LayoutLoader",inheritAttrs:!1,props:{name:String,layoutProps:Object},async setup(n,e){const t=await y[n.name]().then(o=>o.default||o);return()=>l(t,n.layoutProps,e.slots)}}),I=c({name:"NuxtLayout",inheritAttrs:!1,props:{name:{type:[String,Boolean,Object],default:null}},setup(n,e){const t=x(),o=R(g),a=o===k()?C():o,s=b(()=>u(n.name)??a.meta.layout??"default"),r=B();e.expose({layoutRef:r});const m=t.deferHydration();return()=>{const p=s.value&&s.value in y,i=a.meta.layoutTransition??N;return S(T,p&&i,{default:()=>l(w,{suspensible:!0,onResolve:()=>{A(m)}},{default:()=>l(M,{layoutProps:j(e.attrs,{ref:r}),key:s.value,name:s.value,shouldProvide:!n.name,hasTransition:!!i},e.slots)})}).default()}}}),M=c({name:"NuxtLayoutProvider",inheritAttrs:!1,props:{name:{type:[String,Boolean]},layoutProps:{type:Object},hasTransition:{type:Boolean},shouldProvide:{type:Boolean}},setup(n,e){const t=n.name;return n.shouldProvide&&D(E,{isCurrent:o=>t===(o.meta.layout??"default")}),()=>{var o,a;return!t||typeof t=="string"&&!(t in y)?(a=(o=e.slots).default)==null?void 0:a.call(o):l(q,{key:t,layoutProps:n.layoutProps,name:t},e.slots)}}}),V={class:"document-driven-page"},Y=c({__name:"document-driven",setup(n){const{page:e,layout:t}=O();return e.value,H(e),(o,a)=>{const s=P,r=h,m=L,p=I;return d(),$("div",V,[f(p,{name:u(t)||"default"},{default:_(()=>[u(e)?(d(),v(r,{key:u(e)._id,value:u(e)},{empty:_(({value:i})=>[f(s,{value:i},null,8,["value"])]),_:1},8,["value"])):(d(),v(m,{key:1}))]),_:1},8,["name"])])}}});export{Y as default};
