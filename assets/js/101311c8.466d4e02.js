"use strict";(self.webpackChunkrealsee_developer_github_com=self.webpackChunkrealsee_developer_github_com||[]).push([[1290],{49613:(e,n,a)=>{a.d(n,{Zo:()=>d,kt:()=>m});var t=a(59496);function l(e,n,a){return n in e?Object.defineProperty(e,n,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[n]=a,e}function r(e,n){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),a.push.apply(a,t)}return a}function o(e){for(var n=1;n<arguments.length;n++){var a=null!=arguments[n]?arguments[n]:{};n%2?r(Object(a),!0).forEach((function(n){l(e,n,a[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(a,n))}))}return e}function i(e,n){if(null==e)return{};var a,t,l=function(e,n){if(null==e)return{};var a,t,l={},r=Object.keys(e);for(t=0;t<r.length;t++)a=r[t],n.indexOf(a)>=0||(l[a]=e[a]);return l}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(t=0;t<r.length;t++)a=r[t],n.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(l[a]=e[a])}return l}var p=t.createContext({}),s=function(e){var n=t.useContext(p),a=n;return e&&(a="function"==typeof e?e(n):o(o({},n),e)),a},d=function(e){var n=s(e.components);return t.createElement(p.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return t.createElement(t.Fragment,{},n)}},c=t.forwardRef((function(e,n){var a=e.components,l=e.mdxType,r=e.originalType,p=e.parentName,d=i(e,["components","mdxType","originalType","parentName"]),c=s(a),m=l,v=c["".concat(p,".").concat(m)]||c[m]||u[m]||r;return a?t.createElement(v,o(o({ref:n},d),{},{components:a})):t.createElement(v,o({ref:n},d))}));function m(e,n){var a=arguments,l=n&&n.mdxType;if("string"==typeof e||l){var r=a.length,o=new Array(r);o[0]=c;var i={};for(var p in n)hasOwnProperty.call(n,p)&&(i[p]=n[p]);i.originalType=e,i.mdxType="string"==typeof e?e:l,o[1]=i;for(var s=2;s<r;s++)o[s]=a[s];return t.createElement.apply(null,o)}return t.createElement.apply(null,a)}c.displayName="MDXCreateElement"},45558:(e,n,a)=>{a.d(n,{Z:()=>o});var t=a(59496),l=a(45924);const r="tabItem_IPoj";function o(e){let{children:n,hidden:a,className:o}=e;return t.createElement("div",{role:"tabpanel",className:(0,l.Z)(r,o),hidden:a},n)}},38637:(e,n,a)=>{a.d(n,{Z:()=>m});var t=a(2962),l=a(59496),r=a(45924),o=a(26709),i=a(33548),p=a(14714),s=a(60411);const d="tabList_xr86",u="tabItem_r4_W";function c(e){var n;const{lazy:a,block:o,defaultValue:c,values:m,groupId:v,className:k}=e,g=l.Children.map(e.children,(e=>{if((0,l.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})),f=m??g.map((e=>{let{props:{value:n,label:a,attributes:t}}=e;return{value:n,label:a,attributes:t}})),b=(0,i.l)(f,((e,n)=>e.value===n.value));if(b.length>0)throw new Error(`Docusaurus error: Duplicate values "${b.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`);const N=null===c?c:c??(null==(n=g.find((e=>e.props.default)))?void 0:n.props.value)??g[0].props.value;if(null!==N&&!f.some((e=>e.value===N)))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${N}" but none of its children has the corresponding value. Available values are: ${f.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);const{tabGroupChoices:P,setTabGroupChoices:h}=(0,p.U)(),[y,F]=(0,l.useState)(N),O=[],{blockElementScrollPositionUntilNextRender:C}=(0,s.o5)();if(null!=v){const e=P[v];null!=e&&e!==y&&f.some((n=>n.value===e))&&F(e)}const w=e=>{const n=e.currentTarget,a=O.indexOf(n),t=f[a].value;t!==y&&(C(n),F(t),null!=v&&h(v,String(t)))},E=e=>{var n;let a=null;switch(e.key){case"Enter":w(e);break;case"ArrowRight":{const n=O.indexOf(e.currentTarget)+1;a=O[n]??O[0];break}case"ArrowLeft":{const n=O.indexOf(e.currentTarget)-1;a=O[n]??O[O.length-1];break}}null==(n=a)||n.focus()};return l.createElement("div",{className:(0,r.Z)("tabs-container",d)},l.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,r.Z)("tabs",{"tabs--block":o},k)},f.map((e=>{let{value:n,label:a,attributes:o}=e;return l.createElement("li",(0,t.Z)({role:"tab",tabIndex:y===n?0:-1,"aria-selected":y===n,key:n,ref:e=>O.push(e),onKeyDown:E,onClick:w},o,{className:(0,r.Z)("tabs__item",u,null==o?void 0:o.className,{"tabs__item--active":y===n})}),a??n)}))),a?(0,l.cloneElement)(g.filter((e=>e.props.value===y))[0],{className:"margin-top--md"}):l.createElement("div",{className:"margin-top--md"},g.map(((e,n)=>(0,l.cloneElement)(e,{key:n,hidden:e.props.value!==y})))))}function m(e){const n=(0,o.Z)();return l.createElement(c,(0,t.Z)({key:String(n)},e))}},82476:(e,n,a)=>{a.r(n),a.d(n,{assets:()=>d,contentTitle:()=>p,default:()=>k,frontMatter:()=>i,metadata:()=>s,toc:()=>u});var t=a(2962),l=(a(59496),a(49613)),r=a(38637),o=a(45558);const i={title:"\ud83d\udce6 \u5168\u666f\u6237\u578b\u96f7\u8fbe\u56fe"},p=void 0,s={unversionedId:"front/3d-space/advanced/dnalogel/floorplan/PanoFloorplanRadarPlugin",id:"front/3d-space/advanced/dnalogel/floorplan/PanoFloorplanRadarPlugin",title:"\ud83d\udce6 \u5168\u666f\u6237\u578b\u96f7\u8fbe\u56fe",description:"PanoFloorplanRadarPlugin",source:"@site/docs/front/3d-space/advanced/dnalogel/floorplan/PanoFloorplanRadarPlugin.md",sourceDirName:"front/3d-space/advanced/dnalogel/floorplan",slug:"/front/3d-space/advanced/dnalogel/floorplan/PanoFloorplanRadarPlugin",permalink:"/docs/front/3d-space/advanced/dnalogel/floorplan/PanoFloorplanRadarPlugin",draft:!1,tags:[],version:"current",lastUpdatedBy:"Junchao Gao",lastUpdatedAt:1669025818,formattedLastUpdatedAt:"2022\u5e7411\u670821\u65e5",frontMatter:{title:"\ud83d\udce6 \u5168\u666f\u6237\u578b\u96f7\u8fbe\u56fe"},sidebar:"\u4e09\u7ef4\u7a7a\u95f4",previous:{title:"\u6237\u578b\u56fe\u6570\u636e\u83b7\u53d6\ud83c\udf1f",permalink:"/docs/front/3d-space/advanced/dnalogel/floorplan/getFloorplanData"},next:{title:"\ud83d\udce6 \u6a21\u578b\u6237\u578b\u56fe",permalink:"/docs/front/3d-space/advanced/dnalogel/floorplan/ModelFloorplanPlugin"}},d={},u=[{value:"<strong>PanoFloorplanRadarPlugin</strong>",id:"panofloorplanradarplugin",level:2},{value:"\u793a\u4f8b\u6548\u679c",id:"\u793a\u4f8b\u6548\u679c",level:2},{value:"\u529f\u80fd\u8bf4\u660e",id:"\u529f\u80fd\u8bf4\u660e",level:2},{value:"\u5b89\u88c5\u5f15\u7528",id:"\u5b89\u88c5\u5f15\u7528",level:2},{value:"\u5f00\u53d1\u6307\u5357",id:"\u5f00\u53d1\u6307\u5357",level:2},{value:"\u521d\u59cb\u5316",id:"\u521d\u59cb\u5316",level:3},{value:"React \u521d\u59cb\u5316",id:"react-\u521d\u59cb\u5316",level:3},{value:"Vue \u521d\u59cb\u5316",id:"vue-\u521d\u59cb\u5316",level:3},{value:"\u8f7d\u5165\u6570\u636e",id:"\u8f7d\u5165\u6570\u636e",level:3},{value:"\u6838\u5fc3\u65b9\u6cd5",id:"\u6838\u5fc3\u65b9\u6cd5",level:3},{value:"\u5728\u96f7\u8fbe\u56fe\u4e0a\u5c55\u793a\u989d\u5916\u5185\u5bb9",id:"\u5728\u96f7\u8fbe\u56fe\u4e0a\u5c55\u793a\u989d\u5916\u5185\u5bb9",level:3},{value:"\u914d\u7f6e\u53c2\u6570",id:"\u914d\u7f6e\u53c2\u6570",level:3},{value:"demo \u6e90\u7801\u53c2\u8003",id:"demo-\u6e90\u7801\u53c2\u8003",level:2}],c=(m="PlaygroundCard",function(e){return console.warn("Component "+m+" was not imported, exported, or provided by MDXProvider as global scope"),(0,l.kt)("div",e)});var m;const v={toc:u};function k(e){let{components:n,...a}=e;return(0,l.kt)("wrapper",(0,t.Z)({},v,a,{components:n,mdxType:"MDXLayout"}),(0,l.kt)("h2",{id:"panofloorplanradarplugin"},(0,l.kt)("strong",{parentName:"h2"},"PanoFloorplanRadarPlugin")),(0,l.kt)("admonition",{type:"tip"},(0,l.kt)("mdxAdmonitionTitle",{parentName:"admonition"},"\u6b64\u63d2\u4ef6\u5f3a\u4f9d\u8d56\u4e8e",(0,l.kt)("strong",{parentName:"mdxAdmonitionTitle"},"\u6237\u578b\u56fe\u6570\u636e"),"\uff0c\u8bf7\u7387\u5148\u4e86\u89e3\u5982\u4f55\u83b7\u53d6\u6237\u578b\u56fe\u6570\u636e\u3002")),(0,l.kt)("h2",{id:"\u793a\u4f8b\u6548\u679c"},"\u793a\u4f8b\u6548\u679c"),(0,l.kt)("div",{className:"docs-vr-normal"},(0,l.kt)("iframe",{className:"docs-vr-iframe",src:"https://realsee.js.org/dnalogel/src/PanoFloorplanRadarPlugin/index.html"})),(0,l.kt)(c,{url:"https://stackblitz.com/edit/panofloorplanradarplugin",mdxType:"PlaygroundCard"}),(0,l.kt)("h2",{id:"\u529f\u80fd\u8bf4\u660e"},"\u529f\u80fd\u8bf4\u660e"),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"\u5168\u666f\u6237\u578b\u96f7\u8fbe\u56fe\u63d2\u4ef6")," \u63d0\u4f9b\u4e86\u5728\u5168\u666f\u6a21\u5f0f\u4e0b\u5c55\u793a\u4e8c\u7ef4\u6237\u578b\u56fe\u7684\u529f\u80fd\u3002"),(0,l.kt)("p",null,"\u652f\u6301\u7684\u7279\u6027\u6709\uff1a"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},'\u96f7\u8fbe\u6307\u5f15\uff1a\u4ee5"\u96f7\u8fbe"\u56fe\u6807\u7684\u65b9\u5f0f\u5c55\u793a\u5f53\u524d\u70b9\u4f4d\u7684\u4f4d\u7f6e\u548c\u671d\u5411\u3002'),(0,l.kt)("li",{parentName:"ul"},"\u6237\u578b\u56fe\u81ea\u9002\u5e94\u586b\u5145\uff1a\u6700\u5c0f\u8fb9\u5927\u5c0f\u81ea\u52a8\u8ba1\u7b97\uff0c\u4fdd\u969c\u5c55\u793a\u5728 DOM \u5bb9\u5668\u4e2d\u5fc3\u3002"),(0,l.kt)("li",{parentName:"ul"},"\u5168\u666f\u6a21\u5f0f\u4e0b\u8d70\u70b9\u51fa\u73b0\u697c\u5c42\u53d8\u66f4\u65f6\u4f1a\u81ea\u52a8\u5207\u6362\u81f3\u5f53\u524d\u697c\u5c42\u7684\u6237\u578b\u56fe\u3002"),(0,l.kt)("li",{parentName:"ul"},"\u914d\u7f6e ",(0,l.kt)("inlineCode",{parentName:"li"},"hoverEnable")," \u4e3a ",(0,l.kt)("inlineCode",{parentName:"li"},"true")," (\u9ed8\u8ba4\u914d\u7f6e)\u65f6\uff0c\u9f20\u6807 ",(0,l.kt)("inlineCode",{parentName:"li"},"hover")," \u76f8\u5173\u5206\u95f4\u4f1a\u9ad8\u4eae\u3002")),(0,l.kt)("h2",{id:"\u5b89\u88c5\u5f15\u7528"},"\u5b89\u88c5\u5f15\u7528"),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"\u8bf7\u6309\u9700\u9009\u62e9 ",(0,l.kt)("inlineCode",{parentName:"strong"},"yarn")," \u6216 ",(0,l.kt)("inlineCode",{parentName:"strong"},"npm")," \u5b89\u88c5\u65b9\u5f0f\uff1a")),(0,l.kt)(r.Z,{groupId:"npm2yarn",mdxType:"Tabs"},(0,l.kt)(o.Z,{value:"npm",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"npm install @realsee/dnalogel\n"))),(0,l.kt)(o.Z,{value:"yarn",label:"Yarn",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"yarn add @realsee/dnalogel\n")))),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"\u901a\u8fc7 es \u5f15\u7528\uff1a")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-tsx"},'import { PanoFloorplanRadarPlugin } from "@realsee/dnalogel"\n')),(0,l.kt)("h2",{id:"\u5f00\u53d1\u6307\u5357"},"\u5f00\u53d1\u6307\u5357"),(0,l.kt)("h3",{id:"\u521d\u59cb\u5316"},"\u521d\u59cb\u5316"),(0,l.kt)("p",null,"\u5728\u521d\u59cb\u5316 ",(0,l.kt)("inlineCode",{parentName:"p"},"Five")," \u5b9e\u4f8b\u7684\u65f6\u5019\uff0c\u5c06 ",(0,l.kt)("inlineCode",{parentName:"p"},"PanoFloorplanRadarPlugin")," \u914d\u7f6e\u5728\u521d\u59cb\u5316\u63d2\u4ef6\u53c2\u6570\u5373\u53ef\u3002"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-ts"},"import Five  from '@realsee/five'\nimport { PanoFloorplanRadarPlugin } from \"@realsee/dnalogel\"\n\n// \u521d\u59cb\u5316 five \u5b9e\u4f8b\nconst five = new Five({\n    plugins: [\n     [PanoFloorplanRadarPlugin, 'panoFloorplanRadar', {\n     //\u521d\u59cb\u5316\u53c2\u6570\n        }]\n    ]\n})\n")),(0,l.kt)("h3",{id:"react-\u521d\u59cb\u5316"},"React \u521d\u59cb\u5316"),(0,l.kt)("p",null,"\u5728\u521b\u5efa FiveProvider \u7ec4\u4ef6\u65f6\u5c06 ",(0,l.kt)("inlineCode",{parentName:"p"},"PanoFloorplanRadarPlugin")," \u914d\u7f6e\u5728\u521d\u59cb\u5316\u63d2\u4ef6\u53c2\u6570\u5373\u53ef\u3002"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-ts"},'import { createFiveProvider } from \'@realsee/five/react\'\nimport { PanoFloorplanRadarPlugin } from "@realsee/dnalogel"\n\n// \u521b\u5efa FiveProvider \u7ec4\u4ef6\nconst FiveProvider = createFiveProvider({\n    plugins: [\n        [PanoFloorplanRadarPlugin, "panoFloorplanRadar", {\n            // \u521d\u59cb\u5316\u53c2\u6570\n        }]\n    ]\n})\n')),(0,l.kt)("h3",{id:"vue-\u521d\u59cb\u5316"},"Vue \u521d\u59cb\u5316"),(0,l.kt)("p",null,"\u5728\u4f7f\u7528 ",(0,l.kt)("inlineCode",{parentName:"p"},"FiveProvider")," \u65f6\uff0c\u5c06 ",(0,l.kt)("inlineCode",{parentName:"p"},"PanoFloorplanRadarPlugin")," \u914d\u7f6e\u5728\u521d\u59cb\u5316\u63d2\u4ef6\u53c2\u6570\u5373\u53ef\u3002"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-vue"},'<template>\n  <FiveProvider :fiveInitArgs="fiveInitArgs">\n  </FiveProvider>\n</template>\n<script setup>\nimport  PanoFloorplanRadarPlugin from "@realsee/dnalogel/libs/PanoFloorplanRadarPlugin";\nimport { FiveProvider, FiveCanvas } from "@realsee/five/vue";\nconst fiveInitArgs = {\n    plugins: [\n        [\n            PanoFloorplanRadarPlugin,\n            \'panoFloorplanRadarPlugin\', // \u81ea\u5b9a\u4e49\u63d2\u4ef6\u540d\u79f0\n            {\n                // \u53c2\u6570\u914d\u7f6e\n            }\n        ]\n    ]\n}\n<\/script>\n')),(0,l.kt)("h3",{id:"\u8f7d\u5165\u6570\u636e"},"\u8f7d\u5165\u6570\u636e"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-ts"},"// \u83b7\u53d6\u63d2\u4ef6\u5b9e\u4f8b\nconst pluginInstance = five.plugins.panoFloorplanRadar\n// \u8f7d\u5165\u6570\u636e\npluginInstance.load(floorplanServerData)\n")),(0,l.kt)("h3",{id:"\u6838\u5fc3\u65b9\u6cd5"},"\u6838\u5fc3\u65b9\u6cd5"),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"PanoFloorplanRadarPlugin")," \u63d0\u4f9b\u7684\u6838\u5fc3\u65b9\u6cd5\u6709\uff1a"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"async load(data: FloorplanServerData)")," \u8f7d\u5165\u6237\u578b\u56fe\u6570\u636e\uff1b")),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"\u60a8\u9700\u8981\u624b\u52a8\u8f7d\u5165\u6237\u578b\u56fe\u6570\u636e\uff0c","[FloorplanServerData]"," \u7684\u6570\u636e\u6765\u6e90\u8bf7\u9605\u8bfb",(0,l.kt)("a",{parentName:"p",href:"https://open-platform.realsee.com/developer/open/api/#/"},"\u5982\u89c6\u5f00\u653e\u5e73\u53f0 API"),"\u3002")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"appendTo(wrapper: Element)")," \u6302\u8f7d DOM \u8282\u70b9\uff1b")),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"\u5c06\u6237\u578b\u56feDOM\u6a21\u5757\u8f7d\u5165\u60a8\u7684 HTML \u7ed3\u6784\u4e2d\u3002")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},(0,l.kt)("inlineCode",{parentName:"p"},"setState(state: Partial<State>, options: BaseOptions = {})")," \u66f4\u6539\u63d2\u4ef6 State\uff1b")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},(0,l.kt)("inlineCode",{parentName:"p"},"changeConfigs(config: Config, userAction = true)")," \u4fee\u6539\u63d2\u4ef6\u914d\u7f6e\u4fe1\u606f")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},(0,l.kt)("inlineCode",{parentName:"p"},"setExtraObjectsWith3DPositions(data: FloorplanExtraObject3D[])")," \u5728\u96f7\u8fbe\u56fe\u4e0a\u5c55\u793a\u989d\u5916\u5185\u5bb9")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},(0,l.kt)("inlineCode",{parentName:"p"},"async show(options: BaseOptions = {})")," \u5c55\u793a\u6237\u578b\u56fe\u6570\u636e\uff1b")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},(0,l.kt)("inlineCode",{parentName:"p"},"async hide(options: BaseOptions = {})")," \u9690\u85cf\u6237\u578b\u56fe\u6570\u636e\uff1b")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},(0,l.kt)("inlineCode",{parentName:"p"},"enable(options: BaseOptions = {})")," \u542f\u7528\u63d2\u4ef6\uff1b")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},(0,l.kt)("inlineCode",{parentName:"p"},"disable(options: BaseOptions = {})")," \u7981\u7528\u63d2\u4ef6\uff1b"))),(0,l.kt)("h3",{id:"\u5728\u96f7\u8fbe\u56fe\u4e0a\u5c55\u793a\u989d\u5916\u5185\u5bb9"},"\u5728\u96f7\u8fbe\u56fe\u4e0a\u5c55\u793a\u989d\u5916\u5185\u5bb9"),(0,l.kt)("p",null,"\u5bf9\u4e8e\u4e00\u4e9b\u4e09\u7ef4\u573a\u666f\u4e2d\u7684\u7269\u4f53\uff0c\u6211\u4eec\u53ef\u4ee5\u5728\u96f7\u8fbe\u56fe\u4e0a\u7528\u4e00\u4e9b\u7279\u6b8a\u7684\u56fe\u6807\u8fdb\u884c\u5c55\u793a"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"setExtraObjectsWith3DPositions(data: FloorplanExtraObject3D[])")," \u8bbe\u7f6e\u5728\u6237\u578b\u56fe\u4e0a\u5c55\u793a\u7684\u4e09\u7ef4\u7269\u4f53\u5217\u8868\u3002"),(0,l.kt)("p",null,"\u4e09\u7ef4\u6570\u636e\u7684\u7ed3\u6784\u5982\u4e0b"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-ts"},"// \u80fd\u591f\u6620\u5c04\u5230\u96f7\u8fbe\u56fe\u4e0a\u7684\u4e09\u7ef4\u7269\u4f53\nexport interface FloorplanExtraObject3D {\n  id: string\n  // [x, y, z]\n  position: number[]\n}\n")),(0,l.kt)("h3",{id:"\u914d\u7f6e\u53c2\u6570"},"\u914d\u7f6e\u53c2\u6570"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},(0,l.kt)("inlineCode",{parentName:"p"},"wrapper: string | Element")," \u63d2\u4ef6\u6302\u8f7d\u7684 DOM \u8282\u70b9\u3002")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},(0,l.kt)("inlineCode",{parentName:"p"},"hoverEnable?: boolean")," \u5426\u5f00\u542f\u9f20\u6807 ",(0,l.kt)("inlineCode",{parentName:"p"},"hover")," \u9ad8\u4eae\u5206\u95f4\u3002"))),(0,l.kt)("p",null,"\u914d\u7f6e\u6837\u4f8b\u53c2\u8003\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-ts"},"\nimport { PanoFloorplanRadarPlugin } from \"@realsee/dnalogel\"\nimport { Five, FivePluginInit } from '@realsee/five'\n\nconst five = new Five({\n  plugins: [\n    [\n      PanoFloorplanRadarPlugin,\n      'floorpalnRadar',\n      { \n          wrapper: '.floorplan-radar-wrapper', \n          configs: {\n              hoverEnable: true\n          }\n      }\n    ],\n  ],\n})\n\n")),(0,l.kt)("h2",{id:"demo-\u6e90\u7801\u53c2\u8003"},"demo \u6e90\u7801\u53c2\u8003"),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"https://github.com/realsee-developer/dnalogel/tree/main/examples/src"},"demo \u6e90\u7801\u53c2\u8003")))}k.isMDXComponent=!0}}]);