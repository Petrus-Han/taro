"use strict";(self.webpackChunktaro_docs=self.webpackChunktaro_docs||[]).push([[34333],{3905:function(e,t,n){n.d(t,{Zo:function(){return s},kt:function(){return m}});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=a.createContext({}),c=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},s=function(e){var t=c(e.components);return a.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,p=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),d=c(n),m=r,g=d["".concat(p,".").concat(m)]||d[m]||u[m]||l;return n?a.createElement(g,o(o({ref:t},s),{},{components:n})):a.createElement(g,o({ref:t},s))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,o=new Array(l);o[0]=d;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i.mdxType="string"==typeof e?e:r,o[1]=i;for(var c=2;c<l;c++)o[c]=n[c];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},76314:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return i},contentTitle:function(){return p},metadata:function(){return c},toc:function(){return s},default:function(){return d}});var a=n(83117),r=n(80102),l=(n(67294),n(3905)),o=["components"],i={title:"Taro.getStorage(option)",sidebar_label:"getStorage"},p=void 0,c={unversionedId:"apis/storage/getStorage",id:"version-3.x/apis/storage/getStorage",isDocsHomePage:!1,title:"Taro.getStorage(option)",description:"\u4ece\u672c\u5730\u7f13\u5b58\u4e2d\u5f02\u6b65\u83b7\u53d6\u6307\u5b9a key \u7684\u5185\u5bb9",source:"@site/versioned_docs/version-3.x/apis/storage/getStorage.md",sourceDirName:"apis/storage",slug:"/apis/storage/getStorage",permalink:"/taro/docs/apis/storage/getStorage",editUrl:"https://github.com/nervjs/taro/edit/docs/versioned_docs/version-3.x/apis/storage/getStorage.md",tags:[],version:"3.x",frontMatter:{title:"Taro.getStorage(option)",sidebar_label:"getStorage"},sidebar:"version-3.x/API",previous:{title:"getStorageInfo",permalink:"/taro/docs/apis/storage/getStorageInfo"},next:{title:"createBufferURL",permalink:"/taro/docs/apis/storage/createBufferURL"}},s=[{value:"\u7c7b\u578b",id:"\u7c7b\u578b",children:[],level:2},{value:"\u53c2\u6570",id:"\u53c2\u6570",children:[{value:"Option",id:"option",children:[],level:3},{value:"SuccessCallbackResult",id:"successcallbackresult",children:[],level:3}],level:2},{value:"\u793a\u4f8b\u4ee3\u7801",id:"\u793a\u4f8b\u4ee3\u7801",children:[],level:2}],u={toc:s};function d(e){var t=e.components,i=(0,r.Z)(e,o);return(0,l.kt)("wrapper",(0,a.Z)({},u,i,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("p",null,"\u4ece\u672c\u5730\u7f13\u5b58\u4e2d\u5f02\u6b65\u83b7\u53d6\u6307\u5b9a key \u7684\u5185\u5bb9"),(0,l.kt)("p",null,"\u652f\u6301\u60c5\u51b5\uff1a",(0,l.kt)("img",{title:"\u5fae\u4fe1\u5c0f\u7a0b\u5e8f",src:n(16710).Z,className:"icon_platform",width:"25px"})," ",(0,l.kt)("img",{title:"H5",src:n(5030).Z,className:"icon_platform",width:"25px"})," ",(0,l.kt)("img",{title:"React Native",src:n(73555).Z,className:"icon_platform",width:"25px"})),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},(0,l.kt)("a",{parentName:"p",href:"https://developers.weixin.qq.com/miniprogram/dev/api/storage/wx.getStorage.html"},"\u53c2\u8003\u6587\u6863"))),(0,l.kt)("h2",{id:"\u7c7b\u578b"},"\u7c7b\u578b"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-tsx"},"<T = any>(option: Option<T>) => Promise<SuccessCallbackResult<T>>\n")),(0,l.kt)("h2",{id:"\u53c2\u6570"},"\u53c2\u6570"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"\u53c2\u6570"),(0,l.kt)("th",{parentName:"tr",align:null},"\u7c7b\u578b"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"option"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"T"))))),(0,l.kt)("h3",{id:"option"},"Option"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"\u53c2\u6570"),(0,l.kt)("th",{parentName:"tr",align:null},"\u7c7b\u578b"),(0,l.kt)("th",{parentName:"tr",align:"center"},"\u5fc5\u586b"),(0,l.kt)("th",{parentName:"tr",align:null},"\u8bf4\u660e"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"key"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"string")),(0,l.kt)("td",{parentName:"tr",align:"center"},"\u662f"),(0,l.kt)("td",{parentName:"tr",align:null},"\u672c\u5730\u7f13\u5b58\u4e2d\u6307\u5b9a\u7684 key")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"complete"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"(res: TaroGeneral.CallbackResult) => void")),(0,l.kt)("td",{parentName:"tr",align:"center"},"\u5426"),(0,l.kt)("td",{parentName:"tr",align:null},"\u63a5\u53e3\u8c03\u7528\u7ed3\u675f\u7684\u56de\u8c03\u51fd\u6570\uff08\u8c03\u7528\u6210\u529f\u3001\u5931\u8d25\u90fd\u4f1a\u6267\u884c\uff09")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"fail"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"(res: TaroGeneral.CallbackResult) => void")),(0,l.kt)("td",{parentName:"tr",align:"center"},"\u5426"),(0,l.kt)("td",{parentName:"tr",align:null},"\u63a5\u53e3\u8c03\u7528\u5931\u8d25\u7684\u56de\u8c03\u51fd\u6570")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"success"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"(result: SuccessCallbackResult<T>) => void")),(0,l.kt)("td",{parentName:"tr",align:"center"},"\u5426"),(0,l.kt)("td",{parentName:"tr",align:null},"\u63a5\u53e3\u8c03\u7528\u6210\u529f\u7684\u56de\u8c03\u51fd\u6570")))),(0,l.kt)("h3",{id:"successcallbackresult"},"SuccessCallbackResult"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"\u53c2\u6570"),(0,l.kt)("th",{parentName:"tr",align:null},"\u7c7b\u578b"),(0,l.kt)("th",{parentName:"tr",align:null},"\u8bf4\u660e"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"data"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"T")),(0,l.kt)("td",{parentName:"tr",align:null},"key\u5bf9\u5e94\u7684\u5185\u5bb9")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"errMsg"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"string")),(0,l.kt)("td",{parentName:"tr",align:null},"\u8c03\u7528\u7ed3\u679c")))),(0,l.kt)("h2",{id:"\u793a\u4f8b\u4ee3\u7801"},"\u793a\u4f8b\u4ee3\u7801"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-tsx"},"Taro.getStorage({\n  key: 'key',\n  success: function (res) {\n    console.log(res.data)\n  }\n})\n")))}d.isMDXComponent=!0},5030:function(e,t,n){t.Z=n.p+"assets/images/h5-81f73c447874b6528e84ee395bece16e.png"},73555:function(e,t,n){t.Z=n.p+"assets/images/rn-ecec68ba194e4b5e9fc3e853cc00c569.png"},16710:function(e,t,n){t.Z=n.p+"assets/images/weapp-0e8fbe2d5eb3676de4961b54ee7f5ba4.png"}}]);