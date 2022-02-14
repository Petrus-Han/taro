"use strict";(self.webpackChunktaro_docs=self.webpackChunktaro_docs||[]).push([[42555],{3905:function(e,t,r){r.d(t,{Zo:function(){return u},kt:function(){return m}});var a=r(67294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function d(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},o=Object.keys(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var c=a.createContext({}),l=function(e){var t=a.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},u=function(e){var t=l(e.components);return a.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},s=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,c=e.parentName,u=d(e,["components","mdxType","originalType","parentName"]),s=l(r),m=n,f=s["".concat(c,".").concat(m)]||s[m]||p[m]||o;return r?a.createElement(f,i(i({ref:t},u),{},{components:r})):a.createElement(f,i({ref:t},u))}));function m(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,i=new Array(o);i[0]=s;var d={};for(var c in t)hasOwnProperty.call(t,c)&&(d[c]=t[c]);d.originalType=e,d.mdxType="string"==typeof e?e:n,i[1]=d;for(var l=2;l<o;l++)i[l]=r[l];return a.createElement.apply(null,i)}return a.createElement.apply(null,r)}s.displayName="MDXCreateElement"},87232:function(e,t,r){r.r(t),r.d(t,{frontMatter:function(){return d},contentTitle:function(){return c},metadata:function(){return l},toc:function(){return u},default:function(){return s}});var a=r(83117),n=r(80102),o=(r(67294),r(3905)),i=["components"],d={title:"Taro.createMediaAudioPlayer()",sidebar_label:"createMediaAudioPlayer"},c=void 0,l={unversionedId:"apis/media/audio/createMediaAudioPlayer",id:"apis/media/audio/createMediaAudioPlayer",isDocsHomePage:!1,title:"Taro.createMediaAudioPlayer()",description:"\u521b\u5efa\u5a92\u4f53\u97f3\u9891\u64ad\u653e\u5668\u5bf9\u8c61 MediaAudioPlayer \u5bf9\u8c61\uff0c\u53ef\u7528\u4e8e\u64ad\u653e\u89c6\u9891\u89e3\u7801\u5668 VideoDecoder \u8f93\u51fa\u7684\u97f3\u9891",source:"@site/docs/apis/media/audio/createMediaAudioPlayer.md",sourceDirName:"apis/media/audio",slug:"/apis/media/audio/createMediaAudioPlayer",permalink:"/taro/docs/next/apis/media/audio/createMediaAudioPlayer",editUrl:"https://github.com/nervjs/taro/edit/docs/docs/apis/media/audio/createMediaAudioPlayer.md",tags:[],version:"current",frontMatter:{title:"Taro.createMediaAudioPlayer()",sidebar_label:"createMediaAudioPlayer"},sidebar:"API",previous:{title:"createWebAudioContext",permalink:"/taro/docs/next/apis/media/audio/createWebAudioContext"},next:{title:"createInnerAudioContext",permalink:"/taro/docs/next/apis/media/audio/createInnerAudioContext"}},u=[{value:"\u7c7b\u578b",id:"\u7c7b\u578b",children:[],level:2},{value:"\u793a\u4f8b\u4ee3\u7801",id:"\u793a\u4f8b\u4ee3\u7801",children:[],level:2}],p={toc:u};function s(e){var t=e.components,d=(0,n.Z)(e,i);return(0,o.kt)("wrapper",(0,a.Z)({},p,d,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"\u521b\u5efa\u5a92\u4f53\u97f3\u9891\u64ad\u653e\u5668\u5bf9\u8c61 ",(0,o.kt)("a",{parentName:"p",href:"./MediaAudioPlayer"},"MediaAudioPlayer")," \u5bf9\u8c61\uff0c\u53ef\u7528\u4e8e\u64ad\u653e\u89c6\u9891\u89e3\u7801\u5668 ",(0,o.kt)("a",{parentName:"p",href:"/docs/apis/media/video-decoder/VideoDecoder"},"VideoDecoder")," \u8f93\u51fa\u7684\u97f3\u9891"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"\u6ce8\u610f\u4e8b\u9879")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"iOS 7.0.15 mediaAudioPlayer \u64ad\u653e\u7f51\u7edc\u89c6\u9891\u8d44\u6e90\u4f1a\u51fa\u73b0\u97f3\u9891\u5361\u987f\uff0c\u672c\u5730\u89c6\u9891\u6ca1\u6709\u8fd9\u4e2a\u95ee\u9898\uff0c\u5c06\u4e0b\u4e00\u4e2a\u5ba2\u6237\u7aef\u7248\u672c\u4fee\u590d\u3002")),(0,o.kt)("p",null,"\u652f\u6301\u60c5\u51b5\uff1a",(0,o.kt)("img",{title:"\u5fae\u4fe1\u5c0f\u7a0b\u5e8f",src:r(16710).Z,className:"icon_platform",width:"25px"})," ",(0,o.kt)("img",{title:"H5",src:r(5030).Z,className:"icon_platform icon_platform--not-support",width:"25px"})," ",(0,o.kt)("img",{title:"React Native",src:r(73555).Z,className:"icon_platform icon_platform--not-support",width:"25px"})),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},(0,o.kt)("a",{parentName:"p",href:"https://developers.weixin.qq.com/miniprogram/dev/api/media/audio/wx.createMediaAudioPlayer.html"},"\u53c2\u8003\u6587\u6863"))),(0,o.kt)("h2",{id:"\u7c7b\u578b"},"\u7c7b\u578b"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-tsx"},"() => MediaAudioPlayer\n")),(0,o.kt)("h2",{id:"\u793a\u4f8b\u4ee3\u7801"},"\u793a\u4f8b\u4ee3\u7801"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-tsx"},"// \u521b\u5efa\u89c6\u9891\u89e3\u7801\u5668\uff0c\u5177\u4f53\u53c2\u6570\u89c1 createVideoDecoder \u6587\u6863\nconst videoDecoder = Taro.createVideoDecoder()\n// \u521b\u5efa\u5a92\u4f53\u97f3\u9891\u64ad\u653e\u5668\nconst mediaAudioPlayer = Taro.createMediaAudioPlayer()\n// \u542f\u52a8\u89c6\u9891\u89e3\u7801\u5668\nvideoDecoder.start()\n// \u542f\u52a8\u64ad\u653e\u5668\nmediaAudioPlayer.start().then(() => {\n  // \u6dfb\u52a0\u64ad\u653e\u5668\u97f3\u9891\u6765\u6e90\n  mediaAudioPlayer.addAudioSource(videoDecoder).then(res => {\n    videoDecoder.getFrameData() // \u5efa\u8bae\u5728 requestAnimationFrame \u91cc\u83b7\u53d6\u6bcf\u4e00\u5e27\u89c6\u9891\u6570\u636e\n    console.log(res)\n  })\n\n  // \u79fb\u9664\u64ad\u653e\u5668\u97f3\u9891\u6765\u6e90\n  mediaAudioPlayer.removeAudioSource(videoDecoder).then()\n  // \u505c\u6b62\u64ad\u653e\u5668\n  mediaAudioPlayer.stop().then()\n  // \u9500\u6bc1\u64ad\u653e\u5668\n  mediaAudioPlayer.destroy().then()\n  // \u8bbe\u7f6e\u64ad\u653e\u5668\u97f3\u91cf\n  mediaAudioPlayer.volume = 0.5\n})\n")))}s.isMDXComponent=!0},5030:function(e,t,r){t.Z=r.p+"assets/images/h5-81f73c447874b6528e84ee395bece16e.png"},73555:function(e,t,r){t.Z=r.p+"assets/images/rn-ecec68ba194e4b5e9fc3e853cc00c569.png"},16710:function(e,t,r){t.Z=r.p+"assets/images/weapp-0e8fbe2d5eb3676de4961b54ee7f5ba4.png"}}]);