---
title: 简介
---

**如视三维空间渲染** 是基于现代浏览器 [WebGL](https://www.khronos.org/webgl/) 实现的。而在移动终端( iOS / Android )、微信小程序等环境中，则是以 **WebView** 内嵌前端页面的形式进行如视三维空间渲染能力的集成。同时，为了充分利用终端的能力，如视开放平台官方封装了一系列 `VRWebView` SDK。

## 支持功能

`VRWebView` 主要提供如下几项功能：

### 终端能力

- **基础功能**：比如全屏、震动、分享、权限检测、访问相册等浏览器端无法提供的功能。
- **语音通道**：限于 [WebRTC](https://webrtc.org/) 兼容性，终端设备可以代理 [WebRTC](https://webrtc.org/) 的能力。

### 性能体验

- **预载能力**：在开启 VR 页面前，可以提前预载一些数据、贴图资源等。
- **首屏渲染**（*部分支持*）：提供终端渲染能力，等前端渲染完成后实现无缝切换。
- **代理请求**（*部分支持*）：充分利用客户端高性能 **HTTP** 请求能力，并缓存请求结果规避后续重复请求。

## "桥" 协议

[`@realsee/jsbridge-x`](https://www.npmjs.com/package/@realsee/jsbridge-x) 是实现 `VRWebView` 容器与其嵌入的 Web 页面间的消息传递和数据交换的前端 SDK。

使用方式等更多细节请移步： **["桥" 协议-介绍](/docs/webview/jsbridge/intro)**。

:::tip 温馨提示 
由于各个终端的 `WebView` 的实现机制不一致（iOS [WKWebView](https://developer.apple.com/documentation/webkit/wkwebview)、Android [WebView](https://developer.android.com/reference/android/webkit/WebView)、微信小程序 [web-view](https://developers.weixin.qq.com/miniprogram/dev/component/web-view.html) 等等），虽然 `@realsee/jsbridge-x` 已尽量抹平它们之间的差异，但由于平台的差异性，具体细节请以各个版本对应的 API 为准。
:::
