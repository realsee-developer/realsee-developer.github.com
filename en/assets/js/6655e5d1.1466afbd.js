"use strict";(self.webpackChunkrealsee_developer_github_com=self.webpackChunkrealsee_developer_github_com||[]).push([[4062],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>b});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),c=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),d=c(n),m=a,b=d["".concat(l,".").concat(m)]||d[m]||u[m]||i;return n?r.createElement(b,o(o({ref:t},p),{},{components:n})):r.createElement(b,o({ref:t},p))}));function b(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[d]="string"==typeof e?e:a,o[1]=s;for(var c=2;c<i;c++)o[c]=n[c];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},85162:(e,t,n)=>{n.d(t,{Z:()=>o});var r=n(67294),a=n(86010);const i={tabItem:"tabItem_Ymn6"};function o(e){let{children:t,hidden:n,className:o}=e;return r.createElement("div",{role:"tabpanel",className:(0,a.Z)(i.tabItem,o),hidden:n},t)}},65488:(e,t,n)=>{n.d(t,{Z:()=>u});var r=n(87462),a=n(67294),i=n(86010),o=n(72389),s=n(67392),l=n(7094),c=n(12466);const p={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};function d(e){const{lazy:t,block:n,defaultValue:o,values:d,groupId:u,className:m}=e,b=a.Children.map(e.children,(e=>{if((0,a.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})),g=d??b.map((e=>{let{props:{value:t,label:n,attributes:r}}=e;return{value:t,label:n,attributes:r}})),f=(0,s.l)(g,((e,t)=>e.value===t.value));if(f.length>0)throw new Error(`Docusaurus error: Duplicate values "${f.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`);const v=null===o?o:o??b.find((e=>e.props.default))?.props.value??b[0].props.value;if(null!==v&&!g.some((e=>e.value===v)))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${v}" but none of its children has the corresponding value. Available values are: ${g.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);const{tabGroupChoices:h,setTabGroupChoices:k}=(0,l.U)(),[w,y]=(0,a.useState)(v),N=[],{blockElementScrollPositionUntilNextRender:j}=(0,c.o5)();if(null!=u){const e=h[u];null!=e&&e!==w&&g.some((t=>t.value===e))&&y(e)}const x=e=>{const t=e.currentTarget,n=N.indexOf(t),r=g[n].value;r!==w&&(j(t),y(r),null!=u&&k(u,String(r)))},O=e=>{let t=null;switch(e.key){case"Enter":x(e);break;case"ArrowRight":{const n=N.indexOf(e.currentTarget)+1;t=N[n]??N[0];break}case"ArrowLeft":{const n=N.indexOf(e.currentTarget)-1;t=N[n]??N[N.length-1];break}}t?.focus()};return a.createElement("div",{className:(0,i.Z)("tabs-container",p.tabList)},a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,i.Z)("tabs",{"tabs--block":n},m)},g.map((e=>{let{value:t,label:n,attributes:o}=e;return a.createElement("li",(0,r.Z)({role:"tab",tabIndex:w===t?0:-1,"aria-selected":w===t,key:t,ref:e=>N.push(e),onKeyDown:O,onClick:x},o,{className:(0,i.Z)("tabs__item",p.tabItem,o?.className,{"tabs__item--active":w===t})}),n??t)}))),t?(0,a.cloneElement)(b.filter((e=>e.props.value===w))[0],{className:"margin-top--md"}):a.createElement("div",{className:"margin-top--md"},b.map(((e,t)=>(0,a.cloneElement)(e,{key:t,hidden:e.props.value!==w})))))}function u(e){const t=(0,o.Z)();return a.createElement(d,(0,r.Z)({key:String(t)},e))}},39308:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>l,default:()=>b,frontMatter:()=>s,metadata:()=>c,toc:()=>d});var r=n(87462),a=(n(67294),n(3905)),i=n(65488),o=n(85162);const s={title:"@realsee/jsbridge-x"},l=void 0,c={unversionedId:"webview/jsbridge/intro",id:"webview/jsbridge/intro",title:"@realsee/jsbridge-x",description:"@realsee/jsbridge-x needs to be used with the VRWebView container SDK. Through this SDK the VRWebView container will be able to implement messaging and data exchange between its embedded frontend web pages.",source:"@site/i18n/en/docusaurus-plugin-content-docs/current/webview/jsbridge/intro.md",sourceDirName:"webview/jsbridge",slug:"/webview/jsbridge/intro",permalink:"/en/docs/webview/jsbridge/intro",draft:!1,tags:[],version:"current",lastUpdatedBy:"sansi.lcj",lastUpdatedAt:1669717185,formattedLastUpdatedAt:"Nov 29, 2022",frontMatter:{title:"@realsee/jsbridge-x"},sidebar:"\u5bb9\u5668\u96c6\u6210",previous:{title:"WeChat Miniprogram",permalink:"/en/docs/webview/miniProgram/wechat"},next:{title:"Built-in interface",permalink:"/en/docs/webview/jsbridge/built-in"}},p={},d=[{value:"Install",id:"install",level:2},{value:"Use Instructions",id:"use-instructions",level:2},{value:"Adaptations",id:"adaptations",level:2}],u={toc:d},m="wrapper";function b(e){let{components:t,...n}=e;return(0,a.kt)(m,(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"@realsee/jsbridge-x")," needs to be used with the ",(0,a.kt)("inlineCode",{parentName:"p"},"VRWebView container SDK"),". Through this SDK the VRWebView container will be able to implement messaging and data exchange between its embedded frontend web pages."),(0,a.kt)("admonition",{title:"Note",type:"caution"},(0,a.kt)("p",{parentName:"admonition"},"This SDK is only available for web server JavaScript, For VRWebView in client ( iOS / Android ), applet environment please move to ",(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("a",{parentName:"strong",href:"/en/docs/webview/intro"},"VRWebView container SDK")),".")),(0,a.kt)("h2",{id:"install"},"Install"),(0,a.kt)(i.Z,{groupId:"npm2yarn",mdxType:"Tabs"},(0,a.kt)(o.Z,{value:"npm",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"npm install @realsee/jsbridge-x\n"))),(0,a.kt)(o.Z,{value:"yarn",label:"Yarn",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"yarn add @realsee/jsbridge-x\n"))),(0,a.kt)(o.Z,{value:"pnpm",label:"pnpm",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"pnpm add @realsee/jsbridge-x\n")))),(0,a.kt)("p",null,"or introduce\uff1a via cdn"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-html"},'\x3c!-- production --\x3e\n<script src="//unpkg.com/@realsee/jsbridge-x@${version}/lib/umd/app.js"><\/script>\n')),(0,a.kt)("h2",{id:"use-instructions"},"Use Instructions"),(0,a.kt)("p",null,"For iOS \\Android, Micromessager and other terminals, platforms provide the corresponding ",(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("a",{parentName:"strong",href:"/en/docs/webview/intro"},"VRWebView container")),".Similarly,",(0,a.kt)("strong",{parentName:"p"},"@realsee/jsbridge-x")," is adapted from different ",(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("a",{parentName:"strong",href:"/en/docs/webview/intro"},"VRWebView container"))," you can select version ",(0,a.kt)("inlineCode",{parentName:"p"},"jsBridge")," based on the current container."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"// iOS/Android\nimport JSBridge from '@realsee/jsbridge-x/lib/app'\n// or miniprogram\n// import JSBbridge from '@realsee/jsbridge-x/lib/miniprogram'\n\nconst jsBridge = new JSBridge({})\n\n// Listen if jsBridge completes initialization\njsBridge. n('inited', () => /** */)\n\n// Get device information for the current container\nconst [deviceInfo, err] = await jsBridge.getDeviceInfo()\n\n")),(0,a.kt)("h2",{id:"adaptations"},"Adaptations"),(0,a.kt)("ul",{className:"contains-task-list"},(0,a.kt)("li",{parentName:"ul",className:"task-list-item"},(0,a.kt)("input",{parentName:"li",type:"checkbox",checked:!0,disabled:!0})," ",(0,a.kt)("a",{parentName:"li",href:"/en/docs/webview/app/iOS"},"iOS VRWebView")),(0,a.kt)("li",{parentName:"ul",className:"task-list-item"},(0,a.kt)("input",{parentName:"li",type:"checkbox",checked:!0,disabled:!0})," ",(0,a.kt)("a",{parentName:"li",href:"/en/docs/webview/app/Android"},"Android VRWebView")),(0,a.kt)("li",{parentName:"ul",className:"task-list-item"},(0,a.kt)("input",{parentName:"li",type:"checkbox",checked:!0,disabled:!0})," ",(0,a.kt)("a",{parentName:"li",href:"/en/docs/webview/miniProgram/wechat"},"Miniprogram")),(0,a.kt)("li",{parentName:"ul",className:"task-list-item"},(0,a.kt)("input",{parentName:"li",type:"checkbox",checked:!1,disabled:!0})," ","Headline applets"),(0,a.kt)("li",{parentName:"ul",className:"task-list-item"},(0,a.kt)("input",{parentName:"li",type:"checkbox",checked:!1,disabled:!0})," ","100 applets")),(0,a.kt)("p",null,"::caution notes",(0,a.kt)("br",{parentName:"p"}),"\n","the browser itself is the full version of WebView and does not exist for the so-called ",(0,a.kt)("inlineCode",{parentName:"p"},"jsBridge"),".But in order to ensure the unity of business source code logic, we also simulated a ",(0,a.kt)("inlineCode",{parentName:"p"},"jsBridge")," concept in the browser environment.The browser's ",(0,a.kt)("inlineCode",{parentName:"p"},"jsBridge")," needs to be implemented by yourself, with reference ",(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("a",{parentName:"strong",href:"/en/docs/webview/jsbridge/browser-jsbridge"},'browser "bridge" implementation')),".\n:::"))}b.isMDXComponent=!0}}]);