"use strict";(self.webpackChunkrealsee_developer_github_com=self.webpackChunkrealsee_developer_github_com||[]).push([[6175],{49613:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>m});var r=n(59496);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),p=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=p(e.components);return r.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),u=p(n),m=a,k=u["".concat(l,".").concat(m)]||u[m]||d[m]||o;return n?r.createElement(k,i(i({ref:t},c),{},{components:n})):r.createElement(k,i({ref:t},c))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=u;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:a,i[1]=s;for(var p=2;p<o;p++)i[p]=n[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},45558:(e,t,n)=>{n.d(t,{Z:()=>i});var r=n(59496),a=n(45924);const o="tabItem_IPoj";function i(e){let{children:t,hidden:n,className:i}=e;return r.createElement("div",{role:"tabpanel",className:(0,a.Z)(o,i),hidden:n},t)}},38637:(e,t,n)=>{n.d(t,{Z:()=>m});var r=n(2962),a=n(59496),o=n(45924),i=n(26709),s=n(33548),l=n(14714),p=n(60411);const c="tabList_xr86",d="tabItem_r4_W";function u(e){var t;const{lazy:n,block:i,defaultValue:u,values:m,groupId:k,className:h}=e,g=a.Children.map(e.children,(e=>{if((0,a.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})),f=m??g.map((e=>{let{props:{value:t,label:n,attributes:r}}=e;return{value:t,label:n,attributes:r}})),v=(0,s.l)(f,((e,t)=>e.value===t.value));if(v.length>0)throw new Error(`Docusaurus error: Duplicate values "${v.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`);const w=null===u?u:u??(null==(t=g.find((e=>e.props.default)))?void 0:t.props.value)??g[0].props.value;if(null!==w&&!f.some((e=>e.value===w)))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${w}" but none of its children has the corresponding value. Available values are: ${f.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);const{tabGroupChoices:b,setTabGroupChoices:y}=(0,l.U)(),[N,x]=(0,a.useState)(w),W=[],{blockElementScrollPositionUntilNextRender:j}=(0,p.o5)();if(null!=k){const e=b[k];null!=e&&e!==N&&f.some((t=>t.value===e))&&x(e)}const F=e=>{const t=e.currentTarget,n=W.indexOf(t),r=f[n].value;r!==N&&(j(t),x(r),null!=k&&y(k,String(r)))},T=e=>{var t;let n=null;switch(e.key){case"Enter":F(e);break;case"ArrowRight":{const t=W.indexOf(e.currentTarget)+1;n=W[t]??W[0];break}case"ArrowLeft":{const t=W.indexOf(e.currentTarget)-1;n=W[t]??W[W.length-1];break}}null==(t=n)||t.focus()};return a.createElement("div",{className:(0,o.Z)("tabs-container",c)},a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":i},h)},f.map((e=>{let{value:t,label:n,attributes:i}=e;return a.createElement("li",(0,r.Z)({role:"tab",tabIndex:N===t?0:-1,"aria-selected":N===t,key:t,ref:e=>W.push(e),onKeyDown:T,onClick:F},i,{className:(0,o.Z)("tabs__item",d,null==i?void 0:i.className,{"tabs__item--active":N===t})}),n??t)}))),n?(0,a.cloneElement)(g.filter((e=>e.props.value===N))[0],{className:"margin-top--md"}):a.createElement("div",{className:"margin-top--md"},g.map(((e,t)=>(0,a.cloneElement)(e,{key:t,hidden:e.props.value!==N})))))}function m(e){const t=(0,i.Z)();return a.createElement(u,(0,r.Z)({key:String(t)},e))}},20572:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>l,default:()=>m,frontMatter:()=>s,metadata:()=>p,toc:()=>d});var r=n(2962),a=(n(59496),n(49613)),o=n(38637),i=n(45558);const s={title:"Beginning"},l=void 0,p={unversionedId:"front/3d-space/handbook/react-hooks/get-started",id:"front/3d-space/handbook/react-hooks/get-started",title:"Beginning",description:"Integrate Five development through Function Components and Hooks patterns on React framework, complete source code example\uff1aJavaScript | TypeScript",source:"@site/i18n/en/docusaurus-plugin-content-docs/current/front/3d-space/handbook/react-hooks/0.get-started.md",sourceDirName:"front/3d-space/handbook/react-hooks",slug:"/front/3d-space/handbook/react-hooks/get-started",permalink:"/en/docs/front/3d-space/handbook/react-hooks/get-started",draft:!1,tags:[],version:"current",lastUpdatedBy:"sansi.lcj",lastUpdatedAt:1669717185,formattedLastUpdatedAt:"Nov 29, 2022",sidebarPosition:0,frontMatter:{title:"Beginning"},sidebar:"\u4e09\u7ef4\u7a7a\u95f4",previous:{title:"Tag",permalink:"/en/docs/front/3d-space/handbook/react-hoc/tagging"},next:{title:"Show 3D space",permalink:"/en/docs/front/3d-space/handbook/react-hooks/displaying-work"}},c={},d=[{value:"Preparatory work",id:"preparatory-work",level:2},{value:"Development environment",id:"development-environment",level:3},{value:"Use development build tool",id:"use-development-build-tool",level:3},{value:"Create HTML File",id:"create-html-file",level:3},{value:"Write test logical code",id:"write-test-logical-code",level:3},{value:"Install dependencies from npm",id:"install-dependencies-from-npm",level:2},{value:"Render a three-dimensional space",id:"render-a-three-dimensional-space",level:2},{value:"Load 3D space",id:"load-3d-space",level:3},{value:"Make the screen full",id:"make-the-screen-full",level:3},{value:"Split Code",id:"split-code",level:2},{value:"The next section will be completed by you",id:"the-next-section-will-be-completed-by-you",level:2}],u={toc:d};function m(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"Integrate ",(0,a.kt)("strong",{parentName:"p"},"Five")," development through ",(0,a.kt)("strong",{parentName:"p"},"Function Components and Hooks")," patterns on ",(0,a.kt)("strong",{parentName:"p"},"React")," framework, complete source code example\uff1a",(0,a.kt)("a",{parentName:"p",href:"https://github.com/realsee-developer/five-sdk-javascript-esmodule-react-hooks-tutorial"},"JavaScript")," | ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/realsee-developer/five-sdk-typescript-react-hooks-tutorial"},"TypeScript"))),(0,a.kt)("admonition",{title:"This chapter can learn to",type:"tip"},(0,a.kt)("ul",{parentName:"admonition"},(0,a.kt)("li",{parentName:"ul"},"Preparation for the development environment."),(0,a.kt)("li",{parentName:"ul"},"How to introduce ",(0,a.kt)("strong",{parentName:"li"},"Five")," SDK."),(0,a.kt)("li",{parentName:"ul"},"Show a three-dimensional space to the screen."))),(0,a.kt)("h2",{id:"preparatory-work"},"Preparatory work"),(0,a.kt)("h3",{id:"development-environment"},"Development environment"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"You need to prepare a modern browser.")),(0,a.kt)("admonition",{type:"info"},(0,a.kt)("p",{parentName:"admonition"},(0,a.kt)("strong",{parentName:"p"},"Five")," Browser supports the following, please choose one of your families\uff1a"),(0,a.kt)("table",{parentName:"admonition"},(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:"center"},"Safari"),(0,a.kt)("th",{parentName:"tr",align:"center"},"Safari on iOS"),(0,a.kt)("th",{parentName:"tr",align:"right"},"Chrome"),(0,a.kt)("th",{parentName:"tr",align:"center"},"Chrome for Android"),(0,a.kt)("th",{parentName:"tr",align:"center"},"Edge"),(0,a.kt)("th",{parentName:"tr",align:"center"},"Firefox"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"center"},">= 9"),(0,a.kt)("td",{parentName:"tr",align:"center"},">= 9"),(0,a.kt)("td",{parentName:"tr",align:"right"},">= 49"),(0,a.kt)("td",{parentName:"tr",align:"center"},">= 93"),(0,a.kt)("td",{parentName:"tr",align:"center"},">= 13"),(0,a.kt)("td",{parentName:"tr",align:"center"},">= 45"))))),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"You need to install ",(0,a.kt)("a",{parentName:"li",href:"https://nodejs.org/"},"Node.js"),"and ",(0,a.kt)("inlineCode",{parentName:"li"},"Node.js")," version of subdue >= 12.x in order to avoid historical compatibility problems.")),(0,a.kt)("h3",{id:"use-development-build-tool"},"Use development build tool"),(0,a.kt)("p",null,"This example is initialized by ",(0,a.kt)("a",{parentName:"p",href:"https://vitejs.dev/"},"Vite"),"You can initialize yourself with the code below."),(0,a.kt)(o.Z,{mdxType:"Tabs"},(0,a.kt)(i.Z,{value:"JavaScript",label:"JavaScript",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"# npm 6.x\nnpm create vite@latest my-vue-app --template react\n\n# npm 7+, extra double-dash is needed:\nnpm create vite@latest my-vue-app -- --template react\n"))),(0,a.kt)(i.Z,{value:"TypeScript",label:"TypeScript",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"# npm 6.x\nnpm create vite@latest my-vue-app --template react-ts\n\n# npm 7+, extra double-dash is needed:\nnpm create vite@latest my-vue-app -- --template react-ts\n")))),(0,a.kt)("p",null,"Create the directory ",(0,a.kt)("inlineCode",{parentName:"p"},"src/0.getting-started"),"for this tutorial under ",(0,a.kt)("inlineCode",{parentName:"p"},"src"),"."),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"Each tutorial creates a new directory as a record that can be summarized and traced.This directory structure will be available when the course ends")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"src\n\u251c\u2500\u2500 0.getting-started\n\u251c\u2500\u2500 1.displaying-work\n\u251c\u2500\u2500 2.knowing-state\n...\n\n")),(0,a.kt)("p",null,"The full code sample is also such a directory structure that you can always consult at any time."),(0,a.kt)("admonition",{type:"tip"},(0,a.kt)("p",{parentName:"admonition"},"If you are familiar with other development building tools such as ",(0,a.kt)("inlineCode",{parentName:"p"},"Webpack")," ",(0,a.kt)("inlineCode",{parentName:"p"},"Snowpack")," ",(0,a.kt)("inlineCode",{parentName:"p"},"parcel")," you can also use them.")),(0,a.kt)("h3",{id:"create-html-file"},"Create HTML File"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-html",metastring:'title="src/0.getting-started/index.html"',title:'"src/0.getting-started/index.html"'},'<!DOCTYPE html>\n<html lang="en">\n<head>\n  <meta charset="UTF-8">\n  <link rel="icon" href="data:;base64,iVBORw0KGgo=">\n  <meta name="viewport" content="width=device-width, initial-scale=1.0">\n  <title>started| Getting started</title>\n  \x3c!-- highlight-start --\x3e\n  <style>\n    * { margin: 0; padding: 0; }\n    html, body, #app { width: 100%; height: 100%; overflow: hidden; }\n  </style>\n  \x3c!-- highlight-end --\x3e\n</head>\n<body>\n  \x3c!-- highlight-start --\x3e\n  <div id="app"></div>\n  <script type="module" src="./index"><\/script>\n  \x3c!-- highlight-end --\x3e\n</body>\n</html>\n')),(0,a.kt)("p",null,"Using direct import ",(0,a.kt)("inlineCode",{parentName:"p"},'<script type="module" src="./index"><\/script>')," is a feature of ",(0,a.kt)("a",{parentName:"p",href:"https://vitejs.dev/"},"Vite")," , If you use other development and construction tools, please handle code import and entry files by yourself. Like ",(0,a.kt)("inlineCode",{parentName:"p"},"Webpack")," using ",(0,a.kt)("inlineCode",{parentName:"p"},"HtmlWebpackPlugin")," and more."),(0,a.kt)("h3",{id:"write-test-logical-code"},"Write test logical code"),(0,a.kt)("p",null,"We first create a simple Hello World to ensure that the whole code is running."),(0,a.kt)(o.Z,{mdxType:"Tabs"},(0,a.kt)(i.Z,{value:"JavaScript",label:"JavaScript",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-jsx",metastring:'title="rc/0.getting-started/index.jsx"',title:'"rc/0.getting-started/index.jsx"'},'const app = document.querySelector("#app");\n// highlight-start\napp.innerHTML = "Hello World.";\n// highlight-end\nexport {};\n'))),(0,a.kt)(i.Z,{value:"TypeScript",label:"TypeScript",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx",metastring:'title="src/0.getting-started/index.tsx"',title:'"src/0.getting-started/index.tsx"'},'const app = document.querySelector("#app")!;\n// highlight-start\napp.innerHTML = "Hello World.";\n// highlight-end\nexport {};\n')))),(0,a.kt)("p",null,"Last ",(0,a.kt)("inlineCode",{parentName:"p"},"export {};")," because ",(0,a.kt)("a",{parentName:"p",href:"https://vitejs.dev/"},"Vite")," uses ",(0,a.kt)("inlineCode",{parentName:"p"},'type="module"')," to introduce, each file needs to be a ",(0,a.kt)("inlineCode",{parentName:"p"},"module"),", needs ",(0,a.kt)("inlineCode",{parentName:"p"},"export"),". If you use other development build tools, please write them as required by your own development build."),(0,a.kt)("p",null,"Start service ",(0,a.kt)("inlineCode",{parentName:"p"},"npm run dev"),' and jump to the current page "http://localhost:3000/src/0.getting-started/index.html".'),(0,a.kt)("admonition",{type:"info"},(0,a.kt)("p",{parentName:"admonition"},"Please see your console. The port number will change due to your configuration and current port occupancy, please check the console output. If you use another development build tool, please start the service as required by your own development build tool.")),(0,a.kt)("p",null,"Then you will see it on the page"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"Hello World.\n")),(0,a.kt)("p",null,"This output indicates that the development of build tools has been completed."),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"The next sections will not elaborate further on the above steps and please do so together.")),(0,a.kt)("h2",{id:"install-dependencies-from-npm"},"Install dependencies from npm"),(0,a.kt)("p",null,"Install dependency in your project directory"),(0,a.kt)(o.Z,{mdxType:"Tabs"},(0,a.kt)(i.Z,{value:"JavaScript",label:"JavaScript",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"npm install @realsee/five three\n.117 react react-domain\n")),(0,a.kt)("p",null,"relying on needs"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://npmjs.com/@realsee/five"},(0,a.kt)("strong",{parentName:"a"},"@realsee/five"))," ",(0,a.kt)("strong",{parentName:"li"},"Five")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://npmjs.com/three"},(0,a.kt)("strong",{parentName:"a"},"three"))," three.js is Five dependency graphs/mathematical library. Currently please use version\nof 0.117.x - ",(0,a.kt)("a",{parentName:"li",href:"https://npmjs.com/react"},(0,a.kt)("strong",{parentName:"a"},"react"))," React Framework"),(0,a.kt)("li",{parentName:"ul"},"[",(0,a.kt)("strong",{parentName:"li"},"react-dom"),"]","(",(0,a.kt)("a",{parentName:"li",href:"https://npmjs.com/"},"https://npmjs.com/")," react-dom) Browser-side renderer for React"))),(0,a.kt)(i.Z,{value:"TypeScript",label:"TypeScript",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"npm install @realsee/five three\n.117 react react-dom @types/react @types/react-dome\n")),(0,a.kt)("p",null,"relies on"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://npmjs.com/@realsee/five"},(0,a.kt)("strong",{parentName:"a"},"@realsee/five")),(0,a.kt)("strong",{parentName:"li"},"Five")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://npmjs.com/three"},(0,a.kt)("strong",{parentName:"a"},"three"))," three.js is Five dependencies/mathematical library. Currently please use version 0.117.x of"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://npmjs.com/react"},(0,a.kt)("strong",{parentName:"a"},"react"))," React Framework"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://npmjs.com/react-dom"},(0,a.kt)("strong",{parentName:"a"},"react-dom"))," browser renderer"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://npmjs.com/@types/react"},(0,a.kt)("strong",{parentName:"a"},"@types/react"))," typescript type declaration for React Framework"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://npmjs.com/@types/react-dom"},(0,a.kt)("strong",{parentName:"a"},"@types/react-dom"))," React")))),(0,a.kt)("admonition",{type:"info"},(0,a.kt)("p",{parentName:"admonition"},"If using npm install install to install dependencies, try adding --force command :")),(0,a.kt)("h2",{id:"render-a-three-dimensional-space"},"Render a three-dimensional space"),(0,a.kt)("p",null,"It's time to render a VR scene to see"),(0,a.kt)("h3",{id:"load-3d-space"},"Load 3D space"),(0,a.kt)("p",null,"Delete your previous ",(0,a.kt)("inlineCode",{parentName:"p"},"Hello World"),".We shall rewrite. You can first fail to understand what the code will mean, and you will learn from the next chapter."),(0,a.kt)(o.Z,{mdxType:"Tabs"},(0,a.kt)(i.Z,{value:"JavaScript",label:"JavaScript",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-jsx",metastring:'title="src/0.getting-started/index.jsx"',title:'"src/0.getting-started/index.jsx"'},'import React, { useState, useEffect } from "react";\nimport ReactDOM from "react-dom";\nimport { parseWork } from "@realsee/five";\nimport { createFiveProvider, FiveCanvas } from "@realsee/five/react";\n\n// data URL of work.json\nconst workURL = "https://vrlab-public.ljcdn.com/release/static/image/release/five/work-sample/07bdc58f413bc5494f05c7cbb5cbdce4/work.json";\n\n/**\n * React Hook: get the work object through the address of work.json\n * @param url the data address of work.json\n * @returns the work object, if it is getting, return null\n */\nfunction useFetchWork(url) {\n  const [work, setWork] = useState(null);\n  useEffect(() => {\n    setWork(null);\n    fetch(url)\n      .then(response => response.text())\n      .then(text => setWork(parseWork(text)));\n  },[url]);\n  return work;\n}\n\nconst FiveProvider = createFiveProvider();\nconst App = () => {\n  const work = useFetchWork(workURL);\n  return work && <FiveProvider initialWork={work}>\n    <FiveCanvas width={512} height={512}/>\n  </FiveProvider>;\n};\n\nReactDOM.render(<App/>, document.querySelector("#app"));\n\nexport {};\n'))),(0,a.kt)(i.Z,{value:"TypeScript",label:"TypeScript",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx",metastring:'title="src/0.getting-started/index.tsx"',title:'"src/0.getting-started/index.tsx"'},'import React, { FC, useState, useEffect } from "react";\nimport ReactDOM from "react-dom";\nimport { Work, parseWork } from "@realsee/five";\nimport { createFiveProvider, FiveCanvas } from "@realsee/five/react";\n\n/** work. Son data URL */\nconst workURL = "https://vrlab-public.ljcdn.com/release/static/image/release/five/work-sample/07bdc58f413bc5494f05c7cbb5cbdce4/work.json";\n\n/**\n React Hook: get work object via work.json address\n * @param url work. Son\'s data address\n * @returns work object, if fetched, return null\n */\nfunction useFetchWork(url: string) {\n  const [work, setWork] = useState<Work | null>(null);\n  useEffect(() => {\n    setWork(null);\n    fetch(url)\n      .then(response => response.text())\n      .then(text => setWork(parseWork(text)));\n  },[url]);\n  return work;\n}\n\nconst FiveProvider = createFiveProvider();\nconst App: FC = () => {\n  const work = useFetchWork(workURL);\n  return work && <FiveProvider initialWork={work}>\n    <FiveCanvas width={512} height={512}/>\n  </FiveProvider>;\n};\n\nReactDOM.render(<App/>, document.querySelector("#app"));\n\nexport {};\n')))),(0,a.kt)("p",null,"Go back to your browser, see if there is already a three-dimensional position displayed on the left. You can use the mouse or touch the gesture. Basic browsing features are attached."),(0,a.kt)("h3",{id:"make-the-screen-full"},"Make the screen full"),(0,a.kt)("p",null,"While the working principles of the above code may not be fully understood, we can see ",(0,a.kt)("inlineCode",{parentName:"p"},"FiveCanvas")," affected by ",(0,a.kt)("inlineCode",{parentName:"p"},"width")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"height")," properties, very much like the size of the picture.This guess is also supported by the position of the picture in the upper left corner of the browser.Yes, they are used to set screen size."),(0,a.kt)("p",null,"That's how we try to use React Hooks with our familiarity and lay it over the screen."),(0,a.kt)(o.Z,{mdxType:"Tabs"},(0,a.kt)(i.Z,{value:"JavaScript",label:"JavaScript",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-jsx",metastring:'title="src/0.getting-started/index.jsx"',title:'"src/0.getting-started/index.jsx"'},'import React, { useState, useEffect } from "react";\nimport ReactDOM from "react-dom";\nimport { parseWork } from "@realsee/five";\nimport { createFiveProvider, FiveCanvas } from "@realsee/five/react";\n\n/** data URL of work.json */\nconst workURL = "https://vrlab-public.ljcdn.com/release/static/image/release/five/work-sample/07bdc58f413bc5494f05c7cbb5cbdce4/work.json";\n\n/**\n * React Hook: Get the work object through the address of work.json\n * @param url the data address of work.json\n * @returns work object, if Fetching, return null\n */\nfunction useFetchWork(url) {\n  const [work, setWork] = useState(null);\n  useEffect(() => {\n    setWork(null);\n    fetch(url)\n      .then(response => response.text())\n      .then(text => setWork(parseWork(text)));\n  },[url]);\n  return work;\n}\n\n// highlight-start\n/**\n * Get the size of the current window\n */\nfunction getWindowDimensions() {\n  return { width: window.innerWidth, height: window.innerHeight };\n}\n\n/**\n * React Hook: Get the size of the current window\n */\nfunction useWindowDimensions() {\n  const [size, setSize] = useState(getWindowDimensions);\n  useEffect(() => {\n    const listener = () => setSize(getWindowDimensions());\n    window.addEventListener("resize", listener, false);\n    return () => window.removeEventListener("resize", listener, false);\n  });\n  return size;\n}\n// highlight-end\n\nconst FiveProvider = createFiveProvider();\nconst App = () => {\n  const work = useFetchWork(workURL);\n  // highlight-start\n  const size = useWindowDimensions();\n  // highlight-end\n  return work && <FiveProvider initialWork={work}>\n    // highlight-start\n    <FiveCanvas {...size}/>\n    // highlight-end\n  </FiveProvider>;\n};\n\nReactDOM.render(<App/>, document.querySelector("#app"));\n\nexport {};\n'))),(0,a.kt)(i.Z,{value:"TypeScript",label:"TypeScript",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx",metastring:'title="src/0.getting-started/index.tsx"',title:'"src/0.getting-started/index.tsx"'},'import React, { FC, useState, useEffect } from "react";\nimport ReactDOM from "react-dom";\nimport { Work, parseWork } from "@realsee/five";\nimport { createFiveProvider, FiveCanvas } from "@realsee/five/react";\n\n/** work. Son data URL */\nconst workURL = "https://vrlab-public.ljcdn.com/release/static/image/release/five/work-sample/07bdc58f413bc5494f05c7cbb5cbdce4/work.json";\n\n/**\n React Hook: get work object via work.json address\n * @param url work. Son\'s data address\n * @returns work object, if fetched, return null\n */\nfunction useFetchWork(url: string) {\n  const [work, setWork] = useState<Work | null>(null);\n  useEffect(() => {\n    setWork(null);\n    fetch(url)\n      .then(response => response.text())\n      .then(text => setWork(parseWork(text)));\n  },[url]);\n  return work;\n}\n\n// highlight-start\n/**\n * Get the size of the current window\n */\nfunction getWindowDimensions() {\n  return { width: window.innerWidth, height: window.innerHeight };\n}\n\n/**\n * React Hook: Get the size of the current window\n */\nfunction useWindowDimensions() {\n  const [size, setSize] = useState(getWindowDimensions);\n  useEffect(() => {\n    const listener = () => setSize(getWindowDimensions());\n    window.addEventListener("resize", listener, false);\n    return () => window.removeEventListener("resize", listener, false);\n  });\n  return size;\n}\n/ / highlight-end\n\nconst FiveProvider = createFiveProvider();\nconst App: FC = () => {\n  const work = useFetchWork(workURL);\n  // highlight-start\n  const size = useWindowDimensions();\n  // highlight-end\n  return work && <FiveProvider initialWork={work}>\n    // highlight-start\n    <FiveCanvas {...size}/>\n    // highlight-end\n  </FiveProvider>;\n};\n\nReactDOM.render(<App/>, document.querySelector("#app"));\n\nexport {};\n')))),(0,a.kt)("p",null,"Go back to your browser and see if it does not meet expectations."),(0,a.kt)("p",null,"Your stick\ud83e\udd73 !"),(0,a.kt)("h2",{id:"split-code"},"Split Code"),(0,a.kt)("p",null,"All our codes are currently written in a ",(0,a.kt)("strong",{parentName:"p"},"js")," / ",(0,a.kt)("strong",{parentName:"p"},"ts")," file.While all logic can be seen at first glance, it is more confusing.The splitting of content into more than one document will improve this."),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Split ",(0,a.kt)("inlineCode",{parentName:"li"},"App")," to separate files."),(0,a.kt)("li",{parentName:"ul"},"Split ",(0,a.kt)("inlineCode",{parentName:"li"},"useFetchWork")," methods into separate files."),(0,a.kt)("li",{parentName:"ul"},"Split ",(0,a.kt)("inlineCode",{parentName:"li"},"to separate files using Windows Dimensions"),".")),(0,a.kt)(o.Z,{mdxType:"Tabs"},(0,a.kt)(i.Z,{value:"JavaScript",label:"JavaScript",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js",metastring:'title="src/0.getting-started/useFetchWork.js"',title:'"src/0.getting-started/useFetchWork.js"'},'import { useState, useEffect } from "react";\nimport { parseWork } from "@realsee/five";\n\n/**\n * React Hook: \u901a\u8fc7 work.json \u7684\u5730\u5740 \u83b7\u53d6 work \u5bf9\u8c61\n * @param url work.json \u7684\u6570\u636e\u5730\u5740\n * @returns work \u5bf9\u8c61\uff0c\u5982\u679c\u83b7\u53d6\u4e2d\uff0c\u8fd4\u56de null\n */\n function useFetchWork(url) {\n  const [work, setWork] = useState(null);\n  useEffect(() => {\n    setWork(null);\n    fetch(url)\n      .then(response => response.text())\n      .then(text => setWork(parseWork(text)));\n  },[url]);\n  return work;\n}\n\nexport { useFetchWork };\n')),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js",metastring:'title="src/0.getting-started/useWindowDimensions.js"',title:'"src/0.getting-started/useWindowDimensions.js"'},'import { useState, useEffect } from "react";\n\n/**\n * \u83b7\u53d6\u5f53\u524d\u7a97\u53e3\u7684\u5c3a\u5bf8\n */\n function getWindowDimensions() {\n  return { width: window.innerWidth, height: window.innerHeight };\n}\n\n/**\n * React Hook: \u83b7\u53d6\u5f53\u524d\u7a97\u53e3\u7684\u5c3a\u5bf8\n */\nfunction useWindowDimensions() {\n  const [size, setSize] = useState(getWindowDimensions);\n  useEffect(() => {\n    const listener = () => setSize(getWindowDimensions());\n    window.addEventListener("resize", listener, false);\n    return () => window.removeEventListener("resize", listener, false);\n  });\n  return size;\n}\n\nexport { useWindowDimensions };\n')),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-jsx",metastring:'title="src/0.getting-started/App.jsx"',title:'"src/0.getting-started/App.jsx"'},'import React from "react";\nimport { createFiveProvider, FiveCanvas } from "@realsee/five/react";\nimport { useFetchWork } from "./useFetchWork";\nimport { useWindowDimensions } from "./useWindowDimensions";\n\n/** work.json \u7684\u6570\u636e URL */\nconst workURL = "https://vrlab-public.ljcdn.com/release/static/image/release/five/work-sample/07bdc58f413bc5494f05c7cbb5cbdce4/work.json";\n\nconst FiveProvider = createFiveProvider();\nconst App = () => {\n  const work = useFetchWork(workURL);\n  const size = useWindowDimensions();\n  return work && <FiveProvider initialWork={work}>\n    <FiveCanvas {...size}>\n  </FiveProvider>;\n};\n\nexport { App };\n')),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-jsx",metastring:'title="src/0.getting-started/index.jsx"',title:'"src/0.getting-started/index.jsx"'},'import React from "react";\nimport ReactDOM from "react-dom";\nimport { App } from "./App";\n\nReactDOM.render(<App/>, document.querySelector("#app"));\n\nexport {};\n'))),(0,a.kt)(i.Z,{value:"TypeScript",label:"TypeScript",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts",metastring:'title="src/0.getting-started/useFetchWork.ts"',title:'"src/0.getting-started/useFetchWork.ts"'},'import { useState, useEffect } from "react";\nimport { Work, parseWork } from "@realsee/five";\n\n/**\n * React Hook: through work. Son addresses get work object\n * @param url work. Son data address\n * @returns work object if fetching, Recall null\n */\n function useFetchWork (url: string) maximum\n  const [work, setWork] = useState<Work | null>(null);\n  useEffect(() => {\n    setWork(null);\n    fetch(url)\n      .then(response => response.text())\n      .then(text => setWork(parseWork(text)));\n  },[url]);\n  return work;\n}\n\nexport { useFetchWork };\n')),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts",metastring:'title="src/0.getting-started/useWindowDimensions.ts"',title:'"src/0.getting-started/useWindowDimensions.ts"'},'import { useState, useEffect } from "react";\n\n/**\n * Get the size of the current window\n */\n function getWindowDimensions() {\n  return { width: window.innerWidth, height: window.innerHeight };\n}\n\n/**\n * React Hook: Get the size of the current window\n */\nfunction useWindowDimensions() {\n  const [size, setSize] = useState(getWindowDimensions);\n  useEffect(() => {\n    const listener = () => setSize(getWindowDimensions());\n    window.addEventListener("resize", listener, false);\n    return () => window.removeEventListener("resize", listener, false);\n  });\n  return size;\n}\n\nexport { useWindowDimensions };\n')),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx",metastring:'title="src/0.getting-started/App.tsx"',title:'"src/0.getting-started/App.tsx"'},'import React, { FC } from "react";\nimport { createFiveProvider, FiveCanvas } from "@realsee/five/react";\nimport { useFetchWork } from "./useFetchWork";\nimport { useWindowDimensions } from "./useWindowDimensions";\n\n/** data URL of work.json */\nconst workURL = "https://vrlab-public.ljcdn.com/release/static/image/release/five/work-sample/07bdc58f413bc5494f05c7cbb5cbdce4/work.json";\n\nconst FiveProvider = createFiveProvider();\nconst App: FC = () = > {\n  const work = useFetchWork(workURL);\n  const size = useWindowDimensions();\n  return work && <FiveProvider initialWork={work}>\n    <FiveCanvas {...size}/>\n  </FiveProvider>;\n};\n\nexport { App };\n')),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx",metastring:'title="src/0.getting-started/index.tsx"',title:'"src/0.getting-started/index.tsx"'},'import React from "react";\nimport ReactDOM from "react-dom";\nimport { App } from "./App";\n\nReactDOM.render(<App/>, document.querySelector("#app"));\n\nexport {};\n')))),(0,a.kt)("p",null,"It is not more comfortable.Each document is succinct and easy to understand their respective roles."),(0,a.kt)("h2",{id:"the-next-section-will-be-completed-by-you"},"The next section will be completed by you"),(0,a.kt)("admonition",{title:"Next section will be successful",type:"tip"},(0,a.kt)("ul",{parentName:"admonition"},(0,a.kt)("li",{parentName:"ul"},"Learn what is working."),(0,a.kt)("li",{parentName:"ul"},"Learn how to work with the code just now, such as ",(0,a.kt)("inlineCode",{parentName:"li"},"FiveProvider")," / ",(0,a.kt)("inlineCode",{parentName:"li"},"FveCanvas"),"."))))}m.isMDXComponent=!0}}]);