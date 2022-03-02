"use strict";(self.webpackChunkrealsee_developer_github_com=self.webpackChunkrealsee_developer_github_com||[]).push([[3750],{87809:function(e,n,t){t.r(n),t.d(n,{frontMatter:function(){return a},contentTitle:function(){return d},metadata:function(){return p},toc:function(){return c},default:function(){return s}});var r=t(83117),l=t(80102),o=(t(67294),t(3905)),i=["components"],a={title:'\u6a21\u578b"\u5c0f\u7a97"'},d=void 0,p={unversionedId:"front/3d-space/advanced/dnalogel/ModelViewPlugin",id:"front/3d-space/advanced/dnalogel/ModelViewPlugin",title:'\u6a21\u578b"\u5c0f\u7a97"',description:"ModelViewPlugin",source:"@site/docs/front/3d-space/advanced/dnalogel/ModelViewPlugin.md",sourceDirName:"front/3d-space/advanced/dnalogel",slug:"/front/3d-space/advanced/dnalogel/ModelViewPlugin",permalink:"/docs/front/3d-space/advanced/dnalogel/ModelViewPlugin",editUrl:"https://github.com/realsee-developer/realsee-developer.github.com/docs/front/3d-space/advanced/dnalogel/ModelViewPlugin.md",tags:[],version:"current",lastUpdatedBy:"leesgithub2019",lastUpdatedAt:1646223108,formattedLastUpdatedAt:"3/2/2022",frontMatter:{title:'\u6a21\u578b"\u5c0f\u7a97"'},sidebar:"\u4e09\u7ef4\u7a7a\u95f4",previous:{title:"\u6253\u6807\u7b7e",permalink:"/docs/front/3d-space/handbook/react-hooks/tagging"},next:{title:"\u4f7f\u7528\u8bf4\u660e",permalink:"/docs/front/3d-space/advanced/dnalogel/floorplan/intro"}},c=[{value:"<strong>ModelViewPlugin</strong>",id:"modelviewplugin",children:[],level:2},{value:"\u793a\u4f8b\u6548\u679c",id:"\u793a\u4f8b\u6548\u679c",children:[],level:2},{value:"\u5b89\u88c5\u5f15\u7528",id:"\u5b89\u88c5\u5f15\u7528",children:[],level:2},{value:"\u5f00\u53d1\u6307\u5357",id:"\u5f00\u53d1\u6307\u5357",children:[{value:"\u521d\u59cb\u5316",id:"\u521d\u59cb\u5316",children:[],level:3},{value:"\u8282\u70b9\u6302\u8f7d",id:"\u8282\u70b9\u6302\u8f7d",children:[],level:3}],level:2}],u={toc:c};function s(e){var n=e.components,t=(0,l.Z)(e,i);return(0,o.kt)("wrapper",(0,r.Z)({},u,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"modelviewplugin"},(0,o.kt)("strong",{parentName:"h2"},"ModelViewPlugin")),(0,o.kt)("p",null,'\u6a21\u578b"\u5c0f\u7a97"\u5c06 ',(0,o.kt)("strong",{parentName:"p"},"Five")," \u7684",(0,o.kt)("strong",{parentName:"p"},"\u7a7a\u95f4\u603b\u89c8\u6a21\u6001")," ",(0,o.kt)("inlineCode",{parentName:"p"},"Five.Mode.Floorplan"),' \u4ee5"\u5c0f\u7a97"\u7684\u5f62\u5f0f\u6e32\u67d3\u81f3\u67d0\u4e2a DOM \u8282\u70b9\u4e2d\uff0c\u53ef\u8fbe\u5230\u5168\u666f\u4e0e\u6a21\u578b\u5171\u5b58\u7684\u72b6\u6001\u3002'),(0,o.kt)("h2",{id:"\u793a\u4f8b\u6548\u679c"},"\u793a\u4f8b\u6548\u679c"),(0,o.kt)("div",{className:"docs-vr-normal"},(0,o.kt)("iframe",{className:"docs-vr-iframe",src:"/dnalogelExamples/ModelviewPluginExample"})),(0,o.kt)("h2",{id:"\u5b89\u88c5\u5f15\u7528"},"\u5b89\u88c5\u5f15\u7528"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-tsx"},'import ModelViewPlugin from "@realsee/dnalogel/plugins/floorplan/ModelViewPlugin"\n')),(0,o.kt)("h2",{id:"\u5f00\u53d1\u6307\u5357"},"\u5f00\u53d1\u6307\u5357"),(0,o.kt)("h3",{id:"\u521d\u59cb\u5316"},"\u521d\u59cb\u5316"),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"\u65b9\u6cd51\uff1a\u5728\u521d\u59cb\u5316 ",(0,o.kt)("inlineCode",{parentName:"p"},"Five")," \u5b9e\u4f8b\u65f6\uff0c\u5c06 ",(0,o.kt)("inlineCode",{parentName:"p"},"ModelViewPlugin")," \u914d\u7f6e\u5728\u521d\u59cb\u5316\u63d2\u4ef6\u53c2\u6570\u5373\u53ef\u3002")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"import { Five } from '@realsee/five'\nimport { ModelViewPlugin } from \"@realsee/dnalogel\";\n\nconst five = new Five({\n    plugins: [\n        [\n            ModelViewPlugin,\n            'modelView', // \u81ea\u5b9a\u4e49\u63d2\u4ef6\u540d\u79f0\n            {\n                // \u53c2\u6570\u914d\u7f6e\n            }\n        ]\n    ]\n})\n")),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"\u65b9\u6cd52\uff1a\u5728\u521b\u5efa ",(0,o.kt)("inlineCode",{parentName:"p"},"FiveProvider")," \u65f6\uff0c\u5c06 ",(0,o.kt)("inlineCode",{parentName:"p"},"TopviewFloorplanPlugin")," \u914d\u7f6e\u5728\u521d\u59cb\u5316\u63d2\u4ef6\u53c2\u6570\u5373\u53ef\u3002")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},'import { ModelViewPlugin } from "@realsee/dnalogel";\nimport { createFiveProvider, FiveCanvas } from "@realsee/five/react";\n\nconst FiveProvider = createFiveProvider({\n    plugins: [\n        [\n            ModelViewPlugin,\n            \'modelView\', // \u81ea\u5b9a\u4e49\u63d2\u4ef6\u540d\u79f0\n            {\n                // \u53c2\u6570\u914d\u7f6e\n            }\n        ]\n    ]\n});\n')),(0,o.kt)("h3",{id:"\u8282\u70b9\u6302\u8f7d"},"\u8282\u70b9\u6302\u8f7d"),(0,o.kt)("p",null,"\u901a\u8fc7",(0,o.kt)("inlineCode",{parentName:"p"},"five.plugins.ModelView"),"\u65b9\u5f0f\u83b7\u53d6 ",(0,o.kt)("inlineCode",{parentName:"p"},"ModelViewPlugin")," \u5b9e\u4f8b\u7684\u5f15\u7528\u3002\u8be5\u63d2\u4ef6\u5b9e\u4f8b\u63d0\u4f9b\u4e24\u4e2a\u65b9\u6cd5\uff1a"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"appendTo(element: HTMLElement, size?: { width?: number; height?: number }): void"),": \u5c06\u6e32\u67d3\u5185\u5bb9\u6302\u8f7d\u81f3\u76f8\u5173 ",(0,o.kt)("inlineCode",{parentName:"li"},"DOM")," \u8282\u70b9"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"refresh(size?: { width?: number; height?: number }): void")," : \u5f3a\u5236\u5237\u65b0\uff0c\u5373\u91cd\u65b0\u6e32\u67d3\u4e00\u6b21\u3002")),(0,o.kt)("p",null,"\u901a\u8fc7 ",(0,o.kt)("inlineCode",{parentName:"p"},"appendTo")," \u65b9\u6cd5\u5c06\u6302\u8f7d DOM \u8282\u70b9"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"five.plugins.modelView.appendTo(wrapperElement)\n\n// refresh \u65b9\u6cd5\u4f7f\u7528\u793a\u4f8b\n// five.plugins.modelView.refresh({ width: 160, height: 180 })\n")))}s.isMDXComponent=!0},3905:function(e,n,t){t.d(n,{Zo:function(){return c},kt:function(){return m}});var r=t(67294);function l(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){l(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function a(e,n){if(null==e)return{};var t,r,l=function(e,n){if(null==e)return{};var t,r,l={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(l[t]=e[t]);return l}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(l[t]=e[t])}return l}var d=r.createContext({}),p=function(e){var n=r.useContext(d),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},c=function(e){var n=p(e.components);return r.createElement(d.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},s=r.forwardRef((function(e,n){var t=e.components,l=e.mdxType,o=e.originalType,d=e.parentName,c=a(e,["components","mdxType","originalType","parentName"]),s=p(t),m=l,g=s["".concat(d,".").concat(m)]||s[m]||u[m]||o;return t?r.createElement(g,i(i({ref:n},c),{},{components:t})):r.createElement(g,i({ref:n},c))}));function m(e,n){var t=arguments,l=n&&n.mdxType;if("string"==typeof e||l){var o=t.length,i=new Array(o);i[0]=s;var a={};for(var d in n)hasOwnProperty.call(n,d)&&(a[d]=n[d]);a.originalType=e,a.mdxType="string"==typeof e?e:l,i[1]=a;for(var p=2;p<o;p++)i[p]=t[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,t)}s.displayName="MDXCreateElement"}}]);