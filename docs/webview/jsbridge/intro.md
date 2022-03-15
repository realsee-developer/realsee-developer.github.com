---
title: "@realsee/jsbridge-x"
---

`@realsee/jsbridge-x` 需搭配 `VRWebView 容器 SDK` 一起使用。 通过此 SDK 可实现 VRWebView 容器 与其嵌入的前端 Web 页面间的消息传递和数据交换。

:::caution 注意
本 SDK 仅供 Web 端 JavaScript 环境使用，关于客户端 ( iOS / Android )、小程序环境的 VRWebView 请移步 **[VRWebView 容器 SDK](../intro.md)** 。
:::

## 安装

```bash npm2yarn
npm install @realsee/jsbridge-x
```

或通过 cdn 方式引入：

```html
<!-- production -->
<script src="//unpkg.com/@realsee/jsbridge-x@${version}/lib/umd/app.js"></script>
```

## 使用说明

如视针对 iOS \ Android、微信小程序等终端、平台均提供了对应的 **[VRWebView 容器](../intro.md)** 。同样的，**@realsee/jsbridge-x** 会根据不同的 **[VRWebView 容器](../intro.md)** 做了适配，您可根据当前的容器选择对应的 `jsBridge` 版本。

```js
// iOS/Android
import JSBridge from '@realsee/jsbridge-x/lib/app'
// 或 微信小程序
// import JSBridge from '@realsee/jsbridge-x/lib/miniprogram'

const jsBridge = new JSBridge({})

// 监听 jsBridge 是否完成初始化
jsBridge.on('inited', () => /** */)

// 获取当前容器的设备信息
const [deviceInfo, err] = await jsBridge.getDeviceInfo()

```


## 适配情况

- [x] [iOS VRWebView](../app/iOS.md)
- [x] [Android VRWebView](../app/Android.md)
- [x] [微信小程序](../miniProgram/wechat.md)
- [ ] 头条小程序
- [ ] 百度小程序
 
:::caution 注意
浏览器本身就是 WebView 的完整版，并不存在所谓的 `jsBridge`。但为了保障业务源码逻辑的统一性，我们在浏览器环境下也模拟出一个 `jsBridge` 概念。浏览器的 `jsBridge` 需要您自行实现，具体实现可参考 **[浏览器 "桥" 实现](./browser-jsbridge.md)** 。
:::

