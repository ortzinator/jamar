import{T as d,r as m,b as c,c as u,f as e,u as a,Z as p,w as r,d as o,h as f,L as _,F as w,g}from"./app.a9a24307.js";import{_ as h,A as b}from"./AuthenticationCardLogo.56a66a65.js";import{_ as x,a as y}from"./TextInput.2def3c86.js";import{_ as v}from"./InputLabel.9961a68e.js";import{_ as V}from"./PrimaryButton.6d452cd1.js";import"./plugin-vue_export-helper.21dcd24c.js";const k=o("div",{class:"mb-4 text-sm text-gray-600 dark:text-gray-400"}," This is a secure area of the application. Please confirm your password before continuing. ",-1),C=["onSubmit"],$={class:"flex justify-end mt-4"},A=g(" Confirm "),q={__name:"ConfirmPassword",setup(B){const s=d({password:""}),t=m(null),n=()=>{s.post(route("password.confirm"),{onFinish:()=>{s.reset(),t.value.focus()}})};return(F,i)=>(c(),u(w,null,[e(a(p),{title:"Secure Area"}),e(b,null,{logo:r(()=>[e(h)]),default:r(()=>[k,o("form",{onSubmit:_(n,["prevent"])},[o("div",null,[e(v,{for:"password",value:"Password"}),e(x,{id:"password",ref_key:"passwordInput",ref:t,modelValue:a(s).password,"onUpdate:modelValue":i[0]||(i[0]=l=>a(s).password=l),type:"password",class:"block w-full mt-1",required:"",autocomplete:"current-password",autofocus:""},null,8,["modelValue"]),e(y,{class:"mt-2",message:a(s).errors.password},null,8,["message"])]),o("div",$,[e(V,{class:f(["ml-4",{"opacity-25":a(s).processing}]),disabled:a(s).processing},{default:r(()=>[A]),_:1},8,["class","disabled"])])],40,C)]),_:1})],64))}};export{q as default};
