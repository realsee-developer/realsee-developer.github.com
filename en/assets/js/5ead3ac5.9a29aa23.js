"use strict";(self.webpackChunkrealsee_developer_github_com=self.webpackChunkrealsee_developer_github_com||[]).push([[3433],{49613:(e,t,a)=>{a.d(t,{Zo:()=>c,kt:()=>m});var n=a(59496);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var s=n.createContext({}),p=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},c=function(e){var t=p(e.components);return n.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),u=p(a),m=r,y=u["".concat(s,".").concat(m)]||u[m]||d[m]||o;return a?n.createElement(y,i(i({ref:t},c),{},{components:a})):n.createElement(y,i({ref:t},c))}));function m(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=a.length,i=new Array(o);i[0]=u;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:r,i[1]=l;for(var p=2;p<o;p++)i[p]=a[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}u.displayName="MDXCreateElement"},88622:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>d,frontMatter:()=>o,metadata:()=>l,toc:()=>p});var n=a(2962),r=(a(59496),a(49613));const o={title:"Quick start"},i=void 0,l={unversionedId:"front/space-navigation/get-started/quick_start",id:"front/space-navigation/get-started/quick_start",title:"Quick start",description:"Create Live Instance",source:"@site/i18n/en/docusaurus-plugin-content-docs/current/front/space-navigation/get-started/1.quick_start.md",sourceDirName:"front/space-navigation/get-started",slug:"/front/space-navigation/get-started/quick_start",permalink:"/en/docs/front/space-navigation/get-started/quick_start",draft:!1,tags:[],version:"current",lastUpdatedBy:"sansi.lcj",lastUpdatedAt:1669717185,formattedLastUpdatedAt:"Nov 29, 2022",sidebarPosition:1,frontMatter:{title:"Quick start"},sidebar:"\u7a7a\u95f4\u5bfc\u89c8",previous:{title:"Install",permalink:"/en/docs/front/space-navigation/get-started/install"},next:{title:"DMO Experience",permalink:"/en/docs/front/space-navigation/get-started/demo"}},s={},p=[{value:"Create Live Instance",id:"create-live-instance",level:2},{value:"Create <code>Player</code> instance",id:"create-player-instance",level:2},{value:"Load theater data",id:"load-theater-data",level:2},{value:"Pause &amp; playback",id:"pause--playback",level:2},{value:"Panel Control",id:"panel-control",level:2},{value:"Event listener",id:"event-listener",level:2}],c={toc:p};function d(e){let{components:t,...a}=e;return(0,r.kt)("wrapper",(0,n.Z)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"create-live-instance"},"Create Live Instance"),(0,r.kt)("p",null,"You need to create a three-dimensional space before using the player, that is, ",(0,r.kt)("inlineCode",{parentName:"p"},"Five")," instance:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},'import * as React from "react";\nimport { Five } from "@realsee/five";\n\nconst five = new Five({\n  /* Five configuration */\n});\n')),(0,r.kt)("admonition",{type:"tip"},(0,r.kt)("p",{parentName:"admonition"},"You can go to ",(0,r.kt)("a",{parentName:"p",href:"/en/docs/front/3d-space/get-started/usage/space"},(0,r.kt)("strong",{parentName:"a"},"like the three-dimensional space fast practice document"))," learn ",(0,r.kt)("inlineCode",{parentName:"p"},"Five")," about the creation and use of instances.")),(0,r.kt)("h2",{id:"create-player-instance"},"Create ",(0,r.kt)("inlineCode",{parentName:"h2"},"Player")," instance"),(0,r.kt)("p",null,"When creating an instance of ",(0,r.kt)("inlineCode",{parentName:"p"},"Player")," you need to pass the ",(0,r.kt)("inlineCode",{parentName:"p"},"Five")," instance to constructor as initial parameter ",(0,r.kt)("inlineCode",{parentName:"p"},"Player"),"."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},'import { Player } from "@realsee/vreo";\n\nconst vreoPlayer = new Player(five); // where five were created for the previous step\n')),(0,r.kt)("p",null,"Of course, you also need to introduce the ",(0,r.kt)("inlineCode",{parentName:"p"},"default")," style into your own project, otherwise some UI effects cannot be displayed correctly\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-css"},'@import "@realsee/vreo/stylesheets/default.css";\n')),(0,r.kt)("h2",{id:"load-theater-data"},"Load theater data"),(0,r.kt)("p",null,"Load the script data\uff1afor the player through the ",(0,r.kt)("inlineCode",{parentName:"p"},"load")," method"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},'// Asynchronous Request Theatre Data\nconst vreoUnit = await fetch("api/**/**");\n\n// Load Station Data\n// highlight-start\nvreoPlayer.load(vreoUnit);\n// highlight-end\n')),(0,r.kt)("h2",{id:"pause--playback"},"Pause & playback"),(0,r.kt)("p",null,"By default, data will be played automatically once it is loaded.You can pause playback by ",(0,r.kt)("inlineCode",{parentName:"p"},"pause()")," method, you can also resume playback by ",(0,r.kt)("inlineCode",{parentName:"p"},"play()")," method\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"// Pause script\nvreoPlayer.pause();\n\n// Play script\nvreoPlayer.play();\n")),(0,r.kt)("h2",{id:"panel-control"},"Panel Control"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Vreo")," will come with a bottom panel, inscription barrage, digital human images, etc. are displayed on this panel, you can control the panel by ",(0,r.kt)("inlineCode",{parentName:"p"},"show()"),",",(0,r.kt)("inlineCode",{parentName:"p"},"hide()")," methods\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"// Hide panel\nvreoPlayer.hide();\n\n// Display panel\nvreoPlayer.show();\n")),(0,r.kt)("admonition",{type:"tip"},(0,r.kt)("p",{parentName:"admonition"},"To this end, you have used ",(0,r.kt)("strong",{parentName:"p"},"Vreo")," the most core of the player.")),(0,r.kt)("h2",{id:"event-listener"},"Event listener"),(0,r.kt)("p",null,"You can listen to related events through the ",(0,r.kt)("inlineCode",{parentName:"p"},"on()")," method."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},'// Listen to play events\nvreoPlayer.on("playing", callback);\n\n// Listen to pause events\nvreoPlayer.on("paused", callback);\n')))}d.isMDXComponent=!0}}]);