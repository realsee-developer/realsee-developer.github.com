"use strict";(self.webpackChunkrealsee_developer_github_com=self.webpackChunkrealsee_developer_github_com||[]).push([[6182],{49613:(e,t,r)=>{r.d(t,{Zo:()=>m,kt:()=>u});var n=r(59496);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function p(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=n.createContext({}),c=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},m=function(e){var t=c(e.components);return n.createElement(l.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,m=p(e,["components","mdxType","originalType","parentName"]),d=c(r),u=a,b=d["".concat(l,".").concat(u)]||d[u]||s[u]||i;return r?n.createElement(b,o(o({ref:t},m),{},{components:r})):n.createElement(b,o({ref:t},m))}));function u(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,o=new Array(i);o[0]=d;var p={};for(var l in t)hasOwnProperty.call(t,l)&&(p[l]=t[l]);p.originalType=e,p.mdxType="string"==typeof e?e:a,o[1]=p;for(var c=2;c<i;c++)o[c]=r[c];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},83982:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>s,frontMatter:()=>i,metadata:()=>p,toc:()=>c});var n=r(2962),a=(r(59496),r(49613));const i={title:"\u7b80\u4ecb"},o=void 0,p={unversionedId:"webview/intro",id:"webview/intro",title:"\u7b80\u4ecb",description:"\u5982\u89c6\u4e09\u7ef4\u7a7a\u95f4\u6e32\u67d3 \u662f\u57fa\u4e8e\u73b0\u4ee3\u6d4f\u89c8\u5668 WebGL \u5b9e\u73b0\u7684\u3002\u800c\u5728\u79fb\u52a8\u7ec8\u7aef( iOS / Android )\u3001\u5fae\u4fe1\u5c0f\u7a0b\u5e8f\u7b49\u73af\u5883\u4e2d\uff0c\u5219\u662f\u4ee5 WebView \u5185\u5d4c\u524d\u7aef\u9875\u9762\u7684\u5f62\u5f0f\u8fdb\u884c\u5982\u89c6\u4e09\u7ef4\u7a7a\u95f4\u6e32\u67d3\u80fd\u529b\u7684\u96c6\u6210\u3002\u540c\u65f6\uff0c\u4e3a\u4e86\u5145\u5206\u5229\u7528\u7ec8\u7aef\u7684\u80fd\u529b\uff0c\u5982\u89c6\u5f00\u653e\u5e73\u53f0\u5b98\u65b9\u5c01\u88c5\u4e86\u4e00\u7cfb\u5217 VRWebView SDK\u3002",source:"@site/docs/webview/intro.md",sourceDirName:"webview",slug:"/webview/intro",permalink:"/docs/webview/intro",draft:!1,tags:[],version:"current",lastUpdatedBy:"\u5c0f\u9640\u87ba",lastUpdatedAt:1647598986,formattedLastUpdatedAt:"2022\u5e743\u670818\u65e5",frontMatter:{title:"\u7b80\u4ecb"},sidebar:"\u5bb9\u5668\u96c6\u6210",next:{title:"iOS \u7aef",permalink:"/docs/webview/app/iOS"}},l={},c=[{value:"\u652f\u6301\u529f\u80fd",id:"\u652f\u6301\u529f\u80fd",level:2},{value:"\u7ec8\u7aef\u80fd\u529b",id:"\u7ec8\u7aef\u80fd\u529b",level:3},{value:"\u6027\u80fd\u4f53\u9a8c",id:"\u6027\u80fd\u4f53\u9a8c",level:3},{value:"&quot;\u6865&quot; \u534f\u8bae",id:"\u6865-\u534f\u8bae",level:2}],m={toc:c};function s(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},m,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"\u5982\u89c6\u4e09\u7ef4\u7a7a\u95f4\u6e32\u67d3")," \u662f\u57fa\u4e8e\u73b0\u4ee3\u6d4f\u89c8\u5668 ",(0,a.kt)("a",{parentName:"p",href:"https://www.khronos.org/webgl/"},"WebGL")," \u5b9e\u73b0\u7684\u3002\u800c\u5728\u79fb\u52a8\u7ec8\u7aef( iOS / Android )\u3001\u5fae\u4fe1\u5c0f\u7a0b\u5e8f\u7b49\u73af\u5883\u4e2d\uff0c\u5219\u662f\u4ee5 ",(0,a.kt)("strong",{parentName:"p"},"WebView")," \u5185\u5d4c\u524d\u7aef\u9875\u9762\u7684\u5f62\u5f0f\u8fdb\u884c\u5982\u89c6\u4e09\u7ef4\u7a7a\u95f4\u6e32\u67d3\u80fd\u529b\u7684\u96c6\u6210\u3002\u540c\u65f6\uff0c\u4e3a\u4e86\u5145\u5206\u5229\u7528\u7ec8\u7aef\u7684\u80fd\u529b\uff0c\u5982\u89c6\u5f00\u653e\u5e73\u53f0\u5b98\u65b9\u5c01\u88c5\u4e86\u4e00\u7cfb\u5217 ",(0,a.kt)("inlineCode",{parentName:"p"},"VRWebView")," SDK\u3002"),(0,a.kt)("h2",{id:"\u652f\u6301\u529f\u80fd"},"\u652f\u6301\u529f\u80fd"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"VRWebView")," \u4e3b\u8981\u63d0\u4f9b\u5982\u4e0b\u51e0\u9879\u529f\u80fd\uff1a"),(0,a.kt)("h3",{id:"\u7ec8\u7aef\u80fd\u529b"},"\u7ec8\u7aef\u80fd\u529b"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"\u57fa\u7840\u529f\u80fd"),"\uff1a\u6bd4\u5982\u5168\u5c4f\u3001\u9707\u52a8\u3001\u5206\u4eab\u3001\u6743\u9650\u68c0\u6d4b\u3001\u8bbf\u95ee\u76f8\u518c\u7b49\u6d4f\u89c8\u5668\u7aef\u65e0\u6cd5\u63d0\u4f9b\u7684\u529f\u80fd\u3002"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"\u8bed\u97f3\u901a\u9053"),"\uff1a\u9650\u4e8e ",(0,a.kt)("a",{parentName:"li",href:"https://webrtc.org/"},"WebRTC")," \u517c\u5bb9\u6027\uff0c\u7ec8\u7aef\u8bbe\u5907\u53ef\u4ee5\u4ee3\u7406 ",(0,a.kt)("a",{parentName:"li",href:"https://webrtc.org/"},"WebRTC")," \u7684\u80fd\u529b\u3002")),(0,a.kt)("h3",{id:"\u6027\u80fd\u4f53\u9a8c"},"\u6027\u80fd\u4f53\u9a8c"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"\u9884\u8f7d\u80fd\u529b"),"\uff1a\u5728\u5f00\u542f VR \u9875\u9762\u524d\uff0c\u53ef\u4ee5\u63d0\u524d\u9884\u8f7d\u4e00\u4e9b\u6570\u636e\u3001\u8d34\u56fe\u8d44\u6e90\u7b49\u3002"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"\u9996\u5c4f\u6e32\u67d3"),"\uff08",(0,a.kt)("em",{parentName:"li"},"\u90e8\u5206\u652f\u6301"),"\uff09\uff1a\u63d0\u4f9b\u7ec8\u7aef\u6e32\u67d3\u80fd\u529b\uff0c\u7b49\u524d\u7aef\u6e32\u67d3\u5b8c\u6210\u540e\u5b9e\u73b0\u65e0\u7f1d\u5207\u6362\u3002"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"\u4ee3\u7406\u8bf7\u6c42"),"\uff08",(0,a.kt)("em",{parentName:"li"},"\u90e8\u5206\u652f\u6301"),"\uff09\uff1a\u5145\u5206\u5229\u7528\u5ba2\u6237\u7aef\u9ad8\u6027\u80fd ",(0,a.kt)("strong",{parentName:"li"},"HTTP")," \u8bf7\u6c42\u80fd\u529b\uff0c\u5e76\u7f13\u5b58\u8bf7\u6c42\u7ed3\u679c\u89c4\u907f\u540e\u7eed\u91cd\u590d\u8bf7\u6c42\u3002")),(0,a.kt)("h2",{id:"\u6865-\u534f\u8bae"},'"\u6865" \u534f\u8bae'),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://www.npmjs.com/package/@realsee/jsbridge-x"},(0,a.kt)("inlineCode",{parentName:"a"},"@realsee/jsbridge-x"))," \u662f\u5b9e\u73b0 ",(0,a.kt)("inlineCode",{parentName:"p"},"VRWebView")," \u5bb9\u5668\u4e0e\u5176\u5d4c\u5165\u7684 Web \u9875\u9762\u95f4\u7684\u6d88\u606f\u4f20\u9012\u548c\u6570\u636e\u4ea4\u6362\u7684\u524d\u7aef SDK\u3002"),(0,a.kt)("p",null,"\u4f7f\u7528\u65b9\u5f0f\u7b49\u66f4\u591a\u7ec6\u8282\u8bf7\u79fb\u6b65\uff1a ",(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("a",{parentName:"strong",href:"/docs/webview/jsbridge/intro"},'"\u6865" \u534f\u8bae-\u4ecb\u7ecd')),"\u3002"),(0,a.kt)("admonition",{title:"\u6e29\u99a8\u63d0\u793a ",type:"tip"},(0,a.kt)("p",{parentName:"admonition"},"\u7531\u4e8e\u5404\u4e2a\u7ec8\u7aef\u7684 ",(0,a.kt)("inlineCode",{parentName:"p"},"WebView")," \u7684\u5b9e\u73b0\u673a\u5236\u4e0d\u4e00\u81f4\uff08iOS ",(0,a.kt)("a",{parentName:"p",href:"https://developer.apple.com/documentation/webkit/wkwebview"},"WKWebView"),"\u3001Android ",(0,a.kt)("a",{parentName:"p",href:"https://developer.android.com/reference/android/webkit/WebView"},"WebView"),"\u3001\u5fae\u4fe1\u5c0f\u7a0b\u5e8f ",(0,a.kt)("a",{parentName:"p",href:"https://developers.weixin.qq.com/miniprogram/dev/component/web-view.html"},"web-view")," \u7b49\u7b49\uff09\uff0c\u867d\u7136 ",(0,a.kt)("inlineCode",{parentName:"p"},"@realsee/jsbridge-x")," \u5df2\u5c3d\u91cf\u62b9\u5e73\u5b83\u4eec\u4e4b\u95f4\u7684\u5dee\u5f02\uff0c\u4f46\u7531\u4e8e\u5e73\u53f0\u7684\u5dee\u5f02\u6027\uff0c\u5177\u4f53\u7ec6\u8282\u8bf7\u4ee5\u5404\u4e2a\u7248\u672c\u5bf9\u5e94\u7684 API \u4e3a\u51c6\u3002")))}s.isMDXComponent=!0}}]);