import{r,o as l,b as n,c as i}from"./app.f41975ad.js";const c=["value"],f={props:{modelValue:{type:String,default:""}},emits:["update:modelValue"],setup(u,{expose:t}){const e=r(null);return l(()=>{e.value.hasAttribute("autofocus")&&e.value.focus()}),t({focus:()=>e.value.focus()}),(s,o)=>(n(),i("input",{ref_key:"input",ref:e,class:"rounded-md shadow-sm border-cool-grey-300 focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50",value:u.modelValue,onInput:o[0]||(o[0]=a=>s.$emit("update:modelValue",a.target.value))},null,40,c))}};export{f as _};