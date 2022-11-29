"use strict";(self.webpackChunkrealsee_developer_github_com=self.webpackChunkrealsee_developer_github_com||[]).push([[6623],{49613:(e,t,n)=>{n.d(t,{Zo:()=>m,kt:()=>u});var a=n(59496);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),p=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},m=function(e){var t=p(e.components);return a.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},c=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,m=l(e,["components","mdxType","originalType","parentName"]),c=p(n),u=r,k=c["".concat(s,".").concat(u)]||c[u]||d[u]||i;return n?a.createElement(k,o(o({ref:t},m),{},{components:n})):a.createElement(k,o({ref:t},m))}));function u(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=c;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:r,o[1]=l;for(var p=2;p<i;p++)o[p]=n[p];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}c.displayName="MDXCreateElement"},47834:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>d,frontMatter:()=>i,metadata:()=>l,toc:()=>p});var a=n(2962),r=(n(59496),n(49613));const i={title:"Take controller"},o=void 0,l={unversionedId:"front/live/preparation/live-controller",id:"front/live/preparation/live-controller",title:"Take controller",description:"With your controller details about watching message systems, event mechanisms, and voice protocol.Learn about the controller to take a better practice to see the business.",source:"@site/i18n/en/docusaurus-plugin-content-docs/current/front/live/preparation/3.live-controller.md",sourceDirName:"front/live/preparation",slug:"/front/live/preparation/live-controller",permalink:"/en/docs/front/live/preparation/live-controller",draft:!1,tags:[],version:"current",lastUpdatedBy:"sansi.lcj",lastUpdatedAt:1669717185,formattedLastUpdatedAt:"Nov 29, 2022",sidebarPosition:3,frontMatter:{title:"Take controller"},sidebar:"\u5982\u89c6\u5e26\u770b",previous:{title:"Interpretation of the name",permalink:"/en/docs/front/live/preparation/terminology"},next:{title:"Dependency Installation",permalink:"/en/docs/front/live/get-started/install"}},s={},p=[{value:"@realsee/live",id:"realseelive",level:2},{value:"Message system",id:"message-system",level:2},{value:"Frame Data Sync",id:"frame-data-sync",level:3},{value:"Room Info",id:"room-info",level:3},{value:"Broadcast message",id:"broadcast-message",level:3},{value:"Incident mechanism",id:"incident-mechanism",level:2},{value:"WebSocket Events",id:"websocket-events",level:3},{value:"live event",id:"live-event",level:3},{value:"RTC Event",id:"rtc-event",level:3},{value:"Exceptions processed",id:"exceptions-processed",level:3},{value:"RTC Protocol",id:"rtc-protocol",level:2}],m={toc:p};function d(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("admonition",{type:"tip"},(0,r.kt)("p",{parentName:"admonition"},"With your controller details about watching message systems, event mechanisms, and voice protocol.Learn about the controller to take a better practice to see the business.")),(0,r.kt)("h2",{id:"realseelive"},"@realsee/live"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://www.npmjs.com/package/@realsee/live"},(0,r.kt)("img",{parentName:"a",src:"https://img.shields.io/npm/v/@realsee/live.svg?style=flat-square&logo=npm&label=npm%20install%20@realsee/live",alt:"npm version"}))),(0,r.kt)("admonition",{type:"info"},(0,r.kt)("p",{parentName:"admonition"},(0,r.kt)("strong",{parentName:"p"},"Live")," The controller is the browser with the ability to view ",(0,r.kt)("strong",{parentName:"p"},"on the line.")," needs to be used with the TRTC service and is responsible for scheduling TRTC logic.")),(0,r.kt)("h2",{id:"message-system"},"Message system"),(0,r.kt)("p",null,"The core function of ",(0,r.kt)("strong",{parentName:"p"},"Live")," is to use WebSocket long chain communications to connect multiple users to the same screen.Communications between users are based on WebSocket messages."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Live")," sends messages into",(0,r.kt)("inlineCode",{parentName:"p"},"frame data"),",",(0,r.kt)("inlineCode",{parentName:"p"},"broadcast"),",",(0,r.kt)("inlineCode",{parentName:"p"},"room information"),"classesProvide corresponding sending, receiving API, and more API for each class of information refer to ",(0,r.kt)("a",{parentName:"p",href:"https://unpkg.com/@realsee/live/docs/index.html"},"Live API document")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Frame data")," is the information carrier that performs the same screen, leaving the user to define which information in the current scene should be used for the same screen and organize the information into ",(0,r.kt)("inlineCode",{parentName:"p"},"{key: value}"),"."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Broadcast messages")," is used to specify a user to send a custom broadcast message to room members in event form.e.g.\uff1amoderators send greeting messages to viewers."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Room info")," is built-in messages, actively pushed by WebSocket service, including room status, current user and participant list etc.Some information can also be modified by the update provided by ",(0,r.kt)("strong",{parentName:"p"},"Live"),"."),(0,r.kt)("h3",{id:"frame-data-sync"},"Frame Data Sync"),(0,r.kt)("p",null,"Synchronization of current UI interaction\uff1a"),(0,r.kt)("p",null,"Example with ",(0,r.kt)("a",{parentName:"p",href:"/en/docs/front/3d-space/intro"},"Five")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},'// Send local frame data (Five State)\nlive.sendKeyframe("five", { panoIndex: 13 });\n\n// receive remote frame data (Five State)\nlive.eyframes.on("five", (newState, prevState) => {\n  // can take the latest `newState` to update local UI status\n});\n')),(0,r.kt)("p",null,'You can also get the "snapshot" of all the current series of frame data with the ',(0,r.kt)("inlineCode",{parentName:"p"},"live.snapshot"),"."),(0,r.kt)("h3",{id:"room-info"},"Room Info"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Live")," has the concept of a session room. When you successfully connect to the WebSocket service you have joined a room as a user.This room user will have other users besides you, you can get or update user information in the following ways:\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},'// Attribute\uff1afor local user information\nlive.selfInfo;\n\n// attribute\uff1afor all users in the current room\nlive.userList;\n\n// Method\uff1aupdate local user information\nlive.setSelfInfo({});\n\n// Event\uff1aChanges to Local User Information\nlive.on("selfInfoUpdate", (userInfo) => {});\n\n// Event\uff1aChanges to Room User List Information\nlive.on("userListUpdate", (userList) => {});\n')),(0,r.kt)("h3",{id:"broadcast-message"},"Broadcast message"),(0,r.kt)("p",null,"In addition to frame data and room information, messages can be broadcast to other users in the room in the form of events\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},'live.broadcast(\n  data /* broadcast data*/,\n  ["user_id_1", "user_id_2"] /* userId */\n);\n')),(0,r.kt)("p",null,"At this point, the user ID in the room is ",(0,r.kt)("inlineCode",{parentName:"p"},"user_id_1"),",",(0,r.kt)("inlineCode",{parentName:"p"},"user_id_2")," will receive this broadcast message (unknown to other users)\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},'live.on("broadcast", (data /* broadcast data*/) => {});\n')),(0,r.kt)("p",null,"For more examples, see ",(0,r.kt)("a",{parentName:"p",href:"https://unpkg.com/@realsee/live/docs/index.html"},"Live API")," documents."),(0,r.kt)("h2",{id:"incident-mechanism"},"Incident mechanism"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Live")," provides listening ",(0,r.kt)("inlineCode",{parentName:"p"},"WebSocket Events"),",",(0,r.kt)("inlineCode",{parentName:"p"},"live events")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"RTC events")),(0,r.kt)("p",null,"Of these, ",(0,r.kt)("inlineCode",{parentName:"p"},"WebSocket events"),"and",(0,r.kt)("inlineCode",{parentName:"p"},"live events")," can be listened to by ",(0,r.kt)("inlineCode",{parentName:"p"},"live.on('/*event name*/', /*event call*/)"),"."),(0,r.kt)("p",null,"For example, listening to changes in the WebSocket status\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"live.on('ws.readyStateUpdate', (readyState: WebSocketState) => \\\n  console.log(readyState// readyState is the latest WebScoket status\n})\n")),(0,r.kt)("h3",{id:"websocket-events"},"WebSocket Events"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"ws.beforeConnect(reconnect?: number@@): void")," after WebSocket finished.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"ws.afterConnect(reconnect?: number@@): void")," WebSocket before completing connection.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"ws.readyStateUpdate(readyState: WebSocketState): void")," WebSocket finished state changed."))),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"WebSocket connection status list\uff1a")),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Status Name"),(0,r.kt)("th",{parentName:"tr",align:null},"Status Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"NOTINITIALIZED"),(0,r.kt)("td",{parentName:"tr",align:null},"Not initialized")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"CONNECTING"),(0,r.kt)("td",{parentName:"tr",align:null},"Connecting")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"OPEN"),(0,r.kt)("td",{parentName:"tr",align:null},"Connection successful")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"CLOSING"),(0,r.kt)("td",{parentName:"tr",align:null},"Closing")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"CLOSED"),(0,r.kt)("td",{parentName:"tr",align:null},"Close successful")))),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Live")," Forward-end service interaction is based on WebSocket long links.With a view of successful entry, exit identifier is displayed in WebSocket status ",(0,r.kt)("inlineCode",{parentName:"p"},"OPEN"),",",(0,r.kt)("inlineCode",{parentName:"p"},"CLOSED"),". Therefore, all the relevant event processing logic for ",(0,r.kt)("strong",{parentName:"p"},"VRTC")," should ensure that it takes place after",(0,r.kt)("inlineCode",{parentName:"p"},"OPEN")," events."),(0,r.kt)("h3",{id:"live-event"},"live event"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"Broadcast(evtMsg: Record<string, any>, frontRequestId: string): void")," to receive broadcast messages from other users.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"builtinEvent(builtinMsg: BuiltinMsg): void")," to receive built-in event messages from the server side.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"keyframes (keyframes: Partial<Snapshot>, frontRequestId: string): void")," for other users.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"readyKeyframeSync(lastKeyframe: Partial<Snapshot>): void")," indicates frame synchronization.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"selfInfoUpdate(userInfo: UserInfo, frontRequestId: string): void")," has changed.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"userListUpdate(userList: UserInfo[], frontRequestId: string): void")," user list changed"))),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"live")," instances provide many methods such as",(0,r.kt)("inlineCode",{parentName:"p"},"live.connect()"),",",(0,r.kt)("inlineCode",{parentName:"p"},"live.broadcast()"),",",(0,r.kt)("inlineCode",{parentName:"p"},"live.sendKeyframe()"),"that are asynchronous feedback and may affect other users in the room. You can learn about these effects by listening to the above events."),(0,r.kt)("p",null,"Note that ",(0,r.kt)("inlineCode",{parentName:"p"},"readyKeyframeSync")," events are framerable peer-syncing nodes. Your frame sync behavior will only take effect after receiving this event."),(0,r.kt)("h3",{id:"rtc-event"},"RTC Event"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"error(error: Error): void")," unusual events.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"initWillStart(): void")," about to initialize events.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"inited(): void")," initialize completed events.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"joinWillStart(): void")," will join the voice room.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"joined(): void")," successfully joined the voice room.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"userVolumes (userVolumes: UserVolume[]): void")," per user in room.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"weakNetwork(): void")," weak web alarm events."))),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"live.$RTC")," The instance needs to be satisfied with ","[the RTC protocol]",", the events of which are ",(0,r.kt)("inlineCode",{parentName:"p"},"live.$RTC.on('/*event name*/', /*event calls*/)")," listen in like listeners who are speaking in the voice room and their volume\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},'live.$RTC.on("userVolumes", (userVolumes: UserVolume[]) => {\n  console.log(userVolumes); //userVolumes are speaking and their volume data.\n});\n')),(0,r.kt)("h3",{id:"exceptions-processed"},"Exceptions processed"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"ws.error(error: WebSocketError): void")," WebSocket connection error.")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"WebSocket error state enumeration\uff1a")),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Error field"),(0,r.kt)("th",{parentName:"tr",align:null},"Error description"),(0,r.kt)("th",{parentName:"tr",align:null},"Trigger Scene"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Close"),(0,r.kt)("td",{parentName:"tr",align:null},"Error type enumeration reference",(0,r.kt)("a",{parentName:"td",href:"https://developer.mozilla.org/zh-CN/docs/Web/API/CloseEvent"},"CloseEvent")),(0,r.kt)("td",{parentName:"tr",align:null},"Error reference to",(0,r.kt)("a",{parentName:"td",href:"https://developer.mozilla.org/zh-CN/docs/Web/API/CloseEvent"},"CloseEvent"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Error"),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"MicroAuth"),(0,r.kt)("td",{parentName:"tr",align:null},"Microphone authorization error"),(0,r.kt)("td",{parentName:"tr",align:null},"Voice function failed to get microphone authorization")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"DuplicateConnect"),(0,r.kt)("td",{parentName:"tr",align:null},"Repeat connection"),(0,r.kt)("td",{parentName:"tr",align:null},"Request connection with the same WS link")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Illegal URL"),(0,r.kt)("td",{parentName:"tr",align:null},"Invalid WS link"),(0,r.kt)("td",{parentName:"tr",align:null},"Incoming WS links are not valid")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Unknown"),(0,r.kt)("td",{parentName:"tr",align:null},"Unknown error"),(0,r.kt)("td",{parentName:"tr",align:null},"Returns other unenumerated errors")))),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"error(liveMsg: LiveMsg): void")," server push exceptions.")),(0,r.kt)("p",null,"The structure of communication with WebSocket",(0,r.kt)("inlineCode",{parentName:"p"},"LiveMsg"),"The format is as follows\uff1a"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Name"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"appId"),(0,r.kt)("td",{parentName:"tr",align:null},"String"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"code"),(0,r.kt)("td",{parentName:"tr",align:null},"String"),(0,r.kt)("td",{parentName:"tr",align:null},"Return code, refer to",(0,r.kt)("a",{parentName:"td",href:"https://developers.realsee.com/docs/#/docs/live/server/README"},"server API Code table"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Command"),(0,r.kt)("td",{parentName:"tr",align:null},"Instruction"),(0,r.kt)("td",{parentName:"tr",align:null},"WebSocket communication instruction type, please refer to",(0,r.kt)("a",{parentName:"td",href:"https://unpkg.com/@realsee/live/docs/index.html"},"Live API")," document for details")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Data"),(0,r.kt)("td",{parentName:"tr",align:null},"Record<string, any>"),(0,r.kt)("td",{parentName:"tr",align:null},"Business data corresponding to this directive")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"frontRequestId:"),(0,r.kt)("td",{parentName:"tr",align:null},"String"),(0,r.kt)("td",{parentName:"tr",align:null},"Frontend Request ID, Revert to Frontend by the WS Service")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Message"),(0,r.kt)("td",{parentName:"tr",align:null},"String"),(0,r.kt)("td",{parentName:"tr",align:null},"Return description")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"requestId"),(0,r.kt)("td",{parentName:"tr",align:null},"String"),(0,r.kt)("td",{parentName:"tr",align:null},"Backend Request ID")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"roomCode"),(0,r.kt)("td",{parentName:"tr",align:null},"String"),(0,r.kt)("td",{parentName:"tr",align:null},"See room number")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"riggerUserId"),(0,r.kt)("td",{parentName:"tr",align:null},"String"),(0,r.kt)("td",{parentName:"tr",align:null},"User ID for triggering instructions")))),(0,r.kt)("p",null,"When WebSocket pushes data structures are not satisfactory ",(0,r.kt)("inlineCode",{parentName:"p"},"LiveMsg")," or ",(0,r.kt)("inlineCode",{parentName:"p"},"code")," values are not available ",(0,r.kt)("inlineCode",{parentName:"p"},"SUCCESS")," will be cast in the form of ",(0,r.kt)("inlineCode",{parentName:"p"},"error")," events."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"error(error: Error): void")," RTC voice exception")),(0,r.kt)("admonition",{type:"caution"},(0,r.kt)("p",{parentName:"admonition"},"RTC has different speech containers or RTC solutions and may not be fully consistent with the content of its error message.")),(0,r.kt)("h2",{id:"rtc-protocol"},"RTC Protocol"),(0,r.kt)("p",null,"Voice ability is dependent on the WebView/Browser container, which requires the container endside to implement RTC capability."),(0,r.kt)("p",null,"To facilitate developer access,",(0,r.kt)("strong",{parentName:"p"},"like the VRTC service of the Developer Center")," provides the mainstream platform ",(0,r.kt)("a",{parentName:"p",href:"https://developers.realsee.com/docs/#/docs/live/client/container/README"},"container SDK")," and ",(0,r.kt)("a",{parentName:"p",href:"https://www.npmjs.com/package/@realsee/jsbridge-x"},"jsbridge-x"),"."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Live")," implements native ability calls by ",(0,r.kt)("strong",{parentName:"p"},"jsbridge-x")," bridge with client applications or micromessaging apps that integrate",(0,r.kt)("strong",{parentName:"p"},"container SDK"),".This ",(0,r.kt)("inlineCode",{parentName:"p"},"jsbridge-x")," instance needs to be provided as a configuration parameter to",(0,r.kt)("inlineCode",{parentName:"p"},"createLive()"),"."),(0,r.kt)("p",null,"If iOS/Android Apps (accessed like VRTC container SDK)"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},'import { JSBridgeApp } from "@realsee/jsbridge-x/lib/app";\nimport { createLive } from "@realsee/live";\nimport { VRWebViewRTC } from "@realsee/live/RTC/VRWebViewRTC";\n\nconst jsBridgeInstance = new JSBridgeApp();\n\nconst rtcInstance = new VRWebViewRTC({\n  jsBridge,\n  getVoiceSign: () => {},\n});\n\nconst live = createLive({\n  rtc: rtcInstance,\n  getTicket: async () => "",\n});\n')),(0,r.kt)("p",null,"After providing RTC instance configuration parameters, the voice connections, disconnects, reconnections, etc. are hosted by ",(0,r.kt)("strong",{parentName:"p"},"Live"),".You can access voice-related states and events through the ",(0,r.kt)("inlineCode",{parentName:"p"},"$RTC")," namespace on the live instance."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},'// Status\uff1aUsers successfully joined the voice\nlive.$RTC.joined;\n// Status\uff1aUser Microphone Status\nlive.$RTC.micro;\n// Listen to user volume\nlive.$RTC.on("userVolumes", (userVolumes) => {});\n')))}d.isMDXComponent=!0}}]);