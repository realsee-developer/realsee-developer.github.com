"use strict";(self.webpackChunkrealsee_developer_github_com=self.webpackChunkrealsee_developer_github_com||[]).push([[7542],{3905:(e,n,t)=>{t.d(n,{Zo:()=>c,kt:()=>v});var r=t(67294);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function a(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,r,i=function(e,n){if(null==e)return{};var t,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var d=r.createContext({}),s=function(e){var n=r.useContext(d),t=n;return e&&(t="function"==typeof e?e(n):a(a({},n),e)),t},c=function(e){var n=s(e.components);return r.createElement(d.Provider,{value:n},e.children)},p="mdxType",u={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},f=r.forwardRef((function(e,n){var t=e.components,i=e.mdxType,o=e.originalType,d=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),p=s(t),f=i,v=p["".concat(d,".").concat(f)]||p[f]||u[f]||o;return t?r.createElement(v,a(a({ref:n},c),{},{components:t})):r.createElement(v,a({ref:n},c))}));function v(e,n){var t=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var o=t.length,a=new Array(o);a[0]=f;var l={};for(var d in n)hasOwnProperty.call(n,d)&&(l[d]=n[d]);l.originalType=e,l[p]="string"==typeof e?e:i,a[1]=l;for(var s=2;s<o;s++)a[s]=t[s];return r.createElement.apply(null,a)}return r.createElement.apply(null,t)}f.displayName="MDXCreateElement"},75885:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>d,contentTitle:()=>a,default:()=>u,frontMatter:()=>o,metadata:()=>l,toc:()=>s});var r=t(87462),i=(t(67294),t(3905));const o={title:"Android Voice Integration"},a=void 0,l={unversionedId:"front/live/function-expansion/rtc/android",id:"front/live/function-expansion/rtc/android",title:"Android Voice Integration",description:"Android voice integrated documents only for Android client developers.There is no need for additional treatment by developers on other ends and there is natural support for multiple-end audio belts as long as the voices of all sides are secured.",source:"@site/i18n/en/docusaurus-plugin-content-docs/current/front/live/function-expansion/rtc/android.md",sourceDirName:"front/live/function-expansion/rtc",slug:"/front/live/function-expansion/rtc/android",permalink:"/en/docs/front/live/function-expansion/rtc/android",draft:!1,tags:[],version:"current",lastUpdatedBy:"sansi.lcj",lastUpdatedAt:1669717185,formattedLastUpdatedAt:"Nov 29, 2022",frontMatter:{title:"Android Voice Integration"},sidebar:"\u5982\u89c6\u5e26\u770b",previous:{title:"Browser Voice",permalink:"/en/docs/front/live/function-expansion/rtc/browser"},next:{title:"iOS Voice Integration",permalink:"/en/docs/front/live/function-expansion/rtc/ios"}},d={},s=[{value:"Dependencies added",id:"dependencies-added",level:2},{value:"Login Validation",id:"login-validation",level:2}],c={toc:s},p="wrapper";function u(e){let{components:n,...t}=e;return(0,i.kt)(p,(0,r.Z)({},c,t,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("admonition",{title:"hint",type:"tip"},(0,i.kt)("p",{parentName:"admonition"},"Android voice integrated documents only for Android client developers.There is no need for additional treatment by developers on other ends and there is natural support for multiple-end audio belts as long as the voices of all sides are secured.")),(0,i.kt)("p",null,"::caution",(0,i.kt)("br",{parentName:"p"}),"\n","Before you start, make sure you have integrated ",(0,i.kt)("inlineCode",{parentName:"p"},"Android SDK"),", and if you have not integrated ",(0,i.kt)("inlineCode",{parentName:"p"},"Android SDK"),"please jump to ",(0,i.kt)("strong",{parentName:"p"},(0,i.kt)("a",{parentName:"strong",href:"/en/docs/webview/app/Android"},"Android SDK integration"))," documentation for integration.\n:::"),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"The SDK uses Tencent Voice (Trtc) to realize voice synchronization during the process of watching with video. To use the video with video function, the following steps are required\uff1a")),(0,i.kt)("h2",{id:"dependencies-added"},"Dependencies added"),(0,i.kt)("p",null,"To avoid version conflicts, the SDK does not merge the Tencent audio library into aar, so you need to introduce it separately and modify ",(0,i.kt)("strong",{parentName:"p"},"build.gradle")," files to add dependencies"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-groovy",metastring:'title="build.gradle"',title:'"build.gradle"'},'dependencies {$\n    ...\n    // Voice (Tencapsule cloud)\n    api "com.tencent.liteav:LiteAVSDK_Professional:8.4.9947"\n    ...\n}\n')),(0,i.kt)("h2",{id:"login-validation"},"Login Validation"),(0,i.kt)("p",null,"With a need to verify user login status, the SDK needs to get the current user login token to verify validity, the validation results are not logged in or the login information is invalid, it will move the app to login, and the SDK will log back in the form of a callback interface."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java"},"RsVrSdk.init(this, new RsVrCallBack() {\n  @Override\n  public RsAppInfo appInfo() {\n    return new RsAppInfo() {\n      ...\n    };\n  }\n\n  // return login token\n  @Override\n  public String accessToken() {\n    return Utils.getAccessToken();\n  }\n\n  // Return user id\n  @Override\n  public String getUserId() {\n    return Utils.getUserId();\n  }\n\n  // Return user name\n  @Override\n  public String getUserName() {\n    return Utils.getUserName();\n  }\n\n  // If the login token fails the validation, jump to App login\n  @Override\n  public void actionLogin(Activity activity, int requestCode) {\n    Intent intent = new Intent(activity, GetUserIdActivity.class);\n    activity.startActivityForResult(intent, requestCode);\n  }\n});\n")))}u.isMDXComponent=!0}}]);