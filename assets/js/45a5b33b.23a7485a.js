"use strict";(self.webpackChunkrealsee_developer_github_com=self.webpackChunkrealsee_developer_github_com||[]).push([[8165],{49613:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>m});var r=n(59496);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),c=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},d=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),u=c(n),m=a,v=u["".concat(l,".").concat(m)]||u[m]||p[m]||o;return n?r.createElement(v,i(i({ref:t},d),{},{components:n})):r.createElement(v,i({ref:t},d))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=u;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:a,i[1]=s;for(var c=2;c<o;c++)i[c]=n[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},45558:(e,t,n)=>{n.d(t,{Z:()=>i});var r=n(59496),a=n(45924);const o="tabItem_IPoj";function i(e){let{children:t,hidden:n,className:i}=e;return r.createElement("div",{role:"tabpanel",className:(0,a.Z)(o,i),hidden:n},t)}},38637:(e,t,n)=>{n.d(t,{Z:()=>m});var r=n(2962),a=n(59496),o=n(45924),i=n(26709),s=n(33548),l=n(14714),c=n(60411);const d="tabList_xr86",p="tabItem_r4_W";function u(e){var t;const{lazy:n,block:i,defaultValue:u,values:m,groupId:v,className:g}=e,f=a.Children.map(e.children,(e=>{if((0,a.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})),k=m??f.map((e=>{let{props:{value:t,label:n,attributes:r}}=e;return{value:t,label:n,attributes:r}})),b=(0,s.l)(k,((e,t)=>e.value===t.value));if(b.length>0)throw new Error(`Docusaurus error: Duplicate values "${b.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`);const h=null===u?u:u??(null==(t=f.find((e=>e.props.default)))?void 0:t.props.value)??f[0].props.value;if(null!==h&&!k.some((e=>e.value===h)))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${h}" but none of its children has the corresponding value. Available values are: ${k.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);const{tabGroupChoices:w,setTabGroupChoices:y}=(0,l.U)(),[N,S]=(0,a.useState)(h),C=[],{blockElementScrollPositionUntilNextRender:x}=(0,c.o5)();if(null!=v){const e=w[v];null!=e&&e!==N&&k.some((t=>t.value===e))&&S(e)}const R=e=>{const t=e.currentTarget,n=C.indexOf(t),r=k[n].value;r!==N&&(x(t),S(r),null!=v&&y(v,String(r)))},F=e=>{var t;let n=null;switch(e.key){case"Enter":R(e);break;case"ArrowRight":{const t=C.indexOf(e.currentTarget)+1;n=C[t]??C[0];break}case"ArrowLeft":{const t=C.indexOf(e.currentTarget)-1;n=C[t]??C[C.length-1];break}}null==(t=n)||t.focus()};return a.createElement("div",{className:(0,o.Z)("tabs-container",d)},a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":i},g)},k.map((e=>{let{value:t,label:n,attributes:i}=e;return a.createElement("li",(0,r.Z)({role:"tab",tabIndex:N===t?0:-1,"aria-selected":N===t,key:t,ref:e=>C.push(e),onKeyDown:F,onClick:R},i,{className:(0,o.Z)("tabs__item",p,null==i?void 0:i.className,{"tabs__item--active":N===t})}),n??t)}))),n?(0,a.cloneElement)(f.filter((e=>e.props.value===N))[0],{className:"margin-top--md"}):a.createElement("div",{className:"margin-top--md"},f.map(((e,t)=>(0,a.cloneElement)(e,{key:t,hidden:e.props.value!==N})))))}function m(e){const t=(0,i.Z)();return a.createElement(u,(0,r.Z)({key:String(t)},e))}},4439:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>l,default:()=>m,frontMatter:()=>s,metadata:()=>c,toc:()=>p});var r=n(2962),a=(n(59496),n(49613)),o=n(38637),i=n(45558);const s={title:"\u72b6\u6001\u5f55\u5236"},l=void 0,c={unversionedId:"front/3d-space/handbook/vue/recording-state",id:"front/3d-space/handbook/vue/recording-state",title:"\u72b6\u6001\u5f55\u5236",description:"\u4e0a\u4e00\u7ae0\u56de\u987e: \u6539\u53d8\u89c6\u89d2",source:"@site/docs/front/3d-space/handbook/vue/3.recording-state.md",sourceDirName:"front/3d-space/handbook/vue",slug:"/front/3d-space/handbook/vue/recording-state",permalink:"/docs/front/3d-space/handbook/vue/recording-state",draft:!1,tags:[],version:"current",lastUpdatedBy:"sansi.lcj",lastUpdatedAt:1669717185,formattedLastUpdatedAt:"2022\u5e7411\u670829\u65e5",sidebarPosition:3,frontMatter:{title:"\u72b6\u6001\u5f55\u5236"},sidebar:"\u4e09\u7ef4\u7a7a\u95f4",previous:{title:"\u6539\u53d8\u89c6\u89d2",permalink:"/docs/front/3d-space/handbook/vue/knowing-state"},next:{title:"\u4e09\u7ef4\u7a7a\u95f4\u4e2d\u7684\u70b9",permalink:"/docs/front/3d-space/handbook/vue/points-in-3d"}},d={},p=[{value:"\u51c6\u5907\u5de5\u4f5c",id:"\u51c6\u5907\u5de5\u4f5c",level:2},{value:"\u5f55\u5236 / \u56de\u653e",id:"\u5f55\u5236--\u56de\u653e",level:2},{value:"\u7f16\u5199 <strong>Recorder</strong> \u7c7b",id:"\u7f16\u5199-recorder-\u7c7b",level:3},{value:"\u7f16\u5199\u5f55\u5236\u7ec4\u4ef6",id:"\u7f16\u5199\u5f55\u5236\u7ec4\u4ef6",level:3},{value:"\u4f7f\u7528\u72b6\u6001\u5f55\u5236\u7ec4\u4ef6",id:"\u4f7f\u7528\u72b6\u6001\u5f55\u5236\u7ec4\u4ef6",level:3},{value:"\u4e0b\u4e00\u7ae0\u8282\u4f60\u4f1a\u5b66\u5230",id:"\u4e0b\u4e00\u7ae0\u8282\u4f60\u4f1a\u5b66\u5230",level:2}],u={toc:p};function m(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},(0,a.kt)("strong",{parentName:"p"},"\u4e0a\u4e00\u7ae0\u56de\u987e: \u6539\u53d8\u89c6\u89d2")," ",(0,a.kt)("br",null)),(0,a.kt)("ul",{parentName:"blockquote"},(0,a.kt)("li",{parentName:"ul"},"\u4f60\u4e86\u89e3\u4ec0\u4e48\u662f ",(0,a.kt)("strong",{parentName:"li"},"State"),", \u4ee5\u53ca\u5982\u4f55\u83b7\u53d6\u548c\u4fee\u6539\u3002",(0,a.kt)("br",null)),(0,a.kt)("li",{parentName:"ul"},"\u901a\u8fc7 ",(0,a.kt)("strong",{parentName:"li"},"State")," \u5b8c\u6210\u4e86\u81ea\u52a8\u73af\u89c6\u7684\u529f\u80fd\u3002"))),(0,a.kt)("admonition",{title:"\u672c\u7ae0\u4f60\u53ef\u4ee5\u5b66\u4e60\u5230",type:"tip"},(0,a.kt)("ul",{parentName:"admonition"},(0,a.kt)("li",{parentName:"ul"},"\u901a\u8fc7 ",(0,a.kt)("strong",{parentName:"li"},"State")," \u5b8c\u6210\u7528\u6237\u64cd\u4f5c\u7684\u5f55\u5236\u3002"),(0,a.kt)("li",{parentName:"ul"},"\u901a\u8fc7 ",(0,a.kt)("strong",{parentName:"li"},"State")," \u8fd8\u539f\u7528\u6237\u64cd\u4f5c\u753b\u9762\u3002"))),(0,a.kt)("h2",{id:"\u51c6\u5907\u5de5\u4f5c"},"\u51c6\u5907\u5de5\u4f5c"),(0,a.kt)("p",null,"\u548c\u4e0a\u4e00\u7ae0\u8282\u4e00\u6837\uff0c\u6211\u4eec\u65b0\u5efa\u4e00\u4e2a\u76ee\u5f55\uff08",(0,a.kt)("inlineCode",{parentName:"p"},"src/3.recording-state"),"\uff09\u4ee5\u53ca\u5bf9\u5e94\u7684 ",(0,a.kt)("strong",{parentName:"p"},"html")," \u6587\u4ef6 \u4ee5\u53ca ",(0,a.kt)("strong",{parentName:"p"},"js")," \u6216 ",(0,a.kt)("strong",{parentName:"p"},"ts")," \u6587\u4ef6\u3002"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"js")," \u6216 ",(0,a.kt)("strong",{parentName:"p"},"ts")," \u6587\u4ef6\u53ef\u4ee5\u5148\u62f7\u8d1d\u4e0a\u4e00\u7ae0\u8282\u7684\u5185\u5bb9\u3002"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-html",metastring:'title="src/3.recording-state/index.html"',title:'"src/3.recording-state/index.html"'},'<!DOCTYPE html>\n<html lang="en">\n  <head>\n    <meta charset="UTF-8" />\n    <link rel="icon" href="data:;base64,iVBORw0KGgo=" />\n    <meta name="viewport" content="width=device-width, initial-scale=1.0" />\n    <title>\u72b6\u6001\u5f55\u5236 | Recording state</title>\n    <style>\n      * {\n        margin: 0;\n        padding: 0;\n      }\n      html,\n      body #app {\n        width: 100%;\n        height: 100%;\n        overflow: hidden;\n      }\n    </style>\n  </head>\n  <body>\n    <div id="app"></div>\n    <script type="module" src="./index"><\/script>\n  </body>\n</html>\n')),(0,a.kt)(o.Z,{mdxType:"Tabs"},(0,a.kt)(i.Z,{value:"JavaScript",label:"JavaScript",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js",metastring:'title="src/3.recording-state/useWindowDimensions.js"',title:'"src/3.recording-state/useWindowDimensions.js"'},'import { ref, onBeforeUnmount } from "vue";\n\nfunction useWindowDimensions() {\n  const width = ref(window.innerWidth);\n  const height = ref(window.innerHeight);\n\n  const listener = () => {\n    width.value = window.innerWidth;\n    height.value = window.innerHeight;\n  };\n\n  window.addEventListener("resize", listener, false);\n  onBeforeUnmount(() => {\n    window.removeEventListener("resize", listener, false);\n  });\n  return { width, height };\n}\nexport { useWindowDimensions };\n')),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-vue",metastring:'title="src/3.recording-state/ModeController.vue"',title:'"src/3.recording-state/ModeController.vue"'},'<template>\n  <nav class="navbar fixed-bottom navbar-light bg-light">\n    <div class="container-fluid justify-content-center">\n      <div class="btn-group">\n        <button\n          :class="\n            state.mode == \'Panorama\'\n              ? \'btn btn-primary active\'\n              : \'btn btn-primary\'\n          "\n          @click="() => setState({ mode: Five.Mode.Panorama })"\n        >\n          \u5168\u666f\u6f2b\u6e38\n        </button>\n        <button\n          :class="\n            state.mode == \'Panorama\'\n              ? \'btn btn-primary\'\n              : \'btn btn-primary active\'\n          "\n          @click="() => setState({ mode: Five.Mode.Floorplan })"\n        >\n          \u7a7a\u95f4\u603b\u89c8\n        </button>\n      </div>\n    </div>\n  </nav>\n</template>\n\n<script setup>\nimport { useFiveCurrentState } from "@realsee/five/vue";\nimport { Five } from "@realsee/five";\n\nconst [state, setState] = useFiveCurrentState();\n<\/script>\n')),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-vue",metastring:'title="src/3.recording-state/LookAroundController.vue"',title:'"src/3.recording-state/LookAroundController.vue"'},'<template>\n  <div class="card position-fixed m-2 top-0 end-0">\n    <button class="btn btn-light" v-show="isShow" @click="startFunc">\n      <i class="bi bi-arrow-repeat"></i>\n    </button>\n    <button class="btn btn-light" v-show="!isShow" @click="stopFunc">\n      <i class="bi bi-pause"></i>\n    </button>\n  </div>\n</template>\n\n<script setup>\nimport { ref } from "vue";\nimport { useFiveCurrentState } from "@realsee/five/vue";\n\nconst [currentState, setState] = useFiveCurrentState();\nconst isShow = ref(true);\nlet timer;\n\nconst startFunc = () => {\n  window.clearInterval(timer);\n  isShow.value = false;\n  timer = window.setInterval(() => {\n    setState({ longitude: currentState.value.longitude + Math.PI / 360 });\n  }, 16);\n};\n\nconst stopFunc = () => {\n  window.clearInterval(timer);\n  isShow.value = true;\n};\n<\/script>\n')),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-vue",metastring:'title="src/3.recording-state/App.vue"',title:'"src/3.recording-state/App.vue"'},'<template>\n  <FiveProvider :work="work">\n    <FiveCanvas :width="width" :height="height" />\n    <ModeController />\n    <LookAroundController />\n  </FiveProvider>\n</template>\n\n<script setup lang="ts">\nimport { FiveProvider, FiveCanvas } from "@realsee/five/vue";\nimport { parseWork } from "@realsee/five";\nimport { ref } from "vue";\nimport { useWindowDimensions } from "./useWindowDimensions";\nimport ModeController from "./ModeController.vue";\nimport LookAroundController from "./LookAroundController.vue";\n\nconst work = ref();\nconst workURL =\n  "https://vrlab-public.ljcdn.com/release/static/image/release/five/work-sample/07bdc58f413bc5494f05c7cbb5cbdce4/work.json";\n\nfetch(workURL)\n  .then((response) => response.text())\n  .then((text) => (work.value = parseWork(text)));\nconst { width, height } = useWindowDimensions();\n<\/script>\n')),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js",metastring:'title="src/3.recording-state/index.js"',title:'"src/3.recording-state/index.js"'},'import { createApp, h } from "vue";\nimport App from "./App.vue";\n\ncreateApp(App).mount("#app");\n'))),(0,a.kt)(i.Z,{value:"TypeScript",label:"TypeScript",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts",metastring:'title="src/3.recording-state/useWindowDimensions.ts"',title:'"src/3.recording-state/useWindowDimensions.ts"'},'import { ref, onBeforeUnmount } from "vue";\n\nfunction useWindowDimensions() {\n  const width = ref(window.innerWidth);\n  const height = ref(window.innerHeight);\n\n  const listener = () => {\n    width.value = window.innerWidth;\n    height.value = window.innerHeight;\n  };\n\n  window.addEventListener("resize", listener, false);\n  onBeforeUnmount(() => {\n    window.removeEventListener("resize", listener, false);\n  });\n  return { width, height };\n}\nexport { useWindowDimensions };\n')),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-vue",metastring:'title="src/3.recording-state/ModeController.vue"',title:'"src/3.recording-state/ModeController.vue"'},'<template>\n  <nav class="navbar fixed-bottom navbar-light bg-light">\n    <div class="container-fluid justify-content-center">\n      <div class="btn-group">\n        <button\n          :class="\n            state.mode == \'Panorama\'\n              ? \'btn btn-primary active\'\n              : \'btn btn-primary\'\n          "\n          @click="() => setState({ mode: Five.Mode.Panorama })"\n        >\n          \u5168\u666f\u6f2b\u6e38\n        </button>\n        <button\n          :class="\n            state.mode == \'Panorama\'\n              ? \'btn btn-primary\'\n              : \'btn btn-primary active\'\n          "\n          @click="() => setState({ mode: Five.Mode.Floorplan })"\n        >\n          \u7a7a\u95f4\u603b\u89c8\n        </button>\n      </div>\n    </div>\n  </nav>\n</template>\n\n<script setup lang="ts">\nimport { useFiveCurrentState } from "@realsee/five/vue";\nimport { Five } from "@realsee/five";\n\nconst [state, setState] = useFiveCurrentState();\n<\/script>\n')),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-vue",metastring:'title="src/3.recording-state/LookAroundController.vue"',title:'"src/3.recording-state/LookAroundController.vue"'},'<template>\n  <div class="card position-fixed m-2 top-0 end-0">\n    <button class="btn btn-light" v-show="isShow" @click="startFunc">\n      <i class="bi bi-arrow-repeat"></i>\n    </button>\n    <button class="btn btn-light" v-show="!isShow" @click="stopFunc">\n      <i class="bi bi-pause"></i>\n    </button>\n  </div>\n</template>\n\n<script setup lang="ts">\nimport { ref } from "vue";\nimport { useFiveCurrentState } from "@realsee/five/vue";\n\nconst [currentState, setState] = useFiveCurrentState();\nconst isShow = ref(true);\nlet timer: number | undefined;\n\nconst startFunc = () => {\n  window.clearInterval(timer);\n  isShow.value = false;\n  timer = window.setInterval(() => {\n    setState({ longitude: currentState.value.longitude + Math.PI / 360 });\n  }, 16);\n};\n\nconst stopFunc = () => {\n  window.clearInterval(timer);\n  isShow.value = true;\n};\n<\/script>\n')),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-vue",metastring:'title="src/3.recording-state/App.vue"',title:'"src/3.recording-state/App.vue"'},'<template>\n  <FiveProvider :work="work">\n    <FiveCanvas :width="width" :height="height" />\n    <ModeController />\n    <LookAroundController />\n  </FiveProvider>\n</template>\n\n<script setup lang="ts">\nimport { FiveProvider, FiveCanvas } from "@realsee/five/vue";\nimport { parseWork } from "@realsee/five";\nimport { ref } from "vue";\nimport { useWindowDimensions } from "./useWindowDimensions";\nimport ModeController from "./ModeController.vue";\nimport LookAroundController from "./LookAroundController.vue";\n\nconst work = ref();\nconst workURL =\n  "https://vrlab-public.ljcdn.com/release/static/image/release/five/work-sample/07bdc58f413bc5494f05c7cbb5cbdce4/work.json";\n\nfetch(workURL)\n  .then((response) => response.text())\n  .then((text) => (work.value = parseWork(text)));\nconst { width, height } = useWindowDimensions();\n<\/script>\n')),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts",metastring:'title="src/3.recording-state/index.ts"',title:'"src/3.recording-state/index.ts"'},'import { createApp, h } from "vue";\nimport App from "./App.vue";\n\ncreateApp(App).mount("#app");\n')))),(0,a.kt)("p",null,"\u542f\u52a8\u670d\u52a1 ",(0,a.kt)("inlineCode",{parentName:"p"},"npm run dev"),'\u3002 \u5e76\u8df3\u8f6c\u5230\u5f53\u524d\u9875\u9762 "http://localhost:3000/src/3.recording-state/index.html"\u3002'),(0,a.kt)("admonition",{type:"info"},(0,a.kt)("p",{parentName:"admonition"},"\u8bf7\u67e5\u770b\u4f60\u7684\u63a7\u5236\u53f0\uff0c\u7aef\u53e3\u53f7\u4f1a\u56e0\u4e3a\u4f60\u7684\u914d\u7f6e\u4ee5\u53ca\u5f53\u524d\u7aef\u53e3\u5360\u7528\u60c5\u51b5\u53d8\u66f4\uff0c\u8bf7\u5df2\u63a7\u5236\u53f0\u8f93\u51fa\u7684\u4e3a\u51c6\u3002\n\u5982\u679c\u4f60\u4f7f\u7528\u5176\u4ed6\u5f00\u53d1\u6784\u5efa\u5de5\u5177\uff0c\u8bf7\u6309\u7167\u81ea\u5df1\u7684\u5f00\u53d1\u6784\u5efa\u5de5\u5177\u7684\u8981\u6c42\u542f\u52a8\u670d\u52a1\u3002")),(0,a.kt)("h2",{id:"\u5f55\u5236--\u56de\u653e"},"\u5f55\u5236 / \u56de\u653e"),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"\u8fd9\u7ae0\u6211\u4eec\u7ee7\u7eed\u901a\u8fc7 ",(0,a.kt)("strong",{parentName:"p"},"State")," \u6765\u5b8c\u6210\u4e00\u4e2a\u6709\u610f\u601d\u7684\u5e94\u7528\u3002\n\u672c\u7ae0\u6211\u4eec\u4f1a\u5b8c\u6210\u8fd9\u6837\u7684\u4e00\u4e2a\u5e94\u7528\uff0c\u8bb0\u5f55\u7528\u6237\u5728\u9875\u9762\u4e0a\u53d1\u751f\u7684 ",(0,a.kt)("strong",{parentName:"p"},"State"),"\uff0c\u5e76\u4e14\u53ef\u4ee5\u56de\u653e\u8fd9\u4e9b\u64cd\u4f5c\u3002",(0,a.kt)("br",null))),(0,a.kt)("h3",{id:"\u7f16\u5199-recorder-\u7c7b"},"\u7f16\u5199 ",(0,a.kt)("strong",{parentName:"h3"},"Recorder")," \u7c7b"),(0,a.kt)("p",null,"\u9996\u5148\uff0c\u6211\u4eec\u9700\u8981\u7f16\u5199 ",(0,a.kt)("strong",{parentName:"p"},"Recorder")," \u7c7b\uff0c\u6765\u652f\u6301\u8bb0\u5f55\u548c\u56de\u653e\u3002\n",(0,a.kt)("strong",{parentName:"p"},"Recorder")," \u7c7b \u5e76\u975e ",(0,a.kt)("strong",{parentName:"p"},"Five")," \u7684\u5185\u5bb9\uff0c\u53ea\u662f\u4e3a\u4e86\u8fbe\u6210\u672c\u7ae0\u7684\u6548\u679c\u7f16\u5199\u7684\u3002"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"\u5b9e\u73b0 ",(0,a.kt)("strong",{parentName:"li"},"startRecording / endRecording")," \u65b9\u6cd5\uff0c\u7528\u4e8e\u5f00\u59cb\u5f55\u5236\u548c\u7ed3\u675f\u5f55\u5236\u3002"),(0,a.kt)("li",{parentName:"ol"},"\u5b9e\u73b0 ",(0,a.kt)("strong",{parentName:"li"},"record(state: State)")," \u65b9\u6cd5\uff0c\u8bb0\u5f55\u5f55\u5236\u5185\u5bb9\u3002\u8bb0\u5f55 ",(0,a.kt)("strong",{parentName:"li"},"startRecording / endRecording")," \u4e4b\u95f4\u7684\u5185\u5bb9\u3002"),(0,a.kt)("li",{parentName:"ol"},"\u5b9e\u73b0 ",(0,a.kt)("strong",{parentName:"li"},"play(callback)")," \u65b9\u6cd5\uff0c\u7528\u4e8e\u56de\u653e\uff0c\u8c03\u7528 play \u4e4b\u540e\uff0c\u4f1a\u5b89\u88c5 ",(0,a.kt)("strong",{parentName:"li"},"record")," \u7684\u5185\u5bb9\uff0c\u4f9d\u6b21\u8c03\u7528 ",(0,a.kt)("strong",{parentName:"li"},"callback")," \u65b9\u6cd5\uff0c\u56de\u653e ",(0,a.kt)("strong",{parentName:"li"},"State"),"\u3002")),(0,a.kt)(o.Z,{mdxType:"Tabs"},(0,a.kt)(i.Z,{value:"JavaScript",label:"JavaScript",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js",metastring:'title="src/3.recording-state/recorder.js"',title:'"src/3.recording-state/recorder.js"'},"/**\n * \u5f55\u5236\u7c7b\n */\nclass Recorder {\n  constructor() {\n    this.startTime = 0;\n    this.records = null;\n  }\n  /**\n   * \u662f\u5426\u5df2\u5f55\u5236\n   */\n  hasRecords() {\n    return this.records !== null;\n  }\n  /**\n   * \u5f55\u5236\u5173\u952e\u5e27\n   * @param state five \u7684 state\n   * @returns\n   */\n  record(state) {\n    if (this.records === null) return;\n    this.records.push({\n      state: Object.assign({}, state),\n      time: Date.now() - this.startTime,\n    });\n  }\n  /**\n   * \u5f00\u59cb\u5f55\u5236\n   */\n  startRecording() {\n    this.startTime = Date.now();\n    this.records = [];\n  }\n  /**\n   * \u7ed3\u675f\u5f55\u5236\n   */\n  endRecording() {\n    this.startTime = 0;\n  }\n  /**\n   * \u56de\u653e\u5f55\u5236\n   * @param callback \u5173\u952e\u5e27\u56de\u8c03\n   * @returns \u5f53\u524d\u662f\u5426\u6709\u5f55\u5236\n   */\n  play(callback) {\n    if (this.records === null || this.records.length === 0) return false;\n    const records = this.records.slice();\n    const keyframe = (keyIndex) => {\n      const current = records[keyIndex];\n      const next = records[keyIndex + 1];\n      callback(current.state, next === undefined);\n      if (next) {\n        const delay = next.time - current.time;\n        setTimeout(() => keyframe(keyIndex + 1), delay);\n      }\n    };\n    keyframe(0);\n    return true;\n  }\n}\n\nexport { Recorder };\n"))),(0,a.kt)(i.Z,{value:"TypeScript",label:"TypeScript",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts",metastring:'title="src/3.recording-state/recorder.ts"',title:'"src/3.recording-state/recorder.ts"'},'import { State } from "@realsee/five";\n\n/**\n * \u5f55\u5236\u7c7b\n */\nclass Recorder {\n  private records: { state: State; time: number }[] | null = null;\n  private startTime: number;\n  constructor() {\n    this.startTime = 0;\n    this.records = null;\n  }\n  /**\n   * \u662f\u5426\u5df2\u5f55\u5236\n   */\n  hasRecords() {\n    return this.records !== null;\n  }\n  /**\n   * \u5f55\u5236\u5173\u952e\u5e27\n   * @param state five \u7684 state\n   * @returns\n   */\n  record(state: State) {\n    if (this.records === null) return;\n    this.records.push({\n      state: Object.assign({}, state),\n      time: Date.now() - this.startTime,\n    });\n  }\n  /**\n   * \u5f00\u59cb\u5f55\u5236\n   */\n  startRecording() {\n    this.startTime = Date.now();\n    this.records = [];\n  }\n  /**\n   * \u7ed3\u675f\u5f55\u5236\n   */\n  endRecording() {\n    this.startTime = 0;\n  }\n  /**\n   * \u56de\u653e\u5f55\u5236\n   * @param callback \u5173\u952e\u5e27\u56de\u8c03\n   * @returns \u5f53\u524d\u662f\u5426\u6709\u5f55\u5236\n   */\n  play(callback: (state: State, isFinal: boolean) => void) {\n    if (this.records === null || this.records.length === 0) return false;\n    const records = this.records.slice();\n    const keyframe = (keyIndex: number) => {\n      const current = records[keyIndex];\n      const next = records[keyIndex + 1];\n      callback(current.state, next === undefined);\n      if (next) {\n        const delay = next.time - current.time;\n        setTimeout(() => keyframe(keyIndex + 1), delay);\n      }\n    };\n    keyframe(0);\n    return true;\n  }\n}\n\nexport { Recorder };\n')))),(0,a.kt)("h3",{id:"\u7f16\u5199\u5f55\u5236\u7ec4\u4ef6"},"\u7f16\u5199\u5f55\u5236\u7ec4\u4ef6"),(0,a.kt)("p",null,"\u5c06 ",(0,a.kt)("strong",{parentName:"p"},"Recorder")," \u7c7b\uff0c\u5c01\u88c5\u6210 Vue \u7ec4\u4ef6\u3002"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"\u6dfb\u52a0\u4e00\u4e2a ",(0,a.kt)("strong",{parentName:"li"},"RecorderController")," \u6587\u4ef6\uff0c\u7528\u4e8e\u7f16\u5199\u7ec4\u4ef6\u3002"),(0,a.kt)("li",{parentName:"ol"},"\u7ec4\u4ef6\u5185\u6709\u72b6\u6001 ",(0,a.kt)("strong",{parentName:"li"},"recording")," \u4ee5\u53ca ",(0,a.kt)("strong",{parentName:"li"},"playing"),"\u3002\u5206\u522b\u4f5c\u4e3a \u5f55\u5236\u4e2d / \u56de\u653e\u4e2d\u7684\u72b6\u6001\u3002"),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("a",{parentName:"li",href:"https://unpkg.com/@realsee/five/docs/modules/vue.html#useFiveEventCallback"},(0,a.kt)("inlineCode",{parentName:"a"},"useFiveEventCallback"))," \u53ef\u4ee5\u83b7\u53d6\u5230 Five \u7684\u5185\u7f6e\u65b9\u6cd5\u56de\u8c03\u3002",(0,a.kt)("br",null),"\n\u8fd9\u8fb9\u6211\u4eec\u8c03\u7528 ",(0,a.kt)("strong",{parentName:"li"},"stateChange")," \u4e8b\u4ef6\uff0c\u5f53 ",(0,a.kt)("strong",{parentName:"li"},"state")," \u53d1\u751f\u6539\u53d8\u65f6\uff0c\u4f1a\u89e6\u53d1\u8be5\u4e8b\u4ef6, \u8fdb\u800c\u5c06 ",(0,a.kt)("strong",{parentName:"li"},"State")," \u8c03\u7528 ",(0,a.kt)("inlineCode",{parentName:"li"},"recorder.record(state)")," \u65b9\u6cd5\u8bb0\u5f55\u4e0b\u6765\u3002",(0,a.kt)("br",null),(0,a.kt)("blockquote",{parentName:"li"},(0,a.kt)("p",{parentName:"blockquote"},"\u66f4\u591a\u7684\u4e8b\u4ef6\u8bf4\u660e\u8bf7\u770b ",(0,a.kt)("a",{parentName:"p",href:"https://unpkg.com/@realsee/five/docs/interfaces/five.EventCallback.html"},(0,a.kt)("strong",{parentName:"a"},"Five")," \u7684\u4e8b\u4ef6\u5217\u8868")))),(0,a.kt)("li",{parentName:"ol"},"\u5f53\u56de\u653e\u6309\u94ae\u88ab\u6309\u4e0b\u540e\uff0c\u8c03\u7528 ",(0,a.kt)("inlineCode",{parentName:"li"},"recorder.play(callback)")," \u65b9\u6cd5\uff0c\u4f1a\u5c06\u4e4b\u524d\u5f55\u5236\u7684 ",(0,a.kt)("strong",{parentName:"li"},"state")," \u9010\u6761\u8c03\u7528 ",(0,a.kt)("strong",{parentName:"li"},"callback")," \u65b9\u6cd5\uff0c\u56de\u653e\u8bb0\u5f55\u3002"),(0,a.kt)("li",{parentName:"ol"},"\u5c06\u8bb0\u5f55\u8c03\u7528 five \u7684 ",(0,a.kt)("strong",{parentName:"li"},"setState")," \u65b9\u6cd5\uff0c\u5c06\u56de\u653e\u5185\u5bb9\u5e94\u7528\uff0c\u4f7f\u5f97\u753b\u9762\u53d8\u5316\u3002")),(0,a.kt)(o.Z,{mdxType:"Tabs"},(0,a.kt)(i.Z,{value:"JavaScript",label:"JavaScript",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-vue",metastring:'title="src/3.recording-state/RecorderController.vue"',title:'"src/3.recording-state/RecorderController.vue"'},'<template>\n  <div class="card position-fixed m-2 top-0 start-0">\n    <div class="btn-group align-items-center">\n      <button class="btn btn-light " v-show="recordStart" @click="startRecord">\n        <i class="bi bi-record-fill"></i>\n      </button>\n      <button class="btn btn-light " v-show="recordEnd" @click="stopRecord">\n        <i class="bi bi-stop-fill"></i>\n      </button>\n      <button class="btn btn-light " v-show="playingStart" @click="playRecord">\n        <i class="bi bi-play-fill"></i>\n      </button>\n      <p class="badge bg-primary m-2 " v-show="recording" @click="">\u5f55\u5236\u4e2d</p>\n      <p class="badge bg-primary m-2 " v-show="playing" @click="">\u64ad\u653e\u4e2d</p>\n    </div>\n  </div>\n</template>\n\n<script setup>\nimport { ref } from "vue";\nimport { Recorder } from "./recorder";\nimport { useFiveState, useFiveEventCallback } from "@realsee/five/vue";\nconst recorder = new Recorder();\nconst [state, setState] = useFiveState();\n\nconst recordStart = ref(true);\nconst recordEnd = ref(false);\nconst playingStart = ref(true);\nconst recording = ref(false);\nconst playing = ref(false);\n\nuseFiveEventCallback("stateChange", (state) => {\n  if (recording.value === true) {\n    recorder.record(state);\n  }\n});\n\nconst startRecord = () => {\n  recorder.startRecording();\n  recordStart.value = false;\n  recordEnd.value = true;\n  recording.value = true;\n  playingStart.value = false;\n};\n\nconst stopRecord = () => {\n  recorder.endRecording();\n  recordStart.value = true;\n  recordEnd.value = false;\n  recording.value = false;\n  playingStart.value = true;\n};\n\nconst playRecord = () => {\n  recordStart.value = false;\n  recordEnd.value = false;\n  recording.value = false;\n  playingStart.value = false;\n  playing.value = true;\n  const hasRecrod = recorder.play((state, isFinal) => {\n    setState(state);\n    if (isFinal) {\n      recordStart.value = true;\n      recordEnd.value = false;\n      recording.value = false;\n      playingStart.value = true;\n      playing.value = false;\n    }\n  });\n  if (!hasRecrod) {\n    recordStart.value = true;\n    recordEnd.value = false;\n    recording.value = false;\n    playingStart.value = true;\n    playing.value = false;\n  }\n};\n<\/script>\n'))),(0,a.kt)(i.Z,{value:"TypeScript",label:"TypeScript",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-vue",metastring:'title="src/3.recording-state/RecorderController.vue"',title:'"src/3.recording-state/RecorderController.vue"'},'<template>\n  <div class="card position-fixed m-2 top-0 start-0">\n    <div class="btn-group align-items-center">\n      <button class="btn btn-light " v-show="recordStart" @click="startRecord">\n        <i class="bi bi-record-fill"></i>\n      </button>\n      <button class="btn btn-light " v-show="recordEnd" @click="stopRecord">\n        <i class="bi bi-stop-fill"></i>\n      </button>\n      <button class="btn btn-light " v-show="playingStart" @click="playRecord">\n        <i class="bi bi-play-fill"></i>\n      </button>\n      <p class="badge bg-primary m-2 " v-show="recording" @click="">\u5f55\u5236\u4e2d</p>\n      <p class="badge bg-primary m-2 " v-show="playing" @click="">\u64ad\u653e\u4e2d</p>\n    </div>\n  </div>\n</template>\n\n<script setup lang="ts">\nimport { ref } from "vue";\nimport { Recorder } from "./recorder";\nimport { useFiveState, useFiveEventCallback } from "@realsee/five/vue";\nconst recorder = new Recorder();\nconst [state, setState] = useFiveState();\n\nconst recordStart = ref(true);\nconst recordEnd = ref(false);\nconst playingStart = ref(true);\nconst recording = ref(false);\nconst playing = ref(false);\n\nuseFiveEventCallback("stateChange", (state) => {\n  if (recording.value === true) {\n    recorder.record(state);\n  }\n});\n\nconst startRecord = () => {\n  recorder.startRecording();\n  recordStart.value = false;\n  recordEnd.value = true;\n  recording.value = true;\n  playingStart.value = false;\n};\n\nconst stopRecord = () => {\n  recorder.endRecording();\n  recordStart.value = true;\n  recordEnd.value = false;\n  recording.value = false;\n  playingStart.value = true;\n};\n\nconst playRecord = () => {\n  recordStart.value = false;\n  recordEnd.value = false;\n  recording.value = false;\n  playingStart.value = false;\n  playing.value = true;\n  const hasRecrod = recorder.play((state, isFinal) => {\n    setState(state);\n    if (isFinal) {\n      recordStart.value = true;\n      recordEnd.value = false;\n      recording.value = false;\n      playingStart.value = true;\n      playing.value = false;\n    }\n  });\n  if (!hasRecrod) {\n    recordStart.value = true;\n    recordEnd.value = false;\n    recording.value = false;\n    playingStart.value = true;\n    playing.value = false;\n  }\n};\n<\/script>\n')))),(0,a.kt)("h3",{id:"\u4f7f\u7528\u72b6\u6001\u5f55\u5236\u7ec4\u4ef6"},"\u4f7f\u7528\u72b6\u6001\u5f55\u5236\u7ec4\u4ef6"),(0,a.kt)("p",null,"\u63d2\u5165\u5230 ",(0,a.kt)("strong",{parentName:"p"},"App")," \u6587\u4ef6\u7684 ",(0,a.kt)("strong",{parentName:"p"},"FiveProvider")," \u4e2d"),(0,a.kt)(o.Z,{mdxType:"Tabs"},(0,a.kt)(i.Z,{value:"JavaScript",label:"JavaScript",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-vue",metastring:'title="src/3.recording-state/App.vue"',title:'"src/3.recording-state/App.vue"'},'<template>\n  <FiveProvider :work="work">\n    <FiveCanvas :width="width" :height="height" />\n    <ModeController />\n    <LookAroundController />\n    // highlight-start\n    <RecorderController />\n    // highlight-end\n  </FiveProvider>\n</template>\n\n<script setup>\nimport { FiveProvider, FiveCanvas } from "@realsee/five/vue";\nimport { parseWork } from "@realsee/five";\nimport { ref } from "vue";\nimport { useWindowDimensions } from "./useWindowDimensions";\nimport ModeController from "./ModeController.vue";\nimport LookAroundController from "./LookAroundController.vue";\n// highlight-start\nimport RecorderController from "./RecorderController.vue";\n// highlight-end\nconst work = ref();\nconst workURL =\n  "https://vrlab-public.ljcdn.com/release/static/image/release/five/work-sample/07bdc58f413bc5494f05c7cbb5cbdce4/work.json";\n\nfetch(workURL)\n  .then((response) => response.text())\n  .then((text) => (work.value = parseWork(text)));\nconst { width, height } = useWindowDimensions();\n<\/script>\n'))),(0,a.kt)(i.Z,{value:"TypeScript",label:"TypeScript",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-vue",metastring:'title="src/3.recording-state/App.vue"',title:'"src/3.recording-state/App.vue"'},'<template>\n  <FiveProvider :work="work">\n    <FiveCanvas :width="width" :height="height" />\n    <ModeController />\n    <LookAroundController />\n    // highlight-start\n    <RecorderController />\n    // highlight-end\n  </FiveProvider>\n</template>\n\n<script setup lang="ts">\nimport { FiveProvider, FiveCanvas } from "@realsee/five/vue";\nimport { parseWork } from "@realsee/five";\nimport { ref } from "vue";\nimport { useWindowDimensions } from "./useWindowDimensions";\nimport ModeController from "./ModeController.vue";\nimport LookAroundController from "./LookAroundController.vue";\n// highlight-start\nimport RecorderController from "./RecorderController.vue";\n// highlight-end\nconst work = ref();\nconst workURL =\n  "https://vrlab-public.ljcdn.com/release/static/image/release/five/work-sample/07bdc58f413bc5494f05c7cbb5cbdce4/work.json";\n\nfetch(workURL)\n  .then((response) => response.text())\n  .then((text) => (work.value = parseWork(text)));\nconst { width, height } = useWindowDimensions();\n<\/script>\n')))),(0,a.kt)("p",null,"\u56de\u5230\u4f60\u7684\u6d4f\u89c8\u5668\u67e5\u770b\uff0c\u4f1a\u53d1\u73b0\u4f60\u7684\u9875\u9762\u5de6\u4e0a\u89d2\u51fa\u73b0\u4e00\u4e2a\u5f55\u5236\u548c\u64ad\u653e\u6309\u94ae\u3002\u8bd5\u8bd5\u529f\u80fd\u662f\u4e0d\u662f\u7b26\u5408\u9884\u671f\u3002"),(0,a.kt)("p",null,"\u771f\u5389\u5bb3\uff0c\u4f60\u4ee5\u53ca\u53ef\u4ee5\u7f16\u5199\u90a3\u4e48\u590d\u6742\u7684\u7a0b\u5e8f\u4e86 \ud83e\udd73 \u3002"),(0,a.kt)("h2",{id:"\u4e0b\u4e00\u7ae0\u8282\u4f60\u4f1a\u5b66\u5230"},"\u4e0b\u4e00\u7ae0\u8282\u4f60\u4f1a\u5b66\u5230"),(0,a.kt)("admonition",{title:"\u4e0b\u4e00\u7ae0\u6211\u4eec\u9700\u8981\u548c\u4e09\u7ef4\u7a7a\u95f4\u7684\u6a21\u578b\u6253\u4ea4\u9053\u4e86\u3002",type:"tip"},(0,a.kt)("ul",{parentName:"admonition"},(0,a.kt)("li",{parentName:"ul"},"\u4e86\u89e3 Five SDK \u7684\u624b\u52bf\u4ea4\u4e92\u7cfb\u7edf\u3002"),(0,a.kt)("li",{parentName:"ul"},"\u83b7\u53d6\u5230\u70b9\u7684\u4e09\u7ef4\u4f4d\u7f6e\u3002"))))}m.isMDXComponent=!0}}]);