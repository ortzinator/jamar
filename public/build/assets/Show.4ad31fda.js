import{A as i}from"./NewLayout.54c0939e.js";import o from"./DeleteTeamForm.9efa65b7.js";import{J as r}from"./SectionBorder.89d7d6ad.js";import l from"./TeamMemberManager.5d88e4e9.js";import n from"./UpdateTeamNameForm.8d15299d.js";import{l as c,w as a,b as s,d as m,f as t,c as p,F as d,i as f}from"./app.f41975ad.js";import"./plugin-vue_export-helper.21dcd24c.js";import"./ActionSection.470e0e18.js";import"./SectionTitle.2435462c.js";import"./ConfirmationModal.810ea449.js";import"./Modal.a2027fd7.js";import"./DangerButton.80c5452f.js";import"./SecondaryButton.17b50e1f.js";import"./ActionMessage.aeb738e9.js";import"./Button.88a42896.js";import"./DialogModal.c88a68b7.js";import"./FormSection.59aa3477.js";import"./Input.812f980a.js";import"./InputError.2d876182.js";import"./Label.58d8b60c.js";const u=m("h2",{class:"text-xl font-semibold leading-tight text-gray-800"},"Team Settings",-1),x={class:"py-10 mx-auto max-w-7xl sm:px-6 lg:px-8"},E={props:{team:Object,availableRoles:Array,permissions:Object},setup(e){return(b,g)=>(s(),c(i,{title:"Team Settings"},{header:a(()=>[u]),default:a(()=>[m("div",null,[m("div",x,[t(n,{team:e.team,permissions:e.permissions},null,8,["team","permissions"]),t(l,{class:"mt-10 sm:mt-0",team:e.team,"available-roles":e.availableRoles,"user-permissions":e.permissions},null,8,["team","available-roles","user-permissions"]),e.permissions.canDeleteTeam&&!e.team.personal_team?(s(),p(d,{key:0},[t(r),t(o,{class:"mt-10 sm:mt-0",team:e.team},null,8,["team"])],64)):f("",!0)])])]),_:1}))}};export{E as default};