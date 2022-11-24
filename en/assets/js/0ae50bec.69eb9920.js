"use strict";(self.webpackChunkrealsee_developer_github_com=self.webpackChunkrealsee_developer_github_com||[]).push([[228],{49613:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>m});var r=n(59496);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),l=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},d=function(e){var t=l(e.components);return r.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,d=c(e,["components","mdxType","originalType","parentName"]),u=l(n),m=a,f=u["".concat(s,".").concat(m)]||u[m]||p[m]||o;return n?r.createElement(f,i(i({ref:t},d),{},{components:n})):r.createElement(f,i({ref:t},d))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=u;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:a,i[1]=c;for(var l=2;l<o;l++)i[l]=n[l];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},67836:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>p,frontMatter:()=>o,metadata:()=>c,toc:()=>l});var r=n(2962),a=(n(59496),n(49613));const o={title:"Microtrust Compatibility Match"},i=void 0,c={unversionedId:"front/space-navigation/faq/wechat-browser",id:"front/space-navigation/faq/wechat-browser",title:"Microtrust Compatibility Match",description:"Browser has strict limits on video playback (playback behavior must be triggered by user),@realsee/vreo has circumvented the browser limit on video playback automatically.",source:"@site/i18n/en/docusaurus-plugin-content-docs/current/front/space-navigation/faq/0.wechat-browser.md",sourceDirName:"front/space-navigation/faq",slug:"/front/space-navigation/faq/wechat-browser",permalink:"/en/docs/front/space-navigation/faq/wechat-browser",draft:!1,tags:[],version:"current",lastUpdatedBy:"lichengjie",lastUpdatedAt:1669264964,formattedLastUpdatedAt:"Nov 24, 2022",sidebarPosition:0,frontMatter:{title:"Microtrust Compatibility Match"},sidebar:"\u7a7a\u95f4\u5bfc\u89c8",previous:{title:"Performance Boost",permalink:"/en/docs/front/space-navigation/faq/performance-boost"}},s={},l=[],d={toc:l};function p(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Browser has strict limits on video playback (playback behavior must be triggered by user),",(0,a.kt)("inlineCode",{parentName:"p"},"@realsee/vreo")," has circumvented the browser limit on video playback automatically."),(0,a.kt)("p",null,"But it is a credit to ",(0,a.kt)("a",{parentName:"p",href:"https://developers.weixin.qq.com/community/develop/doc/000e640d77cfa001132a6cb8456c01"},"auto-play limit for audio videos in micromessaging browsers")," needs to call ",(0,a.kt)("a",{parentName:"p",href:"https://developers.weixin.qq.com/doc/offiaccount/OA_Web_Apps/JS-SDK.html"},"microJS-SDK")," to trigger ",(0,a.kt)("inlineCode",{parentName:"p"},"WeixinJSBridgeReadady")," events before they can be implemented."),(0,a.kt)("p",null,"While ",(0,a.kt)("inlineCode",{parentName:"p"},"@realsee/vreo")," does not depend on ",(0,a.kt)("a",{parentName:"p",href:"https://developers.weixin.qq.com/doc/offiaccount/OA_Web_Apps/JS-SDK.html"},"micromessaging JS-SDK")," , you can create",(0,a.kt)("inlineCode",{parentName:"p"},"HTMLVideoElement"),"instances in advance and then specify via configuration when initializing",(0,a.kt)("inlineCode",{parentName:"p"},"vreoplayer"),"instances ",(0,a.kt)("inlineCode",{parentName:"p"},"HTMLVideoElement")," instances with reference\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},'// Create an instance of HTMLVideoElement\nconst creatVideo = (): HTMLVideoElement => {\n  const video = document.createElement("video");\n\n  video.setAttribute("playsinline", "true");\n  video.setAttribute("webkit-playsinline", "true");\n  video.setAttribute("autoplay", "true");\n\n  return video;\n};\n\nconst creatAudio = (): HTMLVideoElement => {\n  const audio = document.createElement("audio");\n\n  audio.setAttribute("autoplay", "true");\n\n  return audio;\n};\n\n// Create Video in advance\n// Video special effects\nconst videoEffect = creatVideo();\n// Video advertisement\nconst modelTVVideo = creatVideo();\n// Video number Human image\nconst videoInstance = creatVideo();\n// No digital person, only audio\nconst audioInstance = createAudio();\n\n// Wechat limit\uff1aneeds to be triggered once in WeixinJSBridgeReady callback\ndocument.addEventListener(\n  "WeixinJSBridgeReady",\n  () => {\n    videoEffect.play();\n    modelTVVideo.play();\n    videoInstance.play();\n    audioInstance.play;\n  },\n  false\n);\n\n// create Player instance\nconst vreoplayer = new Player(five, {\n  videos: {\n    videoEffect, // HTMLVideoElement for video effects\n    modelTVVideo, // The HTMLVideoElement that video ads depend on\n  },\n  videoAgentMeshOptions: {\n    videoInstance,\n    audioInstance,\n  },\n});\n')),(0,a.kt)("p",null,"In this way, auto-broadcast effects can also be used in the micromessaging browser or micromessaging applet ",(0,a.kt)("inlineCode",{parentName:"p"},"WebView"),"."))}p.isMDXComponent=!0}}]);