"use strict";(self.webpackChunkrealsee_developer_github_com=self.webpackChunkrealsee_developer_github_com||[]).push([[2231],{3905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>f});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=r.createContext({}),d=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},s=function(e){var t=d(e.components);return r.createElement(p.Provider,{value:t},e.children)},c="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,p=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),c=d(n),u=a,f=c["".concat(p,".").concat(u)]||c[u]||m[u]||o;return n?r.createElement(f,i(i({ref:t},s),{},{components:n})):r.createElement(f,i({ref:t},s))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=u;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l[c]="string"==typeof e?e:a,i[1]=l;for(var d=2;d<o;d++)i[d]=n[d];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},68302:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>m,frontMatter:()=>o,metadata:()=>l,toc:()=>d});var r=n(87462),a=(n(67294),n(3905));const o={title:"VR rendering failed"},i=void 0,l={unversionedId:"front/3d-space/faq/render",id:"front/3d-space/faq/render",title:"VR rendering failed",description:"If your VR has been performing normally before, but suddenly the rendering fails at a certain moment, and the reason cannot be found out, please first troubleshoot from the following angles\uff1a",source:"@site/i18n/en/docusaurus-plugin-content-docs/current/front/3d-space/faq/1.render.md",sourceDirName:"front/3d-space/faq",slug:"/front/3d-space/faq/render",permalink:"/en/docs/front/3d-space/faq/render",draft:!1,tags:[],version:"current",lastUpdatedBy:"sansi.lcj",lastUpdatedAt:1669717185,formattedLastUpdatedAt:"Nov 29, 2022",sidebarPosition:1,frontMatter:{title:"VR rendering failed"},sidebar:"\u4e09\u7ef4\u7a7a\u95f4",previous:{title:"Interpretation of the name",permalink:"/en/docs/front/3d-space/get-started/terminology"}},p={},d=[{value:"1, has changed domain name?",id:"1-has-changed-domain-name",level:3},{value:"2. Does the work data signature expire?",id:"2-does-the-work-data-signature-expire",level:3},{value:"3. Modify work data manually?",id:"3-modify-work-data-manually",level:3}],s={toc:d},c="wrapper";function m(e){let{components:t,...n}=e;return(0,a.kt)(c,(0,r.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"If your VR has been performing normally before, but suddenly the rendering fails at a certain moment, and the reason cannot be found out, please first troubleshoot from the following angles\uff1a"),(0,a.kt)("h3",{id:"1-has-changed-domain-name"},"1, has changed domain name?"),(0,a.kt)("p",null,"Check whether the ",(0,a.kt)("inlineCode",{parentName:"p"},"allow_hosts")," field value in my ",(0,a.kt)("inlineCode",{parentName:"p"},"work.json")," is consistent with the domain name configuration information in",(0,a.kt)("a",{parentName:"p",href:"https://developers.realsee.com/console"},"console"),"."),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"http://vrlab-public.ljcdn.com/common/file/web/c3e063ad-7a98-48d1-b127-4dcd639758b2.png",alt:"Domain profile view page"})),(0,a.kt)("h3",{id:"2-does-the-work-data-signature-expire"},"2. Does the work data signature expire?"),(0,a.kt)("p",null,"Check  ",(0,a.kt)("inlineCode",{parentName:"p"},"work.json")," for the ",(0,a.kt)("inlineCode",{parentName:"p"},"expire_at")," field to see if the signature expires."),(0,a.kt)("p",null,"e.g.\uff1a ",(0,a.kt)("strong",{parentName:"p"},'"expire_at": "1964772839406"')," , The browser console will ",(0,a.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Unix_time"},"Unix")," timestamp ",(0,a.kt)("inlineCode",{parentName:"p"},"1964772839406")," By ",(0,a.kt)("inlineCode",{parentName:"p"},"new Date()")," method to ",(0,a.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date"},"UTC")," time, See whether UTC time expired."),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"http://vrlab-public.ljcdn.com/common/file/web/e3303a15-b118-4ac8-aef7-cb2d40961615.png",alt:"Unix Turn UTC Simple Sample Chart"})),(0,a.kt)("h3",{id:"3-modify-work-data-manually"},"3. Modify work data manually?"),(0,a.kt)("admonition",{type:"warning"},(0,a.kt)("p",{parentName:"admonition"},"Please do not modify it manually ",(0,a.kt)("inlineCode",{parentName:"p"},"work")," data, otherwise it will cause unpredictable rendering problems!")),(0,a.kt)("p",null,"For other questions, please contact ",(0,a.kt)("a",{parentName:"p",href:"mailto:developer@realsee.com"},"developer@realsee.com"),"."))}m.isMDXComponent=!0}}]);