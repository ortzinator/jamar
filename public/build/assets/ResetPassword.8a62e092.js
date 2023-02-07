import{P as c,b as f,c as _,f as o,u as e,X as w,w as l,d as r,h as g,L as V,F as b,g as k}from"./app.cdfe58ca.js";import{_ as v,A as P}from"./AuthenticationCardLogo.0fca72fb.js";import{_ as i}from"./InputError.30eee039.js";import{_ as m}from"./InputLabel.571382d5.js";import{_ as h}from"./PrimaryButton.3b677eee.js";import{_ as n}from"./TextInput.94eddcdc.js";import"./plugin-vue_export-helper.21dcd24c.js";const x=["onSubmit"],y={class:"mt-4"},$={class:"mt-4"},C={class:"flex items-center justify-end mt-4"},S=k(" Reset Password "),j={__name:"ResetPassword",props:{email:String,token:String},setup(p){const d=p,s=c({token:d.token,email:d.email,password:"",password_confirmation:""}),u=()=>{s.post(route("password.update"),{onFinish:()=>s.reset("password","password_confirmation")})};return(q,a)=>(f(),_(b,null,[o(e(w),{title:"Reset Password"}),o(P,null,{logo:l(()=>[o(v)]),default:l(()=>[r("form",{onSubmit:V(u,["prevent"])},[r("div",null,[o(m,{for:"email",value:"Email"}),o(n,{id:"email",modelValue:e(s).email,"onUpdate:modelValue":a[0]||(a[0]=t=>e(s).email=t),type:"email",class:"block w-full mt-1",required:"",autofocus:""},null,8,["modelValue"]),o(i,{class:"mt-2",message:e(s).errors.email},null,8,["message"])]),r("div",y,[o(m,{for:"password",value:"Password"}),o(n,{id:"password",modelValue:e(s).password,"onUpdate:modelValue":a[1]||(a[1]=t=>e(s).password=t),type:"password",class:"block w-full mt-1",required:"",autocomplete:"new-password"},null,8,["modelValue"]),o(i,{class:"mt-2",message:e(s).errors.password},null,8,["message"])]),r("div",$,[o(m,{for:"password_confirmation",value:"Confirm Password"}),o(n,{id:"password_confirmation",modelValue:e(s).password_confirmation,"onUpdate:modelValue":a[2]||(a[2]=t=>e(s).password_confirmation=t),type:"password",class:"block w-full mt-1",required:"",autocomplete:"new-password"},null,8,["modelValue"]),o(i,{class:"mt-2",message:e(s).errors.password_confirmation},null,8,["message"])]),r("div",C,[o(h,{class:g({"opacity-25":e(s).processing}),disabled:e(s).processing},{default:l(()=>[S]),_:1},8,["class","disabled"])])],40,x)]),_:1})],64))}};export{j as default};