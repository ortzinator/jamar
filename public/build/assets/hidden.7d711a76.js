import{P as n}from"./NewLayout.829ebda0.js";import{y as a}from"./app.2e6f92fa.js";var s=(e=>(e[e.None=1]="None",e[e.Focusable=2]="Focusable",e[e.Hidden=4]="Hidden",e))(s||{});let u=a({name:"Hidden",props:{as:{type:[Object,String],default:"div"},features:{type:Number,default:1}},setup(e,{slots:r,attrs:o}){return()=>{let{features:t,...d}=e,i={"aria-hidden":(t&2)===2?!0:void 0,style:{position:"absolute",width:1,height:1,padding:0,margin:-1,overflow:"hidden",clip:"rect(0, 0, 0, 0)",whiteSpace:"nowrap",borderWidth:"0",...(t&4)===4&&(t&2)!==2&&{display:"none"}}};return n({ourProps:i,theirProps:d,slot:{},attrs:o,slots:r,name:"Hidden"})}}});export{u as m,s as p};