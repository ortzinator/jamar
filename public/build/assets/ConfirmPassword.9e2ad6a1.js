import{U as m,r as c,c as d,f as s,u as e,K as u,w as t,F as p,b as f,d as a,h as _,Q as w,g as b}from"./app.418331d3.js";import{J as h}from"./AuthenticationCard.64b18f7c.js";import{_ as g}from"./AuthenticationCardLogo.f89221f7.js";import{_ as x}from"./Button.5a5e721f.js";import{_ as v}from"./Input.145b177d.js";import{_ as y}from"./Label.1f5ecdf3.js";import{_ as V}from"./ValidationErrors.44f1d6e7.js";/* empty css            */import"./plugin-vue_export-helper.21dcd24c.js";const $=a("div",{class:"mb-4 text-sm text-gray-600"}," This is a secure area of the application. Please confirm your password before continuing. ",-1),k=["onSubmit"],C={class:"flex justify-end mt-4"},F=b(" Confirm "),z={setup(B){const o=m({password:""}),r=c(null),n=()=>{o.post(route("password.confirm"),{onFinish:()=>{o.reset(),r.value.focus()}})};return(N,i)=>(f(),d(p,null,[s(e(u),{title:"Secure Area"}),s(h,null,{logo:t(()=>[s(g)]),default:t(()=>[$,s(V,{class:"mb-4"}),a("form",{onSubmit:w(n,["prevent"])},[a("div",null,[s(y,{for:"password",value:"Password"}),s(v,{id:"password",ref_key:"passwordInput",ref:r,modelValue:e(o).password,"onUpdate:modelValue":i[0]||(i[0]=l=>e(o).password=l),type:"password",class:"mt-1 block w-full",required:"",autocomplete:"current-password",autofocus:""},null,8,["modelValue"])]),a("div",C,[s(x,{class:_(["ml-4",{"opacity-25":e(o).processing}]),disabled:e(o).processing},{default:t(()=>[F]),_:1},8,["class","disabled"])])],40,k)]),_:1})],64))}};export{z as default};
