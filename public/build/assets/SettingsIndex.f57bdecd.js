var D=Object.defineProperty;var v=Object.getOwnPropertySymbols;var G=Object.prototype.hasOwnProperty,J=Object.prototype.propertyIsEnumerable;var k=(o,e,t)=>e in o?D(o,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):o[e]=t,w=(o,e)=>{for(var t in e||(e={}))G.call(e,t)&&k(o,t,e[t]);if(v)for(var t of v(e))J.call(e,t)&&k(o,t,e[t]);return o};import{B as y,a as $}from"./BaseListItem.2c6f2d77.js";import{J as O,k as S,B as x,a0 as U,bb as q,bc as z,a7 as I,r as u,o as a,l as d,w as c,f as l,u as _,h as i,e as j,y as R,aj as V,F as L}from"./vendor.d12b5734.js";import{u as K}from"./global.b3c52363.js";import"./main.06577e8c.js";import"./auth.e6e11d4c.js";const M={class:"w-full mb-6 select-wrapper xl:hidden"},Q={class:"pb-3 lg:col-span-3"},T={class:"space-y-1"},W={class:"flex"},X={class:"hidden mt-1 xl:block min-w-[240px]"},Y={class:"w-full overflow-hidden"},ae={setup(o){const{t:e}=O(),{useRoute:t,useRouter:P}=window.VueRouter,f=t(),C=P(),m=K(),g=S(()=>m.companySlug);let E=x({});x();const p=U([{link:`/${m.companySlug}/customer/settings/customer-profile`,title:e("settings.account_settings.account_settings"),icon:q},{link:`/${m.companySlug}/customer/settings/address-info`,title:e("settings.menu_title.address_information"),icon:z}]);I(()=>{f.path===`/${m.companySlug}/customer/settings`&&C.push({name:"customer.profile"});const n=p.find(B=>B.link===f.path);E.value=w({},n)}),S(()=>p);function h(n){return f.path.indexOf(n)>-1}return(n,B)=>{const b=u("BaseBreadcrumbItem"),F=u("BaseBreadcrumb"),H=u("BasePageHeader"),N=u("RouterView"),A=u("BasePage");return a(),d(A,null,{default:c(()=>[l(H,{title:n.$tc("settings.setting",2),class:"pb-6"},{default:c(()=>[l(F,null,{default:c(()=>[l(b,{title:n.$t("general.home"),to:`/${_(g)}/customer/dashboard`},null,8,["title","to"]),l(b,{title:n.$tc("settings.setting",2),to:`/${_(g)}/customer/settings/customer-profile`,active:""},null,8,["title","to"])]),_:1})]),_:1},8,["title"]),i("div",M,[i("aside",Q,[i("nav",T,[l($,null,{default:c(()=>[(a(!0),j(L,null,R(_(p),(s,r)=>(a(),d(y,{key:r,title:s.title,to:s.link,active:h(s.link),index:r,class:"py-3"},{icon:c(()=>[(a(),d(V(s.icon),{class:"h-5 w-6"}))]),_:2},1032,["title","to","active","index"]))),128))]),_:1})])])]),i("div",W,[i("div",X,[l($,null,{default:c(()=>[(a(!0),j(L,null,R(_(p),(s,r)=>(a(),d(y,{key:r,title:s.title,to:s.link,active:h(s.link),index:r,class:"py-3"},{icon:c(()=>[(a(),d(V(s.icon),{class:"h-5 w-6"}))]),_:2},1032,["title","to","active","index"]))),128))]),_:1})]),i("div",Y,[l(N)])])]),_:1})}}};export{ae as default};
