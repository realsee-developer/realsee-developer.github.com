"use strict";(self.webpackChunkrealsee_developer_github_com=self.webpackChunkrealsee_developer_github_com||[]).push([[2580],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>h});var a=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=a.createContext({}),c=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=c(e.components);return a.createElement(s.Provider,{value:t},e.children)},d="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,r=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),d=c(n),u=o,h=d["".concat(s,".").concat(u)]||d[u]||m[u]||r;return n?a.createElement(h,i(i({ref:t},p),{},{components:n})):a.createElement(h,i({ref:t},p))}));function h(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=n.length,i=new Array(r);i[0]=u;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[d]="string"==typeof e?e:o,i[1]=l;for(var c=2;c<r;c++)i[c]=n[c];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},85162:(e,t,n)=>{n.d(t,{Z:()=>i});var a=n(67294),o=n(86010);const r={tabItem:"tabItem_Ymn6"};function i(e){let{children:t,hidden:n,className:i}=e;return a.createElement("div",{role:"tabpanel",className:(0,o.Z)(r.tabItem,i),hidden:n},t)}},65488:(e,t,n)=>{n.d(t,{Z:()=>m});var a=n(87462),o=n(67294),r=n(86010),i=n(72389),l=n(67392),s=n(7094),c=n(12466);const p={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};function d(e){const{lazy:t,block:n,defaultValue:i,values:d,groupId:m,className:u}=e,h=o.Children.map(e.children,(e=>{if((0,o.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})),k=d??h.map((e=>{let{props:{value:t,label:n,attributes:a}}=e;return{value:t,label:n,attributes:a}})),g=(0,l.l)(k,((e,t)=>e.value===t.value));if(g.length>0)throw new Error(`Docusaurus error: Duplicate values "${g.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`);const v=null===i?i:i??h.find((e=>e.props.default))?.props.value??h[0].props.value;if(null!==v&&!k.some((e=>e.value===v)))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${v}" but none of its children has the corresponding value. Available values are: ${k.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);const{tabGroupChoices:f,setTabGroupChoices:b}=(0,s.U)(),[w,N]=(0,o.useState)(v),y=[],{blockElementScrollPositionUntilNextRender:S}=(0,c.o5)();if(null!=m){const e=f[m];null!=e&&e!==w&&k.some((t=>t.value===e))&&N(e)}const j=e=>{const t=e.currentTarget,n=y.indexOf(t),a=k[n].value;a!==w&&(S(t),N(a),null!=m&&b(m,String(a)))},x=e=>{let t=null;switch(e.key){case"Enter":j(e);break;case"ArrowRight":{const n=y.indexOf(e.currentTarget)+1;t=y[n]??y[0];break}case"ArrowLeft":{const n=y.indexOf(e.currentTarget)-1;t=y[n]??y[y.length-1];break}}t?.focus()};return o.createElement("div",{className:(0,r.Z)("tabs-container",p.tabList)},o.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,r.Z)("tabs",{"tabs--block":n},u)},k.map((e=>{let{value:t,label:n,attributes:i}=e;return o.createElement("li",(0,a.Z)({role:"tab",tabIndex:w===t?0:-1,"aria-selected":w===t,key:t,ref:e=>y.push(e),onKeyDown:x,onClick:j},i,{className:(0,r.Z)("tabs__item",p.tabItem,i?.className,{"tabs__item--active":w===t})}),n??t)}))),t?(0,o.cloneElement)(h.filter((e=>e.props.value===w))[0],{className:"margin-top--md"}):o.createElement("div",{className:"margin-top--md"},h.map(((e,t)=>(0,o.cloneElement)(e,{key:t,hidden:e.props.value!==w})))))}function m(e){const t=(0,i.Z)();return o.createElement(d,(0,a.Z)({key:String(t)},e))}},60703:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>l,default:()=>k,frontMatter:()=>i,metadata:()=>s,toc:()=>p});var a=n(87462),o=(n(67294),n(3905)),r=n(65488);n(85162);const i={title:"Change View"},l=void 0,s={unversionedId:"front/3d-space/handbook/no-framework/knowing-state",id:"front/3d-space/handbook/no-framework/knowing-state",title:"Change View",description:"Previous chapter recall: show three-dimensional space",source:"@site/i18n/en/docusaurus-plugin-content-docs/current/front/3d-space/handbook/no-framework/2.knowing-state.md",sourceDirName:"front/3d-space/handbook/no-framework",slug:"/front/3d-space/handbook/no-framework/knowing-state",permalink:"/en/docs/front/3d-space/handbook/no-framework/knowing-state",draft:!1,tags:[],version:"current",lastUpdatedBy:"sansi.lcj",lastUpdatedAt:1669717185,formattedLastUpdatedAt:"Nov 29, 2022",sidebarPosition:2,frontMatter:{title:"Change View"},sidebar:"\u4e09\u7ef4\u7a7a\u95f4",previous:{title:"Show 3D space",permalink:"/en/docs/front/3d-space/handbook/no-framework/displaying-work"},next:{title:"Status Recording",permalink:"/en/docs/front/3d-space/handbook/no-framework/recording-state"}},c={},p=[{value:"Preparatory work",id:"preparatory-work",level:2},{value:"What is State",id:"what-is-state",level:2},{value:"State Introduction",id:"state-introduction",level:3},{value:"State Data Structure and Description",id:"state-data-structure-and-description",level:3},{value:"What about api in the state",id:"what-about-api-in-the-state",level:3},{value:"State / currentState Distinction",id:"state--currentstate-distinction",level:3},{value:"Development of an auto-ring feature",id:"development-of-an-auto-ring-feature",level:2},{value:"Writing ring",id:"writing-ring",level:3},{value:"UI buttons to add ring functions",id:"ui-buttons-to-add-ring-functions",level:4},{value:"Write Logical Code",id:"write-logical-code",level:4},{value:"The next section will be completed by you",id:"the-next-section-will-be-completed-by-you",level:2}],d=(m="TableItem",function(e){return console.warn("Component "+m+" was not imported, exported, or provided by MDXProvider as global scope"),(0,o.kt)("div",e)});var m;const u={toc:p},h="wrapper";function k(e){let{components:t,...n}=e;return(0,o.kt)(h,(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},(0,o.kt)("strong",{parentName:"p"},"Previous chapter recall: show three-dimensional space")," ",(0,o.kt)("br",null)),(0,o.kt)("ul",{parentName:"blockquote"},(0,o.kt)("li",{parentName:"ul"},"You know what is ",(0,o.kt)("strong",{parentName:"li"},"Work"),"and how to get and load.",(0,o.kt)("br",null)),(0,o.kt)("li",{parentName:"ul"},"How to display three-dimensional spaces and develop features on this basis to control three-dimensional space."))),(0,o.kt)("admonition",{title:"This chapter can learn to",type:"tip"},(0,o.kt)("ul",{parentName:"admonition"},(0,o.kt)("li",{parentName:"ul"},"Learn what is ",(0,o.kt)("strong",{parentName:"li"},"State"),"."),(0,o.kt)("li",{parentName:"ul"},"How to change the directions/position of 3D space observation."),(0,o.kt)("li",{parentName:"ul"},"Learn how to work with the code of the previous chapter, e.g. ",(0,o.kt)("inlineCode",{parentName:"li"},"setState")," ",(0,o.kt)("inlineCode",{parentName:"li"},"stateChange"),"."),(0,o.kt)("li",{parentName:"ul"},"Autoring features via ",(0,o.kt)("strong",{parentName:"li"},"State"),"."))),(0,o.kt)("h2",{id:"preparatory-work"},"Preparatory work"),(0,o.kt)("p",null,"Like the previous section, we create a new directory (",(0,o.kt)("inlineCode",{parentName:"p"},"src/2.knowing-state"),"and corresponding ",(0,o.kt)("strong",{parentName:"p"},"html")," and ",(0,o.kt)("strong",{parentName:"p"},"js")," or ",(0,o.kt)("strong",{parentName:"p"},"ts")," files."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"js")," or ",(0,o.kt)("strong",{parentName:"p"},"ts")," files can first copy the previous chapter."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-html",metastring:'title="src/2.knowing-state/index.html"',title:'"src/2.knowing-state/index.html"'},'<!DOCTYPE html>\n<html lang="en">\n  <head>\n    <meta charset="UTF-8" />\n    <meta http-equiv="X-UA-Compatible" content="IE=edge" />\n    <link rel="icon" href="data:;base64,iVBORw0KGgo=" />\n    <meta name="viewport" content="width=device-width, initial-scale=1.0" />\n    <title>Presentation space | Displaying work</title>\n    <link\n      href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.1/dist/css/bootstrap.min.css"\n      rel="stylesheet"\n      crossorigin="anonymous"\n    />\n    <link\n      href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.5.0/font/bootstrap-icons.css"\n      rel="stylesheet"\n    />\n    <style>\n      html,\n      body,\n      #app {\n        width: 100%;\n        height: 100%;\n        overflow: hidden;\n      }\n    </style>\n  </head>\n  <body>\n    <div id="app"></div>\n    <! - Mode switch --\x3e\n    <nav class="navbar fixed-bottom navbar-light bg-light">\n      <div class="container-fluid justify-content-center">\n        <div class="btn-group">\n          <a href="javascript:;" class="btn btn-primary active js-Panorama"\n            >Panoramic roaming</a\n          >\n          <a href="javascript:;" class="btn btn-primary js-Floorplan"\n            >Overview of space</a\n          >\n        </div>\n      </div>\n    </nav>\n    <script type="module" src="./index"><\/script>\n  </body>\n</html>\n')),(0,o.kt)(r.Z,{mdxType:"Tabs"},(0,o.kt)(d,{value:"JavaScript",mdxType:"TableItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js",metastring:'title="src/2.knowing-state/index.js"',title:'"src/2.knowing-state/index.js"'},'import { Five, parseWork } from "@realsee/five";\n\nconst workURL =\n  "https://vrlab-public.ljcdn.com/release/static/image/release/five/work-sample/07bdc58f413bc5494f05c7cbb5cbdce4/work.json";\n\nconst five = new Five();\n\nfive.appendTo(document.querySelector("#app"));\n\nfetch(workURL)\n  .then((res) => res.json())\n  .then((json) => {\n    const work = parseWork(json);\n    five.load(work);\n  });\n\nwindow.addEventListener("resize", () => five.refresh(), false);\n\n{\n  // === mode switch ===\n  const buttons = {\n    Panorama: document.querySelector(".js-Panorama"),\n    Floorplan: document.querySelector(".js-Floorplan"),\n  };\n\n  for (const [modeName, element] of Object.entries(buttons)) {\n    element.addEventListener(\n      "click",\n      () => {\n        five.setState({ mode: modeName });\n      },\n      false\n    );\n  }\n\n  five.on("stateChange", (state) => {\n    for (const [modeName, element] of Object.entries(buttons)) {\n      if (modeName === state.mode) {\n        element.classList.add("active");\n      } else {\n        element.classList.remove("active");\n      }\n    }\n  });\n}\n\nexport {};\n'))),(0,o.kt)(d,{value:"TypeScript",mdxType:"TableItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts",metastring:'title="src/2.knowing-state/index.ts"',title:'"src/2.knowing-state/index.ts"'},'import { Five, Mode, parseWork } from "@realsee/five";\n\nconst workURL =\n  "https://vrlab-public.ljcdn.com/release/static/image/release/five/work-sample/07bdc58f413bc5494f05c7cbb5cbdce4/work.json";\n\nconst five = new Five();\n\nfive.appendTo(document.querySelector("#app")!);\n\nfetch(workURL)\n  .then((res) => res.json())\n  .then((json) => {\n    const work = parseWork(json);\n    five.load(work);\n  });\n\nwindow.addEventListener("resize", () => five.refresh(), false);\n\n{\n  // === mode switching ===\n  const buttons: Partial<Record<Mode, Element>> = {\n    Panorama: document.querySelector(".js-Panorama")!,\n    Floorplan: document.querySelector(".js-Floorplan")!,\n  };\n\n  for (const [modeName, element] of Object.entries(buttons)) {\n    element.addEventListener(\n      "click",\n      () => {\n        five.setState({ mode: modeName as Mode });\n      },\n      false\n    );\n  }\n\n  five.on("stateChange", (state) => {\n    for (const [modeName, element] of Object.entries(buttons)) {\n      if (modeName === state.mode) {\n        element.classList.add("active");\n      } else {\n        element.classList.remove("active");\n      }\n    }\n  });\n}\n\nexport {};\n')))),(0,o.kt)("p",null,"Start service ",(0,o.kt)("inlineCode",{parentName:"p"},"npm run dev"),' And jump to the current page " ',(0,o.kt)("a",{parentName:"p",href:"http://localhost:3000/src/2.knowing-state/index.html"},"http://localhost:3000/src/2.knowing-state/index.html"),'".'),(0,o.kt)("admonition",{type:"tip"},(0,o.kt)("p",{parentName:"admonition"},"Please see your console. The port number will change due to your configuration and current port occupancy pattern. Please check the console output.",(0,o.kt)("br",{parentName:"p"}),"\n","If you use other development build tools, please start the service as required by your own development build tool.")),(0,o.kt)("h2",{id:"what-is-state"},"What is State"),(0,o.kt)("p",null,"Having come back to the concept, I assure you that this is the last theoretical knowledge that needs to be learned at this stage."),(0,o.kt)("h3",{id:"state-introduction"},"State Introduction"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"State")," data structure used to describe status.The previous chapter knows ",(0,o.kt)("strong",{parentName:"p"},"Work"),", ",(0,o.kt)("strong",{parentName:"p"},"Work")," is used to describe a three-dimensional space, then ",(0,o.kt)("strong",{parentName:"p"},"State")," is a description of what is currently in this three-dimensional space.He contains modelling, where the collection point is located, the direction of the camera, and the view of the camera."),(0,o.kt)("h3",{id:"state-data-structure-and-description"},"State Data Structure and Description"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"interface State {\n  mode: Five.Mode;\n  panoIndex: number;\n  longitude: number;\n  latitude: number;\n  fov: number;\n  offset: THEEE.Vector3;\n}\n")),(0,o.kt)("p",null,"Data description for ",(0,o.kt)("strong",{parentName:"p"},"State")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("inlineCode",{parentName:"p"},"mode"),": Current mode has 5 types,\ncan be used ",(0,o.kt)("inlineCode",{parentName:"p"},"Five.Mode")," get\uff1a"),(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"Panorama: Panorama: Panoramic Walking Model, under which views will travel between collection points. Gestures can rotation/amplify views/toggle collection points to view the collected landscape information."),(0,o.kt)("li",{parentName:"ul"},"Floorplan: Space Overview Model. The view under this model is model-centric, gesture can rotate/magnify models/toggle the floor to view the model as a whole."),(0,o.kt)("li",{parentName:"ul"},"Topview: Household diagram mode where the view is centered on the model, vertical pitch model, gesture can shift/zoom in the floor/toggle the floor of the model to view the schema structure."),(0,o.kt)("li",{parentName:"ul"},"Model: Modeling Model, where the view will travel freely in the model, gesture can rotate/amplify views/bits, fit to view the details of the model and make some locational actions."),(0,o.kt)("li",{parentName:"ul"},"VRPanorama: VR glasses model that enables VR virtual display using ",(0,o.kt)("a",{parentName:"li",href:"https://arvr.google.com/cardboard/"},"Cardboard glass")," or his third-party derivative product."))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("inlineCode",{parentName:"p"},"panoIndex"),": Gathering point positions, where Panorama models can be set up.is an index of ",(0,o.kt)("inlineCode",{parentName:"p"},"work[observers]"),".")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("inlineCode",{parentName:"p"},"longitude")," / ",(0,o.kt)("inlineCode",{parentName:"p"},"latitude"),": Horizontal corner of the camera/camera (radians), we describe the position of the camera in a latitude similar way."),(0,o.kt)("p",{parentName:"li"},"The whole model scenario is a right-hand cartex coordinate system, ",(0,o.kt)("inlineCode",{parentName:"p"},"XZ"),"plane parallel to the ground, ",(0,o.kt)("inlineCode",{parentName:"p"},"Y"),"axis perpendicular to the ground."),(0,o.kt)("p",{parentName:"li"},(0,o.kt)("img",{parentName:"p",src:"https://vrlab-public.ljcdn.com/common/file/web/2f331826-4b15-4da5-9603-50c1287b38f7.svg",alt:"Footer image with right-hand coordinates"})),(0,o.kt)("p",{parentName:"li"},"Initial camera orientation looks at ",(0,o.kt)("strong",{parentName:"p"},"Z negative direction")),(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"Add ",(0,o.kt)("inlineCode",{parentName:"li"},"longitude")," camera rotate left."),(0,o.kt)("li",{parentName:"ul"},"Decrease ",(0,o.kt)("inlineCode",{parentName:"li"},"longitude")," camera rotate right."),(0,o.kt)("li",{parentName:"ul"},"Add ",(0,o.kt)("inlineCode",{parentName:"li"},"latitude")," camera rotate down."),(0,o.kt)("li",{parentName:"ul"},"Reduces the rotation of ",(0,o.kt)("inlineCode",{parentName:"li"},"latitude")," cameras."))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("inlineCode",{parentName:"p"},"fov"),": Visual angle (angle) in the vertical direction of camera.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("inlineCode",{parentName:"p"},"offset"),": three-dimensional coordinates of the current camera."))),(0,o.kt)("h3",{id:"what-about-api-in-the-state"},"What about api in the state"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://unpkg.com/@realsee/five/docs/modules/react.html#useFiveState"},(0,o.kt)("inlineCode",{parentName:"a"},"[state, setState] = useFiveState;"))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://unpkg.com/@realsee/five/docs/modules/react.html#useFiveCurrentState"},(0,o.kt)("inlineCode",{parentName:"a"},"[currentState, setCurrentState] = useFiveCurrentState;")))),(0,o.kt)("p",null,"The current state can be obtained by ",(0,o.kt)("inlineCode",{parentName:"p"},"state")," ",(0,o.kt)("inlineCode",{parentName:"p"},"currentState")," , set by ",(0,o.kt)("inlineCode",{parentName:"p"},"setState")," ",(0,o.kt)("inlineCode",{parentName:"p"},"setCurrentState")),(0,o.kt)("h3",{id:"state--currentstate-distinction"},"State / currentState Distinction"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"currentState")," is the current state, the state in the picture, the state that is currently shown.\n",(0,o.kt)("strong",{parentName:"p"},"state")," is targeted or stable at the next time."),(0,o.kt)("p",null,"It can be simply thought of as: ",(0,o.kt)("br",null),"\nWhen ",(0,o.kt)("strong",{parentName:"p"},"setSate")," is called,",(0,o.kt)("strong",{parentName:"p"},"state")," will immediately become the value of ",(0,o.kt)("strong",{parentName:"p"},"setState")," , while ",(0,o.kt)("strong",{parentName:"p"},"currentState")," will not change immediately, it will gradually approach ",(0,o.kt)("strong",{parentName:"p"},"during the animation transition process state")," and eventually becomes the same value as ",(0,o.kt)("strong",{parentName:"p"},"state"),".Just like the animation you see in the screen."),(0,o.kt)("p",null,"In the example of the last chapter, we have used ",(0,o.kt)("strong",{parentName:"p"},"mode")," properties to switch to ",(0,o.kt)("strong",{parentName:"p"},"Panorama")," and ",(0,o.kt)("strong",{parentName:"p"},"Floorplan")," patterns.You can also try to add some of the other models and see how different they are."),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},(0,o.kt)("strong",{parentName:"p"},"VRPanorama mode"),"requires device gyroscopic information and mobile devices.\nAnd if the service is ",(0,o.kt)("strong",{parentName:"p"},"iOS")," device, it needs to be ",(0,o.kt)("inlineCode",{parentName:"p"},"https")," or ",(0,o.kt)("strong",{parentName:"p"},"iOS")," does not allow access to Gychrome information.")),(0,o.kt)("h2",{id:"development-of-an-auto-ring-feature"},"Development of an auto-ring feature"),(0,o.kt)("p",null,"We've fetched and set ",(0,o.kt)("strong",{parentName:"p"},"mode"),", this time we've modified ",(0,o.kt)("strong",{parentName:"p"},"longitude / latitude"),".This time we develop an auto-look feature.Use a button to control the function of activating auto-ring viewing, which will rotate the camera horizontally."),(0,o.kt)("h3",{id:"writing-ring"},"Writing ring"),(0,o.kt)("h4",{id:"ui-buttons-to-add-ring-functions"},"UI buttons to add ring functions"),(0,o.kt)("p",null,"Add two buttons in the top right corner of the screen,",(0,o.kt)("strong",{parentName:"p"},"to start")," and ",(0,o.kt)("strong",{parentName:"p"},"to stop"),"."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-html",metastring:'title="src/2.knowing-state/index.html"',title:'"src/2.knowing-state/index.html"'},'<!DOCTYPE html>\n<html lang="en">\n  <head>\n    <meta charset="UTF-8" />\n    <meta http-equiv="X-UA-Compatible" content="IE=edge" />\n    <link rel="icon" href="data:;base64,iVBORw0KGgo=" />\n    <meta name="viewport" content="width=device-width, initial-scale=1.0" />\n    <title>Change view | Knowing state</title>\n    <link\n      href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.1/dist/css/bootstrap.min.css"\n      rel="stylesheet"\n      crossorigin="anonymous"\n    />\n    <link\n      href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.5.0/font/bootstrap-icons.css"\n      rel="stylesheet"\n    />\n    <style>\n      html,\n      body,\n      #app {\n        width: 100%;\n        height: 100%;\n        overflow: hidden;\n      }\n    </style>\n  </head>\n  <body>\n    <div id="app"></div>\n    \x3c!-- Mode switch--\x3e\n    <nav class="navbar fixed-bottom navbar-light bg-light">\n      <div class="container-fluid justify-content-center">\n        <div class="btn-group">\n          <button class="btn btn-primary active js-Panorama">Panoramic roaming</button>\n          <button class="btn btn-primary js-Floorplan">Space overview</button>\n        </div>\n      </div>\n    </nav>\n    \x3c!-- highlight-start --\x3e\n    \x3c!-- look around --\x3e\n    <div class="card position-fixed m-2 top-0 end-0">\n      <button class="btn btn-light js-lookAround-start">\n        <i class="bi bi-arrow-repeat"></i>\n      </button>\n      <button class="btn btn-light js-lookAround-stop d-none">\n        <i class="bi bi-pause"></i>\n      </button>\n    </div>\n    \x3c!-- highlight-end --\x3e\n    <script type="module" src="./index"><\/script>\n  </body>\n</html>\n')),(0,o.kt)("h4",{id:"write-logical-code"},"Write Logical Code"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"By ",(0,o.kt)("strong",{parentName:"li"},"setInterval")," a time trigger, modify the ",(0,o.kt)("strong",{parentName:"li"},"longitude")," value by ",(0,o.kt)("strong",{parentName:"li"},"state")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("strong",{parentName:"li"},"Start the timer when the")," button is clicked"),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("strong",{parentName:"li"},"Stop")," button click triggers timer stop.")),(0,o.kt)("p",null,"Add\uff1aafter the ",(0,o.kt)("strong",{parentName:"p"},"mode switching")," code of the previous one"),(0,o.kt)(r.Z,{mdxType:"Tabs"},(0,o.kt)(d,{value:"JavaScript",mdxType:"TableItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js",metastring:'title="src/2.knowing-state/LookAroundController.js"',title:'"src/2.knowing-state/LookAroundController.js"'},'{\n  // === Ring ====\n  let timer;\n  const startButton = document.querySelector(".js-lookAround-start");\n  const stopButton = document.querySelector(".js-lookAround-stop");\n  startButton.addEventListener(\n    "click",\n    () => {\n      window.clearInterval(timer);\n      timer = window.setInterval(() => {\n        five.setState({ longitude: five.state.longitude + Math.PI / 360 });\n      }, 16);\n      startButton.classList.add("d-none");\n      stopButton.classList.remove("d-none");\n    },\n    false\n  );\n  stopButton.addEventListener(\n    "click",\n    () => {\n      window.clearInterval(timer);\n      startButton.classList.remove("d-none");\n      stopButton.classList.add("d-none");\n    },\n    false\n  );\n}\n'))),(0,o.kt)(d,{value:"TypeScript",mdxType:"TableItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts",metastring:'title="src/2.knowing-state/LookAroundController.ts"',title:'"src/2.knowing-state/LookAroundController.ts"'},'{\n  // === look around ===\n  let timer: number | undefined;\n  const startButton = document.querySelector(".js-lookAround-start")!;\n  const stopButton = document.querySelector(".js-lookAround-stop")!;\n  startButton.addEventListener(\n    "click",\n    () => {\n      window.clearInterval(timer);\n      timer = window.setInterval(() => {\n        five.setState({ longitude: five.state.longitude + Math.PI / 360 });\n      }, 16);\n      startButton.classList.add("d-none");\n      stopButton.classList.remove("d-none");\n    },\n    false\n  );\n  stopButton.addEventListener(\n    "click",\n    () => {\n      window.clearInterval(timer);\n      startButton.classList.remove("d-none");\n      stopButton.classList.add("d-none");\n    },\n    false\n  );\n}\n')))),(0,o.kt)("p",null,"Back to your browser to view it will find a ring button in the top right corner of your page.Click to trigger and close the ring view."),(0,o.kt)("p",null,"It's a good feature: partying_face: !"),(0,o.kt)("h2",{id:"the-next-section-will-be-completed-by-you"},"The next section will be completed by you"),(0,o.kt)("admonition",{type:"tip"},(0,o.kt)("mdxAdmonitionTitle",{parentName:"admonition"},"Next chapter we use ",(0,o.kt)("strong",{parentName:"mdxAdmonitionTitle"},"State")," to make some more complex features and to deepen the capabilities of ",(0,o.kt)("strong",{parentName:"mdxAdmonitionTitle"},"State"),"."),(0,o.kt)("ul",{parentName:"admonition"},(0,o.kt)("li",{parentName:"ul"},"Record user operations via ",(0,o.kt)("strong",{parentName:"li"},"State"),"."),(0,o.kt)("li",{parentName:"ul"},"Restore the user action picture with ",(0,o.kt)("strong",{parentName:"li"},"State"),"."))))}k.isMDXComponent=!0}}]);