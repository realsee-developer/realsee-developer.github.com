"use strict";(self.webpackChunkrealsee_developer_github_com=self.webpackChunkrealsee_developer_github_com||[]).push([[2712],{3905:function(e,t,a){a.d(t,{Zo:function(){return v},kt:function(){return u}});var n=a(67294);function i(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function s(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){i(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,n,i=function(e,t){if(null==e)return{};var a,n,i={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(i[a]=e[a]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(i[a]=e[a])}return i}var l=n.createContext({}),c=function(e){var t=n.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):s(s({},t),e)),a},v=function(e){var t=c(e.components);return n.createElement(l.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},p=n.forwardRef((function(e,t){var a=e.components,i=e.mdxType,r=e.originalType,l=e.parentName,v=o(e,["components","mdxType","originalType","parentName"]),p=c(a),u=i,d=p["".concat(l,".").concat(u)]||p[u]||m[u]||r;return a?n.createElement(d,s(s({ref:t},v),{},{components:a})):n.createElement(d,s({ref:t},v))}));function u(e,t){var a=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=a.length,s=new Array(r);s[0]=p;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o.mdxType="string"==typeof e?e:i,s[1]=o;for(var c=2;c<r;c++)s[c]=a[c];return n.createElement.apply(null,s)}return n.createElement.apply(null,a)}p.displayName="MDXCreateElement"},58215:function(e,t,a){a.d(t,{Z:function(){return i}});var n=a(67294);function i(e){var t=e.children,a=e.hidden,i=e.className;return n.createElement("div",{role:"tabpanel",hidden:a,className:i},t)}},9877:function(e,t,a){a.d(t,{Z:function(){return v}});var n=a(87462),i=a(67294),r=a(72389),s=a(65450),o=a(86010),l="tabItem_LplD";function c(e){var t,a,r,c=e.lazy,v=e.block,m=e.defaultValue,p=e.values,u=e.groupId,d=e.className,f=i.Children.map(e.children,(function(e){if((0,i.isValidElement)(e)&&void 0!==e.props.value)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),h=null!=p?p:f.map((function(e){var t=e.props;return{value:t.value,label:t.label,attributes:t.attributes}})),k=(0,s.lx)(h,(function(e,t){return e.value===t.value}));if(k.length>0)throw new Error('Docusaurus error: Duplicate values "'+k.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.');var g=null===m?m:null!=(t=null!=m?m:null==(a=f.find((function(e){return e.props.default})))?void 0:a.props.value)?t:null==(r=f[0])?void 0:r.props.value;if(null!==g&&!h.some((function(e){return e.value===g})))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+g+'" but none of its children has the corresponding value. Available values are: '+h.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");var N=(0,s.UB)(),y=N.tabGroupChoices,w=N.setTabGroupChoices,b=(0,i.useState)(g),S=b[0],C=b[1],x=[],K=(0,s.o5)().blockElementScrollPositionUntilNextRender;if(null!=u){var T=y[u];null!=T&&T!==S&&h.some((function(e){return e.value===T}))&&C(T)}var E=function(e){var t=e.currentTarget,a=x.indexOf(t),n=h[a].value;n!==S&&(K(t),C(n),null!=u&&w(u,n))},F=function(e){var t,a=null;switch(e.key){case"ArrowRight":var n=x.indexOf(e.currentTarget)+1;a=x[n]||x[0];break;case"ArrowLeft":var i=x.indexOf(e.currentTarget)-1;a=x[i]||x[x.length-1]}null==(t=a)||t.focus()};return i.createElement("div",{className:"tabs-container"},i.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":v},d)},h.map((function(e){var t=e.value,a=e.label,r=e.attributes;return i.createElement("li",(0,n.Z)({role:"tab",tabIndex:S===t?0:-1,"aria-selected":S===t,key:t,ref:function(e){return x.push(e)},onKeyDown:F,onFocus:E,onClick:E},r,{className:(0,o.Z)("tabs__item",l,null==r?void 0:r.className,{"tabs__item--active":S===t})}),null!=a?a:t)}))),c?(0,i.cloneElement)(f.filter((function(e){return e.props.value===S}))[0],{className:"margin-vert--md"}):i.createElement("div",{className:"margin-vert--md"},f.map((function(e,t){return(0,i.cloneElement)(e,{key:t,hidden:e.props.value!==S})}))))}function v(e){var t=(0,r.Z)();return i.createElement(c,(0,n.Z)({key:String(t)},e))}},8841:function(e,t,a){a.r(t),a.d(t,{assets:function(){return p},contentTitle:function(){return v},default:function(){return f},frontMatter:function(){return c},metadata:function(){return m},toc:function(){return u}});var n=a(87462),i=a(63366),r=(a(67294),a(3905)),s=a(9877),o=a(58215),l=["components"],c={title:"VR\u540c\u5c4f"},v=void 0,m={unversionedId:"front/live/get-started/sync-five-state",id:"front/live/get-started/sync-five-state",title:"VR\u540c\u5c4f",description:"Live \u501f\u52a9 WebSocket \u957f\u94fe\u53cc\u5de5\u901a\u4fe1\u80fd\u529b\uff0c\u5b9e\u73b0\u4e86\u591a\u7aef\u7528\u6237\u7684\u540c\u5c4f\u8fde\u7ebf\u3002",source:"@site/docs/front/live/get-started/03.sync-five-state.md",sourceDirName:"front/live/get-started",slug:"/front/live/get-started/sync-five-state",permalink:"/docs/front/live/get-started/sync-five-state",tags:[],version:"current",lastUpdatedBy:"\u5c0f\u9640\u87ba",lastUpdatedAt:1647598986,formattedLastUpdatedAt:"2022/3/18",sidebarPosition:3,frontMatter:{title:"VR\u540c\u5c4f"},sidebar:"\u5982\u89c6\u5e26\u770b",previous:{title:"\u5e26\u770b\u9000\u51fa",permalink:"/docs/front/live/get-started/live-exit"},next:{title:"\u6d4f\u89c8\u5668\u8bed\u97f3",permalink:"/docs/front/live/function-expansion/rtc/browser"}},p={},u=[{value:"\u65e0\u6846\u67b6\u793a\u4f8b",id:"\u65e0\u6846\u67b6\u793a\u4f8b",level:2},{value:"React \u793a\u4f8b",id:"react-\u793a\u4f8b",level:2}],d={toc:u};function f(e){var t=e.components,c=(0,i.Z)(e,l);return(0,r.kt)("wrapper",(0,n.Z)({},d,c,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"Live \u501f\u52a9 WebSocket \u957f\u94fe\u53cc\u5de5\u901a\u4fe1\u80fd\u529b\uff0c\u5b9e\u73b0\u4e86\u591a\u7aef\u7528\u6237\u7684\u540c\u5c4f\u8fde\u7ebf\u3002\n\u5176\u4e2d\uff0c\u6d88\u606f\u4f53\u7cfb\u4e2d\u7684",(0,r.kt)("strong",{parentName:"p"},"\u5e27\u6570\u636e"),"\u662f\u8fdb\u884c\u540c\u5c4f\u7684\u4fe1\u606f\u8f7d\u4f53\u3002\u672c\u7ae0\u8282\u5c06\u9610\u8ff0\u5982\u4f55\u8fdb\u884c VR \u540c\u5c4f\u3002\n",(0,r.kt)("strong",{parentName:"p"},"\u5f00\u53d1\u540c\u5c4f\u524d\uff0c\u60a8\u9700\u8981\u51c6\u5907\u81f3\u5c11\u4e24\u4e2a\u5e26\u770b\u89d2\u8272\uff1a\u4e3b\u6301\u4eba\u3001\u89c2\u4f17\u3002"),"\n\u540c\u65f6\uff0c\u6211\u4eec\u9ed8\u8ba4\u60a8\u5df2\u7ecf\u638c\u63e1\u5982\u4f55\u67e5\u770b\u3001\u8bbe\u7f6e five \u7684\u72b6\u6001\u3002 "))),(0,r.kt)("h2",{id:"\u65e0\u6846\u67b6\u793a\u4f8b"},"\u65e0\u6846\u67b6\u793a\u4f8b"),(0,r.kt)(s.Z,{mdxType:"Tabs"},(0,r.kt)(o.Z,{value:"JavaScript",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-jsx"},"five.on('stateChange', (state, userAction) => { // \u76d1\u542c\u672c\u5730 five state \u53d8\u5316\n    if(userAction) { // \u4ec5\u53d1\u9001\u7531\u7528\u6237\u64cd\u4f5c\u5f15\u53d1\u7684 five state \u53d8\u66f4\n        // \u53d1\u9001\u672c\u5730 \u5e27\u6570\u636e (Five State)\n        live.sendKeyframe('FiveState', state)\n    }\n})\n\n\n// \u63a5\u6536\u8fdc\u7a0b \u5e27\u6570\u636e (Five State)\nlive.keyframes.on('FiveState', (newState, prevState) => {\n    // \u62ff\u6700\u65b0\u7684 `newState` \u66f4\u65b0\u672c\u5730 UI \u72b6\u6001\n    five.setState(newState, false, false) // \u8bbe\u7f6e userAction \u7684\u503c\u4e3a false \uff0c\u907f\u514d\u540c\u6b65\u6b7b\u5faa\u73af\u3002\n})\n"))),(0,r.kt)(o.Z,{value:"TypeScript",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx"},"five.on('stateChange', (state, userAction) => { // \u76d1\u542c\u672c\u5730 five state \u53d8\u5316\n    if(userAction) { // \u4ec5\u53d1\u9001\u7531\u7528\u6237\u64cd\u4f5c\u5f15\u53d1\u7684 five state \u53d8\u66f4\n        // \u53d1\u9001\u672c\u5730 \u5e27\u6570\u636e (Five State)\n        live.sendKeyframe('FiveState', state)\n    }\n})\n\n\n// \u63a5\u6536\u8fdc\u7a0b \u5e27\u6570\u636e (Five State)\nlive.keyframes.on('FiveState', (newState, prevState) => {\n    // \u62ff\u5230\u6700\u65b0\u7684 `newState` \u66f4\u65b0\u672c\u5730 UI \u72b6\u6001\n    five.setState(newState, false, false) // \u8bbe\u7f6e userAction \u7684\u503c\u4e3a false \uff0c\u907f\u514d\u540c\u6b65\u6b7b\u5faa\u73af\u3002\n})\n")))),(0,r.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"\u64cd\u4f5c ",(0,r.kt)("inlineCode",{parentName:"p"},"\u4e3b\u6301\u4eba")," VR \uff0c\u5728 ",(0,r.kt)("inlineCode",{parentName:"p"},"\u4e3b\u6301\u4eba")," \u4fa7\u63a7\u5236\u53f0\u7684 network \u91cc\u67e5\u770b ws \u4fe1\u606f\u3002"),(0,r.kt)("p",{parentName:"div"},"\u968f\u7740\u4e3b\u6301\u4eba\u5c4f\u5e55\u4e0a VR \u7684\u53d8\u5316\uff0cws Messages \u5c06\u4e0d\u65ad\u53d1\u51fa ",(0,r.kt)("inlineCode",{parentName:"p"},"KEYFRAME_SYNC")," \u6307\u4ee4\u3002\u70b9\u51fb\u5bf9\u5e94\u6307\u4ee4\uff0c\u53ef\u67e5\u770b\u8be6\u7ec6\u7684\u6570\u636e\u4f20\u8f93\u5185\u5bb9\u3002"))),(0,r.kt)("p",null,(0,r.kt)("img",{loading:"lazy",alt:"live-five-state-sync",src:a(70911).Z,width:"2114",height:"1224"})),(0,r.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"\u540c\u65f6\u67e5\u770b ",(0,r.kt)("inlineCode",{parentName:"p"},"\u89c2\u4f17")," \u4fa7\u63a7\u5236\u53f0, \u627e\u5230 network \u4e2d\u7684 ws \u4fe1\u606f\u3002"),(0,r.kt)("p",{parentName:"div"},"\u968f\u7740\u4e3b\u6301\u4eba\u64cd\u4f5c VR \uff0cws Messages \u5c06\u63a5\u6536\u5230 ",(0,r.kt)("inlineCode",{parentName:"p"},"KEYFRAM_SYNC")," \u6307\u4ee4\u3002\u70b9\u51fb\u5bf9\u5e94\u6307\u4ee4\uff0c\u53ef\u67e5\u770b\u8be6\u7ec6\u7684\u63a5\u6536\u6570\u636e\u5185\u5bb9\u3002"))),(0,r.kt)("p",null,(0,r.kt)("img",{loading:"lazy",alt:"live-five-state-sync",src:a(46043).Z,width:"2108",height:"1220"})),(0,r.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"\u53d1\u9001\u51fa\u53bb\u7684 ws \u4fe1\u606f\u4e3a\u6307\u5411\u4e0a\u7684\u7eff\u8272\u7bad\u5934\uff0c\u63a5\u6536\u5230\u7684 ws \u4fe1\u606f\u4e3a\u5411\u4e0b\u7684\u7ea2\u8272\u7bad\u5934\u3002"))),(0,r.kt)("h2",{id:"react-\u793a\u4f8b"},"React \u793a\u4f8b"),(0,r.kt)(s.Z,{mdxType:"Tabs"},(0,r.kt)(o.Z,{value:"JavaScript",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-jsx"},"import LiveReact from 'LiveReact'\nimport { useFiveState } from \"@realsee/five/react\"\n\nconst { useKeyframe } = LiveReact\n\nfunction Test () {\n    const [fiveState, setFiveState] = useFiveState()\n    const [fiveStateKeyframe, setFiveStateKeyframe] = useKeyframe('FiveState')\n    \n    // \u76d1\u542c five state \u53d8\u5316\uff0c\u5e76\u53d1\u9001\u5e27\u6570\u636e\n    useFiveEventCallback(\"stateChange\", (state, userAction) => {\n        // \u4ec5\u53d1\u9001\u7528\u6237\u89e6\u53d1\u7684state change\n        if (userAction) {\n            setFiveStateKeyframe(state)\n        }\n    })\n    \n    // \u63a5\u6536\u5e27\u6570\u636e\n    /*\n    * const [fiveStateKeyframe, setFiveStateKeyframe] = useKeyframe('FiveState')\u4e2d\uff0c\n    * useKeyfram() \u52fe\u5b50\u5df2\u7ecf\u5c06\u5b9e\u65f6\u7684\u5e27\u6570\u636e\u8fdb\u884c\u66f4\u65b0\uff0cfiveStateKeyframe \u5c31\u662f\u6700\u65b0\u7684 five state \u5e27\u3002\n    * \u6240\u4ee5\u5e27\u6570\u636e\u7684\u63a5\u6536\u4ec5\u9700\u8981 diff  useKeyframe() \u52fe\u5b50\u7b2c\u4e00\u4e2a\u53c2\u6570\u503c\u7684\u53d8\u66f4\uff0c\u7136\u540e\u66f4\u65b0\u672c\u5730 UI \u5373\u53ef\u3002\n    * \u6b64\u5904\u4ec5\u9700\u8981\u76d1\u542c fiveStateKeyframe \u7684\u53d8\u66f4\uff0c\u7136\u540e\u66f4\u65b0 five state\u3002\n    * */\n    \n    React.useEffect(() => {\n        // \u53ea\u8981\u80fd\u8d70\u5230\u8fd9\u91cc\uff0c\u5373\u4ee3\u8868 fiveStateKeyframe \u6709\u53d8\u66f4\u3002\n        setFiveState(fiveStateKeyframe, false, false) // \u5c06\u540c\u5c4f\u7684state\u53d8\u66f4\u7684 userAction \u8bbe\u7f6e\u4e3afalse\u3002\u907f\u514d\u540c\u5c4f\u6b7b\u5faa\u73af\u3002\n    }, [fiveStateKeyframe])\n    \n    \n    return null\n    \n}\n"))),(0,r.kt)(o.Z,{value:"TypeScript",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx"},"import LiveReact from 'LiveReact'\nimport { useFiveState } from \"@realsee/five/react\"\n\nconst { useKeyframe } = LiveReact\n\nfunction Test () {\n    const [fiveState, setFiveState] = useFiveState()\n    const [fiveStateKeyframe, setFiveStateKeyframe] = useKeyframe('FiveState')\n\n    // \u76d1\u542c five state \u53d8\u5316\uff0c\u5e76\u53d1\u9001\u5e27\u6570\u636e\n    useFiveEventCallback(\"stateChange\", (state, userAction) => {\n        // \u4ec5\u53d1\u9001\u7528\u6237\u89e6\u53d1\u7684state change\n        if (userAction) {\n            setFiveStateKeyframe(state)\n        }\n    })\n\n    // \u63a5\u6536\u5e27\u6570\u636e\n    /*\n    * const [fiveStateKeyframe, setFiveStateKeyframe] = useKeyframe('FiveState')\u4e2d\uff0c\n    * useKeyfram() \u52fe\u5b50\u5df2\u7ecf\u5c06\u5b9e\u65f6\u7684\u5e27\u6570\u636e\u8fdb\u884c\u66f4\u65b0\uff0cfiveStateKeyframe \u5c31\u662f\u6700\u65b0\u7684 five state \u5e27\u3002\n    * \u6240\u4ee5\u5e27\u6570\u636e\u7684\u63a5\u6536\u4ec5\u9700\u8981 diff  useKeyframe() \u52fe\u5b50\u7b2c\u4e00\u4e2a\u53c2\u6570\u503c\u7684\u53d8\u66f4\uff0c\u7136\u540e\u66f4\u65b0\u672c\u5730 UI \u5373\u53ef\u3002\n    * \u6b64\u5904\u4ec5\u9700\u8981\u76d1\u542c fiveStateKeyframe \u7684\u53d8\u66f4\uff0c\u7136\u540e\u66f4\u65b0 five state\u3002\n    * */\n\n    React.useEffect(() => {\n        // \u53ea\u8981\u80fd\u8d70\u5230\u8fd9\u91cc\uff0c\u5373\u4ee3\u8868 fiveStateKeyframe \u6709\u53d8\u66f4\u3002\n        setFiveState(fiveStateKeyframe, false, false) // \u5c06\u540c\u5c4f\u7684state\u53d8\u66f4\u7684 userAction \u8bbe\u7f6e\u4e3afalse\u3002\u907f\u514d\u540c\u5c4f\u6b7b\u5faa\u73af\u3002\n    }, [fiveStateKeyframe])\n\n\n    return null\n\n}\n")))),(0,r.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"\u64cd\u4f5c ",(0,r.kt)("inlineCode",{parentName:"p"},"\u4e3b\u6301\u4eba")," VR \uff0c\u5728 ",(0,r.kt)("inlineCode",{parentName:"p"},"\u4e3b\u6301\u4eba")," \u4fa7\u63a7\u5236\u53f0\u7684 network \u91cc\u67e5\u770b ws \u4fe1\u606f\u3002"),(0,r.kt)("p",{parentName:"div"},"\u968f\u7740\u4e3b\u6301\u4eba\u5c4f\u5e55\u4e0a VR \u7684\u53d8\u5316\uff0cws Messages \u5c06\u4e0d\u65ad\u53d1\u51fa ",(0,r.kt)("inlineCode",{parentName:"p"},"KEYFRAME_SYNC")," \u6307\u4ee4\u3002\u70b9\u51fb\u5bf9\u5e94\u6307\u4ee4\uff0c\u53ef\u67e5\u770b\u8be6\u7ec6\u7684\u6570\u636e\u4f20\u8f93\u5185\u5bb9\u3002"))),(0,r.kt)("p",null,(0,r.kt)("img",{loading:"lazy",alt:"live-five-state-sync",src:a(70911).Z,width:"2114",height:"1224"})),(0,r.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"\u540c\u65f6\u67e5\u770b ",(0,r.kt)("inlineCode",{parentName:"p"},"\u89c2\u4f17")," \u4fa7\u63a7\u5236\u53f0, \u627e\u5230 network \u4e2d\u7684 ws \u4fe1\u606f\u3002"),(0,r.kt)("p",{parentName:"div"},"\u968f\u7740\u4e3b\u6301\u4eba\u64cd\u4f5c VR \uff0cws Messages \u5c06\u63a5\u6536\u5230 ",(0,r.kt)("inlineCode",{parentName:"p"},"KEYFRAM_SYNC")," \u6307\u4ee4\u3002\u70b9\u51fb\u5bf9\u5e94\u6307\u4ee4\uff0c\u53ef\u67e5\u770b\u8be6\u7ec6\u7684\u63a5\u6536\u6570\u636e\u5185\u5bb9\u3002"))),(0,r.kt)("p",null,(0,r.kt)("img",{loading:"lazy",alt:"live-five-state-sync",src:a(46043).Z,width:"2108",height:"1220"})),(0,r.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"\u53d1\u9001\u51fa\u53bb\u7684 ws \u4fe1\u606f\u4e3a\u6307\u5411\u4e0a\u7684\u7eff\u8272\u7bad\u5934\uff0c\u63a5\u6536\u5230\u7684 ws \u4fe1\u606f\u4e3a\u5411\u4e0b\u7684\u7ea2\u8272\u7bad\u5934\u3002"))))}f.isMDXComponent=!0},46043:function(e,t,a){t.Z=a.p+"assets/images/live-five-state-receive-2fcf97324ac4ea8fd927a44013b1367a.png"},70911:function(e,t,a){t.Z=a.p+"assets/images/live-five-state-sync-d58310c6e33068fc8745a239d7187409.png"}}]);