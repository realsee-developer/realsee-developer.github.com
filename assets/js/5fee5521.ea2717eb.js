"use strict";(self.webpackChunkrealsee_developer_github_com=self.webpackChunkrealsee_developer_github_com||[]).push([[356],{49613:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>f});var n=r(59496);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var c=n.createContext({}),l=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},p=function(e){var t=l(e.components);return n.createElement(c.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),u=l(r),f=o,m=u["".concat(c,".").concat(f)]||u[f]||d[f]||a;return r?n.createElement(m,s(s({ref:t},p),{},{components:r})):n.createElement(m,s({ref:t},p))}));function f(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,s=new Array(a);s[0]=u;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i.mdxType="string"==typeof e?e:o,s[1]=i;for(var l=2;l<a;l++)s[l]=r[l];return n.createElement.apply(null,s)}return n.createElement.apply(null,r)}u.displayName="MDXCreateElement"},60134:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>s,default:()=>d,frontMatter:()=>a,metadata:()=>i,toc:()=>l});var n=r(2962),o=(r(59496),r(49613));const a={title:"\u5750\u6807\u8f6c\u6362"},s=void 0,i={unversionedId:"front/3d-space/get-started/usage/conversion-coordinates",id:"front/3d-space/get-started/usage/conversion-coordinates",title:"\u5750\u6807\u8f6c\u6362",description:"Five \u63d0\u4f9b\u4e86 five.project2d(vector3) \u6765\u8ba1\u7b97\u4e09\u7ef4\u7a7a\u95f4\u4e2d\u70b9\u6295\u5f71\u5230\u4e8c\u7ef4\u5c4f\u5e55\u7684\u4f4d\u7f6e\u3002",source:"@site/docs/front/3d-space/get-started/usage/03.conversion-coordinates.md",sourceDirName:"front/3d-space/get-started/usage",slug:"/front/3d-space/get-started/usage/conversion-coordinates",permalink:"/docs/front/3d-space/get-started/usage/conversion-coordinates",draft:!1,tags:[],version:"current",lastUpdatedBy:"sansi.lcj",lastUpdatedAt:1669717185,formattedLastUpdatedAt:"2022\u5e7411\u670829\u65e5",sidebarPosition:3,frontMatter:{title:"\u5750\u6807\u8f6c\u6362"},sidebar:"\u4e09\u7ef4\u7a7a\u95f4",previous:{title:"\u4e8b\u4ef6\u7cfb\u7edf",permalink:"/docs/front/3d-space/get-started/usage/event-hooks"},next:{title:"\u6dfb\u52a0\u7269\u4f53",permalink:"/docs/front/3d-space/get-started/usage/add-three-mesh"}},c={},l=[],p={toc:l};function d(e){let{components:t,...r}=e;return(0,o.kt)("wrapper",(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Five")," \u63d0\u4f9b\u4e86 ",(0,o.kt)("inlineCode",{parentName:"p"},"five.project2d(vector3)")," \u6765\u8ba1\u7b97\u4e09\u7ef4\u7a7a\u95f4\u4e2d\u70b9\u6295\u5f71\u5230\u4e8c\u7ef4\u5c4f\u5e55\u7684\u4f4d\u7f6e\u3002"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},'five.on(\n  "intersectionOnModelUpdate",\n  (\n    intersection: Intersection, // \u7126\u70b9\u78b0\u649e\u76d1\u6d4b\u7ed3\u679c\n    mesh: IntersectMeshInterface // \u7126\u70b9\u73af\n  ) => {\n    // \u6a21\u578b\u4e2d\u4e09\u7ef4\u70b9\n    const modelPoint = intersection.point;\n    // \u5c4f\u5e55\u4e2d\u4e8c\u7ef4\u70b9\n    const cssPoint = project2d(modelPoint, false);\n  }\n);\n')),(0,o.kt)("p",null,"\u4e3e\u4e2a\u793a\u4f8b\u6765\u8bf4\u660e\uff1a"),(0,o.kt)("admonition",{title:"\u529f\u80fd",type:"tip"},(0,o.kt)("p",{parentName:"admonition"},"\u5f53\u9f20\u6807\u79fb\u52a8\u65f6\u5168\u666f\u7a7a\u95f4\u4e2d\u7684\u9f20\u6807\u5706\u73af\u4f1a\u88ab\u91cd\u65b0\u8ba1\u7b97\uff0c\u6211\u4eec\u5728\u9f20\u6807\u5706\u73af\u7684\u4f4d\u7f6e\u4e0a\u653e\u7f6e\u4e00\u5f20\u56fe\u7247\u3002")),(0,o.kt)("iframe",{height:"560",style:{width:"100%",height:"560px"},scrolling:"no",title:"five-conversion-coordinates",src:"https://codepen.io/solome-the-selector/embed/abVRyVV?default-tab=result&editable=true&theme-id=light",frameborder:"no",loading:"lazy",allowtransparency:"true",allowfullscreen:"true"},"See the Pen ",(0,o.kt)("a",{href:"https://codepen.io/solome-the-selector/pen/abVRyVV"},"five-conversion-coordinates")," by \u63ac\u4e00\u6367 (",(0,o.kt)("a",{href:"https://codepen.io/solome-the-selector"},"@solome-the-selector"),") on ",(0,o.kt)("a",{href:"https://codepen.io"},"CodePen"),"."))}d.isMDXComponent=!0}}]);