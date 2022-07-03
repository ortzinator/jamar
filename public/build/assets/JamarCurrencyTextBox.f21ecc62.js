import{b as M,l as N,f as x,E as cr,r as Ie,c as F,d as Y,u as L,F as lt,e as ut,t as Z,i as $e,j as Ge,k as Et,Y as uo,w as fr,M as Ba,g as Ua,N as co,s as D,a as Ga,O as fo,Z as Un,_ as vo,$ as ho,Q as Rr,a0 as po,a1 as zr,S as mo,C as Ka,V as go,a2 as yo,a3 as bo,A as wo,a4 as Do}from"./app.418331d3.js";import{r as xo}from"./TrashIcon.19cc4f16.js";import{_ as Gn}from"./Input.145b177d.js";import{_ as Vr}from"./Label.1f5ecdf3.js";import{I as ko}from"./LoadingButton.2b9415b2.js";import{r as _o}from"./NewLayout.0a46786c.js";function Mo(t,e){return M(),N("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor"},[x("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M14 5l7 7m0 0l-7 7m7-7H3"})])}function Wr(t,e){return M(),N("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor"},[x("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"})])}function Po(t,e){return M(),N("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor"},[x("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M12 6v6m0 0v6m0-6h6m-6 0H6"})])}const To={class:"mb-4 space-y-4 md:flex md:space-x-4 md:space-y-0"},Oo={class:"flex-auto"},So={class:"flex-auto"},Io={key:0,class:"text-red-vivid-500"},$o={emits:["added"],setup(t,{emit:e}){const n=cr({name:null,value:null});let r=Ie([]);function a(){return r=[],n.name?!0:(r.value.push("Field name is required"),!1)}function i(){n.name=null,n.value=null}function o(){!a()||(e("added",{...n}),i())}return(s,l)=>(M(),F("div",null,[Y("div",To,[Y("div",Oo,[x(Vr,{for:"number",value:"Field Name"}),x(Gn,{id:"name",modelValue:L(n).name,"onUpdate:modelValue":l[0]||(l[0]=u=>L(n).name=u),type:"text",class:"w-full"},null,8,["modelValue"])]),Y("div",So,[x(Vr,{for:"number",value:"Field Value"}),x(Gn,{id:"value",modelValue:L(n).value,"onUpdate:modelValue":l[1]||(l[1]=u=>L(n).value=u),type:"text",class:"w-full"},null,8,["modelValue"])]),Y("button",{class:"mt-4 font-bold hover:underline",type:"button",onClick:o}," Add Field ")]),L(r).length?(M(),F("div",Io,[Y("ul",null,[(M(!0),F(lt,null,ut(L(r),(u,c)=>(M(),F("li",{key:`error-${c}`},Z(u),1))),128))])])):$e("",!0)]))}},Eo=["textContent"],Co={props:{field:{type:Object,required:!0}},setup(t){const e=Ie(!1);return(n,r)=>(M(),F("div",{class:"grid grid-cols-9 gap-5 mb-5",onMouseenter:r[0]||(r[0]=a=>e.value=!0),onMouseleave:r[1]||(r[1]=a=>e.value=!1)},[Y("div",{class:"col-span-4 px-4 py-2 rounded",textContent:Z(t.field.name)},null,8,Eo),x(Gn,{id:"input-"+t.field.name,value:t.field.value,type:"text",class:"col-span-4 font-mono"},null,8,["id","value"]),Ge(n.$slots,"delButton")],32))}},Yo={key:0,class:"p-3 mb-5 text-sm bg-yellow-100 rounded"},Ao={key:1,class:"mb-5 mr-5"},Fo=["onClick"],No=Ua(" Field "),Cy={props:{fields:{type:Array,required:!0},editable:{type:Boolean,default:!0}},emits:["fieldAdded","fieldDeleted"],setup(t,{emit:e}){const n=t,r=Ie(!1),a=Ie(!1),i=Et(()=>{const u=n.fields.length<1;return r.value||u||a});function o(){r.value=!0}function s(u){e("fieldAdded",u),a.value=!0}function l(u){e("fieldDeleted",u)}return(u,c)=>(M(),F("div",null,[t.fields.length===0&&t.editable?(M(),F("div",Yo," No policy fields found ")):(M(),F("div",Ao,[(M(!0),F(lt,null,ut(t.fields,f=>(M(),N(Co,{key:f.id,field:f,class:""},uo({_:2},[f.protected?void 0:{name:"delButton",fn:fr(()=>[Ba(Y("button",{class:"btn hover:bg-red-vivid-300 hover:text-white",onClick:d=>l(f)},[x(L(xo),{class:"w-5 h-5 mx-auto"})],8,Fo),[[co,!0]])])}]),1032,["field"]))),128))])),L(i)?(M(),N($o,{key:2,onAdded:c[0]||(c[0]=f=>s(f))})):$e("",!0),t.editable&&!L(i)?(M(),F("button",{key:3,type:"button",class:"flex items-center px-2 py-1 rounded btn btn-sm",onClick:o},[x(L(Po),{class:"w-5 h-5 mr-2"}),No])):$e("",!0)]))}};function Wt(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function Hr(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function Ht(t,e,n){return e&&Hr(t.prototype,e),n&&Hr(t,n),t}function rt(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function Br(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter(function(a){return Object.getOwnPropertyDescriptor(t,a).enumerable})),n.push.apply(n,r)}return n}function p(t){for(var e=1;e<arguments.length;e++){var n=arguments[e]!=null?arguments[e]:{};e%2?Br(Object(n),!0).forEach(function(r){rt(t,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):Br(Object(n)).forEach(function(r){Object.defineProperty(t,r,Object.getOwnPropertyDescriptor(n,r))})}return t}function jo(t,e){if(t==null)return{};var n={},r=Object.keys(t),a,i;for(i=0;i<r.length;i++)a=r[i],!(e.indexOf(a)>=0)&&(n[a]=t[a]);return n}function Lo(t,e){if(t==null)return{};var n=jo(t,e),r,a;if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(a=0;a<i.length;a++)r=i[a],!(e.indexOf(r)>=0)&&(!Object.prototype.propertyIsEnumerable.call(t,r)||(n[r]=t[r]))}return n}function an(t,e){return zo(t)||Wo(t,e)||Za(t,e)||Bo()}function dn(t){return Ro(t)||Vo(t)||Za(t)||Ho()}function Ro(t){if(Array.isArray(t))return Kn(t)}function zo(t){if(Array.isArray(t))return t}function Vo(t){if(typeof Symbol!="undefined"&&Symbol.iterator in Object(t))return Array.from(t)}function Wo(t,e){if(!(typeof Symbol=="undefined"||!(Symbol.iterator in Object(t)))){var n=[],r=!0,a=!1,i=void 0;try{for(var o=t[Symbol.iterator](),s;!(r=(s=o.next()).done)&&(n.push(s.value),!(e&&n.length===e));r=!0);}catch(l){a=!0,i=l}finally{try{!r&&o.return!=null&&o.return()}finally{if(a)throw i}}return n}}function Za(t,e){if(!!t){if(typeof t=="string")return Kn(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);if(n==="Object"&&t.constructor&&(n=t.constructor.name),n==="Map"||n==="Set")return Array.from(t);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return Kn(t,e)}}function Kn(t,e){(e==null||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}function Ho(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function Bo(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}var Xt=typeof globalThis!="undefined"?globalThis:typeof window!="undefined"?window:typeof global!="undefined"?global:typeof self!="undefined"?self:{};function dr(t,e,n){return n={path:e,exports:{},require:function(r,a){return Uo(r,a==null?n.path:a)}},t(n,n.exports),n.exports}function Uo(){throw new Error("Dynamic requires are not currently supported by @rollup/plugin-commonjs")}var Go=typeof Xt=="object"&&Xt&&Xt.Object===Object&&Xt,qa=Go,Ko=typeof self=="object"&&self&&self.Object===Object&&self,Zo=qa||Ko||Function("return this")(),xe=Zo,qo=xe.Symbol,ae=qo,Xa=Object.prototype,Xo=Xa.hasOwnProperty,Jo=Xa.toString,kt=ae?ae.toStringTag:void 0;function Qo(t){var e=Xo.call(t,kt),n=t[kt];try{t[kt]=void 0;var r=!0}catch{}var a=Jo.call(t);return r&&(e?t[kt]=n:delete t[kt]),a}var es=Qo,ts=Object.prototype,ns=ts.toString;function rs(t){return ns.call(t)}var as=rs,is="[object Null]",os="[object Undefined]",Ur=ae?ae.toStringTag:void 0;function ss(t){return t==null?t===void 0?os:is:Ur&&Ur in Object(t)?es(t):as(t)}var ve=ss;function ls(t){return t!=null&&typeof t=="object"}var q=ls,us=Array.isArray,U=us;function cs(t){var e=typeof t;return t!=null&&(e=="object"||e=="function")}var G=cs,fs="[object AsyncFunction]",ds="[object Function]",vs="[object GeneratorFunction]",hs="[object Proxy]";function ps(t){if(!G(t))return!1;var e=ve(t);return e==ds||e==vs||e==fs||e==hs}var ye=ps,ms=9007199254740991;function gs(t){return typeof t=="number"&&t>-1&&t%1==0&&t<=ms}var vr=gs;function ys(t){return t!=null&&vr(t.length)&&!ye(t)}var Bt=ys;function bs(t){return q(t)&&Bt(t)}var re=bs,ws="[object Date]";function Ds(t){return q(t)&&ve(t)==ws}var xs=Ds;function ks(t){return function(e){return t(e)}}var xn=ks,Re=dr(function(t,e){var n=e&&!e.nodeType&&e,r=n&&!0&&t&&!t.nodeType&&t,a=r&&r.exports===n,i=a&&qa.process,o=function(){try{var s=r&&r.require&&r.require("util").types;return s||i&&i.binding&&i.binding("util")}catch{}}();t.exports=o}),Gr=Re&&Re.isDate,_s=Gr?xn(Gr):xs,Ms=_s,Ps="[object Symbol]";function Ts(t){return typeof t=="symbol"||q(t)&&ve(t)==Ps}var kn=Ts,Os=/\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,Ss=/^\w*$/;function Is(t,e){if(U(t))return!1;var n=typeof t;return n=="number"||n=="symbol"||n=="boolean"||t==null||kn(t)?!0:Ss.test(t)||!Os.test(t)||e!=null&&t in Object(e)}var hr=Is,$s=xe["__core-js_shared__"],Fn=$s,Kr=function(){var t=/[^.]+$/.exec(Fn&&Fn.keys&&Fn.keys.IE_PROTO||"");return t?"Symbol(src)_1."+t:""}();function Es(t){return!!Kr&&Kr in t}var Cs=Es,Ys=Function.prototype,As=Ys.toString;function Fs(t){if(t!=null){try{return As.call(t)}catch{}try{return t+""}catch{}}return""}var Ze=Fs,Ns=/[\\^$.*+?()[\]{}|]/g,js=/^\[object .+?Constructor\]$/,Ls=Function.prototype,Rs=Object.prototype,zs=Ls.toString,Vs=Rs.hasOwnProperty,Ws=RegExp("^"+zs.call(Vs).replace(Ns,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$");function Hs(t){if(!G(t)||Cs(t))return!1;var e=ye(t)?Ws:js;return e.test(Ze(t))}var Bs=Hs;function Us(t,e){return t==null?void 0:t[e]}var Gs=Us;function Ks(t,e){var n=Gs(t,e);return Bs(n)?n:void 0}var qe=Ks,Zs=qe(Object,"create"),Ct=Zs;function qs(){this.__data__=Ct?Ct(null):{},this.size=0}var Xs=qs;function Js(t){var e=this.has(t)&&delete this.__data__[t];return this.size-=e?1:0,e}var Qs=Js,el="__lodash_hash_undefined__",tl=Object.prototype,nl=tl.hasOwnProperty;function rl(t){var e=this.__data__;if(Ct){var n=e[t];return n===el?void 0:n}return nl.call(e,t)?e[t]:void 0}var al=rl,il=Object.prototype,ol=il.hasOwnProperty;function sl(t){var e=this.__data__;return Ct?e[t]!==void 0:ol.call(e,t)}var ll=sl,ul="__lodash_hash_undefined__";function cl(t,e){var n=this.__data__;return this.size+=this.has(t)?0:1,n[t]=Ct&&e===void 0?ul:e,this}var fl=cl;function ct(t){var e=-1,n=t==null?0:t.length;for(this.clear();++e<n;){var r=t[e];this.set(r[0],r[1])}}ct.prototype.clear=Xs;ct.prototype.delete=Qs;ct.prototype.get=al;ct.prototype.has=ll;ct.prototype.set=fl;var Zr=ct;function dl(){this.__data__=[],this.size=0}var vl=dl;function hl(t,e){return t===e||t!==t&&e!==e}var ft=hl;function pl(t,e){for(var n=t.length;n--;)if(ft(t[n][0],e))return n;return-1}var _n=pl,ml=Array.prototype,gl=ml.splice;function yl(t){var e=this.__data__,n=_n(e,t);if(n<0)return!1;var r=e.length-1;return n==r?e.pop():gl.call(e,n,1),--this.size,!0}var bl=yl;function wl(t){var e=this.__data__,n=_n(e,t);return n<0?void 0:e[n][1]}var Dl=wl;function xl(t){return _n(this.__data__,t)>-1}var kl=xl;function _l(t,e){var n=this.__data__,r=_n(n,t);return r<0?(++this.size,n.push([t,e])):n[r][1]=e,this}var Ml=_l;function dt(t){var e=-1,n=t==null?0:t.length;for(this.clear();++e<n;){var r=t[e];this.set(r[0],r[1])}}dt.prototype.clear=vl;dt.prototype.delete=bl;dt.prototype.get=Dl;dt.prototype.has=kl;dt.prototype.set=Ml;var Mn=dt,Pl=qe(xe,"Map"),Yt=Pl;function Tl(){this.size=0,this.__data__={hash:new Zr,map:new(Yt||Mn),string:new Zr}}var Ol=Tl;function Sl(t){var e=typeof t;return e=="string"||e=="number"||e=="symbol"||e=="boolean"?t!=="__proto__":t===null}var Il=Sl;function $l(t,e){var n=t.__data__;return Il(e)?n[typeof e=="string"?"string":"hash"]:n.map}var Pn=$l;function El(t){var e=Pn(this,t).delete(t);return this.size-=e?1:0,e}var Cl=El;function Yl(t){return Pn(this,t).get(t)}var Al=Yl;function Fl(t){return Pn(this,t).has(t)}var Nl=Fl;function jl(t,e){var n=Pn(this,t),r=n.size;return n.set(t,e),this.size+=n.size==r?0:1,this}var Ll=jl;function vt(t){var e=-1,n=t==null?0:t.length;for(this.clear();++e<n;){var r=t[e];this.set(r[0],r[1])}}vt.prototype.clear=Ol;vt.prototype.delete=Cl;vt.prototype.get=Al;vt.prototype.has=Nl;vt.prototype.set=Ll;var Tn=vt,Rl="Expected a function";function pr(t,e){if(typeof t!="function"||e!=null&&typeof e!="function")throw new TypeError(Rl);var n=function(){var r=arguments,a=e?e.apply(this,r):r[0],i=n.cache;if(i.has(a))return i.get(a);var o=t.apply(this,r);return n.cache=i.set(a,o)||i,o};return n.cache=new(pr.Cache||Tn),n}pr.Cache=Tn;var zl=pr,Vl=500;function Wl(t){var e=zl(t,function(r){return n.size===Vl&&n.clear(),r}),n=e.cache;return e}var Hl=Wl,Bl=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,Ul=/\\(\\)?/g,Gl=Hl(function(t){var e=[];return t.charCodeAt(0)===46&&e.push(""),t.replace(Bl,function(n,r,a,i){e.push(a?i.replace(Ul,"$1"):r||n)}),e}),Kl=Gl;function Zl(t,e){for(var n=-1,r=t==null?0:t.length,a=Array(r);++n<r;)a[n]=e(t[n],n,t);return a}var mr=Zl,ql=1/0,qr=ae?ae.prototype:void 0,Xr=qr?qr.toString:void 0;function Ja(t){if(typeof t=="string")return t;if(U(t))return mr(t,Ja)+"";if(kn(t))return Xr?Xr.call(t):"";var e=t+"";return e=="0"&&1/t==-ql?"-0":e}var Xl=Ja;function Jl(t){return t==null?"":Xl(t)}var Ql=Jl;function eu(t,e){return U(t)?t:hr(t,e)?[t]:Kl(Ql(t))}var ht=eu,tu=1/0;function nu(t){if(typeof t=="string"||kn(t))return t;var e=t+"";return e=="0"&&1/t==-tu?"-0":e}var pt=nu;function ru(t,e){e=ht(e,t);for(var n=0,r=e.length;t!=null&&n<r;)t=t[pt(e[n++])];return n&&n==r?t:void 0}var On=ru;function au(t,e,n){var r=t==null?void 0:On(t,e);return r===void 0?n:r}var At=au,iu=function(){try{var t=qe(Object,"defineProperty");return t({},"",{}),t}catch{}}(),vn=iu;function ou(t,e,n){e=="__proto__"&&vn?vn(t,e,{configurable:!0,enumerable:!0,value:n,writable:!0}):t[e]=n}var Sn=ou,su=Object.prototype,lu=su.hasOwnProperty;function uu(t,e,n){var r=t[e];(!(lu.call(t,e)&&ft(r,n))||n===void 0&&!(e in t))&&Sn(t,e,n)}var gr=uu,cu=9007199254740991,fu=/^(?:0|[1-9]\d*)$/;function du(t,e){var n=typeof t;return e=e==null?cu:e,!!e&&(n=="number"||n!="symbol"&&fu.test(t))&&t>-1&&t%1==0&&t<e}var In=du;function vu(t,e,n,r){if(!G(t))return t;e=ht(e,t);for(var a=-1,i=e.length,o=i-1,s=t;s!=null&&++a<i;){var l=pt(e[a]),u=n;if(l==="__proto__"||l==="constructor"||l==="prototype")return t;if(a!=o){var c=s[l];u=r?r(c,l,s):void 0,u===void 0&&(u=G(c)?c:In(e[a+1])?[]:{})}gr(s,l,u),s=s[l]}return t}var Qa=vu;function hu(t){return function(e,n,r){for(var a=-1,i=Object(e),o=r(e),s=o.length;s--;){var l=o[t?s:++a];if(n(i[l],l,i)===!1)break}return e}}var pu=hu,mu=pu(),ei=mu;function gu(t,e){for(var n=-1,r=Array(t);++n<t;)r[n]=e(n);return r}var yu=gu,bu="[object Arguments]";function wu(t){return q(t)&&ve(t)==bu}var Jr=wu,ti=Object.prototype,Du=ti.hasOwnProperty,xu=ti.propertyIsEnumerable,ku=Jr(function(){return arguments}())?Jr:function(t){return q(t)&&Du.call(t,"callee")&&!xu.call(t,"callee")},Ft=ku;function _u(){return!1}var Mu=_u,Nt=dr(function(t,e){var n=e&&!e.nodeType&&e,r=n&&!0&&t&&!t.nodeType&&t,a=r&&r.exports===n,i=a?xe.Buffer:void 0,o=i?i.isBuffer:void 0,s=o||Mu;t.exports=s}),Pu="[object Arguments]",Tu="[object Array]",Ou="[object Boolean]",Su="[object Date]",Iu="[object Error]",$u="[object Function]",Eu="[object Map]",Cu="[object Number]",Yu="[object Object]",Au="[object RegExp]",Fu="[object Set]",Nu="[object String]",ju="[object WeakMap]",Lu="[object ArrayBuffer]",Ru="[object DataView]",zu="[object Float32Array]",Vu="[object Float64Array]",Wu="[object Int8Array]",Hu="[object Int16Array]",Bu="[object Int32Array]",Uu="[object Uint8Array]",Gu="[object Uint8ClampedArray]",Ku="[object Uint16Array]",Zu="[object Uint32Array]",A={};A[zu]=A[Vu]=A[Wu]=A[Hu]=A[Bu]=A[Uu]=A[Gu]=A[Ku]=A[Zu]=!0;A[Pu]=A[Tu]=A[Lu]=A[Ou]=A[Ru]=A[Su]=A[Iu]=A[$u]=A[Eu]=A[Cu]=A[Yu]=A[Au]=A[Fu]=A[Nu]=A[ju]=!1;function qu(t){return q(t)&&vr(t.length)&&!!A[ve(t)]}var Xu=qu,Qr=Re&&Re.isTypedArray,Ju=Qr?xn(Qr):Xu,yr=Ju,Qu=Object.prototype,ec=Qu.hasOwnProperty;function tc(t,e){var n=U(t),r=!n&&Ft(t),a=!n&&!r&&Nt(t),i=!n&&!r&&!a&&yr(t),o=n||r||a||i,s=o?yu(t.length,String):[],l=s.length;for(var u in t)(e||ec.call(t,u))&&!(o&&(u=="length"||a&&(u=="offset"||u=="parent")||i&&(u=="buffer"||u=="byteLength"||u=="byteOffset")||In(u,l)))&&s.push(u);return s}var ni=tc,nc=Object.prototype;function rc(t){var e=t&&t.constructor,n=typeof e=="function"&&e.prototype||nc;return t===n}var br=rc;function ac(t,e){return function(n){return t(e(n))}}var ri=ac,ic=ri(Object.keys,Object),oc=ic,sc=Object.prototype,lc=sc.hasOwnProperty;function uc(t){if(!br(t))return oc(t);var e=[];for(var n in Object(t))lc.call(t,n)&&n!="constructor"&&e.push(n);return e}var cc=uc;function fc(t){return Bt(t)?ni(t):cc(t)}var mt=fc;function dc(t,e){return t&&ei(t,e,mt)}var ai=dc;function vc(){this.__data__=new Mn,this.size=0}var hc=vc;function pc(t){var e=this.__data__,n=e.delete(t);return this.size=e.size,n}var mc=pc;function gc(t){return this.__data__.get(t)}var yc=gc;function bc(t){return this.__data__.has(t)}var wc=bc,Dc=200;function xc(t,e){var n=this.__data__;if(n instanceof Mn){var r=n.__data__;if(!Yt||r.length<Dc-1)return r.push([t,e]),this.size=++n.size,this;n=this.__data__=new Tn(r)}return n.set(t,e),this.size=n.size,this}var kc=xc;function gt(t){var e=this.__data__=new Mn(t);this.size=e.size}gt.prototype.clear=hc;gt.prototype.delete=mc;gt.prototype.get=yc;gt.prototype.has=wc;gt.prototype.set=kc;var at=gt,_c="__lodash_hash_undefined__";function Mc(t){return this.__data__.set(t,_c),this}var Pc=Mc;function Tc(t){return this.__data__.has(t)}var Oc=Tc;function hn(t){var e=-1,n=t==null?0:t.length;for(this.__data__=new Tn;++e<n;)this.add(t[e])}hn.prototype.add=hn.prototype.push=Pc;hn.prototype.has=Oc;var Sc=hn;function Ic(t,e){for(var n=-1,r=t==null?0:t.length;++n<r;)if(e(t[n],n,t))return!0;return!1}var ii=Ic;function $c(t,e){return t.has(e)}var Ec=$c,Cc=1,Yc=2;function Ac(t,e,n,r,a,i){var o=n&Cc,s=t.length,l=e.length;if(s!=l&&!(o&&l>s))return!1;var u=i.get(t),c=i.get(e);if(u&&c)return u==e&&c==t;var f=-1,d=!0,v=n&Yc?new Sc:void 0;for(i.set(t,e),i.set(e,t);++f<s;){var h=t[f],m=e[f];if(r)var g=o?r(m,h,f,e,t,i):r(h,m,f,t,e,i);if(g!==void 0){if(g)continue;d=!1;break}if(v){if(!ii(e,function(y,b){if(!Ec(v,b)&&(h===y||a(h,y,n,r,i)))return v.push(b)})){d=!1;break}}else if(!(h===m||a(h,m,n,r,i))){d=!1;break}}return i.delete(t),i.delete(e),d}var oi=Ac,Fc=xe.Uint8Array,pn=Fc;function Nc(t){var e=-1,n=Array(t.size);return t.forEach(function(r,a){n[++e]=[a,r]}),n}var si=Nc;function jc(t){var e=-1,n=Array(t.size);return t.forEach(function(r){n[++e]=r}),n}var Lc=jc,Rc=1,zc=2,Vc="[object Boolean]",Wc="[object Date]",Hc="[object Error]",Bc="[object Map]",Uc="[object Number]",Gc="[object RegExp]",Kc="[object Set]",Zc="[object String]",qc="[object Symbol]",Xc="[object ArrayBuffer]",Jc="[object DataView]",ea=ae?ae.prototype:void 0,Nn=ea?ea.valueOf:void 0;function Qc(t,e,n,r,a,i,o){switch(n){case Jc:if(t.byteLength!=e.byteLength||t.byteOffset!=e.byteOffset)return!1;t=t.buffer,e=e.buffer;case Xc:return!(t.byteLength!=e.byteLength||!i(new pn(t),new pn(e)));case Vc:case Wc:case Uc:return ft(+t,+e);case Hc:return t.name==e.name&&t.message==e.message;case Gc:case Zc:return t==e+"";case Bc:var s=si;case Kc:var l=r&Rc;if(s||(s=Lc),t.size!=e.size&&!l)return!1;var u=o.get(t);if(u)return u==e;r|=zc,o.set(t,e);var c=oi(s(t),s(e),r,a,i,o);return o.delete(t),c;case qc:if(Nn)return Nn.call(t)==Nn.call(e)}return!1}var ef=Qc;function tf(t,e){for(var n=-1,r=e.length,a=t.length;++n<r;)t[a+n]=e[n];return t}var wr=tf;function nf(t,e,n){var r=e(t);return U(t)?r:wr(r,n(t))}var li=nf;function rf(t,e){for(var n=-1,r=t==null?0:t.length,a=0,i=[];++n<r;){var o=t[n];e(o,n,t)&&(i[a++]=o)}return i}var af=rf;function of(){return[]}var ui=of,sf=Object.prototype,lf=sf.propertyIsEnumerable,ta=Object.getOwnPropertySymbols,uf=ta?function(t){return t==null?[]:(t=Object(t),af(ta(t),function(e){return lf.call(t,e)}))}:ui,Dr=uf;function cf(t){return li(t,mt,Dr)}var Zn=cf,ff=1,df=Object.prototype,vf=df.hasOwnProperty;function hf(t,e,n,r,a,i){var o=n&ff,s=Zn(t),l=s.length,u=Zn(e),c=u.length;if(l!=c&&!o)return!1;for(var f=l;f--;){var d=s[f];if(!(o?d in e:vf.call(e,d)))return!1}var v=i.get(t),h=i.get(e);if(v&&h)return v==e&&h==t;var m=!0;i.set(t,e),i.set(e,t);for(var g=o;++f<l;){d=s[f];var y=t[d],b=e[d];if(r)var P=o?r(b,y,d,e,t,i):r(y,b,d,t,e,i);if(!(P===void 0?y===b||a(y,b,n,r,i):P)){m=!1;break}g||(g=d=="constructor")}if(m&&!g){var w=t.constructor,T=e.constructor;w!=T&&"constructor"in t&&"constructor"in e&&!(typeof w=="function"&&w instanceof w&&typeof T=="function"&&T instanceof T)&&(m=!1)}return i.delete(t),i.delete(e),m}var pf=hf,mf=qe(xe,"DataView"),qn=mf,gf=qe(xe,"Promise"),Xn=gf,yf=qe(xe,"Set"),Jn=yf,bf=qe(xe,"WeakMap"),Qn=bf,na="[object Map]",wf="[object Object]",ra="[object Promise]",aa="[object Set]",ia="[object WeakMap]",oa="[object DataView]",Df=Ze(qn),xf=Ze(Yt),kf=Ze(Xn),_f=Ze(Jn),Mf=Ze(Qn),Be=ve;(qn&&Be(new qn(new ArrayBuffer(1)))!=oa||Yt&&Be(new Yt)!=na||Xn&&Be(Xn.resolve())!=ra||Jn&&Be(new Jn)!=aa||Qn&&Be(new Qn)!=ia)&&(Be=function(t){var e=ve(t),n=e==wf?t.constructor:void 0,r=n?Ze(n):"";if(r)switch(r){case Df:return oa;case xf:return na;case kf:return ra;case _f:return aa;case Mf:return ia}return e});var it=Be,Pf=1,sa="[object Arguments]",la="[object Array]",Jt="[object Object]",Tf=Object.prototype,ua=Tf.hasOwnProperty;function Of(t,e,n,r,a,i){var o=U(t),s=U(e),l=o?la:it(t),u=s?la:it(e);l=l==sa?Jt:l,u=u==sa?Jt:u;var c=l==Jt,f=u==Jt,d=l==u;if(d&&Nt(t)){if(!Nt(e))return!1;o=!0,c=!1}if(d&&!c)return i||(i=new at),o||yr(t)?oi(t,e,n,r,a,i):ef(t,e,l,n,r,a,i);if(!(n&Pf)){var v=c&&ua.call(t,"__wrapped__"),h=f&&ua.call(e,"__wrapped__");if(v||h){var m=v?t.value():t,g=h?e.value():e;return i||(i=new at),a(m,g,n,r,i)}}return d?(i||(i=new at),pf(t,e,n,r,a,i)):!1}var Sf=Of;function ci(t,e,n,r,a){return t===e?!0:t==null||e==null||!q(t)&&!q(e)?t!==t&&e!==e:Sf(t,e,n,r,ci,a)}var fi=ci,If=1,$f=2;function Ef(t,e,n,r){var a=n.length,i=a,o=!r;if(t==null)return!i;for(t=Object(t);a--;){var s=n[a];if(o&&s[2]?s[1]!==t[s[0]]:!(s[0]in t))return!1}for(;++a<i;){s=n[a];var l=s[0],u=t[l],c=s[1];if(o&&s[2]){if(u===void 0&&!(l in t))return!1}else{var f=new at;if(r)var d=r(u,c,l,t,e,f);if(!(d===void 0?fi(c,u,If|$f,r,f):d))return!1}}return!0}var Cf=Ef;function Yf(t){return t===t&&!G(t)}var di=Yf;function Af(t){for(var e=mt(t),n=e.length;n--;){var r=e[n],a=t[r];e[n]=[r,a,di(a)]}return e}var Ff=Af;function Nf(t,e){return function(n){return n==null?!1:n[t]===e&&(e!==void 0||t in Object(n))}}var vi=Nf;function jf(t){var e=Ff(t);return e.length==1&&e[0][2]?vi(e[0][0],e[0][1]):function(n){return n===t||Cf(n,t,e)}}var Lf=jf;function Rf(t,e){return t!=null&&e in Object(t)}var zf=Rf;function Vf(t,e,n){e=ht(e,t);for(var r=-1,a=e.length,i=!1;++r<a;){var o=pt(e[r]);if(!(i=t!=null&&n(t,o)))break;t=t[o]}return i||++r!=a?i:(a=t==null?0:t.length,!!a&&vr(a)&&In(o,a)&&(U(t)||Ft(t)))}var hi=Vf;function Wf(t,e){return t!=null&&hi(t,e,zf)}var pi=Wf,Hf=1,Bf=2;function Uf(t,e){return hr(t)&&di(e)?vi(pt(t),e):function(n){var r=At(n,t);return r===void 0&&r===e?pi(n,t):fi(e,r,Hf|Bf)}}var Gf=Uf;function Kf(t){return t}var xr=Kf;function Zf(t){return function(e){return e==null?void 0:e[t]}}var qf=Zf;function Xf(t){return function(e){return On(e,t)}}var Jf=Xf;function Qf(t){return hr(t)?qf(pt(t)):Jf(t)}var ed=Qf;function td(t){return typeof t=="function"?t:t==null?xr:typeof t=="object"?U(t)?Gf(t[0],t[1]):Lf(t):ed(t)}var mi=td;function nd(t,e,n){switch(n.length){case 0:return t.call(e);case 1:return t.call(e,n[0]);case 2:return t.call(e,n[0],n[1]);case 3:return t.call(e,n[0],n[1],n[2])}return t.apply(e,n)}var gi=nd,ca=Math.max;function rd(t,e,n){return e=ca(e===void 0?t.length-1:e,0),function(){for(var r=arguments,a=-1,i=ca(r.length-e,0),o=Array(i);++a<i;)o[a]=r[e+a];a=-1;for(var s=Array(e+1);++a<e;)s[a]=r[a];return s[e]=n(o),gi(t,this,s)}}var yi=rd;function ad(t){return function(){return t}}var id=ad,od=vn?function(t,e){return vn(t,"toString",{configurable:!0,enumerable:!1,value:id(e),writable:!0})}:xr,sd=od,ld=800,ud=16,cd=Date.now;function fd(t){var e=0,n=0;return function(){var r=cd(),a=ud-(r-n);if(n=r,a>0){if(++e>=ld)return arguments[0]}else e=0;return t.apply(void 0,arguments)}}var dd=fd,vd=dd(sd),bi=vd;function hd(t,e){return bi(yi(t,e,xr),t+"")}var kr=hd;function pd(t,e,n){if(!G(n))return!1;var r=typeof e;return(r=="number"?Bt(n)&&In(e,n.length):r=="string"&&e in n)?ft(n[e],t):!1}var _r=pd;function md(t){var e=[];if(t!=null)for(var n in Object(t))e.push(n);return e}var gd=md,yd=Object.prototype,bd=yd.hasOwnProperty;function wd(t){if(!G(t))return gd(t);var e=br(t),n=[];for(var r in t)r=="constructor"&&(e||!bd.call(t,r))||n.push(r);return n}var Dd=wd;function xd(t){return Bt(t)?ni(t,!0):Dd(t)}var yt=xd,wi=Object.prototype,kd=wi.hasOwnProperty,_d=kr(function(t,e){t=Object(t);var n=-1,r=e.length,a=r>2?e[2]:void 0;for(a&&_r(e[0],e[1],a)&&(r=1);++n<r;)for(var i=e[n],o=yt(i),s=-1,l=o.length;++s<l;){var u=o[s],c=t[u];(c===void 0||ft(c,wi[u])&&!kd.call(t,u))&&(t[u]=i[u])}return t}),Tt=_d;function Md(t,e,n){(n!==void 0&&!ft(t[e],n)||n===void 0&&!(e in t))&&Sn(t,e,n)}var er=Md,Di=dr(function(t,e){var n=e&&!e.nodeType&&e,r=n&&!0&&t&&!t.nodeType&&t,a=r&&r.exports===n,i=a?xe.Buffer:void 0,o=i?i.allocUnsafe:void 0;function s(l,u){if(u)return l.slice();var c=l.length,f=o?o(c):new l.constructor(c);return l.copy(f),f}t.exports=s});function Pd(t){var e=new t.constructor(t.byteLength);return new pn(e).set(new pn(t)),e}var Mr=Pd;function Td(t,e){var n=e?Mr(t.buffer):t.buffer;return new t.constructor(n,t.byteOffset,t.length)}var xi=Td;function Od(t,e){var n=-1,r=t.length;for(e||(e=Array(r));++n<r;)e[n]=t[n];return e}var ki=Od,fa=Object.create,Sd=function(){function t(){}return function(e){if(!G(e))return{};if(fa)return fa(e);t.prototype=e;var n=new t;return t.prototype=void 0,n}}(),Id=Sd,$d=ri(Object.getPrototypeOf,Object),Pr=$d;function Ed(t){return typeof t.constructor=="function"&&!br(t)?Id(Pr(t)):{}}var _i=Ed,Cd="[object Object]",Yd=Function.prototype,Ad=Object.prototype,Mi=Yd.toString,Fd=Ad.hasOwnProperty,Nd=Mi.call(Object);function jd(t){if(!q(t)||ve(t)!=Cd)return!1;var e=Pr(t);if(e===null)return!0;var n=Fd.call(e,"constructor")&&e.constructor;return typeof n=="function"&&n instanceof n&&Mi.call(n)==Nd}var Pi=jd;function Ld(t,e){if(!(e==="constructor"&&typeof t[e]=="function")&&e!="__proto__")return t[e]}var tr=Ld;function Rd(t,e,n,r){var a=!n;n||(n={});for(var i=-1,o=e.length;++i<o;){var s=e[i],l=r?r(n[s],t[s],s,n,t):void 0;l===void 0&&(l=t[s]),a?Sn(n,s,l):gr(n,s,l)}return n}var bt=Rd;function zd(t){return bt(t,yt(t))}var Vd=zd;function Wd(t,e,n,r,a,i,o){var s=tr(t,n),l=tr(e,n),u=o.get(l);if(u){er(t,n,u);return}var c=i?i(s,l,n+"",t,e,o):void 0,f=c===void 0;if(f){var d=U(l),v=!d&&Nt(l),h=!d&&!v&&yr(l);c=l,d||v||h?U(s)?c=s:re(s)?c=ki(s):v?(f=!1,c=Di(l,!0)):h?(f=!1,c=xi(l,!0)):c=[]:Pi(l)||Ft(l)?(c=s,Ft(s)?c=Vd(s):(!G(s)||ye(s))&&(c=_i(l))):f=!1}f&&(o.set(l,c),a(c,l,r,i,o),o.delete(l)),er(t,n,c)}var Hd=Wd;function Ti(t,e,n,r,a){t!==e&&ei(e,function(i,o){if(a||(a=new at),G(i))Hd(t,e,o,n,Ti,r,a);else{var s=r?r(tr(t,o),i,o+"",t,e,a):void 0;s===void 0&&(s=i),er(t,o,s)}},yt)}var Oi=Ti;function Si(t,e,n,r,a,i){return G(t)&&G(e)&&(i.set(e,t),Oi(t,e,void 0,Si,i),i.delete(e)),t}var Bd=Si;function Ud(t){return kr(function(e,n){var r=-1,a=n.length,i=a>1?n[a-1]:void 0,o=a>2?n[2]:void 0;for(i=t.length>3&&typeof i=="function"?(a--,i):void 0,o&&_r(n[0],n[1],o)&&(i=a<3?void 0:i,a=1),e=Object(e);++r<a;){var s=n[r];s&&t(e,s,r,i)}return e})}var Gd=Ud,Kd=Gd(function(t,e,n,r){Oi(t,e,n,r)}),Zd=Kd,qd=kr(function(t){return t.push(void 0,Bd),gi(Zd,void 0,t)}),Tr=qd;function Xd(t,e,n){for(var r=-1,a=e.length,i={};++r<a;){var o=e[r],s=On(t,o);n(s,o)&&Qa(i,ht(o,t),s)}return i}var Jd=Xd;function Qd(t,e){return Jd(t,e,function(n,r){return pi(t,r)})}var ev=Qd,da=ae?ae.isConcatSpreadable:void 0;function tv(t){return U(t)||Ft(t)||!!(da&&t&&t[da])}var nv=tv;function Ii(t,e,n,r,a){var i=-1,o=t.length;for(n||(n=nv),a||(a=[]);++i<o;){var s=t[i];e>0&&n(s)?e>1?Ii(s,e-1,n,r,a):wr(a,s):r||(a[a.length]=s)}return a}var rv=Ii;function av(t){var e=t==null?0:t.length;return e?rv(t,1):[]}var iv=av;function ov(t){return bi(yi(t,void 0,iv),t+"")}var $i=ov,sv=$i(function(t,e){return t==null?{}:ev(t,e)}),lv=sv;function uv(t,e){for(var n=-1,r=t==null?0:t.length;++n<r&&e(t[n],n,t)!==!1;);return t}var cv=uv;function fv(t,e){return t&&bt(e,mt(e),t)}var dv=fv;function vv(t,e){return t&&bt(e,yt(e),t)}var hv=vv;function pv(t,e){return bt(t,Dr(t),e)}var mv=pv,gv=Object.getOwnPropertySymbols,yv=gv?function(t){for(var e=[];t;)wr(e,Dr(t)),t=Pr(t);return e}:ui,Ei=yv;function bv(t,e){return bt(t,Ei(t),e)}var wv=bv;function Dv(t){return li(t,yt,Ei)}var Ci=Dv,xv=Object.prototype,kv=xv.hasOwnProperty;function _v(t){var e=t.length,n=new t.constructor(e);return e&&typeof t[0]=="string"&&kv.call(t,"index")&&(n.index=t.index,n.input=t.input),n}var Mv=_v;function Pv(t,e){var n=e?Mr(t.buffer):t.buffer;return new t.constructor(n,t.byteOffset,t.byteLength)}var Tv=Pv,Ov=/\w*$/;function Sv(t){var e=new t.constructor(t.source,Ov.exec(t));return e.lastIndex=t.lastIndex,e}var Iv=Sv,va=ae?ae.prototype:void 0,ha=va?va.valueOf:void 0;function $v(t){return ha?Object(ha.call(t)):{}}var Ev=$v,Cv="[object Boolean]",Yv="[object Date]",Av="[object Map]",Fv="[object Number]",Nv="[object RegExp]",jv="[object Set]",Lv="[object String]",Rv="[object Symbol]",zv="[object ArrayBuffer]",Vv="[object DataView]",Wv="[object Float32Array]",Hv="[object Float64Array]",Bv="[object Int8Array]",Uv="[object Int16Array]",Gv="[object Int32Array]",Kv="[object Uint8Array]",Zv="[object Uint8ClampedArray]",qv="[object Uint16Array]",Xv="[object Uint32Array]";function Jv(t,e,n){var r=t.constructor;switch(e){case zv:return Mr(t);case Cv:case Yv:return new r(+t);case Vv:return Tv(t,n);case Wv:case Hv:case Bv:case Uv:case Gv:case Kv:case Zv:case qv:case Xv:return xi(t,n);case Av:return new r;case Fv:case Lv:return new r(t);case Nv:return Iv(t);case jv:return new r;case Rv:return Ev(t)}}var Qv=Jv,eh="[object Map]";function th(t){return q(t)&&it(t)==eh}var nh=th,pa=Re&&Re.isMap,rh=pa?xn(pa):nh,ah=rh,ih="[object Set]";function oh(t){return q(t)&&it(t)==ih}var sh=oh,ma=Re&&Re.isSet,lh=ma?xn(ma):sh,uh=lh,ch=1,fh=2,dh=4,Yi="[object Arguments]",vh="[object Array]",hh="[object Boolean]",ph="[object Date]",mh="[object Error]",Ai="[object Function]",gh="[object GeneratorFunction]",yh="[object Map]",bh="[object Number]",Fi="[object Object]",wh="[object RegExp]",Dh="[object Set]",xh="[object String]",kh="[object Symbol]",_h="[object WeakMap]",Mh="[object ArrayBuffer]",Ph="[object DataView]",Th="[object Float32Array]",Oh="[object Float64Array]",Sh="[object Int8Array]",Ih="[object Int16Array]",$h="[object Int32Array]",Eh="[object Uint8Array]",Ch="[object Uint8ClampedArray]",Yh="[object Uint16Array]",Ah="[object Uint32Array]",C={};C[Yi]=C[vh]=C[Mh]=C[Ph]=C[hh]=C[ph]=C[Th]=C[Oh]=C[Sh]=C[Ih]=C[$h]=C[yh]=C[bh]=C[Fi]=C[wh]=C[Dh]=C[xh]=C[kh]=C[Eh]=C[Ch]=C[Yh]=C[Ah]=!0;C[mh]=C[Ai]=C[_h]=!1;function on(t,e,n,r,a,i){var o,s=e&ch,l=e&fh,u=e&dh;if(n&&(o=a?n(t,r,a,i):n(t)),o!==void 0)return o;if(!G(t))return t;var c=U(t);if(c){if(o=Mv(t),!s)return ki(t,o)}else{var f=it(t),d=f==Ai||f==gh;if(Nt(t))return Di(t,s);if(f==Fi||f==Yi||d&&!a){if(o=l||d?{}:_i(t),!s)return l?wv(t,hv(o,t)):mv(t,dv(o,t))}else{if(!C[f])return a?t:{};o=Qv(t,f,s)}}i||(i=new at);var v=i.get(t);if(v)return v;i.set(t,o),uh(t)?t.forEach(function(g){o.add(on(g,e,n,g,t,i))}):ah(t)&&t.forEach(function(g,y){o.set(y,on(g,e,n,y,t,i))});var h=u?l?Ci:Zn:l?yt:mt,m=c?void 0:h(t);return cv(m||t,function(g,y){m&&(y=g,g=t[y]),gr(o,y,on(g,e,n,y,t,i))}),o}var Fh=on;function Nh(t){var e=t==null?0:t.length;return e?t[e-1]:void 0}var jt=Nh;function jh(t,e,n){var r=-1,a=t.length;e<0&&(e=-e>a?0:a+e),n=n>a?a:n,n<0&&(n+=a),a=e>n?0:n-e>>>0,e>>>=0;for(var i=Array(a);++r<a;)i[r]=t[r+e];return i}var Lh=jh;function Rh(t,e){return e.length<2?t:On(t,Lh(e,0,-1))}var zh=Rh;function Vh(t,e){return e=ht(e,t),t=zh(t,e),t==null||delete t[pt(jt(e))]}var Wh=Vh;function Hh(t){return Pi(t)?void 0:t}var Bh=Hh,Uh=1,Gh=2,Kh=4,Zh=$i(function(t,e){var n={};if(t==null)return n;var r=!1;e=mr(e,function(i){return i=ht(i,t),r||(r=i.length>1),i}),bt(t,Ci(t),n),r&&(n=Fh(n,Uh|Gh|Kh,Bh));for(var a=e.length;a--;)Wh(n,e[a]);return n}),nr=Zh,qh=Object.prototype,Xh=qh.hasOwnProperty;function Jh(t,e){return t!=null&&Xh.call(t,e)}var Qh=Jh;function ep(t,e){return t!=null&&hi(t,e,Qh)}var Ni=ep;function tp(t,e){return function(n,r){if(n==null)return n;if(!Bt(n))return t(n,r);for(var a=n.length,i=e?a:-1,o=Object(n);(e?i--:++i<a)&&r(o[i],i,o)!==!1;);return n}}var np=tp,rp=np(ai),ap=rp;function ip(t,e){var n;return ap(t,function(r,a,i){return n=e(r,a,i),!n}),!!n}var op=ip;function sp(t,e,n){var r=U(t)?ii:op;return n&&_r(t,e,n)&&(e=void 0),r(t,mi(e))}var ji=sp;const lp=t=>Object.prototype.toString.call(t).slice(8,-1),Ne=t=>Ms(t)&&!isNaN(t.getTime()),ue=t=>lp(t)==="Object",Or=Ni,rr=(t,e)=>ji(e,n=>Ni(t,n)),up=ji,O=(t,e,n="0")=>{for(t=t!=null?String(t):"",e=e||2;t.length<e;)t=`${n}${t}`;return t},cp=(...t)=>{const e={};return t.forEach(n=>Object.entries(n).forEach(([r,a])=>{e[r]?re(e[r])?e[r].push(a):e[r]=[e[r],a]:e[r]=a})),e},Q=t=>!!(t&&t.month&&t.year),Pt=(t,e)=>!Q(t)||!Q(e)?!1:t.year===e.year?t.month<e.month:t.year<e.year,Ot=(t,e)=>!Q(t)||!Q(e)?!1:t.year===e.year?t.month>e.month:t.year>e.year,Li=(t,e,n)=>(t||!1)&&!Pt(t,e)&&!Ot(t,n),jn=(t,e)=>!t&&e||t&&!e?!1:!t&&!e?!0:t.month===e.month&&t.year===e.year,Oe=({month:t,year:e},n)=>{const r=n>0?1:-1;for(let a=0;a<Math.abs(n);a++)t+=r,t>12?(t=1,e++):t<1&&(t=12,e--);return{month:t,year:e}},fp=(t,e)=>{if(!Q(t)||!Q(e))return[];const n=[];for(;!Ot(t,e);)n.push(t),t=Oe(t,1);return n};function Ln(t,e){const n=Ne(t),r=Ne(e);return!n&&!r?!0:n!==r?!1:t.getTime()===e.getTime()}const ge=t=>re(t)&&t.length>0,ga=(t,e,n)=>{const r=[];return n.forEach(a=>{const i=a.name||a.toString(),o=a.mixin,s=a.validate;if(Object.prototype.hasOwnProperty.call(t,i)){const l=s?s(t[i]):t[i];e[i]=o&&ue(l)?{...o,...l}:l,r.push(i)}}),{target:e,assigned:r.length?r:null}},R=(t,e,n,r)=>{t&&e&&n&&t.addEventListener(e,n,r)},z=(t,e,n,r)=>{t&&e&&t.removeEventListener(e,n,r)},St=(t,e)=>!!t&&!!e&&(t===e||t.contains(e)),Ri=(t,e)=>{(t.key===" "||t.key==="Enter")&&(e(t),t.preventDefault())},mn=()=>{function t(){return((1+Math.random())*65536|0).toString(16).substring(1)}return`${t()+t()}-${t()}-${t()}-${t()}-${t()}${t()}${t()}`};function dp(t){let e=0,n=0,r;if(t.length===0)return e;for(n=0;n<t.length;n++)r=t.charCodeAt(n),e=(e<<5)-e+r,e|=0;return e}function we(t){if(t===null||t===!0||t===!1)return NaN;var e=Number(t);return isNaN(e)?e:e<0?Math.ceil(e):Math.floor(e)}function H(t,e){if(e.length<t)throw new TypeError(t+" argument"+(t>1?"s":"")+" required, but only "+e.length+" present")}function Ce(t){H(1,arguments);var e=Object.prototype.toString.call(t);return t instanceof Date||typeof t=="object"&&e==="[object Date]"?new Date(t.getTime()):typeof t=="number"||e==="[object Number]"?new Date(t):((typeof t=="string"||e==="[object String]")&&typeof console!="undefined"&&(console.warn("Starting with v2.0.0-beta.1 date-fns doesn't accept strings as date arguments. Please use `parseISO` to parse strings. See: https://git.io/fjule"),console.warn(new Error().stack)),new Date(NaN))}function me(t,e){H(2,arguments);var n=Ce(t),r=we(e);return isNaN(r)?new Date(NaN):(r&&n.setDate(n.getDate()+r),n)}var vp="[object Number]";function hp(t){return typeof t=="number"||q(t)&&ve(t)==vp}var It=hp,pp="[object String]";function mp(t){return typeof t=="string"||!U(t)&&q(t)&&ve(t)==pp}var Fe=mp;function gp(t){return t===void 0}var yp=gp;function bp(t,e,n){return t===t&&(n!==void 0&&(t=t<=n?t:n),e!==void 0&&(t=t>=e?t:e)),t}var wp=bp,ya=0/0,Dp=/^\s+|\s+$/g,xp=/^[-+]0x[0-9a-f]+$/i,kp=/^0b[01]+$/i,_p=/^0o[0-7]+$/i,Mp=parseInt;function Pp(t){if(typeof t=="number")return t;if(kn(t))return ya;if(G(t)){var e=typeof t.valueOf=="function"?t.valueOf():t;t=G(e)?e+"":e}if(typeof t!="string")return t===0?t:+t;t=t.replace(Dp,"");var n=kp.test(t);return n||_p.test(t)?Mp(t.slice(2),n?2:8):xp.test(t)?ya:+t}var Rn=Pp;function Tp(t,e,n){return n===void 0&&(n=e,e=void 0),n!==void 0&&(n=Rn(n),n=n===n?n:0),e!==void 0&&(e=Rn(e),e=e===e?e:0),wp(Rn(t),e,n)}var Op=Tp;function Sp(t,e,n){return t==null?t:Qa(t,e,n)}var Ip=Sp;function $p(t,e){var n={};return e=mi(e),ai(t,function(r,a,i){Sn(n,a,e(r,a,i))}),n}var Ep=$p;function Cp(t,e){return mr(e,function(n){return[n,t[n]]})}var Yp=Cp;function Ap(t){var e=-1,n=Array(t.size);return t.forEach(function(r){n[++e]=[r,r]}),n}var Fp=Ap,Np="[object Map]",jp="[object Set]";function Lp(t){return function(e){var n=it(e);return n==Np?si(e):n==jp?Fp(e):Yp(e,t(e))}}var Rp=Lp,zp=Rp(mt),sn=zp,Vp={inject:["sharedState"],computed:{masks:function(){return this.sharedState.masks},theme:function(){return this.sharedState.theme},locale:function(){return this.sharedState.locale},dayPopoverId:function(){return this.sharedState.dayPopoverId}},methods:{format:function(e,n){return this.locale.format(e,n)},pageForDate:function(e){return this.locale.getDateParts(this.locale.normalizeDate(e))}}},Wp=["base","start","end","startEnd"],Hp=["class","contentClass","style","contentStyle","color","fillMode"],Bp={color:"blue",isDark:!1,highlight:{base:{fillMode:"light"},start:{fillMode:"solid"},end:{fillMode:"solid"}},dot:{base:{fillMode:"solid"},start:{fillMode:"solid"},end:{fillMode:"solid"}},bar:{base:{fillMode:"solid"},start:{fillMode:"solid"},end:{fillMode:"solid"}},content:{base:{},start:{},end:{}}},ba=function(){function t(e){Wt(this,t),Object.assign(this,Bp,e)}return Ht(t,[{key:"normalizeAttr",value:function(n){var r=n.config,a=n.type,i=this.color,o={},s=this[a];if(r===!0||Fe(r))i=Fe(r)?r:i,o=p({},s);else if(ue(r))rr(r,Wp)?o=p({},r):o={base:p({},r),start:p({},r),end:p({},r)};else return null;return Tt(o,{start:o.startEnd,end:o.startEnd},s),sn(o).forEach(function(l){var u=an(l,2),c=u[0],f=u[1],d=i;f===!0||Fe(f)?(d=Fe(f)?f:d,o[c]={color:d}):ue(f)&&(rr(f,Hp)?o[c]=p({},f):o[c]={}),Or(o,"".concat(c,".color"))||Ip(o,"".concat(c,".color"),d)}),o}},{key:"normalizeHighlight",value:function(n){var r=this,a=this.normalizeAttr({config:n,type:"highlight"});return sn(a).forEach(function(i){var o=an(i,2);o[0];var s=o[1],l=Tt(s,{isDark:r.isDark,color:r.color});s.style=p(p({},r.getHighlightBgStyle(l)),s.style),s.contentStyle=p(p({},r.getHighlightContentStyle(l)),s.contentStyle)}),a}},{key:"getHighlightBgStyle",value:function(n){var r=n.fillMode,a=n.color,i=n.isDark;switch(r){case"outline":case"none":return{backgroundColor:i?"var(--gray-900)":"var(--white)",border:"2px solid",borderColor:i?"var(--".concat(a,"-200)"):"var(--".concat(a,"-700)"),borderRadius:"var(--rounded-full)"};case"light":return{backgroundColor:i?"var(--".concat(a,"-800)"):"var(--".concat(a,"-200)"),opacity:i?.75:1,borderRadius:"var(--rounded-full)"};case"solid":return{backgroundColor:i?"var(--".concat(a,"-500)"):"var(--".concat(a,"-600)"),borderRadius:"var(--rounded-full)"};default:return{borderRadius:"var(--rounded-full)"}}}},{key:"getHighlightContentStyle",value:function(n){var r=n.fillMode,a=n.color,i=n.isDark;switch(r){case"outline":case"none":return{fontWeight:"var(--font-bold)",color:i?"var(--".concat(a,"-100)"):"var(--".concat(a,"-900)")};case"light":return{fontWeight:"var(--font-bold)",color:i?"var(--".concat(a,"-100)"):"var(--".concat(a,"-900)")};case"solid":return{fontWeight:"var(--font-bold)",color:"var(--white)"};default:return""}}},{key:"bgAccentHigh",value:function(n){var r=n.color,a=n.isDark;return{backgroundColor:a?"var(--".concat(r,"-500)"):"var(--".concat(r,"-600)")}}},{key:"contentAccent",value:function(n){var r=n.color,a=n.isDark;return r?{fontWeight:"var(--font-bold)",color:a?"var(--".concat(r,"-100)"):"var(--".concat(r,"-900)")}:null}},{key:"normalizeDot",value:function(n){return this.normalizeNonHighlight("dot",n,this.bgAccentHigh)}},{key:"normalizeBar",value:function(n){return this.normalizeNonHighlight("bar",n,this.bgAccentHigh)}},{key:"normalizeContent",value:function(n){return this.normalizeNonHighlight("content",n,this.contentAccent)}},{key:"normalizeNonHighlight",value:function(n,r,a){var i=this,o=this.normalizeAttr({type:n,config:r});return sn(o).forEach(function(s){var l=an(s,2);l[0];var u=l[1];Tt(u,{isDark:i.isDark,color:i.color}),u.style=p(p({},a(u)),u.style)}),o}}]),t}(),ln=6e4;function wa(t){return t.getTime()%ln}function gn(t){var e=new Date(t.getTime()),n=Math.ceil(e.getTimezoneOffset());e.setSeconds(0,0);var r=n>0,a=r?(ln+wa(e))%ln:wa(e);return n*ln+a}function Up(t,e){var n=qp(e);return n.formatToParts?Kp(n,t):Zp(n,t)}var Gp={year:0,month:1,day:2,hour:3,minute:4,second:5};function Kp(t,e){for(var n=t.formatToParts(e),r=[],a=0;a<n.length;a++){var i=Gp[n[a].type];i>=0&&(r[i]=parseInt(n[a].value,10))}return r}function Zp(t,e){var n=t.format(e).replace(/\u200E/g,""),r=/(\d+)\/(\d+)\/(\d+),? (\d+):(\d+):(\d+)/.exec(n);return[r[3],r[1],r[2],r[4],r[5],r[6]]}var zn={};function qp(t){if(!zn[t]){var e=new Intl.DateTimeFormat("en-US",{hour12:!1,timeZone:"America/New_York",year:"numeric",month:"2-digit",day:"2-digit",hour:"2-digit",minute:"2-digit",second:"2-digit"}).format(new Date("2014-06-25T04:00:00.123Z")),n=e==="06/25/2014, 00:00:00"||e==="\u200E06\u200E/\u200E25\u200E/\u200E2014\u200E \u200E00\u200E:\u200E00\u200E:\u200E00";zn[t]=n?new Intl.DateTimeFormat("en-US",{hour12:!1,timeZone:t,year:"numeric",month:"2-digit",day:"2-digit",hour:"2-digit",minute:"2-digit",second:"2-digit"}):new Intl.DateTimeFormat("en-US",{hourCycle:"h23",timeZone:t,year:"numeric",month:"2-digit",day:"2-digit",hour:"2-digit",minute:"2-digit",second:"2-digit"})}return zn[t]}var Da=36e5,Xp=6e4,Qt={timezone:/([Z+-].*)$/,timezoneZ:/^(Z)$/,timezoneHH:/^([+-])(\d{2})$/,timezoneHHMM:/^([+-])(\d{2}):?(\d{2})$/,timezoneIANA:/(UTC|(?:[a-zA-Z]+\/[a-zA-Z_]+(?:\/[a-zA-Z_]+)?))$/};function xa(t,e){var n,r;if(n=Qt.timezoneZ.exec(t),n)return 0;var a;if(n=Qt.timezoneHH.exec(t),n)return a=parseInt(n[2],10),ka()?(r=a*Da,n[1]==="+"?-r:r):NaN;if(n=Qt.timezoneHHMM.exec(t),n){a=parseInt(n[2],10);var i=parseInt(n[3],10);return ka(a,i)?(r=a*Da+i*Xp,n[1]==="+"?-r:r):NaN}if(n=Qt.timezoneIANA.exec(t),n){var o=Up(e,t),s=Date.UTC(o[0],o[1]-1,o[2],o[3],o[4],o[5]),l=e.getTime()-e.getTime()%1e3;return-(s-l)}return 0}function ka(t,e){return!(e!=null&&(e<0||e>59))}var Vn=36e5,_a=6e4,Jp=2,V={dateTimeDelimeter:/[T ]/,plainTime:/:/,timeZoneDelimeter:/[Z ]/i,YY:/^(\d{2})$/,YYY:[/^([+-]\d{2})$/,/^([+-]\d{3})$/,/^([+-]\d{4})$/],YYYY:/^(\d{4})/,YYYYY:[/^([+-]\d{4})/,/^([+-]\d{5})/,/^([+-]\d{6})/],MM:/^-(\d{2})$/,DDD:/^-?(\d{3})$/,MMDD:/^-?(\d{2})-?(\d{2})$/,Www:/^-?W(\d{2})$/,WwwD:/^-?W(\d{2})-?(\d{1})$/,HH:/^(\d{2}([.,]\d*)?)$/,HHMM:/^(\d{2}):?(\d{2}([.,]\d*)?)$/,HHMMSS:/^(\d{2}):?(\d{2}):?(\d{2}([.,]\d*)?)$/,timezone:/([Z+-].*| UTC|(?:[a-zA-Z]+\/[a-zA-Z_]+(?:\/[a-zA-Z_]+)?))$/};function Ma(t,e){if(arguments.length<1)throw new TypeError("1 argument required, but only "+arguments.length+" present");if(t===null)return new Date(NaN);var n=e||{},r=n.additionalDigits==null?Jp:we(n.additionalDigits);if(r!==2&&r!==1&&r!==0)throw new RangeError("additionalDigits must be 0, 1 or 2");if(t instanceof Date||typeof t=="object"&&Object.prototype.toString.call(t)==="[object Date]")return new Date(t.getTime());if(typeof t=="number"||Object.prototype.toString.call(t)==="[object Number]")return new Date(t);if(!(typeof t=="string"||Object.prototype.toString.call(t)==="[object String]"))return new Date(NaN);var a=Qp(t),i=em(a.date,r),o=i.year,s=i.restDateString,l=tm(s,o);if(isNaN(l))return new Date(NaN);if(l){var u=l.getTime(),c=0,f;if(a.time&&(c=nm(a.time),isNaN(c)))return new Date(NaN);if(a.timezone||n.timeZone){if(f=xa(a.timezone||n.timeZone,new Date(u+c)),isNaN(f))return new Date(NaN);if(f=xa(a.timezone||n.timeZone,new Date(u+c+f)),isNaN(f))return new Date(NaN)}else f=gn(new Date(u+c)),f=gn(new Date(u+c+f));return new Date(u+c+f)}else return new Date(NaN)}function Qp(t){var e={},n=t.split(V.dateTimeDelimeter),r;if(V.plainTime.test(n[0])?(e.date=null,r=n[0]):(e.date=n[0],r=n[1],e.timezone=n[2],V.timeZoneDelimeter.test(e.date)&&(e.date=t.split(V.timeZoneDelimeter)[0],r=t.substr(e.date.length,t.length))),r){var a=V.timezone.exec(r);a?(e.time=r.replace(a[1],""),e.timezone=a[1]):e.time=r}return e}function em(t,e){var n=V.YYY[e],r=V.YYYYY[e],a;if(a=V.YYYY.exec(t)||r.exec(t),a){var i=a[1];return{year:parseInt(i,10),restDateString:t.slice(i.length)}}if(a=V.YY.exec(t)||n.exec(t),a){var o=a[1];return{year:parseInt(o,10)*100,restDateString:t.slice(o.length)}}return{year:null}}function tm(t,e){if(e===null)return null;var n,r,a,i;if(t.length===0)return r=new Date(0),r.setUTCFullYear(e),r;if(n=V.MM.exec(t),n)return r=new Date(0),a=parseInt(n[1],10)-1,Ta(e,a)?(r.setUTCFullYear(e,a),r):new Date(NaN);if(n=V.DDD.exec(t),n){r=new Date(0);var o=parseInt(n[1],10);return im(e,o)?(r.setUTCFullYear(e,0,o),r):new Date(NaN)}if(n=V.MMDD.exec(t),n){r=new Date(0),a=parseInt(n[1],10)-1;var s=parseInt(n[2],10);return Ta(e,a,s)?(r.setUTCFullYear(e,a,s),r):new Date(NaN)}if(n=V.Www.exec(t),n)return i=parseInt(n[1],10)-1,Oa(e,i)?Pa(e,i):new Date(NaN);if(n=V.WwwD.exec(t),n){i=parseInt(n[1],10)-1;var l=parseInt(n[2],10)-1;return Oa(e,i,l)?Pa(e,i,l):new Date(NaN)}return null}function nm(t){var e,n,r;if(e=V.HH.exec(t),e)return n=parseFloat(e[1].replace(",",".")),Wn(n)?n%24*Vn:NaN;if(e=V.HHMM.exec(t),e)return n=parseInt(e[1],10),r=parseFloat(e[2].replace(",",".")),Wn(n,r)?n%24*Vn+r*_a:NaN;if(e=V.HHMMSS.exec(t),e){n=parseInt(e[1],10),r=parseInt(e[2],10);var a=parseFloat(e[3].replace(",","."));return Wn(n,r,a)?n%24*Vn+r*_a+a*1e3:NaN}return null}function Pa(t,e,n){e=e||0,n=n||0;var r=new Date(0);r.setUTCFullYear(t,0,4);var a=r.getUTCDay()||7,i=e*7+n+1-a;return r.setUTCDate(r.getUTCDate()+i),r}var rm=[31,28,31,30,31,30,31,31,30,31,30,31],am=[31,29,31,30,31,30,31,31,30,31,30,31];function zi(t){return t%400===0||t%4===0&&t%100!==0}function Ta(t,e,n){if(e<0||e>11)return!1;if(n!=null){if(n<1)return!1;var r=zi(t);if(r&&n>am[e]||!r&&n>rm[e])return!1}return!0}function im(t,e){if(e<1)return!1;var n=zi(t);return!(n&&e>366||!n&&e>365)}function Oa(t,e,n){return!(e<0||e>52||n!=null&&(n<0||n>6))}function Wn(t,e,n){return!(t!=null&&(t<0||t>=25)||e!=null&&(e<0||e>=60)||n!=null&&(n<0||n>=60))}function Ke(t,e){H(1,arguments);var n=e||{},r=n.locale,a=r&&r.options&&r.options.weekStartsOn,i=a==null?0:we(a),o=n.weekStartsOn==null?i:we(n.weekStartsOn);if(!(o>=0&&o<=6))throw new RangeError("weekStartsOn must be between 0 and 6 inclusively");var s=Ce(t),l=s.getDay(),u=(l<o?7:0)+l-o;return s.setDate(s.getDate()-u),s.setHours(0,0,0,0),s}function yn(t){return H(1,arguments),Ke(t,{weekStartsOn:1})}function om(t){H(1,arguments);var e=Ce(t),n=e.getFullYear(),r=new Date(0);r.setFullYear(n+1,0,4),r.setHours(0,0,0,0);var a=yn(r),i=new Date(0);i.setFullYear(n,0,4),i.setHours(0,0,0,0);var o=yn(i);return e.getTime()>=a.getTime()?n+1:e.getTime()>=o.getTime()?n:n-1}function sm(t){H(1,arguments);var e=om(t),n=new Date(0);n.setFullYear(e,0,4),n.setHours(0,0,0,0);var r=yn(n);return r}var lm=6048e5;function um(t){H(1,arguments);var e=Ce(t),n=yn(e).getTime()-sm(e).getTime();return Math.round(n/lm)+1}function cm(t,e){H(1,arguments);var n=Ce(t),r=n.getFullYear(),a=e||{},i=a.locale,o=i&&i.options&&i.options.firstWeekContainsDate,s=o==null?1:we(o),l=a.firstWeekContainsDate==null?s:we(a.firstWeekContainsDate);if(!(l>=1&&l<=7))throw new RangeError("firstWeekContainsDate must be between 1 and 7 inclusively");var u=new Date(0);u.setFullYear(r+1,0,l),u.setHours(0,0,0,0);var c=Ke(u,e),f=new Date(0);f.setFullYear(r,0,l),f.setHours(0,0,0,0);var d=Ke(f,e);return n.getTime()>=c.getTime()?r+1:n.getTime()>=d.getTime()?r:r-1}function fm(t,e){H(1,arguments);var n=e||{},r=n.locale,a=r&&r.options&&r.options.firstWeekContainsDate,i=a==null?1:we(a),o=n.firstWeekContainsDate==null?i:we(n.firstWeekContainsDate),s=cm(t,e),l=new Date(0);l.setFullYear(s,0,o),l.setHours(0,0,0,0);var u=Ke(l,e);return u}var dm=6048e5;function vm(t,e){H(1,arguments);var n=Ce(t),r=Ke(n,e).getTime()-fm(n,e).getTime();return Math.round(r/dm)+1}var hm=6048e5;function pm(t,e,n){H(2,arguments);var r=Ke(t,n),a=Ke(e,n),i=r.getTime()-gn(r),o=a.getTime()-gn(a);return Math.round((i-o)/hm)}function mm(t){H(1,arguments);var e=Ce(t),n=e.getMonth();return e.setFullYear(e.getFullYear(),n+1,0),e.setHours(0,0,0,0),e}function gm(t){H(1,arguments);var e=Ce(t);return e.setDate(1),e.setHours(0,0,0,0),e}function ym(t,e){return H(1,arguments),pm(mm(t),gm(t),e)+1}var bm=24*60*60*1e3,Se=function(){function t(e){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=n.order,a=r===void 0?0:r,i=n.locale,o=n.isFullDay;if(Wt(this,t),this.isDateInfo=!0,this.order=a,this.locale=i instanceof bn?i:new bn(i),this.firstDayOfWeek=this.locale.firstDayOfWeek,!ue(e)){var s=this.locale.normalizeDate(e);o?e={start:s,end:s}:e={startOn:s,endOn:s}}var l=null,u=null;if(e.start?l=this.locale.normalizeDate(e.start,p(p({},this.opts),{},{time:"00:00:00"})):e.startOn&&(l=this.locale.normalizeDate(e.startOn,this.opts)),e.end?u=this.locale.normalizeDate(e.end,p(p({},this.opts),{},{time:"23:59:59"})):e.endOn&&(u=this.locale.normalizeDate(e.endOn,this.opts)),l&&u&&l>u){var c=l;l=u,u=c}else l&&e.span>=1&&(u=me(l,e.span-1));this.start=l,this.startTime=l?l.getTime():NaN,this.end=u,this.endTime=u?u.getTime():NaN,this.isDate=this.startTime&&this.startTime===this.endTime,this.isRange=!this.isDate;var f=ga(e,{},t.patternProps);if(f.assigned&&(this.on={and:f.target}),e.on){var d=(re(e.on)?e.on:[e.on]).map(function(v){if(ye(v))return v;var h=ga(v,{},t.patternProps);return h.assigned?h.target:null}).filter(function(v){return v});d.length&&(this.on=p(p({},this.on),{},{or:d}))}this.isComplex=!!this.on}return Ht(t,[{key:"toDateInfo",value:function(n){return n.isDateInfo?n:new t(n,this.opts)}},{key:"startOfWeek",value:function(n){var r=n.getDay()+1,a=r>=this.firstDayOfWeek?this.firstDayOfWeek-r:-(7-(this.firstDayOfWeek-r));return me(n,a)}},{key:"diffInDays",value:function(n,r){return Math.round((r-n)/bm)}},{key:"diffInWeeks",value:function(n,r){return this.diffInDays(this.startOfWeek(n),this.startOfWeek(r))}},{key:"diffInYears",value:function(n,r){return r.getUTCFullYear()-n.getUTCFullYear()}},{key:"diffInMonths",value:function(n,r){return this.diffInYears(n,r)*12+(r.getMonth()-n.getMonth())}},{key:"iterateDatesInRange",value:function(n,r){var a=n.start,i=n.end;if(!a||!i||!ye(r))return null;a=this.locale.normalizeDate(a,p(p({},this.opts),{},{time:"00:00:00"}));for(var o={i:0,date:a,day:this.locale.getDateParts(a),finished:!1},s=null;!o.finished&&o.date<=i;o.i++)s=r(o),o.date=me(o.date,1),o.day=this.locale.getDateParts(o.date);return s}},{key:"shallowIntersectingRange",value:function(n){return this.rangeShallowIntersectingRange(this,this.toDateInfo(n))}},{key:"rangeShallowIntersectingRange",value:function(n,r){if(!this.dateShallowIntersectsDate(n,r))return null;var a=n.toRange(),i=r.toRange(),o=null,s=null;return a.start?i.start?o=a.start>i.start?a.start:i.start:o=a.start:i.start&&(o=i.start),a.end?i.end?s=a.end<i.end?a.end:i.end:s=a.end:i.end&&(s=i.end),{start:o,end:s}}},{key:"intersectsDate",value:function(n){var r=this,a=this.toDateInfo(n);if(!this.shallowIntersectsDate(a))return null;if(!this.on)return this;var i=this.rangeShallowIntersectingRange(this,a),o=!1;return this.iterateDatesInRange(i,function(s){r.matchesDay(s.day)&&(o=o||a.matchesDay(s.day),s.finished=o)}),o}},{key:"shallowIntersectsDate",value:function(n){return this.dateShallowIntersectsDate(this,this.toDateInfo(n))}},{key:"dateShallowIntersectsDate",value:function(n,r){return n.isDate?r.isDate?n.startTime===r.startTime:this.dateShallowIncludesDate(r,n):r.isDate?this.dateShallowIncludesDate(n,r):!(n.start&&r.end&&n.start>r.end||n.end&&r.start&&n.end<r.start)}},{key:"includesDate",value:function(n){var r=this,a=this.toDateInfo(n);if(!this.shallowIncludesDate(a))return!1;if(!this.on)return!0;var i=this.rangeShallowIntersectingRange(this,a),o=!0;return this.iterateDatesInRange(i,function(s){r.matchesDay(s.day)&&(o=o&&a.matchesDay(s.day),s.finished=!o)}),o}},{key:"shallowIncludesDate",value:function(n){return this.dateShallowIncludesDate(this,n.isDate?n:new t(n,this.opts))}},{key:"dateShallowIncludesDate",value:function(n,r){return n.isDate?r.isDate?n.startTime===r.startTime:!r.startTime||!r.endTime?!1:n.startTime===r.startTime&&n.startTime===r.endTime:r.isDate?!(n.start&&r.start<n.start||n.end&&r.start>n.end):!(n.start&&(!r.start||r.start<n.start)||n.end&&(!r.end||r.end>n.end))}},{key:"intersectsDay",value:function(n){return this.shallowIntersectsDate(n.range)&&this.matchesDay(n)?this:null}},{key:"matchesDay",value:function(n){var r=this;return this.on?!(this.on.and&&!t.testConfig(this.on.and,n,this)||this.on.or&&!this.on.or.some(function(a){return t.testConfig(a,n,r)})):!0}},{key:"toRange",value:function(){return new t({start:this.start,end:this.end},this.opts)}},{key:"compare",value:function(n){if(this.order!==n.order)return this.order-n.order;if(this.isDate!==n.isDate)return this.isDate?1:-1;if(this.isDate)return 0;var r=this.start-n.start;return r!==0?r:this.end-n.end}},{key:"opts",get:function(){return{order:this.order,locale:this.locale}}}],[{key:"testConfig",value:function(n,r,a){return ye(n)?n(r):ue(n)?Object.keys(n).every(function(i){return t.patterns[i].test(r,n[i],a)}):null}},{key:"patterns",get:function(){return{dailyInterval:{test:function(r,a,i){return i.diffInDays(i.start||new Date,r.date)%a===0}},weeklyInterval:{test:function(r,a,i){return i.diffInWeeks(i.start||new Date,r.date)%a===0}},monthlyInterval:{test:function(r,a,i){return i.diffInMonths(i.start||new Date,r.date)%a===0}},yearlyInterval:{test:function(){return function(r,a,i){return i.diffInYears(i.start||new Date,r.date)%a===0}}},days:{validate:function(r){return re(r)?r:[parseInt(r,10)]},test:function(r,a){return a.includes(r.day)||a.includes(-r.dayFromEnd)}},weekdays:{validate:function(r){return re(r)?r:[parseInt(r,10)]},test:function(r,a){return a.includes(r.weekday)}},ordinalWeekdays:{validate:function(r){return Object.keys(r).reduce(function(a,i){var o=r[i];return o&&(a[i]=re(o)?o:[parseInt(o,10)]),a},{})},test:function(r,a){return Object.keys(a).map(function(i){return parseInt(i,10)}).find(function(i){return a[i].includes(r.weekday)&&(i===r.weekdayOrdinal||i===-r.weekdayOrdinalFromEnd)})}},weekends:{validate:function(r){return r},test:function(r){return r.weekday===1||r.weekday===7}},workweek:{validate:function(r){return r},test:function(r){return r.weekday>=2&&r.weekday<=6}},weeks:{validate:function(r){return re(r)?r:[parseInt(r,10)]},test:function(r,a){return a.includes(r.week)||a.includes(-r.weekFromEnd)}},months:{validate:function(r){return re(r)?r:[parseInt(r,10)]},test:function(r,a){return a.includes(r.month)}},years:{validate:function(r){return re(r)?r:[parseInt(r,10)]},test:function(r,a){return a.includes(r.year)}}}}},{key:"patternProps",get:function(){return Object.keys(t.patterns).map(function(n){return{name:n,validate:t.patterns[n].validate}})}}]),t}();const ie={ar:{dow:7,L:"D/\u200FM/\u200FYYYY"},bg:{dow:2,L:"D.MM.YYYY"},ca:{dow:2,L:"DD/MM/YYYY"},"zh-CN":{dow:2,L:"YYYY/MM/DD"},"zh-TW":{dow:1,L:"YYYY/MM/DD"},hr:{dow:2,L:"DD.MM.YYYY"},cs:{dow:2,L:"DD.MM.YYYY"},da:{dow:2,L:"DD.MM.YYYY"},nl:{dow:2,L:"DD-MM-YYYY"},"en-US":{dow:1,L:"MM/DD/YYYY"},"en-AU":{dow:2,L:"DD/MM/YYYY"},"en-CA":{dow:1,L:"YYYY-MM-DD"},"en-GB":{dow:2,L:"DD/MM/YYYY"},"en-IE":{dow:2,L:"DD-MM-YYYY"},"en-NZ":{dow:2,L:"DD/MM/YYYY"},"en-ZA":{dow:1,L:"YYYY/MM/DD"},eo:{dow:2,L:"YYYY-MM-DD"},et:{dow:2,L:"DD.MM.YYYY"},fi:{dow:2,L:"DD.MM.YYYY"},fr:{dow:2,L:"DD/MM/YYYY"},"fr-CA":{dow:1,L:"YYYY-MM-DD"},"fr-CH":{dow:2,L:"DD.MM.YYYY"},de:{dow:2,L:"DD.MM.YYYY"},he:{dow:1,L:"DD.MM.YYYY"},id:{dow:2,L:"DD/MM/YYYY"},it:{dow:2,L:"DD/MM/YYYY"},ja:{dow:1,L:"YYYY\u5E74M\u6708D\u65E5"},ko:{dow:1,L:"YYYY.MM.DD"},lv:{dow:2,L:"DD.MM.YYYY"},lt:{dow:2,L:"DD.MM.YYYY"},mk:{dow:2,L:"D.MM.YYYY"},nb:{dow:2,L:"D. MMMM YYYY"},nn:{dow:2,L:"D. MMMM YYYY"},pl:{dow:2,L:"DD.MM.YYYY"},pt:{dow:2,L:"DD/MM/YYYY"},ro:{dow:2,L:"DD.MM.YYYY"},ru:{dow:2,L:"DD.MM.YYYY"},sk:{dow:2,L:"DD.MM.YYYY"},"es-ES":{dow:2,L:"DD/MM/YYYY"},"es-MX":{dow:2,L:"DD/MM/YYYY"},sv:{dow:2,L:"YYYY-MM-DD"},th:{dow:1,L:"DD/MM/YYYY"},tr:{dow:2,L:"DD.MM.YYYY"},uk:{dow:2,L:"DD.MM.YYYY"},vi:{dow:2,L:"DD/MM/YYYY"}};ie.en=ie["en-US"];ie.es=ie["es-ES"];ie.no=ie.nb;ie.zh=ie["zh-CN"];sn(ie).forEach(([t,{dow:e,L:n}])=>{ie[t]={id:t,firstDayOfWeek:e,masks:{L:n}}});var He={DATE_TIME:1,DATE:2,TIME:3},wm={1:["year","month","day","hours","minutes","seconds","milliseconds"],2:["year","month","day"],3:["hours","minutes","seconds","milliseconds"]},Sa=/d{1,2}|W{1,4}|M{1,4}|YY(?:YY)?|S{1,3}|Do|Z{1,4}|([HhMsDm])\1?|[aA]|"[^"]*"|'[^']*'/g,Ye=/\d\d?/,Dm=/\d{3}/,xm=/\d{4}/,_t=/[0-9]*['a-z\u00A0-\u05FF\u0700-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+|[\u0600-\u06FF/]+(\s*?[\u0600-\u06FF]+){1,2}/i,km=/\[([^]*?)\]/gm,Ia=function(){},$a=function(e){return function(n,r,a){var i=a[e].indexOf(r.charAt(0).toUpperCase()+r.substr(1).toLowerCase());~i&&(n.month=i)}},_m=["L","iso"],B=7,Mm=[31,28,31,30,31,30,31,31,30,31,30,31],Ea={D:function(e){return e.day},DD:function(e){return O(e.day)},Do:function(e,n){return n.DoFn(e.day)},d:function(e){return e.weekday-1},dd:function(e){return O(e.weekday-1)},W:function(e,n){return n.dayNamesNarrow[e.weekday-1]},WW:function(e,n){return n.dayNamesShorter[e.weekday-1]},WWW:function(e,n){return n.dayNamesShort[e.weekday-1]},WWWW:function(e,n){return n.dayNames[e.weekday-1]},M:function(e){return e.month},MM:function(e){return O(e.month)},MMM:function(e,n){return n.monthNamesShort[e.month-1]},MMMM:function(e,n){return n.monthNames[e.month-1]},YY:function(e){return String(e.year).substr(2)},YYYY:function(e){return O(e.year,4)},h:function(e){return e.hours%12||12},hh:function(e){return O(e.hours%12||12)},H:function(e){return e.hours},HH:function(e){return O(e.hours)},m:function(e){return e.minutes},mm:function(e){return O(e.minutes)},s:function(e){return e.seconds},ss:function(e){return O(e.seconds)},S:function(e){return Math.round(e.milliseconds/100)},SS:function(e){return O(Math.round(e.milliseconds/10),2)},SSS:function(e){return O(e.milliseconds,3)},a:function(e,n){return e.hours<12?n.amPm[0]:n.amPm[1]},A:function(e,n){return e.hours<12?n.amPm[0].toUpperCase():n.amPm[1].toUpperCase()},Z:function(){return"Z"},ZZ:function(e){var n=e.timezoneOffset;return"".concat(n>0?"-":"+").concat(O(Math.floor(Math.abs(n)/60),2))},ZZZ:function(e){var n=e.timezoneOffset;return"".concat(n>0?"-":"+").concat(O(Math.floor(Math.abs(n)/60)*100+Math.abs(n)%60,4))},ZZZZ:function(e){var n=e.timezoneOffset;return"".concat(n>0?"-":"+").concat(O(Math.floor(Math.abs(n)/60),2),":").concat(O(Math.abs(n)%60,2))}},E={D:[Ye,function(t,e){t.day=e}],Do:[new RegExp(Ye.source+_t.source),function(t,e){t.day=parseInt(e,10)}],d:[Ye,Ia],W:[_t,Ia],M:[Ye,function(t,e){t.month=e-1}],MMM:[_t,$a("monthNamesShort")],MMMM:[_t,$a("monthNames")],YY:[Ye,function(t,e){var n=new Date,r=+n.getFullYear().toString().substr(0,2);t.year="".concat(e>68?r-1:r).concat(e)}],YYYY:[xm,function(t,e){t.year=e}],S:[/\d/,function(t,e){t.millisecond=e*100}],SS:[/\d{2}/,function(t,e){t.millisecond=e*10}],SSS:[Dm,function(t,e){t.millisecond=e}],h:[Ye,function(t,e){t.hour=e}],m:[Ye,function(t,e){t.minute=e}],s:[Ye,function(t,e){t.second=e}],a:[_t,function(t,e,n){var r=e.toLowerCase();r===n.amPm[0]?t.isPm=!1:r===n.amPm[1]&&(t.isPm=!0)}],Z:[/[^\s]*?[+-]\d\d:?\d\d|[^\s]*?Z?/,function(t,e){e==="Z"&&(e="+00:00");var n="".concat(e).match(/([+-]|\d\d)/gi);if(n){var r=+(n[1]*60)+parseInt(n[2],10);t.timezoneOffset=n[0]==="+"?r:-r}}]};E.DD=E.D;E.dd=E.d;E.WWWW=E.WWW=E.WW=E.W;E.MM=E.M;E.mm=E.m;E.hh=E.H=E.HH=E.h;E.ss=E.s;E.A=E.a;E.ZZZZ=E.ZZZ=E.ZZ=E.Z;function Pm(t,e){var n=new Intl.DateTimeFormat().resolvedOptions().locale,r;Fe(t)?r=t:Or(t,"id")&&(r=t.id),r=(r||n).toLowerCase();var a=Object.keys(e),i=function(l){return a.find(function(u){return u.toLowerCase()===l})};r=i(r)||i(r.substring(0,2))||n;var o=p(p(p({},e["en-IE"]),e[r]),{},{id:r});return t=ue(t)?Tr(t,o):o,t}var bn=function(){function t(e){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=n.locales,a=r===void 0?ie:r,i=n.timezone;Wt(this,t);var o=Pm(e,a),s=o.id,l=o.firstDayOfWeek,u=o.masks;this.id=s,this.daysInWeek=B,this.firstDayOfWeek=Op(l,1,B),this.masks=u,this.timezone=i||void 0,this.dayNames=this.getDayNames("long"),this.dayNamesShort=this.getDayNames("short"),this.dayNamesShorter=this.dayNamesShort.map(function(c){return c.substring(0,2)}),this.dayNamesNarrow=this.getDayNames("narrow"),this.monthNames=this.getMonthNames("long"),this.monthNamesShort=this.getMonthNames("short"),this.amPm=["am","pm"],this.monthData={},this.getMonthComps=this.getMonthComps.bind(this),this.parse=this.parse.bind(this),this.format=this.format.bind(this),this.toPage=this.toPage.bind(this)}return Ht(t,[{key:"format",value:function(n,r){var a=this;if(n=this.normalizeDate(n),!n)return"";r=this.normalizeMasks(r)[0];var i=[];r=r.replace(km,function(l,u){return i.push(u),"??"});var o=/Z$/.test(r)?"utc":this.timezone,s=this.getDateParts(n,o);return r=r.replace(Sa,function(l){return l in Ea?Ea[l](s,a):l.slice(1,l.length-1)}),r.replace(/\?\?/g,function(){return i.shift()})}},{key:"parse",value:function(n,r){var a=this,i=this.normalizeMasks(r);return i.map(function(o){if(typeof o!="string")throw new Error("Invalid mask in fecha.parse");var s=n;if(s.length>1e3)return!1;var l=!0,u={};if(o.replace(Sa,function(d){if(E[d]){var v=E[d],h=s.search(v[0]);~h?s.replace(v[0],function(m){return v[1](u,m,a),s=s.substr(h+m.length),m}):l=!1}return E[d]?"":d.slice(1,d.length-1)}),!l)return!1;var c=new Date;u.isPm===!0&&u.hour!=null&&+u.hour!=12?u.hour=+u.hour+12:u.isPm===!1&&+u.hour==12&&(u.hour=0);var f;return u.timezoneOffset!=null?(u.minute=+(u.minute||0)-+u.timezoneOffset,f=new Date(Date.UTC(u.year||c.getFullYear(),u.month||0,u.day||1,u.hour||0,u.minute||0,u.second||0,u.millisecond||0))):f=a.getDateFromParts({year:u.year||c.getFullYear(),month:(u.month||0)+1,day:u.day||1,hours:u.hour||0,minutes:u.minute||0,seconds:u.second||0,milliseconds:u.millisecond||0}),f}).find(function(o){return o})||new Date(n)}},{key:"normalizeMasks",value:function(n){var r=this;return(ge(n)&&n||[Fe(n)&&n||"YYYY-MM-DD"]).map(function(a){return _m.reduce(function(i,o){return i.replace(o,r.masks[o]||"")},a)})}},{key:"normalizeDate",value:function(n){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},a=null,i=r.type,o=r.fillDate,s=r.mask,l=r.patch,u=r.time,c=i==="auto"||!i;if(It(n)?(i="number",a=new Date(+n)):Fe(n)?(i="string",a=n?this.parse(n,s||"iso"):null):ue(n)?(i="object",a=this.getDateFromParts(n)):(i="date",a=Ne(n)?new Date(n.getTime()):null),a&&l){o=o==null?new Date:this.normalizeDate(o);var f=p(p({},this.getDateParts(o)),lv(this.getDateParts(a),wm[l]));a=this.getDateFromParts(f)}return c&&(r.type=i),a&&!isNaN(a.getTime())?(u&&(a=this.adjustTimeForDate(a,{timeAdjust:u})),a):null}},{key:"denormalizeDate",value:function(n){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},a=r.type,i=r.mask;switch(a){case"number":return n?n.getTime():NaN;case"string":return n?this.format(n,i||"iso"):"";default:return n?new Date(n):null}}},{key:"adjustTimeForDate",value:function(n,r){var a=r.timeAdjust;if(a){var i=this.getDateParts(n);if(a==="now"){var o=this.getDateParts(new Date);i.hours=o.hours,i.minutes=o.minutes,i.seconds=o.seconds,i.milliseconds=o.milliseconds}else{var s=new Date("2000-01-01T".concat(a,"Z"));i.hours=s.getUTCHours(),i.minutes=s.getUTCMinutes(),i.seconds=s.getUTCSeconds(),i.milliseconds=s.getUTCMilliseconds()}n=this.getDateFromParts(i)}return n}},{key:"normalizeDates",value:function(n,r){return r=r||{},r.locale=this,(re(n)?n:[n]).map(function(a){return a&&(a instanceof Se?a:new Se(a,r))}).filter(function(a){return a})}},{key:"getDateParts",value:function(n){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:this.timezone;if(!n)return null;var a=n;if(r){var i=new Date(n.toLocaleString("en-US",{timeZone:r}));i.setMilliseconds(n.getMilliseconds());var o=i.getTime()-n.getTime();a=new Date(n.getTime()+o)}var s=a.getMilliseconds(),l=a.getSeconds(),u=a.getMinutes(),c=a.getHours(),f=a.getMonth()+1,d=a.getFullYear(),v=this.getMonthComps(f,d),h=a.getDate(),m=v.days-h+1,g=a.getDay()+1,y=Math.floor((h-1)/7+1),b=Math.floor((v.days-h)/7+1),P=Math.ceil((h+Math.abs(v.firstWeekday-v.firstDayOfWeek))/7),w=v.weeks-P+1,T={milliseconds:s,seconds:l,minutes:u,hours:c,day:h,dayFromEnd:m,weekday:g,weekdayOrdinal:y,weekdayOrdinalFromEnd:b,week:P,weekFromEnd:w,month:f,year:d,date:n,isValid:!0};return T.timezoneOffset=this.getTimezoneOffset(T),T}},{key:"getDateFromParts",value:function(n){if(!n)return null;var r=new Date,a=n.year,i=a===void 0?r.getFullYear():a,o=n.month,s=o===void 0?r.getMonth()+1:o,l=n.day,u=l===void 0?r.getDate():l,c=n.hours,f=c===void 0?0:c,d=n.minutes,v=d===void 0?0:d,h=n.seconds,m=h===void 0?0:h,g=n.milliseconds,y=g===void 0?0:g;if(this.timezone){var b="".concat(O(i,4),"-").concat(O(s,2),"-").concat(O(u,2),"T").concat(O(f,2),":").concat(O(v,2),":").concat(O(m,2),".").concat(O(y,3));return Ma(b,{timeZone:this.timezone})}return new Date(i,s-1,u,f,v,m,y)}},{key:"getTimezoneOffset",value:function(n){var r=n.year,a=n.month,i=n.day,o=n.hours,s=o===void 0?0:o,l=n.minutes,u=l===void 0?0:l,c=n.seconds,f=c===void 0?0:c,d=n.milliseconds,v=d===void 0?0:d,h,m=new Date(Date.UTC(r,a-1,i,s,u,f,v));if(this.timezone){var g="".concat(O(r,4),"-").concat(O(a,2),"-").concat(O(i,2),"T").concat(O(s,2),":").concat(O(u,2),":").concat(O(f,2),".").concat(O(v,3));h=Ma(g,{timeZone:this.timezone})}else h=new Date(r,a-1,i,s,u,f,v);return(h-m)/6e4}},{key:"toPage",value:function(n,r){return It(n)?Oe(r,n):Fe(n)?this.getDateParts(this.normalizeDate(n)):Ne(n)?this.getDateParts(n):ue(n)?n:null}},{key:"getMonthDates",value:function(){for(var n=arguments.length>0&&arguments[0]!==void 0?arguments[0]:2e3,r=[],a=0;a<12;a++)r.push(new Date(n,a,15));return r}},{key:"getMonthNames",value:function(n){var r=new Intl.DateTimeFormat(this.id,{month:n,timezome:"UTC"});return this.getMonthDates().map(function(a){return r.format(a)})}},{key:"getWeekdayDates",value:function(){for(var n=arguments.length>0&&arguments[0]!==void 0?arguments[0]:this.firstDayOfWeek,r=[],a=2020,i=1,o=5+n-1,s=0;s<B;s++)r.push(this.getDateFromParts({year:a,month:i,day:o+s,hours:12}));return r}},{key:"getDayNames",value:function(n){var r=new Intl.DateTimeFormat(this.id,{weekday:n,timeZone:this.timezone});return this.getWeekdayDates(1).map(function(a){return r.format(a)})}},{key:"getMonthComps",value:function(n,r){var a="".concat(n,"-").concat(r),i=this.monthData[a];if(!i){for(var o=r%4===0&&r%100!==0||r%400===0,s=new Date(r,n-1,1),l=s.getDay()+1,u=n===2&&o?29:Mm[n-1],c=this.firstDayOfWeek-1,f=ym(s,{weekStartsOn:c}),d=[],v=[],h=0;h<f;h++){var m=me(s,h*7);d.push(vm(m,{weekStartsOn:c})),v.push(um(m))}i={firstDayOfWeek:this.firstDayOfWeek,inLeapYear:o,firstWeekday:l,days:u,weeks:f,month:n,year:r,weeknumbers:d,isoWeeknumbers:v},this.monthData[a]=i}return i}},{key:"getThisMonthComps",value:function(){var n=this.getDateParts(new Date),r=n.month,a=n.year;return this.getMonthComps(r,a)}},{key:"getPrevMonthComps",value:function(n,r){return n===1?this.getMonthComps(12,r-1):this.getMonthComps(n-1,r)}},{key:"getNextMonthComps",value:function(n,r){return n===12?this.getMonthComps(1,r+1):this.getMonthComps(n+1,r)}},{key:"getDayId",value:function(n){return this.format(n,"YYYY-MM-DD")}},{key:"getCalendarDays",value:function(n){for(var r=this,a=n.weeks,i=n.monthComps,o=n.prevMonthComps,s=n.nextMonthComps,l=[],u=i.firstDayOfWeek,c=i.firstWeekday,f=i.isoWeeknumbers,d=i.weeknumbers,v=c+(c<u?B:0)-u,h=!0,m=!1,g=!1,y=new Intl.DateTimeFormat(this.id,{weekday:"long",year:"numeric",month:"long",day:"numeric"}),b=o.days-v+1,P=o.days-b+1,w=Math.floor((b-1)/B+1),T=1,k=o.weeks,I=1,S=o.month,$=o.year,j=new Date,K=j.getDate(),le=j.getMonth()+1,W=j.getFullYear(),_e=function(Yn,An,nt){return function(Kt,Zt,qt,lo){return r.normalizeDate({year:Yn,month:An,day:nt,hours:Kt,minutes:Zt,seconds:qt,milliseconds:lo})}},ee=1;ee<=a;ee++){for(var X=1,J=u;X<=B;X++,J+=J===B?1-B:1){h&&J===c&&(b=1,P=i.days,w=Math.floor((b-1)/B+1),T=Math.floor((i.days-b)/B+1),k=1,I=i.weeks,S=i.month,$=i.year,h=!1,m=!0);var Ve=_e($,S,b),Me={start:Ve(0,0,0),end:Ve(23,59,59,999)},Xe=Me.start,Je="".concat(O($,4),"-").concat(O(S,2),"-").concat(O(b,2)),Pe=X,Qe=B-X,Te=d[ee-1],te=f[ee-1],We=b===K&&S===le&&$===W,et=m&&b===1,pe=m&&b===i.days,tt=ee===1,wt=ee===a,Dt=X===1,xt=X===B;l.push({id:Je,label:b.toString(),ariaLabel:y.format(new Date($,S-1,b)),day:b,dayFromEnd:P,weekday:J,weekdayPosition:Pe,weekdayPositionFromEnd:Qe,weekdayOrdinal:w,weekdayOrdinalFromEnd:T,week:k,weekFromEnd:I,weeknumber:Te,isoWeeknumber:te,month:S,year:$,dateFromTime:Ve,date:Xe,range:Me,isToday:We,isFirstDay:et,isLastDay:pe,inMonth:m,inPrevMonth:h,inNextMonth:g,onTop:tt,onBottom:wt,onLeft:Dt,onRight:xt,classes:["id-".concat(Je),"day-".concat(b),"day-from-end-".concat(P),"weekday-".concat(J),"weekday-position-".concat(Pe),"weekday-ordinal-".concat(w),"weekday-ordinal-from-end-".concat(T),"week-".concat(k),"week-from-end-".concat(I),{"is-today":We,"is-first-day":et,"is-last-day":pe,"in-month":m,"in-prev-month":h,"in-next-month":g,"on-top":tt,"on-bottom":wt,"on-left":Dt,"on-right":xt}]}),m&&pe?(m=!1,g=!0,b=1,P=s.days,w=1,T=Math.floor((s.days-b)/B+1),k=1,I=s.weeks,S=s.month,$=s.year):(b++,P--,w=Math.floor((b-1)/B+1),T=Math.floor((i.days-b)/B+1))}k++,I--}return l}}]),t}(),Vi=function(){function t(e,n,r){var a=e.key,i=e.hashcode,o=e.highlight,s=e.content,l=e.dot,u=e.bar,c=e.popover,f=e.dates,d=e.excludeDates,v=e.excludeMode,h=e.customData,m=e.order,g=e.pinPage;Wt(this,t),this.key=yp(a)?mn():a,this.hashcode=i,this.customData=h,this.order=m||0,this.dateOpts={order:m,locale:r},this.pinPage=g,o&&(this.highlight=n.normalizeHighlight(o)),s&&(this.content=n.normalizeContent(s)),l&&(this.dot=n.normalizeDot(l)),u&&(this.bar=n.normalizeBar(u)),c&&(this.popover=c),this.dates=r.normalizeDates(f,this.dateOpts),this.hasDates=!!ge(this.dates),this.excludeDates=r.normalizeDates(d,this.dateOpts),this.hasExcludeDates=!!ge(this.excludeDates),this.excludeMode=v||"intersects",this.hasExcludeDates&&!this.hasDates&&(this.dates.push(new Se({},this.dateOpts)),this.hasDates=!0),this.isComplex=up(this.dates,function(y){return y.isComplex})}return Ht(t,[{key:"intersectsDate",value:function(n){return n=n instanceof Se?n:new Se(n,this.dateOpts),!this.excludesDate(n)&&(this.dates.find(function(r){return r.intersectsDate(n)})||!1)}},{key:"includesDate",value:function(n){return n=n instanceof Se?n:new Se(n,this.dateOpts),!this.excludesDate(n)&&(this.dates.find(function(r){return r.includesDate(n)})||!1)}},{key:"excludesDate",value:function(n){var r=this;return n=n instanceof Se?n:new Se(n,this.dateOpts),this.hasExcludeDates&&this.excludeDates.find(function(a){return r.excludeMode==="intersects"&&a.intersectsDate(n)||r.excludeMode==="includes"&&a.includesDate(n)})}},{key:"intersectsDay",value:function(n){return!this.excludesDay(n)&&(this.dates.find(function(r){return r.intersectsDay(n)})||!1)}},{key:"excludesDay",value:function(n){return this.hasExcludeDates&&this.excludeDates.find(function(r){return r.intersectsDay(n)})}}]),t}(),Tm=300,Om=60,Sm=80,Im={maxSwipeTime:Tm,minHorizontalSwipeDistance:Om,maxVerticalSwipeDistance:Sm},$m="MMMM YYYY",Em="W",Cm="MMM",Ym=["L","YYYY-MM-DD","YYYY/MM/DD"],Am=["L h:mm A","YYYY-MM-DD h:mm A","YYYY/MM/DD h:mm A"],Fm=["L HH:mm","YYYY-MM-DD HH:mm","YYYY/MM/DD HH:mm"],Nm=["h:mm A"],jm=["HH:mm"],Lm="WWW, MMM D, YYYY",Rm=["L","YYYY-MM-DD","YYYY/MM/DD"],zm="iso",Vm="YYYY-MM-DDTHH:mm:ssXXX",Wm={title:$m,weekdays:Em,navMonths:Cm,input:Ym,inputDateTime:Am,inputDateTime24hr:Fm,inputTime:Nm,inputTime24hr:jm,dayPopover:Lm,data:Rm,model:zm,iso:Vm},Hm="640px",Bm="768px",Um="1024px",Gm="1280px",Km={sm:Hm,md:Bm,lg:Um,xl:Gm};const Zm={componentPrefix:"v",color:"blue",isDark:!1,navVisibility:"click",titlePosition:"center",transition:"slide-h",touch:Im,masks:Wm,screens:Km,locales:ie,datePicker:{updateOnInput:!0,inputDebounce:1e3,popover:{visibility:"hover-focus",placement:"bottom-start",keepVisibleOnInput:!1,isInteractive:!0}}},ar=cr(Zm),qm=Et(()=>Ep(ar.locales,t=>(t.masks=Tr(t.masks,ar.masks),t))),je=t=>window&&Or(window.__vcalendar__,t)?At(window.__vcalendar__,t):At(ar,t);var Xm={props:{color:{type:String,default:je("color")},isDark:{type:Boolean,default:je("isDark")},firstDayOfWeek:Number,masks:Object,locale:[String,Object],timezone:String,minDate:null,maxDate:null,minDateExact:null,maxDateExact:null,disabledDates:null,availableDates:null,theme:null},computed:{$theme:function(){return this.theme instanceof ba?this.theme:new ba({color:this.color,isDark:this.isDark})},$locale:function(){if(this.locale instanceof bn)return this.locale;var e=ue(this.locale)?this.locale:{id:this.locale,firstDayOfWeek:this.firstDayOfWeek,masks:this.masks};return new bn(e,{locales:qm.value,timezone:this.timezone})},disabledDates_:function(){var e=this.normalizeDates(this.disabledDates),n=this.minDate,r=this.minDateExact,a=this.maxDate,i=this.maxDateExact;if(r||n){var o=r?this.normalizeDate(r):this.normalizeDate(n,{time:"00:00:00"});e.push({start:null,end:new Date(o.getTime()-1e3)})}if(i||a){var s=i?this.normalizeDate(i):this.normalizeDate(a,{time:"23:59:59"});e.push({start:new Date(s.getTime()+1e3),end:null})}return e},availableDates_:function(){return this.normalizeDates(this.availableDates)},disabledAttribute:function(){return new Vi({key:"disabled",dates:this.disabledDates_,excludeDates:this.availableDates_,excludeMode:"includes",order:100},this.$theme,this.$locale)}},methods:{formatDate:function(e,n){return this.$locale?this.$locale.format(e,n):""},parseDate:function(e,n){if(!this.$locale)return null;var r=this.$locale.parse(e,n);return Ne(r)?r:null},normalizeDate:function(e,n){return this.$locale?this.$locale.normalizeDate(e,n):e},normalizeDates:function(e){return this.$locale.normalizeDates(e,{isFullDay:!0})},pageForDate:function(e){return this.$locale.getDateParts(this.normalizeDate(e))},pageForThisMonth:function(){return this.pageForDate(new Date)}}},Jm={methods:{safeSlot:function(e,n){var r=arguments.length>2&&arguments[2]!==void 0?arguments[2]:null;return ye(this.$slots[e])?this.$slots[e](n):r}}},$n=Vp,Wi=Xm,Sr=Jm;function ke(t,e){e===void 0&&(e={});var n=e.insertAt;if(!(!t||typeof document=="undefined")){var r=document.head||document.getElementsByTagName("head")[0],a=document.createElement("style");a.type="text/css",n==="top"&&r.firstChild?r.insertBefore(a,r.firstChild):r.appendChild(a),a.styleSheet?a.styleSheet.cssText=t:a.appendChild(document.createTextNode(t))}}function ir(t){document&&document.dispatchEvent(new CustomEvent("show-popover",{detail:t}))}function or(t){document&&document.dispatchEvent(new CustomEvent("hide-popover",{detail:t}))}function Hi(t){document&&document.dispatchEvent(new CustomEvent("toggle-popover",{detail:t}))}function Qm(t){document&&document.dispatchEvent(new CustomEvent("update-popover",{detail:t}))}function wn(t){var e,n=t.visibility,r=n==="click",a=n==="hover",i=n==="hover-focus",o=n==="focus";t.autoHide=!r;var s=!1,l=!1,u=t.isRenderFn,c={click:u?"onClick":"click",mousemove:u?"onMousemove":"mousemove",mouseleave:u?"onMouseleave":"mouseleave",focusin:u?"onFocusin":"focusin",focusout:u?"onFocusout":"focusout"};return e={},rt(e,c.click,function(f){r&&(t.ref=f.target,Hi(t),f.stopPropagation())}),rt(e,c.mousemove,function(f){t.ref=f.currentTarget,s||(s=!0,(a||i)&&ir(t))}),rt(e,c.mouseleave,function(f){t.ref=f.target,s&&(s=!1,(a||i&&!l)&&or(t))}),rt(e,c.focusin,function(f){t.ref=f.currentTarget,l||(l=!0,(o||i)&&ir(t))}),rt(e,c.focusout,function(f){t.ref=f.currentTarget,l&&!St(t.ref,f.relatedTarget)&&(l=!1,(o||i&&!s)&&or(t))}),e}var eg={name:"CalendarDay",emits:["dayclick","daymouseenter","daymouseleave","dayfocusin","dayfocusout","daykeydown"],mixins:[$n,Sr],inheritAttrs:!1,render:function(){var e=this,n=function(){return e.hasBackgrounds&&D("div",{class:"vc-highlights vc-day-layer"},e.backgrounds.map(function(s){var l=s.key,u=s.wrapperClass,c=s.class,f=s.style;return D("div",{key:l,class:u},[D("div",{class:c,style:f})])}))},r=function(){return e.safeSlot("day-content",{day:e.day,attributes:e.day.attributes,attributesMap:e.day.attributesMap,dayProps:e.dayContentProps,dayEvents:e.dayContentEvents})||D("span",p(p(p({},e.dayContentProps),{},{class:e.dayContentClass,style:e.dayContentStyle},e.dayContentEvents),{},{ref:"content"}),[e.day.label])},a=function(){return e.hasDots&&D("div",{class:"vc-day-layer vc-day-box-center-bottom"},[D("div",{class:"vc-dots"},e.dots.map(function(s){var l=s.key,u=s.class,c=s.style;return D("span",{key:l,class:u,style:c})}))])},i=function(){return e.hasBars&&D("div",{class:"vc-day-layer vc-day-box-center-bottom"},[D("div",{class:"vc-bars"},e.bars.map(function(s){var l=s.key,u=s.class,c=s.style;return D("span",{key:l,class:u,style:c})}))])};return D("div",{class:["vc-day"].concat(dn(this.day.classes),[{"vc-day-box-center-center":!this.$slots["day-content"]},{"is-not-in-month":!this.inMonth}])},[n(),r(),a(),i()])},inject:["sharedState"],props:{day:{type:Object,required:!0}},data:function(){return{glyphs:{},dayContentEvents:{}}},computed:{label:function(){return this.day.label},startTime:function(){return this.day.range.start.getTime()},endTime:function(){return this.day.range.end.getTime()},inMonth:function(){return this.day.inMonth},isDisabled:function(){return this.day.isDisabled},backgrounds:function(){return this.glyphs.backgrounds},hasBackgrounds:function(){return!!ge(this.backgrounds)},content:function(){return this.glyphs.content},dots:function(){return this.glyphs.dots},hasDots:function(){return!!ge(this.dots)},bars:function(){return this.glyphs.bars},hasBars:function(){return!!ge(this.bars)},popovers:function(){return this.glyphs.popovers},hasPopovers:function(){return!!ge(this.popovers)},dayContentClass:function(){return["vc-day-content vc-focusable",{"is-disabled":this.isDisabled},At(jt(this.content),"class")||""]},dayContentStyle:function(){return At(jt(this.content),"style")},dayContentProps:function(){var e;return this.day.isFocusable?e="0":this.day.inMonth&&(e="-1"),{tabindex:e,"aria-label":this.day.ariaLabel,"aria-disabled":this.day.isDisabled?"true":"false",role:"button"}},dayEvent:function(){return p(p({},this.day),{},{el:this.$refs.content,popovers:this.popovers})}},watch:{theme:function(){this.refresh()},popovers:function(){this.refreshPopovers()},"day.shouldRefresh":function(){this.refresh()}},mounted:function(){this.refreshPopovers(),this.refresh()},methods:{getDayEvent:function(e){return p(p({},this.dayEvent),{},{event:e})},click:function(e){this.$emit("dayclick",this.getDayEvent(e))},mouseenter:function(e){this.$emit("daymouseenter",this.getDayEvent(e))},mouseleave:function(e){this.$emit("daymouseleave",this.getDayEvent(e))},focusin:function(e){this.$emit("dayfocusin",this.getDayEvent(e))},focusout:function(e){this.$emit("dayfocusout",this.getDayEvent(e))},keydown:function(e){this.$emit("daykeydown",this.getDayEvent(e))},refresh:function(){var e=this;if(!!this.day.shouldRefresh){this.day.shouldRefresh=!1;var n={backgrounds:[],dots:[],bars:[],popovers:[],content:[]};this.day.attributes=Object.values(this.day.attributesMap||{}).sort(function(r,a){return r.order-a.order}),this.day.attributes.forEach(function(r){var a=r.targetDate,i=a.isDate,o=a.isComplex,s=a.startTime,l=a.endTime,u=e.startTime<=s,c=e.endTime>=l,f=u&&c,d=u||c,v={isDate:i,isComplex:o,onStart:u,onEnd:c,onStartAndEnd:f,onStartOrEnd:d};e.processHighlight(r,v,n),e.processNonHighlight(r,"content",v,n.content),e.processNonHighlight(r,"dot",v,n.dots),e.processNonHighlight(r,"bar",v,n.bars),e.processPopover(r,n)}),this.glyphs=n}},processHighlight:function(e,n,r){var a=e.key,i=e.highlight,o=n.isDate,s=n.isComplex,l=n.onStart,u=n.onEnd,c=n.onStartAndEnd,f=r.backgrounds,d=r.content;if(!!i){var v=i.base,h=i.start,m=i.end;o||s?(f.push({key:a,wrapperClass:"vc-day-layer vc-day-box-center-center",class:["vc-highlight",h.class],style:h.style}),d.push({key:"".concat(a,"-content"),class:h.contentClass,style:h.contentStyle})):c?(f.push({key:a,wrapperClass:"vc-day-layer vc-day-box-center-center",class:["vc-highlight",h.class],style:h.style}),d.push({key:"".concat(a,"-content"),class:h.contentClass,style:h.contentStyle})):l?(f.push({key:"".concat(a,"-base"),wrapperClass:"vc-day-layer vc-day-box-right-center",class:["vc-highlight vc-highlight-base-start",v.class],style:v.style}),f.push({key:a,wrapperClass:"vc-day-layer vc-day-box-center-center",class:["vc-highlight",h.class],style:h.style}),d.push({key:"".concat(a,"-content"),class:h.contentClass,style:h.contentStyle})):u?(f.push({key:"".concat(a,"-base"),wrapperClass:"vc-day-layer vc-day-box-left-center",class:["vc-highlight vc-highlight-base-end",v.class],style:v.style}),f.push({key:a,wrapperClass:"vc-day-layer vc-day-box-center-center",class:["vc-highlight",m.class],style:m.style}),d.push({key:"".concat(a,"-content"),class:m.contentClass,style:m.contentStyle})):(f.push({key:"".concat(a,"-middle"),wrapperClass:"vc-day-layer vc-day-box-center-center",class:["vc-highlight vc-highlight-base-middle",v.class],style:v.style}),d.push({key:"".concat(a,"-content"),class:v.contentClass,style:v.contentStyle}))}},processNonHighlight:function(e,n,r,a){var i=r.isDate,o=r.onStart,s=r.onEnd;if(!!e[n]){var l=e.key,u="vc-".concat(n),c=e[n],f=c.base,d=c.start,v=c.end;i||o?a.push({key:l,class:[u,d.class],style:d.style}):s?a.push({key:l,class:[u,v.class],style:v.style}):a.push({key:l,class:[u,f.class],style:f.style})}},processPopover:function(e,n){var r=n.popovers,a=e.key,i=e.customData,o=e.popover;if(!!o){var s=Tt({key:a,customData:i,attribute:e},p({},o),{visibility:o.label?"hover":"click",placement:"bottom",isInteractive:!o.label});r.splice(0,0,s)}},refreshPopovers:function(){var e={};ge(this.popovers)&&(e=wn(Tt.apply(void 0,[{id:this.dayPopoverId,data:this.day,isRenderFn:!0}].concat(dn(this.popovers))))),this.dayContentEvents=cp({onClick:this.click,onMouseenter:this.mouseenter,onMouseleave:this.mouseleave,onFocusin:this.focusin,onFocusout:this.focusout,onKeydown:this.keydown},e),Qm({id:this.dayPopoverId,data:this.day})}}},tg=`.vc-day {
  position: relative;
  min-height: 32px;
  z-index: 1;
}
.vc-day.is-not-in-month * {
    opacity: 0;
    pointer-events: none;
}
.vc-day-layer {
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  pointer-events: none;
}
.vc-day-box-center-center {
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  -webkit-justify-content: center;
      -ms-flex-pack: center;
          justify-content: center;
  -webkit-align-items: center;
      -ms-flex-align: center;
          align-items: center;
  -webkit-transform-origin: 50% 50%;
          transform-origin: 50% 50%;
}
.vc-day-box-left-center {
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  -webkit-justify-content: flex-start;
      -ms-flex-pack: start;
          justify-content: flex-start;
  -webkit-align-items: center;
      -ms-flex-align: center;
          align-items: center;
  -webkit-transform-origin: 0% 50%;
          transform-origin: 0% 50%;
}
.vc-day-box-right-center {
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  -webkit-justify-content: flex-end;
      -ms-flex-pack: end;
          justify-content: flex-end;
  -webkit-align-items: center;
      -ms-flex-align: center;
          align-items: center;
  -webkit-transform-origin: 100% 50%;
          transform-origin: 100% 50%;
}
.vc-day-box-center-bottom {
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  -webkit-justify-content: center;
      -ms-flex-pack: center;
          justify-content: center;
  -webkit-align-items: flex-end;
      -ms-flex-align: end;
          align-items: flex-end;
}
.vc-day-content {
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  -webkit-justify-content: center;
      -ms-flex-pack: center;
          justify-content: center;
  -webkit-align-items: center;
      -ms-flex-align: center;
          align-items: center;
  font-size: var(--text-sm);
  font-weight: var(--font-medium);
  width: 28px;
  height: 28px;
  line-height: 28px;
  border-radius: var(--rounded-full);
  -webkit-user-select: none;
      -ms-user-select: none;
          user-select: none;
  cursor: pointer;
}
.vc-day-content:hover {
    background-color: hsla(211, 25%, 84%, 0.3);
}
.vc-day-content:focus {
    font-weight: var(--font-bold);
    background-color: hsla(211, 25%, 84%, 0.4);
}
.vc-day-content.is-disabled {
    color: var(--gray-400);
}
.vc-is-dark .vc-day-content:hover {
      background-color: hsla(216, 15%, 52%, 0.3);
}
.vc-is-dark .vc-day-content:focus {
      background-color: hsla(216, 15%, 52%, 0.4);
}
.vc-is-dark .vc-day-content.is-disabled {
      color: var(--gray-600);
}
.vc-highlights {
  overflow: hidden;
  pointer-events: none;
  z-index: -1;
}
.vc-highlight {
  width: 28px;
  height: 28px;
}
.vc-highlight.vc-highlight-base-start {
    width: 50% !important;
    border-radius: 0 !important;
    border-right-width: 0 !important;
}
.vc-highlight.vc-highlight-base-end {
    width: 50% !important;
    border-radius: 0 !important;
    border-left-width: 0 !important;
}
.vc-highlight.vc-highlight-base-middle {
    width: 100%;
    border-radius: 0 !important;
    border-left-width: 0 !important;
    border-right-width: 0 !important;
    margin: 0 -1px;
}
.vc-dots {
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  -webkit-justify-content: center;
      -ms-flex-pack: center;
          justify-content: center;
  -webkit-align-items: center;
      -ms-flex-align: center;
          align-items: center;
}
.vc-dot {
  width: 5px;
  height: 5px;
  border-radius: 50%;
  transition: all var(--day-content-transition-time);
}
.vc-dot:not(:last-child) {
    margin-right: 3px;
}
.vc-bars {
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  -webkit-justify-content: flex-start;
      -ms-flex-pack: start;
          justify-content: flex-start;
  -webkit-align-items: center;
      -ms-flex-align: center;
          align-items: center;
  width: 75%;
}
.vc-bar {
  -webkit-flex-grow: 1;
      -ms-flex-positive: 1;
          flex-grow: 1;
  height: 3px;
  transition: all var(--day-content-transition-time);
}
`;ke(tg);var ng="[object Boolean]";function rg(t){return t===!0||t===!1||q(t)&&ve(t)==ng}var ag=rg,ig={name:"CalendarPane",emits:["update:page","weeknumberclick"],mixins:[$n,Sr],inheritAttrs:!1,render:function(){var e=this,n=this.safeSlot("header",this.page)||D("div",{class:"vc-header align-".concat(this.titlePosition)},[D("div",p({class:"vc-title"},this.navPopoverEvents),[this.safeSlot("header-title",this.page,this.page.title)])]),r=this.weekdayLabels.map(function(c,f){return D("div",{key:f+1,class:"vc-weekday"},[c])}),a=this.showWeeknumbers_.startsWith("left"),i=this.showWeeknumbers_.startsWith("right");a?r.unshift(D("div",{class:"vc-weekday"})):i&&r.push(D("div",{class:"vc-weekday"}));var o=function(f){return D("div",{class:["vc-weeknumber"]},[D("span",{class:["vc-weeknumber-content","is-".concat(e.showWeeknumbers_)],onClick:function(v){e.$emit("weeknumberclick",{weeknumber:f,days:e.page.days.filter(function(h){return h[e.weeknumberKey]===f}),event:v})}},[f])])},s=[],l=this.locale.daysInWeek;this.page.days.forEach(function(c,f){var d=f%l;(a&&d===0||i&&d===l)&&s.push(o(c[e.weeknumberKey])),s.push(D(eg,p(p({},e.$attrs),{},{day:c}),e.$slots)),i&&d===l-1&&s.push(o(c[e.weeknumberKey]))});var u=D("div",{class:{"vc-weeks":!0,"vc-show-weeknumbers":this.showWeeknumbers_,"is-left":a,"is-right":i}},[r,s]);return D("div",{class:["vc-pane","row-from-end-".concat(this.rowFromEnd),"column-from-end-".concat(this.columnFromEnd)],ref:"pane"},[n,u])},props:{page:Object,position:Number,row:Number,rowFromEnd:Number,column:Number,columnFromEnd:Number,titlePosition:String,navVisibility:{type:String,default:je("navVisibility")},showWeeknumbers:[Boolean,String],showIsoWeeknumbers:[Boolean,String]},computed:{weeknumberKey:function(){return this.showWeeknumbers?"weeknumber":"isoWeeknumber"},showWeeknumbers_:function(){var e=this.showWeeknumbers||this.showIsoWeeknumbers;return e==null?"":ag(e)?e?"left":"":e.startsWith("right")?this.columnFromEnd>1?"right":e:this.column>1?"left":e},navPlacement:function(){switch(this.titlePosition){case"left":return"bottom-start";case"right":return"bottom-end";default:return"bottom"}},navPopoverEvents:function(){var e=this.sharedState,n=this.navVisibility,r=this.navPlacement,a=this.page,i=this.position;return wn({id:e.navPopoverId,visibility:n,placement:r,modifiers:[{name:"flip",options:{fallbackPlacements:["bottom"]}}],data:{page:a,position:i},isInteractive:!0,isRenderFn:!0})},weekdayLabels:function(){var e=this;return this.locale.getWeekdayDates().map(function(n){return e.format(n,e.masks.weekdays)})}}},og=`.vc-pane {
  min-width: 250px;
}
.vc-header {
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  -webkit-justify-content: center;
      -ms-flex-pack: center;
          justify-content: center;
  -webkit-align-items: center;
      -ms-flex-align: center;
          align-items: center;
  padding: 10px 16px 0px 16px;
}
.vc-header.align-left {
    -webkit-justify-content: flex-start;
        -ms-flex-pack: start;
            justify-content: flex-start;
}
.vc-header.align-right {
    -webkit-justify-content: flex-end;
        -ms-flex-pack: end;
            justify-content: flex-end;
}
.vc-title {
  font-size: var(--text-lg);
  color: var(--gray-800);
  font-weight: var(--font-semibold);
  line-height: 28px;
  cursor: pointer;
  -webkit-user-select: none;
      -ms-user-select: none;
          user-select: none;
  white-space: nowrap;
}
.vc-title:hover {
    opacity: 0.75;
}
.vc-weeknumber {
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  -webkit-justify-content: center;
      -ms-flex-pack: center;
          justify-content: center;
  -webkit-align-items: center;
      -ms-flex-align: center;
          align-items: center;
  position: relative;
}
.vc-weeknumber-content {
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  -webkit-justify-content: center;
      -ms-flex-pack: center;
          justify-content: center;
  -webkit-align-items: center;
      -ms-flex-align: center;
          align-items: center;
  font-size: var(--text-xs);
  font-weight: var(--font-medium);
  font-style: italic;
  width: 28px;
  height: 28px;
  margin-top: 2px;
  color: var(--gray-500);
  -webkit-user-select: none;
      -ms-user-select: none;
          user-select: none;
}
.vc-weeknumber-content.is-left-outside {
    position: absolute;
    left: var(--weeknumber-offset);
}
.vc-weeknumber-content.is-right-outside {
    position: absolute;
    right: var(--weeknumber-offset);
}
.vc-weeks {
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  position: relative;
  /* overflow: auto; */
  -webkit-overflow-scrolling: touch;
  padding: 6px;
  min-width: 250px;
}
.vc-weeks.vc-show-weeknumbers {
    grid-template-columns: auto repeat(7, 1fr);
}
.vc-weeks.vc-show-weeknumbers.is-right {
      grid-template-columns: repeat(7, 1fr) auto;
}
.vc-weekday {
  text-align: center;
  color: var(--gray-500);
  font-size: var(--text-sm);
  font-weight: var(--font-bold);
  line-height: 14px;
  padding-top: 4px;
  padding-bottom: 8px;
  cursor: default;
  -webkit-user-select: none;
      -ms-user-select: none;
          user-select: none;
}
.vc-weekdays {
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
}
.vc-nav-popover-container {
  color: var(--white);
  font-size: var(--text-sm);
  font-weight: var(--font-semibold);
  background-color: var(--gray-800);
  border: 1px solid;
  border-color: var(--gray-700);
  border-radius: var(--rounded-lg);
  padding: 4px;
  box-shadow: var(--shadow);
}
.vc-is-dark .vc-header {
    color: var(--gray-200);
}
.vc-is-dark .vc-title {
    color: var(--gray-100);
}
.vc-is-dark .vc-weekday {
    color: var(--accent-200);
}
.vc-is-dark .vc-nav-popover-container {
    color: var(--gray-800);
    background-color: var(--white);
    border-color: var(--gray-100);
}
`;ke(og);var en="26px",sg="0 0 32 32",lg={"left-arrow":{viewBox:"0 -1 16 34",path:"M11.196 10c0 0.143-0.071 0.304-0.179 0.411l-7.018 7.018 7.018 7.018c0.107 0.107 0.179 0.268 0.179 0.411s-0.071 0.304-0.179 0.411l-0.893 0.893c-0.107 0.107-0.268 0.179-0.411 0.179s-0.304-0.071-0.411-0.179l-8.321-8.321c-0.107-0.107-0.179-0.268-0.179-0.411s0.071-0.304 0.179-0.411l8.321-8.321c0.107-0.107 0.268-0.179 0.411-0.179s0.304 0.071 0.411 0.179l0.893 0.893c0.107 0.107 0.179 0.25 0.179 0.411z"},"right-arrow":{viewBox:"-5 -1 16 34",path:"M10.625 17.429c0 0.143-0.071 0.304-0.179 0.411l-8.321 8.321c-0.107 0.107-0.268 0.179-0.411 0.179s-0.304-0.071-0.411-0.179l-0.893-0.893c-0.107-0.107-0.179-0.25-0.179-0.411 0-0.143 0.071-0.304 0.179-0.411l7.018-7.018-7.018-7.018c-0.107-0.107-0.179-0.268-0.179-0.411s0.071-0.304 0.179-0.411l0.893-0.893c0.107-0.107 0.268-0.179 0.411-0.179s0.304 0.071 0.411 0.179l8.321 8.321c0.107 0.107 0.179 0.268 0.179 0.411z"}},Ir={props:["name"],data:function(){return{width:en,height:en,viewBox:sg,path:"",isBaseline:!1}},mounted:function(){this.updateIcon()},watch:{name:function(){this.updateIcon()}},methods:{updateIcon:function(){var e=lg[this.name];e&&(this.width=e.width||en,this.height=e.height||en,this.viewBox=e.viewBox,this.path=e.path)}}};function ug(t,e,n,r,a,i){return M(),N("svg",{class:"vc-svg-icon",width:a.width,height:a.height,viewBox:a.viewBox},[x("path",{d:a.path},null,8,["d"])],8,["width","height","viewBox"])}var cg=`.vc-svg-icon {
  display: inline-block;
  stroke: currentColor;
  stroke-width: 0;
}
.vc-svg-icon path {
    fill: currentColor;
}
`;ke(cg);Ir.render=ug;function fg(t){return t&&t.length?t[0]:void 0}var Bi=fg,Hn=12,Ui={name:"CalendarNav",emits:["input"],components:{SvgIcon:Ir},mixins:[$n],props:{value:{type:Object,default:function(){return{month:0,year:0}}},validator:{type:Function,default:function(){return function(){return!0}}}},data:function(){return{monthMode:!0,yearIndex:0,yearGroupIndex:0,onSpaceOrEnter:Ri}},computed:{month:function(){return this.value&&this.value.month||0},year:function(){return this.value&&this.value.year||0},title:function(){return this.monthMode?this.yearIndex:"".concat(this.firstYear," - ").concat(this.lastYear)},monthItems:function(){return this.getMonthItems(this.yearIndex)},yearItems:function(){return this.getYearItems(this.yearGroupIndex)},prevItemsEnabled:function(){return this.monthMode?this.prevMonthItemsEnabled:this.prevYearItemsEnabled},nextItemsEnabled:function(){return this.monthMode?this.nextMonthItemsEnabled:this.nextYearItemsEnabled},prevMonthItemsEnabled:function(){return this.getMonthItems(this.yearIndex-1).some(function(e){return!e.isDisabled})},nextMonthItemsEnabled:function(){return this.getMonthItems(this.yearIndex+1).some(function(e){return!e.isDisabled})},prevYearItemsEnabled:function(){return this.getYearItems(this.yearGroupIndex-1).some(function(e){return!e.isDisabled})},nextYearItemsEnabled:function(){return this.getYearItems(this.yearGroupIndex+1).some(function(e){return!e.isDisabled})},activeItems:function(){return this.monthMode?this.monthItems:this.yearItems},firstYear:function(){return Bi(this.yearItems.map(function(e){return e.year}))},lastYear:function(){return jt(this.yearItems.map(function(e){return e.year}))}},watch:{year:function(){this.yearIndex=this.year},yearIndex:function(e){this.yearGroupIndex=this.getYearGroupIndex(e)},value:function(){this.focusFirstItem()}},created:function(){this.yearIndex=this.year},mounted:function(){this.focusFirstItem()},methods:{focusFirstItem:function(){var e=this;this.$nextTick(function(){var n=e.$refs.navContainer.querySelector(".vc-nav-item:not(.is-disabled)");n&&n.focus()})},getItemClasses:function(e){var n=e.isActive,r=e.isCurrent,a=e.isDisabled,i=["vc-nav-item"];return n?i.push("is-active"):r&&i.push("is-current"),a&&i.push("is-disabled"),i},getYearGroupIndex:function(e){return Math.floor(e/Hn)},getMonthItems:function(e){var n=this,r=this.pageForDate(new Date),a=r.month,i=r.year;return this.locale.getMonthDates().map(function(o,s){var l=s+1;return{month:l,year:e,id:"".concat(e,".").concat(O(l,2)),label:n.locale.format(o,n.masks.navMonths),ariaLabel:n.locale.format(o,"MMMM YYYY"),isActive:l===n.month&&e===n.year,isCurrent:l===a&&e===i,isDisabled:!n.validator({month:l,year:e}),click:function(){return n.monthClick(l,e)}}})},getYearItems:function(e){var n=this,r=this.pageForDate(new Date);r._;for(var a=r.year,i=e*Hn,o=i+Hn,s=[],l=function(f){for(var d=!1,v=1;v<12&&(d=n.validator({month:v,year:f}),!d);v++);s.push({year:f,id:f,label:f,ariaLabel:f,isActive:f===n.year,isCurrent:f===a,isDisabled:!d,click:function(){return n.yearClick(f)}})},u=i;u<o;u+=1)l(u);return s},monthClick:function(e,n){this.validator({month:e,year:n})&&this.$emit("input",{month:e,year:n})},yearClick:function(e){this.yearIndex=e,this.monthMode=!0,this.focusFirstItem()},toggleMode:function(){this.monthMode=!this.monthMode},movePrev:function(){!this.prevItemsEnabled||(this.monthMode&&this.movePrevYear(),this.movePrevYearGroup())},moveNext:function(){!this.nextItemsEnabled||(this.monthMode&&this.moveNextYear(),this.moveNextYearGroup())},movePrevYear:function(){this.yearIndex--},moveNextYear:function(){this.yearIndex++},movePrevYearGroup:function(){this.yearGroupIndex--},moveNextYearGroup:function(){this.yearGroupIndex++}}},dg={class:"vc-nav-container",ref:"navContainer"},vg={class:"vc-nav-header"},hg={class:"vc-nav-items"};function pg(t,e,n,r,a,i){var o=Ga("svg-icon");return M(),N("div",dg,[x("div",vg,[x("span",{role:"button",class:["vc-nav-arrow is-left",{"is-disabled":!i.prevItemsEnabled}],tabindex:i.prevItemsEnabled?0:void 0,onClick:e[1]||(e[1]=function(){return i.movePrev.apply(i,arguments)}),onKeydown:e[2]||(e[2]=function(s){return a.onSpaceOrEnter(s,i.movePrev)})},[Ge(t.$slots,"nav-left-button",{},function(){return[x(o,{name:"left-arrow",width:"20px",height:"24px"})]})],42,["tabindex"]),x("span",{role:"button",class:["vc-nav-title vc-grid-focus",{"is-disabled":!i.nextItemsEnabled}],style:{whiteSpace:"nowrap"},tabindex:i.nextItemsEnabled?0:void 0,onClick:e[3]||(e[3]=function(){return i.toggleMode.apply(i,arguments)}),onKeydown:e[4]||(e[4]=function(s){return a.onSpaceOrEnter(s,i.toggleMode)})},Z(i.title),43,["tabindex"]),x("span",{role:"button",class:"vc-nav-arrow is-right",tabindex:"0",onClick:e[5]||(e[5]=function(){return i.moveNext.apply(i,arguments)}),onKeydown:e[6]||(e[6]=function(s){return a.onSpaceOrEnter(s,i.moveNext)})},[Ge(t.$slots,"nav-right-button",{},function(){return[x(o,{name:"right-arrow",width:"20px",height:"24px"})]})],32)]),x("div",hg,[(M(!0),N(lt,null,ut(i.activeItems,function(s){return M(),N("span",{key:s.label,role:"button","data-id":s.id,"aria-label":s.ariaLabel,class:i.getItemClasses(s),tabindex:s.isDisabled?void 0:0,onClick:s.click,onKeydown:function(u){return a.onSpaceOrEnter(u,s.click)}},Z(s.label),43,["data-id","aria-label","tabindex","onClick","onKeydown"])}),128))])],512)}var mg=`.vc-nav-header {
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  -webkit-justify-content: space-between;
      -ms-flex-pack: justify;
          justify-content: space-between;
}
.vc-nav-arrow {
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  -webkit-justify-content: center;
      -ms-flex-pack: center;
          justify-content: center;
  -webkit-align-items: center;
      -ms-flex-align: center;
          align-items: center;
  cursor: pointer;
  -webkit-user-select: none;
      -ms-user-select: none;
          user-select: none;
  line-height: var(--leading-snug);
  border-width: 2px;
  border-style: solid;
  border-color: transparent;
  border-radius: var(--rounded);
}
.vc-nav-arrow.is-left {
    margin-right: auto;
}
.vc-nav-arrow.is-right {
    margin-left: auto;
}
.vc-nav-arrow.is-disabled {
    opacity: 0.25;
    pointer-events: none;
    cursor: not-allowed;
}
.vc-nav-arrow:hover {
    background-color: var(--gray-900);
}
.vc-nav-arrow:focus {
    border-color: var(--accent-600);
}
.vc-nav-title {
  color: var(--accent-100);
  font-weight: var(--font-bold);
  line-height: var(--leading-snug);
  padding: 4px 8px;
  border-radius: var(--rounded);
  border-width: 2px;
  border-style: solid;
  border-color: transparent;
  -webkit-user-select: none;
      -ms-user-select: none;
          user-select: none;
}
.vc-nav-title:hover {
    background-color: var(--gray-900);
}
.vc-nav-title:focus {
    border-color: var(--accent-600);
}
.vc-nav-items {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-row-gap: 2px;
  grid-column-gap: 5px;
}
.vc-nav-item {
  width: 48px;
  text-align: center;
  line-height: var(--leading-snug);
  font-weight: var(--font-semibold);
  padding: 4px 0;
  cursor: pointer;
  border-width: 2px;
  border-style: solid;
  border-color: transparent;
  border-radius: var(--rounded);
  -webkit-user-select: none;
      -ms-user-select: none;
          user-select: none;
}
.vc-nav-item:hover {
    color: var(--white);
    background-color: var(--gray-900);
    box-shadow: var(--shadow-inner);
}
.vc-nav-item.is-active {
    color: var(--accent-900);
    background: var(--accent-100);
    font-weight: var(--font-bold);
    box-shadow: var(--shadow);
}
.vc-nav-item.is-current {
    color: var(--accent-100);
    font-weight: var(--bold);
    border-color: var(--accent-100);
}
.vc-nav-item:focus {
    border-color: var(--accent-600);
}
.vc-nav-item.is-disabled {
    opacity: 0.25;
    pointer-events: none;
}
.vc-is-dark .vc-nav-title {
    color: var(--gray-900);
}
.vc-is-dark .vc-nav-title:hover {
      background-color: var(--gray-200);
}
.vc-is-dark .vc-nav-title:focus {
      border-color: var(--accent-400);
}
.vc-is-dark .vc-nav-arrow:hover {
      background-color: var(--gray-200);
}
.vc-is-dark .vc-nav-arrow:focus {
      border-color: var(--accent-400);
}
.vc-is-dark .vc-nav-item:hover {
      color: var(--gray-900);
      background-color: var(--gray-200);
      box-shadow: none;
}
.vc-is-dark .vc-nav-item.is-active {
      color: var(--white);
      background: var(--accent-500);
}
.vc-is-dark .vc-nav-item.is-current {
      color: var(--accent-600);
      border-color: var(--accent-500);
}
.vc-is-dark .vc-nav-item:focus {
      border-color: var(--accent-400);
}
`;ke(mg);Ui.render=pg;var oe="top",ce="bottom",fe="right",se="left",$r="auto",Ut=[oe,ce,fe,se],ot="start",Er="end",gg="clippingParents",Gi="viewport",Mt="popper",yg="reference",Ca=Ut.reduce(function(t,e){return t.concat([e+"-"+ot,e+"-"+Er])},[]),Ki=[].concat(Ut,[$r]).reduce(function(t,e){return t.concat([e,e+"-"+ot,e+"-"+Er])},[]),bg="beforeRead",wg="read",Dg="afterRead",xg="beforeMain",kg="main",_g="afterMain",Mg="beforeWrite",Pg="write",Tg="afterWrite",Og=[bg,wg,Dg,xg,kg,_g,Mg,Pg,Tg];function De(t){return t?(t.nodeName||"").toLowerCase():null}function he(t){if(t==null)return window;if(t.toString()!=="[object Window]"){var e=t.ownerDocument;return e&&e.defaultView||window}return t}function Lt(t){var e=he(t).Element;return t instanceof e||t instanceof Element}function de(t){var e=he(t).HTMLElement;return t instanceof e||t instanceof HTMLElement}function Zi(t){if(typeof ShadowRoot=="undefined")return!1;var e=he(t).ShadowRoot;return t instanceof e||t instanceof ShadowRoot}function Sg(t){var e=t.state;Object.keys(e.elements).forEach(function(n){var r=e.styles[n]||{},a=e.attributes[n]||{},i=e.elements[n];!de(i)||!De(i)||(Object.assign(i.style,r),Object.keys(a).forEach(function(o){var s=a[o];s===!1?i.removeAttribute(o):i.setAttribute(o,s===!0?"":s)}))})}function Ig(t){var e=t.state,n={popper:{position:e.options.strategy,left:"0",top:"0",margin:"0"},arrow:{position:"absolute"},reference:{}};return Object.assign(e.elements.popper.style,n.popper),e.styles=n,e.elements.arrow&&Object.assign(e.elements.arrow.style,n.arrow),function(){Object.keys(e.elements).forEach(function(r){var a=e.elements[r],i=e.attributes[r]||{},o=Object.keys(e.styles.hasOwnProperty(r)?e.styles[r]:n[r]),s=o.reduce(function(l,u){return l[u]="",l},{});!de(a)||!De(a)||(Object.assign(a.style,s),Object.keys(i).forEach(function(l){a.removeAttribute(l)}))})}}var $g={name:"applyStyles",enabled:!0,phase:"write",fn:Sg,effect:Ig,requires:["computeStyles"]};function be(t){return t.split("-")[0]}function st(t){var e=t.getBoundingClientRect();return{width:e.width,height:e.height,top:e.top,right:e.right,bottom:e.bottom,left:e.left,x:e.left,y:e.top}}function Cr(t){var e=st(t),n=t.offsetWidth,r=t.offsetHeight;return Math.abs(e.width-n)<=1&&(n=e.width),Math.abs(e.height-r)<=1&&(r=e.height),{x:t.offsetLeft,y:t.offsetTop,width:n,height:r}}function qi(t,e){var n=e.getRootNode&&e.getRootNode();if(t.contains(e))return!0;if(n&&Zi(n)){var r=e;do{if(r&&t.isSameNode(r))return!0;r=r.parentNode||r.host}while(r)}return!1}function Ee(t){return he(t).getComputedStyle(t)}function Eg(t){return["table","td","th"].indexOf(De(t))>=0}function ze(t){return((Lt(t)?t.ownerDocument:t.document)||window.document).documentElement}function En(t){return De(t)==="html"?t:t.assignedSlot||t.parentNode||(Zi(t)?t.host:null)||ze(t)}function Ya(t){return!de(t)||Ee(t).position==="fixed"?null:t.offsetParent}function Cg(t){var e=navigator.userAgent.toLowerCase().indexOf("firefox")!==-1,n=navigator.userAgent.indexOf("Trident")!==-1;if(n&&de(t)){var r=Ee(t);if(r.position==="fixed")return null}for(var a=En(t);de(a)&&["html","body"].indexOf(De(a))<0;){var i=Ee(a);if(i.transform!=="none"||i.perspective!=="none"||i.contain==="paint"||["transform","perspective"].indexOf(i.willChange)!==-1||e&&i.willChange==="filter"||e&&i.filter&&i.filter!=="none")return a;a=a.parentNode}return null}function Gt(t){for(var e=he(t),n=Ya(t);n&&Eg(n)&&Ee(n).position==="static";)n=Ya(n);return n&&(De(n)==="html"||De(n)==="body"&&Ee(n).position==="static")?e:n||Cg(t)||e}function Yr(t){return["top","bottom"].indexOf(t)>=0?"x":"y"}var Le=Math.max,Rt=Math.min,tn=Math.round;function un(t,e,n){return Le(t,Rt(e,n))}function Xi(){return{top:0,right:0,bottom:0,left:0}}function Ji(t){return Object.assign({},Xi(),t)}function Qi(t,e){return e.reduce(function(n,r){return n[r]=t,n},{})}var Yg=function(e,n){return e=typeof e=="function"?e(Object.assign({},n.rects,{placement:n.placement})):e,Ji(typeof e!="number"?e:Qi(e,Ut))};function Ag(t){var e,n=t.state,r=t.name,a=t.options,i=n.elements.arrow,o=n.modifiersData.popperOffsets,s=be(n.placement),l=Yr(s),u=[se,fe].indexOf(s)>=0,c=u?"height":"width";if(!(!i||!o)){var f=Yg(a.padding,n),d=Cr(i),v=l==="y"?oe:se,h=l==="y"?ce:fe,m=n.rects.reference[c]+n.rects.reference[l]-o[l]-n.rects.popper[c],g=o[l]-n.rects.reference[l],y=Gt(i),b=y?l==="y"?y.clientHeight||0:y.clientWidth||0:0,P=m/2-g/2,w=f[v],T=b-d[c]-f[h],k=b/2-d[c]/2+P,I=un(w,k,T),S=l;n.modifiersData[r]=(e={},e[S]=I,e.centerOffset=I-k,e)}}function Fg(t){var e=t.state,n=t.options,r=n.element,a=r===void 0?"[data-popper-arrow]":r;a!=null&&(typeof a=="string"&&(a=e.elements.popper.querySelector(a),!a)||!qi(e.elements.popper,a)||(e.elements.arrow=a))}var Ng={name:"arrow",enabled:!0,phase:"main",fn:Ag,effect:Fg,requires:["popperOffsets"],requiresIfExists:["preventOverflow"]},jg={top:"auto",right:"auto",bottom:"auto",left:"auto"};function Lg(t){var e=t.x,n=t.y,r=window,a=r.devicePixelRatio||1;return{x:tn(tn(e*a)/a)||0,y:tn(tn(n*a)/a)||0}}function Aa(t){var e,n=t.popper,r=t.popperRect,a=t.placement,i=t.offsets,o=t.position,s=t.gpuAcceleration,l=t.adaptive,u=t.roundOffsets,c=u===!0?Lg(i):typeof u=="function"?u(i):i,f=c.x,d=f===void 0?0:f,v=c.y,h=v===void 0?0:v,m=i.hasOwnProperty("x"),g=i.hasOwnProperty("y"),y=se,b=oe,P=window;if(l){var w=Gt(n),T="clientHeight",k="clientWidth";w===he(n)&&(w=ze(n),Ee(w).position!=="static"&&(T="scrollHeight",k="scrollWidth")),w=w,a===oe&&(b=ce,h-=w[T]-r.height,h*=s?1:-1),a===se&&(y=fe,d-=w[k]-r.width,d*=s?1:-1)}var I=Object.assign({position:o},l&&jg);if(s){var S;return Object.assign({},I,(S={},S[b]=g?"0":"",S[y]=m?"0":"",S.transform=(P.devicePixelRatio||1)<2?"translate("+d+"px, "+h+"px)":"translate3d("+d+"px, "+h+"px, 0)",S))}return Object.assign({},I,(e={},e[b]=g?h+"px":"",e[y]=m?d+"px":"",e.transform="",e))}function Rg(t){var e=t.state,n=t.options,r=n.gpuAcceleration,a=r===void 0?!0:r,i=n.adaptive,o=i===void 0?!0:i,s=n.roundOffsets,l=s===void 0?!0:s,u={placement:be(e.placement),popper:e.elements.popper,popperRect:e.rects.popper,gpuAcceleration:a};e.modifiersData.popperOffsets!=null&&(e.styles.popper=Object.assign({},e.styles.popper,Aa(Object.assign({},u,{offsets:e.modifiersData.popperOffsets,position:e.options.strategy,adaptive:o,roundOffsets:l})))),e.modifiersData.arrow!=null&&(e.styles.arrow=Object.assign({},e.styles.arrow,Aa(Object.assign({},u,{offsets:e.modifiersData.arrow,position:"absolute",adaptive:!1,roundOffsets:l})))),e.attributes.popper=Object.assign({},e.attributes.popper,{"data-popper-placement":e.placement})}var zg={name:"computeStyles",enabled:!0,phase:"beforeWrite",fn:Rg,data:{}},nn={passive:!0};function Vg(t){var e=t.state,n=t.instance,r=t.options,a=r.scroll,i=a===void 0?!0:a,o=r.resize,s=o===void 0?!0:o,l=he(e.elements.popper),u=[].concat(e.scrollParents.reference,e.scrollParents.popper);return i&&u.forEach(function(c){c.addEventListener("scroll",n.update,nn)}),s&&l.addEventListener("resize",n.update,nn),function(){i&&u.forEach(function(c){c.removeEventListener("scroll",n.update,nn)}),s&&l.removeEventListener("resize",n.update,nn)}}var Wg={name:"eventListeners",enabled:!0,phase:"write",fn:function(){},effect:Vg,data:{}},Hg={left:"right",right:"left",bottom:"top",top:"bottom"};function cn(t){return t.replace(/left|right|bottom|top/g,function(e){return Hg[e]})}var Bg={start:"end",end:"start"};function Fa(t){return t.replace(/start|end/g,function(e){return Bg[e]})}function Ar(t){var e=he(t),n=e.pageXOffset,r=e.pageYOffset;return{scrollLeft:n,scrollTop:r}}function Fr(t){return st(ze(t)).left+Ar(t).scrollLeft}function Ug(t){var e=he(t),n=ze(t),r=e.visualViewport,a=n.clientWidth,i=n.clientHeight,o=0,s=0;return r&&(a=r.width,i=r.height,/^((?!chrome|android).)*safari/i.test(navigator.userAgent)||(o=r.offsetLeft,s=r.offsetTop)),{width:a,height:i,x:o+Fr(t),y:s}}function Gg(t){var e,n=ze(t),r=Ar(t),a=(e=t.ownerDocument)==null?void 0:e.body,i=Le(n.scrollWidth,n.clientWidth,a?a.scrollWidth:0,a?a.clientWidth:0),o=Le(n.scrollHeight,n.clientHeight,a?a.scrollHeight:0,a?a.clientHeight:0),s=-r.scrollLeft+Fr(t),l=-r.scrollTop;return Ee(a||n).direction==="rtl"&&(s+=Le(n.clientWidth,a?a.clientWidth:0)-i),{width:i,height:o,x:s,y:l}}function Nr(t){var e=Ee(t),n=e.overflow,r=e.overflowX,a=e.overflowY;return/auto|scroll|overlay|hidden/.test(n+a+r)}function eo(t){return["html","body","#document"].indexOf(De(t))>=0?t.ownerDocument.body:de(t)&&Nr(t)?t:eo(En(t))}function $t(t,e){var n;e===void 0&&(e=[]);var r=eo(t),a=r===((n=t.ownerDocument)==null?void 0:n.body),i=he(r),o=a?[i].concat(i.visualViewport||[],Nr(r)?r:[]):r,s=e.concat(o);return a?s:s.concat($t(En(o)))}function sr(t){return Object.assign({},t,{left:t.x,top:t.y,right:t.x+t.width,bottom:t.y+t.height})}function Kg(t){var e=st(t);return e.top=e.top+t.clientTop,e.left=e.left+t.clientLeft,e.bottom=e.top+t.clientHeight,e.right=e.left+t.clientWidth,e.width=t.clientWidth,e.height=t.clientHeight,e.x=e.left,e.y=e.top,e}function Na(t,e){return e===Gi?sr(Ug(t)):de(e)?Kg(e):sr(Gg(ze(t)))}function Zg(t){var e=$t(En(t)),n=["absolute","fixed"].indexOf(Ee(t).position)>=0,r=n&&de(t)?Gt(t):t;return Lt(r)?e.filter(function(a){return Lt(a)&&qi(a,r)&&De(a)!=="body"}):[]}function qg(t,e,n){var r=e==="clippingParents"?Zg(t):[].concat(e),a=[].concat(r,[n]),i=a[0],o=a.reduce(function(s,l){var u=Na(t,l);return s.top=Le(u.top,s.top),s.right=Rt(u.right,s.right),s.bottom=Rt(u.bottom,s.bottom),s.left=Le(u.left,s.left),s},Na(t,i));return o.width=o.right-o.left,o.height=o.bottom-o.top,o.x=o.left,o.y=o.top,o}function zt(t){return t.split("-")[1]}function to(t){var e=t.reference,n=t.element,r=t.placement,a=r?be(r):null,i=r?zt(r):null,o=e.x+e.width/2-n.width/2,s=e.y+e.height/2-n.height/2,l;switch(a){case oe:l={x:o,y:e.y-n.height};break;case ce:l={x:o,y:e.y+e.height};break;case fe:l={x:e.x+e.width,y:s};break;case se:l={x:e.x-n.width,y:s};break;default:l={x:e.x,y:e.y}}var u=a?Yr(a):null;if(u!=null){var c=u==="y"?"height":"width";switch(i){case ot:l[u]=l[u]-(e[c]/2-n[c]/2);break;case Er:l[u]=l[u]+(e[c]/2-n[c]/2);break}}return l}function Vt(t,e){e===void 0&&(e={});var n=e,r=n.placement,a=r===void 0?t.placement:r,i=n.boundary,o=i===void 0?gg:i,s=n.rootBoundary,l=s===void 0?Gi:s,u=n.elementContext,c=u===void 0?Mt:u,f=n.altBoundary,d=f===void 0?!1:f,v=n.padding,h=v===void 0?0:v,m=Ji(typeof h!="number"?h:Qi(h,Ut)),g=c===Mt?yg:Mt,y=t.elements.reference,b=t.rects.popper,P=t.elements[d?g:c],w=qg(Lt(P)?P:P.contextElement||ze(t.elements.popper),o,l),T=st(y),k=to({reference:T,element:b,strategy:"absolute",placement:a}),I=sr(Object.assign({},b,k)),S=c===Mt?I:T,$={top:w.top-S.top+m.top,bottom:S.bottom-w.bottom+m.bottom,left:w.left-S.left+m.left,right:S.right-w.right+m.right},j=t.modifiersData.offset;if(c===Mt&&j){var K=j[a];Object.keys($).forEach(function(le){var W=[fe,ce].indexOf(le)>=0?1:-1,_e=[oe,ce].indexOf(le)>=0?"y":"x";$[le]+=K[_e]*W})}return $}function Xg(t,e){e===void 0&&(e={});var n=e,r=n.placement,a=n.boundary,i=n.rootBoundary,o=n.padding,s=n.flipVariations,l=n.allowedAutoPlacements,u=l===void 0?Ki:l,c=zt(r),f=c?s?Ca:Ca.filter(function(h){return zt(h)===c}):Ut,d=f.filter(function(h){return u.indexOf(h)>=0});d.length===0&&(d=f);var v=d.reduce(function(h,m){return h[m]=Vt(t,{placement:m,boundary:a,rootBoundary:i,padding:o})[be(m)],h},{});return Object.keys(v).sort(function(h,m){return v[h]-v[m]})}function Jg(t){if(be(t)===$r)return[];var e=cn(t);return[Fa(t),e,Fa(e)]}function Qg(t){var e=t.state,n=t.options,r=t.name;if(!e.modifiersData[r]._skip){for(var a=n.mainAxis,i=a===void 0?!0:a,o=n.altAxis,s=o===void 0?!0:o,l=n.fallbackPlacements,u=n.padding,c=n.boundary,f=n.rootBoundary,d=n.altBoundary,v=n.flipVariations,h=v===void 0?!0:v,m=n.allowedAutoPlacements,g=e.options.placement,y=be(g),b=y===g,P=l||(b||!h?[cn(g)]:Jg(g)),w=[g].concat(P).reduce(function(Te,te){return Te.concat(be(te)===$r?Xg(e,{placement:te,boundary:c,rootBoundary:f,padding:u,flipVariations:h,allowedAutoPlacements:m}):te)},[]),T=e.rects.reference,k=e.rects.popper,I=new Map,S=!0,$=w[0],j=0;j<w.length;j++){var K=w[j],le=be(K),W=zt(K)===ot,_e=[oe,ce].indexOf(le)>=0,ee=_e?"width":"height",X=Vt(e,{placement:K,boundary:c,rootBoundary:f,altBoundary:d,padding:u}),J=_e?W?fe:se:W?ce:oe;T[ee]>k[ee]&&(J=cn(J));var Ve=cn(J),Me=[];if(i&&Me.push(X[le]<=0),s&&Me.push(X[J]<=0,X[Ve]<=0),Me.every(function(Te){return Te})){$=K,S=!1;break}I.set(K,Me)}if(S)for(var Xe=h?3:1,Je=function(te){var We=w.find(function(et){var pe=I.get(et);if(pe)return pe.slice(0,te).every(function(tt){return tt})});if(We)return $=We,"break"},Pe=Xe;Pe>0;Pe--){var Qe=Je(Pe);if(Qe==="break")break}e.placement!==$&&(e.modifiersData[r]._skip=!0,e.placement=$,e.reset=!0)}}var e0={name:"flip",enabled:!0,phase:"main",fn:Qg,requiresIfExists:["offset"],data:{_skip:!1}};function ja(t,e,n){return n===void 0&&(n={x:0,y:0}),{top:t.top-e.height-n.y,right:t.right-e.width+n.x,bottom:t.bottom-e.height+n.y,left:t.left-e.width-n.x}}function La(t){return[oe,fe,ce,se].some(function(e){return t[e]>=0})}function t0(t){var e=t.state,n=t.name,r=e.rects.reference,a=e.rects.popper,i=e.modifiersData.preventOverflow,o=Vt(e,{elementContext:"reference"}),s=Vt(e,{altBoundary:!0}),l=ja(o,r),u=ja(s,a,i),c=La(l),f=La(u);e.modifiersData[n]={referenceClippingOffsets:l,popperEscapeOffsets:u,isReferenceHidden:c,hasPopperEscaped:f},e.attributes.popper=Object.assign({},e.attributes.popper,{"data-popper-reference-hidden":c,"data-popper-escaped":f})}var n0={name:"hide",enabled:!0,phase:"main",requiresIfExists:["preventOverflow"],fn:t0};function r0(t,e,n){var r=be(t),a=[se,oe].indexOf(r)>=0?-1:1,i=typeof n=="function"?n(Object.assign({},e,{placement:t})):n,o=i[0],s=i[1];return o=o||0,s=(s||0)*a,[se,fe].indexOf(r)>=0?{x:s,y:o}:{x:o,y:s}}function a0(t){var e=t.state,n=t.options,r=t.name,a=n.offset,i=a===void 0?[0,0]:a,o=Ki.reduce(function(c,f){return c[f]=r0(f,e.rects,i),c},{}),s=o[e.placement],l=s.x,u=s.y;e.modifiersData.popperOffsets!=null&&(e.modifiersData.popperOffsets.x+=l,e.modifiersData.popperOffsets.y+=u),e.modifiersData[r]=o}var i0={name:"offset",enabled:!0,phase:"main",requires:["popperOffsets"],fn:a0};function o0(t){var e=t.state,n=t.name;e.modifiersData[n]=to({reference:e.rects.reference,element:e.rects.popper,strategy:"absolute",placement:e.placement})}var s0={name:"popperOffsets",enabled:!0,phase:"read",fn:o0,data:{}};function l0(t){return t==="x"?"y":"x"}function u0(t){var e=t.state,n=t.options,r=t.name,a=n.mainAxis,i=a===void 0?!0:a,o=n.altAxis,s=o===void 0?!1:o,l=n.boundary,u=n.rootBoundary,c=n.altBoundary,f=n.padding,d=n.tether,v=d===void 0?!0:d,h=n.tetherOffset,m=h===void 0?0:h,g=Vt(e,{boundary:l,rootBoundary:u,padding:f,altBoundary:c}),y=be(e.placement),b=zt(e.placement),P=!b,w=Yr(y),T=l0(w),k=e.modifiersData.popperOffsets,I=e.rects.reference,S=e.rects.popper,$=typeof m=="function"?m(Object.assign({},e.rects,{placement:e.placement})):m,j={x:0,y:0};if(!!k){if(i||s){var K=w==="y"?oe:se,le=w==="y"?ce:fe,W=w==="y"?"height":"width",_e=k[w],ee=k[w]+g[K],X=k[w]-g[le],J=v?-S[W]/2:0,Ve=b===ot?I[W]:S[W],Me=b===ot?-S[W]:-I[W],Xe=e.elements.arrow,Je=v&&Xe?Cr(Xe):{width:0,height:0},Pe=e.modifiersData["arrow#persistent"]?e.modifiersData["arrow#persistent"].padding:Xi(),Qe=Pe[K],Te=Pe[le],te=un(0,I[W],Je[W]),We=P?I[W]/2-J-te-Qe-$:Ve-te-Qe-$,et=P?-I[W]/2+J+te+Te+$:Me+te+Te+$,pe=e.elements.arrow&&Gt(e.elements.arrow),tt=pe?w==="y"?pe.clientTop||0:pe.clientLeft||0:0,wt=e.modifiersData.offset?e.modifiersData.offset[e.placement][w]:0,Dt=k[w]+We-wt-tt,xt=k[w]+et-wt;if(i){var Cn=un(v?Rt(ee,Dt):ee,_e,v?Le(X,xt):X);k[w]=Cn,j[w]=Cn-_e}if(s){var Yn=w==="x"?oe:se,An=w==="x"?ce:fe,nt=k[T],Kt=nt+g[Yn],Zt=nt-g[An],qt=un(v?Rt(Kt,Dt):Kt,nt,v?Le(Zt,xt):Zt);k[T]=qt,j[T]=qt-nt}}e.modifiersData[r]=j}}var c0={name:"preventOverflow",enabled:!0,phase:"main",fn:u0,requiresIfExists:["offset"]};function f0(t){return{scrollLeft:t.scrollLeft,scrollTop:t.scrollTop}}function d0(t){return t===he(t)||!de(t)?Ar(t):f0(t)}function v0(t,e,n){n===void 0&&(n=!1);var r=ze(e),a=st(t),i=de(e),o={scrollLeft:0,scrollTop:0},s={x:0,y:0};return(i||!i&&!n)&&((De(e)!=="body"||Nr(r))&&(o=d0(e)),de(e)?(s=st(e),s.x+=e.clientLeft,s.y+=e.clientTop):r&&(s.x=Fr(r))),{x:a.left+o.scrollLeft-s.x,y:a.top+o.scrollTop-s.y,width:a.width,height:a.height}}function h0(t){var e=new Map,n=new Set,r=[];t.forEach(function(i){e.set(i.name,i)});function a(i){n.add(i.name);var o=[].concat(i.requires||[],i.requiresIfExists||[]);o.forEach(function(s){if(!n.has(s)){var l=e.get(s);l&&a(l)}}),r.push(i)}return t.forEach(function(i){n.has(i.name)||a(i)}),r}function p0(t){var e=h0(t);return Og.reduce(function(n,r){return n.concat(e.filter(function(a){return a.phase===r}))},[])}function m0(t){var e;return function(){return e||(e=new Promise(function(n){Promise.resolve().then(function(){e=void 0,n(t())})})),e}}function g0(t){var e=t.reduce(function(n,r){var a=n[r.name];return n[r.name]=a?Object.assign({},a,r,{options:Object.assign({},a.options,r.options),data:Object.assign({},a.data,r.data)}):r,n},{});return Object.keys(e).map(function(n){return e[n]})}var Ra={placement:"bottom",modifiers:[],strategy:"absolute"};function za(){for(var t=arguments.length,e=new Array(t),n=0;n<t;n++)e[n]=arguments[n];return!e.some(function(r){return!(r&&typeof r.getBoundingClientRect=="function")})}function y0(t){t===void 0&&(t={});var e=t,n=e.defaultModifiers,r=n===void 0?[]:n,a=e.defaultOptions,i=a===void 0?Ra:a;return function(s,l,u){u===void 0&&(u=i);var c={placement:"bottom",orderedModifiers:[],options:Object.assign({},Ra,i),modifiersData:{},elements:{reference:s,popper:l},attributes:{},styles:{}},f=[],d=!1,v={state:c,setOptions:function(y){m(),c.options=Object.assign({},i,c.options,y),c.scrollParents={reference:Lt(s)?$t(s):s.contextElement?$t(s.contextElement):[],popper:$t(l)};var b=p0(g0([].concat(r,c.options.modifiers)));return c.orderedModifiers=b.filter(function(P){return P.enabled}),h(),v.update()},forceUpdate:function(){if(!d){var y=c.elements,b=y.reference,P=y.popper;if(!!za(b,P)){c.rects={reference:v0(b,Gt(P),c.options.strategy==="fixed"),popper:Cr(P)},c.reset=!1,c.placement=c.options.placement,c.orderedModifiers.forEach(function(j){return c.modifiersData[j.name]=Object.assign({},j.data)});for(var w=0;w<c.orderedModifiers.length;w++){if(c.reset===!0){c.reset=!1,w=-1;continue}var T=c.orderedModifiers[w],k=T.fn,I=T.options,S=I===void 0?{}:I,$=T.name;typeof k=="function"&&(c=k({state:c,options:S,name:$,instance:v})||c)}}}},update:m0(function(){return new Promise(function(g){v.forceUpdate(),g(c)})}),destroy:function(){m(),d=!0}};if(!za(s,l))return v;v.setOptions(u).then(function(g){!d&&u.onFirstUpdate&&u.onFirstUpdate(g)});function h(){c.orderedModifiers.forEach(function(g){var y=g.name,b=g.options,P=b===void 0?{}:b,w=g.effect;if(typeof w=="function"){var T=w({state:c,name:y,instance:v,options:P}),k=function(){};f.push(T||k)}})}function m(){f.forEach(function(g){return g()}),f=[]}return v}}var b0=[Wg,s0,zg,$g,i0,e0,c0,Ng,n0],w0=y0({defaultModifiers:b0}),jr={name:"CustomTransition",emits:["before-enter","before-transition","after-enter","after-transition"],props:{name:String,appear:Boolean},computed:{name_:function(){return"vc-".concat(this.name||"none")}},methods:{beforeEnter:function(e){this.$emit("before-enter",e),this.$emit("before-transition",e)},afterEnter:function(e){this.$emit("after-enter",e),this.$emit("after-transition",e)}}};function D0(t,e,n,r,a,i){return M(),N(fo,{name:i.name_,appear:n.appear,onBeforeEnter:i.beforeEnter,onAfterEnter:i.afterEnter},{default:fr(function(){return[Ge(t.$slots,"default")]}),_:3},8,["name","appear","onBeforeEnter","onAfterEnter"])}var x0=`.vc-none-enter-active,
.vc-none-leave-active {
  transition-duration: 0s;
}
.vc-fade-enter-active,
.vc-fade-leave-active,
.vc-slide-left-enter-active,
.vc-slide-left-leave-active,
.vc-slide-right-enter-active,
.vc-slide-right-leave-active,
.vc-slide-up-enter-active,
.vc-slide-up-leave-active,
.vc-slide-down-enter-active,
.vc-slide-down-leave-active,
.vc-slide-fade-enter-active,
.vc-slide-fade-leave-active {
  transition: opacity var(--slide-duration) var(--slide-timing),
    -webkit-transform var(--slide-duration) var(--slide-timing);
  transition: transform var(--slide-duration) var(--slide-timing),
    opacity var(--slide-duration) var(--slide-timing);
  transition: transform var(--slide-duration) var(--slide-timing),
    opacity var(--slide-duration) var(--slide-timing),
    -webkit-transform var(--slide-duration) var(--slide-timing);
  -webkit-backface-visibility: hidden;
          backface-visibility: hidden;
  pointer-events: none;
}
.vc-none-leave-active,
.vc-fade-leave-active,
.vc-slide-left-leave-active,
.vc-slide-right-leave-active,
.vc-slide-up-leave-active,
.vc-slide-down-leave-active {
  position: absolute !important;
  width: 100%;
}
.vc-none-enter-from,
.vc-none-leave-to,
.vc-fade-enter-from,
.vc-fade-leave-to,
.vc-slide-left-enter-from,
.vc-slide-left-leave-to,
.vc-slide-right-enter-from,
.vc-slide-right-leave-to,
.vc-slide-up-enter-from,
.vc-slide-up-leave-to,
.vc-slide-down-enter-from,
.vc-slide-down-leave-to,
.vc-slide-fade-enter-from,
.vc-slide-fade-leave-to {
  opacity: 0;
}
.vc-slide-left-enter-from,
.vc-slide-right-leave-to,
.vc-slide-fade-enter-from.direction-left,
.vc-slide-fade-leave-to.direction-left {
  -webkit-transform: translateX(var(--slide-translate));
          transform: translateX(var(--slide-translate));
}
.vc-slide-right-enter-from,
.vc-slide-left-leave-to,
.vc-slide-fade-enter-from.direction-right,
.vc-slide-fade-leave-to.direction-right {
  -webkit-transform: translateX(calc(-1 * var(--slide-translate)));
          transform: translateX(calc(-1 * var(--slide-translate)));
}
.vc-slide-up-enter-from,
.vc-slide-down-leave-to,
.vc-slide-fade-enter-from.direction-top,
.vc-slide-fade-leave-to.direction-top {
  -webkit-transform: translateY(var(--slide-translate));
          transform: translateY(var(--slide-translate));
}
.vc-slide-down-enter-from,
.vc-slide-up-leave-to,
.vc-slide-fade-enter-from.direction-bottom,
.vc-slide-fade-leave-to.direction-bottom {
  -webkit-transform: translateY(calc(-1 * var(--slide-translate)));
          transform: translateY(calc(-1 * var(--slide-translate)));
}
`;ke(x0);jr.render=D0;var no=function(e,n){if(!e||!e.addEventListener||!ye(n))return null;var r=!1,a=!1,i=function(){return r=!0},o=function(){return r=!1},s=function(u){if(r){r=!1,a=!0,n(u);return}u.type==="click"&&!a&&n(u),a=!1};return R(e,"touchstart",i,{passive:!0}),R(e,"touchmove",o,{passive:!0}),R(e,"click",s,{passive:!0}),R(e,"touchend",s,{passive:!0}),function(){z(e,"touchstart",i),z(e,"touchmove",o),z(e,"click",s),z(e,"touchend",s)}},k0=function(e,n,r){var a=r.maxSwipeTime,i=r.minHorizontalSwipeDistance,o=r.maxVerticalSwipeDistance;if(!e||!e.addEventListener||!ye(n))return null;var s=0,l=0,u=null,c=!1;function f(v){var h=v.changedTouches[0];s=h.screenX,l=h.screenY,u=new Date().getTime(),c=!0}function d(v){if(!!c){c=!1;var h=v.changedTouches[0],m=h.screenX-s,g=h.screenY-l,y=new Date().getTime()-u;if(y<a&&Math.abs(m)>=i&&Math.abs(g)<=o){var b={toLeft:!1,toRight:!1};m<0?b.toLeft=!0:b.toRight=!0,n(b)}}}return R(e,"touchstart",f,{passive:!0}),R(e,"touchend",d,{passive:!0}),function(){z(e,"touchstart",f),z(e,"touchend",d)}},lr={name:"Popover",emits:["before-show","after-show","before-hide","after-hide"],render:function(){var e=this;return D("div",{class:["vc-popover-content-wrapper",{"is-interactive":this.isInteractive}],ref:"popover"},[D(jr,{name:this.transition,appear:!0,"on-before-enter":this.beforeEnter,"on-after-enter":this.afterEnter,"on-before-leave":this.beforeLeave,"on-after-leave":this.afterLeave},{default:function(){return e.isVisible?D("div",{tabindex:-1,class:["vc-popover-content","direction-".concat(e.direction),e.contentClass],style:e.contentStyle},[e.content,D("span",{class:["vc-popover-caret","direction-".concat(e.direction),"align-".concat(e.alignment)]})]):null}})])},props:{id:{type:String,required:!0},contentClass:String},data:function(){return{ref:null,opts:null,data:null,transition:"slide-fade",transitionTranslate:"15px",transitionDuration:"0.15s",placement:"bottom",positionFixed:!1,modifiers:[],isInteractive:!1,isHovered:!1,isFocused:!1,showDelay:0,hideDelay:110,autoHide:!1,popperEl:null}},computed:{content:function(){var e=this;return ye(this.$slots.default)&&this.$slots.default({direction:this.direction,alignment:this.alignment,data:this.data,updateLayout:this.setupPopper,hide:function(r){return e.hide(r)}})||this.$slots.default},contentStyle:function(){return{"--slide-translate":this.transitionTranslate,"--slide-duration":this.transitionDuration}},popperOptions:function(){return{placement:this.placement,strategy:this.positionFixed?"fixed":"absolute",modifiers:[{name:"onUpdate",enabled:!0,phase:"afterWrite",fn:this.onPopperUpdate}].concat(dn(this.modifiers||[])),onFirstUpdate:this.onPopperUpdate}},isVisible:function(){return!!(this.ref&&this.content)},direction:function(){return this.placement&&this.placement.split("-")[0]||"bottom"},alignment:function(){var e=this.direction==="left"||this.direction==="right",n=this.placement.split("-");return n=n.length>1?n[1]:"",["start","top","left"].includes(n)?e?"top":"left":["end","bottom","right"].includes(n)?e?"bottom":"right":e?"middle":"center"}},watch:{opts:function(e,n){n&&n.callback&&n.callback(p(p({},n),{},{completed:!e,reason:e?"Overridden by action":null}))}},mounted:function(){this.popoverEl=this.$refs.popover,this.addEvents()},beforeUnmount:function(){this.removeEvents()},methods:{addEvents:function(){R(this.popoverEl,"click",this.onClick),R(this.popoverEl,"mouseover",this.onMouseOver),R(this.popoverEl,"mouseleave",this.onMouseLeave),R(this.popoverEl,"focusin",this.onFocusIn),R(this.popoverEl,"focusout",this.onFocusOut),R(document,"keydown",this.onDocumentKeydown),this.removeDocHandler=no(document,this.onDocumentClick),R(document,"show-popover",this.onDocumentShowPopover),R(document,"hide-popover",this.onDocumentHidePopover),R(document,"toggle-popover",this.onDocumentTogglePopover),R(document,"update-popover",this.onDocumentUpdatePopover)},removeEvents:function(){z(this.popoverEl,"click",this.onClick),z(this.popoverEl,"mouseover",this.onMouseOver),z(this.popoverEl,"mouseleave",this.onMouseLeave),z(this.popoverEl,"focusin",this.onFocusIn),z(this.popoverEl,"focusout",this.onFocusOut),z(document,"keydown",this.onDocumentKeydown),this.removeDocHandler&&this.removeDocHandler(),z(document,"show-popover",this.onDocumentShowPopover),z(document,"hide-popover",this.onDocumentHidePopover),z(document,"toggle-popover",this.onDocumentTogglePopover),z(document,"update-popover",this.onDocumentUpdatePopover)},onClick:function(e){e.stopPropagation()},onMouseOver:function(){this.isHovered=!0,this.isInteractive&&this.show()},onMouseLeave:function(){this.isHovered=!1,this.autoHide&&!this.isFocused&&(!this.ref||this.ref!==document.activeElement)&&this.hide()},onFocusIn:function(){this.isFocused=!0,this.isInteractive&&this.show()},onFocusOut:function(e){(!e.relatedTarget||!St(this.popoverEl,e.relatedTarget))&&(this.isFocused=!1,!this.isHovered&&this.autoHide&&this.hide())},onDocumentClick:function(e){!this.$refs.popover||!this.ref||St(this.popoverEl,e.target)||St(this.ref,e.target)||this.hide()},onDocumentKeydown:function(e){(e.key==="Esc"||e.key==="Escape")&&this.hide()},onDocumentShowPopover:function(e){var n=e.detail;!n.id||n.id!==this.id||this.show(n)},onDocumentHidePopover:function(e){var n=e.detail;!n.id||n.id!==this.id||this.hide(n)},onDocumentTogglePopover:function(e){var n=e.detail;!n.id||n.id!==this.id||this.toggle(n)},onDocumentUpdatePopover:function(e){var n=e.detail;!n.id||n.id!==this.id||this.update(n)},show:function(){var e=this,n=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};n.action="show";var r=n.ref||this.ref,a=n.showDelay>=0?n.showDelay:this.showDelay;if(!r){n.callback&&n.callback({completed:!1,reason:"Invalid reference element provided"});return}clearTimeout(this.timeout),this.opts=n;var i=function(){Object.assign(e,nr(n,["id"])),e.setupPopper(),e.opts=null};a>0?this.timeout=setTimeout(function(){return i()},a):i()},hide:function(){var e=this,n=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};n.action="hide";var r=n.ref||this.ref,a=n.hideDelay>=0?n.hideDelay:this.hideDelay;if(!this.ref||r!==this.ref){n.callback&&n.callback(p(p({},n),{},{completed:!1,reason:this.ref?"Invalid reference element provided":"Popover already hidden"}));return}var i=function(){e.ref=null,e.opts=null};clearTimeout(this.timeout),this.opts=n,a>0?this.timeout=setTimeout(i,a):i()},toggle:function(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};this.isVisible&&e.ref===this.ref?this.hide(e):this.show(e)},update:function(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};Object.assign(this,nr(e,["id"])),this.setupPopper()},setupPopper:function(){var e=this;this.$nextTick(function(){!e.ref||!e.$refs.popover||(e.popper&&e.popper.reference!==e.ref&&e.destroyPopper(),e.popper?e.popper.update():e.popper=w0(e.ref,e.popoverEl,e.popperOptions))})},onPopperUpdate:function(e){e.placement?this.placement=e.placement:e.state&&(this.placement=e.state.placement)},beforeEnter:function(e){this.$emit("before-show",e)},afterEnter:function(e){this.$emit("after-show",e)},beforeLeave:function(e){this.$emit("before-hide",e)},afterLeave:function(e){this.destroyPopper(),this.$emit("after-hide",e)},destroyPopper:function(){this.popper&&(this.popper.destroy(),this.popper=null)}}},_0=`.vc-popover-content-wrapper {
  --popover-horizontal-content-offset: 8px;
  --popover-vertical-content-offset: 10px;
  --popover-caret-horizontal-offset: 18px;
  --popover-caret-vertical-offset: 8px;

  position: absolute;
  display: block;
  outline: none;
  z-index: 10;
}
.vc-popover-content-wrapper:not(.is-interactive) {
    pointer-events: none;
}
.vc-popover-content {
  position: relative;
  outline: none;
  z-index: 10;
  box-shadow: var(--shadow-lg);
}
.vc-popover-content.direction-bottom {
    margin-top: var(--popover-vertical-content-offset);
}
.vc-popover-content.direction-top {
    margin-bottom: var(--popover-vertical-content-offset);
}
.vc-popover-content.direction-left {
    margin-right: var(--popover-horizontal-content-offset);
}
.vc-popover-content.direction-right {
    margin-left: var(--popover-horizontal-content-offset);
}
.vc-popover-caret {
  content: '';
  position: absolute;
  display: block;
  width: 12px;
  height: 12px;
  border-top: inherit;
  border-left: inherit;
  background-color: inherit;
  z-index: -1;
}
.vc-popover-caret.direction-bottom {
    top: 0;
}
.vc-popover-caret.direction-bottom.align-left {
      -webkit-transform: translateY(-50%) rotate(45deg);
              transform: translateY(-50%) rotate(45deg);
}
.vc-popover-caret.direction-bottom.align-center {
      -webkit-transform: translateX(-50%) translateY(-50%) rotate(45deg);
              transform: translateX(-50%) translateY(-50%) rotate(45deg);
}
.vc-popover-caret.direction-bottom.align-right {
      -webkit-transform: translateY(-50%) rotate(45deg);
              transform: translateY(-50%) rotate(45deg);
}
.vc-popover-caret.direction-top {
    top: 100%;
}
.vc-popover-caret.direction-top.align-left {
      -webkit-transform: translateY(-50%) rotate(-135deg);
              transform: translateY(-50%) rotate(-135deg);
}
.vc-popover-caret.direction-top.align-center {
      -webkit-transform: translateX(-50%) translateY(-50%) rotate(-135deg);
              transform: translateX(-50%) translateY(-50%) rotate(-135deg);
}
.vc-popover-caret.direction-top.align-right {
      -webkit-transform: translateY(-50%) rotate(-135deg);
              transform: translateY(-50%) rotate(-135deg);
}
.vc-popover-caret.direction-left {
    left: 100%;
}
.vc-popover-caret.direction-left.align-top {
      -webkit-transform: translateX(-50%) rotate(135deg);
              transform: translateX(-50%) rotate(135deg);
}
.vc-popover-caret.direction-left.align-middle {
      -webkit-transform: translateY(-50%) translateX(-50%) rotate(135deg);
              transform: translateY(-50%) translateX(-50%) rotate(135deg);
}
.vc-popover-caret.direction-left.align-bottom {
      -webkit-transform: translateX(-50%) rotate(135deg);
              transform: translateX(-50%) rotate(135deg);
}
.vc-popover-caret.direction-right {
    left: 0;
}
.vc-popover-caret.direction-right.align-top {
      -webkit-transform: translateX(-50%) rotate(-45deg);
              transform: translateX(-50%) rotate(-45deg);
}
.vc-popover-caret.direction-right.align-middle {
      -webkit-transform: translateY(-50%) translateX(-50%) rotate(-45deg);
              transform: translateY(-50%) translateX(-50%) rotate(-45deg);
}
.vc-popover-caret.direction-right.align-bottom {
      -webkit-transform: translateX(-50%) rotate(-45deg);
              transform: translateX(-50%) rotate(-45deg);
}
.vc-popover-caret.align-left {
    left: var(--popover-caret-horizontal-offset);
}
.vc-popover-caret.align-center {
    left: 50%;
}
.vc-popover-caret.align-right {
    right: var(--popover-caret-horizontal-offset);
}
.vc-popover-caret.align-top {
    top: var(--popover-caret-vertical-offset);
}
.vc-popover-caret.align-middle {
    top: 50%;
}
.vc-popover-caret.align-bottom {
    bottom: var(--popover-caret-vertical-offset);
}
`;ke(_0);var ro={name:"PopoverRow",mixins:[$n],props:{attribute:Object},computed:{indicator:function(){var e=this.attribute,n=e.highlight,r=e.dot,a=e.bar,i=e.popover;if(i&&i.hideIndicator)return null;if(n){var o=n.start,s=o.color,l=o.isDark;return{style:p(p({},this.theme.bgAccentHigh({color:s,isDark:!l})),{},{width:"10px",height:"5px",borderRadius:"3px"})}}if(r){var u=r.start,c=u.color,f=u.isDark;return{style:p(p({},this.theme.bgAccentHigh({color:c,isDark:!f})),{},{width:"5px",height:"5px",borderRadius:"50%"})}}if(a){var d=a.start,v=d.color,h=d.isDark;return{style:p(p({},this.theme.bgAccentHigh({color:v,isDark:!h})),{},{width:"10px",height:"3px"})}}return null}}},M0={class:"vc-day-popover-row"},P0={key:0,class:"vc-day-popover-row-indicator"},T0={class:"vc-day-popover-row-content"};function O0(t,e,n,r,a,i){return M(),N("div",M0,[i.indicator?(M(),N("div",P0,[x("span",{style:i.indicator.style,class:i.indicator.class},null,6)])):$e("",!0),x("div",T0,[Ge(t.$slots,"default",{},function(){return[Ua(Z(n.attribute.popover?n.attribute.popover.label:"No content provided"),1)]})])])}var S0=`.vc-day-popover-row {
  --day-content-transition-time: 0.13s ease-in;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  -webkit-align-items: center;
      -ms-flex-align: center;
          align-items: center;
  transition: all var(--day-content-transition-time);
}
.vc-day-popover-row:not(:first-child) {
    margin-top: 3px;
}
.vc-day-popover-row-indicator {
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  -webkit-justify-content: center;
      -ms-flex-pack: center;
          justify-content: center;
  -webkit-align-items: center;
      -ms-flex-align: center;
          align-items: center;
  -webkit-flex-grow: 0;
      -ms-flex-positive: 0;
          flex-grow: 0;
  width: 15px;
  margin-right: 3px;
}
.vc-day-popover-row-indicator span {
    transition: all var(--day-content-transition-time);
}
.vc-day-popover-row-content {
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  -webkit-align-items: center;
      -ms-flex-align: center;
          align-items: center;
  -webkit-flex-wrap: none;
      -ms-flex-wrap: none;
          flex-wrap: none;
  -webkit-flex-grow: 1;
      -ms-flex-positive: 1;
          flex-grow: 1;
  width: -webkit-max-content;
  width: max-content;
}
`;ke(S0);ro.render=O0;function ur(t,e){H(2,arguments);var n=Ce(t),r=we(e);if(isNaN(r))return new Date(NaN);if(!r)return n;var a=n.getDate(),i=new Date(n.getTime());i.setMonth(n.getMonth()+r+1,0);var o=i.getDate();return a>=o?i:(n.setFullYear(i.getFullYear(),i.getMonth(),a),n)}function Va(t,e){H(2,arguments);var n=we(e);return ur(t,n*12)}var I0=function(){function t(e,n,r){Wt(this,t),this.theme=e,this.locale=n,this.map={},this.refresh(r,!0)}return Ht(t,[{key:"refresh",value:function(n,r){var a=this,i={},o=[],s=null,l=[],u=r?new Set:new Set(Object.keys(this.map));return ge(n)&&n.forEach(function(c,f){if(!(!c||!c.dates)){var d=c.key?c.key.toString():f.toString(),v=c.order||0,h=dp(JSON.stringify(c)),m=a.map[d];!r&&m&&m.hashcode===h?u.delete(d):(m=new Vi(p({key:d,order:v,hashcode:h},c),a.theme,a.locale),l.push(m)),m&&m.pinPage&&(s=m),i[d]=m,o.push(m)}}),this.map=i,this.list=o,this.pinAttr=s,{adds:l,deletes:Array.from(u)}}}]),t}(),$0={name:"Calendar",emits:["dayfocusin","dayfocusout","transition-start","transition-end","update:from-page","update:to-page"],render:function(){var e=this,n=this.pages.map(function(o,s){var l=s+1,u=Math.ceil((s+1)/e.columns),c=e.rows-u+1,f=l%e.columns||e.columns,d=e.columns-f+1;return D(ig,p(p({},e.$attrs),{},{key:o.key,attributes:e.store,page:o,position:l,row:u,rowFromEnd:c,column:f,columnFromEnd:d,titlePosition:e.titlePosition,canMove:e.canMove,"onUpdate:page":function(h){return e.move(h,{position:s+1})},onDayfocusin:function(h){e.lastFocusedDay=h,e.$emit("dayfocusin",h)},onDayfocusout:function(h){e.lastFocusedDay=null,e.$emit("dayfocusout",h)}}),e.$slots)}),r=function(s){var l=function(){return e.move(s?-e.step_:e.step_)},u=function(d){return Ri(d,l)},c=s?!e.canMovePrev:!e.canMoveNext;return D("div",{class:["vc-arrow","is-".concat(s?"left":"right"),{"is-disabled":c}],role:"button",onClick:l,onKeydown:u},[(s?e.safeSlot("header-left-button",{click:l}):e.safeSlot("header-right-button",{click:l}))||D(Ir,{name:s?"left-arrow":"right-arrow"})])},a=function(){return D(lr,{id:e.sharedState.navPopoverId,contentClass:"vc-nav-popover-container",ref:"navPopover"},{default:function(l){var u=l.data,c=u.position,f=u.page;return D(Ui,{value:f,position:c,validator:function(v){return e.canMove(v,{position:c})},onInput:function(v){return e.move(v)}},p({},e.$slots))}})},i=function(){return D(lr,{id:e.sharedState.dayPopoverId,contentClass:"vc-day-popover-container"},{default:function(l){var u=l.data,c=l.updateLayout,f=l.hide,d=Object.values(u.attributes).filter(function(g){return g.popover}),v=e.$locale.masks,h=e.formatDate,m=h(u.date,v.dayPopover);return e.safeSlot("day-popover",{day:u,attributes:d,masks:v,format:h,dayTitle:m,updateLayout:c,hide:f},D("div",[v.dayPopover&&D("div",{class:["vc-day-popover-header"]},[m]),d.map(function(g){return D(ro,{key:g.key,attribute:g})})]))}})};return D("div",{"data-helptext":"Press the arrow keys to navigate by day, Home and End to navigate to week ends, PageUp and PageDown to navigate by month, Alt+PageUp and Alt+PageDown to navigate by year",class:["vc-container","vc-".concat(this.$theme.color),{"vc-is-expanded":this.isExpanded,"vc-is-dark":this.$theme.isDark}],onKeydown:this.handleKeydown,onMouseup:function(s){return s.preventDefault()},ref:"container"},[a(),D("div",{class:["vc-pane-container",{"in-transition":this.inTransition}]},[D(jr,{name:this.transitionName,"on-before-enter":function(){e.inTransition=!0},"on-after-enter":function(){e.inTransition=!1}},{default:function(){return D("div",p(p({},e.$attrs),{},{class:"vc-pane-layout",style:{gridTemplateColumns:"repeat(".concat(e.columns,", 1fr)")},key:e.firstPage?e.firstPage.key:""}),n)}}),D("div",{class:["vc-arrows-container title-".concat(this.titlePosition)]},[r(!0),r(!1)]),this.$slots.footer&&this.$slots.footer()]),i()])},mixins:[Wi,Sr],provide:function(){return{sharedState:this.sharedState}},props:{rows:{type:Number,default:1},columns:{type:Number,default:1},step:Number,titlePosition:{type:String,default:je("titlePosition")},isExpanded:Boolean,fromDate:Date,toDate:Date,fromPage:Object,toPage:Object,minPage:Object,maxPage:Object,transition:String,attributes:[Object,Array],trimWeeks:Boolean,disablePageSwipe:Boolean},data:function(){return{pages:[],store:null,lastFocusedDay:null,focusableDay:new Date().getDate(),transitionName:"",inTransition:!1,sharedState:{navPopoverId:mn(),dayPopoverId:mn(),theme:{},masks:{},locale:{}}}},computed:{firstPage:function(){return Bi(this.pages)},lastPage:function(){return jt(this.pages)},minPage_:function(){return this.minPage||this.pageForDate(this.minDate)},maxPage_:function(){return this.maxPage||this.pageForDate(this.maxDate)},count:function(){return this.rows*this.columns},step_:function(){return this.step||this.count},canMovePrev:function(){return this.canMove(-this.step_)},canMoveNext:function(){return this.canMove(this.step_)}},watch:{$locale:function(){this.refreshLocale(),this.refreshPages({page:this.firstPage,ignoreCache:!0}),this.initStore()},$theme:function(){this.refreshTheme(),this.initStore()},fromDate:function(){this.refreshPages()},fromPage:function(e){var n=this.pages&&this.pages[0];jn(e,n)||this.refreshPages()},toPage:function(e){var n=this.pages&&this.pages[this.pages.length-1];jn(e,n)||this.refreshPages()},count:function(){this.refreshPages()},attributes:function(e){var n=this.store.refresh(e),r=n.adds,a=n.deletes;this.refreshAttrs(this.pages,r,a)},pages:function(e){this.refreshAttrs(e,this.store.list,null,!0)},disabledAttribute:function(){this.refreshDisabledDays()},lastFocusedDay:function(e){e&&(this.focusableDay=e.day,this.refreshFocusableDays())},inTransition:function(e){e?this.$emit("transition-start"):(this.$emit("transition-end"),this.transitionPromise&&(this.transitionPromise.resolve(!0),this.transitionPromise=null))}},created:function(){this.refreshLocale(),this.refreshTheme(),this.initStore(),this.refreshPages()},mounted:function(){var e=this;this.disablePageSwipe||(this.removeHandlers=k0(this.$refs.container,function(n){var r=n.toLeft,a=n.toRight;r?e.moveNext():a&&e.movePrev()},je("touch")))},beforeUnmount:function(){this.removeHandlers&&this.removeHandlers()},methods:{refreshLocale:function(){this.sharedState.locale=this.$locale,this.sharedState.masks=this.$locale.masks},refreshTheme:function(){this.sharedState.theme=this.$theme},canMove:function(e){var n=this,r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},a=this.firstPage&&this.$locale.toPage(e,this.firstPage);if(!a)return!1;var i=r.position;if(It(e)&&(i=1),!i)if(Pt(a,this.firstPage))i=-1;else if(Ot(a,this.lastPage))i=1;else return!0;return Object.assign(r,this.getTargetPageRange(a,{position:i,force:!0})),fp(r.fromPage,r.toPage).some(function(o){return Li(o,n.minPage_,n.maxPage_)})},movePrev:function(e){return this.move(-this.step_,e)},moveNext:function(e){return this.move(this.step_,e)},move:function(e){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=this.canMove(e,n);return!n.force&&!r?Promise.reject(new Error("Move target is disabled: ".concat(JSON.stringify(n)))):(this.$refs.navPopover.hide({hideDelay:0}),n.fromPage&&!jn(n.fromPage,this.firstPage)?this.refreshPages(p(p({},n),{},{page:n.fromPage,position:1,force:!0})):Promise.resolve(!0))},focusDate:function(e){var n=this,r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};return this.move(e,r).then(function(){var a=n.$el.querySelector(".id-".concat(n.$locale.getDayId(e),".in-month .vc-focusable"));return a?(a.focus(),Promise.resolve(!0)):Promise.resolve(!1)})},showPageRange:function(e,n){var r,a;if(Ne(e))r=this.pageForDate(e);else if(ue(e)){var i=e.month,o=e.year,s=e.from,l=e.to;It(i)&&It(o)?r=e:(s||l)&&(r=Ne(s)?this.pageForDate(s):s,a=Ne(l)?this.pageForDate(l):l)}else return Promise.reject(new Error("Invalid page range provided."));var u=this.lastPage,c=r;return Ot(a,u)&&(c=Oe(a,-(this.pages.length-1))),Pt(c,r)&&(c=r),this.refreshPages(p(p({},n),{},{page:c}))},getTargetPageRange:function(e){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=n.position,a=n.force,i=null,o=null;if(Q(e)){var s=0;r=+r,isNaN(r)||(s=r>0?1-r:-(this.count+r)),i=Oe(e,s)}else i=this.getDefaultInitialPage();return o=Oe(i,this.count-1),a||(Pt(i,this.minPage_)?i=this.minPage_:Ot(o,this.maxPage_)&&(i=Oe(this.maxPage_,1-this.count)),o=Oe(i,this.count-1)),{fromPage:i,toPage:o}},getDefaultInitialPage:function(){var e=this.fromPage||this.pageForDate(this.fromDate);if(!Q(e)){var n=this.toPage||this.pageForDate(this.toPage);Q(n)&&(e=Oe(n,1-this.count))}return Q(e)||(e=this.getPageForAttributes()),Q(e)||(e=this.pageForThisMonth()),e},refreshPages:function(){var e=this,n=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},r=n.page,a=n.position,i=a===void 0?1:a,o=n.force,s=n.transition,l=n.ignoreCache;return new Promise(function(u,c){for(var f=e.getTargetPageRange(r,{position:i,force:o}),d=f.fromPage,v=f.toPage,h=[],m=0;m<e.count;m++)h.push(e.buildPage(Oe(d,m),l));e.refreshDisabledDays(h),e.refreshFocusableDays(h),e.transitionName=e.getPageTransition(e.pages[0],h[0],s),e.pages=h,e.$emit("update:from-page",d),e.$emit("update:to-page",v),e.transitionName&&e.transitionName!=="none"?e.transitionPromise={resolve:u,reject:c}:u(!0)})},refreshDisabledDays:function(e){var n=this;this.getPageDays(e).forEach(function(r){r.isDisabled=!!n.disabledAttribute&&n.disabledAttribute.intersectsDay(r)})},refreshFocusableDays:function(e){var n=this;this.getPageDays(e).forEach(function(r){r.isFocusable=r.inMonth&&r.day===n.focusableDay})},getPageDays:function(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:this.pages;return e.reduce(function(n,r){return n.concat(r.days)},[])},getPageTransition:function(e,n){var r=arguments.length>2&&arguments[2]!==void 0?arguments[2]:this.transition;if(r==="none")return r;if(r==="fade"||!r&&this.count>1||!Q(e)||!Q(n))return"fade";var a=Pt(n,e);return r==="slide-v"?a?"slide-down":"slide-up":a?"slide-right":"slide-left"},getPageForAttributes:function(){var e=null,n=this.store.pinAttr;if(n&&n.hasDates){var r=an(n.dates,1),a=r[0];a=a.start||a.date,e=this.pageForDate(a)}return e},buildPage:function(e,n){var r=this,a=e.month,i=e.year,o="".concat(i.toString(),"-").concat(a.toString()),s=this.pages.find(function(d){return d.key===o});if(!s||n){var l=new Date(i,a-1,15),u=this.$locale.getMonthComps(a,i),c=this.$locale.getPrevMonthComps(a,i),f=this.$locale.getNextMonthComps(a,i);s={key:o,month:a,year:i,weeks:this.trimWeeks?u.weeks:6,title:this.$locale.format(l,this.$locale.masks.title),shortMonthLabel:this.$locale.format(l,"MMM"),monthLabel:this.$locale.format(l,"MMMM"),shortYearLabel:i.toString().substring(2),yearLabel:i.toString(),monthComps:u,prevMonthComps:c,nextMonthComps:f,canMove:function(v){return r.canMove(v)},move:function(v){return r.move(v)},moveThisMonth:function(){return r.moveThisMonth()},movePrevMonth:function(){return r.move(c)},moveNextMonth:function(){return r.move(f)},refresh:!0},s.days=this.$locale.getCalendarDays(s)}return s},initStore:function(){this.store=new I0(this.$theme,this.$locale,this.attributes),this.refreshAttrs(this.pages,this.store.list,[],!0)},refreshAttrs:function(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:[],n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:[],r=arguments.length>2&&arguments[2]!==void 0?arguments[2]:[],a=arguments.length>3?arguments[3]:void 0;!ge(e)||e.forEach(function(i){i.days.forEach(function(o){var s=!1,l={};a?s=!0:rr(o.attributesMap,r)?(l=nr(o.attributesMap,r),s=!0):l=o.attributesMap||{},n.forEach(function(u){var c=u.intersectsDay(o);if(c){var f=p(p({},u),{},{targetDate:c});l[u.key]=f,s=!0}}),s&&(o.attributesMap=l,o.shouldRefresh=!0)})})},handleKeydown:function(e){var n=this.lastFocusedDay;n!=null&&(n.event=e,this.handleDayKeydown(n))},handleDayKeydown:function(e){var n=e.dateFromTime,r=e.event,a=n(12),i=null;switch(r.key){case"ArrowLeft":{i=me(a,-1);break}case"ArrowRight":{i=me(a,1);break}case"ArrowUp":{i=me(a,-7);break}case"ArrowDown":{i=me(a,7);break}case"Home":{i=me(a,-e.weekdayPosition+1);break}case"End":{i=me(a,e.weekdayPositionFromEnd);break}case"PageUp":{r.altKey?i=Va(a,-1):i=ur(a,-1);break}case"PageDown":{r.altKey?i=Va(a,1):i=ur(a,1);break}}i&&(r.preventDefault(),this.focusDate(i).catch())}}},E0=`.vc-container {
  --white: #ffffff;
  --black: #000000;

  --gray-100: #f7fafc;
  --gray-200: #edf2f7;
  --gray-300: #e2e8f0;
  --gray-400: #cbd5e0;
  --gray-500: #a0aec0;
  --gray-600: #718096;
  --gray-700: #4a5568;
  --gray-800: #2d3748;
  --gray-900: #1a202c;

  --red-100: #fff5f5;
  --red-200: #fed7d7;
  --red-300: #feb2b2;
  --red-400: #fc8181;
  --red-500: #f56565;
  --red-600: #e53e3e;
  --red-700: #c53030;
  --red-800: #9b2c2c;
  --red-900: #742a2a;

  --orange-100: #fffaf0;
  --orange-200: #feebc8;
  --orange-300: #fbd38d;
  --orange-400: #f6ad55;
  --orange-500: #ed8936;
  --orange-600: #dd6b20;
  --orange-700: #c05621;
  --orange-800: #9c4221;
  --orange-900: #7b341e;

  --yellow-100: #fffff0;
  --yellow-200: #fefcbf;
  --yellow-300: #faf089;
  --yellow-400: #f6e05e;
  --yellow-500: #ecc94b;
  --yellow-600: #d69e2e;
  --yellow-700: #b7791f;
  --yellow-800: #975a16;
  --yellow-900: #744210;

  --green-100: #f0fff4;
  --green-200: #c6f6d5;
  --green-300: #9ae6b4;
  --green-400: #68d391;
  --green-500: #48bb78;
  --green-600: #38a169;
  --green-700: #2f855a;
  --green-800: #276749;
  --green-900: #22543d;

  --teal-100: #e6fffa;
  --teal-200: #b2f5ea;
  --teal-300: #81e6d9;
  --teal-400: #4fd1c5;
  --teal-500: #38b2ac;
  --teal-600: #319795;
  --teal-700: #2c7a7b;
  --teal-800: #285e61;
  --teal-900: #234e52;

  --blue-100: #ebf8ff;
  --blue-200: #bee3f8;
  --blue-300: #90cdf4;
  --blue-400: #63b3ed;
  --blue-500: #4299e1;
  --blue-600: #3182ce;
  --blue-700: #2b6cb0;
  --blue-800: #2c5282;
  --blue-900: #2a4365;

  --indigo-100: #ebf4ff;
  --indigo-200: #c3dafe;
  --indigo-300: #a3bffa;
  --indigo-400: #7f9cf5;
  --indigo-500: #667eea;
  --indigo-600: #5a67d8;
  --indigo-700: #4c51bf;
  --indigo-800: #434190;
  --indigo-900: #3c366b;

  --purple-100: #faf5ff;
  --purple-200: #e9d8fd;
  --purple-300: #d6bcfa;
  --purple-400: #b794f4;
  --purple-500: #9f7aea;
  --purple-600: #805ad5;
  --purple-700: #6b46c1;
  --purple-800: #553c9a;
  --purple-900: #44337a;

  --pink-100: #fff5f7;
  --pink-200: #fed7e2;
  --pink-300: #fbb6ce;
  --pink-400: #f687b3;
  --pink-500: #ed64a6;
  --pink-600: #d53f8c;
  --pink-700: #b83280;
  --pink-800: #97266d;
  --pink-900: #702459;
}
.vc-container.vc-red {
    --accent-100: var(--red-100);
    --accent-200: var(--red-200);
    --accent-300: var(--red-300);
    --accent-400: var(--red-400);
    --accent-500: var(--red-500);
    --accent-600: var(--red-600);
    --accent-700: var(--red-700);
    --accent-800: var(--red-800);
    --accent-900: var(--red-900);
}
.vc-container.vc-orange {
    --accent-100: var(--orange-100);
    --accent-200: var(--orange-200);
    --accent-300: var(--orange-300);
    --accent-400: var(--orange-400);
    --accent-500: var(--orange-500);
    --accent-600: var(--orange-600);
    --accent-700: var(--orange-700);
    --accent-800: var(--orange-800);
    --accent-900: var(--orange-900);
}
.vc-container.vc-yellow {
    --accent-100: var(--yellow-100);
    --accent-200: var(--yellow-200);
    --accent-300: var(--yellow-300);
    --accent-400: var(--yellow-400);
    --accent-500: var(--yellow-500);
    --accent-600: var(--yellow-600);
    --accent-700: var(--yellow-700);
    --accent-800: var(--yellow-800);
    --accent-900: var(--yellow-900);
}
.vc-container.vc-green {
    --accent-100: var(--green-100);
    --accent-200: var(--green-200);
    --accent-300: var(--green-300);
    --accent-400: var(--green-400);
    --accent-500: var(--green-500);
    --accent-600: var(--green-600);
    --accent-700: var(--green-700);
    --accent-800: var(--green-800);
    --accent-900: var(--green-900);
}
.vc-container.vc-teal {
    --accent-100: var(--teal-100);
    --accent-200: var(--teal-200);
    --accent-300: var(--teal-300);
    --accent-400: var(--teal-400);
    --accent-500: var(--teal-500);
    --accent-600: var(--teal-600);
    --accent-700: var(--teal-700);
    --accent-800: var(--teal-800);
    --accent-900: var(--teal-900);
}
.vc-container.vc-blue {
    --accent-100: var(--blue-100);
    --accent-200: var(--blue-200);
    --accent-300: var(--blue-300);
    --accent-400: var(--blue-400);
    --accent-500: var(--blue-500);
    --accent-600: var(--blue-600);
    --accent-700: var(--blue-700);
    --accent-800: var(--blue-800);
    --accent-900: var(--blue-900);
}
.vc-container.vc-indigo {
    --accent-100: var(--indigo-100);
    --accent-200: var(--indigo-200);
    --accent-300: var(--indigo-300);
    --accent-400: var(--indigo-400);
    --accent-500: var(--indigo-500);
    --accent-600: var(--indigo-600);
    --accent-700: var(--indigo-700);
    --accent-800: var(--indigo-800);
    --accent-900: var(--indigo-900);
}
.vc-container.vc-purple {
    --accent-100: var(--purple-100);
    --accent-200: var(--purple-200);
    --accent-300: var(--purple-300);
    --accent-400: var(--purple-400);
    --accent-500: var(--purple-500);
    --accent-600: var(--purple-600);
    --accent-700: var(--purple-700);
    --accent-800: var(--purple-800);
    --accent-900: var(--purple-900);
}
.vc-container.vc-pink {
    --accent-100: var(--pink-100);
    --accent-200: var(--pink-200);
    --accent-300: var(--pink-300);
    --accent-400: var(--pink-400);
    --accent-500: var(--pink-500);
    --accent-600: var(--pink-600);
    --accent-700: var(--pink-700);
    --accent-800: var(--pink-800);
    --accent-900: var(--pink-900);
}
.vc-container {

  --font-normal: 400;
  --font-medium: 500;
  --font-semibold: 600;
  --font-bold: 700;

  --text-xs: 12px;
  --text-sm: 14px;
  --text-base: 16px;
  --text-lg: 18px;

  --leading-snug: 1.375;

  --rounded: 0.25rem;
  --rounded-lg: 0.5rem;
  --rounded-full: 9999px;

  --shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06);
  --shadow-lg: 0 10px 15px -3px rgba(0, 0, 0, 0.1),
    0 4px 6px -2px rgba(0, 0, 0, 0.05);
  --shadow-inner: inset 0 2px 4px 0 rgba(0, 0, 0, 0.06);

  --slide-translate: 22px;
  --slide-duration: 0.15s;
  --slide-timing: ease;

  --day-content-transition-time: 0.13s ease-in;
  --weeknumber-offset: -34px;

  position: relative;
  display: -webkit-inline-flex;
  display: -ms-inline-flexbox;
  display: inline-flex;
  width: -webkit-max-content;
  width: max-content;
  height: -webkit-max-content;
  height: max-content;
  font-family: BlinkMacSystemFont, -apple-system, 'Segoe UI', 'Roboto', 'Oxygen',
    'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
    'Helvetica', 'Arial', sans-serif;
  color: var(--gray-900);
  background-color: var(--white);
  border: 1px solid;
  border-color: var(--gray-400);
  border-radius: var(--rounded-lg);
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  -webkit-tap-highlight-color: transparent;
}
.vc-container,
  .vc-container * {
    box-sizing: border-box;
}
.vc-container:focus, .vc-container *:focus {
      outline: none;
}
.vc-container button,
  .vc-container [role='button'] {
    cursor: pointer;
}
.vc-container.vc-is-expanded {
    min-width: 100%;
}
/* Hides double border within popovers */
.vc-container .vc-container {
    border: none;
}
.vc-container.vc-is-dark {
    color: var(--gray-100);
    background-color: var(--gray-900);
    border-color: var(--gray-700);
}
.vc-pane-container {
  width: 100%;
  position: relative;
}
.vc-pane-container.in-transition {
    overflow: hidden;
}
.vc-pane-layout {
  display: grid;
}
.vc-arrow {
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  -webkit-justify-content: center;
      -ms-flex-pack: center;
          justify-content: center;
  -webkit-align-items: center;
      -ms-flex-align: center;
          align-items: center;
  cursor: pointer;
  -webkit-user-select: none;
      -ms-user-select: none;
          user-select: none;
  pointer-events: auto;
  color: var(--gray-600);
  border-width: 2px;
  border-style: solid;
  border-radius: var(--rounded);
  border-color: transparent;
}
.vc-arrow:hover {
    background: var(--gray-200);
}
.vc-arrow:focus {
    border-color: var(--gray-300);
}
.vc-arrow.is-disabled {
    opacity: 0.25;
    pointer-events: none;
    cursor: not-allowed;
}
.vc-day-popover-container {
  color: var(--white);
  background-color: var(--gray-800);
  border: 1px solid;
  border-color: var(--gray-700);
  border-radius: var(--rounded);
  font-size: var(--text-xs);
  font-weight: var(--font-medium);
  padding: 4px 8px;
  box-shadow: var(--shadow);
}
.vc-day-popover-header {
  font-size: var(--text-xs);
  color: var(--gray-300);
  font-weight: var(--font-semibold);
  text-align: center;
}
.vc-arrows-container {
  width: 100%;
  position: absolute;
  top: 0;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  -webkit-justify-content: space-between;
      -ms-flex-pack: justify;
          justify-content: space-between;
  padding: 8px 10px;
  pointer-events: none;
}
.vc-arrows-container.title-left {
    -webkit-justify-content: flex-end;
        -ms-flex-pack: end;
            justify-content: flex-end;
}
.vc-arrows-container.title-right {
    -webkit-justify-content: flex-start;
        -ms-flex-pack: start;
            justify-content: flex-start;
}
.vc-is-dark .vc-arrow {
    color: var(--white);
}
.vc-is-dark .vc-arrow:hover {
      background: var(--gray-800);
}
.vc-is-dark .vc-arrow:focus {
      border-color: var(--gray-700);
}
.vc-is-dark .vc-day-popover-container {
    color: var(--gray-800);
    background-color: var(--white);
    border-color: var(--gray-100);
}
.vc-is-dark .vc-day-popover-header {
    color: var(--gray-700);
}
`;ke(E0);var ao={inheritAttrs:!1,emits:["update:modelValue"],props:{options:Array,modelValue:null}},C0={class:"vc-select"},Y0=x("div",{class:"vc-select-arrow"},[x("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20"},[x("path",{d:"M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"})])],-1);function A0(t,e,n,r,a,i){return M(),N("div",C0,[x("select",Un(t.$attrs,{value:n.modelValue,onChange:e[1]||(e[1]=function(o){return t.$emit("update:modelValue",o.target.value)})}),[(M(!0),N(lt,null,ut(n.options,function(o){return M(),N("option",{key:o.value,value:o.value,disabled:o.disabled},Z(o.label),9,["value","disabled"])}),128))],16,["value"]),Y0])}var F0=`.vc-select {
  position: relative;
}
.vc-select select {
    -webkit-flex-grow: 1;
        -ms-flex-positive: 1;
            flex-grow: 1;
    display: block;
    -webkit-appearance: none;
            appearance: none;
    width: 52px;
    height: 30px;
    font-size: var(--text-base);
    font-weight: var(--font-medium);
    text-align: left;
    background-color: var(--gray-200);
    border: 2px solid;
    border-color: var(--gray-200);
    color: var(--gray-900);
    padding: 0 20px 0 8px;
    border-radius: var(--rounded);
    line-height: var(--leading-tight);
    text-indent: 0px;
    cursor: pointer;
    -moz-padding-start: 3px;
}
.vc-select select:hover {
      color: var(--gray-600);
}
.vc-select select:focus {
      outline: 0;
      border-color: var(--accent-400);
      background-color: var(--white);
}
.vc-select-arrow {
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  -webkit-align-items: center;
      -ms-flex-align: center;
          align-items: center;
  pointer-events: none;
  position: absolute;
  top: 0;
  bottom: 0;
  right: 0;
  padding: 0 4px 0 0;
  color: var(--gray-500);
}
.vc-select-arrow svg {
    width: 16px;
    height: 16px;
    fill: currentColor;
}
.vc-is-dark select {
    background: var(--gray-700);
    color: var(--gray-100);
    border-color: var(--gray-700);
}
.vc-is-dark select:hover {
      color: var(--gray-400);
}
.vc-is-dark select:focus {
      border-color: var(--accent-500);
      background-color: var(--gray-800);
}
`;ke(F0);ao.render=A0;var Lr={name:"TimePicker",components:{TimeSelect:ao},emits:["update:modelValue"],props:{modelValue:{type:Object,required:!0},locale:{type:Object,required:!0},theme:{type:Object,required:!0},is24hr:{type:Boolean,default:!0},minuteIncrement:{type:Number,default:1},showBorder:Boolean},data:function(){return{hours:0,minutes:0,isAM:!0}},computed:{date:function(){var e=this.locale.normalizeDate(this.modelValue);return this.modelValue.hours===24&&(e=new Date(e.getTime()-1)),e},hourOptions:function(){var e=[{value:0,label:"12"},{value:1,label:"1"},{value:2,label:"2"},{value:3,label:"3"},{value:4,label:"4"},{value:5,label:"5"},{value:6,label:"6"},{value:7,label:"7"},{value:8,label:"8"},{value:9,label:"9"},{value:10,label:"10"},{value:11,label:"11"}],n=[{value:0,label:"00"},{value:1,label:"01"},{value:2,label:"02"},{value:3,label:"03"},{value:4,label:"04"},{value:5,label:"05"},{value:6,label:"06"},{value:7,label:"07"},{value:8,label:"08"},{value:9,label:"09"},{value:10,label:"10"},{value:11,label:"11"},{value:12,label:"12"},{value:13,label:"13"},{value:14,label:"14"},{value:15,label:"15"},{value:16,label:"16"},{value:17,label:"17"},{value:18,label:"18"},{value:19,label:"19"},{value:20,label:"20"},{value:21,label:"21"},{value:22,label:"22"},{value:23,label:"23"}];return this.is24hr?n:e},minuteOptions:function(){for(var e=[],n=0,r=!1;n<=59;)e.push({value:n,label:O(n,2)}),r=r||n===this.minutes,n+=this.minuteIncrement,!r&&n>this.minutes&&(r=!0,e.push({value:this.minutes,label:O(this.minutes,2),disabled:!0}));return e}},watch:{modelValue:function(){this.setup()},hours:function(){this.updateValue()},minutes:function(){this.updateValue()},isAM:function(){this.updateValue()}},created:function(){this.setup()},methods:{protected:function(e){var n=this;this.busy||(this.busy=!0,e(),this.$nextTick(function(){return n.busy=!1}))},setup:function(){var e=this;this.protected(function(){var n=e.modelValue.hours;n===24&&(n=0);var r=!0;!e.is24hr&&n>=12&&(n-=12,r=!1),e.hours=n,e.minutes=e.modelValue.minutes,e.isAM=r})},updateValue:function(){var e=this;this.protected(function(){var n=e.hours;!e.is24hr&&!e.isAM&&(n+=12),e.$emit("update:modelValue",p(p({},e.modelValue),{},{hours:n,minutes:e.minutes,seconds:0,milliseconds:0}))})}}},N0=po();vo("data-v-63f66eaa");var j0=x("div",null,[x("svg",{fill:"none","stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",viewBox:"0 0 24 24",class:"vc-time-icon",stroke:"currentColor"},[x("path",{d:"M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"})])],-1),L0={class:"vc-time-content"},R0={key:0,class:"vc-time-date"},z0={class:"vc-time-weekday"},V0={class:"vc-time-month"},W0={class:"vc-time-day"},H0={class:"vc-time-year"},B0={class:"vc-time-select"},U0=x("span",{style:{margin:"0 4px"}},":",-1),G0={key:0,class:"vc-am-pm"};ho();var K0=N0(function(e,n,r,a,i,o){var s=Ga("time-select");return M(),N("div",{class:["vc-time-picker",[{"vc-invalid":!r.modelValue.isValid,"vc-bordered":r.showBorder}]]},[j0,x("div",L0,[o.date?(M(),N("div",R0,[x("span",z0,Z(r.locale.format(o.date,"WWW")),1),x("span",V0,Z(r.locale.format(o.date,"MMM")),1),x("span",W0,Z(r.locale.format(o.date,"D")),1),x("span",H0,Z(r.locale.format(o.date,"YYYY")),1)])):$e("",!0),x("div",B0,[x(s,{modelValue:i.hours,"onUpdate:modelValue":n[1]||(n[1]=function(l){return i.hours=l}),modelModifiers:{number:!0},options:o.hourOptions},null,8,["modelValue","options"]),U0,x(s,{modelValue:i.minutes,"onUpdate:modelValue":n[2]||(n[2]=function(l){return i.minutes=l}),modelModifiers:{number:!0},options:o.minuteOptions},null,8,["modelValue","options"]),r.is24hr?$e("",!0):(M(),N("div",G0,[x("button",{class:{active:i.isAM},onClick:n[3]||(n[3]=Rr(function(l){return i.isAM=!0},["prevent"])),type:"button"}," AM ",2),x("button",{class:{active:!i.isAM},onClick:n[4]||(n[4]=Rr(function(l){return i.isAM=!1},["prevent"])),type:"button"}," PM ",2)]))])])],2)}),Z0=`.vc-time-picker[data-v-63f66eaa] {
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  -webkit-align-items: center;
      -ms-flex-align: center;
          align-items: center;
  padding: 8px;
}
.vc-time-picker.vc-invalid[data-v-63f66eaa] {
    pointer-events: none;
    opacity: 0.5;
}
.vc-time-picker.vc-bordered[data-v-63f66eaa] {
    border-top: 1px solid var(--gray-400);
}
.vc-time-icon[data-v-63f66eaa] {
  width: 16px;
  height: 16px;
  color: var(--gray-600);
}
.vc-time-content[data-v-63f66eaa] {
  margin-left: 8px;
}
.vc-time-date[data-v-63f66eaa] {
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  -webkit-align-items: center;
      -ms-flex-align: center;
          align-items: center;
  font-size: var(--text-sm);
  font-weight: var(--font-semibold);
  text-transform: uppercase;
  padding: 0 0 4px 4px;
  margin-top: -4px;
  line-height: 21px;
}
.vc-time-weekday[data-v-63f66eaa] {
  color: var(--gray-700);
  letter-spacing: var(--tracking-wide);
}
.vc-time-month[data-v-63f66eaa] {
  color: var(--accent-600);
  margin-left: 8px;
}
.vc-time-day[data-v-63f66eaa] {
  color: var(--accent-600);
  margin-left: 4px;
}
.vc-time-year[data-v-63f66eaa] {
  color: var(--gray-500);
  margin-left: 8px;
}
.vc-time-select[data-v-63f66eaa] {
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  -webkit-align-items: center;
      -ms-flex-align: center;
          align-items: center;
}
.vc-am-pm[data-v-63f66eaa] {
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  -webkit-align-items: center;
      -ms-flex-align: center;
          align-items: center;
  background: var(--gray-200);
  color: var(--gray-800);
  margin-left: 8px;
  padding: 4px;
  border-radius: var(--rounded);
  height: 30px;
}
.vc-am-pm button[data-v-63f66eaa] {
    font-size: var(--text-sm);
    font-weight: var(--font-medium);
    padding: 0 4px;
    background: transparent;
    border: 2px solid transparent;
    border-radius: var(--rounded);
    line-height: var(--leading-snug);
}
.vc-am-pm button[data-v-63f66eaa]:hover {
      color: var(--gray-600);
}
.vc-am-pm button[data-v-63f66eaa]:focus {
      border-color: var(--accent-400);
}
.vc-am-pm button.active[data-v-63f66eaa] {
      background: var(--accent-600);
      color: var(--white);
}
.vc-am-pm button.active[data-v-63f66eaa]:hover {
        background: var(--accent-500);
}
.vc-am-pm button.active[data-v-63f66eaa]:focus {
        border-color: var(--accent-400);
}
.vc-is-dark .vc-time-picker[data-v-63f66eaa] {
    border-color: var(--gray-700);
}
.vc-is-dark .vc-time-icon[data-v-63f66eaa] {
    color: var(--gray-400);
}
.vc-is-dark .vc-time-weekday[data-v-63f66eaa] {
    color: var(--gray-400);
}
.vc-is-dark .vc-time-month[data-v-63f66eaa] {
    color: var(--accent-400);
}
.vc-is-dark .vc-time-day[data-v-63f66eaa] {
    color: var(--accent-400);
}
.vc-is-dark .vc-time-year[data-v-63f66eaa] {
    color: var(--gray-500);
}
.vc-is-dark .vc-am-pm[data-v-63f66eaa] {
    background: var(--gray-700);
}
.vc-is-dark .vc-am-pm[data-v-63f66eaa]:focus {
      border-color: var(--accent-500);
}
.vc-is-dark .vc-am-pm button[data-v-63f66eaa] {
      color: var(--gray-100);
}
.vc-is-dark .vc-am-pm button[data-v-63f66eaa]:hover {
        color: var(--gray-400);
}
.vc-is-dark .vc-am-pm button[data-v-63f66eaa]:focus {
        border-color: var(--accent-500);
}
.vc-is-dark .vc-am-pm button.active[data-v-63f66eaa] {
        background: var(--accent-500);
        color: var(--white);
}
.vc-is-dark .vc-am-pm button.active[data-v-63f66eaa]:hover {
          background: var(--accent-600);
}
.vc-is-dark .vc-am-pm button.active[data-v-63f66eaa]:focus {
          border-color: var(--accent-500);
}
`;ke(Z0);Lr.render=K0;Lr.__scopeId="data-v-63f66eaa";var Dn={type:"auto",mask:"iso",timeAdjust:""},Wa={start:p({},Dn),end:p({},Dn)},rn={DATE:"date",DATE_TIME:"datetime",TIME:"time"},ne={NONE:0,START:1,END:2,BOTH:3},q0={name:"DatePicker",emits:["update:modelValue","drag","dayclick","daykeydown","popover-will-show","popover-did-show","popover-will-hide","popover-did-hide"],render:function(){var e=this,n=function(s,l){if(!e.$slots.footer)return s;var u=[s,e.$slots.footer()];return l?D(l,u):u},r=function(){if(!e.dateParts)return null;var s=e.isRange?e.dateParts:[e.dateParts[0]];return D("div",{},p(p({},e.$slots),{},{default:function(){return s.map(function(u,c){return D(Lr,{modelValue:u,locale:e.$locale,theme:e.$theme,is24hr:e.is24hr,minuteIncrement:e.minuteIncrement,showBorder:!e.isTime,isDisabled:e.isDateTime&&!u.isValid||e.isDragging,"onUpdate:modelValue":function(d){return e.onTimeInput(d,c===0)}})})}}))},a=function(){return D($0,p(p({},e.$attrs),{},{attributes:e.attributes_,theme:e.$theme,locale:e.$locale,minDate:e.minDateExact||e.minDate,maxDate:e.maxDateExact||e.maxDate,disabledDates:e.disabledDates,availableDates:e.availableDates,onDayclick:e.onDayClick,onDaykeydown:e.onDayKeydown,onDaymouseenter:e.onDayMouseEnter,ref:"calendar"}),p(p({},e.$slots),{},{footer:function(){return e.isDateTime?n(r()):n()}}))},i=function(){return e.isTime?D("div",{class:["vc-container","vc-".concat(e.$theme.color),{"vc-is-dark":e.$theme.isDark}]},n(r(),"div")):a()};return this.$slots.default?D("div",[this.$slots.default(this.slotArgs),D(lr,{id:this.datePickerPopoverId,placement:"bottom-start",contentClass:"vc-container".concat(this.isDark?" vc-is-dark":""),"on-before-show":function(s){return e.$emit("popover-will-show",s)},"on-after-show":function(s){return e.$emit("popover-did-show",s)},"on-before-hide":function(s){return e.$emit("popover-will-hide",s)},"on-after-hide":function(s){return e.$emit("popover-did-hide",s)},ref:"popover"},{default:i})]):i()},mixins:[Wi],props:{mode:{type:String,default:rn.DATE},modelValue:{type:null,required:!0},modelConfig:{type:Object,default:function(){return p({},Dn)}},is24hr:Boolean,minuteIncrement:Number,isRequired:Boolean,isRange:Boolean,updateOnInput:{type:Boolean,default:je("datePicker.updateOnInput")},inputDebounce:{type:Number,default:je("datePicker.inputDebounce")},popover:{type:Object,default:function(){return{}}},dragAttribute:Object,selectAttribute:Object,attributes:Array},data:function(){return{value_:null,dateParts:null,activeDate:"",dragValue:null,inputValues:["",""],updateTimeout:null,watchValue:!0,datePickerPopoverId:mn()}},computed:{isDate:function(){return this.mode.toLowerCase()===rn.DATE},isDateTime:function(){return this.mode.toLowerCase()===rn.DATE_TIME},isTime:function(){return this.mode.toLowerCase()===rn.TIME},isDragging:function(){return!!this.dragValue},modelConfig_:function(){return this.isRange?{start:p(p({},Wa.start),this.modelConfig.start||this.modelConfig),end:p(p({},Wa.end),this.modelConfig.end||this.modelConfig)}:p(p({},Dn),this.modelConfig)},inputMask:function(){var e=this.$locale.masks;return this.isTime?this.is24hr?e.inputTime24hr:e.inputTime:this.isDateTime?this.is24hr?e.inputDateTime24hr:e.inputDateTime:this.$locale.masks.input},inputMaskHasTime:function(){return/[Hh]/g.test(this.inputMask)},inputMaskHasDate:function(){return/[dD]{1,2}|Do|W{1,4}|M{1,4}|YY(?:YY)?/g.test(this.inputMask)},inputMaskPatch:function(){if(this.inputMaskHasTime&&this.inputMaskHasDate)return He.DATE_TIME;if(this.inputMaskHasDate)return He.DATE;if(this.inputMaskHasTime)return He.TIME},slotArgs:function(){var e=this,n=this.isRange,r=this.isDragging,a=this.updateValue,i=this.showPopover,o=this.hidePopover,s=this.togglePopover,l=n?{start:this.inputValues[0],end:this.inputValues[1]}:this.inputValues[0],u=[!0,!1].map(function(f){return p({input:e.onInputInput(f),change:e.onInputChange(f),keyup:e.onInputKeyup},wn(p(p({},e.popover_),{},{id:e.datePickerPopoverId,callback:function(v){v.action==="show"&&v.completed&&e.onInputShow(f)}})))}),c=n?{start:u[0],end:u[1]}:u[0];return{inputValue:l,inputEvents:c,isDragging:r,updateValue:a,showPopover:i,hidePopover:o,togglePopover:s,getPopoverTriggerEvents:wn}},popover_:function(){return Tr(this.popover,je("datePicker.popover"))},selectAttribute_:function(){if(!this.hasValue(this.value_))return null;var e=p(p({key:"select-drag"},this.selectAttribute),{},{dates:this.value_,pinPage:!0}),n=e.dot,r=e.bar,a=e.highlight,i=e.content;return!n&&!r&&!a&&!i&&(e.highlight=!0),e},dragAttribute_:function(){if(!this.isRange||!this.hasValue(this.dragValue))return null;var e=p(p({key:"select-drag"},this.dragAttribute),{},{dates:this.dragValue}),n=e.dot,r=e.bar,a=e.highlight,i=e.content;return!n&&!r&&!a&&!i&&(e.highlight={startEnd:{fillMode:"outline"}}),e},attributes_:function(){var e=re(this.attributes)?dn(this.attributes):[];return this.dragAttribute_?e.push(this.dragAttribute_):this.selectAttribute_&&e.push(this.selectAttribute_),e}},watch:{inputMask:function(){this.formatInput()},modelValue:function(e){!this.watchValue||this.forceUpdateValue(e,{config:this.modelConfig,notify:!1,formatInput:!0,hidePopover:!1})},value_:function(){this.refreshDateParts()},dragValue:function(){this.refreshDateParts()},timezone:function(){this.refreshDateParts(),this.forceUpdateValue(this.value_,{notify:!0,formatInput:!0})}},created:function(){this.forceUpdateValue(this.modelValue,{config:this.modelConfig_,notify:!1,formatInput:!0,hidePopover:!1}),this.refreshDateParts()},mounted:function(){var e=this;R(document,"keydown",this.onDocumentKeyDown),this.offTapOrClickHandler=no(document,function(n){document.body.contains(n.target)&&!St(e.$el,n.target)&&(e.dragValue=null,e.formatInput())})},beforeUnmount:function(){z(document,"keydown",this.onDocumentKeyDown),this.offTapOrClickHandler()},methods:{getDateParts:function(e){return this.$locale.getDateParts(e)},getDateFromParts:function(e){return this.$locale.getDateFromParts(e)},refreshDateParts:function(){var e=this,n=this.dragValue||this.value_,r=[];this.isRange?(n&&n.start?r.push(this.getDateParts(n.start)):r.push({}),n&&n.end?r.push(this.getDateParts(n.end)):r.push({})):n?r.push(this.getDateParts(n)):r.push({}),this.$nextTick(function(){return e.dateParts=r})},onDocumentKeyDown:function(e){this.dragValue&&e.key==="Escape"&&(this.dragValue=null)},onDayClick:function(e){this.handleDayClick(e),this.$emit("dayclick",e)},onDayKeydown:function(e){switch(e.event.key){case" ":case"Enter":{this.handleDayClick(e),e.event.preventDefault();break}case"Escape":this.hidePopover()}this.$emit("daykeydown",e)},handleDayClick:function(e){var n=this.popover_,r=n.keepVisibleOnInput,a=n.visibility,i={patch:He.DATE,adjustTime:!0,formatInput:!0,hidePopover:this.isDate&&!r&&a!=="visible"};this.isRange?(this.isDragging?this.dragTrackingValue.end=e.date:this.dragTrackingValue=p({},e.range),i.isDragging=!this.isDragging,i.rangePriority=i.isDragging?ne.NONE:ne.BOTH,i.hidePopover=i.hidePopover&&!i.isDragging,this.updateValue(this.dragTrackingValue,i)):(i.clearIfEqual=!this.isRequired,this.updateValue(e.date,i))},onDayMouseEnter:function(e){!this.isDragging||(this.dragTrackingValue.end=e.date,this.updateValue(this.dragTrackingValue,{patch:He.DATE,adjustTime:!0,formatInput:!0,hidePriority:!1,rangePriority:ne.NONE}))},onTimeInput:function(e,n){var r=this,a=null;if(this.isRange){var i=n?e:this.dateParts[0],o=n?this.dateParts[1]:e;a={start:i,end:o}}else a=e;this.updateValue(a,{patch:He.TIME,rangePriority:n?ne.START:ne.END}).then(function(){return r.adjustPageRange(n)})},onInputInput:function(e){var n=this;return function(r){!n.updateOnInput||n.onInputUpdate(r.target.value,e,{formatInput:!1,hidePopover:!1,debounce:n.inputDebounce})}},onInputChange:function(e){var n=this;return function(r){n.onInputUpdate(r.target.value,e,{formatInput:!0,hidePopover:!1})}},onInputUpdate:function(e,n,r){var a=this;this.inputValues.splice(n?0:1,1,e);var i=this.isRange?{start:this.inputValues[0],end:this.inputValues[1]||this.inputValues[0]}:e,o={type:"string",mask:this.inputMask};this.updateValue(i,p(p({},r),{},{config:o,patch:this.inputMaskPatch,rangePriority:n?ne.START:ne.END})).then(function(){return a.adjustPageRange(n)})},onInputShow:function(e){this.adjustPageRange(e)},onInputKeyup:function(e){e.key==="Escape"&&this.updateValue(this.value_,{formatInput:!0,hidePopover:!0})},updateValue:function(e){var n=this,r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};return clearTimeout(this.updateTimeout),new Promise(function(a){var i=r.debounce,o=Lo(r,["debounce"]);i>0?n.updateTimeout=setTimeout(function(){n.forceUpdateValue(e,o),a(n.value_)},i):(n.forceUpdateValue(e,o),a(n.value_))})},forceUpdateValue:function(e){var n=this,r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},a=r.config,i=a===void 0?this.modelConfig_:a,o=r.patch,s=o===void 0?He.DATE_TIME:o,l=r.notify,u=l===void 0?!0:l,c=r.clearIfEqual,f=c===void 0?!1:c,d=r.formatInput,v=d===void 0?!0:d,h=r.hidePopover,m=h===void 0?!1:h,g=r.adjustTime,y=g===void 0?!1:g,b=r.isDragging,P=b===void 0?this.isDragging:b,w=r.rangePriority,T=w===void 0?ne.BOTH:w,k=this.normalizeValue(e,i,s,T);!k&&this.isRequired&&(k=this.value_),y&&(k=this.adjustTimeForValue(k,i));var I=this.valueIsDisabled(k);if(I){if(P)return;k=this.value_,m=!1}var S=P?"dragValue":"value_",$=!this.valuesAreEqual(this[S],k);if(!I&&!$&&f&&(k=null,$=!0),$&&(this[S]=k,P||(this.dragValue=null)),u&&$){var j=this.denormalizeValue(k,this.dateConfig),K=this.isDragging?"drag":"update:modelValue";this.watchValue=!1,this.$emit(K,j),this.$nextTick(function(){return n.watchValue=!0})}m&&this.hidePopover(),v&&this.formatInput()},hasValue:function(e){return this.isRange?ue(e)&&e.start&&e.end:!!e},normalizeValue:function(e,n,r,a){if(!this.hasValue(e))return null;if(this.isRange){var i={},o=e.start>e.end?e.end:e.start,s=this.value_&&this.value_.start||this.modelConfig_.start.fillDate,l=n.start||n;i.start=this.normalizeDate(o,p(p({},l),{},{fillDate:s,patch:r}));var u=e.start>e.end?e.start:e.end,c=this.value_&&this.value_.end||this.modelConfig_.end.fillDate,f=n.end||n;return i.end=this.normalizeDate(u,p(p({},f),{},{fillDate:c,patch:r})),this.sortRange(i,a)}return this.normalizeDate(e,p(p({},n),{},{fillDate:this.value_||this.modelConfig_.fillDate,patch:r}))},adjustTimeForValue:function(e,n){return this.hasValue(e)?this.isRange?{start:this.$locale.adjustTimeForDate(e.start,n.start||n),end:this.$locale.adjustTimeForDate(e.end,n.end||n)}:this.$locale.adjustTimeForDate(e,n):null},sortRange:function(e){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:ne.NONE,r=e.start,a=e.end;if(r>a)switch(n){case ne.START:return{start:r,end:r};case ne.END:return{start:a,end:a};case ne.BOTH:return{start:a,end:r}}return{start:r,end:a}},denormalizeValue:function(e){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:this.modelConfig_;return this.isRange?this.hasValue(e)?{start:this.$locale.denormalizeDate(e.start,n.start||n),end:this.$locale.denormalizeDate(e.end,n.end||n)}:null:this.$locale.denormalizeDate(e,n)},valuesAreEqual:function(e,n){if(this.isRange){var r=this.hasValue(e),a=this.hasValue(n);return!r&&!a?!0:r!==a?!1:Ln(e.start,n.start)&&Ln(e.end,n.end)}return Ln(e,n)},valueIsDisabled:function(e){return this.hasValue(e)&&this.disabledAttribute&&this.disabledAttribute.intersectsDate(e)},formatInput:function(){var e=this;this.$nextTick(function(){var n={type:"string",mask:e.inputMask},r=e.denormalizeValue(e.dragValue||e.value_,n);e.isRange?e.inputValues=[r&&r.start,r&&r.end]:e.inputValues=[r,""]})},showPopover:function(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};ir(p(p(p({ref:this.$el},this.popover_),e),{},{isInteractive:!0,id:this.datePickerPopoverId}))},hidePopover:function(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};or(p(p(p({hideDelay:10},this.showPopover_),e),{},{id:this.datePickerPopoverId}))},togglePopover:function(e){Hi(p(p(p({ref:this.$el},this.popover_),e),{},{isInteractive:!0,id:this.datePickerPopoverId}))},adjustPageRange:function(e){var n=this;this.$nextTick(function(){var r=n.$refs.calendar,a=n.getPageForValue(e),i=e?1:-1;a&&r&&!Li(a,r.firstPage,r.lastPage)&&r.move(a,{position:i,transition:"fade"})})},getPageForValue:function(e){return this.hasValue(this.value_)?this.pageForDate(this.isRange?this.value_[e?"start":"end"]:this.value_):null},move:function(e,n){return this.$refs.calendar?this.$refs.calendar.move(e,n):Promise.reject(new Error("Navigation disabled while calendar is not yet displayed"))},focusDate:function(e,n){return this.$refs.calendar?this.$refs.calendar.focusDate(e,n):Promise.reject(new Error("Navigation disabled while calendar is not yet displayed"))}}};const X0={class:"flex flex-col items-center justify-start sm:flex-row"},J0={class:"relative w-full grow"},Q0=["value"],ey={class:"m-2 shrink-0"},ty={class:"relative w-full grow"},ny=["value"],Yy={props:{modelValue:{type:Object,required:!0}},emits:["update:modelValue"],setup(t,{emit:e}){const n=t,r=cr({input:"MM-DD-YYYY"}),a=Et({get:()=>n.modelValue,set:o=>{e("update:modelValue",o)}}),i=Et({get(){const o=new Date;return new Date(n.modelValue.start)<o?n.modelValue.start:o}});return(o,s)=>(M(),N(L(q0),{modelValue:L(a),"onUpdate:modelValue":s[0]||(s[0]=l=>mo(a)?a.value=l:null),mode:"date",masks:L(r),"is-range":"","is-required":"","min-date":L(i)},{default:fr(({inputValue:l,inputEvents:u,isDragging:c})=>[Y("div",X0,[Y("div",J0,[x(L(Wr),{class:"absolute w-4 h-full mx-2 pointer-events-none text-cool-grey-600"}),Y("input",Un({type:"text",class:["block w-full py-1 pl-8 pr-2 mt-1 border rounded-md shadow-sm grow border-cool-grey-300 focus:border-light-blue-vivid-300 focus:ring focus:ring-light-blue-vivid-200 focus:ring-opacity-50",c?"text-cool-grey-600":"text-cool-grey-900"],value:l.start},zr(u.start)),null,16,Q0)]),Y("span",ey,[x(L(Mo),{class:"w-4 h-4 stroke-current text-cool-grey-600"})]),Y("div",ty,[x(L(Wr),{class:"absolute w-4 h-full mx-2 pointer-events-none text-cool-grey-600"}),Y("input",Un({type:"text",class:["block w-full py-1 pl-8 pr-2 mt-1 border rounded-md shadow-sm grow border-cool-grey-300 focus:border-light-blue-vivid-300 focus:ring focus:ring-light-blue-vivid-200 focus:ring-opacity-50",c?"text-cool-grey-600":"text-cool-grey-900"],value:l.end},zr(u.end)),null,16,ny)])])]),_:1},8,["modelValue","masks","min-date"]))}},ry={class:"flex items-center"},ay={class:"pr-1 mt-2 overflow-auto h-52"},iy={key:0,class:"mt-2 space-y-2"},oy=["onClick"],sy=["textContent"],ly=["textContent"],uy={key:1,class:"italic text-cool-grey-400"},cy=Y("li",null,"None found",-1),fy=[cy],Ay={emits:["selected"],setup(t){const e=Ie(""),n=Ie([]),r=Ie(!1);let a=null;const i=_.debounce(()=>{if(a&&a.cancel(),a=axios.CancelToken.source(),e.value===""){n.value=[];return}axios.get(route("contacts"),{params:{search:e.value},cancelToken:a.token}).then(s=>{r.value=!1,s&&(n.value=s.data,a=null)})},400);function o(){r.value=!0,i()}return Ka(e,()=>o()),(s,l)=>(M(),F("div",yo(bo(s.$attrs)),[Y("div",ry,[Ba(Y("input",{"onUpdate:modelValue":l[0]||(l[0]=u=>e.value=u),type:"text",placeholder:"Search contacts...",class:"w-full rounded border-cool-grey-200"},null,512),[[go,e.value]]),r.value?(M(),N(ko,{key:0,name:"spinner",class:"w-6 h-6 -ml-8 fill-current animate-spin text-cool-grey-400"})):$e("",!0)]),Y("div",ay,[n.value.length>0?(M(),F("ul",iy,[(M(!0),F(lt,null,ut(n.value,u=>(M(),F("li",{key:u.id,class:"hover:bg-light-blue-vivid-50 odd:bg-cool-grey-50"},[Y("a",{class:"block p-2 cursor-pointer",onClick:c=>s.$emit("selected",u)},[Y("div",{textContent:Z(u.name)},null,8,sy),Y("div",{textContent:Z(u.address)},null,8,ly)],8,oy)]))),128))])):e.value?(M(),F("ul",uy,fy)):$e("",!0)])],16))}},dy={key:0},vy={class:"flex items-center justify-between cursor-pointer group"},hy=["onClick"],py=["textContent"],my=["textContent"],gy=["onClick"],yy={key:1},Fy={props:{contacts:{type:Array,required:!0},removable:{type:Boolean,default:!1}},emits:["contactClicked"],setup(t){const e=t;function n(r){_.pull(e.contacts,r)}return(r,a)=>t.contacts.length>0?(M(),F("div",dy,[Y("h3",null,[Ge(r.$slots,"default")]),Y("ul",null,[(M(!0),F(lt,null,ut(t.contacts,i=>(M(),F("li",{key:i.id,class:"p-2"},[Y("div",vy,[Y("div",{onClick:o=>r.$emit("contactClicked",i)},[Y("div",{textContent:Z(i.name)},null,8,py),Y("div",{textContent:Z(i.address)},null,8,my)],8,hy),t.removable?(M(),F("div",{key:0,title:"Remove policyholder",onClick:o=>n(i)},[x(L(_o),{class:"invisible w-5 h-5 ml-10 group-hover:visible"})],8,gy)):$e("",!0)])]))),128))])])):(M(),F("div",yy,[Ge(r.$slots,"noContacts")]))}};/**
 * Vue Currency Input 2.4.0
 * (c) 2018-2022 Matthias Stiller
 * @license MIT
 */const fn=t=>t.replace(/[.*+?^${}()|[\]\\]/g,"\\$&"),io=t=>t.replace(/^0+(0$|[^0])/,"$1"),Bn=(t,e)=>(t.match(new RegExp(fn(e),"g"))||[]).length,by=(t,e)=>t.substring(0,t.indexOf(e));var Ue;(function(t){t.symbol="symbol",t.narrowSymbol="narrowSymbol",t.code="code",t.name="name",t.hidden="hidden"})(Ue||(Ue={}));var Ae;(function(t){t.precision="precision",t.thousands="thousands",t.millions="millions",t.billions="billions"})(Ae||(Ae={}));const oo=[",",".","\u066B"],Ha="(0|[1-9]\\d*)";class wy{constructor(e){var n,r,a,i,o,s;const{currency:l,currencyDisplay:u,locale:c,precision:f,accountingSign:d}=e;this.locale=c,this.options={style:"currency",currency:l,currencySign:d?"accounting":void 0,currencyDisplay:u!==Ue.hidden?u:void 0};const v=new Intl.NumberFormat(c,this.options),h=v.formatToParts(123456);this.currency=(n=h.find(({type:y})=>y==="currency"))===null||n===void 0?void 0:n.value,this.digits=[0,1,2,3,4,5,6,7,8,9].map(y=>y.toLocaleString(c)),this.decimalSymbol=(r=h.find(({type:y})=>y==="decimal"))===null||r===void 0?void 0:r.value,this.groupingSymbol=(a=h.find(({type:y})=>y==="group"))===null||a===void 0?void 0:a.value,this.minusSign=(i=v.formatToParts(-1).find(({type:y})=>y==="minusSign"))===null||i===void 0?void 0:i.value,this.decimalSymbol===void 0?this.minimumFractionDigits=this.maximumFractionDigits=0:typeof f=="number"?this.minimumFractionDigits=this.maximumFractionDigits=f:(this.minimumFractionDigits=(o=f==null?void 0:f.min)!==null&&o!==void 0?o:v.resolvedOptions().minimumFractionDigits,this.maximumFractionDigits=(s=f==null?void 0:f.max)!==null&&s!==void 0?s:v.resolvedOptions().maximumFractionDigits);const m=y=>by(y,this.digits[1]),g=y=>y.substring(y.lastIndexOf(this.decimalSymbol?this.digits[0]:this.digits[1])+1);this.prefix=m(v.format(1)),this.suffix=g(v.format(1)),this.negativePrefix=m(v.format(-1)),this.negativeSuffix=g(v.format(-1))}parse(e){if(e){const n=this.isNegative(e);e=this.normalizeDigits(e),e=this.stripCurrency(e,n),e=this.stripSignLiterals(e);const r=this.decimalSymbol?`(?:${fn(this.decimalSymbol)}(\\d*))?`:"",a=this.stripGroupingSeparator(e).match(new RegExp(`^${Ha}${r}$`));if(a&&this.isValidIntegerFormat(this.decimalSymbol?e.split(this.decimalSymbol)[0]:e,Number(a[1])))return Number(`${n?"-":""}${this.onlyDigits(a[1])}.${this.onlyDigits(a[2]||"")}`)}return null}isValidIntegerFormat(e,n){const r={...this.options,minimumFractionDigits:0};return[this.stripCurrency(this.normalizeDigits(n.toLocaleString(this.locale,{...r,useGrouping:!0})),!1),this.stripCurrency(this.normalizeDigits(n.toLocaleString(this.locale,{...r,useGrouping:!1})),!1)].includes(e)}format(e,n={minimumFractionDigits:this.minimumFractionDigits,maximumFractionDigits:this.maximumFractionDigits}){return e!=null?e.toLocaleString(this.locale,{...this.options,...n}):""}toFraction(e){return`${this.digits[0]}${this.decimalSymbol}${this.onlyLocaleDigits(e.substr(1)).substr(0,this.maximumFractionDigits)}`}isFractionIncomplete(e){return!!this.normalizeDigits(this.stripGroupingSeparator(e)).match(new RegExp(`^${Ha}${fn(this.decimalSymbol)}$`))}isNegative(e){return e.startsWith(this.negativePrefix)||this.minusSign===void 0&&(e.startsWith("(")||e.startsWith("-"))||this.minusSign!==void 0&&e.replace("-",this.minusSign).startsWith(this.minusSign)}insertCurrency(e,n){return`${n?this.negativePrefix:this.prefix}${e}${n?this.negativeSuffix:this.suffix}`}stripGroupingSeparator(e){return this.groupingSymbol!==void 0?e.replace(new RegExp(fn(this.groupingSymbol),"g"),""):e}stripSignLiterals(e){return this.minusSign!==void 0?e.replace("-",this.minusSign).replace(this.minusSign,""):e.replace(/[-()]/g,"")}stripCurrency(e,n){return e.replace(n?this.negativePrefix:this.prefix,"").replace(n?this.negativeSuffix:this.suffix,"")}normalizeDecimalSeparator(e,n){return oo.forEach(r=>{e=e.substr(0,n)+e.substr(n).replace(r,this.decimalSymbol)}),e}normalizeDigits(e){return this.digits[0]!=="0"&&this.digits.forEach((n,r)=>{e=e.replace(new RegExp(n,"g"),String(r))}),e}onlyDigits(e){return this.normalizeDigits(e).replace(/\D+/g,"")}onlyLocaleDigits(e){return e.replace(new RegExp(`[^${this.digits.join("")}]*`,"g"),"")}}class so{constructor(e){this.currencyFormat=e}}class Dy extends so{conformToMask(e,n=""){const r=this.currencyFormat.isNegative(e),a=h=>h===""&&r&&!(this.currencyFormat.minusSign===void 0?n===this.currencyFormat.negativePrefix+this.currencyFormat.negativeSuffix:n===this.currencyFormat.negativePrefix),i=h=>{if(a(h))return"";if(this.currencyFormat.maximumFractionDigits>0){if(this.currencyFormat.isFractionIncomplete(h))return h;if(h.startsWith(this.currencyFormat.decimalSymbol))return this.currencyFormat.toFraction(h)}return null};let o=e;o=this.currencyFormat.stripCurrency(o,r),o=this.currencyFormat.stripSignLiterals(o);const s=i(o);if(s!=null)return this.currencyFormat.insertCurrency(s,r);const[l,...u]=o.split(this.currencyFormat.decimalSymbol),c=io(this.currencyFormat.onlyDigits(l)),f=this.currencyFormat.onlyDigits(u.join("")).substr(0,this.currencyFormat.maximumFractionDigits),d=u.length>0&&f.length===0,v=c===""&&r&&(this.currencyFormat.minusSign===void 0?n===e.slice(0,-2)+this.currencyFormat.negativeSuffix:n===e.slice(0,-1));return d||v||a(c)?n:c.match(/\d+/)?{numberValue:Number(`${r?"-":""}${c}.${f}`),fractionDigits:f}:""}}class xy extends so{conformToMask(e,n=""){if(e===""||this.currencyFormat.parse(n)===0&&this.currencyFormat.stripCurrency(n,!0).slice(0,-1)===this.currencyFormat.stripCurrency(e,!0))return"";const r=this.currencyFormat.isNegative(e),a=this.currencyFormat.stripSignLiterals(e)===""?-0:Number(`${r?"-":""}${io(this.currencyFormat.onlyDigits(e))}`)/Math.pow(10,this.currencyFormat.maximumFractionDigits);return{numberValue:a,fractionDigits:a.toFixed(this.currencyFormat.maximumFractionDigits).slice(-this.currencyFormat.maximumFractionDigits)}}}const ky={locale:void 0,currency:void 0,currencyDisplay:void 0,exportValueAsInteger:!1,hideGroupingSeparatorOnFocus:!0,hideCurrencySymbolOnFocus:!0,hideNegligibleDecimalDigitsOnFocus:!0,precision:void 0,autoDecimalDigits:!1,valueRange:void 0,autoSign:!0,useGrouping:!0,valueScaling:void 0};class _y{constructor(e,n){this.el=e,this.numberValue=null,this.addEventListener(),this.init(n),this.setValue(this.currencyFormat.parse(this.el.value))}setOptions(e){this.init(e),this.applyFixedFractionFormat(this.numberValue,!0)}getValue(){return{number:this.valueScaling&&this.numberValue!=null?this.toInteger(this.numberValue,this.valueScaling):this.numberValue,formatted:this.formattedValue}}setValue(e){const n=this.valueScaling!==void 0&&e!=null?this.toFloat(e,this.valueScaling):e;n!==this.numberValue&&this.applyFixedFractionFormat(n)}dispatchEvent(e){this.el.dispatchEvent(new CustomEvent(e,{detail:this.getValue()}))}init(e){this.options={...ky,...e},this.options.autoDecimalDigits?(this.options.hideNegligibleDecimalDigitsOnFocus=!1,this.el.setAttribute("inputmode","numeric")):this.el.setAttribute("inputmode","decimal"),this.currencyFormat=new wy(this.options),this.numberMask=this.options.autoDecimalDigits?new xy(this.currencyFormat):new Dy(this.currencyFormat);const n={[Ae.precision]:this.currencyFormat.maximumFractionDigits,[Ae.thousands]:3,[Ae.millions]:6,[Ae.billions]:9};this.options.exportValueAsInteger?this.valueScaling=n[Ae.precision]:this.valueScaling=this.options.valueScaling?n[this.options.valueScaling]:void 0,this.valueScalingFractionDigits=this.valueScaling!==void 0&&this.options.valueScaling!==Ae.precision?this.valueScaling+this.currencyFormat.maximumFractionDigits:this.currencyFormat.maximumFractionDigits,this.minValue=this.getMinValue(),this.maxValue=this.getMaxValue()}getMinValue(){var e,n;let r=this.toFloat(-Number.MAX_SAFE_INTEGER);return((e=this.options.valueRange)===null||e===void 0?void 0:e.min)!==void 0&&(r=Math.max((n=this.options.valueRange)===null||n===void 0?void 0:n.min,this.toFloat(-Number.MAX_SAFE_INTEGER))),!this.options.autoSign&&r<0&&(r=0),r}getMaxValue(){var e,n;let r=this.toFloat(Number.MAX_SAFE_INTEGER);return((e=this.options.valueRange)===null||e===void 0?void 0:e.max)!==void 0&&(r=Math.min((n=this.options.valueRange)===null||n===void 0?void 0:n.max,this.toFloat(Number.MAX_SAFE_INTEGER))),!this.options.autoSign&&r<0&&(r=this.toFloat(Number.MAX_SAFE_INTEGER)),r}toFloat(e,n){return e/Math.pow(10,n!=null?n:this.valueScalingFractionDigits)}toInteger(e,n){return Number(e.toFixed(n!=null?n:this.valueScalingFractionDigits).split(".").join(""))}validateValueRange(e){return e!=null?Math.min(Math.max(e,this.minValue),this.maxValue):e}applyFixedFractionFormat(e,n=!1){this.format(this.currencyFormat.format(this.validateValueRange(e))),(e!==this.numberValue||n)&&this.dispatchEvent("change")}format(e,n=!1){if(e!=null){this.decimalSymbolInsertedAt!==void 0&&(e=this.currencyFormat.normalizeDecimalSeparator(e,this.decimalSymbolInsertedAt),this.decimalSymbolInsertedAt=void 0);const r=this.numberMask.conformToMask(e,this.formattedValue);let a;if(typeof r=="object"){const{numberValue:i,fractionDigits:o}=r;let{maximumFractionDigits:s,minimumFractionDigits:l}=this.currencyFormat;this.focus?l=n?o.replace(/0+$/,"").length:Math.min(s,o.length):Number.isInteger(i)&&!this.options.autoDecimalDigits&&(this.options.precision===void 0||l===0)&&(l=s=0),a=this.toInteger(Math.abs(i))>Number.MAX_SAFE_INTEGER?this.formattedValue:this.currencyFormat.format(i,{useGrouping:this.options.useGrouping&&!(this.focus&&this.options.hideGroupingSeparatorOnFocus),minimumFractionDigits:l,maximumFractionDigits:s})}else a=r;this.options.autoSign&&(this.maxValue<=0&&!this.currencyFormat.isNegative(a)&&this.currencyFormat.parse(a)!==0&&(a=a.replace(this.currencyFormat.prefix,this.currencyFormat.negativePrefix)),this.minValue>=0&&(a=a.replace(this.currencyFormat.negativePrefix,this.currencyFormat.prefix))),(this.options.currencyDisplay===Ue.hidden||this.focus&&this.options.hideCurrencySymbolOnFocus)&&(a=a.replace(this.currencyFormat.negativePrefix,this.currencyFormat.minusSign!==void 0?this.currencyFormat.minusSign:"(").replace(this.currencyFormat.negativeSuffix,this.currencyFormat.minusSign!==void 0?"":")").replace(this.currencyFormat.prefix,"").replace(this.currencyFormat.suffix,"")),this.el.value=a,this.numberValue=this.currencyFormat.parse(a)}else this.el.value="",this.numberValue=null;this.formattedValue=this.el.value,this.dispatchEvent("input")}addEventListener(){this.el.addEventListener("input",e=>{if(!e.detail){const{value:n,selectionStart:r}=this.el,a=e;if(r&&a.data&&oo.includes(a.data)&&(this.decimalSymbolInsertedAt=r-1),this.format(n),this.focus&&r!=null){const i=()=>{const{prefix:o,suffix:s,decimalSymbol:l,maximumFractionDigits:u,groupingSymbol:c}=this.currencyFormat;let f=n.length-r;const d=this.formattedValue.length;if(this.currencyFormat.minusSign===void 0&&(n.startsWith("(")||n.startsWith("-"))&&!n.endsWith(")"))return d-this.currencyFormat.negativeSuffix.length>1?this.formattedValue.substring(r).length:1;if(this.formattedValue.substr(r,1)===c&&Bn(this.formattedValue,c)===Bn(n,c)+1)return d-f-1;if(d<f)return r;if(l!==void 0&&n.indexOf(l)!==-1){const v=n.indexOf(l)+1;if(Math.abs(d-n.length)>1&&r<=v)return this.formattedValue.indexOf(l)+1;!this.options.autoDecimalDigits&&r>v&&this.currencyFormat.onlyDigits(n.substr(v)).length-1===u&&(f-=1)}return this.options.hideCurrencySymbolOnFocus||this.options.currencyDisplay===Ue.hidden?d-f:Math.max(d-Math.max(f,s.length),o.length)};this.setCaretPosition(i())}}},{capture:!0}),this.el.addEventListener("focus",()=>{this.focus=!0,setTimeout(()=>{const{value:e,selectionStart:n,selectionEnd:r}=this.el;if(this.format(e,this.options.hideNegligibleDecimalDigitsOnFocus),n!=null&&r!=null&&Math.abs(n-r)>0)this.setCaretPosition(0,this.el.value.length);else if(n!=null){const a=this.getCaretPositionOnFocus(e,n);this.setCaretPosition(a)}})}),this.el.addEventListener("blur",()=>{this.focus=!1,this.applyFixedFractionFormat(this.numberValue)}),this.el.addEventListener("change",e=>{e.detail||this.dispatchEvent("change")},{capture:!0})}getCaretPositionOnFocus(e,n){if(this.numberValue==null)return n;const{prefix:r,negativePrefix:a,suffix:i,negativeSuffix:o,groupingSymbol:s,currency:l}=this.currencyFormat,u=this.numberValue<0,c=u?a:r,f=c.length;if(this.options.hideCurrencySymbolOnFocus||this.options.currencyDisplay===Ue.hidden){if(u){if(n<=1)return 1;if(e.endsWith(")")&&n>e.indexOf(")"))return this.formattedValue.length-1}}else{const v=u?o.length:i.length;if(n>=e.length-v)return this.formattedValue.length-v;if(n<f)return f}let d=n;return this.options.hideCurrencySymbolOnFocus&&this.options.currencyDisplay!==Ue.hidden&&n>=f&&l!==void 0&&c.includes(l)&&(d-=f,u&&(d+=1)),this.options.hideGroupingSeparatorOnFocus&&s!==void 0&&(d-=Bn(e.substring(0,n),s)),d}setCaretPosition(e,n=e){this.el.setSelectionRange(e,n)}}const My=t=>t!=null&&t.matches("input")?t:t==null?void 0:t.querySelector("input");var Py=t=>{var e;let n,r;const a=Ie(null),i=Ie(null),o=Do(),s=(g,y)=>o==null?void 0:o.emit(g,y),l=(e=o==null?void 0:o.attrs.modelModifiers)===null||e===void 0?void 0:e.lazy,u=Et(()=>o==null?void 0:o.props.modelValue),c="update:modelValue",f=l?"update:modelValue":"change",d=!l,v=l||!(o!=null&&o.attrs.onChange),h=g=>{g.detail&&(u.value!==g.detail.number&&s(c,g.detail.number),i.value=g.detail.formatted)},m=g=>{g.detail&&(s(f,g.detail.number),i.value=g.detail.formatted)};return Ka(a,g=>{var y,b;g?(r=My((b=(y=g)===null||y===void 0?void 0:y.$el)!==null&&b!==void 0?b:g),r?(n=new _y(r,t),d&&r.addEventListener("input",h),v&&r.addEventListener("change",m),n.setValue(u.value)):console.error('No input element found. Please make sure that the "inputRef" template ref is properly assigned.')):n=null}),wo(()=>{d&&(r==null||r.removeEventListener("input",h)),v&&(r==null||r.removeEventListener("change",m))}),{inputRef:a,formattedValue:i,setValue:g=>n==null?void 0:n.setValue(g),setOptions:g=>n==null?void 0:n.setOptions(g)}};const Ny={props:{modelValue:{type:Number,default:null},options:{type:Object,required:!0}},setup(t){const{inputRef:e}=Py(t.options);return()=>D("input",{ref:e,type:"text"})}};export{Yy as _,Ny as a,Cy as b,Fy as c,Ay as d,q0 as s};
