"use strict";(self.webpackChunktaro_docs=self.webpackChunktaro_docs||[]).push([[40505],{3905:function(t,e,a){a.d(e,{Zo:function(){return m},kt:function(){return s}});var n=a(67294);function l(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function r(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,n)}return a}function i(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?r(Object(a),!0).forEach((function(e){l(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function k(t,e){if(null==t)return{};var a,n,l=function(t,e){if(null==t)return{};var a,n,l={},r=Object.keys(t);for(n=0;n<r.length;n++)a=r[n],e.indexOf(a)>=0||(l[a]=t[a]);return l}(t,e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);for(n=0;n<r.length;n++)a=r[n],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(l[a]=t[a])}return l}var p=n.createContext({}),o=function(t){var e=n.useContext(p),a=e;return t&&(a="function"==typeof t?t(e):i(i({},e),t)),a},m=function(t){var e=o(t.components);return n.createElement(p.Provider,{value:e},t.children)},c={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},d=n.forwardRef((function(t,e){var a=t.components,l=t.mdxType,r=t.originalType,p=t.parentName,m=k(t,["components","mdxType","originalType","parentName"]),d=o(a),s=l,N=d["".concat(p,".").concat(s)]||d[s]||c[s]||r;return a?n.createElement(N,i(i({ref:e},m),{},{components:a})):n.createElement(N,i({ref:e},m))}));function s(t,e){var a=arguments,l=e&&e.mdxType;if("string"==typeof t||l){var r=a.length,i=new Array(r);i[0]=d;var k={};for(var p in e)hasOwnProperty.call(e,p)&&(k[p]=e[p]);k.originalType=t,k.mdxType="string"==typeof t?t:l,i[1]=k;for(var o=2;o<r;o++)i[o]=a[o];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}d.displayName="MDXCreateElement"},90754:function(t,e,a){a.r(e),a.d(e,{frontMatter:function(){return k},contentTitle:function(){return p},metadata:function(){return o},toc:function(){return m},default:function(){return d}});var n=a(83117),l=a(80102),r=(a(67294),a(3905)),i=["components"],k={title:"SocketTask",sidebar_label:"SocketTask"},p=void 0,o={unversionedId:"apis/network/webSocket/SocketTask",id:"version-3.x/apis/network/webSocket/SocketTask",isDocsHomePage:!1,title:"SocketTask",description:"WebSocket \u4efb\u52a1\uff0c\u53ef\u901a\u8fc7 Taro.connectSocket() \u63a5\u53e3\u521b\u5efa\u8fd4\u56de\u3002",source:"@site/versioned_docs/version-3.x/apis/network/webSocket/SocketTask.md",sourceDirName:"apis/network/webSocket",slug:"/apis/network/webSocket/SocketTask",permalink:"/taro/docs/apis/network/webSocket/SocketTask",editUrl:"https://github.com/nervjs/taro/edit/docs/versioned_docs/version-3.x/apis/network/webSocket/SocketTask.md",tags:[],version:"3.x",frontMatter:{title:"SocketTask",sidebar_label:"SocketTask"},sidebar:"version-3.x/API",previous:{title:"closeSocket",permalink:"/taro/docs/apis/network/webSocket/closeSocket"},next:{title:"stopLocalServiceDiscovery",permalink:"/taro/docs/apis/network/mdns/stopLocalServiceDiscovery"}},m=[{value:"\u65b9\u6cd5",id:"\u65b9\u6cd5",children:[{value:"send",id:"send",children:[],level:3},{value:"close",id:"close",children:[],level:3},{value:"onOpen",id:"onopen",children:[],level:3},{value:"onClose",id:"onclose",children:[],level:3},{value:"onError",id:"onerror",children:[],level:3},{value:"onMessage",id:"onmessage",children:[],level:3}],level:2},{value:"\u53c2\u6570",id:"\u53c2\u6570",children:[{value:"CloseOption",id:"closeoption",children:[],level:3},{value:"OnCloseCallback",id:"onclosecallback",children:[],level:3},{value:"OnCloseCallbackResult",id:"onclosecallbackresult",children:[],level:3},{value:"OnErrorCallback",id:"onerrorcallback",children:[],level:3},{value:"OnErrorCallbackResult",id:"onerrorcallbackresult",children:[],level:3},{value:"OnMessageCallback",id:"onmessagecallback",children:[],level:3},{value:"OnMessageCallbackResult",id:"onmessagecallbackresult",children:[],level:3},{value:"OnOpenCallback",id:"onopencallback",children:[],level:3},{value:"OnOpenCallbackResult",id:"onopencallbackresult",children:[],level:3},{value:"SendOption",id:"sendoption",children:[],level:3}],level:2},{value:"API \u652f\u6301\u5ea6",id:"api-\u652f\u6301\u5ea6",children:[],level:2}],c={toc:m};function d(t){var e=t.components,k=(0,l.Z)(t,i);return(0,r.kt)("wrapper",(0,n.Z)({},c,k,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"WebSocket \u4efb\u52a1\uff0c\u53ef\u901a\u8fc7 ",(0,r.kt)("a",{parentName:"p",href:"/docs/apis/network/websocket/SocketTask"},"Taro.connectSocket()")," \u63a5\u53e3\u521b\u5efa\u8fd4\u56de\u3002"),(0,r.kt)("p",null,"\u652f\u6301\u60c5\u51b5\uff1a",(0,r.kt)("img",{title:"\u5fae\u4fe1\u5c0f\u7a0b\u5e8f",src:a(16710).Z,className:"icon_platform",width:"25px"})," ",(0,r.kt)("img",{title:"\u767e\u5ea6\u5c0f\u7a0b\u5e8f",src:a(94882).Z,className:"icon_platform",width:"25px"})," ",(0,r.kt)("img",{title:"\u652f\u4ed8\u5b9d\u5c0f\u7a0b\u5e8f",src:a(44090).Z,className:"icon_platform",width:"25px"})," ",(0,r.kt)("img",{title:"H5",src:a(5030).Z,className:"icon_platform",width:"25px"})," ",(0,r.kt)("img",{title:"React Native",src:a(73555).Z,className:"icon_platform",width:"25px"})),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},(0,r.kt)("a",{parentName:"p",href:"https://developers.weixin.qq.com/miniprogram/dev/api/network/websocket/SocketTask.html"},"\u53c2\u8003\u6587\u6863"))),(0,r.kt)("h2",{id:"\u65b9\u6cd5"},"\u65b9\u6cd5"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"\u53c2\u6570"),(0,r.kt)("th",{parentName:"tr",align:null},"\u7c7b\u578b"),(0,r.kt)("th",{parentName:"tr",align:null},"\u8bf4\u660e"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"socketTaskId"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"number")),(0,r.kt)("td",{parentName:"tr",align:null},"websocket \u5f53\u524d\u7684\u8fde\u63a5 ID\u3002")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"readyState"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"number")),(0,r.kt)("td",{parentName:"tr",align:null},"websocket \u5f53\u524d\u7684\u8fde\u63a5\u72b6\u6001\u3002")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"errMsg"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"string")),(0,r.kt)("td",{parentName:"tr",align:null},"websocket \u63a5\u53e3\u8c03\u7528\u7ed3\u679c\u3002")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"CONNECTING"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"number")),(0,r.kt)("td",{parentName:"tr",align:null},"websocket \u72b6\u6001\u503c\uff1a\u8fde\u63a5\u4e2d\u3002")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"OPEN"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"number")),(0,r.kt)("td",{parentName:"tr",align:null},"websocket \u72b6\u6001\u503c\uff1a\u5df2\u8fde\u63a5\u3002")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"CLOSING"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"number")),(0,r.kt)("td",{parentName:"tr",align:null},"websocket \u72b6\u6001\u503c\uff1a\u5173\u95ed\u4e2d\u3002")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"CLOSED"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"number")),(0,r.kt)("td",{parentName:"tr",align:null},"websocket \u72b6\u6001\u503c\uff1a\u5df2\u5173\u95ed\u3002")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"ws"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"WebSocket")),(0,r.kt)("td",{parentName:"tr",align:null},"\u6d4f\u89c8\u5668 websocket \u5b9e\u4f8b\u3002\uff08h5 \u7aef\u72ec\u6709\uff09")))),(0,r.kt)("h3",{id:"send"},"send"),(0,r.kt)("p",null,"\u901a\u8fc7 WebSocket \u8fde\u63a5\u53d1\u9001\u6570\u636e"),(0,r.kt)("p",null,"\u652f\u6301\u60c5\u51b5\uff1a",(0,r.kt)("img",{title:"\u5fae\u4fe1\u5c0f\u7a0b\u5e8f",src:a(16710).Z,className:"icon_platform",width:"25px"})," ",(0,r.kt)("img",{title:"\u767e\u5ea6\u5c0f\u7a0b\u5e8f",src:a(94882).Z,className:"icon_platform",width:"25px"})," ",(0,r.kt)("img",{title:"\u652f\u4ed8\u5b9d\u5c0f\u7a0b\u5e8f",src:a(44090).Z,className:"icon_platform",width:"25px"})," ",(0,r.kt)("img",{title:"H5",src:a(5030).Z,className:"icon_platform",width:"25px"})," ",(0,r.kt)("img",{title:"React Native",src:a(73555).Z,className:"icon_platform",width:"25px"})),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},(0,r.kt)("a",{parentName:"p",href:"https://developers.weixin.qq.com/miniprogram/dev/api/network/websocket/SocketTask.send.html"},"\u53c2\u8003\u6587\u6863"))),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx"},"(option: SendOption) => void\n")),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"\u53c2\u6570"),(0,r.kt)("th",{parentName:"tr",align:null},"\u7c7b\u578b"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"option"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"SendOption"))))),(0,r.kt)("h3",{id:"close"},"close"),(0,r.kt)("p",null,"\u5173\u95ed WebSocket \u8fde\u63a5"),(0,r.kt)("p",null,"\u652f\u6301\u60c5\u51b5\uff1a",(0,r.kt)("img",{title:"\u5fae\u4fe1\u5c0f\u7a0b\u5e8f",src:a(16710).Z,className:"icon_platform",width:"25px"})," ",(0,r.kt)("img",{title:"\u767e\u5ea6\u5c0f\u7a0b\u5e8f",src:a(94882).Z,className:"icon_platform",width:"25px"})," ",(0,r.kt)("img",{title:"\u652f\u4ed8\u5b9d\u5c0f\u7a0b\u5e8f",src:a(44090).Z,className:"icon_platform",width:"25px"})," ",(0,r.kt)("img",{title:"H5",src:a(5030).Z,className:"icon_platform",width:"25px"})," ",(0,r.kt)("img",{title:"React Native",src:a(73555).Z,className:"icon_platform",width:"25px"})),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},(0,r.kt)("a",{parentName:"p",href:"https://developers.weixin.qq.com/miniprogram/dev/api/network/websocket/SocketTask.close.html"},"\u53c2\u8003\u6587\u6863"))),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx"},"(option: CloseOption) => void\n")),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"\u53c2\u6570"),(0,r.kt)("th",{parentName:"tr",align:null},"\u7c7b\u578b"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"option"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"CloseOption"))))),(0,r.kt)("h3",{id:"onopen"},"onOpen"),(0,r.kt)("p",null,"\u76d1\u542c WebSocket \u8fde\u63a5\u6253\u5f00\u4e8b\u4ef6"),(0,r.kt)("p",null,"\u652f\u6301\u60c5\u51b5\uff1a",(0,r.kt)("img",{title:"\u5fae\u4fe1\u5c0f\u7a0b\u5e8f",src:a(16710).Z,className:"icon_platform",width:"25px"})," ",(0,r.kt)("img",{title:"\u767e\u5ea6\u5c0f\u7a0b\u5e8f",src:a(94882).Z,className:"icon_platform",width:"25px"})," ",(0,r.kt)("img",{title:"\u652f\u4ed8\u5b9d\u5c0f\u7a0b\u5e8f",src:a(44090).Z,className:"icon_platform",width:"25px"})," ",(0,r.kt)("img",{title:"H5",src:a(5030).Z,className:"icon_platform",width:"25px"})," ",(0,r.kt)("img",{title:"React Native",src:a(73555).Z,className:"icon_platform",width:"25px"})),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},(0,r.kt)("a",{parentName:"p",href:"https://developers.weixin.qq.com/miniprogram/dev/api/network/websocket/SocketTask.onOpen.html"},"\u53c2\u8003\u6587\u6863"))),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx"},"(callback: OnOpenCallback) => void\n")),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"\u53c2\u6570"),(0,r.kt)("th",{parentName:"tr",align:null},"\u7c7b\u578b"),(0,r.kt)("th",{parentName:"tr",align:null},"\u8bf4\u660e"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"callback"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"OnOpenCallback")),(0,r.kt)("td",{parentName:"tr",align:null},"WebSocket \u8fde\u63a5\u6253\u5f00\u4e8b\u4ef6\u7684\u56de\u8c03\u51fd\u6570")))),(0,r.kt)("h3",{id:"onclose"},"onClose"),(0,r.kt)("p",null,"\u76d1\u542c WebSocket \u8fde\u63a5\u5173\u95ed\u4e8b\u4ef6"),(0,r.kt)("p",null,"\u652f\u6301\u60c5\u51b5\uff1a",(0,r.kt)("img",{title:"\u5fae\u4fe1\u5c0f\u7a0b\u5e8f",src:a(16710).Z,className:"icon_platform",width:"25px"})," ",(0,r.kt)("img",{title:"\u767e\u5ea6\u5c0f\u7a0b\u5e8f",src:a(94882).Z,className:"icon_platform",width:"25px"})," ",(0,r.kt)("img",{title:"\u652f\u4ed8\u5b9d\u5c0f\u7a0b\u5e8f",src:a(44090).Z,className:"icon_platform",width:"25px"})," ",(0,r.kt)("img",{title:"H5",src:a(5030).Z,className:"icon_platform",width:"25px"})," ",(0,r.kt)("img",{title:"React Native",src:a(73555).Z,className:"icon_platform",width:"25px"})),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},(0,r.kt)("a",{parentName:"p",href:"https://developers.weixin.qq.com/miniprogram/dev/api/network/websocket/SocketTask.onClose.html"},"\u53c2\u8003\u6587\u6863"))),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx"},"(callback: OnCloseCallback) => void\n")),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"\u53c2\u6570"),(0,r.kt)("th",{parentName:"tr",align:null},"\u7c7b\u578b"),(0,r.kt)("th",{parentName:"tr",align:null},"\u8bf4\u660e"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"callback"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"OnCloseCallback")),(0,r.kt)("td",{parentName:"tr",align:null},"WebSocket \u8fde\u63a5\u5173\u95ed\u4e8b\u4ef6\u7684\u56de\u8c03\u51fd\u6570")))),(0,r.kt)("h3",{id:"onerror"},"onError"),(0,r.kt)("p",null,"\u76d1\u542c WebSocket \u9519\u8bef\u4e8b\u4ef6"),(0,r.kt)("p",null,"\u652f\u6301\u60c5\u51b5\uff1a",(0,r.kt)("img",{title:"\u5fae\u4fe1\u5c0f\u7a0b\u5e8f",src:a(16710).Z,className:"icon_platform",width:"25px"})," ",(0,r.kt)("img",{title:"\u767e\u5ea6\u5c0f\u7a0b\u5e8f",src:a(94882).Z,className:"icon_platform",width:"25px"})," ",(0,r.kt)("img",{title:"\u652f\u4ed8\u5b9d\u5c0f\u7a0b\u5e8f",src:a(44090).Z,className:"icon_platform",width:"25px"})," ",(0,r.kt)("img",{title:"H5",src:a(5030).Z,className:"icon_platform",width:"25px"})," ",(0,r.kt)("img",{title:"React Native",src:a(73555).Z,className:"icon_platform",width:"25px"})),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},(0,r.kt)("a",{parentName:"p",href:"https://developers.weixin.qq.com/miniprogram/dev/api/network/websocket/SocketTask.onError.html"},"\u53c2\u8003\u6587\u6863"))),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx"},"(callback: OnErrorCallback) => void\n")),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"\u53c2\u6570"),(0,r.kt)("th",{parentName:"tr",align:null},"\u7c7b\u578b"),(0,r.kt)("th",{parentName:"tr",align:null},"\u8bf4\u660e"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"callback"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"OnErrorCallback")),(0,r.kt)("td",{parentName:"tr",align:null},"WebSocket \u9519\u8bef\u4e8b\u4ef6\u7684\u56de\u8c03\u51fd\u6570")))),(0,r.kt)("h3",{id:"onmessage"},"onMessage"),(0,r.kt)("p",null,"\u76d1\u542c WebSocket \u63a5\u53d7\u5230\u670d\u52a1\u5668\u7684\u6d88\u606f\u4e8b\u4ef6"),(0,r.kt)("p",null,"\u652f\u6301\u60c5\u51b5\uff1a",(0,r.kt)("img",{title:"\u5fae\u4fe1\u5c0f\u7a0b\u5e8f",src:a(16710).Z,className:"icon_platform",width:"25px"})," ",(0,r.kt)("img",{title:"\u767e\u5ea6\u5c0f\u7a0b\u5e8f",src:a(94882).Z,className:"icon_platform",width:"25px"})," ",(0,r.kt)("img",{title:"\u652f\u4ed8\u5b9d\u5c0f\u7a0b\u5e8f",src:a(44090).Z,className:"icon_platform",width:"25px"})," ",(0,r.kt)("img",{title:"H5",src:a(5030).Z,className:"icon_platform",width:"25px"})," ",(0,r.kt)("img",{title:"React Native",src:a(73555).Z,className:"icon_platform",width:"25px"})),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},(0,r.kt)("a",{parentName:"p",href:"https://developers.weixin.qq.com/miniprogram/dev/api/network/websocket/SocketTask.onMessage.html"},"\u53c2\u8003\u6587\u6863"))),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx"},"<T = any>(callback: OnMessageCallback<T>) => void\n")),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"\u53c2\u6570"),(0,r.kt)("th",{parentName:"tr",align:null},"\u7c7b\u578b"),(0,r.kt)("th",{parentName:"tr",align:null},"\u8bf4\u660e"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"callback"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"T")),(0,r.kt)("td",{parentName:"tr",align:null},"WebSocket \u63a5\u53d7\u5230\u670d\u52a1\u5668\u7684\u6d88\u606f\u4e8b\u4ef6\u7684\u56de\u8c03\u51fd\u6570")))),(0,r.kt)("h2",{id:"\u53c2\u6570"},"\u53c2\u6570"),(0,r.kt)("h3",{id:"closeoption"},"CloseOption"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"\u53c2\u6570"),(0,r.kt)("th",{parentName:"tr",align:null},"\u7c7b\u578b"),(0,r.kt)("th",{parentName:"tr",align:"center"},"\u5fc5\u586b"),(0,r.kt)("th",{parentName:"tr",align:null},"\u8bf4\u660e"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"code"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"number")),(0,r.kt)("td",{parentName:"tr",align:"center"},"\u5426"),(0,r.kt)("td",{parentName:"tr",align:null},"\u4e00\u4e2a\u6570\u5b57\u503c\u8868\u793a\u5173\u95ed\u8fde\u63a5\u7684\u72b6\u6001\u53f7\uff0c\u8868\u793a\u8fde\u63a5\u88ab\u5173\u95ed\u7684\u539f\u56e0\u3002")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"complete"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"(res: TaroGeneral.CallbackResult) => void")),(0,r.kt)("td",{parentName:"tr",align:"center"},"\u5426"),(0,r.kt)("td",{parentName:"tr",align:null},"\u63a5\u53e3\u8c03\u7528\u7ed3\u675f\u7684\u56de\u8c03\u51fd\u6570\uff08\u8c03\u7528\u6210\u529f\u3001\u5931\u8d25\u90fd\u4f1a\u6267\u884c\uff09")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"fail"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"(res: TaroGeneral.CallbackResult) => void")),(0,r.kt)("td",{parentName:"tr",align:"center"},"\u5426"),(0,r.kt)("td",{parentName:"tr",align:null},"\u63a5\u53e3\u8c03\u7528\u5931\u8d25\u7684\u56de\u8c03\u51fd\u6570")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"reason"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"string")),(0,r.kt)("td",{parentName:"tr",align:"center"},"\u5426"),(0,r.kt)("td",{parentName:"tr",align:null},"\u4e00\u4e2a\u53ef\u8bfb\u7684\u5b57\u7b26\u4e32\uff0c\u8868\u793a\u8fde\u63a5\u88ab\u5173\u95ed\u7684\u539f\u56e0\u3002\u8fd9\u4e2a\u5b57\u7b26\u4e32\u5fc5\u987b\u662f\u4e0d\u957f\u4e8e 123 \u5b57\u8282\u7684 UTF-8 \u6587\u672c\uff08\u4e0d\u662f\u5b57\u7b26\uff09\u3002")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"success"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"(res: TaroGeneral.CallbackResult) => void")),(0,r.kt)("td",{parentName:"tr",align:"center"},"\u5426"),(0,r.kt)("td",{parentName:"tr",align:null},"\u63a5\u53e3\u8c03\u7528\u6210\u529f\u7684\u56de\u8c03\u51fd\u6570")))),(0,r.kt)("h3",{id:"onclosecallback"},"OnCloseCallback"),(0,r.kt)("p",null,"WebSocket \u8fde\u63a5\u5173\u95ed\u4e8b\u4ef6\u7684\u56de\u8c03\u51fd\u6570"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx"},"(result: OnCloseCallbackResult) => void\n")),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"\u53c2\u6570"),(0,r.kt)("th",{parentName:"tr",align:null},"\u7c7b\u578b"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"result"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"OnCloseCallbackResult"))))),(0,r.kt)("h3",{id:"onclosecallbackresult"},"OnCloseCallbackResult"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"\u53c2\u6570"),(0,r.kt)("th",{parentName:"tr",align:null},"\u7c7b\u578b"),(0,r.kt)("th",{parentName:"tr",align:null},"\u8bf4\u660e"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"code"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"number")),(0,r.kt)("td",{parentName:"tr",align:null},"\u4e00\u4e2a\u6570\u5b57\u503c\u8868\u793a\u5173\u95ed\u8fde\u63a5\u7684\u72b6\u6001\u53f7\uff0c\u8868\u793a\u8fde\u63a5\u88ab\u5173\u95ed\u7684\u539f\u56e0\u3002")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"reason"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"string")),(0,r.kt)("td",{parentName:"tr",align:null},"\u4e00\u4e2a\u53ef\u8bfb\u7684\u5b57\u7b26\u4e32\uff0c\u8868\u793a\u8fde\u63a5\u88ab\u5173\u95ed\u7684\u539f\u56e0\u3002")))),(0,r.kt)("h3",{id:"onerrorcallback"},"OnErrorCallback"),(0,r.kt)("p",null,"WebSocket \u9519\u8bef\u4e8b\u4ef6\u7684\u56de\u8c03\u51fd\u6570"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx"},"(result: OnErrorCallbackResult) => void\n")),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"\u53c2\u6570"),(0,r.kt)("th",{parentName:"tr",align:null},"\u7c7b\u578b"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"result"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"OnErrorCallbackResult"))))),(0,r.kt)("h3",{id:"onerrorcallbackresult"},"OnErrorCallbackResult"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"\u53c2\u6570"),(0,r.kt)("th",{parentName:"tr",align:null},"\u7c7b\u578b"),(0,r.kt)("th",{parentName:"tr",align:null},"\u8bf4\u660e"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"errMsg"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"string")),(0,r.kt)("td",{parentName:"tr",align:null},"\u9519\u8bef\u4fe1\u606f")))),(0,r.kt)("h3",{id:"onmessagecallback"},"OnMessageCallback"),(0,r.kt)("p",null,"WebSocket \u63a5\u53d7\u5230\u670d\u52a1\u5668\u7684\u6d88\u606f\u4e8b\u4ef6\u7684\u56de\u8c03\u51fd\u6570"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx"},"(result: OnMessageCallbackResult<T>) => void\n")),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"\u53c2\u6570"),(0,r.kt)("th",{parentName:"tr",align:null},"\u7c7b\u578b"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"result"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"OnMessageCallbackResult<T>"))))),(0,r.kt)("h3",{id:"onmessagecallbackresult"},"OnMessageCallbackResult"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"\u53c2\u6570"),(0,r.kt)("th",{parentName:"tr",align:null},"\u7c7b\u578b"),(0,r.kt)("th",{parentName:"tr",align:null},"\u8bf4\u660e"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"data"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"T")),(0,r.kt)("td",{parentName:"tr",align:null},"\u670d\u52a1\u5668\u8fd4\u56de\u7684\u6d88\u606f")))),(0,r.kt)("h3",{id:"onopencallback"},"OnOpenCallback"),(0,r.kt)("p",null,"WebSocket \u8fde\u63a5\u6253\u5f00\u4e8b\u4ef6\u7684\u56de\u8c03\u51fd\u6570"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx"},"(result: OnOpenCallbackResult) => void\n")),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"\u53c2\u6570"),(0,r.kt)("th",{parentName:"tr",align:null},"\u7c7b\u578b"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"result"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"OnOpenCallbackResult"))))),(0,r.kt)("h3",{id:"onopencallbackresult"},"OnOpenCallbackResult"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"\u53c2\u6570"),(0,r.kt)("th",{parentName:"tr",align:null},"\u7c7b\u578b"),(0,r.kt)("th",{parentName:"tr",align:null},"\u8bf4\u660e"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"header"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"TaroGeneral.IAnyObject")),(0,r.kt)("td",{parentName:"tr",align:null},"\u8fde\u63a5\u6210\u529f\u7684 HTTP \u54cd\u5e94 Header")))),(0,r.kt)("h3",{id:"sendoption"},"SendOption"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"\u53c2\u6570"),(0,r.kt)("th",{parentName:"tr",align:null},"\u7c7b\u578b"),(0,r.kt)("th",{parentName:"tr",align:"center"},"\u5fc5\u586b"),(0,r.kt)("th",{parentName:"tr",align:null},"\u8bf4\u660e"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"data"),(0,r.kt)("td",{parentName:"tr",align:null},"string or ArrayBuffer"),(0,r.kt)("td",{parentName:"tr",align:"center"},"\u662f"),(0,r.kt)("td",{parentName:"tr",align:null},"\u9700\u8981\u53d1\u9001\u7684\u5185\u5bb9")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"complete"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"(res: TaroGeneral.CallbackResult) => void")),(0,r.kt)("td",{parentName:"tr",align:"center"},"\u5426"),(0,r.kt)("td",{parentName:"tr",align:null},"\u63a5\u53e3\u8c03\u7528\u7ed3\u675f\u7684\u56de\u8c03\u51fd\u6570\uff08\u8c03\u7528\u6210\u529f\u3001\u5931\u8d25\u90fd\u4f1a\u6267\u884c\uff09")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"fail"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"(res: TaroGeneral.CallbackResult) => void")),(0,r.kt)("td",{parentName:"tr",align:"center"},"\u5426"),(0,r.kt)("td",{parentName:"tr",align:null},"\u63a5\u53e3\u8c03\u7528\u5931\u8d25\u7684\u56de\u8c03\u51fd\u6570")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"success"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"(res: TaroGeneral.CallbackResult) => void")),(0,r.kt)("td",{parentName:"tr",align:"center"},"\u5426"),(0,r.kt)("td",{parentName:"tr",align:null},"\u63a5\u53e3\u8c03\u7528\u6210\u529f\u7684\u56de\u8c03\u51fd\u6570")))),(0,r.kt)("h2",{id:"api-\u652f\u6301\u5ea6"},"API \u652f\u6301\u5ea6"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"center"},"API"),(0,r.kt)("th",{parentName:"tr",align:"center"},"\u5fae\u4fe1\u5c0f\u7a0b\u5e8f"),(0,r.kt)("th",{parentName:"tr",align:"center"},"\u767e\u5ea6\u5c0f\u7a0b\u5e8f"),(0,r.kt)("th",{parentName:"tr",align:"center"},"\u652f\u4ed8\u5b9d\u5c0f\u7a0b\u5e8f"),(0,r.kt)("th",{parentName:"tr",align:"center"},"H5"),(0,r.kt)("th",{parentName:"tr",align:"center"},"React Native"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},"SocketTask"),(0,r.kt)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),(0,r.kt)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),(0,r.kt)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),(0,r.kt)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),(0,r.kt)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},"SocketTask.send"),(0,r.kt)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),(0,r.kt)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),(0,r.kt)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),(0,r.kt)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),(0,r.kt)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},"SocketTask.close"),(0,r.kt)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),(0,r.kt)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),(0,r.kt)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),(0,r.kt)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),(0,r.kt)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},"SocketTask.onOpen"),(0,r.kt)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),(0,r.kt)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),(0,r.kt)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),(0,r.kt)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),(0,r.kt)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},"SocketTask.onClose"),(0,r.kt)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),(0,r.kt)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),(0,r.kt)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),(0,r.kt)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),(0,r.kt)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},"SocketTask.onError"),(0,r.kt)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),(0,r.kt)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),(0,r.kt)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),(0,r.kt)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),(0,r.kt)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},"SocketTask.onMessage"),(0,r.kt)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),(0,r.kt)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),(0,r.kt)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),(0,r.kt)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),(0,r.kt)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f")))))}d.isMDXComponent=!0},44090:function(t,e,a){e.Z=a.p+"assets/images/alipay-ee5545de747ce1ad6e17faec10358975.png"},5030:function(t,e,a){e.Z=a.p+"assets/images/h5-81f73c447874b6528e84ee395bece16e.png"},73555:function(t,e,a){e.Z=a.p+"assets/images/rn-ecec68ba194e4b5e9fc3e853cc00c569.png"},94882:function(t,e,a){e.Z=a.p+"assets/images/swan-566f56d360909d0457073b67b8f48958.png"},16710:function(t,e,a){e.Z=a.p+"assets/images/weapp-0e8fbe2d5eb3676de4961b54ee7f5ba4.png"}}]);