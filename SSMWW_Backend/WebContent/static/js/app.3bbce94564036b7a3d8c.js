webpackJsonp([17],{DWBE:function(t,n){},ElHx:function(t,n){},FVuk:function(t,n){},NHnr:function(t,n,e){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var o=e("IvJb"),a={render:function(){var t=this.$createElement,n=this._self._c||t;return n("div",{attrs:{id:"app"}},[n("router-view")],1)},staticRenderFns:[]};var r=e("C7Lr")(null,a,!1,function(t){e("DWBE")},null,null).exports,i=e("zO6J");o.default.use(i.a);var u=new i.a({routes:[{path:"/",redirect:"/dashboard"},{path:"/",component:function(t){return e.e(4).then(function(){var n=[e("MpTN")];t.apply(null,n)}.bind(this)).catch(e.oe)},meta:{title:"自述文件"},children:[{path:"/dashboard",component:function(t){return e.e(9).then(function(){var n=[e("a52u")];t.apply(null,n)}.bind(this)).catch(e.oe)},meta:{title:"系统首页"}},{path:"/goodslist",component:function(t){return e.e(15).then(function(){var n=[e("U7uE")];t.apply(null,n)}.bind(this)).catch(e.oe)},meta:{title:"商品列表"}},{path:"/goodsmanger",component:function(t){return e.e(0).then(function(){var n=[e("XXfk")];t.apply(null,n)}.bind(this)).catch(e.oe)},meta:{title:"商品管理"}},{path:"/addgoods",component:function(t){return e.e(2).then(function(){var n=[e("i3VB")];t.apply(null,n)}.bind(this)).catch(e.oe)},meta:{title:"添加商品"}},{path:"/orderlist",component:function(t){return e.e(7).then(function(){var n=[e("quXH")];t.apply(null,n)}.bind(this)).catch(e.oe)},meta:{title:"所有订单"}},{path:"/addresslist",component:function(t){return e.e(13).then(function(){var n=[e("uL6K")];t.apply(null,n)}.bind(this)).catch(e.oe)},meta:{title:"常用地址"}},{path:"/markdown",component:function(t){return e.e(5).then(function(){var n=[e("Uhiw")];t.apply(null,n)}.bind(this)).catch(e.oe)},meta:{title:"markdown编辑器"}},{path:"/upload",component:function(t){return e.e(1).then(function(){var n=[e("9fPc")];t.apply(null,n)}.bind(this)).catch(e.oe)},meta:{title:"文件上传"}},{path:"/charts",component:function(t){return e.e(6).then(function(){var n=[e("Z1dZ")];t.apply(null,n)}.bind(this)).catch(e.oe)},meta:{title:"schart图表"}},{path:"/drag",component:function(t){return e.e(3).then(function(){var n=[e("2KuU")];t.apply(null,n)}.bind(this)).catch(e.oe)},meta:{title:"拖拽列表"}},{path:"/permission",component:function(t){return e.e(11).then(function(){var n=[e("5jj7")];t.apply(null,n)}.bind(this)).catch(e.oe)},meta:{title:"权限测试",permission:!0}}]},{path:"/print",name:"print",component:function(t){return e.e(12).then(function(){var n=[e("z7IZ")];t.apply(null,n)}.bind(this)).catch(e.oe)}},{path:"/login",component:function(t){return e.e(8).then(function(){var n=[e("GF4k")];t.apply(null,n)}.bind(this)).catch(e.oe)}},{path:"/404",component:function(t){return e.e(10).then(function(){var n=[e("3bH0")];t.apply(null,n)}.bind(this)).catch(e.oe)}},{path:"/403",component:function(t){return e.e(14).then(function(){var n=[e("KfZE")];t.apply(null,n)}.bind(this)).catch(e.oe)}},{path:"*",redirect:"/404"}]}),c=e("9rMa");o.default.use(c.a);var l=new c.a.Store({state:{ordercodes:[]},getters:{getOrderCodes:function(t){return t.ordercodes}},mutations:{setOrderCodes:function(t,n){t.ordercodes=n}},actions:{}}),p=e("6sKG"),h=e.n(p),s=e("jPwE"),d=e.n(s);e("ElHx"),e("briU"),e("FVuk");o.default.use(d.a,{size:"small"}),o.default.prototype.$axios=h.a,u.beforeEach(function(t,n,e){var a=localStorage.getItem("ms_username");a||"/login"===t.path?t.meta.permission?"admin"===a?e():e("/403"):navigator.userAgent.indexOf("MSIE")>-1&&"/editor"===t.path?o.default.prototype.$alert("vue-quill-editor组件不兼容IE10及以下浏览器，请使用更高版本的浏览器查看","浏览器不兼容通知",{confirmButtonText:"确定"}):e():e("/login")}),new o.default({router:u,store:l,render:function(t){return t(r)}}).$mount("#app")}},["NHnr"]);