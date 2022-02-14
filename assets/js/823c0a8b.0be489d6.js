"use strict";(self.webpackChunktaro_docs=self.webpackChunktaro_docs||[]).push([[3941],{3905:function(e,t,n){n.d(t,{Zo:function(){return d},kt:function(){return m}});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var i=a.createContext({}),c=function(e){var t=a.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},d=function(e){var t=c(e.components);return a.createElement(i.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,i=e.parentName,d=p(e,["components","mdxType","originalType","parentName"]),u=c(n),m=r,b=u["".concat(i,".").concat(m)]||u[m]||s[m]||l;return n?a.createElement(b,o(o({ref:t},d),{},{components:n})):a.createElement(b,o({ref:t},d))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,o=new Array(l);o[0]=u;var p={};for(var i in t)hasOwnProperty.call(t,i)&&(p[i]=t[i]);p.originalType=e,p.mdxType="string"==typeof e?e:r,o[1]=p;for(var c=2;c<l;c++)o[c]=n[c];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},22799:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return p},contentTitle:function(){return i},metadata:function(){return c},toc:function(){return d},default:function(){return u}});var a=n(83117),r=n(80102),l=(n(67294),n(3905)),o=["components"],p={title:"Taro.onUnhandledRejection(callback)",sidebar_label:"onUnhandledRejection"},i=void 0,c={unversionedId:"apis/base/weapp/app-event/onUnhandledRejection",id:"apis/base/weapp/app-event/onUnhandledRejection",isDocsHomePage:!1,title:"Taro.onUnhandledRejection(callback)",description:"\u76d1\u542c\u672a\u5904\u7406\u7684 Promise \u62d2\u7edd\u4e8b\u4ef6\u3002\u8be5\u4e8b\u4ef6\u4e0e App.onUnhandledRejection \u7684\u56de\u8c03\u65f6\u673a\u4e0e\u53c2\u6570\u4e00\u81f4\u3002",source:"@site/docs/apis/base/weapp/app-event/onUnhandledRejection.md",sourceDirName:"apis/base/weapp/app-event",slug:"/apis/base/weapp/app-event/onUnhandledRejection",permalink:"/taro/docs/next/apis/base/weapp/app-event/onUnhandledRejection",editUrl:"https://github.com/nervjs/taro/edit/docs/docs/apis/base/weapp/app-event/onUnhandledRejection.md",tags:[],version:"current",frontMatter:{title:"Taro.onUnhandledRejection(callback)",sidebar_label:"onUnhandledRejection"},sidebar:"API",previous:{title:"getEnterOptionsSync",permalink:"/taro/docs/next/apis/base/weapp/life-cycle/getEnterOptionsSync"},next:{title:"onThemeChange",permalink:"/taro/docs/next/apis/base/weapp/app-event/onThemeChange"}},d=[{value:"\u7c7b\u578b",id:"\u7c7b\u578b",children:[],level:2},{value:"\u53c2\u6570",id:"\u53c2\u6570",children:[{value:"Callback",id:"callback",children:[],level:3},{value:"Result",id:"result",children:[],level:3}],level:2}],s={toc:d};function u(e){var t=e.components,p=(0,r.Z)(e,o);return(0,l.kt)("wrapper",(0,a.Z)({},s,p,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("p",null,"\u76d1\u542c\u672a\u5904\u7406\u7684 Promise \u62d2\u7edd\u4e8b\u4ef6\u3002\u8be5\u4e8b\u4ef6\u4e0e ",(0,l.kt)("a",{parentName:"p",href:"https://developers.weixin.qq.com/miniprogram/dev/reference/api/App.html#onUnhandledRejection-Object-object"},(0,l.kt)("inlineCode",{parentName:"a"},"App.onUnhandledRejection"))," \u7684\u56de\u8c03\u65f6\u673a\u4e0e\u53c2\u6570\u4e00\u81f4\u3002"),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"\u6ce8\u610f")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u6240\u6709\u7684 unhandledRejection \u90fd\u53ef\u4ee5\u88ab\u8fd9\u4e00\u76d1\u542c\u6355\u83b7\uff0c\u4f46\u53ea\u6709 Error \u7c7b\u578b\u7684\u624d\u4f1a\u5728\u5c0f\u7a0b\u5e8f\u540e\u53f0\u89e6\u53d1\u62a5\u8b66\u3002")),(0,l.kt)("p",null,"\u652f\u6301\u60c5\u51b5\uff1a",(0,l.kt)("img",{title:"\u5fae\u4fe1\u5c0f\u7a0b\u5e8f",src:n(16710).Z,className:"icon_platform",width:"25px"})," ",(0,l.kt)("img",{title:"H5",src:n(5030).Z,className:"icon_platform icon_platform--not-support",width:"25px"})," ",(0,l.kt)("img",{title:"React Native",src:n(73555).Z,className:"icon_platform icon_platform--not-support",width:"25px"})),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},(0,l.kt)("a",{parentName:"p",href:"https://developers.weixin.qq.com/miniprogram/dev/api/base/app/app-event/wx.onUnhandledRejection.html"},"\u53c2\u8003\u6587\u6863"))),(0,l.kt)("h2",{id:"\u7c7b\u578b"},"\u7c7b\u578b"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-tsx"},"<T = any>(callback: Callback<T>) => void\n")),(0,l.kt)("h2",{id:"\u53c2\u6570"},"\u53c2\u6570"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"\u53c2\u6570"),(0,l.kt)("th",{parentName:"tr",align:null},"\u7c7b\u578b"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"callback"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"T"))))),(0,l.kt)("h3",{id:"callback"},"Callback"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-tsx"},"(res: Result<T>) => void\n")),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"\u53c2\u6570"),(0,l.kt)("th",{parentName:"tr",align:null},"\u7c7b\u578b"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"res"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"Result<T>"))))),(0,l.kt)("h3",{id:"result"},"Result"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"\u53c2\u6570"),(0,l.kt)("th",{parentName:"tr",align:null},"\u7c7b\u578b"),(0,l.kt)("th",{parentName:"tr",align:null},"\u8bf4\u660e"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"reason"),(0,l.kt)("td",{parentName:"tr",align:null},"string or Error"),(0,l.kt)("td",{parentName:"tr",align:null},"\u62d2\u7edd\u539f\u56e0\uff0c\u4e00\u822c\u662f\u4e00\u4e2a Error \u5bf9\u8c61")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"promise"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"Promise<T>")),(0,l.kt)("td",{parentName:"tr",align:null},"\u88ab\u62d2\u7edd\u7684 Promise \u5bf9\u8c61")))))}u.isMDXComponent=!0},5030:function(e,t,n){t.Z=n.p+"assets/images/h5-81f73c447874b6528e84ee395bece16e.png"},73555:function(e,t,n){t.Z=n.p+"assets/images/rn-ecec68ba194e4b5e9fc3e853cc00c569.png"},16710:function(e,t,n){t.Z=n.p+"assets/images/weapp-0e8fbe2d5eb3676de4961b54ee7f5ba4.png"}}]);