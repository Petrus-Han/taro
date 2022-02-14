"use strict";(self.webpackChunktaro_docs=self.webpackChunktaro_docs||[]).push([[23347],{3905:function(e,t,r){r.d(t,{Zo:function(){return s},kt:function(){return f}});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function c(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?c(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):c(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},c=Object.keys(e);for(n=0;n<c.length;n++)r=c[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(n=0;n<c.length;n++)r=c[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var i=n.createContext({}),p=function(e){var t=n.useContext(i),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},s=function(e){var t=p(e.components);return n.createElement(i.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,c=e.originalType,i=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),u=p(r),f=a,d=u["".concat(i,".").concat(f)]||u[f]||m[f]||c;return r?n.createElement(d,o(o({ref:t},s),{},{components:r})):n.createElement(d,o({ref:t},s))}));function f(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var c=r.length,o=new Array(c);o[0]=u;var l={};for(var i in t)hasOwnProperty.call(t,i)&&(l[i]=t[i]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var p=2;p<c;p++)o[p]=r[p];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}u.displayName="MDXCreateElement"},98184:function(e,t,r){r.r(t),r.d(t,{frontMatter:function(){return l},contentTitle:function(){return i},metadata:function(){return p},toc:function(){return s},default:function(){return u}});var n=r(83117),a=r(80102),c=(r(67294),r(3905)),o=["components"],l={title:"Taro.offAccelerometerChange(callback)",sidebar_label:"offAccelerometerChange"},i=void 0,p={unversionedId:"apis/device/accelerometer/offAccelerometerChange",id:"apis/device/accelerometer/offAccelerometerChange",isDocsHomePage:!1,title:"Taro.offAccelerometerChange(callback)",description:"\u53d6\u6d88\u76d1\u542c\u52a0\u901f\u5ea6\u6570\u636e\u4e8b\u4ef6\uff0c\u53c2\u6570\u4e3a\u7a7a\uff0c\u5219\u53d6\u6d88\u6240\u6709\u7684\u4e8b\u4ef6\u76d1\u542c\u3002",source:"@site/docs/apis/device/accelerometer/offAccelerometerChange.md",sourceDirName:"apis/device/accelerometer",slug:"/apis/device/accelerometer/offAccelerometerChange",permalink:"/taro/docs/next/apis/device/accelerometer/offAccelerometerChange",editUrl:"https://github.com/nervjs/taro/edit/docs/docs/apis/device/accelerometer/offAccelerometerChange.md",tags:[],version:"current",frontMatter:{title:"Taro.offAccelerometerChange(callback)",sidebar_label:"offAccelerometerChange"},sidebar:"API",previous:{title:"onAccelerometerChange",permalink:"/taro/docs/next/apis/device/accelerometer/onAccelerometerChange"},next:{title:"stopCompass",permalink:"/taro/docs/next/apis/device/compass/stopCompass"}},s=[{value:"\u7c7b\u578b",id:"\u7c7b\u578b",children:[],level:2},{value:"\u53c2\u6570",id:"\u53c2\u6570",children:[],level:2}],m={toc:s};function u(e){var t=e.components,l=(0,a.Z)(e,o);return(0,c.kt)("wrapper",(0,n.Z)({},m,l,{components:t,mdxType:"MDXLayout"}),(0,c.kt)("p",null,"\u53d6\u6d88\u76d1\u542c\u52a0\u901f\u5ea6\u6570\u636e\u4e8b\u4ef6\uff0c\u53c2\u6570\u4e3a\u7a7a\uff0c\u5219\u53d6\u6d88\u6240\u6709\u7684\u4e8b\u4ef6\u76d1\u542c\u3002"),(0,c.kt)("p",null,"\u652f\u6301\u60c5\u51b5\uff1a",(0,c.kt)("img",{title:"\u5fae\u4fe1\u5c0f\u7a0b\u5e8f",src:r(16710).Z,className:"icon_platform",width:"25px"})," ",(0,c.kt)("img",{title:"H5",src:r(5030).Z,className:"icon_platform",width:"25px"})," ",(0,c.kt)("img",{title:"React Native",src:r(73555).Z,className:"icon_platform",width:"25px"})),(0,c.kt)("blockquote",null,(0,c.kt)("p",{parentName:"blockquote"},(0,c.kt)("a",{parentName:"p",href:"https://developers.weixin.qq.com/miniprogram/dev/api/device/accelerometer/wx.offAccelerometerChange.html"},"\u53c2\u8003\u6587\u6863"))),(0,c.kt)("h2",{id:"\u7c7b\u578b"},"\u7c7b\u578b"),(0,c.kt)("pre",null,(0,c.kt)("code",{parentName:"pre",className:"language-tsx"},"(callback?: (...args: any[]) => any) => void\n")),(0,c.kt)("h2",{id:"\u53c2\u6570"},"\u53c2\u6570"),(0,c.kt)("table",null,(0,c.kt)("thead",{parentName:"table"},(0,c.kt)("tr",{parentName:"thead"},(0,c.kt)("th",{parentName:"tr",align:null},"\u53c2\u6570"),(0,c.kt)("th",{parentName:"tr",align:null},"\u7c7b\u578b"),(0,c.kt)("th",{parentName:"tr",align:null},"\u8bf4\u660e"))),(0,c.kt)("tbody",{parentName:"table"},(0,c.kt)("tr",{parentName:"tbody"},(0,c.kt)("td",{parentName:"tr",align:null},"callback"),(0,c.kt)("td",{parentName:"tr",align:null},(0,c.kt)("inlineCode",{parentName:"td"},"(...args: any[]) => any")),(0,c.kt)("td",{parentName:"tr",align:null},"\u52a0\u901f\u5ea6\u6570\u636e\u4e8b\u4ef6\u7684\u56de\u8c03\u51fd\u6570")))))}u.isMDXComponent=!0},5030:function(e,t,r){t.Z=r.p+"assets/images/h5-81f73c447874b6528e84ee395bece16e.png"},73555:function(e,t,r){t.Z=r.p+"assets/images/rn-ecec68ba194e4b5e9fc3e853cc00c569.png"},16710:function(e,t,r){t.Z=r.p+"assets/images/weapp-0e8fbe2d5eb3676de4961b54ee7f5ba4.png"}}]);