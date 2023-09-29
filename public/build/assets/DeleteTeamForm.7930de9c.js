import{r as p,T as u,b as h,l as y,w as e,d as i,f as o,h as T,u as l,g as t}from"./app.3b878662.js";import{_ as g}from"./ActionSection.25497507.js";import{_ as w}from"./ConfirmationModal.7fa895a7.js";import{_ as r}from"./DangerButton.3397f189.js";import{_ as x}from"./SecondaryButton.5a5f4b88.js";import"./SectionTitle.bd8c04ca.js";import"./plugin-vue_export-helper.21dcd24c.js";import"./Modal.3ffd9b89.js";const v=t(" Delete Team "),C=t(" Permanently delete this team. "),D=i("div",{class:"max-w-xl text-sm text-gray-600 dark:text-gray-400"}," Once a team is deleted, all of its resources and data will be permanently deleted. Before deleting this team, please download any data or information regarding this team that you wish to retain. ",-1),b={class:"mt-5"},k=t(" Delete Team "),$=t(" Delete Team "),B=t(" Are you sure you want to delete this team? Once a team is deleted, all of its resources and data will be permanently deleted. "),N=t(" Cancel "),O=t(" Delete Team "),H={__name:"DeleteTeamForm",props:{team:Object},setup(m){const d=m,a=p(!1),n=u({}),c=()=>{a.value=!0},_=()=>{n.delete(route("teams.destroy",d.team),{errorBag:"deleteTeam"})};return(V,s)=>(h(),y(g,null,{title:e(()=>[v]),description:e(()=>[C]),content:e(()=>[D,i("div",b,[o(r,{onClick:c},{default:e(()=>[k]),_:1})]),o(w,{show:a.value,onClose:s[1]||(s[1]=f=>a.value=!1)},{title:e(()=>[$]),content:e(()=>[B]),footer:e(()=>[o(x,{onClick:s[0]||(s[0]=f=>a.value=!1)},{default:e(()=>[N]),_:1}),o(r,{class:T(["ml-3",{"opacity-25":l(n).processing}]),disabled:l(n).processing,onClick:_},{default:e(()=>[O]),_:1},8,["class","disabled"])]),_:1},8,["show"])]),_:1}))}};export{H as default};