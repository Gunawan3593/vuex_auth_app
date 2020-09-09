(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-6a88d754"],{"0965":function(t,e,a){},1454:function(t,e,a){"use strict";var s=a("0965"),r=a.n(s);r.a},"940b":function(t,e,a){"use strict";a.r(e);var s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-row",[a("v-col",{attrs:{cols:"12",xs:"12",md:"12"}},[a("v-card",{staticClass:"mx-auto"},[a("v-card-text",[a("v-row",[a("h2",{staticClass:"ma-1"},[t._v("Purchase Receipt Detail")]),a("v-spacer"),0==t.status?a("v-btn",{staticClass:"ma-1",attrs:{small:"",color:"error"},on:{click:function(e){return t.voidData()}}},[t._v("Void")]):t._e(),a("v-btn",{staticClass:"ma-1",attrs:{small:"",color:"primary"},on:{click:function(e){return t.Back()}}},[t._v("Back")])],1)],1)],1)],1),a("v-col",{attrs:{cols:"12",xs:"12",md:"6"}},[a("v-card",{staticClass:"mx-auto"},[a("v-card-text",{staticClass:"pa-0"},[a("v-simple-table",{attrs:{"fixed-header":"",dense:""},scopedSlots:t._u([{key:"default",fn:function(){return[a("thead",[a("tr",[a("th",{staticClass:"text-left",attrs:{width:"100px"}}),a("th",{staticClass:"text-left",attrs:{width:"10px"}}),a("th",{staticClass:"text-left"})])]),a("tbody",[a("tr",[a("td",[t._v("No.")]),a("td",[t._v(":")]),a("td",[t._v(t._s(t.no))])]),a("tr",[a("td",[t._v("Date")]),a("td",[t._v(":")]),a("td",[t._v(t._s(t.date))])]),a("tr",[a("td",[t._v("Supplier")]),a("td",[t._v(":")]),a("td",[t._v(t._s(t.supplier.name))])])])]},proxy:!0}])})],1)],1)],1),a("v-col",{attrs:{cols:"12",xs:"12",md:"6"}},[a("v-card",{staticClass:"mx-auto"},[a("v-card-text",{staticClass:"pa-0"},[a("v-simple-table",{attrs:{"fixed-header":"",dense:""},scopedSlots:t._u([{key:"default",fn:function(){return[a("thead",[a("tr",[a("th",{staticClass:"text-left",attrs:{width:"100px"}}),a("th",{staticClass:"text-left",attrs:{width:"10px"}}),a("th",{staticClass:"text-left"})])]),a("tbody",[a("tr",[a("td",[t._v("Notes")]),a("td",[t._v(":")]),a("td",[t._v(t._s(t.notes))])]),a("tr",[a("td",[t._v("Status")]),a("td",[t._v(":")]),a("td",[0==t.status?a("v-chip",{staticClass:"ma-1",attrs:{"x-small":"",color:"primary"}},[t._v(" Pending ")]):t._e(),1==t.status?a("v-chip",{staticClass:"ma-1",attrs:{"x-small":"",color:"green","text-color":"white"}},[t._v(" Done ")]):t._e(),2==t.status?a("v-chip",{staticClass:"ma-1",attrs:{"x-small":"",color:"error"}},[t._v(" Void ")]):t._e()],1)]),a("tr",[a("td",[t._v("Created by")]),a("td",[t._v(":")]),a("td",[t._v(t._s(t.user.name))])])])]},proxy:!0}])})],1)],1)],1),a("v-col",{attrs:{cols:"12",xs:"12",md:"12"}},[a("v-card",{staticClass:"mx-auto"},[a("v-card-text",{staticClass:"pa-0"},[a("v-simple-table",{attrs:{"fixed-header":"",dense:""},scopedSlots:t._u([{key:"default",fn:function(){return[a("thead",[a("tr",[a("th",{staticClass:"text-center"},[t._v("Name")]),a("th",{staticClass:"text-center"},[t._v("Order")]),a("th",{staticClass:"text-center"},[t._v("Qty")]),a("th",{staticClass:"text-center"},[t._v("Cost")]),a("th",{staticClass:"text-center"},[t._v("Total")])])]),a("tbody",[t._l(t.items,(function(e){return a("tr",{key:e.product},[a("td",[t._v(t._s(e.name))]),a("td",[t._v(t._s(e.order_qty))]),a("td",[t._v(t._s(e.qty))]),a("td",[t._v(t._s(t._f("currency")(e.cost)))]),a("td",[t._v(t._s(t._f("currency")(e.qty*e.cost)))])])})),a("tr",[a("td",{staticClass:"text-center",attrs:{colspan:"4"}},[t._v("Total")]),a("td",[t._v(t._s(t._f("currency")(t.getSubtotal)))])])],2)]},proxy:!0}])})],1)],1)],1)],1)},r=[],c=(a("4160"),a("fb6a"),a("b0c0"),a("d3b7"),a("25f0"),a("159b"),a("96cf"),a("1da1")),i=a("5530"),n=a("2f62"),o={data:function(){return{id:"",no:"",date:"",supplier:"",notes:"",status:"",user:"",items:[]}},methods:Object(i["a"])(Object(i["a"])({},Object(n["b"])(["getPurchaseReceipt","getPrItem","voidPurchaseReceipt"])),{},{getDateTime:function(t){var e=new Date(t),a=e.getHours().toString(),s=e.getMinutes().toString(),r=e.getSeconds().toString(),c=("00"+a).substring(a.length)+":"+("00"+s).substring(s.length)+":"+("00"+r).substring(r.length);return e.toISOString().slice(0,10)+" "+c},getItem:function(t){var e=this,a={receipt:t};this.getPrItem(a).then((function(t){if(t.data.success){var a=t.data.data;e.items=[],a.forEach((function(t){t={name:t.product.name,order_item:t.order_item._id,product:t.product._id,cost:t.cost,order_qty:t.order_qty,qty:t.qty},e.items.push(t)}))}}))},loadData:function(t){var e=this;return Object(c["a"])(regeneratorRuntime.mark((function a(){var s,r;return regeneratorRuntime.wrap((function(a){while(1)switch(a.prev=a.next){case 0:return a.next=2,e.getPurchaseReceipt(t);case 2:s=a.sent,void 0!=s&&(r=s.data.data,e.id=t,e.no=r.no,e.date=e.getDateTime(r.date),e.supplier=r.supplier,e.notes=r.notes,e.status=r.status,e.user=r.user,e.getItem(t));case 4:case"end":return a.stop()}}),a)})))()},voidData:function(){var t=this,e={id:this.id};this.voidPurchaseReceipt(e).then((function(e){e.data.success&&t.loadData(t.id)}))},Back:function(){var t=this.$route.query.page;this.$router.push({name:"prlist",params:{page:t}})}}),created:function(){var t=this.$route.params.id;this.loadData(t)},computed:{getSubtotal:function(){var t=this.items;if(0!=t.length){for(var e=0,a=0;a<t.length;a++)e+=t[a].qty*t[a].cost;return e}}}},d=o,l=(a("1454"),a("2877")),u=a("6544"),v=a.n(u),_=a("8336"),p=a("b0af"),h=a("99d9"),f=a("cc20"),m=a("62ad"),x=a("0fd9"),g=a("1f4f"),C=a("2fa4"),b=Object(l["a"])(d,s,r,!1,null,"2ae78f67",null);e["default"]=b.exports;v()(b,{VBtn:_["a"],VCard:p["a"],VCardText:h["b"],VChip:f["a"],VCol:m["a"],VRow:x["a"],VSimpleTable:g["a"],VSpacer:C["a"]})}}]);
//# sourceMappingURL=chunk-6a88d754.dbe1f4b4.js.map