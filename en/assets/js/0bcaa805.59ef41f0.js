"use strict";(self.webpackChunkrealsee_developer_github_com=self.webpackChunkrealsee_developer_github_com||[]).push([[6090],{3905:(e,n,t)=>{t.d(n,{Zo:()=>c,kt:()=>m});var a=t(67294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var s=a.createContext({}),p=function(e){var n=a.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},c=function(e){var n=p(e.components);return a.createElement(s.Provider,{value:n},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},g=a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),d=p(t),g=r,m=d["".concat(s,".").concat(g)]||d[g]||u[g]||o;return t?a.createElement(m,i(i({ref:n},c),{},{components:t})):a.createElement(m,i({ref:n},c))}));function m(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var o=t.length,i=new Array(o);i[0]=g;var l={};for(var s in n)hasOwnProperty.call(n,s)&&(l[s]=n[s]);l.originalType=e,l[d]="string"==typeof e?e:r,i[1]=l;for(var p=2;p<o;p++)i[p]=t[p];return a.createElement.apply(null,i)}return a.createElement.apply(null,t)}g.displayName="MDXCreateElement"},85162:(e,n,t)=>{t.d(n,{Z:()=>i});var a=t(67294),r=t(86010);const o={tabItem:"tabItem_Ymn6"};function i(e){let{children:n,hidden:t,className:i}=e;return a.createElement("div",{role:"tabpanel",className:(0,r.Z)(o.tabItem,i),hidden:t},n)}},65488:(e,n,t)=>{t.d(n,{Z:()=>u});var a=t(87462),r=t(67294),o=t(86010),i=t(72389),l=t(67392),s=t(7094),p=t(12466);const c={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};function d(e){const{lazy:n,block:t,defaultValue:i,values:d,groupId:u,className:g}=e,m=r.Children.map(e.children,(e=>{if((0,r.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})),v=d??m.map((e=>{let{props:{value:n,label:t,attributes:a}}=e;return{value:n,label:t,attributes:a}})),h=(0,l.l)(v,((e,n)=>e.value===n.value));if(h.length>0)throw new Error(`Docusaurus error: Duplicate values "${h.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`);const f=null===i?i:i??m.find((e=>e.props.default))?.props.value??m[0].props.value;if(null!==f&&!v.some((e=>e.value===f)))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${f}" but none of its children has the corresponding value. Available values are: ${v.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);const{tabGroupChoices:b,setTabGroupChoices:k}=(0,s.U)(),[w,y]=(0,r.useState)(f),T=[],{blockElementScrollPositionUntilNextRender:x}=(0,p.o5)();if(null!=u){const e=b[u];null!=e&&e!==w&&v.some((n=>n.value===e))&&y(e)}const N=e=>{const n=e.currentTarget,t=T.indexOf(n),a=v[t].value;a!==w&&(x(n),y(a),null!=u&&k(u,String(a)))},C=e=>{let n=null;switch(e.key){case"Enter":N(e);break;case"ArrowRight":{const t=T.indexOf(e.currentTarget)+1;n=T[t]??T[0];break}case"ArrowLeft":{const t=T.indexOf(e.currentTarget)-1;n=T[t]??T[T.length-1];break}}n?.focus()};return r.createElement("div",{className:(0,o.Z)("tabs-container",c.tabList)},r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":t},g)},v.map((e=>{let{value:n,label:t,attributes:i}=e;return r.createElement("li",(0,a.Z)({role:"tab",tabIndex:w===n?0:-1,"aria-selected":w===n,key:n,ref:e=>T.push(e),onKeyDown:C,onClick:N},i,{className:(0,o.Z)("tabs__item",c.tabItem,i?.className,{"tabs__item--active":w===n})}),t??n)}))),n?(0,r.cloneElement)(m.filter((e=>e.props.value===w))[0],{className:"margin-top--md"}):r.createElement("div",{className:"margin-top--md"},m.map(((e,n)=>(0,r.cloneElement)(e,{key:n,hidden:e.props.value!==w})))))}function u(e){const n=(0,i.Z)();return r.createElement(d,(0,a.Z)({key:String(n)},e))}},42657:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>s,default:()=>m,frontMatter:()=>l,metadata:()=>p,toc:()=>d});var a=t(87462),r=(t(67294),t(3905)),o=t(65488),i=t(85162);const l={title:"Tag"},s=void 0,p={unversionedId:"front/3d-space/handbook/vue/tagging",id:"front/3d-space/handbook/vue/tagging",title:"Tag",description:"Previous chapter recalls: points in three dimensions",source:"@site/i18n/en/docusaurus-plugin-content-docs/current/front/3d-space/handbook/vue/5.tagging.md",sourceDirName:"front/3d-space/handbook/vue",slug:"/front/3d-space/handbook/vue/tagging",permalink:"/en/docs/front/3d-space/handbook/vue/tagging",draft:!1,tags:[],version:"current",lastUpdatedBy:"sansi.lcj",lastUpdatedAt:1669717185,formattedLastUpdatedAt:"Nov 29, 2022",sidebarPosition:5,frontMatter:{title:"Tag"},sidebar:"\u4e09\u7ef4\u7a7a\u95f4",previous:{title:"Points in 3D space",permalink:"/en/docs/front/3d-space/handbook/vue/points-in-3d"},next:{title:"3D Space",permalink:"/en/docs/front/3d-space/get-started/usage/space"}},c={},d=[{value:"Preparatory work",id:"preparatory-work",level:2},{value:"Developing Tag Features",id:"developing-tag-features",level:2},{value:"useFiveProject2d Description",id:"usefiveproject2d-description",level:3},{value:"Write TaggingController",id:"write-taggingcontroller",level:3},{value:"Use Tag Component",id:"use-tag-component",level:3}],u={toc:d},g="wrapper";function m(e){let{components:n,...t}=e;return(0,r.kt)(g,(0,a.Z)({},u,t,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},(0,r.kt)("strong",{parentName:"p"},"Previous chapter recalls: points in three dimensions")," ",(0,r.kt)("br",null),"\nyou understand the Live SDK event system and try to develop a small app to get a point of three-dimensional location by clicking on the event.")),(0,r.kt)("admonition",{title:"This chapter can learn to",type:"tip"},(0,r.kt)("p",{parentName:"admonition"},"Set labels in three-dimensional space.")),(0,r.kt)("h2",{id:"preparatory-work"},"Preparatory work"),(0,r.kt)("p",null,"We create a new directory (",(0,r.kt)("inlineCode",{parentName:"p"},"src/5.tagging"),"and corresponding ",(0,r.kt)("strong",{parentName:"p"},"htm")," files and ",(0,r.kt)("strong",{parentName:"p"},"js")," or ",(0,r.kt)("strong",{parentName:"p"},"ts")," files.\nThe ",(0,r.kt)("strong",{parentName:"p"},"State")," code with the previous chapter is too onerous, and we show the base development of the contents of ",(0,r.kt)("strong",{parentName:"p"},"the three-dimensional space")," chapter from."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-html",metastring:'title="src/5.tagging/index.html"',title:'"src/5.tagging/index.html"'},'<!DOCTYPE html>\n<html lang="en">\n  <head>\n    <meta charset="UTF-8" />\n    <link rel="icon" href="data:;base64,iVBORw0KGgo=" />\n    <meta name="viewport" content="width=device-width, initial-scale=1.0" />\n    <title>Tag | Tagging</title>\n    <link\n      href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.1/dist/css/bootstrap.min.css"\n      rel="stylesheet"\n      crossorigin="anonymous"\n    />\n    <link\n      href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.5.0/font/bootstrap-icons.css"\n      rel="stylesheet"\n    />\n    <style>\n      * {\n        margin: 0;\n        padding: 0;\n      }\n\n      html,\n      body,\n      #App {\n        width: 100%;\n        height: 100%;\n        overflow: hidden;\n      }\n    </style>\n  </head>\n\n  <body>\n    <div id="app"></div>\n    <script type="module" src="./index"><\/script>\n  </body>\n</html>\n')),(0,r.kt)(o.Z,{mdxType:"Tabs"},(0,r.kt)(i.Z,{value:"JavaScript",label:"JavaScript",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js",metastring:'title="src/5.tagging/useWindowDimensions.js"',title:'"src/5.tagging/useWindowDimensions.js"'},'import { ref, onBeforeUnmount } from "vue";\n\nfunction useWindowDimensions() {\n  const width = ref(window.innerWidth);\n  const height = ref(window.innerHeight);\n\n  const listener = () => {\n    width.value = window.innerWidth;\n    height.value = window.innerHeight;\n  };\n\n  window.addEventListener("resize", listener, false);\n  onBeforeUnmount(() => {\n    window.removeEventListener("resize", listener, false);\n  });\n  return { width, height };\n}\nexport { useWindowDimensions };\n')),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-vue",metastring:'title="src/5.tagging/ModeController.vue"',title:'"src/5.tagging/ModeController.vue"'},'<template>\n  <nav class="navbar fixed-bottom navbar-light bg-light">\n    <div class="container-fluid justify-content-center">\n      <div class="btn-group">\n        <button\n          :class="\n            state.mode == \'Panorama\'\n              ? \'btn btn-primary active\'\n              : \'btn btn-primary\'\n          "\n          @click="() => setState({ mode: Five.Mode.Panorama })"\n        >\n          Panorama roaming\n        </button>\n        <button\n          :class="\n            state.mode == \'Panorama\'\n              ? \'btn btn-primary\'\n              : \'btn btn-primary active\'\n          "\n          @click="() => setState({ mode: Five.Mode.Floorplan })"\n        >\n          Space overview\n        </button>\n      </div>\n    </div>\n  </nav>\n</template>\n\n<script setup>\nimport { useFiveCurrentState } from "@realsee/five/vue";\nimport { Five } from "@realsee/five";\n\nconst [state, setState] = useFiveCurrentState();\n<\/script>\n')),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-vue",metastring:'title="src/5.tagging/App.vue"',title:'"src/5.tagging/App.vue"'},'<template>\n  <FiveProvider :work="work">\n    <FiveCanvas :width="width" :height="height" />\n    <ModeController />\n  </FiveProvider>\n</template>\n\n<script setup>\nimport { FiveProvider, FiveCanvas } from "@realsee/five/vue";\nimport { parseWork } from "@realsee/five";\nimport { ref } from "vue";\nimport { useWindowDimensions } from "./useWindowDimensions";\nimport ModeController from "./ModeController.vue";\n\nconst work = ref();\nconst workURL =\n  "https://vrlab-public.ljcdn.com/release/static/image/release/five/work-sample/07bdc58f413bc5494f05c7cbb5cbdce4/work.json";\n\nfetch(workURL)\n  .then((response) => response.text())\n  .then((text) => (work.value = parseWork(text)));\nconst { width, height } = useWindowDimensions();\n<\/script>\n')),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js",metastring:'title="src/5.tagging/index.js"',title:'"src/5.tagging/index.js"'},'import { createApp, h } from "vue";\nimport App from "./App.vue";\n\ncreateApp(App).mount("#app");\n'))),(0,r.kt)(i.Z,{value:"TypeScript",label:"TypeScript",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts",metastring:'title="src/5.tagging/useWindowDimensions.ts"',title:'"src/5.tagging/useWindowDimensions.ts"'},'import { ref, onBeforeUnmount } from "vue";\n\nfunction useWindowDimensions() {\n  const width = ref<number>(window.innerWidth);\n  const height = ref<number>(window.innerHeight);\n\n  const listener = () => {\n    width.value = window.innerWidth;\n    height.value = window.innerHeight;\n  };\n\n  window.addEventListener("resize", listener, false);\n  onBeforeUnmount(() => {\n    window.removeEventListener("resize", listener, false);\n  });\n  return { width, height };\n}\nexport { useWindowDimensions };\n')),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-vue",metastring:'title="src/5.tagging/ModeController.vue"',title:'"src/5.tagging/ModeController.vue"'},'<template>\n  <nav class="navbar fixed-bottom navbar-light bg-light">\n    <div class="container-fluid justify-content-center">\n      <div class="btn-group">\n        <button\n          :class="\n            state.mode == \'Panorama\'\n              ? \'btn btn-primary active\'\n              : \'btn btn-primary\'\n          "\n          @click="() => setState({ mode: Five.Mode.Panorama })"\n        >\n          Panorama roaming\n        </button>\n        <button\n          :class="\n            state.mode == \'Panorama\'\n              ? \'btn btn-primary\'\n              : \'btn btn-primary active\'\n          "\n          @click="() => setState({ mode: Five.Mode.Floorplan })"\n        >\n          Space overview\n        </button>\n      </div>\n    </div>\n  </nav>\n</template>\n\n<script setup lang="ts">\nimport { useFiveCurrentState } from "@realsee/five/vue";\nimport { Five } from "@realsee/five";\n\nconst [state, setState] = useFiveCurrentState();\n<\/script>\n')),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-vue",metastring:'title="src/5.tagging/App.vue"',title:'"src/5.tagging/App.vue"'},'<template>\n  <FiveProvider :work="work">\n    <FiveCanvas :width="width" :height="height" />\n    <ModeController />\n  </FiveProvider>\n</template>\n\n<script setup lang="ts">\nimport { FiveProvider, FiveCanvas } from "@realsee/five/vue";\nimport { parseWork } from "@realsee/five";\nimport { ref } from "vue";\nimport { useWindowDimensions } from "./useWindowDimensions";\nimport ModeController from "./ModeController.vue";\n\nconst work = ref();\nconst workURL =\n  "https://vrlab-public.ljcdn.com/release/static/image/release/five/work-sample/07bdc58f413bc5494f05c7cbb5cbdce4/work.json";\n\nfetch(workURL)\n  .then((response) => response.text())\n  .then((text) => (work.value = parseWork(text)));\nconst { width, height } = useWindowDimensions();\n<\/script>\n')),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts",metastring:'title="src/5.tagging/index.ts"',title:'"src/5.tagging/index.ts"'},'import { createApp, h } from "vue";\nimport App from "./App.vue";\n\ncreateApp(App).mount("#app");\n')))),(0,r.kt)("p",null,"Start service ",(0,r.kt)("inlineCode",{parentName:"p"},"npm run dev"),' and jump to the current page "http://localhost:3000/src/5.tagging/index.html".'),(0,r.kt)("admonition",{type:"info"},(0,r.kt)("p",{parentName:"admonition"},"Please see your console. The port number will change due to your configuration and current port occupancy, please check the console output.\nIf you use another development build tool, please start the service as required by your own development build tool.")),(0,r.kt)("h2",{id:"developing-tag-features"},"Developing Tag Features"),(0,r.kt)("h3",{id:"usefiveproject2d-description"},"useFiveProject2d Description"),(0,r.kt)("p",null,"This chapter will use the ",(0,r.kt)("a",{parentName:"p",href:"https://unpkg.com/@realsee/five/docs/modules/vue.html#useFiveProject2d"},(0,r.kt)("inlineCode",{parentName:"a"},"useFiveProject2d"))," method.He can match the three-dimensional coordinates to the 2D screen."),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"useFiveProject2d(vector: THREE.Vector3, testModel: boolean): THREE.Vector2 | null")),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Incoming a three-dimensional coordinates to get a 2D coordinates of the screen, starting at the top of the left in pixels.Can be used as ",(0,r.kt)("inlineCode",{parentName:"li"},'{ left: returnValue.x + "px", top: returnValue.y + "px" }')," etc."),(0,r.kt)("li",{parentName:"ol"},"If three-dimensional coordinates cannot be calculated in the screen (e.g. behind or blocked), then return ",(0,r.kt)("inlineCode",{parentName:"li"},"null"),"."),(0,r.kt)("li",{parentName:"ol"},"The second parameter ",(0,r.kt)("strong",{parentName:"li"},"testModel")," is calculated if the model collided, i.e. if the coordinate blocked by the model is ",(0,r.kt)("inlineCode",{parentName:"li"},"null"),".")),(0,r.kt)("h3",{id:"write-taggingcontroller"},"Write TaggingController"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Add a ",(0,r.kt)("strong",{parentName:"li"},"TaggingController")," file to write components."),(0,r.kt)("li",{parentName:"ol"},"Store tag locations and text with ",(0,r.kt)("inlineCode",{parentName:"li"},"tags")," Vue Reactive"),(0,r.kt)("li",{parentName:"ol"},"Save the currently created tag with ",(0,r.kt)("inlineCode",{parentName:"li"},"newTag")," Vue Ref."),(0,r.kt)("li",{parentName:"ol"},"Listen to the ",(0,r.kt)("inlineCode",{parentName:"li"},"intersectionOnModelUpdate")," event to place the newly created tab in the mouse position."),(0,r.kt)("li",{parentName:"ol"},"Call ",(0,r.kt)("strong",{parentName:"li"},"useProject2")," with a tag ",(0,r.kt)("inlineCode",{parentName:"li"},"project2")," method (in",(0,r.kt)("inlineCode",{parentName:"li"},"tagElement")," ) to get the screen canvas coordinates and render them by changing styles."),(0,r.kt)("li",{parentName:"ol"},"Add Tag Style (Style is not required, only for tags)")),(0,r.kt)(o.Z,{mdxType:"Tabs"},(0,r.kt)(i.Z,{value:"JavaScript",label:"JavaScript",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-vue",metastring:'title="src/5.tagging/TaggingController.vue"',title:'"src/5.tagging/TaggingController.vue"'},'<template>\n  <div class="card position-fixed m-2 top-0 start-0">\n    <button class="btn btn-primary" @click="addTag">Tag</button>\n  </div>\n  <div v-for="(tag, index) in tags" class="tag" :style="tagStyle(tag)">\n    <div class="tag-pannel">\n      <span class="tag-content">{{ tag.label }}</span>\n    </div>\n  </div>\n  <div class="tag" :style="newTagStyle(newTag)">\n    <div class="tag-pannel">\n      <span class="tag-content">{{ newTag?.label }}</span>\n    </div>\n  </div>\n</template>\n<script setup>\nimport { useFiveEventCallback, useFiveProject2d } from "@realsee/five/vue";\nimport { ref, reactive } from "vue";\nimport { Vector3 } from "three";\n\nlet newTag = ref(null);\nlet tags = reactive([]);\nconst project2d = useFiveProject2d();\n\nconst intersectPoint = ref(new Vector3(0, 0, 0));\n\nuseFiveEventCallback("intersectionOnModelUpdate", (intersect) => {\n  // \u66f4\u65b0\u4e09\u7ef4\u70b9\n  if (newTag.value) {\n    intersectPoint.value = intersect.point;\n    newTag.value.position = intersect.point;\n  }\n});\n\n// \u70b9\u51fb\u66f4\u65b0\u6570\u7ec4\nuseFiveEventCallback("wantsTapGesture", () => {\n  if (newTag.value && newTag.value.position) {\n    tags.push(newTag.value);\n    newTag.value = null;\n    return false;\n  }\n});\n\nconst addTag = () => {\n  if (!newTag.value) {\n    newTag.value = {\n      label: window.prompt("\u6dfb\u52a0\u6807\u7b7e", "") || "\u672a\u547d\u540d",\n      position: new Vector3(0, 0, 0),\n    };\n  }\n};\n\nconst tagStyle = (tag) => {\n  return {\n    left: project2d(tag.position, false).value?.x + "px",\n    top: project2d(tag.position, false).value?.y + "px",\n  };\n};\n\nconst newTagStyle = (tag) => {\n  if (tag) {\n    return {\n      left: project2d(tag.position, false).value?.x + "px",\n      top: project2d(tag.position, false).value?.y + "px",\n      display: "block",\n    };\n  }\n  return {\n    display: "none",\n  };\n};\n<\/script>\n<style>\n.tag {\n  position: absolute;\n  width: 0;\n  height: 0;\n  transform: translateZ(0);\n}\n\n.tag-pannel {\n  position: absolute;\n  width: 100px;\n  min-height: 20px;\n  transform: translate(-50%, 0);\n  left: 50%;\n  bottom: 10px;\n  background: #333;\n  color: #fff;\n  border-radius: 2px;\n  text-align: center;\n  line-height: 20px;\n  padding: 8px;\n  font-size: 14px;\n}\n\n.tag-pannel:after {\n  content: "";\n  display: block;\n  position: absolute;\n  width: 10px;\n  height: 10px;\n  left: 50%;\n  bottom: -5px;\n  transform: translate(-50%, 0) rotate(45deg);\n  background: #333;\n  pointer-events: none;\n}\n</style>\n'))),(0,r.kt)(i.Z,{value:"TypeScript",label:"TypeScript",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-vue",metastring:'title="src/5.tagging/TaggingController.vue"',title:'"src/5.tagging/TaggingController.vue"'},'<template>\n  <div class="card position-fixed m-2 top-0 start-0">\n    <button class="btn btn-primary" @click="addTag">Tag</button>\n  </div>\n  <div v-for="(tag, index) in tags" class="tag" :style="tagStyle(tag)">\n    <div class="tag-pannel">\n      <span class="tag-content">{{ tag.label }}</span>\n    </div>\n  </div>\n  <div class="tag" :style="newTagStyle(newTag)">\n    <div class="tag-pannel">\n      <span class="tag-content">{{ newTag?.label }}</span>\n    </div>\n  </div>\n</template>\n<script setup lang="ts">\nimport { useFiveEventCallback, useFiveProject2d } from "@realsee/five/vue";\nimport { ref, Ref, reactive } from "vue";\nimport { Vector3 } from "three";\n\ntype Tag = {\n  position: THREE.Vector3;\n  label: string;\n};\nlet newTag: Ref<Tag | null> = ref(null);\nlet tags: Tag[] = reactive([]);\nconst project2d = useFiveProject2d();\n\nconst intersectPoint = ref<Vector3>(new Vector3(0, 0, 0));\n\nuseFiveEventCallback("intersectionOnModelUpdate", (intersect) => {\n  // \u66f4\u65b0\u4e09\u7ef4\u70b9\n  if (newTag.value) {\n    intersectPoint.value = intersect.point;\n    newTag.value.position = intersect.point;\n  }\n});\n\n// \u70b9\u51fb\u66f4\u65b0\u6570\u7ec4\nuseFiveEventCallback("wantsTapGesture", () => {\n  if (newTag.value && newTag.value.position) {\n    tags.push(newTag.value);\n    newTag.value = null;\n    return false;\n  }\n});\n\nconst addTag = () => {\n  if (!newTag.value) {\n    newTag.value = {\n      label: window.prompt("\u6dfb\u52a0\u6807\u7b7e", "") || "\u672a\u547d\u540d",\n      position: new Vector3(0, 0, 0),\n    };\n  }\n};\n\nconst tagStyle = (tag: Tag) => {\n  return {\n    left: project2d(tag.position, false).value?.x + "px",\n    top: project2d(tag.position, false).value?.y + "px",\n  };\n};\n\nconst newTagStyle = (tag: Tag | null) => {\n  if (tag) {\n    return {\n      left: project2d(tag.position, false).value?.x + "px",\n      top: project2d(tag.position, false).value?.y + "px",\n      display: "block",\n    };\n  }\n  return {\n    display: "none",\n  };\n};\n<\/script>\n<style>\n.tag {\n  position: absolute;\n  width: 0;\n  height: 0;\n  transform: translateZ(0);\n}\n\n.tag-pannel {\n  position: absolute;\n  width: 100px;\n  min-height: 20px;\n  transform: translate(-50%, 0);\n  left: 50%;\n  bottom: 10px;\n  background: #333;\n  color: #fff;\n  border-radius: 2px;\n  text-align: center;\n  line-height: 20px;\n  padding: 8px;\n  font-size: 14px;\n}\n\n.tag-pannel:after {\n  content: "";\n  display: block;\n  position: absolute;\n  width: 10px;\n  height: 10px;\n  left: 50%;\n  bottom: -5px;\n  transform: translate(-50%, 0) rotate(45deg);\n  background: #333;\n  pointer-events: none;\n}\n</style>\n')))),(0,r.kt)("h3",{id:"use-tag-component"},"Use Tag Component"),(0,r.kt)("p",null,"Insert into ",(0,r.kt)("strong",{parentName:"p"},"App")," file ",(0,r.kt)("strong",{parentName:"p"},"GiveProvider")),(0,r.kt)(o.Z,{mdxType:"Tabs"},(0,r.kt)(i.Z,{value:"JavaScript",label:"JavaScript",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-vue",metastring:'title="src/5.taging/App.vue"',title:'"src/5.taging/App.vue"'},'<template>\n  <FiveProvider :work="work">\n    <FiveCanvas :width="width" :height="height" />\n    <ModeController />\n    // highlight-start\n    <TaggingController />\n    // highlight-end\n  </FiveProvider>\n</template>\n\n<script setup>\nimport { FiveProvider, FiveCanvas } from "@realsee/five/vue";\nimport { parseWork } from "@realsee/five";\nimport { ref } from "vue";\nimport { useWindowDimensions } from "./useWindowDimensions";\nimport ModeController from "./ModeController.vue";\n// highlight-start\nimport TaggingController from "./TaggingController.vue";\n// highlight-end\n\nconst work = ref();\nconst workURL =\n  "https://vrlab-public.ljcdn.com/release/static/image/release/five/work-sample/07bdc58f413bc5494f05c7cbb5cbdce4/work.json";\n\nfetch(workURL)\n  .then((response) => response.text())\n  .then((text) => (work.value = parseWork(text)));\nconst { width, height } = useWindowDimensions();\n<\/script>\n'))),(0,r.kt)(i.Z,{value:"TypeScript",label:"TypeScript",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-vue",metastring:'title="src/5.tagging/App.vue"',title:'"src/5.tagging/App.vue"'},'<template>\n  <FiveProvider :work="work">\n    <FiveCanvas :width="width" :height="height" />\n    <ModeController />\n    // highlight-start\n    <TaggingController />\n    // highlight-end\n  </FiveProvider>\n</template>\n\n<script setup lang="ts">\nimport { FiveProvider, FiveCanvas } from "@realsee/five/vue";\nimport { parseWork } from "@realsee/five";\nimport { ref } from "vue";\nimport { useWindowDimensions } from "./useWindowDimensions";\nimport ModeController from "./ModeController.vue";\n// highlight-start\nimport TaggingController from "./TaggingController.vue";\n// highlight-end\n\nconst work = ref();\nconst workURL =\n  "https://vrlab-public.ljcdn.com/release/static/image/release/five/work-sample/07bdc58f413bc5494f05c7cbb5cbdce4/work.json";\n\nfetch(workURL)\n  .then((response) => response.text())\n  .then((text) => (work.value = parseWork(text)));\nconst { width, height } = useWindowDimensions();\n<\/script>\n')))),(0,r.kt)("p",null,"Returning to your browser for viewing will find tabs in the upper left corner of your page, click on, fill in the tag name, move the mouse, click in the position you need and place the tag."),(0,r.kt)("p",null,"Well, it is a functional feature: partying_face:"))}m.isMDXComponent=!0}}]);