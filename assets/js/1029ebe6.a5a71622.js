"use strict";(self.webpackChunkrealsee_developer_github_com=self.webpackChunkrealsee_developer_github_com||[]).push([[8931],{49613:(e,n,a)=>{a.d(n,{Zo:()=>d,kt:()=>c});var t=a(59496);function l(e,n,a){return n in e?Object.defineProperty(e,n,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[n]=a,e}function r(e,n){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),a.push.apply(a,t)}return a}function o(e){for(var n=1;n<arguments.length;n++){var a=null!=arguments[n]?arguments[n]:{};n%2?r(Object(a),!0).forEach((function(n){l(e,n,a[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(a,n))}))}return e}function i(e,n){if(null==e)return{};var a,t,l=function(e,n){if(null==e)return{};var a,t,l={},r=Object.keys(e);for(t=0;t<r.length;t++)a=r[t],n.indexOf(a)>=0||(l[a]=e[a]);return l}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(t=0;t<r.length;t++)a=r[t],n.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(l[a]=e[a])}return l}var p=t.createContext({}),s=function(e){var n=t.useContext(p),a=n;return e&&(a="function"==typeof e?e(n):o(o({},n),e)),a},d=function(e){var n=s(e.components);return t.createElement(p.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return t.createElement(t.Fragment,{},n)}},m=t.forwardRef((function(e,n){var a=e.components,l=e.mdxType,r=e.originalType,p=e.parentName,d=i(e,["components","mdxType","originalType","parentName"]),m=s(a),c=l,g=m["".concat(p,".").concat(c)]||m[c]||u[c]||r;return a?t.createElement(g,o(o({ref:n},d),{},{components:a})):t.createElement(g,o({ref:n},d))}));function c(e,n){var a=arguments,l=n&&n.mdxType;if("string"==typeof e||l){var r=a.length,o=new Array(r);o[0]=m;var i={};for(var p in n)hasOwnProperty.call(n,p)&&(i[p]=n[p]);i.originalType=e,i.mdxType="string"==typeof e?e:l,o[1]=i;for(var s=2;s<r;s++)o[s]=a[s];return t.createElement.apply(null,o)}return t.createElement.apply(null,a)}m.displayName="MDXCreateElement"},45558:(e,n,a)=>{a.d(n,{Z:()=>o});var t=a(59496),l=a(45924);const r="tabItem_IPoj";function o(e){let{children:n,hidden:a,className:o}=e;return t.createElement("div",{role:"tabpanel",className:(0,l.Z)(r,o),hidden:a},n)}},38637:(e,n,a)=>{a.d(n,{Z:()=>c});var t=a(2962),l=a(59496),r=a(45924),o=a(26709),i=a(33548),p=a(14714),s=a(60411);const d="tabList_xr86",u="tabItem_r4_W";function m(e){var n;const{lazy:a,block:o,defaultValue:m,values:c,groupId:g,className:v}=e,k=l.Children.map(e.children,(e=>{if((0,l.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})),T=c??k.map((e=>{let{props:{value:n,label:a,attributes:t}}=e;return{value:n,label:a,attributes:t}})),f=(0,i.l)(T,((e,n)=>e.value===n.value));if(f.length>0)throw new Error(`Docusaurus error: Duplicate values "${f.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`);const P=null===m?m:m??(null==(n=k.find((e=>e.props.default)))?void 0:n.props.value)??k[0].props.value;if(null!==P&&!T.some((e=>e.value===P)))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${P}" but none of its children has the corresponding value. Available values are: ${T.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);const{tabGroupChoices:y,setTabGroupChoices:N}=(0,p.U)(),[b,h]=(0,l.useState)(P),C=[],{blockElementScrollPositionUntilNextRender:x}=(0,s.o5)();if(null!=g){const e=y[g];null!=e&&e!==b&&T.some((n=>n.value===e))&&h(e)}const D=e=>{const n=e.currentTarget,a=C.indexOf(n),t=T[a].value;t!==b&&(x(n),h(t),null!=g&&N(g,String(t)))},w=e=>{var n;let a=null;switch(e.key){case"Enter":D(e);break;case"ArrowRight":{const n=C.indexOf(e.currentTarget)+1;a=C[n]??C[0];break}case"ArrowLeft":{const n=C.indexOf(e.currentTarget)-1;a=C[n]??C[C.length-1];break}}null==(n=a)||n.focus()};return l.createElement("div",{className:(0,r.Z)("tabs-container",d)},l.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,r.Z)("tabs",{"tabs--block":o},v)},T.map((e=>{let{value:n,label:a,attributes:o}=e;return l.createElement("li",(0,t.Z)({role:"tab",tabIndex:b===n?0:-1,"aria-selected":b===n,key:n,ref:e=>C.push(e),onKeyDown:w,onClick:D},o,{className:(0,r.Z)("tabs__item",u,null==o?void 0:o.className,{"tabs__item--active":b===n})}),a??n)}))),a?(0,l.cloneElement)(k.filter((e=>e.props.value===b))[0],{className:"margin-top--md"}):l.createElement("div",{className:"margin-top--md"},k.map(((e,n)=>(0,l.cloneElement)(e,{key:n,hidden:e.props.value!==b})))))}function c(e){const n=(0,o.Z)();return l.createElement(m,(0,t.Z)({key:String(n)},e))}},21393:(e,n,a)=>{a.r(n),a.d(n,{assets:()=>d,contentTitle:()=>p,default:()=>c,frontMatter:()=>i,metadata:()=>s,toc:()=>u});var t=a(2962),l=(a(59496),a(49613)),r=a(38637),o=a(45558);const i={title:"\u6dfb\u52a0\u5168\u666f\u6807\u7b7e"},p=void 0,s={unversionedId:"front/3d-space/advanced/dnalogel/PanoTagPlugin",id:"front/3d-space/advanced/dnalogel/PanoTagPlugin",title:"\u6dfb\u52a0\u5168\u666f\u6807\u7b7e",description:"PanoTagPlugin",source:"@site/docs/front/3d-space/advanced/dnalogel/PanoTagPlugin.md",sourceDirName:"front/3d-space/advanced/dnalogel",slug:"/front/3d-space/advanced/dnalogel/PanoTagPlugin",permalink:"/docs/front/3d-space/advanced/dnalogel/PanoTagPlugin",draft:!1,tags:[],version:"current",lastUpdatedBy:"Junchao Gao",lastUpdatedAt:1669017474,formattedLastUpdatedAt:"2022\u5e7411\u670821\u65e5",frontMatter:{title:"\u6dfb\u52a0\u5168\u666f\u6807\u7b7e"},sidebar:"\u4e09\u7ef4\u7a7a\u95f4",previous:{title:"\u6dfb\u52a0\u5168\u666f\u6307\u5357\u9488",permalink:"/docs/front/3d-space/advanced/dnalogel/PanoCompassPlugin"},next:{title:"\u6dfb\u52a0\u8def\u5f84\u5f15\u5bfc",permalink:"/docs/front/3d-space/advanced/dnalogel/GuideLinePlugin"}},d={},u=[{value:"<strong>PanoTagPlugin</strong>",id:"panotagplugin",level:2},{value:"\u529f\u80fd\u8bf4\u660e",id:"\u529f\u80fd\u8bf4\u660e",level:2},{value:"\u793a\u4f8b\u6548\u679c",id:"\u793a\u4f8b\u6548\u679c",level:2},{value:"\u5b89\u88c5\u5f15\u7528",id:"\u5b89\u88c5\u5f15\u7528",level:2},{value:"\u5f00\u53d1\u6307\u5357",id:"\u5f00\u53d1\u6307\u5357",level:2},{value:"\u521d\u59cb\u5316",id:"\u521d\u59cb\u5316",level:3},{value:"React \u521d\u59cb\u5316",id:"react-\u521d\u59cb\u5316",level:3},{value:"Vue \u521d\u59cb\u5316",id:"vue-\u521d\u59cb\u5316",level:3},{value:"\u8f7d\u5165\u6570\u636e",id:"\u8f7d\u5165\u6570\u636e",level:3},{value:"\u6838\u5fc3\u65b9\u6cd5",id:"\u6838\u5fc3\u65b9\u6cd5",level:3},{value:"\u6dfb\u52a0\u81ea\u5b9a\u4e49\u6807\u7b7e",id:"\u6dfb\u52a0\u81ea\u5b9a\u4e49\u6807\u7b7e",level:2},{value:"\u6570\u636e\u7ed3\u6784",id:"\u6570\u636e\u7ed3\u6784",level:2},{value:"demo \u6e90\u7801\u53c2\u8003",id:"demo-\u6e90\u7801\u53c2\u8003",level:2}],m={toc:u};function c(e){let{components:n,...a}=e;return(0,l.kt)("wrapper",(0,t.Z)({},m,a,{components:n,mdxType:"MDXLayout"}),(0,l.kt)("h2",{id:"panotagplugin"},(0,l.kt)("strong",{parentName:"h2"},"PanoTagPlugin")),(0,l.kt)("h2",{id:"\u529f\u80fd\u8bf4\u660e"},"\u529f\u80fd\u8bf4\u660e"),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"\u5168\u666f\u6807\u7b7e\u63d2\u4ef6")," \u63d0\u4f9b\u5728\u5168\u666f\u6a21\u5f0f\u4e0b\u6807\u6ce8\u623f\u6e90\u4e0d\u540c\u4f4d\u7f6e\u6807\u7b7e\u4fe1\u606f\u3002"),(0,l.kt)("p",null,"\u8be6\u7ec6\u529f\u80fd\u70b9\u5982\u4e0b\uff1a"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u6807\u7b7e\u5171\u5206\u4e3a\u201c\u97f3\u9891\u6807\u7b7e(Audio)\u201d\u3001\u201c\u6587\u672c\u6807\u7b7e(Text)\u201d\u3001\u201c\u56fe\u6587\u6807\u7b7e(ImageText)\u201d\u3001\u201cVR\u8df3\u8f6c\u6807\u7b7e(Link)\u201d\u3001\u201c\u8425\u9500\u6807\u7b7e(Marketing)\u201d\u3001\u201c\u56fe\u7247\u89c6\u9891\u8d34\u7247(MediaPlane)\u201d\u3001\u201c\u81ea\u5b9a\u4e49\u6807\u7b7e(Custom)\u201d\u7b49\u3002"),(0,l.kt)("li",{parentName:"ul"},"\u6807\u7b7e\u6309\u7167\u7ef4\u5ea6\u7c7b\u578b(DimensionType)\u53ef\u4ee5\u5206\u4e3a\uff1a\u201c2D(Two)\u201d\u548c\u201c3D(Three)\u201d\u4e24\u79cd\u3002"),(0,l.kt)("li",{parentName:"ul"},"\u6309\u7167\u70b9\u4f4d\u7c7b\u578b(PointType)\u6765\u5206\uff0c\u6807\u7b7e\u53c8\u53ef\u4ee5\u5206\u4e3a\uff1a\u70b9\u6807\u8bb0(PointTag)\u548c\u5e73\u9762\u6807\u8bb0(PlaneTag)\u4e24\u79cd\u3002"),(0,l.kt)("li",{parentName:"ul"},"\u7528\u6237\u53ef\u4ee5\u81ea\u7531\u7ec4\u5408\u4e0a\u8ff0\u6807\u7b7e\u5206\u7c7b\u5c5e\u6027\uff0c\u6839\u636e\u81ea\u5df1\u7684\u4e1a\u52a1\u7c7b\u578b\uff0c\u521b\u9020\u66f4\u52a0\u9002\u5408\u7684\u5168\u666f\u6807\u7b7e\u3002")),(0,l.kt)("h2",{id:"\u793a\u4f8b\u6548\u679c"},"\u793a\u4f8b\u6548\u679c"),(0,l.kt)("div",{className:"docs-vr-normal"},(0,l.kt)("iframe",{className:"docs-vr-iframe",src:"http://localhost:5173/dnalogel/src/PanoTagPlugin/index.html"})),(0,l.kt)("h2",{id:"\u5b89\u88c5\u5f15\u7528"},"\u5b89\u88c5\u5f15\u7528"),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"\u8bf7\u6309\u9700\u9009\u62e9 ",(0,l.kt)("inlineCode",{parentName:"strong"},"yarn")," \u6216 ",(0,l.kt)("inlineCode",{parentName:"strong"},"npm")," \u5b89\u88c5\u65b9\u5f0f\uff1a")),(0,l.kt)(r.Z,{groupId:"npm2yarn",mdxType:"Tabs"},(0,l.kt)(o.Z,{value:"npm",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"npm install @realsee/dnalogel\n"))),(0,l.kt)(o.Z,{value:"yarn",label:"Yarn",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"yarn add @realsee/dnalogel\n")))),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"\u901a\u8fc7 es \u5f15\u7528\uff1a")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-tsx"},'import { PanoTagPlugin } from "@realsee/dnalogel"\n')),(0,l.kt)("h2",{id:"\u5f00\u53d1\u6307\u5357"},"\u5f00\u53d1\u6307\u5357"),(0,l.kt)("h3",{id:"\u521d\u59cb\u5316"},"\u521d\u59cb\u5316"),(0,l.kt)("p",null,"\u5728\u521d\u59cb\u5316 ",(0,l.kt)("inlineCode",{parentName:"p"},"Five")," \u5b9e\u4f8b\u65f6\uff0c\u5c06 ",(0,l.kt)("inlineCode",{parentName:"p"},"PanoTagPlugin")," \u914d\u7f6e\u5728\u521d\u59cb\u5316\u63d2\u4ef6\u53c2\u6570\u5373\u53ef\u3002"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-ts"},"import { Five } from '@realsee/five'\nimport { PanoTagPlugin } from \"@realsee/dnalogel\";\n\nconst five = new Five({\n    plugins: [\n        [\n            PanoTagPlugin,\n            'panoTagPlugin', // \u81ea\u5b9a\u4e49\u63d2\u4ef6\u540d\u79f0\n            {\n                // \u53c2\u6570\u914d\u7f6e\n            }\n        ]\n    ]\n})\n")),(0,l.kt)("h3",{id:"react-\u521d\u59cb\u5316"},"React \u521d\u59cb\u5316"),(0,l.kt)("p",null,"\u5728\u521b\u5efa ",(0,l.kt)("inlineCode",{parentName:"p"},"FiveProvider")," \u65f6\uff0c\u5c06 ",(0,l.kt)("inlineCode",{parentName:"p"},"PanoTagPlugin")," \u914d\u7f6e\u5728\u521d\u59cb\u5316\u63d2\u4ef6\u53c2\u6570\u5373\u53ef\u3002"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-ts"},'import { PanoTagPlugin } from "@realsee/dnalogel";\nimport { createFiveProvider, FiveCanvas } from "@realsee/five/react";\n\nconst FiveProvider = createFiveProvider({\n    plugins: [\n        [\n            PanoTagPlugin,\n            \'panoTagPlugin\', // \u81ea\u5b9a\u4e49\u63d2\u4ef6\u540d\u79f0\n            {\n                // \u53c2\u6570\u914d\u7f6e\n            }\n        ]\n    ]\n});\n')),(0,l.kt)("h3",{id:"vue-\u521d\u59cb\u5316"},"Vue \u521d\u59cb\u5316"),(0,l.kt)("p",null,"\u5728\u4f7f\u7528 ",(0,l.kt)("inlineCode",{parentName:"p"},"FiveProvider")," \u65f6\uff0c\u5c06 ",(0,l.kt)("inlineCode",{parentName:"p"},"PanoTagPlugin")," \u914d\u7f6e\u5728\u521d\u59cb\u5316\u63d2\u4ef6\u53c2\u6570\u5373\u53ef\u3002"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-vue"},'<template>\n  <FiveProvider :fiveInitArgs="fiveInitArgs">\n  </FiveProvider>\n</template>\n<script setup>\nimport PanoTagPlugin from "@realsee/dnalogel/libs/PanoTagPlugin";\nimport { FiveProvider, FiveCanvas } from "@realsee/five/vue";\nconst fiveInitArgs = {\n    plugins: [\n        [\n            PanoTagPlugin,\n            \'panoTagPlugin\', // \u81ea\u5b9a\u4e49\u63d2\u4ef6\u540d\u79f0\n            {\n                // \u53c2\u6570\u914d\u7f6e\n            }\n        ]\n    ]\n}\n<\/script>\n')),(0,l.kt)("h3",{id:"\u8f7d\u5165\u6570\u636e"},"\u8f7d\u5165\u6570\u636e"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-ts"},"// \u83b7\u53d6\u63d2\u4ef6\u5b9e\u4f8b,\u5176\u4e2d `panoTagPlugin` \u662f\u521d\u59cb\u5316\u65f6\u81ea\u5b9a\u4e49\u7684\u540d\u79f0\nconst pluginInstance = five.plugins.panoTagPlugin\n\n// \u8c03\u7528 `load` \u65b9\u6cd5\u8f7d\u5165\u5168\u666f\u6807\u7b7e\u6570\u636e\npluginInstance.load(tagsData, config)\n")),(0,l.kt)("h3",{id:"\u6838\u5fc3\u65b9\u6cd5"},"\u6838\u5fc3\u65b9\u6cd5"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},(0,l.kt)("inlineCode",{parentName:"p"},"load:(data: Tags, config?: AddTagConfig) => void")," \u8f7d\u5165\u63d2\u4ef6\u6570\u636e")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},(0,l.kt)("inlineCode",{parentName:"p"},"addTag:(tag: Tag | Tag[], config?: AddTagConfig) => void")," \u6dfb\u52a0\u6807\u7b7e")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},(0,l.kt)("inlineCode",{parentName:"p"},"clearTags: () => void")," \u6e05\u7a7a\u6240\u6709\u6807\u7b7e")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},(0,l.kt)("inlineCode",{parentName:"p"},"async show: (params?: { userAction?: boolean; withAnimation?: boolean }) => void")," \u663e\u793a\u6807\u7b7e")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},(0,l.kt)("inlineCode",{parentName:"p"},"async hide: (params?: { userAction?: boolean; withAnimation?: boolean }) => void")," \u9690\u85cf\u6807\u7b7e")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},(0,l.kt)("inlineCode",{parentName:"p"},"enable: (params?: { userAction?: boolean }) => void")," \u5141\u8bb8\u4f7f\u7528\u63d2\u4ef6")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},(0,l.kt)("inlineCode",{parentName:"p"},"disable: (params?: { userAction?: boolean }) => void")," \u7981\u6b62\u4f7f\u7528\u63d2\u4ef6")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},(0,l.kt)("inlineCode",{parentName:"p"},"dispose: () => void")," \u9500\u6bc1\u63d2\u4ef6")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},(0,l.kt)("inlineCode",{parentName:"p"},"setState: (state: Partial<State>, params: { userAction?: boolean; visibleWithAnimation?: boolean }) => void")," \u66f4\u65b0\u63d2\u4ef6\u72b6\u6001")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},(0,l.kt)("inlineCode",{parentName:"p"},"changeTagNormalById: (id: TagId, normal: ArrayPosition) => void")," \u4fee\u6539\u6807\u7b7e\u4f4d\u7f6e\u4fe1\u606f")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},(0,l.kt)("inlineCode",{parentName:"p"},"changeDataById: (id: TagId, data: PartialDeep<Tag<C>['data']>, deepMerge = true) => void")," \u6539\u53d8data")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},(0,l.kt)("inlineCode",{parentName:"p"},"changeTagById: (id: TagId,tag: PartialDeep<{ [P in keyof Pick<Tag<C>, 'enabled' | 'style' | 'dimensionType' | 'contentType' | 'data' | 'normal'>]: Tag[P] }>,deepMerge = true,) => void")," \u6539\u53d8tag\u4efb\u610f\u5c5e\u6027")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},(0,l.kt)("inlineCode",{parentName:"p"},"destroyTagById: (id: TagId | TagId[]) => void")," \u9500\u6bc1tag")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},(0,l.kt)("inlineCode",{parentName:"p"},"pauseCurrentMedia: () => void")," \u6682\u505c\u5f53\u524d\u6807\u7b7e\u5185\u8fdb\u884c\u7684\u6240\u6709\u591a\u5a92\u4f53"))),(0,l.kt)("h2",{id:"\u6dfb\u52a0\u81ea\u5b9a\u4e49\u6807\u7b7e"},"\u6dfb\u52a0\u81ea\u5b9a\u4e49\u6807\u7b7e"),(0,l.kt)("p",null,"\u6807\u7b7e\u4e2d\u6709\u4e00\u4e2a\u6807\u7b7e\u7c7b\u578b\u53eb\u505a\u201c\u81ea\u5b9a\u4e49\u6807\u7b7e\u201d\uff0c\u4f7f\u7528\u8fd9\u4e2a\u6807\u7b7e\u7c7b\u578b\uff0c\u5f00\u53d1\u8005\u53ef\u4ee5\u6839\u636e\u81ea\u5df1\u7684\u4e1a\u52a1\u9700\u8981\uff0c\u81ea\u5b9a\u4e49\u6dfb\u52a0\u4efb\u610f\u7b26\u5408\u89c4\u8303\u7684\u6807\u7b7e\u6837\u5f0f\u3002"),(0,l.kt)("p",null,"\u53ef\u4ee5\u53c2\u8003\u4e0b\u9762\u7684\u4f8b\u5b50\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-ts"},'  // \u6dfb\u52a0\u81ea\u5b9a\u4e49\u6807\u7b7e\n  const addCustomerTag = () => {\n    // \u81ea\u5b9a\u4e49Element\n    const ele = document.createElement(\'div\');\n    ele.innerText = "\u8fd9\u662f\u4e00\u4e2a\u81ea\u5b9a\u4e49\u7684\u6807\u7b7e";\n    ele.style.color = "red";\n    ele.style.width = "200px";\n    ele.style.border = "1px solid #000";\n\n    const tagData: Tag = {\n      id: "03338b76-b64a-4e90-37fb-44e3c0ffeb88",\n      pointType: "PointTag",\n      dimensionType: "2D",\n      position: [-1.7882169929208833, 1.022040232156752, -2.339700937271118],\n      data: {\n        text: "\u81ea\u5b9a\u4e49\u6807\u7b7e"\n      },\n      element: ele,\n      // ContentType\u8bbe\u7f6e\u4e3aCustom\n      contentType: "Custom"\n    }\n    pluginInstance.addTag(tagData);\n  }\n')),(0,l.kt)("h2",{id:"\u6570\u636e\u7ed3\u6784"},"\u6570\u636e\u7ed3\u6784"),(0,l.kt)("p",null,"\u63d2\u4ef6\u4e2d\u6700\u91cd\u8981\u7684\u4e00\u4e2a\u7ed3\u6784\u662f ",(0,l.kt)("inlineCode",{parentName:"p"},"Tag"),"\uff0c\u6dfb\u52a0\u6807\u7b7e\uff0c\u4fee\u6539\u6807\u7b7e\u4fe1\u606f\u7b49\u64cd\u4f5c\u90fd\u9700\u8981\u4f7f\u7528\uff0c\u5176\u5bf9\u5e94\u7684\u6570\u636e\u7ed3\u6784\u5982\u4e0b\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-typescript"},"\nexport type Tag<\n  C extends ContentType = any,\n  P extends PointType = any,\n  D extends DimensionType = any,\n  CustomDataType extends Object = {},\n> = {\n  /** \u5f00\u542f/\u7981\u7528 */\n  enabled?: boolean\n  /** \u552f\u4e00\u6807\u8bc6 */\n  id: TagId\n  /** \u4e00\u4e2a\u70b9\u7684\u6807\u7b7e/4\u4e2a\u70b9\u7684\u6807\u7b7e */\n  pointType: P\n  /** 2\u7ef4/3\u7ef4\u7c7b\u578b */\n  dimensionType: D\n  /** \u5185\u5bb9\u7c7b\u578b\uff0c\u6839\u636e\u5185\u5bb9\u7c7b\u578b\u5c55\u793a\u5bf9\u5e94UI */\n  contentType: C\n  /** \u70b9 */\n  position: P extends PointType.PointTag ? Position : P extends PointType.PlaneTag ? [Position, Position, Position, Position] : any\n  /** \u81ea\u5b9a\u4e49\u6807\u7b7e\u5185\u5bb9 */\n  element?: string | Element | ElementRenderer\n  /** \u6807\u7b7e\u6570\u636e */\n  data: C extends ContentType.Custom ? CustomDataType : ContentTypeMap[C]\n  /** \u300c\u5c55\u5f00/\u6536\u8d77\u300d \u300c\u53ef\u89c1/\u4e0d\u53ef\u89c1\u300d \u7684\u7b56\u7565\u914d\u7f6e */\n  config?: TagConfig<C, P, D, CustomDataType>\n  /** \u6cd5\u5411\u91cf */\n  normal?: Position\n  /** \u6837\u5f0f */\n  style?: {\n    /** \u5c0f\u5706\u70b9\u6837\u5f0f */\n    point?: { style: 'Default' } | { style: 'CustomIcon'; iconUrl: string } | { style: 'noPoint' }\n    /** \u6536\u8d77\u7684\u65f6\u5019\u7684\u52a8\u753b\u5ef6\u65f6\uff0c\u5355\u4f4d\uff1ams */\n    foldedPointDelay?: number\n  }\n} & (D extends DimensionType.Three ? (P extends PointType.PointTag ? { normal: Position } : unknown) : unknown) /** \u4e09\u7ef4\u6807\u7b7e\u9700\u8981\u6cd5\u5411\u91cf */\n\n")),(0,l.kt)("p",null,"\u6807\u7b7e\u7c7b\u578b\u5b9a\u4e49"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-typescript"},"export enum ContentType {\n  /** \u97f3\u9891\u6807\u7b7e */\n  Audio = 'Audio',\n  /** \u6587\u672c\u6807\u7b7e */\n  Text = 'Text',\n  /** \u56fe\u6587\u6807\u7b7e */\n  ImageText = 'ImageText',\n  /** VR\u8df3\u8f6c\u6807\u7b7e */\n  Link = 'Link',\n  /** \u8425\u9500\u6807\u7b7e */\n  Marketing = 'Marketing',\n  /** \u56fe\u7247\u89c6\u9891\u8d34\u7247 */\n  MediaPlane = 'MediaPlane',\n  /** \u5176\u4ed6/\u81ea\u5b9a\u4e49\u6807\u7b7e */\n  Custom = 'Custom',\n}\n")),(0,l.kt)("p",null,"\u6807\u7b7e\u7ef4\u5ea6\u7c7b\u578b\u5b9a\u4e49"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-typescript"},"export enum DimensionType {\n  Two = '2D',\n  Three = '3D',\n}\n")),(0,l.kt)("p",null,"\u6807\u7b7e\u70b9\u4f4d\u7c7b\u578b\u5b9a\u4e49"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-typescript"},"export enum PointType {\n  PointTag = 'PointTag',\n  PlaneTag = 'PlaneTag',\n}\n\n")),(0,l.kt)("h2",{id:"demo-\u6e90\u7801\u53c2\u8003"},"demo \u6e90\u7801\u53c2\u8003"),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"https://github.com/realsee-developer/dnalogel/tree/main/examples/src"},"demo \u6e90\u7801\u53c2\u8003")))}c.isMDXComponent=!0}}]);