"use strict";(self.webpackChunkrealsee_developer_github_com=self.webpackChunkrealsee_developer_github_com||[]).push([[4122],{49613:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>u});var r=n(59496);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),p=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=p(e.components);return r.createElement(l.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),d=p(n),u=a,v=d["".concat(l,".").concat(u)]||d[u]||m[u]||o;return n?r.createElement(v,i(i({ref:t},c),{},{components:n})):r.createElement(v,i({ref:t},c))}));function u(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:a,i[1]=s;for(var p=2;p<o;p++)i[p]=n[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},29636:(e,t,n)=>{n.d(t,{Z:()=>i});var r=n(59496),a=n(45924);const o="tabItem_y69N";function i(e){let{children:t,hidden:n,className:i}=e;return r.createElement("div",{role:"tabpanel",className:(0,a.Z)(o,i),hidden:n},t)}},26725:(e,t,n)=>{n.d(t,{Z:()=>u});var r=n(2962),a=n(59496),o=n(45924),i=n(48487),s=n(16580),l=n(75187),p=n(14644);const c="tabList_bRhb",m="tabItem_WY7u";function d(e){var t;const{lazy:n,block:i,defaultValue:d,values:u,groupId:v,className:h}=e,f=a.Children.map(e.children,(e=>{if((0,a.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})),k=u??f.map((e=>{let{props:{value:t,label:n,attributes:r}}=e;return{value:t,label:n,attributes:r}})),b=(0,s.l)(k,((e,t)=>e.value===t.value));if(b.length>0)throw new Error(`Docusaurus error: Duplicate values "${b.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`);const g=null===d?d:d??(null==(t=f.find((e=>e.props.default)))?void 0:t.props.value)??f[0].props.value;if(null!==g&&!k.some((e=>e.value===g)))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${g}" but none of its children has the corresponding value. Available values are: ${k.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);const{tabGroupChoices:w,setTabGroupChoices:y}=(0,l.U)(),[N,x]=(0,a.useState)(g),C=[],{blockElementScrollPositionUntilNextRender:T}=(0,p.o5)();if(null!=v){const e=w[v];null!=e&&e!==N&&k.some((t=>t.value===e))&&x(e)}const S=e=>{const t=e.currentTarget,n=C.indexOf(t),r=k[n].value;r!==N&&(T(t),x(r),null!=v&&y(v,String(r)))},j=e=>{var t;let n=null;switch(e.key){case"Enter":S(e);break;case"ArrowRight":{const t=C.indexOf(e.currentTarget)+1;n=C[t]??C[0];break}case"ArrowLeft":{const t=C.indexOf(e.currentTarget)-1;n=C[t]??C[C.length-1];break}}null==(t=n)||t.focus()};return a.createElement("div",{className:(0,o.Z)("tabs-container",c)},a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":i},h)},k.map((e=>{let{value:t,label:n,attributes:i}=e;return a.createElement("li",(0,r.Z)({role:"tab",tabIndex:N===t?0:-1,"aria-selected":N===t,key:t,ref:e=>C.push(e),onKeyDown:j,onClick:S},i,{className:(0,o.Z)("tabs__item",m,null==i?void 0:i.className,{"tabs__item--active":N===t})}),n??t)}))),n?(0,a.cloneElement)(f.filter((e=>e.props.value===N))[0],{className:"margin-top--md"}):a.createElement("div",{className:"margin-top--md"},f.map(((e,t)=>(0,a.cloneElement)(e,{key:t,hidden:e.props.value!==N})))))}function u(e){const t=(0,i.Z)();return a.createElement(d,(0,r.Z)({key:String(t)},e))}},6605:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>l,default:()=>u,frontMatter:()=>s,metadata:()=>p,toc:()=>m});var r=n(2962),a=(n(59496),n(49613)),o=n(26725),i=n(29636);const s={title:"Points in 3D space"},l=void 0,p={unversionedId:"front/3d-space/handbook/vue/points-in-3d",id:"front/3d-space/handbook/vue/points-in-3d",title:"Points in 3D space",description:"Previous chapter recalls: Status Recording  - You know how to record and restore operations through State. - Knowingly use State related methods and events.",source:"@site/i18n/en/docusaurus-plugin-content-docs/current/front/3d-space/handbook/vue/4.points-in-3d.md",sourceDirName:"front/3d-space/handbook/vue",slug:"/front/3d-space/handbook/vue/points-in-3d",permalink:"/en/docs/front/3d-space/handbook/vue/points-in-3d",draft:!1,tags:[],version:"current",lastUpdatedBy:"sansi.lcj",lastUpdatedAt:1669717185,formattedLastUpdatedAt:"Nov 29, 2022",sidebarPosition:4,frontMatter:{title:"Points in 3D space"},sidebar:"\u4e09\u7ef4\u7a7a\u95f4",previous:{title:"Status Recording",permalink:"/en/docs/front/3d-space/handbook/vue/recording-state"},next:{title:"Tag",permalink:"/en/docs/front/3d-space/handbook/vue/tagging"}},c={},m=[{value:"Preparatory work",id:"preparatory-work",level:2},{value:"Event System",id:"event-system",level:2},{value:"Built-in Events",id:"built-in-events",level:3},{value:"Block default behavior",id:"block-default-behavior",level:3},{value:"Get coordinates from tapGesture",id:"get-coordinates-from-tapgesture",level:2},{value:"Header Add Dependencies",id:"header-add-dependencies",level:3},{value:"Write <strong>MarkController</strong> Component",id:"write-markcontroller-component",level:3},{value:"Use Tag Component",id:"use-tag-component",level:3},{value:"The next section will be completed by you",id:"the-next-section-will-be-completed-by-you",level:2}],d={toc:m};function u(e){let{components:t,...s}=e;return(0,a.kt)("wrapper",(0,r.Z)({},d,s,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},(0,a.kt)("strong",{parentName:"p"},"Previous chapter recalls: Status Recording")," ",(0,a.kt)("br",null)," - You know how to record and restore operations through ",(0,a.kt)("strong",{parentName:"p"},"State"),".",(0,a.kt)("br",null)," - Knowingly use ",(0,a.kt)("strong",{parentName:"p"},"State")," related methods and events.")),(0,a.kt)("admonition",{title:"This chapter can learn to",type:"tip"},(0,a.kt)("ul",{parentName:"admonition"},(0,a.kt)("li",{parentName:"ul"},"Learn about the Live SDK event system."),(0,a.kt)("li",{parentName:"ul"},"Gets a three-dimensional position to a point."))),(0,a.kt)("h2",{id:"preparatory-work"},"Preparatory work"),(0,a.kt)("p",null,"We create a new directory (",(0,a.kt)("inlineCode",{parentName:"p"},"src/4.points-in-3d"),"and corresponding ",(0,a.kt)("strong",{parentName:"p"},"htm")," file and ",(0,a.kt)("strong",{parentName:"p"},"jsx")," or ",(0,a.kt)("strong",{parentName:"p"},"tsx")," file.\nThe ",(0,a.kt)("strong",{parentName:"p"},"State")," code with the previous chapter is too onerous, and we show the base development of the contents of ",(0,a.kt)("strong",{parentName:"p"},"the three-dimensional space")," chapter from."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-html",metastring:'title="src/4.points-in-3d/index.html"',title:'"src/4.points-in-3d/index.html"'},'<!DOCTYPE html>\n<html lang="en">\n  <head>\n    <meta charset="UTF-8" />\n    <link rel="icon" href="data:;base64,iVBORw0KGgo=" />\n    <meta name="viewport" content="width=device-width, initial-scale=1.0" />\n    <title>points in 3d</title>\n    <link\n      href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.1/dist/css/bootstrap.min.css"\n      rel="stylesheet"\n      crossorigin="anonymous"\n    />\n    <link\n      href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.5.0/font/bootstrap-icons.css"\n      rel="stylesheet"\n    />\n    <style>\n      * {\n        margin: 0;\n        padding: 0;\n      }\n\n      html,\n      body,\n      #app {\n        width: 100%;\n        height: 100%;\n        overflow: hidden;\n      }\n    </style>\n  </head>\n\n  <body>\n    <div id="app"></div>\n    <script type="module" src="./index"><\/script>\n  </body>\n</html>\n')),(0,a.kt)(o.Z,{mdxType:"Tabs"},(0,a.kt)(i.Z,{value:"JavaScript",label:"JavaScript",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js",metastring:'title="src/4.points-in-3d/useWindowDimensions.js"',title:'"src/4.points-in-3d/useWindowDimensions.js"'},'import { ref, onBeforeUnmount } from "vue";\n\nfunction useWindowDimensions() {\n  const width = ref(window.innerWidth);\n  const height = ref(window.innerHeight);\n\n  const listener = () => {\n    width.value = window.innerWidth;\n    height.value = window.innerHeight;\n  };\n\n  window.addEventListener("resize", listener, false);\n  onBeforeUnmount(() => {\n    window.removeEventListener("resize", listener, false);\n  });\n  return { width, height };\n}\nexport { useWindowDimensions };\n')),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-vue",metastring:'title="src/4.points-in-3d/ModeController.vue"',title:'"src/4.points-in-3d/ModeController.vue"'},'<template>\n  <nav class="navbar fixed-bottom navbar-light bg-light">\n    <div class="container-fluid justify-content-center">\n      <div class="btn-group">\n        <button\n          :class="\n            state.mode == \'Panorama\'\n              ? \'btn btn-primary active\'\n              : \'btn btn-primary\'\n          "\n          @click="() => setState({ mode: Five.Mode.Panorama })"\n        >\n          Panorama roaming\n        </button>\n        <button\n          :class="\n            state.mode == \'Panorama\'\n              ? \'btn btn-primary\'\n              : \'btn btn-primary active\'\n          "\n          @click="() => setState({ mode: Five.Mode.Floorplan })"\n        >\n          Space overview\n        </button>\n      </div>\n    </div>\n  </nav>\n</template>\n\n<script setup>\nimport { useFiveCurrentState } from "@realsee/five/vue";\nimport { Five } from "@realsee/five";\n\nconst [state, setState] = useFiveCurrentState();\n<\/script>\n')),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-vue",metastring:'title="src/4.points-in-3d/App.vue"',title:'"src/4.points-in-3d/App.vue"'},'<template>\n  <FiveProvider :work="work">\n    <FiveCanvas :width="width" :height="height" />\n    <ModeController />\n  </FiveProvider>\n</template>\n\n<script setup>\nimport { FiveProvider, FiveCanvas } from "@realsee/five/vue";\nimport { parseWork } from "@realsee/five";\nimport { ref } from "vue";\nimport { useWindowDimensions } from "./useWindowDimensions";\nimport ModeController from "./ModeController.vue";\n\nconst work = ref();\nconst workURL =\n  "https://vrlab-public.ljcdn.com/release/static/image/release/five/work-sample/07bdc58f413bc5494f05c7cbb5cbdce4/work.json";\n\nfetch(workURL)\n  .then((response) => response.text())\n  .then((text) => (work.value = parseWork(text)));\nconst { width, height } = useWindowDimensions();\n<\/script>\n')),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js",metastring:'title="src/4.points-in-3d/index.js"',title:'"src/4.points-in-3d/index.js"'},'import { createApp, h } from "vue";\nimport App from "./App.vue";\n\ncreateApp(App).mount("#app");\n'))),(0,a.kt)(i.Z,{value:"TypeScript",label:"TypeScript",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts",metastring:'title="src/4.points-in-3d/useWindowDimensions.ts"',title:'"src/4.points-in-3d/useWindowDimensions.ts"'},'import { ref, onBeforeUnmount } from "vue";\n\nfunction useWindowDimensions() {\n  const width = ref<number>(window.innerWidth);\n  const height = ref<number>(window.innerHeight);\n\n  const listener = () => {\n    width.value = window.innerWidth;\n    height.value = window.innerHeight;\n  };\n\n  window.addEventListener("resize", listener, false);\n  onBeforeUnmount(() => {\n    window.removeEventListener("resize", listener, false);\n  });\n  return { width, height };\n}\nexport { useWindowDimensions };\n')),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-vue",metastring:'title="src/4.points-in-3d/ModeController.vue"',title:'"src/4.points-in-3d/ModeController.vue"'},'<template>\n  <nav class="navbar fixed-bottom navbar-light bg-light">\n    <div class="container-fluid justify-content-center">\n      <div class="btn-group">\n        <button\n          :class="\n            state.mode == \'Panorama\'\n              ? \'btn btn-primary active\'\n              : \'btn btn-primary\'\n          "\n          @click="() => setState({ mode: Five.Mode.Panorama })"\n        >\n          Panorama roaming\n        </button>\n        <button\n          :class="\n            state.mode == \'Panorama\'\n              ? \'btn btn-primary\'\n              : \'btn btn-primary active\'\n          "\n          @click="() => setState({ mode: Five.Mode.Floorplan })"\n        >\n          Space overview\n        </button>\n      </div>\n    </div>\n  </nav>\n</template>\n\n<script setup lang="ts">\nimport { useFiveCurrentState } from "@realsee/five/vue";\nimport { Five } from "@realsee/five";\n\nconst [state, setState] = useFiveCurrentState();\n<\/script>\n')),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-vue",metastring:'title="src/4.points-in-3d/App.vue"',title:'"src/4.points-in-3d/App.vue"'},'<template>\n  <FiveProvider :work="work">\n    <FiveCanvas :width="width" :height="height" />\n    <ModeController />\n  </FiveProvider>\n</template>\n\n<script setup lang="ts">\nimport { FiveProvider, FiveCanvas } from "@realsee/five/vue";\nimport { parseWork } from "@realsee/five";\nimport { ref } from "vue";\nimport { useWindowDimensions } from "./useWindowDimensions";\nimport ModeController from "./ModeController.vue";\n\nconst work = ref();\nconst workURL =\n  "https://vrlab-public.ljcdn.com/release/static/image/release/five/work-sample/07bdc58f413bc5494f05c7cbb5cbdce4/work.json";\n\nfetch(workURL)\n  .then((response) => response.text())\n  .then((text) => (work.value = parseWork(text)));\nconst { width, height } = useWindowDimensions();\n<\/script>\n')),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts",metastring:'title="src/4.points-in-3d/index.ts"',title:'"src/4.points-in-3d/index.ts"'},'import { createApp, h } from "vue";\nimport App from "./App.vue";\n\ncreateApp(App).mount("#app");\n')))),(0,a.kt)("p",null,"Start service ",(0,a.kt)("inlineCode",{parentName:"p"},"npm run dev"),' and jump to the current page "http://localhost:3000/src/4.points-in-3d/index.html".'),(0,a.kt)("admonition",{type:"info"},(0,a.kt)("p",{parentName:"admonition"},"Please see your console. The port number will change due to your configuration and current port occupancy, please check the console output. If you use another development build tool, please start the service as required by your own development build tool.")),(0,a.kt)("h2",{id:"event-system"},"Event System"),(0,a.kt)("p",null,"When clicking on the screen, the default behavior of",(0,a.kt)("strong",{parentName:"p"},"five SDK")," is to select the most appropriate ",(0,a.kt)("strong",{parentName:"p"},"observation near the location of the clicked")," to move the past.This is true of most users' actions, and the processing logic of ",(0,a.kt)("strong",{parentName:"p"},"A tag")," is mostly linked to the link jumps.The above is the builtin of ",(0,a.kt)("strong",{parentName:"p"},"five SDK")," ",(0,a.kt)("strong",{parentName:"p"},"tapGesture"),"events."),(0,a.kt)("h3",{id:"built-in-events"},"Built-in Events"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"five SDK")," built-in events are as follows\uff1a"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"tapGesture"),": left mouse click or finger.Default behavior is a point move."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"panGest"),": mouse over one mouse or drag and drop the finger on the screen.Camera rotation (camera shift under Topview)."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"pinchGesture"),": finger to make fabricated gestures.The default behavior is to modify camera visualizations."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"mouseWheel"),": Mouse Wheel.The default behavior is to modify camera visualizations."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"gesture"),": any of the events above.")),(0,a.kt)("h3",{id:"block-default-behavior"},"Block default behavior"),(0,a.kt)("p",null,"All events and browser's handling logic for ",(0,a.kt)("strong",{parentName:"p"},"A tag")," can block default events, you simply listen to ",(0,a.kt)("inlineCode",{parentName:"p"},"wants")," at the beginning of the callback function ",(0,a.kt)("inlineCode",{parentName:"p"},"return false"),".For example, want to block the default point movement of ",(0,a.kt)("strong",{parentName:"p"},"tapGesture"),".This can be done as follows."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},'useFiveEventCallback("wantsTapGesure", () => {\n  // highlight-start\n  // block tapGest trigger\n  return false;\n  // highlight-end\n});\n')),(0,a.kt)("p",null,"The API for each event can view detailed documents"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://unpkg.com/@realsee/five/docs/interfaces/five.EventCallback.html#tapGesture"},"tapGesture")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://unpkg.com/@realsee/five/docs/interfaces/five.EventCallback.html#panGesture"},"panGesture")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://unpkg.com/@realsee/five/docs/interfaces/five.EventCallback.html#pinchGesture"},"pinchGesture")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://unpkg.com/@realsee/five/docs/interfaces/five.EventCallback.html#mouseWheel"},"mouseWheel")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://unpkg.com/@realsee/five/docs/interfaces/five.EventCallback.html#gesture"},"gesture"))),(0,a.kt)("h2",{id:"get-coordinates-from-tapgesture"},"Get coordinates from tapGesture"),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"We make a simple feature to mark the 3-D position on the canvas.\nBut in order not to conflict with the ",(0,a.kt)("strong",{parentName:"p"},"point move")," feature, we use a ",(0,a.kt)("inlineCode",{parentName:"p"},"Switch")," button to control whether or not the marker status is enabled.")),(0,a.kt)("h3",{id:"header-add-dependencies"},"Header Add Dependencies"),(0,a.kt)("p",null,"This chapter needs to introduce ",(0,a.kt)("a",{parentName:"p",href:"http://threejs.org"},"three.js"),".",(0,a.kt)("strong",{parentName:"p"},"three.js")," is a three-dimensional graphics library,",(0,a.kt)("strong",{parentName:"p"},"Five SDK")," uses ",(0,a.kt)("strong",{parentName:"p"},"three.js"),".This chapter is related to ",(0,a.kt)("strong",{parentName:"p"},"three.js")," and make some instructions here, you don't need to be fully aware of ",(0,a.kt)("strong",{parentName:"p"},"three.js"),", I can understand you by making some instructions."),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://threejs.org/docs/index.html#api/zh/math/Vector3"},(0,a.kt)("inlineCode",{parentName:"a"},"THREE.Vector3")),": you can think of a structure that is ",(0,a.kt)("inlineCode",{parentName:"li"},"{ x: number, y: number, z: number }")," and add some mathematical methods (this time won't use a mathematical method, just record xyz)"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://threejs.org/docs/index.html#api/zh/core/Raycaster"},(0,a.kt)("inlineCode",{parentName:"a"},"THREE.Raycaster")),": light projecting class.You can simply understand that a point on the screen corresponding to a three-dimensional space is a ray.")),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"REYCASTER",src:n(44721).Z,width:"850",height:"415"}),";"),(0,a.kt)("p",null,"The rays have many effects, such as\uff1apassing the intersection test before the ray and model to determine if the object is selected."),(0,a.kt)("h3",{id:"write-markcontroller-component"},"Write ",(0,a.kt)("strong",{parentName:"h3"},"MarkController")," Component"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Add a ",(0,a.kt)("strong",{parentName:"li"},"MarkController")," file to write components."),(0,a.kt)("li",{parentName:"ol"},"We control whether the current app is in tagged mode with ",(0,a.kt)("strong",{parentName:"li"},"active")," Vue Ref Responsive API combination v-models."),(0,a.kt)("li",{parentName:"ol"},"By ",(0,a.kt)("inlineCode",{parentName:"li"},"tapGesture")," the first parameter is ",(0,a.kt)("inlineCode",{parentName:"li"},"raycaster"),", by ",(0,a.kt)("inlineCode",{parentName:"li"},"modelIntersectRaycaster")," the focus information can be retrieved ",(0,a.kt)("inlineCode",{parentName:"li"},"intersect"),",",(0,a.kt)("inlineCode",{parentName:"li"},"intersect.point")," is the coordinates of the node."),(0,a.kt)("li",{parentName:"ol"},"Store all interfaces with ",(0,a.kt)("inlineCode",{parentName:"li"},"marks")," Vue Ref and implement collection and deletion.")),(0,a.kt)(o.Z,{mdxType:"Tabs"},(0,a.kt)(i.Z,{value:"JavaScript",label:"JavaScript",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-vue",metastring:'title="src/4.points-in-3d/MarkController.vue"',title:'"src/4.points-in-3d/MarkController.vue"'},'<template>\n  <div class="card position-fixed m-2 top-0 start-0">\n    <div class="form-check form-switch m-2">\n      <input class="form-check-input" type="checkbox" v-model="isSwitch" />\n      <label class="form-check-label" for="flexSwitchCheckDefault">\u6807\u8bb0</label>\n    </div>\n    <div class="js-marks" v-if="marks.length > 0">\n      <p v-for="(v3, index) in marks" calss="badge bg-primary d-block m-2">\n        <span\n          >x={{ v3.x.toFixed(2) }} y={{ v3.y.toFixed(2) }} z={{\n            v3.z.toFixed(2)\n          }}</span\n        >\n        <i\n          class="bi bi-x-circle ms-2"\n          @click="\n            () => {\n              removeMark(index);\n            }\n          "\n        ></i>\n      </p>\n    </div>\n  </div>\n</template>\n<script setup>\nimport {\n  useFiveEventCallback,\n  useFiveModelIntersectRaycaster,\n} from "@realsee/five/vue";\nimport { Raycaster } from "three";\nimport { ref } from "vue";\nconst marks = ref([]);\nconst isSwitch = ref(false);\nconst raycasterRef = ref(new Raycaster());\nconst fiveModelIntersectRaycaster = useFiveModelIntersectRaycaster();\nconst intersect = fiveModelIntersectRaycaster(raycasterRef);\n\nuseFiveEventCallback("wantsTapGesture", (raycaster, tapPosition) => {\n  if (isSwitch.value) {\n    raycasterRef.value = raycaster;\n    if (intersect.value[0]?.point) marks.value.push(intersect.value[0]?.point);\n    return false;\n  }\n});\n\nconst removeMark = (index) => {\n  marks.value.splice(index, 1);\n};\n<\/script>\n'))),(0,a.kt)(i.Z,{value:"TypeScript",label:"TypeScript",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-vue",metastring:'title="src/4.points-in-3d/MarkController.vue"',title:'"src/4.points-in-3d/MarkController.vue"'},'<template>\n  <div class="card position-fixed m-2 top-0 start-0">\n    <div class="form-check form-switch m-2">\n      <input class="form-check-input" type="checkbox" v-model="isSwitch" />\n      <label class="form-check-label" for="flexSwitchCheckDefault">Tag</label>\n    </div>\n    <div class="js-marks" v-if="marks.length > 0">\n      <p v-for="(v3, index) in marks" calss="badge bg-primary d-block m-2">\n        <span\n          >x={{ v3.x.toFixed(2) }} y={{ v3.y.toFixed(2) }} z={{\n            v3.z.toFixed(2)\n          }}</span\n        >\n        <i\n          class="bi bi-x-circle ms-2"\n          @click="\n            () => {\n              removeMark(index);\n            }\n          "\n        ></i>\n      </p>\n    </div>\n  </div>\n</template>\n<script setup lang="ts">\nimport {\n  useFiveEventCallback,\n  useFiveModelIntersectRaycaster,\n} from "@realsee/five/vue";\nimport { Raycaster } from "three";\nimport { ref } from "vue";\nconst marks = ref<THREE.Vector3[]>([]);\nconst isSwitch = ref(false);\nconst raycasterRef = ref<Raycaster>(new Raycaster());\nconst fiveModelIntersectRaycaster = useFiveModelIntersectRaycaster();\nconst intersect = fiveModelIntersectRaycaster(raycasterRef);\n\nuseFiveEventCallback("wantsTapGesture", (raycaster, tapPosition) => {\n  if (isSwitch.value) {\n    raycasterRef.value = raycaster;\n    if (intersect.value[0]?.point) marks.value.push(intersect.value[0]?.point);\n    return false;\n  }\n});\n\nconst removeMark = (index: number) => {\n  marks.value.splice(index, 1);\n};\n<\/script>\n')))),(0,a.kt)("h3",{id:"use-tag-component"},"Use Tag Component"),(0,a.kt)("p",null,"Insert into ",(0,a.kt)("strong",{parentName:"p"},"App")," file ",(0,a.kt)("strong",{parentName:"p"},"GiveProvider")),(0,a.kt)(o.Z,{mdxType:"Tabs"},(0,a.kt)(i.Z,{value:"JavaScript",label:"JavaScript",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-vue",metastring:'title="src/4.points-in-3d/App.vue"',title:'"src/4.points-in-3d/App.vue"'},'<template>\n  <FiveProvider :work="work">\n    <FiveCanvas :width="width" :height="height" />\n    <ModeController />\n    // highlight-start\n    <MarkController />\n    // highlight-end\n  </FiveProvider>\n</template>\n\n<script setup>\nimport { FiveProvider, FiveCanvas } from "@realsee/five/vue";\nimport { parseWork } from "@realsee/five";\nimport { ref } from "vue";\nimport { useWindowDimensions } from "./useWindowDimensions";\nimport ModeController from "./ModeController.vue";\n// highlight-start\nimport MarkController from "./MarkController.vue";\n// highlight-end\n\nconst work = ref();\nconst workURL =\n  "https://vrlab-public.ljcdn.com/release/static/image/release/five/work-sample/07bdc58f413bc5494f05c7cbb5cbdce4/work.json";\n\nfetch(workURL)\n  .then((response) => response.text())\n  .then((text) => (work.value = parseWork(text)));\nconst { width, height } = useWindowDimensions();\n<\/script>\n'))),(0,a.kt)(i.Z,{value:"TypeScript",label:"TypeScript",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-vue",metastring:'title="src/4.points-in-3d/App.vue"',title:'"src/4.points-in-3d/App.vue"'},'<template>\n  <FiveProvider :work="work">\n    <FiveCanvas :width="width" :height="height" />\n    <ModeController />\n    // highlight-start\n    <MarkController />\n    // highlight-end\n  </FiveProvider>\n</template>\n\n<script setup lang="ts">\nimport { FiveProvider, FiveCanvas } from "@realsee/five/vue";\nimport { parseWork, Work } from "@realsee/five";\nimport { ref } from "vue";\nimport { useWindowDimensions } from "./useWindowDimensions";\nimport ModeController from "./ModeController.vue";\n// highlight-start\nimport MarkController from "./MarkController.vue";\n// highlight-end\n\nconst work = ref<Work>();\nconst workURL =\n  "https://vrlab-public.ljcdn.com/release/static/image/release/five/work-sample/07bdc58f413bc5494f05c7cbb5cbdce4/work.json";\n\nfetch(workURL)\n  .then((response) => response.text())\n  .then((text) => (work.value = parseWork(text)));\nconst { width, height } = useWindowDimensions();\n<\/script>\n')))),(0,a.kt)("p",null,"Go back to your browser and find a switch in the upper left corner of your page.Turn on the switch, tap on the content of the canvas and output the coordinates of the click position."),(0,a.kt)("p",null,"Graby, understand and get three-dimensional coordinates: partying_face:"),(0,a.kt)("h2",{id:"the-next-section-will-be-completed-by-you"},"The next section will be completed by you"),(0,a.kt)("admonition",{title:"Next chapter we will implement a space tag feature, don't miss it.",type:"tip"}))}u.isMDXComponent=!0},44721:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/raycaster-c3dcc64a540402b16231e021c13f20ca.png"}}]);