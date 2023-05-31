"use strict";(self.webpackChunkrealsee_developer_github_com=self.webpackChunkrealsee_developer_github_com||[]).push([[669],{3905:(e,t,n)=>{n.d(t,{Zo:()=>l,kt:()=>m});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=r.createContext({}),p=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},l=function(e){var t=p(e.components);return r.createElement(c.Provider,{value:t},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),d=p(n),f=o,m=d["".concat(c,".").concat(f)]||d[f]||u[f]||a;return n?r.createElement(m,i(i({ref:t},l),{},{components:n})):r.createElement(m,i({ref:t},l))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=f;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s[d]="string"==typeof e?e:o,i[1]=s;for(var p=2;p<a;p++)i[p]=n[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},61467:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>u,frontMatter:()=>a,metadata:()=>s,toc:()=>p});var r=n(87462),o=(n(67294),n(3905));const a={title:"Convert Coordinates"},i=void 0,s={unversionedId:"front/3d-space/get-started/usage/conversion-coordinates",id:"front/3d-space/get-started/usage/conversion-coordinates",title:"Convert Coordinates",description:"Five has provided five.project2d(vector3) to calculate the position of the 3D midpoint to the 2D screen.",source:"@site/i18n/en/docusaurus-plugin-content-docs/current/front/3d-space/get-started/usage/03.conversion-coordinates.md",sourceDirName:"front/3d-space/get-started/usage",slug:"/front/3d-space/get-started/usage/conversion-coordinates",permalink:"/en/docs/front/3d-space/get-started/usage/conversion-coordinates",draft:!1,tags:[],version:"current",lastUpdatedBy:"sansi.lcj",lastUpdatedAt:1669717185,formattedLastUpdatedAt:"Nov 29, 2022",sidebarPosition:3,frontMatter:{title:"Convert Coordinates"},sidebar:"\u4e09\u7ef4\u7a7a\u95f4",previous:{title:"Event System",permalink:"/en/docs/front/3d-space/get-started/usage/event-hooks"},next:{title:"Add object",permalink:"/en/docs/front/3d-space/get-started/usage/add-three-mesh"}},c={},p=[],l={toc:p},d="wrapper";function u(e){let{components:t,...n}=e;return(0,o.kt)(d,(0,r.Z)({},l,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Five")," has provided ",(0,o.kt)("inlineCode",{parentName:"p"},"five.project2d(vector3)")," to calculate the position of the 3D midpoint to the 2D screen."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},'five.on(\n  "intersectionOnModelUpdate",\n  (\n    intersection: Intersection, // Focus impact monitoring result\n    mesh: IntersectMeshInterface // Focus Ring\n  ) => {\n    // 3D point in model\n    const modelPoint = intersection.point;\n    // 2D point on screen\n    const cssPoint = project2d(modelPoint, false);\n  }\n);\n')),(0,o.kt)("p",null,"Description\uff1a with an example"),(0,o.kt)("admonition",{title:"feature  ",type:"tip"},(0,o.kt)("p",{parentName:"admonition"},"When mouse moves in panorames, we place an image on the position of the mouse circle.")),(0,o.kt)("iframe",{height:"560",style:{width:"100%",height:"560px"},scrolling:"no",title:"five-conversion-coordinates",src:"https://codepen.io/solome-the-selector/embed/abVRyVV?default-tab=result&editable=true&theme-id=light",frameborder:"no",loading:"lazy",allowtransparency:"true",allowfullscreen:"true"},"See the Pen ",(0,o.kt)("a",{href:"https://codepen.io/solome-the-selector/pen/abVRyVV"},"five-conversion-coordinates")," by \u63ac\u4e00\u6367 (",(0,o.kt)("a",{href:"https://codepen.io/solome-the-selector"},"@solome-the-selector"),") on ",(0,o.kt)("a",{href:"https://codepen.io"},"CodePen"),"."))}u.isMDXComponent=!0}}]);