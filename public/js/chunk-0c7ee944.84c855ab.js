(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-0c7ee944"],{"50b8":function(t,e,s){"use strict";var a=s("aa44"),r=s.n(a);r.a},6068:function(t,e,s){"use strict";s.r(e);var a=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("v-row",[s("v-col",{attrs:{cols:"12",xs:"12",md:"12"}},[s("v-card",{staticClass:"mx-auto"},[s("v-card-text",[s("v-row",[s("h2",{staticClass:"ma-1"},[t._v("Purchase Invoice Detail")]),s("v-spacer"),0==t.status?s("v-btn",{staticClass:"ma-1",attrs:{small:"",color:"success"},on:{click:function(e){return t.closeData()}}},[t._v("Close")]):t._e(),1==t.status?s("v-btn",{staticClass:"ma-1",attrs:{small:"",color:"orange",dark:""},on:{click:function(e){return t.openData()}}},[t._v("Open")]):t._e(),0==t.status?s("v-btn",{staticClass:"ma-1",attrs:{small:"",color:"error"},on:{click:function(e){return t.voidData()}}},[t._v("Void")]):t._e(),s("v-btn",{staticClass:"ma-1",attrs:{small:"",color:"primary"},on:{click:function(e){return t.Back()}}},[t._v("Back")])],1)],1)],1)],1),s("v-col",{attrs:{cols:"12",xs:"12",md:"6"}},[s("v-card",{staticClass:"mx-auto"},[s("v-card-text",{staticClass:"pa-0"},[s("v-simple-table",{attrs:{"fixed-header":"",dense:""},scopedSlots:t._u([{key:"default",fn:function(){return[s("thead",[s("tr",[s("th",{staticClass:"text-left",attrs:{width:"100px"}}),s("th",{staticClass:"text-left",attrs:{width:"10px"}}),s("th",{staticClass:"text-left"})])]),s("tbody",[s("tr",[s("td",[t._v("No.")]),s("td",[t._v(":")]),s("td",[t._v(t._s(t.no))])]),s("tr",[s("td",[t._v("Date")]),s("td",[t._v(":")]),s("td",[t._v(t._s(t.date))])]),s("tr",[s("td",[t._v("Supplier")]),s("td",[t._v(":")]),s("td",[t._v(t._s(t.supplier.name))])])])]},proxy:!0}])})],1)],1)],1),s("v-col",{attrs:{cols:"12",xs:"12",md:"6"}},[s("v-card",{staticClass:"mx-auto"},[s("v-card-text",{staticClass:"pa-0"},[s("v-simple-table",{attrs:{"fixed-header":"",dense:""},scopedSlots:t._u([{key:"default",fn:function(){return[s("thead",[s("tr",[s("th",{staticClass:"text-left",attrs:{width:"100px"}}),s("th",{staticClass:"text-left",attrs:{width:"10px"}}),s("th",{staticClass:"text-left"})])]),s("tbody",[s("tr",[s("td",[t._v("Notes")]),s("td",[t._v(":")]),s("td",[t._v(t._s(t.notes))])]),s("tr",[s("td",[t._v("Status")]),s("td",[t._v(":")]),s("td",[0==t.status?s("v-chip",{staticClass:"ma-1",attrs:{"x-small":"",color:"primary"}},[t._v(" Pending ")]):t._e(),1==t.status?s("v-chip",{staticClass:"ma-1",attrs:{"x-small":"",color:"green","text-color":"white"}},[t._v(" Closed ")]):t._e(),2==t.status?s("v-chip",{staticClass:"ma-1",attrs:{"x-small":"",color:"error"}},[t._v(" Void ")]):t._e()],1)]),s("tr",[s("td",[t._v("Created by")]),s("td",[t._v(":")]),s("td",[t._v(t._s(t.user.name))])])])]},proxy:!0}])})],1)],1)],1),s("v-col",{attrs:{cols:"12",xs:"12",md:"12"}},[s("v-card",{staticClass:"mx-auto"},[s("v-card-text",{staticClass:"pa-0"},[s("v-simple-table",{attrs:{"fixed-header":"",dense:""},scopedSlots:t._u([{key:"default",fn:function(){return[s("thead",[s("tr",[s("th"),s("th",{staticClass:"text-center",attrs:{colspan:"4"}},[t._v("Qty")]),s("th"),s("th",{staticClass:"text-center",attrs:{colspan:"3"}},[t._v("Total")])]),s("tr",[s("th",{staticClass:"text-center"},[t._v("Name")]),s("th",{staticClass:"text-center",attrs:{width:"50px"}},[t._v("Order")]),s("th",{staticClass:"text-center",attrs:{width:"50px"}},[t._v("Receipt")]),s("th",{staticClass:"text-center",attrs:{width:"50px"}},[t._v("Invoice")]),s("th",{staticClass:"text-center",attrs:{width:"50px"}},[t._v("Return")]),s("th",{staticClass:"text-center",attrs:{width:"150px"}},[t._v("Cost")]),s("th",{staticClass:"text-center",attrs:{width:"150px"}},[t._v("Order")]),s("th",{staticClass:"text-center",attrs:{width:"150px"}},[t._v("Invoice")]),s("th",{staticClass:"text-center",attrs:{width:"150px"}},[t._v("Return")])])]),s("tbody",[t._l(t.items,(function(e){return s("tr",{key:e.product},[s("td",[t._v(t._s(e.name))]),s("td",[t._v(t._s(e.order_qty))]),s("td",[t._v(t._s(e.rcv_qty))]),s("td",[t._v(t._s(e.qty))]),s("td",[t._v(t._s(e.return_qty))]),s("td",[t._v(t._s(t._f("currency")(e.cost)))]),s("td",[t._v(t._s(t._f("currency")(e.order_qty*e.cost)))]),s("td",[t._v(t._s(t._f("currency")(e.qty*e.cost)))]),s("td",[t._v(t._s(t._f("currency")(e.return_qty*e.cost)))])])})),s("tr",[s("td",{staticClass:"text-center",attrs:{colspan:"6"}},[t._v("Total")]),s("td",[t._v(t._s(t._f("currency")(t.getSubtotal)))]),s("td",[t._v(t._s(t._f("currency")(t.getTotalInvoice)))]),s("td",[t._v(t._s(t._f("currency")(t.getTotalReturn)))])])],2)]},proxy:!0}])})],1)],1)],1)],1)},r=[],c=(s("4160"),s("fb6a"),s("b0c0"),s("d3b7"),s("25f0"),s("159b"),s("96cf"),s("1da1")),n=s("5530"),i=s("2f62"),o={data:function(){return{id:"",no:"",date:"",supplier:"",notes:"",status:"",user:"",items:[]}},methods:Object(n["a"])(Object(n["a"])({},Object(i["b"])(["getPurchaseInvoice","getPiItem","voidPurchaseInvoice","closePurchaseInvoice","openPurchaseInvoice"])),{},{getDateTime:function(t){var e=new Date(t),s=e.getHours().toString(),a=e.getMinutes().toString(),r=e.getSeconds().toString(),c=("00"+s).substring(s.length)+":"+("00"+a).substring(a.length)+":"+("00"+r).substring(r.length);return e.toISOString().slice(0,10)+" "+c},getItem:function(t){var e=this,s={invoice:t};this.getPiItem(s).then((function(t){if(t.data.success){var s=t.data.data;e.items=[],s.forEach((function(t){t={name:t.product.name,product:t.product._id,cost:t.cost,qty:t.qty,rcv_qty:t.rcv_qty,order_qty:t.order_qty,return_qty:t.return_qty},e.items.push(t)}))}}))},loadData:function(t){var e=this;return Object(c["a"])(regeneratorRuntime.mark((function s(){var a,r;return regeneratorRuntime.wrap((function(s){while(1)switch(s.prev=s.next){case 0:return s.next=2,e.getPurchaseInvoice(t);case 2:a=s.sent,void 0!=a&&(r=a.data.data,e.id=t,e.no=r.no,e.date=e.getDateTime(r.date),e.supplier=r.supplier,e.notes=r.notes,e.status=r.status,e.user=r.user,e.getItem(t));case 4:case"end":return s.stop()}}),s)})))()},voidData:function(){var t=this,e={id:this.id};this.voidPurchaseInvoice(e).then((function(e){e.data.success&&t.loadData(t.id)}))},closeData:function(){var t=this,e={id:this.id};this.closePurchaseInvoice(e).then((function(e){e.data.success&&t.loadData(t.id)}))},openData:function(){var t=this,e={id:this.id};this.openPurchaseInvoice(e).then((function(e){e.data.success&&t.loadData(t.id)}))},Back:function(){var t=this.$route.query.page;this.$router.push({name:"pilist",params:{page:t}})}}),created:function(){var t=this.$route.params.id;this.loadData(t)},computed:{getSubtotal:function(){var t=this.items;if(0!=t.length){for(var e=0,s=0;s<t.length;s++)e+=t[s].order_qty*t[s].cost;return e}},getTotalInvoice:function(){var t=this.items;if(0!=t.length){for(var e=0,s=0;s<t.length;s++)e+=t[s].qty*t[s].cost;return e}},getTotalReturn:function(){var t=this.items;if(0!=t.length){for(var e=0,s=0;s<t.length;s++)e+=t[s].return_qty*t[s].cost;return e}}}},d=o,l=(s("50b8"),s("2877")),u=s("6544"),v=s.n(u),_=s("8336"),h=s("b0af"),p=s("99d9"),f=s("cc20"),m=s("62ad"),x=s("0fd9"),C=s("1f4f"),g=s("2fa4"),y=Object(l["a"])(d,a,r,!1,null,"2bbabdda",null);e["default"]=y.exports;v()(y,{VBtn:_["a"],VCard:h["a"],VCardText:p["b"],VChip:f["a"],VCol:m["a"],VRow:x["a"],VSimpleTable:C["a"],VSpacer:g["a"]})},aa44:function(t,e,s){}}]);
//# sourceMappingURL=chunk-0c7ee944.84c855ab.js.map