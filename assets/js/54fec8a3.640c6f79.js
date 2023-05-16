"use strict";(self.webpackChunkrealsee_developer_github_com=self.webpackChunkrealsee_developer_github_com||[]).push([[1174],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>k});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),p=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=p(e.components);return r.createElement(l.Provider,{value:t},e.children)},m="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),m=p(n),d=a,k=m["".concat(l,".").concat(d)]||m[d]||u[d]||o;return n?r.createElement(k,i(i({ref:t},c),{},{components:n})):r.createElement(k,i({ref:t},c))}));function k(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[m]="string"==typeof e?e:a,i[1]=s;for(var p=2;p<o;p++)i[p]=n[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},85162:(e,t,n)=>{n.d(t,{Z:()=>i});var r=n(67294),a=n(86010);const o={tabItem:"tabItem_Ymn6"};function i(e){let{children:t,hidden:n,className:i}=e;return r.createElement("div",{role:"tabpanel",className:(0,a.Z)(o.tabItem,i),hidden:n},t)}},65488:(e,t,n)=>{n.d(t,{Z:()=>u});var r=n(87462),a=n(67294),o=n(86010),i=n(72389),s=n(67392),l=n(7094),p=n(12466);const c={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};function m(e){const{lazy:t,block:n,defaultValue:i,values:m,groupId:u,className:d}=e,k=a.Children.map(e.children,(e=>{if((0,a.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})),v=m??k.map((e=>{let{props:{value:t,label:n,attributes:r}}=e;return{value:t,label:n,attributes:r}})),f=(0,s.l)(v,((e,t)=>e.value===t.value));if(f.length>0)throw new Error(`Docusaurus error: Duplicate values "${f.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`);const h=null===i?i:i??k.find((e=>e.props.default))?.props.value??k[0].props.value;if(null!==h&&!v.some((e=>e.value===h)))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${h}" but none of its children has the corresponding value. Available values are: ${v.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);const{tabGroupChoices:g,setTabGroupChoices:b}=(0,l.U)(),[w,N]=(0,a.useState)(h),x=[],{blockElementScrollPositionUntilNextRender:C}=(0,p.o5)();if(null!=u){const e=g[u];null!=e&&e!==w&&v.some((t=>t.value===e))&&N(e)}const y=e=>{const t=e.currentTarget,n=x.indexOf(t),r=v[n].value;r!==w&&(C(t),N(r),null!=u&&b(u,String(r)))},F=e=>{let t=null;switch(e.key){case"Enter":y(e);break;case"ArrowRight":{const n=x.indexOf(e.currentTarget)+1;t=x[n]??x[0];break}case"ArrowLeft":{const n=x.indexOf(e.currentTarget)-1;t=x[n]??x[x.length-1];break}}t?.focus()};return a.createElement("div",{className:(0,o.Z)("tabs-container",c.tabList)},a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":n},d)},v.map((e=>{let{value:t,label:n,attributes:i}=e;return a.createElement("li",(0,r.Z)({role:"tab",tabIndex:w===t?0:-1,"aria-selected":w===t,key:t,ref:e=>x.push(e),onKeyDown:F,onClick:y},i,{className:(0,o.Z)("tabs__item",c.tabItem,i?.className,{"tabs__item--active":w===t})}),n??t)}))),t?(0,a.cloneElement)(k.filter((e=>e.props.value===w))[0],{className:"margin-top--md"}):a.createElement("div",{className:"margin-top--md"},k.map(((e,t)=>(0,a.cloneElement)(e,{key:t,hidden:e.props.value!==w})))))}function u(e){const t=(0,i.Z)();return a.createElement(m,(0,r.Z)({key:String(t)},e))}},82311:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>l,default:()=>k,frontMatter:()=>s,metadata:()=>p,toc:()=>m});var r=n(87462),a=(n(67294),n(3905)),o=n(65488),i=n(85162);const s={title:"\u4e09\u7ef4\u7a7a\u95f4\u4e2d\u7684\u70b9"},l=void 0,p={unversionedId:"front/3d-space/handbook/react-hooks/points-in-3d",id:"front/3d-space/handbook/react-hooks/points-in-3d",title:"\u4e09\u7ef4\u7a7a\u95f4\u4e2d\u7684\u70b9",description:"\u4e0a\u4e00\u7ae0\u56de\u987e: \u72b6\u6001\u5f55\u5236",source:"@site/docs/front/3d-space/handbook/react-hooks/4.points-in-3d.md",sourceDirName:"front/3d-space/handbook/react-hooks",slug:"/front/3d-space/handbook/react-hooks/points-in-3d",permalink:"/docs/front/3d-space/handbook/react-hooks/points-in-3d",draft:!1,tags:[],version:"current",lastUpdatedBy:"sansi.lcj",lastUpdatedAt:1669717185,formattedLastUpdatedAt:"2022\u5e7411\u670829\u65e5",sidebarPosition:4,frontMatter:{title:"\u4e09\u7ef4\u7a7a\u95f4\u4e2d\u7684\u70b9"},sidebar:"\u4e09\u7ef4\u7a7a\u95f4",previous:{title:"\u72b6\u6001\u5f55\u5236",permalink:"/docs/front/3d-space/handbook/react-hooks/recording-state"},next:{title:"\u6253\u6807\u7b7e",permalink:"/docs/front/3d-space/handbook/react-hooks/tagging"}},c={},m=[{value:"\u51c6\u5907\u5de5\u4f5c",id:"\u51c6\u5907\u5de5\u4f5c",level:2},{value:"\u4e8b\u4ef6\u7cfb\u7edf",id:"\u4e8b\u4ef6\u7cfb\u7edf",level:2},{value:"\u5185\u5efa\u4e8b\u4ef6",id:"\u5185\u5efa\u4e8b\u4ef6",level:3},{value:"\u963b\u6b62\u9ed8\u8ba4\u884c\u4e3a",id:"\u963b\u6b62\u9ed8\u8ba4\u884c\u4e3a",level:3},{value:"\u4ece tapGesture \u83b7\u53d6\u5750\u6807",id:"\u4ece-tapgesture-\u83b7\u53d6\u5750\u6807",level:2},{value:"\u5934\u90e8\u6dfb\u52a0\u4f9d\u8d56",id:"\u5934\u90e8\u6dfb\u52a0\u4f9d\u8d56",level:3},{value:"\u7f16\u5199 <strong>MarkController</strong> \u7ec4\u4ef6",id:"\u7f16\u5199-markcontroller-\u7ec4\u4ef6",level:3},{value:"\u4f7f\u7528\u6807\u8bb0\u7ec4\u4ef6",id:"\u4f7f\u7528\u6807\u8bb0\u7ec4\u4ef6",level:3},{value:"\u4e0b\u4e00\u7ae0\u8282\u4f60\u4f1a\u5b66\u5230",id:"\u4e0b\u4e00\u7ae0\u8282\u4f60\u4f1a\u5b66\u5230",level:2}],u={toc:m},d="wrapper";function k(e){let{components:t,...s}=e;return(0,a.kt)(d,(0,r.Z)({},u,s,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},(0,a.kt)("strong",{parentName:"p"},"\u4e0a\u4e00\u7ae0\u56de\u987e: \u72b6\u6001\u5f55\u5236")," ",(0,a.kt)("br",null)),(0,a.kt)("ul",{parentName:"blockquote"},(0,a.kt)("li",{parentName:"ul"},"\u4f60\u4e86\u89e3\u4e86\u5982\u4f55\u901a\u8fc7 ",(0,a.kt)("strong",{parentName:"li"},"State")," \u5b8c\u6210\u64cd\u4f5c\u7684\u5f55\u5236\u548c\u8fd8\u539f\u3002",(0,a.kt)("br",null)),(0,a.kt)("li",{parentName:"ul"},"\u719f\u6089\u5730\u4f7f\u7528 ",(0,a.kt)("strong",{parentName:"li"},"State")," \u76f8\u5173\u7684\u65b9\u6cd5\u548c\u4e8b\u4ef6\u3002"))),(0,a.kt)("admonition",{title:"\u672c\u7ae0\u4f60\u53ef\u4ee5\u5b66\u4e60\u5230",type:"tip"},(0,a.kt)("ul",{parentName:"admonition"},(0,a.kt)("li",{parentName:"ul"},"\u4e86\u89e3 Five SDK \u7684\u4e8b\u4ef6\u7cfb\u7edf\u3002"),(0,a.kt)("li",{parentName:"ul"},"\u83b7\u53d6\u5230\u70b9\u7684\u4e09\u7ef4\u4f4d\u7f6e\u3002"))),(0,a.kt)("h2",{id:"\u51c6\u5907\u5de5\u4f5c"},"\u51c6\u5907\u5de5\u4f5c"),(0,a.kt)("p",null,"\u6211\u4eec\u65b0\u5efa\u4e00\u4e2a\u76ee\u5f55\uff08",(0,a.kt)("inlineCode",{parentName:"p"},"src/4.points-in-3d"),"\uff09\u4ee5\u53ca\u5bf9\u5e94\u7684 ",(0,a.kt)("strong",{parentName:"p"},"html")," \u6587\u4ef6 \u4ee5\u53ca ",(0,a.kt)("strong",{parentName:"p"},"jsx")," \u6216 ",(0,a.kt)("strong",{parentName:"p"},"tsx")," \u6587\u4ef6\u3002\n\u643a\u5e26\u7740\u4e0a\u4e00\u7ae0\u7684 ",(0,a.kt)("strong",{parentName:"p"},"State")," \u4ee3\u7801\uff0c\u592a\u8fc7\u4e8e\u7e41\u7410\uff0c\u90a3\u6211\u4eec\u4ece ",(0,a.kt)("strong",{parentName:"p"},"\u5c55\u793a\u4e09\u7ef4\u7a7a\u95f4")," \u7ae0\u7684\u5185\u5bb9\u7684\u57fa\u7840\u5f00\u53d1\u3002"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-html",metastring:'title="src/4.points-in-3d/index.html"',title:'"src/4.points-in-3d/index.html"'},'<!DOCTYPE html>\n<html lang="en">\n  <head>\n    <meta charset="UTF-8" />\n    <link rel="icon" href="data:;base64,iVBORw0KGgo=" />\n    <meta name="viewport" content="width=device-width, initial-scale=1.0" />\n    <title>\u4e09\u7ef4\u4e2d\u7684\u70b9 | Points in 3d</title>\n    <style>\n      * {\n        margin: 0;\n        padding: 0;\n      }\n      html,\n      body #app {\n        width: 100%;\n        height: 100%;\n        overflow: hidden;\n      }\n    </style>\n  </head>\n  <body>\n    <div id="app"></div>\n    <script type="module" src="./index"><\/script>\n  </body>\n</html>\n')),(0,a.kt)(o.Z,{mdxType:"Tabs"},(0,a.kt)(i.Z,{value:"JavaScript",label:"JavaScript",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js",metastring:'title="src/4.points-in-3d/useFetchWork.js"',title:'"src/4.points-in-3d/useFetchWork.js"'},'import { useState, useEffect } from "react";\nimport { parseWork } from "@realsee/five";\n\n/**\n * React Hook: \u901a\u8fc7 work.json \u7684\u5730\u5740 \u83b7\u53d6 work \u5bf9\u8c61\n * @param url work.json \u7684\u6570\u636e\u5730\u5740\n * @returns work \u5bf9\u8c61\uff0c\u5982\u679c\u83b7\u53d6\u4e2d\uff0c\u8fd4\u56de null\n */\nfunction useFetchWork(url) {\n  const [work, setWork] = useState(null);\n  useEffect(() => {\n    setWork(null);\n    fetch(url)\n      .then((response) => response.text())\n      .then((text) => setWork(parseWork(text)));\n  }, [url]);\n  return work;\n}\n\nexport { useFetchWork };\n')),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js",metastring:'title="src/4.points-in-3d/useWindowDimensions.js"',title:'"src/4.points-in-3d/useWindowDimensions.js"'},'import { useState, useEffect } from "react";\n\n/**\n * \u83b7\u53d6\u5f53\u524d\u7a97\u53e3\u7684\u5c3a\u5bf8\n */\nfunction getWindowDimensions() {\n  return { width: window.innerWidth, height: window.innerHeight };\n}\n\n/**\n * React Hook: \u83b7\u53d6\u5f53\u524d\u7a97\u53e3\u7684\u5c3a\u5bf8\n */\nfunction useWindowDimensions() {\n  const [size, setSize] = useState(getWindowDimensions);\n  useEffect(() => {\n    const listener = () => setSize(getWindowDimensions());\n    window.addEventListener("resize", listener, false);\n    return () => window.removeEventListener("resize", listener, false);\n  });\n  return size;\n}\n\nexport { useWindowDimensions };\n')),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-jsx",metastring:'title="src/4.points-in-3d/ModeController.jsx"',title:'"src/4.points-in-3d/ModeController.jsx"'},'import React from "react";\nimport { Five } from "@realsee/five";\nimport { useFiveCurrentState } from "@realsee/five/react";\nimport BottomNavigation from "@mui/material/BottomNavigation";\nimport BottomNavigationAction from "@mui/material/BottomNavigationAction";\nimport Paper from "@mui/material/Paper";\nimport DirectionsWalkIcon from "@mui/icons-material/DirectionsWalk";\nimport ViewInArIcon from "@mui/icons-material/ViewInAr";\n\n/**\n * React Component: \u6a21\u6001\u63a7\u5236\n */\nconst ModeController = () => {\n  const [state, setState] = useFiveCurrentState();\n  return (\n    <Paper sx={{ position: "fixed", bottom: 0, left: 0, right: 0 }}>\n      <BottomNavigation\n        showLabels\n        value={state.mode}\n        onChange={(_, newValue) => {\n          setState({ mode: newValue });\n        }}\n      >\n        <BottomNavigationAction\n          label="\u5168\u666f\u6f2b\u6e38"\n          icon={<DirectionsWalkIcon />}\n          value={Five.Mode.Panorama}\n        />\n        <BottomNavigationAction\n          label="\u7a7a\u95f4\u603b\u89c8"\n          icon={<ViewInArIcon />}\n          value={Five.Mode.Floorplan}\n        />\n      </BottomNavigation>\n    </Paper>\n  );\n};\n\nexport { ModeController };\n')),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-jsx",metastring:'title="src/4.points-in-3d/App.jsx"',title:'"src/4.points-in-3d/App.jsx"'},'import React from "react";\nimport { createFiveProvider, FiveCanvas } from "@realsee/five/react";\nimport { useFetchWork } from "./useFetchWork";\nimport { useWindowDimensions } from "./useWindowDimensions";\nimport { ModeController } from "./ModeController";\n\n/** work.json \u7684\u6570\u636e URL */\nconst workURL =\n  "https://vrlab-public.ljcdn.com/release/static/image/release/five/work-sample/07bdc58f413bc5494f05c7cbb5cbdce4/work.json";\n\nconst FiveProvider = createFiveProvider();\nconst App = () => {\n  const work = useFetchWork(workURL);\n  const size = useWindowDimensions();\n  return (\n    work && (\n      <FiveProvider initialWork={work}>\n        <FiveCanvas {...size} />\n        <ModeController />\n      </FiveProvider>\n    )\n  );\n};\n\nexport { App };\n')),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-jsx",metastring:'title="src/4.points-in-3d/index.jsx"',title:'"src/4.points-in-3d/index.jsx"'},'import React from "react";\nimport ReactDOM from "react-dom";\nimport { App } from "./App";\n\nReactDOM.render(<App />, document.querySelector("#app"));\n\nexport {};\n'))),(0,a.kt)(i.Z,{value:"TypeScript",label:"TypeScript",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts",metastring:'title="src/4.points-in-3d/useFetchWork.ts"',title:'"src/4.points-in-3d/useFetchWork.ts"'},'import { useState, useEffect } from "react";\nimport { Work, parseWork } from "@realsee/five";\n\n/**\n * React Hook: \u901a\u8fc7 work.json \u7684\u5730\u5740 \u83b7\u53d6 work \u5bf9\u8c61\n * @param url work.json \u7684\u6570\u636e\u5730\u5740\n * @returns work \u5bf9\u8c61\uff0c\u5982\u679c\u83b7\u53d6\u4e2d\uff0c\u8fd4\u56de null\n */\nfunction useFetchWork(url: string) {\n  const [work, setWork] = useState<Work | null>(null);\n  useEffect(() => {\n    setWork(null);\n    fetch(url)\n      .then((response) => response.text())\n      .then((text) => setWork(parseWork(text)));\n  }, [url]);\n  return work;\n}\n\nexport { useFetchWork };\n')),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts",metastring:'title="src/4.points-in-3d/useWindowDimensions.ts"',title:'"src/4.points-in-3d/useWindowDimensions.ts"'},'import { useState, useEffect } from "react";\n\n/**\n * \u83b7\u53d6\u5f53\u524d\u7a97\u53e3\u7684\u5c3a\u5bf8\n */\nfunction getWindowDimensions() {\n  return { width: window.innerWidth, height: window.innerHeight };\n}\n\n/**\n * React Hook: \u83b7\u53d6\u5f53\u524d\u7a97\u53e3\u7684\u5c3a\u5bf8\n */\nfunction useWindowDimensions() {\n  const [size, setSize] = useState(getWindowDimensions);\n  useEffect(() => {\n    const listener = () => setSize(getWindowDimensions());\n    window.addEventListener("resize", listener, false);\n    return () => window.removeEventListener("resize", listener, false);\n  });\n  return size;\n}\n\nexport { useWindowDimensions };\n')),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx",metastring:'title="src/4.points-in-3d/ModeController.tsx"',title:'"src/4.points-in-3d/ModeController.tsx"'},'import React, { FC } from "react";\nimport { Five, Mode } from "@realsee/five";\nimport { useFiveCurrentState } from "@realsee/five/react";\nimport BottomNavigation from "@mui/material/BottomNavigation";\nimport BottomNavigationAction from "@mui/material/BottomNavigationAction";\nimport Paper from "@mui/material/Paper";\nimport DirectionsWalkIcon from "@mui/icons-material/DirectionsWalk";\nimport ViewInArIcon from "@mui/icons-material/ViewInAr";\n\n/**\n * React Component: \u6a21\u6001\u63a7\u5236\n */\nconst ModeController: FC = () => {\n  const [state, setState] = useFiveCurrentState();\n  return (\n    <Paper sx={{ position: "fixed", bottom: 0, left: 0, right: 0 }}>\n      <BottomNavigation\n        showLabels\n        value={state.mode}\n        onChange={(_, newValue: Mode) => {\n          setState({ mode: newValue });\n        }}\n      >\n        <BottomNavigationAction\n          label="\u5168\u666f\u6f2b\u6e38"\n          icon={<DirectionsWalkIcon />}\n          value={Five.Mode.Panorama}\n        />\n        <BottomNavigationAction\n          label="\u7a7a\u95f4\u603b\u89c8"\n          icon={<ViewInArIcon />}\n          value={Five.Mode.Floorplan}\n        />\n      </BottomNavigation>\n    </Paper>\n  );\n};\n\nexport { ModeController };\n')),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx",metastring:'title="src/4.points-in-3d/App.tsx"',title:'"src/4.points-in-3d/App.tsx"'},'import React, { FC } from "react";\nimport { createFiveProvider, FiveCanvas } from "@realsee/five/react";\nimport { useFetchWork } from "./useFetchWork";\nimport { useWindowDimensions } from "./useWindowDimensions";\nimport { ModeController } from "./ModeController";\n\n/** work.json \u7684\u6570\u636e URL */\nconst workURL =\n  "https://vrlab-public.ljcdn.com/release/static/image/release/five/work-sample/07bdc58f413bc5494f05c7cbb5cbdce4/work.json";\n\nconst FiveProvider = createFiveProvider();\nconst App: FC = () => {\n  const work = useFetchWork(workURL);\n  const size = useWindowDimensions();\n  return (\n    work && (\n      <FiveProvider initialWork={work}>\n        <FiveCanvas {...size} />\n        <ModeController />\n      </FiveProvider>\n    )\n  );\n};\n\nexport { App };\n')),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx",metastring:'title="src/4.points-in-3d/index.tsx"',title:'"src/4.points-in-3d/index.tsx"'},'import React from "react";\nimport ReactDOM from "react-dom";\nimport { App } from "./App";\n\nReactDOM.render(<App />, document.querySelector("#app"));\n\nexport {};\n')))),(0,a.kt)("p",null,"\u542f\u52a8\u670d\u52a1 ",(0,a.kt)("inlineCode",{parentName:"p"},"npm run dev"),'\u3002 \u5e76\u8df3\u8f6c\u5230\u5f53\u524d\u9875\u9762 "http://localhost:3000/src/4.points-in-3d/index.html"\u3002'),(0,a.kt)("admonition",{type:"info"},(0,a.kt)("p",{parentName:"admonition"},"\u8bf7\u67e5\u770b\u4f60\u7684\u63a7\u5236\u53f0\uff0c\u7aef\u53e3\u53f7\u4f1a\u56e0\u4e3a\u4f60\u7684\u914d\u7f6e\u4ee5\u53ca\u5f53\u524d\u7aef\u53e3\u5360\u7528\u60c5\u51b5\u53d8\u66f4\uff0c\u8bf7\u5df2\u63a7\u5236\u53f0\u8f93\u51fa\u7684\u4e3a\u51c6\u3002\n\u5982\u679c\u4f60\u4f7f\u7528\u5176\u4ed6\u5f00\u53d1\u6784\u5efa\u5de5\u5177\uff0c\u8bf7\u6309\u7167\u81ea\u5df1\u7684\u5f00\u53d1\u6784\u5efa\u5de5\u5177\u7684\u8981\u6c42\u542f\u52a8\u670d\u52a1\u3002")),(0,a.kt)("h2",{id:"\u4e8b\u4ef6\u7cfb\u7edf"},"\u4e8b\u4ef6\u7cfb\u7edf"),(0,a.kt)("p",null,"\u5728\u5c4f\u5e55\u4e0a\u70b9\u51fb\u65f6\uff0c",(0,a.kt)("strong",{parentName:"p"},"five SDK")," \u7684\u9ed8\u8ba4\u884c\u4e3a\u662f\u9009\u62e9\u70b9\u51fb\u4f4d\u7f6e\u9644\u8fd1\u6700\u5408\u9002\u7684 ",(0,a.kt)("strong",{parentName:"p"},"\u89c2\u5bdf\u70b9(observer)")," \u79fb\u52a8\u8fc7\u53bb\u3002\u5927\u90e8\u5206\u7528\u6237\u7684\u52a8\u4f5c\u90fd\u662f\u5982\u6b64\uff0c\u5c31\u597d\u6bd4\u6d4f\u89c8\u5668\u5bf9\u4e8e ",(0,a.kt)("strong",{parentName:"p"},"A \u6807\u7b7e")," \u7684\u5904\u7406\u903b\u8f91\u5927\u591a\u90fd\u662f\u94fe\u63a5\u8df3\u8f6c\u3002\u4e0a\u8ff0\u5c31\u662f ",(0,a.kt)("strong",{parentName:"p"},"five SDK")," \u7684\u5185\u5efa ",(0,a.kt)("strong",{parentName:"p"},"tapGesture"),"\u4e8b\u4ef6\u3002"),(0,a.kt)("h3",{id:"\u5185\u5efa\u4e8b\u4ef6"},"\u5185\u5efa\u4e8b\u4ef6"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"five SDK")," \u5185\u5efa\u7684\u4e8b\u4ef6\u6709\u5982\u4e0b\uff1a"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"tapGesture"),": \u9f20\u6807\u5de6\u952e\u70b9\u51fb\u6216\u8005\u624b\u6307\u70b9\u51fb\u3002\u9ed8\u8ba4\u884c\u4e3a\u662f\u70b9\u4f4d\u79fb\u52a8\u3002"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"panGesture"),": \u9f20\u6807\u6309\u4f4f\u4e00\u680b\u6216\u8005\u624b\u6307\u5728\u5c4f\u5e55\u4e0a\u62d6\u62fd\u79fb\u52a8\u3002\u76f8\u673a\u65cb\u8f6c\uff08Topview \u4e0b\u662f\u76f8\u673a\u5e73\u79fb\uff09\u3002"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"pinchGesture"),": \u624b\u6307\u53cc\u6307\u505a\u634f\u7684\u624b\u52bf\u3002\u9ed8\u8ba4\u884c\u4e3a\u662f\u4fee\u6539\u76f8\u673a\u53ef\u89c6\u89d2\u5ea6\u3002"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"mouseWheel"),": \u9f20\u6807\u6eda\u8f6e\u3002\u9ed8\u8ba4\u884c\u4e3a\u662f\u4fee\u6539\u76f8\u673a\u53ef\u89c6\u89d2\u5ea6\u3002"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"gesture"),": \u4e0a\u8ff0\u7684\u4efb\u610f\u4e8b\u4ef6\u3002")),(0,a.kt)("h3",{id:"\u963b\u6b62\u9ed8\u8ba4\u884c\u4e3a"},"\u963b\u6b62\u9ed8\u8ba4\u884c\u4e3a"),(0,a.kt)("p",null,"\u6240\u6709\u4e8b\u4ef6\u548c \u6d4f\u89c8\u5668\u5bf9\u4e8e ",(0,a.kt)("strong",{parentName:"p"},"A \u6807\u7b7e")," \u7684\u5904\u7406\u903b\u8f91 \u4e00\u6837\uff0c\u90fd\u53ef\u4ee5\u963b\u6b62\u9ed8\u8ba4\u4e8b\u4ef6\uff0c\u4f60\u53ea\u9700\u8981\u76d1\u542c ",(0,a.kt)("inlineCode",{parentName:"p"},"wants")," \u5f00\u5934\u7684\u4e8b\u4ef6\uff0c\u5728\u56de\u8c03\u51fd\u6570\u4e2d ",(0,a.kt)("inlineCode",{parentName:"p"},"return false")," \u5373\u53ef\u3002\u6bd4\u5982\u60f3\u963b\u6b62 ",(0,a.kt)("strong",{parentName:"p"},"tapGesture")," \u7684\u9ed8\u8ba4\u70b9\u4f4d\u79fb\u52a8\u884c\u4e3a\u3002\u53ef\u4ee5\u505a\u5982\u4e0b\u64cd\u4f5c\u3002"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},'useFiveEventCallback("wantsTapGesture", () => {\n  // highlight-start\n  // \u963b\u6b62 tapGesture \u89e6\u53d1\n  return false;\n  // highlight-end\n});\n')),(0,a.kt)("p",null,"\u5177\u4f53\u6bcf\u4e2a\u4e8b\u4ef6\u7684 API \u53ef\u4ee5\u67e5\u770b\u8be6\u7ec6\u6587\u6863"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://unpkg.com/@realsee/five/docs/interfaces/five.EventCallback.html#tapGesture"},"tapGesture")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://unpkg.com/@realsee/five/docs/interfaces/five.EventCallback.html#panGesture"},"panGesture")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://unpkg.com/@realsee/five/docs/interfaces/five.EventCallback.html#pinchGesture"},"pinchGesture")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://unpkg.com/@realsee/five/docs/interfaces/five.EventCallback.html#mouseWheel"},"mouseWheel")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://unpkg.com/@realsee/five/docs/interfaces/five.EventCallback.html#gesture"},"gesture"))),(0,a.kt)("h2",{id:"\u4ece-tapgesture-\u83b7\u53d6\u5750\u6807"},"\u4ece tapGesture \u83b7\u53d6\u5750\u6807"),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"\u6211\u4eec\u5236\u4f5c\u4e00\u4e2a\u7b80\u5355\u529f\u80fd\uff0c\u7528\u4e8e\u6807\u8bb0\u5728\u753b\u5e03\u4e0a\u70b9\u51fb\u7684\u4e09\u7ef4\u4f4d\u7f6e\u3002\n\u4f46\u662f\u4e3a\u4e86\u548c ",(0,a.kt)("strong",{parentName:"p"},"\u70b9\u4f4d\u79fb\u52a8")," \u529f\u80fd\u4e0d\u51b2\u7a81\uff0c\u6211\u4eec\u7528\u4e00\u4e2a ",(0,a.kt)("inlineCode",{parentName:"p"},"Switch")," \u6309\u94ae\u6765\u63a7\u5236\u6807\u8bb0\u72b6\u6001\u662f\u5426\u5f00\u542f\u3002")),(0,a.kt)("h3",{id:"\u5934\u90e8\u6dfb\u52a0\u4f9d\u8d56"},"\u5934\u90e8\u6dfb\u52a0\u4f9d\u8d56"),(0,a.kt)("p",null,"\u672c\u7ae0\u9700\u8981\u4ecb\u7ecd\u4e00\u4e0b ",(0,a.kt)("a",{parentName:"p",href:"http://threejs.org"},"three.js")," \u4e86\u3002",(0,a.kt)("strong",{parentName:"p"},"three.js")," \u662f\u4e00\u4e2a\u4e09\u7ef4\u56fe\u5f62\u5e93\uff0c",(0,a.kt)("strong",{parentName:"p"},"Five SDK")," \u4f7f\u7528 ",(0,a.kt)("strong",{parentName:"p"},"three.js")," \u7684\u6570\u5b66\u5e93\u548c\u6e32\u67d3\u5668\u3002\u672c\u7ae0\u6d89\u53ca ",(0,a.kt)("strong",{parentName:"p"},"three.js")," \u6709\u4e24\u4e2a\u5185\u5bb9\uff0c\u5728\u8fd9\u91cc\u505a\u4e00\u4e9b\u8bf4\u660e\uff0c\u4f60\u4e0d\u5fc5\u5b8c\u5168\u4e86\u89e3 ",(0,a.kt)("strong",{parentName:"p"},"three.js"),", \u6211\u505a\u4e00\u4e9b\u8bf4\u660e\u4f60\u5c31\u53ef\u4ee5\u7406\u89e3\u3002"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://threejs.org/docs/index.html#api/zh/math/Vector3"},(0,a.kt)("inlineCode",{parentName:"a"},"THREE.Vector3")),": \u4f60\u53ef\u4ee5\u5c31\u8ba4\u4e3a\u662f\u4e00\u4e2a ",(0,a.kt)("inlineCode",{parentName:"li"},"{ x: number, y: number, z: number }")," \u7684\u7ed3\u6784\u4f53\uff0c\u5e76\u4e14\u591a\u52a0\u4e86\u4e00\u4e9b\u6570\u5b66\u65b9\u6cd5\uff08\u672c\u6b21\u4e0d\u4f1a\u7528\u5230\u6570\u5b66\u65b9\u6cd5\uff0c\u53ea\u662f\u8bb0\u5f55 xyz\uff09"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://threejs.org/docs/index.html#api/zh/core/Raycaster"},(0,a.kt)("inlineCode",{parentName:"a"},"THREE.Raycaster")),": \u5149\u7ebf\u6295\u5c04\u7c7b\u3002\u4f60\u53ef\u4ee5\u7b80\u5355\u7684\u7406\u89e3\u4e3a\u5c4f\u5e55\u4e0a\u7684\u4e00\u4e2a\u70b9\u5bf9\u5e94\u5230\u4e09\u7ef4\u7a7a\u95f4\u662f\u4e00\u6761\u5c04\u7ebf\u3002")),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"REYCASTER",src:n(58955).Z,width:"850",height:"415"})),(0,a.kt)("p",null,"\u5c04\u7ebf\u6709\u5f88\u591a\u4f5c\u7528\uff0c\u6bd4\u5982\uff1a\u901a\u8fc7\u5c04\u7ebf\u548c\u6a21\u578b\u4e4b\u524d\u7684\u76f8\u4ea4\u6027\u68c0\u6d4b\uff0c\u5c31\u53ef\u4ee5\u5224\u65ad\u662f\u5426\u5bf9\u8c61\u88ab\u9009\u4e2d\u3002"),(0,a.kt)("h3",{id:"\u7f16\u5199-markcontroller-\u7ec4\u4ef6"},"\u7f16\u5199 ",(0,a.kt)("strong",{parentName:"h3"},"MarkController")," \u7ec4\u4ef6"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"\u6dfb\u52a0\u4e00\u4e2a ",(0,a.kt)("strong",{parentName:"li"},"MarkController")," \u6587\u4ef6\uff0c\u7528\u4e8e\u7f16\u5199\u7ec4\u4ef6\u3002"),(0,a.kt)("li",{parentName:"ol"},"\u6211\u4eec\u901a\u8fc7 ",(0,a.kt)("strong",{parentName:"li"},"active")," React state \u72b6\u6001\u6765\u63a7\u5236\u5f53\u524d\u5e94\u7528\u662f\u5426\u5728\u6807\u8bb0\u7684\u6a21\u5f0f\u4e0b\u3002"),(0,a.kt)("li",{parentName:"ol"},"\u901a\u8fc7 ",(0,a.kt)("inlineCode",{parentName:"li"},"tapGesture")," \u7b2c\u4e00\u4e2a\u53c2\u6570\u662f ",(0,a.kt)("inlineCode",{parentName:"li"},"raycaster"),"\uff0c\u901a\u8fc7 ",(0,a.kt)("inlineCode",{parentName:"li"},"modelIntersectRaycaster")," \u53ef\u4ee5\u83b7\u53d6\u5230\u7126\u70b9\u4fe1\u606f ",(0,a.kt)("inlineCode",{parentName:"li"},"intersect"),"\uff0c",(0,a.kt)("inlineCode",{parentName:"li"},"intersect.point")," \u5c31\u662f\u4ea4\u70b9\u7684\u5750\u6807\u3002"),(0,a.kt)("li",{parentName:"ol"},"\u901a\u8fc7 ",(0,a.kt)("inlineCode",{parentName:"li"},"marks")," React state \u6765\u5b58\u50a8\u6240\u6709\u4ea4\u70b9\uff0c\u5e76\u4e14\u5b9e\u73b0\u6536\u96c6\u548c\u5220\u9664\u3002")),(0,a.kt)(o.Z,{mdxType:"Tabs"},(0,a.kt)(i.Z,{value:"JavaScript",label:"JavaScript",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-jsx",metastring:'title="src/4.points-in-3d/MarkController.jsx"',title:'"src/4.points-in-3d/MarkController.jsx"'},'/**\n * React Component: \u6807\u8bb0\u5750\u6807\u70b9\n */\nimport React, { useState, useEffect } from "react";\nimport {\n  useFiveEventCallback,\n  useFiveModelIntersectRaycaster,\n} from "@realsee/five/react";\nimport Button from "@mui/material/Button";\nimport Switch from "@mui/material/Switch";\nimport Chip from "@mui/material/Chip";\nimport Stack from "@mui/material/Stack";\nimport Paper from "@mui/material/Paper";\n\n/**\n * React Component: \u6807\u8bb0\u5750\u6807\u70b9\n */\nconst MarkController = () => {\n  const [active, toggleActive] = useState(false);\n  const [marks, setMarks] = useState([]);\n  const modelIntersectRaycaster = useFiveModelIntersectRaycaster();\n  useFiveEventCallback(\n    "wantsTapGesture",\n    (raycaster) => {\n      if (active) {\n        const [intersect] = modelIntersectRaycaster(raycaster);\n        if (intersect) setMarks((marks) => marks.concat(intersect.point));\n        return false;\n      }\n    },\n    [active]\n  );\n  return (\n    <Paper sx={{ position: "fixed", top: 10, left: 10, padding: 1 }}>\n      <Stack>\n        <Stack direction="row">\n          <Switch\n            checked={active}\n            onChange={(event, checked) => toggleActive(checked)}\n          />{" "}\n          <Button disabled>\u5f00\u542f\u70b9\u51fb\u8bb0\u5f55\u5750\u6807</Button>\n        </Stack>\n        <Stack spacing={1}>\n          {marks.map((point, index) => {\n            const { x, y, z } = point;\n            return (\n              <Chip\n                key={index}\n                label={`x=${x.toFixed(2)} y=${y.toFixed(2)} z=${z.toFixed(2)}`}\n                onDelete={() =>\n                  setMarks((marks) =>\n                    marks.filter((_, index_) => index_ !== index)\n                  )\n                }\n              />\n            );\n          })}\n        </Stack>\n      </Stack>\n    </Paper>\n  );\n};\n\nexport { MarkController };\n'))),(0,a.kt)(i.Z,{value:"TypeScript",label:"TypeScript",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx",metastring:'title="src/4.points-in-3d/MarkController.tsx"',title:'"src/4.points-in-3d/MarkController.tsx"'},'import * as THREE from "three";\nimport React, { FC, useState, useEffect } from "react";\nimport {\n  useFiveEventCallback,\n  useFiveModelIntersectRaycaster,\n} from "@realsee/five/react";\nimport Button from "@mui/material/Button";\nimport Switch from "@mui/material/Switch";\nimport Chip from "@mui/material/Chip";\nimport Stack from "@mui/material/Stack";\nimport Paper from "@mui/material/Paper";\n\n/**\n * React Component: \u6807\u8bb0\u5750\u6807\u70b9\n */\nconst MarkController: FC = () => {\n  const [active, toggleActive] = useState(false);\n  const [marks, setMarks] = useState<THREE.Vector3[]>([]);\n  const modelIntersectRaycaster = useFiveModelIntersectRaycaster();\n  useFiveEventCallback(\n    "wantsTapGesture",\n    (raycaster) => {\n      if (active) {\n        const [intersect] = modelIntersectRaycaster(raycaster);\n        if (intersect) setMarks((marks) => marks.concat(intersect.point));\n        return false;\n      }\n    },\n    [active]\n  );\n  return (\n    <Paper sx={{ position: "fixed", top: 10, left: 10, padding: 1 }}>\n      <Stack>\n        <Stack direction="row">\n          <Switch\n            checked={active}\n            onChange={(event, checked) => toggleActive(checked)}\n          />{" "}\n          <Button disabled>\u5f00\u542f\u70b9\u51fb\u8bb0\u5f55\u5750\u6807</Button>\n        </Stack>\n        <Stack spacing={1}>\n          {marks.map((point, index) => {\n            const { x, y, z } = point;\n            return (\n              <Chip\n                key={index}\n                label={`x=${x.toFixed(2)} y=${y.toFixed(2)} z=${z.toFixed(2)}`}\n                onDelete={() =>\n                  setMarks((marks) =>\n                    marks.filter((_, index_) => index_ !== index)\n                  )\n                }\n              />\n            );\n          })}\n        </Stack>\n      </Stack>\n    </Paper>\n  );\n};\n\nexport { MarkController };\n')))),(0,a.kt)("h3",{id:"\u4f7f\u7528\u6807\u8bb0\u7ec4\u4ef6"},"\u4f7f\u7528\u6807\u8bb0\u7ec4\u4ef6"),(0,a.kt)("p",null,"\u63d2\u5165\u5230 ",(0,a.kt)("strong",{parentName:"p"},"App")," \u6587\u4ef6\u7684 ",(0,a.kt)("strong",{parentName:"p"},"FiveProvider")," \u4e2d"),(0,a.kt)(o.Z,{mdxType:"Tabs"},(0,a.kt)(i.Z,{value:"JavaScript",label:"JavaScript",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-jsx",metastring:'title="src/4.points-in-3d/App.jsx"',title:'"src/4.points-in-3d/App.jsx"'},'import React from "react";\nimport { createFiveProvider, FiveCanvas } from "@realsee/five/react";\nimport { useFetchWork } from "./useFetchWork";\nimport { useWindowDimensions } from "./useWindowDimensions";\nimport { ModeController } from "./ModeController";\n// highlight-start\nimport { MarkController } from "./MarkController";\n// highlight-end\n\n/** work.json \u7684\u6570\u636e URL */\nconst workURL =\n  "https://vrlab-public.ljcdn.com/release/static/image/release/five/work-sample/07bdc58f413bc5494f05c7cbb5cbdce4/work.json";\n\nconst FiveProvider = createFiveProvider();\nconst App = () => {\n  const work = useFetchWork(workURL);\n  const size = useWindowDimensions();\n  return (\n    work && (\n      <FiveProvider initialWork={work}>\n        <FiveCanvas {...size} />\n        <ModeController />\n        // highlight-start\n        <MarkController />\n        // highlight-end\n      </FiveProvider>\n    )\n  );\n};\n\nexport { App };\n'))),(0,a.kt)(i.Z,{value:"TypeScript",label:"TypeScript",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx",metastring:'title="src/4.points-in-3d/App.tsx"',title:'"src/4.points-in-3d/App.tsx"'},'import React, { FC } from "react";\nimport { createFiveProvider, FiveCanvas } from "@realsee/five/react";\nimport { useFetchWork } from "./useFetchWork";\nimport { useWindowDimensions } from "./useWindowDimensions";\nimport { ModeController } from "./ModeController";\n// highlight-start\nimport { MarkController } from "./MarkController";\n// highlight-end\n\n/** work.json \u7684\u6570\u636e URL */\nconst workURL =\n  "https://vrlab-public.ljcdn.com/release/static/image/release/five/work-sample/07bdc58f413bc5494f05c7cbb5cbdce4/work.json";\n\nconst FiveProvider = createFiveProvider();\nconst App: FC = () => {\n  const work = useFetchWork(workURL);\n  const size = useWindowDimensions();\n  return (\n    work && (\n      <FiveProvider initialWork={work}>\n        <FiveCanvas {...size} />\n        <ModeController />\n        // highlight-start\n        <MarkController />\n        // highlight-end\n      </FiveProvider>\n    )\n  );\n};\n\nexport { App };\n')))),(0,a.kt)("p",null,"\u56de\u5230\u4f60\u7684\u6d4f\u89c8\u5668\u67e5\u770b\uff0c\u4f1a\u53d1\u73b0\u4f60\u7684\u9875\u9762\u5de6\u4e0a\u89d2\u51fa\u73b0\u4e00\u4e2a\u9009\u62e9\u5f00\u5173\u3002\u6253\u5f00\u5f00\u5173\uff0c\u70b9\u51fb\u753b\u5e03\u5185\u5bb9\uff0c\u4f1a\u8f93\u51fa\u70b9\u51fb\u4f4d\u7f6e\u7684\u5750\u6807\u3002"),(0,a.kt)("p",null,"\u771f\u68d2\uff0c\u4e00\u4e0b\u5b50\u5c31\u7406\u89e3\u548c\u83b7\u53d6\u5230\u4e86\u4e09\u7ef4\u5750\u6807 \ud83e\udd73 \u3002"),(0,a.kt)("h2",{id:"\u4e0b\u4e00\u7ae0\u8282\u4f60\u4f1a\u5b66\u5230"},"\u4e0b\u4e00\u7ae0\u8282\u4f60\u4f1a\u5b66\u5230"),(0,a.kt)("admonition",{title:"\u4e0b\u4e00\u7ae0\u6211\u4eec\u5c06\u5b9e\u73b0\u4e00\u4e2a\u7a7a\u95f4\u6807\u7b7e\u529f\u80fd\uff0c\u4e0d\u8981\u9519\u8fc7\u54e6\u3002",type:"tip"}))}k.isMDXComponent=!0},58955:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/raycaster-c3dcc64a540402b16231e021c13f20ca.png"}}]);