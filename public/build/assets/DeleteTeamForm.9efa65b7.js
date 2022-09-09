import{r as u,U as p,l as h,w as e,b as w,d as r,f as o,h as y,u as l,g as t}from"./app.f41975ad.js";import{_ as g}from"./ActionSection.470e0e18.js";import{_ as T}from"./ConfirmationModal.810ea449.js";import{_ as i}from"./DangerButton.80c5452f.js";import{_ as v}from"./SecondaryButton.17b50e1f.js";import"./SectionTitle.2435462c.js";import"./plugin-vue_export-helper.21dcd24c.js";import"./Modal.a2027fd7.js";const x=t(" Delete Team "),C=t(" Permanently delete this team. "),b=r("div",{class:"max-w-xl text-sm text-gray-600"}," Once a team is deleted, all of its resources and data will be permanently deleted. Before deleting this team, please download any data or information regarding this team that you wish to retain. ",-1),D={class:"mt-5"},$=t(" Delete Team "),k=t(" Delete Team "),B=t(" Are you sure you want to delete this team? Once a team is deleted, all of its resources and data will be permanently deleted. "),N=t(" Cancel "),O=t(" Delete Team "),G={props:{team:Object},setup(m){const d=m,s=u(!1),n=p(),c=()=>{s.value=!0},_=()=>{n.delete(route("teams.destroy",d.team),{errorBag:"deleteTeam"})};return(V,a)=>(w(),h(g,null,{title:e(()=>[x]),description:e(()=>[C]),content:e(()=>[b,r("div",D,[o(i,{onClick:c},{default:e(()=>[$]),_:1})]),o(T,{show:s.value,onClose:a[1]||(a[1]=f=>s.value=!1)},{title:e(()=>[k]),content:e(()=>[B]),footer:e(()=>[o(v,{onClick:a[0]||(a[0]=f=>s.value=!1)},{default:e(()=>[N]),_:1}),o(i,{class:y(["ml-3",{"opacity-25":l(n).processing}]),disabled:l(n).processing,onClick:_},{default:e(()=>[O]),_:1},8,["class","disabled"])]),_:1},8,["show"])]),_:1}))}};export{G as default};