(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{253:function(t,e,n){var content=n(258);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(106).default)("2788562b",content,!0,{sourceMap:!1})},256:function(t,e,n){t.exports=n.p+"img/delete.b15b3d7.svg"},257:function(t,e,n){"use strict";n(253)},258:function(t,e,n){var o=n(105)(!1);o.push([t.i,'.card[data-v-26c8a81a]{box-shadow:0 20px 30px rgba(0,0,0,.04),0 6px 10px rgba(0,0,0,.02);border-radius:4px;font-family:"Source Sans Pro";font-style:normal;width:17rem;position:relative;color:#3f3f3f;height:100%;display:flex;flex-direction:column}.card__container[data-v-26c8a81a]{padding:15px;flex:1 1 auto}.card__img[data-v-26c8a81a]{width:100%;padding-top:100%;background-color:#000;position:relative}.card__img img[data-v-26c8a81a]{position:absolute;top:0;left:0;width:100%;height:100%;-o-object-fit:cover;object-fit:cover}.card__title[data-v-26c8a81a]{font-weight:600;font-size:20px;line-height:25px}.card__description[data-v-26c8a81a],.card__title[data-v-26c8a81a]{margin-bottom:15px;word-break:break-word}.card__description[data-v-26c8a81a]{font-weight:400;font-size:16px;line-height:20px}.card__price[data-v-26c8a81a]{font-weight:600;font-size:24px;line-height:30px;word-break:break-word;padding:15px}.card__delete[data-v-26c8a81a]{z-index:1000;background:#ff8484;box-shadow:0 2px 4px rgba(0,0,0,.1);border-radius:10px;border:none;cursor:pointer;position:absolute;right:0;top:-8px;padding:8px}.card__delete img[data-v-26c8a81a]{display:flex;align-items:center;justify-content:center}',""]),t.exports=o},260:function(t,e,n){"use strict";n.r(e);n(180),n(27),n(44),n(15),n(28);var o=n(0),r={name:"MenuItem",props:{menu:{type:null,default:{}}},computed:{editing_element:function(){return this.$store.state.menu.editing_element},menus:{get:function(){return this.$store.state.menu.menu},set:function(t){this.$store.commit("menu/set",["menu",t]),this.update()}}},methods:{dellElement:function(t){var e=this,n=t;n&&(this.menus.forEach((function(t,i){t.id===n&&o.a.delete(e.menus,i)})),this.$store.dispatch("menu/updateLocalStorage"),this.$store.commit("menu/set",["editing_element",null]))}}},c=(n(257),n(45)),component=Object(c.a)(r,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"card"},[e("button",{staticClass:"card__delete icon",on:{click:function(e){return t.dellElement(t.menu.id)}}},[e("img",{attrs:{src:n(256),alt:""}})]),t._v(" "),e("div",{staticClass:"card__img"},[e("img",{attrs:{src:t.menu.link,alt:"",srcset:""}})]),t._v(" "),e("div",{staticClass:"card__container"},[e("div",{staticClass:"card__title"},[t._v(t._s(t.menu.title))]),t._v(" "),e("div",{staticClass:"card__description"},[t._v("\n      "+t._s(t.menu.description)+"\n    ")])]),t._v(" "),e("div",{staticClass:"card__price"},[t._v(t._s(t.menu.price)+" руб.")])])}),[],!1,null,"26c8a81a",null);e.default=component.exports}}]);