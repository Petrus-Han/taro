"use strict";(self.webpackChunktaro_docs=self.webpackChunktaro_docs||[]).push([[39574],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return d}});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var c=a.createContext({}),p=function(e){var t=a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},u=function(e){var t=p(e.components);return a.createElement(c.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},s=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,c=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),s=p(n),d=r,k=s["".concat(c,".").concat(d)]||s[d]||m[d]||i;return n?a.createElement(k,l(l({ref:t},u),{},{components:n})):a.createElement(k,l({ref:t},u))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,l=new Array(i);l[0]=s;var o={};for(var c in t)hasOwnProperty.call(t,c)&&(o[c]=t[c]);o.originalType=e,o.mdxType="string"==typeof e?e:r,l[1]=o;for(var p=2;p<i;p++)l[p]=n[p];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}s.displayName="MDXCreateElement"},5506:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return o},contentTitle:function(){return c},metadata:function(){return p},toc:function(){return u},default:function(){return s}});var a=n(83117),r=n(80102),i=(n(67294),n(3905)),l=["components"],o={title:"Taro.onDeviceMotionChange(callback)",sidebar_label:"onDeviceMotionChange"},c=void 0,p={unversionedId:"apis/device/motion/onDeviceMotionChange",id:"apis/device/motion/onDeviceMotionChange",isDocsHomePage:!1,title:"Taro.onDeviceMotionChange(callback)",description:"\u76d1\u542c\u8bbe\u5907\u65b9\u5411\u53d8\u5316\u4e8b\u4ef6\u3002\u9891\u7387\u6839\u636e Taro.startDeviceMotionListening() \u7684 interval \u53c2\u6570\u3002\u53ef\u4ee5\u4f7f\u7528 Taro.stopDeviceMotionListening() \u505c\u6b62\u76d1\u542c\u3002",source:"@site/docs/apis/device/motion/onDeviceMotionChange.md",sourceDirName:"apis/device/motion",slug:"/apis/device/motion/onDeviceMotionChange",permalink:"/taro/docs/next/apis/device/motion/onDeviceMotionChange",editUrl:"https://github.com/nervjs/taro/edit/docs/docs/apis/device/motion/onDeviceMotionChange.md",tags:[],version:"current",frontMatter:{title:"Taro.onDeviceMotionChange(callback)",sidebar_label:"onDeviceMotionChange"},sidebar:"API",previous:{title:"startDeviceMotionListening",permalink:"/taro/docs/next/apis/device/motion/startDeviceMotionListening"},next:{title:"offDeviceMotionChange",permalink:"/taro/docs/next/apis/device/motion/offDeviceMotionChange"}},u=[{value:"\u7c7b\u578b",id:"\u7c7b\u578b",children:[],level:2},{value:"\u53c2\u6570",id:"\u53c2\u6570",children:[{value:"Callback",id:"callback",children:[],level:3},{value:"CallbackResult",id:"callbackresult",children:[],level:3}],level:2}],m={toc:u};function s(e){var t=e.components,o=(0,r.Z)(e,l);return(0,i.kt)("wrapper",(0,a.Z)({},m,o,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"\u76d1\u542c\u8bbe\u5907\u65b9\u5411\u53d8\u5316\u4e8b\u4ef6\u3002\u9891\u7387\u6839\u636e Taro.startDeviceMotionListening() \u7684 interval \u53c2\u6570\u3002\u53ef\u4ee5\u4f7f\u7528 Taro.stopDeviceMotionListening() \u505c\u6b62\u76d1\u542c\u3002"),(0,i.kt)("p",null,"\u652f\u6301\u60c5\u51b5\uff1a",(0,i.kt)("img",{title:"\u5fae\u4fe1\u5c0f\u7a0b\u5e8f",src:n(16710).Z,className:"icon_platform",width:"25px"})," ",(0,i.kt)("img",{title:"H5",src:n(5030).Z,className:"icon_platform",width:"25px"})," ",(0,i.kt)("img",{title:"React Native",src:n(73555).Z,className:"icon_platform",width:"25px"})),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},(0,i.kt)("a",{parentName:"p",href:"https://developers.weixin.qq.com/miniprogram/dev/api/device/motion/wx.onDeviceMotionChange.html"},"\u53c2\u8003\u6587\u6863"))),(0,i.kt)("h2",{id:"\u7c7b\u578b"},"\u7c7b\u578b"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-tsx"},"(callback: Callback) => void\n")),(0,i.kt)("h2",{id:"\u53c2\u6570"},"\u53c2\u6570"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"\u53c2\u6570"),(0,i.kt)("th",{parentName:"tr",align:null},"\u7c7b\u578b"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"callback"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"Callback"))))),(0,i.kt)("h3",{id:"callback"},"Callback"),(0,i.kt)("p",null,"\u8bbe\u5907\u65b9\u5411\u53d8\u5316\u4e8b\u4ef6\u7684\u56de\u8c03\u51fd\u6570"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-tsx"},"(result: CallbackResult) => void\n")),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"\u53c2\u6570"),(0,i.kt)("th",{parentName:"tr",align:null},"\u7c7b\u578b"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"result"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"CallbackResult"))))),(0,i.kt)("h3",{id:"callbackresult"},"CallbackResult"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"\u53c2\u6570"),(0,i.kt)("th",{parentName:"tr",align:null},"\u7c7b\u578b"),(0,i.kt)("th",{parentName:"tr",align:null},"\u8bf4\u660e"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"alpha"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"number")),(0,i.kt)("td",{parentName:"tr",align:null},"\u5f53 \u624b\u673a\u5750\u6807 X/Y \u548c \u5730\u7403 X/Y \u91cd\u5408\u65f6\uff0c\u7ed5\u7740 Z \u8f74\u8f6c\u52a8\u7684\u5939\u89d2\u4e3a alpha\uff0c\u8303\u56f4\u503c\u4e3a [0, 2*PI)\u3002\u9006\u65f6\u9488\u8f6c\u52a8\u4e3a\u6b63\u3002")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"beta"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"number")),(0,i.kt)("td",{parentName:"tr",align:null},"\u5f53\u624b\u673a\u5750\u6807 Y/Z \u548c\u5730\u7403 Y/Z \u91cd\u5408\u65f6\uff0c\u7ed5\u7740 X \u8f74\u8f6c\u52a8\u7684\u5939\u89d2\u4e3a beta\u3002\u8303\u56f4\u503c\u4e3a [-1*PI, PI) \u3002\u9876\u90e8\u671d\u7740\u5730\u7403\u8868\u9762\u8f6c\u52a8\u4e3a\u6b63\u3002\u4e5f\u6709\u53ef\u80fd\u671d\u7740\u7528\u6237\u4e3a\u6b63\u3002")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"gamma"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"number")),(0,i.kt)("td",{parentName:"tr",align:null},"\u5f53\u624b\u673a X/Z \u548c\u5730\u7403 X/Z \u91cd\u5408\u65f6\uff0c\u7ed5\u7740 Y \u8f74\u8f6c\u52a8\u7684\u5939\u89d2\u4e3a gamma\u3002\u8303\u56f4\u503c\u4e3a [-1*PI/2, PI/2)\u3002\u53f3\u8fb9\u671d\u7740\u5730\u7403\u8868\u9762\u8f6c\u52a8\u4e3a\u6b63\u3002")))))}s.isMDXComponent=!0},5030:function(e,t,n){t.Z=n.p+"assets/images/h5-81f73c447874b6528e84ee395bece16e.png"},73555:function(e,t,n){t.Z=n.p+"assets/images/rn-ecec68ba194e4b5e9fc3e853cc00c569.png"},16710:function(e,t,n){t.Z=n.p+"assets/images/weapp-0e8fbe2d5eb3676de4961b54ee7f5ba4.png"}}]);