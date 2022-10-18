import{b as c,c as u,d as s,j as v,Q as N,E as U,r as b,D as j,f as o,w as n,I as y,V as x,F as $,e as w,t as V,u as t,h as B,K as E,g as d,a as P}from"./app.2e6f92fa.js";import{s as L,_ as M,a as q,b as H,c as O}from"./JamarCurrencyTextBox.aa5476e1.js";import{A as T}from"./NewLayout.829ebda0.js";import{_ as z}from"./Input.99d58703.js";import{_ as m}from"./Label.5f7b3cb8.js";import{_ as p}from"./InputError.2fbc7a82.js";import{_ as K}from"./LoadingButton.b720bbb6.js";import{_ as Q}from"./plugin-vue_export-helper.21dcd24c.js";import{r as G}from"./ExclamationIcon.fbd12482.js";import"./TrashIcon.927c9d72.js";const J={},R={class:"py-5 md:p-5 md:grid-cols-3 md:grid"},W={class:"md:col-span-1"},X={class:"text-lg"},Y={class:"text-sm text-cool-grey-700"},Z={class:"mt-5 md:col-span-2 md:mt-0"};function ee(a,e){return c(),u("div",R,[s("div",W,[s("div",X,[v(a.$slots,"header")]),s("div",Y,[v(a.$slots,"description")])]),s("div",Z,[v(a.$slots,"default")])])}var g=Q(J,[["render",ee]]);const se={class:"py-5 font-bold"},oe=d(" Policies "),te=s("span",{class:"font-medium text-light-blue-vivid-400"},"/",-1),le=d(" New Policy "),ie=["onSubmit"],re={class:""},ne=d("Basics"),de=d(" Description of this section "),ae={class:"grid grid-cols-6 gap-4"},ce={class:"col-span-6"},ue={class:"flex items-center"},me=["value"],_e={class:"col-span-6"},pe=["value"],fe={class:"col-span-6"},he={class:"col-span-6"},ve=d("Period of Insurance"),ge={class:"col-span-6"},be=s("hr",{class:"h-px border-0 bg-cool-grey-100 text-cool-grey-500"},null,-1),ye=d("Policy Fields"),xe=d(" Description of this section "),$e=s("hr",{class:"h-px border-0 bg-cool-grey-100 text-cool-grey-500"},null,-1),we=d("Policyholders"),Ve=d(" Add policyholders here "),Pe={class:"mb-5 text-yellow-vivid-600"},ke=d(" Please add one or more policyholders "),Ce=s("hr",{class:"h-px border-0 bg-cool-grey-100 text-cool-grey-500"},null,-1),Fe={class:"flex justify-between mt-5"},Se=s("div",null,"Problems?",-1),Ie=d(" Create Policy "),Ae={layout:T},Oe=Object.assign(Ae,{__name:"Create",props:{users:{type:Array,required:!0},currency:{type:Object,required:!0}},setup(a){const e=N({number:null,contacts:[],period:[],fields:[],agent_id:U.Inertia.page.props.user.id,premium:null}),k=b([{id:1,name:"none",label:"None",fields:null},{id:2,name:"vehicle",label:"Vehicle",fields:[{id:1,name:"license",value:""},{id:2,name:"vin",value:""}]}]),h=b(null);j(h,i=>{e.fields=[],i&&(e.fields.push(...i),e.fields.map(r=>{const f={...r};return f.protected=!0,f}))});function C(){e.transform(i=>({...i,period_start:i.period[0],period_end:i.period[1]})).post(route("policies.store"))}function F(i){return _.findIndex(e.contacts,r=>_.isMatch(r,i))>-1}function S(i){F(i)||e.contacts.push(i)}function I(i){window.open(i.link,"_blank").focus()}function A(i){_.pull(e.fields,i)}return(i,r)=>{const f=P("InertiaHead"),D=P("InertiaLink");return c(),u("div",null,[s("div",se,[o(f,{title:"Create Policy"}),s("h1",null,[o(D,{class:"text-light-blue-vivid-400 hover:text-light-blue-vivid-600",href:i.route("policies")},{default:n(()=>[oe]),_:1},8,["href"]),te,le])]),s("form",{onSubmit:E(C,["prevent"])},[s("div",re,[o(g,null,{header:n(()=>[ne]),description:n(()=>[de]),default:n(()=>[s("div",ae,[s("div",ce,[o(m,{for:"template",value:"Policy Type"}),s("div",ue,[y(s("select",{"onUpdate:modelValue":r[0]||(r[0]=l=>h.value=l),class:"w-full mt-1 border rounded border-cool-grey-200"},[(c(!0),u($,null,w(k.value,l=>(c(),u("option",{key:l.id,value:l.fields},V(l.label),9,me))),128))],512),[[x,h.value]])])]),s("div",_e,[o(m,{for:"agent",value:"Assigned Agent"}),y(s("select",{"onUpdate:modelValue":r[1]||(r[1]=l=>t(e).agent_id=l),class:"w-full mt-1 border rounded border-cool-grey-200"},[(c(!0),u($,null,w(a.users,l=>(c(),u("option",{key:l.id,value:l.id},V(l.name),9,pe))),128))],512),[[x,t(e).agent_id]])]),s("div",fe,[o(m,{for:"number",value:"Policy Number"}),o(z,{id:"number",modelValue:t(e).number,"onUpdate:modelValue":r[2]||(r[2]=l=>t(e).number=l),type:"text",class:"block w-full mt-1"},null,8,["modelValue"]),o(p,{message:t(e).errors.number},null,8,["message"])]),s("div",he,[o(m,null,{default:n(()=>[ve]),_:1}),s("div",{class:B([{formError:t(e).errors.period_start||t(e).errors.period_end},"mt-1"])},[o(t(L),{modelValue:t(e).period,"onUpdate:modelValue":r[3]||(r[3]=l=>t(e).period=l),"selection-mode":"range","show-button-bar":"true"},null,8,["modelValue"])],2),o(p,{message:t(e).errors.period_start},null,8,["message"]),o(p,{message:t(e).errors.period_end},null,8,["message"])]),s("div",ge,[o(m,{value:`Premium (${a.currency.code})`},null,8,["value"]),o(M,{id:"premium",modelValue:t(e).premium,"onUpdate:modelValue":r[4]||(r[4]=l=>t(e).premium=l),options:{currency:a.currency.code,valueScaling:"precision"},class:"w-full mt-1 mr-5 border rounded border-cool-grey-200"},null,8,["modelValue","options"]),o(p,{message:t(e).errors.premium},null,8,["message"])])])]),_:1}),be,o(g,null,{header:n(()=>[ye]),description:n(()=>[xe]),default:n(()=>[o(q,{class:"mb-5",fields:t(e).fields,onFieldAdded:r[5]||(r[5]=l=>t(e).fields.push(l)),onFieldDeleted:A},null,8,["fields"])]),_:1}),$e,o(g,null,{header:n(()=>[we]),description:n(()=>[Ve]),default:n(()=>[o(H,{contacts:t(e).contacts,class:"mb-5",removable:"",onContactClicked:I},{noContacts:n(()=>[s("div",Pe,[o(t(G),{class:"inline w-5 h-5 mr-2"}),ke])]),_:1},8,["contacts"]),o(p,{message:t(e).errors.contacts},null,8,["message"]),o(O,{onSelected:S})]),_:1}),Ce,s("div",Fe,[Se,o(K,{class:"btn btn-primary",type:"submit",loading:t(e).processing},{default:n(()=>[Ie]),_:1},8,["loading"])])])],40,ie)])}}});export{Oe as default};
