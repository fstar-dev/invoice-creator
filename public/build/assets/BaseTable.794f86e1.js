import{h as O,r as T,o as i,c as s,t as c,z as u,x as h,A as m,b as k,F as C,H as P,v as _,j as N,i as F,k as A,D as J,M as K,W as L,y as f,w as Q,l as U,s as X}from"./vendor.e9042f2c.js";import{_ as Z,S as $}from"./main.f55cd568.js";function V(a,t){if(!t||a===null||typeof a!="object")return a;const[e,n]=t.split(/\.(.+)/);return V(a[e],n)}function ee(a,t){return t.reduce((e,n)=>(e[n]=a[n],e),{})}class te{constructor(t,e){this.data=t,this.columns=e}getValue(t){return V(this.data,t)}getColumn(t){return this.columns.find(e=>e.key===t)}getSortableValue(t){const e=this.getColumn(t).dataType;let n=this.getValue(t);if(n==null)return"";if(n instanceof String&&(n=n.toLowerCase()),e.startsWith("date")){const b=e.replace("date:","");return O(n,b).format("YYYYMMDDHHmmss")}return e==="numeric"?n:n.toString()}}class ae{constructor(t){const e=ee(t,["key","label","thClass","tdClass","sortBy","sortable","hidden","dataType"]);for(const n in e)this[n]=t[n];e.dataType||(this.dataType="string"),e.sortable===void 0&&(this.sortable=!0)}getFilterFieldName(){return this.filterOn||this.key}isSortable(){return this.sortable}getSortPredicate(t,e){const n=this.getSortFieldName(),l=e.find(g=>g.key===n).dataType;return l.startsWith("date")||l==="numeric"?(g,d)=>{const p=g.getSortableValue(n),x=d.getSortableValue(n);return t==="desc"?x<p?-1:1:p<x?-1:1}:(g,d)=>{const p=g.getSortableValue(n),x=d.getSortableValue(n);return t==="desc"?x.localeCompare(p):p.localeCompare(x)}}getSortFieldName(){return this.sortBy||this.key}}const ne={props:{pagination:{type:Object,default:()=>({})}},computed:{pages(){return this.pagination.totalPages===void 0?[]:this.pageLinks()},hasFirst(){return this.pagination.currentPage>=4||this.pagination.totalPages<10},hasLast(){return this.pagination.currentPage<=this.pagination.totalPages-3||this.pagination.totalPages<10},hasFirstEllipsis(){return this.pagination.currentPage>=4&&this.pagination.totalPages>=10},hasLastEllipsis(){return this.pagination.currentPage<=this.pagination.totalPages-3&&this.pagination.totalPages>=10},shouldShowPagination(){return this.pagination.totalPages===void 0||this.pagination.count===0?!1:this.pagination.totalPages>1}},methods:{isActive(a){return(this.pagination.currentPage||1)===a},pageClicked(a){a==="..."||a===this.pagination.currentPage||a>this.pagination.totalPages||a<1||this.$emit("pageChange",a)},pageLinks(){const a=[];let t=2,e=this.pagination.totalPages-1;this.pagination.totalPages>=10&&(t=Math.max(1,this.pagination.currentPage-2),e=Math.min(this.pagination.currentPage+2,this.pagination.totalPages));for(let n=t;n<=e;n++)a.push(n);return a}}},re={key:0,class:"flex items-center justify-between px-4 py-3 bg-white border-t border-gray-200 sm:px-6"},ie={class:"flex justify-between flex-1 sm:hidden"},se={class:"hidden sm:flex-1 sm:flex sm:items-center sm:justify-between"},le={class:"text-sm text-gray-700"},oe=_(" Showing "+h(" ")+" "),de={key:0,class:"font-medium"},ge=_(" "+h(" ")+" to "+h(" ")+" "),ce={key:1,class:"font-medium"},ue={key:0},he={key:1},fe=_(" "+h(" ")+" of "+h(" ")+" "),ye={key:2,class:"font-medium"},me=_(" "+h(" ")+" results "),pe={class:"relative z-0 inline-flex -space-x-px rounded-md shadow-sm","aria-label":"Pagination"},be=c("span",{class:"sr-only"},"Previous",-1),xe={key:1,class:"relative inline-flex items-center px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300"},ve=["onClick"],ke={key:2,class:"relative inline-flex items-center px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300"},Ce=c("span",{class:"sr-only"},"Next",-1);function Pe(a,t,e,n,b,l){const g=T("BaseIcon");return l.shouldShowPagination?(i(),s("div",re,[c("div",ie,[c("a",{href:"#",class:u([{"disabled cursor-normal pointer-events-none !bg-gray-100 !text-gray-400":e.pagination.currentPage===1},"relative inline-flex items-center px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md hover:bg-gray-50"]),onClick:t[0]||(t[0]=d=>l.pageClicked(e.pagination.currentPage-1))}," Previous ",2),c("a",{href:"#",class:u([{"disabled cursor-default pointer-events-none !bg-gray-100 !text-gray-400":e.pagination.currentPage===e.pagination.totalPages},"relative inline-flex items-center px-4 py-2 ml-3 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md hover:bg-gray-50"]),onClick:t[1]||(t[1]=d=>l.pageClicked(e.pagination.currentPage+1))}," Next ",2)]),c("div",se,[c("div",null,[c("p",le,[oe,e.pagination.limit&&e.pagination.currentPage?(i(),s("span",de,h(e.pagination.currentPage*e.pagination.limit-(e.pagination.limit-1)),1)):m("",!0),ge,e.pagination.limit&&e.pagination.currentPage?(i(),s("span",ce,[e.pagination.currentPage*e.pagination.limit<=e.pagination.totalCount?(i(),s("span",ue,h(e.pagination.currentPage*e.pagination.limit),1)):(i(),s("span",he,h(e.pagination.totalCount),1))])):m("",!0),fe,e.pagination.totalCount?(i(),s("span",ye,h(e.pagination.totalCount),1)):m("",!0),me])]),c("div",null,[c("nav",pe,[c("a",{href:"#",class:u([{"disabled cursor-normal pointer-events-none !bg-gray-100 !text-gray-400":e.pagination.currentPage===1},"relative inline-flex items-center px-2 py-2 text-sm font-medium text-gray-500 bg-white border border-gray-300 rounded-l-md hover:bg-gray-50"]),onClick:t[2]||(t[2]=d=>l.pageClicked(e.pagination.currentPage-1))},[be,k(g,{name:"ChevronLeftIcon"})],2),l.hasFirst?(i(),s("a",{key:0,href:"#","aria-current":"page",class:u([{"z-10 bg-primary-50 border-primary-500 text-primary-600":l.isActive(1),"bg-white border-gray-300 text-gray-500 hover:bg-gray-50":!l.isActive(1)},"relative inline-flex items-center px-4 py-2 text-sm font-medium border"]),onClick:t[3]||(t[3]=d=>l.pageClicked(1))}," 1 ",2)):m("",!0),l.hasFirstEllipsis?(i(),s("span",xe," ... ")):m("",!0),(i(!0),s(C,null,P(l.pages,d=>(i(),s("a",{key:d,href:"#",class:u([{"z-10 bg-primary-50 border-primary-500 text-primary-600":l.isActive(d),"bg-white border-gray-300 text-gray-500 hover:bg-gray-50":!l.isActive(d),disabled:d==="..."},"relative items-center hidden px-4 py-2 text-sm font-medium text-gray-500 bg-white border border-gray-300 hover:bg-gray-50 md:inline-flex"]),onClick:p=>l.pageClicked(d)},h(d),11,ve))),128)),l.hasLastEllipsis?(i(),s("span",ke," ... ")):m("",!0),l.hasLast?(i(),s("a",{key:3,href:"#","aria-current":"page",class:u([{"z-10 bg-primary-50 border-primary-500 text-primary-600":l.isActive(e.pagination.totalPages),"bg-white border-gray-300 text-gray-500 hover:bg-gray-50":!l.isActive(e.pagination.totalPages)},"relative inline-flex items-center px-4 py-2 text-sm font-medium border"]),onClick:t[4]||(t[4]=d=>l.pageClicked(e.pagination.totalPages))},h(e.pagination.totalPages),3)):m("",!0),c("a",{href:"#",class:u(["relative inline-flex items-center px-2 py-2 text-sm font-medium text-gray-500 bg-white border border-gray-300 rounded-r-md hover:bg-gray-50",{"disabled cursor-default pointer-events-none !bg-gray-100 !text-gray-400":e.pagination.currentPage===e.pagination.totalPages}]),onClick:t[5]||(t[5]=d=>l.pageClicked(e.pagination.currentPage+1))},[Ce,k(g,{name:"ChevronRightIcon"})],2)])])])])):m("",!0)}var _e=Z(ne,[["render",Pe]]);const we={class:"flex flex-col"},Se={class:"-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8 pb-4 lg:pb-0"},Te={class:"inline-block min-w-full py-2 align-middle sm:px-6 lg:px-8"},Ne={class:"relative overflow-hidden bg-white border-b border-gray-200 shadow sm:rounded-lg"},Be=["onClick"],Fe={key:0,class:"asc-direction"},Ae={key:1,class:"desc-direction"},Le={key:0},Ve={key:1},De={key:0,class:"absolute top-0 left-0 z-10 flex items-center justify-center w-full h-full bg-white bg-opacity-60"},Ie={key:1,class:"text-center text-gray-500 pb-2 flex h-[160px] justify-center items-center flex-col"},Me={class:"block mt-1"},Re={props:{columns:{type:Array,required:!0},data:{type:[Array,Function],required:!0},sortBy:{type:String,default:""},sortOrder:{type:String,default:""},tableClass:{type:String,default:"min-w-full divide-y divide-gray-200"},theadClass:{type:String,default:"bg-gray-50"},tbodyClass:{type:String,default:""},noResultsMessage:{type:String,default:"No Results Found"},loading:{type:Boolean,default:!1},loadingType:{type:String,default:"placeholder",validator:function(a){return["placeholder","spinner"].indexOf(a)!==-1}},placeholderCount:{type:Number,default:3}},setup(a,{expose:t}){const e=a;let n=N([]),b=F(!1),l=N(e.columns.map(r=>new ae(r))),g=N({fieldName:"",order:""}),d=F("");const p=A(()=>Array.isArray(e.data)),x=A(()=>{if(!p.value||g.fieldName===""||l.length===0)return n.value;const r=D(g.fieldName);return r?[...n.value].sort(r.getSortPredicate(g.order,l)):n.value});function D(r){return l.find(o=>o.key===r)}function I(r){let o="whitespace-nowrap px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider";return r.defaultThClass&&(o=r.defaultThClass),r.sortable?o=`${o} cursor-pointer`:o=`${o} pointer-events-none`,r.thClass&&(o=`${o} ${r.thClass}`),o}function B(r){let o="px-6 py-4 text-sm text-gray-500 whitespace-nowrap";return r.defaultTdClass&&(o=r.defaultTdClass),r.tdClass&&(o=`${o} ${r.tdClass}`),o}function M(r){let o="w-full";return r.placeholderClass&&(o=`${o} ${r.placeholderClass}`),o}function z(){return d.value=null,e.data}async function E(){const r=d.value&&d.value.currentPage||1;b.value=!0;const o=await e.data({sort:g,page:r});return b.value=!1,d.value=o.pagination,o.data}function R(r){g.fieldName!==r.key?(g.fieldName=r.key,g.order="asc"):g.order=g.order==="asc"?"desc":"asc",p.value||w()}async function w(){const r=p.value?z():await E();n.value=r.map(o=>new te(o,l))}async function j(r){d.value.currentPage=r,await w()}async function H(){await w()}function Y(r,o){return U.exports.get(r,o)}return p.value&&J(()=>e.data,()=>{w()}),K(async()=>{await w()}),t({refresh:H}),(r,o)=>{const W=T("base-content-placeholders-text"),q=T("base-content-placeholders"),G=T("BaseIcon");return i(),s("div",we,[c("div",Se,[c("div",Te,[c("div",Ne,[L(r.$slots,"header"),c("table",{class:u(a.tableClass)},[c("thead",{class:u(a.theadClass)},[c("tr",null,[(i(!0),s(C,null,P(f(l),y=>(i(),s("th",{key:y.key,class:u([I(y),{"text-bold text-black":f(g).fieldName===y.key}]),onClick:v=>R(y)},[_(h(y.label)+" ",1),f(g).fieldName===y.key&&f(g).order==="asc"?(i(),s("span",Fe," \u2191 ")):m("",!0),f(g).fieldName===y.key&&f(g).order==="desc"?(i(),s("span",Ae," \u2193 ")):m("",!0)],10,Be))),128))])],2),a.loadingType==="placeholder"&&(a.loading||f(b))?(i(),s("tbody",Le,[(i(!0),s(C,null,P(a.placeholderCount,y=>(i(),s("tr",{key:y,class:u(y%2==0?"bg-white":"bg-gray-50")},[(i(!0),s(C,null,P(a.columns,v=>(i(),s("td",{key:v.key,class:u(["",B(v)])},[k(q,{class:u(M(v)),rounded:!0},{default:Q(()=>[k(W,{class:"w-full h-6",lines:1})]),_:2},1032,["class"])],2))),128))],2))),128))])):(i(),s("tbody",Ve,[(i(!0),s(C,null,P(f(x),(y,v)=>(i(),s("tr",{key:v,class:u(v%2==0?"bg-white":"bg-gray-50")},[(i(!0),s(C,null,P(a.columns,S=>(i(),s("td",{key:S.key,class:u(["",B(S)])},[L(r.$slots,"cell-"+S.key,{row:y},()=>[_(h(Y(y.data,S.key)),1)])],2))),128))],2))),128))]))],2),a.loadingType==="spinner"&&(a.loading||f(b))?(i(),s("div",De,[k($,{class:"w-10 h-10 text-primary-500"})])):!a.loading&&!f(b)&&f(x)&&f(x).length===0?(i(),s("div",Ie,[k(G,{name:"ExclamationCircleIcon",class:"w-6 h-6 text-gray-400"}),c("span",Me,h(a.noResultsMessage),1)])):m("",!0),f(d)?(i(),X(_e,{key:2,pagination:f(d),onPageChange:j},null,8,["pagination"])):m("",!0)])])])])}}};export{Re as default};
