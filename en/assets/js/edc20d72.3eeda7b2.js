"use strict";(self.webpackChunkrealsee_developer_github_com=self.webpackChunkrealsee_developer_github_com||[]).push([[8783],{49613:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>u});var a=n(59496);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),p=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=p(e.components);return a.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),m=p(n),u=r,v=m["".concat(s,".").concat(u)]||m[u]||d[u]||o;return n?a.createElement(v,i(i({ref:t},c),{},{components:n})):a.createElement(v,i({ref:t},c))}));function u(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:r,i[1]=l;for(var p=2;p<o;p++)i[p]=n[p];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},47415:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>d,frontMatter:()=>o,metadata:()=>l,toc:()=>p});var a=n(2962),r=(n(59496),n(49613));const o={title:"Miniprogram voice"},i=void 0,l={unversionedId:"front/live/function-expansion/rtc/wx",id:"front/live/function-expansion/rtc/wx",title:"Miniprogram voice",description:"The integrated file for micromessage applet voice is only for micromessage applet developers.There is no need for additional treatment by developers on other ends and there is natural support for multiple-end audio belts as long as the voices of all sides are secured.",source:"@site/i18n/en/docusaurus-plugin-content-docs/current/front/live/function-expansion/rtc/wx.md",sourceDirName:"front/live/function-expansion/rtc",slug:"/front/live/function-expansion/rtc/wx",permalink:"/en/docs/front/live/function-expansion/rtc/wx",draft:!1,tags:[],version:"current",lastUpdatedBy:"sansi.lcj",lastUpdatedAt:1669717185,formattedLastUpdatedAt:"Nov 29, 2022",frontMatter:{title:"Miniprogram voice"},sidebar:"\u5982\u89c6\u5e26\u770b",previous:{title:"iOS Voice Integration",permalink:"/en/docs/front/live/function-expansion/rtc/ios"},next:{title:"Invoice ticket description",permalink:"/en/docs/front/live/faq/ticket"}},s={},p=[{value:"Environmental requirements",id:"environmental-requirements",level:2},{value:"Development preparation",id:"development-preparation",level:2},{value:"Access to authority",id:"access-to-authority",level:3},{value:"Application for SDK access key",id:"application-for-sdk-access-key",level:3},{value:"Add a valid domain name",id:"add-a-valid-domain-name",level:3},{value:"SDK Downloads",id:"sdk-downloads",level:2},{value:"Access Guide",id:"access-guide",level:2},{value:"1, Create page.wxml",id:"1-create-pagewxml",level:3},{value:"2, Create page.js",id:"2-create-pagejs",level:3},{value:"Methods of use",id:"methods-of-use",level:3}],c={toc:p};function d(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("admonition",{title:"hint",type:"tip"},(0,r.kt)("p",{parentName:"admonition"},"The integrated file for micromessage applet voice is only for micromessage applet developers.There is no need for additional treatment by developers on other ends and there is natural support for multiple-end audio belts as long as the voices of all sides are secured.")),(0,r.kt)("h2",{id:"environmental-requirements"},"Environmental requirements"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Microphone App Minimum iOS Requirements\uff1a7.0.9"),(0,r.kt)("li",{parentName:"ul"},"MIS App Minimum Version Requirements\uff1a7.0.8"),(0,r.kt)("li",{parentName:"ul"},"Minimum version requirement for applet base\uff1a2.10.0"),(0,r.kt)("li",{parentName:"ul"},"Since the applet test number is not numerous with ",(0,r.kt)("inlineCode",{parentName:"li"},"<live-pusher>")," and ",(0,r.kt)("inlineCode",{parentName:"li"},"<live-player>")," , you need to apply for the regular applet account for development."),(0,r.kt)("li",{parentName:"ul"},"Since native components (i.e. ",(0,r.kt)("inlineCode",{parentName:"li"},"<live-pusher>")," and ",(0,r.kt)("inlineCode",{parentName:"li"},"<live-player>")," tags) are not supported by the MicroMessage Developer Tool, an operating experience is required on a True Machine."),(0,r.kt)("li",{parentName:"ul"},"Development frameworks such as uniapp are not supported. Please use native applet to develop the environment.")),(0,r.kt)("h2",{id:"development-preparation"},"Development preparation"),(0,r.kt)("h3",{id:"access-to-authority"},"Access to authority"),(0,r.kt)("admonition",{title:"warning",type:"warning"},(0,r.kt)("p",{parentName:"admonition"},"When developing it is necessary to open applet categories with punctuation tabs. If unenabled, they cannot be used properly.")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"The applet pull label does not support individual applets but only business class app."),(0,r.kt)("li",{parentName:"ul"},"Small program of push-pull flow temporarily open only to limited access to ",(0,r.kt)("a",{parentName:"li",href:"https://developers.weixin.qq.com/miniprogram/dev/component/live-pusher.html"}," categories ")),(0,r.kt)("li",{parentName:"ul"},"Small programs that meet the requirements of the category need to be in the ","[wechat public platform]"," > \u3010 development \u3011> \u3010 Development management \u3011> The permission of this component can be opened by self-service in Interface Settings, as shown in the following figure:")),(0,r.kt)("h3",{id:"application-for-sdk-access-key"},"Application for SDK access key"),(0,r.kt)("p",null,"Please jump to the ",(0,r.kt)("a",{parentName:"p",href:"https://developers.realsee.com/console"},"developer console")," request."),(0,r.kt)("h3",{id:"add-a-valid-domain-name"},"Add a valid domain name"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"}," legal domain name request "),": ",(0,r.kt)("inlineCode",{parentName:"p"},"https://cloud.tencent.com;https://yun.tim.qq.com;https://app-gateway-realsee.ke.com;")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Legal domain name for socket"),": ",(0,r.kt)("inlineCode",{parentName:"p"},"wss://ws.realsee.cn;wss://ws.realsee.com;")),(0,r.kt)("h2",{id:"sdk-downloads"},"SDK Downloads"),(0,r.kt)("p",null,"By ",(0,r.kt)("a",{parentName:"p",href:"https://vrlab-static.ljcdn.com/release/web/sdk/vrwebview-miniprogram.3af4ce43.zip"},"SDK")," download the SDK resources ",(0,r.kt)("inlineCode",{parentName:"p"},"rs-wx-vrsdk.zip")," file, unzipped after direct reference"),(0,r.kt)("h2",{id:"access-guide"},"Access Guide"),(0,r.kt)("h3",{id:"1-create-pagewxml"},"1, Create page.wxml"),(0,r.kt)("p",null,"Create Scene WXML file template page.wxml"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-html"},'\x3c!-- introduce wxml template in sdk --\x3e\n<include src="path-to/rs-wx-vrsdk/index.wxml" />\n')),(0,r.kt)("h3",{id:"2-create-pagejs"},"2, Create page.js"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript",metastring:'title="page.js"',title:'"page.js"'},'// import vrPage object from sdk\nimport vrPage from "path-to/rs-wx-vrsdk/index";\n// import the trtc object from the sdk, or import the trtc-wx object you plugged in\nimport TRTC from "path-to/trtc-wx";\n\n// Mount TRTC on vrPage\nvrPage.TRTC = TRTC;\n\n// configure SDK initialization parameters\nvrPage.vrOptions = {\n  app: {\n    key: "your app key",\n    secret: "your app secret",\n    // gateway endpoint\n    gateway: "https://app-gateway-realsee.ke.com", // production\n    // sdk startup api\n    startup: "/sdk/open/startup/cold.json",\n    // voice sign api\n    sign: "/sdk/open/live/voice/sign.json",\n  },\n};\n\n/** Please implement the following interface */\n\n// Get the user ID to see which interface must be implemented\nvrPage.getUserIdentifier = async () => "";\n\n// Log in\nvrPage.login = async () => " ";\n\n// Communicate with the webview\nvrPage.bindMessage = (message) => {\n  // message body structure: {id: random message id, data: message data}\n  // The data structure of data, please define by both sides of the communication\n};\n\n// Exit current applet page\nvrPage.exit = () => {};\n\n// Do shared data transfer\nvrPage.share = (shareObj) => {};\n\n// Just pass vrPage object to wechat native Page object\nPage(vrPage);\n')),(0,r.kt)("h3",{id:"methods-of-use"},"Methods of use"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"// Use vr link as the url parameter for the small size of the applet, note the need to use encodeURIComponent\nwx.navigateTo({\n  url: `/page?url=encodeURIComponent(${vrUrl})`,\n});\n")))}d.isMDXComponent=!0}}]);