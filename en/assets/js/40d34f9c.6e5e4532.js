"use strict";(self.webpackChunkrealsee_developer_github_com=self.webpackChunkrealsee_developer_github_com||[]).push([[4465],{3905:(e,n,t)=>{t.d(n,{Zo:()=>u,kt:()=>g});var i=t(67294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function l(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);n&&(i=i.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,i)}return t}function a(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?l(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function o(e,n){if(null==e)return{};var t,i,r=function(e,n){if(null==e)return{};var t,i,r={},l=Object.keys(e);for(i=0;i<l.length;i++)t=l[i],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(i=0;i<l.length;i++)t=l[i],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var d=i.createContext({}),p=function(e){var n=i.useContext(d),t=n;return e&&(t="function"==typeof e?e(n):a(a({},n),e)),t},u=function(e){var n=p(e.components);return i.createElement(d.Provider,{value:n},e.children)},c="mdxType",s={inlineCode:"code",wrapper:function(e){var n=e.children;return i.createElement(i.Fragment,{},n)}},m=i.forwardRef((function(e,n){var t=e.components,r=e.mdxType,l=e.originalType,d=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),c=p(t),m=r,g=c["".concat(d,".").concat(m)]||c[m]||s[m]||l;return t?i.createElement(g,a(a({ref:n},u),{},{components:t})):i.createElement(g,a({ref:n},u))}));function g(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var l=t.length,a=new Array(l);a[0]=m;var o={};for(var d in n)hasOwnProperty.call(n,d)&&(o[d]=n[d]);o.originalType=e,o[c]="string"==typeof e?e:r,a[1]=o;for(var p=2;p<l;p++)a[p]=t[p];return i.createElement.apply(null,a)}return i.createElement.apply(null,t)}m.displayName="MDXCreateElement"},82752:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>d,contentTitle:()=>a,default:()=>s,frontMatter:()=>l,metadata:()=>o,toc:()=>p});var i=t(87462),r=(t(67294),t(3905));const l={title:'Model "Widget"'},a=void 0,o={unversionedId:"front/3d-space/advanced/dnalogel/ModelViewPlugin",id:"front/3d-space/advanced/dnalogel/ModelViewPlugin",title:'Model "Widget"',description:"ModelViewPlugins",source:"@site/i18n/en/docusaurus-plugin-content-docs/current/front/3d-space/advanced/dnalogel/ModelViewPlugin.md",sourceDirName:"front/3d-space/advanced/dnalogel",slug:"/front/3d-space/advanced/dnalogel/ModelViewPlugin",permalink:"/en/docs/front/3d-space/advanced/dnalogel/ModelViewPlugin",draft:!1,tags:[],version:"current",lastUpdatedBy:"lichengjie003",lastUpdatedAt:1684216246,formattedLastUpdatedAt:"May 16, 2023",frontMatter:{title:'Model "Widget"'},sidebar:"\u4e09\u7ef4\u7a7a\u95f4",previous:{title:"Introduction to VR View Room Plugin",permalink:"/en/docs/front/3d-space/advanced/dnalogel/intro"},next:{title:"Instructions",permalink:"/en/docs/front/3d-space/advanced/dnalogel/floorplan/intro"}},d={},p=[{value:"<strong>ModelViewPlugins</strong>",id:"modelviewplugins",level:2},{value:"Example effect",id:"example-effect",level:2},{value:"Install reference",id:"install-reference",level:2},{value:"Development Guides",id:"development-guides",level:2},{value:"Initialize",id:"initialize",level:3},{value:"React initialization",id:"react-initialization",level:3},{value:"Vue initialization",id:"vue-initialization",level:3},{value:"Node Mount",id:"node-mount",level:3},{value:"demo source reference",id:"demo-source-reference",level:2}],u={toc:p},c="wrapper";function s(e){let{components:n,...t}=e;return(0,r.kt)(c,(0,i.Z)({},u,t,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"modelviewplugins"},(0,r.kt)("strong",{parentName:"h2"},"ModelViewPlugins")),(0,r.kt)("p",null,'The model "Small Window" renders ',(0,r.kt)("strong",{parentName:"p"},"Five")," 's",(0,r.kt)("strong",{parentName:"p"},"Space Overview Mode")," ",(0,r.kt)("inlineCode",{parentName:"p"},"Five.Mode.Floorplan"),' into a DOM node in the form of "Small Window", which can achieve the coexistence state of the panorama and the model.'),(0,r.kt)("h2",{id:"example-effect"},"Example effect"),(0,r.kt)("div",{className:"docs-vr-normal"},(0,r.kt)("iframe",{className:"docs-vr-iframe",src:"https://realsee-developer.github.io/dnalogel/src/ModelViewPlugin/index.html"})),(0,r.kt)("h2",{id:"install-reference"},"Install reference"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx"},'import {  ModelViewPlugin } from "@realsee/dnalogel"\n')),(0,r.kt)("h2",{id:"development-guides"},"Development Guides"),(0,r.kt)("h3",{id:"initialize"},"Initialize"),(0,r.kt)("p",null,"When initializing the ",(0,r.kt)("inlineCode",{parentName:"p"},"Five")," instance, configure ",(0,r.kt)("inlineCode",{parentName:"p"},"ModelViewPlugin")," in the initialization plug-in parameters."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"import { Five } from '@realsee/five'\nimport { ModelViewPlugin } from \"@realsee/dnalogel\";\n\nconst five = new Five({\n    plugins: [\n        [\n            ModelViewPlugin,\n            'modelViewPlugin', // custom plugin name\n            {\n                // parameter configuration\n            }\n        ]\n    ]\n})\n")),(0,r.kt)("h3",{id:"react-initialization"},"React initialization"),(0,r.kt)("p",null,"When creating ",(0,r.kt)("inlineCode",{parentName:"p"},"FiveProvider")," , configure ",(0,r.kt)("inlineCode",{parentName:"p"},"ModelViewPlugin")," in the initialization plug-in parameters."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},'import { ModelViewPlugin } from "@realsee/dnalogel";\nimport { createFiveProvider, FiveCanvas } from "@realsee/five/react";\n\nconst FiveProvider = createFiveProvider({\n    plugins: [\n        [\n            ModelViewPlugin,\n            \'modelViewPlugin\', // custom plugin name\n            {\n                // parameter configuration\n            }\n        ]\n    ]\n});\n')),(0,r.kt)("h3",{id:"vue-initialization"},"Vue initialization"),(0,r.kt)("p",null,"When creating ",(0,r.kt)("inlineCode",{parentName:"p"},"FiveProvider")," , configure ",(0,r.kt)("inlineCode",{parentName:"p"},"ModelViewPlugin")," in the initialization plug-in parameters."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-vue"},'<template>\n  <FiveProvider :fiveInitArgs="fiveInitArgs">\n  </FiveProvider>\n</template>\n<script setup>\nimport ModelViewPlugin from "@realsee/dnalogel/libs/ModelViewPlugin"\nimport { FiveProvider, FiveCanvas } from "@realsee/five/vue";\nconst fiveInitArgs = {\n    plugins: [\n        [\n            ModelViewPlugin,\n            \'modelViewPlugin\', // Custom plugin name\n            {\n                // Parameter configuration\n            }\n        ]\n    ]\n}\n<\/script>\n')),(0,r.kt)("h3",{id:"node-mount"},"Node Mount"),(0,r.kt)("p",null,"Obtain the reference of the ",(0,r.kt)("inlineCode",{parentName:"p"},"ModelViewPlugin")," instance through",(0,r.kt)("inlineCode",{parentName:"p"},"five.plugins.modelViewPlugin"),".This plugin provides two methods\uff1a"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"appendTo(element: HTMLElement, size?: { width?: number; height?: number }): void"),": mount rendering content to related ",(0,r.kt)("inlineCode",{parentName:"li"},"DOM")," node"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"refresh(size?: { width?: number; height?: number }): void")," : Force refresh, rerender once.")),(0,r.kt)("p",null,"Mount DOM nodes via ",(0,r.kt)("inlineCode",{parentName:"p"},"appendTo")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"five.plugins.modelViewPlugin.appendTo(wrapperElement)\n\n// refresh method use sample\n// five.plugins.modelViewPlugin.refresh ({ width: 160, height: 180 })\n")),(0,r.kt)("h2",{id:"demo-source-reference"},"demo source reference"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/realsee-developer/dnalogel/tree/main/examples/src"},"demo source reference")))}s.isMDXComponent=!0}}]);