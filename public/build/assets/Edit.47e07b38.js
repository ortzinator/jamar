import{T as E,r as v,b as m,c as f,f as s,d as t,w as l,g as r,t as I,u as o,i as b,L as N,E as h,Q as g,h as T,F as j,a as _}from"./app.3b878662.js";import{G as L,J as R,a as U,A as B}from"./AppLayout.b9e59cce.js";import{_ as O}from"./LoadingButton.f70bfa57.js";import{_ as S}from"./TextInput.259eaf44.js";import{_ as w}from"./InputLabel.32e90572.js";import{_ as y}from"./ConfirmationModal.7fa895a7.js";import{r as q}from"./TrashIcon.278f2c06.js";import{r as F}from"./ChevronRightIcon.b9d7a1b5.js";import"./plugin-vue_export-helper.21dcd24c.js";import"./Modal.3ffd9b89.js";const H={class:"py-5 font-bold"},M=r(" Contacts "),z=t("span",{class:"font-medium text-light-blue-vivid-400"},"\xA0/",-1),G={class:"max-w-3xl overflow-hidden bg-white rounded shadow"},J={key:0,class:"flex items-center justify-between p-5 pl-8 bg-yellow-vivid-200"},Q={class:"flex"},K=r(" This contact is deleted "),P=["onSubmit"],W={class:"p-8"},X={class:"mb-5"},Y={class:"mb-5"},Z={class:"mb-5"},tt=t("label",{for:"notes",class:"cursor-pointer"}," Agent Notes ",-1),et={class:"flex items-center px-8 py-4 border-t bg-cool-grey-50 border-cool-grey-100"},st=r(" Update contact "),ot=r(" Restore Contact "),nt=r(" Are you sure you want to restore this contact? "),at=r(" Delete Contact "),lt=r(" Are you sure you want to delete the Contact? "),rt={layout:B},ht=Object.assign(rt,{__name:"Edit",props:{errors:{type:Object,required:!0},contact:{type:Object,required:!0}},setup(u){const i=u,n=E({name:i.contact.name,address:i.contact.address,notes:i.contact.notes}),d=v(!1),c=v(!1);function x(){n.put(route("contacts.update",i.contact.id))}function C(){n.delete(route("contacts.destroy",i.contact.id)),d.value=!1}function k(){n.put(route("contacts.restore",i.contact.id)),c.value=!1}return($,e)=>{const V=_("InertiaHead"),A=_("InertiaLink"),p=_("TextInputError");return m(),f(j,null,[s(V,{title:"Edit Contact"}),t("div",H,[t("h1",null,[s(A,{class:"text-light-blue-vivid-400 hover:text-light-blue-vivid-600",href:$.route("contacts.index")},{default:l(()=>[M]),_:1},8,["href"]),z,r(" "+I(o(n).name),1)])]),t("div",G,[u.contact.deleted_at?(m(),f("div",J,[t("div",Q,[s(o(q),{class:"w-5 h-5 mr-2"}),K]),t("button",{class:"btn hover:underline",onClick:e[0]||(e[0]=a=>c.value=!0)},"Restore")])):b("",!0),t("form",{onSubmit:N(x,["prevent"])},[t("div",W,[t("div",X,[s(w,{for:"name",value:"Name"}),s(S,{id:"name",modelValue:o(n).name,"onUpdate:modelValue":e[1]||(e[1]=a=>o(n).name=a),type:"text",class:"block w-full"},null,8,["modelValue"]),s(p,{message:o(n).errors.name},null,8,["message"])]),t("div",Y,[s(w,{for:"address",value:"Address"}),h(t("textarea",{id:"address","onUpdate:modelValue":e[2]||(e[2]=a=>o(n).address=a),name:"address",class:"block w-full",cols:"30",rows:"10"},null,512),[[g,o(n).address]]),s(p,{message:o(n).errors.address},null,8,["message"])]),t("div",Z,[s(o(U),null,{default:l(({open:a})=>[s(o(L),{class:"flex items-center"},{default:l(()=>[tt,s(o(F),{class:T([a?"rotate-90":"","w-5 h-5 ml-2"])},null,8,["class"])]),_:2},1024),s(o(R),{class:"mt-5"},{default:l(()=>[h(t("textarea",{id:"notes","onUpdate:modelValue":e[3]||(e[3]=D=>o(n).notes=D),name:"notes",class:"block w-full",cols:"30",rows:"10"},null,512),[[g,o(n).notes]])]),_:1})]),_:1})])]),t("div",et,[u.contact.deleted_at?b("",!0):(m(),f("button",{key:0,class:"text-red-vivid-600 hover:underline",tabindex:"-1",type:"button",onClick:e[4]||(e[4]=a=>d.value=!0)}," Delete contact ")),s(O,{class:"ml-auto btn btn-primary",type:"submit",loading:o(n).processing},{default:l(()=>[st]),_:1},8,["loading"])])],40,P)]),s(y,{show:c.value,onClose:e[6]||(e[6]=a=>c.value=!1)},{title:l(()=>[ot]),content:l(()=>[nt]),footer:l(()=>[t("button",{class:"btn",onClick:e[5]||(e[5]=a=>c.value=!1)},"Cancel"),t("button",{class:"ml-2 btn btn-danger",onClick:k},"Restore")]),_:1},8,["show"]),s(y,{show:d.value,onClose:e[8]||(e[8]=a=>d.value=!1)},{title:l(()=>[at]),content:l(()=>[lt]),footer:l(()=>[t("button",{class:"btn",onClick:e[7]||(e[7]=a=>d.value=!1)},"Cancel"),t("button",{class:"ml-2 btn btn-danger",onClick:C},"Delete Contact")]),_:1},8,["show"])],64)}}});export{ht as default};