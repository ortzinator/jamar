import{r as u,Q as f,b as y,l as w,w as e,d as c,f as t,u as a,Y as h,h as v,g as s}from"./app.2e6f92fa.js";import{_ as g}from"./ActionSection.219a9d76.js";import{_ as k}from"./DialogModal.5d7f4137.js";import{_ as m}from"./DangerButton.ac236f24.js";import{_ as x}from"./Input.99d58703.js";import{_ as C}from"./InputError.2fbc7a82.js";import{_ as D}from"./SecondaryButton.a5ea2fb7.js";import"./SectionTitle.601c281c.js";import"./plugin-vue_export-helper.21dcd24c.js";import"./Modal.b6560713.js";const b=s(" Delete Account "),V=s(" Permanently delete your account. "),$=c("div",{class:"max-w-xl text-sm text-gray-600"}," Once your account is deleted, all of its resources and data will be permanently deleted. Before deleting your account, please download any data or information that you wish to retain. ",-1),A={class:"mt-5"},U=s(" Delete Account "),B=s(" Delete Account "),F=s(" Are you sure you want to delete your account? Once your account is deleted, all of its resources and data will be permanently deleted. Please enter your password to confirm you would like to permanently delete your account. "),K={class:"mt-4"},N=s(" Cancel "),P=s(" Delete Account "),H={__name:"DeleteUserForm",setup(I){const r=u(!1),n=u(null),o=f({password:""}),_=()=>{r.value=!0,setTimeout(()=>n.value.focus(),250)},l=()=>{r.value=!1,o.reset()},i=()=>{o.delete(route("current-user.destroy"),{preserveScroll:!0,onSuccess:()=>l(),onError:()=>n.value.focus(),onFinish:()=>o.reset()})};return(O,d)=>(y(),w(g,null,{title:e(()=>[b]),description:e(()=>[V]),content:e(()=>[$,c("div",A,[t(m,{onClick:_},{default:e(()=>[U]),_:1})]),t(k,{show:r.value,onClose:l},{title:e(()=>[B]),content:e(()=>[F,c("div",K,[t(x,{ref_key:"passwordInput",ref:n,modelValue:a(o).password,"onUpdate:modelValue":d[0]||(d[0]=p=>a(o).password=p),type:"password",class:"block w-3/4 mt-1",placeholder:"Password",onKeyup:h(i,["enter"])},null,8,["modelValue","onKeyup"]),t(C,{message:a(o).errors.password,class:"mt-2"},null,8,["message"])])]),footer:e(()=>[t(D,{onClick:l},{default:e(()=>[N]),_:1}),t(m,{class:v(["ml-3",{"opacity-25":a(o).processing}]),disabled:a(o).processing,onClick:i},{default:e(()=>[P]),_:1},8,["class","disabled"])]),_:1},8,["show"])]),_:1}))}};export{H as default};
