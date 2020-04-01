(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{gcjV:function(e,t,o){"use strict";o.r(t);var s=o("o0o1"),r=o.n(s),n=o("DxOX");function a(e,t,o,s,r,n,a){try{var i=e[n](a),l=i.value}catch(e){return void o(e)}i.done?t(l):Promise.resolve(l).then(s,r)}var i,l,u={name:"photoForm",components:{bdTextField:o("mwd/").a},data:function(){return{preview:null,errors:null,shop_form:{photo:null,shopname:null,address:null,boardgame_num:null,content:null,home_url:null}}},props:{value:{value:Boolean,required:!0}},methods:{onFileChange:function(e){var t=this;if(0===e.target.files.length)return this.reset(),!1;if(!e.target.files[0].type.match("image.*"))return this.reset(),!1;var o=new FileReader;o.onload=function(e){t.preview=e.target.result},o.readAsDataURL(e.target.files[0]),this.shop_form.photo=e.target.files[0]},reset:function(){this.preview="",this.photo=null,this.$el.querySelector('input[type="file"]').value=null},submit:(i=r.a.mark((function e(){var t,o;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return(t=new FormData).append("photo",this.shop_form.photo),t.append("shop_name",this.shop_form.shopname),t.append("address",this.shop_form.address),t.append("boardgame_num",this.shop_form.boardgame_num),t.append("content",this.shop_form.content),t.append("home_url",this.shop_form.home_url),console.log(t),e.next=10,axios.post("/api/shops",t);case 10:if(o=e.sent,console.log(o),o.status!==n.f){e.next=15;break}return this.errors=o.data.errors,e.abrupt("return",!1);case 15:if(this.reset(),this.$emit("showForm"),o.status===n.a){e.next=20;break}return this.$store.commit("error/setCode",o.status),e.abrupt("return",!1);case 20:this.$store.commit("message/setContent",{content:"写真が投稿されました！",timeout:6e3});case 21:case"end":return e.stop()}}),e,this)})),l=function(){var e=this,t=arguments;return new Promise((function(o,s){var r=i.apply(e,t);function n(e){a(r,o,s,n,l,"next",e)}function l(e){a(r,o,s,n,l,"throw",e)}n(void 0)}))},function(){return l.apply(this,arguments)})}},c=o("KHd+"),p={data:function(){return{show:!1}},components:{photoForm:Object(c.a)(u,(function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",{directives:[{name:"show",rawName:"v-show",value:e.value,expression:"value"}],staticClass:"photo-form"},[o("h2",{staticClass:"title"},[e._v("Submit a shop")]),e._v(" "),o("form",{staticClass:"form",on:{submit:function(t){return t.preventDefault(),e.submit(t)}}},[e.errors?o("div",{staticClass:"errors"},[e.errors.photo?o("ul",e._l(e.errors.photo,(function(t){return o("li",{key:t},[e._v(e._s(t))])})),0):e._e(),e._v(" "),e.errors.shop_name?o("ul",e._l(e.errors.shop_name,(function(t){return o("li",{key:t},[e._v(e._s(t))])})),0):e._e(),e._v(" "),e.errors.address?o("ul",e._l(e.errors.address,(function(t){return o("li",{key:t},[e._v(e._s(t))])})),0):e._e()]):e._e(),e._v(" "),o("input",{staticClass:"form__item",attrs:{type:"file"},on:{change:e.onFileChange}}),e._v(" "),e.preview?o("output",{staticClass:"form__output"},[o("img",{attrs:{src:e.preview,alt:""}})]):e._e(),e._v(" "),o("bdTextField",{attrs:{placeholder:"店舗名"},model:{value:e.shop_form.shopname,callback:function(t){e.$set(e.shop_form,"shopname",t)},expression:"shop_form.shopname"}}),e._v(" "),o("bdTextField",{attrs:{placeholder:"住所"},model:{value:e.shop_form.address,callback:function(t){e.$set(e.shop_form,"address",t)},expression:"shop_form.address"}}),e._v(" "),o("bdTextField",{attrs:{placeholder:"ボードゲームの数"},model:{value:e.shop_form.boardgame_num,callback:function(t){e.$set(e.shop_form,"boardgame_num",t)},expression:"shop_form.boardgame_num"}}),e._v(" "),o("bdTextField",{attrs:{placeholder:"説明文"},model:{value:e.shop_form.content,callback:function(t){e.$set(e.shop_form,"content",t)},expression:"shop_form.content"}}),e._v(" "),o("bdTextField",{attrs:{placeholder:"ホームページ"},model:{value:e.shop_form.home_url,callback:function(t){e.$set(e.shop_form,"home_url",t)},expression:"shop_form.home_url"}}),e._v(" "),e._m(0)],1)])}),[function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"form__button"},[t("button",{staticClass:"button button--inverse",attrs:{type:"submit"}},[this._v("submit")])])}],!1,null,null,null).exports},methods:{showForm:function(){this.show=!this.show}}},h=Object(c.a)(p,(function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",{staticClass:"container"},[o("div",{staticClass:"hero is-fullheight"},[o("button",{staticClass:"button is-info is-rounded is-hovered",on:{click:e.showForm}},[o("i",{staticClass:"icon ion-md-add"}),e._v("\n            Submit a photo\n        ")]),e._v(" "),o("div",{staticClass:"hero-body"},[o("photoForm",{model:{value:e.show,callback:function(t){e.show=t},expression:"show"}})],1)])])}),[],!1,null,null,null);t.default=h.exports},"mwd/":function(e,t,o){"use strict";var s={name:"bdTextField",components:{bdIcon:o("cv7c").a},props:{type:{type:String,default:"text",validator:function(e){return["text","email","password","search","url"].includes(e)}},placeholder:String,value:String,icon:String},methods:{input:function(e){e.target.value!==this.value&&this.$emit("input",e.target.value)}}},r=o("KHd+"),n=Object(r.a)(s,(function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",{staticClass:"field"},[o("div",{staticClass:"control",class:{"has-icons-left":e.icon}},[o("input",{staticClass:"input",attrs:{type:e.type,placeholder:e.placeholder,name:e.type},domProps:{value:e.value},on:{input:e.input}}),e._v(" "),e.icon?o("bdIcon",{staticClass:"is-small is-left",attrs:{name:e.icon}}):e._e()],1)])}),[],!1,null,null,null);t.a=n.exports}}]);