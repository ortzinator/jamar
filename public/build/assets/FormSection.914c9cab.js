import{k as n,b as r,c as i,f as l,w as a,j as t,d as e,L as c,h as p,u as m,i as u,M as g}from"./app.cdfe58ca.js";import{S as h}from"./SectionTitle.e2c47d8e.js";const _={class:"md:grid md:grid-cols-3 md:gap-6"},b={class:"mt-5 md:mt-0 md:col-span-2"},f={class:"grid grid-cols-6 gap-6"},v={key:0,class:"flex items-center justify-end px-4 py-3 bg-gray-50 dark:bg-gray-800 text-right sm:px-6 shadow sm:rounded-bl-md sm:rounded-br-md"},$={__name:"FormSection",emits:["submitted"],setup(y){const o=n(()=>!!g().actions);return(s,d)=>(r(),i("div",_,[l(h,null,{title:a(()=>[t(s.$slots,"title")]),description:a(()=>[t(s.$slots,"description")]),_:3}),e("div",b,[e("form",{onSubmit:d[0]||(d[0]=c(k=>s.$emit("submitted"),["prevent"]))},[e("div",{class:p(["px-4 py-5 bg-white dark:bg-gray-800 sm:p-6 shadow",m(o)?"sm:rounded-tl-md sm:rounded-tr-md":"sm:rounded-md"])},[e("div",f,[t(s.$slots,"form")])],2),m(o)?(r(),i("div",v,[t(s.$slots,"actions")])):u("",!0)],32)])]))}};export{$ as _};