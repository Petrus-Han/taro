"use strict";(self.webpackChunktaro_docs=self.webpackChunktaro_docs||[]).push([[57470],{3905:function(e,r,t){t.d(r,{Zo:function(){return s},kt:function(){return u}});var n=t(67294);function a(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function o(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function i(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?o(Object(t),!0).forEach((function(r){a(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function c(e,r){if(null==e)return{};var t,n,a=function(e,r){if(null==e)return{};var t,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||(a[t]=e[t]);return a}(e,r);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var p=n.createContext({}),l=function(e){var r=n.useContext(p),t=r;return e&&(t="function"==typeof e?e(r):i(i({},r),e)),t},s=function(e){var r=l(e.components);return n.createElement(p.Provider,{value:r},e.children)},m={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},f=n.forwardRef((function(e,r){var t=e.components,a=e.mdxType,o=e.originalType,p=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),f=l(t),u=a,d=f["".concat(p,".").concat(u)]||f[u]||m[u]||o;return t?n.createElement(d,i(i({ref:r},s),{},{components:t})):n.createElement(d,i({ref:r},s))}));function u(e,r){var t=arguments,a=r&&r.mdxType;if("string"==typeof e||a){var o=t.length,i=new Array(o);i[0]=f;var c={};for(var p in r)hasOwnProperty.call(r,p)&&(c[p]=r[p]);c.originalType=e,c.mdxType="string"==typeof e?e:a,i[1]=c;for(var l=2;l<o;l++)i[l]=t[l];return n.createElement.apply(null,i)}return n.createElement.apply(null,t)}f.displayName="MDXCreateElement"},74879:function(e,r,t){t.r(r),t.d(r,{frontMatter:function(){return c},contentTitle:function(){return p},metadata:function(){return l},toc:function(){return s},default:function(){return f}});var n=t(83117),a=t(80102),o=(t(67294),t(3905)),i=["components"],c={title:"Taro.getPerformance()",sidebar_label:"getPerformance"},p=void 0,l={unversionedId:"apis/base/performance/getPerformance",id:"apis/base/performance/getPerformance",isDocsHomePage:!1,title:"Taro.getPerformance()",description:"\u5c0f\u7a0b\u5e8f\u6d4b\u901f\u4e0a\u62a5\u3002\u4f7f\u7528\u524d\uff0c\u9700\u8981\u5728\u5c0f\u7a0b\u5e8f\u7ba1\u7406\u540e\u53f0\u914d\u7f6e\u3002 \u8be6\u60c5\u53c2\u89c1\u5c0f\u7a0b\u5e8f\u6d4b\u901f\u6307\u5357\u3002",source:"@site/docs/apis/base/performance/getPerformance.md",sourceDirName:"apis/base/performance",slug:"/apis/base/performance/getPerformance",permalink:"/taro/en/docs/next/apis/base/performance/getPerformance",editUrl:"https://github.com/nervjs/taro/edit/docs/docs/apis/base/performance/getPerformance.md",tags:[],version:"current",frontMatter:{title:"Taro.getPerformance()",sidebar_label:"getPerformance"},sidebar:"API",previous:{title:"reportPerformance",permalink:"/taro/en/docs/next/apis/base/performance/reportPerformance"},next:{title:"EntryList",permalink:"/taro/en/docs/next/apis/base/performance/EntryList"}},s=[{value:"\u7c7b\u578b",id:"\u7c7b\u578b",children:[],level:2},{value:"\u793a\u4f8b\u4ee3\u7801",id:"\u793a\u4f8b\u4ee3\u7801",children:[],level:2}],m={toc:s};function f(e){var r=e.components,c=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,n.Z)({},m,c,{components:r,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"\u5c0f\u7a0b\u5e8f\u6d4b\u901f\u4e0a\u62a5\u3002\u4f7f\u7528\u524d\uff0c\u9700\u8981\u5728\u5c0f\u7a0b\u5e8f\u7ba1\u7406\u540e\u53f0\u914d\u7f6e\u3002 \u8be6\u60c5\u53c2\u89c1",(0,o.kt)("a",{parentName:"p",href:"https://developers.weixin.qq.com/miniprogram/dev/framework/performanceReport/index.html"},"\u5c0f\u7a0b\u5e8f\u6d4b\u901f"),"\u6307\u5357\u3002"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"\u6ce8\u610f")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"\u76ee\u524d\uff0c\u5f53\u5f00\u542f\u4ee3\u7801 ",(0,o.kt)("a",{parentName:"li",href:"https://developers.weixin.qq.com/miniprogram/dev/framework/ability/lazyload.html"},"\u6309\u9700\u6ce8\u5165")," ",(0,o.kt)("inlineCode",{parentName:"li"},"\u65f6\uff0cevaluateScript")," \u5c06\u4ec5\u5305\u542b\u516c\u6709\u90e8\u5206\u4ee3\u7801\uff0c\u9875\u9762\u548c\u7ec4\u4ef6\u7684\u4ee3\u7801\u6ce8\u5165\u7684\u65f6\u95f4\u4f1a\u5305\u542b\u5728 ",(0,o.kt)("inlineCode",{parentName:"li"},"firstRender")," \u4e2d\uff08\u56e0\u4e3a\u9875\u9762\u548c\u7ec4\u4ef6\u7684\u4ee3\u7801\u6ce8\u5165\u8fc7\u7a0b\u6210\u4e3a\u4e86\u9996\u6b21\u6e32\u67d3\u8fc7\u7a0b\u7684\u4e00\u90e8\u5206\uff09\u3002\u56e0\u6b64\u5f00\u542f\u6309\u9700\u6ce8\u5165\u540e\uff0c\u811a\u672c\u8017\u65f6\u964d\u4f4e\uff0c\u6e32\u67d3\u65f6\u95f4\u63d0\u9ad8\u5c5e\u4e8e\u6b63\u5e38\u73b0\u8c61\uff0c\u4f18\u5316\u6548\u679c\u53ef\u4ee5\u5173\u6ce8\u6574\u4f53\u542f\u52a8\u8017\u65f6\uff08",(0,o.kt)("inlineCode",{parentName:"li"},"appLaunch"),"\uff09\u6765\u8bc4\u4f30\u3002"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"firstPaint")," \u548c ",(0,o.kt)("inlineCode",{parentName:"li"},"firstContentfulPaint")," \u6307\u6807\u5728\u5f00\u542f ",(0,o.kt)("inlineCode",{parentName:"li"},"vconsole")," \u7684\u60c5\u51b5\u4e0b\uff0c\u7531\u4e8e\u7ed8\u5236 ",(0,o.kt)("inlineCode",{parentName:"li"},"vconsoel")," \u7684\u9762\u677f\uff0c\u4f1a\u5bfc\u81f4\u6570\u636e\u63d0\u524d\u3002")),(0,o.kt)("p",null,"\u652f\u6301\u60c5\u51b5\uff1a",(0,o.kt)("img",{title:"\u5fae\u4fe1\u5c0f\u7a0b\u5e8f",src:t(16710).Z,className:"icon_platform",width:"25px"})," ",(0,o.kt)("img",{title:"H5",src:t(5030).Z,className:"icon_platform icon_platform--not-support",width:"25px"})," ",(0,o.kt)("img",{title:"React Native",src:t(73555).Z,className:"icon_platform icon_platform--not-support",width:"25px"})),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},(0,o.kt)("a",{parentName:"p",href:"https://developers.weixin.qq.com/miniprogram/dev/api/base/performance/wx.getPerformance.html"},"\u53c2\u8003\u6587\u6863"))),(0,o.kt)("h2",{id:"\u7c7b\u578b"},"\u7c7b\u578b"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-tsx"},"() => Performance\n")),(0,o.kt)("h2",{id:"\u793a\u4f8b\u4ee3\u7801"},"\u793a\u4f8b\u4ee3\u7801"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-tsx"},"const performance = Taro.getPerformance()\nconst observer = performance.createObserver((entryList) => {\n  console.log(entryList.getEntries())\n})\nobserver.observe({ entryTypes: ['render', 'script', 'navigation'] })\n")))}f.isMDXComponent=!0},5030:function(e,r,t){r.Z=t.p+"assets/images/h5-81f73c447874b6528e84ee395bece16e.png"},73555:function(e,r,t){r.Z=t.p+"assets/images/rn-ecec68ba194e4b5e9fc3e853cc00c569.png"},16710:function(e,r,t){r.Z=t.p+"assets/images/weapp-0e8fbe2d5eb3676de4961b54ee7f5ba4.png"}}]);