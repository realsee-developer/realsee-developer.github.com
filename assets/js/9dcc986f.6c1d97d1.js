"use strict";(self.webpackChunkrealsee_developer_github_com=self.webpackChunkrealsee_developer_github_com||[]).push([[7036],{49613:(e,n,l)=>{l.d(n,{Zo:()=>d,kt:()=>m});var t=l(59496);function a(e,n,l){return n in e?Object.defineProperty(e,n,{value:l,enumerable:!0,configurable:!0,writable:!0}):e[n]=l,e}function r(e,n){var l=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),l.push.apply(l,t)}return l}function o(e){for(var n=1;n<arguments.length;n++){var l=null!=arguments[n]?arguments[n]:{};n%2?r(Object(l),!0).forEach((function(n){a(e,n,l[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(l)):r(Object(l)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(l,n))}))}return e}function i(e,n){if(null==e)return{};var l,t,a=function(e,n){if(null==e)return{};var l,t,a={},r=Object.keys(e);for(t=0;t<r.length;t++)l=r[t],n.indexOf(l)>=0||(a[l]=e[l]);return a}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(t=0;t<r.length;t++)l=r[t],n.indexOf(l)>=0||Object.prototype.propertyIsEnumerable.call(e,l)&&(a[l]=e[l])}return a}var u=t.createContext({}),s=function(e){var n=t.useContext(u),l=n;return e&&(l="function"==typeof e?e(n):o(o({},n),e)),l},d=function(e){var n=s(e.components);return t.createElement(u.Provider,{value:n},e.children)},p={inlineCode:"code",wrapper:function(e){var n=e.children;return t.createElement(t.Fragment,{},n)}},c=t.forwardRef((function(e,n){var l=e.components,a=e.mdxType,r=e.originalType,u=e.parentName,d=i(e,["components","mdxType","originalType","parentName"]),c=s(l),m=a,v=c["".concat(u,".").concat(m)]||c[m]||p[m]||r;return l?t.createElement(v,o(o({ref:n},d),{},{components:l})):t.createElement(v,o({ref:n},d))}));function m(e,n){var l=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var r=l.length,o=new Array(r);o[0]=c;var i={};for(var u in n)hasOwnProperty.call(n,u)&&(i[u]=n[u]);i.originalType=e,i.mdxType="string"==typeof e?e:a,o[1]=i;for(var s=2;s<r;s++)o[s]=l[s];return t.createElement.apply(null,o)}return t.createElement.apply(null,l)}c.displayName="MDXCreateElement"},45558:(e,n,l)=>{l.d(n,{Z:()=>o});var t=l(59496),a=l(45924);const r="tabItem_IPoj";function o(e){let{children:n,hidden:l,className:o}=e;return t.createElement("div",{role:"tabpanel",className:(0,a.Z)(r,o),hidden:l},n)}},38637:(e,n,l)=>{l.d(n,{Z:()=>m});var t=l(2962),a=l(59496),r=l(45924),o=l(26709),i=l(33548),u=l(14714),s=l(60411);const d="tabList_xr86",p="tabItem_r4_W";function c(e){var n;const{lazy:l,block:o,defaultValue:c,values:m,groupId:v,className:g}=e,b=a.Children.map(e.children,(e=>{if((0,a.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})),f=m??b.map((e=>{let{props:{value:n,label:l,attributes:t}}=e;return{value:n,label:l,attributes:t}})),k=(0,i.l)(f,((e,n)=>e.value===n.value));if(k.length>0)throw new Error(`Docusaurus error: Duplicate values "${k.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`);const h=null===c?c:c??(null==(n=b.find((e=>e.props.default)))?void 0:n.props.value)??b[0].props.value;if(null!==h&&!f.some((e=>e.value===h)))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${h}" but none of its children has the corresponding value. Available values are: ${f.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);const{tabGroupChoices:y,setTabGroupChoices:N}=(0,u.U)(),[P,E]=(0,a.useState)(h),w=[],{blockElementScrollPositionUntilNextRender:R}=(0,s.o5)();if(null!=v){const e=y[v];null!=e&&e!==P&&f.some((n=>n.value===e))&&E(e)}const L=e=>{const n=e.currentTarget,l=w.indexOf(n),t=f[l].value;t!==P&&(R(n),E(t),null!=v&&N(v,String(t)))},T=e=>{var n;let l=null;switch(e.key){case"Enter":L(e);break;case"ArrowRight":{const n=w.indexOf(e.currentTarget)+1;l=w[n]??w[0];break}case"ArrowLeft":{const n=w.indexOf(e.currentTarget)-1;l=w[n]??w[w.length-1];break}}null==(n=l)||n.focus()};return a.createElement("div",{className:(0,r.Z)("tabs-container",d)},a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,r.Z)("tabs",{"tabs--block":o},g)},f.map((e=>{let{value:n,label:l,attributes:o}=e;return a.createElement("li",(0,t.Z)({role:"tab",tabIndex:P===n?0:-1,"aria-selected":P===n,key:n,ref:e=>w.push(e),onKeyDown:T,onClick:L},o,{className:(0,r.Z)("tabs__item",p,null==o?void 0:o.className,{"tabs__item--active":P===n})}),l??n)}))),l?(0,a.cloneElement)(b.filter((e=>e.props.value===P))[0],{className:"margin-top--md"}):a.createElement("div",{className:"margin-top--md"},b.map(((e,n)=>(0,a.cloneElement)(e,{key:n,hidden:e.props.value!==P})))))}function m(e){const n=(0,o.Z)();return a.createElement(c,(0,t.Z)({key:String(n)},e))}},32232:(e,n,l)=>{l.d(n,{B:()=>i});var t=l(59496),a=l(95606),r=l(26773),o=l(45924);a.Z,r.Z;function i(e){let{name:n,image:l,url:i,description:u}=e;return t.createElement("div",{className:"col col--6 margin-bottom--lg"},t.createElement("div",{className:(0,o.Z)("card")},t.createElement("div",{className:(0,o.Z)("card__image")},t.createElement(r.Z,{to:i})),t.createElement("div",{className:"card__body"},n&&t.createElement("h3",null,n),u&&t.createElement("p",null,u)),t.createElement("div",{className:"card__footer"},t.createElement("div",{className:"button-group button-group--block"},t.createElement(r.Z,{className:"button button--secondary",to:i},t.createElement(a.Z,{id:"playground.tryItButton"},"Try it now!"))))))}},99073:(e,n,l)=>{l.r(n),l.d(n,{assets:()=>p,contentTitle:()=>s,default:()=>v,frontMatter:()=>u,metadata:()=>d,toc:()=>c});var t=l(2962),a=(l(59496),l(49613)),r=l(38637),o=l(45558),i=l(32232);const u={title:"\u6a21\u578b\u5206\u95f4\u6807\u7b7e"},s=void 0,d={unversionedId:"front/3d-space/advanced/dnalogel/ModelRoomLabelPlugin",id:"front/3d-space/advanced/dnalogel/ModelRoomLabelPlugin",title:"\u6a21\u578b\u5206\u95f4\u6807\u7b7e",description:"ModelRoomLabelPlugin",source:"@site/docs/front/3d-space/advanced/dnalogel/ModelRoomLabelPlugin.md",sourceDirName:"front/3d-space/advanced/dnalogel",slug:"/front/3d-space/advanced/dnalogel/ModelRoomLabelPlugin",permalink:"/docs/front/3d-space/advanced/dnalogel/ModelRoomLabelPlugin",draft:!1,tags:[],version:"current",lastUpdatedBy:"sansi.lcj",lastUpdatedAt:1669717185,formattedLastUpdatedAt:"2022\u5e7411\u670829\u65e5",frontMatter:{title:"\u6a21\u578b\u5206\u95f4\u6807\u7b7e"},sidebar:"\u4e09\u7ef4\u7a7a\u95f4",previous:{title:"\ud83d\udce6 \u4fef\u89c6\u6a21\u578b\u6237\u578b\u56fe",permalink:"/docs/front/3d-space/advanced/dnalogel/floorplan/TopviewFloorplanPlugin"},next:{title:"\u6a21\u578b\u5e95\u76d8\u6307\u5357\u9488",permalink:"/docs/front/3d-space/advanced/dnalogel/ModelChassisCompassPlugin"}},p={},c=[{value:"<strong>ModelRoomLabelPlugin</strong>",id:"modelroomlabelplugin",level:2},{value:"\u529f\u80fd\u8bf4\u660e",id:"\u529f\u80fd\u8bf4\u660e",level:2},{value:"\u6548\u679c\u5c55\u793a",id:"\u6548\u679c\u5c55\u793a",level:2},{value:"\u5b89\u88c5\u5f15\u7528",id:"\u5b89\u88c5\u5f15\u7528",level:2},{value:"\u5f00\u53d1\u6307\u5357",id:"\u5f00\u53d1\u6307\u5357",level:2},{value:"\u521d\u59cb\u5316",id:"\u521d\u59cb\u5316",level:3},{value:"React \u521d\u59cb\u5316",id:"react-\u521d\u59cb\u5316",level:3},{value:"Vue \u521d\u59cb\u5316",id:"vue-\u521d\u59cb\u5316",level:3},{value:"\u8f7d\u5165\u6570\u636e",id:"\u8f7d\u5165\u6570\u636e",level:3},{value:"\u8282\u70b9\u6302\u8f7d",id:"\u8282\u70b9\u6302\u8f7d",level:3},{value:"\u6838\u5fc3\u65b9\u6cd5",id:"\u6838\u5fc3\u65b9\u6cd5",level:3},{value:"demo \u6e90\u7801\u53c2\u8003",id:"demo-\u6e90\u7801\u53c2\u8003",level:2}],m={toc:c};function v(e){let{components:n,...l}=e;return(0,a.kt)("wrapper",(0,t.Z)({},m,l,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"modelroomlabelplugin"},(0,a.kt)("strong",{parentName:"h2"},"ModelRoomLabelPlugin")),(0,a.kt)("h2",{id:"\u529f\u80fd\u8bf4\u660e"},"\u529f\u80fd\u8bf4\u660e"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"\u6a21\u578b\u5206\u95f4\u6807\u7b7e\u63d2\u4ef6")," \u96c6\u6210\u4e86\u4e00\u5957\u80fd\u591f\u5728\u6a21\u578b\u72b6\u6001\u4e0b\u5feb\u901f\u67e5\u770b\u623f\u95f4\u540d\u79f0 & \u5feb\u901f\u8bbf\u95ee\u623f\u95f4\u5168\u666f\u7684\u4ea4\u4e92\u3002"),(0,a.kt)("p",null,"\u8be6\u7ec6\u529f\u80fd\u70b9\u5982\u4e0b\uff1a"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u5728\u6a21\u578b\u6001\u4e0b\uff0c\u7528\u6807\u7b7e\u5c55\u793a\u5bf9\u5e94\u7684\u623f\u5c4b\u540d\u79f0\u3002"),(0,a.kt)("li",{parentName:"ul"},"\u5f53\u6807\u7b7e\u6807\u8bb0\u7684\u623f\u95f4\u88ab\u5176\u4ed6\u623f\u5c4b\u6240\u906e\u6321\u65f6\uff0c\u81ea\u52a8\u9690\u85cf\u6b64\u6807\u7b7e\u3002"),(0,a.kt)("li",{parentName:"ul"},"\u79fb\u52a8\u6a21\u578b\u65f6\uff0c\u5bf9\u5e94\u6807\u7b7e\u4e5f\u80fd\u8ddf\u968f\u6a21\u578b\u79fb\u52a8\u3002"),(0,a.kt)("li",{parentName:"ul"},"\u70b9\u51fb\u6807\u7b7e\u65f6\uff0c\u4ece\u6a21\u578b\u72b6\u6001\u5207\u6362\u5230\u5168\u666f\uff0c\u5e76\u79fb\u52a8\u5230\u5bf9\u5e94\u7684\u623f\u95f4\u4e2d\u5fc3\u7684\u70b9\u4f4d\u4e0a\u3002"),(0,a.kt)("li",{parentName:"ul"},"\u5207\u6362\u5230\u623f\u95f4\u65f6\uff0c\u76f8\u673a\u89c6\u89d2\u4f1a\u671d\u5411\u623f\u95f4\u4e2d\u5fc3\u3002")),(0,a.kt)("h2",{id:"\u6548\u679c\u5c55\u793a"},"\u6548\u679c\u5c55\u793a"),(0,a.kt)("p",null,"\u70b9\u51fb",(0,a.kt)("strong",{parentName:"p"},"\u7a7a\u95f4\u603b\u89c8"),"\u6309\u94ae\uff0c\u67e5\u770b\u7a7a\u95f4\u603b\u89c8\u6a21\u6001\u4e0b\u7684\u623f\u5c4b\u6807\u7b7e\u6548\u679c\u3002"),(0,a.kt)("div",{className:"docs-vr-normal"},(0,a.kt)("iframe",{className:"docs-vr-iframe",src:"https://realsee.js.org/dnalogel/src/ModelRoomLabelPlugin/index.html"})),(0,a.kt)(i.B,{url:"https://stackblitz.com/edit/modelroomlabelplugin?file=index.tsx",mdxType:"PlaygroundCard"}),(0,a.kt)("h2",{id:"\u5b89\u88c5\u5f15\u7528"},"\u5b89\u88c5\u5f15\u7528"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"\u8bf7\u6309\u9700\u9009\u62e9 ",(0,a.kt)("inlineCode",{parentName:"strong"},"yarn")," \u6216 ",(0,a.kt)("inlineCode",{parentName:"strong"},"npm")," \u5b89\u88c5\u65b9\u5f0f\uff1a")),(0,a.kt)(r.Z,{groupId:"npm2yarn",mdxType:"Tabs"},(0,a.kt)(o.Z,{value:"npm",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"npm install @realsee/dnalogel\n"))),(0,a.kt)(o.Z,{value:"yarn",label:"Yarn",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"yarn add @realsee/dnalogel\n")))),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"\u901a\u8fc7 es \u5f15\u7528\uff1a")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx"},'import { ModelRoomLabelPlugin } from "@realsee/dnagel";\n')),(0,a.kt)("h2",{id:"\u5f00\u53d1\u6307\u5357"},"\u5f00\u53d1\u6307\u5357"),(0,a.kt)("h3",{id:"\u521d\u59cb\u5316"},"\u521d\u59cb\u5316"),(0,a.kt)("p",null,"\u5728\u521d\u59cb\u5316 ",(0,a.kt)("inlineCode",{parentName:"p"},"Five")," \u5b9e\u4f8b\u65f6\uff0c\u5c06 ",(0,a.kt)("inlineCode",{parentName:"p"},"ModelRoomLabelPlugin")," \u914d\u7f6e\u5728\u521d\u59cb\u5316\u63d2\u4ef6\u53c2\u6570\u5373\u53ef\u3002"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},'import { Five } from "@realsee/five";\nimport { ModelRoomLabelPlugin } from "@realsee/dnalogel";\n\nconst five = new Five({\n  plugins: [\n    [\n      ModelRoomLabelPlugin,\n      "modelRoomLabelPlugin", // \u81ea\u5b9a\u4e49\u63d2\u4ef6\u540d\u79f0\n      {\n        // \u53c2\u6570\u914d\u7f6e\n      },\n    ],\n  ],\n});\n')),(0,a.kt)("h3",{id:"react-\u521d\u59cb\u5316"},"React \u521d\u59cb\u5316"),(0,a.kt)("p",null,"\u5728\u521b\u5efa ",(0,a.kt)("inlineCode",{parentName:"p"},"FiveProvider")," \u65f6\uff0c\u5c06 ",(0,a.kt)("inlineCode",{parentName:"p"},"ModelRoomLabelPlugin")," \u914d\u7f6e\u5728\u521d\u59cb\u5316\u63d2\u4ef6\u53c2\u6570\u5373\u53ef\u3002"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},'import { ModelRoomLabelPlugin } from "@realsee/dnalogel";\nimport { createFiveProvider, FiveCanvas } from "@realsee/five/react";\n\nconst FiveProvider = createFiveProvider({\n  plugins: [\n    [\n      ModelRoomLabelPlugin,\n      "modelRoomLabelPlugin", // \u81ea\u5b9a\u4e49\u63d2\u4ef6\u540d\u79f0\n      {\n        // \u53c2\u6570\u914d\u7f6e\n      },\n    ],\n  ],\n});\n')),(0,a.kt)("h3",{id:"vue-\u521d\u59cb\u5316"},"Vue \u521d\u59cb\u5316"),(0,a.kt)("p",null,"\u5728\u4f7f\u7528 ",(0,a.kt)("inlineCode",{parentName:"p"},"FiveProvider")," \u65f6\uff0c\u5c06 ",(0,a.kt)("inlineCode",{parentName:"p"},"ModelRoomLabelPlugin")," \u914d\u7f6e\u5728\u521d\u59cb\u5316\u63d2\u4ef6\u53c2\u6570\u5373\u53ef\u3002"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-vue"},'<template>\n  <FiveProvider :fiveInitArgs="fiveInitArgs"> </FiveProvider>\n</template>\n<script setup>\nimport ModelRoomLabelPlugin from "@realsee/dnalogel/libs/ModelRoomLabelPlugin";\nimport { FiveProvider, FiveCanvas } from "@realsee/five/vue";\nconst fiveInitArgs = {\n  plugins: [\n    [\n      ModelRoomLabelPlugin,\n      "modelRoomLabelPlugin", // \u81ea\u5b9a\u4e49\u63d2\u4ef6\u540d\u79f0\n      {\n        // \u53c2\u6570\u914d\u7f6e\n      },\n    ],\n  ],\n};\n<\/script>\n')),(0,a.kt)("h3",{id:"\u8f7d\u5165\u6570\u636e"},"\u8f7d\u5165\u6570\u636e"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},"// \u83b7\u53d6\u63d2\u4ef6\u5b9e\u4f8b,\u5176\u4e2d `modelRoomLabelPlugin` \u662f\u521d\u59cb\u5316\u65f6\u81ea\u5b9a\u4e49\u7684\u540d\u79f0\nconst pluginInstance = five.plugins.modelRoomLabel;\n\n// \u8c03\u7528 `load` \u65b9\u6cd5\u8f7d\u5165\u6a21\u578b\u623f\u5c4b\u6807\u7b7e\u6570\u636e\npluginInstance.load(modelRoomLabels);\n")),(0,a.kt)("h3",{id:"\u8282\u70b9\u6302\u8f7d"},"\u8282\u70b9\u6302\u8f7d"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},'// \u8c03\u7528 appendTo(wrapper: Element) \u65b9\u6cd5\u6302\u8f7d DOM \u8282\u70b9\nfive.plugins.modelRoomLabel.appendTo(wrapper);\n\n// \u793a\u4f8b\nReact.useEffect(() => {\n  // plugin-full-screen-container \u5373\u4e3a\u63d0\u524d\u51c6\u5907\u597d\u7684\u6302\u8f7d\u8282\u70b9\n  const wrapper = document.querySelector(".plugin-full-screen-container");\n  if (wrapper) {\n    five.plugins.modelRoomLabelPlugin.appendTo(wrapper);\n  }\n}, []);\n')),(0,a.kt)("h3",{id:"\u6838\u5fc3\u65b9\u6cd5"},"\u6838\u5fc3\u65b9\u6cd5"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"load(data: ModelRoomLabelPluginData)")," \u8f7d\u5165\u63d2\u4ef6\u6570\u636e")),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"\u60a8\u9700\u8981\u624b\u52a8\u8f7d\u5165\u63d2\u4ef6\u6570\u636e\uff0c\u6570\u636e\u6765\u6e90\u8bf7\u9605\u8bfb",(0,a.kt)("a",{parentName:"p",href:"https://open-platform.realsee.com/developer/open/api#/"},"\u5982\u89c6\u5f00\u653e\u5e73\u53f0 API"),"\u3002")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"appendTo(wrapper: Element)")," \u6302\u8f7d DOM \u8282\u70b9")),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"\u60a8\u53ef\u4ee5\u5c06\u63d2\u4ef6 DOM \u6a21\u5757\u8f7d\u5165\u60a8\u7684 HTML \u7ed3\u6784\u4e2d\u3002")),(0,a.kt)("h2",{id:"demo-\u6e90\u7801\u53c2\u8003"},"demo \u6e90\u7801\u53c2\u8003"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/realsee-developer/dnalogel/tree/main/examples/src"},"demo \u6e90\u7801\u53c2\u8003")))}v.isMDXComponent=!0}}]);