"use strict";(self.webpackChunkrealsee_developer_github_com=self.webpackChunkrealsee_developer_github_com||[]).push([[9295],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>f});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function p(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=n.createContext({}),s=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},c=function(e){var t=s(e.components);return n.createElement(l.Provider,{value:t},e.children)},d="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,c=p(e,["components","mdxType","originalType","parentName"]),d=s(r),u=a,f=d["".concat(l,".").concat(u)]||d[u]||m[u]||i;return r?n.createElement(f,o(o({ref:t},c),{},{components:r})):n.createElement(f,o({ref:t},c))}));function f(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,o=new Array(i);o[0]=u;var p={};for(var l in t)hasOwnProperty.call(t,l)&&(p[l]=t[l]);p.originalType=e,p[d]="string"==typeof e?e:a,o[1]=p;for(var s=2;s<i;s++)o[s]=r[s];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}u.displayName="MDXCreateElement"},13109:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>m,frontMatter:()=>i,metadata:()=>p,toc:()=>s});var n=r(87462),a=(r(67294),r(3905));const i={title:"Introduction"},o=void 0,p={unversionedId:"webview/intro",id:"webview/intro",title:"Introduction",description:"such as visual 3D space rendering is implemented based on modern browsers WebGL.In environments such as mobile terminals iOS / Android and micro-messenger applets are integrated in the form of a nested frontend page in WebView like 3D space rendering capability.At the same time, in order to take full advantage of the ends' capabilities, such as viewing the Open Platform as official encapsulation of the VRWebView SDK.",source:"@site/i18n/en/docusaurus-plugin-content-docs/current/webview/intro.md",sourceDirName:"webview",slug:"/webview/intro",permalink:"/en/docs/webview/intro",draft:!1,tags:[],version:"current",lastUpdatedBy:"sansi.lcj",lastUpdatedAt:1669717185,formattedLastUpdatedAt:"Nov 29, 2022",frontMatter:{title:"Introduction"},sidebar:"\u5bb9\u5668\u96c6\u6210",next:{title:"iOS party",permalink:"/en/docs/webview/app/iOS"}},l={},s=[{value:"Support features",id:"support-features",level:2},{value:"Terminal Capabilities",id:"terminal-capabilities",level:3},{value:"Performance experience",id:"performance-experience",level:3},{value:"&quot;bridge&quot; protocol",id:"bridge-protocol",level:2}],c={toc:s},d="wrapper";function m(e){let{components:t,...r}=e;return(0,a.kt)(d,(0,n.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"such as visual 3D space rendering")," is implemented based on modern browsers ",(0,a.kt)("a",{parentName:"p",href:"https://www.khronos.org/webgl/"},"WebGL"),".In environments such as mobile terminals iOS / Android and micro-messenger applets are integrated in the form of a nested frontend page in ",(0,a.kt)("strong",{parentName:"p"},"WebView")," like 3D space rendering capability.At the same time, in order to take full advantage of the ends' capabilities, such as viewing the Open Platform as official encapsulation of the ",(0,a.kt)("inlineCode",{parentName:"p"},"VRWebView")," SDK."),(0,a.kt)("h2",{id:"support-features"},"Support features"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"VRWebView")," mainly provides the following functions\uff1a"),(0,a.kt)("h3",{id:"terminal-capabilities"},"Terminal Capabilities"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Basic functions"),"\uff1afeatures like fullscreen, vibration, share, permission detect, access to albums etc. are not available at the browser."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Voice channel"),"\uff1ais limited to ",(0,a.kt)("a",{parentName:"li",href:"https://webrtc.org/"},"WebRTC")," compatibility, terminal device can proxy ",(0,a.kt)("a",{parentName:"li",href:"https://webrtc.org/"},"WebRTC"),".")),(0,a.kt)("h3",{id:"performance-experience"},"Performance experience"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Preload capacity"),"\uff1aBefore turning on the VR page, you can preload some data, sticky resources and more."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"First Rendering"),"(",(0,a.kt)("em",{parentName:"li"},"partially supported"),")\uff1aprovides terminal rendering capability, pending seamless switching when front-end rendering is complete."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Proxy request"),"(",(0,a.kt)("em",{parentName:"li"},"partially support"),")\uff1atakes advantage of high client performance ",(0,a.kt)("strong",{parentName:"li"},"HTTP")," request capacity, and caches request results to avoid subsequent duplicate requests.")),(0,a.kt)("h2",{id:"bridge-protocol"},'"bridge" protocol'),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://www.npmjs.com/package/@realsee/jsbridge-x"},(0,a.kt)("inlineCode",{parentName:"a"},"@realsee/jsbridge-x"))," is implemented ",(0,a.kt)("inlineCode",{parentName:"p"},"VRWebView")," The frontend SDK for messaging and data exchange between the container and its embedded web page."),(0,a.kt)("p",null,"For more details, please move by way\uff1a ",(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("a",{parentName:"strong",href:"/docs/webview/jsbridge/intro"},'"bridge" protocol - introduce')),"."),(0,a.kt)("admonition",{title:"Reminder",type:"tip"},(0,a.kt)("p",{parentName:"admonition"},"Due to the inconsistent implementation mechanism of ",(0,a.kt)("inlineCode",{parentName:"p"},"WebView")," of each terminal (iOS ",(0,a.kt)("a",{parentName:"p",href:"https://developer.apple.com/documentation/webkit/wkwebview"},"WKWebView"),", Android ",(0,a.kt)("a",{parentName:"p",href:"https://developer.android.com/reference/android/webkit/WebView"},"WebView"),", WeChat applet ",(0,a.kt)("a",{parentName:"p",href:"https://developers.weixin.qq.com/miniprogram/dev/component/web-view.html"},"web-view")," , etc.), although ",(0,a.kt)("inlineCode",{parentName:"p"},"@realsee/jsbridge-x")," has tried to smooth out the differences between them, but due to the differences in platforms, please refer to the API corresponding to each version for details.")))}m.isMDXComponent=!0}}]);