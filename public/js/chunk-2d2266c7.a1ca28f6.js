(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d2266c7"],{e930:function(t,e,i){"use strict";i.r(e);var n=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-row",{attrs:{align:"center",justify:"center"}},[i("v-col",{attrs:{cols:"12",sm:"8",md:"12"}},[i("v-card",{staticClass:"elevation-12"},[i("v-toolbar",{attrs:{color:"primary",dark:"",flat:""}},[i("v-toolbar-title",[t._v("Add Purchase Return")]),i("v-spacer"),i("v-toolbar-title",[i("v-tooltip",{attrs:{left:""},scopedSlots:t._u([{key:"activator",fn:function(e){var n=e.on,r=e.attrs;return[i("v-btn",t._g(t._b({attrs:{icon:"",color:"dee-orange"},on:{click:function(e){return t.Back()}}},"v-btn",r,!1),n),[i("v-icon",[t._v("mdi-arrow-left-bold")])],1)]}}])},[i("span",[t._v("Back to List")])]),i("v-tooltip",{attrs:{left:""},scopedSlots:t._u([{key:"activator",fn:function(e){var n=e.on,r=e.attrs;return[i("v-btn",t._g(t._b({attrs:{icon:"",color:"dee-orange",link:"",to:"/purchase/return/add"}},"v-btn",r,!1),n),[i("v-icon",[t._v("mdi-restore")])],1)]}}])},[i("span",[t._v("New Data")])]),i("v-tooltip",{attrs:{left:""},scopedSlots:t._u([{key:"activator",fn:function(e){var n=e.on,r=e.attrs;return[i("v-btn",t._g(t._b({attrs:{icon:"",color:"dee-orange",loading:t.isLoading,disabled:t.isLoading},on:{click:t.submit}},"v-btn",r,!1),n),[i("v-icon",[t._v("mdi-content-save-move-outline")])],1)]}}])},[i("span",[t._v("Save Data")])])],1)],1),i("v-card-text",[i("v-form",[i("v-row",[i("v-col",{attrs:{cols:"12",sm:"12",md:"4"}},[i("v-text-field",{attrs:{label:"No.","prepend-icon":"mdi-numeric",type:"text",readonly:""},model:{value:t.fields.no,callback:function(e){t.$set(t.fields,"no",e)},expression:"fields.no"}})],1),i("v-col",{attrs:{cols:"12",sm:"12",md:"4"}},[i("v-menu",{attrs:{"close-on-content-click":!1,"nudge-right":40,transition:"scale-transition","offset-y":"","min-width":"290px"},scopedSlots:t._u([{key:"activator",fn:function(e){var n=e.on;return[i("v-text-field",t._g({attrs:{label:"Date","prepend-icon":"mdi-calendar",readonly:""},model:{value:t.date,callback:function(e){t.date=e},expression:"date"}},n))]}}]),model:{value:t.menu,callback:function(e){t.menu=e},expression:"menu"}},[i("v-date-picker",{on:{input:function(e){t.menu=!1}},model:{value:t.date,callback:function(e){t.date=e},expression:"date"}})],1)],1),i("v-col",{attrs:{cols:"12",sm:"12",md:"4"}},[i("v-autocomplete",{attrs:{"error-messages":t.supplierErrors,required:"",items:t.supplierItems,"hide-no-data":"","hide-selected":"","item-text":"Description","item-value":"_id",label:"Supplier",placeholder:"Start typing to Search","prepend-icon":"mdi-dresser","return-object":!1},on:{change:function(e){return t.loadInvoice(e)},input:function(e){return t.$v.fields.supplier.$touch()},blur:function(e){return t.$v.fields.supplier.$touch()}},model:{value:t.fields.supplier,callback:function(e){t.$set(t.fields,"supplier",e)},expression:"fields.supplier"}})],1)],1)],1),i("v-row",[i("v-col",{attrs:{cols:"12",sm:"6",md:"4"}},[i("v-autocomplete",{attrs:{"error-messages":t.invoiceErrors,required:"",items:t.invoiceItems,"hide-no-data":"","hide-selected":"","item-text":"Description","item-value":"_id",label:"Invoice",placeholder:"Start typing to Search","prepend-icon":"mdi-cart-outline","return-object":!1},on:{change:function(e){return t.getInvoiceItem(e)},input:function(e){return t.$v.fields.invoice.$touch()},blur:function(e){return t.$v.fields.invoice.$touch()}},model:{value:t.fields.invoice,callback:function(e){t.$set(t.fields,"invoice",e)},expression:"fields.invoice"}})],1),i("v-col",{attrs:{cols:"12",sm:"6",md:"8"}},[i("p",{staticClass:"display-2 text-right",staticStyle:{"padding-right":"10px"}},[t._v("Total : "+t._s(t._f("currency")(t.getSubtotal)))])])],1),i("v-row",[i("v-col",{attrs:{cols:"12",sm:"12",md:"12"}},[i("v-simple-table",{attrs:{dense:""},scopedSlots:t._u([{key:"default",fn:function(){return[i("thead",[i("tr",[i("th",{staticClass:"text-center"},[t._v("Name")]),i("th",{staticClass:"text-center",attrs:{width:"100px"}},[t._v("Invoice")]),i("th",{staticClass:"text-center",attrs:{width:"100px"}},[t._v("Qty")]),i("th",{staticClass:"text-center",attrs:{width:"200px;"}},[t._v("Cost")]),i("th",{staticClass:"text-center",attrs:{width:"200px;"}},[t._v("Total")])])]),i("tbody",t._l(t.fields.items,(function(e,n){return i("tr",{key:e.product},[i("td",[t._v(t._s(e.name))]),i("td",[t._v(t._s(e.invoice_qty))]),i("td",[i("v-currency-field",{attrs:{"decimal-length":0,"place-holder":"Qty"},on:{change:function(e){return t.checkQty(n)}},model:{value:e.qty,callback:function(i){t.$set(e,"qty",i)},expression:"item.qty"}})],1),i("td",{staticClass:"text-right"},[t._v(t._s(t._f("currency")(e.cost)))]),i("td",{staticClass:"text-right"},[t._v(t._s(t._f("currency")(e.qty*e.cost)))])])})),0)]},proxy:!0}])})],1)],1),i("v-row",[i("v-col",{attrs:{cols:"12",md:"6"}},[i("v-textarea",{attrs:{"prepend-icon":"mdi-note-text-outline",label:"Notes",value:"fields.notes",rows:"3"},model:{value:t.fields.notes,callback:function(e){t.$set(t.fields,"notes",e)},expression:"fields.notes"}})],1)],1)],1)],1)],1)],1)},r=[],a=(i("4160"),i("d81d"),i("b0c0"),i("d3b7"),i("ac1f"),i("25f0"),i("1276"),i("159b"),i("96cf"),i("1da1")),s=i("5530"),o=i("1dce"),c=i("b5ae"),u=i("2f62"),d={mixins:[o["validationMixin"]],validations:{fields:{supplier:{required:c["required"]},invoice:{required:c["required"]}}},computed:Object(s["a"])(Object(s["a"])({},Object(u["c"])(["user","purchaseReturnStatus"])),{},{supplierErrors:function(){var t=[];return this.$v.fields.supplier.$dirty?(!this.$v.fields.supplier.required&&t.push("Supplier is required."),t):t},invoiceErrors:function(){var t=[];return this.$v.fields.invoice.$dirty?(!this.$v.fields.invoice.required&&t.push("Invoice is required."),t):t},supplierItems:function(){return this.suppliers.map((function(t){var e=t.name;return Object.assign({},t,{Description:e})}))},invoiceItems:function(){return this.invoices.map((function(t){var e=t.no;return Object.assign({},t,{Description:e})}))},getSubtotal:function(){var t=this.fields.items;if(0!=t.length){for(var e=0,i=0;i<t.length;i++)e+=t[i].qty*t[i].cost;return e}}}),data:function(){return{fields:{id:!1,no:"",transdate:"",invoice:"",supplier:"",notes:"",user:"",items:[]},date:"",suppliers:[],invoices:[],products:[],isLoading:!1,menu:!1,page:""}},mounted:function(){var t=this;return Object(a["a"])(regeneratorRuntime.mark((function e(){var i,n,r;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,t.getSupplier();case 2:i=e.sent,n=i.data.data,n&&(t.suppliers=n),r=t.$route.params.id,void 0!=r?t.loadData(r):t.reset();case 7:case"end":return e.stop()}}),e)})))()},created:function(){var t=this.$route.query.page;this.page=t},methods:Object(s["a"])(Object(s["a"])({},Object(u["b"])(["getRtNo","getSupplier","addPurchaseReturn","getPiItem","getRtItem","updatePurchaseReturn","getPurchaseReturn","getInvoiceReturnable"])),{},{getDateTime:function(t){var e=new Date(t),i=(new Date).getHours().toString(),n=(new Date).getMinutes().toString(),r=(new Date).getSeconds().toString(),a=("00"+i).substring(i.length)+":"+("00"+n).substring(n.length)+":"+("00"+r).substring(r.length),s=this.getDate(e);return new Date(s+" "+a)},getDate:function(t){var e=t.getTimezoneOffset();return t=new Date(t.getTime()-60*e*1e3),t.toISOString().split("T")[0]},loadData:function(t){var e=this;return Object(a["a"])(regeneratorRuntime.mark((function i(){var n,r;return regeneratorRuntime.wrap((function(i){while(1)switch(i.prev=i.next){case 0:return i.next=2,e.getPurchaseReturn(t);case 2:if(n=i.sent,void 0!=n){i.next=5;break}return i.abrupt("return",e.$router.push({name:"rtlist"}));case 5:r=n.data.data,e.fields.id=t,e.fields.no=r.no,e.invoices.push(r.invoice),e.fields.invoice=r.invoice._id,e.fields.notes=r.notes,e.fields.user=e.user._id,e.fields.supplier=r.supplier._id,e.getItem(t),e.fields.transdate=r.transdate,e.date=e.getDate(new Date(r.transdate));case 16:case"end":return i.stop()}}),i)})))()},loadInvoice:function(t){var e=this;return Object(a["a"])(regeneratorRuntime.mark((function i(){var n,r;return regeneratorRuntime.wrap((function(i){while(1)switch(i.prev=i.next){case 0:return i.next=2,e.getInvoiceReturnable(t);case 2:n=i.sent,r=n.data.data,e.invoices=[],e.fields.items=[],void 0!=r&&r.forEach((function(t){e.invoices.push(t)}));case 7:case"end":return i.stop()}}),i)})))()},addData:function(){var t=this;this.isLoading=!0,this.addPurchaseReturn(this.fields).then((function(e){e.data.success&&(t.isLoading=!1,t.$router.push("/purchase/return/list"))}))},updateData:function(){var t=this;this.isLoading=!0,this.updatePurchaseReturn(this.fields).then((function(e){e.data.success&&(t.isLoading=!1,t.$router.push({name:"rtlist",params:{page:t.page}}))}))},reset:function(){var t=this;return Object(a["a"])(regeneratorRuntime.mark((function e(){var i;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,t.getRtNo();case 2:i=e.sent,t.fields.id=!1,t.fields.no=i.data.code,t.date=t.getDate(new Date),t.fields.supplier="",t.fields.notes="",t.fields.items=[],t.fields.user=t.user._id,t.fields.transdate=new Date;case 11:case"end":return e.stop()}}),e)})))()},getItem:function(t){var e=this,i={returns:t};this.getRtItem(i).then((function(t){if(t.data.success){var i=t.data.data;e.fields.items=[],i.forEach((function(t){t={name:t.product.name,invoice_item:t.invoice_item._id,product:t.product._id,cost:t.cost,invoice_qty:t.qty+(t.invoice_item.qty-t.invoice_item.return_qty),qty:t.qty},e.fields.items.push(t)}))}}))},getInvoiceItem:function(t){var e=this,i={invoice:t};this.getPiItem(i).then((function(t){if(t.data.success){var i=t.data.data;e.fields.items=[],i.forEach((function(t){t.qty-t.return_qty>0&&(t={name:t.product.name,invoice_item:t._id,product:t.product._id,cost:t.cost,invoice_qty:t.qty-t.return_qty,qty:0},e.fields.items.push(t))}))}}))},Back:function(){this.$router.push({name:"rtlist",params:{page:this.page}})},checkQty:function(t){var e=this.fields.items[t];e.qty>e.invoice_qty&&(e.qty=e.invoice_qty)},submit:function(){this.fields.transdate=this.getDateTime(this.date),this.$v.$touch(),this.$v.$error||(this.fields.id?this.updateData():this.addData())}})},l=d,v=i("2877"),p=i("6544"),f=i.n(p),m=i("c6a6"),h=i("8336"),g=i("b0af"),b=i("99d9"),_=i("62ad"),y=i("2e4b"),x=i("4bd4"),w=i("132d"),k=i("e449"),q=i("0fd9"),$=i("1f4f"),D=i("2fa4"),S=i("8654"),I=i("a844"),R=i("71d9"),V=i("2a7f"),j=i("3a2f"),O=Object(v["a"])(l,n,r,!1,null,null,null);e["default"]=O.exports;f()(O,{VAutocomplete:m["a"],VBtn:h["a"],VCard:g["a"],VCardText:b["b"],VCol:_["a"],VDatePicker:y["a"],VForm:x["a"],VIcon:w["a"],VMenu:k["a"],VRow:q["a"],VSimpleTable:$["a"],VSpacer:D["a"],VTextField:S["a"],VTextarea:I["a"],VToolbar:R["a"],VToolbarTitle:V["a"],VTooltip:j["a"]})}}]);
//# sourceMappingURL=chunk-2d2266c7.a1ca28f6.js.map