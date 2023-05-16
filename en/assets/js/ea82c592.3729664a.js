"use strict";(self.webpackChunkrealsee_developer_github_com=self.webpackChunkrealsee_developer_github_com||[]).push([[7489],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>k});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=r.createContext({}),c=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},m="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),m=c(n),u=o,k=m["".concat(l,".").concat(u)]||m[u]||d[u]||a;return n?r.createElement(k,i(i({ref:t},p),{},{components:n})):r.createElement(k,i({ref:t},p))}));function k(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=u;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[m]="string"==typeof e?e:o,i[1]=s;for(var c=2;c<a;c++)i[c]=n[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},85162:(e,t,n)=>{n.d(t,{Z:()=>i});var r=n(67294),o=n(86010);const a={tabItem:"tabItem_Ymn6"};function i(e){let{children:t,hidden:n,className:i}=e;return r.createElement("div",{role:"tabpanel",className:(0,o.Z)(a.tabItem,i),hidden:n},t)}},65488:(e,t,n)=>{n.d(t,{Z:()=>d});var r=n(87462),o=n(67294),a=n(86010),i=n(72389),s=n(67392),l=n(7094),c=n(12466);const p={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};function m(e){const{lazy:t,block:n,defaultValue:i,values:m,groupId:d,className:u}=e,k=o.Children.map(e.children,(e=>{if((0,o.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})),h=m??k.map((e=>{let{props:{value:t,label:n,attributes:r}}=e;return{value:t,label:n,attributes:r}})),f=(0,s.l)(h,((e,t)=>e.value===t.value));if(f.length>0)throw new Error(`Docusaurus error: Duplicate values "${f.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`);const v=null===i?i:i??k.find((e=>e.props.default))?.props.value??k[0].props.value;if(null!==v&&!h.some((e=>e.value===v)))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${v}" but none of its children has the corresponding value. Available values are: ${h.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);const{tabGroupChoices:g,setTabGroupChoices:b}=(0,l.U)(),[w,y]=(0,o.useState)(v),N=[],{blockElementScrollPositionUntilNextRender:x}=(0,c.o5)();if(null!=d){const e=g[d];null!=e&&e!==w&&h.some((t=>t.value===e))&&y(e)}const C=e=>{const t=e.currentTarget,n=N.indexOf(t),r=h[n].value;r!==w&&(x(t),y(r),null!=d&&b(d,String(r)))},S=e=>{let t=null;switch(e.key){case"Enter":C(e);break;case"ArrowRight":{const n=N.indexOf(e.currentTarget)+1;t=N[n]??N[0];break}case"ArrowLeft":{const n=N.indexOf(e.currentTarget)-1;t=N[n]??N[N.length-1];break}}t?.focus()};return o.createElement("div",{className:(0,a.Z)("tabs-container",p.tabList)},o.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,a.Z)("tabs",{"tabs--block":n},u)},h.map((e=>{let{value:t,label:n,attributes:i}=e;return o.createElement("li",(0,r.Z)({role:"tab",tabIndex:w===t?0:-1,"aria-selected":w===t,key:t,ref:e=>N.push(e),onKeyDown:S,onClick:C},i,{className:(0,a.Z)("tabs__item",p.tabItem,i?.className,{"tabs__item--active":w===t})}),n??t)}))),t?(0,o.cloneElement)(k.filter((e=>e.props.value===w))[0],{className:"margin-top--md"}):o.createElement("div",{className:"margin-top--md"},k.map(((e,t)=>(0,o.cloneElement)(e,{key:t,hidden:e.props.value!==w})))))}function d(e){const t=(0,i.Z)();return o.createElement(m,(0,r.Z)({key:String(t)},e))}},53142:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>l,default:()=>k,frontMatter:()=>s,metadata:()=>c,toc:()=>m});var r=n(87462),o=(n(67294),n(3905)),a=n(65488),i=n(85162);const s={title:"Points in 3D space"},l=void 0,c={unversionedId:"front/3d-space/handbook/react-hooks/points-in-3d",id:"front/3d-space/handbook/react-hooks/points-in-3d",title:"Points in 3D space",description:"Previous chapter recalls: Status Recording",source:"@site/i18n/en/docusaurus-plugin-content-docs/current/front/3d-space/handbook/react-hooks/4.points-in-3d.md",sourceDirName:"front/3d-space/handbook/react-hooks",slug:"/front/3d-space/handbook/react-hooks/points-in-3d",permalink:"/en/docs/front/3d-space/handbook/react-hooks/points-in-3d",draft:!1,tags:[],version:"current",lastUpdatedBy:"sansi.lcj",lastUpdatedAt:1669717185,formattedLastUpdatedAt:"Nov 29, 2022",sidebarPosition:4,frontMatter:{title:"Points in 3D space"},sidebar:"\u4e09\u7ef4\u7a7a\u95f4",previous:{title:"Status Recording",permalink:"/en/docs/front/3d-space/handbook/react-hooks/recording-state"},next:{title:"Tag",permalink:"/en/docs/front/3d-space/handbook/react-hooks/tagging"}},p={},m=[{value:"Preparatory work",id:"preparatory-work",level:2},{value:"Event System",id:"event-system",level:2},{value:"Built-in Events",id:"built-in-events",level:3},{value:"Block default behavior",id:"block-default-behavior",level:3},{value:"Get coordinates from tapGesture",id:"get-coordinates-from-tapgesture",level:2},{value:"Header Add Dependencies",id:"header-add-dependencies",level:3},{value:"Write <strong>MarkController</strong> Component",id:"write-markcontroller-component",level:3},{value:"Use Tag Component",id:"use-tag-component",level:3},{value:"The next section will be completed by you",id:"the-next-section-will-be-completed-by-you",level:2}],d={toc:m},u="wrapper";function k(e){let{components:t,...s}=e;return(0,o.kt)(u,(0,r.Z)({},d,s,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},(0,o.kt)("strong",{parentName:"p"},"Previous chapter recalls: Status Recording")," ",(0,o.kt)("br",null)," "),(0,o.kt)("ul",{parentName:"blockquote"},(0,o.kt)("li",{parentName:"ul"},"You know how to record and restore operations through ",(0,o.kt)("strong",{parentName:"li"},"State"),".",(0,o.kt)("br",null)," "),(0,o.kt)("li",{parentName:"ul"},"Knowingly use ",(0,o.kt)("strong",{parentName:"li"},"State")," related methods and events."))),(0,o.kt)("admonition",{title:"This chapter can learn to",type:"tip"},(0,o.kt)("ul",{parentName:"admonition"},(0,o.kt)("li",{parentName:"ul"},"Learn about the Live SDK event system."),(0,o.kt)("li",{parentName:"ul"},"Gets a three-dimensional position to a point."))),(0,o.kt)("h2",{id:"preparatory-work"},"Preparatory work"),(0,o.kt)("p",null,"We create a new directory (",(0,o.kt)("inlineCode",{parentName:"p"},"src/4.points-in-3d"),"and corresponding ",(0,o.kt)("strong",{parentName:"p"},"htm")," file and ",(0,o.kt)("strong",{parentName:"p"},"jsx")," or ",(0,o.kt)("strong",{parentName:"p"},"tsx")," file. The ",(0,o.kt)("strong",{parentName:"p"},"State")," code with the previous chapter is too onerous, and we show the base development of the contents of ",(0,o.kt)("strong",{parentName:"p"},"the three-dimensional space")," chapter from ."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-html",metastring:'title="src/4.points-in-3d/index.html"',title:'"src/4.points-in-3d/index.html"'},'<!DOCTYPE html>\n<html lang="en">\n  <head>\n    <meta charset="UTF-8" />\n    <link rel="icon" href="data:;base64,iVBORw0KGgo=" />\n    <meta name="viewport" content="width=device-width, initial-scale=1.0" />\n    <title>points in 3 dimensions | Points in 3d</title>\n    <style>\n      * {\n        margin: 0;\n        padding: 0;\n      }\n      html,\n      body #app {\n        width: 100%;\n        height: 100%;\n        overflow: hidden;\n      }\n    </style>\n  </head>\n  <body>\n    <div id="app"></div>\n    <script type="module" src="./index"><\/script>\n  </body>\n</html>\n')),(0,o.kt)(a.Z,{mdxType:"Tabs"},(0,o.kt)(i.Z,{value:"JavaScript",label:"JavaScript",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js",metastring:'title="src/4.points-in-3d/useFetchWork.js"',title:'"src/4.points-in-3d/useFetchWork.js"'},'import { useState, useEffect } from "react";\nimport { parseWork } from "@realsee/five";\n\n/**\n * React Hook: passed The address of work.json gets the work object\n * @param url the data address of work.json\n * @returns the work object, if getting it, returns null\n */\nfunction useFetchWork(url) {\n  const [work, setWork] = useState(null);\n  useEffect(() => {\n    setWork(null);\n    fetch(url)\n      .then((response) => response.text())\n      .then((text) => setWork(parseWork(text)));\n  }, [url]);\n  return work;\n}\n\nexport { useFetchWork };\n')),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js",metastring:'title="src/4.points-in-3d/useWindowDimensions.js"',title:'"src/4.points-in-3d/useWindowDimensions.js"'},'import { useState, useEffect } from "react";\n\n/**\n * Get the size of the current window\n */\nfunction getWindowDimensions() {\n  return { width: window.innerWidth, height: window.innerHeight };\n}\n\n/**\n * React Hook: Get the size of the current window\n */\nfunction useWindowDimensions() {\n  const [size, setSize] = useState(getWindowDimensions);\n  useEffect(() => {\n    const listener = () => setSize(getWindowDimensions());\n    window.addEventListener("resize", listener, false);\n    return () => window.removeEventListener("resize", listener, false);\n  });\n  return size;\n}\n\nexport { useWindowDimensions };\n')),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-jsx",metastring:'title="src/4.points-in-3d/ModeController.jsx"',title:'"src/4.points-in-3d/ModeController.jsx"'},'import React from "react";\nimport { Five } from "@realsee/five";\nimport { useFiveCurrentState } from "@realsee/five/react";\nimport BottomNavigation from "@mui/material/BottomNavigation";\nimport BottomNavigationAction from "@mui/material/BottomNavigationAction";\nimport Paper from "@mui/material/Paper";\nimport DirectionsWalkIcon from "@mui/icons-material/DirectionsWalk";\nimport ViewInArIcon from "@mui/icons-material/ViewInAr";\n\n/**\n * React Component: Modal Control\n */\nconst ModeController = () => {\n  const [state, setState] = useFiveCurrentState();\n  return (\n    <Paper sx={{ position: "fixed", bottom: 0, left: 0, right: 0 }}>\n      <BottomNavigation\n        showLabels\n        value={state.mode}\n        onChange={(_, newValue) => {\n          setState({ mode: newValue });\n        }}\n      >\n        <BottomNavigationAction\n          label="Panorama roaming"\n          icon={<DirectionsWalkIcon />}\n          value={Five.Mode.Panorama}\n        />\n        <BottomNavigationAction\n          label="Space overview"\n          icon={<ViewInArIcon />}\n          value={Five.Mode.Floorplan}\n        />\n      </BottomNavigation>\n    </Paper>\n  );\n};\n\nexport { ModeController };\n')),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-jsx",metastring:'title="src/4.points-in-3d/App.tsx"',title:'"src/4.points-in-3d/App.tsx"'},'import React from "react";\nimport { createFiveProvider, FiveCanvas } from "@realsee/five/react";\nimport { useFetchWork } from "./useFetchWork";\nimport { useWindowDimensions } from "./useWindowDimensions";\nimport { ModeController } from "./ModeController";\n\n/** work. The data URL */\nconst workURL =\n  "https://vrlab-public.ljcdn.com/release/static/image/release/five/work-sample/07bdc58f413bc5494f05c7cbb5cbdce4/work.json";\n\nconst FiveProvider = createFiveProvider();\nconst App = () => {\n  const work = useFetchWork(workURL);\n  const size = useWindowDimensions();\n  return (\n    work && (\n      <FiveProvider initialWork={work}>\n        <FiveCanvas {...size} />\n        <ModeController />\n      </FiveProvider>\n    )\n  );\n};\n\nexport { App };\n')),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-jsx",metastring:'title="src/4.points-in-3d/index.jsx"',title:'"src/4.points-in-3d/index.jsx"'},'import React from "react";\nimport ReactDOM from "react-dom";\nimport { App } from "./App";\n\nReactDOM.render(<App />, document.querySelector("#app"));\n\nexport {};\n'))),(0,o.kt)(i.Z,{value:"TypeScript",label:"TypeScript",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts",metastring:'title="src/4.points-in-3d/useFetchWork.ts"',title:'"src/4.points-in-3d/useFetchWork.ts"'},'import { useState, useEffect } from "react";\nimport { Work, parseWork } from "@realsee/five";\n\n/**\n * React Hook: through work. Son addresses get work object\n * @param url work. Son data address\n * @returns work object if fetching, Recall null\n */\nfunction useFetchWork(url: string) {\n  const [work, setWork] = useState<Work | null>(null);\n  useEffect(() => {\n    setWork(null);\n    fetch(url)\n      .then((response) => response.text())\n      .then((text) => setWork(parseWork(text)));\n  }, [url]);\n  return work;\n}\n\nexport { useFetchWork };\n')),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts",metastring:'title="src/4.points-in-3d/useWindowDimensions.ts"',title:'"src/4.points-in-3d/useWindowDimensions.ts"'},'import { useState, useEffect } from "react";\n\n/**\n * Get the size of the current window\n */\nfunction getWindowDimensions() {\n  return { width: window.innerWidth, height: window.innerHeight };\n}\n\n/**\n * React Hook: Get the size of the current window\n */\nfunction useWindowDimensions() {\n  const [size, setSize] = useState(getWindowDimensions);\n  useEffect(() => {\n    const listener = () => setSize(getWindowDimensions());\n    window.addEventListener("resize", listener, false);\n    return () => window.removeEventListener("resize", listener, false);\n  });\n  return size;\n}\n\nexport { useWindowDimensions };\n')),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-tsx",metastring:'title="src/4.points-in-3d/ModeController.tsx"',title:'"src/4.points-in-3d/ModeController.tsx"'},'import React, { FC } from "react";\nimport { Five, Mode } from "@realsee/five";\nimport { useFiveCurrentState } from "@realsee/five/react";\nimport BottomNavigation from "@mui/material/BottomNavigation";\nimport BottomNavigationAction from "@mui/material/BottomNavigationAction";\nimport Paper from "@mui/material/Paper";\nimport DirectionsWalkIcon from "@mui/icons-material/DirectionsWalk";\nimport ViewInArIcon from "@mui/icons-material/ViewInAr";\n\n/**\n * React Component : ModeController: Mode Controler\n */\nconst ModeController: FC = () => {\n  const [state, setState] = useFiveCurrentState();\n  return (\n    <Paper sx={{ position: "fixed", bottom: 0, left: 0, right: 0 }}>\n      <BottomNavigation\n        showLabels\n        value={state.mode}\n        onChange={(_, newValue: Mode) => {\n          setState({ mode: newValue });\n        }}\n      >\n        <BottomNavigationAction\n          label="Panorama roaming"\n          icon={<DirectionsWalkIcon />}\n          value={Five.Mode.Panorama}\n        />\n        <BottomNavigationAction\n          label="Space overview"\n          icon={<ViewInArIcon />}\n          value={Five.Mode.Floorplan}\n        />\n      </BottomNavigation>\n    </Paper>\n  );\n};\n\nexport { ModeController };\n')),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-tsx",metastring:'title="src/4.points-in-3d/App.tsx"',title:'"src/4.points-in-3d/App.tsx"'},'import React, { FC } from "react";\nimport { createFiveProvider, FiveCanvas } from "@realsee/five/react";\nimport { useFetchWork } from "./useFetchWork";\nimport { useWindowDimensions } from "./useWindowDimensions";\nimport { ModeController } from "./ModeController";\n\n/** data URL of work.json */\nconst workURL =\n  "https://vrlab-public.ljcdn.com/release/static/image/release/five/work-sample/07bdc58f413bc5494f05c7cbb5cbdce4/work.json";\n\nconst FiveProvider = createFiveProvider();\nconst App: FC = () => {\n  const work = useFetchWork(workURL);\n  const size = useWindowDimensions();\n  return (\n    work && (\n      <FiveProvider initialWork={work}>\n        <FiveCanvas {...size} />\n        <ModeController />\n      </FiveProvider>\n    )\n  );\n};\n\nexport { App };\n')),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-tsx",metastring:'title="src/4.points-in-3d/index.tsx"',title:'"src/4.points-in-3d/index.tsx"'},'import React from "react";\nimport ReactDOM from "react-dom";\nimport { App } from "./App";\n\nReactDOM.render(<App />, document.querySelector("#app"));\n\nexport {};\n')))),(0,o.kt)("p",null,"Start service ",(0,o.kt)("inlineCode",{parentName:"p"},"npm run dev"),' and jump to the current page "http://localhost:3000/src/4.points-in-3d/index.html".'),(0,o.kt)("admonition",{type:"info"},(0,o.kt)("p",{parentName:"admonition"},"Please see your console. The port number will change due to your configuration and current port occupancy, please check the console output. If you use another development build tool, please start the service as required by your own development build tool.")),(0,o.kt)("h2",{id:"event-system"},"Event System"),(0,o.kt)("p",null,"When clicking on the screen, the default behavior of",(0,o.kt)("strong",{parentName:"p"},"five SDK")," is to select the most appropriate ",(0,o.kt)("strong",{parentName:"p"},"observation near the location of the clicked")," to move the past.This is true of most users' actions, and the processing logic of ",(0,o.kt)("strong",{parentName:"p"},"A tag")," is mostly linked to the link jumps.The above is the builtin of ",(0,o.kt)("strong",{parentName:"p"},"five SDK")," ",(0,o.kt)("strong",{parentName:"p"},"tapGesture"),"events."),(0,o.kt)("h3",{id:"built-in-events"},"Built-in Events"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"five SDK")," built-in events are as follows\uff1a"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"tapGesture"),": left mouse click or finger.Default behavior is a point move."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"panGest"),": mouse over one mouse or drag and drop the finger on the screen.Camera rotation (camera shift under Topview)."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"pinchGesture"),": finger to make fabricated gestures.The default behavior is to modify camera visualizations."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"mouseWheel"),": Mouse Wheel.The default behavior is to modify camera visualizations."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"gesture"),": any of the events above.")),(0,o.kt)("h3",{id:"block-default-behavior"},"Block default behavior"),(0,o.kt)("p",null,"All events and browser's handling logic for ",(0,o.kt)("strong",{parentName:"p"},"A tag")," can block default events, you simply listen to ",(0,o.kt)("inlineCode",{parentName:"p"},"wants")," at the beginning of the callback function ",(0,o.kt)("inlineCode",{parentName:"p"},"return false"),".For example, want to block the default point movement of ",(0,o.kt)("strong",{parentName:"p"},"tapGesture"),".This can be done as follows."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},'useFiveEventCallback("wantsTapGesure", () => {\n  //highlight-start\n  // block tapGest trigger\n  return false;\n  // highlight-end\n});\n')),(0,o.kt)("p",null,"The API for each event can view detailed documents"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://unpkg.com/@realsee/five/docs/interfaces/five.EventCallback.html#tapGesture"},"tapGesture")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://unpkg.com/@realsee/five/docs/interfaces/five.EventCallback.html#panGesture"},"panGesture")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://unpkg.com/@realsee/five/docs/interfaces/five.EventCallback.html#pinchGesture"},"pinchGesture")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://unpkg.com/@realsee/five/docs/interfaces/five.EventCallback.html#mouseWheel"},"mouseWheel")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://unpkg.com/@realsee/five/docs/interfaces/five.EventCallback.html#gesture"},"gesture"))),(0,o.kt)("h2",{id:"get-coordinates-from-tapgesture"},"Get coordinates from tapGesture"),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"We make a simple feature to mark the 3-D position on the canvas. But in order not to conflict with the ",(0,o.kt)("strong",{parentName:"p"},"point move")," feature, we use a ",(0,o.kt)("inlineCode",{parentName:"p"},"Switch")," button to control whether or not the marker status is enabled.")),(0,o.kt)("h3",{id:"header-add-dependencies"},"Header Add Dependencies"),(0,o.kt)("p",null,"This chapter needs to introduce ",(0,o.kt)("a",{parentName:"p",href:"http://threejs.org"},"three.js"),".",(0,o.kt)("strong",{parentName:"p"},"three.js")," is a three-dimensional graphics library,",(0,o.kt)("strong",{parentName:"p"},"Five SDK")," uses ",(0,o.kt)("strong",{parentName:"p"},"three.js"),".This chapter is related to ",(0,o.kt)("strong",{parentName:"p"},"three.js")," and make some instructions here, you don't need to be fully aware of ",(0,o.kt)("strong",{parentName:"p"},"three.js"),", I can understand you by making some instructions."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://threejs.org/docs/index.html#api/zh/math/Vector3"},(0,o.kt)("inlineCode",{parentName:"a"},"THREE.Vector3")),": you can think of a structure that is ",(0,o.kt)("inlineCode",{parentName:"li"},"{ x: number, y: number, z: number }")," and add some mathematical methods (this time won't use a mathematical method, just record xyz)"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://threejs.org/docs/index.html#api/zh/core/Raycaster"},(0,o.kt)("inlineCode",{parentName:"a"},"THREE.Raycaster")),": light projecting class.You can simply understand that a point on the screen corresponding to a three-dimensional space is a ray.")),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"REYCASTER",src:n(65639).Z,width:"850",height:"415"})),(0,o.kt)("p",null,"The rays have many effects, such as\uff1apassing the intersection test before the ray and model to determine if the object is selected."),(0,o.kt)("h3",{id:"write-markcontroller-component"},"Write ",(0,o.kt)("strong",{parentName:"h3"},"MarkController")," Component"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Add a ",(0,o.kt)("strong",{parentName:"li"},"MarkController")," file to write components."),(0,o.kt)("li",{parentName:"ol"},"We control whether the current app is in marked mode by ",(0,o.kt)("strong",{parentName:"li"},"active")," React state status."),(0,o.kt)("li",{parentName:"ol"},"By ",(0,o.kt)("inlineCode",{parentName:"li"},"tapGesture")," the first parameter is ",(0,o.kt)("inlineCode",{parentName:"li"},"raycaster"),", by ",(0,o.kt)("inlineCode",{parentName:"li"},"modelIntersectRaycaster")," the focus information can be retrieved ",(0,o.kt)("inlineCode",{parentName:"li"},"intersect"),",",(0,o.kt)("inlineCode",{parentName:"li"},"intersect.point")," is the coordinates of the node."),(0,o.kt)("li",{parentName:"ol"},"Save all interfaces with ",(0,o.kt)("inlineCode",{parentName:"li"},"marks")," React state and implement collection and deletion.")),(0,o.kt)(a.Z,{mdxType:"Tabs"},(0,o.kt)(i.Z,{value:"JavaScript",label:"JavaScript",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-tsx",metastring:'title="src/4.points-in-3d/MarkController.tsx"',title:'"src/4.points-in-3d/MarkController.tsx"'},'/**\n * React Component: mark coordinates\n */\nimport React, { useState, useEffect } from "react";\nimport {\n  useFiveEventCallback,\n  useFiveModelIntersectRaycaster,\n} from "@realsee/five/react";\nimport Button from "@mui/material/Button";\nimport Switch from "@mui/material/Switch";\nimport Chip from "@mui/material/Chip";\nimport Stack from "@mui/material/Stack";\nimport Paper from "@mui/material/Paper";\n\n/**\n * React Component: Markpoint point\n */\nconst MarkController = () => {\n  const [active, toggleActive] = useState(false);\n  const [marks, setMarks] = useState([]);\n  const modelIntersectRaycaster = useFiveModelIntersectRaycaster();\n  useFiveEventCallback(\n    "wantsTapGesture",\n    (raycaster) => {\n      if (active) {\n        const [intersect] = modelIntersectRaycaster(raycaster);\n        if (intersect) setMarks((marks) => marks.concat(intersect.point));\n        return false;\n      }\n    },\n    [active]\n  );\n  return (\n    <Paper sx={{ position: "fixed", top: 10, left: 10, padding: 1 }}>\n      <Stack>\n        <Stack direction="row">\n          <Switch\n            checked={active}\n            onChange={(event, checked) => toggleActive(checked)}\n          />{" "}\n          <Button disabled>to turn on record coordinate</Button>\n        </Stack>\n        <Stack spacing={1}>\n          {marks.map((point, index) => {\n            const { x, y, z } = point;\n            return (\n              <Chip\n                key={index}\n                label={`x=${x.toFixed(2)} y=${y.toFixed(2)} z=${z.toFixed(2)}`}\n                onDelete={() =>\n                  setMarks((marks) =>\n                    marks.filter((_, index_) => index_ !== index)\n                  )\n                }\n              />\n            );\n          })}\n        </Stack>\n      </Stack>\n    </Paper>\n  );\n};\n\nexport { MarkController };\n'))),(0,o.kt)(i.Z,{value:"TypeScript",label:"TypeScript",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-tsx",metastring:'title="src/4.points-in-3d/MarkController.tsx"',title:'"src/4.points-in-3d/MarkController.tsx"'},'import * as THREE from "three";\nimport React, { FC, useState, useEffect } from "react";\nimport {\n  useFiveEventCallback,\n  useFiveModelIntersectRaycaster,\n} from "@realsee/five/react";\nimport Button from "@mui/material/Button";\nimport Switch from "@mui/material/Switch";\nimport Chip from "@mui/material/Chip";\nimport Stack from "@mui/material/Stack";\nimport Paper from "@mui/material/Paper";\n\n/**\n * React Component: mark coordinate point\n */\nconst MarkController: FC = () => {\n  const [active, toggleActive] = useState(false);\n  const [marks, setMarks] = useState<THREE.Vector3[]>([]);\n  const modelIntersectRaycaster = useFiveModelIntersectRaycaster();\n  useFiveEventCallback(\n    "wantsTapGesture",\n    (raycaster) => {\n      if (active) {\n        const [intersect] = modelIntersectRaycaster(raycaster);\n        if (intersect) setMarks((marks) => marks.concat(intersect.point));\n        return false;\n      }\n    },\n    [active]\n  );\n  return (\n    <Paper sx={{ position: "fixed", top: 10, left: 10, padding: 1 }}>\n      <Stack>\n        <Stack direction="row">\n          <Switch\n            checked={active}\n            onChange={(event, checked) => toggleActive(checked)}\n          />{" "}\n          <Button disabled>to turn on record coordinate</Button>\n        </Stack>\n        <Stack spacing={1}>\n          {marks.map((point, index) => {\n            const { x, y, z } = point;\n            return (\n              <Chip\n                key={index}\n                label={`x=${x.toFixed(2)} y=${y.toFixed(2)} z=${z.toFixed(2)}`}\n                onDelete={() =>\n                  setMarks((marks) =>\n                    marks.filter((_, index_) => index_ !== index)\n                  )\n                }\n              />\n            );\n          })}\n        </Stack>\n      </Stack>\n    </Paper>\n  );\n};\n\nexport { MarkController };\n')))),(0,o.kt)("h3",{id:"use-tag-component"},"Use Tag Component"),(0,o.kt)("p",null,"Insert into ",(0,o.kt)("strong",{parentName:"p"},"App")," file ",(0,o.kt)("strong",{parentName:"p"},"GiveProvider")),(0,o.kt)(a.Z,{mdxType:"Tabs"},(0,o.kt)(i.Z,{value:"JavaScript",label:"JavaScript",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-jsx",metastring:'title="src/4.points-in-3d/App.jsx"',title:'"src/4.points-in-3d/App.jsx"'},'import React from "react";\nimport { createFiveProvider, FiveCanvas } from "@realsee/five/react";\nimport { useFetchWork } from "./useFetchWork";\nimport { useWindowDimensions } from "./useWindowDimensions";\nimport { ModeController } from "./ModeController";\n// highlight-start\nimport { MarkController } from "./MarkController";\n// highlight-end\n\n/** work. The data URL */\nconst workURL =\n  "https://vrlab-public.ljcdn.com/release/static/image/release/five/work-sample/07bdc58f413bc5494f05c7cbb5cbdce4/work.json";\n\nconst FiveProvider = createFiveProvider();\nconst App = () => {\n  const work = useFetchWork(workURL);\n  const size = useWindowDimensions();\n  return (\n    work && (\n      <FiveProvider initialWork={work}>\n        <FiveCanvas {...size} />\n        <ModeController />\n        // highlight-start\n        <MarkController />\n        // highlight-end\n      </FiveProvider>\n    )\n  );\n};\n\nexport { App };\n'))),(0,o.kt)(i.Z,{value:"TypeScript",label:"TypeScript",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-tsx",metastring:'title="src/4.points-in-3d/App.tsx"',title:'"src/4.points-in-3d/App.tsx"'},'import React, { FC } from "react";\nimport { createFiveProvider, FiveCanvas } from "@realsee/five/react";\nimport { useFetchWork } from "./useFetchWork";\nimport { useWindowDimensions } from "./useWindowDimensions";\nimport { ModeController } from "./ModeController";\n// highlight-start\nimport { MarkController } from "./MarkController";\n// highlight-end\n\n/** work.json data URL */\nconst workURL =\n  "https://vrlab-public.ljcdn.com/release/static/image/release/five/work-sample/07bdc58f413bc5494f05c7cbb5cbdce4/work.json";\n\nconst FiveProvider = createFiveProvider();\nconst App: FC = () => {\n  const work = useFetchWork(workURL);\n  const size = useWindowDimensions();\n  return (\n    work && (\n      <FiveProvider initialWork={work}>\n        <FiveCanvas {...size} />\n        <ModeController />\n        // highlight-start\n        <MarkController />\n        // highlight-end\n      </FiveProvider>\n    )\n  );\n};\n\nexport { App };\n')))),(0,o.kt)("p",null,"Go back to your browser and find a switch in the upper left corner of your page.Turn on the switch, tap on the content of the canvas and output the coordinates of the click position."),(0,o.kt)("p",null,"Graby, understand and get three-dimensional coordinates: partying_face:"),(0,o.kt)("h2",{id:"the-next-section-will-be-completed-by-you"},"The next section will be completed by you"),(0,o.kt)("admonition",{title:"Next chapter we will implement a space tag feature, don't miss it.",type:"tip"}))}k.isMDXComponent=!0},65639:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/raycaster-c3dcc64a540402b16231e021c13f20ca.png"}}]);