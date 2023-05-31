"use strict";(self.webpackChunkrealsee_developer_github_com=self.webpackChunkrealsee_developer_github_com||[]).push([[8564],{3905:(e,t,n)=>{n.d(t,{Zo:()=>l,kt:()=>f});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),p=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},l=function(e){var t=p(e.components);return r.createElement(s.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),u=p(n),m=a,f=u["".concat(s,".").concat(m)]||u[m]||d[m]||i;return n?r.createElement(f,o(o({ref:t},l),{},{components:n})):r.createElement(f,o({ref:t},l))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=m;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c[u]="string"==typeof e?e:a,o[1]=c;for(var p=2;p<i;p++)o[p]=n[p];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},95678:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>d,frontMatter:()=>i,metadata:()=>c,toc:()=>p});var r=n(87462),a=(n(67294),n(3905));const i={title:"Background music"},o=void 0,c={unversionedId:"front/space-navigation/keyframes/bgm",id:"front/space-navigation/keyframes/bgm",title:"Background music",description:"Function Description",source:"@site/i18n/en/docusaurus-plugin-content-docs/current/front/space-navigation/keyframes/10.bgm.md",sourceDirName:"front/space-navigation/keyframes",slug:"/front/space-navigation/keyframes/bgm",permalink:"/en/docs/front/space-navigation/keyframes/bgm",draft:!1,tags:[],version:"current",lastUpdatedBy:"lichengjie003",lastUpdatedAt:1684216246,formattedLastUpdatedAt:"May 16, 2023",sidebarPosition:10,frontMatter:{title:"Background music"},sidebar:"\u7a7a\u95f4\u5bfc\u89c8",previous:{title:"Video Effects",permalink:"/en/docs/front/space-navigation/keyframes/video-effect"},next:{title:"Customize keyframe behavior",permalink:"/en/docs/front/space-navigation/advanced/custom-keyframe-action"}},s={},p=[{value:"Function Description",id:"function-description",level:2},{value:"Effect Display",id:"effect-display",level:2},{value:"Use Instructions",id:"use-instructions",level:2},{value:"Field description",id:"field-description",level:2}],l={toc:p},u="wrapper";function d(e){let{components:t,...n}=e;return(0,a.kt)(u,(0,r.Z)({},l,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"function-description"},"Function Description"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Background Music"),"(BgMusic) adds background sounds to the space guide and enriches lecture scenes (background concerts play in parallel with the speech audio)."),(0,a.kt)("h2",{id:"effect-display"},"Effect Display"),(0,a.kt)("admonition",{type:"tip"},(0,a.kt)("p",{parentName:"admonition"},"This example contains voices, please view it in the right context.You can listen to the effect by clicking the",(0,a.kt)("strong",{parentName:"p"},"background music"),"button, and you can re-select the type of function you want to experience after clicking the pause button.")),(0,a.kt)("div",{className:"docs-vr-normal"},(0,a.kt)("iframe",{className:"docs-vr-iframe",src:"//realsee-developer.github.io/vreo/demo/examples.html"})),(0,a.kt)("h2",{id:"use-instructions"},"Use Instructions"),(0,a.kt)("p",null,"Using the background music feature, you only need ",(0,a.kt)("inlineCode",{parentName:"p"},"keyframes for the schema")," add ",(0,a.kt)("inlineCode",{parentName:"p"},"type=BgMusic")," data such as the 3D space play player that will parse such frame data and render playing as background music."),(0,a.kt)("h2",{id:"field-description"},"Field description"),(0,a.kt)("admonition",{type:"info"},(0,a.kt)("p",{parentName:"admonition"},"Specific content parameter types can be seen ",(0,a.kt)("a",{parentName:"p",href:"https://realsee-developer.github.io/vreo/modules/Player.html#BgMusicData"},(0,a.kt)("strong",{parentName:"a"},"Vreo API document")),".")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json",metastring:'title="\u80cc\u666f\u97f3\u4e50\u7c7b\u578b\u6570\u636e\u6837\u4f8b"',title:'"\u80cc\u666f\u97f3\u4e50\u7c7b\u578b\u6570\u636e\u6837\u4f8b"'},'// snippet example\n{\n  "uuid": "daf3e3a8-7b48-4df3-eec5-bdc2a1a1c123",\n  // highlight-start\n  "type": "BgMusic",\n  // highlight-end\n  "start": 2000,\n  "end": 46000,\n  "parsed": false,\n  "data": {\n    // highlight-start\n    "url": "" // .mp3 background music CDN address\n    // highlight-end\n  }\n}\n')),(0,a.kt)("admonition",{type:"tip"},(0,a.kt)("p",{parentName:"admonition"},"Multiplex music frame data for multiple segments ",(0,a.kt)("inlineCode",{parentName:"p"},"json")," is sufficient.")))}d.isMDXComponent=!0}}]);