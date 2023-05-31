"use strict";(self.webpackChunkrealsee_developer_github_com=self.webpackChunkrealsee_developer_github_com||[]).push([[764],{3905:(e,r,t)=>{t.d(r,{Zo:()=>c,kt:()=>u});var n=t(67294);function i(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function o(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function a(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?o(Object(t),!0).forEach((function(r){i(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function s(e,r){if(null==e)return{};var t,n,i=function(e,r){if(null==e)return{};var t,n,i={},o=Object.keys(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||(i[t]=e[t]);return i}(e,r);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var p=n.createContext({}),l=function(e){var r=n.useContext(p),t=r;return e&&(t="function"==typeof e?e(r):a(a({},r),e)),t},c=function(e){var r=l(e.components);return n.createElement(p.Provider,{value:r},e.children)},d="mdxType",g={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},m=n.forwardRef((function(e,r){var t=e.components,i=e.mdxType,o=e.originalType,p=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),d=l(t),m=i,u=d["".concat(p,".").concat(m)]||d[m]||g[m]||o;return t?n.createElement(u,a(a({ref:r},c),{},{components:t})):n.createElement(u,a({ref:r},c))}));function u(e,r){var t=arguments,i=r&&r.mdxType;if("string"==typeof e||i){var o=t.length,a=new Array(o);a[0]=m;var s={};for(var p in r)hasOwnProperty.call(r,p)&&(s[p]=r[p]);s.originalType=e,s[d]="string"==typeof e?e:i,a[1]=s;for(var l=2;l<o;l++)a[l]=t[l];return n.createElement.apply(null,a)}return n.createElement.apply(null,t)}m.displayName="MDXCreateElement"},56287:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>p,contentTitle:()=>a,default:()=>g,frontMatter:()=>o,metadata:()=>s,toc:()=>l});var n=t(87462),i=(t(67294),t(3905));const o={title:"React \u652f\u6301"},a=void 0,s={unversionedId:"webview/jsbridge/react-support",id:"webview/jsbridge/react-support",title:"React \u652f\u6301",description:"@realsee/jsbridge-x \u6709\u5b8c\u6574\u7684 TypeScript Generics \u548c React Hooks \u652f\u6301\uff0c\u5982\u679c\u60a8\u7684\u6280\u672f\u6808\u57fa\u4e8e TypeScript \u548c React \u53ef\u4ee5\u53c2\u8003\u5982\u4e0b\u65b9\u5f0f\u66f4\u4f18\u96c5\u5730\u4f7f\u7528 @realsee/jsbridge-x\u3002",source:"@site/docs/webview/jsbridge/react-support.md",sourceDirName:"webview/jsbridge",slug:"/webview/jsbridge/react-support",permalink:"/docs/webview/jsbridge/react-support",draft:!1,tags:[],version:"current",lastUpdatedBy:"sansi.lcj",lastUpdatedAt:1669717185,formattedLastUpdatedAt:"2022\u5e7411\u670829\u65e5",frontMatter:{title:"React \u652f\u6301"},sidebar:"\u5bb9\u5668\u96c6\u6210",previous:{title:'\u81ea\u5b9a\u4e49 "\u6865" \u534f\u8bae',permalink:"/docs/webview/jsbridge/custom"},next:{title:'\u6d4f\u89c8\u5668 "\u6865" \u5b9e\u73b0',permalink:"/docs/webview/jsbridge/browser-jsbridge"}},p={},l=[{value:"\u521b\u5efa JSBridge \u5b9e\u4f8b",id:"\u521b\u5efa-jsbridge-\u5b9e\u4f8b",level:2},{value:"\u96c6\u6210&quot;\u6865&quot;\u81f3 React Context \u4e0a\u4e0b\u6587",id:"\u96c6\u6210\u6865\u81f3-react-context-\u4e0a\u4e0b\u6587",level:2},{value:"\u4f7f\u7528&quot;\u6865&quot;",id:"\u4f7f\u7528\u6865",level:2},{value:"\u5168\u91cf\u6587\u6863",id:"\u5168\u91cf\u6587\u6863",level:2}],c={toc:l},d="wrapper";function g(e){let{components:r,...t}=e;return(0,i.kt)(d,(0,n.Z)({},c,t,{components:r,mdxType:"MDXLayout"}),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"@realsee/jsbridge-x")," \u6709\u5b8c\u6574\u7684 ",(0,i.kt)("a",{parentName:"p",href:"https://www.typescriptlang.org/docs/handbook/2/generics.html"},"TypeScript Generics")," \u548c ",(0,i.kt)("a",{parentName:"p",href:"https://reactjs.org/docs/hooks-intro.html"},"React Hooks")," \u652f\u6301\uff0c\u5982\u679c\u60a8\u7684\u6280\u672f\u6808\u57fa\u4e8e TypeScript \u548c React \u53ef\u4ee5\u53c2\u8003\u5982\u4e0b\u65b9\u5f0f\u66f4\u4f18\u96c5\u5730\u4f7f\u7528 @realsee/jsbridge-x\u3002"),(0,i.kt)("h2",{id:"\u521b\u5efa-jsbridge-\u5b9e\u4f8b"},"\u521b\u5efa JSBridge \u5b9e\u4f8b"),(0,i.kt)("p",null,"\u4ece ",(0,i.kt)("inlineCode",{parentName:"p"},"@realsee/jsbridge-x")," \u4e2d\u5206\u522b import \u5ba2\u6237\u7aef\u4ee5\u53ca\u5fae\u4fe1\u5c0f\u7a0b\u5e8f\u7684 bridge \u7c7b\u3002"),(0,i.kt)("admonition",{type:"tip"},(0,i.kt)("p",{parentName:"admonition"},"\u5982\u679c\u60a8\u5728\u6d4f\u89c8\u5668\u7aef\u4e5f\u9700\u8981\u4f7f\u7528 ",(0,i.kt)("inlineCode",{parentName:"p"},"@realsee/jsbridge-x")," \uff0c\u5219\u9700\u8981\u5148\u6309\u7167 ",(0,i.kt)("inlineCode",{parentName:"p"},"@realsee/jsbridge-x"),' \u7684 jsBridge \u534f\u8bae\uff0c\u5b9e\u73b0 browser "\u6865"\u3002\n\u5047\u8bbe\u60a8\u81ea\u884c\u5f00\u53d1\u7684\u6d4f\u89c8\u5668"\u6865"\u7c7b\u6587\u4ef6\u540d\u4e3a ',(0,i.kt)("inlineCode",{parentName:"p"},"JSBridgeBrowser.ts"))),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-tsx"},'import { JSBridgeApp } from "@realsee/jsbridge-x/lib/app"; // \u5ba2\u6237\u7aef\nimport { JSBridgeMiniprogram } from "@realsee/jsbridge-x/lib/miniprogram"; // \u5fae\u4fe1\u5c0f\u7a0b\u5e8f\nimport { JSBridgeBrowser } from "./JSBridgeBrowser"; // \u6ce8\u610f\uff0c\u6d4f\u89c8\u5668\u6865\u9700\u8981\u60a8\u81ea\u884c\u5b9e\u73b0\n\nimport { isApp, isMiniprogram } from "./utils/deviceDetect";\n\nlet bridgeInstance;\n\n// \u6839\u636e\u7aef\u7684\u7c7b\u578b\u521d\u59cb\u5316 jsBridge \u5b9e\u4f8b\nif (isApp) bridgeInstance = new JSBridgeApp();\nelse if (isMiniprogram) bridgeInstance = new JSBridgeMiniprogram();\nelse bridgeInstance = new JSBridgeBrowser();\n')),(0,i.kt)("h2",{id:"\u96c6\u6210\u6865\u81f3-react-context-\u4e0a\u4e0b\u6587"},'\u96c6\u6210"\u6865"\u81f3 React Context \u4e0a\u4e0b\u6587'),(0,i.kt)("p",null,"\u901a\u8fc7 ",(0,i.kt)("inlineCode",{parentName:"p"},"JSBridgeContext"),' \u5c06 "\u6865" \u96c6\u6210\u81f3 React \u7684 Context \u4e0a\u4e0b\u6587\u3002'),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-tsx"},'import { JSBridgeApp } from "@realsee/jsbridge-x/lib/app"; // \u5ba2\u6237\u7aef\nimport { JSBridgeMiniprogram } from "@realsee/jsbridge-x/lib/miniprogram"; // \u5fae\u4fe1\u5c0f\u7a0b\u5e8f\nimport { JSBridgeBrowser } from "./JSBridgeBrowser"; // \u6ce8\u610f\uff0c\u6d4f\u89c8\u5668\u6865\u9700\u8981\u60a8\u81ea\u884c\u5b9e\u73b0\n// highlight-start\nimport { JSBridgeContext } from "@realsee/jsbridge-x/lib/react";\n// highlight-end\n\nimport { isApp, isMiniprogram } from "./utils/deviceDetect";\n\nlet bridgeInstance;\n\n// \u6839\u636e\u7aef\u7684\u7c7b\u578b\u521d\u59cb\u5316 jsBridge \u5b9e\u4f8b\nif (isApp) bridgeInstance = new JSBridgeApp();\nelse if (isMiniprogram) bridgeInstance = new JSBridgeMiniprogram();\nelse bridgeInstance = new JSBridgeBrowser();\n\nReactDOM.render(\n  <React.StrictMode>\n    // highlight-start\n    <JSBridgeContext.Provider value={bridgeInstance}>\n      <YourApp />\n    </JSBridgeContext.Provider>\n    // highlight-end\n  </React.StrictMode>,\n  document.getElementById("root")\n);\n')),(0,i.kt)("h2",{id:"\u4f7f\u7528\u6865"},'\u4f7f\u7528"\u6865"'),(0,i.kt)("p",null,"\u63a5\u4e0b\u6765\uff0c\u60a8\u53ef\u4ee5\u5728\u4efb\u4f55\u88ab ",(0,i.kt)("inlineCode",{parentName:"p"},"JSBridgeContext.Provider"),' \u5305\u88f9\u7684\u7ec4\u4ef6\u91cc\u4f7f\u7528 "\u6865" \u63d0\u4f9b\u7684\u76f8\u5173\u65b9\u6cd5\u3002'),(0,i.kt)("p",null,'\u6bd4\u5982\uff0c\u83b7\u53d6 "\u5218\u6d77" \\ "\u6316\u5b54" \u5360\u7528\u5c4f\u5e55\u7684\u9ad8\u5ea6\uff1a'),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-tsx"},'import { useBangsHeightState } from "@realsee/jsbridge-x/lib/react/hooks";\n\nfunction DemoApp() {\n  const bandHeight = useBangsHeightState();\n\n  return null;\n}\n')),(0,i.kt)("p",null,"\u5173\u95ed loading :"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts"},'import { useJSBridgeAction } from "@realsee/jsbridge-x/lib/react/hooks";\n\nfunction DemoApp() {\n  const { closeLoading } = useJSBridgeAction();\n\n  React.useEffect(() => {\n    Promise.resolve().then(closeLoading);\n  }, []);\n\n  return null;\n}\n')),(0,i.kt)("h2",{id:"\u5168\u91cf\u6587\u6863"},"\u5168\u91cf\u6587\u6863"),(0,i.kt)("admonition",{type:"tip"},(0,i.kt)("p",{parentName:"admonition"},(0,i.kt)("strong",{parentName:"p"},(0,i.kt)("a",{parentName:"strong",href:"https://unpkg.com/@realsee/jsbridge-x/docs/index.html"},"\u66f4\u591a\u8be6\u7ec6 API \u4f7f\u7528\u8bf7\u53c2\u8003 @realsee/jsbrdige-x \u5168\u91cf\u6587\u6863")," \u3002"))))}g.isMDXComponent=!0}}]);