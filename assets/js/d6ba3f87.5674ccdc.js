"use strict";(self.webpackChunkrealsee_developer_github_com=self.webpackChunkrealsee_developer_github_com||[]).push([[1386],{3905:function(e,n,t){t.d(n,{Zo:function(){return c},kt:function(){return v}});var a=t(67294);function l(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function r(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?r(Object(t),!0).forEach((function(n){l(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,a,l=function(e,n){if(null==e)return{};var t,a,l={},r=Object.keys(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||(l[t]=e[t]);return l}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(l[t]=e[t])}return l}var p=a.createContext({}),u=function(e){var n=a.useContext(p),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},c=function(e){var n=u(e.components);return a.createElement(p.Provider,{value:n},e.children)},s={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},d=a.forwardRef((function(e,n){var t=e.components,l=e.mdxType,r=e.originalType,p=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),d=u(t),v=l,m=d["".concat(p,".").concat(v)]||d[v]||s[v]||r;return t?a.createElement(m,o(o({ref:n},c),{},{components:t})):a.createElement(m,o({ref:n},c))}));function v(e,n){var t=arguments,l=n&&n.mdxType;if("string"==typeof e||l){var r=t.length,o=new Array(r);o[0]=d;var i={};for(var p in n)hasOwnProperty.call(n,p)&&(i[p]=n[p]);i.originalType=e,i.mdxType="string"==typeof e?e:l,o[1]=i;for(var u=2;u<r;u++)o[u]=t[u];return a.createElement.apply(null,o)}return a.createElement.apply(null,t)}d.displayName="MDXCreateElement"},58215:function(e,n,t){t.d(n,{Z:function(){return l}});var a=t(67294);function l(e){var n=e.children,t=e.hidden,l=e.className;return a.createElement("div",{role:"tabpanel",hidden:t,className:l},n)}},9877:function(e,n,t){t.d(n,{Z:function(){return c}});var a=t(87462),l=t(67294),r=t(72389),o=t(65450),i=t(86010),p="tabItem_LplD";function u(e){var n,t,r,u=e.lazy,c=e.block,s=e.defaultValue,d=e.values,v=e.groupId,m=e.className,f=l.Children.map(e.children,(function(e){if((0,l.isValidElement)(e)&&void 0!==e.props.value)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),g=null!=d?d:f.map((function(e){var n=e.props;return{value:n.value,label:n.label,attributes:n.attributes}})),k=(0,o.lx)(g,(function(e,n){return e.value===n.value}));if(k.length>0)throw new Error('Docusaurus error: Duplicate values "'+k.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.');var b=null===s?s:null!=(n=null!=s?s:null==(t=f.find((function(e){return e.props.default})))?void 0:t.props.value)?n:null==(r=f[0])?void 0:r.props.value;if(null!==b&&!g.some((function(e){return e.value===b})))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+b+'" but none of its children has the corresponding value. Available values are: '+g.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");var h=(0,o.UB)(),N=h.tabGroupChoices,w=h.setTabGroupChoices,y=(0,l.useState)(b),P=y[0],T=y[1],F=[],O=(0,o.o5)().blockElementScrollPositionUntilNextRender;if(null!=v){var E=N[v];null!=E&&E!==P&&g.some((function(e){return e.value===E}))&&T(E)}var C=function(e){var n=e.currentTarget,t=F.indexOf(n),a=g[t].value;a!==P&&(O(n),T(a),null!=v&&w(v,a))},x=function(e){var n,t=null;switch(e.key){case"ArrowRight":var a=F.indexOf(e.currentTarget)+1;t=F[a]||F[0];break;case"ArrowLeft":var l=F.indexOf(e.currentTarget)-1;t=F[l]||F[F.length-1]}null==(n=t)||n.focus()};return l.createElement("div",{className:"tabs-container"},l.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,i.Z)("tabs",{"tabs--block":c},m)},g.map((function(e){var n=e.value,t=e.label,r=e.attributes;return l.createElement("li",(0,a.Z)({role:"tab",tabIndex:P===n?0:-1,"aria-selected":P===n,key:n,ref:function(e){return F.push(e)},onKeyDown:x,onFocus:C,onClick:C},r,{className:(0,i.Z)("tabs__item",p,null==r?void 0:r.className,{"tabs__item--active":P===n})}),null!=t?t:n)}))),u?(0,l.cloneElement)(f.filter((function(e){return e.props.value===P}))[0],{className:"margin-vert--md"}):l.createElement("div",{className:"margin-vert--md"},f.map((function(e,n){return(0,l.cloneElement)(e,{key:n,hidden:e.props.value!==P})}))))}function c(e){var n=(0,r.Z)();return l.createElement(u,(0,a.Z)({key:String(n)},e))}},97205:function(e,n,t){t.r(n),t.d(n,{assets:function(){return d},contentTitle:function(){return c},default:function(){return f},frontMatter:function(){return u},metadata:function(){return s},toc:function(){return v}});var a=t(87462),l=t(63366),r=(t(67294),t(3905)),o=t(9877),i=t(58215),p=["components"],u={title:"\ud83d\udce6 \u4fef\u89c6\u6a21\u578b\u6237\u578b\u56fe"},c=void 0,s={unversionedId:"front/3d-space/advanced/dnalogel/floorplan/TopviewFloorplanPlugin",id:"front/3d-space/advanced/dnalogel/floorplan/TopviewFloorplanPlugin",title:"\ud83d\udce6 \u4fef\u89c6\u6a21\u578b\u6237\u578b\u56fe",description:"TopviewFloorplanPlugin",source:"@site/docs/front/3d-space/advanced/dnalogel/floorplan/TopviewFloorplanPlugin.md",sourceDirName:"front/3d-space/advanced/dnalogel/floorplan",slug:"/front/3d-space/advanced/dnalogel/floorplan/TopviewFloorplanPlugin",permalink:"/docs/front/3d-space/advanced/dnalogel/floorplan/TopviewFloorplanPlugin",tags:[],version:"current",lastUpdatedBy:"Angry-Sparrow",lastUpdatedAt:1652939178,formattedLastUpdatedAt:"2022/5/19",frontMatter:{title:"\ud83d\udce6 \u4fef\u89c6\u6a21\u578b\u6237\u578b\u56fe"},sidebar:"\u4e09\u7ef4\u7a7a\u95f4",previous:{title:"\ud83d\udce6 \u6a21\u578b\u6237\u578b\u56fe",permalink:"/docs/front/3d-space/advanced/dnalogel/floorplan/ModelFloorplanPlugin"},next:{title:"\u6a21\u578b\u5206\u95f4\u6807\u7b7e",permalink:"/docs/front/3d-space/advanced/dnalogel/ModelRoomLabelPlugin"}},d={},v=[{value:"<strong>TopviewFloorplanPlugin</strong>",id:"topviewfloorplanplugin",level:2},{value:"\u793a\u4f8b\u6548\u679c",id:"\u793a\u4f8b\u6548\u679c",level:2},{value:"\u529f\u80fd\u8bf4\u660e",id:"\u529f\u80fd\u8bf4\u660e",level:2},{value:"\u5b89\u88c5\u5f15\u7528",id:"\u5b89\u88c5\u5f15\u7528",level:2},{value:"\u5f00\u53d1\u6307\u5357",id:"\u5f00\u53d1\u6307\u5357",level:2},{value:"\u521d\u59cb\u5316",id:"\u521d\u59cb\u5316",level:3},{value:"\u8f7d\u5165\u6570\u636e",id:"\u8f7d\u5165\u6570\u636e",level:3},{value:"\u6838\u5fc3\u65b9\u6cd5",id:"\u6838\u5fc3\u65b9\u6cd5",level:3},{value:"demo \u6e90\u7801\u53c2\u8003",id:"demo-\u6e90\u7801\u53c2\u8003",level:2}],m={toc:v};function f(e){var n=e.components,t=(0,l.Z)(e,p);return(0,r.kt)("wrapper",(0,a.Z)({},m,t,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"topviewfloorplanplugin"},(0,r.kt)("strong",{parentName:"h2"},"TopviewFloorplanPlugin")),(0,r.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"\u6b64\u63d2\u4ef6\u5f3a\u4f9d\u8d56\u4e8e",(0,r.kt)("strong",{parentName:"h5"},"\u6237\u578b\u56fe\u6570\u636e"),"\uff0c\u8bf7\u7387\u5148\u4e86\u89e3\u5982\u4f55\u83b7\u53d6\u6237\u578b\u56fe\u6570\u636e\u3002")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"})),(0,r.kt)("h2",{id:"\u793a\u4f8b\u6548\u679c"},"\u793a\u4f8b\u6548\u679c"),(0,r.kt)("p",null,"\u70b9\u51fb",(0,r.kt)("strong",{parentName:"p"},"\u4fef\u89c6\u6a21\u578b"),"\u6309\u94ae\uff0c\u67e5\u770b\u4fef\u89c6\u6a21\u578b\u72b6\u6001\u4e0b\u7684\u6237\u578b\u56fe\u5c55\u793a\u6548\u679c\u3002"),(0,r.kt)("div",{className:"docs-vr-normal"},(0,r.kt)("iframe",{className:"docs-vr-iframe",src:"https://realsee.js.org/dnalogel/src/TopviewFloorplanPlugin/index.html"})),(0,r.kt)("h2",{id:"\u529f\u80fd\u8bf4\u660e"},"\u529f\u80fd\u8bf4\u660e"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"\u4fef\u89c6\u6a21\u578b\u6237\u578b\u56fe\u63d2\u4ef6")," \u65e0\u7f1d\u96c6\u6210\u4e86\u4e00\u5957\u57fa\u4e8e VR 3D \u6a21\u578b\u72b6\u6001\u4e0b\u6237\u578b\u56fe\u4ea4\u4e92\u3002"),(0,r.kt)("p",null,"\u5176\u529f\u80fd\u4e3a ",(0,r.kt)("a",{parentName:"p",href:"/docs/front/3d-space/advanced/dnalogel/floorplan/ModelFloorplanPlugin"},"\u6a21\u578b\u6237\u578b\u56fe\u63d2\u4ef6 ModelFloorplanPlugin")," \u7684\u7b80\u7248\uff0c\u4ec5",(0,r.kt)("strong",{parentName:"p"},"\u5c55\u793a\u80fd\u529b"),"\uff0c\u76f8\u5173\u7528\u6cd5\u548c API \u53ef\u76f4\u63a5\u53c2\u8003 ",(0,r.kt)("a",{parentName:"p",href:"/docs/front/3d-space/advanced/dnalogel/floorplan/ModelFloorplanPlugin"},"ModelFloorplanPlugin"),"\u3002"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"\u533a\u522b")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"\u4fef\u89c6\u6a21\u578b\u6237\u578b\u56fe\u63d2\u4ef6")," \u4e0e ",(0,r.kt)("inlineCode",{parentName:"p"},"five")," \u5b9e\u4f8b\u7684 ",(0,r.kt)("inlineCode",{parentName:"p"},"Mode")," \u72b6\u6001\u505a\u4e86\u7ed1\u5b9a\uff1a\u5f53 ",(0,r.kt)("inlineCode",{parentName:"p"},"five.mode")," \u4e3a ",(0,r.kt)("inlineCode",{parentName:"p"},"Five.Mode.Topview")," \u4e14\u52a8\u753b\u6267\u884c\u5b8c\u6bd5\u65f6\uff0c\u4f1a\u81ea\u52a8\u5c55\u793a\u4e8c\u7ef4\u6237\u578b\u56fe\u6a21\u5757\u3002\u5f53\u4e0d\u5904\u5728",(0,r.kt)("inlineCode",{parentName:"p"},"Five.Mode.Topview")," \u72b6\u6001\u65f6\uff0c\u5219\u81ea\u52a8\u9690\u85cf\u4e8c\u7ef4\u6237\u578b\u56fe\u6a21\u5757\u3002"),(0,r.kt)("p",null,"\u56e0\u6b64\uff0c\u60a8\u53ef\u4ee5\u64cd\u4f5c ",(0,r.kt)("inlineCode",{parentName:"p"},"five.mode")," \u6765\u95f4\u63a5\u63a7\u5236\u4e8c\u7ef4\u6237\u578b\u56fe\u6a21\u5757\u7684\u5c55\u793a\u548c\u9690\u85cf\u3002\u5176\u4ed6\u529f\u80fd\u53ca API \u5b8c\u5168\u4e00\u81f4\u3002"),(0,r.kt)("h2",{id:"\u5b89\u88c5\u5f15\u7528"},"\u5b89\u88c5\u5f15\u7528"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"\u8bf7\u6309\u9700\u9009\u62e9 ",(0,r.kt)("inlineCode",{parentName:"strong"},"yarn")," \u6216 ",(0,r.kt)("inlineCode",{parentName:"strong"},"npm")," \u5b89\u88c5\u65b9\u5f0f\uff1a")),(0,r.kt)(o.Z,{groupId:"npm2yarn",mdxType:"Tabs"},(0,r.kt)(i.Z,{value:"npm",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"npm install @realsee/dnalogel\n"))),(0,r.kt)(i.Z,{value:"yarn",label:"Yarn",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"yarn add @realsee/dnalogel\n")))),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"\u901a\u8fc7 es \u5f15\u7528\uff1a")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx"},'import { TopviewFloorplanPlugin } from "@realsee/dnalogel"\n')),(0,r.kt)("h2",{id:"\u5f00\u53d1\u6307\u5357"},"\u5f00\u53d1\u6307\u5357"),(0,r.kt)("h3",{id:"\u521d\u59cb\u5316"},"\u521d\u59cb\u5316"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"\u65b9\u6cd51\uff1a\u5728\u521d\u59cb\u5316 ",(0,r.kt)("inlineCode",{parentName:"p"},"Five")," \u5b9e\u4f8b\u65f6\uff0c\u5c06 ",(0,r.kt)("inlineCode",{parentName:"p"},"TopviewFloorplanPlugin")," \u914d\u7f6e\u5728\u521d\u59cb\u5316\u63d2\u4ef6\u53c2\u6570\u5373\u53ef\u3002")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"import { Five } from '@realsee/five'\n\nconst five = new Five({\n    plugins: [\n        [\n            TopviewFloorplanPlugin,\n            'topviewFloorplanPlugin', // \u81ea\u5b9a\u4e49\u63d2\u4ef6\u540d\u79f0\n            {\n                // \u793a\u4f8b\u53c2\u6570\u914d\u7f6e\n                selector: '.plugin-full-screen-container',  // \u66ff\u6362\u6210\u60a8\u7684\u5bb9\u5668\u8282\u70b9\n                hoverEnable: true\n                /** \u662f\u5426\u5f00\u542f\u653e\u5927\u7f29\u5c0f\u548c\u62d6\u52a8\u529f\u80fd\uff0c\u9ed8\u8ba4\u4e3a false */\n                // gestureEnable?: boolean \n            }\n        ]\n    ]\n})\n")),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"\u65b9\u6cd52\uff1a\u5728\u521b\u5efa ",(0,r.kt)("inlineCode",{parentName:"p"},"FiveProvider")," \u65f6\uff0c\u5c06 ",(0,r.kt)("inlineCode",{parentName:"p"},"TopviewFloorplanPlugin")," \u914d\u7f6e\u5728\u521d\u59cb\u5316\u63d2\u4ef6\u53c2\u6570\u5373\u53ef\u3002")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"import { TopviewFloorplanPlugin } from \"@realsee/dnalogel\";\nimport { createFiveProvider, FiveCanvas } from \"@realsee/five/react\";\n\nconst FiveProvider = createFiveProvider({\n    plugins: [\n        [\n            TopviewFloorplanPlugin,\n            'topviewFloorplanPlugin', // \u81ea\u5b9a\u4e49\u63d2\u4ef6\u540d\u79f0\n            {\n                // \u793a\u4f8b\u53c2\u6570\u914d\u7f6e\n                selector: '.plugin-full-screen-container',  // \u66ff\u6362\u6210\u60a8\u7684\u5bb9\u5668\u8282\u70b9\n                hoverEnable: true\n                /** \u662f\u5426\u5f00\u542f\u653e\u5927\u7f29\u5c0f\u548c\u62d6\u52a8\u529f\u80fd\uff0c\u9ed8\u8ba4\u4e3a false */\n                // gestureEnable?: boolean \n            }\n        ]\n    ]\n});\n")),(0,r.kt)("h3",{id:"\u8f7d\u5165\u6570\u636e"},"\u8f7d\u5165\u6570\u636e"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"// \u83b7\u53d6\u63d2\u4ef6\u5b9e\u4f8b,\u5176\u4e2d `topviewFloorplanPlugin` \u662f\u521d\u59cb\u5316\u65f6\u81ea\u5b9a\u4e49\u7684\u540d\u79f0\nconst pluginInstance = five.plugins.topviewFloorplanPlugin \n\n// \u8c03\u7528 `load` \u65b9\u6cd5\u8f7d\u5165\u6237\u578b\u56fe\u6570\u636e\npluginInstance.load(floorplanServerData)\n")),(0,r.kt)("h3",{id:"\u6838\u5fc3\u65b9\u6cd5"},"\u6838\u5fc3\u65b9\u6cd5"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"TopviewFloorplanPlugin")," \u63d0\u4f9b\u7684\u6838\u5fc3\u65b9\u6cd5\u6709\uff1a"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"load(data: FloorplanServerData)")," \u8f7d\u5165\u6237\u578b\u56fe\u6570\u636e")),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"\u60a8\u9700\u8981\u624b\u52a8\u8f7d\u5165\u6237\u578b\u56fe\u6570\u636e\uff0c","[FloorplanServerData]"," \u7684\u6570\u636e\u6765\u6e90\u8bf7\u9605\u8bfb",(0,r.kt)("a",{parentName:"p",href:"http://developers.realsee.com/docs/#/docs/five/server/README"},"\u5982\u89c6\u5f00\u53d1\u8005\u4e2d\u5fc3\u670d\u52a1\u7aef API"),"\u3002")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"appendTo(wrapper: Element)")," \u6302\u8f7d DOM \u8282\u70b9")),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"\u5c06\u6237\u578b\u56feDOM\u6a21\u5757\u8f7d\u5165\u60a8\u7684 HTML \u7ed3\u6784\u4e2d\u3002")),(0,r.kt)("h2",{id:"demo-\u6e90\u7801\u53c2\u8003"},"demo \u6e90\u7801\u53c2\u8003"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/realsee-developer/dnalogel/tree/main/examples/src"},"demo \u6e90\u7801\u53c2\u8003")))}f.isMDXComponent=!0}}]);