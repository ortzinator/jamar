import{r as w,s as T,k as U,x as S,o as M,y as J,u,q as B,p as P,F as j,b as h,c as y,e as Q,f as i,w as p,d as a,h as L,t as I,T as W,g as b,i as V,a as O}from"./app.a9a24307.js";import{t as N,P as D,e as X,d as Z,f as E,A as ee}from"./AppLayout.47877c4a.js";import{_ as te}from"./LoadingButton.0ff34443.js";import{P as se,S as Re}from"./description.ed22715d.js";import{m as le,p as oe}from"./hidden.f4ce270a.js";import{p as ae}from"./form.c56a6aaf.js";import{_ as R,a as C}from"./TextInput.2def3c86.js";import{_ as $}from"./InputLabel.9961a68e.js";import{_ as A}from"./ConfirmationModal.3030223a.js";import{r as ne}from"./TrashIcon.aa6a6f5c.js";import"./plugin-vue_export-helper.21dcd24c.js";import"./Modal.146114d2.js";let q=Symbol("LabelContext");function K(){let l=B(q,null);if(l===null){let o=new Error("You used a <Label /> component, but it is not inside a parent.");throw Error.captureStackTrace&&Error.captureStackTrace(o,K),o}return l}function re({slot:l={},name:o="Label",props:t={}}={}){let s=w([]);function n(r){return s.value.push(r),()=>{let d=s.value.indexOf(r);d!==-1&&s.value.splice(d,1)}}return T(q,{register:n,slot:l,name:o,props:t}),U(()=>s.value.length>0?s.value.join(" "):void 0)}let Ge=S({name:"Label",props:{as:{type:[Object,String],default:"label"},passive:{type:[Boolean],default:!1}},setup(l,{slots:o,attrs:t}){let s=K(),n=`headlessui-label-${N()}`;return M(()=>J(s.register(n))),()=>{let{name:r="Label",slot:d={},props:f={}}=s,{passive:v,...e}=l,_={...Object.entries(f).reduce((g,[m,x])=>Object.assign(g,{[m]:u(x)}),{}),id:n};return v&&(delete _.onClick,delete e.onClick),D({ourProps:_,theirProps:e,slot:d,attrs:t,slots:o,name:r})}}}),F=Symbol("GroupContext");S({name:"SwitchGroup",props:{as:{type:[Object,String],default:"template"}},setup(l,{slots:o,attrs:t}){let s=w(null),n=re({name:"SwitchLabel",props:{onClick(){!s.value||(s.value.click(),s.value.focus({preventScroll:!0}))}}}),r=se({name:"SwitchDescription"});return T(F,{switchRef:s,labelledby:n,describedby:r}),()=>D({theirProps:l,ourProps:{},slot:{},slots:o,attrs:t,name:"SwitchGroup"})}});let ie=S({name:"Switch",emits:{"update:modelValue":l=>!0},props:{as:{type:[Object,String],default:"button"},modelValue:{type:Boolean,default:!1},name:{type:String,optional:!0},value:{type:String,optional:!0}},inheritAttrs:!1,setup(l,{emit:o,attrs:t,slots:s,expose:n}){let r=B(F,null),d=`headlessui-switch-${N()}`;function f(){o("update:modelValue",!l.modelValue)}let v=w(null),e=r===null?v:r.switchRef,_=X(U(()=>({as:l.as,type:t.type})),e);n({el:e,$el:e});function g(c){c.preventDefault(),f()}function m(c){c.key===E.Space?(c.preventDefault(),f()):c.key===E.Enter&&ae(c.currentTarget)}function x(c){c.preventDefault()}return()=>{let{name:c,value:G,modelValue:k,...H}=l,Y={checked:k},z={id:d,ref:e,role:"switch",type:_.value,tabIndex:0,"aria-checked":k,"aria-labelledby":r==null?void 0:r.labelledby.value,"aria-describedby":r==null?void 0:r.describedby.value,onClick:g,onKeyup:m,onKeypress:x};return P(j,[c!=null&&k!=null?P(le,Z({features:oe.Hidden,as:"input",type:"checkbox",hidden:!0,readOnly:!0,checked:k,name:c,value:G})):null,D({ourProps:z,theirProps:{...t,...H},slot:Y,attrs:t,slots:s,name:"Switch"})])}}});const ue={class:"ml-4"},de={__name:"RoleSelector",props:{modelValue:{type:Array,required:!0}},emits:["update:modelValue"],setup(l,{emit:o}){const t=l,s=U({get:()=>t.modelValue,set:n=>{o("update:modelValue",n)}});return(n,r)=>(h(!0),y(j,null,Q(u(s),d=>(h(),y("div",{key:d},[i(u(ie),{modelValue:d.enabled,"onUpdate:modelValue":f=>d.enabled=f,class:L([d.enabled?"bg-light-blue-vivid-900":"bg-light-blue-vivid-700","relative inline-flex items-center h-6 rounded-full w-11"])},{default:p(()=>[a("span",{class:L([d.enabled?"translate-x-6":"translate-x-1","inline-block w-4 h-4 transform bg-white rounded-full"])},null,2)]),_:2},1032,["modelValue","onUpdate:modelValue","class"]),a("span",ue,I(d.name),1)]))),128))}},me={class:"py-5 font-bold"},ce=b(" Employees "),pe=a("span",{class:"font-medium text-light-blue-vivid-400"},"\xA0/",-1),fe={class:"max-w-6xl overflow-hidden bg-white rounded shadow"},be={key:0,class:"flex items-center justify-between p-5 pl-8 bg-yellow-200"},ve={class:"flex"},_e=b(" This user is deleted "),he={class:"p-8"},ye={class:"mb-5"},ge={class:"mb-5"},we={class:"mb-5"},ke={class:"flex items-center justify-between px-8 py-4 bg-cool-grey-50"},xe={class:"flex items-baseline"},Ve={key:0,class:"mr-5 italic text-cool-grey-400"},Ce=b(" Update user "),$e=b(" Restore User"),Ue=b(" Are you sure you want to restore this user?"),Se=b(" Delete User"),je=b(" Are you sure you want to delete this user?"),De={layout:ee},He=Object.assign(De,{__name:"Edit",props:{errors:{type:Object,required:!0},editedUser:{type:Object,required:!0}},setup(l){const o=l,t=W({name:o.editedUser.name,email:o.editedUser.email,roles:o.editedUser.roles}),s=w(!1),n=w(!1);function r(){t.transform(v=>({...v,roles:v.roles.filter(e=>e.enabled)})).put(route("users.update",o.editedUser.id))}function d(){t.delete(route("users.destroy",o.editedUser.id)),s.value=!1}function f(){t.put(route("users.restore",o.editedUser.id)),n.value=!1}return(v,e)=>{const _=O("InertiaHead"),g=O("InertiaLink");return h(),y(j,null,[a("div",me,[i(_,{title:"Edit User"}),a("h1",null,[i(g,{class:"text-light-blue-vivid-400 hover:text-light-blue-vivid-600",href:"/users"},{default:p(()=>[ce]),_:1}),pe,b(" "+I(u(t).name),1)])]),a("div",fe,[l.editedUser.deleted_at?(h(),y("div",be,[a("div",ve,[i(u(ne),{class:"w-5 h-5 mr-2"}),_e]),a("button",{class:"btn hover:underline",onClick:e[0]||(e[0]=m=>n.value=!0)},"Restore")])):V("",!0),a("div",he,[a("div",ye,[i($,{for:"name",value:"Name"}),i(R,{id:"name",modelValue:u(t).name,"onUpdate:modelValue":e[1]||(e[1]=m=>u(t).name=m),type:"text",class:"block w-full"},null,8,["modelValue"]),i(C,{message:u(t).errors.name},null,8,["message"])]),a("div",ge,[i($,{for:"email",value:"Email"}),i(R,{id:"email",modelValue:u(t).email,"onUpdate:modelValue":e[2]||(e[2]=m=>u(t).email=m),type:"text",class:"block w-full"},null,8,["modelValue"]),i(C,{message:u(t).errors.email},null,8,["message"])]),a("div",we,[i($,{value:"Roles"}),i(de,{modelValue:u(t).roles,"onUpdate:modelValue":e[3]||(e[3]=m=>u(t).roles=m)},null,8,["modelValue"]),i(C,{message:u(t).errors.roles},null,8,["message"])])]),a("div",ke,[l.editedUser.deleted_at?V("",!0):(h(),y("button",{key:0,class:"text-red-vivid-600 hover:underline",tabindex:"-1",type:"button",onClick:e[4]||(e[4]=m=>s.value=!0)}," Delete user ")),a("div",xe,[u(t).isDirty?(h(),y("div",Ve," Unsaved Changes ")):V("",!0),i(te,{class:"btn btn-primary",type:"submit",loading:u(t).processing,onClick:r},{default:p(()=>[Ce]),_:1},8,["loading"])])])]),i(A,{show:n.value,onClose:e[6]||(e[6]=m=>n.value=!1)},{title:p(()=>[$e]),content:p(()=>[Ue]),footer:p(()=>[a("button",{class:"btn",onClick:e[5]||(e[5]=m=>n.value=!1)},"Cancel"),a("button",{class:"ml-2 btn btn-danger",onClick:f},"Restore")]),_:1},8,["show"]),i(A,{show:s.value,onClose:e[8]||(e[8]=m=>s.value=!1)},{title:p(()=>[Se]),content:p(()=>[je]),footer:p(()=>[a("button",{class:"btn",onClick:e[7]||(e[7]=m=>s.value=!1)},"Cancel"),a("button",{class:"ml-2 btn btn-danger",onClick:d},"Delete User")]),_:1},8,["show"])],64)}}});export{He as default};