import{g as ue,am as de,i as b,C as me,j as _e,k as w,aS as fe,aT as ve,r as o,o as B,s as g,w as a,b as t,Z as k,al as E,y as s,z as I,v as d,x as m,A as U,a5 as W,t as f,a0 as pe}from"./vendor.e9042f2c.js";import{f as be,i as Be,u as ge,d as Ie,e as v}from"./main.109918ee.js";import{M as he}from"./MoonwalkerIcon.ad875564.js";import{_ as ye}from"./InvoiceIndexDropdown.47602d2c.js";import{_ as Ce}from"./SendInvoiceModal.ef4de96a.js";const ke=f("div",{class:"hidden w-8 h-0 mx-4 border border-gray-400 border-solid xl:block",style:{"margin-top":"1.5rem"}},null,-1),Ee={class:"relative table-container"},Ve={class:"relative flex items-center justify-between h-10 mt-5 list-none border-b-2 border-gray-200 border-solid"},Te={class:"flex text-sm font-medium cursor-pointer select-none text-primary-400"},$e={class:"absolute items-center left-6 top-2.5 select-none"},De={class:"relative block"},Se={class:"flex justify-between"},Re={setup(Ae){const c=be(),G=Be();ge();const{t:r}=ue();de("$utils");const h=b(null),p=b(!1);b(["DRAFT","SENT","VIEWED","EXPIRED","ACCEPTED","REJECTED"]);const V=b(!0),T=b("general.draft");me();const y=Ie();let n=_e({customer_id:"",status:"DRAFT",from_date:"",to_date:"",invoice_number:""});const N=w(()=>!c.invoiceTotalCount&&!V.value),$=w({get:()=>c.selectedInvoices,set:l=>c.selectInvoice(l)}),L=w(()=>[{key:"checkbox",thClass:"extra w-10",tdClass:"font-medium text-gray-900",placeholderClass:"w-10",sortable:!1},{key:"invoice_date",label:r("invoices.date"),thClass:"extra",tdClass:"font-medium"},{key:"invoice_number",label:r("invoices.number")},{key:"name",label:r("invoices.customer")},{key:"status",label:r("invoices.status")},{key:"due_amount",label:r("dashboard.recent_invoices_card.amount_due")},{key:"total",label:r("invoices.total"),tdClass:"font-medium text-gray-900"},{key:"actions",label:r("invoices.action"),tdClass:"text-right text-sm font-medium",thClass:"text-right",sortable:!1}]);fe(n,()=>{q()},{debounce:500}),ve(()=>{c.selectAllField&&c.selectAllInvoices()});function z(){return y.hasAbilities([v.DELETE_INVOICE,v.EDIT_INVOICE,v.VIEW_INVOICE,v.SEND_INVOICE])}function P(){h.value&&h.value.refresh()}async function H({page:l,filter:i,sort:_}){let D={customer_id:n.customer_id,status:n.status,from_date:n.from_date,to_date:n.to_date,invoice_number:n.invoice_number,orderByField:_.fieldName||"created_at",orderBy:_.order||"desc",page:l};V.value=!0;let u=await c.fetchInvoices(D);return V.value=!1,{data:u.data.data,pagination:{totalPages:u.data.meta.last_page,currentPage:l,totalCount:u.data.meta.total,limit:10}}}function X(l){if(T.value==l.title)return!0;switch(T.value=l.title,l.title){case r("general.draft"):n.status="DRAFT";break;case r("general.sent"):n.status="SENT";break;default:n.status="";break}}function q(){c.$patch(l=>{l.selectedInvoices=[],l.selectAllField=!1}),P()}function x(){n.customer_id="",n.status="",n.from_date="",n.to_date="",n.invoice_number="",T.value=r("general.all")}async function J(){G.openDialog({title:r("general.are_you_sure"),message:r("invoices.confirm_delete"),yesLabel:r("general.ok"),noLabel:r("general.cancel"),variant:"danger",hideNoButton:!1,size:"lg"}).then(async l=>{l&&await c.deleteMultipleInvoices().then(i=>{i.data.success&&(P(),c.$patch(_=>{_.selectedInvoices=[],_.selectAllField=!1}))})})}function Z(){p.value&&x(),p.value=!p.value}return(l,i)=>{const _=o("BaseBreadcrumbItem"),D=o("BaseBreadcrumb"),u=o("BaseIcon"),S=o("BaseButton"),R=o("router-link"),K=o("BasePageHeader"),Q=o("BaseCustomerSelectInput"),C=o("BaseInputGroup"),j=o("BaseDatePicker"),Y=o("BaseInput"),ee=o("BaseFilterWrapper"),te=o("BaseEmptyPlaceholder"),A=o("BaseTab"),ae=o("BaseTabGroup"),le=o("BaseDropdownItem"),se=o("BaseDropdown"),O=o("BaseCheckbox"),oe=o("BaseText"),M=o("BaseFormatMoney"),ne=o("BaseInvoiceStatusBadge"),ie=o("BasePaidStatusBadge"),ce=o("BaseTable"),re=o("BasePage");return B(),g(re,null,{default:a(()=>[t(Ce),t(K,{title:l.$t("invoices.title")},{actions:a(()=>[k(t(S,{variant:"primary-outline",onClick:Z},{right:a(e=>[p.value?(B(),g(u,{key:1,name:"XIcon",class:I(e.class)},null,8,["class"])):(B(),g(u,{key:0,name:"FilterIcon",class:I(e.class)},null,8,["class"]))]),default:a(()=>[d(m(l.$t("general.filter"))+" ",1)]),_:1},512),[[E,s(c).invoiceTotalCount]]),s(y).hasAbilities(s(v).CREATE_INVOICE)?(B(),g(R,{key:0,to:"invoices/create"},{default:a(()=>[t(S,{variant:"primary",class:"ml-4"},{left:a(e=>[t(u,{name:"PlusIcon",class:I(e.class)},null,8,["class"])]),default:a(()=>[d(" "+m(l.$t("invoices.new_invoice")),1)]),_:1})]),_:1})):U("",!0)]),default:a(()=>[t(D,null,{default:a(()=>[t(_,{title:l.$t("general.home"),to:"dashboard"},null,8,["title"]),t(_,{title:l.$tc("invoices.invoice",2),to:"#",active:""},null,8,["title"])]),_:1})]),_:1},8,["title"]),k(t(ee,{onClear:x},{default:a(()=>[t(C,{label:l.$tc("customers.customer",1)},{default:a(()=>[t(Q,{modelValue:s(n).customer_id,"onUpdate:modelValue":i[0]||(i[0]=e=>s(n).customer_id=e),placeholder:l.$t("customers.type_or_click"),"value-prop":"id",label:"name"},null,8,["modelValue","placeholder"])]),_:1},8,["label"]),t(C,{label:l.$t("general.from")},{default:a(()=>[t(j,{modelValue:s(n).from_date,"onUpdate:modelValue":i[1]||(i[1]=e=>s(n).from_date=e),"calendar-button":!0,"calendar-button-icon":"calendar"},null,8,["modelValue"])]),_:1},8,["label"]),ke,t(C,{label:l.$t("general.to"),class:"mt-2"},{default:a(()=>[t(j,{modelValue:s(n).to_date,"onUpdate:modelValue":i[2]||(i[2]=e=>s(n).to_date=e),"calendar-button":!0,"calendar-button-icon":"calendar"},null,8,["modelValue"])]),_:1},8,["label"]),t(C,{label:l.$t("invoices.invoice_number")},{default:a(()=>[t(Y,{modelValue:s(n).invoice_number,"onUpdate:modelValue":i[3]||(i[3]=e=>s(n).invoice_number=e)},{left:a(e=>[t(u,{name:"HashtagIcon",class:I(e.class)},null,8,["class"])]),_:1},8,["modelValue"])]),_:1},8,["label"])]),_:1},512),[[E,p.value]]),k(t(te,{title:l.$t("invoices.no_invoices"),description:l.$t("invoices.list_of_invoices")},W({default:a(()=>[t(he,{class:"mt-5 mb-4"})]),_:2},[s(y).hasAbilities(s(v).CREATE_INVOICE)?{name:"actions",fn:a(()=>[t(S,{variant:"primary-outline",onClick:i[4]||(i[4]=e=>l.$router.push("/admin/invoices/create"))},{left:a(e=>[t(u,{name:"PlusIcon",class:I(e.class)},null,8,["class"])]),default:a(()=>[d(" "+m(l.$t("invoices.add_new_invoice")),1)]),_:1})])}:void 0]),1032,["title","description"]),[[E,s(N)]]),k(f("div",Ee,[f("div",Ve,[t(ae,{class:"-mb-5",onChange:X},{default:a(()=>[t(A,{title:l.$t("general.draft"),filter:"DRAFT"},null,8,["title"]),t(A,{title:l.$t("general.sent"),filter:"SENT"},null,8,["title"]),t(A,{title:l.$t("general.all"),filter:""},null,8,["title"])]),_:1}),s(c).selectedInvoices.length&&s(y).hasAbilities(s(v).DELETE_INVOICE)?(B(),g(se,{key:0,class:"absolute float-right"},{activator:a(()=>[f("span",Te,[d(m(l.$t("general.actions"))+" ",1),t(u,{name:"ChevronDownIcon"})])]),default:a(()=>[t(le,{onClick:J},{default:a(()=>[t(u,{name:"TrashIcon",class:"mr-3 text-gray-600"}),d(" "+m(l.$t("general.delete")),1)]),_:1})]),_:1})):U("",!0)]),t(ce,{ref:(e,F)=>{F.table=e,h.value=e},data:H,columns:s(L),"placeholder-count":s(c).invoiceTotalCount>=20?10:5,class:"mt-10"},W({header:a(()=>[f("div",$e,[t(O,{modelValue:s(c).selectAllField,"onUpdate:modelValue":i[5]||(i[5]=e=>s(c).selectAllField=e),variant:"primary",onChange:s(c).selectAllInvoices},null,8,["modelValue","onChange"])])]),"cell-checkbox":a(({row:e})=>[f("div",De,[t(O,{id:e.id,modelValue:s($),"onUpdate:modelValue":i[6]||(i[6]=F=>pe($)?$.value=F:null),value:e.data.id},null,8,["id","modelValue","value"])])]),"cell-name":a(({row:e})=>[t(oe,{text:e.data.customer.name,length:30},null,8,["text"])]),"cell-invoice_number":a(({row:e})=>[t(R,{to:{path:`invoices/${e.data.id}/view`},class:"font-medium text-primary-500"},{default:a(()=>[d(m(e.data.invoice_number),1)]),_:2},1032,["to"])]),"cell-invoice_date":a(({row:e})=>[d(m(e.data.formatted_invoice_date),1)]),"cell-total":a(({row:e})=>[t(M,{amount:e.data.total,currency:e.data.customer.currency},null,8,["amount","currency"])]),"cell-status":a(({row:e})=>[t(ne,{status:e.data.status,class:"px-3 py-1"},{default:a(()=>[d(m(e.data.status),1)]),_:2},1032,["status"])]),"cell-due_amount":a(({row:e})=>[f("div",Se,[t(M,{amount:e.data.due_amount,currency:e.data.currency},null,8,["amount","currency"]),t(ie,{status:e.data.paid_status,class:"px-1 py-0.5 ml-2"},{default:a(()=>[d(m(e.data.paid_status),1)]),_:2},1032,["status"])])]),_:2},[z()?{name:"cell-actions",fn:a(({row:e})=>[t(ye,{row:e.data,table:h.value},null,8,["row","table"])])}:void 0]),1032,["columns","placeholder-count"])],512),[[E,!s(N)]])]),_:1})}}};export{Re as default};
