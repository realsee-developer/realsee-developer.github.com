"use strict";(self.webpackChunkrealsee_developer_github_com=self.webpackChunkrealsee_developer_github_com||[]).push([[1561],{3905:(e,t,n)=>{n.d(t,{Zo:()=>l,kt:()=>f});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=r.createContext({}),s=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},l=function(e){var t=s(e.components);return r.createElement(c.Provider,{value:t},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,l=p(e,["components","mdxType","originalType","parentName"]),d=s(n),m=a,f=d["".concat(c,".").concat(m)]||d[m]||u[m]||o;return n?r.createElement(f,i(i({ref:t},l),{},{components:n})):r.createElement(f,i({ref:t},l))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=m;var p={};for(var c in t)hasOwnProperty.call(t,c)&&(p[c]=t[c]);p.originalType=e,p[d]="string"==typeof e?e:a,i[1]=p;for(var s=2;s<o;s++)i[s]=n[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},21726:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>u,frontMatter:()=>o,metadata:()=>p,toc:()=>s});var r=n(87462),a=(n(67294),n(3905));const o={title:"Introduction"},i=void 0,p={unversionedId:"front/3d-space/intro",id:"front/3d-space/intro",title:"Introduction",description:"--\x3e",source:"@site/i18n/en/docusaurus-plugin-content-docs/current/front/3d-space/intro.md",sourceDirName:"front/3d-space",slug:"/front/3d-space/intro",permalink:"/en/docs/front/3d-space/intro",draft:!1,tags:[],version:"current",lastUpdatedBy:"sansi.lcj",lastUpdatedAt:1669717185,formattedLastUpdatedAt:"Nov 29, 2022",frontMatter:{title:"Introduction"},sidebar:"\u4e09\u7ef4\u7a7a\u95f4",next:{title:"Development preparation",permalink:"/en/docs/front/3d-space/preparation"}},c={},s=[],l={toc:s},d="wrapper";function u(e){let{components:t,...n}=e;return(0,a.kt)(d,(0,r.Z)({},l,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"}," 3D space reconstruction ")," is the core technical ability of Realsee(",(0,a.kt)("a",{parentName:"p",href:"https://realsee.com"},"realsee.com"),"): Based on the offline collection of spatial data, such as 3D reconstruction technology such as automatic modeling, intelligent hole filling, automatic data extraction, HDR optimization and so on, the visual cloud server maps all the data and image texture to the 3D model to restore the real 3D space."),(0,a.kt)("p",null,"As a leader in the VR space re-engineering domain, such as capturing, displaying and rebuilding capacity to provide three-dimensional spaces for industry as a whole, resulting in low-cost, efficient, targeted VR space application solutions."),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"/en/docs/front/3d-space/get-started/rendering-engine"},(0,a.kt)("strong",{parentName:"a"},"Five"))," is a three-dimensional space rendering engine using ",(0,a.kt)("strong",{parentName:"p"},"Five Engine"),", you can also build your three-dimensional space VR app using the same ",(0,a.kt)("strong",{parentName:"p"},"as you see your ability to rebuild"),"."),(0,a.kt)("p",null,"::tip"),(0,a.kt)("p",null,"Technical documents are intended for researchers with ",(0,a.kt)("strong",{parentName:"p"},"front-end knowledge background")," so we assume you have a basic knowledge of ",(0,a.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/A_re-introduction_to_JavaScript"},"JavaScript")," languages,",(0,a.kt)("a",{parentName:"p",href:"https://nodejs.org/en/docs/"},"Node.js")," and ",(0,a.kt)("a",{parentName:"p",href:"https://docs.npmjs.com/"},"npm")," etc.",(0,a.kt)("br",{parentName:"p"}),"\n",":::"),(0,a.kt)("admonition",{type:"tip"},(0,a.kt)("p",{parentName:"admonition"},"Document refers to SDK, sample written in ",(0,a.kt)("a",{parentName:"p",href:"https://www.typescriptlang.org/"},"TypeScript")," for quality assurance of development and programming experience (e.g. friendly code prompt, auto-completion, etc.), recommended via ",(0,a.kt)("a",{parentName:"p",href:"https://code.visualstudio.com"},"Visual Studio Code"),",",(0,a.kt)("a",{parentName:"p",href:"https://www.jetbrains.com/webstorm/"},"WebStorm")," etc.")))}u.isMDXComponent=!0}}]);