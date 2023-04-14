"use strict";(self.webpackChunkrealsee_developer_github_com=self.webpackChunkrealsee_developer_github_com||[]).push([[7812],{49613:(e,t,n)=>{n.d(t,{Zo:()=>m,kt:()=>u});var a=n(59496);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var o=a.createContext({}),k=function(e){var t=a.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},m=function(e){var t=k(e.components);return a.createElement(o.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},s=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,o=e.parentName,m=p(e,["components","mdxType","originalType","parentName"]),s=k(n),u=r,N=s["".concat(o,".").concat(u)]||s[u]||d[u]||l;return n?a.createElement(N,i(i({ref:t},m),{},{components:n})):a.createElement(N,i({ref:t},m))}));function u(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,i=new Array(l);i[0]=s;var p={};for(var o in t)hasOwnProperty.call(t,o)&&(p[o]=t[o]);p.originalType=e,p.mdxType="string"==typeof e?e:r,i[1]=p;for(var k=2;k<l;k++)i[k]=n[k];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}s.displayName="MDXCreateElement"},25214:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>o,contentTitle:()=>i,default:()=>d,frontMatter:()=>l,metadata:()=>p,toc:()=>k});var a=n(2962),r=(n(59496),n(49613));const l={title:"\u5e26\u770b\u63a7\u5236\u5668"},i=void 0,p={unversionedId:"front/live/preparation/live-controller",id:"front/live/preparation/live-controller",title:"\u5e26\u770b\u63a7\u5236\u5668",description:"\u5e26\u770b\u63a7\u5236\u5668\u8be6\u7ec6\u4ecb\u7ecd\u4e86\u5e26\u770b\u7684\u6d88\u606f\u7cfb\u7edf\u3001\u4e8b\u4ef6\u673a\u5236\uff0c\u4ee5\u53ca\u5e26\u770b\u8bed\u97f3\u534f\u8bae\u3002\u4e86\u89e3\u5e26\u770b\u63a7\u5236\u5668\uff0c\u624d\u80fd\u66f4\u597d\u7684\u5b9e\u8df5\u5e26\u770b\u4e1a\u52a1\u3002",source:"@site/docs/front/live/preparation/3.live-controller.md",sourceDirName:"front/live/preparation",slug:"/front/live/preparation/live-controller",permalink:"/docs/front/live/preparation/live-controller",draft:!1,tags:[],version:"current",lastUpdatedBy:"sansi.lcj",lastUpdatedAt:1669717185,formattedLastUpdatedAt:"2022\u5e7411\u670829\u65e5",sidebarPosition:3,frontMatter:{title:"\u5e26\u770b\u63a7\u5236\u5668"},sidebar:"\u5982\u89c6\u5e26\u770b",previous:{title:"\u540d\u8bcd\u89e3\u91ca",permalink:"/docs/front/live/preparation/terminology"},next:{title:"\u4f9d\u8d56\u5b89\u88c5",permalink:"/docs/front/live/get-started/install"}},o={},k=[{value:"@realsee/live",id:"realseelive",level:2},{value:"\u6d88\u606f\u7cfb\u7edf",id:"\u6d88\u606f\u7cfb\u7edf",level:2},{value:"\u5e27\u6570\u636e\u540c\u6b65",id:"\u5e27\u6570\u636e\u540c\u6b65",level:3},{value:"\u623f\u95f4\u4fe1\u606f",id:"\u623f\u95f4\u4fe1\u606f",level:3},{value:"\u5e7f\u64ad\u6d88\u606f",id:"\u5e7f\u64ad\u6d88\u606f",level:3},{value:"\u4e8b\u4ef6\u673a\u5236",id:"\u4e8b\u4ef6\u673a\u5236",level:2},{value:"WebSocket \u4e8b\u4ef6",id:"websocket-\u4e8b\u4ef6",level:3},{value:"live \u4e8b\u4ef6",id:"live-\u4e8b\u4ef6",level:3},{value:"RTC \u4e8b\u4ef6",id:"rtc-\u4e8b\u4ef6",level:3},{value:"\u5f02\u5e38\u5904\u7406",id:"\u5f02\u5e38\u5904\u7406",level:3},{value:"RTC \u534f\u8bae",id:"rtc-\u534f\u8bae",level:2}],m={toc:k};function d(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("admonition",{type:"tip"},(0,r.kt)("p",{parentName:"admonition"},"\u5e26\u770b\u63a7\u5236\u5668\u8be6\u7ec6\u4ecb\u7ecd\u4e86\u5e26\u770b\u7684\u6d88\u606f\u7cfb\u7edf\u3001\u4e8b\u4ef6\u673a\u5236\uff0c\u4ee5\u53ca\u5e26\u770b\u8bed\u97f3\u534f\u8bae\u3002\u4e86\u89e3\u5e26\u770b\u63a7\u5236\u5668\uff0c\u624d\u80fd\u66f4\u597d\u7684\u5b9e\u8df5\u5e26\u770b\u4e1a\u52a1\u3002")),(0,r.kt)("h2",{id:"realseelive"},"@realsee/live"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://www.npmjs.com/package/@realsee/live"},(0,r.kt)("img",{parentName:"a",src:"https://img.shields.io/npm/v/@realsee/live.svg?style=flat-square&logo=npm&label=npm%20install%20@realsee/live",alt:"npm version"}))),(0,r.kt)("admonition",{type:"info"},(0,r.kt)("p",{parentName:"admonition"},(0,r.kt)("strong",{parentName:"p"},"Live")," \u63a7\u5236\u5668\u662f\u5982\u89c6 ",(0,r.kt)("strong",{parentName:"p"},"\u7ebf\u4e0a\u5e26\u770b")," \u80fd\u529b\u7684\u6d4f\u89c8\u5668\u7aef SDK\uff0c\u9700\u642d\u914d TRTC \u670d\u52a1\u4e00\u8d77\u4f7f\u7528\uff0c\u8d1f\u8d23\u8c03\u5ea6 TRTC \u903b\u8f91\u3002")),(0,r.kt)("h2",{id:"\u6d88\u606f\u7cfb\u7edf"},"\u6d88\u606f\u7cfb\u7edf"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Live")," \u7684\u6838\u5fc3\u804c\u8d23\u662f\u501f\u52a9 WebSocket \u957f\u94fe\u53cc\u5de5\u901a\u4fe1\u80fd\u529b\u5b9e\u73b0\u591a\u7aef\u7528\u6237\u7684\u540c\u5c4f\u8fde\u7ebf\u3002\u7528\u6237\u95f4\u7684\u901a\u4fe1\u90fd\u662f\u57fa\u4e8e WebSocket \u6d88\u606f\u3002"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Live")," \u5c06\u6d88\u606f\u5206\u4e3a",(0,r.kt)("inlineCode",{parentName:"p"},"\u5e27\u6570\u636e"),"\u3001",(0,r.kt)("inlineCode",{parentName:"p"},"\u5e7f\u64ad"),"\u3001",(0,r.kt)("inlineCode",{parentName:"p"},"\u623f\u95f4\u4fe1\u606f"),"\u4e09\u7c7b\u3002\u9488\u5bf9\u6bcf\u4e00\u7c7b\u4fe1\u606f\u63d0\u4f9b\u76f8\u5e94\u7684\u53d1\u9001\u3001\u63a5\u6536 API\uff0c\u66f4\u591a API\n\u7ec6\u8282\u8bf7\u53c2\u8003 ",(0,r.kt)("a",{parentName:"p",href:"https://unpkg.com/@realsee/live/docs/index.html"},"Live API \u6587\u6863")," \u3002"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"\u5e27\u6570\u636e")," \u662f\u8fdb\u884c\u540c\u5c4f\u7684\u4fe1\u606f\u8f7d\u4f53\uff0c\u7531\u7528\u6237\u81ea\u884c\u5b9a\u4e49\u5f53\u524d\u573a\u666f\u4e2d\u54ea\u4e9b\u4fe1\u606f\u7528\u4ee5\u540c\u5c4f\uff0c\u5c06\u8fd9\u4e9b\u4fe1\u606f\u7ec4\u7ec7\u6210 ",(0,r.kt)("inlineCode",{parentName:"p"},"{key: value}")," \u7684\u5f62\u5f0f\u5373\u53ef\u3002"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"\u5e7f\u64ad\u6d88\u606f")," \u7528\u4ee5\u623f\u95f4\u6210\u5458\u4e4b\u95f4\u4ee5\u4e8b\u4ef6\u7684\u5f62\u5f0f\u6307\u5b9a\u67d0\u4e2a\u7528\u6237\u5411\u5176\u53d1\u9001\u81ea\u5b9a\u4e49\u5e7f\u64ad\u6d88\u606f\u3002\u5982\uff1a\u4e3b\u6301\u4eba\u5411\u89c2\u4f17\u53d1\u9001\u95ee\u5019\u6d88\u606f\u3002"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"\u623f\u95f4\u4fe1\u606f")," \u4e3a\u5185\u7f6e\u6d88\u606f\u4f53\uff0c\u7531 WebSocket \u670d\u52a1\u4e3b\u52a8\u63a8\u9001\uff0c\u5305\u62ec\u623f\u95f4\u72b6\u6001\u3001\u5f53\u524d\u7528\u6237\u53ca\u53c2\u4e0e\u7528\u6237\u5217\u8868\u7b49\u3002\u90e8\u5206\u4fe1\u606f\u4e5f\u53ef\u901a\u8fc7 ",(0,r.kt)("strong",{parentName:"p"},"Live")," \u63d0\u4f9b\u7684\u66f4\u65b0\u65b9\u5f0f\u8fdb\u884c\u4fee\u6539\u3002"),(0,r.kt)("h3",{id:"\u5e27\u6570\u636e\u540c\u6b65"},"\u5e27\u6570\u636e\u540c\u6b65"),(0,r.kt)("p",null,"\u5f53\u524d UI \u4ea4\u4e92\u72b6\u6001\u7684\u540c\u6b65\uff1a"),(0,r.kt)("p",null,"\u4ee5 ",(0,r.kt)("a",{parentName:"p",href:"/docs/front/3d-space/intro"},"Five")," \u540c\u5c4f\u4e3a\u4f8b"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},'// \u53d1\u9001\u672c\u5730 \u5e27\u6570\u636e (Five State)\nlive.sendKeyframe("five", { panoIndex: 13 });\n\n// \u63a5\u6536\u8fdc\u7a0b \u5e27\u6570\u636e (Five State)\nlive.keyframes.on("five", (newState, prevState) => {\n  // \u53ef\u4ee5\u62ff\u6700\u65b0\u7684 `newState` \u66f4\u65b0\u672c\u5730 UI \u72b6\u6001\n});\n')),(0,r.kt)("p",null,"\u60a8\u4e5f\u53ef\u4ee5\u901a\u8fc7 ",(0,r.kt)("inlineCode",{parentName:"p"},"live.snapshot"),' \u5c5e\u6027\u6765\u83b7\u53d6\u5f53\u524d\u6240\u6709\u5e8f\u5217\u5e27\u6570\u636e\u7684"\u5feb\u7167"\u3002'),(0,r.kt)("h3",{id:"\u623f\u95f4\u4fe1\u606f"},"\u623f\u95f4\u4fe1\u606f"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Live")," \u6709\u4f1a\u8bdd\u623f\u95f4\u7684\u6982\u5ff5\uff0c\u5f53\u60a8\u6210\u529f\u8fde\u63a5 WebSocket \u670d\u52a1\u4e4b\u540e\u7b49\u540c\u4e8e\u60a8\u4f5c\u4e3a\u4e00\u4e2a\u7528\u6237\u52a0\u5165\u4e86\u4e00\u4e2a\u623f\u95f4\u3002\u6b64\u623f\u95f4\u7528\u6237\u9664\u4e86\u60a8\u4e4b\u5916\u8fd8\u4f1a\u6709\u5176\u4ed6\u7528\u6237\uff0c\u60a8\u53ef\u4ee5\u901a\u8fc7\u5982\u4e0b\u65b9\u5f0f\u83b7\u53d6\u6216\u66f4\u65b0\u7528\u6237\u4fe1\u606f\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},'// \u5c5e\u6027\uff1a\u83b7\u53d6\u672c\u5730\u7528\u6237\u4fe1\u606f\nlive.selfInfo;\n\n// \u5c5e\u6027\uff1a\u83b7\u53d6\u5f53\u524d\u623f\u95f4\u5185\u6240\u6709\u7528\u6237\u5217\u8868\nlive.userList;\n\n// \u65b9\u6cd5\uff1a\u66f4\u65b0\u672c\u5730\u7528\u6237\u4fe1\u606f\nlive.setSelfInfo({});\n\n// \u4e8b\u4ef6\uff1a\u672c\u5730\u7528\u6237\u4fe1\u606f\u53d1\u751f\u53d8\u66f4\nlive.on("selfInfoUpdate", (userInfo) => {});\n\n// \u4e8b\u4ef6\uff1a\u623f\u95f4\u7528\u6237\u5217\u8868\u4fe1\u606f\u53d1\u751f\u53d8\u66f4\nlive.on("userListUpdate", (userList) => {});\n')),(0,r.kt)("h3",{id:"\u5e7f\u64ad\u6d88\u606f"},"\u5e7f\u64ad\u6d88\u606f"),(0,r.kt)("p",null,"\u9664\u4e86\u5e27\u6570\u636e\u548c\u623f\u95f4\u4fe1\u606f\u4e4b\u5916\uff0c\u8fd8\u53ef\u4ee5\u7528\u4e8b\u4ef6\u7684\u5f62\u5f0f\u5411\u623f\u95f4\u5185\u7684\u5176\u4ed6\u7528\u6237\u5e7f\u64ad\u6d88\u606f\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},'live.broadcast(\n  data /* \u5e7f\u64ad\u7684\u6570\u636e */,\n  ["user_id_1", "user_id_2"] /* \u6536\u5230\u6b64\u7528\u6237\u7684userId */\n);\n')),(0,r.kt)("p",null,"\u6b64\u65f6\uff0c\u623f\u95f4\u5185\u7528\u6237 Id \u4e3a ",(0,r.kt)("inlineCode",{parentName:"p"},"user_id_1"),"\u3001",(0,r.kt)("inlineCode",{parentName:"p"},"user_id_2")," \u7684\u7528\u6237\u4f1a\u6536\u5230\u6b64\u5e7f\u64ad\u6d88\u606f\uff08\u5176\u4ed6\u7528\u6237\u65e0\u611f\u77e5\uff09\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},'live.on("broadcast", (data /* \u5e7f\u64ad\u7684\u6570\u636e */) => {});\n')),(0,r.kt)("p",null,"\u66f4\u591a\u7684\u4f8b\u5b50\u8bf7\u67e5\u770b ",(0,r.kt)("a",{parentName:"p",href:"https://unpkg.com/@realsee/live/docs/index.html"},"Live API")," \u6587\u6863 \u3002"),(0,r.kt)("h2",{id:"\u4e8b\u4ef6\u673a\u5236"},"\u4e8b\u4ef6\u673a\u5236"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Live")," \u63d0\u4f9b ",(0,r.kt)("inlineCode",{parentName:"p"},"WebSocket \u4e8b\u4ef6"),"\u3001",(0,r.kt)("inlineCode",{parentName:"p"},"live \u4e8b\u4ef6")," \u548c ",(0,r.kt)("inlineCode",{parentName:"p"},"RTC \u4e8b\u4ef6")," \u4e09\u7c7b\u5f02\u6b65\u4e8b\u4ef6\u7684\u76d1\u542c\u3002"),(0,r.kt)("p",null,"\u5176\u4e2d\uff0c ",(0,r.kt)("inlineCode",{parentName:"p"},"WebSocket \u4e8b\u4ef6"),"\u3001",(0,r.kt)("inlineCode",{parentName:"p"},"live \u4e8b\u4ef6")," \u90fd\u53ef\u4ee5\u901a\u8fc7 ",(0,r.kt)("inlineCode",{parentName:"p"},"live.on('/*\u4e8b\u4ef6\u540d*/', /*\u4e8b\u4ef6\u56de\u8c03*/)")," \u7684\u65b9\u5f0f\u76d1\u542c\u3002"),(0,r.kt)("p",null,"\u6bd4\u5982\u76d1\u542c WebSocket \u72b6\u6001\u53d1\u751f\u53d8\u66f4\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},'live.on("ws.readyStateUpdate", (readyState: WebSocketState) => {\n  console.log(readyState); // readyState \u5373\u662f\u6700\u65b0\u7684 WebScoket \u72b6\u6001\n});\n')),(0,r.kt)("h3",{id:"websocket-\u4e8b\u4ef6"},"WebSocket \u4e8b\u4ef6"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"ws.beforeConnect(reConnect?: number): void")," WebSocket \u5b8c\u6210\u8fde\u63a5\u4e4b\u540e\u3002")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"ws.afterConnect(reConnect?: number): void")," WebSocket \u5b8c\u6210\u8fde\u63a5\u4e4b\u524d\u3002")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"ws.readyStateUpdate(readyState: WebSocketState): void")," WebSocket \u5b8c\u6210\u72b6\u6001\u53d1\u751f\u53d8\u66f4\u3002"))),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"WebSocket \u8fde\u63a5\u72b6\u6001\u679a\u4e3e\u8868\uff1a")),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"\u72b6\u6001\u540d\u79f0"),(0,r.kt)("th",{parentName:"tr",align:null},"\u72b6\u6001\u63cf\u8ff0"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"NOTINITIALIZED"),(0,r.kt)("td",{parentName:"tr",align:null},"\u672a\u88ab\u521d\u59cb\u5316")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"CONNECTING"),(0,r.kt)("td",{parentName:"tr",align:null},"\u6b63\u5728\u8fde\u63a5\u4e2d")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"OPEN"),(0,r.kt)("td",{parentName:"tr",align:null},"\u8fde\u63a5\u6210\u529f")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"CLOSING"),(0,r.kt)("td",{parentName:"tr",align:null},"\u5173\u95ed\u4e2d")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"CLOSED"),(0,r.kt)("td",{parentName:"tr",align:null},"\u5173\u95ed\u6210\u529f")))),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Live")," \u524d\u540e\u7aef\u670d\u52a1\u4ea4\u4e92\u662f\u57fa\u4e8e WebSocket \u957f\u94fe\u63a5\u7684\u3002\u4e00\u6b21\u5e26\u770b\u6210\u529f\u8fdb\u5165\u3001\u9000\u51fa\u7684\u6807\u8bc6\u7531 WebSocket \u7684\u72b6\u6001 ",(0,r.kt)("inlineCode",{parentName:"p"},"OPEN"),"\u3001",(0,r.kt)("inlineCode",{parentName:"p"},"CLOSED"),"\u4f53\u73b0\u3002 \u56e0\u6b64\uff0c\u6240\u6709 ",(0,r.kt)("strong",{parentName:"p"},"VRTC")," \u76f8\u5173\u7684\u4e8b\u4ef6\u5904\u7406\u903b\u8f91\u5e94\u4fdd\u8bc1\u5728",(0,r.kt)("inlineCode",{parentName:"p"},"OPEN"),"\n\u4e8b\u4ef6\u4e4b\u540e\u8fdb\u884c\u3002"),(0,r.kt)("h3",{id:"live-\u4e8b\u4ef6"},"live \u4e8b\u4ef6"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"broadcast(evtMsg: Record<string, any>, frontRequestId: string): void")," \u63a5\u6536\u5176\u4ed6\u7528\u6237\u7684\u5e7f\u64ad\u6d88\u606f\u3002")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"builtinEvent(builtinMsg: BuiltinMsg): void")," \u63a5\u6536\u670d\u52a1\u7aef\u63a8\u9001\u7684\u5185\u7f6e\u4e8b\u4ef6\u6d88\u606f\u3002")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"keyframes(keyframes: Partial<Snapshot>, frontRequestId: string): void")," \u63a5\u6536\u5176\u4ed6\u7528\u6237\u7684\u5e27\u6570\u636e\u3002")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"readyKeyframeSync(lastKeyframe: Partial<Snapshot>): void")," \u8868\u660e\u5e27\u540c\u6b65\u884c\u4e3a\u5df2\u5c31\u7eea\u3002")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"selfInfoUpdate(userInfo: UserInfo, frontRequestId: string): void")," \u81ea\u8eab\u7684\u4fe1\u606f\u53d1\u751f\u53d8\u66f4\u3002")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"userListUpdate(userList: UserInfo[], frontRequestId: string): void")," \u7528\u6237\u5217\u4fe1\u606f\u8868\u53d1\u751f\u53d8\u66f4\u3002"))),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"live")," \u5b9e\u4f8b\u63d0\u4f9b\u4e86\u5f88\u591a\u8bf8\u5982",(0,r.kt)("inlineCode",{parentName:"p"},"live.connect()"),"\u3001",(0,r.kt)("inlineCode",{parentName:"p"},"live.broadcast()"),"\u3001",(0,r.kt)("inlineCode",{parentName:"p"},"live.sendKeyframe()"),"\u7b49\u65b9\u6cd5\uff0c\u8fd9\u4e9b\u65b9\u6cd5\u90fd\u662f\u5f02\u6b65\u53cd\u9988\u4e14\u53ef\u80fd\u4f1a\u5f71\u54cd\u623f\u95f4\u5185\u7684\u5176\u4ed6\u7528\u6237\u3002\n\u60a8\u53ef\u4ee5\u901a\u8fc7\u76d1\u542c\u4ee5\u4e0a\u4e8b\u4ef6\u6765\u83b7\u77e5\u8fd9\u4e9b\u5f71\u54cd\u3002"),(0,r.kt)("p",null,"\u9700\u8981\u6ce8\u610f\u7684\u662f ",(0,r.kt)("inlineCode",{parentName:"p"},"readyKeyframeSync")," \u4e8b\u4ef6\u662f\u53ef\u8fdb\u884c\u5e27\u540c\u6b65\u7684\u8282\u70b9\u6807\u8bc6\uff0c\u6536\u5230\u6b64\u4e8b\u4ef6\u540e\u60a8\u7684\u5e27\u540c\u6b65\u884c\u4e3a\u624d\u751f\u6548\u3002"),(0,r.kt)("h3",{id:"rtc-\u4e8b\u4ef6"},"RTC \u4e8b\u4ef6"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"error(error: Error): void")," \u5f02\u5e38\u4e8b\u4ef6\u3002")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"initWillStart(): void")," \u5373\u5c06\u521d\u59cb\u5316\u4e8b\u4ef6\u3002")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"inited(): void")," \u521d\u59cb\u5316\u5b8c\u6210\u4e8b\u4ef6\u3002")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"joinWillStart(): void")," \u5373\u5c06\u52a0\u5165\u8bed\u97f3\u623f\u95f4\u4e8b\u4ef6\u3002")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"joined(): void")," \u6210\u529f\u52a0\u5165\u8bed\u97f3\u623f\u95f4\u4e8b\u4ef6\u3002")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"userVolumes(userVolumes: UserVolume[]): void")," \u623f\u95f4\u5185\u6bcf\u4e2a\u8bf4\u8bdd\u7528\u6237\u7684\u97f3\u91cf\u3002")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"weakNetwork(): void")," \u5f31\u7f51\u63d0\u9192\u4e8b\u4ef6\u3002"))),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"live.$RTC")," \u5b9e\u4f8b\u9700\u6ee1\u8db3 ","[RTC \u534f\u8bae]","\uff0c\u5176\u4e8b\u4ef6\u901a\u8fc7 ",(0,r.kt)("inlineCode",{parentName:"p"},"live.$RTC.on('/*\u4e8b\u4ef6\u540d*/', /*\u4e8b\u4ef6\u56de\u8c03*/)")," \u65b9\u5f0f\u6765\u76d1\u542c\uff0c\u6bd4\u5982\u76d1\u542c\u8bed\u97f3\u623f\u95f4\u5185\u6b63\u5728\u8bf4\u8bdd\u7684\u7528\u6237\u53ca\u5176\u97f3\u91cf\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},'live.$RTC.on("userVolumes", (userVolumes: UserVolume[]) => {\n  console.log(userVolumes); // userVolumes \u6b63\u5728\u8bf4\u8bdd\u7684\u7528\u6237\u53ca\u5176\u97f3\u91cf\u6570\u636e\u3002\n});\n')),(0,r.kt)("h3",{id:"\u5f02\u5e38\u5904\u7406"},"\u5f02\u5e38\u5904\u7406"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"ws.error(error: WebSocketError): void")," WebSocket \u8fde\u63a5\u51fa\u73b0\u5f02\u5e38\u3002")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"WebSocket \u9519\u8bef\u72b6\u6001\u679a\u4e3e\u8868\uff1a")),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"\u9519\u8bef\u5b57\u6bb5"),(0,r.kt)("th",{parentName:"tr",align:null},"\u9519\u8bef\u63cf\u8ff0"),(0,r.kt)("th",{parentName:"tr",align:null},"\u89e6\u53d1\u573a\u666f"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Close"),(0,r.kt)("td",{parentName:"tr",align:null},"\u9519\u8bef\u7c7b\u578b\u679a\u4e3e\u53c2\u7167",(0,r.kt)("a",{parentName:"td",href:"https://developer.mozilla.org/zh-CN/docs/Web/API/CloseEvent"},"CloseEvent")),(0,r.kt)("td",{parentName:"tr",align:null},"\u9519\u8bef\u539f\u56e0\u53c2\u7167",(0,r.kt)("a",{parentName:"td",href:"https://developer.mozilla.org/zh-CN/docs/Web/API/CloseEvent"},"CloseEvent"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Error"),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"MicroAuth"),(0,r.kt)("td",{parentName:"tr",align:null},"\u9ea6\u514b\u98ce\u6388\u6743\u9519\u8bef"),(0,r.kt)("td",{parentName:"tr",align:null},"\u8bed\u97f3\u529f\u80fd\u83b7\u53d6\u9ea6\u514b\u98ce\u6388\u6743\u5931\u8d25")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"DuplicateConnect"),(0,r.kt)("td",{parentName:"tr",align:null},"\u91cd\u590d\u8fde\u63a5"),(0,r.kt)("td",{parentName:"tr",align:null},"\u4f7f\u7528\u76f8\u540c\u7684 WS \u94fe\u63a5\u7533\u8bf7\u8fde\u63a5")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"IllegalURL"),(0,r.kt)("td",{parentName:"tr",align:null},"\u975e\u6cd5\u7684 WS \u94fe\u63a5"),(0,r.kt)("td",{parentName:"tr",align:null},"\u4f20\u5165\u7684 WS \u94fe\u63a5\u4e0d\u5408\u6cd5")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Unknown"),(0,r.kt)("td",{parentName:"tr",align:null},"\u672a\u77e5\u9519\u8bef"),(0,r.kt)("td",{parentName:"tr",align:null},"\u5176\u4ed6\u672a\u88ab\u679a\u4e3e\u7684\u9519\u8bef\u539f\u6837\u8fd4\u56de")))),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"error(liveMsg: LiveMsg): void")," \u670d\u52a1\u7aef\u63a8\u9001\u51fa\u73b0\u5f02\u5e38\u3002")),(0,r.kt)("p",null,"\u4e0e WebSocket \u901a\u4fe1\u7684\u7ed3\u6784\u4f53",(0,r.kt)("inlineCode",{parentName:"p"},"LiveMsg"),"\u683c\u5f0f\u5982\u4e0b\uff1a"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"\u540d\u79f0"),(0,r.kt)("th",{parentName:"tr",align:null},"\u7c7b\u578b"),(0,r.kt)("th",{parentName:"tr",align:null},"\u63cf\u8ff0"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"appId"),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"code"),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"\u8fd4\u56de\u7801\uff0c\u8be6\u60c5\u53c2\u7167",(0,r.kt)("a",{parentName:"td",href:"https://developers.realsee.com/docs/#/docs/live/server/README"},"\u670d\u52a1\u7aef API Code \u7801\u8868"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"command"),(0,r.kt)("td",{parentName:"tr",align:null},"\u6307\u4ee4"),(0,r.kt)("td",{parentName:"tr",align:null},"WebSocket \u901a\u4fe1\u6307\u4ee4\u7c7b\u578b\uff0c\u8be6\u60c5\u8bf7\u67e5\u770b",(0,r.kt)("a",{parentName:"td",href:"https://unpkg.com/@realsee/live/docs/index.html"},"Live API")," \u6587\u6863")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"data"),(0,r.kt)("td",{parentName:"tr",align:null},"Record<string, any>"),(0,r.kt)("td",{parentName:"tr",align:null},"\u672c\u6761\u6307\u4ee4\u5bf9\u5e94\u7684\u4e1a\u52a1\u6570\u636e")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"frontRequestId:"),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"\u524d\u7aef\u7684\u8bf7\u6c42 ID\uff0c\u7531 WS \u670d\u52a1\u539f\u6837\u900f\u4f20\u56de\u524d\u7aef")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"message"),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"\u8fd4\u56de\u63cf\u8ff0")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"requestId"),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"\u540e\u7aef\u8bf7\u6c42 ID")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"roomCode"),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"\u5e26\u770b\u623f\u95f4\u53f7")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"triggerUserId"),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"\u89e6\u53d1\u6307\u4ee4\u7684\u7528\u6237 ID")))),(0,r.kt)("p",null,"\u5f53 WebSocket \u63a8\u9001\u7684\u6570\u636e\u7ed3\u6784\u4f53\u4e0d\u6ee1\u8db3 ",(0,r.kt)("inlineCode",{parentName:"p"},"LiveMsg")," \u6216\u8005 ",(0,r.kt)("inlineCode",{parentName:"p"},"code")," \u503c\u4e0d\u4e3a ",(0,r.kt)("inlineCode",{parentName:"p"},"SUCCESS")," \u65f6\u4f1a\u4ee5 ",(0,r.kt)("inlineCode",{parentName:"p"},"error")," \u4e8b\u4ef6\u7684\u5f62\u5f0f\u629b\u51fa\u6765\u3002"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"error(error: Error): void")," RTC \u8bed\u97f3\u51fa\u73b0\u5f02\u5e38\u3002")),(0,r.kt)("admonition",{type:"caution"},(0,r.kt)("p",{parentName:"admonition"},"RTC \u8bed\u97f3\u4e0d\u540c\u5bb9\u5668\u6216 RTC \u89e3\u51b3\u65b9\u6848\u4e0d\u540c\uff0c\u5176\u9519\u8bef\u4fe1\u606f\u5185\u5bb9\u53ef\u80fd\u4e0d\u5b8c\u5168\u4e00\u81f4\u3002")),(0,r.kt)("h2",{id:"rtc-\u534f\u8bae"},"RTC \u534f\u8bae"),(0,r.kt)("p",null,"\u8bed\u97f3\u80fd\u529b\u9700\u4f9d\u8d56 WebView/Browser \u5bb9\u5668\uff0c\u5373\u9700\u8981\u5bb9\u5668\u7aef\u5b9e\u73b0 RTC \u80fd\u529b\u3002"),(0,r.kt)("p",null,"\u4e3a\u4e86\u65b9\u4fbf\u5f00\u53d1\u8005\u63a5\u5165\uff0c",(0,r.kt)("strong",{parentName:"p"},"\u5982\u89c6\u5f00\u53d1\u8005\u4e2d\u5fc3 VRTC \u670d\u52a1")," \u4e3a\u4e3b\u6d41\u5e73\u53f0\u63d0\u4f9b ",(0,r.kt)("a",{parentName:"p",href:"https://developers.realsee.com/docs/#/docs/live/client/container/README"},"\u5bb9\u5668 SDK"),"\n\u548c ",(0,r.kt)("a",{parentName:"p",href:"https://www.npmjs.com/package/@realsee/jsbridge-x"},"jsbridge-x")," \u3002"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Live")," \u901a\u8fc7 ",(0,r.kt)("strong",{parentName:"p"},"jsbridge-x")," \u4e0e \u96c6\u6210\u4e86",(0,r.kt)("strong",{parentName:"p"},"\u5bb9\u5668 SDK")," \u7684\u5ba2\u6237\u7aef\u5e94\u7528\u6216\u5fae\u4fe1\u5c0f\u7a0b\u5e8f\u5e94\u7528\u7a0b\u5e8f\u6865\u63a5\uff0c\u5b9e\u73b0\u539f\u751f\u80fd\u529b\u7684\u8c03\u7528\u3002\u8fd9\u4e2a ",(0,r.kt)("inlineCode",{parentName:"p"},"jsbridge-x"),"\n\u5b9e\u4f8b\u9700\u4f5c\u4e3a\u914d\u7f6e\u53c2\u6570\u63d0\u4f9b\u7ed9",(0,r.kt)("inlineCode",{parentName:"p"},"createLive()"),"\u3002"),(0,r.kt)("p",null,"\u5982\u679c\u662f iOS/Android App\uff08\u5df2\u63a5\u5165\u5982\u89c6 VRTC \u5bb9\u5668 SDK\uff09"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},'import { JSBridgeApp } from "@realsee/jsbridge-x/lib/app";\nimport { createLive } from "@realsee/live";\nimport { VRWebViewRTC } from "@realsee/live/RTC/VRWebViewRTC";\n\nconst jsBridgeInstance = new JSBridgeApp();\n\nconst rtcInstance = new VRWebViewRTC({\n  jsBridge,\n  getVoiceSign: () => {},\n});\n\nconst live = createLive({\n  rtc: rtcInstance,\n  getTicket: async () => "",\n});\n')),(0,r.kt)("p",null,"\u63d0\u4f9b RTC \u5b9e\u4f8b\u914d\u7f6e\u53c2\u6570\u4e4b\u540e\uff0c\u8bed\u97f3\u7684\u8fde\u63a5\u3001\u65ad\u5f00\u3001\u91cd\u8fde\u7b49\u903b\u8f91\u5c31\u6258\u7ba1\u7ed9\u4e86 ",(0,r.kt)("strong",{parentName:"p"},"Live")," \u3002\u60a8\u53ef\u4ee5\u901a\u8fc7 live \u5b9e\u4f8b\u4e0a\u7684 ",(0,r.kt)("inlineCode",{parentName:"p"},"$RTC")," \u547d\u540d\u7a7a\u95f4\u8bbf\u95ee\u8bed\u97f3\u76f8\u5173\u7684\u72b6\u6001\u548c\u4e8b\u4ef6\u3002"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},'// \u72b6\u6001\uff1a\u7528\u6237\u662f\u5426\u6210\u529f\u52a0\u5165\u8bed\u97f3\u623f\u95f4\nlive.$RTC.joined;\n// \u72b6\u6001\uff1a\u7528\u6237\u9ea6\u514b\u98ce\u72b6\u6001\nlive.$RTC.micro;\n// \u76d1\u542c\u7528\u6237\u97f3\u91cf\u53d8\u5316\nlive.$RTC.on("userVolumes", (userVolumes) => {});\n')))}d.isMDXComponent=!0}}]);