"use strict";(self.webpackChunkrealsee_developer_github_com=self.webpackChunkrealsee_developer_github_com||[]).push([[76],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>m});var o=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var c=o.createContext({}),l=function(e){var t=o.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},d=function(e){var t=l(e.components);return o.createElement(c.Provider,{value:t},e.children)},p="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},h=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,c=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),p=l(n),h=r,m=p["".concat(c,".").concat(h)]||p[h]||u[h]||a;return n?o.createElement(m,i(i({ref:t},d),{},{components:n})):o.createElement(m,i({ref:t},d))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,i=new Array(a);i[0]=h;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s[p]="string"==typeof e?e:r,i[1]=s;for(var l=2;l<a;l++)i[l]=n[l];return o.createElement.apply(null,i)}return o.createElement.apply(null,n)}h.displayName="MDXCreateElement"},40682:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>u,frontMatter:()=>a,metadata:()=>s,toc:()=>l});var o=n(87462),r=(n(67294),n(3905));const a={title:"Click on an object"},i=void 0,s={unversionedId:"front/3d-space/get-started/usage/collision-detection",id:"front/3d-space/get-started/usage/collision-detection",title:"Click on an object",description:"How do you add an item model in the three-dimensional space, and how do you know that the item is hit by your mouse?",source:"@site/i18n/en/docusaurus-plugin-content-docs/current/front/3d-space/get-started/usage/05.collision-detection.md",sourceDirName:"front/3d-space/get-started/usage",slug:"/front/3d-space/get-started/usage/collision-detection",permalink:"/en/docs/front/3d-space/get-started/usage/collision-detection",draft:!1,tags:[],version:"current",lastUpdatedBy:"sansi.lcj",lastUpdatedAt:1669717185,formattedLastUpdatedAt:"Nov 29, 2022",sidebarPosition:5,frontMatter:{title:"Click on an object"},sidebar:"\u4e09\u7ef4\u7a7a\u95f4",previous:{title:"Add object",permalink:"/en/docs/front/3d-space/get-started/usage/add-three-mesh"},next:{title:"Introduction to VR View Room Plugin",permalink:"/en/docs/front/3d-space/advanced/dnalogel/intro"}},c={},l=[{value:"Add object",id:"add-object",level:2},{value:"Click on events",id:"click-on-events",level:2},{value:"Compute intersection",id:"compute-intersection",level:2},{value:"True Results",id:"true-results",level:2}],d={toc:l},p="wrapper";function u(e){let{components:t,...n}=e;return(0,r.kt)(p,(0,o.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"How do you add an item model in the three-dimensional space, and how do you know that the item is hit by your mouse?"),(0,r.kt)("p",null,"Give an example\uff1a"),(0,r.kt)("admonition",{title:"feature",type:"tip"},(0,r.kt)("p",{parentName:"admonition"},"By default, tap the screen ",(0,r.kt)("strong",{parentName:"p"},"Five")," will perform a walking or modular switch. The example requires adding a square in space, hint ",(0,r.kt)("strong",{parentName:"p"},'when you click on the body "Congratulations"')," and do not perform the default action.")),(0,r.kt)("iframe",{height:"560",style:{width:"100%",height:"560px"},scrolling:"no",title:"Untitled",src:"https://codepen.io/solome-the-selector/embed/xxPQBWx?default-tab=result&editable=true&theme-id=light",frameborder:"no",loading:"lazy",allowtransparency:"true",allowfullscreen:"true"},"See the Pen ",(0,r.kt)("a",{href:"https://codepen.io/solome-the-selector/pen/xxPQBWx"},"Untitled")," by \u63ac\u4e00\u6367 (",(0,r.kt)("a",{href:"https://codepen.io/solome-the-selector"},"@solome-the-selector"),") on ",(0,r.kt)("a",{href:"https://codepen.io"},"CodePen"),"."),(0,r.kt)("h2",{id:"add-object"},"Add object"),(0,r.kt)("p",null,"After the model has been successfully loaded, add a cube in space."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},'five.once("modelLoaded", () => {\n  five.setState({ mode: "Floorplan" });\n\n  // highlight-start\n  const geometry = new THREE.BoxGeometry(1, 1, 1, 32);\n  const material = new THREE.MeshBasicMaterial({\n    color: new THREE.Color(0x2008aa),\n  });\n  const box = new THREE.Mesh(geometry, material);\n  box.position.set(-2.8741698071921214, 0.220446049250313, -4.631508324407246);\n  five.scene.add(box);\n  // highlight-end\n\n  five.on("wantsTapGesture", (raycaster, tapPosition) => {\n    // The gesture in the callback has not been triggered, and the collision logic can be executed\n    const intersect = raycaster.intersectObject(box);\n    console.log("intersect", intersect);\n\n    const [clickedMesh] = intersect;\n    if (clickedMesh) {\n      alert("Congratulations, you clicked on the object");\n      return false;\n    }\n  });\n});\n')),(0,r.kt)("h2",{id:"click-on-events"},"Click on events"),(0,r.kt)("p",null,"Listen to ",(0,r.kt)("inlineCode",{parentName:"p"},"five.on('wantsTapGesture')")," to click on gesture events."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},'five.once("modelLoaded", () => {\n  five.setState({ mode: "Floorplan" });\n\n  const geometry = new THREE.BoxGeometry(1, 1, 1, 32);\n  const material = new THREE.MeshBasicMaterial({\n    color: new THREE.Color(0x2008aa),\n  });\n  const box = new THREE.Mesh(geometry, material);\n  box.position.set(-2.8741698071921214, 0.220446049250313, -4.631508324407246);\n  five.scene.add(box);\n  // highlight-start\n  five.on("wantsTapGesture", (raycaster) => {\n    // \u76d1\u6d4b\u903b\u8f91\n  });\n  // highlight-end\n});\n')),(0,r.kt)("h2",{id:"compute-intersection"},"Compute intersection"),(0,r.kt)("p",null,"In the ",(0,r.kt)("inlineCode",{parentName:"p"},'"wantsTapGesture"')," callback function, there is a raycasting ",(0,r.kt)("a",{parentName:"p",href:"https://threejs.org/docs/index.html#api/zh/core/Raycaster"},"Raycaster")," instance, and you can calculate the intersection point of the ray from the current camera to the click position and the object based on ",(0,r.kt)("a",{parentName:"p",href:"https://threejs.org/docs/index.html#api/zh/core/Raycaster"},"Raycaster"),"."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},'five.once("modelLoaded", () => {\n  five.setState({ mode: "Floorplan" });\n\n  const geometry = new THREE.BoxGeometry(1, 1, 1, 32);\n  const material = new THREE.MeshBasicMaterial({\n    color: new THREE.Color(0x2008aa),\n  });\n  const box = new THREE.Mesh(geometry, material);\n  box.position.set(-2.8741698071921214, 0.220446049250313, -4.631508324407246);\n  five.scene.add(box);\n\n  five.on("wantsTapGesture", (raycaster, tapPosition) => {\n    // Callback gesture not triggered, Perform collision logic\n    // highlight-start\n    const intersect = raycaster.intersectObject(box);\n    // highlight-end\n  });\n});\n')),(0,r.kt)("h2",{id:"true-results"},"True Results"),(0,r.kt)("p",null,"The computed result ",(0,r.kt)("inlineCode",{parentName:"p"},"inters)")," is an array indicating the number of interfaces between the radius and the object to determine the return value to see if the object is clicked."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},'five.once("modelLoaded", () => {\n  five.setState({ mode: "Floorplan" });\n\n  const geometry = new THREE.BoxGeometry(1, 1, 1, 32);\n  const material = new THREE.MeshBasicMaterial({\n    color: new THREE.Color(0x2008aa),\n  });\n  const box = new THREE.Mesh(geometry, material);\n  box.position.set(-2.8741698071921214, 0.220446049250313, -4.631508324407246);\n  five.scene.add(box);\n\n  five.on("wantsTapGesture", (raycaster, tapPosition) => {\n    // Callback gesture not triggered, collision logic can be executed\n    const intersect = raycaster.intersectObject(box);\n\n    // highlight-start\n    const [clickedMesh] = intersect;\n    if (clickedMesh) {\n      alert("\u606d\u559c\uff0c\u4f60\u70b9\u5230\u7269\u4f53\u5566");\n      // \u70b9\u51fb\u5230 \u6b63\u65b9\u4f53\uff0c\u7ec8\u6b62\u4e8b\u4ef6\n      return false;\n    }\n    // highlight-end\n  });\n});\n')))}u.isMDXComponent=!0}}]);