(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-19c5fb3c"],{"9d01":function(e,t,i){},b73d:function(e,t,i){"use strict";i("0481"),i("4069");var a=i("5530"),s=(i("ec29"),i("9d01"),i("4de4"),i("45fc"),i("d3b7"),i("25f0"),i("c37a")),n=i("5607"),r=i("2b0e"),o=r["a"].extend({name:"rippleable",directives:{ripple:n["a"]},props:{ripple:{type:[Boolean,Object],default:!0}},methods:{genRipple:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return this.ripple?(e.staticClass="v-input--selection-controls__ripple",e.directives=e.directives||[],e.directives.push({name:"ripple",value:{center:!0}}),this.$createElement("div",e)):null}}}),c=i("8547"),l=i("58df");function u(e){e.preventDefault()}var d=Object(l["a"])(s["a"],o,c["a"]).extend({name:"selectable",model:{prop:"inputValue",event:"change"},props:{id:String,inputValue:null,falseValue:null,trueValue:null,multiple:{type:Boolean,default:null},label:String},data:function(){return{hasColor:this.inputValue,lazyValue:this.inputValue}},computed:{computedColor:function(){if(this.isActive)return this.color?this.color:this.isDark&&!this.appIsDark?"white":"primary"},isMultiple:function(){return!0===this.multiple||null===this.multiple&&Array.isArray(this.internalValue)},isActive:function(){var e=this,t=this.value,i=this.internalValue;return this.isMultiple?!!Array.isArray(i)&&i.some((function(i){return e.valueComparator(i,t)})):void 0===this.trueValue||void 0===this.falseValue?t?this.valueComparator(t,i):Boolean(i):this.valueComparator(i,this.trueValue)},isDirty:function(){return this.isActive},rippleState:function(){return this.isDisabled||this.validationState?this.validationState:void 0}},watch:{inputValue:function(e){this.lazyValue=e,this.hasColor=e}},methods:{genLabel:function(){var e=s["a"].options.methods.genLabel.call(this);return e?(e.data.on={click:u},e):e},genInput:function(e,t){return this.$createElement("input",{attrs:Object.assign({"aria-checked":this.isActive.toString(),disabled:this.isDisabled,id:this.computedId,role:e,type:e},t),domProps:{value:this.value,checked:this.isActive},on:{blur:this.onBlur,change:this.onChange,focus:this.onFocus,keydown:this.onKeydown,click:u},ref:"input"})},onBlur:function(){this.isFocused=!1},onClick:function(e){this.onChange(),this.$emit("click",e)},onChange:function(){var e=this;if(this.isInteractive){var t=this.value,i=this.internalValue;if(this.isMultiple){Array.isArray(i)||(i=[]);var a=i.length;i=i.filter((function(i){return!e.valueComparator(i,t)})),i.length===a&&i.push(t)}else i=void 0!==this.trueValue&&void 0!==this.falseValue?this.valueComparator(i,this.trueValue)?this.falseValue:this.trueValue:t?this.valueComparator(i,t)?null:t:!i;this.validate(!0,i),this.internalValue=i,this.hasColor=i}},onFocus:function(){this.isFocused=!0},onKeydown:function(e){}}}),h=i("c3f0"),p=i("0789"),v=i("490a"),m=i("80d2");t["a"]=d.extend({name:"v-switch",directives:{Touch:h["a"]},props:{inset:Boolean,loading:{type:[Boolean,String],default:!1},flat:{type:Boolean,default:!1}},computed:{classes:function(){return Object(a["a"])(Object(a["a"])({},s["a"].options.computed.classes.call(this)),{},{"v-input--selection-controls v-input--switch":!0,"v-input--switch--flat":this.flat,"v-input--switch--inset":this.inset})},attrs:function(){return{"aria-checked":String(this.isActive),"aria-disabled":String(this.isDisabled),role:"switch"}},validationState:function(){return this.hasError&&this.shouldValidate?"error":this.hasSuccess?"success":null!==this.hasColor?this.computedColor:void 0},switchData:function(){return this.setTextColor(this.loading?void 0:this.validationState,{class:this.themeClasses})}},methods:{genDefaultSlot:function(){return[this.genSwitch(),this.genLabel()]},genSwitch:function(){return this.$createElement("div",{staticClass:"v-input--selection-controls__input"},[this.genInput("checkbox",Object(a["a"])(Object(a["a"])({},this.attrs),this.attrs$)),this.genRipple(this.setTextColor(this.validationState,{directives:[{name:"touch",value:{left:this.onSwipeLeft,right:this.onSwipeRight}}]})),this.$createElement("div",Object(a["a"])({staticClass:"v-input--switch__track"},this.switchData)),this.$createElement("div",Object(a["a"])({staticClass:"v-input--switch__thumb"},this.switchData),[this.genProgress()])])},genProgress:function(){return this.$createElement(p["c"],{},[!1===this.loading?null:this.$slots.progress||this.$createElement(v["a"],{props:{color:!0===this.loading||""===this.loading?this.color||"primary":this.loading,size:16,width:2,indeterminate:!0}})])},onSwipeLeft:function(){this.isActive&&this.onChange()},onSwipeRight:function(){this.isActive||this.onChange()},onKeydown:function(e){(e.keyCode===m["x"].left&&this.isActive||e.keyCode===m["x"].right&&!this.isActive)&&this.onChange()}}})},c8da:function(e,t,i){"use strict";i.r(t);var a=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("v-row",{attrs:{align:"center",justify:"center"}},[i("v-col",{attrs:{cols:"12",sm:"8",md:"5"}},[i("v-card",{staticClass:"elevation-12"},[i("v-toolbar",{attrs:{color:"primary",dark:"",flat:""}},[i("v-toolbar-title",[e._v("Input Data Customer")]),i("v-spacer"),i("v-toolbar-title",[i("v-tooltip",{attrs:{left:""},scopedSlots:e._u([{key:"activator",fn:function(t){var a=t.on,s=t.attrs;return[i("v-btn",e._g(e._b({attrs:{icon:"",color:"dee-orange"},on:{click:e.reset}},"v-btn",s,!1),a),[i("v-icon",[e._v("mdi-restore")])],1)]}}])},[i("span",[e._v("New Data")])]),i("v-tooltip",{attrs:{left:""},scopedSlots:e._u([{key:"activator",fn:function(t){var a=t.on,s=t.attrs;return[i("v-btn",e._g(e._b({attrs:{icon:"",color:"dee-orange",loading:e.isloading},on:{click:e.submit}},"v-btn",s,!1),a),[i("v-icon",[e._v("mdi-content-save-move-outline")])],1)]}}])},[i("span",[e._v("Save Data")])])],1)],1),i("v-card-text",[i("v-form",[i("v-text-field",{attrs:{label:"Name","prepend-icon":"mdi-account-tie",type:"text","error-messages":e.nameErrors,required:""},on:{input:function(t){return e.$v.name.$touch()},blur:function(t){return e.$v.name.$touch()}},model:{value:e.name,callback:function(t){e.name=t},expression:"name"}}),i("v-text-field",{attrs:{label:"Address","prepend-icon":"mdi-map-marker",type:"text","error-messages":e.addressErrors,required:""},on:{input:function(t){return e.$v.address.$touch()},blur:function(t){return e.$v.address.$touch()}},model:{value:e.address,callback:function(t){e.address=t},expression:"address"}}),i("v-text-field",{attrs:{label:"Contact Person","prepend-icon":"mdi-account",type:"text","error-messages":e.cpnameErrors,required:""},on:{input:function(t){return e.$v.cpname.$touch()},blur:function(t){return e.$v.cpname.$touch()}},model:{value:e.cpname,callback:function(t){e.cpname=t},expression:"cpname"}}),i("v-text-field",{attrs:{label:"Email","prepend-icon":"mdi-email",type:"text","error-messages":e.emailErrors,required:""},on:{input:function(t){return e.$v.email.$touch()},blur:function(t){return e.$v.email.$touch()}},model:{value:e.email,callback:function(t){e.email=t},expression:"email"}}),i("v-text-field",{attrs:{label:"Phone","prepend-icon":"mdi-phone",type:"text","error-messages":e.phoneErrors,required:""},on:{input:function(t){return e.$v.phone.$touch()},blur:function(t){return e.$v.phone.$touch()}},model:{value:e.phone,callback:function(t){e.phone=t},expression:"phone"}}),i("v-switch",{staticClass:"ma-2",attrs:{label:"Active"},model:{value:e.active,callback:function(t){e.active=t},expression:"active"}})],1)],1)],1)],1),i("v-col",{attrs:{cols:"12",sm:"8",md:"7"}},[i("v-card",{staticClass:"elevation-12"},[i("v-toolbar",{attrs:{color:"primary",dark:"",flat:""}},[i("v-toolbar-title",[e._v("List Data Customer")]),i("v-spacer"),i("v-text-field",{attrs:{"append-icon":"mdi-magnify",label:"Search","single-line":"","hide-details":""},model:{value:e.search,callback:function(t){e.search=t},expression:"search"}})],1),i("v-card-text",[i("v-data-table",{attrs:{headers:e.headers,items:e.rows,search:e.search},scopedSlots:e._u([{key:"item.active",fn:function(t){var a=t.item;return[a.active?i("v-icon",{attrs:{color:"blue",dark:""}},[e._v("mdi-check-circle")]):e._e(),a.active?e._e():i("v-icon",{attrs:{color:"red",dark:""}},[e._v("mdi-minus-circle")])]}},{key:"item.actions",fn:function(t){var a=t.item;return[i("v-icon",{staticClass:"mr-2",attrs:{small:""},on:{click:function(t){return e.editItem(a)}}},[e._v(" mdi-pencil ")]),i("v-icon",{attrs:{small:""},on:{click:function(t){return e.deleteItem(a)}}},[e._v(" mdi-delete ")])]}}],null,!0)})],1)],1)],1)],1)},s=[],n=(i("c740"),i("a434"),i("b0c0"),i("96cf"),i("1da1")),r=i("5530"),o=i("1dce"),c=i("b5ae"),l=i("2f62"),u={mixins:[o["validationMixin"]],validations:{name:{required:c["required"]},address:{required:c["required"]},cpname:{required:c["required"]},email:{required:c["required"],email:c["email"]},phone:{required:c["required"]},active:{required:c["required"]}},computed:Object(r["a"])(Object(r["a"])({},Object(l["c"])(["user"])),{},{nameErrors:function(){var e=[];return this.$v.name.$dirty?(!this.$v.name.required&&e.push("Name is required."),e):e},addressErrors:function(){var e=[];return this.$v.address.$dirty?(!this.$v.address.required&&e.push("Address is required."),e):e},cpnameErrors:function(){var e=[];return this.$v.cpname.$dirty?(!this.$v.cpname.required&&e.push("Contact Person is required."),e):e},emailErrors:function(){var e=[];return this.$v.email.$dirty?(!this.$v.email.email&&e.push("Example : JohnDue@gmail.com"),!this.$v.email.required&&e.push("Email is required."),e):e},phoneErrors:function(){var e=[];return this.$v.phone.$dirty?(!this.$v.phone.required&&e.push("Password is required."),e):e}}),data:function(){return{search:"",name:"",address:"",cpname:"",email:"",phone:"",active:!0,isloading:!1,headers:[{text:"Name",align:"start",sortable:!1,value:"name"},{text:"Address",value:"address"},{text:"Phone",value:"phone"},{text:"Active",value:"active"},{text:"Actions",value:"actions",sortable:!1}],rows:[]}},mounted:function(){var e=this;return Object(n["a"])(regeneratorRuntime.mark((function t(){var i;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,e.getCustomer();case 2:i=t.sent,i.data.success&&(e.rows=i.data.data);case 4:case"end":return t.stop()}}),t)})))()},created:function(){},methods:Object(r["a"])(Object(r["a"])({},Object(l["b"])(["getCustomer","addCustomer","updateCustomer","deleteCustomer"])),{},{addData:function(){var e=this,t={name:this.name,address:this.address,cpname:this.cpname,email:this.email,phone:this.phone,active:this.active,user:this.user._id};this.isloading=!0,this.addCustomer(t).then((function(t){t.data.success&&(e.rows.push(t.data.data),e.reset(),e.isloading=!1)}))},updateData:function(){var e=this,t={id:this.id,name:this.name,address:this.address,cpname:this.cpname,email:this.email,phone:this.phone,active:this.active,user:this.user._id};this.isloading=!0,this.updateCustomer(t).then((function(t){if(t.data.success){var i=t.data.data,a=e.rows.findIndex((function(e){return e._id===i._id})),s=e.rows[a];s.name=i.name,s.address=i.address,s.cpname=i.cpname,s.email=i.email,s.phone=i.phone,s.active=i.active,e.reset(),e.isloading=!1}}))},editItem:function(e){this.id=e._id,this.name=e.name,this.address=e.address,this.cpname=e.cpname,this.email=e.email,this.phone=e.phone,this.active=e.active},deleteItem:function(e){var t=this,i={id:e._id};this.deleteCustomer(i).then((function(i){if(i.data.success){var a=t.rows.findIndex((function(t){return t._id===e._id}));t.rows.splice(a,1)}}))},submit:function(){this.$v.$touch(),this.$v.$error||(this.id?this.updateData():this.addData())},reset:function(){this.id=!1,this.name="",this.address="",this.cpname="",this.email="",this.phone="",this.active=!0}})},d=u,h=i("2877"),p=i("6544"),v=i.n(p),m=i("8336"),f=i("b0af"),b=i("99d9"),g=i("62ad"),$=i("8fea"),C=i("4bd4"),w=i("132d"),x=i("0fd9"),y=i("2fa4"),k=i("b73d"),_=i("8654"),V=i("71d9"),q=i("2a7f"),S=i("3a2f"),A=Object(h["a"])(d,a,s,!1,null,null,null);t["default"]=A.exports;v()(A,{VBtn:m["a"],VCard:f["a"],VCardText:b["b"],VCol:g["a"],VDataTable:$["a"],VForm:C["a"],VIcon:w["a"],VRow:x["a"],VSpacer:y["a"],VSwitch:k["a"],VTextField:_["a"],VToolbar:V["a"],VToolbarTitle:q["a"],VTooltip:S["a"]})},ec29:function(e,t,i){}}]);
//# sourceMappingURL=chunk-19c5fb3c.f4e8f26e.js.map