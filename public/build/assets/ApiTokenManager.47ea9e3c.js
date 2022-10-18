import{_ as w}from"./ActionMessage.bf88cb8e.js";import{_ as I}from"./ActionSection.219a9d76.js";import{_ as M}from"./Button.4be7ecce.js";import{_ as N}from"./ConfirmationModal.0f181955.js";import{_ as V}from"./DangerButton.ac236f24.js";import{_ as L}from"./DialogModal.5d7f4137.js";import{_ as E}from"./FormSection.21091828.js";import{_ as j}from"./Input.99d58703.js";import{_ as U}from"./Checkbox.71cc0bab.js";import{_ as z}from"./InputError.2fbc7a82.js";import{_ as Y}from"./Label.5f7b3cb8.js";import{_ as q}from"./SecondaryButton.a5ea2fb7.js";import{J as G}from"./SectionBorder.6957e068.js";import{_ as H}from"./plugin-vue_export-helper.21dcd24c.js";import{b as a,c,f as s,w as o,d as l,F as f,e as h,t as u,i as k,h as T,g as i,a as r}from"./app.2e6f92fa.js";import"./SectionTitle.601c281c.js";import"./Modal.b6560713.js";const K={components:{JetActionMessage:w,JetActionSection:I,JetButton:M,JetConfirmationModal:N,JetDangerButton:V,JetDialogModal:L,JetFormSection:E,JetInput:j,JetCheckbox:U,JetInputError:z,JetLabel:Y,JetSecondaryButton:q,JetSectionBorder:G},props:["tokens","availablePermissions","defaultPermissions"],data(){return{createApiTokenForm:this.$inertia.form({name:"",permissions:this.defaultPermissions}),updateApiTokenForm:this.$inertia.form({permissions:[]}),deleteApiTokenForm:this.$inertia.form(),displayingToken:!1,managingPermissionsFor:null,apiTokenBeingDeleted:null}},methods:{createApiToken(){this.createApiTokenForm.post(route("api-tokens.store"),{preserveScroll:!0,onSuccess:()=>{this.displayingToken=!0,this.createApiTokenForm.reset()}})},manageApiTokenPermissions(m){this.updateApiTokenForm.permissions=m.abilities,this.managingPermissionsFor=m},updateApiToken(){this.updateApiTokenForm.put(route("api-tokens.update",this.managingPermissionsFor),{preserveScroll:!0,preserveState:!0,onSuccess:()=>this.managingPermissionsFor=null})},confirmApiTokenDeletion(m){this.apiTokenBeingDeleted=m},deleteApiToken(){this.deleteApiTokenForm.delete(route("api-tokens.destroy",this.apiTokenBeingDeleted),{preserveScroll:!0,preserveState:!0,onSuccess:()=>this.apiTokenBeingDeleted=null})}}},O=i(" Create API Token "),Q=i(" API tokens allow third-party services to authenticate with our application on your behalf. "),R={class:"col-span-6 sm:col-span-4"},W={key:0,class:"col-span-6"},X={class:"grid grid-cols-1 gap-4 mt-2 md:grid-cols-2"},Z={class:"flex items-center"},$={class:"ml-2 text-sm text-cool-grey-600"},ee=i(" Created. "),oe=i(" Create "),te={key:0},se={class:"mt-10 sm:mt-0"},ne=i(" Manage API Tokens "),ie=i(" You may delete any of your existing tokens if they are no longer needed. "),re={class:"space-y-6"},le={class:"flex items-center"},ae={key:0,class:"text-sm text-cool-grey-400"},ce=["onClick"],me=["onClick"],de=i(" API Token "),pe=l("div",null," Please copy your new API token. For your security, it won't be shown again. ",-1),_e={key:0,class:"px-4 py-2 mt-4 font-mono text-sm rounded bg-cool-grey-100 text-cool-grey-500"},ue=i(" Close "),ke=i(" API Token Permissions "),ge={class:"grid grid-cols-1 gap-4 md:grid-cols-2"},fe={class:"flex items-center"},he={class:"ml-2 text-sm text-cool-grey-600"},Te=i(" Nevermind "),ve=i(" Save "),Ae=i(" Delete API Token "),ye=i(" Are you sure you would like to delete this API token? "),Je=i(" Nevermind "),Fe=i(" Delete ");function be(m,n,d,Ce,e,p){const v=r("JetLabel"),F=r("JetInput"),b=r("JetInputError"),A=r("JetCheckbox"),C=r("JetActionMessage"),y=r("JetButton"),P=r("JetFormSection"),x=r("JetSectionBorder"),S=r("JetActionSection"),g=r("JetSecondaryButton"),J=r("JetDialogModal"),B=r("JetDangerButton"),D=r("JetConfirmationModal");return a(),c("div",null,[s(P,{onSubmitted:p.createApiToken},{title:o(()=>[O]),description:o(()=>[Q]),form:o(()=>[l("div",R,[s(v,{for:"name",value:"Name"}),s(F,{id:"name",modelValue:e.createApiTokenForm.name,"onUpdate:modelValue":n[0]||(n[0]=t=>e.createApiTokenForm.name=t),type:"text",class:"block w-full mt-1",autofocus:""},null,8,["modelValue"]),s(b,{message:e.createApiTokenForm.errors.name,class:"mt-2"},null,8,["message"])]),d.availablePermissions.length>0?(a(),c("div",W,[s(v,{for:"permissions",value:"Permissions"}),l("div",X,[(a(!0),c(f,null,h(d.availablePermissions,t=>(a(),c("div",{key:t},[l("label",Z,[s(A,{checked:e.createApiTokenForm.permissions,"onUpdate:checked":n[1]||(n[1]=_=>e.createApiTokenForm.permissions=_),value:t},null,8,["checked","value"]),l("span",$,u(t),1)])]))),128))])])):k("",!0)]),actions:o(()=>[s(C,{on:e.createApiTokenForm.recentlySuccessful,class:"mr-3"},{default:o(()=>[ee]),_:1},8,["on"]),s(y,{class:T({"opacity-25":e.createApiTokenForm.processing}),disabled:e.createApiTokenForm.processing},{default:o(()=>[oe]),_:1},8,["class","disabled"])]),_:1},8,["onSubmitted"]),d.tokens.length>0?(a(),c("div",te,[s(x),l("div",se,[s(S,null,{title:o(()=>[ne]),description:o(()=>[ie]),content:o(()=>[l("div",re,[(a(!0),c(f,null,h(d.tokens,t=>(a(),c("div",{key:t.id,class:"flex items-center justify-between"},[l("div",null,u(t.name),1),l("div",le,[t.last_used_ago?(a(),c("div",ae," Last used "+u(t.last_used_ago),1)):k("",!0),d.availablePermissions.length>0?(a(),c("button",{key:1,class:"ml-6 text-sm underline cursor-pointer text-cool-grey-400",onClick:_=>p.manageApiTokenPermissions(t)}," Permissions ",8,ce)):k("",!0),l("button",{class:"ml-6 text-sm cursor-pointer text-red-vivid-500",onClick:_=>p.confirmApiTokenDeletion(t)}," Delete ",8,me)])]))),128))])]),_:1})])])):k("",!0),s(J,{show:e.displayingToken,onClose:n[3]||(n[3]=t=>e.displayingToken=!1)},{title:o(()=>[de]),content:o(()=>[pe,m.$page.props.jetstream.flash.token?(a(),c("div",_e,u(m.$page.props.jetstream.flash.token),1)):k("",!0)]),footer:o(()=>[s(g,{onClick:n[2]||(n[2]=t=>e.displayingToken=!1)},{default:o(()=>[ue]),_:1})]),_:1},8,["show"]),s(J,{show:e.managingPermissionsFor,onClose:n[6]||(n[6]=t=>e.managingPermissionsFor=null)},{title:o(()=>[ke]),content:o(()=>[l("div",ge,[(a(!0),c(f,null,h(d.availablePermissions,t=>(a(),c("div",{key:t},[l("label",fe,[s(A,{checked:e.updateApiTokenForm.permissions,"onUpdate:checked":n[4]||(n[4]=_=>e.updateApiTokenForm.permissions=_),value:t},null,8,["checked","value"]),l("span",he,u(t),1)])]))),128))])]),footer:o(()=>[s(g,{onClick:n[5]||(n[5]=t=>e.managingPermissionsFor=null)},{default:o(()=>[Te]),_:1}),s(y,{class:T(["ml-2",{"opacity-25":e.updateApiTokenForm.processing}]),disabled:e.updateApiTokenForm.processing,onClick:p.updateApiToken},{default:o(()=>[ve]),_:1},8,["class","disabled","onClick"])]),_:1},8,["show"]),s(D,{show:e.apiTokenBeingDeleted,onClose:n[8]||(n[8]=t=>e.apiTokenBeingDeleted=null)},{title:o(()=>[Ae]),content:o(()=>[ye]),footer:o(()=>[s(g,{onClick:n[7]||(n[7]=t=>e.apiTokenBeingDeleted=null)},{default:o(()=>[Je]),_:1}),s(B,{class:T(["ml-2",{"opacity-25":e.deleteApiTokenForm.processing}]),disabled:e.deleteApiTokenForm.processing,onClick:p.deleteApiToken},{default:o(()=>[Fe]),_:1},8,["class","disabled","onClick"])]),_:1},8,["show"])])}var Ge=H(K,[["render",be]]);export{Ge as default};
