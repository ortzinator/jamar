import{Q as C,k as N,D,r as S,b as c,c as d,d as t,f as a,u as o,I as j,R as B,w as r,h as F,t as u,g as b,F as $,a as f}from"./app.2e6f92fa.js";import{A as L}from"./NewLayout.829ebda0.js";import{_ as O,a as q}from"./FilterSelect.24862de0.js";import{_ as A}from"./DataTable.76e0f396.js";import{_ as v}from"./Highlighter.86e87401.js";import{i as E,f as x}from"./util.e8b714b3.js";import{r as H}from"./ExclamationIcon.fbd12482.js";import"./plugin-vue_export-helper.21dcd24c.js";import"./hidden.7d711a76.js";import"./form.c56a6aaf.js";const R={class:"py-5 font-bold"},T=t("h1",null,"Policies",-1),U={class:"flex justify-between mb-4"},z={class:"flex mr-4"},M={class:"flex bg-white rounded shadow cursor-default"},Q=t("span",null,"Create",-1),G=t("span",{class:"hidden md:inline"}," Policy",-1),J={class:"overflow-x-auto bg-white rounded shadow"},K=["textContent"],W={key:0,class:"flex items-center text-red-vivid-600"},X=b(" No policyholders found "),Y={key:1,class:"overflow-hidden text-ellipsis whitespace-nowrap"},Z={layout:L},de=Object.assign(Z,{__name:"Index",props:{policies:{type:Object,required:!0},filters:{type:Object,required:!0}},setup(n){var h,p;const m=n,s=C({search:(h=m.filters.search)!=null?h:"",trashed:(p=m.filters.trashed)!=null?p:""}),y=_.debounce(()=>{s.transform(i=>_.pickBy(i)).get("/policies",{only:["policies"],preserveState:!0,preserveScroll:!0})},400),w=N(()=>({search:s.search,trashed:s.trashed}));function g(){s.search="",s.trashed=null}D(w,()=>y());const k=S([{text:"Number",value:"number"},{text:"Policyholders",value:"contactNamesPreview"},{text:"Premium",value:"premium"},{text:"Date Issued",value:"created_at"},{text:"Ending",value:"period_end"}]);return(i,l)=>{const I=f("InertiaHead"),P=f("InertiaLink");return c(),d($,null,[t("div",R,[a(I,{title:"Policies"}),T]),t("div",null,[t("div",U,[t("div",z,[t("div",M,[a(O,{modelValue:o(s).trashed,"onUpdate:modelValue":l[0]||(l[0]=e=>o(s).trashed=e)},null,8,["modelValue"]),j(t("input",{"onUpdate:modelValue":l[1]||(l[1]=e=>o(s).search=e),type:"text",placeholder:"Search...",class:"w-full border-0 rounded-r"},null,512),[[B,o(s).search]])]),t("button",{class:"ml-3 text-sm text-cool-grey-500 hover:text-cool-grey-700 focus:text-light-blue-vivid-500",type:"button",onClick:g}," Reset ")]),a(P,{class:"btn btn-primary",href:i.route("policies.create")},{default:r(()=>[Q,G]),_:1},8,["href"])]),t("div",J,[a(A,{columns:k.value,"data-source":n.policies.data,"route-name":"policies.edit"},{["column.number"]:r(({value:e})=>[a(v,{text:e,term:o(s).search},null,8,["text","term"])]),["column.period_end"]:r(({value:e})=>[t("span",{class:F({"text-red-vivid-500":o(E)(e)})},u(o(x)(e)),3)]),["column.created_at"]:r(({value:e})=>[b(u(o(x)(e)),1)]),["column.premium"]:r(({value:e})=>[t("div",{class:"w-full text-right",textContent:u(e.formatted)},null,8,K)]),["column.contactNamesPreview"]:r(({value:e,row:V})=>[V.contacts.length===0?(c(),d("div",W,[a(o(H),{class:"w-5 h-5 mr-2"}),X])):(c(),d("div",Y,[a(v,{text:e,term:o(s).search},null,8,["text","term"])]))]),_:2},1032,["columns","data-source"])]),a(q,{links:n.policies.meta.links},null,8,["links"])])],64)}}});export{de as default};