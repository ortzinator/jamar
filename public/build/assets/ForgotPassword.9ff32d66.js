import{T as u,b as r,c as m,f as s,u as t,Z as c,w as o,t as _,i as f,d as a,h as p,L as g,F as w,g as x}from"./app.a9a24307.js";import{_ as y,A as b}from"./AuthenticationCardLogo.56a66a65.js";import{_ as h,a as k}from"./TextInput.2def3c86.js";import{_ as V}from"./InputLabel.9961a68e.js";import{_ as v}from"./PrimaryButton.6d452cd1.js";import"./plugin-vue_export-helper.21dcd24c.js";const F=a("div",{class:"mb-4 text-sm text-gray-600 dark:text-gray-400"}," Forgot your password? No problem. Just let us know your email address and we will email you a password reset link that will allow you to choose a new one. ",-1),N={key:0,class:"mb-4 text-sm font-medium text-green-600 dark:text-green-400"},$=["onSubmit"],C={class:"flex items-center justify-end mt-4"},S=x(" Email Password Reset Link "),q={__name:"ForgotPassword",props:{status:String},setup(i){const e=u({email:""}),n=()=>{e.post(route("password.email"))};return(B,l)=>(r(),m(w,null,[s(t(c),{title:"Forgot Password"}),s(b,null,{logo:o(()=>[s(y)]),default:o(()=>[F,i.status?(r(),m("div",N,_(i.status),1)):f("",!0),a("form",{onSubmit:g(n,["prevent"])},[a("div",null,[s(V,{for:"email",value:"Email"}),s(h,{id:"email",modelValue:t(e).email,"onUpdate:modelValue":l[0]||(l[0]=d=>t(e).email=d),type:"email",class:"block w-full mt-1",required:"",autofocus:""},null,8,["modelValue"]),s(k,{class:"mt-2",message:t(e).errors.email},null,8,["message"])]),a("div",C,[s(v,{class:p({"opacity-25":t(e).processing}),disabled:t(e).processing},{default:o(()=>[S]),_:1},8,["class","disabled"])])],40,$)]),_:1})],64))}};export{q as default};
