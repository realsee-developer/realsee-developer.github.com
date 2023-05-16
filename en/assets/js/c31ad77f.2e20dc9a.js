"use strict";(self.webpackChunkrealsee_developer_github_com=self.webpackChunkrealsee_developer_github_com||[]).push([[6430],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>h});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),p=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},d=function(e){var t=p(e.components);return r.createElement(s.Provider,{value:t},e.children)},c="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),c=p(n),m=a,h=c["".concat(s,".").concat(m)]||c[m]||u[m]||i;return n?r.createElement(h,o(o({ref:t},d),{},{components:n})):r.createElement(h,o({ref:t},d))}));function h(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[c]="string"==typeof e?e:a,o[1]=l;for(var p=2;p<i;p++)o[p]=n[p];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},85162:(e,t,n)=>{n.d(t,{Z:()=>o});var r=n(67294),a=n(86010);const i={tabItem:"tabItem_Ymn6"};function o(e){let{children:t,hidden:n,className:o}=e;return r.createElement("div",{role:"tabpanel",className:(0,a.Z)(i.tabItem,o),hidden:n},t)}},65488:(e,t,n)=>{n.d(t,{Z:()=>u});var r=n(87462),a=n(67294),i=n(86010),o=n(72389),l=n(67392),s=n(7094),p=n(12466);const d={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};function c(e){const{lazy:t,block:n,defaultValue:o,values:c,groupId:u,className:m}=e,h=a.Children.map(e.children,(e=>{if((0,a.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})),v=c??h.map((e=>{let{props:{value:t,label:n,attributes:r}}=e;return{value:t,label:n,attributes:r}})),g=(0,l.l)(v,((e,t)=>e.value===t.value));if(g.length>0)throw new Error(`Docusaurus error: Duplicate values "${g.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`);const k=null===o?o:o??h.find((e=>e.props.default))?.props.value??h[0].props.value;if(null!==k&&!v.some((e=>e.value===k)))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${k}" but none of its children has the corresponding value. Available values are: ${v.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);const{tabGroupChoices:f,setTabGroupChoices:b}=(0,s.U)(),[w,y]=(0,a.useState)(k),N=[],{blockElementScrollPositionUntilNextRender:x}=(0,p.o5)();if(null!=u){const e=f[u];null!=e&&e!==w&&v.some((t=>t.value===e))&&y(e)}const T=e=>{const t=e.currentTarget,n=N.indexOf(t),r=v[n].value;r!==w&&(x(t),y(r),null!=u&&b(u,String(r)))},C=e=>{let t=null;switch(e.key){case"Enter":T(e);break;case"ArrowRight":{const n=N.indexOf(e.currentTarget)+1;t=N[n]??N[0];break}case"ArrowLeft":{const n=N.indexOf(e.currentTarget)-1;t=N[n]??N[N.length-1];break}}t?.focus()};return a.createElement("div",{className:(0,i.Z)("tabs-container",d.tabList)},a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,i.Z)("tabs",{"tabs--block":n},m)},v.map((e=>{let{value:t,label:n,attributes:o}=e;return a.createElement("li",(0,r.Z)({role:"tab",tabIndex:w===t?0:-1,"aria-selected":w===t,key:t,ref:e=>N.push(e),onKeyDown:C,onClick:T},o,{className:(0,i.Z)("tabs__item",d.tabItem,o?.className,{"tabs__item--active":w===t})}),n??t)}))),t?(0,a.cloneElement)(h.filter((e=>e.props.value===w))[0],{className:"margin-top--md"}):a.createElement("div",{className:"margin-top--md"},h.map(((e,t)=>(0,a.cloneElement)(e,{key:t,hidden:e.props.value!==w})))))}function u(e){const t=(0,o.Z)();return a.createElement(c,(0,r.Z)({key:String(t)},e))}},34436:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>s,default:()=>h,frontMatter:()=>l,metadata:()=>p,toc:()=>c});var r=n(87462),a=(n(67294),n(3905)),i=n(65488),o=n(85162);const l={title:"Beginning"},s=void 0,p={unversionedId:"front/3d-space/handbook/vue/get-started",id:"front/3d-space/handbook/vue/get-started",title:"Beginning",description:"Integrate Five development through Composition API mode on Vue framework, complete source code example\uff1aJavaScript | TypeScript",source:"@site/i18n/en/docusaurus-plugin-content-docs/current/front/3d-space/handbook/vue/0.get-started.md",sourceDirName:"front/3d-space/handbook/vue",slug:"/front/3d-space/handbook/vue/get-started",permalink:"/en/docs/front/3d-space/handbook/vue/get-started",draft:!1,tags:[],version:"current",lastUpdatedBy:"sansi.lcj",lastUpdatedAt:1669717185,formattedLastUpdatedAt:"Nov 29, 2022",sidebarPosition:0,frontMatter:{title:"Beginning"},sidebar:"\u4e09\u7ef4\u7a7a\u95f4",previous:{title:"Tag",permalink:"/en/docs/front/3d-space/handbook/react-hooks/tagging"},next:{title:"Show 3D space",permalink:"/en/docs/front/3d-space/handbook/vue/displaying-work"}},d={},c=[{value:"Preparatory work",id:"preparatory-work",level:2},{value:"Development environment",id:"development-environment",level:3},{value:"Use development build tool",id:"use-development-build-tool",level:3},{value:"Create HTML File",id:"create-html-file",level:3},{value:"Write test logical code",id:"write-test-logical-code",level:3},{value:"Install dependencies from npm",id:"install-dependencies-from-npm",level:2},{value:"Test Vue Component",id:"test-vue-component",level:3},{value:"Render a three-dimensional space",id:"render-a-three-dimensional-space",level:2},{value:"Load 3D space",id:"load-3d-space",level:3},{value:"Make the screen full",id:"make-the-screen-full",level:3},{value:"Split Code",id:"split-code",level:2},{value:"The next section will be completed by you",id:"the-next-section-will-be-completed-by-you",level:2}],u={toc:c},m="wrapper";function h(e){let{components:t,...n}=e;return(0,a.kt)(m,(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"Integrate ",(0,a.kt)("strong",{parentName:"p"},"Five")," development through ",(0,a.kt)("strong",{parentName:"p"},"Composition API")," mode on ",(0,a.kt)("strong",{parentName:"p"},"Vue")," framework, complete source code example\uff1a",(0,a.kt)("a",{parentName:"p",href:"https://github.com/realsee-developer/five-sdk-javascript-vue-tutorial"},"JavaScript")," | ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/realsee-developer/five-sdk-typescript-vue-tutorial"},"TypeScript"))),(0,a.kt)("admonition",{title:"This chapter can learn to",type:"tip"},(0,a.kt)("ul",{parentName:"admonition"},(0,a.kt)("li",{parentName:"ul"},"Preparation for the development environment."),(0,a.kt)("li",{parentName:"ul"},"How to introduce ",(0,a.kt)("strong",{parentName:"li"},"Five")," SDK."),(0,a.kt)("li",{parentName:"ul"},"Show a three-dimensional space to the screen."))),(0,a.kt)("h2",{id:"preparatory-work"},"Preparatory work"),(0,a.kt)("h3",{id:"development-environment"},"Development environment"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"You need to prepare a modern browser.")),(0,a.kt)("admonition",{type:"info"},(0,a.kt)("p",{parentName:"admonition"},(0,a.kt)("strong",{parentName:"p"},"Five")," Browser supports the following, please choose one of your families\uff1a"),(0,a.kt)("table",{parentName:"admonition"},(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:"center"},"Safari"),(0,a.kt)("th",{parentName:"tr",align:"center"},"Safari on iOS"),(0,a.kt)("th",{parentName:"tr",align:"right"},"Chrome"),(0,a.kt)("th",{parentName:"tr",align:"center"},"Chrome for Android"),(0,a.kt)("th",{parentName:"tr",align:"center"},"Edge"),(0,a.kt)("th",{parentName:"tr",align:"center"},"Firefox"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"center"},">= 9"),(0,a.kt)("td",{parentName:"tr",align:"center"},">= 9"),(0,a.kt)("td",{parentName:"tr",align:"right"},">= 49"),(0,a.kt)("td",{parentName:"tr",align:"center"},">= 93"),(0,a.kt)("td",{parentName:"tr",align:"center"},">= 13"),(0,a.kt)("td",{parentName:"tr",align:"center"},">= 45"))))),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"You need to install ",(0,a.kt)("a",{parentName:"li",href:"https://nodejs.org/"},"Node.js"),"and ",(0,a.kt)("inlineCode",{parentName:"li"},"Node.js")," version of subdue >= 12.x in order to avoid historical compatibility problems.")),(0,a.kt)("h3",{id:"use-development-build-tool"},"Use development build tool"),(0,a.kt)("p",null,"This example is initialized by ",(0,a.kt)("a",{parentName:"p",href:"https://vitejs.dev/"},"Vite"),"You can initialize yourself with the code below."),(0,a.kt)(i.Z,{mdxType:"Tabs"},(0,a.kt)(o.Z,{value:"JavaScript",label:"JavaScript",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"# npm 6.x\nnpm create vite@latest my-vue-app --template vue\n\n# npm 7+, extra double-dash is needed:\nnpm create vite@latest my-vue-app -- --template vue\n"))),(0,a.kt)(o.Z,{value:"TypeScript",label:"TypeScript",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"# npm 6.x\nnpm create vite@latest my-vue-app --template vue-ts\n\n# npm 7+, extra double-dash is needed:\nnpm create vite@latest my-vue-app -- --template vue-ts\n")))),(0,a.kt)("p",null,"Create the directory ",(0,a.kt)("inlineCode",{parentName:"p"},"src/0.getting-started"),"for this tutorial under ",(0,a.kt)("inlineCode",{parentName:"p"},"src"),"."),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"Each tutorial creates a new directory as a record that can be summarized and traced.You will get when the course ends")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"src\n\u251c\u2500\u2500 0.getting-started\n\u251c\u2500\u2500 1.displaying-work\n\u251c\u2500\u2500 2.knowing-state\n...\n\n")),(0,a.kt)("p",null,"This directory structure.The full code sample is also such a directory structure that you can always consult at any time."),(0,a.kt)("admonition",{type:"tip"},(0,a.kt)("p",{parentName:"admonition"},"If you are familiar with other development building tools such as ",(0,a.kt)("inlineCode",{parentName:"p"},"Webpack")," ",(0,a.kt)("inlineCode",{parentName:"p"},"Snowpack")," ",(0,a.kt)("inlineCode",{parentName:"p"},"parcel")," you can also use them.")),(0,a.kt)("h3",{id:"create-html-file"},"Create HTML File"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-html",metastring:'title="src/0.getting-started/index.html"',title:'"src/0.getting-started/index.html"'},'<!DOCTYPE html>\n<html lang="en">\n  <head>\n    <meta charset="UTF-8" />\n    <link rel="icon" href="data:;base64,iVBORw0KGgo=" />\n    <meta name="viewport" content="width=device-width, initial-scale=1.0" />\n    <title>started | Getting started</title>\n    \x3c!-- highlight-start --\x3e\n    <style>\n      * {\n        margin: 0;\n        padding: 0;\n      }\n      html,\n      body,\n      #app {\n        width: 100%;\n        height: 100%;\n        overflow: hidden;\n      }\n    </style>\n    \x3c!-- highlight-end --\x3e\n  </head>\n  <body>\n    \x3c!-- highlight-start --\x3e\n    <div id="app"></div>\n    <script type="module" src="./index"><\/script>\n    \x3c!-- highlight-end --\x3e\n  </body>\n</html>\n')),(0,a.kt)("p",null,"Using direct import ",(0,a.kt)("inlineCode",{parentName:"p"},'<script type="module" src="./index"><\/script>')," is a feature of ",(0,a.kt)("a",{parentName:"p",href:"https://vitejs.dev/"},"Vite")," ,\nIf you use other development and construction tools, please handle code import and entry files by yourself. Like ",(0,a.kt)("inlineCode",{parentName:"p"},"Webpack")," using ",(0,a.kt)("inlineCode",{parentName:"p"},"HtmlWebpackPlugin")," and more."),(0,a.kt)("h3",{id:"write-test-logical-code"},"Write test logical code"),(0,a.kt)("p",null,"We first create a simple Hello World to ensure that the whole code is running."),(0,a.kt)(i.Z,{mdxType:"Tabs"},(0,a.kt)(o.Z,{value:"JavaScript",label:"JavaScript",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts",metastring:'title="src/0.getting-started/index.js"',title:'"src/0.getting-started/index.js"'},'const app = document.querySelector("#app");\n// highlight-start\napp.innerHTML = "Hello World.";\n// highlight-end\nexport {};\n'))),(0,a.kt)(o.Z,{value:"TypeScript",label:"TypeScript",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx",metastring:'title="src/0.getting-started/index.ts"',title:'"src/0.getting-started/index.ts"'},'const app = document.querySelector("#app")!;\n// highlight-start\napp.innerHTML = "Hello World.";\n// highlight-end\nexport {};\n')))),(0,a.kt)("p",null,"Last ",(0,a.kt)("inlineCode",{parentName:"p"},"export {};")," because ",(0,a.kt)("a",{parentName:"p",href:"https://vitejs.dev/"},"Vite")," uses ",(0,a.kt)("inlineCode",{parentName:"p"},'type="module"')," to introduce, each file needs to be a ",(0,a.kt)("inlineCode",{parentName:"p"},"module"),", needs ",(0,a.kt)("inlineCode",{parentName:"p"},"export"),".\nIf you use other development build tools, please write them as required by your own development build."),(0,a.kt)("p",null,"Start service ",(0,a.kt)("inlineCode",{parentName:"p"},"npm run dev"),' and jump to the current page "http://localhost:3000/src/0.getting-started/index.html".'),(0,a.kt)("admonition",{type:"info"},(0,a.kt)("p",{parentName:"admonition"},"Please see your console. The port number will change due to your configuration and current port occupancy, please check the console output.\nIf you use another development build tool, please start the service as required by your own development build tool.")),(0,a.kt)("p",null,"Then you will see it on the page"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"\nHello World.\n\n")),(0,a.kt)("p",null,"This output indicates that the development of build tools has been completed."),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"The next sections will not elaborate further on the above steps and please do so together.")),(0,a.kt)("h2",{id:"install-dependencies-from-npm"},"Install dependencies from npm"),(0,a.kt)("p",null,"Install dependency in your project directory"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"npm install @realsee/five three@0.117.1\n")),(0,a.kt)("p",null,"Dependency Required"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://npmjs.com/@realsee/five"},(0,a.kt)("strong",{parentName:"a"},"@realsee/five"))," ",(0,a.kt)("strong",{parentName:"li"},"Five")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://npmjs.com/three"},(0,a.kt)("strong",{parentName:"a"},"three"))," three.js is Five Dependent Graphs/Mathematical Library. Please use the version 0.117.x"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://npmjs.com/vue"},(0,a.kt)("strong",{parentName:"a"},"vue"))," Vue framework is currently using version 3.0.0")),(0,a.kt)("h3",{id:"test-vue-component"},"Test Vue Component"),(0,a.kt)("p",null,"Create an App.vue component"),(0,a.kt)(i.Z,{mdxType:"Tabs"},(0,a.kt)(o.Z,{value:"JavaScript",label:"JavaScript",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js",metastring:'title="src/0.getting-started/index.js"',title:'"src/0.getting-started/index.js"'},'import { createApp, h } from "vue";\nimport App from "./App.vue";\n\ncreateApp(App).mount("#app");\n')),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-vue",metastring:'title="src/0.getting-started/App.vue"',title:'"src/0.getting-started/App.vue"'},'<template>\n  <div>{{ str }}</div>\n  \u02dc\n</template>\n\n<script setup>\nconst str = "\u6d4b\u8bd5";\n<\/script>\n'))),(0,a.kt)(o.Z,{value:"TypeScript",label:"TypeScript",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts",metastring:'title="src/0.getting-started/index.ts"',title:'"src/0.getting-started/index.ts"'},'import { createApp, h } from "vue";\nimport App from "./App.vue";\n\ncreateApp(App).mount("#app");\n')),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-vue",metastring:'title="src/0.getting-started/App.vue"',title:'"src/0.getting-started/App.vue"'},'<template>\n  <div>{{ str }}</div>\n</template>\n\n<script setup lang="ts">\nconst str = "\u6d4b\u8bd5";\n<\/script>\n')))),(0,a.kt)("h2",{id:"render-a-three-dimensional-space"},"Render a three-dimensional space"),(0,a.kt)("p",null,"It's time to render a VR scene to see"),(0,a.kt)("h3",{id:"load-3d-space"},"Load 3D space"),(0,a.kt)("p",null,"Delete your previous ",(0,a.kt)("inlineCode",{parentName:"p"},"App.vue"),".We shall rewrite. You can first fail to understand what the code will mean, and you will learn from the next chapter."),(0,a.kt)(i.Z,{mdxType:"Tabs"},(0,a.kt)(o.Z,{value:"JavaScript",label:"JavaScript",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-vue",metastring:'title="src/0.getting-started/App.vue"',title:'"src/0.getting-started/App.vue"'},'<template>\n  <FiveProvider :work="work">\n    <FiveCanvas :width="512" :height="512" />\n  </FiveProvider>\n</template>\n\n<script setup>\nimport { FiveProvider, FiveCanvas } from "@realsee/five/vue";\nimport { parseWork } from "@realsee/five";\nimport { ref } from "vue";\n\nconst work = ref();\nconst workURL =\n  "https://vrlab-public.ljcdn.com/release/static/image/release/five/work-sample/07bdc58f413bc5494f05c7cbb5cbdce4/work.json";\n\nfetch(workURL)\n  .then((response) => response.text())\n  .then((text) => (work.value = parseWork(text)));\n<\/script>\n'))),(0,a.kt)(o.Z,{value:"TypeScript",label:"TypeScript",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-vue",metastring:'title="src/0.getting-started/App.vue"',title:'"src/0.getting-started/App.vue"'},'<template>\n  <FiveProvider :work="work">\n    <FiveCanvas :width="512" :height="512" />\n  </FiveProvider>\n</template>\n\n<script setup lang="ts">\nimport { FiveProvider, FiveCanvas } from "@realsee/five/vue";\nimport { parseWork } from "@realsee/five";\nimport { ref } from "vue";\n\nconst work = ref();\nconst workURL =\n  "https://vrlab-public.ljcdn.com/release/static/image/release/five/work-sample/07bdc58f413bc5494f05c7cbb5cbdce4/work.json";\n\nfetch(workURL)\n  .then((response) => response.text())\n  .then((text) => (work.value = parseWork(text)));\n<\/script>\n')))),(0,a.kt)("p",null,"Go back to your browser, see if there is already a three-dimensional position displayed on the left. You can use the mouse or touch the gesture. Basic browsing features are attached."),(0,a.kt)("h3",{id:"make-the-screen-full"},"Make the screen full"),(0,a.kt)("p",null,"While the working principles of the above code may not be fully understood, we can see ",(0,a.kt)("inlineCode",{parentName:"p"},"FiveCanvas")," affected by ",(0,a.kt)("inlineCode",{parentName:"p"},"width")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"height")," properties, very much like the size of the picture.This guess is also supported by the position of the picture in the upper left corner of the browser.For each time, they are used to set screen size."),(0,a.kt)("p",null,"That's how we try to use the Vue Composition API with our familiarity and build it on the screen."),(0,a.kt)(i.Z,{mdxType:"Tabs"},(0,a.kt)(o.Z,{value:"JavaScript",label:"JavaScript",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js",metastring:'title="src/0.getting-started/useWindowDimensions.js"',title:'"src/0.getting-started/useWindowDimensions.js"'},'import { ref, onBeforeUnmount } from "vue";\n\nfunction useWindowDimensions() {\n  const width = ref(window.innerWidth);\n  const height = ref(window.innerHeight);\n\n  const listener = () => {\n    width.value = window.innerWidth;\n    height.value = window.innerHeight;\n  };\n\n  window.addEventListener("resize", listener, false);\n  onBeforeUnmount(() => {\n    window.removeEventListener("resize", listener, false);\n  });\n  return { width, height };\n}\nexport { useWindowDimensions };\n')),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-vue",metastring:'title="src/0.getting-started/App.vue"',title:'"src/0.getting-started/App.vue"'},'<template>\n  <FiveProvider :work="work">\n    // highlight-start\n    <FiveCanvas :width="width" :height="height" />\n    // highlight-end\n  </FiveProvider>\n</template>\n\n<script setup>\nimport { FiveProvider, FiveCanvas } from "@realsee/five/vue";\nimport { parseWork } from "@realsee/five";\nimport { ref } from "vue";\n// highlight-start\nimport { useWindowDimensions } from "./useWindowDimensions";\n// highlight-end\nconst work = ref();\nconst workURL =\n  "https://vrlab-public.ljcdn.com/release/static/image/release/five/work-sample/07bdc58f413bc5494f05c7cbb5cbdce4/work.json";\n\nfetch(workURL)\n  .then((response) => response.text())\n  .then((text) => (work.value = parseWork(text)));\n// highlight-start\nconst { width, height } = useWindowDimensions();\n// highlight-end\n<\/script>\n'))),(0,a.kt)(o.Z,{value:"TypeScript",label:"TypeScript",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts",metastring:'title="src/0.getting-started/useWindowDimensions.ts"',title:'"src/0.getting-started/useWindowDimensions.ts"'},'import { ref, onBeforeUnmount } from "vue";\n\nfunction useWindowDimensions() {\n  const width = ref<number>(window.innerWidth);\n  const height = ref<number>(window.innerHeight);\n\n  const listener = () => {\n    width.value = window.innerWidth;\n    height.value = window.innerHeight;\n  };\n\n  window.addEventListener("resize", listener, false);\n  onBeforeUnmount(() => {\n    window.removeEventListener("resize", listener, false);\n  });\n  return { width, height };\n}\nexport { useWindowDimensions };\n')),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-vue",metastring:'title="src/0.getting-started/App.vue"',title:'"src/0.getting-started/App.vue"'},'<template>\n  <FiveProvider :work="work">\n    // highlight-start\n    <FiveCanvas :width="width" :height="height" />\n    // highlight-end\n  </FiveProvider>\n</template>\n\n<script setup lang="ts">\nimport { FiveProvider, FiveCanvas } from "@realsee/five/vue";\nimport { parseWork } from "@realsee/five";\nimport { ref } from "vue";\n// highlight-start\nimport { useWindowDimensions } from "./useWindowDimensions";\n// highlight-end\nconst work = ref();\nconst workURL =\n  "https://vrlab-public.ljcdn.com/release/static/image/release/five/work-sample/07bdc58f413bc5494f05c7cbb5cbdce4/work.json";\n\nfetch(workURL)\n  .then((response) => response.text())\n  .then((text) => (work.value = parseWork(text)));\n// highlight-start\nconst { width, height } = useWindowDimensions();\n// highlight-end\n<\/script>\n')))),(0,a.kt)("p",null,"Go back to your browser and see if it does not meet expectations."),(0,a.kt)("p",null,"Your stick\ud83e\udd73 !"),(0,a.kt)("h2",{id:"split-code"},"Split Code"),(0,a.kt)("p",null,"Our Code Split Logic"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Split ",(0,a.kt)("inlineCode",{parentName:"li"},"index")," to mount an Apps Root component."),(0,a.kt)("li",{parentName:"ul"},"Split ",(0,a.kt)("inlineCode",{parentName:"li"},"App")," to separate file App.vue."),(0,a.kt)("li",{parentName:"ul"},"Split ",(0,a.kt)("inlineCode",{parentName:"li"},"to separate files using Windows Dimensions"),".")),(0,a.kt)("h2",{id:"the-next-section-will-be-completed-by-you"},"The next section will be completed by you"),(0,a.kt)("admonition",{title:"Next section will be successful",type:"tip"},(0,a.kt)("ul",{parentName:"admonition"},(0,a.kt)("li",{parentName:"ul"},"Learn what is working."),(0,a.kt)("li",{parentName:"ul"},"Learn how to work with the code just now, such as ",(0,a.kt)("inlineCode",{parentName:"li"},"FiveProvider")," / ",(0,a.kt)("inlineCode",{parentName:"li"},"FveCanvas"),"."))))}h.isMDXComponent=!0}}]);