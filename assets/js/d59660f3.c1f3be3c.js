"use strict";(self.webpackChunkrealsee_developer_github_com=self.webpackChunkrealsee_developer_github_com||[]).push([[5633],{49613:(e,n,t)=>{t.d(n,{Zo:()=>u,kt:()=>m});var r=t(59496);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function o(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var p=r.createContext({}),d=function(e){var n=r.useContext(p),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},u=function(e){var n=d(e.components);return r.createElement(p.Provider,{value:n},e.children)},c={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},s=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,i=e.originalType,p=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),s=d(t),m=a,v=s["".concat(p,".").concat(m)]||s[m]||c[m]||i;return t?r.createElement(v,l(l({ref:n},u),{},{components:t})):r.createElement(v,l({ref:n},u))}));function m(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var i=t.length,l=new Array(i);l[0]=s;var o={};for(var p in n)hasOwnProperty.call(n,p)&&(o[p]=n[p]);o.originalType=e,o.mdxType="string"==typeof e?e:a,l[1]=o;for(var d=2;d<i;d++)l[d]=t[d];return r.createElement.apply(null,l)}return r.createElement.apply(null,t)}s.displayName="MDXCreateElement"},48458:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>p,contentTitle:()=>l,default:()=>c,frontMatter:()=>i,metadata:()=>o,toc:()=>d});var r=t(2962),a=(t(59496),t(49613));const i={title:"\u63d2\u4ef6\u5f00\u53d1"},l=void 0,o={unversionedId:"front/3d-space/advanced/plugin-dev",id:"front/3d-space/advanced/plugin-dev",title:"\u63d2\u4ef6\u5f00\u53d1",description:"Five \u63d0\u4f9b\u4e86\u5de5\u5382\u6a21\u5f0f\u7684\u63d2\u4ef6\u673a\u5236, \u63d0\u4f9b\u4e86 FivePlugin\u3001FivePluginInstance\u3001FivePluginInits \u63a5\u53e3\u6765\u5e2e\u52a9\u521b\u5efa\u548c\u4f7f\u7528\u63d2\u4ef6.",source:"@site/docs/front/3d-space/advanced/plugin-dev.md",sourceDirName:"front/3d-space/advanced",slug:"/front/3d-space/advanced/plugin-dev",permalink:"/docs/front/3d-space/advanced/plugin-dev",draft:!1,tags:[],version:"current",lastUpdatedBy:"\u5c0f\u9640\u87ba",lastUpdatedAt:1650508910,formattedLastUpdatedAt:"2022\u5e744\u670821\u65e5",frontMatter:{title:"\u63d2\u4ef6\u5f00\u53d1"}},p={},d=[{value:"\u63d2\u4ef6\u7684\u4f5c\u7528",id:"\u63d2\u4ef6\u7684\u4f5c\u7528",level:2},{value:"\u57fa\u4e8e @realsee/dnalogel \u5f00\u53d1",id:"\u57fa\u4e8e-realseednalogel-\u5f00\u53d1",level:2},{value:"\u65b0\u5efa\u6587\u4ef6\u5939",id:"\u65b0\u5efa\u6587\u4ef6\u5939",level:3},{value:"\u5f15\u5165\u63d2\u4ef6\u5de5\u5382\u51fd\u6570",id:"\u5f15\u5165\u63d2\u4ef6\u5de5\u5382\u51fd\u6570",level:3},{value:"\u5b9a\u4e49\u8f93\u5165\u8f93\u51fa\u7c7b\u578b",id:"\u5b9a\u4e49\u8f93\u5165\u8f93\u51fa\u7c7b\u578b",level:3}],u={toc:d};function c(e){let{components:n,...t}=e;return(0,a.kt)("wrapper",(0,r.Z)({},u,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("admonition",{type:"tip"},(0,a.kt)("p",{parentName:"admonition"},"Five \u63d0\u4f9b\u4e86\u5de5\u5382\u6a21\u5f0f\u7684\u63d2\u4ef6\u673a\u5236, \u63d0\u4f9b\u4e86 ",(0,a.kt)("inlineCode",{parentName:"p"},"FivePlugin"),"\u3001",(0,a.kt)("inlineCode",{parentName:"p"},"FivePluginInstance"),"\u3001",(0,a.kt)("inlineCode",{parentName:"p"},"FivePluginInits")," \u63a5\u53e3\u6765\u5e2e\u52a9\u521b\u5efa\u548c\u4f7f\u7528\u63d2\u4ef6.")),(0,a.kt)("h2",{id:"\u63d2\u4ef6\u7684\u4f5c\u7528"},"\u63d2\u4ef6\u7684\u4f5c\u7528"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"1\u3001\u63d2\u4ef6\u5373\u662f\u5c06\u4e00\u4e9b\u901a\u7528\u7684\u5bf9\u4e8e five \u7684\u64cd\u4f5c\u7684\u4e00\u4e9b\u590d\u7528\u7684\u62bd\u8c61\u3002 "),(0,a.kt)("li",{parentName:"ul"},"2\u3001\u53ef\u4ee5\u901a\u8fc7\u63d2\u4ef6\u6765\u7ec4\u7ec7\u4ee3\u7801\uff0c\u51cf\u5c11\u903b\u8f91\u4f9d\u8d56\u3002")),(0,a.kt)("p",null,"\u63a5\u4e0b\u6765\uff0c\u672c\u7ae0\u5c06\u4ee5 ",(0,a.kt)("inlineCode",{parentName:"p"},"LoadingPlugin")," \u4e3a\u4f8b\uff0c\u8bb2\u89e3\u5982\u4f55\u57fa\u4e8e ",(0,a.kt)("inlineCode",{parentName:"p"},"@realsee/dnalogel")," \u63d2\u4ef6\u5e93\u5f00\u53d1\u63d2\u4ef6\u3002"),(0,a.kt)("h2",{id:"\u57fa\u4e8e-realseednalogel-\u5f00\u53d1"},"\u57fa\u4e8e @realsee/dnalogel \u5f00\u53d1"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"@realsee/dnalogel")," \u63d2\u4ef6\u5e93\u7684\u5f00\u6e90\u4ed3\u5e93\u5730\u5740\u4e3a\uff1a ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/realsee-developer/dnalogel"},"https://github.com/realsee-developer/dnalogel")," \u3002\u8bf7\u6309\u7167 github \u5f00\u6e90\u4ed3\u5e93\u8d21\u732e\u6d41\u7a0b\uff0c\u5c06\u6b64\u4ed3\u5e93\nfork \u5230\u60a8\u7684\u4e2a\u4eba\u4ed3\u5e93\u4e2d\uff0c\u5e76 ",(0,a.kt)("inlineCode",{parentName:"p"},"git clone")," \u5230\u672c\u5730\u3002\u4ece ",(0,a.kt)("inlineCode",{parentName:"p"},"main")," \u5206\u652f\u4e2d\u5207\u51fa\u5206\u652f\uff0c\u6309\u7167 ",(0,a.kt)("inlineCode",{parentName:"p"},"README.md")," \u719f\u6089\u9879\u76ee\u3002"),(0,a.kt)("h3",{id:"\u65b0\u5efa\u6587\u4ef6\u5939"},"\u65b0\u5efa\u6587\u4ef6\u5939"),(0,a.kt)("p",null,"\u60a8\u9700\u8981\u5728 ",(0,a.kt)("inlineCode",{parentName:"p"},"plugins/src")," \u8def\u5f84\u4e0b\u65b0\u5efa\u540d\u4e3a ",(0,a.kt)("inlineCode",{parentName:"p"},"LoadingPlugin")," \u7684\u6587\u4ef6\u5939\uff0c\u5e76\u65b0\u5efa ",(0,a.kt)("inlineCode",{parentName:"p"},"index.ts")," \u6587\u4ef6\uff0c\u63a5\u4e0b\u6765\uff0c\u60a8\u5c31\u53ef\u4ee5\u5728 ",(0,a.kt)("inlineCode",{parentName:"p"},"index.ts")," \u6587\u4ef6\u4e2d\u5f00\u53d1\u60a8\u7684\u63d2\u4ef6\u3002"),(0,a.kt)("h3",{id:"\u5f15\u5165\u63d2\u4ef6\u5de5\u5382\u51fd\u6570"},"\u5f15\u5165\u63d2\u4ef6\u5de5\u5382\u51fd\u6570"),(0,a.kt)("p",null,"\u60a8\u53ef\u70b9\u51fb\u6b64\u5904\u67e5\u770b ",(0,a.kt)("a",{parentName:"p",href:"https://unpkg.com/@realsee/five@5.0.0-alpha.117/docs/modules/five.html#FivePlugin"},"five \u63d2\u4ef6\u5de5\u5382\u6a21\u5f0f")," \u8be6\u7ec6\u8bf4\u660e\u3002"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts",metastring:'title="index.ts"',title:'"index.ts"'},'import type { FivePlugin } from "@realsee/five";\nimport { Five } from "@realsee/five"\n\nexport interface LoadingPluginParametersType {}\nexport interface LoadingPluginExportReturnsType {}\n\nexport const LoadingPlugin: FivePlugin<LoadingPluginParametersType, LoadingPluginExportReturnsType> = (\n    five: Five,\n    params\n) => {\n    return null\n}\n')),(0,a.kt)("h3",{id:"\u5b9a\u4e49\u8f93\u5165\u8f93\u51fa\u7c7b\u578b"},"\u5b9a\u4e49\u8f93\u5165\u8f93\u51fa\u7c7b\u578b"))}c.isMDXComponent=!0}}]);