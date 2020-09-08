(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-1b3438cc"],{"9d01":function(t,e,i){},b73d:function(t,e,i){"use strict";i("0481"),i("4069");var a=i("5530"),n=(i("ec29"),i("9d01"),i("4de4"),i("45fc"),i("d3b7"),i("25f0"),i("c37a")),s=i("5607"),r=i("2b0e"),o=r["a"].extend({name:"rippleable",directives:{ripple:s["a"]},props:{ripple:{type:[Boolean,Object],default:!0}},methods:{genRipple:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return this.ripple?(t.staticClass="v-input--selection-controls__ripple",t.directives=t.directives||[],t.directives.push({name:"ripple",value:{center:!0}}),this.$createElement("div",t)):null}}}),c=i("8547"),l=i("58df");function u(t){t.preventDefault()}var d=Object(l["a"])(n["a"],o,c["a"]).extend({name:"selectable",model:{prop:"inputValue",event:"change"},props:{id:String,inputValue:null,falseValue:null,trueValue:null,multiple:{type:Boolean,default:null},label:String},data:function(){return{hasColor:this.inputValue,lazyValue:this.inputValue}},computed:{computedColor:function(){if(this.isActive)return this.color?this.color:this.isDark&&!this.appIsDark?"white":"primary"},isMultiple:function(){return!0===this.multiple||null===this.multiple&&Array.isArray(this.internalValue)},isActive:function(){var t=this,e=this.value,i=this.internalValue;return this.isMultiple?!!Array.isArray(i)&&i.some((function(i){return t.valueComparator(i,e)})):void 0===this.trueValue||void 0===this.falseValue?e?this.valueComparator(e,i):Boolean(i):this.valueComparator(i,this.trueValue)},isDirty:function(){return this.isActive},rippleState:function(){return this.isDisabled||this.validationState?this.validationState:void 0}},watch:{inputValue:function(t){this.lazyValue=t,this.hasColor=t}},methods:{genLabel:function(){var t=n["a"].options.methods.genLabel.call(this);return t?(t.data.on={click:u},t):t},genInput:function(t,e){return this.$createElement("input",{attrs:Object.assign({"aria-checked":this.isActive.toString(),disabled:this.isDisabled,id:this.computedId,role:t,type:t},e),domProps:{value:this.value,checked:this.isActive},on:{blur:this.onBlur,change:this.onChange,focus:this.onFocus,keydown:this.onKeydown,click:u},ref:"input"})},onBlur:function(){this.isFocused=!1},onClick:function(t){this.onChange(),this.$emit("click",t)},onChange:function(){var t=this;if(this.isInteractive){var e=this.value,i=this.internalValue;if(this.isMultiple){Array.isArray(i)||(i=[]);var a=i.length;i=i.filter((function(i){return!t.valueComparator(i,e)})),i.length===a&&i.push(e)}else i=void 0!==this.trueValue&&void 0!==this.falseValue?this.valueComparator(i,this.trueValue)?this.falseValue:this.trueValue:e?this.valueComparator(i,e)?null:e:!i;this.validate(!0,i),this.internalValue=i,this.hasColor=i}},onFocus:function(){this.isFocused=!0},onKeydown:function(t){}}}),h=i("c3f0"),v=i("0789"),p=i("490a"),f=i("80d2");e["a"]=d.extend({name:"v-switch",directives:{Touch:h["a"]},props:{inset:Boolean,loading:{type:[Boolean,String],default:!1},flat:{type:Boolean,default:!1}},computed:{classes:function(){return Object(a["a"])(Object(a["a"])({},n["a"].options.computed.classes.call(this)),{},{"v-input--selection-controls v-input--switch":!0,"v-input--switch--flat":this.flat,"v-input--switch--inset":this.inset})},attrs:function(){return{"aria-checked":String(this.isActive),"aria-disabled":String(this.isDisabled),role:"switch"}},validationState:function(){return this.hasError&&this.shouldValidate?"error":this.hasSuccess?"success":null!==this.hasColor?this.computedColor:void 0},switchData:function(){return this.setTextColor(this.loading?void 0:this.validationState,{class:this.themeClasses})}},methods:{genDefaultSlot:function(){return[this.genSwitch(),this.genLabel()]},genSwitch:function(){return this.$createElement("div",{staticClass:"v-input--selection-controls__input"},[this.genInput("checkbox",Object(a["a"])(Object(a["a"])({},this.attrs),this.attrs$)),this.genRipple(this.setTextColor(this.validationState,{directives:[{name:"touch",value:{left:this.onSwipeLeft,right:this.onSwipeRight}}]})),this.$createElement("div",Object(a["a"])({staticClass:"v-input--switch__track"},this.switchData)),this.$createElement("div",Object(a["a"])({staticClass:"v-input--switch__thumb"},this.switchData),[this.genProgress()])])},genProgress:function(){return this.$createElement(v["c"],{},[!1===this.loading?null:this.$slots.progress||this.$createElement(p["a"],{props:{color:!0===this.loading||""===this.loading?this.color||"primary":this.loading,size:16,width:2,indeterminate:!0}})])},onSwipeLeft:function(){this.isActive&&this.onChange()},onSwipeRight:function(){this.isActive||this.onChange()},onKeydown:function(t){(t.keyCode===f["x"].left&&this.isActive||t.keyCode===f["x"].right&&!this.isActive)&&this.onChange()}}})},d3e8:function(t,e,i){"use strict";i.r(e);var a=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-row",{attrs:{align:"center",justify:"center"}},[i("v-col",{attrs:{cols:"12",sm:"8",md:"5"}},[i("v-card",{staticClass:"elevation-12"},[i("v-toolbar",{attrs:{color:"primary",dark:"",flat:""}},[i("v-toolbar-title",[t._v("Input Data Category")]),i("v-spacer"),i("v-toolbar-title",[i("v-tooltip",{attrs:{left:""},scopedSlots:t._u([{key:"activator",fn:function(e){var a=e.on,n=e.attrs;return[i("v-btn",t._g(t._b({attrs:{icon:"",color:"dee-orange"},on:{click:t.reset}},"v-btn",n,!1),a),[i("v-icon",[t._v("mdi-restore")])],1)]}}])},[i("span",[t._v("New Data")])]),i("v-tooltip",{attrs:{left:""},scopedSlots:t._u([{key:"activator",fn:function(e){var a=e.on,n=e.attrs;return[i("v-btn",t._g(t._b({attrs:{icon:"",color:"dee-orange",loading:t.isloading},on:{click:t.submit}},"v-btn",n,!1),a),[i("v-icon",[t._v("mdi-content-save-move-outline")])],1)]}}])},[i("span",[t._v("Save Data")])])],1)],1),i("v-card-text",[i("v-form",[i("v-text-field",{attrs:{label:"Name","prepend-icon":"mdi-account-tie",type:"text","error-messages":t.nameErrors,required:""},on:{input:function(e){return t.$v.name.$touch()},blur:function(e){return t.$v.name.$touch()}},model:{value:t.name,callback:function(e){t.name=e},expression:"name"}}),i("v-text-field",{attrs:{label:"Description","prepend-icon":"mdi-note-text-outline",type:"text"},model:{value:t.description,callback:function(e){t.description=e},expression:"description"}}),i("v-switch",{staticClass:"ma-2",attrs:{label:"Active"},model:{value:t.active,callback:function(e){t.active=e},expression:"active"}})],1)],1)],1)],1),i("v-col",{attrs:{cols:"12",sm:"8",md:"7"}},[i("v-card",{staticClass:"elevation-12"},[i("v-toolbar",{attrs:{color:"primary",dark:"",flat:""}},[i("v-toolbar-title",[t._v("List Data Category")]),i("v-spacer"),i("v-text-field",{attrs:{"append-icon":"mdi-magnify",label:"Search","single-line":"","hide-details":""},model:{value:t.search,callback:function(e){t.search=e},expression:"search"}})],1),i("v-card-text",[i("v-data-table",{attrs:{headers:t.headers,items:t.rows,search:t.search},scopedSlots:t._u([{key:"item.active",fn:function(e){var a=e.item;return[a.active?i("v-icon",{attrs:{color:"blue",dark:""}},[t._v("mdi-check-circle")]):t._e(),a.active?t._e():i("v-icon",{attrs:{color:"red",dark:""}},[t._v("mdi-minus-circle")])]}},{key:"item.actions",fn:function(e){var a=e.item;return[i("v-icon",{staticClass:"mr-2",attrs:{small:""},on:{click:function(e){return t.editItem(a)}}},[t._v(" mdi-pencil ")]),i("v-icon",{attrs:{small:""},on:{click:function(e){return t.deleteItem(a)}}},[t._v(" mdi-delete ")])]}}],null,!0)})],1)],1)],1)],1)},n=[],s=(i("a4d3"),i("e01a"),i("c740"),i("a434"),i("b0c0"),i("96cf"),i("1da1")),r=i("5530"),o=i("1dce"),c=i("b5ae"),l=i("2f62"),u={mixins:[o["validationMixin"]],validations:{name:{required:c["required"]}},computed:Object(r["a"])(Object(r["a"])({},Object(l["c"])(["user"])),{},{nameErrors:function(){var t=[];return this.$v.name.$dirty?(!this.$v.name.required&&t.push("Name is required."),t):t}}),data:function(){return{search:"",name:"",description:"",active:!0,isloading:!1,headers:[{text:"Name",align:"start",sortable:!1,value:"name"},{text:"Desciption",value:"description"},{text:"Active",value:"active"},{text:"Actions",value:"actions",sortable:!1}],rows:[]}},mounted:function(){var t=this;return Object(s["a"])(regeneratorRuntime.mark((function e(){var i;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,t.getCategory();case 2:i=e.sent,i.data.success&&(t.rows=i.data.data);case 4:case"end":return e.stop()}}),e)})))()},created:function(){},methods:Object(r["a"])(Object(r["a"])({},Object(l["b"])(["getCategory","addCategory","updateCategory","deleteCategory"])),{},{addData:function(){var t=this,e={name:this.name,description:this.description,active:this.active,user:this.user._id};this.isloading=!0,this.addCategory(e).then((function(e){e.data.success&&(t.rows.push(e.data.data),t.reset(),t.isloading=!1)}))},updateData:function(){var t=this,e={id:this.id,name:this.name,description:this.description,active:this.active,user:this.user._id};this.isloading=!0,this.updateCategory(e).then((function(e){if(e.data.success){var i=e.data.data,a=t.rows.findIndex((function(t){return t._id===i._id})),n=t.rows[a];n.name=i.name,n.description=i.description,n.active=i.active,t.reset(),t.isloading=!1}}))},editItem:function(t){this.id=t._id,this.name=t.name,this.description=t.description,this.active=t.active},deleteItem:function(t){var e=this,i={id:t._id};this.deleteCategory(i).then((function(i){if(i.data.success){var a=e.rows.findIndex((function(e){return e._id===t._id}));e.rows.splice(a,1)}}))},submit:function(){this.$v.$touch(),this.$v.$error||(this.id?this.updateData():this.addData())},reset:function(){this.id=!1,this.name="",this.description="",this.active=!0}})},d=u,h=i("2877"),v=i("6544"),p=i.n(v),f=i("8336"),m=i("b0af"),b=i("99d9"),g=i("62ad"),w=i("8fea"),C=i("4bd4"),y=i("132d"),_=i("0fd9"),V=i("2fa4"),k=i("b73d"),x=i("8654"),S=i("71d9"),D=i("2a7f"),$=i("3a2f"),A=Object(h["a"])(d,a,n,!1,null,null,null);e["default"]=A.exports;p()(A,{VBtn:f["a"],VCard:m["a"],VCardText:b["b"],VCol:g["a"],VDataTable:w["a"],VForm:C["a"],VIcon:y["a"],VRow:_["a"],VSpacer:V["a"],VSwitch:k["a"],VTextField:x["a"],VToolbar:S["a"],VToolbarTitle:D["a"],VTooltip:$["a"]})},ec29:function(t,e,i){}}]);
//# sourceMappingURL=chunk-1b3438cc.d89484b8.js.map