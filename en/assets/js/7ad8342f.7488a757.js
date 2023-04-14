"use strict";(self.webpackChunkrealsee_developer_github_com=self.webpackChunkrealsee_developer_github_com||[]).push([[5998],{49613:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>d});var r=n(59496);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),s=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=s(e.components);return r.createElement(l.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,c=p(e,["components","mdxType","originalType","parentName"]),u=s(n),d=a,f=u["".concat(l,".").concat(d)]||u[d]||m[d]||o;return n?r.createElement(f,i(i({ref:t},c),{},{components:n})):r.createElement(f,i({ref:t},c))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=u;var p={};for(var l in t)hasOwnProperty.call(t,l)&&(p[l]=t[l]);p.originalType=e,p.mdxType="string"==typeof e?e:a,i[1]=p;for(var s=2;s<o;s++)i[s]=n[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},6582:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>m,frontMatter:()=>o,metadata:()=>p,toc:()=>s});var r=n(2962),a=(n(59496),n(49613));const o={title:"Interpretation of the name"},i=void 0,p={unversionedId:"front/live/preparation/terminology",id:"front/live/preparation/terminology",title:"Interpretation of the name",description:"Frame data (Keyframe)",source:"@site/i18n/en/docusaurus-plugin-content-docs/current/front/live/preparation/2.terminology.md",sourceDirName:"front/live/preparation",slug:"/front/live/preparation/terminology",permalink:"/en/docs/front/live/preparation/terminology",draft:!1,tags:[],version:"current",lastUpdatedBy:"sansi.lcj",lastUpdatedAt:1669717185,formattedLastUpdatedAt:"Nov 29, 2022",sidebarPosition:2,frontMatter:{title:"Interpretation of the name"},sidebar:"\u5982\u89c6\u5e26\u770b",previous:{title:"ak/Sk Application",permalink:"/en/docs/front/live/preparation/aksk"},next:{title:"Take controller",permalink:"/en/docs/front/live/preparation/live-controller"}},l={},s=[{value:"Frame data (Keyframe)",id:"frame-data-keyframe",level:2},{value:"Snapshots (Snapshot)",id:"snapshots-snapshot",level:2},{value:"RTC",id:"rtc",level:2}],c={toc:s};function m(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"frame-data-keyframe"},"Frame data (Keyframe)"),(0,a.kt)("p",null,"The collection of status data that the user interface needs to interact with the screen."),(0,a.kt)("admonition",{type:"info"},(0,a.kt)("p",{parentName:"admonition"},"is usually displayed in key pairs - key is the name of the UI module, value is the status of the module.",(0,a.kt)("br",{parentName:"p"}),"\n","For example, frame data ",(0,a.kt)("inlineCode",{parentName:"p"},'{"popupPanel": { hidden: true }}')," means that the interface has a popupPanel with a popup panel named ",(0,a.kt)("inlineCode",{parentName:"p"},"popupPanel")," , it has ",(0,a.kt)("inlineCode",{parentName:"p"},"hidden")," status,",(0,a.kt)("inlineCode",{parentName:"p"},"true")," indicates that it is hidden.")),(0,a.kt)("h2",{id:"snapshots-snapshot"},"Snapshots (Snapshot)"),(0,a.kt)("p",null,"Refers to the collection of all ",(0,a.kt)("strong",{parentName:"p"},"frame data")," at a time."),(0,a.kt)("admonition",{type:"tip"},(0,a.kt)("p",{parentName:"admonition"},"You can understand that ",(0,a.kt)("strong",{parentName:"p"},"frame data")," is a subset of ",(0,a.kt)("strong",{parentName:"p"},"snapshot"),' , and all states of the user interface at that moment can be restored through the "snapshot" information at a certain moment.')),(0,a.kt)("h2",{id:"rtc"},"RTC"),(0,a.kt)("p",null,"Real-Time Communication, in this paper refers specifically to real-time video communication capabilities for containers like WebView / Browser rendering HTML pages."),(0,a.kt)("p",null,"::caution",(0,a.kt)("br",{parentName:"p"}),"\n","needs attention to be paid to ",(0,a.kt)("strong",{parentName:"p"},"Live")," does not contain ",(0,a.kt)("strong",{parentName:"p"},"RTC")," functionality, supported by client native capabilities.For more details, see the following ",(0,a.kt)("a",{parentName:"p",href:"#rtc-%E5%8D%8F%E8%AE%AE"},"RTC Agreements"),".\n:::"))}m.isMDXComponent=!0}}]);