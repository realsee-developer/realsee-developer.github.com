"use strict";(self.webpackChunkrealsee_developer_github_com=self.webpackChunkrealsee_developer_github_com||[]).push([[2351],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return d}});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),p=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=p(e.components);return r.createElement(l.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),u=p(n),d=a,v=u["".concat(l,".").concat(d)]||u[d]||m[d]||i;return n?r.createElement(v,o(o({ref:t},c),{},{components:n})):r.createElement(v,o({ref:t},c))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=u;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:a,o[1]=s;for(var p=2;p<i;p++)o[p]=n[p];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},58215:function(e,t,n){n.d(t,{Z:function(){return a}});var r=n(67294);function a(e){var t=e.children,n=e.hidden,a=e.className;return r.createElement("div",{role:"tabpanel",hidden:n,className:a},t)}},9877:function(e,t,n){n.d(t,{Z:function(){return c}});var r=n(87462),a=n(67294),i=n(72389),o=n(65450),s=n(86010),l="tabItem_LplD";function p(e){var t,n,i,p=e.lazy,c=e.block,m=e.defaultValue,u=e.values,d=e.groupId,v=e.className,k=a.Children.map(e.children,(function(e){if((0,a.isValidElement)(e)&&void 0!==e.props.value)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),f=null!=u?u:k.map((function(e){var t=e.props;return{value:t.value,label:t.label,attributes:t.attributes}})),h=(0,o.lx)(f,(function(e,t){return e.value===t.value}));if(h.length>0)throw new Error('Docusaurus error: Duplicate values "'+h.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.');var g=null===m?m:null!=(t=null!=m?m:null==(n=k.find((function(e){return e.props.default})))?void 0:n.props.value)?t:null==(i=k[0])?void 0:i.props.value;if(null!==g&&!f.some((function(e){return e.value===g})))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+g+'" but none of its children has the corresponding value. Available values are: '+f.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");var b=(0,o.UB)(),w=b.tabGroupChoices,N=b.setTabGroupChoices,y=(0,a.useState)(g),x=y[0],C=y[1],M=[],T=(0,o.o5)().blockElementScrollPositionUntilNextRender;if(null!=d){var F=w[d];null!=F&&F!==x&&f.some((function(e){return e.value===F}))&&C(F)}var E=function(e){var t=e.currentTarget,n=M.indexOf(t),r=f[n].value;r!==x&&(T(t),C(r),null!=d&&N(d,r))},S=function(e){var t,n=null;switch(e.key){case"ArrowRight":var r=M.indexOf(e.currentTarget)+1;n=M[r]||M[0];break;case"ArrowLeft":var a=M.indexOf(e.currentTarget)-1;n=M[a]||M[M.length-1]}null==(t=n)||t.focus()};return a.createElement("div",{className:"tabs-container"},a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,s.Z)("tabs",{"tabs--block":c},v)},f.map((function(e){var t=e.value,n=e.label,i=e.attributes;return a.createElement("li",(0,r.Z)({role:"tab",tabIndex:x===t?0:-1,"aria-selected":x===t,key:t,ref:function(e){return M.push(e)},onKeyDown:S,onFocus:E,onClick:E},i,{className:(0,s.Z)("tabs__item",l,null==i?void 0:i.className,{"tabs__item--active":x===t})}),null!=n?n:t)}))),p?(0,a.cloneElement)(k.filter((function(e){return e.props.value===x}))[0],{className:"margin-vert--md"}):a.createElement("div",{className:"margin-vert--md"},k.map((function(e,t){return(0,a.cloneElement)(e,{key:t,hidden:e.props.value!==x})}))))}function c(e){var t=(0,i.Z)();return a.createElement(p,(0,r.Z)({key:String(t)},e))}},39909:function(e,t,n){n.r(t),n.d(t,{assets:function(){return u},contentTitle:function(){return c},default:function(){return k},frontMatter:function(){return p},metadata:function(){return m},toc:function(){return d}});var r=n(87462),a=n(63366),i=(n(67294),n(3905)),o=n(9877),s=n(58215),l=["components"],p={title:"\u4e09\u7ef4\u7a7a\u95f4\u4e2d\u7684\u70b9"},c=void 0,m={unversionedId:"front/3d-space/handbook/vue/points-in-3d",id:"front/3d-space/handbook/vue/points-in-3d",title:"\u4e09\u7ef4\u7a7a\u95f4\u4e2d\u7684\u70b9",description:"\u4e0a\u4e00\u7ae0\u56de\u987e: \u72b6\u6001\u5f55\u5236",source:"@site/docs/front/3d-space/handbook/vue/4.points-in-3d.md",sourceDirName:"front/3d-space/handbook/vue",slug:"/front/3d-space/handbook/vue/points-in-3d",permalink:"/docs/front/3d-space/handbook/vue/points-in-3d",tags:[],version:"current",lastUpdatedBy:"mxy8319",lastUpdatedAt:1654136887,formattedLastUpdatedAt:"2022/6/2",sidebarPosition:4,frontMatter:{title:"\u4e09\u7ef4\u7a7a\u95f4\u4e2d\u7684\u70b9"},sidebar:"\u4e09\u7ef4\u7a7a\u95f4",previous:{title:"\u72b6\u6001\u5f55\u5236",permalink:"/docs/front/3d-space/handbook/vue/recording-state"},next:{title:"\u6253\u6807\u7b7e",permalink:"/docs/front/3d-space/handbook/vue/tagging"}},u={},d=[{value:"\u51c6\u5907\u5de5\u4f5c",id:"\u51c6\u5907\u5de5\u4f5c",level:2},{value:"\u4e8b\u4ef6\u7cfb\u7edf",id:"\u4e8b\u4ef6\u7cfb\u7edf",level:2},{value:"\u5185\u5efa\u4e8b\u4ef6",id:"\u5185\u5efa\u4e8b\u4ef6",level:3},{value:"\u963b\u6b62\u9ed8\u8ba4\u884c\u4e3a",id:"\u963b\u6b62\u9ed8\u8ba4\u884c\u4e3a",level:3},{value:"\u4ece tapGesture \u83b7\u53d6\u5750\u6807",id:"\u4ece-tapgesture-\u83b7\u53d6\u5750\u6807",level:2},{value:"\u5934\u90e8\u6dfb\u52a0\u4f9d\u8d56",id:"\u5934\u90e8\u6dfb\u52a0\u4f9d\u8d56",level:3},{value:"\u7f16\u5199 <strong>MarkController</strong> \u7ec4\u4ef6",id:"\u7f16\u5199-markcontroller-\u7ec4\u4ef6",level:3},{value:"\u4f7f\u7528\u6807\u8bb0\u7ec4\u4ef6",id:"\u4f7f\u7528\u6807\u8bb0\u7ec4\u4ef6",level:3},{value:"\u4e0b\u4e00\u7ae0\u8282\u4f60\u4f1a\u5b66\u5230",id:"\u4e0b\u4e00\u7ae0\u8282\u4f60\u4f1a\u5b66\u5230",level:2}],v={toc:d};function k(e){var t=e.components,p=(0,a.Z)(e,l);return(0,i.kt)("wrapper",(0,r.Z)({},v,p,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},(0,i.kt)("strong",{parentName:"p"},"\u4e0a\u4e00\u7ae0\u56de\u987e: \u72b6\u6001\u5f55\u5236")," ",(0,i.kt)("br",null)),(0,i.kt)("ul",{parentName:"blockquote"},(0,i.kt)("li",{parentName:"ul"},"\u4f60\u4e86\u89e3\u4e86\u5982\u4f55\u901a\u8fc7 ",(0,i.kt)("strong",{parentName:"li"},"State")," \u5b8c\u6210\u64cd\u4f5c\u7684\u5f55\u5236\u548c\u8fd8\u539f\u3002",(0,i.kt)("br",null)),(0,i.kt)("li",{parentName:"ul"},"\u719f\u6089\u5730\u4f7f\u7528 ",(0,i.kt)("strong",{parentName:"li"},"State")," \u76f8\u5173\u7684\u65b9\u6cd5\u548c\u4e8b\u4ef6\u3002"))),(0,i.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"\u672c\u7ae0\u4f60\u53ef\u4ee5\u5b66\u4e60\u5230")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("ul",{parentName:"div"},(0,i.kt)("li",{parentName:"ul"},"\u4e86\u89e3 Five SDK \u7684\u4e8b\u4ef6\u7cfb\u7edf\u3002"),(0,i.kt)("li",{parentName:"ul"},"\u83b7\u53d6\u5230\u70b9\u7684\u4e09\u7ef4\u4f4d\u7f6e\u3002")))),(0,i.kt)("h2",{id:"\u51c6\u5907\u5de5\u4f5c"},"\u51c6\u5907\u5de5\u4f5c"),(0,i.kt)("p",null,"\u6211\u4eec\u65b0\u5efa\u4e00\u4e2a\u76ee\u5f55\uff08",(0,i.kt)("inlineCode",{parentName:"p"},"src/4.points-in-3d"),"\uff09\u4ee5\u53ca\u5bf9\u5e94\u7684 ",(0,i.kt)("strong",{parentName:"p"},"html")," \u6587\u4ef6 \u4ee5\u53ca ",(0,i.kt)("strong",{parentName:"p"},"jsx")," \u6216 ",(0,i.kt)("strong",{parentName:"p"},"tsx")," \u6587\u4ef6\u3002\n\u643a\u5e26\u7740\u4e0a\u4e00\u7ae0\u7684 ",(0,i.kt)("strong",{parentName:"p"},"State")," \u4ee3\u7801\uff0c\u592a\u8fc7\u4e8e\u7e41\u7410\uff0c\u90a3\u6211\u4eec\u4ece ",(0,i.kt)("strong",{parentName:"p"},"\u5c55\u793a\u4e09\u7ef4\u7a7a\u95f4")," \u7ae0\u7684\u5185\u5bb9\u7684\u57fa\u7840\u5f00\u53d1\u3002"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-html",metastring:'title="src/4.points-in-3d/index.html"',title:'"src/4.points-in-3d/index.html"'},'<!DOCTYPE html>\n<html lang="en">\n<head>\n  <meta charset="UTF-8">\n  <link rel="icon" href="data:;base64,iVBORw0KGgo=">\n  <meta name="viewport" content="width=device-width, initial-scale=1.0">\n  <title>\u4e09\u7ef4\u4e2d\u7684\u70b9 | Points in 3d</title>\n  <style>\n    * { margin: 0; padding: 0; }\n    html, body #app { width: 100%; height: 100%; overflow: hidden; }\n  </style>\n</head>\n<body>\n  <div id="app"></div>\n  <script type="module" src="./index"><\/script>\n</body>\n</html>\n')),(0,i.kt)(o.Z,{mdxType:"Tabs"},(0,i.kt)(s.Z,{value:"JavaScript",label:"JavaScript",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js",metastring:'title="src/4.points-in-3d/useWindowDimensions.js"',title:'"src/4.points-in-3d/useWindowDimensions.js"'},'import {ref, onBeforeUnmount} from "vue"\n\nfunction useWindowDimensions() {\n    const width = ref(window.innerWidth);\n    const height = ref(window.innerHeight);\n\n    const listener = () => {\n        width.value = window.innerWidth;\n        height.value = window.innerHeight;\n    }\n\n    window.addEventListener("resize", listener, false)\n    onBeforeUnmount(() => {\n        window.removeEventListener("resize", listener, false)\n    })\n    return { width , height }\n}\nexport { useWindowDimensions }\n')),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-vue",metastring:'title="src/4.points-in-3d/ModeController.vue"',title:'"src/4.points-in-3d/ModeController.vue"'},'<template>\n    <nav class="navbar fixed-bottom navbar-light bg-light">\n        <div class="container-fluid justify-content-center">\n            <div class="btn-group">\n                <button :class="state.mode == \'Panorama\' ? \'btn btn-primary active\' : \'btn btn-primary\'" @click="() => setState({mode: Five.Mode.Panorama})">\u5168\u666f\u6f2b\u6e38</button>\n                <button :class="state.mode == \'Panorama\' ? \'btn btn-primary\' : \'btn btn-primary active\'" @click="() => setState({mode: Five.Mode.Floorplan}) ">\u7a7a\u95f4\u603b\u89c8</button>\n           </div>\n        </div>\n  </nav>\n</template>\n\n<script setup>\n\nimport { useFiveCurrentState } from "@realsee/five/vue";\nimport { Five } from "@realsee/five";\n\nconst [state, setState] = useFiveCurrentState();\n\n<\/script>\n')),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-vue",metastring:'title="src/4.points-in-3d/App.vue"',title:'"src/4.points-in-3d/App.vue"'},'<template>\n    <FiveProvider :work="work">\n        <FiveCanvas :width="width" :height="height" />\n        <ModeController />\n    </FiveProvider>\n</template>\n\n<script setup>\n\nimport { FiveProvider, FiveCanvas } from "@realsee/five/vue";\nimport { parseWork } from "@realsee/five";\nimport { ref } from "vue";\nimport { useWindowDimensions } from "./useWindowDimensions";\nimport ModeController from "./ModeController.vue";\n\nconst work = ref();\nconst workURL = "https://vrlab-public.ljcdn.com/release/static/image/release/five/work-sample/07bdc58f413bc5494f05c7cbb5cbdce4/work.json";\n\nfetch(workURL).then(response => response.text()).then(text => work.value = parseWork(text));\nconst { width, height } = useWindowDimensions();\n<\/script>\n')),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js",metastring:'title="src/4.points-in-3d/index.js"',title:'"src/4.points-in-3d/index.js"'},"import { createApp, h } from 'vue'\nimport App from \"./App.vue\"\n\ncreateApp(App).mount('#app')\n"))),(0,i.kt)(s.Z,{value:"TypeScript",label:"TypeScript",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts",metastring:'title="src/4.points-in-3d/useWindowDimensions.ts"',title:'"src/4.points-in-3d/useWindowDimensions.ts"'},'import {ref, onBeforeUnmount} from "vue"\n\nfunction useWindowDimensions() {\n    const width = ref<number>(window.innerWidth);\n    const height = ref<number>(window.innerHeight);\n\n    const listener = () => {\n        width.value = window.innerWidth;\n        height.value = window.innerHeight;\n    }\n\n    window.addEventListener("resize", listener, false)\n    onBeforeUnmount(() => {\n        window.removeEventListener("resize", listener, false)\n    })\n    return { width , height }\n}\nexport { useWindowDimensions }\n')),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-vue",metastring:'title="src/4.points-in-3d/ModeController.vue"',title:'"src/4.points-in-3d/ModeController.vue"'},'<template>\n    <nav class="navbar fixed-bottom navbar-light bg-light">\n        <div class="container-fluid justify-content-center">\n            <div class="btn-group">\n                <button :class="state.mode == \'Panorama\' ? \'btn btn-primary active\' : \'btn btn-primary\'" @click="() => setState({mode: Five.Mode.Panorama})">\u5168\u666f\u6f2b\u6e38</button>\n                <button :class="state.mode == \'Panorama\' ? \'btn btn-primary\' : \'btn btn-primary active\'" @click="() => setState({mode: Five.Mode.Floorplan}) ">\u7a7a\u95f4\u603b\u89c8</button>\n           </div>\n        </div>\n  </nav>\n</template>\n\n<script setup lang="ts">\n\nimport { useFiveCurrentState } from "@realsee/five/vue";\nimport { Five } from "@realsee/five";\n\nconst [state, setState] = useFiveCurrentState();\n\n<\/script>\n')),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-vue",metastring:'title="src/4.points-in-3d/App.vue"',title:'"src/4.points-in-3d/App.vue"'},'<template>\n    <FiveProvider :work="work">\n        <FiveCanvas :width="width" :height="height" />\n        <ModeController />\n    </FiveProvider>\n</template>\n\n<script setup lang="ts">\n\nimport { FiveProvider, FiveCanvas } from "@realsee/five/vue";\nimport { parseWork } from "@realsee/five";\nimport { ref } from "vue";\nimport { useWindowDimensions } from "./useWindowDimensions";\nimport ModeController from "./ModeController.vue";\n\nconst work = ref();\nconst workURL = "https://vrlab-public.ljcdn.com/release/static/image/release/five/work-sample/07bdc58f413bc5494f05c7cbb5cbdce4/work.json";\n\nfetch(workURL).then(response => response.text()).then(text => work.value = parseWork(text));\nconst { width, height } = useWindowDimensions();\n<\/script>\n')),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts",metastring:'title="src/4.points-in-3d/index.ts"',title:'"src/4.points-in-3d/index.ts"'},"import { createApp, h } from 'vue'\nimport App from \"./App.vue\"\n\ncreateApp(App).mount('#app')\n")))),(0,i.kt)("p",null,"\u542f\u52a8\u670d\u52a1 ",(0,i.kt)("inlineCode",{parentName:"p"},"npm run dev"),'\u3002 \u5e76\u8df3\u8f6c\u5230\u5f53\u524d\u9875\u9762 "http://localhost:3000/src/4.points-in-3d"\u3002'),(0,i.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"\u8bf7\u67e5\u770b\u4f60\u7684\u63a7\u5236\u53f0\uff0c\u7aef\u53e3\u53f7\u4f1a\u56e0\u4e3a\u4f60\u7684\u914d\u7f6e\u4ee5\u53ca\u5f53\u524d\u7aef\u53e3\u5360\u7528\u60c5\u51b5\u53d8\u66f4\uff0c\u8bf7\u5df2\u63a7\u5236\u53f0\u8f93\u51fa\u7684\u4e3a\u51c6\u3002\n\u5982\u679c\u4f60\u4f7f\u7528\u5176\u4ed6\u5f00\u53d1\u6784\u5efa\u5de5\u5177\uff0c\u8bf7\u6309\u7167\u81ea\u5df1\u7684\u5f00\u53d1\u6784\u5efa\u5de5\u5177\u7684\u8981\u6c42\u542f\u52a8\u670d\u52a1\u3002"))),(0,i.kt)("h2",{id:"\u4e8b\u4ef6\u7cfb\u7edf"},"\u4e8b\u4ef6\u7cfb\u7edf"),(0,i.kt)("p",null,"\u5728\u5c4f\u5e55\u4e0a\u70b9\u51fb\u65f6\uff0c",(0,i.kt)("strong",{parentName:"p"},"five SDK")," \u7684\u9ed8\u8ba4\u884c\u4e3a\u662f\u9009\u62e9\u70b9\u51fb\u4f4d\u7f6e\u9644\u8fd1\u6700\u5408\u9002\u7684 ",(0,i.kt)("strong",{parentName:"p"},"\u89c2\u5bdf\u70b9(observer)")," \u79fb\u52a8\u8fc7\u53bb\u3002\u5927\u90e8\u5206\u7528\u6237\u7684\u52a8\u4f5c\u90fd\u662f\u5982\u6b64\uff0c\u5c31\u597d\u6bd4\u6d4f\u89c8\u5668\u5bf9\u4e8e ",(0,i.kt)("strong",{parentName:"p"},"A \u6807\u7b7e")," \u7684\u5904\u7406\u903b\u8f91\u5927\u591a\u90fd\u662f\u94fe\u63a5\u8df3\u8f6c\u3002\u4e0a\u8ff0\u5c31\u662f ",(0,i.kt)("strong",{parentName:"p"},"five SDK")," \u7684\u5185\u5efa ",(0,i.kt)("strong",{parentName:"p"},"tapGesture"),"\u4e8b\u4ef6\u3002"),(0,i.kt)("h3",{id:"\u5185\u5efa\u4e8b\u4ef6"},"\u5185\u5efa\u4e8b\u4ef6"),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"five SDK")," \u5185\u5efa\u7684\u4e8b\u4ef6\u6709\u5982\u4e0b:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"tapGesture"),": \u9f20\u6807\u5de6\u952e\u70b9\u51fb\u6216\u8005\u624b\u6307\u70b9\u51fb\u3002\u9ed8\u8ba4\u884c\u4e3a\u662f\u70b9\u4f4d\u79fb\u52a8\uff1b"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"panGesture"),": \u9f20\u6807\u6309\u4f4f\u4e00\u680b\u6216\u8005\u624b\u6307\u5728\u5c4f\u5e55\u4e0a\u62d6\u62fd\u79fb\u52a8\u3002\u76f8\u673a\u65cb\u8f6c\uff08Topview\u4e0b\u662f\u76f8\u673a\u5e73\u79fb\uff09\uff1b"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"pinchGesture"),": \u624b\u6307\u53cc\u6307\u505a\u634f\u7684\u624b\u52bf\u3002\u9ed8\u8ba4\u884c\u4e3a\u662f\u4fee\u6539\u76f8\u673a\u53ef\u89c6\u89d2\u5ea6\uff1b"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"mouseWheel"),": \u9f20\u6807\u6eda\u8f6e\u3002\u9ed8\u8ba4\u884c\u4e3a\u662f\u4fee\u6539\u76f8\u673a\u53ef\u89c6\u89d2\u5ea6\uff1b"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"gesture"),": \u4e0a\u8ff0\u7684\u4efb\u610f\u4e8b\u4ef6\u3002")),(0,i.kt)("h3",{id:"\u963b\u6b62\u9ed8\u8ba4\u884c\u4e3a"},"\u963b\u6b62\u9ed8\u8ba4\u884c\u4e3a"),(0,i.kt)("p",null,"\u6240\u6709\u4e8b\u4ef6\u548c \u6d4f\u89c8\u5668\u5bf9\u4e8e ",(0,i.kt)("strong",{parentName:"p"},"A \u6807\u7b7e")," \u7684\u5904\u7406\u903b\u8f91 \u4e00\u6837\uff0c\u90fd\u53ef\u4ee5\u963b\u6b62\u9ed8\u8ba4\u4e8b\u4ef6\uff0c\u4f60\u53ea\u9700\u8981\u76d1\u542c ",(0,i.kt)("inlineCode",{parentName:"p"},"wants")," \u5f00\u5934\u7684\u4e8b\u4ef6\uff0c\u5728\u56de\u8c03\u51fd\u6570\u4e2d ",(0,i.kt)("inlineCode",{parentName:"p"},"return false")," \u5373\u53ef\u3002\u6bd4\u5982\u60f3\u963b\u6b62 ",(0,i.kt)("strong",{parentName:"p"},"tapGesture")," \u7684\u9ed8\u8ba4\u70b9\u4f4d\u79fb\u52a8\u884c\u4e3a\u3002\u53ef\u4ee5\u505a\u5982\u4e0b\u64cd\u4f5c\u3002"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},'useFiveEventCallback("wantsTapGesture", () => {\n  // highlight-start\n  // \u963b\u6b62 tapGesture \u89e6\u53d1\n  return false;\n  // highlight-end\n});\n')),(0,i.kt)("p",null,"\u5177\u4f53\u6bcf\u4e2a\u4e8b\u4ef6\u7684 API \u53ef\u4ee5\u67e5\u770b\u8be6\u7ec6\u6587\u6863"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://unpkg.com/@realsee/five/docs/interfaces/five.EventCallback.html#tapGesture"},"tapGesture")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://unpkg.com/@realsee/five/docs/interfaces/five.EventCallback.html#panGesture"},"panGesture")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://unpkg.com/@realsee/five/docs/interfaces/five.EventCallback.html#pinchGesture"},"pinchGesture")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://unpkg.com/@realsee/five/docs/interfaces/five.EventCallback.html#mouseWheel"},"mouseWheel")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://unpkg.com/@realsee/five/docs/interfaces/five.EventCallback.html#gesture"},"gesture"))),(0,i.kt)("h2",{id:"\u4ece-tapgesture-\u83b7\u53d6\u5750\u6807"},"\u4ece tapGesture \u83b7\u53d6\u5750\u6807"),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"\u6211\u4eec\u5236\u4f5c\u4e00\u4e2a\u7b80\u5355\u529f\u80fd\uff0c\u7528\u4e8e\u6807\u8bb0\u5728\u753b\u5e03\u4e0a\u70b9\u51fb\u7684\u4e09\u7ef4\u4f4d\u7f6e\u3002\n\u4f46\u662f\u4e3a\u4e86\u548c ",(0,i.kt)("strong",{parentName:"p"},"\u70b9\u4f4d\u79fb\u52a8")," \u529f\u80fd\u4e0d\u51b2\u7a81\uff0c\u6211\u4eec\u7528\u4e00\u4e2a ",(0,i.kt)("inlineCode",{parentName:"p"},"Switch")," \u6309\u94ae\u6765\u63a7\u5236\u6807\u8bb0\u72b6\u6001\u662f\u5426\u5f00\u542f\u3002")),(0,i.kt)("h3",{id:"\u5934\u90e8\u6dfb\u52a0\u4f9d\u8d56"},"\u5934\u90e8\u6dfb\u52a0\u4f9d\u8d56"),(0,i.kt)("p",null,"\u672c\u7ae0\u9700\u8981\u4ecb\u7ecd\u4e00\u4e0b ",(0,i.kt)("a",{parentName:"p",href:"http://threejs.org"},"three.js")," \u4e86\u3002",(0,i.kt)("strong",{parentName:"p"},"three.js")," \u662f\u4e00\u4e2a\u4e09\u7ef4\u56fe\u5f62\u5e93\uff0c",(0,i.kt)("strong",{parentName:"p"},"Five SDK")," \u4f7f\u7528 ",(0,i.kt)("strong",{parentName:"p"},"three.js")," \u7684\u6570\u5b66\u5e93\u548c\u6e32\u67d3\u5668\u3002\u672c\u7ae0\u6d89\u53ca ",(0,i.kt)("strong",{parentName:"p"},"three.js")," \u6709\u4e24\u4e2a\u5185\u5bb9\uff0c\u5728\u8fd9\u91cc\u505a\u4e00\u4e9b\u8bf4\u660e\uff0c\u4f60\u4e0d\u5fc5\u5b8c\u5168\u4e86\u89e3 ",(0,i.kt)("strong",{parentName:"p"},"three.js"),", \u6211\u505a\u4e00\u4e9b\u8bf4\u660e\u4f60\u5c31\u53ef\u4ee5\u7406\u89e3\u3002"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://threejs.org/docs/index.html#api/zh/math/Vector3"},(0,i.kt)("inlineCode",{parentName:"a"},"THREE.Vector3")),": \u4f60\u53ef\u4ee5\u5c31\u8ba4\u4e3a\u662f\u4e00\u4e2a ",(0,i.kt)("inlineCode",{parentName:"li"},"{ x: number, y: number, z: number }")," \u7684\u7ed3\u6784\u4f53\uff0c\u5e76\u4e14\u591a\u52a0\u4e86\u4e00\u4e9b\u6570\u5b66\u65b9\u6cd5\uff08\u672c\u6b21\u4e0d\u4f1a\u7528\u5230\u6570\u5b66\u65b9\u6cd5\uff0c\u53ea\u662f\u8bb0\u5f55xyz\uff09"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://threejs.org/docs/index.html#api/zh/core/Raycaster"},(0,i.kt)("inlineCode",{parentName:"a"},"THREE.Raycaster")),": \u5149\u7ebf\u6295\u5c04\u7c7b\u3002\u4f60\u53ef\u4ee5\u7b80\u5355\u7684\u7406\u89e3\u4e3a\u5c4f\u5e55\u4e0a\u7684\u4e00\u4e2a\u70b9\u5bf9\u5e94\u5230\u4e09\u7ef4\u7a7a\u95f4\u662f\u4e00\u6761\u5c04\u7ebf\u3002")),(0,i.kt)("p",null,(0,i.kt)("img",{loading:"lazy",alt:"REYCASTER",src:n(72096).Z,width:"850",height:"415"}),";"),(0,i.kt)("p",null,"\u5c04\u7ebf\u6709\u5f88\u591a\u4f5c\u7528\uff0c\u6bd4\u5982\uff1a\u901a\u8fc7\u5c04\u7ebf\u548c\u6a21\u578b\u4e4b\u524d\u7684\u76f8\u4ea4\u6027\u68c0\u6d4b\uff0c\u5c31\u53ef\u4ee5\u5224\u65ad\u662f\u5426\u5bf9\u8c61\u88ab\u9009\u4e2d\u3002"),(0,i.kt)("h3",{id:"\u7f16\u5199-markcontroller-\u7ec4\u4ef6"},"\u7f16\u5199 ",(0,i.kt)("strong",{parentName:"h3"},"MarkController")," \u7ec4\u4ef6"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"\u6dfb\u52a0\u4e00\u4e2a ",(0,i.kt)("strong",{parentName:"li"},"MarkController")," \u6587\u4ef6\uff0c\u7528\u4e8e\u7f16\u5199\u7ec4\u4ef6"),(0,i.kt)("li",{parentName:"ol"},"\u6211\u4eec\u901a\u8fc7 ",(0,i.kt)("strong",{parentName:"li"},"active")," Vue Ref \u54cd\u5e94\u6027API \u7ed3\u5408 v-model \u6765\u63a7\u5236\u5f53\u524d\u5e94\u7528\u662f\u5426\u5728\u6807\u8bb0\u7684\u6a21\u5f0f\u4e0b"),(0,i.kt)("li",{parentName:"ol"},"\u901a\u8fc7 ",(0,i.kt)("inlineCode",{parentName:"li"},"tapGesture")," \u7b2c\u4e00\u4e2a\u53c2\u6570\u662f ",(0,i.kt)("inlineCode",{parentName:"li"},"raycaster"),"\uff0c\u901a\u8fc7 ",(0,i.kt)("inlineCode",{parentName:"li"},"modelIntersectRaycaster")," \u53ef\u4ee5\u83b7\u53d6\u5230\u7126\u70b9\u4fe1\u606f ",(0,i.kt)("inlineCode",{parentName:"li"},"intersect"),"\uff0c",(0,i.kt)("inlineCode",{parentName:"li"},"intersect.point")," \u5c31\u662f\u4ea4\u70b9\u7684\u5750\u6807"),(0,i.kt)("li",{parentName:"ol"},"\u901a\u8fc7 ",(0,i.kt)("inlineCode",{parentName:"li"},"marks")," Vue Ref \u6765\u5b58\u50a8\u6240\u6709\u4ea4\u70b9\uff0c\u5e76\u4e14\u5b9e\u73b0\u6536\u96c6\u548c\u5220\u9664\u3002")),(0,i.kt)(o.Z,{mdxType:"Tabs"},(0,i.kt)(s.Z,{value:"JavaScript",label:"JavaScript",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-vue",metastring:'title="src/4.points-in-3d/MarkController.vue"',title:'"src/4.points-in-3d/MarkController.vue"'},'<template>\n    <div class="card position-fixed m-2 top-0 start-0">\n        <div class="form-check form-switch m-2">\n        <input class="form-check-input" type="checkbox" v-model="isSwitch">\n        <label class="form-check-label" for="flexSwitchCheckDefault">\u6807\u8bb0</label>\n        </div>\n        <div class="js-marks" v-if="marks.length > 0">\n            <p v-for="(v3, index) in marks" calss="badge bg-primary d-block m-2">\n                <span>x={{v3.x.toFixed(2)}} y={{v3.y.toFixed(2)}} z={{v3.z.toFixed(2)}}</span>\n                <i class="bi bi-x-circle ms-2" @click="() => {removeMark(index)}"></i>\n            </p>\n        </div>\n    </div>\n</template>\n<script setup lang="ts">\n    import { useFiveEventCallback, useFiveModelIntersectRaycaster } from \'@realsee/five/vue\';\n    import { Raycaster } from \'three\';\n    import { ref } from \'vue\';\n    const marks = ref([]);\n    const isSwitch = ref(false);\n    const raycasterRef = ref(new Raycaster());\n    const fiveModelIntersectRaycaster = useFiveModelIntersectRaycaster();\n    const intersect = fiveModelIntersectRaycaster(raycasterRef);\n\n    useFiveEventCallback(\'wantsTapGesture\', (raycaster, tapPosition) => {\n        if(isSwitch.value) {\n            raycasterRef.value = raycaster;\n            if(intersect.value[0]?.point) marks.value.push(intersect.value[0]?.point);\n            return false;\n        }\n    })\n    \n    const removeMark = (index) => {\n        marks.value.splice(index, 1);\n    }\n\n<\/script>\n\n'))),(0,i.kt)(s.Z,{value:"TypeScript",label:"TypeScript",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-vue",metastring:'title="src/4.points-in-3d/MarkController.vue"',title:'"src/4.points-in-3d/MarkController.vue"'},'<template>\n    <div class="card position-fixed m-2 top-0 start-0">\n        <div class="form-check form-switch m-2">\n        <input class="form-check-input" type="checkbox" v-model="isSwitch">\n        <label class="form-check-label" for="flexSwitchCheckDefault">\u6807\u8bb0</label>\n        </div>\n        <div class="js-marks" v-if="marks.length > 0">\n            <p v-for="(v3, index) in marks" calss="badge bg-primary d-block m-2">\n                <span>x={{v3.x.toFixed(2)}} y={{v3.y.toFixed(2)}} z={{v3.z.toFixed(2)}}</span>\n                <i class="bi bi-x-circle ms-2" @click="() => {removeMark(index)}"></i>\n            </p>\n        </div>\n    </div>\n</template>\n<script setup lang="ts">\n    import { useFiveEventCallback, useFiveModelIntersectRaycaster } from \'@realsee/five/vue\';\n    import { Raycaster } from \'three\';\n    import { ref } from \'vue\';\n    const marks = ref<THREE.Vector3[]>([]);\n    const isSwitch = ref(false);\n    const raycasterRef = ref<Raycaster>(new Raycaster());\n    const fiveModelIntersectRaycaster = useFiveModelIntersectRaycaster();\n    const intersect = fiveModelIntersectRaycaster(raycasterRef);\n\n    useFiveEventCallback(\'wantsTapGesture\', (raycaster, tapPosition) => {\n        if(isSwitch.value) {\n            raycasterRef.value = raycaster;\n            if(intersect.value[0]?.point) marks.value.push(intersect.value[0]?.point);\n            return false;\n        }\n    })\n    \n    const removeMark = (index: number) => {\n        marks.value.splice(index, 1);\n    }\n\n<\/script>\n\n')))),(0,i.kt)("h3",{id:"\u4f7f\u7528\u6807\u8bb0\u7ec4\u4ef6"},"\u4f7f\u7528\u6807\u8bb0\u7ec4\u4ef6"),(0,i.kt)("p",null,"\u63d2\u5165\u5230 ",(0,i.kt)("strong",{parentName:"p"},"App")," \u6587\u4ef6\u7684 ",(0,i.kt)("strong",{parentName:"p"},"FiveProvider")," \u4e2d"),(0,i.kt)(o.Z,{mdxType:"Tabs"},(0,i.kt)(s.Z,{value:"JavaScript",label:"JavaScript",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-vue",metastring:'title="src/4.points-in-3d/App.vue"',title:'"src/4.points-in-3d/App.vue"'},'<template>\n    <FiveProvider :work="work">\n        <FiveCanvas :width="width" :height="height" />\n        <ModeController />\n        <MarkController />\n    </FiveProvider>\n</template>\n\n<script setup>\n\nimport { FiveProvider, FiveCanvas } from "@realsee/five/vue";\nimport { parseWork } from "@realsee/five"; \nimport { ref } from "vue";\nimport { useWindowDimensions } from "./useWindowDimensions";\nimport ModeController from "./ModeController.vue";\nimport MarkController from "./MarkController.vue";\n\nconst work = ref();\nconst workURL = "https://vrlab-public.ljcdn.com/release/static/image/release/five/work-sample/07bdc58f413bc5494f05c7cbb5cbdce4/work.json";\n\nfetch(workURL).then(response => response.text()).then(text => work.value = parseWork(text));\nconst { width, height } = useWindowDimensions();\n<\/script>\n\n'))),(0,i.kt)(s.Z,{value:"TypeScript",label:"TypeScript",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-vue",metastring:'title="src/4.points-in-3d/App.vue"',title:'"src/4.points-in-3d/App.vue"'},'<template>\n    <FiveProvider :work="work">\n        <FiveCanvas :width="width" :height="height" />\n        <ModeController />\n        <MarkController />\n    </FiveProvider>\n</template>\n\n<script setup lang="ts">\n\nimport { FiveProvider, FiveCanvas } from "@realsee/five/vue";\nimport { parseWork, Work } from "@realsee/five"; \nimport { ref } from "vue";\nimport { useWindowDimensions } from "./useWindowDimensions";\nimport ModeController from "./ModeController.vue";\nimport MarkController from "./MarkController.vue";\n\nconst work = ref<Work>();\nconst workURL = "https://vrlab-public.ljcdn.com/release/static/image/release/five/work-sample/07bdc58f413bc5494f05c7cbb5cbdce4/work.json";\n\nfetch(workURL).then(response => response.text()).then(text => work.value = parseWork(text));\nconst { width, height } = useWindowDimensions();\n<\/script>\n\n')))),(0,i.kt)("p",null,"\u56de\u5230\u4f60\u7684\u6d4f\u89c8\u5668\u67e5\u770b\uff0c\u4f1a\u53d1\u73b0\u4f60\u7684\u9875\u9762\u5de6\u4e0a\u89d2\u51fa\u73b0\u4e00\u4e2a\u9009\u62e9\u5f00\u5173\u3002\u6253\u5f00\u5f00\u5173\uff0c\u70b9\u51fb\u753b\u5e03\u5185\u5bb9\uff0c\u4f1a\u8f93\u51fa\u70b9\u51fb\u4f4d\u7f6e\u7684\u5750\u6807\u3002"),(0,i.kt)("p",null,"\u771f\u68d2\uff0c\u4e00\u4e0b\u5b50\u5c31\u7406\u89e3\u548c\u83b7\u53d6\u5230\u4e86\u4e09\u7ef4\u5750\u6807\ud83e\udd73 \u3002"),(0,i.kt)("h2",{id:"\u4e0b\u4e00\u7ae0\u8282\u4f60\u4f1a\u5b66\u5230"},"\u4e0b\u4e00\u7ae0\u8282\u4f60\u4f1a\u5b66\u5230"),(0,i.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"\u4e0b\u4e00\u7ae0\u6211\u4eec\u5c06\u5b9e\u73b0\u4e00\u4e2a\u7a7a\u95f4\u6807\u7b7e\u529f\u80fd\uff0c\u4e0d\u8981\u9519\u8fc7\u54e6\u3002")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"})))}k.isMDXComponent=!0},72096:function(e,t,n){t.Z=n.p+"assets/images/raycaster-c3dcc64a540402b16231e021c13f20ca.png"}}]);