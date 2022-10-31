"use strict";(self.webpackChunkrealsee_developer_github_com=self.webpackChunkrealsee_developer_github_com||[]).push([[1487],{49613:(e,t,a)=>{a.d(t,{Zo:()=>u,kt:()=>m});var n=a(59496);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var p=n.createContext({}),i=function(e){var t=n.useContext(p),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},u=function(e){var t=i(e.components);return n.createElement(p.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},c=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,l=e.originalType,p=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),c=i(a),m=r,v=c["".concat(p,".").concat(m)]||c[m]||d[m]||l;return a?n.createElement(v,o(o({ref:t},u),{},{components:a})):n.createElement(v,o({ref:t},u))}));function m(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=a.length,o=new Array(l);o[0]=c;var s={};for(var p in t)hasOwnProperty.call(t,p)&&(s[p]=t[p]);s.originalType=e,s.mdxType="string"==typeof e?e:r,o[1]=s;for(var i=2;i<l;i++)o[i]=a[i];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}c.displayName="MDXCreateElement"},45558:(e,t,a)=>{a.d(t,{Z:()=>o});var n=a(59496),r=a(45924);const l="tabItem_IPoj";function o(e){let{children:t,hidden:a,className:o}=e;return n.createElement("div",{role:"tabpanel",className:(0,r.Z)(l,o),hidden:a},t)}},38637:(e,t,a)=>{a.d(t,{Z:()=>m});var n=a(2962),r=a(59496),l=a(45924),o=a(26709),s=a(33548),p=a(14714),i=a(60411);const u="tabList_xr86",d="tabItem_r4_W";function c(e){var t;const{lazy:a,block:o,defaultValue:c,values:m,groupId:v,className:f}=e,g=r.Children.map(e.children,(e=>{if((0,r.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})),b=m??g.map((e=>{let{props:{value:t,label:a,attributes:n}}=e;return{value:t,label:a,attributes:n}})),h=(0,s.l)(b,((e,t)=>e.value===t.value));if(h.length>0)throw new Error(`Docusaurus error: Duplicate values "${h.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`);const k=null===c?c:c??(null==(t=g.find((e=>e.props.default)))?void 0:t.props.value)??g[0].props.value;if(null!==k&&!b.some((e=>e.value===k)))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${k}" but none of its children has the corresponding value. Available values are: ${b.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);const{tabGroupChoices:y,setTabGroupChoices:N}=(0,p.U)(),[w,O]=(0,r.useState)(k),T=[],{blockElementScrollPositionUntilNextRender:P}=(0,i.o5)();if(null!=v){const e=y[v];null!=e&&e!==w&&b.some((t=>t.value===e))&&O(e)}const E=e=>{const t=e.currentTarget,a=T.indexOf(t),n=b[a].value;n!==w&&(P(t),O(n),null!=v&&N(v,String(n)))},x=e=>{var t;let a=null;switch(e.key){case"Enter":E(e);break;case"ArrowRight":{const t=T.indexOf(e.currentTarget)+1;a=T[t]??T[0];break}case"ArrowLeft":{const t=T.indexOf(e.currentTarget)-1;a=T[t]??T[T.length-1];break}}null==(t=a)||t.focus()};return r.createElement("div",{className:(0,l.Z)("tabs-container",u)},r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,l.Z)("tabs",{"tabs--block":o},f)},b.map((e=>{let{value:t,label:a,attributes:o}=e;return r.createElement("li",(0,n.Z)({role:"tab",tabIndex:w===t?0:-1,"aria-selected":w===t,key:t,ref:e=>T.push(e),onKeyDown:x,onClick:E},o,{className:(0,l.Z)("tabs__item",d,null==o?void 0:o.className,{"tabs__item--active":w===t})}),a??t)}))),a?(0,r.cloneElement)(g.filter((e=>e.props.value===w))[0],{className:"margin-top--md"}):r.createElement("div",{className:"margin-top--md"},g.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==w})))))}function m(e){const t=(0,o.Z)();return r.createElement(c,(0,n.Z)({key:String(t)},e))}},13306:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>u,contentTitle:()=>p,default:()=>m,frontMatter:()=>s,metadata:()=>i,toc:()=>d});var n=a(2962),r=(a(59496),a(49613)),l=a(38637),o=a(45558);const s={title:"VR \u770b\u623f\u63d2\u4ef6\u4ecb\u7ecd"},p=void 0,i={unversionedId:"front/3d-space/advanced/dnalogel/intro",id:"front/3d-space/advanced/dnalogel/intro",title:"VR \u770b\u623f\u63d2\u4ef6\u4ecb\u7ecd",description:"npm version",source:"@site/docs/front/3d-space/advanced/dnalogel/intro.md",sourceDirName:"front/3d-space/advanced/dnalogel",slug:"/front/3d-space/advanced/dnalogel/intro",permalink:"/docs/front/3d-space/advanced/dnalogel/intro",draft:!1,tags:[],version:"current",lastUpdatedBy:"Angry-Sparrow",lastUpdatedAt:1652164007,formattedLastUpdatedAt:"2022\u5e745\u670810\u65e5",frontMatter:{title:"VR \u770b\u623f\u63d2\u4ef6\u4ecb\u7ecd"},sidebar:"\u4e09\u7ef4\u7a7a\u95f4",previous:{title:"\u6253\u6807\u7b7e",permalink:"/docs/front/3d-space/handbook/vue/tagging"},next:{title:'\u6a21\u578b"\u5c0f\u7a97"',permalink:"/docs/front/3d-space/advanced/dnalogel/ModelViewPlugin"}},u={},d=[{value:"\u4f7f\u7528\u8bf4\u660e",id:"\u4f7f\u7528\u8bf4\u660e",level:2},{value:"1\u3001\u5b89\u88c5",id:"1\u5b89\u88c5",level:3},{value:"2\u3001\u63d2\u4ef6\u6ce8\u518c",id:"2\u63d2\u4ef6\u6ce8\u518c",level:3},{value:"3\u3001\u63d2\u4ef6\u65b9\u6cd5\u4f7f\u7528",id:"3\u63d2\u4ef6\u65b9\u6cd5\u4f7f\u7528",level:3},{value:"4\u3001\u63d2\u4ef6\u4f9d\u8d56\u6570\u636e\u83b7\u53d6",id:"4\u63d2\u4ef6\u4f9d\u8d56\u6570\u636e\u83b7\u53d6",level:3},{value:"\u76f8\u5173\u94fe\u63a5",id:"\u76f8\u5173\u94fe\u63a5",level:2},{value:"\u6548\u679c\u9884\u89c8",id:"\u6548\u679c\u9884\u89c8",level:2}],c={toc:d};function m(e){let{components:t,...a}=e;return(0,r.kt)("wrapper",(0,n.Z)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://www.npmjs.com/package/@realsee/dnalogel"},(0,r.kt)("img",{parentName:"a",src:"https://img.shields.io/npm/v/@realsee/dnalogel.svg?style=flat-square&logo=npm&label=npm%20install%20@realsee/dnalogel",alt:"npm version"}))),(0,r.kt)("p",null,"@realsee/dnalogel \u5c06 ",(0,r.kt)("a",{parentName:"p",href:"https://realsee.com"},"\u5982\u89c6(realsee.com)")," ",(0,r.kt)("strong",{parentName:"p"},"VR \u770b\u623f")," \u5e38\u7528\u80fd\u529b\u6c89\u6dc0\uff0c\u5e76\u4ee5 ",(0,r.kt)("inlineCode",{parentName:"p"},"Five Plugins")," \u5f62\u5f0f\u8fdb\u884c\u62bd\u8c61\u3002\n\u7ed3\u5408",(0,r.kt)("a",{parentName:"p",href:"https://open-platform.realsee.com/developer/docs/front/3d-space/get-started/rendering-engine/"},"\u5982\u89c6 VR \u770b\u623f SDK Five"),"\n\u4e0e ",(0,r.kt)("a",{parentName:"p",href:"https://open-platform.realsee.com/developer/open/api/#/"},"\u5982\u89c6\u5f00\u653e API")," ,\u53ef\u4ee5\u5236\u4f5c\u51fa\u4e30\u5bcc\u591a\u5f69\u7684\u4e09\u7ef4\u7a7a\u95f4\u5e94\u7528\u3002\u4e0d\u8bba\u662f\u7ecf\u8fc7\u7ebf\u4e0a\u73af\u5883\u5343\u9524\u767e\u70bc\u7684\u521a\u9700\u529f\u80fd\uff0c\u8fd8\u662f\u7075\u611f\u4e00\u73b0\u7684\u70ab\u9177\u5c1d\u8bd5\uff0c\u6240\u6709\u5df2\u7ecf\u843d\u5730\u7684\u529f\u80fd\u6211\u4eec\u5747\u6beb\u65e0\u4fdd\u7559\u7684\u5f00\u6e90\u81f3github ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/realsee-developer/dnalogel"},"realsee-developer/dnalogel")," \u3002"),(0,r.kt)("h2",{id:"\u4f7f\u7528\u8bf4\u660e"},"\u4f7f\u7528\u8bf4\u660e"),(0,r.kt)("h3",{id:"1\u5b89\u88c5"},"1\u3001\u5b89\u88c5"),(0,r.kt)(l.Z,{groupId:"npm2yarn",mdxType:"Tabs"},(0,r.kt)(o.Z,{value:"npm",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"npm install @realsee/dnalogel\n"))),(0,r.kt)(o.Z,{value:"yarn",label:"Yarn",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"yarn add @realsee/dnalogel\n")))),(0,r.kt)("p",null,"2.x \u7248\u672c\u4f9d\u8d56 ",(0,r.kt)("inlineCode",{parentName:"p"},"svelte"),"\uff0c \u4f7f\u7528\u65f6\u8bf7\u540c\u65f6\u5b89\u88c5:"),(0,r.kt)(l.Z,{groupId:"npm2yarn",mdxType:"Tabs"},(0,r.kt)(o.Z,{value:"npm",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"npm install svelte \n"))),(0,r.kt)(o.Z,{value:"yarn",label:"Yarn",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"yarn add svelte\n")))),(0,r.kt)("h3",{id:"2\u63d2\u4ef6\u6ce8\u518c"},"2\u3001\u63d2\u4ef6\u6ce8\u518c"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"import { Five } from '@realsee/five'\nimport { Plugin } from '@realsee/dnalogel'\nconst five = new Five({\n  plugins: [[Plugin, 'PluginName', initOptions]],\n})\n")),(0,r.kt)("h3",{id:"3\u63d2\u4ef6\u65b9\u6cd5\u4f7f\u7528"},"3\u3001\u63d2\u4ef6\u65b9\u6cd5\u4f7f\u7528"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"// \u4e0d\u540c\u63d2\u4ef6\u63d0\u4f9b\u7684\u65b9\u6cd5\u53ef\u80fd\u5b58\u5728\u5dee\u5f02,\u8bf7\u53c2\u8003\u5404\u63d2\u4ef6 API \u6587\u6863\nfive.plugins.PluginName.load(data)\nfive.plugins.PluginName.enable()\nfive.plugins.PluginName.disable()\nfive.plugins.PluginName.dispose()\n")),(0,r.kt)("h3",{id:"4\u63d2\u4ef6\u4f9d\u8d56\u6570\u636e\u83b7\u53d6"},"4\u3001\u63d2\u4ef6\u4f9d\u8d56\u6570\u636e\u83b7\u53d6"),(0,r.kt)("p",null,"\u60a8\u53ef\u4ee5\u901a\u8fc7 ",(0,r.kt)("a",{parentName:"p",href:"https://open-platform.realsee.com/developer/open/api#/"},"open API")," \u67e5\u770b\u6570\u636e\u83b7\u53d6\u65b9\u5f0f\u53ca\u76f8\u5173 open API \u3002"),(0,r.kt)("h2",{id:"\u76f8\u5173\u94fe\u63a5"},"\u76f8\u5173\u94fe\u63a5"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://unpkg.com/@realsee/dnalogel/docs/index.html"},"API \u6587\u6863")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/realsee-developer/dnalogel/tree/main/examples/src"},"demo \u6e90\u7801")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://open-platform.realsee.com/developer/open/api/"},"\u6570\u636e\u4f9d\u8d56\u6765\u6e90\uff1aopen API")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/realsee-developer/dnalogel/blob/main/plugins/CHANGELOG.md"},"CHANGELOG"))),(0,r.kt)("h2",{id:"\u6548\u679c\u9884\u89c8"},"\u6548\u679c\u9884\u89c8"),(0,r.kt)("p",null,"\u6211\u4eec\u4e3a\u6bcf\u4e2a\u63d2\u4ef6\u4e66\u5199\u4e86\u7b80\u5355\u7684\u6548\u679c\u793a\u4f8b\uff0c\u60a8\u53ef\u70b9\u51fb\u9884\u89c8\uff1a\n",(0,r.kt)("a",{parentName:"p",href:"https://realsee.js.org/dnalogel/"},"@realsee/dnalogel showcase")))}m.isMDXComponent=!0}}]);