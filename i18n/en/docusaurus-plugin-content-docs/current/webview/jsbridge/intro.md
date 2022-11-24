---
title: "@realsee/jsbridge-x"
---

`@realsee/jsbridge-x` needs to be used with the `VRWebView container SDK`. Through this SDK the VRWebView container will be able to implement messaging and data exchange between its embedded frontend web pages.

:::caution Note
This SDK is only available for web server JavaScript, For VRWebView in client ( iOS / Android ), applet environment please move to **[VRWebView container SDK](../intro.md)**.
:::

## Install

```bash npm2yarn
npm install @realsee/jsbridge-x
```

or introduce： via cdn

```html
<!-- production -->
<script src="//unpkg.com/@realsee/jsbridge-x@${version}/lib/umd/app.js"></script>
```

## Use Instructions

For iOS \Android, Micromessager and other terminals, platforms provide the corresponding **[VRWebView container](../intro.md)**.Similarly,**@realsee/jsbridge-x** is adapted from different **[VRWebView container](../intro.md)** you can select version `jsBridge` based on the current container.

```js
// iOS/Android
import JSBridge from '@realsee/jsbridge-x/lib/app'
// or miniprogram
// import JSBbridge from '@realsee/jsbridge-x/lib/miniprogram'

const jsBridge = new JSBridge({})

// Listen if jsBridge completes initialization
jsBridge. n('inited', () => /** */)

// Get device information for the current container
const [deviceInfo, err] = await jsBridge.getDeviceInfo()

```

## Adaptations

- [x] [iOS VRWebView](../app/iOS.md)
- [x] [Android VRWebView](../app/Android.md)
- [x] [Miniprogram](../miniProgram/wechat.md)
- [ ] Headline applets
- [ ] 100 applets

::caution notes  
the browser itself is the full version of WebView and does not exist for the so-called `jsBridge`.But in order to ensure the unity of business source code logic, we also simulated a `jsBridge` concept in the browser environment.The browser's `jsBridge` needs to be implemented by yourself, with reference **[browser "bridge" implementation](./browser-jsbridge.md)**.
:::
