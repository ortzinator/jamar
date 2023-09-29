import{T as m,r as d,b as c,c as u,f as o,u as e,Z as p,w as r,d as a,h as f,L as _,F as w,g}from"./app.3b878662.js";import{_ as h,A as b}from"./AuthenticationCardLogo.2ce35c86.js";import{_ as x}from"./InputError.065244af.js";import{_ as y}from"./InputLabel.32e90572.js";import{_ as v}from"./PrimaryButton.b1ace468.js";import{_ as V}from"./TextInput.259eaf44.js";import"./plugin-vue_export-helper.21dcd24c.js";const k=a("div",{class:"mb-4 text-sm text-gray-600 dark:text-gray-400"}," This is a secure area of the application. Please confirm your password before continuing. ",-1),C=["onSubmit"],$={class:"flex justify-end mt-4"},A=g(" Confirm "),z={__name:"ConfirmPassword",setup(B){const s=m({password:""}),t=d(null),n=()=>{s.post(route("password.confirm"),{onFinish:()=>{s.reset(),t.value.focus()}})};return(F,i)=>(c(),u(w,null,[o(e(p),{title:"Secure Area"}),o(b,null,{logo:r(()=>[o(h)]),default:r(()=>[k,a("form",{onSubmit:_(n,["prevent"])},[a("div",null,[o(y,{for:"password",value:"Password"}),o(V,{id:"password",ref_key:"passwordInput",ref:t,modelValue:e(s).password,"onUpdate:modelValue":i[0]||(i[0]=l=>e(s).password=l),type:"password",class:"block w-full mt-1",required:"",autocomplete:"current-password",autofocus:""},null,8,["modelValue"]),o(x,{class:"mt-2",message:e(s).errors.password},null,8,["message"])]),a("div",$,[o(v,{class:f(["ml-4",{"opacity-25":e(s).processing}]),disabled:e(s).processing},{default:r(()=>[A]),_:1},8,["class","disabled"])])],40,C)]),_:1})],64))}};export{z as default};