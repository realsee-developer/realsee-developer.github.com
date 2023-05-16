"use strict";(self.webpackChunkrealsee_developer_github_com=self.webpackChunkrealsee_developer_github_com||[]).push([[5226],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>g});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=r.createContext({}),c=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},d="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),d=c(n),u=o,g=d["".concat(l,".").concat(u)]||d[u]||m[u]||a;return n?r.createElement(g,i(i({ref:t},p),{},{components:n})):r.createElement(g,i({ref:t},p))}));function g(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=u;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[d]="string"==typeof e?e:o,i[1]=s;for(var c=2;c<a;c++)i[c]=n[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},85162:(e,t,n)=>{n.d(t,{Z:()=>i});var r=n(67294),o=n(86010);const a={tabItem:"tabItem_Ymn6"};function i(e){let{children:t,hidden:n,className:i}=e;return r.createElement("div",{role:"tabpanel",className:(0,o.Z)(a.tabItem,i),hidden:n},t)}},65488:(e,t,n)=>{n.d(t,{Z:()=>m});var r=n(87462),o=n(67294),a=n(86010),i=n(72389),s=n(67392),l=n(7094),c=n(12466);const p={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};function d(e){const{lazy:t,block:n,defaultValue:i,values:d,groupId:m,className:u}=e,g=o.Children.map(e.children,(e=>{if((0,o.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})),k=d??g.map((e=>{let{props:{value:t,label:n,attributes:r}}=e;return{value:t,label:n,attributes:r}})),f=(0,s.l)(k,((e,t)=>e.value===t.value));if(f.length>0)throw new Error(`Docusaurus error: Duplicate values "${f.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`);const h=null===i?i:i??g.find((e=>e.props.default))?.props.value??g[0].props.value;if(null!==h&&!k.some((e=>e.value===h)))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${h}" but none of its children has the corresponding value. Available values are: ${k.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);const{tabGroupChoices:v,setTabGroupChoices:b}=(0,l.U)(),[w,y]=(0,o.useState)(h),C=[],{blockElementScrollPositionUntilNextRender:x}=(0,c.o5)();if(null!=m){const e=v[m];null!=e&&e!==w&&k.some((t=>t.value===e))&&y(e)}const N=e=>{const t=e.currentTarget,n=C.indexOf(t),r=k[n].value;r!==w&&(x(t),y(r),null!=m&&b(m,String(r)))},R=e=>{let t=null;switch(e.key){case"Enter":N(e);break;case"ArrowRight":{const n=C.indexOf(e.currentTarget)+1;t=C[n]??C[0];break}case"ArrowLeft":{const n=C.indexOf(e.currentTarget)-1;t=C[n]??C[C.length-1];break}}t?.focus()};return o.createElement("div",{className:(0,a.Z)("tabs-container",p.tabList)},o.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,a.Z)("tabs",{"tabs--block":n},u)},k.map((e=>{let{value:t,label:n,attributes:i}=e;return o.createElement("li",(0,r.Z)({role:"tab",tabIndex:w===t?0:-1,"aria-selected":w===t,key:t,ref:e=>C.push(e),onKeyDown:R,onClick:N},i,{className:(0,a.Z)("tabs__item",p.tabItem,i?.className,{"tabs__item--active":w===t})}),n??t)}))),t?(0,o.cloneElement)(g.filter((e=>e.props.value===w))[0],{className:"margin-top--md"}):o.createElement("div",{className:"margin-top--md"},g.map(((e,t)=>(0,o.cloneElement)(e,{key:t,hidden:e.props.value!==w})))))}function m(e){const t=(0,i.Z)();return o.createElement(d,(0,r.Z)({key:String(t)},e))}},34375:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>l,default:()=>g,frontMatter:()=>s,metadata:()=>c,toc:()=>d});var r=n(87462),o=(n(67294),n(3905)),a=n(65488),i=n(85162);const s={title:"Status Recording"},l=void 0,c={unversionedId:"front/3d-space/handbook/react-hooks/recording-state",id:"front/3d-space/handbook/react-hooks/recording-state",title:"Status Recording",description:"Previous chapter recalls: Change the perspective",source:"@site/i18n/en/docusaurus-plugin-content-docs/current/front/3d-space/handbook/react-hooks/3.recording-state.md",sourceDirName:"front/3d-space/handbook/react-hooks",slug:"/front/3d-space/handbook/react-hooks/recording-state",permalink:"/en/docs/front/3d-space/handbook/react-hooks/recording-state",draft:!1,tags:[],version:"current",lastUpdatedBy:"sansi.lcj",lastUpdatedAt:1669717185,formattedLastUpdatedAt:"Nov 29, 2022",sidebarPosition:3,frontMatter:{title:"Status Recording"},sidebar:"\u4e09\u7ef4\u7a7a\u95f4",previous:{title:"Change View",permalink:"/en/docs/front/3d-space/handbook/react-hooks/knowing-state"},next:{title:"Points in 3D space",permalink:"/en/docs/front/3d-space/handbook/react-hooks/points-in-3d"}},p={},d=[{value:"Preparatory work",id:"preparatory-work",level:2},{value:"Recording / Playback",id:"recording--playback",level:2},{value:"Write <strong>Recorder</strong>",id:"write-recorder",level:3},{value:"Write Recording Component",id:"write-recording-component",level:3},{value:"Use Status Recording Component",id:"use-status-recording-component",level:3},{value:"The next section will be completed by you",id:"the-next-section-will-be-completed-by-you",level:2}],m={toc:d},u="wrapper";function g(e){let{components:t,...n}=e;return(0,o.kt)(u,(0,r.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},(0,o.kt)("strong",{parentName:"p"},"Previous chapter recalls: Change the perspective")," ",(0,o.kt)("br",null)),(0,o.kt)("ul",{parentName:"blockquote"},(0,o.kt)("li",{parentName:"ul"},"You know what is ",(0,o.kt)("strong",{parentName:"li"},"State"),", and how to get and modify.",(0,o.kt)("br",null)),(0,o.kt)("li",{parentName:"ul"},"Autoring features via ",(0,o.kt)("strong",{parentName:"li"},"State"),"."))),(0,o.kt)("admonition",{title:"This chapter can learn to",type:"tip"},(0,o.kt)("ul",{parentName:"admonition"},(0,o.kt)("li",{parentName:"ul"},"Record user operations via ",(0,o.kt)("strong",{parentName:"li"},"State"),"."),(0,o.kt)("li",{parentName:"ul"},"Restore the user action picture with ",(0,o.kt)("strong",{parentName:"li"},"State"),"."))),(0,o.kt)("h2",{id:"preparatory-work"},"Preparatory work"),(0,o.kt)("p",null,"Like the previous section, we create a new directory (",(0,o.kt)("inlineCode",{parentName:"p"},"src/3.recording-state"),"and corresponding ",(0,o.kt)("strong",{parentName:"p"},"html")," and ",(0,o.kt)("strong",{parentName:"p"},"jsx")," or ",(0,o.kt)("strong",{parentName:"p"},"tsx")," files."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"jsx")," or ",(0,o.kt)("strong",{parentName:"p"},"tsx")," files can first copy the previous chapter."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-html",metastring:'title="src/3.recording-state/index.html"',title:'"src/3.recording-state/index.html"'},'<!DOCTYPE html>\n<html lang="en">\n  <head>\n    <meta charset="UTF-8" />\n    <link rel="icon" href="data:;base64,iVBORw0KGgo=" />\n    <meta name="viewport" content="width=device-width, initial-scale=1.0" />\n    <title>state recording | Recording state</title>\n    <style>\n      * {\n        margin: 0;\n        padding: 0;\n      }\n      html,\n      body #app {\n        width: 100%;\n        height: 100%;\n        overflow: hidden;\n      }\n    </style>\n  </head>\n  <body>\n    <div id="app"></div>\n    <script type="module" src="./index"><\/script>\n  </body>\n</html>\n')),(0,o.kt)(a.Z,{mdxType:"Tabs"},(0,o.kt)(i.Z,{value:"JavaScript",label:"JavaScript",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js",metastring:'title="src/3.recording-state/useFetchWork.js"',title:'"src/3.recording-state/useFetchWork.js"'},'import { useState, useEffect } from "react";\nimport { parseWork } from "@realsee/five";\n\n/**\n * React Hook: via work. json address get work object\n * @param url work.json data address\n * @returns work object, if getting, return null\n */\nfunction useFetchWork(url) {\n  const [work, setWork] = useState(null);\n  useEffect(() => {\n    setWork(null);\n    fetch(url)\n      .then((response) => response.text())\n      .then((text) => setWork(parseWork(text)));\n  }, [url]);\n  return work;\n}\n\nexport { useFetchWork };\n')),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js",metastring:'title="src/3.recording-state/useWindowDimensions.js"',title:'"src/3.recording-state/useWindowDimensions.js"'},'import { useState, useEffect } from "react";\n\n/**\n * Get the size of the current window\n */\nfunction getWindowDimensions() {\n  return { width: window.innerWidth, height: window.innerHeight };\n}\n\n/**\n * React Hook: Get the size of the current window\n */\nfunction useWindowDimensions() {\n  const [size, setSize] = useState(getWindowDimensions);\n  useEffect(() => {\n    const listener = () => setSize(getWindowDimensions());\n    window.addEventListener("resize", listener, false);\n    return () => window.removeEventListener("resize", listener, false);\n  });\n  return size;\n}\n\nexport { useWindowDimensions };\n')),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-jsx",metastring:'title="src/3.recording-state/ModeController.jsx"',title:'"src/3.recording-state/ModeController.jsx"'},'import React from "react";\nimport { Five } from "@realsee/five";\nimport { useFiveCurrentState } from "@realsee/five/react";\nimport BottomNavigation from "@mui/material/BottomNavigation";\nimport BottomNavigationAction from "@mui/material/BottomNavigationAction";\nimport Paper from "@mui/material/Paper";\nimport DirectionsWalkIcon from "@mui/icons-material/DirectionsWalk";\nimport ViewInArIcon from "@mui/icons-material/ViewInAr";\n\n/**\n * React Component: Modal Control\n */\nconst ModeController = () => {\n  const [state, setState] = useFiveCurrentState();\n  return (\n    <Paper sx={{ position: "fixed", bottom: 0, left: 0, right: 0 }}>\n      <BottomNavigation\n        showLabels\n        value={state.mode}\n        onChange={(_, newValue) => {\n          setState({ mode: newValue });\n        }}\n      >\n        <BottomNavigationAction\n          label="Panorama roaming"\n          icon={<DirectionsWalkIcon />}\n          value={Five.Mode.Panorama}\n        />\n        <BottomNavigationAction\n          label="Space overview"\n          icon={<ViewInArIcon />}\n          value={Five.Mode.Floorplan}\n        />\n      </BottomNavigation>\n    </Paper>\n  );\n};\n\nexport { ModeController };\n')),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-jsx",metastring:'title="src/3.recording-state/LookAroundController.jsx"',title:'"src/3.recording-state/LookAroundController.jsx"'},'import React, { useState, useEffect } from "react";\nimport { useFiveCurrentState } from "@realsee/five/react";\nimport IconButton from "@mui/material/IconButton";\nimport Paper from "@mui/material/Paper";\nimport FlipCameraAndroidIcon from "@mui/icons-material/FlipCameraAndroid";\nimport PauseIcon from "@mui/icons-material/Pause";\n\n/**\n * ReactComponent: Auto Ring Button\n */\nconst LookAroundController = () => {\n  const [currentState, setState] = useFiveCurrentState();\n  const [active, toggleActive] = useState(false);\n  useEffect(() => {\n    if (active) {\n      const timer = window.setInterval(() => {\n        setState((prevState) => {\n          return { longitude: prevState.longitude + Math.PI / 360 };\n        });\n      }, 16);\n      return () => window.clearInterval(timer);\n    }\n  }, [active]);\n  return (\n    <Paper sx={{ position: "fixed", top: 10, right: 10 }}>\n      {active ? (\n        <IconButton onClick={() => toggleActive(false)}>\n          <PauseIcon />\n        </IconButton>\n      ) : (\n        <IconButton onClick={() => toggleActive(true)}>\n          <FlipCameraAndroidIcon />\n        </IconButton>\n      )}\n    </Paper>\n  );\n};\n\nexport { LookAroundController };\n')),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-jsx",metastring:'title="src/3.recording-state/App.jsx"',title:'"src/3.recording-state/App.jsx"'},'import React from "react";\nimport { createFiveProvider, FiveCanvas } from "@realsee/five/react";\nimport { useFetchWork } from "./useFetchWork";\nimport { useWindowDimensions } from "./useWindowDimensions";\nimport { ModeController } from "./ModeController";\nimport { LookAroundController } from "./LookAroundController";\n\n/** of work.json Data URL */\nconst workURL =\n  "https://vrlab-public.ljcdn.com/release/static/image/release/five/work-sample/07bdc58f413bc5494f05c7cbb5cbdce4/work.json";\n\nconst FiveProvider = createFiveProvider();\nconst App = () => {\n  const work = useFetchWork(workURL);\n  const size = useWindowDimensions();\n  return (\n    work && (\n      <FiveProvider initialWork={work}>\n        <FiveCanvas {...size} />\n        <ModeController />\n        <LookAroundController />\n      </FiveProvider>\n    )\n  );\n};\n\nexport { App };\n')),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-jsx",metastring:'title="src/3.recording-state/index.jsx"',title:'"src/3.recording-state/index.jsx"'},'import React from "react";\nimport ReactDOM from "react-dom";\nimport { App } from "./App";\n\nReactDOM.render(<App />, document.querySelector("#app"));\n\nexport {};\n'))),(0,o.kt)(i.Z,{value:"TypeScript",label:"TypeScript",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts",metastring:'title="src/3.recording-state/useFetchWork.ts"',title:'"src/3.recording-state/useFetchWork.ts"'},'import { useState, useEffect } from "react";\nimport { Work, parseWork } from "@realsee/five";\n\n/**\n * React Hook: By work. Son addresses get work object\n * @param url work. Son data address\n * @returns work object if fetching, Recall null\n */\nfunction useFetchWork(url: string) {\n  const [work, setWork] = useState<Work | null>(null);\n  useEffect(() => {\n    setWork(null);\n    fetch(url)\n      .then((response) => response.text())\n      .then((text) => setWork(parseWork(text)));\n  }, [url]);\n  return work;\n}\n\nexport { useFetchWork };\n')),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts",metastring:'title="src/3.recording-state/useWindowDimensions.ts"',title:'"src/3.recording-state/useWindowDimensions.ts"'},'import { useState, useEffect } from "react";\n\n/**\n * Get the size of the current window\n */\n function getWindowDimensions() {\n  return { width: window.innerWidth, height: window.innerHeight };\n}\n\n/**\n * React Hook: Get the size of the current window\n */\nfunction useWindowDimensions() {\n  const [size, setSize] = useState(getWindowDimensions);\n  useEffect(() => {\n    const listener = () => setSize(getWindowDimensions());\n    window.addEventListener("resize", listener, false);\n    return () => window.removeEventListener("resize", listener, false);\n  });\n  return size;\n}\n\nexport { useWindowDimensions };\n')),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-tsx",metastring:'title="src/3.recording-state/ModeController.tsx"',title:'"src/3.recording-state/ModeController.tsx"'},'import React, { FC } from "react";\nimport { Five, Mode } from "@realsee/five";\nimport { useFiveCurrentState } from "@realsee/five/react";\nimport BottomNavigation from "@mui/material/BottomNavigation";\nimport BottomNavigationAction from "@mui/material/BottomNavigationAction";\nimport Paper from "@mui/material/Paper";\nimport DirectionsWalkIcon from "@mui/icons-material/DirectionsWalk";\nimport ViewInArIcon from "@mui/icons-material/ViewInAr";\n\n/**\n * React Component : ModeController: Mode Controler\n */\nconst ModeController: FC = () => {\n  const [state, setState] = useFiveCurrentState();\n  return (\n    <Paper sx={{ position: "fixed", bottom: 0, left: 0, right: 0 }}>\n      <BottomNavigation\n        showLabels\n        value={state.mode}\n        onChange={(_, newValue: Mode) => {\n          setState({ mode: newValue });\n        }}\n      >\n        <BottomNavigationAction\n          label="Panorama roaming"\n          icon={<DirectionsWalkIcon />}\n          value={Five.Mode.Panorama}\n        />\n        <BottomNavigationAction\n          label="Space overview"\n          icon={<ViewInArIcon />}\n          value={Five.Mode.Floorplan}\n        />\n      </BottomNavigation>\n    </Paper>\n  );\n};\n\nexport { ModeController };\n')),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-tsx",metastring:'title="src/3.recording-state/LookAroundController.tsx"',title:'"src/3.recording-state/LookAroundController.tsx"'},'import React, { FC, useState, useEffect } from "react";\nimport { useFiveCurrentState } from "@realsee/five/react";\nimport IconButton from "@mui/material/IconButton";\nimport Paper from "@mui/material/Paper";\nimport FlipCameraAndroidIcon from "@mui/icons-material/FlipCameraAndroid";\nimport PauseIcon from "@mui/icons-material/Pause";\n\n/**\n * ReactComponent: Automatic Ring Button\n */\nconst LookAroundController: FC = () => {\n  const [currentState, setState] = useFiveCurrentState();\n  const [active, toggleActive] = useState(false);\n\n\n  useEffect(() => {\n    if (active) {\n      const timer = window.setInterval(() => {\n        setState((prevState) => {\n          return { longitude: prevState.longitude + Math.PI / 360 };\n        });\n      }, 16);\n      return () => window.clearInterval(timer);\n    }\n  }, [active]);\n  return (\n    <Paper sx={{ position: "fixed", top: 10, right: 10 }}>\n      {active ? (\n        <IconButton onClick={() => toggleActive(false)}>\n          <PauseIcon />\n        </IconButton>\n      ) : (\n        <IconButton onClick={() => toggleActive(true)}>\n          <FlipCameraAndroidIcon />\n        </IconButton>\n      )}\n    </Paper>\n  );\n};\n\nexport { LookAroundController };\n')),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-tsx",metastring:'title="src/3.recording-state/App.tsx"',title:'"src/3.recording-state/App.tsx"'},'import React, { FC } from "react";\nimport { createFiveProvider, FiveCanvas } from "@realsee/five/react";\nimport { useFetchWork } from "./useFetchWork";\nimport { useWindowDimensions } from "./useWindowDimensions";\nimport { ModeController } from "./ModeController";\nimport { LookAroundController } from "./LookAroundController";\n\n/** work. json data URL */\nconst workURL =\n  "https://vrlab-public.ljcdn.com/release/static/image/release/five/work-sample/07bdc58f413bc5494f05c7cbb5cbdce4/work.json";\n\nconst FiveProvider = createFiveProvider();\nconst App: FC = () => {\n  const work = useFetchWork(workURL);\n  const size = useWindowDimensions();\n  return (\n    work && (\n      <FiveProvider initialWork={work}>\n        <FiveCanvas {...size} />\n        <ModeController />\n        <LookAroundController />\n      </FiveProvider>\n    )\n  );\n};\n\nexport { App };\n')),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-tsx",metastring:'title="src/3.recording-state/index.tsx"',title:'"src/3.recording-state/index.tsx"'},'import React from "react";\nimport ReactDOM from "react-dom";\nimport { App } from "./App";\n\nReactDOM.render(<App />, document.querySelector("#app"));\n\nexport {};\n')))),(0,o.kt)("p",null,"Start service ",(0,o.kt)("inlineCode",{parentName:"p"},"npm run dev"),' and jump to the current page "http://localhost:3000/src/3.recording-state/index.html".'),(0,o.kt)("admonition",{type:"info"},(0,o.kt)("p",{parentName:"admonition"},"Please see your console. The port number will change due to your configuration and current port occupancy, please check the console output. If you use another development build tool, please start the service as required by your own development build tool.")),(0,o.kt)("h2",{id:"recording--playback"},"Recording / Playback"),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"This chapter continues to complete an interesting app with ",(0,o.kt)("strong",{parentName:"p"},"State"),". This chapter will complete such an app, log users into ",(0,o.kt)("strong",{parentName:"p"},"State"),"on the page and can replay these actions.",(0,o.kt)("br",null))),(0,o.kt)("h3",{id:"write-recorder"},"Write ",(0,o.kt)("strong",{parentName:"h3"},"Recorder")),(0,o.kt)("p",null,"First, we need to write ",(0,o.kt)("strong",{parentName:"p"},"Recorder")," to support records and playbacks. ",(0,o.kt)("strong",{parentName:"p"},"Recorder")," category is not the content of ",(0,o.kt)("strong",{parentName:"p"},"Five")," , it is only written to achieve the effect of this chapter."),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Implement the ",(0,o.kt)("strong",{parentName:"li"},"startRecording / endRecording")," method to start recording and end recording."),(0,o.kt)("li",{parentName:"ol"},"Implementing ",(0,o.kt)("strong",{parentName:"li"},"record(state: State)")," method, recording content.Record content between ",(0,o.kt)("strong",{parentName:"li"},"startRecording / endRecording"),"."),(0,o.kt)("li",{parentName:"ol"},"Implement ",(0,o.kt)("strong",{parentName:"li"},"play(callback)")," method, for playbacks, after calling play, install ",(0,o.kt)("strong",{parentName:"li"},"record")," content, call ",(0,o.kt)("strong",{parentName:"li"},"callback")," method,play ",(0,o.kt)("strong",{parentName:"li"},"State"),".")),(0,o.kt)(a.Z,{mdxType:"Tabs"},(0,o.kt)(i.Z,{value:"JavaScript",label:"JavaScript",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js",metastring:'title="src/3.recording-state/recorder.js"',title:'"src/3.recording-state/recorder.js"'},"/**\n * Recording class\n */\nclass Recorder {\n  constructor() {\n    this.startTime = 0;\n    this.records = null;\n  }\n  /**\n   * Whether\n   has been recorded */\n  hasRecords() {\n    return this.records !== null;\n  }\n  /**\n   * Record keyframe\n   * @param state five of state\n   * @returns\n   */\n  record(state) {\n    if (this.records === null) return;\n    this.records.push({\n      state: Object.assign({}, state),\n      time : Date.now() - this.startTime\n    });\n  }\n  /**\n   * start recording\n   */\n  startRecording() {\n    this.startTime = Date.now();\n    this.records = [] ;\n  }\n  /**\n   * End recording\n   */\n  endRecording() {\n    this.startTime = 0;\n  }\n  /**\n   * Playback recording\n   * @param callback key frame callback\n   * @returns whether the current There are records\n   */\n  play(callback) {\n    if (this.records === null || this.records.length === 0) return false;\n    const records = this.records.slice();\n    const keyframe = (keyIndex) => {\n      const current = records[keyIndex];\n      const next = records[keyIndex + 1];\n      callback(current.state, next === undefined);\n      if (next) {\n        const delay = next.time - current.time;\n        setTimeout(() => keyframe(keyIndex + 1), delay);\n      }\n    };\n    keyframe(0);\n    return true;\n  }\n}\n\nexport { Recorder };\n"))),(0,o.kt)(i.Z,{value:"TypeScript",label:"TypeScript",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts",metastring:'title="src/3.recording-state/recorder.ts"',title:'"src/3.recording-state/recorder.ts"'},'import { State } from "@realsee/five";\n\n/**\n * Recording class\n */\nclass Recorder {\n  private records: { state: State; time: number }[] | null = null;\n  private startTime: number;\n  constructor() {\n    this.startTime = 0;\n    this.records = null;\n  }\n  /**\n   * Whether\n   has been recorded */\n  hasRecords() {\n    return this.records !== null;\n  }\n  /**\n   * record keyframe\n   * @param state five\'s state\n   * @returns\n   */\n  record(state: State) {\n    if (this.records === null) return;\n    this.records.push({\n      state: Object.assign({}, state),\n      time: Date.now() - this.startTime,\n    });\n  }\n  /* *\n   * start recording\n   */\n  startRecording() {\n    this.startTime = Date.now();\n    this.records = [];\n  }\n  /**\n   * end recording\n   */\n  endRecording() {\n    this.startTime = 0;\n  }\n  /**\n   * Playback recording\n   * @param callback Keyframe callback\n   * @returns Whether there is a recording currently\n   */\n  play(callback: (state: State, isFinal: boolean) => void) {\n    if (this.records === null || this.records.length === 0) return false;\n    const records = this.records.slice();\n    const keyframe = (keyIndex: number) => {\n      const current = records[keyIndex];\n      const next = records[keyIndex + 1];\n      callback(current.state, next === undefined);\n      if (next) {\n        const delay = next.time - current.time;\n        setTimeout(() => keyframe(keyIndex + 1), delay);\n      }\n    };\n    keyframe(0);\n    return true;\n  }\n}\n\nexport { Recorder };\n')))),(0,o.kt)("h3",{id:"write-recording-component"},"Write Recording Component"),(0,o.kt)("p",null,"Put ",(0,o.kt)("strong",{parentName:"p"},"Recorder")," into React components."),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Add a ",(0,o.kt)("strong",{parentName:"p"},"RecorderController")," file to write components.")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Two React state states in the component ",(0,o.kt)("strong",{parentName:"p"},"recording")," and ",(0,o.kt)("strong",{parentName:"p"},"playing"),".Separate status in recording/playback.")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("a",{parentName:"p",href:"https://unpkg.com/@realsee/five/docs/modules/react.html#useFiveEventCallback"},(0,o.kt)("inlineCode",{parentName:"a"},"useFiveEventCallback"))," Gets the Built-in method callback.",(0,o.kt)("br",null)," Here we call the ",(0,o.kt)("strong",{parentName:"p"},"stateChange")," event, which will be triggered when ",(0,o.kt)("strong",{parentName:"p"},"state")," changes, and then call ",(0,o.kt)("inlineCode",{parentName:"p"},"recorder.record(state)")," method to record ",(0,o.kt)("strong",{parentName:"p"},"State"),".",(0,o.kt)("br",null)),(0,o.kt)("blockquote",{parentName:"li"},(0,o.kt)("p",{parentName:"blockquote"},"More event descriptions see ",(0,o.kt)("a",{parentName:"p",href:"https://unpkg.com/@realsee/five/docs/interfaces/five.EventCallback.html"},(0,o.kt)("strong",{parentName:"a"},"Five")," events list")))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"When the playback button is pressed, call the ",(0,o.kt)("inlineCode",{parentName:"p"},"recorder.play(callback)")," method, then call the previously recorded ",(0,o.kt)("strong",{parentName:"p"},"state")," arc call ",(0,o.kt)("strong",{parentName:"p"},"callback")," method.")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"The ",(0,o.kt)("strong",{parentName:"p"},"setState")," method to call the record and apply the replay content to change the picture."))),(0,o.kt)(a.Z,{mdxType:"Tabs"},(0,o.kt)(i.Z,{value:"JavaScript",label:"JavaScript",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-jsx",metastring:'title="src/3.recording-state/RecorderController.jsx"',title:'"src/3.recording-state/RecorderController.jsx"'},'import React, { useState, useCallback } from "react";\nimport { useFiveEventCallback, useFiveState } from "@realsee/five/react";\nimport Button from "@mui/material/Button";\nimport IconButton from "@mui/material/IconButton";\nimport Paper from "@mui/material/Paper";\nimport FiberManualRecordIcon from "@mui/icons-material/FiberManualRecord";\nimport StopIcon from "@mui/icons-material/Stop";\nimport PlayArrowIcon from "@mui/icons-material/PlayArrow";\nimport { Recorder } from "./recorder";\n\n/**\n * ReactComponent: state recording\n */\nconst RecorderController = () => {\n  const [state, setState] = useFiveState();\n  const [recording, toggleRecording] = useState(false);\n  const [playing, togglePlaying] = useState(false);\n  const [recorder] = useState(() => new Recorder());\n  const startRecording = useCallback(() => {\n    recorder.startRecording();\n    toggleRecording(true);\n  }, [recorder]);\n  const endRecording = useCallback(() => {\n    recorder.endRecording();\n    toggleRecording(false);\n  }, [recorder]);\n  const play = useCallback(() => {\n    const hasRecord = recorder.play((state, isFinal) => {\n      setState(state);\n      togglePlaying(!isFinal);\n    });\n    togglePlaying(hasRecord);\n  }, []);\n  useFiveEventCallback("stateChange", (state) => {\n    recorder.record(state);\n  });\n  if (recording) {\n    return (\n      <Paper sx={{ position: "fixed", top: 10, left: 10 }}>\n        <IconButton onClick={endRecording}>\n          <StopIcon />\n        </IconButton>\n        <Button disabled>\u5f55\u5236\u4e2d</Button>\n      </Paper>\n    );\n  }\n  if (playing) {\n    return (\n      <Paper sx={{ position: "fixed", top: 10, left: 10 }}>\n        <Button disabled>\u56de\u653e\u4e2d</Button>\n      </Paper>\n    );\n  }\n  return (\n    <Paper sx={{ position: "fixed", top: 10, left: 10 }}>\n      <IconButton onClick={startRecording}>\n        <FiberManualRecordIcon />\n      </IconButton>\n      <IconButton onClick={play}>\n        <PlayArrowIcon />\n      </IconButton>\n    </Paper>\n  );\n};\n\nexport { RecorderController };\n'))),(0,o.kt)(i.Z,{value:"TypeScript",label:"TypeScript",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-tsx",metastring:'title="src/3.recording-state/RecorderController.tsx"',title:'"src/3.recording-state/RecorderController.tsx"'},'import React, { useState, useCallback } from "react";\nimport { useFiveEventCallback, useFiveState } from "@realsee/five/react";\nimport Button from "@mui/material/Button";\nimport IconButton from "@mui/material/IconButton";\nimport Paper from "@mui/material/Paper";\nimport FiberManualRecordIcon from "@mui/icons-material/FiberManualRecord";\nimport StopIcon from "@mui/icons-material/Stop";\nimport PlayArrowIcon from "@mui/icons-material/PlayArrow";\nimport { Recorder } from "./recorder";\n\n/**\n * ReactComponent: state recording\n */\nconst RecorderController = () => {\n  const [state, setState] = useFiveState();\n  const [recording, toggleRecording] = useState(false);\n  const [playing, togglePlaying] = useState(false);\n  const [recorder] = useState(() => new Recorder());\n  const startRecording = useCallback(() => {\n    recorder.startRecording();\n    toggleRecording(true);\n  }, [recorder]);\n  const endRecording = useCallback(() => {\n    recorder.endRecording();\n    toggleRecording(false);\n  }, [recorder]);\n  const play = useCallback(() => {\n    const hasRecord = recorder.play((state, isFinal) => {\n      setState(state);\n      togglePlaying(!isFinal);\n    });\n    togglePlaying(hasRecord);\n  }, []);\n  useFiveEventCallback("stateChange", (state) => {\n    recorder.record(state);\n  });\n  if (recording) {\n    return (\n      <Paper sx={{ position: "fixed", top: 10, left: 10 }}>\n        <IconButton onClick={endRecording}>\n          <StopIcon />\n        </IconButton>\n        <Button disabled>\u5f55\u5236\u4e2d</Button>\n      </Paper>\n    );\n  }\n  if (playing) {\n    return (\n      <Paper sx={{ position: "fixed", top: 10, left: 10 }}>\n        <Button disabled>\u56de\u653e\u4e2d</Button>\n      </Paper>\n    );\n  }\n  return (\n    <Paper sx={{ position: "fixed", top: 10, left: 10 }}>\n      <IconButton onClick={startRecording}>\n        <FiberManualRecordIcon />\n      </IconButton>\n      <IconButton onClick={play}>\n        <PlayArrowIcon />\n      </IconButton>\n    </Paper>\n  );\n};\n\nexport { RecorderController };\n')))),(0,o.kt)("h3",{id:"use-status-recording-component"},"Use Status Recording Component"),(0,o.kt)("p",null,"Insert into ",(0,o.kt)("strong",{parentName:"p"},"App")," file ",(0,o.kt)("strong",{parentName:"p"},"GiveProvider")),(0,o.kt)(a.Z,{mdxType:"Tabs"},(0,o.kt)(i.Z,{value:"JavaScript",label:"JavaScript",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-jsx",metastring:'title="src/3.recording-state/App.jsx"',title:'"src/3.recording-state/App.jsx"'},'import React from "react";\nimport { createFiveProvider, FiveCanvas } from "@realsee/five/react";\nimport { useFetchWork } from "./useFetchWork";\nimport { useWindowDimensions } from "./useWindowDimensions";\nimport { ModeController } from "./ModeController";\nimport { LookAroundController } from "./LookAroundController";\n// highlight-start\nimport { RecorderController } from "./RecorderController";\n// highlight -end\n\n/** Data URL of work.json */\nconst workURL =\n  "https://vrlab-public.ljcdn.com/release/static/image/release/five/work-sample/07bdc58f413bc5494f05c7cbb5cbdce4/work.json";\n\nconst FiveProvider = createFiveProvider();\nconst App = () => {\n  const work = useFetchWork(workURL);\n  const size = useWindowDimensions();\n  return (\n    work && (\n      <FiveProvider initialWork={work}>\n        <FiveCanvas {...size} />\n        <ModeController />\n        <LookAroundController />\n        // highlight-start\n        <RecorderController />\n        // highlight-end\n      </FiveProvider>\n    )\n  );\n};\n\nexport { App };\n'))),(0,o.kt)(i.Z,{value:"TypeScript",label:"TypeScript",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-tsx",metastring:'title="src/3.recording-state/App.tsx"',title:'"src/3.recording-state/App.tsx"'},'import React, { FC } from "react";\nimport { createFiveProvider, FiveCanvas } from "@realsee/five/react";\nimport { useFetchWork } from "./useFetchWork";\nimport { useWindowDimensions } from "./useWindowDimensions";\nimport { ModeController } from "./ModeController";\nimport { LookAroundController } from "./LookAroundController";\n// highlight-start\nimport { RecorderController } from "./RecorderController";\n/ /highlight-end\n\n/** Data URL of work.json */\nconst workURL =\n  "https://vrlab-public.ljcdn.com/release/static/image/release/five/work-sample/07bdc58f413bc5494f05c7cbb5cbdce4/work.json";\n\nconst FiveProvider = createFiveProvider();\nconst App: FC = () => {\n  const work = useFetchWork(workURL);\n  const size = useWindowDimensions();\n  return (\n    work && (\n      <FiveProvider initialWork={work}>\n        <FiveCanvas {...size} />\n        <ModeController />\n        <LookAroundController />\n        // highlight-start\n        <RecorderController />\n        // highlight-end\n      </FiveProvider>\n    )\n  );\n};\n\nexport { App };\n')))),(0,o.kt)("p",null,"Back to your browser to view will find a record and play button in the upper left corner of your page.Try whether the trial function meets expectations."),(0,o.kt)("p",null,"Yes, you\u2019re and can write what complex programs are\ud83e\udd73"),(0,o.kt)("h2",{id:"the-next-section-will-be-completed-by-you"},"The next section will be completed by you"),(0,o.kt)("admonition",{title:"Next chapter we need to deal with the three-dimensional spatial model.",type:"tip"},(0,o.kt)("ul",{parentName:"admonition"},(0,o.kt)("li",{parentName:"ul"},"Learn about the Live SDK gesture interaction."),(0,o.kt)("li",{parentName:"ul"},"Gets a three-dimensional position to a point."))))}g.isMDXComponent=!0}}]);