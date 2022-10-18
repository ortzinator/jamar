import{Q as k,r as x,b as a,c as n,f as l,w as t,d as o,u as s,F as C,e as w,h as _,t as b,i as d,g as i,E as q,m as G}from"./app.2e6f92fa.js";import{_ as H}from"./ActionMessage.bf88cb8e.js";import{_ as j}from"./ActionSection.219a9d76.js";import{_ as B}from"./Button.4be7ecce.js";import{_ as P}from"./ConfirmationModal.0f181955.js";import{_ as F}from"./DangerButton.ac236f24.js";import{_ as K}from"./DialogModal.5d7f4137.js";import{_ as W}from"./FormSection.21091828.js";import{_ as X}from"./Input.99d58703.js";import{_ as z}from"./InputError.2fbc7a82.js";import{_ as V}from"./Label.5f7b3cb8.js";import{_ as M}from"./SecondaryButton.a5ea2fb7.js";import{J as S}from"./SectionBorder.6957e068.js";import"./SectionTitle.601c281c.js";import"./plugin-vue_export-helper.21dcd24c.js";import"./Modal.b6560713.js";const Y={key:0},Z=i(" Add Team Member "),ee=i(" Add a new team member to your team, allowing them to collaborate with you. "),te=o("div",{class:"col-span-6"},[o("div",{class:"max-w-xl text-sm text-gray-600"}," Please provide the email address of the person you would like to add to this team. ")],-1),se={class:"col-span-6 sm:col-span-4"},oe={key:0,class:"col-span-6 lg:col-span-4"},le={class:"relative z-0 mt-1 border border-gray-200 rounded-lg cursor-pointer"},ae=["onClick"],ne={class:"flex items-center"},ie={key:0,class:"w-5 h-5 ml-2 text-green-400",fill:"none","stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",stroke:"currentColor",viewBox:"0 0 24 24"},re=o("path",{d:"M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"},null,-1),me=[re],ce={class:"mt-2 text-xs text-left text-gray-600"},de=i(" Added. "),ue=i(" Add "),_e={key:1},ve=i(" Pending Team Invitations "),fe=i(" These people have been invited to your team and have been sent an invitation email. They may join the team by accepting the email invitation. "),be={class:"space-y-6"},he={class:"text-gray-600"},ye={class:"flex items-center"},ge=["onClick"],pe={key:2},ke=i(" Team Members "),xe=i(" All of the people that are part of this team. "),Ce={class:"space-y-6"},we={class:"flex items-center"},Te=["src","alt"],Re={class:"ml-4"},$e={class:"flex items-center"},Me=["onClick"],Se={key:1,class:"ml-2 text-sm text-gray-400"},Ae=["onClick"],je=i(" Manage Role "),Be={key:0},Pe={class:"relative z-0 mt-1 border border-gray-200 rounded-lg cursor-pointer"},Fe=["onClick"],ze={class:"flex items-center"},Ve={key:0,class:"w-5 h-5 ml-2 text-green-400",fill:"none","stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",stroke:"currentColor",viewBox:"0 0 24 24"},Le=o("path",{d:"M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"},null,-1),Ne=[Le],Oe={class:"mt-2 text-xs text-gray-600"},Ee=i(" Cancel "),Ie=i(" Save "),Je=i(" Leave Team "),De=i(" Are you sure you would like to leave this team? "),Qe=i(" Cancel "),Ue=i(" Leave "),qe=i(" Remove Team Member "),Ge=i(" Are you sure you would like to remove this person from the team? "),He=i(" Cancel "),Ke=i(" Remove "),ut={__name:"TeamMemberManager",props:{team:Object,availableRoles:Array,userPermissions:Object},setup(r){const y=r,c=k({email:"",role:null}),v=k({role:null}),T=k(),R=k(),g=x(!1),$=x(null),p=x(!1),h=x(null),L=()=>{c.post(route("team-members.store",y.team),{errorBag:"addTeamMember",preserveScroll:!0,onSuccess:()=>c.reset()})},N=u=>{q.Inertia.delete(route("team-invitations.destroy",u),{preserveScroll:!0})},O=u=>{$.value=u,v.role=u.membership.role,g.value=!0},E=()=>{v.put(route("team-members.update",[y.team,$.value]),{preserveScroll:!0,onSuccess:()=>g.value=!1})},I=()=>{p.value=!0},J=()=>{T.delete(route("team-members.destroy",[y.team,G().props.value.user]))},D=u=>{h.value=u},Q=()=>{R.delete(route("team-members.destroy",[y.team,h.value]),{errorBag:"removeTeamMember",preserveScroll:!0,preserveState:!0,onSuccess:()=>h.value=null})},A=u=>y.availableRoles.find(m=>m.key===u).name;return(u,m)=>(a(),n("div",null,[r.userPermissions.canAddTeamMembers?(a(),n("div",Y,[l(S),l(W,{onSubmitted:L},{title:t(()=>[Z]),description:t(()=>[ee]),form:t(()=>[te,o("div",se,[l(V,{for:"email",value:"Email"}),l(X,{id:"email",modelValue:s(c).email,"onUpdate:modelValue":m[0]||(m[0]=e=>s(c).email=e),type:"email",class:"block w-full mt-1"},null,8,["modelValue"]),l(z,{message:s(c).errors.email,class:"mt-2"},null,8,["message"])]),r.availableRoles.length>0?(a(),n("div",oe,[l(V,{for:"roles",value:"Role"}),l(z,{message:s(c).errors.role,class:"mt-2"},null,8,["message"]),o("div",le,[(a(!0),n(C,null,w(r.availableRoles,(e,f)=>(a(),n("button",{key:e.key,type:"button",class:_(["relative inline-flex w-full px-4 py-3 rounded-lg focus:z-10 focus:outline-none focus:border-blue-300 focus:ring focus:ring-blue-200",{"border-t border-gray-200 rounded-t-none":f>0,"rounded-b-none":f!=Object.keys(r.availableRoles).length-1}]),onClick:U=>s(c).role=e.key},[o("div",{class:_({"opacity-50":s(c).role&&s(c).role!=e.key})},[o("div",ne,[o("div",{class:_(["text-sm text-gray-600",{"font-semibold":s(c).role==e.key}])},b(e.name),3),s(c).role==e.key?(a(),n("svg",ie,me)):d("",!0)]),o("div",ce,b(e.description),1)],2)],10,ae))),128))])])):d("",!0)]),actions:t(()=>[l(H,{on:s(c).recentlySuccessful,class:"mr-3"},{default:t(()=>[de]),_:1},8,["on"]),l(B,{class:_({"opacity-25":s(c).processing}),disabled:s(c).processing},{default:t(()=>[ue]),_:1},8,["class","disabled"])]),_:1})])):d("",!0),r.team.team_invitations.length>0&&r.userPermissions.canAddTeamMembers?(a(),n("div",_e,[l(S),l(j,{class:"mt-10 sm:mt-0"},{title:t(()=>[ve]),description:t(()=>[fe]),content:t(()=>[o("div",be,[(a(!0),n(C,null,w(r.team.team_invitations,e=>(a(),n("div",{key:e.id,class:"flex items-center justify-between"},[o("div",he,b(e.email),1),o("div",ye,[r.userPermissions.canRemoveTeamMembers?(a(),n("button",{key:0,class:"ml-6 text-sm text-red-500 cursor-pointer focus:outline-none",onClick:f=>N(e)}," Cancel ",8,ge)):d("",!0)])]))),128))])]),_:1})])):d("",!0),r.team.users.length>0?(a(),n("div",pe,[l(S),l(j,{class:"mt-10 sm:mt-0"},{title:t(()=>[ke]),description:t(()=>[xe]),content:t(()=>[o("div",Ce,[(a(!0),n(C,null,w(r.team.users,e=>(a(),n("div",{key:e.id,class:"flex items-center justify-between"},[o("div",we,[o("img",{class:"w-8 h-8 rounded-full",src:e.profile_photo_url,alt:e.name},null,8,Te),o("div",Re,b(e.name),1)]),o("div",$e,[r.userPermissions.canAddTeamMembers&&r.availableRoles.length?(a(),n("button",{key:0,class:"ml-2 text-sm text-gray-400 underline",onClick:f=>O(e)},b(A(e.membership.role)),9,Me)):r.availableRoles.length?(a(),n("div",Se,b(A(e.membership.role)),1)):d("",!0),u.$page.props.user.id===e.id?(a(),n("button",{key:2,class:"ml-6 text-sm text-red-500 cursor-pointer",onClick:I}," Leave ")):d("",!0),r.userPermissions.canRemoveTeamMembers?(a(),n("button",{key:3,class:"ml-6 text-sm text-red-500 cursor-pointer",onClick:f=>D(e)}," Remove ",8,Ae)):d("",!0)])]))),128))])]),_:1})])):d("",!0),l(K,{show:g.value,onClose:m[2]||(m[2]=e=>g.value=!1)},{title:t(()=>[je]),content:t(()=>[$.value?(a(),n("div",Be,[o("div",Pe,[(a(!0),n(C,null,w(r.availableRoles,(e,f)=>(a(),n("button",{key:e.key,type:"button",class:_(["relative inline-flex w-full px-4 py-3 rounded-lg focus:z-10 focus:outline-none focus:border-blue-300 focus:ring focus:ring-blue-200",{"border-t border-gray-200 rounded-t-none":f>0,"rounded-b-none":f!==Object.keys(r.availableRoles).length-1}]),onClick:U=>s(v).role=e.key},[o("div",{class:_({"opacity-50":s(v).role&&s(v).role!==e.key})},[o("div",ze,[o("div",{class:_(["text-sm text-gray-600",{"font-semibold":s(v).role===e.key}])},b(e.name),3),s(v).role===e.key?(a(),n("svg",Ve,Ne)):d("",!0)]),o("div",Oe,b(e.description),1)],2)],10,Fe))),128))])])):d("",!0)]),footer:t(()=>[l(M,{onClick:m[1]||(m[1]=e=>g.value=!1)},{default:t(()=>[Ee]),_:1}),l(B,{class:_(["ml-3",{"opacity-25":s(v).processing}]),disabled:s(v).processing,onClick:E},{default:t(()=>[Ie]),_:1},8,["class","disabled"])]),_:1},8,["show"]),l(P,{show:p.value,onClose:m[4]||(m[4]=e=>p.value=!1)},{title:t(()=>[Je]),content:t(()=>[De]),footer:t(()=>[l(M,{onClick:m[3]||(m[3]=e=>p.value=!1)},{default:t(()=>[Qe]),_:1}),l(F,{class:_(["ml-3",{"opacity-25":s(T).processing}]),disabled:s(T).processing,onClick:J},{default:t(()=>[Ue]),_:1},8,["class","disabled"])]),_:1},8,["show"]),l(P,{show:h.value,onClose:m[6]||(m[6]=e=>h.value=null)},{title:t(()=>[qe]),content:t(()=>[Ge]),footer:t(()=>[l(M,{onClick:m[5]||(m[5]=e=>h.value=null)},{default:t(()=>[He]),_:1}),l(F,{class:_(["ml-3",{"opacity-25":s(R).processing}]),disabled:s(R).processing,onClick:Q},{default:t(()=>[Ke]),_:1},8,["class","disabled"])]),_:1},8,["show"])]))}};export{ut as default};
