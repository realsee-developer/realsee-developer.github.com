"use strict";(self.webpackChunkrealsee_developer_github_com=self.webpackChunkrealsee_developer_github_com||[]).push([[6524],{49613:(e,a,n)=>{n.d(a,{Zo:()=>u,kt:()=>m});var t=n(59496);function l(e,a,n){return a in e?Object.defineProperty(e,a,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[a]=n,e}function r(e,a){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);a&&(t=t.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),n.push.apply(n,t)}return n}function s(e){for(var a=1;a<arguments.length;a++){var n=null!=arguments[a]?arguments[a]:{};a%2?r(Object(n),!0).forEach((function(a){l(e,a,n[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(n,a))}))}return e}function o(e,a){if(null==e)return{};var n,t,l=function(e,a){if(null==e)return{};var n,t,l={},r=Object.keys(e);for(t=0;t<r.length;t++)n=r[t],a.indexOf(n)>=0||(l[n]=e[n]);return l}(e,a);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(t=0;t<r.length;t++)n=r[t],a.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}var i=t.createContext({}),p=function(e){var a=t.useContext(i),n=a;return e&&(n="function"==typeof e?e(a):s(s({},a),e)),n},u=function(e){var a=p(e.components);return t.createElement(i.Provider,{value:a},e.children)},d={inlineCode:"code",wrapper:function(e){var a=e.children;return t.createElement(t.Fragment,{},a)}},c=t.forwardRef((function(e,a){var n=e.components,l=e.mdxType,r=e.originalType,i=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),c=p(n),m=l,v=c["".concat(i,".").concat(m)]||c[m]||d[m]||r;return n?t.createElement(v,s(s({ref:a},u),{},{components:n})):t.createElement(v,s({ref:a},u))}));function m(e,a){var n=arguments,l=a&&a.mdxType;if("string"==typeof e||l){var r=n.length,s=new Array(r);s[0]=c;var o={};for(var i in a)hasOwnProperty.call(a,i)&&(o[i]=a[i]);o.originalType=e,o.mdxType="string"==typeof e?e:l,s[1]=o;for(var p=2;p<r;p++)s[p]=n[p];return t.createElement.apply(null,s)}return t.createElement.apply(null,n)}c.displayName="MDXCreateElement"},45558:(e,a,n)=>{n.d(a,{Z:()=>s});var t=n(59496),l=n(45924);const r="tabItem_IPoj";function s(e){let{children:a,hidden:n,className:s}=e;return t.createElement("div",{role:"tabpanel",className:(0,l.Z)(r,s),hidden:n},a)}},38637:(e,a,n)=>{n.d(a,{Z:()=>m});var t=n(2962),l=n(59496),r=n(45924),s=n(26709),o=n(33548),i=n(14714),p=n(60411);const u="tabList_xr86",d="tabItem_r4_W";function c(e){var a;const{lazy:n,block:s,defaultValue:c,values:m,groupId:v,className:g}=e,f=l.Children.map(e.children,(e=>{if((0,l.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})),h=m??f.map((e=>{let{props:{value:a,label:n,attributes:t}}=e;return{value:a,label:n,attributes:t}})),k=(0,o.l)(h,((e,a)=>e.value===a.value));if(k.length>0)throw new Error(`Docusaurus error: Duplicate values "${k.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`);const b=null===c?c:c??(null==(a=f.find((e=>e.props.default)))?void 0:a.props.value)??f[0].props.value;if(null!==b&&!h.some((e=>e.value===b)))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${b}" but none of its children has the corresponding value. Available values are: ${h.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);const{tabGroupChoices:C,setTabGroupChoices:y}=(0,i.U)(),[N,P]=(0,l.useState)(b),O=[],{blockElementScrollPositionUntilNextRender:w}=(0,p.o5)();if(null!=v){const e=C[v];null!=e&&e!==N&&h.some((a=>a.value===e))&&P(e)}const M=e=>{const a=e.currentTarget,n=O.indexOf(a),t=h[n].value;t!==N&&(w(a),P(t),null!=v&&y(v,String(t)))},E=e=>{var a;let n=null;switch(e.key){case"Enter":M(e);break;case"ArrowRight":{const a=O.indexOf(e.currentTarget)+1;n=O[a]??O[0];break}case"ArrowLeft":{const a=O.indexOf(e.currentTarget)-1;n=O[a]??O[O.length-1];break}}null==(a=n)||a.focus()};return l.createElement("div",{className:(0,r.Z)("tabs-container",u)},l.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,r.Z)("tabs",{"tabs--block":s},g)},h.map((e=>{let{value:a,label:n,attributes:s}=e;return l.createElement("li",(0,t.Z)({role:"tab",tabIndex:N===a?0:-1,"aria-selected":N===a,key:a,ref:e=>O.push(e),onKeyDown:E,onClick:M},s,{className:(0,r.Z)("tabs__item",d,null==s?void 0:s.className,{"tabs__item--active":N===a})}),n??a)}))),n?(0,l.cloneElement)(f.filter((e=>e.props.value===N))[0],{className:"margin-top--md"}):l.createElement("div",{className:"margin-top--md"},f.map(((e,a)=>(0,l.cloneElement)(e,{key:a,hidden:e.props.value!==N})))))}function m(e){const a=(0,s.Z)();return l.createElement(c,(0,t.Z)({key:String(a)},e))}},68519:(e,a,n)=>{n.r(a),n.d(a,{assets:()=>u,contentTitle:()=>i,default:()=>m,frontMatter:()=>o,metadata:()=>p,toc:()=>d});var t=n(2962),l=(n(59496),n(49613)),r=n(38637),s=n(45558);const o={title:"\u6a21\u578b\u5e95\u76d8\u6307\u5357\u9488"},i=void 0,p={unversionedId:"front/3d-space/advanced/dnalogel/ModelChassisCompassPlugin",id:"front/3d-space/advanced/dnalogel/ModelChassisCompassPlugin",title:"\u6a21\u578b\u5e95\u76d8\u6307\u5357\u9488",description:"ModelChassisCompassPlugin",source:"@site/docs/front/3d-space/advanced/dnalogel/ModelChassisCompassPlugin.md",sourceDirName:"front/3d-space/advanced/dnalogel",slug:"/front/3d-space/advanced/dnalogel/ModelChassisCompassPlugin",permalink:"/docs/front/3d-space/advanced/dnalogel/ModelChassisCompassPlugin",draft:!1,tags:[],version:"current",lastUpdatedBy:"Junchao Gao",lastUpdatedAt:1669025818,formattedLastUpdatedAt:"2022\u5e7411\u670821\u65e5",frontMatter:{title:"\u6a21\u578b\u5e95\u76d8\u6307\u5357\u9488"},sidebar:"\u4e09\u7ef4\u7a7a\u95f4",previous:{title:"\u6a21\u578b\u5206\u95f4\u6807\u7b7e",permalink:"/docs/front/3d-space/advanced/dnalogel/ModelRoomLabelPlugin"},next:{title:"\u6a21\u578b\u5165\u6237\u95e8\u5f15\u5bfc",permalink:"/docs/front/3d-space/advanced/dnalogel/ModelEntryDoorGuidePlugin"}},u={},d=[{value:"<strong>ModelChassisCompassPlugin</strong>",id:"modelchassiscompassplugin",level:2},{value:"\u529f\u80fd\u8bf4\u660e",id:"\u529f\u80fd\u8bf4\u660e",level:2},{value:"\u6548\u679c\u5c55\u793a",id:"\u6548\u679c\u5c55\u793a",level:2},{value:"\u5b89\u88c5\u5f15\u7528",id:"\u5b89\u88c5\u5f15\u7528",level:2},{value:"\u5f00\u53d1\u6307\u5357",id:"\u5f00\u53d1\u6307\u5357",level:2},{value:"\u521d\u59cb\u5316",id:"\u521d\u59cb\u5316",level:3},{value:"React \u521d\u59cb\u5316",id:"react-\u521d\u59cb\u5316",level:3},{value:"Vue \u521d\u59cb\u5316",id:"vue-\u521d\u59cb\u5316",level:3},{value:"\u8f7d\u5165\u6570\u636e",id:"\u8f7d\u5165\u6570\u636e",level:3},{value:"\u6838\u5fc3\u65b9\u6cd5",id:"\u6838\u5fc3\u65b9\u6cd5",level:3},{value:"demo \u6e90\u7801\u53c2\u8003",id:"demo-\u6e90\u7801\u53c2\u8003",level:2}],c={toc:d};function m(e){let{components:a,...n}=e;return(0,l.kt)("wrapper",(0,t.Z)({},c,n,{components:a,mdxType:"MDXLayout"}),(0,l.kt)("h2",{id:"modelchassiscompassplugin"},(0,l.kt)("strong",{parentName:"h2"},"ModelChassisCompassPlugin")),(0,l.kt)("h2",{id:"\u529f\u80fd\u8bf4\u660e"},"\u529f\u80fd\u8bf4\u660e"),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"\u6a21\u578b\u5e95\u76d8\u6307\u5357\u9488\u63d2\u4ef6")," \u96c6\u6210\u4e86\u4e00\u5957\u80fd\u591f\u5728\u6a21\u578b\u72b6\u6001\u4e0b\u67e5\u770b\u6a21\u578b\u671d\u5411\u7684\u6307\u5357\u9488\u5e95\u76d8"),(0,l.kt)("p",null,"\u8be6\u7ec6\u529f\u80fd\u70b9\u5982\u4e0b\uff1a"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u5728\u6a21\u578b\u6001\u4e0b\uff0c\u4f7f\u7528\u6307\u5357\u9488\u6a21\u578b\u6807\u8bc6\u6a21\u578b\u7269\u7406\u671d\u5411\u3002")),(0,l.kt)("h2",{id:"\u6548\u679c\u5c55\u793a"},"\u6548\u679c\u5c55\u793a"),(0,l.kt)("p",null,"\u70b9\u51fb",(0,l.kt)("strong",{parentName:"p"},"\u7a7a\u95f4\u603b\u89c8"),"\u6309\u94ae\uff0c\u67e5\u770b\u7a7a\u95f4\u603b\u89c8\u6a21\u6001\u4e0b\u7684\u6a21\u578b\u5e95\u76d8\u6307\u5357\u9488\u3002"),(0,l.kt)("div",{className:"docs-vr-normal"},(0,l.kt)("iframe",{className:"docs-vr-iframe",src:"https://realsee.js.org/dnalogel/src/ModelChassisCompassPlugin/index.html"})),(0,l.kt)("h2",{id:"\u5b89\u88c5\u5f15\u7528"},"\u5b89\u88c5\u5f15\u7528"),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"\u8bf7\u6309\u9700\u9009\u62e9 ",(0,l.kt)("inlineCode",{parentName:"strong"},"yarn")," \u6216 ",(0,l.kt)("inlineCode",{parentName:"strong"},"npm")," \u5b89\u88c5\u65b9\u5f0f\uff1a")),(0,l.kt)(r.Z,{groupId:"npm2yarn",mdxType:"Tabs"},(0,l.kt)(s.Z,{value:"npm",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"npm install @realsee/dnalogel\n"))),(0,l.kt)(s.Z,{value:"yarn",label:"Yarn",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"yarn add @realsee/dnalogel\n")))),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"\u901a\u8fc7 es \u5f15\u7528\uff1a")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-tsx"},'import { ModelChassisCompassPlugin } from "@realsee/dnalogel"\n')),(0,l.kt)("h2",{id:"\u5f00\u53d1\u6307\u5357"},"\u5f00\u53d1\u6307\u5357"),(0,l.kt)("h3",{id:"\u521d\u59cb\u5316"},"\u521d\u59cb\u5316"),(0,l.kt)("p",null,"\u5728\u521d\u59cb\u5316 ",(0,l.kt)("inlineCode",{parentName:"p"},"Five")," \u5b9e\u4f8b\u65f6\uff0c\u5c06 ",(0,l.kt)("inlineCode",{parentName:"p"},"ModelChassisCompassPlugin")," \u914d\u7f6e\u5728\u521d\u59cb\u5316\u63d2\u4ef6\u53c2\u6570\u5373\u53ef\u3002"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-ts"},"import { Five } from '@realsee/five'\nimport { ModelChassisCompassPlugin } from \"@realsee/dnalogel\";\n\nconst five = new Five({\n    plugins: [\n        [\n            ModelChassisCompassPlugin,\n            'modelChassisCompassPlugin', // \u81ea\u5b9a\u4e49\u63d2\u4ef6\u540d\u79f0\n            {\n                // \u53c2\u6570\u914d\u7f6e\n            }\n        ]\n    ]\n})\n")),(0,l.kt)("h3",{id:"react-\u521d\u59cb\u5316"},"React \u521d\u59cb\u5316"),(0,l.kt)("p",null,"\u5728\u521b\u5efa ",(0,l.kt)("inlineCode",{parentName:"p"},"FiveProvider")," \u65f6\uff0c\u5c06 ",(0,l.kt)("inlineCode",{parentName:"p"},"ModelChassisCompassPlugin")," \u914d\u7f6e\u5728\u521d\u59cb\u5316\u63d2\u4ef6\u53c2\u6570\u5373\u53ef\u3002"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-ts"},'import { ModelChassisCompassPlugin } from "@realsee/dnalogel";\nimport { createFiveProvider, FiveCanvas } from "@realsee/five/react";\n\nconst FiveProvider = createFiveProvider({\n    plugins: [\n        [\n            ModelChassisCompassPlugin,\n            \'modelChassisCompassPlugin\', // \u81ea\u5b9a\u4e49\u63d2\u4ef6\u540d\u79f0\n            {\n                // \u53c2\u6570\u914d\u7f6e\n            }\n        ]\n    ]\n});\n')),(0,l.kt)("h3",{id:"vue-\u521d\u59cb\u5316"},"Vue \u521d\u59cb\u5316"),(0,l.kt)("p",null,"\u5728\u4f7f\u7528 ",(0,l.kt)("inlineCode",{parentName:"p"},"FiveProvider")," \u65f6\uff0c\u5c06 ",(0,l.kt)("inlineCode",{parentName:"p"},"ModelChassisCompassPlugin")," \u914d\u7f6e\u5728\u521d\u59cb\u5316\u63d2\u4ef6\u53c2\u6570\u5373\u53ef\u3002"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-vue"},'<template>\n  <FiveProvider :fiveInitArgs="fiveInitArgs">\n  </FiveProvider>\n</template>\n<script setup>\nimport ModelChassisCompassPlugin from "@realsee/dnalogel/libs/ModelChassisCompassPlugin";\nimport { FiveProvider, FiveCanvas } from "@realsee/five/vue";\nconst fiveInitArgs = {\n    plugins: [\n        [\n            ModelChassisCompassPlugin,\n            \'modelChassisCompassPlugin\', // \u81ea\u5b9a\u4e49\u63d2\u4ef6\u540d\u79f0\n            {\n                // \u53c2\u6570\u914d\u7f6e\n            }\n        ]\n    ]\n}\n<\/script>\n')),(0,l.kt)("h3",{id:"\u8f7d\u5165\u6570\u636e"},"\u8f7d\u5165\u6570\u636e"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-ts"},"// \u83b7\u53d6\u63d2\u4ef6\u5b9e\u4f8b,\u5176\u4e2d `modelChassisCompassPlugin` \u662f\u521d\u59cb\u5316\u65f6\u81ea\u5b9a\u4e49\u7684\u540d\u79f0\nconst pluginInstance = five.plugins.modelChassisCompassPlugin \n\n// \u8c03\u7528 `load` \u65b9\u6cd5\u8f7d\u5165\u6a21\u578b\u623f\u5c4b\u6807\u7b7e\u6570\u636e\npluginInstance.load(modelChassisCompassPluginData)\n")),(0,l.kt)("h3",{id:"\u6838\u5fc3\u65b9\u6cd5"},"\u6838\u5fc3\u65b9\u6cd5"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"load(data: ModelChassisCompassPluginData)")," \u8f7d\u5165\u63d2\u4ef6\u6570\u636e")),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"\u60a8\u9700\u8981\u624b\u52a8\u8f7d\u5165\u63d2\u4ef6\u6570\u636e\uff0c\u6570\u636e\u6765\u6e90\u8bf7\u9605\u8bfb",(0,l.kt)("a",{parentName:"p",href:"https://open-platform.realsee.com/developer/open/api#/"},"\u5982\u89c6\u5f00\u653e\u5e73\u53f0 API"),"\u3002")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},(0,l.kt)("inlineCode",{parentName:"p"},"enable: () => void")," \u542f\u7528\u63d2\u4ef6")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},(0,l.kt)("inlineCode",{parentName:"p"},"disable: () => void")," \u7981\u7528\u63d2\u4ef6"))),(0,l.kt)("h2",{id:"demo-\u6e90\u7801\u53c2\u8003"},"demo \u6e90\u7801\u53c2\u8003"),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"https://github.com/realsee-developer/dnalogel/tree/main/examples/src"},"demo \u6e90\u7801\u53c2\u8003")))}m.isMDXComponent=!0}}]);