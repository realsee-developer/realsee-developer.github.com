"use strict";(self.webpackChunkrealsee_developer_github_com=self.webpackChunkrealsee_developer_github_com||[]).push([[3461],{3905:(e,n,t)=>{t.d(n,{Zo:()=>s,kt:()=>v});var a=t(67294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function l(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?l(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)t=l[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)t=l[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var u=a.createContext({}),d=function(e){var n=a.useContext(u),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},s=function(e){var n=d(e.components);return a.createElement(u.Provider,{value:n},e.children)},p="mdxType",c={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},m=a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,l=e.originalType,u=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),p=d(t),m=r,v=p["".concat(u,".").concat(m)]||p[m]||c[m]||l;return t?a.createElement(v,o(o({ref:n},s),{},{components:t})):a.createElement(v,o({ref:n},s))}));function v(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var l=t.length,o=new Array(l);o[0]=m;var i={};for(var u in n)hasOwnProperty.call(n,u)&&(i[u]=n[u]);i.originalType=e,i[p]="string"==typeof e?e:r,o[1]=i;for(var d=2;d<l;d++)o[d]=t[d];return a.createElement.apply(null,o)}return a.createElement.apply(null,t)}m.displayName="MDXCreateElement"},85162:(e,n,t)=>{t.d(n,{Z:()=>o});var a=t(67294),r=t(86010);const l={tabItem:"tabItem_Ymn6"};function o(e){let{children:n,hidden:t,className:o}=e;return a.createElement("div",{role:"tabpanel",className:(0,r.Z)(l.tabItem,o),hidden:t},n)}},65488:(e,n,t)=>{t.d(n,{Z:()=>c});var a=t(87462),r=t(67294),l=t(86010),o=t(72389),i=t(67392),u=t(7094),d=t(12466);const s={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};function p(e){const{lazy:n,block:t,defaultValue:o,values:p,groupId:c,className:m}=e,v=r.Children.map(e.children,(e=>{if((0,r.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})),g=p??v.map((e=>{let{props:{value:n,label:t,attributes:a}}=e;return{value:n,label:t,attributes:a}})),f=(0,i.l)(g,((e,n)=>e.value===n.value));if(f.length>0)throw new Error(`Docusaurus error: Duplicate values "${f.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`);const k=null===o?o:o??v.find((e=>e.props.default))?.props.value??v[0].props.value;if(null!==k&&!g.some((e=>e.value===k)))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${k}" but none of its children has the corresponding value. Available values are: ${g.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);const{tabGroupChoices:b,setTabGroupChoices:y}=(0,u.U)(),[h,N]=(0,r.useState)(k),P=[],{blockElementScrollPositionUntilNextRender:E}=(0,d.o5)();if(null!=c){const e=b[c];null!=e&&e!==h&&g.some((n=>n.value===e))&&N(e)}const D=e=>{const n=e.currentTarget,t=P.indexOf(n),a=g[t].value;a!==h&&(E(n),N(a),null!=c&&y(c,String(a)))},O=e=>{let n=null;switch(e.key){case"Enter":D(e);break;case"ArrowRight":{const t=P.indexOf(e.currentTarget)+1;n=P[t]??P[0];break}case"ArrowLeft":{const t=P.indexOf(e.currentTarget)-1;n=P[t]??P[P.length-1];break}}n?.focus()};return r.createElement("div",{className:(0,l.Z)("tabs-container",s.tabList)},r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,l.Z)("tabs",{"tabs--block":t},m)},g.map((e=>{let{value:n,label:t,attributes:o}=e;return r.createElement("li",(0,a.Z)({role:"tab",tabIndex:h===n?0:-1,"aria-selected":h===n,key:n,ref:e=>P.push(e),onKeyDown:O,onClick:D},o,{className:(0,l.Z)("tabs__item",s.tabItem,o?.className,{"tabs__item--active":h===n})}),t??n)}))),n?(0,r.cloneElement)(v.filter((e=>e.props.value===h))[0],{className:"margin-top--md"}):r.createElement("div",{className:"margin-top--md"},v.map(((e,n)=>(0,r.cloneElement)(e,{key:n,hidden:e.props.value!==h})))))}function c(e){const n=(0,o.Z)();return r.createElement(p,(0,a.Z)({key:String(n)},e))}},94373:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>s,contentTitle:()=>u,default:()=>v,frontMatter:()=>i,metadata:()=>d,toc:()=>p});var a=t(87462),r=(t(67294),t(3905)),l=t(65488),o=t(85162);const i={title:"\u6a21\u578b\u5165\u6237\u95e8\u5f15\u5bfc"},u=void 0,d={unversionedId:"front/3d-space/advanced/dnalogel/ModelEntryDoorGuidePlugin",id:"front/3d-space/advanced/dnalogel/ModelEntryDoorGuidePlugin",title:"\u6a21\u578b\u5165\u6237\u95e8\u5f15\u5bfc",description:"ModelEntryDoorGuidePlugin",source:"@site/docs/front/3d-space/advanced/dnalogel/ModelEntryDoorGuidePlugin.md",sourceDirName:"front/3d-space/advanced/dnalogel",slug:"/front/3d-space/advanced/dnalogel/ModelEntryDoorGuidePlugin",permalink:"/docs/front/3d-space/advanced/dnalogel/ModelEntryDoorGuidePlugin",draft:!1,tags:[],version:"current",lastUpdatedBy:"Junchao Gao",lastUpdatedAt:1669025818,formattedLastUpdatedAt:"2022\u5e7411\u670821\u65e5",frontMatter:{title:"\u6a21\u578b\u5165\u6237\u95e8\u5f15\u5bfc"},sidebar:"\u4e09\u7ef4\u7a7a\u95f4",previous:{title:"\u6a21\u578b\u5e95\u76d8\u6307\u5357\u9488",permalink:"/docs/front/3d-space/advanced/dnalogel/ModelChassisCompassPlugin"},next:{title:"\u6dfb\u52a0\u5168\u666f\u6807\u5c3a\ud83c\udf1f\ufe0f",permalink:"/docs/front/3d-space/advanced/dnalogel/PanoRulerPlugin"}},s={},p=[{value:"<strong>ModelEntryDoorGuidePlugin</strong>",id:"modelentrydoorguideplugin",level:2},{value:"\u529f\u80fd\u8bf4\u660e",id:"\u529f\u80fd\u8bf4\u660e",level:2},{value:"\u6548\u679c\u5c55\u793a",id:"\u6548\u679c\u5c55\u793a",level:2},{value:"\u5b89\u88c5\u5f15\u7528",id:"\u5b89\u88c5\u5f15\u7528",level:2},{value:"\u5f00\u53d1\u6307\u5357",id:"\u5f00\u53d1\u6307\u5357",level:2},{value:"\u521d\u59cb\u5316",id:"\u521d\u59cb\u5316",level:3},{value:"React \u521d\u59cb\u5316",id:"react-\u521d\u59cb\u5316",level:3},{value:"Vue \u521d\u59cb\u5316",id:"vue-\u521d\u59cb\u5316",level:3},{value:"\u8f7d\u5165\u6570\u636e",id:"\u8f7d\u5165\u6570\u636e",level:3},{value:"\u6838\u5fc3\u65b9\u6cd5",id:"\u6838\u5fc3\u65b9\u6cd5",level:3},{value:"demo \u6e90\u7801\u53c2\u8003",id:"demo-\u6e90\u7801\u53c2\u8003",level:2}],c={toc:p},m="wrapper";function v(e){let{components:n,...t}=e;return(0,r.kt)(m,(0,a.Z)({},c,t,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"modelentrydoorguideplugin"},(0,r.kt)("strong",{parentName:"h2"},"ModelEntryDoorGuidePlugin")),(0,r.kt)("h2",{id:"\u529f\u80fd\u8bf4\u660e"},"\u529f\u80fd\u8bf4\u660e"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"\u6a21\u578b\u5165\u6237\u95e8\u5f15\u5bfc\u63d2\u4ef6")," \u96c6\u6210\u4e86\u4e00\u5957\u80fd\u591f\u5728\u6a21\u578b\u72b6\u6001\u4e0b\u67e5\u770b\u6a21\u578b\u5165\u6237\u95e8\u6807\u8bc6\u7684\u6a21\u578b"),(0,r.kt)("p",null,"\u8be6\u7ec6\u529f\u80fd\u70b9\u5982\u4e0b\uff1a"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u5728\u6a21\u578b\u6001\u4e0b\uff0c\u4f7f\u7528\u52a8\u6001\u6a21\u578b\u6807\u8bc6\u7a7a\u95f4\u7684\u5165\u6237\u95e8\u3002")),(0,r.kt)("h2",{id:"\u6548\u679c\u5c55\u793a"},"\u6548\u679c\u5c55\u793a"),(0,r.kt)("p",null,"\u70b9\u51fb",(0,r.kt)("strong",{parentName:"p"},"\u7a7a\u95f4\u603b\u89c8"),"\u6309\u94ae\uff0c\u67e5\u770b\u7a7a\u95f4\u603b\u89c8\u6a21\u6001\u4e0b\u7684\u6a21\u578b\u5165\u6237\u95e8\u3002"),(0,r.kt)("div",{className:"docs-vr-normal"},(0,r.kt)("iframe",{className:"docs-vr-iframe",src:"https://realsee.js.org/dnalogel/src/ModelEntryDoorGuidePlugin/index.html"})),(0,r.kt)("h2",{id:"\u5b89\u88c5\u5f15\u7528"},"\u5b89\u88c5\u5f15\u7528"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"\u8bf7\u6309\u9700\u9009\u62e9 ",(0,r.kt)("inlineCode",{parentName:"strong"},"yarn")," \u6216 ",(0,r.kt)("inlineCode",{parentName:"strong"},"npm")," \u5b89\u88c5\u65b9\u5f0f\uff1a")),(0,r.kt)(l.Z,{groupId:"npm2yarn",mdxType:"Tabs"},(0,r.kt)(o.Z,{value:"npm",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"npm install @realsee/dnalogel\n"))),(0,r.kt)(o.Z,{value:"yarn",label:"Yarn",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"yarn add @realsee/dnalogel\n"))),(0,r.kt)(o.Z,{value:"pnpm",label:"pnpm",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"pnpm add @realsee/dnalogel\n")))),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"\u901a\u8fc7 es \u5f15\u7528\uff1a")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx"},'import { ModelEntryDoorGuidePlugin } from "@realsee/dnalogel"\n')),(0,r.kt)("h2",{id:"\u5f00\u53d1\u6307\u5357"},"\u5f00\u53d1\u6307\u5357"),(0,r.kt)("h3",{id:"\u521d\u59cb\u5316"},"\u521d\u59cb\u5316"),(0,r.kt)("p",null,"\u5728\u521d\u59cb\u5316 ",(0,r.kt)("inlineCode",{parentName:"p"},"Five")," \u5b9e\u4f8b\u65f6\uff0c\u5c06 ",(0,r.kt)("inlineCode",{parentName:"p"},"ModelEntryDoorGuidePlugin")," \u914d\u7f6e\u5728\u521d\u59cb\u5316\u63d2\u4ef6\u53c2\u6570\u5373\u53ef\u3002"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"import { Five } from '@realsee/five'\nimport { ModelEntryDoorGuidePlugin } from \"@realsee/dnalogel\";\n\nconst five = new Five({\n    plugins: [\n        [\n            ModelEntryDoorGuidePlugin,\n            'modelEntryDoorGuidePlugin', // \u81ea\u5b9a\u4e49\u63d2\u4ef6\u540d\u79f0\n            {\n                // \u53c2\u6570\u914d\u7f6e\n            }\n        ]\n    ]\n})\n")),(0,r.kt)("h3",{id:"react-\u521d\u59cb\u5316"},"React \u521d\u59cb\u5316"),(0,r.kt)("p",null,"\u5728\u521b\u5efa ",(0,r.kt)("inlineCode",{parentName:"p"},"FiveProvider")," \u65f6\uff0c\u5c06 ",(0,r.kt)("inlineCode",{parentName:"p"},"ModelEntryDoorGuidePlugin")," \u914d\u7f6e\u5728\u521d\u59cb\u5316\u63d2\u4ef6\u53c2\u6570\u5373\u53ef\u3002"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},'import { ModelEntryDoorGuidePlugin } from "@realsee/dnalogel";\nimport { createFiveProvider, FiveCanvas } from "@realsee/five/react";\n\nconst FiveProvider = createFiveProvider({\n    plugins: [\n        [\n            ModelEntryDoorGuidePlugin,\n            \'modelEntryDoorGuidePlugin\', // \u81ea\u5b9a\u4e49\u63d2\u4ef6\u540d\u79f0\n            {\n                // \u53c2\u6570\u914d\u7f6e\n            }\n        ]\n    ]\n});\n')),(0,r.kt)("h3",{id:"vue-\u521d\u59cb\u5316"},"Vue \u521d\u59cb\u5316"),(0,r.kt)("p",null,"\u5728\u4f7f\u7528 ",(0,r.kt)("inlineCode",{parentName:"p"},"FiveProvider")," \u65f6\uff0c\u5c06 ",(0,r.kt)("inlineCode",{parentName:"p"},"ModelEntryDoorGuidePlugin")," \u914d\u7f6e\u5728\u521d\u59cb\u5316\u63d2\u4ef6\u53c2\u6570\u5373\u53ef\u3002"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-vue"},'<template>\n  <FiveProvider :fiveInitArgs="fiveInitArgs">\n  </FiveProvider>\n</template>\n<script setup>\nimport ModelEntryDoorGuidePlugin from "@realsee/dnalogel/libs/ModelEntryDoorGuidePlugin";\nimport { FiveProvider, FiveCanvas } from "@realsee/five/vue";\nconst fiveInitArgs = {\n    plugins: [\n        [\n            ModelEntryDoorGuidePlugin,\n            \'modelEntryDoorGuidePlugin\', // \u81ea\u5b9a\u4e49\u63d2\u4ef6\u540d\u79f0\n            {\n                // \u53c2\u6570\u914d\u7f6e\n            }\n        ]\n    ]\n}\n<\/script>\n')),(0,r.kt)("h3",{id:"\u8f7d\u5165\u6570\u636e"},"\u8f7d\u5165\u6570\u636e"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"// \u83b7\u53d6\u63d2\u4ef6\u5b9e\u4f8b,\u5176\u4e2d `modelChassisCompassPlugin` \u662f\u521d\u59cb\u5316\u65f6\u81ea\u5b9a\u4e49\u7684\u540d\u79f0\nconst pluginInstance = five.plugins.modelEntryDoorGuidePlugin \n\n// \u8c03\u7528 `load` \u65b9\u6cd5\u8f7d\u5165\u6a21\u578b\u623f\u5c4b\u6807\u7b7e\u6570\u636e\npluginInstance.load(modelEntryDoorGuidePluginData)\n")),(0,r.kt)("h3",{id:"\u6838\u5fc3\u65b9\u6cd5"},"\u6838\u5fc3\u65b9\u6cd5"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"load(data: ModelEntryDoorGuidePluginData)")," \u8f7d\u5165\u63d2\u4ef6\u6570\u636e")),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"\u60a8\u9700\u8981\u624b\u52a8\u8f7d\u5165\u63d2\u4ef6\u6570\u636e\uff0c\u6570\u636e\u6765\u6e90\u8bf7\u9605\u8bfb",(0,r.kt)("a",{parentName:"p",href:"https://open-platform.realsee.com/developer/open/api#/"},"\u5982\u89c6\u5f00\u653e\u5e73\u53f0 API"),"\u3002")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"enable: (config?: { animationEnable?: boolean /** \u662f\u5426\u5f00\u542f\u52a8\u6001\u6548\u679c */ }) => void")," \u542f\u7528\u63d2\u4ef6")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"disable: () => void")," \u7981\u7528\u63d2\u4ef6"))),(0,r.kt)("h2",{id:"demo-\u6e90\u7801\u53c2\u8003"},"demo \u6e90\u7801\u53c2\u8003"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/realsee-developer/dnalogel/tree/main/examples/src"},"demo \u6e90\u7801\u53c2\u8003")))}v.isMDXComponent=!0}}]);