import{T as y,r as b,b as i,c as r,f as t,w as e,d as l,u as a,F as x,e as $,t as v,i as k,h as A,g as n}from"./app.a9a24307.js";import{_ as N}from"./ActionMessage.07cbddc8.js";import{_ as j}from"./ActionSection.5772d921.js";import{_ as P}from"./Checkbox.13b41e72.js";import{_ as U}from"./ConfirmationModal.3030223a.js";import{_ as L}from"./DangerButton.31c54523.js";import{_ as T}from"./DialogModal.b2084a17.js";import{_ as M}from"./FormSection.a52b2c18.js";import{_ as z,a as E}from"./TextInput.2def3c86.js";import{_ as w}from"./InputLabel.9961a68e.js";import{_ as S}from"./PrimaryButton.6d452cd1.js";import{_ as C}from"./SecondaryButton.d952e1d2.js";import{S as Y}from"./SectionBorder.cce86588.js";import"./SectionTitle.7ea6cb92.js";import"./plugin-vue_export-helper.21dcd24c.js";import"./Modal.146114d2.js";const q=n(" Create API Token "),G=n(" API tokens allow third-party services to authenticate with our application on your behalf. "),H={class:"col-span-6 sm:col-span-4"},J={key:0,class:"col-span-6"},K={class:"mt-2 grid grid-cols-1 md:grid-cols-2 gap-4"},O={class:"flex items-center"},Q={class:"ml-2 text-sm text-gray-600 dark:text-gray-400"},R=n(" Created. "),W=n(" Create "),X={key:0},Z={class:"mt-10 sm:mt-0"},ee=n(" Manage API Tokens "),se=n(" You may delete any of your existing tokens if they are no longer needed. "),te={class:"space-y-6"},oe={class:"break-all dark:text-white"},ne={class:"flex items-center ml-2"},ae={key:0,class:"text-sm text-gray-400"},le=["onClick"],ie=["onClick"],re=n(" API Token "),ce=l("div",null," Please copy your new API token. For your security, it won't be shown again. ",-1),de={key:0,class:"mt-4 bg-gray-100 dark:bg-gray-900 px-4 py-2 rounded font-mono text-sm text-gray-500 break-all"},me=n(" Close "),ue=n(" API Token Permissions "),_e={class:"grid grid-cols-1 md:grid-cols-2 gap-4"},pe={class:"flex items-center"},fe={class:"ml-2 text-sm text-gray-600 dark:text-gray-400"},ve=n(" Cancel "),ke=n(" Save "),ge=n(" Delete API Token "),he=n(" Are you sure you would like to delete this API token? "),ye=n(" Cancel "),be=n(" Delete "),Me={__name:"ApiTokenManager",props:{tokens:Array,availablePermissions:Array,defaultPermissions:Array},setup(d){const c=y({name:"",permissions:d.defaultPermissions}),u=y({permissions:[]}),h=y({}),g=b(!1),_=b(null),p=b(null),I=()=>{c.post(route("api-tokens.store"),{preserveScroll:!0,onSuccess:()=>{g.value=!0,c.reset()}})},F=m=>{u.permissions=m.abilities,_.value=m},V=()=>{u.put(route("api-tokens.update",_.value),{preserveScroll:!0,preserveState:!0,onSuccess:()=>_.value=null})},D=m=>{p.value=m},B=()=>{h.delete(route("api-tokens.destroy",p.value),{preserveScroll:!0,preserveState:!0,onSuccess:()=>p.value=null})};return(m,o)=>(i(),r("div",null,[t(M,{onSubmitted:I},{title:e(()=>[q]),description:e(()=>[G]),form:e(()=>[l("div",H,[t(w,{for:"name",value:"Name"}),t(z,{id:"name",modelValue:a(c).name,"onUpdate:modelValue":o[0]||(o[0]=s=>a(c).name=s),type:"text",class:"mt-1 block w-full",autofocus:""},null,8,["modelValue"]),t(E,{message:a(c).errors.name,class:"mt-2"},null,8,["message"])]),d.availablePermissions.length>0?(i(),r("div",J,[t(w,{for:"permissions",value:"Permissions"}),l("div",K,[(i(!0),r(x,null,$(d.availablePermissions,s=>(i(),r("div",{key:s},[l("label",O,[t(P,{checked:a(c).permissions,"onUpdate:checked":o[1]||(o[1]=f=>a(c).permissions=f),value:s},null,8,["checked","value"]),l("span",Q,v(s),1)])]))),128))])])):k("",!0)]),actions:e(()=>[t(N,{on:a(c).recentlySuccessful,class:"mr-3"},{default:e(()=>[R]),_:1},8,["on"]),t(S,{class:A({"opacity-25":a(c).processing}),disabled:a(c).processing},{default:e(()=>[W]),_:1},8,["class","disabled"])]),_:1}),d.tokens.length>0?(i(),r("div",X,[t(Y),l("div",Z,[t(j,null,{title:e(()=>[ee]),description:e(()=>[se]),content:e(()=>[l("div",te,[(i(!0),r(x,null,$(d.tokens,s=>(i(),r("div",{key:s.id,class:"flex items-center justify-between"},[l("div",oe,v(s.name),1),l("div",ne,[s.last_used_ago?(i(),r("div",ae," Last used "+v(s.last_used_ago),1)):k("",!0),d.availablePermissions.length>0?(i(),r("button",{key:1,class:"cursor-pointer ml-6 text-sm text-gray-400 underline",onClick:f=>F(s)}," Permissions ",8,le)):k("",!0),l("button",{class:"cursor-pointer ml-6 text-sm text-red-500",onClick:f=>D(s)}," Delete ",8,ie)])]))),128))])]),_:1})])])):k("",!0),t(T,{show:g.value,onClose:o[3]||(o[3]=s=>g.value=!1)},{title:e(()=>[re]),content:e(()=>[ce,m.$page.props.jetstream.flash.token?(i(),r("div",de,v(m.$page.props.jetstream.flash.token),1)):k("",!0)]),footer:e(()=>[t(C,{onClick:o[2]||(o[2]=s=>g.value=!1)},{default:e(()=>[me]),_:1})]),_:1},8,["show"]),t(T,{show:_.value!=null,onClose:o[6]||(o[6]=s=>_.value=null)},{title:e(()=>[ue]),content:e(()=>[l("div",_e,[(i(!0),r(x,null,$(d.availablePermissions,s=>(i(),r("div",{key:s},[l("label",pe,[t(P,{checked:a(u).permissions,"onUpdate:checked":o[4]||(o[4]=f=>a(u).permissions=f),value:s},null,8,["checked","value"]),l("span",fe,v(s),1)])]))),128))])]),footer:e(()=>[t(C,{onClick:o[5]||(o[5]=s=>_.value=null)},{default:e(()=>[ve]),_:1}),t(S,{class:A(["ml-3",{"opacity-25":a(u).processing}]),disabled:a(u).processing,onClick:V},{default:e(()=>[ke]),_:1},8,["class","disabled"])]),_:1},8,["show"]),t(U,{show:p.value!=null,onClose:o[8]||(o[8]=s=>p.value=null)},{title:e(()=>[ge]),content:e(()=>[he]),footer:e(()=>[t(C,{onClick:o[7]||(o[7]=s=>p.value=null)},{default:e(()=>[ye]),_:1}),t(L,{class:A(["ml-3",{"opacity-25":a(h).processing}]),disabled:a(h).processing,onClick:B},{default:e(()=>[be]),_:1},8,["class","disabled"])]),_:1},8,["show"])]))}};export{Me as default};