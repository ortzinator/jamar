import{U as u,c,f as s,u as a,K as f,w as l,F as _,b as w,d as r,h as V,Q as b,g as k}from"./app.418331d3.js";import{J as v}from"./AuthenticationCard.64b18f7c.js";import{_ as g}from"./AuthenticationCardLogo.f89221f7.js";import{_ as h}from"./Button.5a5e721f.js";import{_ as i}from"./Input.145b177d.js";import{_ as m}from"./Label.1f5ecdf3.js";import{_ as x}from"./ValidationErrors.44f1d6e7.js";/* empty css            */import"./plugin-vue_export-helper.21dcd24c.js";const y=["onSubmit"],$={class:"mt-4"},C={class:"mt-4"},F={class:"flex items-center justify-end mt-4"},P=k(" Reset Password "),A={props:{email:String,token:String},setup(n){const d=n,o=u({token:d.token,email:d.email,password:"",password_confirmation:""}),p=()=>{o.post(route("password.update"),{onFinish:()=>o.reset("password","password_confirmation")})};return(S,e)=>(w(),c(_,null,[s(a(f),{title:"Reset Password"}),s(v,null,{logo:l(()=>[s(g)]),default:l(()=>[s(x,{class:"mb-4"}),r("form",{onSubmit:b(p,["prevent"])},[r("div",null,[s(m,{for:"email",value:"Email"}),s(i,{id:"email",modelValue:a(o).email,"onUpdate:modelValue":e[0]||(e[0]=t=>a(o).email=t),type:"email",class:"mt-1 block w-full",required:"",autofocus:""},null,8,["modelValue"])]),r("div",$,[s(m,{for:"password",value:"Password"}),s(i,{id:"password",modelValue:a(o).password,"onUpdate:modelValue":e[1]||(e[1]=t=>a(o).password=t),type:"password",class:"mt-1 block w-full",required:"",autocomplete:"new-password"},null,8,["modelValue"])]),r("div",C,[s(m,{for:"password_confirmation",value:"Confirm Password"}),s(i,{id:"password_confirmation",modelValue:a(o).password_confirmation,"onUpdate:modelValue":e[2]||(e[2]=t=>a(o).password_confirmation=t),type:"password",class:"mt-1 block w-full",required:"",autocomplete:"new-password"},null,8,["modelValue"])]),r("div",F,[s(h,{class:V({"opacity-25":a(o).processing}),disabled:a(o).processing},{default:l(()=>[P]),_:1},8,["class","disabled"])])],40,y)]),_:1})],64))}};export{A as default};
