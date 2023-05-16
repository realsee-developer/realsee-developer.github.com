"use strict";(self.webpackChunkrealsee_developer_github_com=self.webpackChunkrealsee_developer_github_com||[]).push([[4061],{3905:(e,t,n)=>{n.d(t,{Zo:()=>m,kt:()=>h});var o=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},i=Object.keys(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=o.createContext({}),p=function(e){var t=o.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},m=function(e){var t=p(e.components);return o.createElement(l.Provider,{value:t},e.children)},c="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},g=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,l=e.parentName,m=s(e,["components","mdxType","originalType","parentName"]),c=p(n),g=r,h=c["".concat(l,".").concat(g)]||c[g]||d[g]||i;return n?o.createElement(h,a(a({ref:t},m),{},{components:n})):o.createElement(h,a({ref:t},m))}));function h(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,a=new Array(i);a[0]=g;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[c]="string"==typeof e?e:r,a[1]=s;for(var p=2;p<i;p++)a[p]=n[p];return o.createElement.apply(null,a)}return o.createElement.apply(null,n)}g.displayName="MDXCreateElement"},85162:(e,t,n)=>{n.d(t,{Z:()=>a});var o=n(67294),r=n(86010);const i={tabItem:"tabItem_Ymn6"};function a(e){let{children:t,hidden:n,className:a}=e;return o.createElement("div",{role:"tabpanel",className:(0,r.Z)(i.tabItem,a),hidden:n},t)}},65488:(e,t,n)=>{n.d(t,{Z:()=>d});var o=n(87462),r=n(67294),i=n(86010),a=n(72389),s=n(67392),l=n(7094),p=n(12466);const m={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};function c(e){const{lazy:t,block:n,defaultValue:a,values:c,groupId:d,className:g}=e,h=r.Children.map(e.children,(e=>{if((0,r.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})),u=c??h.map((e=>{let{props:{value:t,label:n,attributes:o}}=e;return{value:t,label:n,attributes:o}})),w=(0,s.l)(u,((e,t)=>e.value===t.value));if(w.length>0)throw new Error(`Docusaurus error: Duplicate values "${w.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`);const v=null===a?a:a??h.find((e=>e.props.default))?.props.value??h[0].props.value;if(null!==v&&!u.some((e=>e.value===v)))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${v}" but none of its children has the corresponding value. Available values are: ${u.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);const{tabGroupChoices:f,setTabGroupChoices:k}=(0,l.U)(),[b,x]=(0,r.useState)(v),C=[],{blockElementScrollPositionUntilNextRender:T}=(0,p.o5)();if(null!=d){const e=f[d];null!=e&&e!==b&&u.some((t=>t.value===e))&&x(e)}const y=e=>{const t=e.currentTarget,n=C.indexOf(t),o=u[n].value;o!==b&&(T(t),x(o),null!=d&&k(d,String(o)))},F=e=>{let t=null;switch(e.key){case"Enter":y(e);break;case"ArrowRight":{const n=C.indexOf(e.currentTarget)+1;t=C[n]??C[0];break}case"ArrowLeft":{const n=C.indexOf(e.currentTarget)-1;t=C[n]??C[C.length-1];break}}t?.focus()};return r.createElement("div",{className:(0,i.Z)("tabs-container",m.tabList)},r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,i.Z)("tabs",{"tabs--block":n},g)},u.map((e=>{let{value:t,label:n,attributes:a}=e;return r.createElement("li",(0,o.Z)({role:"tab",tabIndex:b===t?0:-1,"aria-selected":b===t,key:t,ref:e=>C.push(e),onKeyDown:F,onClick:y},a,{className:(0,i.Z)("tabs__item",m.tabItem,a?.className,{"tabs__item--active":b===t})}),n??t)}))),t?(0,r.cloneElement)(h.filter((e=>e.props.value===b))[0],{className:"margin-top--md"}):r.createElement("div",{className:"margin-top--md"},h.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==b})))))}function d(e){const t=(0,a.Z)();return r.createElement(c,(0,o.Z)({key:String(t)},e))}},97557:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>m,contentTitle:()=>l,default:()=>h,frontMatter:()=>s,metadata:()=>p,toc:()=>c});var o=n(87462),r=(n(67294),n(3905)),i=n(65488),a=n(85162);const s={title:"\u6253\u6807\u7b7e"},l=void 0,p={unversionedId:"front/3d-space/handbook/react-hoc/tagging",id:"front/3d-space/handbook/react-hoc/tagging",title:"\u6253\u6807\u7b7e",description:"\u4e0a\u4e00\u7ae0\u56de\u987e: \u4e09\u7ef4\u4e2d\u7684\u70b9",source:"@site/docs/front/3d-space/handbook/react-hoc/5.tagging.md",sourceDirName:"front/3d-space/handbook/react-hoc",slug:"/front/3d-space/handbook/react-hoc/tagging",permalink:"/docs/front/3d-space/handbook/react-hoc/tagging",draft:!1,tags:[],version:"current",lastUpdatedBy:"sansi.lcj",lastUpdatedAt:1669717185,formattedLastUpdatedAt:"2022\u5e7411\u670829\u65e5",sidebarPosition:5,frontMatter:{title:"\u6253\u6807\u7b7e"},sidebar:"\u4e09\u7ef4\u7a7a\u95f4",previous:{title:"\u4e09\u7ef4\u7a7a\u95f4\u4e2d\u7684\u70b9",permalink:"/docs/front/3d-space/handbook/react-hoc/points-in-3d"},next:{title:"\u8d77\u6b65",permalink:"/docs/front/3d-space/handbook/react-hooks/get-started"}},m={},c=[{value:"\u51c6\u5907\u5de5\u4f5c",id:"\u51c6\u5907\u5de5\u4f5c",level:2},{value:"\u5f00\u53d1\u6253\u6807\u7b7e\u529f\u80fd",id:"\u5f00\u53d1\u6253\u6807\u7b7e\u529f\u80fd",level:2},{value:"\u6dfb\u52a0\u6807\u7b7e\u6837\u5f0f",id:"\u6dfb\u52a0\u6807\u7b7e\u6837\u5f0f",level:3},{value:"useFiveProject2d \u8bf4\u660e",id:"usefiveproject2d-\u8bf4\u660e",level:3},{value:"\u7f16\u5199 TaggingController",id:"\u7f16\u5199-taggingcontroller",level:3},{value:"\u4f7f\u7528\u6253\u6807\u7b7e\u7ec4\u4ef6",id:"\u4f7f\u7528\u6253\u6807\u7b7e\u7ec4\u4ef6",level:3}],d={toc:c},g="wrapper";function h(e){let{components:t,...n}=e;return(0,r.kt)(g,(0,o.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},(0,r.kt)("strong",{parentName:"p"},"\u4e0a\u4e00\u7ae0\u56de\u987e: \u4e09\u7ef4\u4e2d\u7684\u70b9")," ",(0,r.kt)("br",null),"\n\u4f60\u4e86\u89e3 Five SDK \u7684\u4e8b\u4ef6\u7cfb\u7edf\uff0c\u5e76\u4e14\u5c1d\u8bd5\u5f00\u53d1\u4e86\u5c0f\u5e94\u7528\uff0c\u901a\u8fc7\u70b9\u51fb\u4e8b\u4ef6\u83b7\u53d6\u5230\u70b9\u7684\u4e09\u7ef4\u4f4d\u7f6e\u3002")),(0,r.kt)("admonition",{title:"\u672c\u7ae0\u4f60\u53ef\u4ee5\u5b66\u4e60\u5230",type:"tip"},(0,r.kt)("p",{parentName:"admonition"},"\u5728\u4e09\u7ef4\u7a7a\u95f4\u4e2d\u8bbe\u7f6e\u6807\u7b7e\u3002")),(0,r.kt)("h2",{id:"\u51c6\u5907\u5de5\u4f5c"},"\u51c6\u5907\u5de5\u4f5c"),(0,r.kt)("p",null,"\u6211\u4eec\u65b0\u5efa\u4e00\u4e2a\u76ee\u5f55\uff08",(0,r.kt)("inlineCode",{parentName:"p"},"src/5.tagging"),"\uff09\u4ee5\u53ca\u5bf9\u5e94\u7684 ",(0,r.kt)("strong",{parentName:"p"},"html")," \u6587\u4ef6 \u4ee5\u53ca ",(0,r.kt)("strong",{parentName:"p"},"jsx")," \u6216 ",(0,r.kt)("strong",{parentName:"p"},"tsx")," \u6587\u4ef6\u3002\n\u643a\u5e26\u7740\u4e0a\u4e00\u7ae0\u7684 ",(0,r.kt)("strong",{parentName:"p"},"State")," \u4ee3\u7801\uff0c\u592a\u8fc7\u4e8e\u7e41\u7410\uff0c\u90a3\u6211\u4eec\u4ece ",(0,r.kt)("strong",{parentName:"p"},"\u5c55\u793a\u4e09\u7ef4\u7a7a\u95f4")," \u7ae0\u7684\u5185\u5bb9\u7684\u57fa\u7840\u5f00\u53d1\u3002"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-html",metastring:'title="src/5.tagging/index.html"',title:'"src/5.tagging/index.html"'},'<!DOCTYPE html>\n<html lang="en">\n<head>\n  <meta charset="UTF-8">\n  <link rel="icon" href="data:;base64,iVBORw0KGgo=">\n  <meta name="viewport" content="width=device-width, initial-scale=1.0">\n  <title>\u6253\u6807\u7b7e | Tagging</title>\n  <style>\n    * { margin: 0; padding: 0; }\n    html, body #app { width: 100%; height: 100%; overflow: hidden; }\n  </style>\n</head>\n<body>\n  <div id="app"></div>\n  <script type="module" src="./index"><\/script>\n</body>\n</html>\n')),(0,r.kt)(i.Z,{mdxType:"Tabs"},(0,r.kt)(a.Z,{value:"JavaScript",label:"JavaScript",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-jsx",metastring:'title="src/5.tagging/withFetchWork.jsx"',title:'"src/5.tagging/withFetchWork.jsx"'},'import React, { Component } from "react";\nimport { parseWork } from "@realsee/five";\n\n/**\n * React HOC \u83b7\u53d6 work\n * @param url work.json \u7684\u5730\u5740\n */\nfunction withFetchWork(url) {\n  return function(Compnent) {\n    return class extends Component {\n      state = { work: null };\n      componentDidMount() {\n        fetch(url).then(res => res.json()).then(json => {\n          this.setState({ work: parseWork(json) });\n        });\n      }\n      render() {\n        if (this.state.work === null) return null;\n        return <Compnent work={this.state.work} {...this.props}/>;\n      }\n    }\n  }\n}\n\nexport { withFetchWork };\n')),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-jsx",metastring:'title="src/5.tagging/withWindowDimensions.jsx"',title:'"src/5.tagging/withWindowDimensions.jsx"'},'import React, { Component } from "react";\n\n/**\n * React HOC: \u83b7\u53d6\u5f53\u524d\u7a97\u53e3\u7684\u5c3a\u5bf8\n */\nfunction withWindowDimensions() {\n  return function(Compnent) {\n    return class extends Component {\n      state = this.getWindowDimensions();\n      resizeListener = () => {\n        this.setState(this.getWindowDimensions());\n      };\n      getWindowDimensions() {\n        return { width: window.innerWidth, height: window.innerHeight };\n      }\n      componentDidMount() {\n        window.addEventListener("resize", this.resizeListener, false);\n      }\n      componentWillUnmount() {\n        window.removeEventListener("resize", this.resizeListener, false);\n      }\n      render() {\n        const dimensions = { width: this.state.width, height: this.state.height };\n        return <Compnent windowDimensions={dimensions} {...this.props}/>;\n      }\n    }\n  }\n}\n\nexport { withWindowDimensions };\n')),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-jsx",metastring:'title="src/5.tagging/ModeController.jsx"',title:'"src/5.tagging/ModeController.jsx"'},'import React, { Component } from "react";\nimport { Five } from "@realsee/five";\nimport { withFive, createFiveFeature } from "@realsee/five/react";\nimport { compose } from "@wordpress/compose";\nimport BottomNavigation from "@mui/material/BottomNavigation";\nimport BottomNavigationAction from "@mui/material/BottomNavigationAction";\nimport Paper from "@mui/material/Paper";\nimport DirectionsWalkIcon from "@mui/icons-material/DirectionsWalk";\nimport ViewInArIcon from "@mui/icons-material/ViewInAr";\n\nconst FEATURES = createFiveFeature("currentState", "setState");\n\n/**\n * React Component: \u6a21\u6001\u63a7\u5236\n */\nconst ModeController = compose(\n  withFive(FEATURES)\n)(class extends Component {\n  render() {\n    return <Paper sx={{ position: "fixed", bottom: 0, left: 0, right: 0 }}>\n      <BottomNavigation\n        showLabels\n        value={this.props.$five.currentState.mode}\n        onChange={(_, newValue) => {\n          this.props.$five.setState({ mode: newValue });\n        }}\n      >\n        <BottomNavigationAction label="\u5168\u666f\u6f2b\u6e38" icon={<DirectionsWalkIcon/>} value={Five.Mode.Panorama}/>\n        <BottomNavigationAction label="\u7a7a\u95f4\u603b\u89c8" icon={<ViewInArIcon/>} value={Five.Mode.Floorplan}/>\n      </BottomNavigation>\n    </Paper>;\n  }\n})\n\nexport { ModeController };\n')),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-jsx",metastring:'title="src/5.tagging/App.jsx"',title:'"src/5.tagging/App.jsx"'},'import React, { Component } from "react";\nimport { compose } from "@wordpress/compose";\nimport { createFiveProvider, FiveCanvas } from "@realsee/five/react";\nimport { withFetchWork } from "./withFetchWork";\nimport { withWindowDimensions } from "./withWindowDimensions";\nimport { ModeController } from "./ModeController";\n\n/** work.json \u7684\u6570\u636e URL */\nconst workURL = "https://vrlab-public.ljcdn.com/release/static/image/release/five/work-sample/07bdc58f413bc5494f05c7cbb5cbdce4/work.json";\n\nconst FiveProvider = createFiveProvider();\n\nconst App = compose(\n  withFetchWork(workURL),\n  withWindowDimensions()\n)(class extends Component {\n  render() {\n    const { work, windowDimensions } = this.props;\n    return <FiveProvider initialWork={work}>\n      <FiveCanvas width={windowDimensions.width} height={windowDimensions.height}/>\n      <ModeController/>;\n    </FiveProvider>;\n  }\n});\n\nexport { App };\n')),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-jsx",metastring:'title="src/5.tagging/index.jsx"',title:'"src/5.tagging/index.jsx"'},'import React from "react";\nimport ReactDOM from "react-dom";\nimport { App } from "./App";\n\nReactDOM.render(<App/>, document.querySelector("#app"));\n\nexport {};\n'))),(0,r.kt)(a.Z,{value:"TypeScript",label:"TypeScript",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx",metastring:'title="src/5.tagging/withFetchWork.tsx"',title:'"src/5.tagging/withFetchWork.tsx"'},'import React, { Component, ComponentClass } from "react";\nimport { Work, parseWork } from "@realsee/five";\n\n/**\n * React HOC \u83b7\u53d6 work\n * @param url work.json \u7684\u5730\u5740\n */\nfunction withFetchWork<P extends Record<string, any>>(url: string) {\n  return function(Compnent: ComponentClass<P & { work: Work }>): ComponentClass<P> {\n    return class extends Component<P, {work: Work | null}> {\n      state = { work: null };\n      componentDidMount() {\n        fetch(url).then(res => res.json()).then(json => {\n          this.setState({ work: parseWork(json) });\n        });\n      }\n      render() {\n        if (this.state.work === null) return null;\n        return <Compnent work={this.state.work} {...this.props}/>;\n      }\n    }\n  }\n}\n\nexport { withFetchWork };\n')),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx",metastring:'title="src/5.tagging/useWindowDimensions.tsx"',title:'"src/5.tagging/useWindowDimensions.tsx"'},'import React, { Component, ComponentClass } from "react";\n\n/**\n * React HOC: \u83b7\u53d6\u5f53\u524d\u7a97\u53e3\u7684\u5c3a\u5bf8\n */\nfunction withWindowDimensions<P extends Record<string, any>>() {\n  return function(Compnent: ComponentClass<P & { windowDimensions: { width: number, height: number} }>): ComponentClass<P> {\n    return class extends Component<P, {width: number, height: number}> {\n      state = this.getWindowDimensions();\n      resizeListener = () => {\n        this.setState(this.getWindowDimensions());\n      };\n      getWindowDimensions() {\n        return { width: window.innerWidth, height: window.innerHeight };\n      }\n      componentDidMount() {\n        window.addEventListener("resize", this.resizeListener, false);\n      }\n      componentWillUnmount() {\n        window.removeEventListener("resize", this.resizeListener, false);\n      }\n      render() {\n        const dimensions = { width: this.state.width, height: this.state.height };\n        return <Compnent windowDimensions={dimensions} {...this.props}/>;\n      }\n    }\n  }\n}\n\nexport { withWindowDimensions };\n')),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx",metastring:'title="src/5.tagging/ModeController.tsx"',title:'"src/5.tagging/ModeController.tsx"'},'import React, { Component } from "react";\nimport { Five, Mode } from "@realsee/five";\nimport { withFive, createFiveFeature, PropTypeOfFiveFeatures } from "@realsee/five/react";\nimport { compose } from "@wordpress/compose";\nimport BottomNavigation from "@mui/material/BottomNavigation";\nimport BottomNavigationAction from "@mui/material/BottomNavigationAction";\nimport Paper from "@mui/material/Paper";\nimport DirectionsWalkIcon from "@mui/icons-material/DirectionsWalk";\nimport ViewInArIcon from "@mui/icons-material/ViewInAr";\n\nconst FEATURES = createFiveFeature("currentState", "setState");\ntype Props = PropTypeOfFiveFeatures<typeof FEATURES>;\n\n/**\n * React Component: \u6a21\u6001\u63a7\u5236\n */\nconst ModeController = compose(\n  withFive(FEATURES)\n)(class extends Component<Props> {\n  render() {\n    return <Paper sx={{ position: "fixed", bottom: 0, left: 0, right: 0 }}>\n      <BottomNavigation\n        showLabels\n        value={this.props.$five.currentState.mode}\n        onChange={(_, newValue: Mode) => {\n          this.props.$five.setState({ mode: newValue });\n        }}\n      >\n        <BottomNavigationAction label="\u5168\u666f\u6f2b\u6e38" icon={<DirectionsWalkIcon/>} value={Five.Mode.Panorama}/>\n        <BottomNavigationAction label="\u7a7a\u95f4\u603b\u89c8" icon={<ViewInArIcon/>} value={Five.Mode.Floorplan}/>\n      </BottomNavigation>\n    </Paper>;\n  }\n})\n\nexport { ModeController };\n')),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx",metastring:'title="src/5.tagging/App.tsx"',title:'"src/5.tagging/App.tsx"'},'import React, { Component } from "react";\nimport { Work } from "@realsee/five";\nimport { createFiveProvider, FiveCanvas } from "@realsee/five/react";\nimport { compose } from "@wordpress/compose";\nimport { withFetchWork } from "./withFetchWork";\nimport { withWindowDimensions } from "./withWindowDimensions";\nimport { ModeController } from "./ModeController";\n\n/** work.json \u7684\u6570\u636e URL */\nconst workURL = "https://vrlab-public.ljcdn.com/release/static/image/release/five/work-sample/07bdc58f413bc5494f05c7cbb5cbdce4/work.json";\n\nconst FiveProvider = createFiveProvider();\n\nconst App = compose(\n  withFetchWork(workURL),\n  withWindowDimensions()\n)(class extends Component<{work: Work, windowDimensions: { width: number, height: number }}> {\n  render() {\n    const { work, windowDimensions } = this.props;\n    return <FiveProvider initialWork={work}>\n      <FiveCanvas width={windowDimensions.width} height={windowDimensions.height}/>\n      <ModeController/>\n    </FiveProvider>;\n  }\n});\n\n\nexport { App };\n')),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx",metastring:'title="src/5.tagging/index.tsx"',title:'"src/5.tagging/index.tsx"'},'import React from "react";\nimport ReactDOM from "react-dom";\nimport { App } from "./App";\n\nReactDOM.render(<App/>, document.querySelector("#app"));\n\nexport {};\n')))),(0,r.kt)("p",null,"\u542f\u52a8\u670d\u52a1 ",(0,r.kt)("inlineCode",{parentName:"p"},"npm run dev"),'\u3002 \u5e76\u8df3\u8f6c\u5230\u5f53\u524d\u9875\u9762 "http://localhost:3000/src/5.tagging/index.html"\u3002'),(0,r.kt)("admonition",{type:"info"},(0,r.kt)("p",{parentName:"admonition"},"\u8bf7\u67e5\u770b\u4f60\u7684\u63a7\u5236\u53f0\uff0c\u7aef\u53e3\u53f7\u4f1a\u56e0\u4e3a\u4f60\u7684\u914d\u7f6e\u4ee5\u53ca\u5f53\u524d\u7aef\u53e3\u5360\u7528\u60c5\u51b5\u53d8\u66f4\uff0c\u8bf7\u5df2\u63a7\u5236\u53f0\u8f93\u51fa\u7684\u4e3a\u51c6\u3002\n\u5982\u679c\u4f60\u4f7f\u7528\u5176\u4ed6\u5f00\u53d1\u6784\u5efa\u5de5\u5177\uff0c\u8bf7\u6309\u7167\u81ea\u5df1\u7684\u5f00\u53d1\u6784\u5efa\u5de5\u5177\u7684\u8981\u6c42\u542f\u52a8\u670d\u52a1\u3002")),(0,r.kt)("h2",{id:"\u5f00\u53d1\u6253\u6807\u7b7e\u529f\u80fd"},"\u5f00\u53d1\u6253\u6807\u7b7e\u529f\u80fd"),(0,r.kt)("h3",{id:"\u6dfb\u52a0\u6807\u7b7e\u6837\u5f0f"},"\u6dfb\u52a0\u6807\u7b7e\u6837\u5f0f"),(0,r.kt)("p",null,"\u5728 ",(0,r.kt)("strong",{parentName:"p"},"html")," \u6587\u4ef6\u4e2d\u6dfb\u52a0\u6807\u7b7e\u6837\u5f0f\u3002"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"\u6837\u5f0f\u5e76\u975e\u662f\u5fc5\u987b\u7684\uff0c\u53ea\u662f\u4e3a\u4e86\u6807\u7b7e\u597d\u770b\u4e00\u4e9b\u3002")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-html",metastring:'title="src/5.tagging/index.html"',title:'"src/5.tagging/index.html"'},'<!DOCTYPE html>\n<html lang="en">\n<head>\n  <meta charset="UTF-8">\n  <link rel="icon" href="data:;base64,iVBORw0KGgo=">\n  <meta name="viewport" content="width=device-width, initial-scale=1.0">\n  <title>\u6253\u6807\u7b7e | Tagging</title>\n  <style>\n    * { margin: 0; padding: 0; }\n    html, body #app { width: 100%; height: 100%; overflow: hidden; }\n    /* highlight-start */\n    .tag { position: absolute; width: 0; height: 0; transform: translateZ(0); }\n    .tag-pannel { position: absolute; width: 100px; min-height: 20px; transform: translate(-50%, 0); left: 50%; bottom: 10px; background: #333; color: #fff; border-radius: 2px; text-align: center; line-height: 20px; padding: 8px; font-size: 14px;}\n    .tag-pannel:after { content: ""; display: block; position: absolute; width: 10px; height: 10px; left: 50%; bottom: -5px; transform: translate(-50%, 0) rotate(45deg); background: #333; pointer-events: none; }\n    /* highlight-end */\n  </style>\n</head>\n<body>\n  <div id="app"></div>\n  <script type="module" src="./index"><\/script>\n</body>\n</html>\n')),(0,r.kt)("h3",{id:"usefiveproject2d-\u8bf4\u660e"},"useFiveProject2d \u8bf4\u660e"),(0,r.kt)("p",null,"\u672c\u7ae0\u4f1a\u4f7f\u7528\u5230 ",(0,r.kt)("a",{parentName:"p",href:"https://unpkg.com/@realsee/five/docs/modules/react.html#useFiveProject2d"},(0,r.kt)("inlineCode",{parentName:"a"},"useFiveProject2d"))," \u65b9\u6cd5\u3002\u4ed6\u53ef\u4ee5\u5c06\u4e09\u7ef4\u7684\u5750\u6807\u5bf9\u5e94\u5230\u800c\u4e3a\u5c4f\u5e55\u3002"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"$five.project2d(vector: THREE.Vector3, testModel: boolean): THREE.Vector2 | null")),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"\u5c06\u4e00\u4e2a\u4e09\u7ef4\u5750\u6807\u4f20\u5165\u53ef\u4ee5\u5f97\u5230\u4e00\u4e2a\u5c4f\u5e55\u4e8c\u7ef4\u5750\u6807, \u539f\u70b9\u5728\u5de6\u4e0a, \u5355\u4f4d\u4e3a\u50cf\u7d20\u3002\u53ef\u4ee5\u4f5c\u4e3a ",(0,r.kt)("inlineCode",{parentName:"li"},'{ left: returnValue.x + "px", top: returnValue.y + "px" }')," \u7b49\u65b9\u5f0f\u4f7f\u7528\u3002"),(0,r.kt)("li",{parentName:"ol"},"\u5982\u679c\u4e09\u7ef4\u5750\u6807\u65e0\u6cd5\u8ba1\u7b97\u5230\u5c4f\u5e55\u4e2d\uff08\u6bd4\u5982\u5728\u80cc\u540e\u6216\u8005\u88ab\u906e\u6321\uff09\uff0c\u5219\u8fd4\u56de ",(0,r.kt)("inlineCode",{parentName:"li"},"null"),"\u3002"),(0,r.kt)("li",{parentName:"ol"},"\u7b2c\u4e8c\u4e2a\u53c2\u6570 ",(0,r.kt)("strong",{parentName:"li"},"testModel")," \u4e3a\u662f\u5426\u8ba1\u7b97\u6a21\u578b\u78b0\u649e\uff0c\u5373\u88ab\u6a21\u578b\u906e\u6321\u7684\u5750\u6807\u662f\u5426\u4e3a ",(0,r.kt)("inlineCode",{parentName:"li"},"null"),"\u3002")),(0,r.kt)("h3",{id:"\u7f16\u5199-taggingcontroller"},"\u7f16\u5199 TaggingController"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"\u6dfb\u52a0\u4e00\u4e2a ",(0,r.kt)("strong",{parentName:"li"},"TaggingController")," \u6587\u4ef6\uff0c\u7528\u4e8e\u7f16\u5199\u7ec4\u4ef6\u3002"),(0,r.kt)("li",{parentName:"ol"},"\u901a\u8fc7 ",(0,r.kt)("inlineCode",{parentName:"li"},"tags")," React state \u5b58\u50a8\u6807\u7b7e\u4f4d\u7f6e\u548c\u6587\u5b57\u3002"),(0,r.kt)("li",{parentName:"ol"},"\u901a\u8fc7 ",(0,r.kt)("inlineCode",{parentName:"li"},"newTag")," React state \u5b58\u50a8\u5f53\u524d\u65b0\u5efa\u7684\u6807\u7b7e\u3002"),(0,r.kt)("li",{parentName:"ol"},"\u76d1\u542c five \u7684 ",(0,r.kt)("inlineCode",{parentName:"li"},"intersectionOnModelUpdate")," \u4e8b\u4ef6\uff0c\u5c06\u65b0\u5efa\u4e2d\u7684\u6807\u7b7e\u653e\u5728\u5728\u9f20\u6807\u7684\u4f4d\u7f6e\u3002"),(0,r.kt)("li",{parentName:"ol"},"\u901a\u8fc7 \u6807\u7b7e\u8c03\u7528 ",(0,r.kt)("inlineCode",{parentName:"li"},"$five.project2d")," \u65b9\u6cd5\uff08",(0,r.kt)("inlineCode",{parentName:"li"},"tagElement")," \u65b9\u6cd5\u4e2d\uff09\u83b7\u53d6\u5c4f\u5e55\u753b\u5e03\u5750\u6807\uff0c\u7136\u540e\u901a\u8fc7\u6539\u53d8\u6837\u5f0f\uff0c\u6e32\u67d3\u51fa\u6765\u3002")),(0,r.kt)(i.Z,{mdxType:"Tabs"},(0,r.kt)(a.Z,{value:"JavaScript",label:"JavaScript",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-jsx",metastring:'title="src/5.tagging/TaggingController.jsx"',title:'"src/5.tagging/TaggingController.jsx"'},'import React, { Component } from "react";\nimport { compose } from "@wordpress/compose";\nimport { withFive, createFiveFeature } from "@realsee/five/react";\nimport Button from "@mui/material/Button";\nimport Paper from "@mui/material/Paper";\n\nconst FEATURES = createFiveFeature("project2d", "currentState", "on", "off");\n\n/**\n * React Component: \u6253\u6807\u7b7e\n */\nconst TaggingController = compose(\n  withFive(FEATURES)\n)(class extends Component {\n\n  state = { tags: [], newTag: null };\n\n  addTag = () => {\n    this.setState({ newTag: { label: window.prompt("\u6dfb\u52a0\u6807\u7b7e", "") || "\u672a\u547d\u540d" } });\n  }\n\n  tagElement(tag, key) {\n    const position = tag.position && this.props.$five.project2d(tag.position, true);\n    const style = position ? { left: position.x, top: position.y } : { display: "none" };\n    return <div className="tag" style={style} key={key}>\n      <div className="tag-pannel"><span className="tag-content">{tag.label}</span></div>\n    </div>\n  }\n\n  onIntersectionUpdate = intersect => {\n    if (this.state.newTag) this.setState({ newTag: { position: intersect.point, label: this.state.newTag.label } });\n  };\n\n  onTapGesture = () => {\n    if (this.state.newTag && this.state.newTag.position) {\n      this.setState({\n        tags: this.state.tags.concat(this.state.newTag),\n        newTag: null\n      });\n      return false;\n    }\n  };\n\n  componentDidMount() {\n    this.props.$five.on("intersectionOnModelUpdate", this.onIntersectionUpdate);\n    this.props.$five.on("wantsTapGesture", this.onTapGesture);\n  }\n\n  componentWillUnmount() {\n    this.props.$five.off("intersectionOnModelUpdate", this.onIntersectionUpdate);\n    this.props.$five.off("wantsTapGesture", this.onTapGesture);\n  }\n\n  render() {\n    return <React.Fragment>\n      <Paper sx={{ position: "fixed", top: 10, left: 10 }}>\n        <Button onClick={this.addTag}>\u6253\u6807\u7b7e</Button>\n      </Paper>\n        {this.state.newTag && this.tagElement(this.state.newTag)}\n        {this.state.tags.map((tag, index) => this.tagElement(tag, index))}\n    </React.Fragment>;\n  }\n});\n\nexport { TaggingController };\n'))),(0,r.kt)(a.Z,{value:"TypeScript",label:"TypeScript",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx",metastring:'title="src/5.tagging/TaggingController.tsx"',title:'"src/5.tagging/TaggingController.tsx"'},'import * as THREE from "three";\nimport React, { Component } from "react";\nimport { compose } from "@wordpress/compose";\nimport { EventCallback } from "@realsee/five";\nimport { withFive, createFiveFeature, PropTypeOfFiveFeatures } from "@realsee/five/react";\nimport Button from "@mui/material/Button";\nimport Paper from "@mui/material/Paper";\n\ntype Tag = { position?: THREE.Vector3, label: string };\n\nconst FEATURES = createFiveFeature("project2d", "currentState", "on", "off");\ntype Props = PropTypeOfFiveFeatures<typeof FEATURES>;\ntype State = {\n  tags: Tag[],\n  newTag: Tag | null\n};\n\n/**\n * React Component: \u6253\u6807\u7b7e\n */\nconst TaggingController = compose(\n  withFive(FEATURES)\n)(class extends Component<Props, State> {\n\n  state: State = { tags: [], newTag: null };\n\n  addTag = () => {\n    this.setState({ newTag: { label: window.prompt("\u6dfb\u52a0\u6807\u7b7e", "") || "\u672a\u547d\u540d" } });\n  }\n\n  tagElement(tag: Tag, key?: number | string) {\n    const position = tag.position && this.props.$five.project2d(tag.position, true);\n    const style = position ? { left: position.x, top: position.y } : { display: "none" };\n    return <div className="tag" style={style} key={key}>\n      <div className="tag-pannel"><span className="tag-content">{tag.label}</span></div>\n    </div>\n  }\n\n  onIntersectionUpdate: EventCallback["intersectionOnModelUpdate"] = intersect => {\n    if (this.state.newTag) this.setState({ newTag: { position: intersect.point, label: this.state.newTag.label } });\n  };\n\n  onTapGesture: EventCallback["wantsTapGesture"] = () => {\n    if (this.state.newTag && this.state.newTag.position) {\n      this.setState({\n        tags: this.state.tags.concat(this.state.newTag),\n        newTag: null\n      });\n      return false;\n    }\n  };\n\n  componentDidMount() {\n    this.props.$five.on("intersectionOnModelUpdate", this.onIntersectionUpdate);\n    this.props.$five.on("wantsTapGesture", this.onTapGesture);\n  }\n\n  componentWillUnmount() {\n    this.props.$five.off("intersectionOnModelUpdate", this.onIntersectionUpdate);\n    this.props.$five.off("wantsTapGesture", this.onTapGesture);\n  }\n\n  render() {\n    return <React.Fragment>\n      <Paper sx={{ position: "fixed", top: 10, left: 10 }}>\n        <Button onClick={this.addTag}>\u6253\u6807\u7b7e</Button>\n      </Paper>\n        {this.state.newTag && this.tagElement(this.state.newTag)}\n        {this.state.tags.map((tag, index) => this.tagElement(tag, index))}\n    </React.Fragment>;\n  }\n});\n\nexport { TaggingController };\n')))),(0,r.kt)("h3",{id:"\u4f7f\u7528\u6253\u6807\u7b7e\u7ec4\u4ef6"},"\u4f7f\u7528\u6253\u6807\u7b7e\u7ec4\u4ef6"),(0,r.kt)("p",null,"\u63d2\u5165\u5230 ",(0,r.kt)("strong",{parentName:"p"},"App")," \u6587\u4ef6\u7684 ",(0,r.kt)("strong",{parentName:"p"},"FiveProvider")," \u4e2d"),(0,r.kt)(i.Z,{mdxType:"Tabs"},(0,r.kt)(a.Z,{value:"JavaScript",label:"JavaScript",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-jsx",metastring:'title="src/5.tagging/App.jsx"',title:'"src/5.tagging/App.jsx"'},'import React, { Component } from "react";\nimport { compose } from "@wordpress/compose";\nimport { createFiveProvider, FiveCanvas } from "@realsee/five/react";\nimport { withFetchWork } from "./withFetchWork";\nimport { withWindowDimensions } from "./withWindowDimensions";\nimport { ModeController } from "./ModeController";\n// highlight-start\nimport { TaggingController } from "./TaggingController";\n// highlight-end\n\n/** work.json \u7684\u6570\u636e URL */\nconst workURL = "https://vrlab-public.ljcdn.com/release/static/image/release/five/work-sample/07bdc58f413bc5494f05c7cbb5cbdce4/work.json";\n\nconst FiveProvider = createFiveProvider();\n\nconst App = compose(\n  withFetchWork(workURL),\n  withWindowDimensions()\n)(class extends Component {\n  render() {\n    const { work, windowDimensions } = this.props;\n    return <FiveProvider initialWork={work}>\n      <FiveCanvas width={windowDimensions.width} height={windowDimensions.height}/>\n      <ModeController/>;\n      // highlight-start\n      <TaggingController/>;\n      // highlight-end\n    </FiveProvider>;\n  }\n});\n\nexport { App };\n'))),(0,r.kt)(a.Z,{value:"TypeScript",label:"TypeScript",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx",metastring:'title="src/5.tagging/App.tsx"',title:'"src/5.tagging/App.tsx"'},'import React, { Component } from "react";\nimport { Work } from "@realsee/five";\nimport { createFiveProvider, FiveCanvas } from "@realsee/five/react";\nimport { compose } from "@wordpress/compose";\nimport { withFetchWork } from "./withFetchWork";\nimport { withWindowDimensions } from "./withWindowDimensions";\nimport { ModeController } from "./ModeController";\n// highlight-start\nimport { TaggingController } from "./TaggingController";\n// highlight-end\n\n/** work.json \u7684\u6570\u636e URL */\nconst workURL = "https://vrlab-public.ljcdn.com/release/static/image/release/five/work-sample/07bdc58f413bc5494f05c7cbb5cbdce4/work.json";\n\nconst FiveProvider = createFiveProvider();\n\nconst App = compose(\n  withFetchWork(workURL),\n  withWindowDimensions()\n)(class extends Component<{work: Work, windowDimensions: { width: number, height: number }}> {\n  render() {\n    const { work, windowDimensions } = this.props;\n    return <FiveProvider initialWork={work}>\n      <FiveCanvas width={windowDimensions.width} height={windowDimensions.height}/>\n      <ModeController/>\n      // highlight-start\n      <TaggingController/>\n      // highlight-end\n    </FiveProvider>;\n  }\n});\n\n\nexport { App };\n')))),(0,r.kt)("p",null,"\u56de\u5230\u4f60\u7684\u6d4f\u89c8\u5668\u67e5\u770b\uff0c\u4f1a\u53d1\u73b0\u4f60\u7684\u9875\u9762\u5de6\u4e0a\u89d2\u51fa\u73b0\u6253\u6807\u7b7e\u6309\u94ae\uff0c\u70b9\u51fb\uff0c\u586b\u5199\u6807\u7b7e\u540d\u79f0\u540e\uff0c\u540e\u79fb\u52a8\u9f20\u6807\uff0c\u5728\u4f60\u9700\u8981\u7684\u4f4d\u7f6e\u70b9\u51fb\u3002\u4fbf\u53ef\u653e\u7f6e\u6807\u7b7e\u3002"),(0,r.kt)("p",null,"\u55ef\uff0c\u786e\u5b9e\u662f\u4e00\u4e2a\u5b9e\u7528\u7684\u529f\u80fd\ud83e\udd73 \u3002"))}h.isMDXComponent=!0}}]);