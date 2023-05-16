"use strict";(self.webpackChunkrealsee_developer_github_com=self.webpackChunkrealsee_developer_github_com||[]).push([[513],{3905:(e,n,t)=>{t.d(n,{Zo:()=>d,kt:()=>g});var a=t(67294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var l=a.createContext({}),c=function(e){var n=a.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},d=function(e){var n=c(e.components);return a.createElement(l.Provider,{value:n},e.children)},p="mdxType",u={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},m=a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),p=c(t),m=r,g=p["".concat(l,".").concat(m)]||p[m]||u[m]||o;return t?a.createElement(g,i(i({ref:n},d),{},{components:t})):a.createElement(g,i({ref:n},d))}));function g(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var o=t.length,i=new Array(o);i[0]=m;var s={};for(var l in n)hasOwnProperty.call(n,l)&&(s[l]=n[l]);s.originalType=e,s[p]="string"==typeof e?e:r,i[1]=s;for(var c=2;c<o;c++)i[c]=t[c];return a.createElement.apply(null,i)}return a.createElement.apply(null,t)}m.displayName="MDXCreateElement"},46922:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>i,default:()=>u,frontMatter:()=>o,metadata:()=>s,toc:()=>c});var a=t(87462),r=(t(67294),t(3905));const o={title:"Event System"},i=void 0,s={unversionedId:"front/3d-space/get-started/usage/event-hooks",id:"front/3d-space/get-started/usage/event-hooks",title:"Event System",description:"Five uses publish subscriber mode to manage internal asynchronous behavior, you can use five.on() or five.once() to monitor asynchronous events such as Five life cycle and interactive feedback.Of course, you can also unsubscribe from callback functions via five.off().",source:"@site/i18n/en/docusaurus-plugin-content-docs/current/front/3d-space/get-started/usage/02.event-hooks.md",sourceDirName:"front/3d-space/get-started/usage",slug:"/front/3d-space/get-started/usage/event-hooks",permalink:"/en/docs/front/3d-space/get-started/usage/event-hooks",draft:!1,tags:[],version:"current",lastUpdatedBy:"sansi.lcj",lastUpdatedAt:1669717185,formattedLastUpdatedAt:"Nov 29, 2022",sidebarPosition:2,frontMatter:{title:"Event System"},sidebar:"\u4e09\u7ef4\u7a7a\u95f4",previous:{title:"Status Control",permalink:"/en/docs/front/3d-space/get-started/usage/five-state"},next:{title:"Convert Coordinates",permalink:"/en/docs/front/3d-space/get-started/usage/conversion-coordinates"}},l={},c=[{value:"Load Progress",id:"load-progress",level:2},{value:"Panorama",id:"panorama",level:3},{value:"Model Status",id:"model-status",level:3},{value:"Status Change",id:"status-change",level:2},{value:"Panorama Walking",id:"panorama-walking",level:3},{value:"Mode switch",id:"mode-switch",level:3},{value:"Gesture action",id:"gesture-action",level:2},{value:"Slide Screen",id:"slide-screen",level:3},{value:"Click on the screen",id:"click-on-the-screen",level:3},{value:"Two finger zoom",id:"two-finger-zoom",level:3},{value:"Mouse Wheel",id:"mouse-wheel",level:3},{value:"Focus Circle",id:"focus-circle",level:2}],d={toc:c},p="wrapper";function u(e){let{components:n,...t}=e;return(0,r.kt)(p,(0,a.Z)({},d,t,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Five")," uses ",(0,r.kt)("strong",{parentName:"p"},"publish subscriber mode")," to manage internal asynchronous behavior, you can use ",(0,r.kt)("inlineCode",{parentName:"p"},"five.on()")," or ",(0,r.kt)("inlineCode",{parentName:"p"},"five.once()")," to monitor asynchronous events such as ",(0,r.kt)("strong",{parentName:"p"},"Five")," life cycle and interactive feedback.Of course, you can also unsubscribe from callback functions via ",(0,r.kt)("inlineCode",{parentName:"p"},"five.off()"),"."),(0,r.kt)("admonition",{type:"tip"},(0,r.kt)("p",{parentName:"admonition"},"Full ",(0,r.kt)("strong",{parentName:"p"},"Five")," Asynchronous events you can view from ",(0,r.kt)("a",{parentName:"p",href:"https://unpkg.com/@realsee/five/docs/interfaces/five.EventCallback.html"},"Five.EventCallback")," , This is only a brief description of commonly used asynchronous events.")),(0,r.kt)("h2",{id:"load-progress"},"Load Progress"),(0,r.kt)("p",null,"From executing ",(0,r.kt)("inlineCode",{parentName:"p"},"five.load(work)")," to rendering the 3D panorama and model mainly goes through four key stages\uff1a"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"request cube panorama map")," \u27a9 ",(0,r.kt)("strong",{parentName:"p"},"request model map")," \u27a9 ",(0,r.kt)("strong",{parentName:"p"},"analyze 3D spatial data")," \u27a9 ",(0,r.kt)("strong",{parentName:"p"},"render 3D model")),(0,r.kt)("figure",null,(0,r.kt)("div",{style:{display:"flex",background:"white",justifyContent:"center",alignItems:"center"}},(0,r.kt)("img",{style:{width:"100%"},src:"//vrlab-static.ljcdn.com/release/web/five-loading-evt.d0c55363.png"})),(0,r.kt)("figcaption",null,"Five loading process")),(0,r.kt)("h3",{id:"panorama"},"Panorama"),(0,r.kt)("p",null,"In most scenarios, ",(0,r.kt)("strong",{parentName:"p"},"Five")," rendering default models is ",(0,r.kt)("strong",{parentName:"p"},"Panorama"),", allowing panorama to interact once six cube panorama maps are downloaded."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},'/* Your progress bar logic */\nconst progress = (pst: number) => {\n  if (pst === 1) {\n    five.off("textureLoading", progress);\n  }\n  const percentage = (pst * 0.75 + 0.2) * 100;\n};\nfive.on("textureLoading", progress);\n\n// The panorama has been rendered and can be interacted with at the current point\nfive.once("panoArrived", () => {});\n')),(0,r.kt)("p",null,"::caution",(0,r.kt)("br",{parentName:"p"}),"\n",(0,r.kt)("inlineCode",{parentName:"p"},"five.on('textureLoading')")," only indicates download progress of the panoramic picture, with ",(0,r.kt)("inlineCode",{parentName:"p"},"five.once('panoArrived')")," There may be a delay of about 100 ms with full scope interaction.\n:::"),(0,r.kt)("h3",{id:"model-status"},"Model Status"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},'five.on("modelMaterialLoaded", () => {\n  /* model material loaded */\n});\n\nfive.on("modelGeometryLoaded", () => {\n  /* model triangle data loaded */\n});\n\nfive.on("modelLoaded", () => {\n  /* model loaded */\n});\n')),(0,r.kt)("h2",{id:"status-change"},"Status Change"),(0,r.kt)("p",null,"As mentioned earlier, the ",(0,r.kt)("strong",{parentName:"p"},"Five")," state can be obtained and modified through the ",(0,r.kt)("inlineCode",{parentName:"p"},"five.setState()")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"five.state()")," methods."),(0,r.kt)("p",null,"You can get ",(0,r.kt)("inlineCode",{parentName:"p"},"five.on('stateChange')")," for ",(0,r.kt)("strong",{parentName:"p"},"Five")," status changes\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},'five.on("stateChange", (newState, oldState, userAction) => {});\n')),(0,r.kt)("admonition",{type:"caution"},(0,r.kt)("p",{parentName:"admonition"},(0,r.kt)("inlineCode",{parentName:"p"},"userAction")," indicates whether changes are made by users by clicking on, rotation, etc.")),(0,r.kt)("h3",{id:"panorama-walking"},"Panorama Walking"),(0,r.kt)("p",null,"In",(0,r.kt)("inlineCode",{parentName:"p"},"Panorama")," ",(0,r.kt)("strong",{parentName:"p"},"panorama walk mode")," , you can walk in space (switch panorama position), there will also be some key events here\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},'five.on("wantsMoveToPano", (panoIndex) => {\n  /* Intention to a certain point */\n\n  return false; /* If the return value is false, the subsequent behavior will be aborted */\n});\n\nfive.on("panoWillArrive", (panoIndex) => {\n  /* ready to go to a certain point */\n});\n\nfive.on("movingToPano", (panoIndex) => {\n  /* going to a certain point Bit moving process */\n});\n\nfive.on("panoArrived", (panoIndex) => {\n  /* has reached a certain point */\n});\n')),(0,r.kt)("h3",{id:"mode-switch"},"Mode switch"),(0,r.kt)("p",null,"In addition to walking between points in the panoramic mode, there are also related events when switching between\uff1a."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},'five.on("wantsChangeMode", (mode: Mode, prevMode: Mode) => {\n  /* will switch mode: \n\ncan be blocked by returning false */\n});\n\nfive.on("modeChange", (mode: Mode, prevMode: Mode) => {\n  /* Mode, but the UI effects are not necessarily fully rendered in the new model, with an animation*/\n});\n')),(0,r.kt)("p",null,"You need to note that the inter-mode switch is attached and can listen to the animation execution event\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},'five.on("initAnimationWillStart", () => {\n  /* Models toggle start */\n});\n\nfive.on("initAnimationEnded", () => {\n  /* Models tow end */\n});\n')),(0,r.kt)("h2",{id:"gesture-action"},"Gesture action"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},'// Gesture action\nfive.on(\n  "gesture",\n  (\n    // GestureType: "pan" | "tap" | "pinch" | "press" | "mouseWheel"\n    type: GestureTypes,\n    // Multiple finger\n    pointers: { delta?: number; x: number; y: number }[],\n    // end of\n    final: boolean\n  ) => {}\n);\n')),(0,r.kt)("h3",{id:"slide-screen"},"Slide Screen"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},'five.on("wantsPanGesture", (pose: Pose, final: boolean) => {\n  // Swipe the screen gesture is about to be triggered (not yet fired)\n  // can be stopped by returning false for\n});\n\nfive.n("panGesture", (pose: Pose, final: boolean) => {\n  // Slide screen gestures triggered\n});\n')),(0,r.kt)("h3",{id:"click-on-the-screen"},"Click on the screen"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},'// Below 250 ms\nfive.on(\n  "wantsTapGesture",\n  (\n    raycaster: Raycaster,\n    tapPosition: Vector2,\n    duration: number,\n    final: boolean\n  ) => {\n    /// Touch the screen gesture to be triggered (not yet fired)\n    // can be stopped by returning false to prevent the trigger\n  }\n);\n\nfive.on(\n  "tapGesture",\n  (\n    raycaster: Raycaster,\n    tapPosition: Vector2,\n    duration: number,\n    final: boolean\n  ) => {\n    // Touch screen gesture to be triggered\n  }\n);\n')),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},'// More than 250 ms\nfive.on(\n  "wantsPressGesture",\n  (\n    raycaster: Raycaster,\n    tapPosition: Vector2,\n    duration: number,\n    final: boolean\n  ) => {\n    // Clicking the screen gesture will be triggered (not yet fired)\n    // can be stopped by returning false to prevent trigger\n  }\n);\n\nfive.on(\n  "pressGesture",\n  (\n    raycaster: Raycaster,\n    tapPosition: Vector2,\n    duration: number,\n    final: boolean\n  ) => {\n    // Click on the screen to be triggered\n  }\n);\n')),(0,r.kt)("h3",{id:"two-finger-zoom"},"Two finger zoom"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},'five.on("wantsPinchGesture", (pose: Pose, final: boolean) => {\n  // Two finger zoom gesture will be triggered (not yet fired)\n  // can be stopped by returning false for\n});\n\nfive.on("pinchGesture", (pose: Pose, final: boolean) => {\n  // Two finger zoom gestures will be triggered (not yet fired)\n  // Can be prevented from triggering by returning false\n});\n')),(0,r.kt)("h3",{id:"mouse-wheel"},"Mouse Wheel"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},'five.on("wantsMouseWheel", (delta: number, fov: number, final: boolean) => {\n  // mouse wheel gesture will be triggered (not triggered yet)\n  // trigger can be prevented by return false\n});\n\nfive.on("mouseWheel", (delta: number, fov: number, final: boolean) => {\n  // mouse wheel gesture is triggered\n});\n')),(0,r.kt)("h2",{id:"focus-circle"},"Focus Circle"),(0,r.kt)("p",null,"There is a focus circle inside the three-dimensional space, leading to the current mouse or touch screen area. The position and direction of the focus circle will be recalculated when moving gestures."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},'five.on(\n  "intersectionOnModelUpdate",\n  (\n    intersection: Intersection, // focus collision detection result\n    mesh: IntersectMeshInterface // focus ring\n  ) => {\n    // mouse focus ring position is recalculated\n  }\n);\n')))}u.isMDXComponent=!0}}]);