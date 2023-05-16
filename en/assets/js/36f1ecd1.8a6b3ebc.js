"use strict";(self.webpackChunkrealsee_developer_github_com=self.webpackChunkrealsee_developer_github_com||[]).push([[6464],{3905:(e,a,n)=>{n.d(a,{Zo:()=>d,kt:()=>g});var t=n(67294);function l(e,a,n){return a in e?Object.defineProperty(e,a,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[a]=n,e}function r(e,a){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);a&&(t=t.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),n.push.apply(n,t)}return n}function i(e){for(var a=1;a<arguments.length;a++){var n=null!=arguments[a]?arguments[a]:{};a%2?r(Object(n),!0).forEach((function(a){l(e,a,n[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(n,a))}))}return e}function o(e,a){if(null==e)return{};var n,t,l=function(e,a){if(null==e)return{};var n,t,l={},r=Object.keys(e);for(t=0;t<r.length;t++)n=r[t],a.indexOf(n)>=0||(l[n]=e[n]);return l}(e,a);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(t=0;t<r.length;t++)n=r[t],a.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}var s=t.createContext({}),p=function(e){var a=t.useContext(s),n=a;return e&&(n="function"==typeof e?e(a):i(i({},a),e)),n},d=function(e){var a=p(e.components);return t.createElement(s.Provider,{value:a},e.children)},u="mdxType",c={inlineCode:"code",wrapper:function(e){var a=e.children;return t.createElement(t.Fragment,{},a)}},m=t.forwardRef((function(e,a){var n=e.components,l=e.mdxType,r=e.originalType,s=e.parentName,d=o(e,["components","mdxType","originalType","parentName"]),u=p(n),m=l,g=u["".concat(s,".").concat(m)]||u[m]||c[m]||r;return n?t.createElement(g,i(i({ref:a},d),{},{components:n})):t.createElement(g,i({ref:a},d))}));function g(e,a){var n=arguments,l=a&&a.mdxType;if("string"==typeof e||l){var r=n.length,i=new Array(r);i[0]=m;var o={};for(var s in a)hasOwnProperty.call(a,s)&&(o[s]=a[s]);o.originalType=e,o[u]="string"==typeof e?e:l,i[1]=o;for(var p=2;p<r;p++)i[p]=n[p];return t.createElement.apply(null,i)}return t.createElement.apply(null,n)}m.displayName="MDXCreateElement"},85162:(e,a,n)=>{n.d(a,{Z:()=>i});var t=n(67294),l=n(86010);const r={tabItem:"tabItem_Ymn6"};function i(e){let{children:a,hidden:n,className:i}=e;return t.createElement("div",{role:"tabpanel",className:(0,l.Z)(r.tabItem,i),hidden:n},a)}},65488:(e,a,n)=>{n.d(a,{Z:()=>c});var t=n(87462),l=n(67294),r=n(86010),i=n(72389),o=n(67392),s=n(7094),p=n(12466);const d={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};function u(e){const{lazy:a,block:n,defaultValue:i,values:u,groupId:c,className:m}=e,g=l.Children.map(e.children,(e=>{if((0,l.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})),v=u??g.map((e=>{let{props:{value:a,label:n,attributes:t}}=e;return{value:a,label:n,attributes:t}})),f=(0,o.l)(v,((e,a)=>e.value===a.value));if(f.length>0)throw new Error(`Docusaurus error: Duplicate values "${f.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`);const h=null===i?i:i??g.find((e=>e.props.default))?.props.value??g[0].props.value;if(null!==h&&!v.some((e=>e.value===h)))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${h}" but none of its children has the corresponding value. Available values are: ${v.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);const{tabGroupChoices:k,setTabGroupChoices:b}=(0,s.U)(),[C,y]=(0,l.useState)(h),N=[],{blockElementScrollPositionUntilNextRender:P}=(0,p.o5)();if(null!=c){const e=k[c];null!=e&&e!==C&&v.some((a=>a.value===e))&&y(e)}const w=e=>{const a=e.currentTarget,n=N.indexOf(a),t=v[n].value;t!==C&&(P(a),y(t),null!=c&&b(c,String(t)))},M=e=>{let a=null;switch(e.key){case"Enter":w(e);break;case"ArrowRight":{const n=N.indexOf(e.currentTarget)+1;a=N[n]??N[0];break}case"ArrowLeft":{const n=N.indexOf(e.currentTarget)-1;a=N[n]??N[N.length-1];break}}a?.focus()};return l.createElement("div",{className:(0,r.Z)("tabs-container",d.tabList)},l.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,r.Z)("tabs",{"tabs--block":n},m)},v.map((e=>{let{value:a,label:n,attributes:i}=e;return l.createElement("li",(0,t.Z)({role:"tab",tabIndex:C===a?0:-1,"aria-selected":C===a,key:a,ref:e=>N.push(e),onKeyDown:M,onClick:w},i,{className:(0,r.Z)("tabs__item",d.tabItem,i?.className,{"tabs__item--active":C===a})}),n??a)}))),a?(0,l.cloneElement)(g.filter((e=>e.props.value===C))[0],{className:"margin-top--md"}):l.createElement("div",{className:"margin-top--md"},g.map(((e,a)=>(0,l.cloneElement)(e,{key:a,hidden:e.props.value!==C})))))}function c(e){const a=(0,i.Z)();return l.createElement(u,(0,t.Z)({key:String(a)},e))}},88882:(e,a,n)=>{n.r(a),n.d(a,{assets:()=>d,contentTitle:()=>s,default:()=>g,frontMatter:()=>o,metadata:()=>p,toc:()=>u});var t=n(87462),l=(n(67294),n(3905)),r=n(65488),i=n(85162);const o={title:"Model Booster Compass"},s=void 0,p={unversionedId:"front/3d-space/advanced/dnalogel/ModelChassisCompassPlugin",id:"front/3d-space/advanced/dnalogel/ModelChassisCompassPlugin",title:"Model Booster Compass",description:"ModelChassisCompassPlugin",source:"@site/i18n/en/docusaurus-plugin-content-docs/current/front/3d-space/advanced/dnalogel/ModelChassisCompassPlugin.md",sourceDirName:"front/3d-space/advanced/dnalogel",slug:"/front/3d-space/advanced/dnalogel/ModelChassisCompassPlugin",permalink:"/en/docs/front/3d-space/advanced/dnalogel/ModelChassisCompassPlugin",draft:!1,tags:[],version:"current",lastUpdatedBy:"sansi.lcj",lastUpdatedAt:1669717185,formattedLastUpdatedAt:"Nov 29, 2022",frontMatter:{title:"Model Booster Compass"},sidebar:"\u4e09\u7ef4\u7a7a\u95f4",previous:{title:"Model Label",permalink:"/en/docs/front/3d-space/advanced/dnalogel/ModelRoomLabelPlugin"},next:{title:"Model Indoor Guide",permalink:"/en/docs/front/3d-space/advanced/dnalogel/ModelEntryDoorGuidePlugin"}},d={},u=[{value:"<strong>ModelChassisCompassPlugin</strong>",id:"modelchassiscompassplugin",level:2},{value:"Function Description",id:"function-description",level:2},{value:"Effect Display",id:"effect-display",level:2},{value:"Install reference",id:"install-reference",level:2},{value:"Development Guides",id:"development-guides",level:2},{value:"Initialize",id:"initialize",level:3},{value:"React initialization",id:"react-initialization",level:3},{value:"Vue initialization",id:"vue-initialization",level:3},{value:"Load data",id:"load-data",level:3},{value:"Core approach",id:"core-approach",level:3},{value:"demo source reference",id:"demo-source-reference",level:2}],c={toc:u},m="wrapper";function g(e){let{components:a,...n}=e;return(0,l.kt)(m,(0,t.Z)({},c,n,{components:a,mdxType:"MDXLayout"}),(0,l.kt)("h2",{id:"modelchassiscompassplugin"},(0,l.kt)("strong",{parentName:"h2"},"ModelChassisCompassPlugin")),(0,l.kt)("h2",{id:"function-description"},"Function Description"),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Model Booster Compass Plugin")," integrates a set of compass decks that can view model directions in model status"),(0,l.kt)("p",null,"Details below\uff1a"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"In a model state, use the compass model to identify the physical direction of the model.")),(0,l.kt)("h2",{id:"effect-display"},"Effect Display"),(0,l.kt)("p",null,"Click the",(0,l.kt)("strong",{parentName:"p"},"Space Overview"),"button to view the model chassis compass in the space overview mode."),(0,l.kt)("div",{className:"docs-vr-normal"},(0,l.kt)("iframe",{className:"docs-vr-iframe",src:"https://realsee.js.org/dnalogel/src/ModelChassisCompassPlugin/index.html"})),(0,l.kt)("h2",{id:"install-reference"},"Install reference"),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Please choose ",(0,l.kt)("inlineCode",{parentName:"strong"},"yarn")," or ",(0,l.kt)("inlineCode",{parentName:"strong"},"npm")," installation method\uff1aas needed")),(0,l.kt)(r.Z,{groupId:"npm2yarn",mdxType:"Tabs"},(0,l.kt)(i.Z,{value:"npm",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"npm install @realsee/dnalogel\n"))),(0,l.kt)(i.Z,{value:"yarn",label:"Yarn",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"yarn add @realsee/dnalogel\n"))),(0,l.kt)(i.Z,{value:"pnpm",label:"pnpm",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"pnpm add @realsee/dnalogel\n")))),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"By es reference\uff1a")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-tsx"},'import { ModelChassisCompassPlugin } from "@realsee/dnalogel"\n')),(0,l.kt)("h2",{id:"development-guides"},"Development Guides"),(0,l.kt)("h3",{id:"initialize"},"Initialize"),(0,l.kt)("p",null,"When initializing the ",(0,l.kt)("inlineCode",{parentName:"p"},"Five")," instance, configure ",(0,l.kt)("inlineCode",{parentName:"p"},"ModelChassisCompassPlugin")," in the initialization plug-in parameters."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-ts"},"import { Five } from '@realsee/five'\nimport { ModelChassisCompassPlugin } from \"@realsee/dnalogel\";\n\nconst five = new Five({\n    plugins: [\n        [\n            ModelChassisCompassPlugin,\n            'modelChassisCompassPlugin', // custom plugin name\n            {\n                // parameter configuration\n            }\n        ]\n    ]\n})\n")),(0,l.kt)("h3",{id:"react-initialization"},"React initialization"),(0,l.kt)("p",null,"When creating ",(0,l.kt)("inlineCode",{parentName:"p"},"FiveProvider")," , configure ",(0,l.kt)("inlineCode",{parentName:"p"},"ModelChassisCompassPlugin")," in the initialization plug-in parameters."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-ts"},'import { ModelChassisCompassPlugin } from "@realsee/dnalogel";\nimport { createFiveProvider, FiveCanvas } from "@realsee/five/react";\n\nconst FiveProvider = createFiveProvider({\n    plugins: [\n        [\n            ModelChassisCompassPlugin,\n            \'modelChassisCompassPlugin\', // custom plugin name\n            {\n                // parameter configuration\n            }\n        ]\n    ]\n});\n')),(0,l.kt)("h3",{id:"vue-initialization"},"Vue initialization"),(0,l.kt)("p",null,"When using ",(0,l.kt)("inlineCode",{parentName:"p"},"FiveProvider")," , configure ",(0,l.kt)("inlineCode",{parentName:"p"},"ModelChassisCompassPlugin")," in the initialization plug-in parameters."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-vue"},'<template>\n  <FiveProvider :fiveInitArgs="fiveInitArgs">\n  </FiveProvider>\n</template>\n<script setup>\nimport ModelChassisCompassPlugin from "@realsee/dnalogel/libs/ModelChassisCompassPlugin";\nimport { FiveProvider, FiveCanvas } from "@realsee/five/vue";\nconst fiveInitArgs = {\n    plugins: [\n        [\n            ModelChassisCompassPlugin,\n            \'modelChassisCompassPlugin\', // Custom plugin name\n            {\n                // Parameter configuration\n            }\n        ]\n    ]\n}\n<\/script>\n')),(0,l.kt)("h3",{id:"load-data"},"Load data"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-ts"},"// Get an instance of a plugin, where `modelChassisCompassPlugin` is a custom name upon initialization\nconst pluginInstance = five.plugins.modelChassisCompassPlugin \n\n// call the `load` method to load model housing labels\npluginInstance.load(modelChassisCompassPluginData)\n")),(0,l.kt)("h3",{id:"core-approach"},"Core approach"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"load(data: ModelChassisCompassPluginData)")," Loading plugin data")),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"You need to manually load the plug-in data, please read",(0,l.kt)("a",{parentName:"p",href:"https://open-platform.realsee.com/developer/open/api#/"},"Realsee Open Platform API"),"for the data source.")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},(0,l.kt)("inlineCode",{parentName:"p"},"enable: () => void")," enable plugins")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},(0,l.kt)("inlineCode",{parentName:"p"},"disable: () => void")," disabled plugins"))),(0,l.kt)("h2",{id:"demo-source-reference"},"demo source reference"),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"https://github.com/realsee-developer/dnalogel/tree/main/examples/src"},"demo source reference")))}g.isMDXComponent=!0}}]);