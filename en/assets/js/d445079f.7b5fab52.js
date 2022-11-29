"use strict";(self.webpackChunkrealsee_developer_github_com=self.webpackChunkrealsee_developer_github_com||[]).push([[3834],{49613:(e,n,t)=>{t.d(n,{Zo:()=>d,kt:()=>u});var a=t(59496);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var s=a.createContext({}),p=function(e){var n=a.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},d=function(e){var n=p(e.components);return a.createElement(s.Provider,{value:n},e.children)},c={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},m=a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),m=p(t),u=r,k=m["".concat(s,".").concat(u)]||m[u]||c[u]||i;return t?a.createElement(k,o(o({ref:n},d),{},{components:t})):a.createElement(k,o({ref:n},d))}));function u(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var i=t.length,o=new Array(i);o[0]=m;var l={};for(var s in n)hasOwnProperty.call(n,s)&&(l[s]=n[s]);l.originalType=e,l.mdxType="string"==typeof e?e:r,o[1]=l;for(var p=2;p<i;p++)o[p]=t[p];return a.createElement.apply(null,o)}return a.createElement.apply(null,t)}m.displayName="MDXCreateElement"},52646:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>s,contentTitle:()=>o,default:()=>c,frontMatter:()=>i,metadata:()=>l,toc:()=>p});var a=t(2962),r=(t(59496),t(49613));const i={title:"iOS party"},o=void 0,l={unversionedId:"webview/app/iOS",id:"webview/app/iOS",title:"iOS party",description:"This document is in front of iOS developers, in the description that follows, we assume you already have an iOS development basics and installed Xcode related development environments.",source:"@site/i18n/en/docusaurus-plugin-content-docs/current/webview/app/iOS.md",sourceDirName:"webview/app",slug:"/webview/app/iOS",permalink:"/en/docs/webview/app/iOS",draft:!1,tags:[],version:"current",lastUpdatedBy:"sansi.lcj",lastUpdatedAt:1669717185,formattedLastUpdatedAt:"Nov 29, 2022",frontMatter:{title:"iOS party"},sidebar:"\u5bb9\u5668\u96c6\u6210",previous:{title:"Introduction",permalink:"/en/docs/webview/intro"},next:{title:"Android",permalink:"/en/docs/webview/app/Android"}},s={},p=[{value:"Download address",id:"download-address",level:2},{value:"Environmental requirements",id:"environmental-requirements",level:2},{value:"Apply SDK access key",id:"apply-sdk-access-key",level:2},{value:"Integration step",id:"integration-step",level:2},{value:"Introduce SDK",id:"introduce-sdk",level:3},{value:"Add framework dependency",id:"add-framework-dependency",level:3},{value:"Add Third Party Dependencies",id:"add-third-party-dependencies",level:3},{value:"Apply for related permissions",id:"apply-for-related-permissions",level:3},{value:"Initialize SDK",id:"initialize-sdk",level:3},{value:"Enable VR Page",id:"enable-vr-page",level:3},{value:"Custom Protocol",id:"custom-protocol",level:2},{value:"MicroMessage Sharing",id:"micromessage-sharing",level:3},{value:"Custom Loading",id:"custom-loading",level:3},{value:"<code>callAndBackfeed</code>",id:"callandbackfeed",level:3},{value:"<code>callAndListen</code>",id:"callandlisten",level:3}],d={toc:p};function c(e){let{components:n,...t}=e;return(0,r.kt)("wrapper",(0,a.Z)({},d,t,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("admonition",{title:"hint",type:"tip"},(0,r.kt)("p",{parentName:"admonition"},"This document is in front of ",(0,r.kt)("strong",{parentName:"p"},"iOS developers"),", in the description that follows, we assume you already have an iOS development basics and installed Xcode related development environments.")),(0,r.kt)("admonition",{type:"caution"},(0,r.kt)("p",{parentName:"admonition"},"This document is not yet complete and its content is for reference purposes only.")),(0,r.kt)("h2",{id:"download-address"},"Download address"),(0,r.kt)("p",null,"If you see two versions of SDK\uff1a",(0,r.kt)("strong",{parentName:"p"},"basics"),"and",(0,r.kt)("strong",{parentName:"p"},"with revision"),"."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Base version"),"\uff1aprovides basic VR container capabilities such as full-screen browsing, vibration, keeping screen on and detecting microphone.If you only need to view VR features, it is recommended that you integrate this version."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"with version"),"\uff1acontains ",(0,r.kt)("strong",{parentName:"li"},"basic version")," and includes ",(0,r.kt)("a",{parentName:"li",href:"https://cloud.tencent.com/document/product/647/32689"},"TRTC")," to support real-time voice.Installing volume will be much larger than the ",(0,r.kt)("strong",{parentName:"li"},"base version")," and you are recommended to integrate this version if you need to support domestic online visibility features.")),(0,r.kt)("table",{align:"center"},(0,r.kt)("tr",{align:"center"},(0,r.kt)("th",null,"Type"),(0,r.kt)("th",null,"SDK"),(0,r.kt)("th",null,"DEMO"),(0,r.kt)("th",null,"Installation increment")),(0,r.kt)("tr",{align:"center"},(0,r.kt)("td",{rowspan:"1"},"Base Version"),(0,r.kt)("td",null,(0,r.kt)("a",{target:"_blank",href:"https://vr-public-1304125667.cos.ap-beijing.myqcloud.com/release/vrnative/rsvrsdk_lite-1.0.16.zip"},"rsvrsdk_lite-1.0.16")),(0,r.kt)("td",null,(0,r.kt)("a",{target:"_blank",href:"https://vr-public-1304125667.cos.ap-beijing.myqcloud.com/release/vrnative/vrdemo.zip"},"demo")),(0,r.kt)("td",null,"About 4M")),(0,r.kt)("tr",{align:"center"},(0,r.kt)("td",{rowspan:"1"},"Take Version"),(0,r.kt)("td",null,(0,r.kt)("a",{target:"_blank",href:"https://vr-public-1304125667.cos.ap-beijing.myqcloud.com/release/vrnative/rsvrsdk-1.0.16.zip"},"rsvrsdk-1.0.16")),(0,r.kt)("td",null,(0,r.kt)("a",{target:"_blank",href:"https://vr-public-1304125667.cos.ap-beijing.myqcloud.com/release/vrnative/vrdemo.zip"},"demo")),(0,r.kt)("td",null,"About 18M"))),(0,r.kt)("h2",{id:"environmental-requirements"},"Environmental requirements"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Xcode 11.0 and above."),(0,r.kt)("li",{parentName:"ul"},"Make sure your project has a valid developer signature."),(0,r.kt)("li",{parentName:"ul"},"Please make sure you have a real opportunity to debug.")),(0,r.kt)("h2",{id:"apply-sdk-access-key"},"Apply SDK access key"),(0,r.kt)("admonition",{type:"caution"},(0,r.kt)("p",{parentName:"admonition"},"Please apply to the developer center for access key containing ",(0,r.kt)("inlineCode",{parentName:"p"},"app_id")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"app_secret"),".")),(0,r.kt)("h2",{id:"integration-step"},"Integration step"),(0,r.kt)("h3",{id:"introduce-sdk"},"Introduce SDK"),(0,r.kt)("p",null,"First download RSVRSDK, decompress the\uff1apackage and put it in the project directory."),(0,r.kt)("p",null,"Add ",(0,r.kt)("inlineCode",{parentName:"p"},"RSVRSDK.framework"),"\uff1ain ",(0,r.kt)("inlineCode",{parentName:"p"},"Frameworks")," under ",(0,r.kt)("inlineCode",{parentName:"p"},"General")," of project ",(0,r.kt)("inlineCode",{parentName:"p"},"Target")),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://vrlab-static.ljcdn.com/release/web/ios/add_vrlib_step1.f7d4adf3.png",alt:"add_vrlib_step1"})),(0,r.kt)("p",null,"Set ",(0,r.kt)("inlineCode",{parentName:"p"},"Embed")," to ",(0,r.kt)("inlineCode",{parentName:"p"},"Do Not Embed"),"\uff1a"),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://vrlab-static.ljcdn.com/release/web/ios/add_vrlib_step2.62881917.png",alt:"add_vrlib_step1"})),(0,r.kt)("p",null,"Introducing RSVRSDK resource files ",(0,r.kt)("inlineCode",{parentName:"p"},"RSVRSDK.bundle")),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://vrlab-static.ljcdn.com/release/web/ios/add_vrlib_step3.ad02175d.png",alt:"add_vrlib_step1"})),(0,r.kt)("h3",{id:"add-framework-dependency"},"Add framework dependency"),(0,r.kt)("p",null,"Add SDK dependencies ",(0,r.kt)("inlineCode",{parentName:"p"},"Framework")," (",(0,r.kt)("inlineCode",{parentName:"p"},"Photos"),",",(0,r.kt)("inlineCode",{parentName:"p"},"libz"),",",(0,r.kt)("inlineCode",{parentName:"p"},"SceneKit"),",",(0,r.kt)("inlineCode",{parentName:"p"},"WebKit"),"etc.)\uff1a"),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://vrlab-static.ljcdn.com/release/web/ios/add_vrlib_step4.d290d723.png",alt:"add_vrlib_step4"})),(0,r.kt)("h3",{id:"add-third-party-dependencies"},"Add Third Party Dependencies"),(0,r.kt)("p",null,"Since RSVRSSDK relies on some third-party open source libraries, it is necessary to introduce the Podfile in the main project."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ruby"},"# Methods for VRSDK\npod 'FMDB'\npod 'Mantle'\npod 'AFNetworking', '3.2.1'\npod 'YYCache'\npod 'YYModel'\npod 'Masonry'\n")),(0,r.kt)("h3",{id:"apply-for-related-permissions"},"Apply for related permissions"),(0,r.kt)("p",null,"RSVRSDK will use save to album. You will need to configure permission request in ",(0,r.kt)("inlineCode",{parentName:"p"},"info.plist"),"\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-xml"},"<key>NSPhotoLibraryAddUsageDescription</key>\n<string>Using album</string>\n")),(0,r.kt)("h3",{id:"initialize-sdk"},"Initialize SDK"),(0,r.kt)("p",null,"RSVRSSDK initialization requires introducing header files"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-objectivec"},"// import VR SDK header\n#import <RSVRSDK/RSVRSDK.h>\n#import <RSVRSDK/RSVRSDKConfig.h>\n")),(0,r.kt)("p",null,"Provides initialization configuration"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-objectivec"},'- (void)configVR {\n    [RSVRSDKConfig shareInstance].appInfo.scheme = @"xxxxx";\n    [RSVRSDKConfig shareInstance].appInfo.appId = @"appid";\n    [RSVRSDKConfig shareInstance].appInfo.appSecret = @"appSecret";\n    [RSVRSDKConfig shareInstance].appInfo.userAgent = @"xxxx";\n}\n')),(0,r.kt)("h3",{id:"enable-vr-page"},"Enable VR Page"),(0,r.kt)("p",null,"Once initialization is complete, by call:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-objectivec"},'RSVREntity *param = [[RSVREntity alloc] init];\n// Configure open URL\nparam.vrUrl = @"http://xxx/vrurl";\nUIViewController *vc = [RSVRSDK VRWebViewWithParam:param];\n// Open VR page\n[self.navigationController pushViewController:vc animated:YES];\n')),(0,r.kt)("p",null,"Since then, iOS RSVRSDK basic features have been integrated."),(0,r.kt)("h2",{id:"custom-protocol"},"Custom Protocol"),(0,r.kt)("h3",{id:"micromessage-sharing"},"MicroMessage Sharing"),(0,r.kt)("p",null,"RSVRSDK supports functions such as calling WeChat to share to applets, copying links, etc. To use the WeChat sharing function, you need to perform the following operations\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ruby"},"// Introducing Micromessage-Sharing SDK\npod 'WechatOpenSDK'\n")),(0,r.kt)("admonition",{title:"special note",type:"caution"},(0,r.kt)("p",{parentName:"admonition"},"If using base version, no VR sharing feature is included, you can customize sharing logic :")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-objectivec"},"#pagma RSVRSDKDelegate\n...\n/// H5 pages call json on share\n/// @param sharedJson H5 page on shared\n- (void)shareWithParam:(NSString *)sharedJson {\n   // completely customize sharing, This proxy callback can be implemented\n   // sharedJson is a json string sharing data\n   // Can be shared via shareJson custom UI shared\n}\n\n/// When users click on item callback\n/// @param shadeModel Share item\n- (void)didShareItemClick:(RSVRShareBaseModel *)shareModel {\n    // Implement this proxy method, Shared UI will be implemented internally by SDK\n    // When users click on sharing icon, this proxy method will be called\n    // available through shareModel. xtraData get customized data for the business party\n\n    // \u26a0\ufe0f if shareWithParam: with didShareItemClick:, will only back shareWithParam:\n}\n")),(0,r.kt)("h3",{id:"custom-loading"},"Custom Loading"),(0,r.kt)("p",null,"The SDK supports the operator to customize the Loading Background and Logo on the VR page."),(0,r.kt)("p",null,"When constructing",(0,r.kt)("inlineCode",{parentName:"p"},"VRParam"),", customize as follows\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-objectivec"},'NSString *url = @"http://open-rushivr.cn/xxxxx";\nNSString *logoUrl = @"http://xxxcdn.com/logo. ng";\n\nRSVRParam *param = [[RSVRParam alloc] init];\n[param setVrUrl:url];// to open VR link\n[param setLogoUrl:logoUrl]; // Custom LoadingLogo, recommend specification\uff1abroad, high 111, resolution 72, background transparency.\n[param setLoadingImage:loadingImage]; // Custom LoadingPage Background Image\n[param setLoadingType:E_RSSVRSDKLoadingTypeTypeDefault]; // Custom LoadingType\n\nUIViewController *vc = [RSVRSDK VRWebViewWithParam:param];\n[self.navigationController pushViewController:vc animated:YES];\n')),(0,r.kt)("h3",{id:"callandbackfeed"},(0,r.kt)("inlineCode",{parentName:"h3"},"callAndBackfeed")),(0,r.kt)("p",null,"Send ",(0,r.kt)("inlineCode",{parentName:"p"},"scheme")," information to the client. The client will return to the front end when it receives the message."),(0,r.kt)("p",null,"Protocol format\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "type": "callAndBackFeed fixed value, defined",\n  "param": {\n    "actionUrl": "a specific jsBridge",\n    "functionName": "Callback to The callback method name on the frontend side."\n  }\n}\n')),(0,r.kt)("p",null,"Frontend side\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},'import JSBridge from "@realsee/jsbridge-x";\n\nconst jsBridge = new JSBridge();\njsBridge.callAndBackfeed("custom/showQrCode?url=http%3A%2F%2Fwww.realsee.com");\n')),(0,r.kt)("p",null,"App side\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-objectivec"},'/// This method can be implemented to handle scheme\nthat cannot be processed by an RSVRSDK instance /// @param urlString scheme url\n/// @param finishBlock scheme callback\n- (void)actionURL:(NSString *)urlString withFinishBlock:( finishBlock _Nullable)finishBlock\n{\n    NSURL* url = [NSURL URLWithString:urlString];\n    if (url && [@"/custom/showQrCode" isEqualToString:url.path]) {\n        finishBlock(@"1"); //callback notify frontend\n    }\n}\n')),(0,r.kt)("h3",{id:"callandlisten"},(0,r.kt)("inlineCode",{parentName:"h3"},"callAndListen")),(0,r.kt)("p",null,"Send ",(0,r.kt)("inlineCode",{parentName:"p"},"scheme")," information to client, client listens to changes in the status and will send back back to the frontend by callback when the status changes occur."),(0,r.kt)("p",null,"Protocol format\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},'{\n  "type": "callAndListen", // fixed value, already defined\n  "param": {\n      "actionUrl": "", // a specific jsBridge\n      "functionName": "App", // terminal The name of the callback method that is called back to the front end after an operation is executed.\n  }\n}\n')),(0,r.kt)("p",null,"Frontend side\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},'import JSBridge from "@realsee/jsbridge-x";\n\nconst jsBridge = new JSBridge();\njsBridge.callAndListen("custom/listenWebViewState", (newState) => {\n  // \u76d1\u542c\u7684\u5ba2\u6237\u7aef\u72b6\u6001\u53d1\u751f\u53d8\u66f4\n});\n')),(0,r.kt)("p",null,"App side\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-objectivec"},'/// This method needs to be implemented to handle some H5 schemes that the VR SDK does not handle, for example: web/compaign\n/// @param urlString sscheme url\n/// @param finishBlock scheme callback\n- (void)actionURL:(NSString *)urlString withFinishBlock:(RSVRSchemeFinishCallback _Nullable)finishBlock {\n    NSURL* url = [NSURL URLWithString:urlString];\n    if (url && [@"/custom/listenWebViewState" isEqualToString:url.path]) {\n        finishBlock(@" START"); //Callback to inform the front end to start\n      ......\n        finishBlock(@"PAUSE"); //Callback to notify the front end to pause\n      ......\n        finishBlock(@"STOP"); // Callback to notify frontend to stop\n    }\n}\n')))}c.isMDXComponent=!0}}]);