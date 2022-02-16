import{G as ie,aN as de,J as ue,B as q,k as b,L as m,M as $,b2 as ce,S as N,O as pe,aP as me,T as ge,b1 as xe,r as d,o as v,e as _e,f as r,w as o,h as F,u as e,l as h,m as U,i as w,t as S,j as C,x as fe,U as ye,F as ve}from"./vendor.d12b5734.js";import{u as Ee}from"./expense.38426137.js";import{u as be}from"./category.da7287ab.js";import{l as $e,b as he,m as Ce,c as Be,d as Ve}from"./main.06577e8c.js";import{_ as we}from"./CreateCustomFields.0e9a8f21.js";import{_ as Se}from"./CategoryModal.2a84178f.js";import{_ as Me}from"./ExchangeRateConverter.51225bb9.js";import"./exchange-rate.4132c0bf.js";const Ie=["onSubmit"],ke={class:"hidden md:block"},qe={class:"block md:hidden"},Ae={setup(Fe){const _=$e(),j=he(),t=Ee(),f=be(),G=Ce(),T=Be(),y=ie(),A=de(),{t:u}=ue(),D=Ve();let g=q(!1),i=q(!1);const R="newExpense",M=q(!1),L=b(()=>({currentExpense:{expense_category_id:{required:m.withMessage(u("validation.required"),$)},expense_date:{required:m.withMessage(u("validation.required"),$)},amount:{required:m.withMessage(u("validation.required"),$),minValue:m.withMessage(u("validation.price_minvalue"),ce(.1)),maxLength:m.withMessage(u("validation.price_maxlength"),N(20))},notes:{maxLength:m.withMessage(u("validation.description_maxlength"),N(65e3))},currency_id:{required:m.withMessage(u("validation.required"),$)},exchange_rate:{required:pe(function(){return m.withMessage(u("validation.required"),$),t.showExchangeRate}),decimal:m.withMessage(u("validation.valid_exchange_rate"),me)}}})),l=ge(L,t,{$scope:R}),I=b({get:()=>t.currentExpense.amount/100,set:a=>{t.currentExpense.amount=Math.round(a*100)}}),c=b(()=>y.name==="expenses.edit"),P=b(()=>c.value?u("expenses.edit_expense"):u("expenses.new_expense")),O=b(()=>c.value?`/reports/expenses/${y.params.id}/download-receipt`:"");t.resetCurrentExpenseData(),G.resetCustomFields(),X();function z(a,n){t.currentExpense.attachment_receipt=n}function H(){t.currentExpense.attachment_receipt=null,M.value=!0}function J(){T.openModal({title:u("settings.expense_category.add_category"),componentName:"CategoryModal",size:"sm"})}function K(a){t.currentExpense.selectedCurrency=D.currencies.find(n=>n.id===a)}async function Q(a){let n=await f.fetchCategories({search:a});if(n.data.data.length>0&&f.editCategory&&!n.data.data.find(p=>p.id==f.editCategory.id)){let p=Object.assign({},f.editCategory);n.data.data.unshift(p)}return n.data.data}async function W(a){let n=await _.fetchCustomers({search:a});if(n.data.data.length>0&&_.editCustomer&&!n.data.data.find(p=>p.id==_.editCustomer.id)){let p=Object.assign({},_.editCustomer);n.data.data.unshift(p)}return n.data.data}async function X(){if(c.value||(t.currentExpense.currency_id=j.selectedCompanyCurrency.id,t.currentExpense.selectedCurrency=j.selectedCompanyCurrency),i.value=!0,await t.fetchPaymentModes({limit:"all"}),c.value){const a=await t.fetchExpense(y.params.id);t.currentExpense.currency_id=t.currentExpense.selectedCurrency.id,a.data&&(!f.editCategory&&a.data.data.expense_category&&(f.editCategory=a.data.data.expense_category),!_.editCustomer&&a.data.data.customer&&(_.editCustomer=a.data.data.customer))}else y.query.customer&&(t.currentExpense.customer_id=y.query.customer);i.value=!1}async function Y(){if(l.value.$touch(),l.value.$invalid)return;g.value=!0;let a=t.currentExpense;try{c.value?await t.updateExpense({id:y.params.id,data:a,isAttachmentReceiptRemoved:M.value}):await t.addExpense(a),g.value=!1,t.currentExpense.attachment_receipt=null,M.value=!1,A.push("/admin/expenses")}catch(n){console.error(n),g.value=!1;return}}return xe(()=>{t.resetCurrentExpenseData(),_.editCustomer=null,f.editCategory=null}),(a,n)=>{const E=d("BaseBreadcrumbItem"),p=d("BaseBreadcrumb"),B=d("BaseIcon"),k=d("BaseButton"),Z=d("BasePageHeader"),ee=d("BaseSelectAction"),V=d("BaseMultiselect"),x=d("BaseInputGroup"),te=d("BaseDatePicker"),ne=d("BaseMoney"),ae=d("BaseTextarea"),re=d("BaseFileUploader"),se=d("BaseInputGrid"),oe=d("BaseCard"),le=d("BasePage");return v(),_e(ve,null,[r(Se),r(le,{class:"relative"},{default:o(()=>[F("form",{action:"",onSubmit:ye(Y,["prevent"])},[r(Z,{title:e(P),class:"mb-5"},{actions:o(()=>[e(c)&&e(t).currentExpense.attachment_receipt_url?(v(),h(k,{key:0,href:e(O),tag:"a",variant:"primary-outline",type:"button",class:"mr-2"},{left:o(s=>[r(B,{name:"DownloadIcon",class:U(s.class)},null,8,["class"])]),default:o(()=>[w(" "+S(a.$t("expenses.download_receipt")),1)]),_:1},8,["href"])):C("",!0),F("div",ke,[r(k,{loading:e(g),"content-loading":e(i),disabled:e(g),variant:"primary",type:"submit"},{left:o(s=>[e(g)?C("",!0):(v(),h(B,{key:0,name:"SaveIcon",class:U(s.class)},null,8,["class"]))]),default:o(()=>[w(" "+S(e(c)?a.$t("expenses.update_expense"):a.$t("expenses.save_expense")),1)]),_:1},8,["loading","content-loading","disabled"])])]),default:o(()=>[r(p,null,{default:o(()=>[r(E,{title:a.$t("general.home"),to:"/admin/dashboard"},null,8,["title"]),r(E,{title:a.$tc("expenses.expense",2),to:"/admin/expenses"},null,8,["title"]),r(E,{title:e(P),to:"#",active:""},null,8,["title"])]),_:1})]),_:1},8,["title"]),r(oe,null,{default:o(()=>[r(se,null,{default:o(()=>[r(x,{label:a.$t("expenses.category"),error:e(l).currentExpense.expense_category_id.$error&&e(l).currentExpense.expense_category_id.$errors[0].$message,"content-loading":e(i),required:""},{default:o(()=>[e(i)?C("",!0):(v(),h(V,{key:0,modelValue:e(t).currentExpense.expense_category_id,"onUpdate:modelValue":n[0]||(n[0]=s=>e(t).currentExpense.expense_category_id=s),"content-loading":e(i),"value-prop":"id",label:"name","track-by":"id",options:Q,"filter-results":!1,"resolve-on-load":"",delay:500,searchable:"",invalid:e(l).currentExpense.expense_category_id.$error,placeholder:a.$t("expenses.categories.select_a_category"),onInput:n[1]||(n[1]=s=>e(l).currentExpense.expense_category_id.$touch())},{action:o(()=>[r(ee,{onClick:J},{default:o(()=>[r(B,{name:"PlusIcon",class:"h-4 mr-2 -ml-2 text-center text-primary-400"}),w(" "+S(a.$t("settings.expense_category.add_new_category")),1)]),_:1})]),_:1},8,["modelValue","content-loading","invalid","placeholder"]))]),_:1},8,["label","error","content-loading"]),r(x,{label:a.$t("expenses.expense_date"),error:e(l).currentExpense.expense_date.$error&&e(l).currentExpense.expense_date.$errors[0].$message,"content-loading":e(i),required:""},{default:o(()=>[r(te,{modelValue:e(t).currentExpense.expense_date,"onUpdate:modelValue":n[2]||(n[2]=s=>e(t).currentExpense.expense_date=s),"content-loading":e(i),"calendar-button":!0,invalid:e(l).currentExpense.expense_date.$error,onInput:n[3]||(n[3]=s=>e(l).currentExpense.expense_date.$touch())},null,8,["modelValue","content-loading","invalid"])]),_:1},8,["label","error","content-loading"]),r(x,{label:a.$t("expenses.amount"),error:e(l).currentExpense.amount.$error&&e(l).currentExpense.amount.$errors[0].$message,"content-loading":e(i),required:""},{default:o(()=>[r(ne,{key:e(t).currentExpense.selectedCurrency,modelValue:e(I),"onUpdate:modelValue":n[4]||(n[4]=s=>fe(I)?I.value=s:null),class:"focus:border focus:border-solid focus:border-primary-500",invalid:e(l).currentExpense.amount.$error,currency:e(t).currentExpense.selectedCurrency,onInput:n[5]||(n[5]=s=>e(l).currentExpense.amount.$touch())},null,8,["modelValue","invalid","currency"])]),_:1},8,["label","error","content-loading"]),r(x,{label:a.$t("expenses.currency"),"content-loading":e(i),error:e(l).currentExpense.currency_id.$error&&e(l).currentExpense.currency_id.$errors[0].$message,required:""},{default:o(()=>[r(V,{modelValue:e(t).currentExpense.currency_id,"onUpdate:modelValue":[n[6]||(n[6]=s=>e(t).currentExpense.currency_id=s),K],"value-prop":"id",label:"name","track-by":"name","content-loading":e(i),options:e(D).currencies,searchable:"","can-deselect":!1,placeholder:a.$t("customers.select_currency"),invalid:e(l).currentExpense.currency_id.$error,class:"w-full"},null,8,["modelValue","content-loading","options","placeholder","invalid"])]),_:1},8,["label","content-loading","error"]),r(Me,{store:e(t),"store-prop":"currentExpense",v:e(l).currentExpense,"is-loading":e(i),"is-edit":e(c),"customer-currency":e(t).currentExpense.currency_id},null,8,["store","v","is-loading","is-edit","customer-currency"]),r(x,{"content-loading":e(i),label:a.$t("expenses.customer")},{default:o(()=>[e(i)?C("",!0):(v(),h(V,{key:0,modelValue:e(t).currentExpense.customer_id,"onUpdate:modelValue":n[7]||(n[7]=s=>e(t).currentExpense.customer_id=s),"content-loading":e(i),"value-prop":"id",label:"name","track-by":"id",options:W,"filter-results":!1,"resolve-on-load":"",delay:500,searchable:"",placeholder:a.$t("customers.select_a_customer")},null,8,["modelValue","content-loading","placeholder"]))]),_:1},8,["content-loading","label"]),r(x,{"content-loading":e(i),label:a.$t("payments.payment_mode")},{default:o(()=>[r(V,{modelValue:e(t).currentExpense.payment_method_id,"onUpdate:modelValue":n[8]||(n[8]=s=>e(t).currentExpense.payment_method_id=s),"content-loading":e(i),label:"name","value-prop":"id","track-by":"name",options:e(t).paymentModes,placeholder:a.$t("payments.select_payment_mode"),searchable:""},null,8,["modelValue","content-loading","options","placeholder"])]),_:1},8,["content-loading","label"]),r(x,{"content-loading":e(i),label:a.$t("expenses.note"),error:e(l).currentExpense.notes.$error&&e(l).currentExpense.notes.$errors[0].$message},{default:o(()=>[r(ae,{modelValue:e(t).currentExpense.notes,"onUpdate:modelValue":n[9]||(n[9]=s=>e(t).currentExpense.notes=s),"content-loading":e(i),row:4,rows:"4",onInput:n[10]||(n[10]=s=>e(l).currentExpense.notes.$touch())},null,8,["modelValue","content-loading"])]),_:1},8,["content-loading","label","error"]),r(x,{label:a.$t("expenses.receipt")},{default:o(()=>[r(re,{modelValue:e(t).currentExpense.receiptFiles,"onUpdate:modelValue":n[11]||(n[11]=s=>e(t).currentExpense.receiptFiles=s),accept:"image/*,.doc,.docx,.pdf,.csv,.xlsx,.xls",onChange:z,onRemove:H},null,8,["modelValue"])]),_:1},8,["label"]),r(we,{"is-edit":e(c),class:"col-span-2","is-loading":e(i),type:"Expense",store:e(t),"store-prop":"currentExpense","custom-field-scope":R},null,8,["is-edit","is-loading","store"]),F("div",qe,[r(k,{loading:e(g),tabindex:6,variant:"primary",type:"submit",class:"flex justify-center w-full"},{left:o(s=>[e(g)?C("",!0):(v(),h(B,{key:0,name:"SaveIcon",class:U(s.class)},null,8,["class"]))]),default:o(()=>[w(" "+S(e(c)?a.$t("expenses.update_expense"):a.$t("expenses.save_expense")),1)]),_:1},8,["loading"])])]),_:1})]),_:1})],40,Ie)]),_:1})],64)}}};export{Ae as default};
