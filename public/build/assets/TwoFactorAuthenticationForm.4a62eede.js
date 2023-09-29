import{r as _,Y as H,b as t,c as s,d as c,j as N,f as a,w as o,g as n,t as C,X as R,h as x,z as Y,T as O,k as Q,C as z,l as v,u as h,i as u,F as D,e as I,O as P,K as U}from"./app.3b878662.js";import{_ as j}from"./ActionSection.25497507.js";import{_ as G}from"./DialogModal.7707320f.js";import{_ as B}from"./InputError.065244af.js";import{_ as $}from"./PrimaryButton.b1ace468.js";import{_ as T}from"./SecondaryButton.5a5f4b88.js";import{_ as L}from"./TextInput.259eaf44.js";import{_ as W}from"./DangerButton.3397f189.js";import{_ as X}from"./InputLabel.32e90572.js";import"./SectionTitle.bd8c04ca.js";import"./plugin-vue_export-helper.21dcd24c.js";import"./Modal.3ffd9b89.js";const J={class:"mt-4"},Z=n(" Cancel "),g={__name:"ConfirmsPassword",props:{title:{type:String,default:"Confirm Password"},content:{type:String,default:"For your security, please confirm your password to continue."},button:{type:String,default:"Confirm"}},emits:["confirmed"],setup(w,{emit:k}){const i=_(!1),e=H({password:"",error:"",processing:!1}),l=_(null),y=()=>{axios.get(route("password.confirmation")).then(r=>{r.data.confirmed?k("confirmed"):(i.value=!0,setTimeout(()=>l.value.focus(),250))})},p=()=>{e.processing=!0,axios.post(route("password.confirm"),{password:e.password}).then(()=>{e.processing=!1,d(),Y().then(()=>k("confirmed"))}).catch(r=>{e.processing=!1,e.error=r.response.data.errors.password[0],l.value.focus()})},d=()=>{i.value=!1,e.password="",e.error=""};return(r,m)=>(t(),s("span",null,[c("span",{onClick:y},[N(r.$slots,"default")]),a(G,{show:i.value,onClose:d},{title:o(()=>[n(C(w.title),1)]),content:o(()=>[n(C(w.content)+" ",1),c("div",J,[a(L,{ref_key:"passwordInput",ref:l,modelValue:e.password,"onUpdate:modelValue":m[0]||(m[0]=S=>e.password=S),type:"password",class:"mt-1 block w-3/4",placeholder:"Password",onKeyup:R(p,["enter"])},null,8,["modelValue","onKeyup"]),a(B,{message:e.error,class:"mt-2"},null,8,["message"])])]),footer:o(()=>[a(T,{onClick:d},{default:o(()=>[Z]),_:1}),a($,{class:x(["ml-3",{"opacity-25":e.processing}]),disabled:e.processing,onClick:p},{default:o(()=>[n(C(w.button),1)]),_:1},8,["class","disabled"])]),_:1},8,["show"])]))}},ee=n(" Two Factor Authentication "),te=n(" Add additional security to your account using two factor authentication. "),oe={key:0,class:"text-lg font-medium text-gray-900 dark:text-gray-100"},se={key:1,class:"text-lg font-medium text-gray-900 dark:text-gray-100"},ae={key:2,class:"text-lg font-medium text-gray-900 dark:text-gray-100"},ne=c("div",{class:"mt-3 max-w-xl text-sm text-gray-600 dark:text-gray-400"},[c("p",null," When two factor authentication is enabled, you will be prompted for a secure, random token during authentication. You may retrieve this token from your phone's Google Authenticator application. ")],-1),re={key:3},ce={key:0},ie={class:"mt-4 max-w-xl text-sm text-gray-600 dark:text-gray-400"},le={key:0,class:"font-semibold"},ue={key:1},de=["innerHTML"],me={key:0,class:"mt-4 max-w-xl text-sm text-gray-600 dark:text-gray-400"},fe={class:"font-semibold"},_e=n(" Setup Key: "),pe=["innerHTML"],he={key:1,class:"mt-4"},ye={key:1},ve=c("div",{class:"mt-4 max-w-xl text-sm text-gray-600 dark:text-gray-400"},[c("p",{class:"font-semibold"}," Store these recovery codes in a secure password manager. They can be used to recover access to your account if your two factor authentication device is lost. ")],-1),ge={class:"grid gap-1 max-w-xl mt-4 px-4 py-4 font-mono text-sm bg-gray-100 dark:bg-gray-900 rounded-lg"},we={class:"mt-5"},xe={key:0},ke=n(" Enable "),be={key:1},Ce=n(" Confirm "),Te=n(" Regenerate Recovery Codes "),Se=n(" Show Recovery Codes "),Fe=n(" Cancel "),$e=n(" Disable "),Ye={__name:"TwoFactorAuthenticationForm",props:{requiresConfirmation:Boolean},setup(w){const k=w,i=_(!1),e=_(!1),l=_(!1),y=_(null),p=_(null),d=_([]),r=O({code:""}),m=Q(()=>{var f;return!i.value&&((f=U().props.user)==null?void 0:f.two_factor_enabled)});z(m,()=>{m.value||(r.reset(),r.clearErrors())});const S=()=>{i.value=!0,P.post("/user/two-factor-authentication",{},{preserveScroll:!0,onSuccess:()=>Promise.all([M(),q(),F()]),onFinish:()=>{i.value=!1,e.value=k.requiresConfirmation}})},M=()=>axios.get("/user/two-factor-qr-code").then(f=>{y.value=f.data.svg}),q=()=>axios.get("/user/two-factor-secret-key").then(f=>{p.value=f.data.secretKey}),F=()=>axios.get("/user/two-factor-recovery-codes").then(f=>{d.value=f.data}),K=()=>{r.post("/user/confirmed-two-factor-authentication",{errorBag:"confirmTwoFactorAuthentication",preserveScroll:!0,preserveState:!0,onSuccess:()=>{e.value=!1,y.value=null,p.value=null}})},E=()=>{axios.post("/user/two-factor-recovery-codes").then(()=>F())},V=()=>{l.value=!0,P.delete("/user/two-factor-authentication",{preserveScroll:!0,onSuccess:()=>{l.value=!1,e.value=!1}})};return(f,A)=>(t(),v(j,null,{title:o(()=>[ee]),description:o(()=>[te]),content:o(()=>[h(m)&&!e.value?(t(),s("h3",oe," You have enabled two factor authentication. ")):h(m)&&e.value?(t(),s("h3",se," Finish enabling two factor authentication. ")):(t(),s("h3",ae," You have not enabled two factor authentication. ")),ne,h(m)?(t(),s("div",re,[y.value?(t(),s("div",ce,[c("div",ie,[e.value?(t(),s("p",le," To finish enabling two factor authentication, scan the following QR code using your phone's authenticator application or enter the setup key and provide the generated OTP code. ")):(t(),s("p",ue," Two factor authentication is now enabled. Scan the following QR code using your phone's authenticator application or enter the setup key. "))]),c("div",{class:"mt-4",innerHTML:y.value},null,8,de),p.value?(t(),s("div",me,[c("p",fe,[_e,c("span",{innerHTML:p.value},null,8,pe)])])):u("",!0),e.value?(t(),s("div",he,[a(X,{for:"code",value:"Code"}),a(L,{id:"code",modelValue:h(r).code,"onUpdate:modelValue":A[0]||(A[0]=b=>h(r).code=b),type:"text",name:"code",class:"block mt-1 w-1/2",inputmode:"numeric",autofocus:"",autocomplete:"one-time-code",onKeyup:R(K,["enter"])},null,8,["modelValue","onKeyup"]),a(B,{message:h(r).errors.code,class:"mt-2"},null,8,["message"])])):u("",!0)])):u("",!0),d.value.length>0&&!e.value?(t(),s("div",ye,[ve,c("div",ge,[(t(!0),s(D,null,I(d.value,b=>(t(),s("div",{key:b},C(b),1))),128))])])):u("",!0)])):u("",!0),c("div",we,[h(m)?(t(),s("div",be,[a(g,{onConfirmed:K},{default:o(()=>[e.value?(t(),v($,{key:0,type:"button",class:x(["mr-3",{"opacity-25":i.value}]),disabled:i.value},{default:o(()=>[Ce]),_:1},8,["class","disabled"])):u("",!0)]),_:1}),a(g,{onConfirmed:E},{default:o(()=>[d.value.length>0&&!e.value?(t(),v(T,{key:0,class:"mr-3"},{default:o(()=>[Te]),_:1})):u("",!0)]),_:1}),a(g,{onConfirmed:F},{default:o(()=>[d.value.length===0&&!e.value?(t(),v(T,{key:0,class:"mr-3"},{default:o(()=>[Se]),_:1})):u("",!0)]),_:1}),a(g,{onConfirmed:V},{default:o(()=>[e.value?(t(),v(T,{key:0,class:x({"opacity-25":l.value}),disabled:l.value},{default:o(()=>[Fe]),_:1},8,["class","disabled"])):u("",!0)]),_:1}),a(g,{onConfirmed:V},{default:o(()=>[e.value?u("",!0):(t(),v(W,{key:0,class:x({"opacity-25":l.value}),disabled:l.value},{default:o(()=>[$e]),_:1},8,["class","disabled"]))]),_:1})])):(t(),s("div",xe,[a(g,{onConfirmed:S},{default:o(()=>[a($,{type:"button",class:x({"opacity-25":i.value}),disabled:i.value},{default:o(()=>[ke]),_:1},8,["class","disabled"])]),_:1})]))])]),_:1}))}};export{Ye as default};