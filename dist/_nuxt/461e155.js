(window.webpackJsonp=window.webpackJsonp||[]).push([[20],{518:function(t,e,r){t.exports=r.p+"img/it.66d320b.jpg"},580:function(t,e,r){"use strict";r.r(e);r(5),r(4),r(2),r(1),r(6),r(3),r(7);var n=r(9),c=r(0),o=(r(28),r(93));function l(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,r)}return e}function d(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?l(Object(source),!0).forEach((function(e){Object(c.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):l(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}var v={data:function(){return{options:{slidesPerView:1,loop:!0,pagination:{el:".swiper-pagination"}},img:r(518)}},computed:d({},Object(o.c)("partners",["data","gallery"])),methods:d({},Object(o.b)("partners",["fetchDetail"])),mounted:function(){var t=this;return Object(n.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.fetchDetail({slug:t.$route.params.slug});case 2:case"end":return e.stop()}}),e)})))()}},w=r(68),component=Object(w.a)(v,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"partnerView"},[r("div",{staticClass:"container"},[r("div",{staticClass:"row"},[r("div",{staticClass:"col-9"},[r("div",{staticClass:"aboutUniversity-left"},[r("div",{staticClass:"image"},[r("div",{staticClass:"carousel-wrapper"},[r("div",{directives:[{name:"swiper",rawName:"v-swiper:mySwiper",value:t.options,expression:"options",arg:"mySwiper"}]},[r("div",{staticClass:"swiper-wrapper"},t._l(t.gallery,(function(img){return r("div",{key:img.id,staticClass:"img-warpper swiper-slide"},[r("img",{attrs:{src:img.img}})])})),0)])])]),t._v(" "),r("div",{staticClass:"content"},[t.data.url?r("div",{staticClass:"logo",staticStyle:{"margin-bottom":"16px"}},[r("img",{staticStyle:{height:"44px",width:"auto"},attrs:{src:t.data.url,alt:""}})]):t._e(),t._v(" "),r("h2",[t._v(t._s(t.data.title))]),t._v(" "),r("p",{staticStyle:{"padding-top":"16px"},domProps:{innerHTML:t._s(t.data.content)}},[t._v("\n             "+t._s(t.data.content)+"\n            ")])])])]),t._v(" "),r("div",{staticClass:"col-3"},[r("aboutSidebar")],1)])]),t._v("\n\n  data:\n  "),r("pre",[t._v(t._s(t.data))]),t._v("\n  gallery:\n  "),r("pre",[t._v(t._s(t.gallery))])])}),[],!1,null,null,null);e.default=component.exports}}]);