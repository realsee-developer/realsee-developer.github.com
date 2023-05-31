"use strict";(self.webpackChunkrealsee_developer_github_com=self.webpackChunkrealsee_developer_github_com||[]).push([[9738],{3905:(e,t,a)=>{a.d(t,{Zo:()=>m,kt:()=>p});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var l=n.createContext({}),c=function(e){var t=n.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},m=function(e){var t=c(e.components);return n.createElement(l.Provider,{value:t},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,i=e.originalType,l=e.parentName,m=s(e,["components","mdxType","originalType","parentName"]),d=c(a),f=r,p=d["".concat(l,".").concat(f)]||d[f]||u[f]||i;return a?n.createElement(p,o(o({ref:t},m),{},{components:a})):n.createElement(p,o({ref:t},m))}));function p(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=a.length,o=new Array(i);o[0]=f;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[d]="string"==typeof e?e:r,o[1]=s;for(var c=2;c<i;c++)o[c]=a[c];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}f.displayName="MDXCreateElement"},85162:(e,t,a)=>{a.d(t,{Z:()=>o});var n=a(67294),r=a(86010);const i={tabItem:"tabItem_Ymn6"};function o(e){let{children:t,hidden:a,className:o}=e;return n.createElement("div",{role:"tabpanel",className:(0,r.Z)(i.tabItem,o),hidden:a},t)}},65488:(e,t,a)=>{a.d(t,{Z:()=>u});var n=a(87462),r=a(67294),i=a(86010),o=a(72389),s=a(67392),l=a(7094),c=a(12466);const m={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};function d(e){const{lazy:t,block:a,defaultValue:o,values:d,groupId:u,className:f}=e,p=r.Children.map(e.children,(e=>{if((0,r.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})),v=d??p.map((e=>{let{props:{value:t,label:a,attributes:n}}=e;return{value:t,label:a,attributes:n}})),h=(0,s.l)(v,((e,t)=>e.value===t.value));if(h.length>0)throw new Error(`Docusaurus error: Duplicate values "${h.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`);const y=null===o?o:o??p.find((e=>e.props.default))?.props.value??p[0].props.value;if(null!==y&&!v.some((e=>e.value===y)))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${y}" but none of its children has the corresponding value. Available values are: ${v.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);const{tabGroupChoices:g,setTabGroupChoices:b}=(0,l.U)(),[k,S]=(0,r.useState)(y),w=[],{blockElementScrollPositionUntilNextRender:N}=(0,c.o5)();if(null!=u){const e=g[u];null!=e&&e!==k&&v.some((t=>t.value===e))&&S(e)}const T=e=>{const t=e.currentTarget,a=w.indexOf(t),n=v[a].value;n!==k&&(N(t),S(n),null!=u&&b(u,String(n)))},E=e=>{let t=null;switch(e.key){case"Enter":T(e);break;case"ArrowRight":{const a=w.indexOf(e.currentTarget)+1;t=w[a]??w[0];break}case"ArrowLeft":{const a=w.indexOf(e.currentTarget)-1;t=w[a]??w[w.length-1];break}}t?.focus()};return r.createElement("div",{className:(0,i.Z)("tabs-container",m.tabList)},r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,i.Z)("tabs",{"tabs--block":a},f)},v.map((e=>{let{value:t,label:a,attributes:o}=e;return r.createElement("li",(0,n.Z)({role:"tab",tabIndex:k===t?0:-1,"aria-selected":k===t,key:t,ref:e=>w.push(e),onKeyDown:E,onClick:T},o,{className:(0,i.Z)("tabs__item",m.tabItem,o?.className,{"tabs__item--active":k===t})}),a??t)}))),t?(0,r.cloneElement)(p.filter((e=>e.props.value===k))[0],{className:"margin-top--md"}):r.createElement("div",{className:"margin-top--md"},p.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==k})))))}function u(e){const t=(0,o.Z)();return r.createElement(d,(0,n.Z)({key:String(t)},e))}},40592:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>m,contentTitle:()=>l,default:()=>p,frontMatter:()=>s,metadata:()=>c,toc:()=>d});var n=a(87462),r=(a(67294),a(3905)),i=a(65488),o=a(85162);const s={title:"VR Same Screen"},l=void 0,c={unversionedId:"front/live/get-started/sync-five-state",id:"front/live/get-started/sync-five-state",title:"VR Same Screen",description:"Live with WebSocket long chain communication capability, multiple users are connected to the same screen.",source:"@site/i18n/en/docusaurus-plugin-content-docs/current/front/live/get-started/03.sync-five-state.md",sourceDirName:"front/live/get-started",slug:"/front/live/get-started/sync-five-state",permalink:"/en/docs/front/live/get-started/sync-five-state",draft:!1,tags:[],version:"current",lastUpdatedBy:"sansi.lcj",lastUpdatedAt:1669717185,formattedLastUpdatedAt:"Nov 29, 2022",sidebarPosition:3,frontMatter:{title:"VR Same Screen"},sidebar:"\u5982\u89c6\u5e26\u770b",previous:{title:"Take View Out",permalink:"/en/docs/front/live/get-started/live-exit"},next:{title:"Browser Voice",permalink:"/en/docs/front/live/function-expansion/rtc/browser"}},m={},d=[{value:"No Frame Example",id:"no-frame-example",level:2},{value:"React Example",id:"react-example",level:2}],u={toc:d},f="wrapper";function p(e){let{components:t,...s}=e;return(0,r.kt)(f,(0,n.Z)({},u,s,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("admonition",{type:"info"},(0,r.kt)("p",{parentName:"admonition"},"Live with WebSocket long chain communication capability, multiple users are connected to the same screen.\nOf these,",(0,r.kt)("strong",{parentName:"p"},"frame data in the message system"),"is the message carrier that performs the same screen.This section will describe how to proceed to the VR homogeneous screen.\n",(0,r.kt)("strong",{parentName:"p"},"Before developing the same screen, you need to prepare at least two watching roles\uff1ahost and audience."),"\nAt the same time, we default that you have mastered how to view and set five status.")),(0,r.kt)("h2",{id:"no-frame-example"},"No Frame Example"),(0,r.kt)(i.Z,{mdxType:"Tabs"},(0,r.kt)(o.Z,{value:"JavaScript",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-jsx"},'five.on("stateChange", (state, userAction) => {\n  // Listen to local five state changes\n  if (userAction) {\n    // but send only five state changes from user operations\n    // Send local frame data (Five State)\n    live.sendKeyframe("FiveState", state);\n  }\n});\n\n// Receive remote frame data (Five State)\nlive.keyframes.on("FiveState", (newState, prevState) => {\n  // Take the latest `newState` to update local UI status\n  five.setState(newState, false, false); // set userAction values to false and avoid syncing death cycles.\n});\n'))),(0,r.kt)(o.Z,{value:"TypeScript",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx"},'five.on("stateChange", (state, userAction) => {\n  // Listen to local five state changes\n  if (userAction) {\n    //but send only five state changes from user operations\n    // Send local frame data (Five State)\n    live.sendKeyframe("FiveState", state);\n  }\n});\n\n// Receive remote frame data (Five State)\nlive.keyframes.on("FiveState", (newState, prevState) => {\n  // Get the latest `newState` update local UI status\n  five.setState(newState, false, false); // set userAction values to false and avoid syncing death cycles.\n});\n')))),(0,r.kt)("admonition",{type:"tip"},(0,r.kt)("p",{parentName:"admonition"},"Operation ",(0,r.kt)("inlineCode",{parentName:"p"},"for the moderator")," VR, see the information in the network of the ",(0,r.kt)("inlineCode",{parentName:"p"},"moderator")," side of the console."),(0,r.kt)("p",{parentName:"admonition"},"As the moderator changes VR on his screen, their messages will continue to be sent ",(0,r.kt)("inlineCode",{parentName:"p"},"KEYFRAME_SYNC"),".Click on the corresponding directive to view the detailed data transfer content.")),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"live-five-state-sync",src:a(37344).Z,width:"2114",height:"1224"})),(0,r.kt)("admonition",{type:"tip"},(0,r.kt)("p",{parentName:"admonition"},"See also ",(0,r.kt)("inlineCode",{parentName:"p"},"viewers")," side consoles, find the web info in the console."),(0,r.kt)("p",{parentName:"admonition"},"As moderators turn on VR messages receive ",(0,r.kt)("inlineCode",{parentName:"p"},"KEYFRAME_SYNC")," instructions.Click on the corresponding command to see the details of the received data.")),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"live-five-state-sync",src:a(32386).Z,width:"2108",height:"1220"})),(0,r.kt)("admonition",{type:"tip"},(0,r.kt)("p",{parentName:"admonition"},"Sent out of the green arrows up and receive the red arrow down.")),(0,r.kt)("h2",{id:"react-example"},"React Example"),(0,r.kt)(i.Z,{mdxType:"Tabs"},(0,r.kt)(o.Z,{value:"JavaScript",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-jsx"},'import LiveReact from "LiveReact";\nimport { useFiveState } from "@realsee/five/react";\n\nconst { useKeyframe } = LiveReact;\n\nfunction Test() {\n  const [fiveState, setFiveState] = useFiveState();\n  const [fiveStateKeyframe, setFiveStateKeyframe] = useKeyframe("FiveState");\n\n  // Monitor five state changes and send frame data\n  useFiveEventCallback("stateChange", (state, userAction) => {\n    // Only send user-triggered state changes\n    if (userAction) {\n      setFiveStateKeyframe(state);\n    }\n  });\n\n  // Receive frame data\n  /*\n   * const [fiveStateKeyframe, setFiveStateKeyframe] = useKeyframe(\'FiveState\'),\n   * useKeyframe() hook has set real-time The frame data is updated, and fiveStateKeyframe is the latest five state frame.\n   * The receipt of frame data only requires diff useKeyframe() to check the first parameter value of the box and update the local UI instead.\n   * Here\'s only need to listen to the changes made to your FiveStateKeyframe and update the five state.\n   * */\n\n  React.useEffect(() => {\n    // ReviveStateKeyframe has changed as long as it can be here.\n    setFiveState(fiveStateKeyframe, false, false); // set user action with state changes on the same screen to false.Avoid falling loop with screen.\n  }, [fiveStateKeyframe]);\n\n  return null;\n}\n'))),(0,r.kt)(o.Z,{value:"TypeScript",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx"},'import LiveReact from "LiveReact";\nimport { useFiveState } from "@realsee/five/react";\n\nconst { useKeyframe } = LiveReact;\n\nfunction Test() {\n  const [fiveState, setFiveState] = useFiveState();\n  const [fiveStateKeyframe, setFiveStateKeyframe] = useKeyframe("FiveState");\n\n  // Monitor five state changes and send frame data\n  useFiveEventCallback("stateChange", (state, userAction) => {\n    // Only send state changes triggered by users\n    if (userAction) {\n      setFiveStateKeyframe(state);\n    }\n  });\n\n  // Receive frame data\n  /*\n   * const [fiveStateKeyframe, setFiveStateKeyframe] = useKeyframe(\'FiveState\'),\n   * useKeyframe() hook has set the real-time frame The data is updated, and fiveStateKeyframe is the latest five state frame.\n   * The receipt of frame data only requires diff useKeyframe() to check the first parameter value of the box and update the local UI instead.\n   * Here\'s only need to listen to the changes made to your FiveStateKeyframe and update the five state.\n   * **/\n\n  React.useEffect(() => {\n    // If you are able to go here, represent fiveStateKeyframe changes.\n    setFiveState(fiveStateKeyframe, false, false); // set user action with state changes on the same screen to false.Avoid falling loop with screen.\n  }, [fiveStateKeyframe]);\n\n  return null;\n}\n')))),(0,r.kt)("admonition",{type:"tip"},(0,r.kt)("p",{parentName:"admonition"},"Operation ",(0,r.kt)("inlineCode",{parentName:"p"},"for the moderator")," VR, see the information in the network of the ",(0,r.kt)("inlineCode",{parentName:"p"},"moderator")," side of the console."),(0,r.kt)("p",{parentName:"admonition"},"As the moderator changes VR on his screen, their messages will continue to be sent ",(0,r.kt)("inlineCode",{parentName:"p"},"KEYFRAME_SYNC"),".Click on the corresponding directive to view the detailed data transfer content.")),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"live-five-state-sync",src:a(37344).Z,width:"2114",height:"1224"})),(0,r.kt)("admonition",{type:"tip"},(0,r.kt)("p",{parentName:"admonition"},"See also ",(0,r.kt)("inlineCode",{parentName:"p"},"viewers")," side consoles, find the web info in the console."),(0,r.kt)("p",{parentName:"admonition"},"As moderators turn on VR messages receive ",(0,r.kt)("inlineCode",{parentName:"p"},"KEYFRAME_SYNC")," instructions.Click on the corresponding command to see the details of the received data.")),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"live-five-state-sync",src:a(32386).Z,width:"2108",height:"1220"})),(0,r.kt)("admonition",{type:"tip"},(0,r.kt)("p",{parentName:"admonition"},"Sent out of the green arrows up and receive the red arrow down.")))}p.isMDXComponent=!0},32386:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/live-five-state-receive-2fcf97324ac4ea8fd927a44013b1367a.png"},37344:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/live-five-state-sync-d58310c6e33068fc8745a239d7187409.png"}}]);