"use strict";(self.webpackChunkrealsee_developer_github_com=self.webpackChunkrealsee_developer_github_com||[]).push([[7701],{49613:(e,n,l)=>{l.d(n,{Zo:()=>s,kt:()=>c});var t=l(59496);function a(e,n,l){return n in e?Object.defineProperty(e,n,{value:l,enumerable:!0,configurable:!0,writable:!0}):e[n]=l,e}function o(e,n){var l=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),l.push.apply(l,t)}return l}function r(e){for(var n=1;n<arguments.length;n++){var l=null!=arguments[n]?arguments[n]:{};n%2?o(Object(l),!0).forEach((function(n){a(e,n,l[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(l)):o(Object(l)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(l,n))}))}return e}function i(e,n){if(null==e)return{};var l,t,a=function(e,n){if(null==e)return{};var l,t,a={},o=Object.keys(e);for(t=0;t<o.length;t++)l=o[t],n.indexOf(l)>=0||(a[l]=e[l]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(t=0;t<o.length;t++)l=o[t],n.indexOf(l)>=0||Object.prototype.propertyIsEnumerable.call(e,l)&&(a[l]=e[l])}return a}var p=t.createContext({}),u=function(e){var n=t.useContext(p),l=n;return e&&(l="function"==typeof e?e(n):r(r({},n),e)),l},s=function(e){var n=u(e.components);return t.createElement(p.Provider,{value:n},e.children)},d={inlineCode:"code",wrapper:function(e){var n=e.children;return t.createElement(t.Fragment,{},n)}},m=t.forwardRef((function(e,n){var l=e.components,a=e.mdxType,o=e.originalType,p=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),m=u(l),c=a,k=m["".concat(p,".").concat(c)]||m[c]||d[c]||o;return l?t.createElement(k,r(r({ref:n},s),{},{components:l})):t.createElement(k,r({ref:n},s))}));function c(e,n){var l=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var o=l.length,r=new Array(o);r[0]=m;var i={};for(var p in n)hasOwnProperty.call(n,p)&&(i[p]=n[p]);i.originalType=e,i.mdxType="string"==typeof e?e:a,r[1]=i;for(var u=2;u<o;u++)r[u]=l[u];return t.createElement.apply(null,r)}return t.createElement.apply(null,l)}m.displayName="MDXCreateElement"},45558:(e,n,l)=>{l.d(n,{Z:()=>r});var t=l(59496),a=l(45924);const o="tabItem_IPoj";function r(e){let{children:n,hidden:l,className:r}=e;return t.createElement("div",{role:"tabpanel",className:(0,a.Z)(o,r),hidden:l},n)}},38637:(e,n,l)=>{l.d(n,{Z:()=>c});var t=l(2962),a=l(59496),o=l(45924),r=l(26709),i=l(33548),p=l(14714),u=l(60411);const s="tabList_xr86",d="tabItem_r4_W";function m(e){var n;const{lazy:l,block:r,defaultValue:m,values:c,groupId:k,className:v}=e,g=a.Children.map(e.children,(e=>{if((0,a.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})),N=c??g.map((e=>{let{props:{value:n,label:l,attributes:t}}=e;return{value:n,label:l,attributes:t}})),f=(0,i.l)(N,((e,n)=>e.value===n.value));if(f.length>0)throw new Error(`Docusaurus error: Duplicate values "${f.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`);const b=null===m?m:m??(null==(n=g.find((e=>e.props.default)))?void 0:n.props.value)??g[0].props.value;if(null!==b&&!N.some((e=>e.value===b)))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${b}" but none of its children has the corresponding value. Available values are: ${N.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);const{tabGroupChoices:h,setTabGroupChoices:y}=(0,p.U)(),[C,P]=(0,a.useState)(b),F=[],{blockElementScrollPositionUntilNextRender:w}=(0,u.o5)();if(null!=k){const e=h[k];null!=e&&e!==C&&N.some((n=>n.value===e))&&P(e)}const O=e=>{const n=e.currentTarget,l=F.indexOf(n),t=N[l].value;t!==C&&(w(n),P(t),null!=k&&y(k,String(t)))},E=e=>{var n;let l=null;switch(e.key){case"Enter":O(e);break;case"ArrowRight":{const n=F.indexOf(e.currentTarget)+1;l=F[n]??F[0];break}case"ArrowLeft":{const n=F.indexOf(e.currentTarget)-1;l=F[n]??F[F.length-1];break}}null==(n=l)||n.focus()};return a.createElement("div",{className:(0,o.Z)("tabs-container",s)},a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":r},v)},N.map((e=>{let{value:n,label:l,attributes:r}=e;return a.createElement("li",(0,t.Z)({role:"tab",tabIndex:C===n?0:-1,"aria-selected":C===n,key:n,ref:e=>F.push(e),onKeyDown:E,onClick:O},r,{className:(0,o.Z)("tabs__item",d,null==r?void 0:r.className,{"tabs__item--active":C===n})}),l??n)}))),l?(0,a.cloneElement)(g.filter((e=>e.props.value===C))[0],{className:"margin-top--md"}):a.createElement("div",{className:"margin-top--md"},g.map(((e,n)=>(0,a.cloneElement)(e,{key:n,hidden:e.props.value!==C})))))}function c(e){const n=(0,r.Z)();return a.createElement(m,(0,t.Z)({key:String(n)},e))}},24584:(e,n,l)=>{l.r(n),l.d(n,{assets:()=>s,contentTitle:()=>p,default:()=>c,frontMatter:()=>i,metadata:()=>u,toc:()=>d});var t=l(2962),a=(l(59496),l(49613)),o=l(38637),r=l(45558);const i={title:"\ud83d\udce6 \u6a21\u578b\u6237\u578b\u56fe"},p=void 0,u={unversionedId:"front/3d-space/advanced/dnalogel/floorplan/ModelFloorplanPlugin",id:"front/3d-space/advanced/dnalogel/floorplan/ModelFloorplanPlugin",title:"\ud83d\udce6 \u6a21\u578b\u6237\u578b\u56fe",description:"ModelFloorplanPlugin",source:"@site/docs/front/3d-space/advanced/dnalogel/floorplan/ModelFloorplanPlugin.md",sourceDirName:"front/3d-space/advanced/dnalogel/floorplan",slug:"/front/3d-space/advanced/dnalogel/floorplan/ModelFloorplanPlugin",permalink:"/docs/front/3d-space/advanced/dnalogel/floorplan/ModelFloorplanPlugin",draft:!1,tags:[],version:"current",lastUpdatedBy:"lichengjie",lastUpdatedAt:1669201266,formattedLastUpdatedAt:"2022\u5e7411\u670823\u65e5",frontMatter:{title:"\ud83d\udce6 \u6a21\u578b\u6237\u578b\u56fe"},sidebar:"\u4e09\u7ef4\u7a7a\u95f4",previous:{title:"\ud83d\udce6 \u5168\u666f\u6237\u578b\u96f7\u8fbe\u56fe",permalink:"/docs/front/3d-space/advanced/dnalogel/floorplan/PanoFloorplanRadarPlugin"},next:{title:"\ud83d\udce6 \u5927\u7a7a\u95f4\u6a21\u578b\u6237\u578b\u56fe",permalink:"/docs/front/3d-space/advanced/dnalogel/floorplan/MapViewFloorplanPlugin"}},s={},d=[{value:"<strong>ModelFloorplanPlugin</strong>",id:"modelfloorplanplugin",level:2},{value:"\u529f\u80fd\u8bf4\u660e",id:"\u529f\u80fd\u8bf4\u660e",level:2},{value:"\u793a\u4f8b\u6548\u679c",id:"\u793a\u4f8b\u6548\u679c",level:2},{value:"\u5b89\u88c5\u5f15\u7528",id:"\u5b89\u88c5\u5f15\u7528",level:2},{value:"\u5f00\u53d1\u6307\u5357",id:"\u5f00\u53d1\u6307\u5357",level:2},{value:"\u521d\u59cb\u5316",id:"\u521d\u59cb\u5316",level:3},{value:"React \u521d\u59cb\u5316",id:"react-\u521d\u59cb\u5316",level:3},{value:"Vue \u521d\u59cb\u5316",id:"vue-\u521d\u59cb\u5316",level:3},{value:"\u8f7d\u5165\u6570\u636e",id:"\u8f7d\u5165\u6570\u636e",level:3},{value:"\u63d2\u4ef6\u6838\u5fc3\u65b9\u6cd5",id:"\u63d2\u4ef6\u6838\u5fc3\u65b9\u6cd5",level:3},{value:"\u81ea\u5b9a\u4e49\u914d\u7f6e",id:"\u81ea\u5b9a\u4e49\u914d\u7f6e",level:3},{value:"\u4e8b\u4ef6 Hooks",id:"\u4e8b\u4ef6-hooks",level:3},{value:"demo \u6e90\u7801\u53c2\u8003",id:"demo-\u6e90\u7801\u53c2\u8003",level:2}],m={toc:d};function c(e){let{components:n,...l}=e;return(0,a.kt)("wrapper",(0,t.Z)({},m,l,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"modelfloorplanplugin"},(0,a.kt)("strong",{parentName:"h2"},"ModelFloorplanPlugin")),(0,a.kt)("admonition",{type:"tip"},(0,a.kt)("mdxAdmonitionTitle",{parentName:"admonition"},"\u6b64\u63d2\u4ef6\u5f3a\u4f9d\u8d56\u4e8e",(0,a.kt)("strong",{parentName:"mdxAdmonitionTitle"},"\u6237\u578b\u56fe\u6570\u636e"),"\uff0c\u8bf7\u7387\u5148\u4e86\u89e3\u5982\u4f55\u83b7\u53d6\u6237\u578b\u56fe\u6570\u636e\u3002")),(0,a.kt)("h2",{id:"\u529f\u80fd\u8bf4\u660e"},"\u529f\u80fd\u8bf4\u660e"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"\u6a21\u578b\u6237\u578b\u56fe\u63d2\u4ef6")," \u65e0\u7f1d\u96c6\u6210\u4e86\u4e00\u5957\u57fa\u4e8e VR 3D \u6a21\u578b\u72b6\u6001\u4e0b\u6237\u578b\u56fe\u4ea4\u4e92\u3002"),(0,a.kt)("p",null,"\u501f\u52a9\u6b64\u63d2\u4ef6\uff0c\u60a8\u53ef\u4ee5\u5728 VR 3D \u6a21\u578b\u72b6\u6001\u4e0b\u5c55\u793a\u66f4\u8be6\u7ec6\u7684\u4e8c\u7ef4\u6237\u578b\u56fe\uff0c\u96c6\u6210\u7684\u529f\u80fd\u5982\u4e0b\uff1a"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u652f\u6301\u4e8c\u7ef4\u6237\u578b\u56fe( png / svg \u683c\u5f0f)\u5c55\u793a\u3002"),(0,a.kt)("li",{parentName:"ul"},"\u623f\u5c4b\u6807\u7b7e\u5c55\u793a: ",(0,a.kt)("strong",{parentName:"li"},"\u652f\u6301\u81ea\u5b9a\u4e49\u6807\u7b7e\u6837\u5f0f"),"\u3002"),(0,a.kt)("li",{parentName:"ul"},"\u5c55\u793a\u8fdb\u5165\u4e8c\u7ef4\u6237\u578b\u56fe\u524d\uff0c\u76f8\u673a\u4f4d\u7f6e\u548c\u671d\u5411: ",(0,a.kt)("strong",{parentName:"li"},"\u652f\u6301\u81ea\u5b9a\u4e49\u76f8\u673a\u56fe\u6807"),"\u3002"),(0,a.kt)("li",{parentName:"ul"},"\u652f\u6301\u591a\u697c\u5c42 VR \u623f\u6e90\uff0c\u5373\u652f\u6301\u591a\u697c\u5c42\u5207\u6362\u3002"),(0,a.kt)("li",{parentName:"ul"},"\u4fef\u89c6\u89c6\u89d2\u4e0a\uff0c\u4e8c\u7ef4\u6237\u578b\u56fe\u4e0e VR 3D \u6a21\u578b\u7684\u81ea\u9002\u5e94\u5bf9\u9f50\u3002"),(0,a.kt)("li",{parentName:"ul"},"\u70b9\u51fb\u4e8c\u7ef4\u6237\u578b\u56fe\u623f\u95f4\uff0c\u4f1a\u81ea\u52a8\u8fdb\u5165\u5230 VR \u5bf9\u5e94\u623f\u95f4\u7684\u5408\u9002\u70b9\u4f4d\u3002"),(0,a.kt)("li",{parentName:"ul"},"\u6307\u5317\u9488\u5c55\u793a: \u6682\u4e0d\u652f\u6301\u914d\u7f6e\uff0c\u4f46\u53ef\u4ee5\u501f\u52a9 CSS \u9009\u62e9\u5668\u4f18\u5148\u7ea7\u65b9\u5f0f\u8986\u76d6\u539f\u6709\u6837\u5f0f\u3002"),(0,a.kt)("li",{parentName:"ul"},"\u652f\u6301\u624b\u52bf\u5feb\u6377\u64cd\u4f5c\uff1a\u5728\u4e8c\u7ef4\u6237\u578b\u56fe\u754c\u9762\u8fdb\u884c\u6ed1\u52a8\uff0c\u4f1a\u5feb\u901f\u5207\u6362\u5230\u6a21\u578b\u72b6\u6001\uff1b\u5728\u6a21\u578b\u72b6\u6001\u677e\u624b\u65f6\uff0c\u5982\u679c\u6bd4\u8f83\u63a5\u8fd1\u6237\u578b\u56fe\u7684\u5c55\u793a\u89d2\u5ea6\uff0c\u4f1a\u81ea\u52a8\u65cb\u8f6c\u6a21\u578b\uff0c\u5e76\u5c55\u793a\u6237\u578b\u56fe\u3002\u6b64\u529f\u80fd",(0,a.kt)("strong",{parentName:"li"},"\u652f\u6301\u914d\u7f6e"),"\u662f\u5426\u7981\u7528\u3002")),(0,a.kt)("h2",{id:"\u793a\u4f8b\u6548\u679c"},"\u793a\u4f8b\u6548\u679c"),(0,a.kt)("div",{className:"docs-vr-normal"},(0,a.kt)("iframe",{className:"docs-vr-iframe",src:"https://realsee.js.org/dnalogel/src/ModelFloorplanPlugin/index.html"})),(0,a.kt)("h2",{id:"\u5b89\u88c5\u5f15\u7528"},"\u5b89\u88c5\u5f15\u7528"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"\u8bf7\u6309\u9700\u9009\u62e9 ",(0,a.kt)("inlineCode",{parentName:"strong"},"yarn")," \u6216 ",(0,a.kt)("inlineCode",{parentName:"strong"},"npm")," \u5b89\u88c5\u65b9\u5f0f\uff1a")),(0,a.kt)(o.Z,{groupId:"npm2yarn",mdxType:"Tabs"},(0,a.kt)(r.Z,{value:"npm",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"npm install @realsee/dnalogel\n"))),(0,a.kt)(r.Z,{value:"yarn",label:"Yarn",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"yarn add @realsee/dnalogel\n")))),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"\u901a\u8fc7 es \u5f15\u7528\uff1a")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx"},'import ModelFloorplanPlugin from "@realsee/dnalogel"\n')),(0,a.kt)("h2",{id:"\u5f00\u53d1\u6307\u5357"},"\u5f00\u53d1\u6307\u5357"),(0,a.kt)("h3",{id:"\u521d\u59cb\u5316"},"\u521d\u59cb\u5316"),(0,a.kt)("p",null,"\u5728\u521d\u59cb\u5316 ",(0,a.kt)("inlineCode",{parentName:"p"},"Five")," \u5b9e\u4f8b\u7684\u65f6\u5019\uff0c\u5c06 ",(0,a.kt)("inlineCode",{parentName:"p"},"ModelFloorplanPlugin")," \u914d\u7f6e\u5728\u521d\u59cb\u5316\u63d2\u4ef6\u53c2\u6570\u5373\u53ef\u3002"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},"import Five, { FivePluginInits } from '@realsee/five'\nimport ModelFloorplanPlugin from '@realsee/dnalogel'\n\n// \u521d\u59cb\u5316 five \u5b9e\u4f8b\nconst five = new Five({\n  plugins: [\n    [ModelFloorplanPlugin, \"modelFloorplanPlugin\", {\n      // \u521d\u59cb\u5316\u53c2\u6570\n    }]\n  ]\n})\n")),(0,a.kt)("h3",{id:"react-\u521d\u59cb\u5316"},"React \u521d\u59cb\u5316"),(0,a.kt)("p",null,"\u5728\u521b\u5efa FiveProvider \u7ec4\u4ef6\u65f6\u5c06 ",(0,a.kt)("inlineCode",{parentName:"p"},"ModelFloorplanPlugin")," \u914d\u7f6e\u5728\u521d\u59cb\u5316\u63d2\u4ef6\u53c2\u6570\u5373\u53ef\u3002"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},"import { createFiveProvider } from '@realsee/five/react'\n\n// \u521b\u5efa FiveProvider \u7ec4\u4ef6\nconst FiveProvider = createFiveProvider({\n    plugins: [\n        [ModelFloorplanPlugin, \"modelFloorplanPlugin\", {\n            // \u521d\u59cb\u5316\u53c2\u6570\n        }]\n    ]\n})\n")),(0,a.kt)("h3",{id:"vue-\u521d\u59cb\u5316"},"Vue \u521d\u59cb\u5316"),(0,a.kt)("p",null,"\u5728\u4f7f\u7528 ",(0,a.kt)("inlineCode",{parentName:"p"},"FiveProvider")," \u65f6\uff0c\u5c06 ",(0,a.kt)("inlineCode",{parentName:"p"},"ModelFloorplanPlugin")," \u914d\u7f6e\u5728\u521d\u59cb\u5316\u63d2\u4ef6\u53c2\u6570\u5373\u53ef\u3002"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-vue"},'<template>\n  <FiveProvider :fiveInitArgs="fiveInitArgs">\n  </FiveProvider>\n</template>\n<script setup>\nimport ModelFloorplanPlugin from "@realsee/dnalogel/libs/ModelFloorplanPlugin";\nimport { FiveProvider, FiveCanvas } from "@realsee/five/vue";\nconst fiveInitArgs = {\n    plugins: [\n        [\n            ModelFloorplanPlugin,\n            \'modelFloorplanPlugin\', // \u81ea\u5b9a\u4e49\u63d2\u4ef6\u540d\u79f0\n            {\n                // \u53c2\u6570\u914d\u7f6e\n            }\n        ]\n    ]\n}\n<\/script>\n')),(0,a.kt)("h3",{id:"\u8f7d\u5165\u6570\u636e"},"\u8f7d\u5165\u6570\u636e"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},"// \u83b7\u53d6\u63d2\u4ef6\u5b9e\u4f8b\nconst pluginInstance = five.plugins.modelFloorplan\n// \u8f7d\u5165\u6570\u636e\npluginInstance.load(floorplanServerData)\n")),(0,a.kt)("h3",{id:"\u63d2\u4ef6\u6838\u5fc3\u65b9\u6cd5"},"\u63d2\u4ef6\u6838\u5fc3\u65b9\u6cd5"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"ModelFloorplanPlugin")," \u63d0\u4f9b\u7684\u6838\u5fc3\u65b9\u6cd5\u6709\uff1a"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"async load(data: FloorplanServerData)")," \u8f7d\u5165\u6237\u578b\u56fe\u6570\u636e\uff1b")),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"\u60a8\u9700\u8981\u624b\u52a8\u8f7d\u5165\u6237\u578b\u56fe\u6570\u636e\uff0c","[FloorplanServerData]"," \u7684\u6570\u636e\u6765\u6e90\u8bf7\u9605\u8bfb",(0,a.kt)("a",{parentName:"p",href:"https://open-platform.realsee.com/developer/open/api#/"},"\u5982\u89c6\u5f00\u653e\u5e73\u53f0 API"))),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"appendTo(wrapper: Element)")," \u6302\u8f7d DOM \u8282\u70b9\uff1b")),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"\u60a8\u53ef\u4ee5\u5c06\u6237\u578b\u56feDOM\u6a21\u5757\u8f7d\u5165\u60a8\u7684 HTML \u7ed3\u6784\u4e2d\u3002")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"async show(opts?: ShowOpts): true")," \u5c55\u793a\u6237\u578b\u56fe\uff1b")),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"\u8c03\u7528\u63d2\u4ef6\u7684 ",(0,a.kt)("inlineCode",{parentName:"p"},"show()")," \u65b9\u6cd5\uff0c\u63d2\u4ef6\u4f1a\u81ea\u52a8\u64cd\u4f5c ",(0,a.kt)("inlineCode",{parentName:"p"},"five")," \u5b9e\u4f8b\u5230\u6a21\u578b\u4fef\u89c6\u72b6\u6001\uff0c\u5e76\u5c55\u793a\u5f53\u524d\u70b9\u4f4d\u5bf9\u5e94\u697c\u5c42\u7684\u6237\u578b\u56fe\u3002")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},"const floorplanPlugin = five.plugins.floorplan\nfloorplanPlugin.show()\nfloorplanPlugin.show(options)\n")),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"\u5982\u679c\u9700\u8981\u81ea\u5b9a\u4e49\u5c55\u793a\u903b\u8f91\uff0c\u4e5f\u53ef\u4ee5\u4f20\u5165 ",(0,a.kt)("inlineCode",{parentName:"p"},"options")," \u8fdb\u884c\u914d\u7f6e\uff0c\u914d\u7f6e\u9879\u58f0\u660e\u5982\u4e0b\uff1a")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},"interface ShowOpts {\n  floorIndex?: number   // \u8981\u5c55\u793a\u7684\u697c\u5c42\uff0c\u9ed8\u8ba4\u662f\u5f53\u524d\u70b9\u4f4d\u5bf9\u5e94\u7684\u697c\u5c42\n  userAction?: boolean  // \u5728\u6237\u578b\u56fe\u5c55\u793a\u65f6\uff0c\u8c03\u7528 Five \u76f8\u5173 API \u4f1a\u900f\u4f20 userAction\n  modelOpacity?: number // \u5c55\u793a\u6237\u578b\u56fe\u65f6\uff0c\u6a21\u578b\u5bf9\u5e94\u7684\u900f\u660e\u5ea6\uff0c\u9ed8\u8ba4\u662f 0.01\n  immediately?: boolean // \u56fe\u7247\u51fa\u73b0\u662f\u5426\u8981\u7acb\u5373\u51fa\u73b0\uff0c\u9ed8\u8ba4\u4f1a\u6709 500ms \u7684\u52a8\u753b\uff0c\u6ce8\u610f\u8fd9\u4e2a immediately \u4e0d\u80fd\u53d6\u6d88\u6a21\u578b\u52a8\u753b\n}\n")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"async hide(options?: { isAutoHide?: boolean; userAction?: boolean )")," \u9690\u85cf\u6237\u578b\u56fe")),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"\u60a8\u53ef\u4ee5\u76f4\u63a5\u8c03\u7528 ",(0,a.kt)("inlineCode",{parentName:"p"},"hide()")," \u65b9\u6cd5\u5c06\u6237\u578b\u56fe\u9690\u85cf\uff0c\u5982\u679c\u5728\u914d\u7f6e\u9879",(0,a.kt)("inlineCode",{parentName:"p"},"autoShowEnable"),"\u8bbe\u7f6e\u4e3a",(0,a.kt)("inlineCode",{parentName:"p"},"true"),"\uff08\u9ed8\u8ba4\u8bbe\u7f6e\uff09\u65f6\uff0c\u5f53\u7528\u6237\u5728\u6237\u578b\u56fe\u4e0a\u8fdb\u884c\u6ed1\u52a8\u64cd\u4f5c\u65f6\uff0c\u8d85\u8fc7\u4e00\u5b9a\u6ed1\u52a8\u5e45\u5ea6\u4f1a\u81ea\u52a8\u5173\u95ed\u6237\u578b\u56fe\u3002")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("inlineCode",{parentName:"p"},"updateSize()")," \u66f4\u65b0\u6237\u578b\u56fe\u5927\u5c0f\uff1b")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("inlineCode",{parentName:"p"},"changeConfigs(config: Partial<Config>, userAction = true)")," \u4fee\u6539\u6237\u578b\u56fe\u914d\u7f6e\uff1b")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("inlineCode",{parentName:"p"},"setState(state: PartialDeep<State>, options: BaseOptions = {})")," \u66f4\u6539\u63d2\u4ef6 State;")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("inlineCode",{parentName:"p"},"enable(options: BaseOptions = {})")," \u542f\u7528\u63d2\u4ef6\uff1b")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("inlineCode",{parentName:"p"},"disable(options: BaseOptions = {})")," \u7981\u7528\u63d2\u4ef6\uff1b")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("inlineCode",{parentName:"p"},"dispose()")," \u9500\u6bc1\u63d2\u4ef6\uff1b"))),(0,a.kt)("h3",{id:"\u81ea\u5b9a\u4e49\u914d\u7f6e"},"\u81ea\u5b9a\u4e49\u914d\u7f6e"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"ModelFloorplanPlugin")," \u652f\u6301\u4e30\u5bcc\u7684\u81ea\u5b9a\u4e49\u914d\u7f6e\u9009\u9879\uff08\u8be6\u89c1","[ModelFloorplanParameterType]","\uff09\uff0c\u5e38\u89c1\u7684\u914d\u7f6e\u9879\u6709\uff1a"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"selector?: string | Element")," \u63d2\u4ef6\u6302\u8f7d\u7684 DOM \u8282\u70b9")),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"DOM \u9009\u62e9\u5668\u6216 DOM \u8282\u70b9\u5b9e\u4f8b\u3002\n\u9700\u8981\u6ce8\u610f\u7684\u662f\uff1aDOM\u5bb9\u5668\u5fc5\u987b\u4e0e five canvas \u5bbd\u9ad8\u4e00\u6837\uff0c\u4e14\u5c42\u7ea7",(0,a.kt)("inlineCode",{parentName:"p"},"z-index"),"\u6bd4 five canvas \u9ad8\u3002")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"scale?: number")," \u6237\u578b\u56fe\u7f29\u653e\u6bd4\u4f8b")),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"\u4fee\u6539\u6b64\u53c2\u6570\u4f1a\u8fde\u540c\u6237\u578b\u56fe\u4e0b\u65b9\u7684VR\u6a21\u578b\u6bd4\u4f8b\u4e00\u540c\u66f4\u6539\uff0c\u9ed8\u8ba4\u4e3a",(0,a.kt)("inlineCode",{parentName:"p"},"1"),"\u3002")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"hoverEnable?: boolean")," \u662f\u5426\u5f00\u542f\u9f20\u6807 ",(0,a.kt)("inlineCode",{parentName:"li"},"hover")," \u9ad8\u4eae\u5206\u95f4")),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"\u9ed8\u8ba4\u503c\u662f ",(0,a.kt)("inlineCode",{parentName:"p"},"true"),"\u3002\u529f\u80fd\u662f\uff1a\u5f53\u9f20\u6807 ",(0,a.kt)("inlineCode",{parentName:"p"},"hover")," \u81f3\u5bf9\u5e94\u5206\u95f4\u65f6\uff0c\u6539\u5206\u95f4\u4f1a\u9ad8\u4eae\u3002")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"getLabelElement?: (room: FloorplanRoomItem) => Element | null")," \u914d\u7f6e\u623f\u5c4b\u6807\u7b7e")),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"\u5982\u679c\u914d\u7f6e\u4e86\u8fd9\u4e2a\u51fd\u6570\uff0c\u5bf9\u4e8e\u6bcf\u4e00\u4e2a\u623f\u5c4b\u6807\u7b7e\uff0c\u90fd\u4f1a\u8c03\u7528\u6b64\u51fd\u6570\uff0c\u5e76\u628a\u6807\u7b7e\u7684 ",(0,a.kt)("inlineCode",{parentName:"p"},"Element")," \u66ff\u6362\u6210\u56de\u8c03\u51fd\u6570\u8fd4\u56de\u7684 ",(0,a.kt)("inlineCode",{parentName:"p"},"ELement"),"\u3002\n\u5982\u679c\u8fd4\u56de\u7ed3\u679c\u4e3a ",(0,a.kt)("inlineCode",{parentName:"p"},"null")," \u8fd9\u7c7b\u7a7a\u503c\u65f6\uff0c\u5f53\u524d\u6807\u7b7e\u4e0d\u5c55\u793a\u3002",(0,a.kt)("br",null),"\n\u5982\u679c\u4e0d\u914d\u7f6e\u6b64\u51fd\u6570\uff0c\u9ed8\u8ba4\u4e3a\u6240\u6709\u6807\u7b7e\u90fd\u5c55\u793a\u3002\n\u53c2\u6570",(0,a.kt)("inlineCode",{parentName:"p"},"FloorplanRoomItem")," \u6570\u636e\u7ed3\u6784\u53c2\u8003",(0,a.kt)("a",{parentName:"p",href:"http://dnalogel.developers.realsee.com/storybook/api/interfaces/plugins.FloorplanRoomItem.html"},"\u5f00\u653e\u5e73\u53f0\u63d2\u4ef6\u7c7b\u578b\u58f0\u660e"),"\u3002")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"cameraImageUrl?: string")," \u81ea\u5b9a\u4e49\u3010\u96f7\u8fbe\u3011\u56fe\u6807")),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},(0,a.kt)("inlineCode",{parentName:"p"},"style"),"\u4f20\u5165\u7684 CSS \u6837\u5f0f\u4f1a\u8986\u76d6\u9ed8\u8ba4\u6837\u5f0f\uff0c\u5305\u62ec ",(0,a.kt)("inlineCode",{parentName:"p"},"backgroundImage"),"\u3001",(0,a.kt)("inlineCode",{parentName:"p"},"width"),"\u3001",(0,a.kt)("inlineCode",{parentName:"p"},"height"),"\u7b49\u3002",(0,a.kt)("br",null))),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"autoShowEnable: boolean")," \u624b\u52bf\u5feb\u6377\u64cd\u4f5c")),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"\u5728\u4e8c\u7ef4\u6237\u578b\u56fe\u754c\u9762\u8fdb\u884c\u6ed1\u52a8\uff0c\u4f1a\u5feb\u901f\u5207\u6362\u5230\u6a21\u578b\u72b6\u6001\uff1b\u5728\u6a21\u578b\u72b6\u6001\u677e\u624b\u65f6\uff0c\u5982\u679c\u6bd4\u8f83\u63a5\u8fd1\u6237\u578b\u56fe\u7684\u5c55\u793a\u89d2\u5ea6\uff0c\u4f1a\u81ea\u52a8\u65cb\u8f6c\u6a21\u578b\uff0c\u5e76\u5c55\u793a\u6237\u578b\u56fe\u3002\u9ed8\u8ba4\u5f00\u542f\u3002")),(0,a.kt)("h3",{id:"\u4e8b\u4ef6-hooks"},"\u4e8b\u4ef6 Hooks"),(0,a.kt)("p",null,"\u6237\u578b\u56fe\u76f8\u5173\u7684\u4e8b\u4ef6\u7ed1\u5b9a\u5728 ",(0,a.kt)("inlineCode",{parentName:"p"},"hooks")," \u5bf9\u8c61\u4e0a\uff0c\u53ef\u4ee5\u4f7f\u7528 ",(0,a.kt)("inlineCode",{parentName:"p"},"hooks.on")," \u65b9\u6cd5\u76d1\u542c\u4e8b\u4ef6\u3002\u5982\uff1a"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"showAnimationEnded"))),(0,a.kt)("p",null,"\u6237\u578b\u56fe\u5c55\u793a\u7ed3\u675f\uff0c\u53ea\u4f1a\u5728\u4ece\u4e0d\u53ef\u89c1\u5230\u53ef\u89c1\u89e6\u53d1\uff0c\u8c03\u7528\u591a\u6b21show\u53ea\u4f1a\u89e6\u53d1\u4e00\u6b21 showAnimationEnded\u3002"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},"five.plugins.modelFloorplan.hooks.on('showAnimationEnded', ({ auto, userAction }) => {\n  console.log('\u662f\u5426\u662f\u7528\u6237\u6ed1\u52a8\u6a21\u578b\u5bfc\u81f4\u7684\u6237\u578b\u56fe\u81ea\u52a8\u5c55\u793a: ', auto)\n  console.log('\u662f\u5426\u662f\u7528\u6237\u884c\u4e3a\u5bfc\u81f4\u7684\u6237\u578b\u56fe\u5c55\u793a: ', userAction)\n  console.log('\u6237\u578b\u56fe\u5c55\u793a\u5b8c\u6210')\n})\n")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"hide"))),(0,a.kt)("p",null,"\u6237\u578b\u56fe\u6d88\u5931\u5b8c\u6210"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},"five.plugins.modelFloorplan.hooks.on('hide', ({ auto, userAction }) => {\n  console.log('\u662f\u5426\u662f\u7528\u6237\u6ed1\u52a8\u6a21\u578b\u5bfc\u81f4\u7684\u6237\u578b\u56fe\u81ea\u52a8\u6d88\u5931: ', auto)\n  console.log('\u662f\u5426\u662f\u7528\u6237\u884c\u4e3a\u5bfc\u81f4\u7684\u6237\u578b\u56fe\u6d88\u5931: ', userAction)\n  console.log('\u6237\u578b\u56fe\u5df2\u7ecf\u6d88\u5931')\n})\n")),(0,a.kt)("h2",{id:"demo-\u6e90\u7801\u53c2\u8003"},"demo \u6e90\u7801\u53c2\u8003"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/realsee-developer/dnalogel/tree/main/examples/src"},"demo \u6e90\u7801\u53c2\u8003")))}c.isMDXComponent=!0}}]);