"use strict";(self.webpackChunkrealsee_developer_github_com=self.webpackChunkrealsee_developer_github_com||[]).push([[3876],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return f}});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=r.createContext({}),l=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=l(e.components);return r.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),u=l(n),f=o,m=u["".concat(s,".").concat(f)]||u[f]||d[f]||a;return n?r.createElement(m,i(i({ref:t},p),{},{components:n})):r.createElement(m,i({ref:t},p))}));function f(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=u;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:o,i[1]=c;for(var l=2;l<a;l++)i[l]=n[l];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},55885:function(e,t,n){n.r(t),n.d(t,{assets:function(){return p},contentTitle:function(){return s},default:function(){return f},frontMatter:function(){return c},metadata:function(){return l},toc:function(){return d}});var r=n(87462),o=n(63366),a=(n(67294),n(3905)),i=["components"],c={title:"\u5750\u6807\u8f6c\u6362"},s=void 0,l={unversionedId:"front/3d-space/get-started/usage/conversion-coordinates",id:"front/3d-space/get-started/usage/conversion-coordinates",title:"\u5750\u6807\u8f6c\u6362",description:"Five \u63d0\u4f9b\u4e86 five.project2d(vector3) \u6765\u8ba1\u7b97\u4e09\u7ef4\u7a7a\u95f4\u4e2d\u70b9\u6295\u5f71\u5230\u4e8c\u7ef4\u5c4f\u5e55\u7684\u4f4d\u7f6e\u3002",source:"@site/docs/front/3d-space/get-started/usage/02.conversion-coordinates.md",sourceDirName:"front/3d-space/get-started/usage",slug:"/front/3d-space/get-started/usage/conversion-coordinates",permalink:"/docs/front/3d-space/get-started/usage/conversion-coordinates",tags:[],version:"current",lastUpdatedBy:"solome",lastUpdatedAt:1646224394,formattedLastUpdatedAt:"2022/3/2",sidebarPosition:2,frontMatter:{title:"\u5750\u6807\u8f6c\u6362"},sidebar:"\u4e09\u7ef4\u7a7a\u95f4",previous:{title:"\u4e8b\u4ef6\u7cfb\u7edf",permalink:"/docs/front/3d-space/get-started/usage/event-hooks"},next:{title:"\u6dfb\u52a0\u7269\u4f53",permalink:"/docs/front/3d-space/get-started/usage/add-three-mesh"}},p={},d=[],u={toc:d};function f(e){var t=e.components,n=(0,o.Z)(e,i);return(0,a.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Five")," \u63d0\u4f9b\u4e86 ",(0,a.kt)("inlineCode",{parentName:"p"},"five.project2d(vector3)")," \u6765\u8ba1\u7b97\u4e09\u7ef4\u7a7a\u95f4\u4e2d\u70b9\u6295\u5f71\u5230\u4e8c\u7ef4\u5c4f\u5e55\u7684\u4f4d\u7f6e\u3002"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},"five.on('intersectionOnModelUpdate', (\n    intersection: Intersection, // \u7126\u70b9\u78b0\u649e\u76d1\u6d4b\u7ed3\u679c\n    mesh: IntersectMeshInterface // \u7126\u70b9\u73af\n  ) => {\n    // \u6a21\u578b\u4e2d\u4e09\u7ef4\u70b9\n    const modelPoint = intersection.point\n    // \u5c4f\u5e55\u4e2d\u4e8c\u7ef4\u70b9\n    const cssPoint = project2d(modelPoint, false)\n})\n")),(0,a.kt)("p",null,"\u4e3e\u4e2a\u793a\u4f8b\u6765\u8bf4\u660e\uff1a"),(0,a.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,a.kt)("div",{parentName:"div",className:"admonition-heading"},(0,a.kt)("h5",{parentName:"div"},(0,a.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,a.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,a.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"\u529f\u80fd")),(0,a.kt)("div",{parentName:"div",className:"admonition-content"},(0,a.kt)("p",{parentName:"div"},"\u5f53\u9f20\u6807\u79fb\u52a8\u65f6\u5168\u666f\u7a7a\u95f4\u4e2d\u7684\u9f20\u6807\u5706\u73af\u4f1a\u88ab\u91cd\u65b0\u8ba1\u7b97\uff0c\u6211\u4eec\u5728\u9f20\u6807\u5706\u73af\u7684\u4f4d\u7f6e\u4e0a\u653e\u7f6e\u4e00\u5f20\u56fe\u7247\u3002"))),(0,a.kt)("iframe",{height:"560",style:{width:"100%",height:"560px"},scrolling:"no",title:"five-conversion-coordinates",src:"https://codepen.io/solome-the-selector/embed/abVRyVV?default-tab=result&editable=true&theme-id=light",frameborder:"no",loading:"lazy",allowtransparency:"true",allowfullscreen:"true"},"See the Pen ",(0,a.kt)("a",{href:"https://codepen.io/solome-the-selector/pen/abVRyVV"},"five-conversion-coordinates")," by \u63ac\u4e00\u6367 (",(0,a.kt)("a",{href:"https://codepen.io/solome-the-selector"},"@solome-the-selector"),") on ",(0,a.kt)("a",{href:"https://codepen.io"},"CodePen"),"."))}f.isMDXComponent=!0}}]);