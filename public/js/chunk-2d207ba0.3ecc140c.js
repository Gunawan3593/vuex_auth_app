(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d207ba0"],{a281:function(t,e,a){"use strict";a.r(e);var r=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-row",{attrs:{align:"center",justify:"center"}},[a("v-col",{attrs:{cols:"12",sm:"8",md:"12"}},[a("v-card",{staticClass:"elevation-12"},[a("v-toolbar",{attrs:{color:"primary",dark:"",flat:""}},[a("v-toolbar-title",[t._v("Sales Invoice List")]),a("v-spacer"),a("v-text-field",{attrs:{"append-icon":"mdi-magnify",label:"Search","single-line":"","hide-details":""},model:{value:t.search,callback:function(e){t.search=e},expression:"search"}})],1),a("v-card-text",[a("v-data-table",{attrs:{headers:t.headers,items:t.rows,search:t.search,page:t.page},on:{"update:page":function(e){t.page=e}},scopedSlots:t._u([{key:"item.active",fn:function(e){var r=e.item;return[r.active?a("v-icon",{attrs:{color:"blue",dark:""}},[t._v("mdi-check-circle")]):t._e(),r.active?t._e():a("v-icon",{attrs:{color:"red",dark:""}},[t._v("mdi-minus-circle")])]}},{key:"item.status",fn:function(e){var r=e.item;return[a("div",{staticClass:"d-flex justify-center"},[0==r.status?a("v-chip",{staticClass:"ma-1",attrs:{color:"primary"}},[t._v(" Pending ")]):t._e(),1==r.status?a("v-chip",{staticClass:"ma-1",attrs:{color:"green","text-color":"white"}},[t._v(" Closed ")]):t._e(),2==r.status?a("v-chip",{staticClass:"ma-1",attrs:{color:"error"}},[t._v(" Void ")]):t._e(),4==r.status?a("v-chip",{staticClass:"ma-1",attrs:{color:"green","text-color":"white"}},[t._v(" Done ")]):t._e()],1)]}},{key:"item.actions",fn:function(e){var r=e.item;return[a("div",{staticClass:"d-flex justify-center"},[a("v-tooltip",{attrs:{left:""},scopedSlots:t._u([{key:"activator",fn:function(e){var s=e.on,n=e.attrs;return[0==r.status?a("v-icon",t._g(t._b({staticClass:"mr-2",attrs:{small:""},on:{click:function(e){return t.editItem(r)}}},"v-icon",n,!1),s),[t._v(" mdi-pencil ")]):t._e()]}}],null,!0)},[a("span",[t._v("Edit")])]),a("v-tooltip",{attrs:{left:""},scopedSlots:t._u([{key:"activator",fn:function(e){var s=e.on,n=e.attrs;return[a("v-icon",t._g(t._b({attrs:{small:""},on:{click:function(e){return t.showItem(r)}}},"v-icon",n,!1),s),[t._v(" mdi-eye ")])]}}],null,!0)},[a("span",[t._v("Preview")])])],1)]}}],null,!0)})],1)],1)],1)],1)},s=[],n=(a("4160"),a("fb6a"),a("d3b7"),a("25f0"),a("159b"),a("96cf"),a("1da1")),i=a("5530"),o=a("2f62"),c={data:function(){return{search:"",page:1,headers:[{text:"No.",align:"start",sortable:!1,value:"no"},{text:"Po No.",align:"start",sortable:!1,value:"order.no"},{text:"Date.",value:"transdate"},{text:"Customer",value:"customer.name"},{text:"Status",value:"status"},{text:"Actions",value:"actions",sortable:!1}],rows:[]}},computed:Object(i["a"])({},Object(o["c"])(["user"])),mounted:function(){var t=this;return Object(n["a"])(regeneratorRuntime.mark((function e(){var a;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,t.loadData();case 2:a=t.$route.params.page,void 0!=a&&(t.page=parseInt(a));case 4:case"end":return e.stop()}}),e)})))()},created:function(){},methods:Object(i["a"])(Object(i["a"])({},Object(o["b"])(["getSalesInvoice"])),{},{editItem:function(t){this.$router.push({path:"/sales/invoice/edit/"+t._id,query:{page:this.page}})},loadData:function(){var t=this;return Object(n["a"])(regeneratorRuntime.mark((function e(){var a;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,t.getSalesInvoice();case 2:a=e.sent,a.data.success&&(t.rows=a.data.data,t.rows.forEach((function(e){e.transdate=t.getDateTime(e.transdate)})));case 4:case"end":return e.stop()}}),e)})))()},getDateTime:function(t){var e=new Date(t),a=e.getHours().toString(),r=e.getMinutes().toString(),s=e.getSeconds().toString(),n=("00"+a).substring(a.length)+":"+("00"+r).substring(r.length)+":"+("00"+s).substring(s.length);return e.toISOString().slice(0,10)+" "+n},showItem:function(t){this.$router.push({path:"/sales/invoice/show/"+t._id,query:{page:this.page}})}})},l=c,u=a("2877"),d=a("6544"),v=a.n(d),p=a("b0af"),f=a("99d9"),m=a("cc20"),h=a("62ad"),g=a("8fea"),b=a("132d"),_=a("0fd9"),w=a("2fa4"),x=a("8654"),k=a("71d9"),S=a("2a7f"),y=a("3a2f"),C=Object(u["a"])(l,r,s,!1,null,null,null);e["default"]=C.exports;v()(C,{VCard:p["a"],VCardText:f["b"],VChip:m["a"],VCol:h["a"],VDataTable:g["a"],VIcon:b["a"],VRow:_["a"],VSpacer:w["a"],VTextField:x["a"],VToolbar:k["a"],VToolbarTitle:S["a"],VTooltip:y["a"]})}}]);
//# sourceMappingURL=chunk-2d207ba0.3ecc140c.js.map