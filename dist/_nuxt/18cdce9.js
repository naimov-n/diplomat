(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{587:function(t,e,n){"use strict";n.r(e);n(5),n(4),n(2),n(1),n(6),n(3),n(7);var r=n(0),c=n(93);function o(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,n)}return e}function v(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?o(Object(source),!0).forEach((function(e){Object(r.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):o(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}var l={data:function(){return{limitEvents:2}},computed:v({},Object(c.c)("events",["events","count"])),methods:v({},Object(c.b)("events",["fetchEvents"])),mounted:function(){this.fetchEvents({params:{limit:this.limitEvents}})}},_=n(68),component=Object(_.a)(l,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"events pt-80 pb-80"},[n("div",{staticClass:"container"},[t._m(0),t._v(" "),n("div",{staticClass:"events-item"},t._l(t.events,(function(e,r){return n("div",{key:r,staticClass:"block",attrs:{"data-aos":"zoom-in","data-aos-duration":"150"}},[n("div",{staticClass:"block-left"},[n("h2",[t._v(t._s(e.day))]),t._v(" "),n("p",[n("span",[t._v(t._s(e.date))]),t._v(" "),n("br"),t._v(" "),n("span",[t._v(t._s(e.weeks))])])]),t._v(" "),n("div",{staticClass:"block-center"},[n("div",{staticClass:"image"},[n("img",{attrs:{src:e.url,alt:""}})]),t._v(" "),n("h2",[t._v("\n                        "+t._s(e.title)+"\n                    ")])]),t._v(" "),n("div",{staticClass:"block-right"},[n("div",[n("h2",[t._v(t._s(e.option_1))]),t._v(" "),n("p",[t._v(t._s(e.category_title))])]),t._v(" "),n("nuxt-link",{staticClass:"btnWhite",attrs:{to:"/"}},[t._v(" View more ")])],1)])})),0)])])}),[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("p",{staticClass:"themeP"},[t._v("The latest events from Diplomat")]),t._v(" "),n("h2",{staticClass:"themeH"},[t._v("Diplomat events")])])}],!1,null,null,null);e.default=component.exports}}]);