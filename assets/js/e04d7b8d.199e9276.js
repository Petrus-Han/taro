"use strict";(self.webpackChunktaro_docs=self.webpackChunktaro_docs||[]).push([[34985],{3905:function(e,r,t){t.d(r,{Zo:function(){return u},kt:function(){return m}});var a=t(67294);function n(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function o(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);r&&(a=a.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,a)}return t}function i(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?o(Object(t),!0).forEach((function(r){n(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function s(e,r){if(null==e)return{};var t,a,n=function(e,r){if(null==e)return{};var t,a,n={},o=Object.keys(e);for(a=0;a<o.length;a++)t=o[a],r.indexOf(t)>=0||(n[t]=e[t]);return n}(e,r);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)t=o[a],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(n[t]=e[t])}return n}var l=a.createContext({}),c=function(e){var r=a.useContext(l),t=r;return e&&(t="function"==typeof e?e(r):i(i({},r),e)),t},u=function(e){var r=c(e.components);return a.createElement(l.Provider,{value:r},e.children)},f={inlineCode:"code",wrapper:function(e){var r=e.children;return a.createElement(a.Fragment,{},r)}},p=a.forwardRef((function(e,r){var t=e.components,n=e.mdxType,o=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),p=c(t),m=n,d=p["".concat(l,".").concat(m)]||p[m]||f[m]||o;return t?a.createElement(d,i(i({ref:r},u),{},{components:t})):a.createElement(d,i({ref:r},u))}));function m(e,r){var t=arguments,n=r&&r.mdxType;if("string"==typeof e||n){var o=t.length,i=new Array(o);i[0]=p;var s={};for(var l in r)hasOwnProperty.call(r,l)&&(s[l]=r[l]);s.originalType=e,s.mdxType="string"==typeof e?e:n,i[1]=s;for(var c=2;c<o;c++)i[c]=t[c];return a.createElement.apply(null,i)}return a.createElement.apply(null,t)}p.displayName="MDXCreateElement"},57891:function(e,r,t){t.r(r),t.d(r,{frontMatter:function(){return s},contentTitle:function(){return l},metadata:function(){return c},toc:function(){return u},default:function(){return p}});var a=t(83117),n=t(80102),o=(t(67294),t(3905)),i=["components"],s={title:"Taro.arrayBufferToBase64(buffer)",sidebar_label:"arrayBufferToBase64"},l=void 0,c={unversionedId:"apis/base/arrayBufferToBase64",id:"apis/base/arrayBufferToBase64",isDocsHomePage:!1,title:"Taro.arrayBufferToBase64(buffer)",description:"\u5c06 ArrayBuffer \u6570\u636e\u8f6c\u6210 Base64 \u5b57\u7b26\u4e32\u3002",source:"@site/docs/apis/base/arrayBufferToBase64.md",sourceDirName:"apis/base",slug:"/apis/base/arrayBufferToBase64",permalink:"/taro/docs/next/apis/base/arrayBufferToBase64",editUrl:"https://github.com/nervjs/taro/edit/docs/docs/apis/base/arrayBufferToBase64.md",tags:[],version:"current",frontMatter:{title:"Taro.arrayBufferToBase64(buffer)",sidebar_label:"arrayBufferToBase64"},sidebar:"API",previous:{title:"base64ToArrayBuffer",permalink:"/taro/docs/next/apis/base/base64ToArrayBuffer"},next:{title:"openSystemBluetoothSetting",permalink:"/taro/docs/next/apis/base/system/openSystemBluetoothSetting"}},u=[{value:"\u7c7b\u578b",id:"\u7c7b\u578b",children:[],level:2},{value:"\u53c2\u6570",id:"\u53c2\u6570",children:[],level:2},{value:"\u793a\u4f8b\u4ee3\u7801",id:"\u793a\u4f8b\u4ee3\u7801",children:[],level:2}],f={toc:u};function p(e){var r=e.components,s=(0,n.Z)(e,i);return(0,o.kt)("wrapper",(0,a.Z)({},f,s,{components:r,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"\u5c06 ArrayBuffer \u6570\u636e\u8f6c\u6210 Base64 \u5b57\u7b26\u4e32\u3002"),(0,o.kt)("p",null,"\u652f\u6301\u60c5\u51b5\uff1a",(0,o.kt)("img",{title:"\u5fae\u4fe1\u5c0f\u7a0b\u5e8f",src:t(16710).Z,className:"icon_platform",width:"25px"})," ",(0,o.kt)("img",{title:"H5",src:t(5030).Z,className:"icon_platform",width:"25px"})," ",(0,o.kt)("img",{title:"React Native",src:t(73555).Z,className:"icon_platform",width:"25px"})),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},(0,o.kt)("a",{parentName:"p",href:"https://developers.weixin.qq.com/miniprogram/dev/api/base/wx.arrayBufferToBase64.html"},"\u53c2\u8003\u6587\u6863"))),(0,o.kt)("h2",{id:"\u7c7b\u578b"},"\u7c7b\u578b"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-tsx"},"(buffer: ArrayBuffer) => string\n")),(0,o.kt)("h2",{id:"\u53c2\u6570"},"\u53c2\u6570"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"\u53c2\u6570"),(0,o.kt)("th",{parentName:"tr",align:null},"\u7c7b\u578b"),(0,o.kt)("th",{parentName:"tr",align:null},"\u8bf4\u660e"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"buffer"),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"ArrayBuffer")),(0,o.kt)("td",{parentName:"tr",align:null},"\u8981\u8f6c\u6362\u6210 Base64 \u5b57\u7b26\u4e32\u7684 ArrayBuffer \u5bf9\u8c61")))),(0,o.kt)("h2",{id:"\u793a\u4f8b\u4ee3\u7801"},"\u793a\u4f8b\u4ee3\u7801"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-tsx"},"const arrayBuffer = new Uint8Array([11, 22, 33])\nconst base64 = Taro.arrayBufferToBase64(arrayBuffer)\n")))}p.isMDXComponent=!0},5030:function(e,r,t){r.Z=t.p+"assets/images/h5-81f73c447874b6528e84ee395bece16e.png"},73555:function(e,r,t){r.Z=t.p+"assets/images/rn-ecec68ba194e4b5e9fc3e853cc00c569.png"},16710:function(e,r,t){r.Z=t.p+"assets/images/weapp-0e8fbe2d5eb3676de4961b54ee7f5ba4.png"}}]);