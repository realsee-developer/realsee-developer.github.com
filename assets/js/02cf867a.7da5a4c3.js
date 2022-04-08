"use strict";(self.webpackChunkrealsee_developer_github_com=self.webpackChunkrealsee_developer_github_com||[]).push([[5638],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return m}});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),p=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=p(e.components);return r.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),u=p(n),m=a,g=u["".concat(s,".").concat(m)]||u[m]||d[m]||i;return n?r.createElement(g,o(o({ref:t},c),{},{components:n})):r.createElement(g,o({ref:t},c))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=u;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var p=2;p<i;p++)o[p]=n[p];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},48506:function(e,t,n){n.r(t),n.d(t,{assets:function(){return c},contentTitle:function(){return s},default:function(){return m},frontMatter:function(){return l},metadata:function(){return p},toc:function(){return d}});var r=n(87462),a=n(63366),i=(n(67294),n(3905)),o=["components"],l={title:"\u4e8b\u4ef6\u76d1\u542c"},s=void 0,p={unversionedId:"webview/jsbridge/event",id:"webview/jsbridge/event",title:"\u4e8b\u4ef6\u76d1\u542c",description:"@realsee/jsbridge-x \u63d0\u4f9b\u7ed9\u7528\u6237 on \u65b9\u6cd5\uff0c\u4ee5\u76d1\u542c\u4e8b\u4ef6\u3002",source:"@site/docs/webview/jsbridge/event.md",sourceDirName:"webview/jsbridge",slug:"/webview/jsbridge/event",permalink:"/docs/webview/jsbridge/event",tags:[],version:"current",lastUpdatedBy:"\u5c0f\u9640\u87ba",lastUpdatedAt:1647598986,formattedLastUpdatedAt:"2022/3/18",frontMatter:{title:"\u4e8b\u4ef6\u76d1\u542c"},sidebar:"\u5bb9\u5668\u96c6\u6210",previous:{title:"\u5185\u7f6e\u63a5\u53e3",permalink:"/docs/webview/jsbridge/built-in"},next:{title:'\u81ea\u5b9a\u4e49 "\u6865" \u534f\u8bae',permalink:"/docs/webview/jsbridge/custom"}},c={},d=[{value:"\u5bb9\u5668\u72b6\u6001\u53d8\u66f4\u76d1\u542c",id:"\u5bb9\u5668\u72b6\u6001\u53d8\u66f4\u76d1\u542c",level:2},{value:"\u9519\u8bef\u76d1\u542c",id:"\u9519\u8bef\u76d1\u542c",level:2},{value:"\u5168\u91cf\u6587\u6863",id:"\u5168\u91cf\u6587\u6863",level:2}],u={toc:d};function m(e){var t=e.components,n=(0,a.Z)(e,o);return(0,i.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"@realsee/jsbridge-x")," \u63d0\u4f9b\u7ed9\u7528\u6237 ",(0,i.kt)("inlineCode",{parentName:"p"},"on")," \u65b9\u6cd5\uff0c\u4ee5\u76d1\u542c\u4e8b\u4ef6\u3002\n\u5f62\u5982\uff1a"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts"},"// iOS/Android\nimport JSBridge from '@realsee/jsbridge-x/lib/app'\n// \u6216 \u5fae\u4fe1\u5c0f\u7a0b\u5e8f\n// import JSBridge from '@realsee/jsbridge-x/lib/miniprogram'\n\nconst jsBridge = new JSBridge({})\n\n// \u76d1\u542c jsBridge \u662f\u5426\u5b8c\u6210\u521d\u59cb\u5316\njsBridge.on('evtName', callback)\n")),(0,i.kt)("h2",{id:"\u5bb9\u5668\u72b6\u6001\u53d8\u66f4\u76d1\u542c"},"\u5bb9\u5668\u72b6\u6001\u53d8\u66f4\u76d1\u542c"),(0,i.kt)("p",null,"\u901a\u8fc7 ",(0,i.kt)("inlineCode",{parentName:"p"},"webViewStateChange")," \u4e8b\u4ef6\u76d1\u542c\u5f53\u524d\u5bb9\u5668\u72b6\u6001\u53d8\u66f4\u60c5\u51b5\u3002"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts"},"jsBridge.on('webViewStateChange', (webViewState: WebViewState) => {\n    // \u5728\u6b64\u5904\u7406\u4e1a\u52a1\u903b\u8f91\n})\n")),(0,i.kt)("p",null,"WebViewState \u63cf\u8ff0\u4e86\u5f53\u524d WebView \u7684\u72b6\u6001\uff1a"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts",metastring:'title="WebViewState \u7c7b\u578b\u58f0\u660e"',title:'"WebViewState','\u7c7b\u578b\u58f0\u660e"':!0},"/**\n * \u5f53\u524d\u7684 WebView \u72b6\u6001\u3002\n */\nexport interface WebViewState {\n  /**\n   * \u662f\u5426\u5904\u5728\u6fc0\u6d3b\u72b6\u6001\uff1a\u6bd4\u5982 App \u5207\u5230\u540e\u53f0\u5c31\u5904\u5728\u975e\u6fc0\u6d3b\u72b6\u6001\n   */\n  active: boolean\n  /**\n   * \u5f53\u524d\u6a2a\u7ad6\u5c4f\u65b9\u5411\n   */\n  orientation: OrientationEnum\n  /**\n   * \u6700\u5c0f\u5316\n   */\n  minimized: boolean\n}\n")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts",metastring:'title="WebView \u6a2a\u7ad6\u5c4f\u671d\u5411\u679a\u4e3e"',title:'"WebView','\u6a2a\u7ad6\u5c4f\u671d\u5411\u679a\u4e3e"':!0},"/**\n * WebView \u6a2a\u7ad6\u5c4f\u671d\u5411\u3002\n */\nexport enum OrientationEnum {\n    /**\n     * \u6a2a\u5c4f\n     */\n    Landscape = 'Landscape',\n    /**\n     * \u7ad6\u5c4f\n     */\n    Portrait = 'Portrait',\n}\n")),(0,i.kt)("h2",{id:"\u9519\u8bef\u76d1\u542c"},"\u9519\u8bef\u76d1\u542c"),(0,i.kt)("p",null,"\u901a\u8fc7 ",(0,i.kt)("inlineCode",{parentName:"p"},"error")," \u4e8b\u4ef6\u76d1\u542c\u9519\u8bef\u4fe1\u606f\u3002"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts"},"jsBridge.on('error', (error: WebViewErrorInfo) => {\n    // \u5728\u6b64\u5904\u7406\u4e1a\u52a1\u903b\u8f91\n})\n")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts",metastring:'title="WebView \u9519\u8bef\u4fe1\u606f\u58f0\u660e"',title:'"WebView','\u9519\u8bef\u4fe1\u606f\u58f0\u660e"':!0},"export interface WebViewErrorInfo {\n  errorCode: string\n  errorMsg: string\n}\n")),(0,i.kt)("h2",{id:"\u5168\u91cf\u6587\u6863"},"\u5168\u91cf\u6587\u6863"),(0,i.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},(0,i.kt)("strong",{parentName:"p"},(0,i.kt)("a",{parentName:"strong",href:"https://unpkg.com/@realsee/jsbridge-x/docs/modules/jsBridge.html#EventMap"},"\u5168\u91cf\u4e8b\u4ef6\u76d1\u542c\u8bf7\u53c2\u8003 @realsee/jsbridge-x \u8be6\u7ec6\u6587\u6863\u4e4bEventMap")," \u3002")))))}m.isMDXComponent=!0}}]);