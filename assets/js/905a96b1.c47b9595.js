"use strict";(self.webpackChunkrealsee_developer_github_com=self.webpackChunkrealsee_developer_github_com||[]).push([[270],{49613:(e,t,i)=>{i.d(t,{Zo:()=>d,kt:()=>c});var n=i(59496);function l(e,t,i){return t in e?Object.defineProperty(e,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[t]=i,e}function r(e,t){var i=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),i.push.apply(i,n)}return i}function a(e){for(var t=1;t<arguments.length;t++){var i=null!=arguments[t]?arguments[t]:{};t%2?r(Object(i),!0).forEach((function(t){l(e,t,i[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(i)):r(Object(i)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(i,t))}))}return e}function o(e,t){if(null==e)return{};var i,n,l=function(e,t){if(null==e)return{};var i,n,l={},r=Object.keys(e);for(n=0;n<r.length;n++)i=r[n],t.indexOf(i)>=0||(l[i]=e[i]);return l}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)i=r[n],t.indexOf(i)>=0||Object.prototype.propertyIsEnumerable.call(e,i)&&(l[i]=e[i])}return l}var u=n.createContext({}),p=function(e){var t=n.useContext(u),i=t;return e&&(i="function"==typeof e?e(t):a(a({},t),e)),i},d=function(e){var t=p(e.components);return n.createElement(u.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var i=e.components,l=e.mdxType,r=e.originalType,u=e.parentName,d=o(e,["components","mdxType","originalType","parentName"]),m=p(i),c=l,k=m["".concat(u,".").concat(c)]||m[c]||s[c]||r;return i?n.createElement(k,a(a({ref:t},d),{},{components:i})):n.createElement(k,a({ref:t},d))}));function c(e,t){var i=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var r=i.length,a=new Array(r);a[0]=m;var o={};for(var u in t)hasOwnProperty.call(t,u)&&(o[u]=t[u]);o.originalType=e,o.mdxType="string"==typeof e?e:l,a[1]=o;for(var p=2;p<r;p++)a[p]=i[p];return n.createElement.apply(null,a)}return n.createElement.apply(null,i)}m.displayName="MDXCreateElement"},55887:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>u,contentTitle:()=>a,default:()=>s,frontMatter:()=>r,metadata:()=>o,toc:()=>p});var n=i(2962),l=(i(59496),i(49613));const r={title:"\u5185\u7f6e\u63a5\u53e3"},a=void 0,o={unversionedId:"webview/jsbridge/built-in",id:"webview/jsbridge/built-in",title:"\u5185\u7f6e\u63a5\u53e3",description:"\u70b9\u51fb\u6b64\u5904\u53ef\u67e5\u770b\u5185\u7f6e\u63a5\u53e3\u5168\u91cf\u6587\u6863 \u3002",source:"@site/docs/webview/jsbridge/built-in.md",sourceDirName:"webview/jsbridge",slug:"/webview/jsbridge/built-in",permalink:"/docs/webview/jsbridge/built-in",draft:!1,tags:[],version:"current",lastUpdatedBy:"\u5c0f\u9640\u87ba",lastUpdatedAt:1647598986,formattedLastUpdatedAt:"2022\u5e743\u670818\u65e5",frontMatter:{title:"\u5185\u7f6e\u63a5\u53e3"},sidebar:"\u5bb9\u5668\u96c6\u6210",previous:{title:"@realsee/jsbridge-x",permalink:"/docs/webview/jsbridge/intro"},next:{title:"\u4e8b\u4ef6\u76d1\u542c",permalink:"/docs/webview/jsbridge/event"}},u={},p=[{value:"webViewType",id:"webviewtype",level:3},{value:"ready",id:"ready",level:3},{value:"loadProgress",id:"loadprogress",level:3},{value:"closeLoading",id:"closeloading",level:3},{value:"getDeviceInfo",id:"getdeviceinfo",level:3},{value:"getWebViewState",id:"getwebviewstate",level:3},{value:"setLeftTopBackButton",id:"setlefttopbackbutton",level:3},{value:"login",id:"login",level:3},{value:"logout",id:"logout",level:3},{value:"getUserInfo",id:"getuserinfo",level:3},{value:"openWebView",id:"openwebview",level:3},{value:"closeWebView",id:"closewebview",level:3},{value:"getBangsHeight",id:"getbangsheight",level:3},{value:"setOrientation",id:"setorientation",level:3},{value:"keepScreenLight",id:"keepscreenlight",level:3},{value:"shock",id:"shock",level:3},{value:"minimize",id:"minimize",level:3},{value:"saveImage2Album",id:"saveimage2album",level:3},{value:"detectMicro",id:"detectmicro",level:3},{value:"actionShare",id:"actionshare",level:3},{value:"preload",id:"preload",level:3},{value:"createCacheProxyUrl",id:"createcacheproxyurl",level:3}],d={toc:p};function s(e){let{components:t,...i}=e;return(0,l.kt)("wrapper",(0,n.Z)({},d,i,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("admonition",{type:"tip"},(0,l.kt)("p",{parentName:"admonition"},(0,l.kt)("strong",{parentName:"p"},(0,l.kt)("a",{parentName:"strong",href:"https://unpkg.com/@realsee/jsbridge-x/docs/interfaces/jsBridge.JSBridgeProtocol.html"},"\u70b9\u51fb\u6b64\u5904\u53ef\u67e5\u770b\u5185\u7f6e\u63a5\u53e3\u5168\u91cf\u6587\u6863")," \u3002"))),(0,l.kt)("h3",{id:"webviewtype"},"webViewType"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"webViewType: WebViewTypeEnum")," WebView \u7c7b\u578b")),(0,l.kt)("h3",{id:"ready"},"ready"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"ready: () => Promise<JSBridgeReturnType<boolean>>")," \u5224\u65ad jsBridge \u662f\u5426\u5c31\u7eea")),(0,l.kt)("h3",{id:"loadprogress"},"loadProgress"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"loadProgress: (progress: number) => Promise<JSBridgeReturnType<boolean>>")," \u63a7\u5236\u8fdb\u5ea6\u6761")),(0,l.kt)("h3",{id:"closeloading"},"closeLoading"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"closeLoading: () => Promise<JSBridgeReturnType<boolean>>")," \u5173\u95ed\u8fdb\u5ea6\u6761")),(0,l.kt)("h3",{id:"getdeviceinfo"},"getDeviceInfo"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"getDeviceInfo: () => Promise<JSBridgeReturnType<DeviceInfo | false>>")," \u83b7\u53d6\u5bb9\u5668\u8bbe\u5907\u4fe1\u606f")),(0,l.kt)("h3",{id:"getwebviewstate"},"getWebViewState"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"getWebViewState: () => Promise<JSBridgeReturnType<WebViewState | false>>")," \u83b7\u53d6\u6700\u65b0 WebView \u72b6\u6001")),(0,l.kt)("h3",{id:"setlefttopbackbutton"},"setLeftTopBackButton"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"setLeftTopBackButton: (enable: boolean) => Promise<JSBridgeReturnType<boolean>>")," \u8bbe\u7f6e\u5de6\u4e0a\u89d2\u9690\u85cf\u8fd4\u56de\u6309\u94ae\uff08\u4ec5 iOS \u7aef\u6709\u6548\uff09")),(0,l.kt)("h3",{id:"login"},"login"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"login: () => Promise<JSBridgeReturnType<UserInfo | false>>")," \u767b\u5f55")),(0,l.kt)("p",null,"\u767b\u5f55\u6210\u529f\u540e\u8fd4\u56de\u5f53\u524d\u767b\u5f55\u7528\u6237\u7684\u4fe1\u606f\u3002"),(0,l.kt)("h3",{id:"logout"},"logout"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"logout: () => Promise<JSBridgeReturnType<boolean>>")," \u767b\u51fa")),(0,l.kt)("h3",{id:"getuserinfo"},"getUserInfo"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"getUserInfo: () => Promise<JSBridgeReturnType<UserInfo | false>>")," \u83b7\u53d6\u7528\u6237\u4fe1\u606f\uff08\u5df2\u767b\u5f55\u60c5\u51b5\u4e0b\uff09")),(0,l.kt)("h3",{id:"openwebview"},"openWebView"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"openWebView: (url: string, way: OpenWebViewEnum) => Promise<JSBridgeReturnType<boolean>>")," \u6253\u5f00\u65b0\u7684 WebView")),(0,l.kt)("h3",{id:"closewebview"},"closeWebView"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"closeWebView: () => Promise<JSBridgeReturnType<boolean>>")," \u5173\u95ed\u5f53\u524d WebView")),(0,l.kt)("h3",{id:"getbangsheight"},"getBangsHeight"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"getBangsHeight: () => Promise<JSBridgeReturnType<number | false>>"),' \u83b7\u53d6 "\u5218\u6d77" \\ "\u6316\u5b54" \u5360\u7528\u5c4f\u5e55\u7684\u9ad8\u5ea6')),(0,l.kt)("h3",{id:"setorientation"},"setOrientation"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"setOrientation: (orientation: OrientationEnum) => Promise<JSBridgeReturnType<boolean>>")," \u8bbe\u7f6e\u6a2a\u7ad6\u5c4f")),(0,l.kt)("h3",{id:"keepscreenlight"},"keepScreenLight"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"keepScreenLight: (enable: boolean) => Promise<JSBridgeReturnType<boolean>>")," \u4fdd\u6301\u5c4f\u5e55\u5e38\u4eae")),(0,l.kt)("h3",{id:"shock"},"shock"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"shock: (duration?: number) => Promise<JSBridgeReturnType<boolean>>")," \u9707\u52a8")),(0,l.kt)("p",null,"duration \u8868\u793a\u9707\u52a8\u7684\u65f6\u95f4/\u6b21\u6570\uff1bAndroid \u7aef\u8868\u793a\u9707\u52a8\u591a\u5c11",(0,l.kt)("strong",{parentName:"p"},"\u79d2"),"\uff0ciOS \u7aef\u8868\u793a\u9707\u52a8\u591a\u5c11",(0,l.kt)("strong",{parentName:"p"},"\u6b21"),"\u3002"),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"\u53c2\u6570 ",(0,l.kt)("inlineCode",{parentName:"p"},"duration")," \u5728 iOS \u7aef\u8868\u793a\u9707\u52a8\u6b21\u6570\uff1b\u5728 Android \u7aef\u8868\u793a\u9707\u52a8\u65f6\u957f\uff08\u5355\u4f4d\uff1a\u79d2\uff09\u3002")),(0,l.kt)("h3",{id:"minimize"},"minimize"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"minimize: () => Promise<JSBridgeReturnType<boolean>>"),' \u6700\u5c0f\u5316\uff08"\u5c0f\u7a97"\u6a21\u5f0f\uff09\u3002')),(0,l.kt)("h3",{id:"saveimage2album"},"saveImage2Album"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"saveImage2Album: (base64: string) => Promise<JSBridgeReturnType<boolean>>")," \u4fdd\u5b58\u56fe\u7247\u81f3\u76f8\u518c")),(0,l.kt)("h3",{id:"detectmicro"},"detectMicro"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"detectMicro: () => Promise<JSBridgeReturnType<boolean>>")," \u68c0\u6d4b\u9ea6\u514b\u98ce\u6388\u6743")),(0,l.kt)("p",null,"\u5982\u679c\u9ea6\u514b\u98ce\u6ca1\u6709\u6388\u6743\uff0c\u6b64\u65b9\u6cd5\u4f1a\u81ea\u52a8\u5f39\u7a97\u5f15\u5bfc\u7528\u6237\u5f00\u542f\u6388\u6743\u3002"),(0,l.kt)("h3",{id:"actionshare"},"actionShare"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"actionShare: (shareConfig: Partial<ShareConfig>) => Promise<JSBridgeReturnType<boolean>>")," \u5206\u4eab")),(0,l.kt)("h3",{id:"preload"},"preload"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"preload: (urls: string[]) => Promise<JSBridgeReturnType<boolean>>")," \u9759\u6001\u8d44\u6e90\u9884\u8f7d")),(0,l.kt)("admonition",{title:"\u6ce8\u610f",type:"caution"},(0,l.kt)("ul",{parentName:"admonition"},(0,l.kt)("li",{parentName:"ul"},"\u6b64\u65b9\u6cd5\u4ec5\u5bf9 iOS VRWebView \\ Android VRWebView \u6709\u6548\u3002"),(0,l.kt)("li",{parentName:"ul"},"\u8bf7\u6c42\u7ed3\u679c\u4f1a\u88ab\u5ba2\u6237\u7aef\u7f13\u5b58\uff0c\u5373\u7b2c\u4e8c\u6b21\u4e4b\u540e\u7684\u8bf7\u6c42 ",(0,l.kt)("strong",{parentName:"li"},"\u53ef\u80fd")," \u76f4\u63a5\u8bfb\u7f13\u5b58\u503c\uff0c\u4e0d\u4f1a\u6267\u884c HTTP \u8bf7\u6c42\u3002"))),(0,l.kt)("h3",{id:"createcacheproxyurl"},"createCacheProxyUrl"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"createCacheProxyUrl: (urls: string | string[]) => string[]")," \u751f\u6210\u4ee3\u7406\u8bf7\u6c42\u94fe\u63a5")))}s.isMDXComponent=!0}}]);