"use strict";(self.webpackChunkrealsee_developer_github_com=self.webpackChunkrealsee_developer_github_com||[]).push([[8888],{49613:(e,n,t)=>{t.d(n,{Zo:()=>u,kt:()=>m});var r=t(59496);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var s=r.createContext({}),c=function(e){var n=r.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},u=function(e){var n=c(e.components);return r.createElement(s.Provider,{value:n},e.children)},d={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},p=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),p=c(t),m=a,b=p["".concat(s,".").concat(m)]||p[m]||d[m]||o;return t?r.createElement(b,i(i({ref:n},u),{},{components:t})):r.createElement(b,i({ref:n},u))}));function m(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var o=t.length,i=new Array(o);i[0]=p;var l={};for(var s in n)hasOwnProperty.call(n,s)&&(l[s]=n[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var c=2;c<o;c++)i[c]=t[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,t)}p.displayName="MDXCreateElement"},45558:(e,n,t)=>{t.d(n,{Z:()=>i});var r=t(59496),a=t(45924);const o="tabItem_IPoj";function i(e){let{children:n,hidden:t,className:i}=e;return r.createElement("div",{role:"tabpanel",className:(0,a.Z)(o,i),hidden:t},n)}},38637:(e,n,t)=>{t.d(n,{Z:()=>m});var r=t(2962),a=t(59496),o=t(45924),i=t(26709),l=t(33548),s=t(14714),c=t(60411);const u="tabList_xr86",d="tabItem_r4_W";function p(e){var n;const{lazy:t,block:i,defaultValue:p,values:m,groupId:b,className:v}=e,f=a.Children.map(e.children,(e=>{if((0,a.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})),g=m??f.map((e=>{let{props:{value:n,label:t,attributes:r}}=e;return{value:n,label:t,attributes:r}})),k=(0,l.l)(g,((e,n)=>e.value===n.value));if(k.length>0)throw new Error(`Docusaurus error: Duplicate values "${k.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`);const h=null===p?p:p??(null==(n=f.find((e=>e.props.default)))?void 0:n.props.value)??f[0].props.value;if(null!==h&&!g.some((e=>e.value===h)))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${h}" but none of its children has the corresponding value. Available values are: ${g.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);const{tabGroupChoices:y,setTabGroupChoices:w}=(0,s.U)(),[T,x]=(0,a.useState)(h),j=[],{blockElementScrollPositionUntilNextRender:N}=(0,c.o5)();if(null!=b){const e=y[b];null!=e&&e!==T&&g.some((n=>n.value===e))&&x(e)}const C=e=>{const n=e.currentTarget,t=j.indexOf(n),r=g[t].value;r!==T&&(N(n),x(r),null!=b&&w(b,String(r)))},E=e=>{var n;let t=null;switch(e.key){case"Enter":C(e);break;case"ArrowRight":{const n=j.indexOf(e.currentTarget)+1;t=j[n]??j[0];break}case"ArrowLeft":{const n=j.indexOf(e.currentTarget)-1;t=j[n]??j[j.length-1];break}}null==(n=t)||n.focus()};return a.createElement("div",{className:(0,o.Z)("tabs-container",u)},a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":i},v)},g.map((e=>{let{value:n,label:t,attributes:i}=e;return a.createElement("li",(0,r.Z)({role:"tab",tabIndex:T===n?0:-1,"aria-selected":T===n,key:n,ref:e=>j.push(e),onKeyDown:E,onClick:C},i,{className:(0,o.Z)("tabs__item",d,null==i?void 0:i.className,{"tabs__item--active":T===n})}),t??n)}))),t?(0,a.cloneElement)(f.filter((e=>e.props.value===T))[0],{className:"margin-top--md"}):a.createElement("div",{className:"margin-top--md"},f.map(((e,n)=>(0,a.cloneElement)(e,{key:n,hidden:e.props.value!==T})))))}function m(e){const n=(0,i.Z)();return a.createElement(p,(0,r.Z)({key:String(n)},e))}},84366:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>u,contentTitle:()=>s,default:()=>m,frontMatter:()=>l,metadata:()=>c,toc:()=>d});var r=t(2962),a=(t(59496),t(49613)),o=t(38637),i=t(45558);const l={title:"\u6d4f\u89c8\u5668\u8bed\u97f3"},s=void 0,c={unversionedId:"front/live/function-expansion/rtc/browser",id:"front/live/function-expansion/rtc/browser",title:"\u6d4f\u89c8\u5668\u8bed\u97f3",description:"jsbridge-x \u4e0e \u96c6\u6210\u4e86\u5bb9\u5668 SDK \u7684\u5ba2\u6237\u7aef\u5e94\u7528\u6216\u5fae\u4fe1\u5c0f\u7a0b\u5e8f\u5e94\u7528\u7a0b\u5e8f\u6865\u63a5\uff0c\u5b9e\u73b0\u539f\u751f\u80fd\u529b\u7684\u8c03\u7528\u3002\u8fd9\u4e2a jsbridge-x \u5b9e\u4f8b\u9700\u4f5c\u4e3a\u914d\u7f6e\u53c2\u6570\u63d0\u4f9b\u7ed9 createLive()\u3002 \u5982\u679c\u662f iOS/Android App\uff08\u5df2\u63a5\u5165\u5982\u89c6",source:"@site/docs/front/live/function-expansion/rtc/browser.md",sourceDirName:"front/live/function-expansion/rtc",slug:"/front/live/function-expansion/rtc/browser",permalink:"/docs/front/live/function-expansion/rtc/browser",draft:!1,tags:[],version:"current",lastUpdatedBy:"sansi.lcj",lastUpdatedAt:1669717185,formattedLastUpdatedAt:"2022\u5e7411\u670829\u65e5",frontMatter:{title:"\u6d4f\u89c8\u5668\u8bed\u97f3"},sidebar:"\u5982\u89c6\u5e26\u770b",previous:{title:"VR\u540c\u5c4f",permalink:"/docs/front/live/get-started/sync-five-state"},next:{title:"Android \u8bed\u97f3\u96c6\u6210",permalink:"/docs/front/live/function-expansion/rtc/android"}},u={},d=[{value:"\u5b89\u88c5\u4f9d\u8d56",id:"\u5b89\u88c5\u4f9d\u8d56",level:2},{value:"React \u793a\u4f8b",id:"react-\u793a\u4f8b",level:2},{value:"\u521d\u59cb\u5316 rtc \u5b9e\u4f8b",id:"\u521d\u59cb\u5316-rtc-\u5b9e\u4f8b",level:3},{value:"\u8bed\u97f3\u6210\u529f\u52a0\u5165\u76d1\u542c",id:"\u8bed\u97f3\u6210\u529f\u52a0\u5165\u76d1\u542c",level:3},{value:"\u8bed\u97f3\u9519\u8bef\u76d1\u542c",id:"\u8bed\u97f3\u9519\u8bef\u76d1\u542c",level:3}],p={toc:d};function m(e){let{components:n,...t}=e;return(0,a.kt)("wrapper",(0,r.Z)({},p,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("admonition",{type:"tip"},(0,a.kt)("mdxAdmonitionTitle",{parentName:"admonition"},"\u8bed\u97f3\u80fd\u529b\u9700\u4f9d\u8d56 WebView/Browser \u5bb9\u5668\uff0c\u5373\u9700\u8981\u5bb9\u5668\u7aef\u5b9e\u73b0 RTC \u80fd\u529b\u3002 \u4e3a\u4e86\u65b9\u4fbf\u5f00\u53d1\u8005\u63a5\u5165\uff0c\u5982\u89c6\u5f00\u53d1\u8005\u4e2d\u5fc3 VRTC \u670d\u52a1 \u4e3a\u4e3b\u6d41\u5e73\u53f0\u63d0\u4f9b \u5bb9\u5668 SDK \u548c ",(0,a.kt)("inlineCode",{parentName:"mdxAdmonitionTitle"},"jsbridge-x")," \u3002 Live \u901a\u8fc7"),(0,a.kt)("p",{parentName:"admonition"},"jsbridge-x \u4e0e \u96c6\u6210\u4e86\u5bb9\u5668 SDK \u7684\u5ba2\u6237\u7aef\u5e94\u7528\u6216\u5fae\u4fe1\u5c0f\u7a0b\u5e8f\u5e94\u7528\u7a0b\u5e8f\u6865\u63a5\uff0c\u5b9e\u73b0\u539f\u751f\u80fd\u529b\u7684\u8c03\u7528\u3002\u8fd9\u4e2a jsbridge-x \u5b9e\u4f8b\u9700\u4f5c\u4e3a\u914d\u7f6e\u53c2\u6570\u63d0\u4f9b\u7ed9 createLive()\u3002 \u5982\u679c\u662f iOS/Android App\uff08\u5df2\u63a5\u5165\u5982\u89c6\nVRTC \u5bb9\u5668 SDK\uff09\u3002",(0,a.kt)("strong",{parentName:"p"},"\u672c\u7ae0\u5c06\u4e3a\u60a8\u4ecb\u7ecd\u5982\u4f55\u5728\u6d4f\u89c8\u5668\u7aef\u52a0\u5165\u5e26\u770b\u8bed\u8a00\u529f\u80fd\u3002"))),(0,a.kt)("h2",{id:"\u5b89\u88c5\u4f9d\u8d56"},"\u5b89\u88c5\u4f9d\u8d56"),(0,a.kt)("admonition",{type:"important"},(0,a.kt)("mdxAdmonitionTitle",{parentName:"admonition"},"\u5e26\u770b\u8bed\u97f3\u5f3a\u4f9d\u8d56 ",(0,a.kt)("inlineCode",{parentName:"mdxAdmonitionTitle"},"@realsee/jsbridge-x")," \u5305\uff0c\u5f00\u53d1\u65f6\u8bf7\u52a1\u5fc5\u5b89\u88c5\u6b64\u5305\u3002")),(0,a.kt)(o.Z,{groupId:"npm2yarn",mdxType:"Tabs"},(0,a.kt)(i.Z,{value:"npm",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"npm install @realsee/jsbridge-x\n"))),(0,a.kt)(i.Z,{value:"yarn",label:"Yarn",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"yarn add @realsee/jsbridge-x\n")))),(0,a.kt)("h2",{id:"react-\u793a\u4f8b"},"React \u793a\u4f8b"),(0,a.kt)("h3",{id:"\u521d\u59cb\u5316-rtc-\u5b9e\u4f8b"},"\u521d\u59cb\u5316 rtc \u5b9e\u4f8b"),(0,a.kt)("p",null,"\u5728\u5e26\u770b\u5b9e\u4f8b\u521b\u5efa\u6587\u4ef6\u4e2d\u589e\u52a0\u521d\u59cb\u5316 rtc \u5b9e\u4f8b\u7684\u5185\u5bb9\u3002"),(0,a.kt)(o.Z,{mdxType:"Tabs"},(0,a.kt)(i.Z,{value:"JavaScript",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-jsx"},'import { BrowserRTC } from "@realsee/live/lib/RTC/BrowserRTC";\nimport { VRWebViewRTC } from "@realsee/live/lib/RTC/VRWebViewRTC";\n/*\n * \u6ce8\u610f\uff1aJSBridgeBrowser \u9700\u8981\u7528\u6237\u7ee7\u627f JSBridgeProtocol \u5b9e\u4f8b\u81ea\u884c\u5b9e\u73b0\n * import JSBridgeProtocol from \'@realsee/jsbridge-x/lib/typings/JSBridgeProtocol\'\n * */\nimport { JSBridgeBrowser } from "../utils/browser";\nimport request from "../utils/request";\n\n/*\n * \u83b7\u53d6\u8bed\u8a00\u7b7e\u540d\u7684\u56de\u8c03\u65b9\u6cd5\uff1agetVoiceSign\n * \u6b64\u65b9\u6cd5\u7531 sdk \u5185\u90e8\u4f20\u53c2\u8c03\u7528\uff0c\u60a8\u53ea\u9700\u6309\u6b64\u5f62\u5f0f\u5b9e\u73b0\u65b9\u6cd5\u5373\u53ef\u3002\n * \u3010\u7279\u522b\u8bf4\u660e\u3011\uff1a\u6b64\u5904\u7684 opts \u662f\u5f62\u53c2\uff0csdk \u5185\u90e8\u5728\u8c03\u7528\u8bed\u8a00\u7b7e\u540d\u65b9\u6cd5\u65f6\u4f1a\u81ea\u52a8\u6ce8\u5165\uff0c\u6309\u7167\u793a\u4f8b\u4e66\u5199\u5b83\u7684\u5f15\u7528\u5373\u53ef\uff0c\u65e0\u9700\u81ea\u884c\u6ce8\u5165\u53c2\u6570\u3002\n * */\n// highlight-start\nconst getVoiceSign = async (opts) => {\n  // \u6b64\u5904\u7684 opts \u662f\u5f62\u53c2\uff0csdk \u5185\u90e8\u5728\u8c03\u7528\u8bed\u8a00\u7b7e\u540d\u65b9\u6cd5\u65f6\u4f1a\u81ea\u52a8\u6ce8\u5165\uff0c\u65e0\u9700\u4e1a\u52a1\u65b9\u5904\u7406\u3002\n  // highlight-end\n  // \u5728\u6b64\u5904\u8bf7\u6c42\u60a8\u7684\u540e\u7aef\u63a5\u53e3\uff0c\u8fd9\u91cc\u7684 request \u7684\u65b9\u6cd5\u4ec5\u7b80\u5355\u5bf9 fetch \u65b9\u6cd5\u505a\u4e86\u5c01\u88c5\uff0c\u672a\u505a\u7279\u6b8a\u5904\u7406\u3002\n  return await request("getRtcSign", {\n    voice_id: opts.voiceId,\n    room_id: opts.roomId,\n    user_id: opts.userId,\n  })\n    .then((res) => {\n      // \u62ff\u5230\u540e\u7aef\u8fd4\u56de\u7684\u8bed\u97f3\u7b7e\u540d\u7b49\u4fe1\u606f\uff0c\u5e76\u6309\u7167 sdk \u8981\u6c42\uff0creturn \u51fa\u53bb\u5373\u53ef\n      return {\n        sdkAppId: Number(res.voice_app_id),\n        userId: res.user_identifier,\n        userSig: res.sign,\n      };\n    })\n    .catch((error) => {\n      throw Error(error.message);\n    });\n};\n\n// \u521d\u59cb\u5316 rtc \u5b9e\u4f8b\nlet rtcInstance;\nrtcInstance = new BrowserRTC({ getVoiceSign });\n\nconst liveInstance = createLiveReact({\n  __debug__: true,\n  rtc: rtcInstance,\n});\n\nexport default liveInstance;\n')),(0,a.kt)("p",null,'\u5982\u679c\u60a8\u9700\u8981\u540c\u65f6\u5b9e\u73b0\u591a\u7c7b\u8bed\u97f3\uff08\u6d4f\u89c8\u5668\u8bed\u97f3\u3001\u5ba2\u6237\u7aef\u8bed\u97f3\u3001\u5fae\u4fe1\u5c0f\u7a0b\u5e8f\u8bed\u97f3\uff09\uff0c\u60a8\u53ef\u4ee5\u6309\u7167"\u6865"\u534f\u8bae\uff0c\u5b9e\u73b0\u76f8\u5e94\u7684\u65b9\u6cd5\u3002\u66f4\u591a\u4fe1\u606f\u8bf7\u53c2\u8003\uff1a ',(0,a.kt)("a",{parentName:"p",href:"https://open-platform.realsee.com/developer/docs/webview/jsbridge/intro/"},"@realsee/jsbridge-x")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"\u4e00\u4e2a\u7b80\u5355\u7684 JSBridgeBrowser \u5b9e\u73b0")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js",metastring:"title='browser.js'",title:"'browser.js'"},'import request from "./request";\n\nexport class JSBridgeBrowser {\n  closeWebView() {\n    return window.history.back();\n  }\n\n  // way\u8868\u793a\u65b0\u8d77\u8fd8\u662f\u8986\u76d6\uff0c\u5148\u652f\u6301\u65b0\u8d77\n  openWebView(url, way) {\n    return window.location.href(url);\n  }\n\n  actionShare(shareConfig) {\n    return () => {};\n  }\n\n  async getUserInfo() {\n    const res = await request("getUserId")\n      .then((data) => {\n        return data.user_id;\n      })\n      .catch((e) => {\n        return e.message;\n      });\n    const userInfo = {\n      userId: res,\n    };\n\n    return [userInfo];\n  }\n\n  async login() {\n    const res = await request("getUserId")\n      .then((data) => {\n        return data.user_id;\n      })\n      .catch((e) => {\n        return e.message;\n      });\n\n    return res;\n  }\n\n  async logout() {\n    return {};\n  }\n\n  async closeLoading() {\n    return {};\n  }\n\n  async getBangsHeight() {\n    return 0;\n  }\n}\n')))),(0,a.kt)("h3",{id:"\u8bed\u97f3\u6210\u529f\u52a0\u5165\u76d1\u542c"},"\u8bed\u97f3\u6210\u529f\u52a0\u5165\u76d1\u542c"),(0,a.kt)("admonition",{type:"info"},(0,a.kt)("mdxAdmonitionTitle",{parentName:"admonition"},"\u901a\u8fc7\u5e26\u770b\u5b9e\u4f8b\u63d0\u4f9b\u7684 ",(0,a.kt)("inlineCode",{parentName:"mdxAdmonitionTitle"},"useRTCEventCallback")," hook \u76d1\u542c\u8bed\u97f3\u6210\u529f\u52a0\u5165\u4e8b\u4ef6\u3002")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-jsx"},'import LiveReact from "./LiveReact";\n\nconst { useRTCEventCallback } = LiveReact;\n\nuseRTCEventCallback("joined", () => {\n  console.log("rtc -- joined");\n});\n')),(0,a.kt)("h3",{id:"\u8bed\u97f3\u9519\u8bef\u76d1\u542c"},"\u8bed\u97f3\u9519\u8bef\u76d1\u542c"),(0,a.kt)("admonition",{type:"info"},(0,a.kt)("mdxAdmonitionTitle",{parentName:"admonition"},"\u901a\u8fc7\u5e26\u770b\u5b9e\u4f8b\u63d0\u4f9b\u7684 ",(0,a.kt)("inlineCode",{parentName:"mdxAdmonitionTitle"},"useRTCEventCallback")," hook \u76d1\u542c\u8bed\u97f3\u62a5\u9519\u4fe1\u606f\u3002")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-jsx"},'import LiveReact from "./LiveReact";\n\nconst { useRTCEventCallback } = LiveReact;\n\nuseRTCEventCallback("error", (error) => {\n  console.log("rtc -- error: ", error.message);\n});\n')))}m.isMDXComponent=!0}}]);