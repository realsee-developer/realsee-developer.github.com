"use strict";(self.webpackChunkrealsee_developer_github_com=self.webpackChunkrealsee_developer_github_com||[]).push([[5624],{49613:(e,n,a)=>{a.d(n,{Zo:()=>u,kt:()=>m});var t=a(59496);function r(e,n,a){return n in e?Object.defineProperty(e,n,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[n]=a,e}function l(e,n){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),a.push.apply(a,t)}return a}function o(e){for(var n=1;n<arguments.length;n++){var a=null!=arguments[n]?arguments[n]:{};n%2?l(Object(a),!0).forEach((function(n){r(e,n,a[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(a,n))}))}return e}function i(e,n){if(null==e)return{};var a,t,r=function(e,n){if(null==e)return{};var a,t,r={},l=Object.keys(e);for(t=0;t<l.length;t++)a=l[t],n.indexOf(a)>=0||(r[a]=e[a]);return r}(e,n);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(t=0;t<l.length;t++)a=l[t],n.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var s=t.createContext({}),p=function(e){var n=t.useContext(s),a=n;return e&&(a="function"==typeof e?e(n):o(o({},n),e)),a},u=function(e){var n=p(e.components);return t.createElement(s.Provider,{value:n},e.children)},d={inlineCode:"code",wrapper:function(e){var n=e.children;return t.createElement(t.Fragment,{},n)}},c=t.forwardRef((function(e,n){var a=e.components,r=e.mdxType,l=e.originalType,s=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),c=p(a),m=r,g=c["".concat(s,".").concat(m)]||c[m]||d[m]||l;return a?t.createElement(g,o(o({ref:n},u),{},{components:a})):t.createElement(g,o({ref:n},u))}));function m(e,n){var a=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var l=a.length,o=new Array(l);o[0]=c;var i={};for(var s in n)hasOwnProperty.call(n,s)&&(i[s]=n[s]);i.originalType=e,i.mdxType="string"==typeof e?e:r,o[1]=i;for(var p=2;p<l;p++)o[p]=a[p];return t.createElement.apply(null,o)}return t.createElement.apply(null,a)}c.displayName="MDXCreateElement"},45558:(e,n,a)=>{a.d(n,{Z:()=>o});var t=a(59496),r=a(45924);const l="tabItem_IPoj";function o(e){let{children:n,hidden:a,className:o}=e;return t.createElement("div",{role:"tabpanel",className:(0,r.Z)(l,o),hidden:a},n)}},38637:(e,n,a)=>{a.d(n,{Z:()=>m});var t=a(2962),r=a(59496),l=a(45924),o=a(26709),i=a(33548),s=a(14714),p=a(60411);const u="tabList_xr86",d="tabItem_r4_W";function c(e){var n;const{lazy:a,block:o,defaultValue:c,values:m,groupId:g,className:f}=e,v=r.Children.map(e.children,(e=>{if((0,r.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})),h=m??v.map((e=>{let{props:{value:n,label:a,attributes:t}}=e;return{value:n,label:a,attributes:t}})),k=(0,i.l)(h,((e,n)=>e.value===n.value));if(k.length>0)throw new Error(`Docusaurus error: Duplicate values "${k.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`);const b=null===c?c:c??(null==(n=v.find((e=>e.props.default)))?void 0:n.props.value)??v[0].props.value;if(null!==b&&!h.some((e=>e.value===b)))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${b}" but none of its children has the corresponding value. Available values are: ${h.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);const{tabGroupChoices:P,setTabGroupChoices:N}=(0,s.U)(),[y,w]=(0,r.useState)(b),R=[],{blockElementScrollPositionUntilNextRender:x}=(0,p.o5)();if(null!=g){const e=P[g];null!=e&&e!==y&&h.some((n=>n.value===e))&&w(e)}const I=e=>{const n=e.currentTarget,a=R.indexOf(n),t=h[a].value;t!==y&&(x(n),w(t),null!=g&&N(g,String(t)))},O=e=>{var n;let a=null;switch(e.key){case"Enter":I(e);break;case"ArrowRight":{const n=R.indexOf(e.currentTarget)+1;a=R[n]??R[0];break}case"ArrowLeft":{const n=R.indexOf(e.currentTarget)-1;a=R[n]??R[R.length-1];break}}null==(n=a)||n.focus()};return r.createElement("div",{className:(0,l.Z)("tabs-container",u)},r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,l.Z)("tabs",{"tabs--block":o},f)},h.map((e=>{let{value:n,label:a,attributes:o}=e;return r.createElement("li",(0,t.Z)({role:"tab",tabIndex:y===n?0:-1,"aria-selected":y===n,key:n,ref:e=>R.push(e),onKeyDown:O,onClick:I},o,{className:(0,l.Z)("tabs__item",d,null==o?void 0:o.className,{"tabs__item--active":y===n})}),a??n)}))),a?(0,r.cloneElement)(v.filter((e=>e.props.value===y))[0],{className:"margin-top--md"}):r.createElement("div",{className:"margin-top--md"},v.map(((e,n)=>(0,r.cloneElement)(e,{key:n,hidden:e.props.value!==y})))))}function m(e){const n=(0,o.Z)();return r.createElement(c,(0,t.Z)({key:String(n)},e))}},64143:(e,n,a)=>{a.r(n),a.d(n,{assets:()=>u,contentTitle:()=>s,default:()=>m,frontMatter:()=>i,metadata:()=>p,toc:()=>d});var t=a(2962),r=(a(59496),a(49613)),l=a(38637),o=a(45558);const i={title:"Add panorama size: glowing_star:"},s=void 0,p={unversionedId:"front/3d-space/advanced/dnalogel/PanoRulerPlugin",id:"front/3d-space/advanced/dnalogel/PanoRulerPlugin",title:"Add panorama size: glowing_star:",description:"PanoRuler Plugins",source:"@site/i18n/en/docusaurus-plugin-content-docs/current/front/3d-space/advanced/dnalogel/PanoRulerPlugin.md",sourceDirName:"front/3d-space/advanced/dnalogel",slug:"/front/3d-space/advanced/dnalogel/PanoRulerPlugin",permalink:"/en/docs/front/3d-space/advanced/dnalogel/PanoRulerPlugin",draft:!1,tags:[],version:"current",lastUpdatedBy:"lichengjie",lastUpdatedAt:1669201266,formattedLastUpdatedAt:"Nov 23, 2022",frontMatter:{title:"Add panorama size: glowing_star:"},sidebar:"\u4e09\u7ef4\u7a7a\u95f4",previous:{title:"Model Indoor Guide",permalink:"/en/docs/front/3d-space/advanced/dnalogel/ModelEntryDoorGuidePlugin"},next:{title:"Add panorama Pro\ud83c\udf1f",permalink:"/en/docs/front/3d-space/advanced/dnalogel/PanoRulerProPlugin"}},u={},d=[{value:"<strong>PanoRuler Plugins</strong>",id:"panoruler-plugins",level:2},{value:"Function Description",id:"function-description",level:2},{value:"Example effect",id:"example-effect",level:2},{value:"Install reference",id:"install-reference",level:2},{value:"Development Guides",id:"development-guides",level:2},{value:"Initialize",id:"initialize",level:3},{value:"React initialization",id:"react-initialization",level:3},{value:"Vue initialization",id:"vue-initialization",level:3},{value:"Load data",id:"load-data",level:3},{value:"Core approach",id:"core-approach",level:3},{value:"demo source reference",id:"demo-source-reference",level:2}],c={toc:d};function m(e){let{components:n,...a}=e;return(0,r.kt)("wrapper",(0,t.Z)({},c,a,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"panoruler-plugins"},(0,r.kt)("strong",{parentName:"h2"},"PanoRuler Plugins")),(0,r.kt)("admonition",{type:"info"},(0,r.kt)("p",{parentName:"admonition"},"Panorama ruler depends, for example, on the open API to fetch scale data, you can refer to ",(0,r.kt)("a",{parentName:"p",href:"https://open-platform.realsee.com/developer/open/api/#/"},"Open API")," to learn how to get panorama scale data. Panorama data open API interface is\uff1a",(0,r.kt)("inlineCode",{parentName:"p"},"/open/v1/entity/pano_ruler/plugin"))),(0,r.kt)("h2",{id:"function-description"},"Function Description"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Panorama ruler plugin")," Provides dimensions for marking key outlines of listings in panorama mode."),(0,r.kt)("p",null,"Details below\uff1a"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Provides information on the size of the critical profile of the house in panoramic mode such as the height, area width and depth of the partition; supports scenes of vision VR and vision VR."),(0,r.kt)("li",{parentName:"ul"},"Shows only the rubric line below the center of the current view."),(0,r.kt)("li",{parentName:"ul"},"When moving points and changing perspectives, the rubric line will follow the move and change."),(0,r.kt)("li",{parentName:"ul"},"Value bubbles length is adaptive\uff1adepending on the content of the value is adaptable to the length of the bubble and supports the value content being configured according to special needs, such as the value has the need for inch units."),(0,r.kt)("li",{parentName:"ul"},"If the ruler is less than the numerical bubble length of that scale, the ruler shall not be displayed.")),(0,r.kt)("h2",{id:"example-effect"},"Example effect"),(0,r.kt)("div",{className:"docs-vr-normal"},(0,r.kt)("iframe",{className:"docs-vr-iframe",src:"https://realsee.js.org/dnalogel/src/PanoRulerPlugin/index.html"})),(0,r.kt)("h2",{id:"install-reference"},"Install reference"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Please choose ",(0,r.kt)("inlineCode",{parentName:"strong"},"yarn")," or ",(0,r.kt)("inlineCode",{parentName:"strong"},"npm")," installation method\uff1aas needed")),(0,r.kt)(l.Z,{groupId:"npm2yarn",mdxType:"Tabs"},(0,r.kt)(o.Z,{value:"npm",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"npm install @realsee/dnalogel\n"))),(0,r.kt)(o.Z,{value:"yarn",label:"Yarn",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"yarn add @realsee/dnalogel\n")))),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"By es reference\uff1a")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx"},'import { PanoRulerPlugin } from "@realsee/dnalogel"\n')),(0,r.kt)("h2",{id:"development-guides"},"Development Guides"),(0,r.kt)("h3",{id:"initialize"},"Initialize"),(0,r.kt)("p",null,"When initializing ",(0,r.kt)("inlineCode",{parentName:"p"},"Five")," instances, configure ",(0,r.kt)("inlineCode",{parentName:"p"},"PanoRuler Plugin")," in initialize plugin parameters."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"import { Five } from '@realsee/five'\nimport { PanoRulerPlugin } from \"@realsee/dnalogel\";\n\nconst five = new Five({\n    plugins: [\n        [\n            PanoRulerPlugin,\n            'panoRulerPlugin', // custom plugin name\n            {\n                // parameter configuration\n            }\n        ]\n    ]\n})\n")),(0,r.kt)("h3",{id:"react-initialization"},"React initialization"),(0,r.kt)("p",null,"When creating ",(0,r.kt)("inlineCode",{parentName:"p"},"FiveProvider")," , configure ",(0,r.kt)("inlineCode",{parentName:"p"},"PanoRuler Plugin")," in initialize plugin parameters."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},'import { PanoRulerPlugin } from "@realsee/dnalogel";\nimport { createFiveProvider, FiveCanvas } from "@realsee/five/react";\n\nconst FiveProvider = createFiveProvider({\n    plugins: [\n        [\n            PanoRulerPlugin,\n            \'panoRulerPlugin\', // custom plugin name\n            {\n                // parameter configuration\n            }\n        ]\n    ]\n});\n')),(0,r.kt)("h3",{id:"vue-initialization"},"Vue initialization"),(0,r.kt)("p",null,"When using ",(0,r.kt)("inlineCode",{parentName:"p"},"FiveProvider")," , configure ",(0,r.kt)("inlineCode",{parentName:"p"},"PanoRuler Plugin")," in initialize plugin parameters."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-vue"},'<template>\n  <FiveProvider :fiveInitArgs="fiveInitArgs">\n  </FiveProvider>\n</template>\n<script setup>\nimport PanoRulerPlugin from "@realsee/dnalogel/libs/PanoRulerPlugin";\nimport { FiveProvider, FiveCanvas } from "@realsee/five/vue";\nconst fiveInitArgs = {\n    plugins: [\n        [\n            PanoRulerPlugin ,\n            \'panoRulerPlugin\', // Custom plugin name\n            {\n                // compassImageUrl: \'\' // Configure steering wheel image\n            }\n        ]\n    ]\n}\n<\/script>\n')),(0,r.kt)("h3",{id:"load-data"},"Load data"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"// Get an instance of a plugin, where `panoRuler Plugin` is the custom name upon initialization\nconst pluginInstance = five.plugins.panoRulerPlugin\n\n// call the `load` method to load panorama data\npluginInstance.load(roomInfo, roomRules, { distanceText: (distance) => `around ${distance.toFixed(1)}m`\n")),(0,r.kt)("admonition",{type:"tip"},(0,r.kt)("p",{parentName:"admonition"},(0,r.kt)("strong",{parentName:"p"},"distanceText caption\uff1a")),(0,r.kt)("p",{parentName:"admonition"},"For example, the default value of the scale data output unit is",(0,r.kt)("strong",{parentName:"p"},"m"),". If you need other units, you can change the unit description and add unified description information by passing in the ",(0,r.kt)("inlineCode",{parentName:"p"},"distanceText")," callback method.Example",(0,r.kt)("strong",{parentName:"p"},"centimeter"),"\uff1a"),(0,r.kt)("pre",{parentName:"admonition"},(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"pluginInstance.load(roomInfo, roomRules, { distanceText: (distance) => `about ${(distance * 100).toFixed(2)}cm`)\n")),(0,r.kt)("p",{parentName:"admonition"},"The callback parameter ",(0,r.kt)("inlineCode",{parentName:"p"},"distance")," needs to be processed as ",(0,r.kt)("strong",{parentName:"p"},"distance * 100")," to achieve the purpose of converting meters into centimeters.",(0,r.kt)("inlineCode",{parentName:"p"},"toFixed()")," is used to set the reserved digits after the decimal point."),(0,r.kt)("p",{parentName:"admonition"},"Effect Display\uff1a ",(0,r.kt)("img",{parentName:"p",src:"http://vrlab-public.ljcdn.com/common/file/web/75037dde-01a3-4954-b452-9d39b2592e0b.png",alt:"img.png"}))),(0,r.kt)("h3",{id:"core-approach"},"Core approach"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"load: (roomInfo?: RoomInfo, roomRules?: RoomRules, options?: PanoRulerPluginOptions) => Promise<boolean>")," Loading plugin data")),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"You need to load plugin data manually. Please read",(0,r.kt)("a",{parentName:"p",href:"https://open-platform.realsee.com/developer/open/api/#/"},"to develop the API"))),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"enable: () => void")," Open ruler")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"disable: () => void")," closing ruler"))),(0,r.kt)("h2",{id:"demo-source-reference"},"demo source reference"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/realsee-developer/dnalogel/tree/main/examples/src"},"demo source reference")))}m.isMDXComponent=!0}}]);