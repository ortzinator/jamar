import{A as i}from"./NewLayout.829ebda0.js";import o from"./DeleteTeamForm.38b4ebb4.js";import{J as r}from"./SectionBorder.6957e068.js";import l from"./TeamMemberManager.4fd2d347.js";import n from"./UpdateTeamNameForm.51b327d4.js";import{b as a,l as c,w as s,d as m,f as t,c as p,F as d,i as f}from"./app.2e6f92fa.js";import"./plugin-vue_export-helper.21dcd24c.js";import"./ActionSection.219a9d76.js";import"./SectionTitle.601c281c.js";import"./ConfirmationModal.0f181955.js";import"./Modal.b6560713.js";import"./DangerButton.ac236f24.js";import"./SecondaryButton.a5ea2fb7.js";import"./ActionMessage.bf88cb8e.js";import"./Button.4be7ecce.js";import"./DialogModal.5d7f4137.js";import"./FormSection.21091828.js";import"./Input.99d58703.js";import"./InputError.2fbc7a82.js";import"./Label.5f7b3cb8.js";const u=m("h2",{class:"text-xl font-semibold leading-tight text-gray-800"},"Team Settings",-1),x={class:"py-10 mx-auto max-w-7xl sm:px-6 lg:px-8"},E={__name:"Show",props:{team:Object,availableRoles:Array,permissions:Object},setup(e){return(b,h)=>(a(),c(i,{title:"Team Settings"},{header:s(()=>[u]),default:s(()=>[m("div",null,[m("div",x,[t(n,{team:e.team,permissions:e.permissions},null,8,["team","permissions"]),t(l,{class:"mt-10 sm:mt-0",team:e.team,"available-roles":e.availableRoles,"user-permissions":e.permissions},null,8,["team","available-roles","user-permissions"]),e.permissions.canDeleteTeam&&!e.team.personal_team?(a(),p(d,{key:0},[t(r),t(o,{class:"mt-10 sm:mt-0",team:e.team},null,8,["team"])],64)):f("",!0)])])]),_:1}))}};export{E as default};