(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d237d2f"],{fd83:function(t,e,r){"use strict";r.r(e);var a=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("v-row",{attrs:{align:"center",justify:"center"}},[r("v-col",{attrs:{cols:"12",sm:"8",md:"12"}},[r("v-card",{staticClass:"elevation-12"},[r("v-toolbar",{attrs:{color:"primary",dark:"",flat:""}},[r("v-toolbar-title",[t._v("Add Purchase Order")]),r("v-spacer"),r("v-toolbar-title",[r("v-tooltip",{attrs:{left:""},scopedSlots:t._u([{key:"activator",fn:function(e){var a=e.on,s=e.attrs;return[r("v-btn",t._g(t._b({attrs:{icon:"",color:"dee-orange"},on:{click:function(e){return t.Back()}}},"v-btn",s,!1),a),[r("v-icon",[t._v("mdi-arrow-left-bold")])],1)]}}])},[r("span",[t._v("Back to List")])]),r("v-tooltip",{attrs:{left:""},scopedSlots:t._u([{key:"activator",fn:function(e){var a=e.on,s=e.attrs;return[r("v-btn",t._g(t._b({attrs:{icon:"",color:"dee-orange",link:"",to:"/purchase/order/add"}},"v-btn",s,!1),a),[r("v-icon",[t._v("mdi-restore")])],1)]}}])},[r("span",[t._v("New Data")])]),r("v-tooltip",{attrs:{left:""},scopedSlots:t._u([{key:"activator",fn:function(e){var a=e.on,s=e.attrs;return[r("v-btn",t._g(t._b({attrs:{icon:"",color:"dee-orange",loading:t.isLoading},on:{click:t.submit}},"v-btn",s,!1),a),[r("v-icon",[t._v("mdi-content-save-move-outline")])],1)]}}])},[r("span",[t._v("Save Data")])])],1)],1),r("v-card-text",[r("v-form",[r("v-row",[r("v-col",{attrs:{cols:"12",sm:"12",md:"4"}},[r("v-text-field",{attrs:{label:"No.","prepend-icon":"mdi-numeric",type:"text",readonly:""},model:{value:t.fields.no,callback:function(e){t.$set(t.fields,"no",e)},expression:"fields.no"}})],1),r("v-col",{attrs:{cols:"12",sm:"12",md:"4"}},[r("v-menu",{attrs:{"close-on-content-click":!1,"nudge-right":40,transition:"scale-transition","offset-y":"","min-width":"290px"},scopedSlots:t._u([{key:"activator",fn:function(e){var a=e.on;return[r("v-text-field",t._g({attrs:{label:"Date","prepend-icon":"mdi-calendar",readonly:""},model:{value:t.date,callback:function(e){t.date=e},expression:"date"}},a))]}}]),model:{value:t.menu,callback:function(e){t.menu=e},expression:"menu"}},[r("v-date-picker",{on:{input:function(e){t.menu=!1}},model:{value:t.date,callback:function(e){t.date=e},expression:"date"}})],1)],1),r("v-col",{attrs:{cols:"12",sm:"12",md:"4"}},[r("v-autocomplete",{attrs:{"error-messages":t.supplierErrors,required:"",items:t.supplierItems,"hide-no-data":"","hide-selected":"","item-text":"Description","item-value":"_id",label:"Supplier",placeholder:"Start typing to Search","prepend-icon":"mdi-dresser","return-object":!1},on:{input:function(e){return t.$v.fields.supplier.$touch()},blur:function(e){return t.$v.fields.supplier.$touch()}},model:{value:t.fields.supplier,callback:function(e){t.$set(t.fields,"supplier",e)},expression:"fields.supplier"}})],1)],1)],1),r("v-row",[r("v-col",{attrs:{cols:"12",sm:"6",md:"4"}},[r("v-autocomplete",{attrs:{items:t.productItems,"hide-no-data":"","hide-selected":"","item-text":"Description",label:"Product",placeholder:"Select Product","prepend-icon":"mdi-database-search","return-object":""},on:{change:function(e){return t.addItem()}},model:{value:t.productSelected,callback:function(e){t.productSelected=e},expression:"productSelected"}})],1),r("v-col",{attrs:{cols:"12",sm:"6",md:"8"}},[r("p",{staticClass:"display-2 text-right",staticStyle:{"padding-right":"10px"}},[t._v("Total : "+t._s(t._f("currency")(t.getSubtotal)))])])],1),r("v-row",[r("v-col",{attrs:{cols:"12",sm:"12",md:"12"}},[r("v-simple-table",{attrs:{dense:""},scopedSlots:t._u([{key:"default",fn:function(){return[r("thead",[r("tr",[r("th",{staticClass:"text-center"},[t._v("Name")]),r("th",{staticClass:"text-center",attrs:{width:"100px"}},[t._v("Qty")]),r("th",{staticClass:"text-center",attrs:{width:"200px;"}},[t._v("Cost")]),r("th",{staticClass:"text-center",attrs:{width:"200px;"}},[t._v("Total")]),r("th",{staticClass:"text-center",attrs:{width:"50px;"}},[t._v("Action")])])]),r("tbody",t._l(t.fields.items,(function(e){return r("tr",{key:e.product},[r("td",[t._v(t._s(e.name))]),r("td",[r("v-currency-field",{attrs:{"decimal-length":0,"place-holder":"Qty"},model:{value:e.qty,callback:function(r){t.$set(e,"qty",r)},expression:"item.qty"}})],1),r("td",{staticClass:"text-right"},[t._v(t._s(t._f("currency")(e.cost)))]),r("td",{staticClass:"text-right"},[t._v(t._s(t._f("currency")(e.qty*e.cost)))]),r("td",[r("v-icon",{attrs:{small:""},on:{click:function(r){return t.deleteItem(e)}}},[t._v(" mdi-delete ")])],1)])})),0)]},proxy:!0}])})],1)],1),r("v-row",[r("v-col",{attrs:{cols:"12",md:"6"}},[r("v-textarea",{attrs:{"prepend-icon":"mdi-note-text-outline",label:"Notes",value:"fields.notes",rows:"3"},model:{value:t.fields.notes,callback:function(e){t.$set(t.fields,"notes",e)},expression:"fields.notes"}})],1)],1)],1)],1)],1)],1)},s=[],i=(r("c740"),r("4160"),r("d81d"),r("fb6a"),r("a434"),r("b0c0"),r("d3b7"),r("25f0"),r("159b"),r("96cf"),r("1da1")),n=r("5530"),o=r("1dce"),c=r("b5ae"),d=r("2f62"),l={mixins:[o["validationMixin"]],validations:{fields:{supplier:{required:c["required"]}}},computed:Object(n["a"])(Object(n["a"])({},Object(d["c"])(["user","purchaseOrderStatus"])),{},{supplierErrors:function(){var t=[];return this.$v.fields.supplier.$dirty?(!this.$v.fields.supplier.required&&t.push("Supplier is required."),t):t},supplierItems:function(){return this.suppliers.map((function(t){var e=t.name;return Object.assign({},t,{Description:e})}))},productItems:function(){return this.products.map((function(t){var e=t.name;return Object.assign({},t,{Description:e})}))},getSubtotal:function(){var t=this.fields.items;if(0!=t.length){for(var e=0,r=0;r<t.length;r++)e+=t[r].qty*t[r].cost;return e}}}),data:function(){return{fields:{id:!1,no:"",transdate:"",supplier:"",notes:"",user:"",items:[]},date:"",suppliers:[],products:[],isLoading:!1,menu:!1,productSelected:"",page:""}},mounted:function(){var t=this;return Object(i["a"])(regeneratorRuntime.mark((function e(){var r,a,s;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,t.getSupplier();case 2:return r=e.sent,a=r.data.data,a&&(t.suppliers=a),e.next=7,t.getProduct();case 7:r=e.sent,a=r.data.data,a&&(t.products=a),s=t.$route.params.id,void 0!=s?t.loadData(s):t.reset();case 12:case"end":return e.stop()}}),e)})))()},created:function(){var t=this.$route.query.page;this.page=t},methods:Object(n["a"])(Object(n["a"])({},Object(d["b"])(["getPoNo","getSupplier","getProduct","addPurchaseOrder","getPoItem","updatePurchaseOrder","getPurchaseOrder"])),{},{getDateTime:function(t){var e=new Date(t),r=(new Date).getHours().toString(),a=(new Date).getMinutes().toString(),s=(new Date).getSeconds().toString(),i=("00"+r).substring(r.length)+":"+("00"+a).substring(a.length)+":"+("00"+s).substring(s.length);return e.toISOString().slice(0,10)+" "+i},loadData:function(t){var e=this;return Object(i["a"])(regeneratorRuntime.mark((function r(){var a,s;return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:return r.next=2,e.getPurchaseOrder(t);case 2:if(a=r.sent,void 0!=a){r.next=5;break}return r.abrupt("return",e.$router.push({name:"polist"}));case 5:s=a.data.data,e.fields.id=t,e.fields.no=s.no,e.fields.notes=s.notes,e.fields.user=e.user._id,e.fields.supplier=s.supplier._id,e.getItem(t),e.fields.transdate=s.transdate,e.date=s.transdate.slice(0,10);case 14:case"end":return r.stop()}}),r)})))()},addData:function(){var t=this;this.isloading=!0,this.addPurchaseOrder(this.fields).then((function(e){e.data.success&&(t.isloading=!1,t.$router.push("/purchase/order/list"))}))},updateData:function(){var t=this;this.isloading=!0,this.updatePurchaseOrder(this.fields).then((function(e){e.data.success&&(t.isloading=!1,t.$router.push({name:"polist",params:{page:t.page}}))}))},reset:function(){var t=this;return Object(i["a"])(regeneratorRuntime.mark((function e(){var r;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,t.getPoNo();case 2:r=e.sent,t.fields.id=!1,t.fields.no=r.data.code,t.date=(new Date).toISOString().slice(0,10),t.fields.supplier="",t.fields.notes="",t.fields.items=[],t.fields.user=t.user._id,t.fields.transdate=new Date;case 11:case"end":return e.stop()}}),e)})))()},getItem:function(t){var e=this,r={order:t};this.getPoItem(r).then((function(t){if(t.data.success){var r=t.data.data;e.fields.items=[],r.forEach((function(t){t={name:t.product.name,product:t.product._id,cost:t.cost,qty:t.qty},e.fields.items.push(t)}))}}))},addItem:function(){var t=this.productSelected,e=this.fields.items.findIndex((function(e){return e.product==t._id}));if(e>=0)this.fields.items[e].qty+=1;else{var r={product:t._id,name:t.name,qty:1,cost:t.cost};this.fields.items.push(r)}this.productSelected={}},deleteItem:function(t){var e=this.fields.items.findIndex((function(e){return e.product===t.product}));this.fields.items.splice(e,1)},Back:function(){this.$router.push({name:"polist",params:{page:this.page}})},submit:function(){this.fields.transdate=this.getDateTime(this.date),this.$v.$touch(),this.$v.$error||(this.fields.id?this.updateData():this.addData())}})},u=l,p=r("2877"),f=r("6544"),v=r.n(f),m=r("c6a6"),h=r("8336"),g=r("b0af"),b=r("99d9"),x=r("62ad"),_=r("2e4b"),w=r("4bd4"),y=r("132d"),S=r("e449"),k=r("0fd9"),D=r("1f4f"),O=r("2fa4"),$=r("8654"),I=r("a844"),V=r("71d9"),P=r("2a7f"),j=r("3a2f"),q=Object(p["a"])(u,a,s,!1,null,null,null);e["default"]=q.exports;v()(q,{VAutocomplete:m["a"],VBtn:h["a"],VCard:g["a"],VCardText:b["b"],VCol:x["a"],VDatePicker:_["a"],VForm:w["a"],VIcon:y["a"],VMenu:S["a"],VRow:k["a"],VSimpleTable:D["a"],VSpacer:O["a"],VTextField:$["a"],VTextarea:I["a"],VToolbar:V["a"],VToolbarTitle:P["a"],VTooltip:j["a"]})}}]);
//# sourceMappingURL=chunk-2d237d2f.9f6f0498.js.map