"use strict";(self.webpackChunkrealsee_developer_github_com=self.webpackChunkrealsee_developer_github_com||[]).push([[8888],{3905:function(e,n,t){t.d(n,{Zo:function(){return u},kt:function(){return m}});var r=t(67294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var l=r.createContext({}),c=function(e){var n=r.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},u=function(e){var n=c(e.components);return r.createElement(l.Provider,{value:n},e.children)},d={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},p=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),p=c(t),m=a,v=p["".concat(l,".").concat(m)]||p[m]||d[m]||o;return t?r.createElement(v,i(i({ref:n},u),{},{components:t})):r.createElement(v,i({ref:n},u))}));function m(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var o=t.length,i=new Array(o);i[0]=p;var s={};for(var l in n)hasOwnProperty.call(n,l)&&(s[l]=n[l]);s.originalType=e,s.mdxType="string"==typeof e?e:a,i[1]=s;for(var c=2;c<o;c++)i[c]=t[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,t)}p.displayName="MDXCreateElement"},58215:function(e,n,t){t.d(n,{Z:function(){return a}});var r=t(67294);function a(e){var n=e.children,t=e.hidden,a=e.className;return r.createElement("div",{role:"tabpanel",hidden:t,className:a},n)}},9877:function(e,n,t){t.d(n,{Z:function(){return u}});var r=t(87462),a=t(67294),o=t(72389),i=t(65450),s=t(86010),l="tabItem_LplD";function c(e){var n,t,o,c=e.lazy,u=e.block,d=e.defaultValue,p=e.values,m=e.groupId,v=e.className,f=a.Children.map(e.children,(function(e){if((0,a.isValidElement)(e)&&void 0!==e.props.value)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),g=null!=p?p:f.map((function(e){var n=e.props;return{value:n.value,label:n.label,attributes:n.attributes}})),h=(0,i.lx)(g,(function(e,n){return e.value===n.value}));if(h.length>0)throw new Error('Docusaurus error: Duplicate values "'+h.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.');var b=null===d?d:null!=(n=null!=d?d:null==(t=f.find((function(e){return e.props.default})))?void 0:t.props.value)?n:null==(o=f[0])?void 0:o.props.value;if(null!==b&&!g.some((function(e){return e.value===b})))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+b+'" but none of its children has the corresponding value. Available values are: '+g.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");var k=(0,i.UB)(),w=k.tabGroupChoices,N=k.setTabGroupChoices,y=(0,a.useState)(b),x=y[0],T=y[1],C=[],R=(0,i.o5)().blockElementScrollPositionUntilNextRender;if(null!=m){var j=w[m];null!=j&&j!==x&&g.some((function(e){return e.value===j}))&&T(j)}var E=function(e){var n=e.currentTarget,t=C.indexOf(n),r=g[t].value;r!==x&&(R(n),T(r),null!=m&&N(m,r))},O=function(e){var n,t=null;switch(e.key){case"ArrowRight":var r=C.indexOf(e.currentTarget)+1;t=C[r]||C[0];break;case"ArrowLeft":var a=C.indexOf(e.currentTarget)-1;t=C[a]||C[C.length-1]}null==(n=t)||n.focus()};return a.createElement("div",{className:"tabs-container"},a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,s.Z)("tabs",{"tabs--block":u},v)},g.map((function(e){var n=e.value,t=e.label,o=e.attributes;return a.createElement("li",(0,r.Z)({role:"tab",tabIndex:x===n?0:-1,"aria-selected":x===n,key:n,ref:function(e){return C.push(e)},onKeyDown:O,onFocus:E,onClick:E},o,{className:(0,s.Z)("tabs__item",l,null==o?void 0:o.className,{"tabs__item--active":x===n})}),null!=t?t:n)}))),c?(0,a.cloneElement)(f.filter((function(e){return e.props.value===x}))[0],{className:"margin-vert--md"}):a.createElement("div",{className:"margin-vert--md"},f.map((function(e,n){return(0,a.cloneElement)(e,{key:n,hidden:e.props.value!==x})}))))}function u(e){var n=(0,o.Z)();return a.createElement(c,(0,r.Z)({key:String(n)},e))}},97946:function(e,n,t){t.r(n),t.d(n,{assets:function(){return p},contentTitle:function(){return u},default:function(){return f},frontMatter:function(){return c},metadata:function(){return d},toc:function(){return m}});var r=t(87462),a=t(63366),o=(t(67294),t(3905)),i=t(9877),s=t(58215),l=["components"],c={title:"\u6d4f\u89c8\u5668\u8bed\u97f3"},u=void 0,d={unversionedId:"front/live/function-expansion/rtc/browser",id:"front/live/function-expansion/rtc/browser",title:"\u6d4f\u89c8\u5668\u8bed\u97f3",description:"\u8bed\u97f3\u80fd\u529b\u9700\u4f9d\u8d56 WebView/Browser \u5bb9\u5668\uff0c\u5373\u9700\u8981\u5bb9\u5668\u7aef\u5b9e\u73b0 RTC \u80fd\u529b\u3002",source:"@site/docs/front/live/function-expansion/rtc/browser.md",sourceDirName:"front/live/function-expansion/rtc",slug:"/front/live/function-expansion/rtc/browser",permalink:"/docs/front/live/function-expansion/rtc/browser",tags:[],version:"current",lastUpdatedBy:"\u5c0f\u9640\u87ba",lastUpdatedAt:1647598986,formattedLastUpdatedAt:"2022/3/18",frontMatter:{title:"\u6d4f\u89c8\u5668\u8bed\u97f3"},sidebar:"\u5982\u89c6\u5e26\u770b",previous:{title:"VR\u540c\u5c4f",permalink:"/docs/front/live/get-started/sync-five-state"},next:{title:"Android \u8bed\u97f3\u96c6\u6210",permalink:"/docs/front/live/function-expansion/rtc/android"}},p={},m=[{value:"\u5b89\u88c5\u4f9d\u8d56",id:"\u5b89\u88c5\u4f9d\u8d56",level:2},{value:"React \u793a\u4f8b",id:"react-\u793a\u4f8b",level:2},{value:"\u521d\u59cb\u5316 rtc \u5b9e\u4f8b",id:"\u521d\u59cb\u5316-rtc-\u5b9e\u4f8b",level:3},{value:"\u8bed\u97f3\u6210\u529f\u52a0\u5165\u76d1\u542c",id:"\u8bed\u97f3\u6210\u529f\u52a0\u5165\u76d1\u542c",level:3},{value:"\u8bed\u97f3\u9519\u8bef\u76d1\u542c",id:"\u8bed\u97f3\u9519\u8bef\u76d1\u542c",level:3}],v={toc:m};function f(e){var n=e.components,t=(0,a.Z)(e,l);return(0,o.kt)("wrapper",(0,r.Z)({},v,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"\u8bed\u97f3\u80fd\u529b\u9700\u4f9d\u8d56 WebView/Browser \u5bb9\u5668\uff0c\u5373\u9700\u8981\u5bb9\u5668\u7aef\u5b9e\u73b0 RTC \u80fd\u529b\u3002\n\u4e3a\u4e86\u65b9\u4fbf\u5f00\u53d1\u8005\u63a5\u5165\uff0c\u5982\u89c6\u5f00\u53d1\u8005\u4e2d\u5fc3 VRTC \u670d\u52a1 \u4e3a\u4e3b\u6d41\u5e73\u53f0\u63d0\u4f9b \u5bb9\u5668 SDK \u548c ",(0,o.kt)("inlineCode",{parentName:"p"},"jsbridge-x")," \u3002\nLive \u901a\u8fc7 jsbridge-x \u4e0e \u96c6\u6210\u4e86\u5bb9\u5668 SDK \u7684\u5ba2\u6237\u7aef\u5e94\u7528\u6216\u5fae\u4fe1\u5c0f\u7a0b\u5e8f\u5e94\u7528\u7a0b\u5e8f\u6865\u63a5\uff0c\u5b9e\u73b0\u539f\u751f\u80fd\u529b\u7684\u8c03\u7528\u3002\u8fd9\u4e2a jsbridge-x \u5b9e\u4f8b\u9700\u4f5c\u4e3a\u914d\u7f6e\u53c2\u6570\u63d0\u4f9b\u7ed9createLive()\u3002\n\u5982\u679c\u662f iOS/Android App\uff08\u5df2\u63a5\u5165\u5982\u89c6 VRTC \u5bb9\u5668 SDK\uff09\u3002",(0,o.kt)("strong",{parentName:"p"},"\u672c\u7ae0\u5c06\u4e3a\u60a8\u4ecb\u7ecd\u5982\u4f55\u5728\u6d4f\u89c8\u5668\u7aef\u52a0\u5165\u5e26\u770b\u8bed\u8a00\u529f\u80fd\u3002")))),(0,o.kt)("h2",{id:"\u5b89\u88c5\u4f9d\u8d56"},"\u5b89\u88c5\u4f9d\u8d56"),(0,o.kt)("div",{className:"admonition admonition-important alert alert--info"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"important")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"\u5e26\u770b\u8bed\u97f3\u5f3a\u4f9d\u8d56 ",(0,o.kt)("inlineCode",{parentName:"p"},"@realsee/jsbridge-x")," \u5305\uff0c\u5f00\u53d1\u65f6\u8bf7\u52a1\u5fc5\u5b89\u88c5\u6b64\u5305\u3002"))),(0,o.kt)(i.Z,{groupId:"npm2yarn",mdxType:"Tabs"},(0,o.kt)(s.Z,{value:"npm",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"npm install @realsee/jsbridge-x\n"))),(0,o.kt)(s.Z,{value:"yarn",label:"Yarn",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"yarn add @realsee/jsbridge-x\n")))),(0,o.kt)("h2",{id:"react-\u793a\u4f8b"},"React \u793a\u4f8b"),(0,o.kt)("h3",{id:"\u521d\u59cb\u5316-rtc-\u5b9e\u4f8b"},"\u521d\u59cb\u5316 rtc \u5b9e\u4f8b"),(0,o.kt)("p",null,"\u5728\u5e26\u770b\u5b9e\u4f8b\u521b\u5efa\u6587\u4ef6\u4e2d\u589e\u52a0\u521d\u59cb\u5316 rtc \u5b9e\u4f8b\u7684\u5185\u5bb9\u3002"),(0,o.kt)(i.Z,{mdxType:"Tabs"},(0,o.kt)(s.Z,{value:"JavaScript",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-jsx"},"import { BrowserRTC } from \"@realsee/live/lib/RTC/BrowserRTC\"\nimport { VRWebViewRTC } from \"@realsee/live/lib/RTC/VRWebViewRTC\"\n/*\n* \u6ce8\u610f\uff1aJSBridgeBrowser \u9700\u8981\u7528\u6237\u7ee7\u627f JSBridgeProtocol \u5b9e\u4f8b\u81ea\u884c\u5b9e\u73b0\n* import JSBridgeProtocol from '@realsee/jsbridge-x/lib/typings/JSBridgeProtocol'\n* */\nimport { JSBridgeBrowser } from '../utils/browser'\nimport request from \"../utils/request\"\n\n/*\n* \u83b7\u53d6\u8bed\u8a00\u7b7e\u540d\u7684\u56de\u8c03\u65b9\u6cd5\uff1agetVoiceSign\n* \u6b64\u65b9\u6cd5\u7531 sdk \u5185\u90e8\u4f20\u53c2\u8c03\u7528\uff0c\u60a8\u53ea\u9700\u6309\u6b64\u5f62\u5f0f\u5b9e\u73b0\u65b9\u6cd5\u5373\u53ef\u3002\n* \u3010\u7279\u522b\u8bf4\u660e\u3011\uff1a\u6b64\u5904\u7684 opts \u662f\u5f62\u53c2\uff0csdk \u5185\u90e8\u5728\u8c03\u7528\u8bed\u8a00\u7b7e\u540d\u65b9\u6cd5\u65f6\u4f1a\u81ea\u52a8\u6ce8\u5165\uff0c\u6309\u7167\u793a\u4f8b\u4e66\u5199\u5b83\u7684\u5f15\u7528\u5373\u53ef\uff0c\u65e0\u9700\u81ea\u884c\u6ce8\u5165\u53c2\u6570\u3002\n* */\n// highlight-start\nconst getVoiceSign = async (opts) => { // \u6b64\u5904\u7684 opts \u662f\u5f62\u53c2\uff0csdk \u5185\u90e8\u5728\u8c03\u7528\u8bed\u8a00\u7b7e\u540d\u65b9\u6cd5\u65f6\u4f1a\u81ea\u52a8\u6ce8\u5165\uff0c\u65e0\u9700\u4e1a\u52a1\u65b9\u5904\u7406\u3002\n// highlight-end    \n    // \u5728\u6b64\u5904\u8bf7\u6c42\u60a8\u7684\u540e\u7aef\u63a5\u53e3\uff0c\u8fd9\u91cc\u7684 request \u7684\u65b9\u6cd5\u4ec5\u7b80\u5355\u5bf9 fetch \u65b9\u6cd5\u505a\u4e86\u5c01\u88c5\uff0c\u672a\u505a\u7279\u6b8a\u5904\u7406\u3002\n    return await request('getRtcSign', {\n        voice_id: opts.voiceId,\n        room_id: opts.roomId,\n        user_id: opts.userId\n    }).then((res) => { // \u62ff\u5230\u540e\u7aef\u8fd4\u56de\u7684\u8bed\u97f3\u7b7e\u540d\u7b49\u4fe1\u606f\uff0c\u5e76\u6309\u7167 sdk \u8981\u6c42\uff0creturn \u51fa\u53bb\u5373\u53ef\n        return {\n            sdkAppId: Number(res.voice_app_id),\n            userId: res.user_identifier,\n            userSig: res.sign\n        }\n    }).catch((error) => {\n        throw Error(error.message)\n    })\n}\n\n// \u521d\u59cb\u5316 rtc \u5b9e\u4f8b\nlet rtcInstance\nrtcInstance = new BrowserRTC({jsBridge: new JSBridgeBrowser(), getVoiceSign})\n\nconst liveInstance = createLiveReact({\n    __debug__: true,\n    rtc: rtcInstance\n})\n\nexport default liveInstance\n")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"\u4e00\u4e2a\u7b80\u5355\u7684 JSBridgeBrowser \u5b9e\u73b0")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js",metastring:"title='browser.js'",title:"'browser.js'"},"import request from \"./request\";\n\nexport class JSBridgeBrowser {\n    \n    closeWebView() {\n        return window.history.back()\n    }\n    \n    // way\u8868\u793a\u65b0\u8d77\u8fd8\u662f\u8986\u76d6\uff0c\u5148\u652f\u6301\u65b0\u8d77\n    openWebView(url, way) {\n        return window.location.href(url)\n    }\n    \n    actionShare(shareConfig) {\n        return () => {}\n    }\n    \n    async getUserInfo() {\n        const res = await request('getUserId')\n            .then(data => {\n                return data.user_id\n            })\n            .catch(e => {\n                return e.message\n            })\n        const userInfo = {\n            userId: res\n        }\n        \n        return [userInfo,]\n    }\n    \n    async login() {\n        const res = await request('getUserId')\n            .then(data => {\n                return data.user_id\n            })\n            .catch(e => {\n                return e.message\n            })\n        \n        return res\n    }\n    \n    async logout() {\n        return {}\n    }\n    \n    async closeLoading() {\n        return {}\n    }\n    \n    async getBangsHeight() {\n        return 0\n    }\n}\n\n")))),(0,o.kt)("h3",{id:"\u8bed\u97f3\u6210\u529f\u52a0\u5165\u76d1\u542c"},"\u8bed\u97f3\u6210\u529f\u52a0\u5165\u76d1\u542c"),(0,o.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"\u901a\u8fc7\u5e26\u770b\u5b9e\u4f8b\u63d0\u4f9b\u7684 ",(0,o.kt)("inlineCode",{parentName:"p"},"useRTCEventCallback")," hook \u76d1\u542c\u8bed\u97f3\u6210\u529f\u52a0\u5165\u4e8b\u4ef6\u3002"))),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-jsx"},"import LiveReact from './LiveReact'\n\nconst { useRTCEventCallback } = LiveReact\n\nuseRTCEventCallback(\"joined\", () => {\n    console.log('rtc -- joined')\n})\n")),(0,o.kt)("h3",{id:"\u8bed\u97f3\u9519\u8bef\u76d1\u542c"},"\u8bed\u97f3\u9519\u8bef\u76d1\u542c"),(0,o.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"\u901a\u8fc7\u5e26\u770b\u5b9e\u4f8b\u63d0\u4f9b\u7684 ",(0,o.kt)("inlineCode",{parentName:"p"},"useRTCEventCallback")," hook \u76d1\u542c\u8bed\u97f3\u62a5\u9519\u4fe1\u606f\u3002"))),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-jsx"},"import LiveReact from './LiveReact'\n\nconst { useRTCEventCallback } = LiveReact\n\nuseRTCEventCallback(\"error\", (error) => {\n    console.log('rtc -- error: ', error.message)\n})\n")))}f.isMDXComponent=!0}}]);