import{r as p,Z as H,b as t,c as s,d as i,j as I,f as a,w as o,g as n,t as C,Y as R,h as x,A as N,Q,k as Y,D,l as y,u as h,i as u,F as U,e as j,E as P,m as z}from"./app.2e6f92fa.js";import{_ as G}from"./ActionSection.219a9d76.js";import{_ as $}from"./Button.4be7ecce.js";import{_ as O}from"./DialogModal.5d7f4137.js";import{_ as B}from"./Input.99d58703.js";import{_ as E}from"./InputError.2fbc7a82.js";import{_ as S}from"./SecondaryButton.a5ea2fb7.js";import{_ as W}from"./DangerButton.ac236f24.js";import{_ as Z}from"./Label.5f7b3cb8.js";import"./SectionTitle.601c281c.js";import"./plugin-vue_export-helper.21dcd24c.js";import"./Modal.b6560713.js";const J={class:"mt-4"},X=n(" Cancel "),w={__name:"ConfirmsPassword",props:{title:{type:String,default:"Confirm Password"},content:{type:String,default:"For your security, please confirm your password to continue."},button:{type:String,default:"Confirm"}},emits:["confirmed"],setup(g,{emit:b}){const c=p(!1),e=H({password:"",error:"",processing:!1}),l=p(null),f=()=>{c.value=!1,e.password="",e.error=""},v=()=>{axios.get(route("password.confirmation")).then(r=>{r.data.confirmed?b("confirmed"):(c.value=!0,setTimeout(()=>l.value.focus(),250))})},_=()=>{e.processing=!0,axios.post(route("password.confirm"),{password:e.password}).then(()=>{e.processing=!1,f(),N().then(()=>b("confirmed"))}).catch(r=>{e.processing=!1,e.error=r.response.data.errors.password[0],l.value.focus()})};return(r,d)=>(t(),s("span",null,[i("span",{onClick:v},[I(r.$slots,"default")]),a(O,{show:c.value,onClose:f},{title:o(()=>[n(C(g.title),1)]),content:o(()=>[n(C(g.content)+" ",1),i("div",J,[a(B,{ref_key:"passwordInput",ref:l,modelValue:e.password,"onUpdate:modelValue":d[0]||(d[0]=T=>e.password=T),type:"password",class:"block w-3/4 mt-1",placeholder:"Password",onKeyup:R(_,["enter"])},null,8,["modelValue","onKeyup"]),a(E,{message:e.error,class:"mt-2"},null,8,["message"])])]),footer:o(()=>[a(S,{onClick:f},{default:o(()=>[X]),_:1}),a($,{class:x(["ml-3",{"opacity-25":e.processing}]),disabled:e.processing,onClick:_},{default:o(()=>[n(C(g.button),1)]),_:1},8,["class","disabled"])]),_:1},8,["show"])]))}},ee=n(" Two Factor Authentication "),te=n(" Add additional security to your account using two factor authentication. "),oe={key:0,class:"text-lg font-medium text-gray-900"},se={key:1,class:"text-lg font-medium text-gray-900"},ae={key:2,class:"text-lg font-medium text-gray-900"},ne=i("div",{class:"max-w-xl mt-3 text-sm text-gray-600"},[i("p",null," When two factor authentication is enabled, you will be prompted for a secure, random token during authentication. You may retrieve this token from your phone's Google Authenticator application. ")],-1),re={key:3},ie={key:0},ce={class:"max-w-xl mt-4 text-sm text-gray-600"},le={key:0,class:"font-semibold"},ue={key:1},de=["innerHTML"],me={key:0,class:"max-w-xl mt-4 text-sm text-gray-600"},fe={class:"font-semibold"},_e=n("Setup Key: "),pe=["innerHTML"],he={key:1,class:"mt-4"},ve={key:1},ye=i("div",{class:"max-w-xl mt-4 text-sm text-gray-600"},[i("p",{class:"font-semibold"}," Store these recovery codes in a secure password manager. They can be used to recover access to your account if your two factor authentication device is lost. ")],-1),we={class:"grid max-w-xl gap-1 px-4 py-4 mt-4 font-mono text-sm bg-gray-100 rounded-lg"},ge={class:"mt-5"},xe={key:0},be=n(" Enable "),ke={key:1},Ce=n(" Confirm "),Se=n(" Regenerate Recovery Codes "),Te=n(" Show Recovery Codes "),Fe=n(" Cancel "),$e=n(" Disable "),Ne={__name:"TwoFactorAuthenticationForm",props:{requiresConfirmation:Boolean},setup(g){const b=g,c=p(!1),e=p(!1),l=p(!1),f=p(null),v=p(null),_=p([]),r=Q({code:""}),d=Y(()=>{var m;return!c.value&&((m=z().props.value.user)==null?void 0:m.two_factor_enabled)});D(d,()=>{d.value||(r.reset(),r.clearErrors())});const T=()=>axios.get("/user/two-factor-qr-code").then(m=>{f.value=m.data.svg}),L=()=>axios.get("/user/two-factor-secret-key").then(m=>{v.value=m.data.secretKey}),F=()=>axios.get("/user/two-factor-recovery-codes").then(m=>{_.value=m.data}),V=()=>{r.post("/user/confirmed-two-factor-authentication",{errorBag:"confirmTwoFactorAuthentication",preserveScroll:!0,preserveState:!0,onSuccess:()=>{e.value=!1,f.value=null,v.value=null}})},M=()=>{axios.post("/user/two-factor-recovery-codes").then(()=>F())},A=()=>{l.value=!0,P.Inertia.delete("/user/two-factor-authentication",{preserveScroll:!0,onSuccess:()=>{l.value=!1,e.value=!1}})},q=()=>{c.value=!0,P.Inertia.post("/user/two-factor-authentication",{},{preserveScroll:!0,onSuccess:()=>Promise.all([T(),L(),F()]),onFinish:()=>{c.value=!1,e.value=b.requiresConfirmation}})};return(m,K)=>(t(),y(G,null,{title:o(()=>[ee]),description:o(()=>[te]),content:o(()=>[h(d)&&!e.value?(t(),s("h3",oe," You have enabled two factor authentication. ")):h(d)&&e.value?(t(),s("h3",se," Finish enabling two factor authentication. ")):(t(),s("h3",ae," You have not enabled two factor authentication. ")),ne,h(d)?(t(),s("div",re,[f.value?(t(),s("div",ie,[i("div",ce,[e.value?(t(),s("p",le," To finish enabling two factor authentication, scan the following QR code using your phone's authenticator application or enter the setup key and provide the generated OTP code. ")):(t(),s("p",ue," Two factor authentication is now enabled. Scan the following QR code using your phone's authenticator application or enter the setup key. "))]),i("div",{class:"mt-4",innerHTML:f.value},null,8,de),v.value?(t(),s("div",me,[i("p",fe,[_e,i("span",{innerHTML:v.value},null,8,pe)])])):u("",!0),e.value?(t(),s("div",he,[a(Z,{for:"code",value:"Code"}),a(B,{id:"code",modelValue:h(r).code,"onUpdate:modelValue":K[0]||(K[0]=k=>h(r).code=k),type:"text",name:"code",class:"block w-1/2 mt-1",inputmode:"numeric",autofocus:"",autocomplete:"one-time-code",onKeyup:R(V,["enter"])},null,8,["modelValue","onKeyup"]),a(E,{message:h(r).errors.code,class:"mt-2"},null,8,["message"])])):u("",!0)])):u("",!0),_.value.length>0&&!e.value?(t(),s("div",ve,[ye,i("div",we,[(t(!0),s(U,null,j(_.value,k=>(t(),s("div",{key:k},C(k),1))),128))])])):u("",!0)])):u("",!0),i("div",ge,[h(d)?(t(),s("div",ke,[a(w,{onConfirmed:V},{default:o(()=>[e.value?(t(),y($,{key:0,type:"button",class:x(["mr-3",{"opacity-25":c.value}]),disabled:c.value},{default:o(()=>[Ce]),_:1},8,["class","disabled"])):u("",!0)]),_:1}),a(w,{onConfirmed:M},{default:o(()=>[_.value.length>0&&!e.value?(t(),y(S,{key:0,class:"mr-3"},{default:o(()=>[Se]),_:1})):u("",!0)]),_:1}),a(w,{onConfirmed:F},{default:o(()=>[_.value.length===0&&!e.value?(t(),y(S,{key:0,class:"mr-3"},{default:o(()=>[Te]),_:1})):u("",!0)]),_:1}),a(w,{onConfirmed:A},{default:o(()=>[e.value?(t(),y(S,{key:0,class:x({"opacity-25":l.value}),disabled:l.value},{default:o(()=>[Fe]),_:1},8,["class","disabled"])):u("",!0)]),_:1}),a(w,{onConfirmed:A},{default:o(()=>[e.value?u("",!0):(t(),y(W,{key:0,class:x({"opacity-25":l.value}),disabled:l.value},{default:o(()=>[$e]),_:1},8,["class","disabled"]))]),_:1})])):(t(),s("div",xe,[a(w,{onConfirmed:q},{default:o(()=>[a($,{type:"button",class:x({"opacity-25":c.value}),disabled:c.value},{default:o(()=>[be]),_:1},8,["class","disabled"])]),_:1})]))])]),_:1}))}};export{Ne as default};