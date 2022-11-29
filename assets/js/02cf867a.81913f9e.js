"use strict";(self.webpackChunkrealsee_developer_github_com=self.webpackChunkrealsee_developer_github_com||[]).push([[5638],{49613:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>m});var r=n(59496);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=r.createContext({}),s=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=s(e.components);return r.createElement(p.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,p=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),u=s(n),m=a,b=u["".concat(p,".").concat(m)]||u[m]||d[m]||i;return n?r.createElement(b,o(o({ref:t},c),{},{components:n})):r.createElement(b,o({ref:t},c))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=u;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var s=2;s<i;s++)o[s]=n[s];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},53142:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>o,default:()=>d,frontMatter:()=>i,metadata:()=>l,toc:()=>s});var r=n(2962),a=(n(59496),n(49613));const i={title:"\u4e8b\u4ef6\u76d1\u542c"},o=void 0,l={unversionedId:"webview/jsbridge/event",id:"webview/jsbridge/event",title:"\u4e8b\u4ef6\u76d1\u542c",description:"@realsee/jsbridge-x \u63d0\u4f9b\u7ed9\u7528\u6237 on \u65b9\u6cd5\uff0c\u4ee5\u76d1\u542c\u4e8b\u4ef6\u3002",source:"@site/docs/webview/jsbridge/event.md",sourceDirName:"webview/jsbridge",slug:"/webview/jsbridge/event",permalink:"/docs/webview/jsbridge/event",draft:!1,tags:[],version:"current",lastUpdatedBy:"sansi.lcj",lastUpdatedAt:1669717185,formattedLastUpdatedAt:"2022\u5e7411\u670829\u65e5",frontMatter:{title:"\u4e8b\u4ef6\u76d1\u542c"},sidebar:"\u5bb9\u5668\u96c6\u6210",previous:{title:"\u5185\u7f6e\u63a5\u53e3",permalink:"/docs/webview/jsbridge/built-in"},next:{title:'\u81ea\u5b9a\u4e49 "\u6865" \u534f\u8bae',permalink:"/docs/webview/jsbridge/custom"}},p={},s=[{value:"\u5bb9\u5668\u72b6\u6001\u53d8\u66f4\u76d1\u542c",id:"\u5bb9\u5668\u72b6\u6001\u53d8\u66f4\u76d1\u542c",level:2},{value:"\u9519\u8bef\u76d1\u542c",id:"\u9519\u8bef\u76d1\u542c",level:2},{value:"\u5168\u91cf\u6587\u6863",id:"\u5168\u91cf\u6587\u6863",level:2}],c={toc:s};function d(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"@realsee/jsbridge-x")," \u63d0\u4f9b\u7ed9\u7528\u6237 ",(0,a.kt)("inlineCode",{parentName:"p"},"on")," \u65b9\u6cd5\uff0c\u4ee5\u76d1\u542c\u4e8b\u4ef6\u3002\n\u5f62\u5982\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},'// iOS/Android\nimport JSBridge from "@realsee/jsbridge-x/lib/app";\n// \u6216 \u5fae\u4fe1\u5c0f\u7a0b\u5e8f\n// import JSBridge from \'@realsee/jsbridge-x/lib/miniprogram\'\n\nconst jsBridge = new JSBridge({});\n\n// \u76d1\u542c jsBridge \u662f\u5426\u5b8c\u6210\u521d\u59cb\u5316\njsBridge.on("evtName", callback);\n')),(0,a.kt)("h2",{id:"\u5bb9\u5668\u72b6\u6001\u53d8\u66f4\u76d1\u542c"},"\u5bb9\u5668\u72b6\u6001\u53d8\u66f4\u76d1\u542c"),(0,a.kt)("p",null,"\u901a\u8fc7 ",(0,a.kt)("inlineCode",{parentName:"p"},"webViewStateChange")," \u4e8b\u4ef6\u76d1\u542c\u5f53\u524d\u5bb9\u5668\u72b6\u6001\u53d8\u66f4\u60c5\u51b5\u3002"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},'jsBridge.on("webViewStateChange", (webViewState: WebViewState) => {\n  // \u5728\u6b64\u5904\u7406\u4e1a\u52a1\u903b\u8f91\n});\n')),(0,a.kt)("p",null,"WebViewState \u63cf\u8ff0\u4e86\u5f53\u524d WebView \u7684\u72b6\u6001\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts",metastring:'title="WebViewState \u7c7b\u578b\u58f0\u660e"',title:'"WebViewState','\u7c7b\u578b\u58f0\u660e"':!0},"/**\n * \u5f53\u524d\u7684 WebView \u72b6\u6001\u3002\n */\nexport interface WebViewState {\n  /**\n   * \u662f\u5426\u5904\u5728\u6fc0\u6d3b\u72b6\u6001\uff1a\u6bd4\u5982 App \u5207\u5230\u540e\u53f0\u5c31\u5904\u5728\u975e\u6fc0\u6d3b\u72b6\u6001\n   */\n  active: boolean;\n  /**\n   * \u5f53\u524d\u6a2a\u7ad6\u5c4f\u65b9\u5411\n   */\n  orientation: OrientationEnum;\n  /**\n   * \u6700\u5c0f\u5316\n   */\n  minimized: boolean;\n}\n")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts",metastring:'title="WebView \u6a2a\u7ad6\u5c4f\u671d\u5411\u679a\u4e3e"',title:'"WebView','\u6a2a\u7ad6\u5c4f\u671d\u5411\u679a\u4e3e"':!0},'/**\n * WebView \u6a2a\u7ad6\u5c4f\u671d\u5411\u3002\n */\nexport enum OrientationEnum {\n  /**\n   * \u6a2a\u5c4f\n   */\n  Landscape = "Landscape",\n  /**\n   * \u7ad6\u5c4f\n   */\n  Portrait = "Portrait",\n}\n')),(0,a.kt)("h2",{id:"\u9519\u8bef\u76d1\u542c"},"\u9519\u8bef\u76d1\u542c"),(0,a.kt)("p",null,"\u901a\u8fc7 ",(0,a.kt)("inlineCode",{parentName:"p"},"error")," \u4e8b\u4ef6\u76d1\u542c\u9519\u8bef\u4fe1\u606f\u3002"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},'jsBridge.on("error", (error: WebViewErrorInfo) => {\n  // \u5728\u6b64\u5904\u7406\u4e1a\u52a1\u903b\u8f91\n});\n')),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts",metastring:'title="WebView \u9519\u8bef\u4fe1\u606f\u58f0\u660e"',title:'"WebView','\u9519\u8bef\u4fe1\u606f\u58f0\u660e"':!0},"export interface WebViewErrorInfo {\n  errorCode: string;\n  errorMsg: string;\n}\n")),(0,a.kt)("h2",{id:"\u5168\u91cf\u6587\u6863"},"\u5168\u91cf\u6587\u6863"),(0,a.kt)("admonition",{type:"tip"},(0,a.kt)("p",{parentName:"admonition"},(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("a",{parentName:"strong",href:"https://unpkg.com/@realsee/jsbridge-x/docs/modules/jsBridge.html#EventMap"},"\u5168\u91cf\u4e8b\u4ef6\u76d1\u542c\u8bf7\u53c2\u8003 @realsee/jsbridge-x \u8be6\u7ec6\u6587\u6863\u4e4b EventMap")," \u3002"))))}d.isMDXComponent=!0}}]);