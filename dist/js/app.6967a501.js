(function(t){function e(e){for(var a,o,r=e[0],l=e[1],u=e[2],d=0,p=[];d<r.length;d++)o=r[d],n[o]&&p.push(n[o][0]),n[o]=0;for(a in l)Object.prototype.hasOwnProperty.call(l,a)&&(t[a]=l[a]);c&&c(e);while(p.length)p.shift()();return s.push.apply(s,u||[]),i()}function i(){for(var t,e=0;e<s.length;e++){for(var i=s[e],a=!0,r=1;r<i.length;r++){var l=i[r];0!==n[l]&&(a=!1)}a&&(s.splice(e--,1),t=o(o.s=i[0]))}return t}var a={},n={1:0},s=[];function o(e){if(a[e])return a[e].exports;var i=a[e]={i:e,l:!1,exports:{}};return t[e].call(i.exports,i,i.exports,o),i.l=!0,i.exports}o.m=t,o.c=a,o.d=function(t,e,i){o.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:i})},o.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},o.t=function(t,e){if(1&e&&(t=o(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var i=Object.create(null);if(o.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var a in t)o.d(i,a,function(e){return t[e]}.bind(null,a));return i},o.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return o.d(e,"a",e),e},o.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},o.p="/vue-wait-component/dist/";var r=window["webpackJsonp"]=window["webpackJsonp"]||[],l=r.push.bind(r);r.push=e,r=r.slice();for(var u=0;u<r.length;u++)e(r[u]);var c=l;s.push([1,0]),i()})({1:function(t,e,i){t.exports=i("Vtdi")},Vtdi:function(t,e,i){"use strict";i.r(e);i("VRzm");var a=i("Kw5r"),n=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"col-6 p-2 mx-auto"},[t._m(0),i("div",{staticClass:"container-lg clearfix"},[i("div",{staticClass:"col-sm-6 float-left p-2"},[i("label",[t._v("loating wait")]),i("input",{directives:[{name:"model",rawName:"v-model",value:t.wait,expression:"wait"}],staticStyle:{width:"100%"},attrs:{type:"range",name:"wait",min:"0",max:"1000",step:"100"},domProps:{value:t.wait},on:{__r:function(e){t.wait=e.target.value}}})]),i("div",{staticClass:"col-sm-2 float-left p-2"},[i("p",[t._v(t._s(t.wait)+"ms")])]),i("div",{staticClass:"col-sm-4 float-left p-2"},[i("button",{staticClass:"btn",attrs:{type:"button"},on:{click:t.submit}},[t._v("Submit")]),i("button",{staticClass:"btn btn-danger",attrs:{type:"button"},on:{click:t.reset}},[t._v("Reset")])])]),i("div",{staticClass:"container-lg clearfix"},[i("div",{staticClass:"col-sm-6 float-left p-2"},[i("label",[t._v("api response latency")]),i("input",{directives:[{name:"model",rawName:"v-model",value:t.latency,expression:"latency"}],staticStyle:{width:"100%"},attrs:{type:"range",name:"latency",min:"0",max:"1000",step:"100"},domProps:{value:t.latency},on:{__r:function(e){t.latency=e.target.value}}}),i("p",[t._v(t._s(t.latency)+"ms")]),t.isList?i("wait-list",{attrs:{wait:Number(t.wait),promiseMethod:t.sample()}},[i("p",{attrs:{slot:"loading"},slot:"loading"},[t._v("loading")]),i("div",{attrs:{slot:"loaded"},slot:"loaded"},[i("nav",{staticClass:"menu",attrs:{"aria-label":"Person settings"}},t._l(t.data,function(e){return i("a",{key:e.text,staticClass:"menu-item"},[t._v(t._s(e.text))])}))])]):t._e()],1),i("div",{staticClass:"col-sm-6 float-left p-2"},[t.isImg?i("wait-img",{staticClass:"avatar",attrs:{src:"https://4.bp.blogspot.com/-H4YfqE0zNr8/WwofRfOyapI/AAAAAAABMYA/h97Wvj7YYQYLslHxT3VIKFSZjxWazMMBQCLcBGAs/s800/internet_gazou_ninsyou.png",alt:"test",width:300,wait:Number(t.wait)}},[i("p",{attrs:{slot:"loading"},slot:"loading"},[t._v("loading")])]):t._e()],1)])])},s=[function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"Subhead"},[i("div",{staticClass:"Subhead-heading"},[t._v("Vue Wait Component")])])}],o=(i("xfY5"),function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",[t.isLoading&&!t.isLoaded?t._t("loading"):t._e(),t.isLoaded?t._t("loaded"):t._e()],2)}),r=[],l={props:{wait:{type:Number,default:500},promiseMethod:{type:Promise,required:!0}},data:function(){return{isLoading:!1,isLoaded:!1}},mounted:function(){var t=this;setTimeout(function(){t.isLoading=!0},this.wait),this.promiseMethod.then(function(){t.isLoaded=!0})}},u=l,c=i("KHd+"),d=Object(c["a"])(u,o,r,!1,null,null,null),p=d.exports,f=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",[t.isLoading&&!t.isLoaded?t._t("loading"):t._e(),t.isLoaded?i("img",{class:t.classes,attrs:{src:t.src,alt:t.alt,width:t.width,height:t.height}}):t._e()],2)},m=[],v=(i("bZMm"),{props:{src:{type:String,required:!0},alt:{type:String,default:""},width:{type:Number},height:{type:Number},wait:{type:Number,default:500}},data:function(){return{isLoading:!1,isLoaded:!1,classes:[]}},mounted:function(){var t=this,e=Array(this.$el.classList).map(function(t){return t.value});this.classes=e.join([" "]),this.$el.classList=[],setTimeout(function(){t.isLoading=!0},this.wait),fetch(this.src).then(function(e){e.ok&&200===e.status&&(t.isLoaded=!0)})}}),h=v,g=Object(c["a"])(h,f,m,!1,null,null,null),b=g.exports,_={components:{WaitList:p,WaitImg:b},data:function(){return{wait:0,latency:0,isImg:!1,isList:!1,data:[]}},methods:{submit:function(){this.isImg=!0,this.isList=!0},reset:function(){this.isImg=!1,this.isList=!1},sample:function(){var t=this;return new Promise(function(e){setTimeout(function(){var t=[{text:"a"},{text:"b"},{text:"c"}];e(t)},Number(t.latency))}).then(function(e){t.data=e})}}},y=_,w=(i("nNx0"),Object(c["a"])(y,n,s,!1,null,null,null)),x=w.exports;a["a"].config.productionTip=!1,new a["a"]({render:function(t){return t(x)}}).$mount("#app")},nNx0:function(t,e,i){"use strict";var a=i("uWEC"),n=i.n(a);n.a},uWEC:function(t,e,i){}});
//# sourceMappingURL=app.6967a501.js.map