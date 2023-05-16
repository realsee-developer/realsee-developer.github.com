"use strict";(self.webpackChunkrealsee_developer_github_com=self.webpackChunkrealsee_developer_github_com||[]).push([[8838],{3905:(e,t,a)=>{a.d(t,{Zo:()=>p,kt:()=>f});var r=a(67294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},l=Object.keys(e);for(r=0;r<l.length;r++)a=l[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)a=l[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var i=r.createContext({}),c=function(e){var t=r.useContext(i),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},p=function(e){var t=c(e.components);return r.createElement(i.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,l=e.originalType,i=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),u=c(a),d=n,f=u["".concat(i,".").concat(d)]||u[d]||m[d]||l;return a?r.createElement(f,o(o({ref:t},p),{},{components:a})):r.createElement(f,o({ref:t},p))}));function f(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var l=a.length,o=new Array(l);o[0]=d;var s={};for(var i in t)hasOwnProperty.call(t,i)&&(s[i]=t[i]);s.originalType=e,s[u]="string"==typeof e?e:n,o[1]=s;for(var c=2;c<l;c++)o[c]=a[c];return r.createElement.apply(null,o)}return r.createElement.apply(null,a)}d.displayName="MDXCreateElement"},85162:(e,t,a)=>{a.d(t,{Z:()=>o});var r=a(67294),n=a(86010);const l={tabItem:"tabItem_Ymn6"};function o(e){let{children:t,hidden:a,className:o}=e;return r.createElement("div",{role:"tabpanel",className:(0,n.Z)(l.tabItem,o),hidden:a},t)}},65488:(e,t,a)=>{a.d(t,{Z:()=>m});var r=a(87462),n=a(67294),l=a(86010),o=a(72389),s=a(67392),i=a(7094),c=a(12466);const p={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};function u(e){const{lazy:t,block:a,defaultValue:o,values:u,groupId:m,className:d}=e,f=n.Children.map(e.children,(e=>{if((0,n.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})),v=u??f.map((e=>{let{props:{value:t,label:a,attributes:r}}=e;return{value:t,label:a,attributes:r}})),b=(0,s.l)(v,((e,t)=>e.value===t.value));if(b.length>0)throw new Error(`Docusaurus error: Duplicate values "${b.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`);const g=null===o?o:o??f.find((e=>e.props.default))?.props.value??f[0].props.value;if(null!==g&&!v.some((e=>e.value===g)))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${g}" but none of its children has the corresponding value. Available values are: ${v.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);const{tabGroupChoices:y,setTabGroupChoices:h}=(0,i.U)(),[k,w]=(0,n.useState)(g),O=[],{blockElementScrollPositionUntilNextRender:N}=(0,c.o5)();if(null!=m){const e=y[m];null!=e&&e!==k&&v.some((t=>t.value===e))&&w(e)}const T=e=>{const t=e.currentTarget,a=O.indexOf(t),r=v[a].value;r!==k&&(N(t),w(r),null!=m&&h(m,String(r)))},E=e=>{let t=null;switch(e.key){case"Enter":T(e);break;case"ArrowRight":{const a=O.indexOf(e.currentTarget)+1;t=O[a]??O[0];break}case"ArrowLeft":{const a=O.indexOf(e.currentTarget)-1;t=O[a]??O[O.length-1];break}}t?.focus()};return n.createElement("div",{className:(0,l.Z)("tabs-container",p.tabList)},n.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,l.Z)("tabs",{"tabs--block":a},d)},v.map((e=>{let{value:t,label:a,attributes:o}=e;return n.createElement("li",(0,r.Z)({role:"tab",tabIndex:k===t?0:-1,"aria-selected":k===t,key:t,ref:e=>O.push(e),onKeyDown:E,onClick:T},o,{className:(0,l.Z)("tabs__item",p.tabItem,o?.className,{"tabs__item--active":k===t})}),a??t)}))),t?(0,n.cloneElement)(f.filter((e=>e.props.value===k))[0],{className:"margin-top--md"}):n.createElement("div",{className:"margin-top--md"},f.map(((e,t)=>(0,n.cloneElement)(e,{key:t,hidden:e.props.value!==k})))))}function m(e){const t=(0,o.Z)();return n.createElement(u,(0,r.Z)({key:String(t)},e))}},76920:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>f,frontMatter:()=>s,metadata:()=>c,toc:()=>u});var r=a(87462),n=(a(67294),a(3905)),l=a(65488),o=a(85162);const s={title:"\u5b89\u88c5"},i=void 0,c={unversionedId:"front/space-navigation/get-started/install",id:"front/space-navigation/get-started/install",title:"\u5b89\u88c5",description:"\u4f7f\u7528 npm \u6216 yarn \u5b89\u88c5",source:"@site/docs/front/space-navigation/get-started/0.install.md",sourceDirName:"front/space-navigation/get-started",slug:"/front/space-navigation/get-started/install",permalink:"/docs/front/space-navigation/get-started/install",draft:!1,tags:[],version:"current",lastUpdatedBy:"sansi.lcj",lastUpdatedAt:1669717185,formattedLastUpdatedAt:"2022\u5e7411\u670829\u65e5",sidebarPosition:0,frontMatter:{title:"\u5b89\u88c5"},sidebar:"\u7a7a\u95f4\u5bfc\u89c8",previous:{title:"\u4ecb\u7ecd",permalink:"/docs/front/space-navigation/intro"},next:{title:"\u5feb\u901f\u4e0a\u624b",permalink:"/docs/front/space-navigation/get-started/quick_start"}},p={},u=[{value:"\u4f7f\u7528 npm \u6216 yarn \u5b89\u88c5",id:"\u4f7f\u7528-npm-\u6216-yarn-\u5b89\u88c5",level:2}],m={toc:u},d="wrapper";function f(e){let{components:t,...a}=e;return(0,n.kt)(d,(0,r.Z)({},m,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h2",{id:"\u4f7f\u7528-npm-\u6216-yarn-\u5b89\u88c5"},"\u4f7f\u7528 npm \u6216 yarn \u5b89\u88c5"),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"https://www.npmjs.com/package/@realsee/vreo"},(0,n.kt)("img",{parentName:"a",src:"https://img.shields.io/npm/v/@realsee/vreo.svg?style=flat-square&logo=npm&label=npm%20install%20@realsee/vreo",alt:"npm version"}))),(0,n.kt)("p",null,"\u6211\u4eec\u63a8\u8350\u4f7f\u7528 ",(0,n.kt)("inlineCode",{parentName:"p"},"npm")," \u6216 ",(0,n.kt)("inlineCode",{parentName:"p"},"yarn")," \u7684\u65b9\u5f0f\u8fdb\u884c\u5f00\u53d1\uff0c\u4e0d\u4ec5\u53ef\u5728\u5f00\u53d1\u73af\u5883\u8f7b\u677e\u8c03\u8bd5\uff0c\u4e5f\u53ef\u653e\u5fc3\u5730\u5728\u751f\u4ea7\u73af\u5883\u6253\u5305\u90e8\u7f72\u4f7f\u7528\uff0c\u4eab\u53d7\u6574\u4e2a\u751f\u6001\u5708\u548c\u5de5\u5177\u94fe\u5e26\u6765\u7684\u8bf8\u591a\u597d\u5904\u3002"),(0,n.kt)("admonition",{type:"caution"},(0,n.kt)("p",{parentName:"admonition"},"\u7531\u4e8e ",(0,n.kt)("inlineCode",{parentName:"p"},"@realsee/vreo")," \u4f9d\u8d56 ",(0,n.kt)("a",{parentName:"p",href:"https://unpkg.com/@realsee/five/docs/index.html"},"Five")," \u548c ",(0,n.kt)("a",{parentName:"p",href:"https://reactjs.org/"},"React")," \uff0c\u8bf7\u52a1\u5fc5\u540c\u65f6\u5b89\u88c5\u76f8\u5173\u4f9d\u8d56\u3002")),(0,n.kt)(l.Z,{groupId:"npm2yarn",mdxType:"Tabs"},(0,n.kt)(o.Z,{value:"npm",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"npm install @realsee/vreo @realsee/five react react-dom\n"))),(0,n.kt)(o.Z,{value:"yarn",label:"Yarn",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"yarn add @realsee/vreo @realsee/five react react-dom\n"))),(0,n.kt)(o.Z,{value:"pnpm",label:"pnpm",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"pnpm add @realsee/vreo @realsee/five react react-dom\n")))))}f.isMDXComponent=!0}}]);