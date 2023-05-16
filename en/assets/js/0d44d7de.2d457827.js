"use strict";(self.webpackChunkrealsee_developer_github_com=self.webpackChunkrealsee_developer_github_com||[]).push([[2735],{3905:(e,n,t)=>{t.d(n,{Zo:()=>u,kt:()=>f});var i=t(67294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);n&&(i=i.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,i)}return t}function r(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,i,a=function(e,n){if(null==e)return{};var t,i,a={},o=Object.keys(e);for(i=0;i<o.length;i++)t=o[i],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(i=0;i<o.length;i++)t=o[i],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var l=i.createContext({}),p=function(e){var n=i.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):r(r({},n),e)),t},u=function(e){var n=p(e.components);return i.createElement(l.Provider,{value:n},e.children)},d="mdxType",c={inlineCode:"code",wrapper:function(e){var n=e.children;return i.createElement(i.Fragment,{},n)}},m=i.forwardRef((function(e,n){var t=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),d=p(t),m=a,f=d["".concat(l,".").concat(m)]||d[m]||c[m]||o;return t?i.createElement(f,r(r({ref:n},u),{},{components:t})):i.createElement(f,r({ref:n},u))}));function f(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var o=t.length,r=new Array(o);r[0]=m;var s={};for(var l in n)hasOwnProperty.call(n,l)&&(s[l]=n[l]);s.originalType=e,s[d]="string"==typeof e?e:a,r[1]=s;for(var p=2;p<o;p++)r[p]=t[p];return i.createElement.apply(null,r)}return i.createElement.apply(null,t)}m.displayName="MDXCreateElement"},80818:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>r,default:()=>c,frontMatter:()=>o,metadata:()=>s,toc:()=>p});var i=t(87462),a=(t(67294),t(3905));const o={title:"Configuration Description"},r="Five Initialization Configuration Usage Instructions",s={unversionedId:"front/3d-space/get-started/config",id:"front/3d-space/get-started/config",title:"Configuration Description",description:"In initializing the five instance you can configure parameters with specific reference FiveInitArgs",source:"@site/i18n/en/docusaurus-plugin-content-docs/current/front/3d-space/get-started/config.md",sourceDirName:"front/3d-space/get-started",slug:"/front/3d-space/get-started/config",permalink:"/en/docs/front/3d-space/get-started/config",draft:!1,tags:[],version:"current",lastUpdatedBy:"sansi.lcj",lastUpdatedAt:1669717185,formattedLastUpdatedAt:"Nov 29, 2022",frontMatter:{title:"Configuration Description"},sidebar:"\u4e09\u7ef4\u7a7a\u95f4",previous:{title:"Install",permalink:"/en/docs/front/3d-space/get-started/install"},next:{title:"Beginning",permalink:"/en/docs/front/3d-space/handbook/no-framework/get-started"}},l={},p=[{value:"imageOptions",id:"imageoptions",level:2},{value:"Shadow Configuration",id:"shadow-configuration",level:2},{value:"Sheet Description",id:"sheet-description",level:3},{value:"Tablet Configuration Example",id:"tablet-configuration-example",level:3},{value:"tileLevelForfov",id:"tilelevelforfov",level:3},{value:"textual options",id:"textual-options",level:2},{value:"Base Configuration",id:"base-configuration",level:3},{value:"autoResize",id:"autoresize",level:3},{value:"Graph Bed Service",id:"graph-bed-service",level:2},{value:"Aliyun Object Storage OSS",id:"aliyun-object-storage-oss",level:3},{value:"View Recommended Configuration Example",id:"view-recommended-configuration-example",level:2}],u={toc:p},d="wrapper";function c(e){let{components:n,...t}=e;return(0,a.kt)(d,(0,i.Z)({},u,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"five-initialization-configuration-usage-instructions"},"Five Initialization Configuration Usage Instructions"),(0,a.kt)("admonition",{type:"info"},(0,a.kt)("p",{parentName:"admonition"},"In initializing the five instance you can configure parameters with specific reference ",(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("a",{parentName:"strong",href:"https://unpkg.com/@realsee/five/docs/interfaces/five.FiveInitArgs.html"},"FiveInitArgs")),"\nThe following configuration items will have a direct impact on the VR experience, which we describe for you.")),(0,a.kt)("h2",{id:"imageoptions"},"imageOptions"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"imageOptions")," is a configuration parameter for the panorama. The Five rendering engine will adjust url dynamically from this parameter to panorama images in work data at runtime to achieve the purpose of balancing load time and image quality, configuration sample\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},"const five = new Five({\n  imageOptions: {\n    size: 1024, // indicates a panoramic image loading 1024x10\n    quality: 70, // indicates image compressed quality to 70%\n  },\n});\n")),(0,a.kt)("h2",{id:"shadow-configuration"},"Shadow Configuration"),(0,a.kt)("admonition",{type:"tip"},(0,a.kt)("mdxAdmonitionTitle",{parentName:"admonition"},"In addition, in order to improve VR loading speed and user experience, Five rendering engine supports",(0,a.kt)("strong",{parentName:"mdxAdmonitionTitle"},"tiles"),"loading mode.")),(0,a.kt)("h3",{id:"sheet-description"},"Sheet Description"),(0,a.kt)("p",null,"Five engines load panorama.list.tiles from work through ",(0,a.kt)("inlineCode",{parentName:"p"},"panorama.")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json"},'"panorama.list[]": {\n  "index": 0,\n  "right": "",\n  "left": "",\n  "up": "",\n  "down": "",\n  "front": "",\n  "back": "",\n  // highlight-start\n  "tiles": [1, 2, 3]\n    // highlight-end\n},\n')),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"1, 2, 3")," denotes the tile layer.level 1 is tube monoface image 101024 size, walking through 512 watches, level 2 is cube mono image 2048 size, and level 3 is cube single image 4096 and 512 watches Hierarchy"),(0,a.kt)("li",{parentName:"ul"},"Default Logic ",(0,a.kt)("inlineCode",{parentName:"li"},"1")," (1024x), ",(0,a.kt)("inlineCode",{parentName:"li"},"<code>")," (2048x) scalable from original design."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"3")," and above need a more clear image, matching by default from the original path ",(0,a.kt)("inlineCode",{parentName:"li"},"/cube_2048/"),". 3 matching ",(0,a.kt)("inlineCode",{parentName:"li"},"/cube_2048/")," -> ",(0,a.kt)("inlineCode",{parentName:"li"},"/cube_4096/"),"; 4 match ",(0,a.kt)("inlineCode",{parentName:"li"},"/cube_2048/")," -> ",(0,a.kt)("inlineCode",{parentName:"li"},"/cube_8192/")),(0,a.kt)("li",{parentName:"ul"},"If no matching logic is used, a different configuration is required, size represents the original image size below.")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json"},'"panorama.list[]": {\n  "index": 0,\n  "right": "",\n  "left": "",\n  "up": "",\n  "down": "",\n  "front": "",\n  "back": "",\n  // highlight-start\n  "tiles": [\n    {\n      "level": 1,\n      "size": 4096,\n      "right": "",\n      "left": "",\n      "up": "",\n      "down": "",\n      "front": "",\n      "back": ""\n    },\n    {\n      "level": 2,\n      "size": 4096,\n      "right": "",\n      "left": "",\n      "up": "",\n      "down": "",\n      "front": "",\n      "back": ""\n    }\n  ]\n  // highlight-end\n}\n\n')),(0,a.kt)("admonition",{title:"prompts",type:"tip"},(0,a.kt)("p",{parentName:"admonition"},"tile images to be cut by default using ",(0,a.kt)("a",{parentName:"p",href:"https://cloud.tencent.com/product/ci"},"Tencast Vientian"),"If you don't want to do the cloud image domain, you will need to configure ",(0,a.kt)("inlineCode",{parentName:"p"},"images")," rules to match the panacea.")),(0,a.kt)("h3",{id:"tablet-configuration-example"},"Tablet Configuration Example"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Tablet Configuration Example\uff1a")),(0,a.kt)("p",null,"The 512","*","512-sized panorama was initially loaded, and then a more clear panorama was loaded according to the rules inside the engine."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},"const five = new Five({\n  imageOptions: {\n    size: 512,\n    quality: 70,\n  },\n});\n")),(0,a.kt)("h3",{id:"tilelevelforfov"},"tileLevelForfov"),(0,a.kt)("p",null,"The panoramic tiles are registered. This configuration item is fully customized by the user and returns the tiles level based on the current fav and the current size of the area."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},"const five = new Five({\n  imageOptions: {\n    size: 512,\n    quality: 70,\n    panorama: {\n      // highlight-start\n      // tileLevelForFov?: false | ((fov: number, viewSize: Vector2) => number)\n      // highlight-end\n    },\n  },\n});\n")),(0,a.kt)("h2",{id:"textual-options"},"textual options"),(0,a.kt)("h3",{id:"base-configuration"},"Base Configuration"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"textureOptions")," is a configuration parameter for model maps that can be dynamically adjusted to the model map configured in work data for runtime to do url in runtime. Load time and image quality in equilibrium, configuration sample\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},"const five = new Five({\n  textureOptions: LOC\n    size: 512, // indicates model map loading 512x512 images\n    quality: 70, // indicates model sticker quality compressed to 70%\n  },\n})\n")),(0,a.kt)("p",null,"Normally the models contained in our work data are divided into two types,",(0,a.kt)("inlineCode",{parentName:"p"},"domez")," and",(0,a.kt)("inlineCode",{parentName:"p"},"at3d"),", specific types are known by looking at the suffix name of",(0,a.kt)("inlineCode",{parentName:"p"},"work.model.file_ur"),"field.We recommend setting model map",(0,a.kt)("inlineCode",{parentName:"p"},"size")," based on model type to achieve better VR experience."),(0,a.kt)("p",null,"Configure Example\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},"const five = new Five({\n  textureOptions: {\n    size: /at3d$/.test(work.model.file_url) ? 512 : 64,\n    quality: 70, // indicates model sticker quality compressed to 70%\n  },\n});\n")),(0,a.kt)("admonition",{type:"tip"},(0,a.kt)("p",{parentName:"admonition"},"Do not set this parameter if you need to display original models of uncompressed quality in certain scenarios.Of course, this could inevitably lead to a problem of too slow loading or carton because of the size of the model\u2019s resources.")),(0,a.kt)("h3",{id:"autoresize"},"autoResize"),(0,a.kt)("p",null,"TextureOptions support ",(0,a.kt)("inlineCode",{parentName:"p"},"autoResize"),", this configuration item defaults to ",(0,a.kt)("inlineCode",{parentName:"p"},"true"),".If configured to be true, the Five Rendering engine will calculate the appropriate model sticker dimensions based on the number of model maps adapted."),(0,a.kt)("p",null,"The following logic in the engine is set out below\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},"if (textureOptions.autoResize !== false) {\n  if (textureLength > 96) {\n    textureOptions.size = Math.min(textureOptions.size || Infinity, 100);\n  } else if (textureLength > 48) {\n    textureOptions.size = Math.min(textureOptions.size || Infinity, 200);\n  } else if (textureLength > 24) {\n    textureOptions.size = Math.min(textureOptions.size || Infinity, 400);\n  } else if (textureLength > 12) {\n    textureOptions.size = Math.min(textureOptions.size || Infinity, 800);\n  } else {\n    textureOptions.size = Math.min(textureOptions.size || Infinity, 1024);\n  }\n}\n")),(0,a.kt)("h2",{id:"graph-bed-service"},"Graph Bed Service"),(0,a.kt)("admonition",{type:"warning"},(0,a.kt)("p",{parentName:"admonition"},"Five engine currently uses ",(0,a.kt)("a",{parentName:"p",href:"https://cloud.tencent.com/product/ci"},"to free Vientiane data")," service. Other objects store configurations are only referenced and it is recommended to refer directly to the provider network configuration document used.")),(0,a.kt)("h3",{id:"aliyun-object-storage-oss"},"Aliyun Object Storage OSS"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},'export const imageOptions = {\n  format: "jpg", // optional format "jpg" | "png" | "heif" | "webp" | "avif"\n  quality: 100, // image quality parameters (0-100 )\n  size: 2048, // Try to use the power of 2 for image size parameters, such as 512 1024 2048, and use 512 for tiles\n  transform: (\n    source: string,\n    options: {\n      size?: number;\n      quality?: number;\n      format?: "jpg" | "png" | "heif" | "webp" | "avif";\n      cut?: [number, number, number, number];\n      sharpen?: number;\n    }\n  ) => {\n    let base = source.split("?")[0];\n    let ext = base.split(".").pop();\n\n    if (ext === "jpeg") ext = "jpg";\n    if (ext !== "png" && ext !== "jpg") return source;\n\n    let suffix: string = "";\n\n    const params: string[] = ["x-oss-process=image"];\n    const { format, quality, size } = options;\n\n    // image scaling\n    // https://help.aliyun.com/document_detail/44688.htm?spm=a2c4g.11186623.0.0.ea05890eIlPbUs#concept-hxj-c4n-vdb\n    if (size && size !== 2048) {\n      params.push(`resize,w_${size}`);\n    }\n\n    // Custom cropping\n    // https://help.aliyun.com/document_detail/44693.html\n    if (options.cut !== undefined) {\n      const [x, y, width, height] = options.cut;\n      params.push(`crop,x_${x},y_${y},w_${width},h_${height},g_nw`);\n    }\n\n    // When image processing includes scaling operations, it is recommended to put the format conversion parameters in the processing parameters of the last.\n    // https://help.aliyun.com/document_detail/44703.htm?spm=a2c4g.11186623.0.0.ea0532458MXRu0#concept-mf3-md5-vdb\n    if (format !== undefined && format !== ext) {\n      params.push(`format,${format}`);\n    }\n\n    ////image quality\n    // Quality change is only supported JPG and WebPage, other image formats are not supported.\n    // https://help.aliyun.com/document_detail/44705.htm?spm=a2c4g.11186623.0.0.ea053245KXAlE2#concept-exc-qp5-vdb\n    if (quality !== undefined && quality !== 100) {\n      const format = options.format ?? ext;\n      if (format && ["jpg", "webp"].indexOf(format) >= 0) {\n        params.push(`quality,Q_${quality}`);\n      }\n    }\n\n    // Sharpen\n    // https://help.aliyun.com/document_detail/44700.html\n    if (options.sharpen !== undefined) {\n      params.push(`sharpen,${options.sharpen}`);\n    }\n\n    // Spelling parameters\n    if (params.length) {\n      suffix = "?" + params.join("/");\n    }\n    return base + suffix;\n  },\n};\n\nconst url = imageOptions.transform(\n  "https://dts-test.bellecdn.com/806gyq3vl4Zpy97JO1/6gyq3vl4Zpy97JO1/images/cube_2048/6/bcaaac09c0edbacef756205bf6db9895/6_r.jpg",\n  { quality: 70, format: "jpg", size: 1024 }\n);\n\n// console.log(l)\n')),(0,a.kt)("h2",{id:"view-recommended-configuration-example"},"View Recommended Configuration Example"),(0,a.kt)("p",null,"On balance, we can usually use the following configuration as a benchmark, and then adjust it appropriately according to different conditions."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},"const defaultInitArgs = {\n  backgroundAlpha: 0,\n  initWithTransition: false,\n  floorplan: {\n    minLatitude: 0,\n    maxLatitude: Math.PI / 2,\n    defaultFov: 95,\n  },\n  panorama: {\n    minLatitude: -Math.PI / 4,\n    maxLatitude: Math.PI / 4,\n    defaultFov: 95,\n  },\n  imageOptions: {\n    size: 1024, // Because the default image size is 2048, no longer set default\n    quality: 70, // If there are tiles, don't set quality\n  },\n  textureOptions: {\n    size: 512, // Assume model to be at3d\n    quality: 70,\n  },\n  onlyRenderIfNeeds: true,   // defaults to true. In most cases, on-demand rendering should be enabled.\n  initialBasisLoader: false, // The default value is false. In most cases, basis is not used, and resources are not loaded much.\n  // five plugins\n  plugins: pluginsArray, // configure as needed\n}\n\nif (there are 2 or more VR instances) {\n  defaultInitArgs.imageOptions.size = 1024\n}\n\nif (if tiles are supported) {\n  defaultInitArgs.imageOptions.size = 512\n}\n\nif (model is domez type) {\n  defaultInitArgs.textureOptions.size = 64\n}\n\nif (need to display high-definition model) {\n  defaultInitArgs .textureOptions.size = null\n  defaultInitArgs.textureOptions.autoResize = false\n}\n\n")))}c.isMDXComponent=!0}}]);