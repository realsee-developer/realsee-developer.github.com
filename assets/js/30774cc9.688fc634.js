"use strict";(self.webpackChunkrealsee_developer_github_com=self.webpackChunkrealsee_developer_github_com||[]).push([[6059],{49613:(e,t,n)=>{n.d(t,{Zo:()=>m,kt:()=>u});var a=n(59496);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),p=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},m=function(e){var t=p(e.components);return a.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},c=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,m=i(e,["components","mdxType","originalType","parentName"]),c=p(n),u=r,k=c["".concat(s,".").concat(u)]||c[u]||d[u]||o;return n?a.createElement(k,l(l({ref:t},m),{},{components:n})):a.createElement(k,l({ref:t},m))}));function u(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,l=new Array(o);l[0]=c;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:r,l[1]=i;for(var p=2;p<o;p++)l[p]=n[p];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}c.displayName="MDXCreateElement"},45558:(e,t,n)=>{n.d(t,{Z:()=>l});var a=n(59496),r=n(45924);const o="tabItem_IPoj";function l(e){let{children:t,hidden:n,className:l}=e;return a.createElement("div",{role:"tabpanel",className:(0,r.Z)(o,l),hidden:n},t)}},38637:(e,t,n)=>{n.d(t,{Z:()=>u});var a=n(2962),r=n(59496),o=n(45924),l=n(26709),i=n(33548),s=n(14714),p=n(60411);const m="tabList_xr86",d="tabItem_r4_W";function c(e){var t;const{lazy:n,block:l,defaultValue:c,values:u,groupId:k,className:v}=e,b=r.Children.map(e.children,(e=>{if((0,r.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})),f=u??b.map((e=>{let{props:{value:t,label:n,attributes:a}}=e;return{value:t,label:n,attributes:a}})),g=(0,i.l)(f,((e,t)=>e.value===t.value));if(g.length>0)throw new Error(`Docusaurus error: Duplicate values "${g.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`);const h=null===c?c:c??(null==(t=b.find((e=>e.props.default)))?void 0:t.props.value)??b[0].props.value;if(null!==h&&!f.some((e=>e.value===h)))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${h}" but none of its children has the corresponding value. Available values are: ${f.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);const{tabGroupChoices:N,setTabGroupChoices:w}=(0,s.U)(),[y,j]=(0,r.useState)(h),S=[],{blockElementScrollPositionUntilNextRender:x}=(0,p.o5)();if(null!=k){const e=N[k];null!=e&&e!==y&&f.some((t=>t.value===e))&&j(e)}const C=e=>{const t=e.currentTarget,n=S.indexOf(t),a=f[n].value;a!==y&&(x(t),j(a),null!=k&&w(k,String(a)))},T=e=>{var t;let n=null;switch(e.key){case"Enter":C(e);break;case"ArrowRight":{const t=S.indexOf(e.currentTarget)+1;n=S[t]??S[0];break}case"ArrowLeft":{const t=S.indexOf(e.currentTarget)-1;n=S[t]??S[S.length-1];break}}null==(t=n)||t.focus()};return r.createElement("div",{className:(0,o.Z)("tabs-container",m)},r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":l},v)},f.map((e=>{let{value:t,label:n,attributes:l}=e;return r.createElement("li",(0,a.Z)({role:"tab",tabIndex:y===t?0:-1,"aria-selected":y===t,key:t,ref:e=>S.push(e),onKeyDown:T,onClick:C},l,{className:(0,o.Z)("tabs__item",d,null==l?void 0:l.className,{"tabs__item--active":y===t})}),n??t)}))),n?(0,r.cloneElement)(b.filter((e=>e.props.value===y))[0],{className:"margin-top--md"}):r.createElement("div",{className:"margin-top--md"},b.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==y})))))}function u(e){const t=(0,l.Z)();return r.createElement(c,(0,a.Z)({key:String(t)},e))}},31500:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>k,frontMatter:()=>l,metadata:()=>s,toc:()=>m});var a=n(2962),r=(n(59496),n(49613)),o=n(38637);n(45558);const l={title:"\u6539\u53d8\u89c6\u89d2"},i=void 0,s={unversionedId:"front/3d-space/handbook/no-framework/knowing-state",id:"front/3d-space/handbook/no-framework/knowing-state",title:"\u6539\u53d8\u89c6\u89d2",description:"\u4e0a\u4e00\u7ae0\u56de\u987e: \u5c55\u793a\u4e09\u7ef4\u7a7a\u95f4",source:"@site/docs/front/3d-space/handbook/no-framework/2.knowing-state.md",sourceDirName:"front/3d-space/handbook/no-framework",slug:"/front/3d-space/handbook/no-framework/knowing-state",permalink:"/docs/front/3d-space/handbook/no-framework/knowing-state",draft:!1,tags:[],version:"current",lastUpdatedBy:"Junchao Gao",lastUpdatedAt:1667205691,formattedLastUpdatedAt:"2022\u5e7410\u670831\u65e5",sidebarPosition:2,frontMatter:{title:"\u6539\u53d8\u89c6\u89d2"},sidebar:"\u4e09\u7ef4\u7a7a\u95f4",previous:{title:"\u5c55\u793a\u4e09\u7ef4\u7a7a\u95f4",permalink:"/docs/front/3d-space/handbook/no-framework/displaying-work"},next:{title:"\u72b6\u6001\u5f55\u5236",permalink:"/docs/front/3d-space/handbook/no-framework/recording-state"}},p={},m=[{value:"\u51c6\u5907\u5de5\u4f5c",id:"\u51c6\u5907\u5de5\u4f5c",level:2},{value:"\u4ec0\u4e48\u662f State",id:"\u4ec0\u4e48\u662f-state",level:2},{value:"State \u7b80\u4ecb",id:"state-\u7b80\u4ecb",level:3},{value:"State \u7684\u6570\u636e\u7ed3\u6784\u53ca\u8bf4\u660e",id:"state-\u7684\u6570\u636e\u7ed3\u6784\u53ca\u8bf4\u660e",level:3},{value:"state \u76f8\u5173\u7684 api \u6709\u4ec0\u4e48",id:"state-\u76f8\u5173\u7684-api-\u6709\u4ec0\u4e48",level:3},{value:"state / currentState \u7684\u533a\u522b",id:"state--currentstate-\u7684\u533a\u522b",level:3},{value:"\u5f00\u53d1\u4e00\u4e2a\u81ea\u52a8\u73af\u89c6\u7684\u529f\u80fd",id:"\u5f00\u53d1\u4e00\u4e2a\u81ea\u52a8\u73af\u89c6\u7684\u529f\u80fd",level:2},{value:"\u4e66\u5199\u73af\u89c6\u529f\u80fd",id:"\u4e66\u5199\u73af\u89c6\u529f\u80fd",level:3},{value:"\u6dfb\u52a0\u73af\u89c6\u529f\u80fd\u7684 UI \u6309\u94ae",id:"\u6dfb\u52a0\u73af\u89c6\u529f\u80fd\u7684-ui-\u6309\u94ae",level:4},{value:"\u4e66\u5199\u903b\u8f91\u4ee3\u7801",id:"\u4e66\u5199\u903b\u8f91\u4ee3\u7801",level:4},{value:"\u4e0b\u4e00\u7ae0\u8282\u4f60\u4f1a\u5b66\u5230",id:"\u4e0b\u4e00\u7ae0\u8282\u4f60\u4f1a\u5b66\u5230",level:2}],d=(c="TableItem",function(e){return console.warn("Component "+c+" was not imported, exported, or provided by MDXProvider as global scope"),(0,r.kt)("div",e)});var c;const u={toc:m};function k(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},(0,r.kt)("strong",{parentName:"p"},"\u4e0a\u4e00\u7ae0\u56de\u987e: \u5c55\u793a\u4e09\u7ef4\u7a7a\u95f4")," ",(0,r.kt)("br",null)),(0,r.kt)("ul",{parentName:"blockquote"},(0,r.kt)("li",{parentName:"ul"},"\u4f60\u4e86\u89e3\u4ec0\u4e48\u662f ",(0,r.kt)("strong",{parentName:"li"},"Work"),", \u4ee5\u53ca\u5982\u4f55\u83b7\u53d6\u548c\u52a0\u8f7d\u3002",(0,r.kt)("br",null)),(0,r.kt)("li",{parentName:"ul"},"\u5982\u4f55\u5c55\u793a\u4e09\u7ef4\u7a7a\u95f4\uff0c\u5e76\u4e14\u5728\u6b64\u57fa\u7840\u4e0a\u5f00\u53d1\u529f\u80fd\u6765\u63a7\u5236\u4e09\u7ef4\u7a7a\u95f4\u3002"))),(0,r.kt)("admonition",{title:"\u672c\u7ae0\u4f60\u53ef\u4ee5\u5b66\u4e60\u5230",type:"tip"},(0,r.kt)("ul",{parentName:"admonition"},(0,r.kt)("li",{parentName:"ul"},"\u4e86\u89e3\u4ec0\u4e48\u662f ",(0,r.kt)("strong",{parentName:"li"},"State"),"\u3002"),(0,r.kt)("li",{parentName:"ul"},"\u5982\u4f55\u6539\u53d8\u4e09\u7ef4\u7a7a\u95f4\u89c2\u5bdf\u7684\u65b9\u5411 / \u4f4d\u7f6e\u3002"),(0,r.kt)("li",{parentName:"ul"},"\u4e86\u89e3\u4e0a\u4e00\u7ae0\u7684\u4ee3\u7801\uff0c\u6bd4\u5982 ",(0,r.kt)("inlineCode",{parentName:"li"},"setState")," ",(0,r.kt)("inlineCode",{parentName:"li"},"stateChange")," \u662f\u5982\u4f55\u5de5\u4f5c\u7684\u3002"),(0,r.kt)("li",{parentName:"ul"},"\u901a\u8fc7 ",(0,r.kt)("strong",{parentName:"li"},"State")," \u5b8c\u6210\u4e86\u81ea\u52a8\u73af\u89c6\u7684\u529f\u80fd\u3002"))),(0,r.kt)("h2",{id:"\u51c6\u5907\u5de5\u4f5c"},"\u51c6\u5907\u5de5\u4f5c"),(0,r.kt)("p",null,"\u548c\u4e0a\u4e00\u7ae0\u8282\u4e00\u6837\uff0c\u6211\u4eec\u65b0\u5efa\u4e00\u4e2a\u76ee\u5f55\uff08",(0,r.kt)("inlineCode",{parentName:"p"},"src/2.knowing-state"),"\uff09\u4ee5\u53ca\u5bf9\u5e94\u7684 ",(0,r.kt)("strong",{parentName:"p"},"html")," \u6587\u4ef6 \u4ee5\u53ca ",(0,r.kt)("strong",{parentName:"p"},"js")," \u6216 ",(0,r.kt)("strong",{parentName:"p"},"ts")," \u6587\u4ef6\u3002"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"js")," \u6216 ",(0,r.kt)("strong",{parentName:"p"},"ts")," \u6587\u4ef6\u53ef\u4ee5\u5148\u62f7\u8d1d\u4e0a\u4e00\u7ae0\u8282\u7684\u5185\u5bb9\u3002"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-html",metastring:'title="src/2.knowing-state/index.html"',title:'"src/2.knowing-state/index.html"'},'<!DOCTYPE html>\n<html lang="en">\n<head>\n  <meta charset="UTF-8">\n  <meta http-equiv="X-UA-Compatible" content="IE=edge">\n  <link rel="icon" href="data:;base64,iVBORw0KGgo=">\n  <meta name="viewport" content="width=device-width, initial-scale=1.0">\n  <title>\u5c55\u793a\u7a7a\u95f4 | Displaying work</title>\n  <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.1/dist/css/bootstrap.min.css" rel="stylesheet" crossorigin="anonymous">\n  <link href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.5.0/font/bootstrap-icons.css" rel="stylesheet">\n  <style>\n    html, body, #app { width: 100%; height: 100%; overflow: hidden; }\n  </style>\n</head>\n<body>\n  <div id="app"></div>\n  \x3c!-- \u6a21\u5f0f\u5207\u6362 --\x3e\n  <nav class="navbar fixed-bottom navbar-light bg-light">\n    <div class="container-fluid justify-content-center">\n      <div class="btn-group">\n        <a href="javascript:;" class="btn btn-primary active js-Panorama">\u5168\u666f\u6f2b\u6e38</a>\n        <a href="javascript:;" class="btn btn-primary js-Floorplan">\u7a7a\u95f4\u603b\u89c8</a>\n      </div>\n    </div>\n  </nav>\n  <script type="module" src="./index"><\/script>\n</body>\n</html>\n')),(0,r.kt)(o.Z,{mdxType:"Tabs"},(0,r.kt)(d,{value:"JavaScript",mdxType:"TableItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js",metastring:'title="src/2.knowing-state/index.js"',title:'"src/2.knowing-state/index.js"'},'import { Five, parseWork } from "@realsee/five";\n\nconst workURL = "https://vrlab-public.ljcdn.com/release/static/image/release/five/work-sample/07bdc58f413bc5494f05c7cbb5cbdce4/work.json";\n\nconst five = new Five();\n\nfive.appendTo(document.querySelector("#app"));\n\nfetch(workURL).then(res => res.json()).then((json) => {\n  const work = parseWork(json);\n  five.load(work);\n});\n\nwindow.addEventListener("resize", () => five.refresh(), false);\n\n{ // === \u6a21\u5f0f\u5207\u6362 ===\n  const buttons = {\n    "Panorama": document.querySelector(".js-Panorama"),\n    "Floorplan": document.querySelector(".js-Floorplan")\n  };\n\n  for (const [modeName, element] of Object.entries(buttons)) {\n    element.addEventListener("click", () => {\n      five.setState({ mode: modeName });\n    }, false);\n  }\n\n  five.on("stateChange", state => {\n    for (const [modeName, element] of Object.entries(buttons)) {\n      if (modeName === state.mode) {\n        element.classList.add("active");\n      } else {\n        element.classList.remove("active");\n      }\n    };\n  });\n}\n\nexport {};\n\n'))),(0,r.kt)(d,{value:"TypeScript",mdxType:"TableItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts",metastring:'title="src/2.knowing-state/index.ts"',title:'"src/2.knowing-state/index.ts"'},'import { Five, Mode, parseWork } from "@realsee/five";\n\nconst workURL = "https://vrlab-public.ljcdn.com/release/static/image/release/five/work-sample/07bdc58f413bc5494f05c7cbb5cbdce4/work.json";\n\nconst five = new Five();\n\nfive.appendTo(document.querySelector("#app")!);\n\nfetch(workURL).then(res => res.json()).then((json) => {\n  const work = parseWork(json);\n  five.load(work);\n});\n\nwindow.addEventListener("resize", () => five.refresh(), false);\n\n{ // === \u6a21\u5f0f\u5207\u6362 ===\n  const buttons: Partial<Record<Mode, Element>> = {\n    "Panorama": document.querySelector(".js-Panorama")!,\n    "Floorplan": document.querySelector(".js-Floorplan")!\n  };\n\n  for (const [modeName, element] of Object.entries(buttons)) {\n    element.addEventListener("click", () => {\n      five.setState({ mode: modeName as Mode });\n    }, false);\n  }\n\n  five.on("stateChange", state => {\n    for (const [modeName, element] of Object.entries(buttons)) {\n      if (modeName === state.mode) {\n        element.classList.add("active");\n      } else {\n        element.classList.remove("active");\n      }\n    };\n  });\n}\n\nexport {};\n')))),(0,r.kt)("p",null,"\u542f\u52a8\u670d\u52a1 ",(0,r.kt)("inlineCode",{parentName:"p"},"npm run dev"),'\u3002 \u5e76\u8df3\u8f6c\u5230\u5f53\u524d\u9875\u9762 " http://localhost:3000/src/2.knowing-state/index.html "\u3002'),(0,r.kt)("admonition",{type:"tip"},(0,r.kt)("p",{parentName:"admonition"},"\u8bf7\u67e5\u770b\u4f60\u7684\u63a7\u5236\u53f0\uff0c\u7aef\u53e3\u53f7\u4f1a\u56e0\u4e3a\u4f60\u7684\u914d\u7f6e\u4ee5\u53ca\u5f53\u524d\u7aef\u53e3\u5360\u7528\u60c5\u51b5\u53d8\u66f4\uff0c\u8bf7\u5df2\u63a7\u5236\u53f0\u8f93\u51fa\u7684\u4e3a\u51c6\u3002",(0,r.kt)("br",{parentName:"p"}),"\n","\u5982\u679c\u4f60\u4f7f\u7528\u5176\u4ed6\u5f00\u53d1\u6784\u5efa\u5de5\u5177\uff0c\u8bf7\u6309\u7167\u81ea\u5df1\u7684\u5f00\u53d1\u6784\u5efa\u5de5\u5177\u7684\u8981\u6c42\u542f\u52a8\u670d\u52a1\u3002")),(0,r.kt)("h2",{id:"\u4ec0\u4e48\u662f-state"},"\u4ec0\u4e48\u662f State"),(0,r.kt)("p",null,"\u53c8\u6765\u4e86\u89e3\u6982\u5ff5\u4e86\uff0c\u6211\u4fdd\u8bc1\u8fd9\u662f\u73b0\u9636\u6bb5\u9700\u8981\u4e86\u89e3\u7684\u6700\u540e\u4e00\u4e2a\u7406\u8bba\u77e5\u8bc6\u4e86\u3002"),(0,r.kt)("h3",{id:"state-\u7b80\u4ecb"},"State \u7b80\u4ecb"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"State")," \u7528\u4e8e\u63cf\u8ff0\u72b6\u6001\u7684\u6570\u636e\u7ed3\u6784\u3002\u4e0a\u4e00\u7ae0\u6211\u4eec\u4e86\u89e3\u4e86 ",(0,r.kt)("strong",{parentName:"p"},"Work"),", ",(0,r.kt)("strong",{parentName:"p"},"Work")," \u662f\u7528\u4e8e\u63cf\u8ff0\u4e00\u4e2a\u4e09\u7ef4\u7a7a\u95f4\uff0c\u90a3\u4e48 ",(0,r.kt)("strong",{parentName:"p"},"State")," \u5219\u662f\u63cf\u8ff0\u5728\u8fd9\u4e2a\u4e09\u7ef4\u7a7a\u95f4\u5185\uff0c\u76ee\u524d\u6b63\u5728\u5904\u4e8e\u4ec0\u4e48\u72b6\u6001\u3002\u4ed6\u5305\u542b\u4e86\u6a21\u6001\u3001\u4f4d\u4e8e\u7684\u91c7\u96c6\u70b9\u4f4d\u3001\u76f8\u673a\u7684\u65b9\u5411\u3001\u76f8\u673a\u53ef\u89c6\u89d2\u5ea6\u7684\u4fe1\u606f\u3002"),(0,r.kt)("h3",{id:"state-\u7684\u6570\u636e\u7ed3\u6784\u53ca\u8bf4\u660e"},"State \u7684\u6570\u636e\u7ed3\u6784\u53ca\u8bf4\u660e"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},'interface State {\n  "mode": Five.Mode,\n  "panoIndex": number,\n  "longitude": number,\n  "latitude": number,\n  "fov": number,\n  "offset": THEEE.Vector3\n}\n')),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"State"),"\u7684\u6570\u636e\u63cf\u8ff0"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"mode"),": \u5f53\u524d\u7684\u6a21\u6001\nFive \u5e38\u7528\u6709 5 \u79cd\u6a21\u6001\uff0c\u53ef\u4ee5\u4f7f\u7528 ",(0,r.kt)("inlineCode",{parentName:"p"},"Five.Mode")," \u83b7\u5f97"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Panorama: \u5168\u666f\u6e38\u8d70\u6a21\u6001\uff0c\u8be5\u6a21\u6001\u4e0b\u89c6\u56fe\u5c06\u5728\u91c7\u96c6\u70b9\u95f4\u6e38\u8d70\uff0c\u624b\u52bf\u64cd\u4f5c\u53ef\u4ee5\u65cb\u8f6c/\u653e\u5927\u89c6\u89d2/\u5207\u6362\u91c7\u96c6\u70b9\uff0c\u9002\u5408\u67e5\u770b\u91c7\u96c6\u7684\u5168\u666f\u4fe1\u606f\u3002"),(0,r.kt)("li",{parentName:"ul"},"Floorplan: \u7a7a\u95f4\u603b\u89c8\u6a21\u6001, \u8be5\u6a21\u6001\u4e0b\u89c6\u56fe\u4ee5\u6a21\u578b\u4e3a\u4e2d\u5fc3\uff0c\u624b\u52bf\u64cd\u4f5c\u53ef\u4ee5\u65cb\u8f6c/\u653e\u5927\u6a21\u578b/\u5207\u6362\u697c\u5c42\uff0c\u9002\u5408\u67e5\u770b\u6a21\u578b\u7684\u6574\u4f53\u6548\u679c\u3002"),(0,r.kt)("li",{parentName:"ul"},"Topview: \u6237\u578b\u56fe\u6a21\u6001\uff0c\u8be5\u6a21\u6001\u4e0b\u89c6\u56fe\u4ee5\u6a21\u578b\u4e3a\u4e2d\u5fc3\uff0c\u5782\u76f4\u4fef\u89c6\u6a21\u578b\uff0c\u624b\u52bf\u64cd\u4f5c\u53ef\u4ee5\u5e73\u79fb/\u653e\u5927\u6a21\u578b/\u5207\u6362\u697c\u5c42\uff0c\u9002\u5408\u67e5\u770b\u6a21\u578b\u5e73\u9762\u7ed3\u6784\u3002"),(0,r.kt)("li",{parentName:"ul"},"Model: \u6a21\u578b\u6e38\u8d70\u6a21\u6001\uff0c\u8be5\u6a21\u6001\u4e0b\u89c6\u56fe\u5c06\u5728\u6a21\u578b\u4e2d\u81ea\u7531\u6e38\u8d70\uff0c\u624b\u52bf\u64cd\u4f5c\u53ef\u4ee5\u65cb\u8f6c/\u653e\u5927\u89c6\u89d2/\u4f4d\u79fb\uff0c\u9002\u5408\u67e5\u770b\u6a21\u578b\u7684\u7ec6\u8282\uff0c\u505a\u4e00\u4e9b\u5b9a\u4f4d\u64cd\u4f5c\u3002"),(0,r.kt)("li",{parentName:"ul"},"VRPanorama: VR \u773c\u955c\u6a21\u6001\uff0c\u8be5\u6a21\u6001\u4e0b\u53ef\u4ee5\u4f7f\u7528 ",(0,r.kt)("a",{parentName:"li",href:"https://arvr.google.com/cardboard/"},"Cardboard \u773c\u955c")," \u6216\u8005\u4ed6\u7684\u7b2c\u4e09\u65b9\u884d\u751f\u4ea7\u54c1\uff0c\u5b9e\u73b0 VR \u865a\u62df\u663e\u793a\u6548\u679c\u3002"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"panoIndex"),": \u91c7\u96c6\u70b9\u4f4d\uff0c\u5373\u5728 Panorama \u6a21\u6001\u53ef\u4ee5\u843d\u811a\u7684\u4f4d\u7f6e\u3002\u662f\u4e00\u4e2a ",(0,r.kt)("inlineCode",{parentName:"p"},"work[observers]")," \u7684\u4e00\u4e2a\u7d22\u5f15\u3002")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"longitude")," / ",(0,r.kt)("inlineCode",{parentName:"p"},"latitude"),": \u76f8\u673a\u7684\u6c34\u5e73\u89d2 / \u76f8\u673a\u7684\u504f\u822a\u89d2\uff08\u5f27\u5ea6\uff09\uff0c\u6211\u4eec\u4f7f\u7528\u7c7b\u4f3c\u7ecf\u7eac\u5ea6\u7684\u65b9\u5f0f\u63cf\u8ff0\u76f8\u673a\u4f4d\u7f6e\u3002"),(0,r.kt)("p",{parentName:"li"},"\u6574\u4e2a\u6a21\u578b\u573a\u666f\u4e3a\u4e00\u4e2a\u53f3\u624b\u7b1b\u5361\u5c14\u5750\u6807\u7cfb, ",(0,r.kt)("inlineCode",{parentName:"p"},"XZ"),"\u5e73\u9762\u5e73\u884c\u4e8e\u5730\u9762\uff0c ",(0,r.kt)("inlineCode",{parentName:"p"},"Y"),"\u8f74\u5782\u76f4\u4e8e\u5730\u9762\u3002"),(0,r.kt)("p",{parentName:"li"},(0,r.kt)("img",{parentName:"p",src:"https://vrlab-public.ljcdn.com/common/file/web/2f331826-4b15-4da5-9603-50c1287b38f7.svg",alt:"\u53f3\u624b\u5750\u6807\u7cfb\u56fe\u793a\u8865\u5145\u56fe\u7247"})),(0,r.kt)("p",{parentName:"li"},"\u521d\u59cb\u76f8\u673a\u65b9\u5411\u4e3a\u539f\u70b9\u770b\u5411 ",(0,r.kt)("strong",{parentName:"p"},"Z \u8f74\u8d1f\u65b9\u5411"),"\u3002"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"\u589e\u52a0 ",(0,r.kt)("inlineCode",{parentName:"li"},"longitude")," \u76f8\u673a\u5411\u5de6\u65cb\u8f6c"),(0,r.kt)("li",{parentName:"ul"},"\u51cf\u5c11 ",(0,r.kt)("inlineCode",{parentName:"li"},"longitude")," \u76f8\u673a\u5411\u53f3\u65cb\u8f6c"),(0,r.kt)("li",{parentName:"ul"},"\u589e\u52a0 ",(0,r.kt)("inlineCode",{parentName:"li"},"latitude")," \u76f8\u673a\u5411\u4e0b\u65cb\u8f6c"),(0,r.kt)("li",{parentName:"ul"},"\u51cf\u5c11 ",(0,r.kt)("inlineCode",{parentName:"li"},"latitude")," \u76f8\u673a\u5411\u4e0a\u65cb\u8f6c")))),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"fov"),": \u76f8\u673a\u5782\u76f4\u65b9\u5411\u7684\u53ef\u89c6\u89d2\u5ea6 (\u89d2\u5ea6)")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"offset"),": \u5f53\u524d\u76f8\u673a\u7684\u4e09\u7ef4\u5750\u6807"))),(0,r.kt)("h3",{id:"state-\u76f8\u5173\u7684-api-\u6709\u4ec0\u4e48"},"state \u76f8\u5173\u7684 api \u6709\u4ec0\u4e48"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://unpkg.com/@realsee/five/docs/modules/react.html#useFiveState"},(0,r.kt)("inlineCode",{parentName:"a"},"[state, setState] = useFiveState;"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://unpkg.com/@realsee/five/docs/modules/react.html#useFiveCurrentState"},(0,r.kt)("inlineCode",{parentName:"a"},"[currentState, setCurrentState] = useFiveCurrentState;")))),(0,r.kt)("p",null,"\u53ef\u4ee5\u901a\u8fc7 ",(0,r.kt)("inlineCode",{parentName:"p"},"state")," ",(0,r.kt)("inlineCode",{parentName:"p"},"currentState")," \u83b7\u53d6\u5f53\u524d\u72b6\u6001\uff0c\u901a\u8fc7 ",(0,r.kt)("inlineCode",{parentName:"p"},"setState")," ",(0,r.kt)("inlineCode",{parentName:"p"},"setCurrentState")," \u8bbe\u7f6e\u72b6\u6001\u3002"),(0,r.kt)("h3",{id:"state--currentstate-\u7684\u533a\u522b"},"state / currentState \u7684\u533a\u522b"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"currentState")," \u662f\u5f53\u524d\u72b6\u6001\uff0c\u5c31\u662f\u753b\u9762\u4e2d\u7684\u72b6\u6001\uff0c\u76ee\u524d\u5c55\u793a\u7684\u72b6\u6001\u3002\n",(0,r.kt)("strong",{parentName:"p"},"state")," \u662f\u76ee\u6807\u72b6\u6001\u6216\u8005\u8bf4\u4e0b\u4e00\u65f6\u95f4\u7684\u7a33\u5b9a\u72b6\u6001\u3002"),(0,r.kt)("p",null,"\u53ef\u4ee5\u7b80\u5355\u7684\u8fd9\u6837\u8ba4\u4e3a: ",(0,r.kt)("br",null),"\n\u5f53 ",(0,r.kt)("strong",{parentName:"p"},"setSate")," \u88ab\u8c03\u7528\u540e\uff0c",(0,r.kt)("strong",{parentName:"p"},"state")," \u5f53\u5373\u4f1a\u53d8\u6210 ",(0,r.kt)("strong",{parentName:"p"},"setState")," \u7684\u503c\uff0c\u800c ",(0,r.kt)("strong",{parentName:"p"},"currentState")," \u5219\u4e0d\u4f1a\u9a6c\u4e0a\u6539\u53d8\uff0c\u4ed6\u4f1a\u5728\u52a8\u753b\u8fc7\u6e21\u7684\u8fc7\u7a0b\u4e2d\u9010\u6b65\u903c\u8fd1 ",(0,r.kt)("strong",{parentName:"p"},"state")," \u5e76\u6700\u7ec8\u53d8\u6210\u548c  ",(0,r.kt)("strong",{parentName:"p"},"state")," \u4e00\u6837\u7684\u503c\u3002\u5c31\u548c\u4f60\u5728\u753b\u9762\u4e2d\u770b\u5230\u7684\u52a8\u753b\u4e00\u6837\u3002"),(0,r.kt)("p",null,"\u5728\u4e0a\u4e00\u7ae0\u7684\u4ee3\u7801\u793a\u4f8b\u4e2d\uff0c\u6211\u4eec\u5df2\u7ecf\u4f7f\u7528\u4e86 ",(0,r.kt)("strong",{parentName:"p"},"mode")," \u5c5e\u6027\uff0c\u6765\u5207\u6362 ",(0,r.kt)("strong",{parentName:"p"},"Panorama")," \u4ee5\u53ca ",(0,r.kt)("strong",{parentName:"p"},"Floorplan")," \u6a21\u6001\u3002\u4f60\u4e5f\u53ef\u4ee5\u5c1d\u8bd5\u628a\u5176\u4ed6\u7684\u51e0\u79cd\u6a21\u6001\u90fd\u8865\u5145\u4e0a\uff0c\u770b\u770b\u5404\u79cd\u6a21\u6001\u4e0b\u6709\u4ec0\u4e48\u533a\u522b\u3002"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},(0,r.kt)("strong",{parentName:"p"},"VRPanorama \u6a21\u6001"),"\u9700\u8981\u4f7f\u7528\u8bbe\u5907\u9640\u87ba\u4eea\u4fe1\u606f\uff0c\u9700\u8981\u4f7f\u7528\u79fb\u52a8\u8bbe\u5907\u3002\n\u5e76\u4e14\u5982\u679c\u5728 ",(0,r.kt)("strong",{parentName:"p"},"iOS")," \u8bbe\u5907\u4e0b\uff0c\u9700\u8981\u670d\u52a1\u5904\u4e8e ",(0,r.kt)("inlineCode",{parentName:"p"},"https")," \u4e0b\uff0c\u5426\u5219 ",(0,r.kt)("strong",{parentName:"p"},"iOS")," \u4e0d\u5141\u8bb8\u8bbf\u95ee\u9640\u87ba\u4eea\u4fe1\u606f\u3002")),(0,r.kt)("h2",{id:"\u5f00\u53d1\u4e00\u4e2a\u81ea\u52a8\u73af\u89c6\u7684\u529f\u80fd"},"\u5f00\u53d1\u4e00\u4e2a\u81ea\u52a8\u73af\u89c6\u7684\u529f\u80fd"),(0,r.kt)("p",null,"\u6211\u4eec\u5df2\u7ecf\u83b7\u53d6\u548c\u8bbe\u7f6e\u8fc7\u4e86 ",(0,r.kt)("strong",{parentName:"p"},"mode"),"\uff0c\u8fd9\u6b21\u6211\u4eec\u4fee\u6539\u4e0b ",(0,r.kt)("strong",{parentName:"p"},"longitude / latitude")," \u8bd5\u8bd5\u3002\u8fd9\u6b21\u6211\u4eec\u5f00\u53d1\u4e00\u4e2a\u81ea\u52a8\u73af\u89c6\u7684\u529f\u80fd\u3002\u901a\u8fc7\u4e00\u4e2a\u6309\u94ae\u63a7\u5236\u6fc0\u6d3b\u81ea\u52a8\u73af\u89c6\u7684\u529f\u80fd\uff0c\u8be5\u529f\u80fd\u4f1a\u81ea\u52a8\u6c34\u5e73\u65cb\u8f6c\u955c\u5934\u3002"),(0,r.kt)("h3",{id:"\u4e66\u5199\u73af\u89c6\u529f\u80fd"},"\u4e66\u5199\u73af\u89c6\u529f\u80fd"),(0,r.kt)("h4",{id:"\u6dfb\u52a0\u73af\u89c6\u529f\u80fd\u7684-ui-\u6309\u94ae"},"\u6dfb\u52a0\u73af\u89c6\u529f\u80fd\u7684 UI \u6309\u94ae"),(0,r.kt)("p",null,"\u5728\u5c4f\u5e55\u53f3\u4e0a\u89d2\u6dfb\u52a0\u4e24\u4e2a\u6309\u94ae\uff0c",(0,r.kt)("strong",{parentName:"p"},"\u5f00\u59cb")," \u548c ",(0,r.kt)("strong",{parentName:"p"},"\u505c\u6b62"),"\u3002"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-html",metastring:'title="src/2.knowing=state/index.html"',title:'"src/2.knowing'},'<!DOCTYPE html>\n<html lang="en">\n<head>\n  <meta charset="UTF-8">\n  <meta http-equiv="X-UA-Compatible" content="IE=edge">\n  <link rel="icon" href="data:;base64,iVBORw0KGgo=">\n  <meta name="viewport" content="width=device-width, initial-scale=1.0">\n  <title>\u6539\u53d8\u89c6\u89d2 | Knowing state</title>\n  <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.1/dist/css/bootstrap.min.css" rel="stylesheet" crossorigin="anonymous">\n  <link href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.5.0/font/bootstrap-icons.css" rel="stylesheet">\n  <style>\n    html, body, #app { width: 100%; height: 100%; overflow: hidden; }\n  </style>\n</head>\n<body>\n  <div id="app"></div>\n  \x3c!-- \u6a21\u5f0f\u5207\u6362 --\x3e\n  <nav class="navbar fixed-bottom navbar-light bg-light">\n    <div class="container-fluid justify-content-center">\n      <div class="btn-group">\n        <button class="btn btn-primary active js-Panorama">\u5168\u666f\u6f2b\u6e38</button>\n        <button class="btn btn-primary js-Floorplan">\u7a7a\u95f4\u603b\u89c8</button>\n      </div>\n    </div>\n  </nav>\n  \x3c!-- highlight-start --\x3e\n  \x3c!-- \u73af\u89c6 --\x3e\n  <div class="card position-fixed m-2 top-0 end-0">\n    <button class="btn btn-light js-lookAround-start"><i class="bi bi-arrow-repeat"></i></button>\n    <button class="btn btn-light js-lookAround-stop d-none"><i class="bi bi-pause"></i></button>\n  </div>\n  \x3c!-- highlight-end --\x3e\n  <script type="module" src="./index"><\/script>\n</body>\n</html>\n')),(0,r.kt)("h4",{id:"\u4e66\u5199\u903b\u8f91\u4ee3\u7801"},"\u4e66\u5199\u903b\u8f91\u4ee3\u7801"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"\u901a\u8fc7 ",(0,r.kt)("strong",{parentName:"li"},"setInterval")," \u5b9a\u65f6\u89e6\u53d1\u5668\uff0c\u4fee\u6539 ",(0,r.kt)("strong",{parentName:"li"},"state")," \u7684 ",(0,r.kt)("strong",{parentName:"li"},"longitude")," \u503c\u3002"),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("strong",{parentName:"li"},"\u5f00\u59cb")," \u6309\u94ae\u70b9\u51fb\u65f6\uff0c\u89e6\u53d1\u5b9a\u65f6\u5668\u5f00\u59cb\u3002"),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("strong",{parentName:"li"},"\u505c\u6b62")," \u6309\u94ae\u70b9\u51fb\u65f6\uff0c\u89e6\u53d1\u5b9a\u65f6\u5668\u505c\u6b62\u3002")),(0,r.kt)("p",null,"\u5728\u4e0a\u4e00\u5f20\u7684 ",(0,r.kt)("strong",{parentName:"p"},"\u6a21\u5f0f\u5207\u6362")," \u7684\u4ee3\u7801\u540e\u8ffd\u52a0\uff1a"),(0,r.kt)(o.Z,{mdxType:"Tabs"},(0,r.kt)(d,{value:"JavaScript",mdxType:"TableItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js",metastring:'title="src/2.knowing-state/LookAroundController.js"',title:'"src/2.knowing-state/LookAroundController.js"'},'{ // === \u73af\u89c6 ===\n  let timer;\n  const startButton = document.querySelector(".js-lookAround-start");\n  const stopButton = document.querySelector(".js-lookAround-stop");\n  startButton.addEventListener("click", () => {\n    window.clearInterval(timer);\n    timer = window.setInterval(() => {\n      five.setState({ longitude: five.state.longitude + Math.PI / 360 })\n    }, 16);\n    startButton.classList.add("d-none");\n    stopButton.classList.remove("d-none");\n  }, false);\n  stopButton.addEventListener("click", () => {\n    window.clearInterval(timer);\n    startButton.classList.remove("d-none");\n    stopButton.classList.add("d-none");\n  }, false);\n}\n'))),(0,r.kt)(d,{value:"TypeScript",mdxType:"TableItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts",metastring:'title="src/2.knowing-state/LookAroundController.ts"',title:'"src/2.knowing-state/LookAroundController.ts"'},'{ // === \u73af\u89c6 ===\n  let timer: number | undefined;\n  const startButton = document.querySelector(".js-lookAround-start")!;\n  const stopButton = document.querySelector(".js-lookAround-stop")!;\n  startButton.addEventListener("click", () => {\n    window.clearInterval(timer);\n    timer = window.setInterval(() => {\n      five.setState({ longitude: five.state.longitude + Math.PI / 360 })\n    }, 16);\n    startButton.classList.add("d-none");\n    stopButton.classList.remove("d-none");\n  }, false);\n  stopButton.addEventListener("click", () => {\n    window.clearInterval(timer);\n    startButton.classList.remove("d-none");\n    stopButton.classList.add("d-none");\n  }, false);\n}\n')))),(0,r.kt)("p",null,"\u56de\u5230\u4f60\u7684\u6d4f\u89c8\u5668\u67e5\u770b\uff0c\u4f1a\u53d1\u73b0\u4f60\u7684\u9875\u9762\u53f3\u4e0a\u89d2\u51fa\u73b0\u4e00\u4e2a\u73af\u89c6\u6309\u94ae\u3002\u70b9\u51fb\u53ef\u4ee5\u89e6\u53d1\u548c\u5173\u95ed\u73af\u89c6\u3002"),(0,r.kt)("p",null,"\u771f\u662f\u4e00\u4e2a\u4e0d\u9519\u7684\u529f\u80fd\ud83e\udd73 \uff01"),(0,r.kt)("h2",{id:"\u4e0b\u4e00\u7ae0\u8282\u4f60\u4f1a\u5b66\u5230"},"\u4e0b\u4e00\u7ae0\u8282\u4f60\u4f1a\u5b66\u5230"),(0,r.kt)("admonition",{type:"tip"},(0,r.kt)("mdxAdmonitionTitle",{parentName:"admonition"},"\u4e0b\u4e00\u7ae0\u6211\u4eec\u518d\u4f7f\u7528 ",(0,r.kt)("strong",{parentName:"mdxAdmonitionTitle"},"State")," \u505a\u4e00\u4e9b\u590d\u6742\u7684\u529f\u80fd\uff0c\u6df1\u5165\u4f53\u4f1a\u4e00\u4e0b ",(0,r.kt)("strong",{parentName:"mdxAdmonitionTitle"},"State")," \u7684\u80fd\u529b\u3002"),(0,r.kt)("ul",{parentName:"admonition"},(0,r.kt)("li",{parentName:"ul"},"\u901a\u8fc7 ",(0,r.kt)("strong",{parentName:"li"},"State")," \u5b8c\u6210\u7528\u6237\u64cd\u4f5c\u7684\u5f55\u5236\u3002"),(0,r.kt)("li",{parentName:"ul"},"\u901a\u8fc7 ",(0,r.kt)("strong",{parentName:"li"},"State")," \u8fd8\u539f\u7528\u6237\u64cd\u4f5c\u753b\u9762\u3002"))))}k.isMDXComponent=!0}}]);