"use strict";(self.webpackChunkrealsee_developer_github_com=self.webpackChunkrealsee_developer_github_com||[]).push([[2649],{49613:(e,n,t)=>{t.d(n,{Zo:()=>d,kt:()=>f});var r=t(59496);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var p=r.createContext({}),u=function(e){var n=r.useContext(p),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},d=function(e){var n=u(e.components);return r.createElement(p.Provider,{value:n},e.children)},s={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},c=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,a=e.originalType,p=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),c=u(t),f=o,m=c["".concat(p,".").concat(f)]||c[f]||s[f]||a;return t?r.createElement(m,i(i({ref:n},d),{},{components:t})):r.createElement(m,i({ref:n},d))}));function f(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var a=t.length,i=new Array(a);i[0]=c;var l={};for(var p in n)hasOwnProperty.call(n,p)&&(l[p]=n[p]);l.originalType=e,l.mdxType="string"==typeof e?e:o,i[1]=l;for(var u=2;u<a;u++)i[u]=t[u];return r.createElement.apply(null,i)}return r.createElement.apply(null,t)}c.displayName="MDXCreateElement"},93407:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>p,contentTitle:()=>i,default:()=>s,frontMatter:()=>a,metadata:()=>l,toc:()=>u});var r=t(2962),o=(t(59496),t(49613));const a={title:"Plugin Development"},i=void 0,l={unversionedId:"front/3d-space/advanced/plugin-dev",id:"front/3d-space/advanced/plugin-dev",title:"Plugin Development",description:"::tip",source:"@site/i18n/en/docusaurus-plugin-content-docs/current/front/3d-space/advanced/plugin-dev.md",sourceDirName:"front/3d-space/advanced",slug:"/front/3d-space/advanced/plugin-dev",permalink:"/en/docs/front/3d-space/advanced/plugin-dev",draft:!1,tags:[],version:"current",lastUpdatedBy:"sansi.lcj",lastUpdatedAt:1669717185,formattedLastUpdatedAt:"Nov 29, 2022",frontMatter:{title:"Plugin Development"}},p={},u=[{value:"Role of Plugins",id:"role-of-plugins",level:2},{value:"Based on @realsee/dnalogel development",id:"based-on-realseednalogel-development",level:2},{value:"New Folder",id:"new-folder",level:3},{value:"Insert Plugin Factory Function",id:"insert-plugin-factory-function",level:3},{value:"Define type of input output",id:"define-type-of-input-output",level:3}],d={toc:u};function s(e){let{components:n,...t}=e;return(0,o.kt)("wrapper",(0,r.Z)({},d,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"::tip",(0,o.kt)("br",{parentName:"p"}),"\n","Five provides plugin mechanisms in factory mode, providing ",(0,o.kt)("inlineCode",{parentName:"p"},"FivePlugins in"),",",(0,o.kt)("inlineCode",{parentName:"p"},"FivePlugins"),",",(0,o.kt)("inlineCode",{parentName:"p"},"FivePluginInits")," to help create and use plugins.\n:::"),(0,o.kt)("h2",{id:"role-of-plugins"},"Role of Plugins"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("ol",{parentName:"li"},(0,o.kt)("li",{parentName:"ol"},"Plugins are abstracts of some common reuses for five operations."))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("ol",{parentName:"li",start:2},(0,o.kt)("li",{parentName:"ol"},"Codes can be organized through plugins to reduce logical dependency.")))),(0,o.kt)("p",null,"Next, this chapter will use ",(0,o.kt)("inlineCode",{parentName:"p"},"LoadingPlugin")," as an example of how to develop plugins based on ",(0,o.kt)("inlineCode",{parentName:"p"},"@realsee/dnanoge")," plugin library."),(0,o.kt)("h2",{id:"based-on-realseednalogel-development"},"Based on @realsee/dnalogel development"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"The open source repository for @realsee/dnaloge")," plugin repository is\uff1a ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/realsee-developer/dnilegelPlease"},"https://github.com/realsee-developer/dnilegelPlease")," follow the githubu open repository contribution process and fork this repository to your personal repository, and ",(0,o.kt)("inlineCode",{parentName:"p"},"git clone")," to local location.Switch out of ",(0,o.kt)("inlineCode",{parentName:"p"},"main")," branches, by ",(0,o.kt)("inlineCode",{parentName:"p"},"README.md")," familiar with the project."),(0,o.kt)("h3",{id:"new-folder"},"New Folder"),(0,o.kt)("p",null,"You need to create a new folder named ",(0,o.kt)("inlineCode",{parentName:"p"},"LoadingPlugin")," under ",(0,o.kt)("inlineCode",{parentName:"p"},"plugins/src")," and create a new ",(0,o.kt)("inlineCode",{parentName:"p"},"index.ts")," file. Next, you can develop your plugin in ",(0,o.kt)("inlineCode",{parentName:"p"},"index.ts")," file."),(0,o.kt)("h3",{id:"insert-plugin-factory-function"},"Insert Plugin Factory Function"),(0,o.kt)("p",null,"You can click here to view ",(0,o.kt)("a",{parentName:"p",href:"https://unpkg.com/@realsee/five@5.0.0-alpha.117/docs/modules/five.html#FivePlugin"},"five plugin factory mode")," for details."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts",metastring:'title="index.ts"',title:'"index.ts"'},'import type { FivePlugin } from "@realsee/five";\nimport { Five } from "@realsee/five"\n\nexport interface LoadingPluginParametersType {}\nexport interface LoadingPluginExportReturnsType {}\n\nexport const LoadingPlugin: FivePlugin<LoadingPluginParametersType, LoadingPluginExportReturnsType> = (\n    five: Five,\n    params\n) => {\n    return null\n}\n')),(0,o.kt)("h3",{id:"define-type-of-input-output"},"Define type of input output"))}s.isMDXComponent=!0}}]);