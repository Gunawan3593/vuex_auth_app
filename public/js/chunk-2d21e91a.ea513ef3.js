(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d21e91a"],{d5b5:function(t,e,s){"use strict";s.r(e);var r=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("v-row",{attrs:{align:"center",justify:"center"}},[s("v-col",{attrs:{cols:"12",sm:"8",md:"12"}},[s("v-card",{staticClass:"elevation-12"},[s("v-toolbar",{attrs:{color:"primary",dark:"",flat:""}},[s("v-toolbar-title",[t._v("Add Sales Order")]),s("v-spacer"),s("v-toolbar-title",[s("v-tooltip",{attrs:{left:""},scopedSlots:t._u([{key:"activator",fn:function(e){var r=e.on,a=e.attrs;return[s("v-btn",t._g(t._b({attrs:{icon:"",color:"dee-orange"},on:{click:function(e){return t.Back()}}},"v-btn",a,!1),r),[s("v-icon",[t._v("mdi-arrow-left-bold")])],1)]}}])},[s("span",[t._v("Back to List")])]),s("v-tooltip",{attrs:{left:""},scopedSlots:t._u([{key:"activator",fn:function(e){var r=e.on,a=e.attrs;return[s("v-btn",t._g(t._b({attrs:{icon:"",color:"dee-orange",link:"",to:"/sales/order/add"}},"v-btn",a,!1),r),[s("v-icon",[t._v("mdi-restore")])],1)]}}])},[s("span",[t._v("New Data")])]),s("v-tooltip",{attrs:{left:""},scopedSlots:t._u([{key:"activator",fn:function(e){var r=e.on,a=e.attrs;return[s("v-btn",t._g(t._b({attrs:{icon:"",color:"dee-orange",loading:t.isLoading},on:{click:t.submit}},"v-btn",a,!1),r),[s("v-icon",[t._v("mdi-content-save-move-outline")])],1)]}}])},[s("span",[t._v("Save Data")])])],1)],1),s("v-card-text",[s("v-form",[s("v-row",[s("v-col",{attrs:{cols:"12",sm:"12",md:"4"}},[s("v-text-field",{attrs:{label:"No.","prepend-icon":"mdi-numeric",type:"text",readonly:""},model:{value:t.fields.no,callback:function(e){t.$set(t.fields,"no",e)},expression:"fields.no"}})],1),s("v-col",{attrs:{cols:"12",sm:"12",md:"4"}},[s("v-menu",{attrs:{"close-on-content-click":!1,"nudge-right":40,transition:"scale-transition","offset-y":"","min-width":"290px"},scopedSlots:t._u([{key:"activator",fn:function(e){var r=e.on;return[s("v-text-field",t._g({attrs:{label:"Date","prepend-icon":"mdi-calendar",readonly:""},model:{value:t.date,callback:function(e){t.date=e},expression:"date"}},r))]}}]),model:{value:t.menu,callback:function(e){t.menu=e},expression:"menu"}},[s("v-date-picker",{on:{input:function(e){t.menu=!1}},model:{value:t.date,callback:function(e){t.date=e},expression:"date"}})],1)],1),s("v-col",{attrs:{cols:"12",sm:"12",md:"4"}},[s("v-autocomplete",{attrs:{"error-messages":t.customerErrors,required:"",items:t.customerItems,"hide-no-data":"","hide-selected":"","item-text":"Description","item-value":"_id",label:"Customers",placeholder:"Start typing to Search","prepend-icon":"mdi-dresser","return-object":!1},on:{input:function(e){return t.$v.fields.customer.$touch()},blur:function(e){return t.$v.fields.customer.$touch()}},model:{value:t.fields.customer,callback:function(e){t.$set(t.fields,"customer",e)},expression:"fields.customer"}})],1)],1)],1),s("v-row",[s("v-col",{attrs:{cols:"12",sm:"6",md:"4"}},[s("v-autocomplete",{attrs:{items:t.productItems,"hide-no-data":"","hide-selected":"","item-text":"Description",label:"Product",placeholder:"Select Product","prepend-icon":"mdi-database-search","return-object":""},on:{change:function(e){return t.addItem()}},model:{value:t.productSelected,callback:function(e){t.productSelected=e},expression:"productSelected"}})],1),s("v-col",{attrs:{cols:"12",sm:"6",md:"8"}},[s("p",{staticClass:"display-2 text-right",staticStyle:{"padding-right":"10px"}},[t._v("Total : "+t._s(t._f("currency")(t.getSubtotal)))])])],1),s("v-row",[s("v-col",{attrs:{cols:"12",sm:"12",md:"12"}},[s("v-simple-table",{attrs:{dense:""},scopedSlots:t._u([{key:"default",fn:function(){return[s("thead",[s("tr",[s("th",{staticClass:"text-center"},[t._v("Name")]),s("th",{staticClass:"text-center",attrs:{width:"100px"}},[t._v("Qty")]),s("th",{staticClass:"text-center",attrs:{width:"200px;"}},[t._v("Cost")]),s("th",{staticClass:"text-center",attrs:{width:"200px;"}},[t._v("Total")]),s("th",{staticClass:"text-center",attrs:{width:"50px;"}},[t._v("Action")])])]),s("tbody",t._l(t.fields.items,(function(e){return s("tr",{key:e.product},[s("td",[t._v(t._s(e.name))]),s("td",[s("v-currency-field",{attrs:{"decimal-length":0,"place-holder":"Qty"},model:{value:e.qty,callback:function(s){t.$set(e,"qty",s)},expression:"item.qty"}})],1),s("td",{staticClass:"text-right"},[t._v(t._s(t._f("currency")(e.cost)))]),s("td",{staticClass:"text-right"},[t._v(t._s(t._f("currency")(e.qty*e.cost)))]),s("td",[s("v-icon",{attrs:{small:""},on:{click:function(s){return t.deleteItem(e)}}},[t._v(" mdi-delete ")])],1)])})),0)]},proxy:!0}])})],1)],1),s("v-row",[s("v-col",{attrs:{cols:"12",md:"6"}},[s("v-textarea",{attrs:{"prepend-icon":"mdi-note-text-outline",label:"Notes",value:"fields.notes",rows:"3"},model:{value:t.fields.notes,callback:function(e){t.$set(t.fields,"notes",e)},expression:"fields.notes"}})],1)],1)],1)],1)],1)],1)},a=[],n=(s("c740"),s("4160"),s("d81d"),s("fb6a"),s("a434"),s("b0c0"),s("d3b7"),s("25f0"),s("159b"),s("96cf"),s("1da1")),i=s("5530"),o=s("1dce"),c=s("b5ae"),d=s("2f62"),l={mixins:[o["validationMixin"]],validations:{fields:{customer:{required:c["required"]}}},computed:Object(i["a"])(Object(i["a"])({},Object(d["c"])(["user","salesOrderStatus"])),{},{customerErrors:function(){var t=[];return this.$v.fields.customer.$dirty?(!this.$v.fields.customer.required&&t.push("Customer is required."),t):t},customerItems:function(){return this.customers.map((function(t){var e=t.name;return Object.assign({},t,{Description:e})}))},productItems:function(){return this.products.map((function(t){var e=t.name;return Object.assign({},t,{Description:e})}))},getSubtotal:function(){var t=this.fields.items;if(0!=t.length){for(var e=0,s=0;s<t.length;s++)e+=t[s].qty*t[s].cost;return e}}}),data:function(){return{fields:{id:!1,no:"",transdate:"",customer:"",notes:"",user:"",items:[]},date:"",customers:[],products:[],isLoading:!1,menu:!1,productSelected:"",page:""}},mounted:function(){var t=this;return Object(n["a"])(regeneratorRuntime.mark((function e(){var s,r,a;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,t.getCustomer();case 2:return s=e.sent,r=s.data.data,r&&(t.customers=r),e.next=7,t.getProduct();case 7:s=e.sent,r=s.data.data,r&&(t.products=r),a=t.$route.params.id,void 0!=a?t.loadData(a):t.reset();case 12:case"end":return e.stop()}}),e)})))()},created:function(){var t=this.$route.query.page;this.page=t},methods:Object(i["a"])(Object(i["a"])({},Object(d["b"])(["getSoNo","getCustomer","getProduct","addSalesOrder","getSoItem","updateSalesOrder","getSalesOrder"])),{},{getDateTime:function(t){var e=new Date(t),s=(new Date).getHours().toString(),r=(new Date).getMinutes().toString(),a=(new Date).getSeconds().toString(),n=("00"+s).substring(s.length)+":"+("00"+r).substring(r.length)+":"+("00"+a).substring(a.length);return e.toISOString().slice(0,10)+" "+n},loadData:function(t){var e=this;return Object(n["a"])(regeneratorRuntime.mark((function s(){var r,a;return regeneratorRuntime.wrap((function(s){while(1)switch(s.prev=s.next){case 0:return s.next=2,e.getSalesOrder(t);case 2:if(r=s.sent,void 0!=r){s.next=5;break}return s.abrupt("return",e.$router.push({name:"solist"}));case 5:a=r.data.data,e.fields.id=t,e.fields.no=a.no,e.fields.notes=a.notes,e.fields.user=e.user._id,e.fields.customer=a.customer._id,e.getItem(t),e.fields.transdate=a.transdate,e.date=a.transdate.slice(0,10);case 14:case"end":return s.stop()}}),s)})))()},addData:function(){var t=this;this.isloading=!0,this.addSalesOrder(this.fields).then((function(e){e.data.success&&(t.isloading=!1,t.$router.push("/sales/order/list"))}))},updateData:function(){var t=this;this.isloading=!0,this.updateSalesOrder(this.fields).then((function(e){e.data.success&&(t.isloading=!1,t.$router.push({name:"solist",params:{page:t.page}}))}))},reset:function(){var t=this;return Object(n["a"])(regeneratorRuntime.mark((function e(){var s;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,t.getSoNo();case 2:s=e.sent,t.fields.id=!1,t.fields.no=s.data.code,t.date=(new Date).toISOString().slice(0,10),t.fields.customer="",t.fields.notes="",t.fields.items=[],t.fields.user=t.user._id,t.fields.transdate=new Date;case 11:case"end":return e.stop()}}),e)})))()},getItem:function(t){var e=this,s={order:t};this.getSoItem(s).then((function(t){if(t.data.success){var s=t.data.data;e.fields.items=[],s.forEach((function(t){t={name:t.product.name,product:t.product._id,cost:t.cost,qty:t.qty},e.fields.items.push(t)}))}}))},addItem:function(){var t=this.productSelected,e=this.fields.items.findIndex((function(e){return e.product==t._id}));if(e>=0)this.fields.items[e].qty+=1;else{var s={product:t._id,name:t.name,qty:1,cost:t.cost};this.fields.items.push(s)}this.productSelected={}},deleteItem:function(t){var e=this.fields.items.findIndex((function(e){return e.product===t.product}));this.fields.items.splice(e,1)},Back:function(){this.$router.push({name:"solist",params:{page:this.page}})},submit:function(){this.fields.transdate=this.getDateTime(this.date),this.$v.$touch(),this.$v.$error||(this.fields.id?this.updateData():this.addData())}})},u=l,m=s("2877"),f=s("6544"),p=s.n(f),v=s("c6a6"),h=s("8336"),g=s("b0af"),b=s("99d9"),x=s("62ad"),_=s("2e4b"),S=s("4bd4"),w=s("132d"),y=s("e449"),k=s("0fd9"),D=s("1f4f"),O=s("2fa4"),$=s("8654"),C=s("a844"),I=s("71d9"),V=s("2a7f"),j=s("3a2f"),q=Object(m["a"])(u,r,a,!1,null,null,null);e["default"]=q.exports;p()(q,{VAutocomplete:v["a"],VBtn:h["a"],VCard:g["a"],VCardText:b["b"],VCol:x["a"],VDatePicker:_["a"],VForm:S["a"],VIcon:w["a"],VMenu:y["a"],VRow:k["a"],VSimpleTable:D["a"],VSpacer:O["a"],VTextField:$["a"],VTextarea:C["a"],VToolbar:I["a"],VToolbarTitle:V["a"],VTooltip:j["a"]})}}]);
//# sourceMappingURL=chunk-2d21e91a.ea513ef3.js.map