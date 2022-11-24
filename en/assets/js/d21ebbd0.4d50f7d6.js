"use strict";(self.webpackChunkrealsee_developer_github_com=self.webpackChunkrealsee_developer_github_com||[]).push([[9558],{49613:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>d});var a=n(59496);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=a.createContext({}),p=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=p(e.components);return a.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),m=p(n),d=r,h=m["".concat(l,".").concat(d)]||m[d]||u[d]||o;return n?a.createElement(h,i(i({ref:t},c),{},{components:n})):a.createElement(h,i({ref:t},c))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:r,i[1]=s;for(var p=2;p<o;p++)i[p]=n[p];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},45558:(e,t,n)=>{n.d(t,{Z:()=>i});var a=n(59496),r=n(45924);const o="tabItem_IPoj";function i(e){let{children:t,hidden:n,className:i}=e;return a.createElement("div",{role:"tabpanel",className:(0,r.Z)(o,i),hidden:n},t)}},38637:(e,t,n)=>{n.d(t,{Z:()=>d});var a=n(2962),r=n(59496),o=n(45924),i=n(26709),s=n(33548),l=n(14714),p=n(60411);const c="tabList_xr86",u="tabItem_r4_W";function m(e){var t;const{lazy:n,block:i,defaultValue:m,values:d,groupId:h,className:v}=e,k=r.Children.map(e.children,(e=>{if((0,r.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})),g=d??k.map((e=>{let{props:{value:t,label:n,attributes:a}}=e;return{value:t,label:n,attributes:a}})),w=(0,s.l)(g,((e,t)=>e.value===t.value));if(w.length>0)throw new Error(`Docusaurus error: Duplicate values "${w.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`);const f=null===m?m:m??(null==(t=k.find((e=>e.props.default)))?void 0:t.props.value)??k[0].props.value;if(null!==f&&!g.some((e=>e.value===f)))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${f}" but none of its children has the corresponding value. Available values are: ${g.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);const{tabGroupChoices:b,setTabGroupChoices:N}=(0,l.U)(),[y,S]=(0,r.useState)(f),C=[],{blockElementScrollPositionUntilNextRender:x}=(0,p.o5)();if(null!=h){const e=b[h];null!=e&&e!==y&&g.some((t=>t.value===e))&&S(e)}const T=e=>{const t=e.currentTarget,n=C.indexOf(t),a=g[n].value;a!==y&&(x(t),S(a),null!=h&&N(h,String(a)))},F=e=>{var t;let n=null;switch(e.key){case"Enter":T(e);break;case"ArrowRight":{const t=C.indexOf(e.currentTarget)+1;n=C[t]??C[0];break}case"ArrowLeft":{const t=C.indexOf(e.currentTarget)-1;n=C[t]??C[C.length-1];break}}null==(t=n)||t.focus()};return r.createElement("div",{className:(0,o.Z)("tabs-container",c)},r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":i},v)},g.map((e=>{let{value:t,label:n,attributes:i}=e;return r.createElement("li",(0,a.Z)({role:"tab",tabIndex:y===t?0:-1,"aria-selected":y===t,key:t,ref:e=>C.push(e),onKeyDown:F,onClick:T},i,{className:(0,o.Z)("tabs__item",u,null==i?void 0:i.className,{"tabs__item--active":y===t})}),n??t)}))),n?(0,r.cloneElement)(k.filter((e=>e.props.value===y))[0],{className:"margin-top--md"}):r.createElement("div",{className:"margin-top--md"},k.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==y})))))}function d(e){const t=(0,i.Z)();return r.createElement(m,(0,a.Z)({key:String(t)},e))}},44744:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>l,default:()=>d,frontMatter:()=>s,metadata:()=>p,toc:()=>u});var a=n(2962),r=(n(59496),n(49613)),o=n(38637),i=n(45558);const s={title:"Change View"},l=void 0,p={unversionedId:"front/3d-space/handbook/vue/knowing-state",id:"front/3d-space/handbook/vue/knowing-state",title:"Change View",description:"Previous chapter recalls: Show 3D space  - You know what you are Work, and how to get and load it. - How to display three-dimensional spaces and develop components again to control three-dimensional space.",source:"@site/i18n/en/docusaurus-plugin-content-docs/current/front/3d-space/handbook/vue/2.knowing-state.md",sourceDirName:"front/3d-space/handbook/vue",slug:"/front/3d-space/handbook/vue/knowing-state",permalink:"/en/docs/front/3d-space/handbook/vue/knowing-state",draft:!1,tags:[],version:"current",lastUpdatedBy:"lichengjie",lastUpdatedAt:1669264964,formattedLastUpdatedAt:"Nov 24, 2022",sidebarPosition:2,frontMatter:{title:"Change View"},sidebar:"\u4e09\u7ef4\u7a7a\u95f4",previous:{title:"Show 3D space",permalink:"/en/docs/front/3d-space/handbook/vue/displaying-work"},next:{title:"Status Recording",permalink:"/en/docs/front/3d-space/handbook/vue/recording-state"}},c={},u=[{value:"Preparatory work",id:"preparatory-work",level:2},{value:"What is State",id:"what-is-state",level:2},{value:"State Introduction",id:"state-introduction",level:3},{value:"State Data Structure and Description",id:"state-data-structure-and-description",level:3},{value:"What about api in the state",id:"what-about-api-in-the-state",level:3},{value:"state / currentState Distinction",id:"state--currentstate-distinction",level:3},{value:"Development of an auto-ring feature",id:"development-of-an-auto-ring-feature",level:2},{value:"Writing ring Component",id:"writing-ring-component",level:3},{value:"Use Auto-Ring Component",id:"use-auto-ring-component",level:3},{value:"The next section will be completed by you",id:"the-next-section-will-be-completed-by-you",level:2}],m={toc:u};function d(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},(0,r.kt)("strong",{parentName:"p"},"Previous chapter recalls: Show 3D space")," ",(0,r.kt)("br",null)," - You know what you are ",(0,r.kt)("strong",{parentName:"p"},"Work"),", and how to get and load it.",(0,r.kt)("br",null)," - How to display three-dimensional spaces and develop components again to control three-dimensional space.")),(0,r.kt)("admonition",{title:"This chapter can learn to",type:"tip"},(0,r.kt)("ul",{parentName:"admonition"},(0,r.kt)("li",{parentName:"ul"},"Learn what is ",(0,r.kt)("strong",{parentName:"li"},"State"),"."),(0,r.kt)("li",{parentName:"ul"},"How to change the directions/position of 3D space observation."),(0,r.kt)("li",{parentName:"ul"},"Learn how to work with the code of the previous chapter, e.g. ",(0,r.kt)("inlineCode",{parentName:"li"},"useCurrentState")," and other responses."),(0,r.kt)("li",{parentName:"ul"},"Autoring features via ",(0,r.kt)("strong",{parentName:"li"},"State"),"."))),(0,r.kt)("h2",{id:"preparatory-work"},"Preparatory work"),(0,r.kt)("p",null,"Like the previous section, we create a new directory (",(0,r.kt)("inlineCode",{parentName:"p"},"src/2.knowing-state"),"and corresponding ",(0,r.kt)("strong",{parentName:"p"},"html")," and ",(0,r.kt)("strong",{parentName:"p"},"js")," or ",(0,r.kt)("strong",{parentName:"p"},"ts")," files."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"js")," or ",(0,r.kt)("strong",{parentName:"p"},"ts")," files can first copy the previous chapter."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-html",metastring:'title="src/2.knowing-state/index.html"',title:'"src/2.knowing-state/index.html"'},'<!DOCTYPE html>\n<html lang="en">\n  <head>\n    <meta charset="UTF-8" />\n    <link rel="icon" href="data:;base64,iVBORw0KGgo=" />\n    <meta name="viewport" content="width=device-width, initial-scale=1.0" />\n    <title>Change perspective | Klowing state</title>\n    <link\n      href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.1/dist/css/bootstrap.min.css"\n      rel="stylesheet"\n      crossorigin="anonymous"\n    />\n    <link\n      href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.5.0/font/bootstrap-icons.css"\n      rel="stylesheet"\n    />\n    <style>\n      * {\n        margin: 0;\n        padding: 0;\n      }\n\n      html,\n      body,\n      #app {\n        width: 100%;\n        height: 100%;\n        overflow: hidden;\n      }\n    </style>\n  </head>\n\n  <body>\n    <div id="app"></div>\n    <script type="module" src="./index"><\/script>\n  </body>\n</html>\n')),(0,r.kt)(o.Z,{mdxType:"Tabs"},(0,r.kt)(i.Z,{value:"JavaScript",label:"JavaScript",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js",metastring:'title="src/2.knowing-state/useWindowDimensions.js"',title:'"src/2.knowing-state/useWindowDimensions.js"'},'import { ref, onBeforeUnmount } from "vue";\n\nfunction useWindowDimensions() {\n  const width = ref(window.innerWidth);\n  const height = ref(window.innerHeight);\n\n  const listener = () => {\n    width.value = window.innerWidth;\n    height.value = window.innerHeight;\n  };\n\n  window.addEventListener("resize", listener, false);\n  onBeforeUnmount(() => {\n    window.removeEventListener("resize", listener, false);\n  });\n  return { width, height };\n}\nexport { useWindowDimensions };\n')),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-vue",metastring:'title="src/2.knowing-state/ModeController.vue"',title:'"src/2.knowing-state/ModeController.vue"'},'<template>\n  <nav class="navbar fixed-bottom navbar-light bg-light">\n    <div class="container-fluid justify-content-center">\n      <div class="btn-group">\n        <button\n          :class="\n            state.mode == \'Panorama\'\n              ? \'btn btn-primary active\'\n              : \'btn btn-primary\'\n          "\n          @click="() => setState({ mode: Five.Mode.Panorama })"\n        >\n          Panorama roaming\n        </button>\n        <button\n          :class="\n            state.mode == \'Panorama\'\n              ? \'btn btn-primary\'\n              : \'btn btn-primary active\'\n          "\n          @click="() => setState({ mode: Five.Mode.Floorplan })"\n        >\n          Space overview\n        </button>\n      </div>\n    </div>\n  </nav>\n</template>\n\n<script setup>\nimport { useFiveCurrentState } from "@realsee/five/vue";\nimport { Five } from "@realsee/five";\n\nconst [state, setState] = useFiveCurrentState();\n<\/script>\n')),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-vue",metastring:'title="src/2.knowing-state/App.vue"',title:'"src/2.knowing-state/App.vue"'},'<template>\n  <FiveProvider :work="work">\n    <FiveCanvas :width="width" :height="height" />\n    <ModeController />\n  </FiveProvider>\n</template>\n\n<script setup>\nimport { FiveProvider, FiveCanvas } from "@realsee/five/vue";\nimport { parseWork } from "@realsee/five";\nimport { ref } from "vue";\nimport { useWindowDimensions } from "./useWindowDimensions";\nimport ModeController from "./ModeController.vue";\n\nconst work = ref();\nconst workURL =\n  "https://vrlab-public.ljcdn.com/release/static/image/release/five/work-sample/07bdc58f413bc5494f05c7cbb5cbdce4/work.json";\n\nfetch(workURL)\n  .then((response) => response.text())\n  .then((text) => (work.value = parseWork(text)));\nconst { width, height } = useWindowDimensions();\n<\/script>\n')),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js",metastring:'title="src/2.knowing-state/index.js"',title:'"src/2.knowing-state/index.js"'},'import { createApp, h } from "vue";\nimport App from "./App.vue";\n\ncreateApp(App).mount("#app");\n'))),(0,r.kt)(i.Z,{value:"TypeScript",label:"TypeScript",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts",metastring:'title="src/2.knowing-state/useWindowDimensions.ts"',title:'"src/2.knowing-state/useWindowDimensions.ts"'},'import { ref, onBeforeUnmount } from "vue";\n\nfunction useWindowDimensions() {\n  const width = ref<number>(window.innerWidth);\n  const height = ref<number>(window.innerHeight);\n\n  const listener = () => {\n    width.value = window.innerWidth;\n    height.value = window.innerHeight;\n  };\n\n  window.addEventListener("resize", listener, false);\n  onBeforeUnmount(() => {\n    window.removeEventListener("resize", listener, false);\n  });\n  return { width, height };\n}\n\nexport { useWindowDimensions };\n')),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-vue",metastring:'title="src/2.knowing-state/ModeController.vue"',title:'"src/2.knowing-state/ModeController.vue"'},'<template>\n  <nav class="navbar fixed-bottom navbar-light bg-light">\n    <div class="container-fluid justify-content-center">\n      <div class="btn-group">\n        <button\n          :class="\n            state.mode == \'Panorama\'\n              ? \'btn btn-primary active\'\n              : \'btn btn-primary\'\n          "\n          @click="() => setState({ mode: Five.Mode.Panorama })"\n        >\n          Panorama roaming\n        </button>\n        <button\n          :class="\n            state.mode == \'Panorama\'\n              ? \'btn btn-primary\'\n              : \'btn btn-primary active\'\n          "\n          @click="() => setState({ mode: Five.Mode.Floorplan })"\n        >\n          Space overview\n        </button>\n      </div>\n    </div>\n  </nav>\n</template>\n\n<script setup lang="ts">\nimport { useFiveCurrentState } from "@realsee/five/vue";\nimport { Five } from "@realsee/five";\n\nconst [state, setState] = useFiveCurrentState();\n<\/script>\n')),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-vue",metastring:'title="src/2.knowing-state/App.vue"',title:'"src/2.knowing-state/App.vue"'},'<template>\n  <FiveProvider :work="work">\n    <FiveCanvas :width="width" :height="height" />\n    <ModeController />\n  </FiveProvider>\n</template>\n\n<script setup lang="ts">\nimport { FiveProvider, FiveCanvas } from "@realsee/five/vue";\nimport { parseWork } from "@realsee/five";\nimport { ref } from "vue";\nimport { useWindowDimensions } from "./useWindowDimensions";\nimport ModeController from "./ModeController.vue";\n\nconst work = ref();\nconst workURL =\n  "https://vrlab-public.ljcdn.com/release/static/image/release/five/work-sample/07bdc58f413bc5494f05c7cbb5cbdce4/work.json";\n\nfetch(workURL)\n  .then((response) => response.text())\n  .then((text) => (work.value = parseWork(text)));\nconst { width, height } = useWindowDimensions();\n<\/script>\n')),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts",metastring:'title="src/2.knowing-state/index.ts"',title:'"src/2.knowing-state/index.ts"'},'import { createApp, h } from "vue";\nimport App from "./App.vue";\n\ncreateApp(App).mount("#app");\n')))),(0,r.kt)("p",null,"Start service ",(0,r.kt)("inlineCode",{parentName:"p"},"npm run dev"),' and jump to the current page "http://localhost:3000/src/2.knowing-state/index.html".'),(0,r.kt)("admonition",{type:"info"},(0,r.kt)("p",{parentName:"admonition"},"Please see your console. The port number will change due to your configuration and current port occupancy, please check the console output.\nIf you use another development build tool, please start the service as required by your own development build tool.")),(0,r.kt)("h2",{id:"what-is-state"},"What is State"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Having come to understand the concept, I assure you that this is the last theoretical knowledge that needs to be learned at this stage.")),(0,r.kt)("h3",{id:"state-introduction"},"State Introduction"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"State")," data structure used to describe status.The previous chapter knows ",(0,r.kt)("strong",{parentName:"p"},"Work"),", ",(0,r.kt)("strong",{parentName:"p"},"Work")," is used to describe a three-dimensional space, then ",(0,r.kt)("strong",{parentName:"p"},"State")," is a description of what is currently in this three-dimensional space.He contains modelling, where the collection point is located, the direction of the camera, and the view of the camera."),(0,r.kt)("h3",{id:"state-data-structure-and-description"},"State Data Structure and Description"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx"},"interface State {\n  mode: Five.Mode;\n  panoIndex: number;\n  longitude: number;\n  latitude: number;\n  fov: number;\n  offset: THEEE.Vector3;\n}\n")),(0,r.kt)("p",null,"Data description for ",(0,r.kt)("strong",{parentName:"p"},"State")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"mode"),": Current mode common to 5 models that can be obtained using ",(0,r.kt)("inlineCode",{parentName:"p"},"Five.Mode")),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Panorama: Panorama: Panoramic Walking Model, under which views will travel between collection points. Gestures can rotation/amplify views/toggle collection points to view the collected landscape information."),(0,r.kt)("li",{parentName:"ul"},"Floorplan: Space Overview Model. The view under this model is model-centric, gesture can rotate/magnify models/toggle the floor to view the model as a whole."),(0,r.kt)("li",{parentName:"ul"},"Topview: Household diagram mode where the view is centered on the model, vertical pitch model, gesture can shift/zoom in the floor/toggle the floor of the model to view the schema structure."),(0,r.kt)("li",{parentName:"ul"},"Model: Modeling Model, where the view will travel freely in the model, gesture can rotate/amplify views/bits, fit to view the details of the model and make some locational actions."),(0,r.kt)("li",{parentName:"ul"},"VR Panorama: VR glasses model that enables VR virtual display using ",(0,r.kt)("a",{parentName:"li",href:"https://arvr.google.com/cardboard/"},"Cardboard glass")," or his third-party derivative product."))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"panoIndex"),": Gathering point positions, where Panorama models can be set up.is an index of ",(0,r.kt)("inlineCode",{parentName:"p"},"work[observers]"),".")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"longitude")," / ",(0,r.kt)("inlineCode",{parentName:"p"},"latitude"),": Horizontal corner of the camera/camera (radians), we describe the position of the camera in a latitude similar way."),(0,r.kt)("p",{parentName:"li"},"The whole model scenario is a right-hand cartex coordinate system, ",(0,r.kt)("inlineCode",{parentName:"p"},"XZ"),"plane parallel to the ground, ",(0,r.kt)("inlineCode",{parentName:"p"},"Y"),"axis perpendicular to the ground."),(0,r.kt)("p",{parentName:"li"},(0,r.kt)("img",{parentName:"p",src:"https://vrlab-public.ljcdn.com/common/file/web/2f331826-4b15-4da5-9603-50c1287b38f7.svg",alt:"Right cursor icon"})),(0,r.kt)("p",{parentName:"li"},"Initial camera orientation looks at ",(0,r.kt)("strong",{parentName:"p"},"Z negative direction")),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Add ",(0,r.kt)("inlineCode",{parentName:"li"},"longitude")," camera rotation"),(0,r.kt)("li",{parentName:"ul"},"Decrease ",(0,r.kt)("inlineCode",{parentName:"li"},"longitude")," camera rotation to right"),(0,r.kt)("li",{parentName:"ul"},"Add ",(0,r.kt)("inlineCode",{parentName:"li"},"latitude")," camera rotation down"),(0,r.kt)("li",{parentName:"ul"},"Decrease ",(0,r.kt)("inlineCode",{parentName:"li"},"latitude")," camera rotation up"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"fov"),": Visual angle in the vertical direction of the camera (angle)")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"offset"),": three-dimensional coordinates of the current camera"))),(0,r.kt)("h3",{id:"what-about-api-in-the-state"},"What about api in the state"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://unpkg.com/@realsee/five/docs/modules/vue.html#useFiveState"},(0,r.kt)("inlineCode",{parentName:"a"},"[state, setState] = useFiveState;"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://unpkg.com/@realsee/five/docs/modules/vue.html#useFiveCurrentState"},(0,r.kt)("inlineCode",{parentName:"a"},"[currentState, setCurrentState] = useFiveCurrentState;")))),(0,r.kt)("p",null,"The current state can be obtained by ",(0,r.kt)("inlineCode",{parentName:"p"},"state")," ",(0,r.kt)("inlineCode",{parentName:"p"},"currentState")," , set by ",(0,r.kt)("inlineCode",{parentName:"p"},"setState")," ",(0,r.kt)("inlineCode",{parentName:"p"},"setCurrentState")),(0,r.kt)("h3",{id:"state--currentstate-distinction"},"state / currentState Distinction"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"currentState")," is the current state, the state in the picture, the state that is currently shown. ",(0,r.kt)("strong",{parentName:"p"},"state")," is targeted or stable at the next time."),(0,r.kt)("p",null,"It can be simply thought of as: ",(0,r.kt)("br",null)," When ",(0,r.kt)("strong",{parentName:"p"},"setSate")," is called,",(0,r.kt)("strong",{parentName:"p"},"state")," will immediately become the value of ",(0,r.kt)("strong",{parentName:"p"},"setState")," , while ",(0,r.kt)("strong",{parentName:"p"},"currentState")," will not change immediately, it will gradually approach ",(0,r.kt)("strong",{parentName:"p"},"during the animation transition process state")," and eventually becomes the same value as ",(0,r.kt)("strong",{parentName:"p"},"state"),".Just like the animation you see in the screen."),(0,r.kt)("p",null,"In the example of the last chapter, we have used ",(0,r.kt)("strong",{parentName:"p"},"mode")," properties to switch to ",(0,r.kt)("strong",{parentName:"p"},"Panorama")," and ",(0,r.kt)("strong",{parentName:"p"},"Floorplan")," patterns.You can also try to add some of the other models and see how different they are."),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},(0,r.kt)("strong",{parentName:"p"},"VRPanorama mode"),"requires device gyroscopic information and mobile devices. And if the service is ",(0,r.kt)("strong",{parentName:"p"},"iOS")," device, it needs to be ",(0,r.kt)("inlineCode",{parentName:"p"},"https")," or ",(0,r.kt)("strong",{parentName:"p"},"iOS")," does not allow access to Gychrome information.")),(0,r.kt)("h2",{id:"development-of-an-auto-ring-feature"},"Development of an auto-ring feature"),(0,r.kt)("p",null,"We've fetched and set ",(0,r.kt)("strong",{parentName:"p"},"mode"),", this time we've modified ",(0,r.kt)("strong",{parentName:"p"},"longitude / latitude"),".This time we develop an auto-look feature.Use a button to control the function of activating auto-ring viewing, which will rotate the camera horizontally."),(0,r.kt)("h3",{id:"writing-ring-component"},"Writing ring Component"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Add a ",(0,r.kt)("strong",{parentName:"li"},"LookAroundController")," file to write components."),(0,r.kt)("li",{parentName:"ol"},"Design ",(0,r.kt)("strong",{parentName:"li"},"active")," Vue Ref to control whether the ring feature is enabled."),(0,r.kt)("li",{parentName:"ol"},"The ring function is implemented with\uff1atriggering function via setInterval, modifying the five ",(0,r.kt)("strong",{parentName:"li"},"state"),".")),(0,r.kt)(o.Z,{mdxType:"Tabs"},(0,r.kt)(i.Z,{value:"JavaScript",label:"JavaScript",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-vue",metastring:'title="src/2.knowing-state/LookAroundController.vue"',title:'"src/2.knowing-state/LookAroundController.vue"'},'<template>\n  <div class="card position-fixed m-2 top-0 end-0">\n    <button class="btn btn-light" v-show="isShow" @click="startFunc">\n      <i class="bi bi-arrow-repeat"></i>\n    </button>\n    <button class="btn btn-light" v-show="!isShow" @click="stopFunc">\n      <i class="bi bi-pause"></i>\n    </button>\n  </div>\n</template>\n\n<script setup>\nimport { ref } from "vue";\nimport { useFiveCurrentState } from "@realsee/five/vue";\n\nconst [currentState, setState] = useFiveCurrentState();\nconst isShow = ref(true);\nlet timer;\n\nconst startFunc = () => {\n  window.clearInterval(timer);\n  isShow.value = false;\n  timer = window.setInterval(() => {\n    setState({ longitude: currentState.value.longitude + Math.PI / 360 });\n  }, 16);\n};\n\nconst stopFunc = () => {\n  window.clearInterval(timer);\n  isShow.value = true;\n};\n<\/script>\n'))),(0,r.kt)(i.Z,{value:"TypeScript",label:"TypeScript",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-vue",metastring:'title="src/2.knowing-state/LookAroundController.vue"',title:'"src/2.knowing-state/LookAroundController.vue"'},'<template>\n  <div class="card position-fixed m-2 top-0 end-0">\n    <button class="btn btn-light" v-show="isShow" @click="startFunc">\n      <i class="bi bi-arrow-repeat"></i>\n    </button>\n    <button class="btn btn-light" v-show="!isShow" @click="stopFunc">\n      <i class="bi bi-pause"></i>\n    </button>\n  </div>\n</template>\n\n<script setup lang="ts">\nimport { ref } from "vue";\nimport { useFiveCurrentState } from "@realsee/five/vue";\n\nconst [currentState, setState] = useFiveCurrentState();\nconst isShow = ref(true);\nlet timer: number | undefined;\n\nconst startFunc = () => {\n  window.clearInterval(timer);\n  isShow.value = false;\n  timer = window.setInterval(() => {\n    setState({ longitude: currentState.value.longitude + Math.PI / 360 });\n  }, 16);\n};\n\nconst stopFunc = () => {\n  window.clearInterval(timer);\n  isShow.value = true;\n};\n<\/script>\n')))),(0,r.kt)("h3",{id:"use-auto-ring-component"},"Use Auto-Ring Component"),(0,r.kt)("p",null,"Insert into ",(0,r.kt)("strong",{parentName:"p"},"App")," file ",(0,r.kt)("strong",{parentName:"p"},"GiveProvider")),(0,r.kt)(o.Z,{mdxType:"Tabs"},(0,r.kt)(i.Z,{value:"JavaScript",label:"JavaScript",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-vue",metastring:'title="src/2.knowing-state/App.vue"',title:'"src/2.knowing-state/App.vue"'},'<template>\n  <FiveProvider :work="work">\n    <FiveCanvas :width="width" :height="height" />\n    <ModelControl />\n    // highlight-start\n    <LookAroundController />\n    // highlight-end\n  </FiveProvider>\n</template>\n\n<script setup>\nimport { FiveProvider, FiveCanvas } from "@realsee/five/vue";\nimport { parseWork } from "@realsee/five";\nimport { ref } from "vue";\nimport { useWindowDimensions } from "./useWindowDimensions";\nimport ModelControl from "./ModelControl.vue";\n// highlight-start\nimport LookAroundController from "./LookAroundController.vue";\n// highlight-end\nconst work = ref();\nconst workURL =\n  "https://vrlab-public.ljcdn.com/release/static/image/release/five/work-sample/07bdc58f413bc5494f05c7cbb5cbdce4/work.json";\n\nfetch(workURL)\n  .then((response) => response.text())\n  .then((text) => (work.value = parseWork(text)));\nconst { width, height } = useWindowDimensions();\n<\/script>\n'))),(0,r.kt)(i.Z,{value:"TypeScript",label:"TypeScript",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-vue",metastring:'title="src/2.knowing-state/App.vue"',title:'"src/2.knowing-state/App.vue"'},'<template>\n  <FiveProvider :work="work">\n    <FiveCanvas :width="width" :height="height" />\n    <ModelControl />\n    // highlight-start\n    <LookAroundController />\n    // highlight-end\n  </FiveProvider>\n</template>\n\n<script setup lang="ts">\nimport { FiveProvider, FiveCanvas } from "@realsee/five/vue";\nimport { parseWork, Work } from "@realsee/five";\nimport { ref } from "vue";\nimport { useWindowDimensions } from "./useWindowDimensions";\nimport ModelControl from "./ModelControl.vue";\n// highlight-start\nimport LookAroundController from "./LookAroundController.vue";\n// highlight-end\nconst work = ref<Work>();\nconst workURL =\n  "https://vrlab-public.ljcdn.com/release/static/image/release/five/work-sample/07bdc58f413bc5494f05c7cbb5cbdce4/work.json";\n\nfetch(workURL)\n  .then((response) => response.text())\n  .then((text) => (work.value = parseWork(text)));\nconst { width, height } = useWindowDimensions();\n<\/script>\n')))),(0,r.kt)("p",null,"Back to your browser to view it will find a ring button in the top right corner of your page.Click to trigger and close the ring view."),(0,r.kt)("p",null,"It's a good feature: partying_face: !"),(0,r.kt)("h2",{id:"the-next-section-will-be-completed-by-you"},"The next section will be completed by you"),(0,r.kt)("admonition",{type:"tip"},(0,r.kt)("mdxAdmonitionTitle",{parentName:"admonition"},"Next chapter we use ",(0,r.kt)("strong",{parentName:"mdxAdmonitionTitle"},"State")," to make some more complex features and to deepen the capabilities of ",(0,r.kt)("strong",{parentName:"mdxAdmonitionTitle"},"State"),"."),(0,r.kt)("ul",{parentName:"admonition"},(0,r.kt)("li",{parentName:"ul"},"Record user operations via ",(0,r.kt)("strong",{parentName:"li"},"State"),"."),(0,r.kt)("li",{parentName:"ul"},"Restore the user action picture with ",(0,r.kt)("strong",{parentName:"li"},"State"),"."))))}d.isMDXComponent=!0}}]);