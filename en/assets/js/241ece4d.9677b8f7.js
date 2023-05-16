"use strict";(self.webpackChunkrealsee_developer_github_com=self.webpackChunkrealsee_developer_github_com||[]).push([[2099],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>g});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=r.createContext({}),l=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},d=function(e){var t=l(e.components);return r.createElement(c.Provider,{value:t},e.children)},p="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,d=i(e,["components","mdxType","originalType","parentName"]),p=l(n),m=a,g=p["".concat(c,".").concat(m)]||p[m]||u[m]||o;return n?r.createElement(g,s(s({ref:t},d),{},{components:n})):r.createElement(g,s({ref:t},d))}));function g(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,s=new Array(o);s[0]=m;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i[p]="string"==typeof e?e:a,s[1]=i;for(var l=2;l<o;l++)s[l]=n[l];return r.createElement.apply(null,s)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},85162:(e,t,n)=>{n.d(t,{Z:()=>s});var r=n(67294),a=n(86010);const o={tabItem:"tabItem_Ymn6"};function s(e){let{children:t,hidden:n,className:s}=e;return r.createElement("div",{role:"tabpanel",className:(0,a.Z)(o.tabItem,s),hidden:n},t)}},65488:(e,t,n)=>{n.d(t,{Z:()=>u});var r=n(87462),a=n(67294),o=n(86010),s=n(72389),i=n(67392),c=n(7094),l=n(12466);const d={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};function p(e){const{lazy:t,block:n,defaultValue:s,values:p,groupId:u,className:m}=e,g=a.Children.map(e.children,(e=>{if((0,a.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})),b=p??g.map((e=>{let{props:{value:t,label:n,attributes:r}}=e;return{value:t,label:n,attributes:r}})),h=(0,i.l)(b,((e,t)=>e.value===t.value));if(h.length>0)throw new Error(`Docusaurus error: Duplicate values "${h.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`);const k=null===s?s:s??g.find((e=>e.props.default))?.props.value??g[0].props.value;if(null!==k&&!b.some((e=>e.value===k)))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${k}" but none of its children has the corresponding value. Available values are: ${b.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);const{tabGroupChoices:v,setTabGroupChoices:f}=(0,c.U)(),[y,w]=(0,a.useState)(k),R=[],{blockElementScrollPositionUntilNextRender:N}=(0,l.o5)();if(null!=u){const e=v[u];null!=e&&e!==y&&b.some((t=>t.value===e))&&w(e)}const S=e=>{const t=e.currentTarget,n=R.indexOf(t),r=b[n].value;r!==y&&(N(t),w(r),null!=u&&f(u,String(r)))},x=e=>{let t=null;switch(e.key){case"Enter":S(e);break;case"ArrowRight":{const n=R.indexOf(e.currentTarget)+1;t=R[n]??R[0];break}case"ArrowLeft":{const n=R.indexOf(e.currentTarget)-1;t=R[n]??R[R.length-1];break}}t?.focus()};return a.createElement("div",{className:(0,o.Z)("tabs-container",d.tabList)},a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":n},m)},b.map((e=>{let{value:t,label:n,attributes:s}=e;return a.createElement("li",(0,r.Z)({role:"tab",tabIndex:y===t?0:-1,"aria-selected":y===t,key:t,ref:e=>R.push(e),onKeyDown:x,onClick:S},s,{className:(0,o.Z)("tabs__item",d.tabItem,s?.className,{"tabs__item--active":y===t})}),n??t)}))),t?(0,a.cloneElement)(g.filter((e=>e.props.value===y))[0],{className:"margin-top--md"}):a.createElement("div",{className:"margin-top--md"},g.map(((e,t)=>(0,a.cloneElement)(e,{key:t,hidden:e.props.value!==y})))))}function u(e){const t=(0,s.Z)();return a.createElement(p,(0,r.Z)({key:String(t)},e))}},28859:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>c,default:()=>g,frontMatter:()=>i,metadata:()=>l,toc:()=>p});var r=n(87462),a=(n(67294),n(3905)),o=n(65488),s=n(85162);const i={title:"Status Recording"},c=void 0,l={unversionedId:"front/3d-space/handbook/no-framework/recording-state",id:"front/3d-space/handbook/no-framework/recording-state",title:"Status Recording",description:"Previous chapter recalls: Change the perspective",source:"@site/i18n/en/docusaurus-plugin-content-docs/current/front/3d-space/handbook/no-framework/3.recording-state.md",sourceDirName:"front/3d-space/handbook/no-framework",slug:"/front/3d-space/handbook/no-framework/recording-state",permalink:"/en/docs/front/3d-space/handbook/no-framework/recording-state",draft:!1,tags:[],version:"current",lastUpdatedBy:"sansi.lcj",lastUpdatedAt:1669717185,formattedLastUpdatedAt:"Nov 29, 2022",sidebarPosition:3,frontMatter:{title:"Status Recording"},sidebar:"\u4e09\u7ef4\u7a7a\u95f4",previous:{title:"Change View",permalink:"/en/docs/front/3d-space/handbook/no-framework/knowing-state"},next:{title:"Points in 3D space",permalink:"/en/docs/front/3d-space/handbook/no-framework/points-in-3d"}},d={},p=[{value:"Preparatory work",id:"preparatory-work",level:2},{value:"Recording / Playback",id:"recording--playback",level:2},{value:"Build Recording UI",id:"build-recording-ui",level:3},{value:"Write <strong>Recorder</strong>",id:"write-recorder",level:3},{value:"Write Recording Logic",id:"write-recording-logic",level:3},{value:"The next section will be completed by you",id:"the-next-section-will-be-completed-by-you",level:2}],u={toc:p},m="wrapper";function g(e){let{components:t,...n}=e;return(0,a.kt)(m,(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},(0,a.kt)("strong",{parentName:"p"},"Previous chapter recalls: Change the perspective")," ",(0,a.kt)("br",null)),(0,a.kt)("ul",{parentName:"blockquote"},(0,a.kt)("li",{parentName:"ul"},"You know what is ",(0,a.kt)("strong",{parentName:"li"},"State"),", and how to get and modify.",(0,a.kt)("br",null)),(0,a.kt)("li",{parentName:"ul"},"Autoring features via ",(0,a.kt)("strong",{parentName:"li"},"State"),"."))),(0,a.kt)("admonition",{title:"This chapter can learn to",type:"tip"},(0,a.kt)("ul",{parentName:"admonition"},(0,a.kt)("li",{parentName:"ul"},"Record user operations via ",(0,a.kt)("strong",{parentName:"li"},"State"),"."),(0,a.kt)("li",{parentName:"ul"},"Restore the user action picture with ",(0,a.kt)("strong",{parentName:"li"},"State"),"."))),(0,a.kt)("h2",{id:"preparatory-work"},"Preparatory work"),(0,a.kt)("p",null,"Like the previous section, we create a new directory (",(0,a.kt)("inlineCode",{parentName:"p"},"src/3.recording-state"),") and corresponding ",(0,a.kt)("strong",{parentName:"p"},"html")," and ",(0,a.kt)("strong",{parentName:"p"},"jsx")," or ",(0,a.kt)("strong",{parentName:"p"},"tsx")," files."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"js")," or ",(0,a.kt)("strong",{parentName:"p"},"ts")," files can first copy the previous chapter."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-html",metastring:'title="src/3.recording-state/index.html"',title:'"src/3.recording-state/index.html"'},'<!DOCTYPE html>\n<html lang="en">\n  <head>\n    <meta charset="UTF-8" />\n    <meta http-equiv="X-UA-Compatible" content="IE=edge" />\n    <link rel="icon" href="data:;base64,iVBORw0KGgo=" />\n    <meta name="viewport" content="width=device-width, initial-scale=1.0" />\n    <title>Change perspective | Knowing state</title>\n    <link\n      href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.1/dist/css/bootstrap.min.css"\n      rel="stylesheet"\n      crossorigin="anonymous"\n    />\n    <link\n      href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.5.0/font/bootstrap-icons.css"\n      rel="stylesheet"\n    />\n    <style>\n      html,\n      body,\n      #app {\n        width: 100%;\n        height: 100%;\n        overflow: hidden;\n      }\n    </style>\n  </head>\n  <body>\n    <div id="app"></div>\n    <! - Mode switch --\x3e\n    <nav class="navbar fixed-bottom navbar-light bg-light">\n      <div class="container-fluid justify-content-center">\n        <div class="btn-group">\n          <button class="btn btn-primary active js-Panorama">\n            Panoramic roaming\n          </button>\n          <button class="btn btn-primary js-Floorplan">\n            Overview of space\n          </button>\n        </div>\n      </div>\n    </nav>\n    \x3c!-- Ring --\x3e\n    <div class="card position-fixed m-2 top-0 end-0">\n      <button class="btn btn-light js-lookAround-start">\n        <i class="bi bi-arrow-repeat"></i>\n      </button>\n      <button class="btn btn-light js-lookAround-stop d-none">\n        <i class="bi bi-pause"></i>\n      </button>\n    </div>\n    <script type="module" src="./index"><\/script>\n  </body>\n</html>\n')),(0,a.kt)(o.Z,{mdxType:"Tabs"},(0,a.kt)(s.Z,{value:"JavaScript",label:"JavaScript",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js",metastring:'title="src/3.recording-state/index.js"',title:'"src/3.recording-state/index.js"'},'import { Five, parseWork } from "@realsee/five";\n\nconst workURL =\n  "https://vrlab-public.ljcdn.com/release/static/image/release/five/work-sample/07bdc58f413bc5494f05c7cbb5cbdce4/work.json";\n\nconst five = new Five();\n\nfive.appendTo(document.querySelector("#app"));\n\nfetch(workURL)\n  .then((res) => res.json())\n  .then((json) => {\n    const work = parseWork(json);\n    five.load(work);\n  });\n\nwindow.addEventListener("resize", () => five.refresh(), false);\n\n{\n  // === mode switching ===\n  const buttons = {\n    Panorama: document.querySelector(".js-Panorama"),\n    Floorplan: document.querySelector(".js-Floorplan"),\n  };\n\n  for (const [modeName, element] of Object.entries(buttons)) {\n    element.addEventListener(\n      "click",\n      () => {\n        five.setState({ mode: modeName });\n      },\n      false\n    );\n  }\n\n  five.on("stateChange", (state) => {\n    for (const [modeName, element] of Object.entries(buttons)) {\n      if (modeName === state.mode) {\n        element.classList.add("active");\n      } else {\n        element.classList.remove("active");\n      }\n    }\n  });\n}\n\n{\n  // === look around ===\n  let timer;\n  const startButton = document.querySelector(".js-lookAround-start");\n  const stopButton = document.querySelector(".js-lookAround-stop");\n  startButton.addEventListener(\n    "click",\n    () => {\n      window.clearInterval(timer);\n      timer = window.setInterval(() => {\n        five.setState({ longitude: five.state.longitude + Math.PI / 360 });\n      }, 16);\n      startButton.classList.add("d-none");\n      stopButton.classList.remove("d-none");\n    },\n    false\n  );\n  stopButton.addEventListener(\n    "click",\n    () => {\n      window.clearInterval(timer);\n      startButton.classList.remove("d-none");\n      stopButton.classList.add("d-none");\n    },\n    false\n  );\n}\n\nexport {};\n'))),(0,a.kt)(s.Z,{value:"TypeScript",label:"TypeScript",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts",metastring:'title="src/3.recording-state/index.ts"',title:'"src/3.recording-state/index.ts"'},'import { Five, Mode, parseWork } from "@realsee/five";\n\nconst workURL =\n  "https://vrlab-public.ljcdn.com/release/static/image/release/five/work-sample/07bdc58f413bc5494f05c7cbb5cbdce4/work.json";\n\nconst five = new Five();\n\nfive.appendTo(document.querySelector("#app")!);\n\nfetch(workURL)\n  .then((res) => res.json())\n  .then((json) => {\n    const work = parseWork(json);\n    five.load(work);\n  });\n\nwindow.addEventListener("resize", () => five.refresh(), false);\n\n{\n  // === mode switching ===\n  const buttons: Partial<Record<Mode, Element>> = {\n    Panorama: document.querySelector(".js-Panorama")!,\n    Floorplan: document.querySelector(".js-Floorplan")!,\n  };\n\n  for (const [modeName, element] of Object.entries(buttons)) {\n    element.addEventListener(\n      "click",\n      () => {\n        five.setState({ mode: modeName as Mode });\n      },\n      false\n    );\n  }\n\n  five.on("stateChange", (state) => {\n    for (const [modeName, element] of Object.entries(buttons)) {\n      if (modeName === state.mode) {\n        element.classList.add("active");\n      } else {\n        element.classList.remove("active");\n      }\n    }\n  });\n}\n\n{\n  // === look around ===\n  let timer: number | undefined;\n  const startButton = document.querySelector(".js -lookAround-start")!;\n  const stopButton = document.querySelector(".js-lookAround-stop")!;\n  startButton.addEventListener(\n    "click",\n    () => {\n      window.clearInterval(timer);\n      timer = window.setInterval(() => {\n        five.setState({ longitude: five.state.longitude + Math.PI / 360 });\n      }, 16);\n      startButton.classList.add("d-none");\n      stopButton.classList.remove("d-none");\n    },\n    false\n  );\n  stopButton.addEventListener(\n    "click",\n    () => {\n      window.clearInterval(timer);\n      startButton.classList.remove("d-none");\n      stopButton.classList.add("d-none");\n    },\n    false\n  );\n}\n\nexport {};\n')))),(0,a.kt)("p",null,"Start service ",(0,a.kt)("inlineCode",{parentName:"p"},"npm run dev"),' and jump to the current page "http://localhost:3000/src/3.recording-state/index.html".'),(0,a.kt)("admonition",{type:"tip"},(0,a.kt)("p",{parentName:"admonition"},"Please see your console. The port number will change due to your configuration and current port occupancy pattern. Please check the console output.",(0,a.kt)("br",{parentName:"p"}),"\n","If you use other development build tools, please start the service as required by your own development build tool.")),(0,a.kt)("h2",{id:"recording--playback"},"Recording / Playback"),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"This chapter continues to complete an interesting app with ",(0,a.kt)("strong",{parentName:"p"},"State"),".\nThis chapter will complete such an app, log users into ",(0,a.kt)("strong",{parentName:"p"},"State"),"on the page and can replay these actions.",(0,a.kt)("br",null))),(0,a.kt)("h3",{id:"build-recording-ui"},"Build Recording UI"),(0,a.kt)("p",null,"We added the UI button in the top left corner of the page, we designed\uff1a"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Start recording button"),(0,a.kt)("li",{parentName:"ul"},"Stop Recording Button"),(0,a.kt)("li",{parentName:"ul"},"Replay Button")),(0,a.kt)("p",null,"and two status\uff1a"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Recording"),(0,a.kt)("li",{parentName:"ul"},"Playing")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-html",metastring:'title="src/3.recording-state/index.html"',title:'"src/3.recording-state/index.html"'},'<!DOCTYPE html>\n<html lang="en">\n  <head>\n    <meta charset="UTF-8" />\n    <meta http-equiv="X-UA-Compatible" content="IE=edge" />\n    <link rel="icon" href="data:;base64,iVBORw0KGgo=" />\n    <meta name="viewport" content="width=device-width, initial-scale=1.0" />\n    <title>\u72b6\u6001\u5f55\u5236 | Recording state</title>\n    <link\n      href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.1/dist/css/bootstrap.min.css"\n      rel="stylesheet"\n      crossorigin="anonymous"\n    />\n    <link\n      href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.5.0/font/bootstrap-icons.css"\n      rel="stylesheet"\n    />\n    <style>\n      html,\n      body,\n      #app {\n        width: 100%;\n        height: 100%;\n        overflow: hidden;\n      }\n    </style>\n  </head>\n  <body>\n    <div id="app"></div>\n    \x3c!-- \u6a21\u5f0f\u5207\u6362 --\x3e\n    <nav class="navbar fixed-bottom navbar-light bg-light">\n      <div class="container-fluid justify-content-center">\n        <div class="btn-group">\n          <button class="btn btn-primary active js-Panorama">Panoramic roaming</button>\n          <button class="btn btn-primary js-Floorplan">Overview of space</button>\n        </div>\n      </div>\n    </nav>\n    \x3c!-- \u73af\u89c6 --\x3e\n    <div class="card position-fixed m-2 top-0 end-0">\n      <button class="btn btn-light js-lookAround-start">\n        <i class="bi bi-arrow-repeat"></i>\n      </button>\n      <button class="btn btn-light js-lookAround-stop d-none">\n        <i class="bi bi-pause"></i>\n      </button>\n    </div>\n    \x3c!-- highlight-start --\x3e\n    \x3c!-- \u5f55\u5236 --\x3e\n    <div class="card position-fixed m-2 top-0 start-0">\n      <div class="btn-group align-items-center">\n        <button class="btn btn-light js-recording-start">\n          <i class="bi bi-record-fill"></i>\n        </button>\n        <button class="btn btn-light js-recording-stop d-none">\n          <i class="bi bi-stop-fill"></i>\n        </button>\n        <button class="btn btn-light js-recording-play">\n          <i class="bi bi-play-fill"></i>\n        </button>\n        <p class="badge bg-primary m-2 js-state-recording d-none">\u5f55\u5236\u4e2d</p>\n        <p class="badge bg-primary m-2 js-state-playing d-none">\u64ad\u653e\u4e2d</p>\n      </div>\n    </div>\n    \x3c!-- highlight-end --\x3e\n    <script type="module" src="./index"><\/script>\n  </body>\n</html>\n')),(0,a.kt)("h3",{id:"write-recorder"},"Write ",(0,a.kt)("strong",{parentName:"h3"},"Recorder")),(0,a.kt)("p",null,"First, we need to write ",(0,a.kt)("strong",{parentName:"p"},"Recorder")," to support records and playbacks. ",(0,a.kt)("strong",{parentName:"p"},"Recorder")," category is not the content of ",(0,a.kt)("strong",{parentName:"p"},"Five")," , it is only written to achieve the effect of this chapter."),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Implement the ",(0,a.kt)("strong",{parentName:"li"},"startRecording / endRecording")," method to start recording and end recording."),(0,a.kt)("li",{parentName:"ol"},"Implementing ",(0,a.kt)("strong",{parentName:"li"},"record(state: State)")," method, recording content.Record between ",(0,a.kt)("strong",{parentName:"li"},"startRecording / endRecording"),"."),(0,a.kt)("li",{parentName:"ol"},"Implement ",(0,a.kt)("strong",{parentName:"li"},"play(callback)")," method, for playbacks, after calling play, install ",(0,a.kt)("strong",{parentName:"li"},"record")," content, call ",(0,a.kt)("strong",{parentName:"li"},"callback")," method,play ",(0,a.kt)("strong",{parentName:"li"},"State"),".")),(0,a.kt)(o.Z,{mdxType:"Tabs"},(0,a.kt)(s.Z,{value:"JavaScript",label:"JavaScript",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js",metastring:'title="src/3.recording-state/recorder.js"',title:'"src/3.recording-state/recorder.js"'},"/**\n * Recording class\n */\nclass Recorder {\n  constructor() {\n    this.startTime = 0;\n    this.records = null;\n  }\n  /**\n   * Whether\n   has been recorded */\n  hasRecords() {\n    return this.records !== null;\n  }\n  /**\n   * Record key frame\n   * @param state five of state\n   * @returns\n   */\n  record(state) {\n    if (this.records === null) return;\n    this.records.push({\n      state: Object.assign({}, state),\n      time: Date.now() - this.startTime,\n    });\n  }\n  /**\n   * start recording\n   */\n  startRecording() {\n    this.startTime = Date.now();\n    this.records = [];\n  }\n  /**\n   * End recording\n   */\n  endRecording() {\n    this.startTime = 0;\n  }\n  /**\n   * Playback recording\n   * @param callback key frame callback\n   * @returns whether the current There are records\n   */\n  play(callback) {\n    if (this.records === null || this.records.length === 0) return false;\n    const records = this.records.slice();\n    const keyframe = (keyIndex) => {\n      const current = records[keyIndex];\n      const next = records[keyIndex + 1];\n      callback(current.state, next === undefined);\n      if (next) {\n        const delay = next.time - current.time;\n        setTimeout(() => keyframe(keyIndex + 1), delay);\n      }\n    };\n    keyframe(0);\n    return true;\n  }\n}\n\nexport { Recorder };\n"))),(0,a.kt)(s.Z,{value:"TypeScript",label:"TypeScript",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts",metastring:'title="src/3.recording-state/recorder.ts"',title:'"src/3.recording-state/recorder.ts"'},'import { State } from "@realsee/five";\n\n/**\n * Recording class\n */\nclass Recorder {\n  private records: { state: State; time: number }[] | null = null;\n  private startTime: number;\n  constructor() {\n    this.startTime = 0;\n    this.records = null;\n  }\n  /**\n   * Whether\n   has been recorded */\n  hasRecords() {\n    return this.records !== null;\n  }\n  /**\n   * record key frame\n   * @param state five\'s state\n   * @returns\n   */\n  record(state: State) {\n    if (this.records === null) return;\n    this.records.push({\n      state: Object.assign({}, state),\n      time: Date.now() - this.startTime,\n    });\n  }\n  /**\n   * start recording\n   */\n  startRecording() {\n    this.startTime = Date.now();\n    this.records = [];\n  }\n  /**\n   * end recording\n   */\n  endRecording() {\n    this.startTime = 0;\n  }\n  /**\n   * Playback recording\n   * @param callback Keyframe callback\n   * @returns Whether there is a recording currently\n   */\n  play(callback: (state: State, isFinal: boolean) => void) {\n    if (this.records === null || this.records.length === 0) return false;\n    const records = this.records.slice();\n    const keyframe = (keyIndex: number) => {\n      const current = records[keyIndex];\n      const next = records[keyIndex + 1];\n      callback(current.state, next === undefined);\n      if (next) {\n        const delay = next.time - current.time;\n        setTimeout(() => keyframe(keyIndex + 1), delay);\n      }\n    };\n    keyframe(0);\n    return true;\n  }\n}\n\nexport { Recorder };\n')))),(0,a.kt)("h3",{id:"write-recording-logic"},"Write Recording Logic"),(0,a.kt)("p",null,"Add\uff1aafter the code of ",(0,a.kt)("strong",{parentName:"p"},"looking around")," in the previous chapter"),(0,a.kt)(o.Z,{mdxType:"Tabs"},(0,a.kt)(s.Z,{value:"JavaScript",label:"JavaScript",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js",metastring:'title="src/3.recording-state/index.js"',title:'"src/3.recording-state/index.js"'},'{\n  //=== \u5f55\u5236 ===\n  const recorder = new Recorder();\n  const startRecordingButton = document.querySelector(".js-recording-start");\n  const stopRecordingButton = document.querySelector(".js-recording-stop");\n  const playRecordingButton = document.querySelector(".js-recording-play");\n  const recordingState = document.querySelector(".js-state-recording");\n  const playingState = document.querySelector(".js-state-playing");\n\n  five.on("stateChange", (state) => {\n    if (recordingState.classList.contains("d-none")) return;\n    recorder.record(state);\n  });\n\n  startRecordingButton.addEventListener(\n    "click",\n    () => {\n      recorder.startRecording();\n      startRecordingButton.classList.add("d-none");\n      stopRecordingButton.classList.remove("d-none");\n      playRecordingButton.classList.add("d-none");\n      recordingState.classList.remove("d-none");\n      playingState.classList.add("d-none");\n    },\n    false\n  );\n\n  stopRecordingButton.addEventListener(\n    "click",\n    () => {\n      recorder.endRecording();\n      startRecordingButton.classList.remove("d-none");\n      stopRecordingButton.classList.add("d-none");\n      playRecordingButton.classList.remove("d-none");\n      recordingState.classList.add("d-none");\n      playingState.classList.add("d-none");\n    },\n    false\n  );\n\n  playRecordingButton.addEventListener(\n    "click",\n    () => {\n      const hasReocrd = recorder.play((state, isFinal) => {\n        five.setState(state);\n        if (isFinal) {\n          startRecordingButton.classList.remove("d-none");\n          stopRecordingButton.classList.add("d-none");\n          playRecordingButton.classList.remove("d-none");\n          recordingState.classList.add("d-none");\n          playingState.classList.add("d-none");\n        }\n      });\n      if (hasReocrd) {\n        startRecordingButton.classList.add("d-none");\n        stopRecordingButton.classList.add("d-none");\n        playRecordingButton.classList.add("d-none");\n        recordingState.classList.add("d-none");\n        playingState.classList.remove("d-none");\n      }\n    },\n    false\n  );\n}\n'))),(0,a.kt)(s.Z,{value:"TypeScript",label:"TypeScript",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts",metastring:'title="src/3.recording-state/index.ts"',title:'"src/3.recording-state/index.ts"'},'{\n  //=== \u5f55\u5236 ===\n  const recorder = new Recorder();\n  const startRecordingButton = document.querySelector(".js-recording-start")!;\n  const stopRecordingButton = document.querySelector(".js-recording-stop")!;\n  const playRecordingButton = document.querySelector(".js-recording-play")!;\n  const recordingState = document.querySelector(".js-state-recording")!;\n  const playingState = document.querySelector(".js-state-playing")!;\n\n  five.on("stateChange", (state) => {\n    if (recordingState.classList.contains("d-none")) return;\n    recorder.record(state);\n  });\n\n  startRecordingButton.addEventListener(\n    "click",\n    () => {\n      recorder.startRecording();\n      startRecordingButton.classList.add("d-none");\n      stopRecordingButton.classList.remove("d-none");\n      playRecordingButton.classList.add("d-none");\n      recordingState.classList.remove("d-none");\n      playingState.classList.add("d-none");\n    },\n    false\n  );\n\n  stopRecordingButton.addEventListener(\n    "click",\n    () => {\n      recorder.endRecording();\n      startRecordingButton.classList.remove("d-none");\n      stopRecordingButton.classList.add("d-none");\n      playRecordingButton.classList.remove("d-none");\n      recordingState.classList.add("d-none");\n      playingState.classList.add("d-none");\n    },\n    false\n  );\n\n  playRecordingButton.addEventListener(\n    "click",\n    () => {\n      const hasReocrd = recorder.play((state, isFinal) => {\n        five.setState(state);\n        if (isFinal) {\n          startRecordingButton.classList.remove("d-none");\n          stopRecordingButton.classList.add("d-none");\n          playRecordingButton.classList.remove("d-none");\n          recordingState.classList.add("d-none");\n          playingState.classList.add("d-none");\n        }\n      });\n      if (hasReocrd) {\n        startRecordingButton.classList.add("d-none");\n        stopRecordingButton.classList.add("d-none");\n        playRecordingButton.classList.add("d-none");\n        recordingState.classList.add("d-none");\n        playingState.classList.remove("d-none");\n      }\n    },\n    false\n  );\n}\n')))),(0,a.kt)("p",null,"Back to your browser to view will find a record and play button in the upper left corner of your page.Try whether the trial function meets expectations."),(0,a.kt)("p",null,"Yes, you\u2019re and can write what complex programs are\ud83e\udd73"),(0,a.kt)("h2",{id:"the-next-section-will-be-completed-by-you"},"The next section will be completed by you"),(0,a.kt)("admonition",{title:"Next chapter we need to deal with the three-dimensional model",type:"tip"},(0,a.kt)("ul",{parentName:"admonition"},(0,a.kt)("li",{parentName:"ul"},"Learn about the Live SDK gesture interaction."),(0,a.kt)("li",{parentName:"ul"},"Gets a three-dimensional position to a point."))))}g.isMDXComponent=!0}}]);