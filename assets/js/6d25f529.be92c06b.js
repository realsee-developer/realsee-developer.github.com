"use strict";(self.webpackChunkrealsee_developer_github_com=self.webpackChunkrealsee_developer_github_com||[]).push([[8346],{3905:(e,t,n)=>{n.d(t,{Zo:()=>m,kt:()=>h});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=r.createContext({}),p=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},m=function(e){var t=p(e.components);return r.createElement(l.Provider,{value:t},e.children)},c="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,l=e.parentName,m=s(e,["components","mdxType","originalType","parentName"]),c=p(n),u=o,h=c["".concat(l,".").concat(u)]||c[u]||d[u]||i;return n?r.createElement(h,a(a({ref:t},m),{},{components:n})):r.createElement(h,a({ref:t},m))}));function h(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,a=new Array(i);a[0]=u;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[c]="string"==typeof e?e:o,a[1]=s;for(var p=2;p<i;p++)a[p]=n[p];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},85162:(e,t,n)=>{n.d(t,{Z:()=>a});var r=n(67294),o=n(86010);const i={tabItem:"tabItem_Ymn6"};function a(e){let{children:t,hidden:n,className:a}=e;return r.createElement("div",{role:"tabpanel",className:(0,o.Z)(i.tabItem,a),hidden:n},t)}},65488:(e,t,n)=>{n.d(t,{Z:()=>d});var r=n(87462),o=n(67294),i=n(86010),a=n(72389),s=n(67392),l=n(7094),p=n(12466);const m={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};function c(e){const{lazy:t,block:n,defaultValue:a,values:c,groupId:d,className:u}=e,h=o.Children.map(e.children,(e=>{if((0,o.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})),k=c??h.map((e=>{let{props:{value:t,label:n,attributes:r}}=e;return{value:t,label:n,attributes:r}})),v=(0,s.l)(k,((e,t)=>e.value===t.value));if(v.length>0)throw new Error(`Docusaurus error: Duplicate values "${v.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`);const f=null===a?a:a??h.find((e=>e.props.default))?.props.value??h[0].props.value;if(null!==f&&!k.some((e=>e.value===f)))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${f}" but none of its children has the corresponding value. Available values are: ${k.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);const{tabGroupChoices:w,setTabGroupChoices:g}=(0,l.U)(),[b,N]=(0,o.useState)(f),C=[],{blockElementScrollPositionUntilNextRender:x}=(0,p.o5)();if(null!=d){const e=w[d];null!=e&&e!==b&&k.some((t=>t.value===e))&&N(e)}const y=e=>{const t=e.currentTarget,n=C.indexOf(t),r=k[n].value;r!==b&&(x(t),N(r),null!=d&&g(d,String(r)))},F=e=>{let t=null;switch(e.key){case"Enter":y(e);break;case"ArrowRight":{const n=C.indexOf(e.currentTarget)+1;t=C[n]??C[0];break}case"ArrowLeft":{const n=C.indexOf(e.currentTarget)-1;t=C[n]??C[C.length-1];break}}t?.focus()};return o.createElement("div",{className:(0,i.Z)("tabs-container",m.tabList)},o.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,i.Z)("tabs",{"tabs--block":n},u)},k.map((e=>{let{value:t,label:n,attributes:a}=e;return o.createElement("li",(0,r.Z)({role:"tab",tabIndex:b===t?0:-1,"aria-selected":b===t,key:t,ref:e=>C.push(e),onKeyDown:F,onClick:y},a,{className:(0,i.Z)("tabs__item",m.tabItem,a?.className,{"tabs__item--active":b===t})}),n??t)}))),t?(0,o.cloneElement)(h.filter((e=>e.props.value===b))[0],{className:"margin-top--md"}):o.createElement("div",{className:"margin-top--md"},h.map(((e,t)=>(0,o.cloneElement)(e,{key:t,hidden:e.props.value!==b})))))}function d(e){const t=(0,a.Z)();return o.createElement(c,(0,r.Z)({key:String(t)},e))}},61818:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>m,contentTitle:()=>l,default:()=>h,frontMatter:()=>s,metadata:()=>p,toc:()=>c});var r=n(87462),o=(n(67294),n(3905)),i=n(65488),a=n(85162);const s={title:"\u4e09\u7ef4\u7a7a\u95f4\u4e2d\u7684\u70b9"},l=void 0,p={unversionedId:"front/3d-space/handbook/react-hoc/points-in-3d",id:"front/3d-space/handbook/react-hoc/points-in-3d",title:"\u4e09\u7ef4\u7a7a\u95f4\u4e2d\u7684\u70b9",description:"\u4e0a\u4e00\u7ae0\u56de\u987e: \u72b6\u6001\u5f55\u5236",source:"@site/docs/front/3d-space/handbook/react-hoc/4.points-in-3d.md",sourceDirName:"front/3d-space/handbook/react-hoc",slug:"/front/3d-space/handbook/react-hoc/points-in-3d",permalink:"/docs/front/3d-space/handbook/react-hoc/points-in-3d",draft:!1,tags:[],version:"current",lastUpdatedBy:"Junchao Gao",lastUpdatedAt:1669025818,formattedLastUpdatedAt:"2022\u5e7411\u670821\u65e5",sidebarPosition:4,frontMatter:{title:"\u4e09\u7ef4\u7a7a\u95f4\u4e2d\u7684\u70b9"},sidebar:"\u4e09\u7ef4\u7a7a\u95f4",previous:{title:"\u72b6\u6001\u5f55\u5236",permalink:"/docs/front/3d-space/handbook/react-hoc/recording-state"},next:{title:"\u6253\u6807\u7b7e",permalink:"/docs/front/3d-space/handbook/react-hoc/tagging"}},m={},c=[{value:"\u51c6\u5907\u5de5\u4f5c",id:"\u51c6\u5907\u5de5\u4f5c",level:2},{value:"\u4e8b\u4ef6\u7cfb\u7edf",id:"\u4e8b\u4ef6\u7cfb\u7edf",level:2},{value:"\u5185\u5efa\u4e8b\u4ef6",id:"\u5185\u5efa\u4e8b\u4ef6",level:3},{value:"\u963b\u6b62\u9ed8\u8ba4\u884c\u4e3a",id:"\u963b\u6b62\u9ed8\u8ba4\u884c\u4e3a",level:3},{value:"\u4ece tapGesture \u83b7\u53d6\u5750\u6807",id:"\u4ece-tapgesture-\u83b7\u53d6\u5750\u6807",level:2},{value:"\u5934\u90e8\u6dfb\u52a0\u4f9d\u8d56",id:"\u5934\u90e8\u6dfb\u52a0\u4f9d\u8d56",level:3},{value:"\u7f16\u5199 <strong>MarkController</strong> \u7ec4\u4ef6",id:"\u7f16\u5199-markcontroller-\u7ec4\u4ef6",level:3},{value:"\u4f7f\u7528\u6807\u8bb0\u7ec4\u4ef6",id:"\u4f7f\u7528\u6807\u8bb0\u7ec4\u4ef6",level:3},{value:"\u4e0b\u4e00\u7ae0\u8282\u4f60\u4f1a\u5b66\u5230",id:"\u4e0b\u4e00\u7ae0\u8282\u4f60\u4f1a\u5b66\u5230",level:2}],d={toc:c},u="wrapper";function h(e){let{components:t,...s}=e;return(0,o.kt)(u,(0,r.Z)({},d,s,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},(0,o.kt)("strong",{parentName:"p"},"\u4e0a\u4e00\u7ae0\u56de\u987e: \u72b6\u6001\u5f55\u5236")," ",(0,o.kt)("br",null)),(0,o.kt)("ul",{parentName:"blockquote"},(0,o.kt)("li",{parentName:"ul"},"\u4f60\u4e86\u89e3\u4e86\u5982\u4f55\u901a\u8fc7 ",(0,o.kt)("strong",{parentName:"li"},"State")," \u5b8c\u6210\u64cd\u4f5c\u7684\u5f55\u5236\u548c\u8fd8\u539f\u3002",(0,o.kt)("br",null)),(0,o.kt)("li",{parentName:"ul"},"\u719f\u6089\u5730\u4f7f\u7528 ",(0,o.kt)("strong",{parentName:"li"},"State")," \u76f8\u5173\u7684\u65b9\u6cd5\u548c\u4e8b\u4ef6\u3002"))),(0,o.kt)("admonition",{title:"\u672c\u7ae0\u4f60\u53ef\u4ee5\u5b66\u4e60\u5230",type:"tip"},(0,o.kt)("ul",{parentName:"admonition"},(0,o.kt)("li",{parentName:"ul"},"\u4e86\u89e3 Five SDK \u7684\u4e8b\u4ef6\u7cfb\u7edf\u3002"),(0,o.kt)("li",{parentName:"ul"},"\u83b7\u53d6\u5230\u70b9\u7684\u4e09\u7ef4\u4f4d\u7f6e\u3002"))),(0,o.kt)("h2",{id:"\u51c6\u5907\u5de5\u4f5c"},"\u51c6\u5907\u5de5\u4f5c"),(0,o.kt)("p",null,"\u6211\u4eec\u65b0\u5efa\u4e00\u4e2a\u76ee\u5f55\uff08",(0,o.kt)("inlineCode",{parentName:"p"},"src/4.points-in-3d"),"\uff09\u4ee5\u53ca\u5bf9\u5e94\u7684 ",(0,o.kt)("strong",{parentName:"p"},"html")," \u6587\u4ef6 \u4ee5\u53ca ",(0,o.kt)("strong",{parentName:"p"},"jsx")," \u6216 ",(0,o.kt)("strong",{parentName:"p"},"tsx")," \u6587\u4ef6\u3002\n\u643a\u5e26\u7740\u4e0a\u4e00\u7ae0\u7684 ",(0,o.kt)("strong",{parentName:"p"},"State")," \u4ee3\u7801\uff0c\u592a\u8fc7\u4e8e\u7e41\u7410\uff0c\u90a3\u6211\u4eec\u4ece ",(0,o.kt)("strong",{parentName:"p"},"\u5c55\u793a\u4e09\u7ef4\u7a7a\u95f4")," \u7ae0\u7684\u5185\u5bb9\u7684\u57fa\u7840\u5f00\u53d1\u3002"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-html",metastring:'title="src/4.points-in-3d/index.html"',title:'"src/4.points-in-3d/index.html"'},'<!DOCTYPE html>\n<html lang="en">\n<head>\n  <meta charset="UTF-8">\n  <link rel="icon" href="data:;base64,iVBORw0KGgo=">\n  <meta name="viewport" content="width=device-width, initial-scale=1.0">\n  <title>\u4e09\u7ef4\u4e2d\u7684\u70b9 | Points in 3d</title>\n  <style>\n    * { margin: 0; padding: 0; }\n    html, body #app { width: 100%; height: 100%; overflow: hidden; }\n  </style>\n</head>\n<body>\n  <div id="app"></div>\n  <script type="module" src="./index"><\/script>\n</body>\n</html>\n')),(0,o.kt)(i.Z,{mdxType:"Tabs"},(0,o.kt)(a.Z,{value:"JavaScript",label:"JavaScript",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-jsx",metastring:'title="src/4.points-in-3d/withFetchWork.jsx"',title:'"src/4.points-in-3d/withFetchWork.jsx"'},'import React, { Component } from "react";\nimport { parseWork } from "@realsee/five";\n\n/**\n * React HOC \u83b7\u53d6 work\n * @param url work.json \u7684\u5730\u5740\n */\nfunction withFetchWork(url) {\n  return function(Compnent) {\n    return class extends Component {\n      state = { work: null };\n      componentDidMount() {\n        fetch(url).then(res => res.json()).then(json => {\n          this.setState({ work: parseWork(json) });\n        });\n      }\n      render() {\n        if (this.state.work === null) return null;\n        return <Compnent work={this.state.work} {...this.props}/>;\n      }\n    }\n  }\n}\n\nexport { withFetchWork };\n')),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-jsx",metastring:'title="src/4.points-in-3d/withWindowDimensions.jsx"',title:'"src/4.points-in-3d/withWindowDimensions.jsx"'},'import React, { Component } from "react";\n\n/**\n * React HOC: \u83b7\u53d6\u5f53\u524d\u7a97\u53e3\u7684\u5c3a\u5bf8\n */\nfunction withWindowDimensions() {\n  return function(Compnent) {\n    return class extends Component {\n      state = this.getWindowDimensions();\n      resizeListener = () => {\n        this.setState(this.getWindowDimensions());\n      };\n      getWindowDimensions() {\n        return { width: window.innerWidth, height: window.innerHeight };\n      }\n      componentDidMount() {\n        window.addEventListener("resize", this.resizeListener, false);\n      }\n      componentWillUnmount() {\n        window.removeEventListener("resize", this.resizeListener, false);\n      }\n      render() {\n        const dimensions = { width: this.state.width, height: this.state.height };\n        return <Compnent windowDimensions={dimensions} {...this.props}/>;\n      }\n    }\n  }\n}\n\nexport { withWindowDimensions };\n')),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-jsx",metastring:'title="src/4.points-in-3d/ModeController.jsx"',title:'"src/4.points-in-3d/ModeController.jsx"'},'import React, { Component } from "react";\nimport { Five } from "@realsee/five";\nimport { withFive, createFiveFeature } from "@realsee/five/react";\nimport { compose } from "@wordpress/compose";\nimport BottomNavigation from "@mui/material/BottomNavigation";\nimport BottomNavigationAction from "@mui/material/BottomNavigationAction";\nimport Paper from "@mui/material/Paper";\nimport DirectionsWalkIcon from "@mui/icons-material/DirectionsWalk";\nimport ViewInArIcon from "@mui/icons-material/ViewInAr";\n\nconst FEATURES = createFiveFeature("currentState", "setState");\n\n/**\n * React Component: \u6a21\u6001\u63a7\u5236\n */\nconst ModeController = compose(\n  withFive(FEATURES)\n)(class extends Component {\n  render() {\n    return <Paper sx={{ position: "fixed", bottom: 0, left: 0, right: 0 }}>\n      <BottomNavigation\n        showLabels\n        value={this.props.$five.currentState.mode}\n        onChange={(_, newValue) => {\n          this.props.$five.setState({ mode: newValue });\n        }}\n      >\n        <BottomNavigationAction label="\u5168\u666f\u6f2b\u6e38" icon={<DirectionsWalkIcon/>} value={Five.Mode.Panorama}/>\n        <BottomNavigationAction label="\u7a7a\u95f4\u603b\u89c8" icon={<ViewInArIcon/>} value={Five.Mode.Floorplan}/>\n      </BottomNavigation>\n    </Paper>;\n  }\n})\n\nexport { ModeController };\n')),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-jsx",metastring:'title="src/4.points-in-3d/App.jsx"',title:'"src/4.points-in-3d/App.jsx"'},'import React, { Component } from "react";\nimport { compose } from "@wordpress/compose";\nimport { createFiveProvider, FiveCanvas } from "@realsee/five/react";\nimport { withFetchWork } from "./withFetchWork";\nimport { withWindowDimensions } from "./withWindowDimensions";\nimport { ModeController } from "./ModeController";\n\n/** work.json \u7684\u6570\u636e URL */\nconst workURL = "https://vrlab-public.ljcdn.com/release/static/image/release/five/work-sample/07bdc58f413bc5494f05c7cbb5cbdce4/work.json";\n\nconst FiveProvider = createFiveProvider();\n\nconst App = compose(\n  withFetchWork(workURL),\n  withWindowDimensions()\n)(class extends Component {\n  render() {\n    const { work, windowDimensions } = this.props;\n    return <FiveProvider initialWork={work}>\n      <FiveCanvas width={windowDimensions.width} height={windowDimensions.height}/>\n      <ModeController/>;\n    </FiveProvider>;\n  }\n});\n\nexport { App };\n')),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-jsx",metastring:'title="src/4.points-in-3d/index.jsx"',title:'"src/4.points-in-3d/index.jsx"'},'import React from "react";\nimport ReactDOM from "react-dom";\nimport { App } from "./App";\n\nReactDOM.render(<App/>, document.querySelector("#app"));\n\nexport {};\n'))),(0,o.kt)(a.Z,{value:"TypeScript",label:"TypeScript",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-tsx",metastring:'title="src/4.points-in-3d/withFetchWork.tsx"',title:'"src/4.points-in-3d/withFetchWork.tsx"'},'import React, { Component, ComponentClass } from "react";\nimport { Work, parseWork } from "@realsee/five";\n\n/**\n * React HOC \u83b7\u53d6 work\n * @param url work.json \u7684\u5730\u5740\n */\nfunction withFetchWork<P extends Record<string, any>>(url: string) {\n  return function(Compnent: ComponentClass<P & { work: Work }>): ComponentClass<P> {\n    return class extends Component<P, {work: Work | null}> {\n      state = { work: null };\n      componentDidMount() {\n        fetch(url).then(res => res.json()).then(json => {\n          this.setState({ work: parseWork(json) });\n        });\n      }\n      render() {\n        if (this.state.work === null) return null;\n        return <Compnent work={this.state.work} {...this.props}/>;\n      }\n    }\n  }\n}\n\nexport { withFetchWork };\n')),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-tsx",metastring:'title="src/4.points-in-3d/withWindowDimensions.tsx"',title:'"src/4.points-in-3d/withWindowDimensions.tsx"'},'import React, { Component, ComponentClass } from "react";\n\n/**\n * React HOC: \u83b7\u53d6\u5f53\u524d\u7a97\u53e3\u7684\u5c3a\u5bf8\n */\nfunction withWindowDimensions<P extends Record<string, any>>() {\n  return function(Compnent: ComponentClass<P & { windowDimensions: { width: number, height: number} }>): ComponentClass<P> {\n    return class extends Component<P, {width: number, height: number}> {\n      state = this.getWindowDimensions();\n      resizeListener = () => {\n        this.setState(this.getWindowDimensions());\n      };\n      getWindowDimensions() {\n        return { width: window.innerWidth, height: window.innerHeight };\n      }\n      componentDidMount() {\n        window.addEventListener("resize", this.resizeListener, false);\n      }\n      componentWillUnmount() {\n        window.removeEventListener("resize", this.resizeListener, false);\n      }\n      render() {\n        const dimensions = { width: this.state.width, height: this.state.height };\n        return <Compnent windowDimensions={dimensions} {...this.props}/>;\n      }\n    }\n  }\n}\n\nexport { withWindowDimensions };\n')),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-tsx",metastring:'title="src/4.points-in-3d/ModeController.tsx"',title:'"src/4.points-in-3d/ModeController.tsx"'},'import React, { Component } from "react";\nimport { Five, Mode } from "@realsee/five";\nimport { withFive, createFiveFeature, PropTypeOfFiveFeatures } from "@realsee/five/react";\nimport { compose } from "@wordpress/compose";\nimport BottomNavigation from "@mui/material/BottomNavigation";\nimport BottomNavigationAction from "@mui/material/BottomNavigationAction";\nimport Paper from "@mui/material/Paper";\nimport DirectionsWalkIcon from "@mui/icons-material/DirectionsWalk";\nimport ViewInArIcon from "@mui/icons-material/ViewInAr";\n\nconst FEATURES = createFiveFeature("currentState", "setState");\ntype Props = PropTypeOfFiveFeatures<typeof FEATURES>;\n\n/**\n * React Component: \u6a21\u6001\u63a7\u5236\n */\nconst ModeController = compose(\n  withFive(FEATURES)\n)(class extends Component<Props> {\n  render() {\n    return <Paper sx={{ position: "fixed", bottom: 0, left: 0, right: 0 }}>\n      <BottomNavigation\n        showLabels\n        value={this.props.$five.currentState.mode}\n        onChange={(_, newValue: Mode) => {\n          this.props.$five.setState({ mode: newValue });\n        }}\n      >\n        <BottomNavigationAction label="\u5168\u666f\u6f2b\u6e38" icon={<DirectionsWalkIcon/>} value={Five.Mode.Panorama}/>\n        <BottomNavigationAction label="\u7a7a\u95f4\u603b\u89c8" icon={<ViewInArIcon/>} value={Five.Mode.Floorplan}/>\n      </BottomNavigation>\n    </Paper>;\n  }\n})\n\nexport { ModeController };\n')),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-tsx",metastring:'title="src/4.points-in-3d/App.tsx"',title:'"src/4.points-in-3d/App.tsx"'},'import React, { Component } from "react";\nimport { Work } from "@realsee/five";\nimport { createFiveProvider, FiveCanvas } from "@realsee/five/react";\nimport { compose } from "@wordpress/compose";\nimport { withFetchWork } from "./withFetchWork";\nimport { withWindowDimensions } from "./withWindowDimensions";\nimport { ModeController } from "./ModeController";\n\n/** work.json \u7684\u6570\u636e URL */\nconst workURL = "https://vrlab-public.ljcdn.com/release/static/image/release/five/work-sample/07bdc58f413bc5494f05c7cbb5cbdce4/work.json";\n\nconst FiveProvider = createFiveProvider();\n\nconst App = compose(\n  withFetchWork(workURL),\n  withWindowDimensions()\n)(class extends Component<{work: Work, windowDimensions: { width: number, height: number }}> {\n  render() {\n    const { work, windowDimensions } = this.props;\n    return <FiveProvider initialWork={work}>\n      <FiveCanvas width={windowDimensions.width} height={windowDimensions.height}/>\n      <ModeController/>\n    </FiveProvider>;\n  }\n});\n\n\nexport { App };\n')),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-tsx",metastring:'title="src/4.points-in-3d/index.tsx"',title:'"src/4.points-in-3d/index.tsx"'},'import React from "react";\nimport ReactDOM from "react-dom";\nimport { App } from "./App";\n\nReactDOM.render(<App/>, document.querySelector("#app"));\n\nexport {};\n')))),(0,o.kt)("p",null,"\u542f\u52a8\u670d\u52a1 ",(0,o.kt)("inlineCode",{parentName:"p"},"npm run dev"),'\u3002 \u5e76\u8df3\u8f6c\u5230\u5f53\u524d\u9875\u9762 "http://localhost:3000/src/4.points-in-3d/index.html"\u3002'),(0,o.kt)("admonition",{type:"info"},(0,o.kt)("p",{parentName:"admonition"},"\u8bf7\u67e5\u770b\u4f60\u7684\u63a7\u5236\u53f0\uff0c\u7aef\u53e3\u53f7\u4f1a\u56e0\u4e3a\u4f60\u7684\u914d\u7f6e\u4ee5\u53ca\u5f53\u524d\u7aef\u53e3\u5360\u7528\u60c5\u51b5\u53d8\u66f4\uff0c\u8bf7\u5df2\u63a7\u5236\u53f0\u8f93\u51fa\u7684\u4e3a\u51c6\u3002\n\u5982\u679c\u4f60\u4f7f\u7528\u5176\u4ed6\u5f00\u53d1\u6784\u5efa\u5de5\u5177\uff0c\u8bf7\u6309\u7167\u81ea\u5df1\u7684\u5f00\u53d1\u6784\u5efa\u5de5\u5177\u7684\u8981\u6c42\u542f\u52a8\u670d\u52a1\u3002")),(0,o.kt)("h2",{id:"\u4e8b\u4ef6\u7cfb\u7edf"},"\u4e8b\u4ef6\u7cfb\u7edf"),(0,o.kt)("p",null,"\u5728\u5c4f\u5e55\u4e0a\u70b9\u51fb\u65f6\uff0c",(0,o.kt)("strong",{parentName:"p"},"five SDK")," \u7684\u9ed8\u8ba4\u884c\u4e3a\u662f\u9009\u62e9\u70b9\u51fb\u4f4d\u7f6e\u9644\u8fd1\u6700\u5408\u9002\u7684 ",(0,o.kt)("strong",{parentName:"p"},"\u89c2\u5bdf\u70b9(observer)")," \u79fb\u52a8\u8fc7\u53bb\u3002\u5927\u90e8\u5206\u7528\u6237\u7684\u52a8\u4f5c\u90fd\u662f\u5982\u6b64\uff0c\u5c31\u597d\u6bd4\u6d4f\u89c8\u5668\u5bf9\u4e8e ",(0,o.kt)("strong",{parentName:"p"},"A \u6807\u7b7e")," \u7684\u5904\u7406\u903b\u8f91\u5927\u591a\u90fd\u662f\u94fe\u63a5\u8df3\u8f6c\u3002\u4e0a\u8ff0\u5c31\u662f ",(0,o.kt)("strong",{parentName:"p"},"five SDK")," \u7684\u5185\u5efa ",(0,o.kt)("strong",{parentName:"p"},"tapGesture"),"\u4e8b\u4ef6\u3002"),(0,o.kt)("h3",{id:"\u5185\u5efa\u4e8b\u4ef6"},"\u5185\u5efa\u4e8b\u4ef6"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"five SDK")," \u5185\u5efa\u7684\u4e8b\u4ef6\u6709\u5982\u4e0b\uff1a"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"tapGesture"),": \u9f20\u6807\u5de6\u952e\u70b9\u51fb\u6216\u8005\u624b\u6307\u70b9\u51fb\u3002\u9ed8\u8ba4\u884c\u4e3a\u662f\u70b9\u4f4d\u79fb\u52a8\u3002"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"panGesture"),": \u9f20\u6807\u6309\u4f4f\u4e00\u680b\u6216\u8005\u624b\u6307\u5728\u5c4f\u5e55\u4e0a\u62d6\u62fd\u79fb\u52a8\u3002\u76f8\u673a\u65cb\u8f6c\uff08Topview\u4e0b\u662f\u76f8\u673a\u5e73\u79fb\uff09\u3002"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"pinchGesture"),": \u624b\u6307\u53cc\u6307\u505a\u634f\u7684\u624b\u52bf\u3002\u9ed8\u8ba4\u884c\u4e3a\u662f\u4fee\u6539\u76f8\u673a\u53ef\u89c6\u89d2\u5ea6\u3002"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"mouseWheel"),": \u9f20\u6807\u6eda\u8f6e\u3002\u9ed8\u8ba4\u884c\u4e3a\u662f\u4fee\u6539\u76f8\u673a\u53ef\u89c6\u89d2\u5ea6\u3002"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"gesture"),": \u4e0a\u8ff0\u7684\u4efb\u610f\u4e8b\u4ef6\u3002")),(0,o.kt)("h3",{id:"\u963b\u6b62\u9ed8\u8ba4\u884c\u4e3a"},"\u963b\u6b62\u9ed8\u8ba4\u884c\u4e3a"),(0,o.kt)("p",null,"\u6240\u6709\u4e8b\u4ef6\u548c \u6d4f\u89c8\u5668\u5bf9\u4e8e ",(0,o.kt)("strong",{parentName:"p"},"A \u6807\u7b7e")," \u7684\u5904\u7406\u903b\u8f91 \u4e00\u6837\uff0c\u90fd\u53ef\u4ee5\u963b\u6b62\u9ed8\u8ba4\u4e8b\u4ef6\uff0c\u4f60\u53ea\u9700\u8981\u76d1\u542c ",(0,o.kt)("inlineCode",{parentName:"p"},"wants")," \u5f00\u5934\u7684\u4e8b\u4ef6\uff0c\u5728\u56de\u8c03\u51fd\u6570\u4e2d ",(0,o.kt)("inlineCode",{parentName:"p"},"return false")," \u5373\u53ef\u3002\u6bd4\u5982\u60f3\u963b\u6b62 ",(0,o.kt)("strong",{parentName:"p"},"tapGesture")," \u7684\u9ed8\u8ba4\u70b9\u4f4d\u79fb\u52a8\u884c\u4e3a\u3002\u53ef\u4ee5\u505a\u5982\u4e0b\u64cd\u4f5c\u3002"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},'this.props.$five.on("wantsTapGesture", () => {\n  // highlight-start\n  // \u963b\u6b62 tapGesture \u89e6\u53d1\n  return false;\n  // highlight-end\n});\n')),(0,o.kt)("p",null,"\u5177\u4f53\u6bcf\u4e2a\u4e8b\u4ef6\u7684 API \u53ef\u4ee5\u67e5\u770b\u8be6\u7ec6\u6587\u6863"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://unpkg.com/@realsee/five/docs/interfaces/five.EventCallback.html#tapGesture"},"tapGesture")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://unpkg.com/@realsee/five/docs/interfaces/five.EventCallback.html#panGesture"},"panGesture")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://unpkg.com/@realsee/five/docs/interfaces/five.EventCallback.html#pinchGesture"},"pinchGesture")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://unpkg.com/@realsee/five/docs/interfaces/five.EventCallback.html#mouseWheel"},"mouseWheel")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://unpkg.com/@realsee/five/docs/interfaces/five.EventCallback.html#gesture"},"gesture"))),(0,o.kt)("h2",{id:"\u4ece-tapgesture-\u83b7\u53d6\u5750\u6807"},"\u4ece tapGesture \u83b7\u53d6\u5750\u6807"),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"\u6211\u4eec\u5236\u4f5c\u4e00\u4e2a\u7b80\u5355\u529f\u80fd\uff0c\u7528\u4e8e\u6807\u8bb0\u5728\u753b\u5e03\u4e0a\u70b9\u51fb\u7684\u4e09\u7ef4\u4f4d\u7f6e\u3002\n\u4f46\u662f\u4e3a\u4e86\u548c ",(0,o.kt)("strong",{parentName:"p"},"\u70b9\u4f4d\u79fb\u52a8")," \u529f\u80fd\u4e0d\u51b2\u7a81\uff0c\u6211\u4eec\u7528\u4e00\u4e2a ",(0,o.kt)("inlineCode",{parentName:"p"},"Switch")," \u6309\u94ae\u6765\u63a7\u5236\u6807\u8bb0\u72b6\u6001\u662f\u5426\u5f00\u542f\u3002")),(0,o.kt)("h3",{id:"\u5934\u90e8\u6dfb\u52a0\u4f9d\u8d56"},"\u5934\u90e8\u6dfb\u52a0\u4f9d\u8d56"),(0,o.kt)("p",null,"\u672c\u7ae0\u9700\u8981\u4ecb\u7ecd\u4e00\u4e0b ",(0,o.kt)("a",{parentName:"p",href:"http://threejs.org"},"three.js")," \u4e86\u3002",(0,o.kt)("strong",{parentName:"p"},"three.js")," \u662f\u4e00\u4e2a\u4e09\u7ef4\u56fe\u5f62\u5e93\uff0c",(0,o.kt)("strong",{parentName:"p"},"Five SDK")," \u4f7f\u7528 ",(0,o.kt)("strong",{parentName:"p"},"three.js")," \u7684\u6570\u5b66\u5e93\u548c\u6e32\u67d3\u5668\u3002\u672c\u7ae0\u6d89\u53ca ",(0,o.kt)("strong",{parentName:"p"},"three.js")," \u6709\u4e24\u4e2a\u5185\u5bb9\uff0c\u5728\u8fd9\u91cc\u505a\u4e00\u4e9b\u8bf4\u660e\uff0c\u4f60\u4e0d\u5fc5\u5b8c\u5168\u4e86\u89e3 ",(0,o.kt)("strong",{parentName:"p"},"three.js"),", \u6211\u505a\u4e00\u4e9b\u8bf4\u660e\u4f60\u5c31\u53ef\u4ee5\u7406\u89e3\u3002"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://threejs.org/docs/index.html#api/zh/math/Vector3"},(0,o.kt)("inlineCode",{parentName:"a"},"THREE.Vector3")),": \u4f60\u53ef\u4ee5\u5c31\u8ba4\u4e3a\u662f\u4e00\u4e2a ",(0,o.kt)("inlineCode",{parentName:"li"},"{ x: number, y: number, z: number }")," \u7684\u7ed3\u6784\u4f53\uff0c\u5e76\u4e14\u591a\u52a0\u4e86\u4e00\u4e9b\u6570\u5b66\u65b9\u6cd5\uff08\u672c\u6b21\u4e0d\u4f1a\u7528\u5230\u6570\u5b66\u65b9\u6cd5\uff0c\u53ea\u662f\u8bb0\u5f55xyz\uff09"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://threejs.org/docs/index.html#api/zh/core/Raycaster"},(0,o.kt)("inlineCode",{parentName:"a"},"THREE.Raycaster")),": \u5149\u7ebf\u6295\u5c04\u7c7b\u3002\u4f60\u53ef\u4ee5\u7b80\u5355\u7684\u7406\u89e3\u4e3a\u5c4f\u5e55\u4e0a\u7684\u4e00\u4e2a\u70b9\u5bf9\u5e94\u5230\u4e09\u7ef4\u7a7a\u95f4\u662f\u4e00\u6761\u5c04\u7ebf\u3002")),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"REYCASTER",src:n(58955).Z,width:"850",height:"415"}),";"),(0,o.kt)("p",null,"\u5c04\u7ebf\u6709\u5f88\u591a\u4f5c\u7528\uff0c\u6bd4\u5982\uff1a\u901a\u8fc7\u5c04\u7ebf\u548c\u6a21\u578b\u4e4b\u524d\u7684\u76f8\u4ea4\u6027\u68c0\u6d4b\uff0c\u5c31\u53ef\u4ee5\u5224\u65ad\u662f\u5426\u5bf9\u8c61\u88ab\u9009\u4e2d\u3002"),(0,o.kt)("h3",{id:"\u7f16\u5199-markcontroller-\u7ec4\u4ef6"},"\u7f16\u5199 ",(0,o.kt)("strong",{parentName:"h3"},"MarkController")," \u7ec4\u4ef6"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"\u6dfb\u52a0\u4e00\u4e2a ",(0,o.kt)("strong",{parentName:"li"},"MarkController")," \u6587\u4ef6\uff0c\u7528\u4e8e\u7f16\u5199\u7ec4\u4ef6\u3002"),(0,o.kt)("li",{parentName:"ol"},"\u6211\u4eec\u901a\u8fc7 ",(0,o.kt)("strong",{parentName:"li"},"active")," React state \u72b6\u6001\u6765\u63a7\u5236\u5f53\u524d\u5e94\u7528\u662f\u5426\u5728\u6807\u8bb0\u7684\u6a21\u5f0f\u4e0b\u3002"),(0,o.kt)("li",{parentName:"ol"},"\u901a\u8fc7 ",(0,o.kt)("inlineCode",{parentName:"li"},"tapGesture")," \u7b2c\u4e00\u4e2a\u53c2\u6570\u662f ",(0,o.kt)("inlineCode",{parentName:"li"},"raycaster"),"\uff0c\u901a\u8fc7 ",(0,o.kt)("inlineCode",{parentName:"li"},"modelIntersectRaycaster")," \u53ef\u4ee5\u83b7\u53d6\u5230\u7126\u70b9\u4fe1\u606f",(0,o.kt)("inlineCode",{parentName:"li"},"intersect"),"\uff0c",(0,o.kt)("inlineCode",{parentName:"li"},"intersect.point")," \u5c31\u662f\u4ea4\u70b9\u7684\u5750\u6807\u3002"),(0,o.kt)("li",{parentName:"ol"},"\u901a\u8fc7 ",(0,o.kt)("inlineCode",{parentName:"li"},"marks")," React state \u6765\u5b58\u50a8\u6240\u6709\u4ea4\u70b9\uff0c\u5e76\u4e14\u5b9e\u73b0\u6536\u96c6\u548c\u5220\u9664\u3002")),(0,o.kt)(i.Z,{mdxType:"Tabs"},(0,o.kt)(a.Z,{value:"JavaScript",label:"JavaScript",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-jsx",metastring:'title="src/4.points-in-3d/MarkController.jsx"',title:'"src/4.points-in-3d/MarkController.jsx"'},'import React, { Component } from "react";\nimport { compose } from "@wordpress/compose";\nimport { withFive, createFiveFeature } from "@realsee/five/react";\nimport Button from "@mui/material/Button";\nimport Switch from "@mui/material/Switch";\nimport Chip from "@mui/material/Chip";\nimport Stack from "@mui/material/Stack";\nimport Paper from "@mui/material/Paper";\n\nconst FEATURES = createFiveFeature("intersectRaycaster", "on", "off");\n\nconst MarkController = compose(\n  withFive(FEATURES)\n)(class extends Component {\n\n  state = { active: false, marks: [] };\n\n  onTapGesture = (raycaster) => {\n    if (this.state.active) {\n      const [intersect] = this.props.$five.intersectRaycaster(raycaster);\n      if (intersect) this.setState({ marks: this.state.marks.concat(intersect.point) });\n      return false;\n    }\n  };\n\n  componentDidMount() {\n    this.props.$five.on("wantsTapGesture", this.onTapGesture);\n  }\n  componentWillUnmount() {\n    this.props.$five.off("wantsTapGesture", this.onTapGesture);\n  }\n  render() {\n    return <Paper sx={{ position: "fixed", top: 10, left: 10, padding: 1 }}>\n      <Stack>\n        <Stack direction="row">\n          <Switch\n            checked={this.state.active}\n            onChange={(event, checked) => this.setState({ active: checked })}\n          /> <Button disabled>\u5f00\u542f\u70b9\u51fb\u8bb0\u5f55\u5750\u6807</Button>\n        </Stack>\n        <Stack spacing={1}>\n        {this.state.marks.map((point, index) => {\n          const { x, y, z } = point;\n          return <Chip\n            key={index}\n            label={`x=${x.toFixed(2)} y=${y.toFixed(2)} z=${z.toFixed(2)}`}\n            onDelete={() => this.setState({marks: this.state.marks.filter((_, index_) => index_ !== index)})}\n          />\n        })}\n        </Stack>\n      </Stack>\n    </Paper>\n  }\n});\n\nexport { MarkController };\n'))),(0,o.kt)(a.Z,{value:"TypeScript",label:"TypeScript",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-tsx",metastring:'title="src/4.points-in-3d/MarkController.tsx"',title:'"src/4.points-in-3d/MarkController.tsx"'},'import * as THREE from "three";\nimport React, { Component } from "react";\nimport { compose } from "@wordpress/compose";\nimport { EventCallback } from "@realsee/five";\nimport { withFive, createFiveFeature, PropTypeOfFiveFeatures } from "@realsee/five/react";\nimport Button from "@mui/material/Button";\nimport Switch from "@mui/material/Switch";\nimport Chip from "@mui/material/Chip";\nimport Stack from "@mui/material/Stack";\nimport Paper from "@mui/material/Paper";\n\nconst FEATURES = createFiveFeature("intersectRaycaster", "on", "off");\ntype Props = PropTypeOfFiveFeatures<typeof FEATURES>;\ntype State = {\n  active: boolean,\n  marks: THREE.Vector3[],\n};\n\nconst MarkController = compose(\n  withFive(FEATURES)\n)(class extends Component<Props, State> {\n\n  state: State = { active: false, marks: [] };\n\n  onTapGesture: EventCallback["wantsTapGesture"] = (raycaster) => {\n    if (this.state.active) {\n      const [intersect] = this.props.$five.intersectRaycaster(raycaster);\n      if (intersect) this.setState({ marks: this.state.marks.concat(intersect.point) });\n      return false;\n    }\n  };\n\n  componentDidMount() {\n    this.props.$five.on("wantsTapGesture", this.onTapGesture);\n  }\n  componentWillUnmount() {\n    this.props.$five.off("wantsTapGesture", this.onTapGesture);\n  }\n  render() {\n    return <Paper sx={{ position: "fixed", top: 10, left: 10, padding: 1 }}>\n      <Stack>\n        <Stack direction="row">\n          <Switch\n            checked={this.state.active}\n            onChange={(event, checked) => this.setState({ active: checked })}\n          /> <Button disabled>\u5f00\u542f\u70b9\u51fb\u8bb0\u5f55\u5750\u6807</Button>\n        </Stack>\n        <Stack spacing={1}>\n        {this.state.marks.map((point, index) => {\n          const { x, y, z } = point;\n          return <Chip\n            key={index}\n            label={`x=${x.toFixed(2)} y=${y.toFixed(2)} z=${z.toFixed(2)}`}\n            onDelete={() => this.setState({marks: this.state.marks.filter((_, index_) => index_ !== index)})}\n          />\n        })}\n        </Stack>\n      </Stack>\n    </Paper>\n  }\n});\n\nexport { MarkController };\n')))),(0,o.kt)("h3",{id:"\u4f7f\u7528\u6807\u8bb0\u7ec4\u4ef6"},"\u4f7f\u7528\u6807\u8bb0\u7ec4\u4ef6"),(0,o.kt)("p",null,"\u63d2\u5165\u5230 ",(0,o.kt)("strong",{parentName:"p"},"App")," \u6587\u4ef6\u7684 ",(0,o.kt)("strong",{parentName:"p"},"FiveProvider")," \u4e2d"),(0,o.kt)(i.Z,{mdxType:"Tabs"},(0,o.kt)(a.Z,{value:"JavaScript",label:"JavaScript",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-jsx",metastring:'title="src/4.points-in-3d/App.jsx"',title:'"src/4.points-in-3d/App.jsx"'},'import React, { Component } from "react";\nimport { compose } from "@wordpress/compose";\nimport { createFiveProvider, FiveCanvas } from "@realsee/five/react";\nimport { withFetchWork } from "./withFetchWork";\nimport { withWindowDimensions } from "./withWindowDimensions";\nimport { ModeController } from "./ModeController";\n// highlight-start\nimport { MarkController } from "./MarkController";\n// highlight-end\n\n/** work.json \u7684\u6570\u636e URL */\nconst workURL = "https://vrlab-public.ljcdn.com/release/static/image/release/five/work-sample/07bdc58f413bc5494f05c7cbb5cbdce4/work.json";\n\nconst FiveProvider = createFiveProvider();\n\nconst App = compose(\n  withFetchWork(workURL),\n  withWindowDimensions()\n)(class extends Component {\n  render() {\n    const { work, windowDimensions } = this.props;\n    return <FiveProvider initialWork={work}>\n      <FiveCanvas width={windowDimensions.width} height={windowDimensions.height}/>\n      <ModeController/>;\n      // highlight-start\n      <MarkController/>;\n      // highlight-end\n    </FiveProvider>;\n  }\n});\n\nexport { App };\n'))),(0,o.kt)(a.Z,{value:"TypeScript",label:"TypeScript",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-tsx",metastring:'title="src/4.points-in-3d/App.tsx"',title:'"src/4.points-in-3d/App.tsx"'},'import React, { Component } from "react";\nimport { Work } from "@realsee/five";\nimport { createFiveProvider, FiveCanvas } from "@realsee/five/react";\nimport { compose } from "@wordpress/compose";\nimport { withFetchWork } from "./withFetchWork";\nimport { withWindowDimensions } from "./withWindowDimensions";\nimport { ModeController } from "./ModeController";\n// highlight-start\nimport { MarkController } from "./MarkController";\n// highlight-end\n\n/** work.json \u7684\u6570\u636e URL */\nconst workURL = "https://vrlab-public.ljcdn.com/release/static/image/release/five/work-sample/07bdc58f413bc5494f05c7cbb5cbdce4/work.json";\n\nconst FiveProvider = createFiveProvider();\n\nconst App = compose(\n  withFetchWork(workURL),\n  withWindowDimensions()\n)(class extends Component<{work: Work, windowDimensions: { width: number, height: number }}> {\n  render() {\n    const { work, windowDimensions } = this.props;\n    return <FiveProvider initialWork={work}>\n      <FiveCanvas width={windowDimensions.width} height={windowDimensions.height}/>\n      <ModeController/>\n      // highlight-start\n      <MarkController/>\n      // highlight-end\n    </FiveProvider>;\n  }\n});\n\n\nexport { App };\n')))),(0,o.kt)("p",null,"\u56de\u5230\u4f60\u7684\u6d4f\u89c8\u5668\u67e5\u770b\uff0c\u4f1a\u53d1\u73b0\u4f60\u7684\u9875\u9762\u5de6\u4e0a\u89d2\u51fa\u73b0\u4e00\u4e2a\u9009\u62e9\u5f00\u5173\u3002\u6253\u5f00\u5f00\u5173\uff0c\u70b9\u51fb\u753b\u5e03\u5185\u5bb9\uff0c\u4f1a\u8f93\u51fa\u70b9\u51fb\u4f4d\u7f6e\u7684\u5750\u6807\u3002"),(0,o.kt)("p",null,"\u771f\u68d2\uff0c\u4e00\u4e0b\u5b50\u5c31\u7406\u89e3\u548c\u83b7\u53d6\u5230\u4e86\u4e09\u7ef4\u5750\u6807\ud83e\udd73 \u3002"),(0,o.kt)("h2",{id:"\u4e0b\u4e00\u7ae0\u8282\u4f60\u4f1a\u5b66\u5230"},"\u4e0b\u4e00\u7ae0\u8282\u4f60\u4f1a\u5b66\u5230"),(0,o.kt)("admonition",{title:"\u4e0b\u4e00\u7ae0\u6211\u4eec\u5c06\u5b9e\u73b0\u4e00\u4e2a\u7a7a\u95f4\u6807\u7b7e\u529f\u80fd\uff0c\u4e0d\u8981\u9519\u8fc7\u54e6\u3002 ",type:"tip"}))}h.isMDXComponent=!0},58955:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/raycaster-c3dcc64a540402b16231e021c13f20ca.png"}}]);