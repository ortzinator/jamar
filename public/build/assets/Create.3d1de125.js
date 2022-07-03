import{U as f,c as p,d as e,f as s,w as i,u as o,M as h,V as v,Q as b,F as g,g as r,a as l,b as x}from"./app.418331d3.js";import{A as w}from"./NewLayout.0a46786c.js";import{_ as y}from"./Input.145b177d.js";import{_ as d}from"./Label.1f5ecdf3.js";import{_ as c}from"./InputError.f6eef736.js";import{_ as V}from"./LoadingButton.2b9415b2.js";/* empty css            */import"./plugin-vue_export-helper.21dcd24c.js";const C={class:"py-5 font-bold"},k=r(" Contacts "),N=e("span",{class:"font-medium text-light-blue-vivid-400"},"\xA0/",-1),I=r(" New Contact "),$=["onSubmit"],A={class:"max-w-3xl overflow-hidden bg-white rounded shadow"},B={class:"p-5"},F={class:"mb-5"},L={class:"mb-5"},M={class:"flex items-center px-8 py-4 border-t bg-cool-grey-50 border-cool-grey-100"},U=r(" Create contact "),H={layout:w},J=Object.assign(H,{setup(S){const t=f({name:null,address:null});function m(){this.form.post(this.route("contacts.store"))}return(T,a)=>{const _=l("InertiaHead"),u=l("InertiaLink");return x(),p(g,null,[e("div",C,[s(_,{title:"Create Contact"}),e("h1",null,[s(u,{class:"text-light-blue-vivid-400 hover:text-light-blue-vivid-600",href:"/contacts"},{default:i(()=>[k]),_:1}),N,I])]),e("form",{onSubmit:b(m,["prevent"])},[e("div",A,[e("div",B,[e("div",F,[s(d,{for:"name",value:"Name"}),s(y,{id:"name",modelValue:o(t).name,"onUpdate:modelValue":a[0]||(a[0]=n=>o(t).name=n),type:"text",class:"block w-full"},null,8,["modelValue"]),s(c,{message:o(t).errors.name},null,8,["message"])]),e("div",L,[s(d,{for:"address",value:"Address"}),h(e("textarea",{id:"address","onUpdate:modelValue":a[1]||(a[1]=n=>o(t).address=n),name:"address",class:"block w-full",cols:"30",rows:"10"},null,512),[[v,o(t).address]]),s(c,{message:o(t).errors.address},null,8,["message"])])]),e("div",M,[s(V,{class:"ml-auto btn btn-primary",type:"submit",loading:o(t).processing},{default:i(()=>[U]),_:1},8,["loading"])])])],40,$)],64)}}});export{J as default};
