(function(t){function e(e){for(var i,r,s=e[0],l=e[1],c=e[2],u=0,f=[];u<s.length;u++)r=s[u],Object.prototype.hasOwnProperty.call(o,r)&&o[r]&&f.push(o[r][0]),o[r]=0;for(i in l)Object.prototype.hasOwnProperty.call(l,i)&&(t[i]=l[i]);d&&d(e);while(f.length)f.shift()();return a.push.apply(a,c||[]),n()}function n(){for(var t,e=0;e<a.length;e++){for(var n=a[e],i=!0,s=1;s<n.length;s++){var l=n[s];0!==o[l]&&(i=!1)}i&&(a.splice(e--,1),t=r(r.s=n[0]))}return t}var i={},o={app:0},a=[];function r(e){if(i[e])return i[e].exports;var n=i[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,r),n.l=!0,n.exports}r.m=t,r.c=i,r.d=function(t,e,n){r.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},r.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},r.t=function(t,e){if(1&e&&(t=r(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var i in t)r.d(n,i,function(e){return t[e]}.bind(null,i));return n},r.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return r.d(e,"a",e),e},r.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},r.p="/";var s=window["webpackJsonp"]=window["webpackJsonp"]||[],l=s.push.bind(s);s.push=e,s=s.slice();for(var c=0;c<s.length;c++)e(s[c]);var d=l;a.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"56d7":function(t,e,n){"use strict";n.r(e);n("e260"),n("e6cf"),n("cca6"),n("a79d");var i=n("2b0e"),o=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-app",[n("v-app-bar",{attrs:{app:""}},[n("v-toolbar-title",[n("h1",[t._v("NOTEBOOK")])])],1),n("v-main",[t.loading?n("div",{staticClass:"text-center mt-6"},[n("v-progress-circular",{attrs:{indeterminate:"",size:"60"}})],1):n("v-container",{attrs:{fluid:""}},[n("v-list",{attrs:{"two-line":""}},[t._l(t.notes,(function(e,i){return[n("v-hover",{key:e.title,scopedSlots:t._u([{key:"default",fn:function(i){var o=i.hover;return[n("v-list-item",{on:{click:function(t){e.active=!e.active}}},[n("v-list-item-content",[n("v-list-item-title",{domProps:{textContent:t._s(e.noteTitle)}}),n("v-list-item-subtitle",{domProps:{textContent:t._s(e.text)}})],1),n("v-list-item-action",{staticClass:"flex-row align-center"},[n("app-edit-modal",{attrs:{id:e.id,hover:o,hide:!0,modal:0},on:{click:function(t){e.active=!e.active}}}),e.active?n("v-icon",{attrs:{color:"yellow darken-3"}},[t._v(" mdi-flag ")]):n("v-icon",{attrs:{color:"grey lighten-1"}},[t._v(" mdi-flag-outline ")])],1)],1)]}}],null,!0)}),i<t.notes.length-1?n("v-divider",{key:i}):t._e()]}))],2),n("app-edit-modal",{attrs:{hide:!1,modal:1}}),n("app-edit-modal",{attrs:{hide:!t.isSelected,modal:2}})],1)],1)],1)},a=[],r=(n("45fc"),{computed:{notes:function(){return this.$store.getters.notes},isSelected:function(){return this.notes.some((function(t){return t.active}))},loading:function(){return this.$store.getters.loading}}}),s=r,l=(n("cf25"),n("2877")),c=n("6544"),d=n.n(c),u=n("7496"),f=n("40dc"),v=n("a523"),p=n("ce7e"),m=n("ce87"),h=n("132d"),g=n("8860"),x=n("da13"),b=n("1800"),y=n("5d23"),N=n("f6c4"),w=n("490a"),T=n("2a7f"),_=Object(l["a"])(s,o,a,!1,null,null,null),k=_.exports;d()(_,{VApp:u["a"],VAppBar:f["a"],VContainer:v["a"],VDivider:p["a"],VHover:m["a"],VIcon:h["a"],VList:g["a"],VListItem:x["a"],VListItemAction:b["a"],VListItemContent:y["a"],VListItemSubtitle:y["b"],VListItemTitle:y["c"],VMain:N["a"],VProgressCircular:w["a"],VToolbarTitle:T["a"]});n("7db0"),n("4160"),n("c975"),n("a434"),n("159b");var V=n("2f62");i["a"].use(V["a"]);var O=new V["a"].Store({state:{notes:[{noteTitle:"Shopping list",text:"Milk, flour, eggs, sugar",active:!1,id:0},{noteTitle:"Mike`s Birthday",text:"12 of December at 4:00 PM",active:!1,id:1},{noteTitle:"Film list for weekend",text:"John Wick 1-3, Expanse S1",active:!1,id:2}],legacy:[{noteTitle:"Shopping list",text:"Milk, flour, eggs, sugar",active:!1,id:0},{noteTitle:"Mike`s Birthday",text:"12 of December at 4:00 PM",active:!1,id:1},{noteTitle:"Film list for weekend",text:"John Wick 1-3, Expanse S1",active:!1,id:2}],newNote:{noteTitle:"",text:"",active:!1,id:3},lastId:3,loading:!1},mutations:{setLoading:function(t,e){t.loading=e},setNote:function(t,e){var n=e.title,i=e.text,o=e.id,a=e.isNew;if(a)t.notes.push(t.newNote),t.legacy=JSON.parse(JSON.stringify(t.notes)),t.lastId+=1,t.newNote={noteTitle:"",text:"",active:!1,id:t.lastId};else{var r=t.notes.find((function(t){if(t.id===+o)return t}));r.noteTitle=n,r.text=i}},cancelNote:function(t,e){e?t.legacy=JSON.parse(JSON.stringify(t.notes)):t.newNote={noteTitle:"",text:"",active:!1,id:t.lastId}},deleteNotes:function(t){var e=Object.assign([],t.notes);e.forEach((function(e){e.active&&t.notes.splice(t.notes.indexOf(e),1)})),t.legacy=JSON.parse(JSON.stringify(t.notes))}},actions:{setLoading:function(t,e){var n=t.commit;n("setLoading",e)},setNote:function(t,e){var n=t.commit;n("setLoading",!0),setTimeout((function(){n("setNote",e),n("setLoading",!1)}),1200)},cancelNote:function(t,e){var n=t.commit;n("cancelNote",e)},deleteNotes:function(t){var e=t.commit;e("deleteNotes")}},getters:{loading:function(t){return t.loading},notes:function(t){return t.notes},newNote:function(t){return t.newNote},legacyNote:function(t){return function(e){return t.legacy.find((function(t){if(t.id===+e)return t}))}}}}),S=n("f309");i["a"].use(S["a"]);var C=new S["a"]({}),$=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-dialog",{attrs:{scrollable:"",persistent:"",overlay:!1,"max-width":"540px",transition:"dialog-transition"},scopedSlots:t._u([{key:"activator",fn:function(e){var i=e.on;return[n("v-btn",t._g({staticClass:"mr-2",class:{hide:t.hide,show:t.hover},attrs:{small:"",color:t.color[t.modal]}},i),[t._v(t._s(t.btnName[t.modal]))])]}}]),model:{value:t.dialog,callback:function(e){t.dialog=e},expression:"dialog"}},[0===t.modal||1===t.modal?n("v-card",[n("v-card-title",{staticClass:"headline orange lighten-2 mb-2"},[t._v(" "+t._s(t.message[t.modal])+" ")]),n("v-card-text",[n("v-text-field",{attrs:{name:"title",label:"Note title",type:"text",rules:[function(t){return!!t||"Title is required"}]},model:{value:t.note.noteTitle,callback:function(e){t.$set(t.note,"noteTitle",e)},expression:"note.noteTitle"}}),n("v-textarea",{attrs:{name:"description",label:"Note text",type:"text",rules:[function(t){return!!t||"Text is required"}],"multi-line":""},model:{value:t.note.text,callback:function(e){t.$set(t.note,"text",e)},expression:"note.text"}})],1),n("v-divider"),n("v-card-actions",[n("v-spacer"),n("v-btn",{attrs:{depressed:""},on:{click:t.onCancel}},[t._v(" Cancel ")]),n("v-btn",{attrs:{depressed:"",color:"success"},on:{click:t.onConfirm}},[t._v(" Save ")])],1)],1):2===t.modal?n("v-card",[n("v-card-title",{staticClass:"headline error lighten-2 mb-2"},[t._v(" "+t._s(t.message[t.modal])+" ")]),n("v-card-actions",[n("v-spacer"),n("v-btn",{attrs:{depressed:""},on:{click:t.onCancel}},[t._v(" No ")]),n("v-btn",{attrs:{depressed:"",color:t.color[t.modal]},on:{click:t.onConfirm}},[t._v(" Yes ")])],1)],1):t._e()],1)},j=[],P={props:["id","modal","hover","hide"],data:function(){return{dialog:!1,message:["Note editor","New note","Do you realy want to delete selected notes?"],btnName:["Edit","New note","Delete selected"],color:["info","success","error"]}},computed:{note:function(){return 0===this.modal?this.$store.getters.legacyNote(this.id):this.$store.getters.newNote}},methods:{onCancel:function(){0===this.modal&&this.$store.dispatch("cancelNote",!0),1===this.modal&&this.$store.dispatch("cancelNote"),this.dialog=!1},onConfirm:function(){""!==this.note.noteTitle&&""!==this.note.text&&0===this.modal&&(this.$store.dispatch("setNote",{title:this.note.noteTitle,text:this.note.text,id:this.id,isNew:!1}),this.dialog=!1),""!==this.note.noteTitle&&""!==this.note.text&&1===this.modal&&(this.$store.dispatch("setNote",{title:this.note.noteTitle,text:this.note.text,id:this.id,isNew:!0}),this.dialog=!1),2===this.modal&&(this.$store.dispatch("deleteNotes"),this.dialog=!1)}}},L=P,M=n("8336"),I=n("b0af"),J=n("99d9"),D=n("169a"),E=n("2fa4"),B=n("8654"),A=n("a844"),F=Object(l["a"])(L,$,j,!1,null,null,null),q=F.exports;d()(F,{VBtn:M["a"],VCard:I["a"],VCardActions:J["a"],VCardText:J["b"],VCardTitle:J["c"],VDialog:D["a"],VDivider:p["a"],VSpacer:E["a"],VTextField:B["a"],VTextarea:A["a"]}),i["a"].config.productionTip=!1,i["a"].component("app-edit-modal",q),new i["a"]({store:O,vuetify:C,render:function(t){return t(k)}}).$mount("#app")},cf25:function(t,e,n){"use strict";n("fea6")},fea6:function(t,e,n){}});
//# sourceMappingURL=app.804f2c46.js.map