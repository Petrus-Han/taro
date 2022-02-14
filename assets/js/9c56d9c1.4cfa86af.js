"use strict";(self.webpackChunktaro_docs=self.webpackChunktaro_docs||[]).push([[79967],{3905:function(t,e,n){n.d(e,{Zo:function(){return m},kt:function(){return u}});var a=n(67294);function r(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function l(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,a)}return n}function i(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?l(Object(n),!0).forEach((function(e){r(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function p(t,e){if(null==t)return{};var n,a,r=function(t,e){if(null==t)return{};var n,a,r={},l=Object.keys(t);for(a=0;a<l.length;a++)n=l[a],e.indexOf(n)>=0||(r[n]=t[n]);return r}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(a=0;a<l.length;a++)n=l[a],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(r[n]=t[n])}return r}var d=a.createContext({}),k=function(t){var e=a.useContext(d),n=e;return t&&(n="function"==typeof t?t(e):i(i({},e),t)),n},m=function(t){var e=k(t.components);return a.createElement(d.Provider,{value:e},t.children)},o={inlineCode:"code",wrapper:function(t){var e=t.children;return a.createElement(a.Fragment,{},e)}},N=a.forwardRef((function(t,e){var n=t.components,r=t.mdxType,l=t.originalType,d=t.parentName,m=p(t,["components","mdxType","originalType","parentName"]),N=k(n),u=r,c=N["".concat(d,".").concat(u)]||N[u]||o[u]||l;return n?a.createElement(c,i(i({ref:e},m),{},{components:n})):a.createElement(c,i({ref:e},m))}));function u(t,e){var n=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var l=n.length,i=new Array(l);i[0]=N;var p={};for(var d in e)hasOwnProperty.call(e,d)&&(p[d]=e[d]);p.originalType=t,p.mdxType="string"==typeof t?t:r,i[1]=p;for(var k=2;k<l;k++)i[k]=n[k];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}N.displayName="MDXCreateElement"},14899:function(t,e,n){n.r(e),n.d(e,{frontMatter:function(){return p},contentTitle:function(){return d},metadata:function(){return k},toc:function(){return m},default:function(){return N}});var a=n(83117),r=n(80102),l=(n(67294),n(3905)),i=["components"],p={title:"Taro.request(option)",sidebar_label:"request"},d=void 0,k={unversionedId:"apis/network/request/request",id:"version-3.x/apis/network/request/request",isDocsHomePage:!1,title:"Taro.request(option)",description:"\u53d1\u8d77 HTTPS \u7f51\u7edc\u8bf7\u6c42\u3002\u4f7f\u7528\u524d\u8bf7\u6ce8\u610f\u9605\u8bfb\u76f8\u5173\u8bf4\u660e\u3002",source:"@site/versioned_docs/version-3.x/apis/network/request/request.md",sourceDirName:"apis/network/request",slug:"/apis/network/request/request",permalink:"/taro/docs/apis/network/request/request",editUrl:"https://github.com/nervjs/taro/edit/docs/versioned_docs/version-3.x/apis/network/request/request.md",tags:[],version:"3.x",frontMatter:{title:"Taro.request(option)",sidebar_label:"request"},sidebar:"version-3.x/API",previous:{title:"offWindowResize",permalink:"/taro/docs/apis/ui/window/offWindowResize"},next:{title:"RequestTask",permalink:"/taro/docs/apis/network/request/RequestTask"}},m=[{value:"\u7c7b\u578b",id:"\u7c7b\u578b",children:[],level:2},{value:"\u53c2\u6570",id:"\u53c2\u6570",children:[{value:"Option",id:"option",children:[],level:3},{value:"SuccessCallbackResult",id:"successcallbackresult",children:[],level:3},{value:"DataType",id:"datatype",children:[],level:3},{value:"Method",id:"method",children:[],level:3},{value:"ResponseType",id:"responsetype",children:[],level:3},{value:"CorsMode",id:"corsmode",children:[],level:3},{value:"Credentials",id:"credentials",children:[],level:3},{value:"Cache",id:"cache",children:[],level:3}],level:2},{value:"\u793a\u4f8b\u4ee3\u7801",id:"\u793a\u4f8b\u4ee3\u7801",children:[{value:"\u793a\u4f8b 1",id:"\u793a\u4f8b-1",children:[],level:3},{value:"\u793a\u4f8b 2",id:"\u793a\u4f8b-2",children:[],level:3}],level:2}],o={toc:m};function N(t){var e=t.components,p=(0,r.Z)(t,i);return(0,l.kt)("wrapper",(0,a.Z)({},o,p,{components:e,mdxType:"MDXLayout"}),(0,l.kt)("p",null,"\u53d1\u8d77 HTTPS \u7f51\u7edc\u8bf7\u6c42\u3002\u4f7f\u7528\u524d\u8bf7\u6ce8\u610f\u9605\u8bfb",(0,l.kt)("a",{parentName:"p",href:"https://developers.weixin.qq.com/miniprogram/dev/framework/ability/network.html"},"\u76f8\u5173\u8bf4\u660e"),"\u3002"),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"data \u53c2\u6570\u8bf4\u660e"),"\n\u6700\u7ec8\u53d1\u9001\u7ed9\u670d\u52a1\u5668\u7684\u6570\u636e\u662f String \u7c7b\u578b\uff0c\u5982\u679c\u4f20\u5165\u7684 data \u4e0d\u662f String \u7c7b\u578b\uff0c\u4f1a\u88ab\u8f6c\u6362\u6210 String \u3002\u8f6c\u6362\u89c4\u5219\u5982\u4e0b\uff1a"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u5bf9\u4e8e ",(0,l.kt)("inlineCode",{parentName:"li"},"GET")," \u65b9\u6cd5\u7684\u6570\u636e\uff0c\u4f1a\u5c06\u6570\u636e\u8f6c\u6362\u6210 query string\uff08",(0,l.kt)("inlineCode",{parentName:"li"},"encodeURIComponent(k)=encodeURIComponent(v)&encodeURIComponent(k)=encodeURIComponent(v)..."),"\uff09"),(0,l.kt)("li",{parentName:"ul"},"\u5bf9\u4e8e ",(0,l.kt)("inlineCode",{parentName:"li"},"POST")," \u65b9\u6cd5\u4e14 ",(0,l.kt)("inlineCode",{parentName:"li"},"header['content-type']")," \u4e3a ",(0,l.kt)("inlineCode",{parentName:"li"},"application/json")," \u7684\u6570\u636e\uff0c\u4f1a\u5bf9\u6570\u636e\u8fdb\u884c JSON \u5e8f\u5217\u5316"),(0,l.kt)("li",{parentName:"ul"},"\u5bf9\u4e8e ",(0,l.kt)("inlineCode",{parentName:"li"},"POST")," \u65b9\u6cd5\u4e14 ",(0,l.kt)("inlineCode",{parentName:"li"},"header['content-type']")," \u4e3a ",(0,l.kt)("inlineCode",{parentName:"li"},"application/x-www-form-urlencoded")," \u7684\u6570\u636e\uff0c\u4f1a\u5c06\u6570\u636e\u8f6c\u6362\u6210 query string ",(0,l.kt)("inlineCode",{parentName:"li"},"\uff08encodeURIComponent(k)=encodeURIComponent(v)&encodeURIComponent(k)=encodeURIComponent(v)...\uff09"))),(0,l.kt)("p",null,"\u652f\u6301\u60c5\u51b5\uff1a",(0,l.kt)("img",{title:"\u5fae\u4fe1\u5c0f\u7a0b\u5e8f",src:n(16710).Z,className:"icon_platform",width:"25px"})," ",(0,l.kt)("img",{title:"\u767e\u5ea6\u5c0f\u7a0b\u5e8f",src:n(94882).Z,className:"icon_platform",width:"25px"})," ",(0,l.kt)("img",{title:"\u652f\u4ed8\u5b9d\u5c0f\u7a0b\u5e8f",src:n(44090).Z,className:"icon_platform",width:"25px"})," ",(0,l.kt)("img",{title:"\u5b57\u8282\u8df3\u52a8\u5c0f\u7a0b\u5e8f",src:n(62286).Z,className:"icon_platform",width:"25px"})," ",(0,l.kt)("img",{title:"QQ \u5c0f\u7a0b\u5e8f",src:n(82626).Z,className:"icon_platform",width:"25px"})," ",(0,l.kt)("img",{title:"H5",src:n(5030).Z,className:"icon_platform",width:"25px"})," ",(0,l.kt)("img",{title:"React Native",src:n(73555).Z,className:"icon_platform",width:"25px"})),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},(0,l.kt)("a",{parentName:"p",href:"https://developers.weixin.qq.com/miniprogram/dev/api/network/request/wx.request.html"},"\u53c2\u8003\u6587\u6863"))),(0,l.kt)("h2",{id:"\u7c7b\u578b"},"\u7c7b\u578b"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-tsx"},"<T = any, U = any>(option: Option<U>) => RequestTask<T>\n")),(0,l.kt)("h2",{id:"\u53c2\u6570"},"\u53c2\u6570"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"\u53c2\u6570"),(0,l.kt)("th",{parentName:"tr",align:null},"\u7c7b\u578b"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"option"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"T"))))),(0,l.kt)("h3",{id:"option"},"Option"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"\u53c2\u6570"),(0,l.kt)("th",{parentName:"tr",align:null},"\u7c7b\u578b"),(0,l.kt)("th",{parentName:"tr",align:"center"},"\u9ed8\u8ba4\u503c"),(0,l.kt)("th",{parentName:"tr",align:"center"},"\u5fc5\u586b"),(0,l.kt)("th",{parentName:"tr",align:null},"\u8bf4\u660e"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"url"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"string")),(0,l.kt)("td",{parentName:"tr",align:"center"}),(0,l.kt)("td",{parentName:"tr",align:"center"},"\u662f"),(0,l.kt)("td",{parentName:"tr",align:null},"\u5f00\u53d1\u8005\u670d\u52a1\u5668\u63a5\u53e3\u5730\u5740")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"data"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"U")),(0,l.kt)("td",{parentName:"tr",align:"center"}),(0,l.kt)("td",{parentName:"tr",align:"center"},"\u5426"),(0,l.kt)("td",{parentName:"tr",align:null},"\u8bf7\u6c42\u7684\u53c2\u6570")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"header"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"TaroGeneral.IAnyObject")),(0,l.kt)("td",{parentName:"tr",align:"center"}),(0,l.kt)("td",{parentName:"tr",align:"center"},"\u5426"),(0,l.kt)("td",{parentName:"tr",align:null},"\u8bbe\u7f6e\u8bf7\u6c42\u7684 header\uff0cheader \u4e2d\u4e0d\u80fd\u8bbe\u7f6e Referer\u3002",(0,l.kt)("br",null),(0,l.kt)("br",null),(0,l.kt)("inlineCode",{parentName:"td"},"content-type")," \u9ed8\u8ba4\u4e3a ",(0,l.kt)("inlineCode",{parentName:"td"},"application/json"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"timeout"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"number")),(0,l.kt)("td",{parentName:"tr",align:"center"},(0,l.kt)("inlineCode",{parentName:"td"},"2000")),(0,l.kt)("td",{parentName:"tr",align:"center"},"\u5426"),(0,l.kt)("td",{parentName:"tr",align:null},"\u8d85\u65f6\u65f6\u95f4\uff0c\u5355\u4f4d\u4e3a\u6beb\u79d2",(0,l.kt)("br",null),"API \u652f\u6301\u5ea6: weapp, h5")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"method"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"keyof Method")),(0,l.kt)("td",{parentName:"tr",align:"center"},(0,l.kt)("inlineCode",{parentName:"td"},"GET")),(0,l.kt)("td",{parentName:"tr",align:"center"},"\u5426"),(0,l.kt)("td",{parentName:"tr",align:null},"HTTP \u8bf7\u6c42\u65b9\u6cd5")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"dataType"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"string")),(0,l.kt)("td",{parentName:"tr",align:"center"}),(0,l.kt)("td",{parentName:"tr",align:"center"},"\u5426"),(0,l.kt)("td",{parentName:"tr",align:null},"\u8fd4\u56de\u7684\u6570\u636e\u683c\u5f0f")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"responseType"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"keyof ResponseType")),(0,l.kt)("td",{parentName:"tr",align:"center"}),(0,l.kt)("td",{parentName:"tr",align:"center"},"\u5426"),(0,l.kt)("td",{parentName:"tr",align:null},"\u54cd\u5e94\u7684\u6570\u636e\u7c7b\u578b")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"enableHttp2"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"boolean")),(0,l.kt)("td",{parentName:"tr",align:"center"},(0,l.kt)("inlineCode",{parentName:"td"},"false")),(0,l.kt)("td",{parentName:"tr",align:"center"},"\u5426"),(0,l.kt)("td",{parentName:"tr",align:null},"\u5f00\u542f http2",(0,l.kt)("br",null),"API \u652f\u6301\u5ea6: weapp")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"enableQuic"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"boolean")),(0,l.kt)("td",{parentName:"tr",align:"center"},(0,l.kt)("inlineCode",{parentName:"td"},"false")),(0,l.kt)("td",{parentName:"tr",align:"center"},"\u5426"),(0,l.kt)("td",{parentName:"tr",align:null},"\u5f00\u542f quic",(0,l.kt)("br",null),"API \u652f\u6301\u5ea6: weapp")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"enableCache"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"boolean")),(0,l.kt)("td",{parentName:"tr",align:"center"},(0,l.kt)("inlineCode",{parentName:"td"},"false")),(0,l.kt)("td",{parentName:"tr",align:"center"},"\u5426"),(0,l.kt)("td",{parentName:"tr",align:null},"\u5f00\u542f cache",(0,l.kt)("br",null),"API \u652f\u6301\u5ea6: weapp")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"enableHttpDNS"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"boolean")),(0,l.kt)("td",{parentName:"tr",align:"center"},(0,l.kt)("inlineCode",{parentName:"td"},"false")),(0,l.kt)("td",{parentName:"tr",align:"center"},"\u5426"),(0,l.kt)("td",{parentName:"tr",align:null},"\u662f\u5426\u5f00\u542f HttpDNS \u670d\u52a1\u3002\u5982\u5f00\u542f\uff0c\u9700\u8981\u540c\u65f6\u586b\u5165 httpDNSServiceId \u3002 HttpDNS \u7528\u6cd5\u8be6\u89c1 \u79fb\u52a8\u89e3\u6790HttpDNS",(0,l.kt)("br",null),"API \u652f\u6301\u5ea6: weapp")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"httpDNSServiceId"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"string")),(0,l.kt)("td",{parentName:"tr",align:"center"}),(0,l.kt)("td",{parentName:"tr",align:"center"},"\u5426"),(0,l.kt)("td",{parentName:"tr",align:null},"HttpDNS \u670d\u52a1\u5546 Id\u3002 HttpDNS \u7528\u6cd5\u8be6\u89c1 \u79fb\u52a8\u89e3\u6790HttpDNS",(0,l.kt)("br",null),"API \u652f\u6301\u5ea6: weapp")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"enableChunked"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"boolean")),(0,l.kt)("td",{parentName:"tr",align:"center"},(0,l.kt)("inlineCode",{parentName:"td"},"false")),(0,l.kt)("td",{parentName:"tr",align:"center"},"\u5426"),(0,l.kt)("td",{parentName:"tr",align:null},"\u5f00\u542f transfer-encoding chunked\u3002",(0,l.kt)("br",null),"API \u652f\u6301\u5ea6: weapp")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"success"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"(result: SuccessCallbackResult<any>) => void")),(0,l.kt)("td",{parentName:"tr",align:"center"}),(0,l.kt)("td",{parentName:"tr",align:"center"},"\u5426"),(0,l.kt)("td",{parentName:"tr",align:null},"\u63a5\u53e3\u8c03\u7528\u6210\u529f\u7684\u56de\u8c03\u51fd\u6570")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"fail"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"(res: TaroGeneral.CallbackResult) => void")),(0,l.kt)("td",{parentName:"tr",align:"center"}),(0,l.kt)("td",{parentName:"tr",align:"center"},"\u5426"),(0,l.kt)("td",{parentName:"tr",align:null},"\u63a5\u53e3\u8c03\u7528\u5931\u8d25\u7684\u56de\u8c03\u51fd\u6570")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"complete"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"(res: TaroGeneral.CallbackResult) => void")),(0,l.kt)("td",{parentName:"tr",align:"center"}),(0,l.kt)("td",{parentName:"tr",align:"center"},"\u5426"),(0,l.kt)("td",{parentName:"tr",align:null},"\u63a5\u53e3\u8c03\u7528\u7ed3\u675f\u7684\u56de\u8c03\u51fd\u6570\uff08\u8c03\u7528\u6210\u529f\u3001\u5931\u8d25\u90fd\u4f1a\u6267\u884c\uff09")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"jsonp"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"boolean")),(0,l.kt)("td",{parentName:"tr",align:"center"},(0,l.kt)("inlineCode",{parentName:"td"},"false")),(0,l.kt)("td",{parentName:"tr",align:"center"},"\u5426"),(0,l.kt)("td",{parentName:"tr",align:null},"\u8bbe\u7f6e H5 \u7aef\u662f\u5426\u4f7f\u7528jsonp\u65b9\u5f0f\u83b7\u53d6\u6570\u636e",(0,l.kt)("br",null),"API \u652f\u6301\u5ea6: h5")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"jsonpCache"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"boolean")),(0,l.kt)("td",{parentName:"tr",align:"center"},(0,l.kt)("inlineCode",{parentName:"td"},"false")),(0,l.kt)("td",{parentName:"tr",align:"center"},"\u5426"),(0,l.kt)("td",{parentName:"tr",align:null},"\u8bbe\u7f6e H5 \u7aef jsonp \u8bf7\u6c42 url \u662f\u5426\u9700\u8981\u88ab\u7f13\u5b58",(0,l.kt)("br",null),"API \u652f\u6301\u5ea6: h5")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"mode"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"keyof CorsMode")),(0,l.kt)("td",{parentName:"tr",align:"center"},(0,l.kt)("inlineCode",{parentName:"td"},"same-origin")),(0,l.kt)("td",{parentName:"tr",align:"center"},"\u5426"),(0,l.kt)("td",{parentName:"tr",align:null},"\u8bbe\u7f6e H5 \u7aef\u662f\u5426\u5141\u8bb8\u8de8\u57df\u8bf7\u6c42",(0,l.kt)("br",null),"API \u652f\u6301\u5ea6: h5")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"credentials"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"keyof Credentials")),(0,l.kt)("td",{parentName:"tr",align:"center"},(0,l.kt)("inlineCode",{parentName:"td"},"omit")),(0,l.kt)("td",{parentName:"tr",align:"center"},"\u5426"),(0,l.kt)("td",{parentName:"tr",align:null},"\u8bbe\u7f6e H5 \u7aef\u662f\u5426\u643a\u5e26 Cookie",(0,l.kt)("br",null),"API \u652f\u6301\u5ea6: h5")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"cache"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"keyof Cache")),(0,l.kt)("td",{parentName:"tr",align:"center"},(0,l.kt)("inlineCode",{parentName:"td"},"default")),(0,l.kt)("td",{parentName:"tr",align:"center"},"\u5426"),(0,l.kt)("td",{parentName:"tr",align:null},"\u8bbe\u7f6e H5 \u7aef\u7f13\u5b58\u6a21\u5f0f",(0,l.kt)("br",null),"API \u652f\u6301\u5ea6: h5")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"retryTimes"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"number")),(0,l.kt)("td",{parentName:"tr",align:"center"},(0,l.kt)("inlineCode",{parentName:"td"},"2")),(0,l.kt)("td",{parentName:"tr",align:"center"},"\u5426"),(0,l.kt)("td",{parentName:"tr",align:null},"\u8bbe\u7f6e H5 \u7aef\u8bf7\u6c42\u91cd\u8bd5\u6b21\u6570",(0,l.kt)("br",null),"API \u652f\u6301\u5ea6: h5")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"backup"),(0,l.kt)("td",{parentName:"tr",align:null},"string or string[]"),(0,l.kt)("td",{parentName:"tr",align:"center"}),(0,l.kt)("td",{parentName:"tr",align:"center"},"\u5426"),(0,l.kt)("td",{parentName:"tr",align:null},"\u8bbe\u7f6e H5 \u7aef\u8bf7\u6c42\u7684\u515c\u5e95\u63a5\u53e3",(0,l.kt)("br",null),"API \u652f\u6301\u5ea6: h5")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"dataCheck"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"() => boolean")),(0,l.kt)("td",{parentName:"tr",align:"center"}),(0,l.kt)("td",{parentName:"tr",align:"center"},"\u5426"),(0,l.kt)("td",{parentName:"tr",align:null},"\u8bbe\u7f6e H5 \u7aef\u8bf7\u6c42\u54cd\u5e94\u7684\u6570\u636e\u6821\u9a8c\u51fd\u6570\uff0c\u82e5\u8fd4\u56de false\uff0c\u5219\u8bf7\u6c42\u515c\u5e95\u63a5\u53e3\uff0c\u82e5\u65e0\u515c\u5e95\u63a5\u53e3\uff0c\u5219\u62a5\u8bf7\u6c42\u5931\u8d25",(0,l.kt)("br",null),"API \u652f\u6301\u5ea6: h5")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"useStore"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"boolean")),(0,l.kt)("td",{parentName:"tr",align:"center"},(0,l.kt)("inlineCode",{parentName:"td"},"false")),(0,l.kt)("td",{parentName:"tr",align:"center"},"\u5426"),(0,l.kt)("td",{parentName:"tr",align:null},"\u8bbe\u7f6e H5 \u7aef\u8bf7\u6c42\u662f\u5426\u4f7f\u7528\u7f13\u5b58",(0,l.kt)("br",null),"API \u652f\u6301\u5ea6: h5")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"storeCheckKey"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"string")),(0,l.kt)("td",{parentName:"tr",align:"center"}),(0,l.kt)("td",{parentName:"tr",align:"center"},"\u5426"),(0,l.kt)("td",{parentName:"tr",align:null},"\u8bbe\u7f6e H5 \u7aef\u8bf7\u6c42\u7f13\u5b58\u6821\u9a8c\u7684 key",(0,l.kt)("br",null),"API \u652f\u6301\u5ea6: h5")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"storeSign"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"string")),(0,l.kt)("td",{parentName:"tr",align:"center"}),(0,l.kt)("td",{parentName:"tr",align:"center"},"\u5426"),(0,l.kt)("td",{parentName:"tr",align:null},"\u8bbe\u7f6e H5 \u7aef\u8bf7\u6c42\u7f13\u5b58\u7b7e\u540d",(0,l.kt)("br",null),"API \u652f\u6301\u5ea6: h5")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"storeCheck"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"() => boolean")),(0,l.kt)("td",{parentName:"tr",align:"center"}),(0,l.kt)("td",{parentName:"tr",align:"center"},"\u5426"),(0,l.kt)("td",{parentName:"tr",align:null},"\u8bbe\u7f6e H5 \u7aef\u8bf7\u6c42\u6821\u9a8c\u51fd\u6570\uff0c\u4e00\u822c\u4e0d\u9700\u8981\u8bbe\u7f6e",(0,l.kt)("br",null),"API \u652f\u6301\u5ea6: h5")))),(0,l.kt)("h3",{id:"successcallbackresult"},"SuccessCallbackResult"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"\u53c2\u6570"),(0,l.kt)("th",{parentName:"tr",align:null},"\u7c7b\u578b"),(0,l.kt)("th",{parentName:"tr",align:"center"},"\u5fc5\u586b"),(0,l.kt)("th",{parentName:"tr",align:null},"\u8bf4\u660e"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"data"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"T")),(0,l.kt)("td",{parentName:"tr",align:"center"},"\u662f"),(0,l.kt)("td",{parentName:"tr",align:null},"\u5f00\u53d1\u8005\u670d\u52a1\u5668\u8fd4\u56de\u7684\u6570\u636e")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"header"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"TaroGeneral.IAnyObject")),(0,l.kt)("td",{parentName:"tr",align:"center"},"\u662f"),(0,l.kt)("td",{parentName:"tr",align:null},"\u5f00\u53d1\u8005\u670d\u52a1\u5668\u8fd4\u56de\u7684 HTTP Response Header")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"statusCode"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"number")),(0,l.kt)("td",{parentName:"tr",align:"center"},"\u662f"),(0,l.kt)("td",{parentName:"tr",align:null},"\u5f00\u53d1\u8005\u670d\u52a1\u5668\u8fd4\u56de\u7684 HTTP \u72b6\u6001\u7801")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"errMsg"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"string")),(0,l.kt)("td",{parentName:"tr",align:"center"},"\u662f"),(0,l.kt)("td",{parentName:"tr",align:null},"\u8c03\u7528\u7ed3\u679c")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"cookies"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"string[]")),(0,l.kt)("td",{parentName:"tr",align:"center"},"\u5426"),(0,l.kt)("td",{parentName:"tr",align:null},"cookies")))),(0,l.kt)("h3",{id:"datatype"},"DataType"),(0,l.kt)("p",null,"\u8fd4\u56de\u7684\u6570\u636e\u683c\u5f0f"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"\u53c2\u6570"),(0,l.kt)("th",{parentName:"tr",align:null},"\u8bf4\u660e"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"json"),(0,l.kt)("td",{parentName:"tr",align:null},"\u8fd4\u56de\u7684\u6570\u636e\u4e3a JSON\uff0c\u8fd4\u56de\u540e\u4f1a\u5bf9\u8fd4\u56de\u7684\u6570\u636e\u8fdb\u884c\u4e00\u6b21 JSON.parse",(0,l.kt)("br",null),"\u5176\u4ed6: \u4e0d\u5bf9\u8fd4\u56de\u7684\u5185\u5bb9\u8fdb\u884c JSON.parse")))),(0,l.kt)("h3",{id:"method"},"Method"),(0,l.kt)("p",null,"HTTP \u8bf7\u6c42\u65b9\u6cd5"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"\u53c2\u6570"),(0,l.kt)("th",{parentName:"tr",align:null},"\u8bf4\u660e"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"OPTIONS"),(0,l.kt)("td",{parentName:"tr",align:null},"HTTP \u8bf7\u6c42 OPTIONS")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"GET"),(0,l.kt)("td",{parentName:"tr",align:null},"HTTP \u8bf7\u6c42 GET")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"HEAD"),(0,l.kt)("td",{parentName:"tr",align:null},"HTTP \u8bf7\u6c42 HEAD")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"POST"),(0,l.kt)("td",{parentName:"tr",align:null},"HTTP \u8bf7\u6c42 POST")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"PUT"),(0,l.kt)("td",{parentName:"tr",align:null},"HTTP \u8bf7\u6c42 PUT")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"DELETE"),(0,l.kt)("td",{parentName:"tr",align:null},"HTTP \u8bf7\u6c42 DELETE")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"TRACE"),(0,l.kt)("td",{parentName:"tr",align:null},"HTTP \u8bf7\u6c42 TRACE")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"CONNECT"),(0,l.kt)("td",{parentName:"tr",align:null},"HTTP \u8bf7\u6c42 CONNECT")))),(0,l.kt)("h3",{id:"responsetype"},"ResponseType"),(0,l.kt)("p",null,"\u54cd\u5e94\u7684\u6570\u636e\u7c7b\u578b"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"\u53c2\u6570"),(0,l.kt)("th",{parentName:"tr",align:null},"\u8bf4\u660e"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"text"),(0,l.kt)("td",{parentName:"tr",align:null},"\u54cd\u5e94\u7684\u6570\u636e\u4e3a\u6587\u672c")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"arraybuffer"),(0,l.kt)("td",{parentName:"tr",align:null},"\u54cd\u5e94\u7684\u6570\u636e\u4e3a ArrayBuffer")))),(0,l.kt)("h3",{id:"corsmode"},"CorsMode"),(0,l.kt)("p",null,"\u8de8\u57df\u7b56\u7565"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"\u53c2\u6570"),(0,l.kt)("th",{parentName:"tr",align:null},"\u8bf4\u660e"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"no-cors"),(0,l.kt)("td",{parentName:"tr",align:null},"\u8de8\u57df\u8bf7\u6c42\u5c06\u83b7\u53d6\u4e0d\u900f\u660e\u7684\u54cd\u5e94")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"cors"),(0,l.kt)("td",{parentName:"tr",align:null},"\u5141\u8bb8\u8de8\u57df\u8bf7\u6c42")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"same-origin"),(0,l.kt)("td",{parentName:"tr",align:null},"\u8bf7\u6c42\u603b\u662f\u5411\u5f53\u524d\u7684\u6e90\u53d1\u8d77\u7684")))),(0,l.kt)("h3",{id:"credentials"},"Credentials"),(0,l.kt)("p",null,"\u8bc1\u4e66"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"\u53c2\u6570"),(0,l.kt)("th",{parentName:"tr",align:null},"\u8bf4\u660e"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"include"),(0,l.kt)("td",{parentName:"tr",align:null},"\u4e0d\u8bba\u662f\u4e0d\u662f\u8de8\u57df\u7684\u8bf7\u6c42,\u603b\u662f\u53d1\u9001\u8bf7\u6c42\u8d44\u6e90\u57df\u5728\u672c\u5730\u7684 cookies\u3001 HTTP Basic authentication \u7b49\u9a8c\u8bc1\u4fe1\u606f")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"same-origin"),(0,l.kt)("td",{parentName:"tr",align:null},"\u53ea\u6709\u5f53URL\u4e0e\u54cd\u5e94\u811a\u672c\u540c\u6e90\u624d\u53d1\u9001 cookies\u3001 HTTP Basic authentication \u7b49\u9a8c\u8bc1\u4fe1\u606f")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"omit"),(0,l.kt)("td",{parentName:"tr",align:null},"\u4ece\u4e0d\u53d1\u9001cookies")))),(0,l.kt)("h3",{id:"cache"},"Cache"),(0,l.kt)("p",null,"\u7f13\u5b58\u7b56\u7565"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"\u53c2\u6570"),(0,l.kt)("th",{parentName:"tr",align:null},"\u8bf4\u660e"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"default"),(0,l.kt)("td",{parentName:"tr",align:null},"\u6d4f\u89c8\u5668\u4eceHTTP\u7f13\u5b58\u4e2d\u5bfb\u627e\u5339\u914d\u7684\u8bf7\u6c42")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"no-cache"),(0,l.kt)("td",{parentName:"tr",align:null},"\u6d4f\u89c8\u5668\u5728\u5176HTTP\u7f13\u5b58\u4e2d\u5bfb\u627e\u5339\u914d\u7684\u8bf7\u6c42")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"reload"),(0,l.kt)("td",{parentName:"tr",align:null},"\u6d4f\u89c8\u5668\u76f4\u63a5\u4ece\u8fdc\u7a0b\u670d\u52a1\u5668\u83b7\u53d6\u8d44\u6e90\uff0c\u4e0d\u67e5\u770b\u7f13\u5b58\uff0c\u7136\u540e\u4f7f\u7528\u4e0b\u8f7d\u7684\u8d44\u6e90\u66f4\u65b0\u7f13\u5b58")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"force-cache"),(0,l.kt)("td",{parentName:"tr",align:null},"\u6d4f\u89c8\u5668\u5728\u5176HTTP\u7f13\u5b58\u4e2d\u5bfb\u627e\u5339\u914d\u7684\u8bf7\u6c42")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"only-if-cached"),(0,l.kt)("td",{parentName:"tr",align:null},"\u6d4f\u89c8\u5668\u5728\u5176HTTP\u7f13\u5b58\u4e2d\u5bfb\u627e\u5339\u914d\u7684\u8bf7\u6c42")))),(0,l.kt)("h2",{id:"\u793a\u4f8b\u4ee3\u7801"},"\u793a\u4f8b\u4ee3\u7801"),(0,l.kt)("h3",{id:"\u793a\u4f8b-1"},"\u793a\u4f8b 1"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-tsx"},"Taro.request({\n  url: 'test.php', //\u4ec5\u4e3a\u793a\u4f8b\uff0c\u5e76\u975e\u771f\u5b9e\u7684\u63a5\u53e3\u5730\u5740\n  data: {\n    x: '',\n    y: ''\n  },\n  header: {\n    'content-type': 'application/json' // \u9ed8\u8ba4\u503c\n  },\n  success: function (res) {\n    console.log(res.data)\n  }\n})\n")),(0,l.kt)("h3",{id:"\u793a\u4f8b-2"},"\u793a\u4f8b 2"),(0,l.kt)("p",null,"async/await \u7528\u6cd5\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-tsx"},"const res = await Taro.request(params)\n")))}N.isMDXComponent=!0},44090:function(t,e,n){e.Z=n.p+"assets/images/alipay-ee5545de747ce1ad6e17faec10358975.png"},5030:function(t,e,n){e.Z=n.p+"assets/images/h5-81f73c447874b6528e84ee395bece16e.png"},82626:function(t,e,n){e.Z=n.p+"assets/images/qq-3f77e6fbb490848ab8aa8183e9399110.png"},73555:function(t,e,n){e.Z=n.p+"assets/images/rn-ecec68ba194e4b5e9fc3e853cc00c569.png"},94882:function(t,e,n){e.Z=n.p+"assets/images/swan-566f56d360909d0457073b67b8f48958.png"},62286:function(t,e,n){e.Z=n.p+"assets/images/tt-f4ec120e570f924e7ef763dcaf7fc69d.png"},16710:function(t,e,n){e.Z=n.p+"assets/images/weapp-0e8fbe2d5eb3676de4961b54ee7f5ba4.png"}}]);