"use strict";(self.webpackChunkrealsee_developer_github_com=self.webpackChunkrealsee_developer_github_com||[]).push([[8271],{49613:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>u});var r=n(59496);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=r.createContext({}),p=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=p(e.components);return r.createElement(l.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),d=p(n),u=o,h=d["".concat(l,".").concat(u)]||d[u]||m[u]||a;return n?r.createElement(h,i(i({ref:t},c),{},{components:n})):r.createElement(h,i({ref:t},c))}));function u(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:o,i[1]=s;for(var p=2;p<a;p++)i[p]=n[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},45558:(e,t,n)=>{n.d(t,{Z:()=>i});var r=n(59496),o=n(45924);const a="tabItem_IPoj";function i(e){let{children:t,hidden:n,className:i}=e;return r.createElement("div",{role:"tabpanel",className:(0,o.Z)(a,i),hidden:n},t)}},38637:(e,t,n)=>{n.d(t,{Z:()=>u});var r=n(2962),o=n(59496),a=n(45924),i=n(26709),s=n(33548),l=n(14714),p=n(60411);const c="tabList_xr86",m="tabItem_r4_W";function d(e){var t;const{lazy:n,block:i,defaultValue:d,values:u,groupId:h,className:k}=e,w=o.Children.map(e.children,(e=>{if((0,o.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})),v=u??w.map((e=>{let{props:{value:t,label:n,attributes:r}}=e;return{value:t,label:n,attributes:r}})),g=(0,s.l)(v,((e,t)=>e.value===t.value));if(g.length>0)throw new Error(`Docusaurus error: Duplicate values "${g.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`);const f=null===d?d:d??(null==(t=w.find((e=>e.props.default)))?void 0:t.props.value)??w[0].props.value;if(null!==f&&!v.some((e=>e.value===f)))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${f}" but none of its children has the corresponding value. Available values are: ${v.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);const{tabGroupChoices:b,setTabGroupChoices:y}=(0,l.U)(),[N,C]=(0,o.useState)(f),x=[],{blockElementScrollPositionUntilNextRender:W}=(0,p.o5)();if(null!=h){const e=b[h];null!=e&&e!==N&&v.some((t=>t.value===e))&&C(e)}const j=e=>{const t=e.currentTarget,n=x.indexOf(t),r=v[n].value;r!==N&&(W(t),C(r),null!=h&&y(h,String(r)))},D=e=>{var t;let n=null;switch(e.key){case"Enter":j(e);break;case"ArrowRight":{const t=x.indexOf(e.currentTarget)+1;n=x[t]??x[0];break}case"ArrowLeft":{const t=x.indexOf(e.currentTarget)-1;n=x[t]??x[x.length-1];break}}null==(t=n)||t.focus()};return o.createElement("div",{className:(0,a.Z)("tabs-container",c)},o.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,a.Z)("tabs",{"tabs--block":i},k)},v.map((e=>{let{value:t,label:n,attributes:i}=e;return o.createElement("li",(0,r.Z)({role:"tab",tabIndex:N===t?0:-1,"aria-selected":N===t,key:t,ref:e=>x.push(e),onKeyDown:D,onClick:j},i,{className:(0,a.Z)("tabs__item",m,null==i?void 0:i.className,{"tabs__item--active":N===t})}),n??t)}))),n?(0,o.cloneElement)(w.filter((e=>e.props.value===N))[0],{className:"margin-top--md"}):o.createElement("div",{className:"margin-top--md"},w.map(((e,t)=>(0,o.cloneElement)(e,{key:t,hidden:e.props.value!==N})))))}function u(e){const t=(0,i.Z)();return o.createElement(d,(0,r.Z)({key:String(t)},e))}},42483:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>l,default:()=>u,frontMatter:()=>s,metadata:()=>p,toc:()=>m});var r=n(2962),o=(n(59496),n(49613)),a=n(38637),i=n(45558);const s={title:"Beginning"},l=void 0,p={unversionedId:"front/3d-space/handbook/react-hoc/get-started",id:"front/3d-space/handbook/react-hoc/get-started",title:"Beginning",description:"on React by ClassComponent + HOC mode integration Five development, Full source sample\uff1aJavaScript | TypeScript.",source:"@site/i18n/en/docusaurus-plugin-content-docs/current/front/3d-space/handbook/react-hoc/0.get-started.md",sourceDirName:"front/3d-space/handbook/react-hoc",slug:"/front/3d-space/handbook/react-hoc/get-started",permalink:"/en/docs/front/3d-space/handbook/react-hoc/get-started",draft:!1,tags:[],version:"current",lastUpdatedBy:"sansi.lcj",lastUpdatedAt:1669717185,formattedLastUpdatedAt:"Nov 29, 2022",sidebarPosition:0,frontMatter:{title:"Beginning"},sidebar:"\u4e09\u7ef4\u7a7a\u95f4",previous:{title:"Tag",permalink:"/en/docs/front/3d-space/handbook/no-framework/tagging"},next:{title:"Show 3D space",permalink:"/en/docs/front/3d-space/handbook/react-hoc/displaying-work"}},c={},m=[{value:"Preparatory work",id:"preparatory-work",level:2},{value:"Development environment",id:"development-environment",level:3},{value:"Use development build tool",id:"use-development-build-tool",level:3},{value:"Create HTML File",id:"create-html-file",level:3},{value:"Write test logical code",id:"write-test-logical-code",level:3},{value:"Install dependencies from <code>npm</code>",id:"install-dependencies-from-npm",level:2},{value:"Render a three-dimensional space",id:"render-a-three-dimensional-space",level:2},{value:"Load 3D space",id:"load-3d-space",level:3},{value:"Make the screen full",id:"make-the-screen-full",level:3},{value:"Split Code",id:"split-code",level:2},{value:"The next section will be completed by you",id:"the-next-section-will-be-completed-by-you",level:2}],d={toc:m};function u(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("admonition",{type:"info"},(0,o.kt)("p",{parentName:"admonition"},"on ",(0,o.kt)("strong",{parentName:"p"},"React")," by ",(0,o.kt)("strong",{parentName:"p"},"ClassComponent + HOC")," mode integration ",(0,o.kt)("strong",{parentName:"p"},"Five")," development, Full source sample\uff1a",(0,o.kt)("a",{parentName:"p",href:"https://github.com/realsee-developer/five-sdk-javascript-esmodule-react-hoc-tutorial"},"JavaScript")," | ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/realsee-developer/five-sdk-typescript-react-hoc-tutorial"},"TypeScript"),".")),(0,o.kt)("admonition",{title:"This chapter can learn to",type:"tip"},(0,o.kt)("ul",{parentName:"admonition"},(0,o.kt)("li",{parentName:"ul"},"Preparation for the development environment."),(0,o.kt)("li",{parentName:"ul"},"How to introduce ",(0,o.kt)("strong",{parentName:"li"},"Five")," SDK."),(0,o.kt)("li",{parentName:"ul"},"Render a three-dimensional space in the screen."))),(0,o.kt)("h2",{id:"preparatory-work"},"Preparatory work"),(0,o.kt)("h3",{id:"development-environment"},"Development environment"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"You need to prepare a modern browser.")),(0,o.kt)("admonition",{type:"info"},(0,o.kt)("p",{parentName:"admonition"},(0,o.kt)("strong",{parentName:"p"},"Five")," Browser supports the following, please choose one of your families\uff1a"),(0,o.kt)("table",{parentName:"admonition"},(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:"center"},"Safari"),(0,o.kt)("th",{parentName:"tr",align:"center"},"Safari on iOS"),(0,o.kt)("th",{parentName:"tr",align:"right"},"Chrome"),(0,o.kt)("th",{parentName:"tr",align:"center"},"Chrome for Android"),(0,o.kt)("th",{parentName:"tr",align:"center"},"Edge"),(0,o.kt)("th",{parentName:"tr",align:"center"},"Firefox"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"center"},">= 9"),(0,o.kt)("td",{parentName:"tr",align:"center"},">= 9"),(0,o.kt)("td",{parentName:"tr",align:"right"},">= 49"),(0,o.kt)("td",{parentName:"tr",align:"center"},">= 93"),(0,o.kt)("td",{parentName:"tr",align:"center"},">= 13"),(0,o.kt)("td",{parentName:"tr",align:"center"},">= 45"))))),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"You need to install ",(0,o.kt)("a",{parentName:"li",href:"https://nodejs.org/"},"Node.js"),"and ",(0,o.kt)("inlineCode",{parentName:"li"},"Node.js")," version of subdue >= 12.x in order to avoid historical compatibility problems.")),(0,o.kt)("h3",{id:"use-development-build-tool"},"Use development build tool"),(0,o.kt)("p",null,"This example is initialized by ",(0,o.kt)("a",{parentName:"p",href:"https://vitejs.dev/"},"Vite"),"You can initialize yourself with the code below."),(0,o.kt)(a.Z,{mdxType:"Tabs"},(0,o.kt)(i.Z,{value:"JavaScript",label:"JavaScript",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"    # npm 6.x\n    npm create vite@latest my-vue-app --template react\n    \n    # npm 7+, extra double-dash is needed:\n    npm create vite@latest my-vue-app -- --template react\n"))),(0,o.kt)(i.Z,{value:"TypeScript",label:"TypeScript",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"    # npm 6.x\n    npm create vite@latest my-vue-app --template react-ts\n    \n    # npm 7+, extra double-dash is needed:\n    npm create vite@latest my-vue-app -- --template react-ts\n")))),(0,o.kt)("p",null,"Create the directory ",(0,o.kt)("inlineCode",{parentName:"p"},"src/0.getting-started"),"for this tutorial under ",(0,o.kt)("inlineCode",{parentName:"p"},"src"),"."),(0,o.kt)("p",null,"Each tutorial creates a new directory as a record that can be summarized and traced.When the course ends you will get:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"src\n\u251c\u2500\u2500 0.getting-started\n\u251c\u2500\u2500 1.displaying-work\n\u251c\u2500\u2500 2.knowing-state\n...\n\n")),(0,o.kt)("p",null,"This directory structure.The full code sample is also such a directory structure that you can always consult at any time."),(0,o.kt)("admonition",{type:"tip"},(0,o.kt)("p",{parentName:"admonition"},"If you are familiar with other development building tools such as ",(0,o.kt)("inlineCode",{parentName:"p"},"Webpack")," ",(0,o.kt)("inlineCode",{parentName:"p"},"Snowpack")," ",(0,o.kt)("inlineCode",{parentName:"p"},"parcel")," you can also use them.")),(0,o.kt)("h3",{id:"create-html-file"},"Create HTML File"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-html",metastring:'title="src/0.getting-started/index.html"',title:'"src/0.getting-started/index.html"'},'<!DOCTYPE html>\n<html lang="en">\n<head>\n  <meta charset="UTF-8">\n  <link rel="icon" href="data:;base64,iVBORw0KGgo=">\n  <meta name="viewport" content="width=device-width, initial-scale=1.0">\n  <title>started| Getting started</title>\n  \x3c!-- highlight-start --\x3e\n  <style>\n    * { margin: 0; padding: 0; }\n    html, body, #app { width: 100%; height: 100%; overflow: hidden; }\n  </style>\n  \x3c!-- highlight-end --\x3e\n</head>\n<body>\n  \x3c!-- highlight-start --\x3e\n  <div id="app"></div>\n  <script type="module" src="./index"><\/script>\n  \x3c!-- highlight-end --\x3e\n</body>\n</html>\n')),(0,o.kt)("p",null,"Using direct import ",(0,o.kt)("inlineCode",{parentName:"p"},'<script type="module" src="./index"><\/script>')," is a feature of ",(0,o.kt)("a",{parentName:"p",href:"https://vitejs.dev/"},"Vite")," ,\nIf you use other development and construction tools, please handle code import and entry files by yourself. Like HtmlWebpackPlugin under webpack and more."),(0,o.kt)("h3",{id:"write-test-logical-code"},"Write test logical code"),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"We first create a simple ",(0,o.kt)("inlineCode",{parentName:"p"},"Hello World")," to make sure that the whole code is running.")),(0,o.kt)(a.Z,{mdxType:"Tabs"},(0,o.kt)(i.Z,{value:"JavaScript",label:"JavaScript",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-jsx",metastring:'title="src/0.getting-started/index.jsx"',title:'"src/0.getting-started/index.jsx"'},'const app = document.querySelector("#app");\n// highlight-start\napp.innerHTML = "Hello World.";\n// highlight-end\nexport {};\n'))),(0,o.kt)(i.Z,{value:"TypeScript",label:"TypeScript",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-tsx",metastring:'title="src/0.getting-started/index.tsx"',title:'"src/0.getting-started/index.tsx"'},'const app = document.querySelector("#app")!;\n// highlight-start\napp.innerHTML = "Hello World.";\n// highlight-end\nexport {};\n')))),(0,o.kt)("p",null,"Last ",(0,o.kt)("inlineCode",{parentName:"p"},"export {};")," because ",(0,o.kt)("a",{parentName:"p",href:"https://vitejs.dev/"},"Vite")," uses ",(0,o.kt)("inlineCode",{parentName:"p"},'type="module"')," to introduce, each file needs to be a ",(0,o.kt)("inlineCode",{parentName:"p"},"module"),", needs ",(0,o.kt)("inlineCode",{parentName:"p"},"export"),".\nIf you use other development build tools, please write them as required by your own development build."),(0,o.kt)("p",null,"Start service ",(0,o.kt)("inlineCode",{parentName:"p"},"npm run dev"),' and jump to the current page "http://localhost:3000/src/0.getting-started/index.html".'),(0,o.kt)("admonition",{type:"info"},(0,o.kt)("p",{parentName:"admonition"},"Please see your console. The port number will change due to your configuration and current port occupancy, please check the console output.\nIf you use another development build tool, please start the service as required by your own development build tool.")),(0,o.kt)("p",null,"Then you will see it on the page"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"Hello World.\n")),(0,o.kt)("p",null,"This output indicates that the development of build tools has been completed."),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"The next sections will not elaborate further on the above steps and please do so together.")),(0,o.kt)("h2",{id:"install-dependencies-from-npm"},"Install dependencies from ",(0,o.kt)("inlineCode",{parentName:"h2"},"npm")),(0,o.kt)("p",null,"Install dependency in your project directory"),(0,o.kt)(a.Z,{mdxType:"Tabs"},(0,o.kt)(i.Z,{value:"JavaScript",label:"JavaScript",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"npm install @realsee/five three\n.117 react react-dom-wordpress/compose\n")),(0,o.kt)("p",null,"rely on needs"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://npmjs.com/@realsee/five"},(0,o.kt)("strong",{parentName:"a"},"@realsee/five"))," ",(0,o.kt)("strong",{parentName:"li"},"Five")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://npmjs.com/three"},(0,o.kt)("strong",{parentName:"a"},"three"))," three.js is Five dependencies/mathematical library. Currently please use version\nof 0.117.x - ",(0,o.kt)("a",{parentName:"li",href:"https://npmjs.com/react"},(0,o.kt)("strong",{parentName:"a"},"react"))," React Framework"),(0,o.kt)("li",{parentName:"ul"},"[",(0,o.kt)("strong",{parentName:"li"},"react-dom"),"]","(",(0,o.kt)("a",{parentName:"li",href:"https://npmjs.com/"},"https://npmjs.com/")," react-dom) Browser-side renderer for React"),(0,o.kt)("li",{parentName:"ul"},"HOC wrapper for ",(0,o.kt)("a",{parentName:"li",href:"https://npmjs.com/@wordpress/compose"},(0,o.kt)("strong",{parentName:"a"},"@wordpress/compose"))," React HOC"))),(0,o.kt)(i.Z,{value:"TypeScript",label:"TypeScript",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"npm install @realsee/five three@0.117 react react-dom @types/react @types/react-dom @wordpress/compose\n")),(0,o.kt)("p",null,"relies for"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://npmjs.com/@realsee/five"},(0,o.kt)("strong",{parentName:"a"},"@realsee/five"))," ",(0,o.kt)("strong",{parentName:"li"},"Five")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://npmjs.com/three"},(0,o.kt)("strong",{parentName:"a"},"three"))," three.js is Five Dependent Graphs/Mathemes. Currently please use version 0.117.x of"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://npmjs.com/react"},(0,o.kt)("strong",{parentName:"a"},"react"))," React Framework"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://npmjs.com/react-dom"},(0,o.kt)("strong",{parentName:"a"},"react-dom"))," browser renderer"),(0,o.kt)("li",{parentName:"ul"},"[",(0,o.kt)("strong",{parentName:"li"},"@typees/react"),"]","(",(0,o.kt)("a",{parentName:"li",href:"https://npmjs."},"https://npmjs.")," om/@types/react) Type Statement for React Framework"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://npmjs.com/@types/react-dom"},(0,o.kt)("strong",{parentName:"a"},"@types/react-dom"))," React Browser Typebook Type Statement for Reactor"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://npmjs.com/@wordpress/compose"},(0,o.kt)("strong",{parentName:"a"},"@wordpress/compose"))," React HOC Packager")))),(0,o.kt)("h2",{id:"render-a-three-dimensional-space"},"Render a three-dimensional space"),(0,o.kt)("p",null,"It's time to render a VR scene."),(0,o.kt)("h3",{id:"load-3d-space"},"Load 3D space"),(0,o.kt)("p",null,"Delete your previous ",(0,o.kt)("inlineCode",{parentName:"p"},"Hello World"),".We shall rewrite.\nYou can first fail to understand what the code will mean, and you will learn from the next chapter."),(0,o.kt)(a.Z,{mdxType:"Tabs"},(0,o.kt)(i.Z,{value:"JavaScript",label:"JavaScript",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-jsx",metastring:'title="src/0.getting-started/index.jsx"',title:'"src/0.getting-started/index.jsx"'},'import React, { Component, ComponentClass } from "react";\nimport ReactDOM from "react-dom";\nimport { Work, parseWork } from "@realsee/five";\nimport { createFiveProvider, FiveCanvas } from "@realsee/five/react";\nimport { compose } from "@wordpress/compose";\n\n/** Data URL of work.json */\nconst workURL = "https://vrlab-public.ljcdn.com/release/static/image/release/five/work-sample/07bdc58f413bc5494f05c7cbb5cbdce4/work.json";\n\n/**\n * React HOC gets work\n * @param url work.json address\n */\nfunction withFetchWork(url) {\n  return function(Compnent) {\n    return class extends Component {\n      state = { work: null };\n      componentDidMount() {\n        fetch(url).then(res => res.json()).then(json => {\n          this.setState({ work: parseWork(json) });\n        });\n      }\n      render() {\n        if (this.state.work === null) return null;\n        return <Compnent work={this.state.work} {...this.props}/>;\n      }\n    }\n  }\n}\n\nconst FiveProvider = createFiveProvider();\nconst App = compose(\n  withFetchWork(workURL)\n)(class extends Component {\n  render() {\n    const { work } = this.props;\n    return <FiveProvider initialWork={work}>\n      <FiveCanvas width={512} height={512}/>\n    </FiveProvider>;\n  }\n});\n\nReactDOM.render(<App/>, document.querySelector("#app"));\n\nexport {};\n'))),(0,o.kt)(i.Z,{value:"TypeScript",label:"TypeScript",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-tsx",metastring:'title="src/0.getting-started/index.tsx"',title:'"src/0.getting-started/index.tsx"'},'import React, { Component, ComponentClass } from "react";\nimport ReactDOM from "react-dom";\nimport { Work, parseWork } from "@realsee/five";\nimport { createFiveProvider, FiveCanvas } from "@realsee/five/react";\nimport { compose } from "@wordpress/compose";\n\n/** work. The data URL */\nconst workURL = "https://vrlab-public.ljcdn.com/release/static/image/release/five/work-sample/07bdc58f413bc5494f05c7cbb5cbdce4/work.json";\n\n/**\n * React HOC get work\n * @param url work.json address\n */\nfunction withFetchWork<P extends Record<string, any>>(url: string) {\n  return function(Compnent: ComponentClass<P & { work: Work }>): ComponentClass<P> {\n    return class extends Component<P, {work: Work | null}> {\n      state = { work: null };\n      componentDidMount() {\n        fetch(url).then(res => res.json()).then(json => {\n          this.setState({ work: parseWork(json) });\n        });\n      }\n      render() {\n        if (this.state.work === null) return null;\n        return <Compnent work={this.state.work} {...this.props}/>;\n      }\n    }\n  }\n}\n\nconst FiveProvider = createFiveProvider();\nconst App = compose(\n  withFetchWork(workURL)\n)(class extends Component<{work: Work}> {\n  render() {\n    const { work } = this.props;\n    return <FiveProvider initialWork={work}>\n      <FiveCanvas width={512} height={512}/>\n    </FiveProvider>;\n  }\n})\n\nReactDOM.render(<App/>, document.querySelector("#app"));\n\nexport {};\n')))),(0,o.kt)("p",null,"Go back to your browser, see if there is already a three-dimensional position displayed on the left. You can use the mouse or touch the gesture. Basic browsing features are attached."),(0,o.kt)("h3",{id:"make-the-screen-full"},"Make the screen full"),(0,o.kt)("p",null,"While the working principles of the above code may not be fully understood, we can see ",(0,o.kt)("inlineCode",{parentName:"p"},"FiveCanvas")," affected by ",(0,o.kt)("inlineCode",{parentName:"p"},"width")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"height")," properties, very much like the size of the picture.This guess is also supported by the position of the picture in the upper left corner of the browser.For each time, they are used to set screen size."),(0,o.kt)("p",null,"That's how we try to use React Hooks with our familiarity and lay it over the screen."),(0,o.kt)(a.Z,{mdxType:"Tabs"},(0,o.kt)(i.Z,{value:"JavaScript",label:"JavaScript",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-jsx",metastring:'title="src/0.getting-started/index.jsx"',title:'"src/0.getting-started/index.jsx"'},'import React, { Component } from "react";\nimport ReactDOM from "react-dom";\nimport { parseWork } from "@realsee/five";\nimport { createFiveProvider, FiveCanvas } from "@realsee/five/react";\nimport { compose } from "@wordpress/compose";\n\n/** Data URL of work.json */\nconst workURL = "https://vrlab-public.ljcdn .com/release/static/image/release/five/work-sample/07bdc58f413bc5494f05c7cbb5cbdce4/work.json";\n\n/**\n * React HOC gets work\n * @param url work.json address\n */\nfunction withFetchWork(url) {\n  return function(Compnent) {\n    return class extends Component {\n      state = { work: null };\n      componentDidMount() {\n        fetch(url).then(res => res.json()).then(json => {\n          this.setState({ work: parseWork(json) });\n        });\n      }\n      render() {\n        if (this.state.work === null) return null;\n        return <Compnent work={this.state.work} {...this.props}/>;\n      }\n    }\n  }\n}\n\n/**\n * React HOC: Get the dimensions of the current\n */\nfunction withWindowDimensions() {\n  return function(Compnent) {\n    return class extends Component {\n      state = this.getWindowDimensions();\n      resizeListener = () => {\n        this.setState(this.getWindowDimensions());\n      };\n      getWindowDimensions() {\n        return { width: window.innerWidth, height: window.innerHeight };\n      }\n      componentDidMount() {\n        window.addEventListener("resize", this.resizeListener, false);\n      }\n      componentWillUnmount() {\n        window.removeEventListener("resize", this.resizeListener, false);\n      }\n      render() {\n        const dimensions = { width: this.state.width, height: this.state.height };\n        return <Compnent windowDimensions={dimensions} {...this.props}/>;\n      }\n    }\n  }\n}\n\nconst FiveProvider = createFiveProvider();\nconst App = compose(\n  withFetchWork(workURL),\n  withWindowDimensions()\n)(\n  class extends Component {\n  render() {\n    const { work, windowDimensions } = this.props;\n    return <FiveProvider initialWork={work}>\n      <FiveCanvas width={windowDimensions.width} height={windowDimensions.height}/>\n    </FiveProvider>;\n  }\n})\n\nReactDOM.render(<App/>, document.querySelector("#app"));\n\nexport {};\n'))),(0,o.kt)(i.Z,{value:"TypeScript",label:"TypeScript",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-tsx",metastring:'title="src/0.getting-started/index.tsx"',title:'"src/0.getting-started/index.tsx"'},'import React, { Component, ComponentClass } from "react";\nimport ReactDOM from "react-dom";\nimport { Work, parseWork } from "@realsee/five";\nimport { createFiveProvider, FiveCanvas } from "@realsee/five/react";\nimport { compose } from "@wordpress/compose";\n\n/** work. The data URL */\nconst workURL = "https://vrlab-public.ljcdn.com/release/static/image/release/five/work-sample/07bdc58f413bc5494f05c7cbb5cbdce4/work.json";\n\n/**\n * React HOC get work\n * @param url work.json address\n */\nfunction withFetchWork<P extends Record<string, any>>(url: string) {\n  return function(Compnent: ComponentClass<P & { work: Work }>): ComponentClass<P> {\n    return class extends Component<P, {work: Work | null}> {\n      state = { work: null };\n      componentDidMount() {\n        fetch(url).then(res => res.json()).then(json => {\n          this.setState({ work: parseWork(json) });\n        });\n      }\n      render() {\n        if (this.state.work === null) return null;\n        return <Compnent work={this.state.work} {...this.props}/>;\n      }\n    }\n  }\n}\n\n/**\n * React HOC: Get the current window size\n */\nfunction withWindowDimensions<P extends Record<string, any>>() {\n  return function(Compnent: ComponentClass<P & { windowDimensions: { width: number, height: number} }>): ComponentClass<P> {\n    return class extends Component<P, {width: number, height: number}> {\n      state = this.getWindowDimensions();\n      resizeListener = () => {\n        this.setState(this.getWindowDimensions());\n      };\n      getWindowDimensions() {\n        return { width: window.innerWidth, height: window.innerHeight };\n      }\n      componentDidMount() {\n        window.addEventListener("resize", this.resizeListener, false);\n      }\n      componentWillUnmount() {\n        window.removeEventListener("resize", this.resizeListener, false);\n      }\n      render() {\n        const dimensions = { width: this.state.width, height: this.state.height };\n        return <Compnent windowDimensions={dimensions} {...this.props}/>;\n      }\n    }\n  }\n}\n\nconst FiveProvider = createFiveProvider();\nconst App = compose(\n  withFetchWork(workURL),\n  withWindowDimensions()\n)(class extends Component<{work: Work, windowDimensions: { width: number, height: number }}> {\n  render() {\n    const { work, windowDimensions } = this.props;\n    return <FiveProvider initialWork={work}>\n      <FiveCanvas width={windowDimensions.width} height={windowDimensions.height}/>\n    </FiveProvider>;\n  }\n})\n\nReactDOM.render(<App/>, document.querySelector("#app"));\n\nexport {};\n')))),(0,o.kt)("p",null,"Go back to your browser and see if it does not meet expectations."),(0,o.kt)("p",null,"Your stick\ud83e\udd73 !"),(0,o.kt)("h2",{id:"split-code"},"Split Code"),(0,o.kt)("p",null,"All our codes are currently written in a ",(0,o.kt)("strong",{parentName:"p"},"js")," / ",(0,o.kt)("strong",{parentName:"p"},"ts")," file.While all logic can be seen at first glance, it is more confusing.The splitting of content into more than one document will improve this."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Split ",(0,o.kt)("inlineCode",{parentName:"li"},"App")," to separate files."),(0,o.kt)("li",{parentName:"ul"},"Split ",(0,o.kt)("inlineCode",{parentName:"li"},"to separate files with FetchWork"),"."),(0,o.kt)("li",{parentName:"ul"},"Split ",(0,o.kt)("inlineCode",{parentName:"li"},"to separate files without Windows Dimensions")," method.")),(0,o.kt)(a.Z,{mdxType:"Tabs"},(0,o.kt)(i.Z,{value:"JavaScript",label:"JavaScript",mdxType:"TabItem"},(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"src/0.getting-started/withFetchWork.jsx")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-jsx"},'import React, { Component } from "react";\nimport { parseWork } from "@realsee/five";\n\n/**\n * React HOC for work\n * @param url work. Son\'s address\n */\nfunction withFetchWork(url) {\n  return function(Compnent) {\n    return class extends Component {\n      state = { work: null };\n      componentDidMount() {\n        fetch(url).then(res => res.json()).then(json => {\n          this.setState({ work: parseWork(json) });\n        });\n      }\n      render() {\n        if (this.state.work === null) return null;\n        return <Compnent work={this.state.work} {...this.props}/>;\n      }\n    }\n  }\n}\n\nexport { withFetchWork };\n')),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"src/0.getting-started/withWindowDimensions.jsx")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-jsx"},'import React, { Component } from "react";\n\n/**\n * React HOC: Get the size of the current window\n */\nfunction withWindowDimensions() {\n  return function(Compnent) {\n    return class extends Component {\n      state = this.getWindowDimensions();\n      resizeListener = () => {\n        this.setState(this.getWindowDimensions());\n      };\n      getWindowDimensions() {\n        return { width: window.innerWidth, height: window.innerHeight };\n      }\n      componentDidMount() {\n        window.addEventListener("resize", this.resizeListener, false);\n      }\n      componentWillUnmount() {\n        window.removeEventListener("resize", this.resizeListener, false);\n      }\n      render() {\n        const dimensions = { width: this.state.width, height: this.state.height };\n        return <Compnent windowDimensions={dimensions} {...this.props}/>;\n      }\n    }\n  }\n}\n\nexport { withWindowDimensions };\n')),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"src/0.getting-started/App.jsx")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-jsx"},'import React, { Component } from "react";\nimport { compose } from "@wordpress/compose";\nimport { createFiveProvider, FiveCanvas } from "@realsee/five/react";\nimport { withFetchWork } from "./withFetchWork";\nimport { withWindowDimensions } from "./withWindowDimensions";\n\n/** of work.json Data URL */\nconst workURL = "https://vrlab-public.ljcdn.com/release/static/image/release/five/work-sample/07bdc58f413bc5494f05c7cbb5cbdce4/work.json";\n\nconst FiveProvider = createFiveProvider();\n\nconst App = compose(\n  withFetchWork(workURL),\n  withWindowDimensions()\n)(class extends Component {\n  render() {\n    const { work, windowDimensions } = this.props;\n    return <FiveProvider initialWork={work}>\n      <FiveCanvas width={windowDimensions.width} height={windowDimensions.height}/>\n    </FiveProvider>;\n  }\n});\n\nexport { App };\n')),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"src/0.getting-started/index.jsx")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-jsx"},'import React from "react";\nimport ReactDOM from "react-dom";\nimport { App } from "./App";\n\nReactDOM.render(<App/>, document.querySelector("#app"));\n\nexport {};\n'))),(0,o.kt)(i.Z,{value:"TypeScript",label:"TypeScript",mdxType:"TabItem"},(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"src/0.getting-started/withFetchWork.tsx")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-tsx"},'import React, { Component, ComponentClass } from "react";\nimport { Work, parseWork } from "@realsee/five";\n\n/**\n * React HOC get work\n * @param url work. Son address\n */\nfunction withFetchWork<P extends Record<string, any>>(url: string) {\n  return function(Compnent: ComponentClass<P & { work: Work }>): ComponentClass<P> {\n    return class extends Component<P, {work: Work | null}> {\n      state = { work: null };\n      componentDidMount() {\n        fetch(url).then(res => res.json()).then(json => {\n          this.setState({ work: parseWork(json) });\n        });\n      }\n      render() {\n        if (this.state.work === null) return null;\n        return <Compnent work={this.state.work} {...this.props}/>;\n      }\n    }\n  }\n}\n\nexport { withFetchWork };\n')),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"src/0.getting-started/withWindowDimensions.tsx")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-tsx"},'import React, { Component, ComponentClass } from "react";\n\n/**\n * React HOC: Get the current window size\n */\nfunction withWindowDimensions<P extends Record<string, any>>() {\n  return function(Compnent: ComponentClass<P & { windowDimensions: { width: number, height: number} }>): ComponentClass<P> {\n    return class extends Component<P, {width: number, height: number}> {\n      state = this.getWindowDimensions();\n      resizeListener = () => {\n        this.setState(this.getWindowDimensions());\n      };\n      getWindowDimensions() {\n        return { width: window.innerWidth, height: window.innerHeight };\n      }\n      componentDidMount() {\n        window.addEventListener("resize", this.resizeListener, false);\n      }\n      componentWillUnmount() {\n        window.removeEventListener("resize", this.resizeListener, false);\n      }\n      render() {\n        const dimensions = { width: this.state.width, height: this.state.height };\n        return <Compnent windowDimensions={dimensions} {...this.props}/>;\n      }\n    }\n  }\n}\n\nexport { withWindowDimensions };\n')),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"src/0.getting-started/App.tsx")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-tsx"},'import React, { Component } from "react";\nimport { Work } from "@realsee/five";\nimport { createFiveProvider, FiveCanvas } from "@realsee/five/react";\nimport { compose } from "@wordpress/compose";\nimport { withFetchWork } from "./withFetchWork";\nimport { withWindowDimensions } from "./withWindowDimensions";\n\n/** Data URL of work.json */\nconst workURL = "https://vrlab-public.ljcdn.com/release/static/image/release/five/work-sample/07bdc58f413bc5494f05c7cbb5cbdce4/work.json";\n\nconst FiveProvider = createFiveProvider();\n\nconst App = compose(\n  withFetchWork(workURL),\n  withWindowDimensions()\n)(class extends Component<{work: Work, windowDimensions: { width: number, height: number }}> {\n  render() {\n    const { work, windowDimensions } = this.props;\n    return <FiveProvider initialWork={work}>\n      <FiveCanvas width={windowDimensions.width} height={windowDimensions.height}/>\n    </FiveProvider>;\n  }\n});\n\n\nexport { App };\n')),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"src/0.getting-started/index.tsx")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-tsx"},'import React from "react";\nimport ReactDOM from "react-dom";\nimport { App } from "./App";\n\nReactDOM.render(<App/>, document.querySelector("#app"));\n\nexport {};\n')))),(0,o.kt)("p",null,"It is not more comfortable.Each document is succinct and easy to understand their respective roles."),(0,o.kt)("h2",{id:"the-next-section-will-be-completed-by-you"},"The next section will be completed by you"),(0,o.kt)("admonition",{title:"Next section will be successful",type:"tip"},(0,o.kt)("ul",{parentName:"admonition"},(0,o.kt)("li",{parentName:"ul"},"Learn what is working."),(0,o.kt)("li",{parentName:"ul"},"Learn how to work with the code just now, such as ",(0,o.kt)("inlineCode",{parentName:"li"},"FiveProvider")," / ",(0,o.kt)("inlineCode",{parentName:"li"},"FveCanvas"),"."))))}u.isMDXComponent=!0}}]);