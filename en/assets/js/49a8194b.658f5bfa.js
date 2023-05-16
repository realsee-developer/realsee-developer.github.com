"use strict";(self.webpackChunkrealsee_developer_github_com=self.webpackChunkrealsee_developer_github_com||[]).push([[3492],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>m});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function p(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var s=n.createContext({}),l=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},c=function(e){var t=l(e.components);return n.createElement(s.Provider,{value:t},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},v=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,c=p(e,["components","mdxType","originalType","parentName"]),d=l(r),v=o,m=d["".concat(s,".").concat(v)]||d[v]||u[v]||a;return r?n.createElement(m,i(i({ref:t},c),{},{components:r})):n.createElement(m,i({ref:t},c))}));function m(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=v;var p={};for(var s in t)hasOwnProperty.call(t,s)&&(p[s]=t[s]);p.originalType=e,p[d]="string"==typeof e?e:o,i[1]=p;for(var l=2;l<a;l++)i[l]=r[l];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}v.displayName="MDXCreateElement"},63154:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>u,frontMatter:()=>a,metadata:()=>p,toc:()=>l});var n=r(87462),o=(r(67294),r(3905));const a={title:"React Support"},i=void 0,p={unversionedId:"front/space-navigation/get-started/react-support",id:"front/space-navigation/get-started/react-support",title:"React Support",description:"Vreo supports React Context Use patterns that match Hooks . Simple sample below\uff1a",source:"@site/i18n/en/docusaurus-plugin-content-docs/current/front/space-navigation/get-started/3.react-support.md",sourceDirName:"front/space-navigation/get-started",slug:"/front/space-navigation/get-started/react-support",permalink:"/en/docs/front/space-navigation/get-started/react-support",draft:!1,tags:[],version:"current",lastUpdatedBy:"sansi.lcj",lastUpdatedAt:1669717185,formattedLastUpdatedAt:"Nov 29, 2022",sidebarPosition:3,frontMatter:{title:"React Support"},sidebar:"\u7a7a\u95f4\u5bfc\u89c8",previous:{title:"DMO Experience",permalink:"/en/docs/front/space-navigation/get-started/demo"},next:{title:"Shopping structure",permalink:"/en/docs/front/space-navigation/structure"}},s={},l=[{value:"High Level Component",id:"high-level-component",level:2},{value:"<code>&lt;VreoProvider&gt;</code>",id:"vreoprovider",level:3},{value:"Hooks Functions",id:"hooks-functions",level:2},{value:"<code>useVreoAction</code>",id:"usevreoaction",level:3},{value:"<code>useVreoEventCallback</code>",id:"usevreoeventcallback",level:3},{value:"<code>useVreo PausedState</code>",id:"usevreo-pausedstate",level:3}],c={toc:l},d="wrapper";function u(e){let{components:t,...r}=e;return(0,o.kt)(d,(0,n.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Vreo")," supports ",(0,o.kt)("a",{parentName:"p",href:"https://reactjs.org/docs/context.html"},"React Context")," Use patterns that match ",(0,o.kt)("a",{parentName:"p",href:"https://reactjs.org/docs/hooks-intro.html"},"Hooks")," . Simple sample below\uff1a"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-tsx"},"const FiveProvider = createFiveProvider();\nconst App: React.FC = () => {\n  return (\n    <FiveProvider initialWork={work}>\n      <FiveCanvas width={width} height={height} />\n      <VreoProvider>\n        {/* React rendered other modules */}\n        <YourAppComponent />\n      </VreoProvider>\n    </FiveProvider>\n  );\n};\n")),(0,o.kt)("p",null,"You can access ",(0,o.kt)("a",{parentName:"p",href:"https://stackblitz.com/edit/vreo-react-demo?file=src/App.tsx"},(0,o.kt)("strong",{parentName:"a"},"Vreo React Demo"))," for detailed source code."),(0,o.kt)("h2",{id:"high-level-component"},"High Level Component"),(0,o.kt)("h3",{id:"vreoprovider"},(0,o.kt)("inlineCode",{parentName:"h3"},"<VreoProvider>")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Vreo")," provides high-stage components",(0,o.kt)("inlineCode",{parentName:"p"},"<VreoProvider>"),", you don't need to create ",(0,o.kt)("inlineCode",{parentName:"p"},"new VreoPlayer()")," create ",(0,o.kt)("inlineCode",{parentName:"p"},"Vreo")," instance\uff1a"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-tsx"},"const FiveProvider = createFiveProvider()\n\n<FiveProvider initialWork={work}>\n  <FiveCanvas width={width} height={height} />\n  <VreoProvider>\n    {/* Other modules rendered by React*/}\n    <YourAppComponent />\n  </VreoProvider>\n</FiveProvider>\n")),(0,o.kt)("admonition",{title:"prompt",type:"tip"},(0,o.kt)("p",{parentName:"admonition"},"requires attention to ",(0,o.kt)("inlineCode",{parentName:"p"},"<VreoProvider>")," must be specified with ",(0,o.kt)("inlineCode",{parentName:"p"},"<FiveProvider>")," used together.")),(0,o.kt)("h2",{id:"hooks-functions"},"Hooks Functions"),(0,o.kt)("p",null,"In addition to high-stage components, a companion React Hooks function is provided."),(0,o.kt)("h3",{id:"usevreoaction"},(0,o.kt)("inlineCode",{parentName:"h3"},"useVreoAction")),(0,o.kt)("p",null,"Get the built-in execution function for ",(0,o.kt)("inlineCode",{parentName:"p"},"Vreo"),"."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"const {\n  load, // load playbook data\n  show, // show panel\n  hide, // hides panel\n  pause, // Pause\n  play, // Play\n  dispose, // Destroy (usually not triggered manually)\n} = useVreoAction();\n")),(0,o.kt)("h3",{id:"usevreoeventcallback"},(0,o.kt)("inlineCode",{parentName:"h3"},"useVreoEventCallback")),(0,o.kt)("p",null,"Add ",(0,o.kt)("inlineCode",{parentName:"p"},"Vreo")," asynchronous event callback"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"useVreoEventCallback(VreoKeyframeEnum.PanoTag, callback);\n")),(0,o.kt)("h3",{id:"usevreo-pausedstate"},(0,o.kt)("inlineCode",{parentName:"h3"},"useVreo PausedState")),(0,o.kt)("p",null,"Get ",(0,o.kt)("inlineCode",{parentName:"p"},"Vreo")," current playback status."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"const paused = useVreoPausedState();\n")))}u.isMDXComponent=!0}}]);