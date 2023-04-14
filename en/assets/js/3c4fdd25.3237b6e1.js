"use strict";(self.webpackChunkrealsee_developer_github_com=self.webpackChunkrealsee_developer_github_com||[]).push([[2158],{49613:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>m});var r=n(59496);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=r.createContext({}),c=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,a=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),d=c(n),m=i,g=d["".concat(l,".").concat(m)]||d[m]||u[m]||a;return n?r.createElement(g,o(o({ref:t},p),{},{components:n})):r.createElement(g,o({ref:t},p))}));function m(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=n.length,o=new Array(a);o[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:i,o[1]=s;for(var c=2;c<a;c++)o[c]=n[c];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},3755:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>u,frontMatter:()=>a,metadata:()=>s,toc:()=>c});var r=n(2962),i=(n(59496),n(49613));const a={title:"Event listener"},o=void 0,s={unversionedId:"webview/jsbridge/event",id:"webview/jsbridge/event",title:"Event listener",description:"@realsee/jsbridge-x is available to users on to listen to events. Example\uff1a",source:"@site/i18n/en/docusaurus-plugin-content-docs/current/webview/jsbridge/event.md",sourceDirName:"webview/jsbridge",slug:"/webview/jsbridge/event",permalink:"/en/docs/webview/jsbridge/event",draft:!1,tags:[],version:"current",lastUpdatedBy:"sansi.lcj",lastUpdatedAt:1669717185,formattedLastUpdatedAt:"Nov 29, 2022",frontMatter:{title:"Event listener"},sidebar:"\u5bb9\u5668\u96c6\u6210",previous:{title:"Built-in interface",permalink:"/en/docs/webview/jsbridge/built-in"},next:{title:'Custom "bridge" protocol',permalink:"/en/docs/webview/jsbridge/custom"}},l={},c=[{value:"Container Status Listening",id:"container-status-listening",level:2},{value:"Error listening",id:"error-listening",level:2},{value:"Full amount of documentation",id:"full-amount-of-documentation",level:2}],p={toc:c};function u(e){let{components:t,...n}=e;return(0,i.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"@realsee/jsbridge-x")," is available to users ",(0,i.kt)("inlineCode",{parentName:"p"},"on")," to listen to events. Example\uff1a"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts"},'// iOS/Android\nimport JSBridge from "@realsee/jsbridge-x/lib/app";\n// or miniprogram\n// import JSBridge from \'@realsee/jsbridge-x/lib/miniprogram\'\n\nconst jsBridge = new JSBridge({});\n\n// Listen if jsBridge completes initialization\njsBridge.on("evtName", callback);\n')),(0,i.kt)("h2",{id:"container-status-listening"},"Container Status Listening"),(0,i.kt)("p",null,"Listen to the current container status changes with ",(0,i.kt)("inlineCode",{parentName:"p"},"webViewStateChange")," events."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts"},'jsBridge.on("webViewStateChange", (webViewState: WebViewState) => {\n  // Processing Business Logic here\n});\n')),(0,i.kt)("p",null,"WebViewState describes the status of the current WebView\uff1a"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts",metastring:'title="WebViewState \u7c7b\u578b\u58f0\u660e"',title:'"WebViewState','\u7c7b\u578b\u58f0\u660e"':!0},"/**\n * Current WebView status.\n */\nexport interface WebViewState {\n  /**\n   * Whether it is in the active state\uff1aFor example, the App is in the inactive state when it is switched to the background\n   */\n  active: boolean;\n  /**\n   * The current horizontal and vertical screen orientation\n   */\n  orientation: OrientationEnum;\n  /**\n   * minimized\n   */\n  minimized: boolean;\n}\n")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts",metastring:'title="WebView \u6a2a\u7ad6\u5c4f\u671d\u5411\u679a\u4e3e"',title:'"WebView','\u6a2a\u7ad6\u5c4f\u671d\u5411\u679a\u4e3e"':!0},'/**\n * WebView in landscape portrait.\n */\nexport enum OrientationEnum {\n  /**\n   * Landscape\n   */\n  Landscape = "Landscape",\n  /**\n   * Vertical\n   */\n  Portrait = "Portrait",\n}\n')),(0,i.kt)("h2",{id:"error-listening"},"Error listening"),(0,i.kt)("p",null,"Listen to error messages via ",(0,i.kt)("inlineCode",{parentName:"p"},"error"),"."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts"},'jsBridge.on("error", (error: WebViewErrorInfo) => {\n  // Processing Business Logic here\n});\n')),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts",metastring:'title="WebView \u9519\u8bef\u4fe1\u606f\u58f0\u660e"',title:'"WebView','\u9519\u8bef\u4fe1\u606f\u58f0\u660e"':!0},"export face WebViewErrorInfoInfo has\n  errorCode: string\n  errorMsg: string\n}\n")),(0,i.kt)("h2",{id:"full-amount-of-documentation"},"Full amount of documentation"),(0,i.kt)("admonition",{type:"tip"},(0,i.kt)("p",{parentName:"admonition"},(0,i.kt)("strong",{parentName:"p"},(0,i.kt)("a",{parentName:"strong",href:"https://unpkg.com/@realsee/jsbridge-x/docs/modules/jsBridge.html#EventMap"},"For full event monitoring, please refer to EventMap")," of @realsee/jsbridge-x detailed documentation."))))}u.isMDXComponent=!0}}]);