(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-0e2d7947"],{"0fd9":function(t,e,a){"use strict";a("99af"),a("4160"),a("caad"),a("13d5"),a("4ec9"),a("b64b"),a("d3b7"),a("ac1f"),a("2532"),a("3ca3"),a("5319"),a("159b"),a("ddb0");var n=a("ade3"),r=a("5530"),s=(a("4b85"),a("2b0e")),i=a("d9f7"),c=a("80d2"),o=["sm","md","lg","xl"],u=["start","end","center"];function l(t,e){return o.reduce((function(a,n){return a[t+Object(c["F"])(n)]=e(),a}),{})}var d=function(t){return[].concat(u,["baseline","stretch"]).includes(t)},f=l("align",(function(){return{type:String,default:null,validator:d}})),v=function(t){return[].concat(u,["space-between","space-around"]).includes(t)},h=l("justify",(function(){return{type:String,default:null,validator:v}})),p=function(t){return[].concat(u,["space-between","space-around","stretch"]).includes(t)},g=l("alignContent",(function(){return{type:String,default:null,validator:p}})),b={align:Object.keys(f),justify:Object.keys(h),alignContent:Object.keys(g)},_={align:"align",justify:"justify",alignContent:"align-content"};function x(t,e,a){var n=_[t];if(null!=a){if(e){var r=e.replace(t,"");n+="-".concat(r)}return n+="-".concat(a),n.toLowerCase()}}var m=new Map;e["a"]=s["a"].extend({name:"v-row",functional:!0,props:Object(r["a"])(Object(r["a"])(Object(r["a"])({tag:{type:String,default:"div"},dense:Boolean,noGutters:Boolean,align:{type:String,default:null,validator:d}},f),{},{justify:{type:String,default:null,validator:v}},h),{},{alignContent:{type:String,default:null,validator:p}},g),render:function(t,e){var a=e.props,r=e.data,s=e.children,c="";for(var o in a)c+=String(a[o]);var u=m.get(c);return u||function(){var t,e;for(e in u=[],b)b[e].forEach((function(t){var n=a[t],r=x(e,t,n);r&&u.push(r)}));u.push((t={"no-gutters":a.noGutters,"row--dense":a.dense},Object(n["a"])(t,"align-".concat(a.align),a.align),Object(n["a"])(t,"justify-".concat(a.justify),a.justify),Object(n["a"])(t,"align-content-".concat(a.alignContent),a.alignContent),t)),m.set(c,u)}(),t(a.tag,Object(i["a"])(r,{staticClass:"row",class:u}),s)}})},"1f4f":function(t,e,a){"use strict";a("a9e3");var n=a("5530"),r=(a("8b37"),a("80d2")),s=a("7560"),i=a("58df");e["a"]=Object(i["a"])(s["a"]).extend({name:"v-simple-table",props:{dense:Boolean,fixedHeader:Boolean,height:[Number,String]},computed:{classes:function(){return Object(n["a"])({"v-data-table--dense":this.dense,"v-data-table--fixed-height":!!this.height&&!this.fixedHeader,"v-data-table--fixed-header":this.fixedHeader},this.themeClasses)}},methods:{genWrapper:function(){return this.$slots.wrapper||this.$createElement("div",{staticClass:"v-data-table__wrapper",style:{height:Object(r["g"])(this.height)}},[this.$createElement("table",this.$slots.default)])}},render:function(t){return t("div",{staticClass:"v-data-table",class:this.classes},[this.$slots.top,this.genWrapper(),this.$slots.bottom])}})},"348b":function(t,e,a){"use strict";a.r(e);var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-row",[a("v-col",{attrs:{cols:"12",xs:"12",md:"12"}},[a("v-card",{staticClass:"mx-auto"},[a("v-card-text",[a("v-row",[a("h2",{staticClass:"ma-1"},[t._v("Sales Invoice Detail")]),a("v-spacer"),0==t.status?a("v-btn",{staticClass:"ma-1",attrs:{small:"",color:"success"},on:{click:function(e){return t.closeData()}}},[t._v("Close")]):t._e(),1==t.status?a("v-btn",{staticClass:"ma-1",attrs:{small:"",color:"orange",dark:""},on:{click:function(e){return t.openData()}}},[t._v("Open")]):t._e(),0==t.status?a("v-btn",{staticClass:"ma-1",attrs:{small:"",color:"error"},on:{click:function(e){return t.voidData()}}},[t._v("Void")]):t._e(),a("v-btn",{staticClass:"ma-1",attrs:{small:"",color:"primary"},on:{click:function(e){return t.Back()}}},[t._v("Back")])],1)],1)],1)],1),a("v-col",{attrs:{cols:"12",xs:"12",md:"6"}},[a("v-card",{staticClass:"mx-auto"},[a("v-card-text",{staticClass:"pa-0"},[a("v-simple-table",{attrs:{"fixed-header":"",dense:""},scopedSlots:t._u([{key:"default",fn:function(){return[a("thead",[a("tr",[a("th",{staticClass:"text-left",attrs:{width:"100px"}}),a("th",{staticClass:"text-left",attrs:{width:"10px"}}),a("th",{staticClass:"text-left"})])]),a("tbody",[a("tr",[a("td",[t._v("No.")]),a("td",[t._v(":")]),a("td",[t._v(t._s(t.no))])]),a("tr",[a("td",[t._v("Date")]),a("td",[t._v(":")]),a("td",[t._v(t._s(t.date))])]),a("tr",[a("td",[t._v("Customer")]),a("td",[t._v(":")]),a("td",[t._v(t._s(t.customer.name))])])])]},proxy:!0}])})],1)],1)],1),a("v-col",{attrs:{cols:"12",xs:"12",md:"6"}},[a("v-card",{staticClass:"mx-auto"},[a("v-card-text",{staticClass:"pa-0"},[a("v-simple-table",{attrs:{"fixed-header":"",dense:""},scopedSlots:t._u([{key:"default",fn:function(){return[a("thead",[a("tr",[a("th",{staticClass:"text-left",attrs:{width:"100px"}}),a("th",{staticClass:"text-left",attrs:{width:"10px"}}),a("th",{staticClass:"text-left"})])]),a("tbody",[a("tr",[a("td",[t._v("Notes")]),a("td",[t._v(":")]),a("td",[t._v(t._s(t.notes))])]),a("tr",[a("td",[t._v("Status")]),a("td",[t._v(":")]),a("td",[0==t.status?a("v-chip",{staticClass:"ma-1",attrs:{"x-small":"",color:"primary"}},[t._v(" Pending ")]):t._e(),1==t.status?a("v-chip",{staticClass:"ma-1",attrs:{"x-small":"",color:"green","text-color":"white"}},[t._v(" Closed ")]):t._e(),2==t.status?a("v-chip",{staticClass:"ma-1",attrs:{"x-small":"",color:"error"}},[t._v(" Void ")]):t._e()],1)]),a("tr",[a("td",[t._v("Created by")]),a("td",[t._v(":")]),a("td",[t._v(t._s(t.user.name))])])])]},proxy:!0}])})],1)],1)],1),a("v-col",{attrs:{cols:"12",xs:"12",md:"12"}},[a("v-card",{staticClass:"mx-auto"},[a("v-card-text",{staticClass:"pa-0"},[a("v-simple-table",{attrs:{"fixed-header":"",dense:""},scopedSlots:t._u([{key:"default",fn:function(){return[a("thead",[a("tr",[a("th"),a("th",{staticClass:"text-center",attrs:{colspan:"4"}},[t._v("Qty")]),a("th"),a("th",{staticClass:"text-center",attrs:{colspan:"3"}},[t._v("Total")])]),a("tr",[a("th",{staticClass:"text-center"},[t._v("Name")]),a("th",{staticClass:"text-center",attrs:{width:"50px"}},[t._v("Order")]),a("th",{staticClass:"text-center",attrs:{width:"50px"}},[t._v("Receipt")]),a("th",{staticClass:"text-center",attrs:{width:"50px"}},[t._v("Invoice")]),a("th",{staticClass:"text-center",attrs:{width:"50px"}},[t._v("Return")]),a("th",{staticClass:"text-center",attrs:{width:"150px"}},[t._v("Price")]),a("th",{staticClass:"text-center",attrs:{width:"150px"}},[t._v("Order")]),a("th",{staticClass:"text-center",attrs:{width:"150px"}},[t._v("Invoice")]),a("th",{staticClass:"text-center",attrs:{width:"150px"}},[t._v("Return")])])]),a("tbody",[t._l(t.items,(function(e){return a("tr",{key:e.product},[a("td",[t._v(t._s(e.name))]),a("td",[t._v(t._s(e.order_qty))]),a("td",[t._v(t._s(e.deliv_qty))]),a("td",[t._v(t._s(e.qty))]),a("td",[t._v(t._s(e.return_qty))]),a("td",[t._v(t._s(t._f("currency")(e.price)))]),a("td",[t._v(t._s(t._f("currency")(e.order_qty*e.price)))]),a("td",[t._v(t._s(t._f("currency")(e.qty*e.price)))]),a("td",[t._v(t._s(t._f("currency")(e.return_qty*e.price)))])])})),a("tr",[a("td",{staticClass:"text-center",attrs:{colspan:"6"}},[t._v("Total")]),a("td",[t._v(t._s(t._f("currency")(t.getSubtotal)))]),a("td",[t._v(t._s(t._f("currency")(t.getTotalInvoice)))]),a("td",[t._v(t._s(t._f("currency")(t.getTotalReturn)))])])],2)]},proxy:!0}])})],1)],1)],1)],1)},r=[],s=(a("4160"),a("fb6a"),a("b0c0"),a("d3b7"),a("25f0"),a("159b"),a("96cf"),a("1da1")),i=a("5530"),c=a("2f62"),o={data:function(){return{id:"",no:"",date:"",customer:"",notes:"",status:"",user:"",items:[]}},methods:Object(i["a"])(Object(i["a"])({},Object(c["b"])(["getSalesInvoice","getSiItem","voidSalesInvoice","closeSalesInvoice","openSalesInvoice"])),{},{getDateTime:function(t){var e=new Date(t),a=e.getHours().toString(),n=e.getMinutes().toString(),r=e.getSeconds().toString(),s=("00"+a).substring(a.length)+":"+("00"+n).substring(n.length)+":"+("00"+r).substring(r.length);return e.toISOString().slice(0,10)+" "+s},getItem:function(t){var e=this,a={invoice:t};this.getSiItem(a).then((function(t){if(t.data.success){var a=t.data.data;e.items=[],a.forEach((function(t){t={name:t.product.name,product:t.product._id,price:t.price,qty:t.qty,deliv_qty:t.deliv_qty,order_qty:t.order_qty,return_qty:t.return_qty},e.items.push(t)}))}}))},loadData:function(t){var e=this;return Object(s["a"])(regeneratorRuntime.mark((function a(){var n,r;return regeneratorRuntime.wrap((function(a){while(1)switch(a.prev=a.next){case 0:return a.next=2,e.getSalesInvoice(t);case 2:n=a.sent,void 0!=n&&(r=n.data.data,e.id=t,e.no=r.no,e.date=e.getDateTime(r.transdate),e.customer=r.customer,e.notes=r.notes,e.status=r.status,e.user=r.user,e.getItem(t));case 4:case"end":return a.stop()}}),a)})))()},voidData:function(){var t=this,e={id:this.id};this.voidSalesInvoice(e).then((function(e){e.data.success&&t.loadData(t.id)}))},closeData:function(){var t=this,e={id:this.id};this.closeSalesInvoice(e).then((function(e){e.data.success&&t.loadData(t.id)}))},openData:function(){var t=this,e={id:this.id};this.openSalesInvoice(e).then((function(e){e.data.success&&t.loadData(t.id)}))},Back:function(){var t=this.$route.query.page;this.$router.push({name:"silist",params:{page:t}})}}),created:function(){var t=this.$route.params.id;this.loadData(t)},computed:{getSubtotal:function(){var t=this.items;if(0!=t.length){for(var e=0,a=0;a<t.length;a++)e+=t[a].order_qty*t[a].price;return e}},getTotalInvoice:function(){var t=this.items;if(0!=t.length){for(var e=0,a=0;a<t.length;a++)e+=t[a].qty*t[a].price;return e}},getTotalReturn:function(){var t=this.items;if(0!=t.length){for(var e=0,a=0;a<t.length;a++)e+=t[a].return_qty*t[a].price;return e}}}},u=o,l=(a("6959"),a("2877")),d=a("6544"),f=a.n(d),v=a("8336"),h=a("b0af"),p=a("99d9"),g=a("cc20"),b=a("62ad"),_=a("0fd9"),x=a("1f4f"),m=a("2fa4"),y=Object(l["a"])(u,n,r,!1,null,"43464a8b",null);e["default"]=y.exports;f()(y,{VBtn:v["a"],VCard:h["a"],VCardText:p["b"],VChip:g["a"],VCol:b["a"],VRow:_["a"],VSimpleTable:x["a"],VSpacer:m["a"]})},"4ec9":function(t,e,a){"use strict";var n=a("6d61"),r=a("6566");t.exports=n("Map",(function(t){return function(){return t(this,arguments.length?arguments[0]:void 0)}}),r)},"62ad":function(t,e,a){"use strict";a("4160"),a("caad"),a("13d5"),a("45fc"),a("4ec9"),a("a9e3"),a("b64b"),a("d3b7"),a("ac1f"),a("3ca3"),a("5319"),a("2ca0"),a("159b"),a("ddb0");var n=a("ade3"),r=a("5530"),s=(a("4b85"),a("2b0e")),i=a("d9f7"),c=a("80d2"),o=["sm","md","lg","xl"],u=function(){return o.reduce((function(t,e){return t[e]={type:[Boolean,String,Number],default:!1},t}),{})}(),l=function(){return o.reduce((function(t,e){return t["offset"+Object(c["F"])(e)]={type:[String,Number],default:null},t}),{})}(),d=function(){return o.reduce((function(t,e){return t["order"+Object(c["F"])(e)]={type:[String,Number],default:null},t}),{})}(),f={col:Object.keys(u),offset:Object.keys(l),order:Object.keys(d)};function v(t,e,a){var n=t;if(null!=a&&!1!==a){if(e){var r=e.replace(t,"");n+="-".concat(r)}return"col"!==t||""!==a&&!0!==a?(n+="-".concat(a),n.toLowerCase()):n.toLowerCase()}}var h=new Map;e["a"]=s["a"].extend({name:"v-col",functional:!0,props:Object(r["a"])(Object(r["a"])(Object(r["a"])(Object(r["a"])({cols:{type:[Boolean,String,Number],default:!1}},u),{},{offset:{type:[String,Number],default:null}},l),{},{order:{type:[String,Number],default:null}},d),{},{alignSelf:{type:String,default:null,validator:function(t){return["auto","start","end","center","baseline","stretch"].includes(t)}},tag:{type:String,default:"div"}}),render:function(t,e){var a=e.props,r=e.data,s=e.children,c=(e.parent,"");for(var o in a)c+=String(a[o]);var u=h.get(c);return u||function(){var t,e;for(e in u=[],f)f[e].forEach((function(t){var n=a[t],r=v(e,t,n);r&&u.push(r)}));var r=u.some((function(t){return t.startsWith("col-")}));u.push((t={col:!r||!a.cols},Object(n["a"])(t,"col-".concat(a.cols),a.cols),Object(n["a"])(t,"offset-".concat(a.offset),a.offset),Object(n["a"])(t,"order-".concat(a.order),a.order),Object(n["a"])(t,"align-self-".concat(a.alignSelf),a.alignSelf),t)),h.set(c,u)}(),t(a.tag,Object(i["a"])(r,{class:u}),s)}})},6566:function(t,e,a){"use strict";var n=a("9bf2").f,r=a("7c73"),s=a("e2cc"),i=a("0366"),c=a("19aa"),o=a("2266"),u=a("7dd0"),l=a("2626"),d=a("83ab"),f=a("f183").fastKey,v=a("69f3"),h=v.set,p=v.getterFor;t.exports={getConstructor:function(t,e,a,u){var l=t((function(t,n){c(t,l,e),h(t,{type:e,index:r(null),first:void 0,last:void 0,size:0}),d||(t.size=0),void 0!=n&&o(n,t[u],t,a)})),v=p(e),g=function(t,e,a){var n,r,s=v(t),i=b(t,e);return i?i.value=a:(s.last=i={index:r=f(e,!0),key:e,value:a,previous:n=s.last,next:void 0,removed:!1},s.first||(s.first=i),n&&(n.next=i),d?s.size++:t.size++,"F"!==r&&(s.index[r]=i)),t},b=function(t,e){var a,n=v(t),r=f(e);if("F"!==r)return n.index[r];for(a=n.first;a;a=a.next)if(a.key==e)return a};return s(l.prototype,{clear:function(){var t=this,e=v(t),a=e.index,n=e.first;while(n)n.removed=!0,n.previous&&(n.previous=n.previous.next=void 0),delete a[n.index],n=n.next;e.first=e.last=void 0,d?e.size=0:t.size=0},delete:function(t){var e=this,a=v(e),n=b(e,t);if(n){var r=n.next,s=n.previous;delete a.index[n.index],n.removed=!0,s&&(s.next=r),r&&(r.previous=s),a.first==n&&(a.first=r),a.last==n&&(a.last=s),d?a.size--:e.size--}return!!n},forEach:function(t){var e,a=v(this),n=i(t,arguments.length>1?arguments[1]:void 0,3);while(e=e?e.next:a.first){n(e.value,e.key,this);while(e&&e.removed)e=e.previous}},has:function(t){return!!b(this,t)}}),s(l.prototype,a?{get:function(t){var e=b(this,t);return e&&e.value},set:function(t,e){return g(this,0===t?0:t,e)}}:{add:function(t){return g(this,t=0===t?0:t,t)}}),d&&n(l.prototype,"size",{get:function(){return v(this).size}}),l},setStrong:function(t,e,a){var n=e+" Iterator",r=p(e),s=p(n);u(t,e,(function(t,e){h(this,{type:n,target:t,state:r(t),kind:e,last:void 0})}),(function(){var t=s(this),e=t.kind,a=t.last;while(a&&a.removed)a=a.previous;return t.target&&(t.last=a=a?a.next:t.state.first)?"keys"==e?{value:a.key,done:!1}:"values"==e?{value:a.value,done:!1}:{value:[a.key,a.value],done:!1}:(t.target=void 0,{value:void 0,done:!0})}),a?"entries":"values",!a,!0),l(e)}}},6959:function(t,e,a){"use strict";var n=a("b4f4"),r=a.n(n);r.a},"6d61":function(t,e,a){"use strict";var n=a("23e7"),r=a("da84"),s=a("94ca"),i=a("6eeb"),c=a("f183"),o=a("2266"),u=a("19aa"),l=a("861d"),d=a("d039"),f=a("1c7e"),v=a("d44e"),h=a("7156");t.exports=function(t,e,a){var p=-1!==t.indexOf("Map"),g=-1!==t.indexOf("Weak"),b=p?"set":"add",_=r[t],x=_&&_.prototype,m=_,y={},C=function(t){var e=x[t];i(x,t,"add"==t?function(t){return e.call(this,0===t?0:t),this}:"delete"==t?function(t){return!(g&&!l(t))&&e.call(this,0===t?0:t)}:"get"==t?function(t){return g&&!l(t)?void 0:e.call(this,0===t?0:t)}:"has"==t?function(t){return!(g&&!l(t))&&e.call(this,0===t?0:t)}:function(t,a){return e.call(this,0===t?0:t,a),this})};if(s(t,"function"!=typeof _||!(g||x.forEach&&!d((function(){(new _).entries().next()})))))m=a.getConstructor(e,t,p,b),c.REQUIRED=!0;else if(s(t,!0)){var w=new m,S=w[b](g?{}:-0,1)!=w,j=d((function(){w.has(1)})),O=f((function(t){new _(t)})),k=!g&&d((function(){var t=new _,e=5;while(e--)t[b](e,e);return!t.has(-0)}));O||(m=e((function(e,a){u(e,m,t);var n=h(new _,e,m);return void 0!=a&&o(a,n[b],n,p),n})),m.prototype=x,x.constructor=m),(j||k)&&(C("delete"),C("has"),p&&C("get")),(k||S)&&C(b),g&&x.clear&&delete x.clear}return y[t]=m,n({global:!0,forced:m!=_},y),v(m,t),g||a.setStrong(m,t,p),m}},"8b37":function(t,e,a){},"99d9":function(t,e,a){"use strict";a.d(e,"a",(function(){return s})),a.d(e,"b",(function(){return c}));var n=a("b0af"),r=a("80d2"),s=Object(r["i"])("v-card__actions"),i=Object(r["i"])("v-card__subtitle"),c=Object(r["i"])("v-card__text"),o=Object(r["i"])("v-card__title");n["a"]},b4f4:function(t,e,a){}}]);
//# sourceMappingURL=chunk-0e2d7947.792d81cf.js.map