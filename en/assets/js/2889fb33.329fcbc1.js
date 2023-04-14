"use strict";(self.webpackChunkrealsee_developer_github_com=self.webpackChunkrealsee_developer_github_com||[]).push([[9747],{49613:(e,n,t)=>{t.d(n,{Zo:()=>u,kt:()=>m});var i=t(59496);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function r(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);n&&(i=i.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,i)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?r(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function o(e,n){if(null==e)return{};var t,i,a=function(e,n){if(null==e)return{};var t,i,a={},r=Object.keys(e);for(i=0;i<r.length;i++)t=r[i],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(i=0;i<r.length;i++)t=r[i],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var d=i.createContext({}),p=function(e){var n=i.useContext(d),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},u=function(e){var n=p(e.components);return i.createElement(d.Provider,{value:n},e.children)},s={inlineCode:"code",wrapper:function(e){var n=e.children;return i.createElement(i.Fragment,{},n)}},c=i.forwardRef((function(e,n){var t=e.components,a=e.mdxType,r=e.originalType,d=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),c=p(t),m=a,g=c["".concat(d,".").concat(m)]||c[m]||s[m]||r;return t?i.createElement(g,l(l({ref:n},u),{},{components:t})):i.createElement(g,l({ref:n},u))}));function m(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var r=t.length,l=new Array(r);l[0]=c;var o={};for(var d in n)hasOwnProperty.call(n,d)&&(o[d]=n[d]);o.originalType=e,o.mdxType="string"==typeof e?e:a,l[1]=o;for(var p=2;p<r;p++)l[p]=t[p];return i.createElement.apply(null,l)}return i.createElement.apply(null,t)}c.displayName="MDXCreateElement"},5394:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>d,contentTitle:()=>l,default:()=>s,frontMatter:()=>r,metadata:()=>o,toc:()=>p});var i=t(2962),a=(t(59496),t(49613));const r={title:"Add Path Booting"},l=void 0,o={unversionedId:"front/3d-space/advanced/dnalogel/GuideLinePlugin",id:"front/3d-space/advanced/dnalogel/GuideLinePlugin",title:"Add Path Booting",description:"GuideLinePlugin",source:"@site/i18n/en/docusaurus-plugin-content-docs/current/front/3d-space/advanced/dnalogel/GuideLinePlugin.md",sourceDirName:"front/3d-space/advanced/dnalogel",slug:"/front/3d-space/advanced/dnalogel/GuideLinePlugin",permalink:"/en/docs/front/3d-space/advanced/dnalogel/GuideLinePlugin",draft:!1,tags:[],version:"current",lastUpdatedBy:"sansi.lcj",lastUpdatedAt:1669717185,formattedLastUpdatedAt:"Nov 29, 2022",frontMatter:{title:"Add Path Booting"},sidebar:"\u4e09\u7ef4\u7a7a\u95f4",previous:{title:"Add Panorama Hotspot",permalink:"/en/docs/front/3d-space/advanced/dnalogel/PanoTagPlugin"},next:{title:"Add Path Roaming",permalink:"/en/docs/front/3d-space/advanced/dnalogel/CruisePlugin"}},d={},p=[{value:"<strong>GuideLinePlugin</strong>",id:"guidelineplugin",level:2},{value:"Function Description",id:"function-description",level:2},{value:"Effect Display",id:"effect-display",level:2},{value:"Install reference",id:"install-reference",level:2},{value:"Development Guides",id:"development-guides",level:2},{value:"Initialize",id:"initialize",level:3},{value:"React initialization",id:"react-initialization",level:3},{value:"Vue initialization",id:"vue-initialization",level:3},{value:"Load data",id:"load-data",level:3},{value:"Core approach",id:"core-approach",level:3},{value:"demo source reference",id:"demo-source-reference",level:2}],u={toc:p};function s(e){let{components:n,...t}=e;return(0,a.kt)("wrapper",(0,i.Z)({},u,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"guidelineplugin"},(0,a.kt)("strong",{parentName:"h2"},"GuideLinePlugin")),(0,a.kt)("h2",{id:"function-description"},"Function Description"),(0,a.kt)("p",null,"GuideLinePlugin provides the ability to render action paths in a panorama mode."),(0,a.kt)("h2",{id:"effect-display"},"Effect Display"),(0,a.kt)("p",null,"Drag VR, rotate the angle to see the path bootstrap effect."),(0,a.kt)("div",{className:"docs-vr-normal"},(0,a.kt)("iframe",{className:"docs-vr-iframe",src:"https://realsee.js.org/dnalogel/src/GuideLinePlugin/index.html"})),(0,a.kt)("h2",{id:"install-reference"},"Install reference"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx"},'import { GuideLinePlugin } from "@realsee/dnalogel"\n')),(0,a.kt)("h2",{id:"development-guides"},"Development Guides"),(0,a.kt)("h3",{id:"initialize"},"Initialize"),(0,a.kt)("p",null,"When initializing the ",(0,a.kt)("inlineCode",{parentName:"p"},"Five")," instance, configure ",(0,a.kt)("inlineCode",{parentName:"p"},"GuideLinePlugin")," in the initialization plug-in parameters."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},"import { Five } from '@realsee/five'\nimport { GuideLinePlugin } from \"@realsee/dnalogel\";\n\nconst five = new Five({\n    plugins: [\n        [\n            GuideLinePlugin,\n            'guideLinePlugin', // Custom plugin name\n        ]\n    ]\n})\n")),(0,a.kt)("h3",{id:"react-initialization"},"React initialization"),(0,a.kt)("p",null,"When creating ",(0,a.kt)("inlineCode",{parentName:"p"},"FiveProvider")," , configure ",(0,a.kt)("inlineCode",{parentName:"p"},"GuideLinePlugin")," in the initialization plug-in parameters."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},'import { GuideLinePlugin } from "@realsee/dnalogel";\nimport { createFiveProvider, FiveCanvas } from "@realsee/five/react";\n\nconst FiveProvider = createFiveProvider({\n    plugins: [\n        [\n            GuideLinePlugin,\n            \'guideLinePlugin\', // Custom plugin name\n        ]\n    ]\n});\n')),(0,a.kt)("h3",{id:"vue-initialization"},"Vue initialization"),(0,a.kt)("p",null,"When ",(0,a.kt)("inlineCode",{parentName:"p"},"FiveProvider")," , configure ",(0,a.kt)("inlineCode",{parentName:"p"},"GuideLinePlugin")," in the initialization plug-in parameters."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-vue"},'<template>\n  <FiveProvider :fiveInitArgs="fiveInitArgs">\n  </FiveProvider>\n</template>\n<script setup>\nimport GuideLinePlugin from "@realsee/dnalogel/libs/GuideLinePlugin";\nimport { FiveProvider, FiveCanvas } from "@realsee/five/vue";\nconst fiveInitArgs = {\n    plugins: [\n        [\n            GuideLinePlugin ,\n            \'guideLinePlugin\', // custom plugin name\n        ]\n    ]\n}\n<\/script>\n')),(0,a.kt)("h3",{id:"load-data"},"Load data"),(0,a.kt)("p",null,"You need",(0,a.kt)("strong",{parentName:"p"},"to load path planning data"),"to see the correct effect\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx"},"// Custom path data\nconst guideLineServerData = [{\n    panoIndexList: [0, 1, 2, 3, 4, 5],\n    //arrowTextUrl: '', // Custom Path arrow on\n}]\n// Load path data\nfive.plugins.guideLinePlugin.load({ routes: guideLineServerData }, { visible: true })\n")),(0,a.kt)("h3",{id:"core-approach"},"Core approach"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"load(serverData: PluginServerData | PluginData)")," Loading plugin data")),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"You need to manually load the plug-in data, please read",(0,a.kt)("a",{parentName:"p",href:"https://open-platform.realsee.com/developer/open/api#/"},"Realsee Open Platform API"),"for the data source.")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("inlineCode",{parentName:"p"},"show: (options?: { userAction?: boolean }) => void")," display path")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("inlineCode",{parentName:"p"},"hide: (options?: { userAction?: boolean }) => void")," hidden path")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("inlineCode",{parentName:"p"},"enable: (options?: { userAction?: boolean }) => void")," enable plugins")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("inlineCode",{parentName:"p"},"disable: (options?: { userAction?: boolean }) => void")," Disable plugin")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("inlineCode",{parentName:"p"},"dispose: () => void")," destroyed plugin"))),(0,a.kt)("h2",{id:"demo-source-reference"},"demo source reference"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/realsee-developer/dnalogel/tree/main/examples/src"},"demo source reference")))}s.isMDXComponent=!0}}]);