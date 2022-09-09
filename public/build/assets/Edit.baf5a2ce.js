import{b as m,l as B,f as s,U as N,r as _,c as f,d as e,w as l,g as r,t as j,u as o,i as v,Q as U,M as p,V as b,F as I,a as h,h as M}from"./app.f41975ad.js";import{r as R}from"./TrashIcon.78cf752d.js";import{D as F,A as L,a as O,b as S}from"./NewLayout.54c0939e.js";import{_ as T}from"./LoadingButton.bea9e802.js";import{_ as q}from"./Input.812f980a.js";import{_ as w}from"./Label.58d8b60c.js";import{_ as g}from"./InputError.2d876182.js";import{_ as y}from"./ConfirmationModal.810ea449.js";import"./plugin-vue_export-helper.21dcd24c.js";import"./Modal.a2027fd7.js";function E(u,i){return m(),B("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor"},[s("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M9 5l7 7-7 7"})])}const H={class:"py-5 font-bold"},z=r(" Contacts "),P=e("span",{class:"font-medium text-light-blue-vivid-400"},"\xA0/",-1),Q={class:"max-w-3xl overflow-hidden bg-white rounded shadow"},G={key:0,class:"flex items-center justify-between p-5 pl-8 bg-yellow-vivid-200"},J={class:"flex"},K=r(" This contact is deleted "),W=["onSubmit"],X={class:"p-8"},Y={class:"mb-5"},Z={class:"mb-5"},ee={class:"mb-5"},te=e("label",{for:"notes",class:"cursor-pointer"}," Agent Notes ",-1),se={class:"flex items-center px-8 py-4 border-t bg-cool-grey-50 border-cool-grey-100"},oe=r(" Update contact "),ne=r(" Restore Contact "),ae=r(" Are you sure you want to restore this contact? "),le=r(" Delete Contact "),re=r(" Are you sure you want to delete the Contact? "),ie={layout:L},we=Object.assign(ie,{props:{errors:{type:Object,required:!0},contact:{type:Object,required:!0}},setup(u){const i=u,n=N({name:i.contact.name,address:i.contact.address,notes:i.contact.notes}),d=_(!1),c=_(!1);function x(){n.put(route("contacts.update",i.contact.id))}function C(){n.delete(route("contacts.destroy",i.contact.id)),d.value=!1}function k(){n.put(route("contacts.restore",i.contact.id)),c.value=!1}return($,t)=>{const D=h("InertiaHead"),V=h("InertiaLink");return m(),f(I,null,[s(D,{title:"Edit Contact"}),e("div",H,[e("h1",null,[s(V,{class:"text-light-blue-vivid-400 hover:text-light-blue-vivid-600",href:$.route("contacts")},{default:l(()=>[z]),_:1},8,["href"]),P,r(" "+j(o(n).name),1)])]),e("div",Q,[u.contact.deleted_at?(m(),f("div",G,[e("div",J,[s(o(R),{class:"w-5 h-5 mr-2"}),K]),e("button",{class:"btn hover:underline",onClick:t[0]||(t[0]=a=>c.value=!0)},"Restore")])):v("",!0),e("form",{onSubmit:U(x,["prevent"])},[e("div",X,[e("div",Y,[s(w,{for:"name",value:"Name"}),s(q,{id:"name",modelValue:o(n).name,"onUpdate:modelValue":t[1]||(t[1]=a=>o(n).name=a),type:"text",class:"block w-full"},null,8,["modelValue"]),s(g,{message:o(n).errors.name},null,8,["message"])]),e("div",Z,[s(w,{for:"address",value:"Address"}),p(e("textarea",{id:"address","onUpdate:modelValue":t[2]||(t[2]=a=>o(n).address=a),name:"address",class:"block w-full",cols:"30",rows:"10"},null,512),[[b,o(n).address]]),s(g,{message:o(n).errors.address},null,8,["message"])]),e("div",ee,[s(o(F),null,{default:l(({open:a})=>[s(o(O),{class:"flex items-center"},{default:l(()=>[te,s(o(E),{class:M([a?"rotate-90":"","w-5 h-5 ml-2"])},null,8,["class"])]),_:2},1024),s(o(S),{class:"mt-5"},{default:l(()=>[p(e("textarea",{id:"notes","onUpdate:modelValue":t[3]||(t[3]=A=>o(n).notes=A),name:"notes",class:"block w-full",cols:"30",rows:"10"},null,512),[[b,o(n).notes]])]),_:1})]),_:1})])]),e("div",se,[u.contact.deleted_at?v("",!0):(m(),f("button",{key:0,class:"text-red-vivid-600 hover:underline",tabindex:"-1",type:"button",onClick:t[4]||(t[4]=a=>d.value=!0)}," Delete contact ")),s(T,{class:"ml-auto btn btn-primary",type:"submit",loading:o(n).processing},{default:l(()=>[oe]),_:1},8,["loading"])])],40,W)]),s(y,{show:c.value,onClose:t[6]||(t[6]=a=>c.value=!1)},{title:l(()=>[ne]),content:l(()=>[ae]),footer:l(()=>[e("button",{class:"btn",onClick:t[5]||(t[5]=a=>c.value=!1)},"Cancel"),e("button",{class:"ml-2 btn btn-danger",onClick:k},"Restore")]),_:1},8,["show"]),s(y,{show:d.value,onClose:t[8]||(t[8]=a=>d.value=!1)},{title:l(()=>[le]),content:l(()=>[re]),footer:l(()=>[e("button",{class:"btn",onClick:t[7]||(t[7]=a=>d.value=!1)},"Cancel"),e("button",{class:"ml-2 btn btn-danger",onClick:C},"Delete Contact")]),_:1},8,["show"])],64)}}});export{we as default};