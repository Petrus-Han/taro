"use strict";(self.webpackChunktaro_docs=self.webpackChunktaro_docs||[]).push([[78265],{3905:function(t,e,n){n.d(e,{Zo:function(){return o},kt:function(){return N}});var a=n(67294);function r(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function l(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,a)}return n}function i(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?l(Object(n),!0).forEach((function(e){r(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function p(t,e){if(null==t)return{};var n,a,r=function(t,e){if(null==t)return{};var n,a,r={},l=Object.keys(t);for(a=0;a<l.length;a++)n=l[a],e.indexOf(n)>=0||(r[n]=t[n]);return r}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(a=0;a<l.length;a++)n=l[a],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(r[n]=t[n])}return r}var d=a.createContext({}),m=function(t){var e=a.useContext(d),n=e;return t&&(n="function"==typeof t?t(e):i(i({},e),t)),n},o=function(t){var e=m(t.components);return a.createElement(d.Provider,{value:e},t.children)},c={inlineCode:"code",wrapper:function(t){var e=t.children;return a.createElement(a.Fragment,{},e)}},k=a.forwardRef((function(t,e){var n=t.components,r=t.mdxType,l=t.originalType,d=t.parentName,o=p(t,["components","mdxType","originalType","parentName"]),k=m(n),N=r,u=k["".concat(d,".").concat(N)]||k[N]||c[N]||l;return n?a.createElement(u,i(i({ref:e},o),{},{components:n})):a.createElement(u,i({ref:e},o))}));function N(t,e){var n=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var l=n.length,i=new Array(l);i[0]=k;var p={};for(var d in e)hasOwnProperty.call(e,d)&&(p[d]=e[d]);p.originalType=t,p.mdxType="string"==typeof t?t:r,i[1]=p;for(var m=2;m<l;m++)i[m]=n[m];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}k.displayName="MDXCreateElement"},58215:function(t,e,n){var a=n(67294);e.Z=function(t){var e=t.children,n=t.hidden,r=t.className;return a.createElement("div",{role:"tabpanel",hidden:n,className:r},e)}},55064:function(t,e,n){n.d(e,{Z:function(){return k}});var a=n(83117),r=n(67294),l=n(72389),i=n(79443);var p=function(){var t=(0,r.useContext)(i.Z);if(null==t)throw new Error('"useUserPreferencesContext" is used outside of "Layout" component.');return t},d=n(83039),m=n(86010),o="tabItem_1uMI";function c(t){var e,n,a,l=t.lazy,i=t.block,c=t.defaultValue,k=t.values,N=t.groupId,u=t.className,g=r.Children.map(t.children,(function(t){if((0,r.isValidElement)(t)&&void 0!==t.props.value)return t;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof t.type?t.type:t.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),s=null!=k?k:g.map((function(t){var e=t.props;return{value:e.value,label:e.label}})),b=(0,d.lx)(s,(function(t,e){return t.value===e.value}));if(b.length>0)throw new Error('Docusaurus error: Duplicate values "'+b.map((function(t){return t.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.');var v=null===c?c:null!=(e=null!=c?c:null==(n=g.find((function(t){return t.props.default})))?void 0:n.props.value)?e:null==(a=g[0])?void 0:a.props.value;if(null!==v&&!s.some((function(t){return t.value===v})))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+v+'" but none of its children has the corresponding value. Available values are: '+s.map((function(t){return t.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");var f=p(),h=f.tabGroupChoices,y=f.setTabGroupChoices,w=(0,r.useState)(v),C=w[0],x=w[1],S=[],T=(0,d.o5)().blockElementScrollPositionUntilNextRender;if(null!=N){var P=h[N];null!=P&&P!==C&&s.some((function(t){return t.value===P}))&&x(P)}var E=function(t){var e=t.currentTarget,n=S.indexOf(e),a=s[n].value;a!==C&&(T(e),x(a),null!=N&&y(N,a))},I=function(t){var e,n=null;switch(t.key){case"ArrowRight":var a=S.indexOf(t.currentTarget)+1;n=S[a]||S[0];break;case"ArrowLeft":var r=S.indexOf(t.currentTarget)-1;n=S[r]||S[S.length-1]}null==(e=n)||e.focus()};return r.createElement("div",{className:"tabs-container"},r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,m.Z)("tabs",{"tabs--block":i},u)},s.map((function(t){var e=t.value,n=t.label;return r.createElement("li",{role:"tab",tabIndex:C===e?0:-1,"aria-selected":C===e,className:(0,m.Z)("tabs__item",o,{"tabs__item--active":C===e}),key:e,ref:function(t){return S.push(t)},onKeyDown:I,onFocus:E,onClick:E},null!=n?n:e)}))),l?(0,r.cloneElement)(g.filter((function(t){return t.props.value===C}))[0],{className:"margin-vert--md"}):r.createElement("div",{className:"margin-vert--md"},g.map((function(t,e){return(0,r.cloneElement)(t,{key:e,hidden:t.props.value!==C})}))))}function k(t){var e=(0,l.Z)();return r.createElement(c,(0,a.Z)({key:String(e)},t))}},79443:function(t,e,n){var a=(0,n(67294).createContext)(void 0);e.Z=a},94778:function(t,e,n){n.r(e),n.d(e,{frontMatter:function(){return m},contentTitle:function(){return o},metadata:function(){return c},toc:function(){return k},default:function(){return u}});var a=n(83117),r=n(80102),l=(n(67294),n(3905)),i=n(55064),p=n(58215),d=["components"],m={title:"Swiper",sidebar_label:"Swiper"},o=void 0,c={unversionedId:"components/viewContainer/swiper",id:"version-3.x/components/viewContainer/swiper",isDocsHomePage:!1,title:"Swiper",description:"\u6ed1\u5757\u89c6\u56fe\u5bb9\u5668\u3002\u5176\u4e2d\u53ea\u53ef\u653e\u7f6e swiper-item \u7ec4\u4ef6\uff0c\u5426\u5219\u4f1a\u5bfc\u81f4\u672a\u5b9a\u4e49\u7684\u884c\u4e3a\u3002",source:"@site/versioned_docs/version-3.x/components/viewContainer/swiper.md",sourceDirName:"components/viewContainer",slug:"/components/viewContainer/swiper",permalink:"/taro/docs/components/viewContainer/swiper",editUrl:"https://github.com/nervjs/taro/edit/docs/versioned_docs/version-3.x/components/viewContainer/swiper.md",tags:[],version:"3.x",frontMatter:{title:"Swiper",sidebar_label:"Swiper"},sidebar:"version-3.x/components",previous:{title:"ScrollView",permalink:"/taro/docs/components/viewContainer/scroll-view"},next:{title:"SwiperItem",permalink:"/taro/docs/components/viewContainer/swiper-item"}},k=[{value:"\u7c7b\u578b",id:"\u7c7b\u578b",children:[],level:2},{value:"\u793a\u4f8b\u4ee3\u7801",id:"\u793a\u4f8b\u4ee3\u7801",children:[],level:2},{value:"SwiperProps",id:"swiperprops",children:[{value:"API \u652f\u6301\u5ea6",id:"api-\u652f\u6301\u5ea6",children:[],level:3},{value:"TChangeSource",id:"tchangesource",children:[],level:3},{value:"TEasingFunction",id:"teasingfunction",children:[],level:3},{value:"onChangeEventDetail",id:"onchangeeventdetail",children:[],level:3},{value:"onTransitionEventDetail",id:"ontransitioneventdetail",children:[],level:3}],level:2}],N={toc:k};function u(t){var e=t.components,m=(0,r.Z)(t,d);return(0,l.kt)("wrapper",(0,a.Z)({},N,m,{components:e,mdxType:"MDXLayout"}),(0,l.kt)("p",null,"\u6ed1\u5757\u89c6\u56fe\u5bb9\u5668\u3002\u5176\u4e2d\u53ea\u53ef\u653e\u7f6e swiper-item \u7ec4\u4ef6\uff0c\u5426\u5219\u4f1a\u5bfc\u81f4\u672a\u5b9a\u4e49\u7684\u884c\u4e3a\u3002"),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"\u4e0d\u8981\u4e3a ",(0,l.kt)("inlineCode",{parentName:"p"},"SwiperItem")," \u8bbe\u7f6e ",(0,l.kt)("strong",{parentName:"p"},"style")," \u5c5e\u6027\uff0c\u53ef\u4ee5\u901a\u8fc7 class \u8bbe\u7f6e\u6837\u5f0f\u3002",(0,l.kt)("a",{parentName:"p",href:"https://github.com/NervJS/taro/issues/7147"},"7147"))),(0,l.kt)("p",null,"\u652f\u6301\u60c5\u51b5\uff1a",(0,l.kt)("img",{title:"\u5fae\u4fe1\u5c0f\u7a0b\u5e8f",src:n(16710).Z,className:"icon_platform",width:"25px"})," ",(0,l.kt)("img",{title:"\u767e\u5ea6\u5c0f\u7a0b\u5e8f",src:n(94882).Z,className:"icon_platform",width:"25px"})," ",(0,l.kt)("img",{title:"\u652f\u4ed8\u5b9d\u5c0f\u7a0b\u5e8f",src:n(44090).Z,className:"icon_platform",width:"25px"})," ",(0,l.kt)("img",{title:"\u5b57\u8282\u8df3\u52a8\u5c0f\u7a0b\u5e8f",src:n(62286).Z,className:"icon_platform",width:"25px"})," ",(0,l.kt)("img",{title:"H5",src:n(5030).Z,className:"icon_platform",width:"25px"})," ",(0,l.kt)("img",{title:"React Native",src:n(73555).Z,className:"icon_platform",width:"25px"})),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},(0,l.kt)("a",{parentName:"p",href:"https://developers.weixin.qq.com/miniprogram/dev/component/swiper.html"},"\u53c2\u8003\u6587\u6863"))),(0,l.kt)("h2",{id:"\u7c7b\u578b"},"\u7c7b\u578b"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-tsx"},"ComponentType<SwiperProps>\n")),(0,l.kt)("h2",{id:"\u793a\u4f8b\u4ee3\u7801"},"\u793a\u4f8b\u4ee3\u7801"),(0,l.kt)(i.Z,{defaultValue:"React",values:[{label:"React",value:"React"},{label:"Vue",value:"Vue"}],mdxType:"Tabs"},(0,l.kt)(p.Z,{value:"React",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-tsx"},"class App extends Component {\n  render () {\n    return (\n      <Swiper\n        className='test-h'\n        indicatorColor='#999'\n        indicatorActiveColor='#333'\n        vertical\n        circular\n        indicatorDots\n        autoplay>\n        <SwiperItem>\n          <View className='demo-text-1'>1</View>\n        </SwiperItem>\n        <SwiperItem>\n          <View className='demo-text-2'>2</View>\n        </SwiperItem>\n        <SwiperItem>\n          <View className='demo-text-3'>3</View>\n        </SwiperItem>\n      </Swiper>\n    )\n  }\n}\n"))),(0,l.kt)(p.Z,{value:"Vue",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-html"},"<template>\n  <swiper\n    class='test-h'\n    indicator-color='#999'\n    indicator-active-color='#333'\n    :vertical=\"true\"\n    :circular=\"true\"\n    :indicator-dots=\"true\"\n    :autoplay=\"true\"\n  >\n    <swiper-item>\n      <view class='demo-text-1'>1</view>\n    </swiper-item>\n    <swiper-item>\n      <view class='demo-text-2'>2</view>\n    </swiper-item>\n    <swiper-item>\n      <view class='demo-text-3'>3</view>\n    </swiper-item>\n  </swiper>\n</template>\n")))),(0,l.kt)("h2",{id:"swiperprops"},"SwiperProps"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"\u53c2\u6570"),(0,l.kt)("th",{parentName:"tr",align:null},"\u7c7b\u578b"),(0,l.kt)("th",{parentName:"tr",align:"center"},"\u9ed8\u8ba4\u503c"),(0,l.kt)("th",{parentName:"tr",align:"center"},"\u5fc5\u586b"),(0,l.kt)("th",{parentName:"tr",align:null},"\u8bf4\u660e"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"indicatorDots"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"boolean")),(0,l.kt)("td",{parentName:"tr",align:"center"},(0,l.kt)("inlineCode",{parentName:"td"},"false")),(0,l.kt)("td",{parentName:"tr",align:"center"},"\u5426"),(0,l.kt)("td",{parentName:"tr",align:null},"\u662f\u5426\u663e\u793a\u9762\u677f\u6307\u793a\u70b9")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"indicatorColor"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"string")),(0,l.kt)("td",{parentName:"tr",align:"center"},(0,l.kt)("inlineCode",{parentName:"td"},'"rgba(0, 0, 0, .3)"')),(0,l.kt)("td",{parentName:"tr",align:"center"},"\u5426"),(0,l.kt)("td",{parentName:"tr",align:null},"\u6307\u793a\u70b9\u989c\u8272")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"indicatorActiveColor"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"string")),(0,l.kt)("td",{parentName:"tr",align:"center"},(0,l.kt)("inlineCode",{parentName:"td"},'"#000000"')),(0,l.kt)("td",{parentName:"tr",align:"center"},"\u5426"),(0,l.kt)("td",{parentName:"tr",align:null},"\u5f53\u524d\u9009\u4e2d\u7684\u6307\u793a\u70b9\u989c\u8272")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"autoplay"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"boolean")),(0,l.kt)("td",{parentName:"tr",align:"center"},(0,l.kt)("inlineCode",{parentName:"td"},"false")),(0,l.kt)("td",{parentName:"tr",align:"center"},"\u5426"),(0,l.kt)("td",{parentName:"tr",align:null},"\u662f\u5426\u81ea\u52a8\u5207\u6362")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"current"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"number")),(0,l.kt)("td",{parentName:"tr",align:"center"},(0,l.kt)("inlineCode",{parentName:"td"},"0")),(0,l.kt)("td",{parentName:"tr",align:"center"},"\u5426"),(0,l.kt)("td",{parentName:"tr",align:null},"\u5f53\u524d\u6240\u5728\u6ed1\u5757\u7684 index")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"currentItemId"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"string")),(0,l.kt)("td",{parentName:"tr",align:"center"},(0,l.kt)("inlineCode",{parentName:"td"},'""')),(0,l.kt)("td",{parentName:"tr",align:"center"},"\u5426"),(0,l.kt)("td",{parentName:"tr",align:null},"\u5f53\u524d\u6240\u5728\u6ed1\u5757\u7684 item-id \uff0c\u4e0d\u80fd\u4e0e current \u88ab\u540c\u65f6\u6307\u5b9a")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"interval"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"number")),(0,l.kt)("td",{parentName:"tr",align:"center"},(0,l.kt)("inlineCode",{parentName:"td"},"5000")),(0,l.kt)("td",{parentName:"tr",align:"center"},"\u5426"),(0,l.kt)("td",{parentName:"tr",align:null},"\u81ea\u52a8\u5207\u6362\u65f6\u95f4\u95f4\u9694")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"duration"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"number")),(0,l.kt)("td",{parentName:"tr",align:"center"},(0,l.kt)("inlineCode",{parentName:"td"},"500")),(0,l.kt)("td",{parentName:"tr",align:"center"},"\u5426"),(0,l.kt)("td",{parentName:"tr",align:null},"\u6ed1\u52a8\u52a8\u753b\u65f6\u957f")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"circular"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"boolean")),(0,l.kt)("td",{parentName:"tr",align:"center"},(0,l.kt)("inlineCode",{parentName:"td"},"false")),(0,l.kt)("td",{parentName:"tr",align:"center"},"\u5426"),(0,l.kt)("td",{parentName:"tr",align:null},"\u662f\u5426\u91c7\u7528\u8854\u63a5\u6ed1\u52a8")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"vertical"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"boolean")),(0,l.kt)("td",{parentName:"tr",align:"center"},(0,l.kt)("inlineCode",{parentName:"td"},"false")),(0,l.kt)("td",{parentName:"tr",align:"center"},"\u5426"),(0,l.kt)("td",{parentName:"tr",align:null},"\u6ed1\u52a8\u65b9\u5411\u662f\u5426\u4e3a\u7eb5\u5411")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"previousMargin"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"string")),(0,l.kt)("td",{parentName:"tr",align:"center"},(0,l.kt)("inlineCode",{parentName:"td"},'"0px"')),(0,l.kt)("td",{parentName:"tr",align:"center"},"\u5426"),(0,l.kt)("td",{parentName:"tr",align:null},"\u524d\u8fb9\u8ddd\uff0c\u53ef\u7528\u4e8e\u9732\u51fa\u524d\u4e00\u9879\u7684\u4e00\u5c0f\u90e8\u5206\uff0c\u63a5\u53d7 px \u548c rpx \u503c")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"nextMargin"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"string")),(0,l.kt)("td",{parentName:"tr",align:"center"},(0,l.kt)("inlineCode",{parentName:"td"},'"0px"')),(0,l.kt)("td",{parentName:"tr",align:"center"},"\u5426"),(0,l.kt)("td",{parentName:"tr",align:null},"\u540e\u8fb9\u8ddd\uff0c\u53ef\u7528\u4e8e\u9732\u51fa\u540e\u4e00\u9879\u7684\u4e00\u5c0f\u90e8\u5206\uff0c\u63a5\u53d7 px \u548c rpx \u503c")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"snapToEdge"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"boolean")),(0,l.kt)("td",{parentName:"tr",align:"center"},(0,l.kt)("inlineCode",{parentName:"td"},"false")),(0,l.kt)("td",{parentName:"tr",align:"center"},"\u5426"),(0,l.kt)("td",{parentName:"tr",align:null},"\u5f53 swiper-item \u7684\u4e2a\u6570\u5927\u4e8e\u7b49\u4e8e 2\uff0c\u5173\u95ed circular \u5e76\u4e14\u5f00\u542f previous-margin \u6216 next-margin \u7684\u65f6\u5019\uff0c\u53ef\u4ee5\u6307\u5b9a\u8fd9\u4e2a\u8fb9\u8ddd\u662f\u5426\u5e94\u7528\u5230\u7b2c\u4e00\u4e2a\u3001\u6700\u540e\u4e00\u4e2a\u5143\u7d20")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"displayMultipleItems"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"number")),(0,l.kt)("td",{parentName:"tr",align:"center"},(0,l.kt)("inlineCode",{parentName:"td"},"1")),(0,l.kt)("td",{parentName:"tr",align:"center"},"\u5426"),(0,l.kt)("td",{parentName:"tr",align:null},"\u540c\u65f6\u663e\u793a\u7684\u6ed1\u5757\u6570\u91cf")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"skipHiddenItemLayout"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"boolean")),(0,l.kt)("td",{parentName:"tr",align:"center"},(0,l.kt)("inlineCode",{parentName:"td"},"false")),(0,l.kt)("td",{parentName:"tr",align:"center"},"\u5426"),(0,l.kt)("td",{parentName:"tr",align:null},"\u662f\u5426\u8df3\u8fc7\u672a\u663e\u793a\u7684\u6ed1\u5757\u5e03\u5c40\uff0c\u8bbe\u4e3a true \u53ef\u4f18\u5316\u590d\u6742\u60c5\u51b5\u4e0b\u7684\u6ed1\u52a8\u6027\u80fd\uff0c\u4f46\u4f1a\u4e22\u5931\u9690\u85cf\u72b6\u6001\u6ed1\u5757\u7684\u5e03\u5c40\u4fe1\u606f")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"easingFunction"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"keyof TEasingFunction")),(0,l.kt)("td",{parentName:"tr",align:"center"},(0,l.kt)("inlineCode",{parentName:"td"},'"default"')),(0,l.kt)("td",{parentName:"tr",align:"center"},"\u5426"),(0,l.kt)("td",{parentName:"tr",align:null},"\u6307\u5b9a swiper \u5207\u6362\u7f13\u52a8\u52a8\u753b\u7c7b\u578b")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"onChange"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"CommonEventFunction<onChangeEventDetail>")),(0,l.kt)("td",{parentName:"tr",align:"center"}),(0,l.kt)("td",{parentName:"tr",align:"center"},"\u5426"),(0,l.kt)("td",{parentName:"tr",align:null},"current \u6539\u53d8\u65f6\u4f1a\u89e6\u53d1 change \u4e8b\u4ef6")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"onTransition"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"CommonEventFunction<onTransitionEventDetail>")),(0,l.kt)("td",{parentName:"tr",align:"center"}),(0,l.kt)("td",{parentName:"tr",align:"center"},"\u5426"),(0,l.kt)("td",{parentName:"tr",align:null},"swiper-item \u7684\u4f4d\u7f6e\u53d1\u751f\u6539\u53d8\u65f6\u4f1a\u89e6\u53d1 transition \u4e8b\u4ef6")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"onAnimationFinish"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"CommonEventFunction<onChangeEventDetail>")),(0,l.kt)("td",{parentName:"tr",align:"center"}),(0,l.kt)("td",{parentName:"tr",align:"center"},"\u5426"),(0,l.kt)("td",{parentName:"tr",align:null},"\u52a8\u753b\u7ed3\u675f\u65f6\u4f1a\u89e6\u53d1 animationfinish \u4e8b\u4ef6")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"disableTouch"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"boolean")),(0,l.kt)("td",{parentName:"tr",align:"center"},(0,l.kt)("inlineCode",{parentName:"td"},"false")),(0,l.kt)("td",{parentName:"tr",align:"center"},"\u5426"),(0,l.kt)("td",{parentName:"tr",align:null},"\u662f\u5426\u7981\u6b62\u7528\u6237 touch \u64cd\u4f5c")))),(0,l.kt)("h3",{id:"api-\u652f\u6301\u5ea6"},"API \u652f\u6301\u5ea6"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"center"},"API"),(0,l.kt)("th",{parentName:"tr",align:"center"},"\u5fae\u4fe1\u5c0f\u7a0b\u5e8f"),(0,l.kt)("th",{parentName:"tr",align:"center"},"\u767e\u5ea6\u5c0f\u7a0b\u5e8f"),(0,l.kt)("th",{parentName:"tr",align:"center"},"\u652f\u4ed8\u5b9d\u5c0f\u7a0b\u5e8f"),(0,l.kt)("th",{parentName:"tr",align:"center"},"\u5b57\u8282\u8df3\u52a8\u5c0f\u7a0b\u5e8f"),(0,l.kt)("th",{parentName:"tr",align:"center"},"H5"),(0,l.kt)("th",{parentName:"tr",align:"center"},"React Native"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"center"},"SwiperProps.indicatorDots"),(0,l.kt)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),(0,l.kt)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),(0,l.kt)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),(0,l.kt)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),(0,l.kt)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),(0,l.kt)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"center"},"SwiperProps.indicatorColor"),(0,l.kt)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),(0,l.kt)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),(0,l.kt)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),(0,l.kt)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),(0,l.kt)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),(0,l.kt)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"center"},"SwiperProps.indicatorActiveColor"),(0,l.kt)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),(0,l.kt)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),(0,l.kt)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),(0,l.kt)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),(0,l.kt)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),(0,l.kt)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"center"},"SwiperProps.autoplay"),(0,l.kt)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),(0,l.kt)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),(0,l.kt)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),(0,l.kt)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),(0,l.kt)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),(0,l.kt)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"center"},"SwiperProps.current"),(0,l.kt)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),(0,l.kt)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),(0,l.kt)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),(0,l.kt)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),(0,l.kt)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),(0,l.kt)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"center"},"SwiperProps.interval"),(0,l.kt)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),(0,l.kt)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),(0,l.kt)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),(0,l.kt)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),(0,l.kt)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),(0,l.kt)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"center"},"SwiperProps.duration"),(0,l.kt)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),(0,l.kt)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),(0,l.kt)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),(0,l.kt)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),(0,l.kt)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),(0,l.kt)("td",{parentName:"tr",align:"center"})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"center"},"SwiperProps.circular"),(0,l.kt)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),(0,l.kt)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),(0,l.kt)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),(0,l.kt)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),(0,l.kt)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),(0,l.kt)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"center"},"SwiperProps.vertical"),(0,l.kt)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),(0,l.kt)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),(0,l.kt)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),(0,l.kt)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),(0,l.kt)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),(0,l.kt)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"center"},"SwiperProps.previousMargin"),(0,l.kt)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),(0,l.kt)("td",{parentName:"tr",align:"center"}),(0,l.kt)("td",{parentName:"tr",align:"center"}),(0,l.kt)("td",{parentName:"tr",align:"center"}),(0,l.kt)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),(0,l.kt)("td",{parentName:"tr",align:"center"})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"center"},"SwiperProps.nextMargin"),(0,l.kt)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),(0,l.kt)("td",{parentName:"tr",align:"center"}),(0,l.kt)("td",{parentName:"tr",align:"center"}),(0,l.kt)("td",{parentName:"tr",align:"center"}),(0,l.kt)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),(0,l.kt)("td",{parentName:"tr",align:"center"})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"center"},"SwiperProps.snapToEdge"),(0,l.kt)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),(0,l.kt)("td",{parentName:"tr",align:"center"}),(0,l.kt)("td",{parentName:"tr",align:"center"}),(0,l.kt)("td",{parentName:"tr",align:"center"}),(0,l.kt)("td",{parentName:"tr",align:"center"}),(0,l.kt)("td",{parentName:"tr",align:"center"})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"center"},"SwiperProps.displayMultipleItems"),(0,l.kt)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),(0,l.kt)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),(0,l.kt)("td",{parentName:"tr",align:"center"}),(0,l.kt)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),(0,l.kt)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),(0,l.kt)("td",{parentName:"tr",align:"center"})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"center"},"SwiperProps.skipHiddenItemLayout"),(0,l.kt)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),(0,l.kt)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),(0,l.kt)("td",{parentName:"tr",align:"center"}),(0,l.kt)("td",{parentName:"tr",align:"center"}),(0,l.kt)("td",{parentName:"tr",align:"center"}),(0,l.kt)("td",{parentName:"tr",align:"center"})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"center"},"SwiperProps.easingFunction"),(0,l.kt)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),(0,l.kt)("td",{parentName:"tr",align:"center"}),(0,l.kt)("td",{parentName:"tr",align:"center"}),(0,l.kt)("td",{parentName:"tr",align:"center"}),(0,l.kt)("td",{parentName:"tr",align:"center"}),(0,l.kt)("td",{parentName:"tr",align:"center"})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"center"},"SwiperProps.onChange"),(0,l.kt)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),(0,l.kt)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),(0,l.kt)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),(0,l.kt)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),(0,l.kt)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),(0,l.kt)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"center"},"SwiperProps.onTransition"),(0,l.kt)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),(0,l.kt)("td",{parentName:"tr",align:"center"}),(0,l.kt)("td",{parentName:"tr",align:"center"}),(0,l.kt)("td",{parentName:"tr",align:"center"}),(0,l.kt)("td",{parentName:"tr",align:"center"}),(0,l.kt)("td",{parentName:"tr",align:"center"})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"center"},"SwiperProps.onAnimationFinish"),(0,l.kt)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),(0,l.kt)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),(0,l.kt)("td",{parentName:"tr",align:"center"}),(0,l.kt)("td",{parentName:"tr",align:"center"}),(0,l.kt)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),(0,l.kt)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"center"},"SwiperProps.disableTouch"),(0,l.kt)("td",{parentName:"tr",align:"center"}),(0,l.kt)("td",{parentName:"tr",align:"center"}),(0,l.kt)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),(0,l.kt)("td",{parentName:"tr",align:"center"}),(0,l.kt)("td",{parentName:"tr",align:"center"}),(0,l.kt)("td",{parentName:"tr",align:"center"})))),(0,l.kt)("h3",{id:"tchangesource"},"TChangeSource"),(0,l.kt)("p",null,"\u5bfc\u81f4\u53d8\u66f4\u7684\u539f\u56e0"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"\u53c2\u6570"),(0,l.kt)("th",{parentName:"tr",align:null},"\u8bf4\u660e"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"autoplay"),(0,l.kt)("td",{parentName:"tr",align:null},"\u81ea\u52a8\u64ad\u653e")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"touch"),(0,l.kt)("td",{parentName:"tr",align:null},"\u7528\u6237\u5212\u52a8")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"\u5176\u5b83\u539f\u56e0")))),(0,l.kt)("h3",{id:"teasingfunction"},"TEasingFunction"),(0,l.kt)("p",null,"\u6307\u5b9a swiper \u5207\u6362\u7f13\u52a8\u52a8\u753b\u7c7b\u578b"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"\u53c2\u6570"),(0,l.kt)("th",{parentName:"tr",align:null},"\u8bf4\u660e"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"default"),(0,l.kt)("td",{parentName:"tr",align:null},"\u9ed8\u8ba4\u7f13\u52a8\u51fd\u6570")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"linear"),(0,l.kt)("td",{parentName:"tr",align:null},"\u7ebf\u6027\u52a8\u753b")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"easeInCubic"),(0,l.kt)("td",{parentName:"tr",align:null},"\u7f13\u5165\u52a8\u753b")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"easeOutCubic"),(0,l.kt)("td",{parentName:"tr",align:null},"\u7f13\u51fa\u52a8\u753b")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"easeInOutCubic"),(0,l.kt)("td",{parentName:"tr",align:null},"\u7f13\u5165\u7f13\u51fa\u52a8\u753b")))),(0,l.kt)("h3",{id:"onchangeeventdetail"},"onChangeEventDetail"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"\u53c2\u6570"),(0,l.kt)("th",{parentName:"tr",align:null},"\u7c7b\u578b"),(0,l.kt)("th",{parentName:"tr",align:"center"},"\u5fc5\u586b"),(0,l.kt)("th",{parentName:"tr",align:null},"\u8bf4\u660e"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"current"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"number")),(0,l.kt)("td",{parentName:"tr",align:"center"},"\u662f"),(0,l.kt)("td",{parentName:"tr",align:null},"\u5f53\u524d\u6240\u5728\u6ed1\u5757\u7684\u7d22\u5f15")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"source"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"keyof TChangeSource")),(0,l.kt)("td",{parentName:"tr",align:"center"},"\u662f"),(0,l.kt)("td",{parentName:"tr",align:null},"\u5bfc\u81f4\u53d8\u66f4\u7684\u539f\u56e0")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"currentItemId"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"string")),(0,l.kt)("td",{parentName:"tr",align:"center"},"\u5426"),(0,l.kt)("td",{parentName:"tr",align:null},"SwiperItem\u7684itemId\u53c2\u6570\u503c")))),(0,l.kt)("h3",{id:"ontransitioneventdetail"},"onTransitionEventDetail"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"\u53c2\u6570"),(0,l.kt)("th",{parentName:"tr",align:null},"\u7c7b\u578b"),(0,l.kt)("th",{parentName:"tr",align:null},"\u8bf4\u660e"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"dx"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"number")),(0,l.kt)("td",{parentName:"tr",align:null},"X \u5750\u6807")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"dy"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"number")),(0,l.kt)("td",{parentName:"tr",align:null},"Y \u5750\u6807")))))}u.isMDXComponent=!0},44090:function(t,e,n){e.Z=n.p+"assets/images/alipay-ee5545de747ce1ad6e17faec10358975.png"},5030:function(t,e,n){e.Z=n.p+"assets/images/h5-81f73c447874b6528e84ee395bece16e.png"},73555:function(t,e,n){e.Z=n.p+"assets/images/rn-ecec68ba194e4b5e9fc3e853cc00c569.png"},94882:function(t,e,n){e.Z=n.p+"assets/images/swan-566f56d360909d0457073b67b8f48958.png"},62286:function(t,e,n){e.Z=n.p+"assets/images/tt-f4ec120e570f924e7ef763dcaf7fc69d.png"},16710:function(t,e,n){e.Z=n.p+"assets/images/weapp-0e8fbe2d5eb3676de4961b54ee7f5ba4.png"}}]);