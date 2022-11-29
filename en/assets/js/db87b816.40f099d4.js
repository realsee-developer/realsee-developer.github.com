"use strict";(self.webpackChunkrealsee_developer_github_com=self.webpackChunkrealsee_developer_github_com||[]).push([[884],{49613:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>m});var a=n(59496);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function r(e,t){if(null==e)return{};var n,a,l=function(e,t){if(null==e)return{};var n,a,l={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}var s=a.createContext({}),p=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=p(e.components);return a.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},c=a.forwardRef((function(e,t){var n=e.components,l=e.mdxType,o=e.originalType,s=e.parentName,u=r(e,["components","mdxType","originalType","parentName"]),c=p(n),m=l,h=c["".concat(s,".").concat(m)]||c[m]||d[m]||o;return n?a.createElement(h,i(i({ref:t},u),{},{components:n})):a.createElement(h,i({ref:t},u))}));function m(e,t){var n=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var o=n.length,i=new Array(o);i[0]=c;var r={};for(var s in t)hasOwnProperty.call(t,s)&&(r[s]=t[s]);r.originalType=e,r.mdxType="string"==typeof e?e:l,i[1]=r;for(var p=2;p<o;p++)i[p]=n[p];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}c.displayName="MDXCreateElement"},45558:(e,t,n)=>{n.d(t,{Z:()=>i});var a=n(59496),l=n(45924);const o="tabItem_IPoj";function i(e){let{children:t,hidden:n,className:i}=e;return a.createElement("div",{role:"tabpanel",className:(0,l.Z)(o,i),hidden:n},t)}},38637:(e,t,n)=>{n.d(t,{Z:()=>m});var a=n(2962),l=n(59496),o=n(45924),i=n(26709),r=n(33548),s=n(14714),p=n(60411);const u="tabList_xr86",d="tabItem_r4_W";function c(e){var t;const{lazy:n,block:i,defaultValue:c,values:m,groupId:h,className:g}=e,f=l.Children.map(e.children,(e=>{if((0,l.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})),k=m??f.map((e=>{let{props:{value:t,label:n,attributes:a}}=e;return{value:t,label:n,attributes:a}})),v=(0,r.l)(k,((e,t)=>e.value===t.value));if(v.length>0)throw new Error(`Docusaurus error: Duplicate values "${v.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`);const b=null===c?c:c??(null==(t=f.find((e=>e.props.default)))?void 0:t.props.value)??f[0].props.value;if(null!==b&&!k.some((e=>e.value===b)))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${b}" but none of its children has the corresponding value. Available values are: ${k.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);const{tabGroupChoices:N,setTabGroupChoices:w}=(0,s.U)(),[y,C]=(0,l.useState)(b),P=[],{blockElementScrollPositionUntilNextRender:F}=(0,p.o5)();if(null!=h){const e=N[h];null!=e&&e!==y&&k.some((t=>t.value===e))&&C(e)}const O=e=>{const t=e.currentTarget,n=P.indexOf(t),a=k[n].value;a!==y&&(F(t),C(a),null!=h&&w(h,String(a)))},E=e=>{var t;let n=null;switch(e.key){case"Enter":O(e);break;case"ArrowRight":{const t=P.indexOf(e.currentTarget)+1;n=P[t]??P[0];break}case"ArrowLeft":{const t=P.indexOf(e.currentTarget)-1;n=P[t]??P[P.length-1];break}}null==(t=n)||t.focus()};return l.createElement("div",{className:(0,o.Z)("tabs-container",u)},l.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":i},g)},k.map((e=>{let{value:t,label:n,attributes:i}=e;return l.createElement("li",(0,a.Z)({role:"tab",tabIndex:y===t?0:-1,"aria-selected":y===t,key:t,ref:e=>P.push(e),onKeyDown:E,onClick:O},i,{className:(0,o.Z)("tabs__item",d,null==i?void 0:i.className,{"tabs__item--active":y===t})}),n??t)}))),n?(0,l.cloneElement)(f.filter((e=>e.props.value===y))[0],{className:"margin-top--md"}):l.createElement("div",{className:"margin-top--md"},f.map(((e,t)=>(0,l.cloneElement)(e,{key:t,hidden:e.props.value!==y})))))}function m(e){const t=(0,i.Z)();return l.createElement(c,(0,a.Z)({key:String(t)},e))}},80254:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>s,default:()=>m,frontMatter:()=>r,metadata:()=>p,toc:()=>d});var a=n(2962),l=(n(59496),n(49613)),o=n(38637),i=n(45558);const r={title:"\ud83d\udce6 large spatial model household chart"},s=void 0,p={unversionedId:"front/3d-space/advanced/dnalogel/floorplan/MapViewFloorplanPlugin",id:"front/3d-space/advanced/dnalogel/floorplan/MapViewFloorplanPlugin",title:"\ud83d\udce6 large spatial model household chart",description:"MapviewFloorplanPlugin",source:"@site/i18n/en/docusaurus-plugin-content-docs/current/front/3d-space/advanced/dnalogel/floorplan/MapViewFloorplanPlugin.md",sourceDirName:"front/3d-space/advanced/dnalogel/floorplan",slug:"/front/3d-space/advanced/dnalogel/floorplan/MapViewFloorplanPlugin",permalink:"/en/docs/front/3d-space/advanced/dnalogel/floorplan/MapViewFloorplanPlugin",draft:!1,tags:[],version:"current",lastUpdatedBy:"sansi.lcj",lastUpdatedAt:1669717185,formattedLastUpdatedAt:"Nov 29, 2022",frontMatter:{title:"\ud83d\udce6 large spatial model household chart"},sidebar:"\u4e09\u7ef4\u7a7a\u95f4",previous:{title:"\ud83d\udce6 model household graph",permalink:"/en/docs/front/3d-space/advanced/dnalogel/floorplan/ModelFloorplanPlugin"},next:{title:"\ud83d\udce6 overview model household chart",permalink:"/en/docs/front/3d-space/advanced/dnalogel/floorplan/TopviewFloorplanPlugin"}},u={},d=[{value:"<strong>MapviewFloorplanPlugin</strong>",id:"mapviewfloorplanplugin",level:2},{value:"Function Description",id:"function-description",level:2},{value:"Example effect",id:"example-effect",level:2},{value:"Install reference",id:"install-reference",level:2},{value:"Development Guides",id:"development-guides",level:2},{value:"Initialize",id:"initialize",level:3},{value:"React initialization",id:"react-initialization",level:3},{value:"Vue initialization",id:"vue-initialization",level:3},{value:"Load data",id:"load-data",level:3},{value:"Plugin Core Method",id:"plugin-core-method",level:3},{value:"Custom configuration",id:"custom-configuration",level:3},{value:"Event Hooks",id:"event-hooks",level:3},{value:"demo source reference",id:"demo-source-reference",level:2}],c={toc:d};function m(e){let{components:t,...n}=e;return(0,l.kt)("wrapper",(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h2",{id:"mapviewfloorplanplugin"},(0,l.kt)("strong",{parentName:"h2"},"MapviewFloorplanPlugin")),(0,l.kt)("admonition",{type:"tip"},(0,l.kt)("mdxAdmonitionTitle",{parentName:"admonition"},"This plugin is dependent on",(0,l.kt)("strong",{parentName:"mdxAdmonitionTitle"},"household diagram data"),", please learn how to get household chart data first.")),(0,l.kt)("h2",{id:"function-description"},"Function Description"),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Large Space Model Household Graph Plugin")," is the",(0,l.kt)("strong",{parentName:"p"},"upgrade version of the model household diagram plugin,"),",",(0,l.kt)("strong",{parentName:"p"},"adds zoom and drag gesture"),"."),(0,l.kt)("p",null,"With this plug-in, you can display a more detailed two-dimensional floor plan in the VR 3D model state, except for the following functions that are the same as the",(0,l.kt)("strong",{parentName:"p"},"model floor plan plug"),"in\uff1a"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Support 2D household graphics (png / svg format) for display."),(0,l.kt)("li",{parentName:"ul"},"House Tag Show: ",(0,l.kt)("strong",{parentName:"li"},"supports custom tag style")),(0,l.kt)("li",{parentName:"ul"},"Camera location and orientation before showing to 2D household chart: ",(0,l.kt)("strong",{parentName:"li"},"supports custom camera icon")),(0,l.kt)("li",{parentName:"ul"},"Multilayer VR properties are supported for multiple floors switching."),(0,l.kt)("li",{parentName:"ul"},"On overview, the two-dimensional household image is aligned with adaptability of the VR 3D model."),(0,l.kt)("li",{parentName:"ul"},"By clicking on the two-dimensional chart room, you will automatically enter the appropriate position of the VR corresponding room."),(0,l.kt)("li",{parentName:"ul"},"Pointer shows: Configuration is not supported but can be overridden by CSS selector priority method."),(0,l.kt)("li",{parentName:"ul"},"Supported gesture quick\uff1asliding in 2D household graph, quickly switches to model state, and when model state looses, auto-rotate models and showcase household maps when close to the display angle of the household chart.This feature",(0,l.kt)("strong",{parentName:"li"},"supports configuration"),"or not.")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"The floor plan of the large space model also adds the following functions\uff1a")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Equivalent to amplify and reduce two-dimensional household maps with VR 3D models to ensure alignment between both."),(0,l.kt)("li",{parentName:"ul"},"Drag to view zoomed and zoom shows. Perfect for viewing the content of a certain area of the household chart.")),(0,l.kt)("h2",{id:"example-effect"},"Example effect"),(0,l.kt)("div",{className:"docs-vr-normal"},(0,l.kt)("iframe",{className:"docs-vr-iframe",src:"https://realsee.js.org/dnalogel/src/MapviewFloorplanPlugin/index.html"})),(0,l.kt)("h2",{id:"install-reference"},"Install reference"),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Please choose ",(0,l.kt)("inlineCode",{parentName:"strong"},"yarn")," or ",(0,l.kt)("inlineCode",{parentName:"strong"},"npm")," installation method\uff1aas needed")),(0,l.kt)(o.Z,{groupId:"npm2yarn",mdxType:"Tabs"},(0,l.kt)(i.Z,{value:"npm",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"npm install @realsee/dnalogel\n"))),(0,l.kt)(i.Z,{value:"yarn",label:"Yarn",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"yarn add @realsee/dnalogel\n")))),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"By es reference\uff1a")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-tsx"},'import MapviewFloorplanPlugin from "@realsee/dnalogel"\n')),(0,l.kt)("h2",{id:"development-guides"},"Development Guides"),(0,l.kt)("p",null,"::tip",(0,l.kt)("br",{parentName:"p"}),"\n","Use this plugin fully with model household schema plugins",(0,l.kt)("strong",{parentName:"p"},"full of"),", including initialization, data loading, core method calls, custom configurations, and event hooks usage with the same effect as shows, mainly differentiated from",(0,l.kt)("strong",{parentName:"p"},"Large space model household image plugins add zoom and drag functions"),"If you already have access to model profile plugins, you have mastered how large spatial model household map plugins are used and need to be adapted to appropriate usage scenes.\n:::"),(0,l.kt)("h3",{id:"initialize"},"Initialize"),(0,l.kt)("p",null,"When initializing the ",(0,l.kt)("inlineCode",{parentName:"p"},"Five")," instance, configure ",(0,l.kt)("inlineCode",{parentName:"p"},"MapviewFloorplanPlugin")," in the initialization plugin parameters."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-ts"},"import Five, { FivePluginInits } from '@realsee/five'\nimport MapviewFloorplanPlugin from '@realsee/dnalogel'\n\n// initialize five instances\nconst five = new Five({\n  plugins: [\n    [MapviewFloorplanPlugin, \"mapviewFloorplanPlugin\", {\n      // Initialize parameter\n    }]\n  ]\n})\n")),(0,l.kt)("h3",{id:"react-initialization"},"React initialization"),(0,l.kt)("p",null,"Configure ",(0,l.kt)("inlineCode",{parentName:"p"},"MapviewFloorplanPlugin")," when creating FiveProvider components."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-ts"},"import { createFiveProvider } from '@realsee/five/react'\n\n// Create FiveProvider component\nconst FiveProvider = createFiveProvider({\n    plugins: [\n        [MapviewFloorplanPlugin, \"mapviewFloorplanPlugin\", {\n            // Initialize parameter\n        }]\n    ]\n})\n")),(0,l.kt)("h3",{id:"vue-initialization"},"Vue initialization"),(0,l.kt)("p",null,"When using ",(0,l.kt)("inlineCode",{parentName:"p"},"FiveProvider")," , configure ",(0,l.kt)("inlineCode",{parentName:"p"},"MapviewFloorplanPlugin")," in the initialization plug-in parameters."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-vue"},'<template>\n  <FiveProvider :fiveInitArgs="fiveInitArgs">\n  </FiveProvider>\n</template>\n<script setup>\nimport  MapviewFloorplanPlugin from "@realsee/dnalogel/libs/MapviewFloorplanPlugin";\nimport { FiveProvider, FiveCanvas } from "@realsee/five/vue";\nconst fiveInitArgs = {\n    plugins: [\n        [\n            MapviewFloorplanPlugin,\n            \'mapviewFloorplanPlugin\', // Custom plugin name\n            {\n                // Parameter configuration\n            }\n        ]\n    ]\n}\n<\/script>\n')),(0,l.kt)("h3",{id:"load-data"},"Load data"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-ts"},"// Get plugin instance\nconst pluginInstance = five.plugins.mapviewFloorplan\n// loading data\npluginInstance.load(floorplanServerData)\n")),(0,l.kt)("h3",{id:"plugin-core-method"},"Plugin Core Method"),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"There are\uff1acore methods provided by MapviewFloorplanPlugin")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"load(data: FloorplanServerData)")," Load household chart data")),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"You need to load household chart data manually,","[FloorplanServerData]"," data sources read",(0,l.kt)("a",{parentName:"p",href:"https://open-platform.realsee.com/developer/open/api#/"},"the Realsee Open Platform API"))),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"appendTo(wrapper: Element)")," Mount DOM nodes")),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"You can load the household chart DOM module into your HTML structure.")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"async show(opts?: ShowOpOpts): true"),(0,l.kt)("blockquote",{parentName:"li"},(0,l.kt)("p",{parentName:"blockquote"},"Call the ",(0,l.kt)("inlineCode",{parentName:"p"},"show()")," method of the plug-in, and the plug-in will automatically operate ",(0,l.kt)("inlineCode",{parentName:"p"},"five")," instances to the model overlooking state, and display the floor plan corresponding to the current point.")))),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-ts"},"const floorplanPlugin = five.plugins.floorplan\nfloorplanPlugin.show()\nfloorplanPlugin.show(options)\n")),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"If you need to customize the display logic, you can also pass in ",(0,l.kt)("inlineCode",{parentName:"p"},"options")," for configuration. The configuration items are declared as follows\uff1a")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-ts"},"interface ShowOpts {\n  floorIndex?: number // floor to show, default is the floor\n  userAction? boolel// When calling the Five API will pass userAction\n  modelOpacity?: number // show the household graph, the transparency of the model is zero. 1\n  immediate?: boolean //image will appear instantly, by default there will be 500m animations, noting that this immally cannot cancel model animations\n}\n")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"hide(options?: { isAutoHide?: boolean; userAction?: boolean )"))),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"You can directly call the ",(0,l.kt)("inlineCode",{parentName:"p"},"hide()")," method to hide the floor plan. If the configuration item",(0,l.kt)("inlineCode",{parentName:"p"},"autoShowEnable"),"is set to",(0,l.kt)("inlineCode",{parentName:"p"},"true"),"(default setting), when the user slides on the floor plan, the sliding range will automatically Close floor plan.")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"changeFloor(floorIndex: number)")," floor type")),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"Some of the properties are multi-storey (compound, villa etc.), each layer has different types of household, and you can switch over the corresponding floors directly by",(0,l.kt)("inlineCode",{parentName:"p"},"changeFloor()"),".",(0,l.kt)("br",null)," Note that a three-dimensional model of the current layer is only highlighted for multi-storey buildings.",(0,l.kt)("br",null)," Of course, when the user walks in the VR panorames, the floors of the current point will be shown automatically during the floormap show.")),(0,l.kt)("h3",{id:"custom-configuration"},"Custom configuration"),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"MapviewFloorplanPlugin")," supports rich custom configuration options (see","[MapviewFloorplanParameterType]","), common configuration items have\uff1a"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"selector?: string | DOM node mounted by Element"))),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"DOM selector or DOM node instances. Attention needs to be paid to the DOM container\uff1amust be the same as five canvas wide and the level",(0,l.kt)("inlineCode",{parentName:"p"},"z-index"),"is higher than five canvas.")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"scale?: number")," zoom scale")),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"Modifying this parameter will be changed in conjunction with the VR model ratio below the household chart, default to",(0,l.kt)("inlineCode",{parentName:"p"},"1"),".")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"hoverEnable?: boole")," Turn on mouse ",(0,l.kt)("inlineCode",{parentName:"li"},"hop")," Highlight partitions")),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"The default value is ",(0,l.kt)("inlineCode",{parentName:"p"},"false"),".The feature is\uff1awhen the mouse is ",(0,l.kt)("inlineCode",{parentName:"p"},"hover")," to the corresponding partition, the rectangular is highlighted.")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"getLabelElement?: (room: FloorplanRoomItem) => Element | null")," config house label")),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"If this function is configured, for each house label, this function will be called and the tag ",(0,l.kt)("inlineCode",{parentName:"p"},"Element")," will be replaced by the callback function return ",(0,l.kt)("inlineCode",{parentName:"p"},"ELement"),". The current tab does not show if the result is ",(0,l.kt)("inlineCode",{parentName:"p"},"null")," empty values.",(0,l.kt)("br",null)," If this function is not configured, default is displayed for all tabs. Parameter",(0,l.kt)("inlineCode",{parentName:"p"},"FloorplanRoomItem")," Data structure reference",(0,l.kt)("a",{parentName:"p",href:"http://dnalogel.developers.realsee.com/storybook/api/interfaces/plugins.FloorplanRoomItem.html"},"Open Platform Plugin Type Statement"),".")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"cameraImage?: { style: React.CSSProperties }")," Configure camera icon")),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},(0,l.kt)("inlineCode",{parentName:"p"},"style"),"Incoming CSS styles overwrite default styles, including ",(0,l.kt)("inlineCode",{parentName:"p"},"backgroundimage"),",",(0,l.kt)("inlineCode",{parentName:"p"},"width"),",",(0,l.kt)("inlineCode",{parentName:"p"},"height"),"and more.",(0,l.kt)("br",null))),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"autoShowEnable: boolean")," Gesture Quick Operation")),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"Swipe on the 2D household GUI to quickly switch to the model state; when the model is relaxed, it will rotate the model automatically and show the household map if it is closer to the display angle.Enable by default.")),(0,l.kt)("h3",{id:"event-hooks"},"Event Hooks"),(0,l.kt)("p",null,"Events associated with the chart are bound to ",(0,l.kt)("inlineCode",{parentName:"p"},"hooks")," objects and can be listened to using ",(0,l.kt)("inlineCode",{parentName:"p"},"hooks.on"),".e.g.\uff1a"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"showAnimationEnded"))),(0,l.kt)("p",null,"The household chart ends and can only be activated when it is never visible. Calling multiple showers will only trigger showAnimationEnd."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-ts"},"five.plugins.mapviewFloorplan.hooks.on('showAnimationEnded', ({ auto, userAction }) => {\n  console.log(\"whether the household graph is automatically displayed by the user's sliding model: \", auto)\n  console.log('is the household chart show:', userAction)\n  console.log('household diagram complete')\n})\n")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"hide"))),(0,l.kt)("p",null,"Account chart disappears complete"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-ts"},"five.plugins.mapviewFloorplan.hooks.on('hide', ({ auto, userAction }) => {\n  console.log(\"whether the household graph automatically disappears from the user's sliding model:\", auto)\n  console.log(' is the household graph disappeared: ', userAction)\n  console.log('household graph disappeared')\n})\n")),(0,l.kt)("h2",{id:"demo-source-reference"},"demo source reference"),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"https://github.com/realsee-developer/dnalogel/tree/main/examples/src"},"demo source reference")))}m.isMDXComponent=!0}}]);