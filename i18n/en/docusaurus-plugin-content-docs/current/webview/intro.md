---
title: Introduction
---

**such as visual 3D space rendering** is implemented based on modern browsers [WebGL](https://www.khronos.org/webgl/).In environments such as mobile terminals iOS / Android and micro-messenger applets are integrated in the form of a nested frontend page in **WebView** like 3D space rendering capability.At the same time, in order to take full advantage of the ends' capabilities, such as viewing the Open Platform as official encapsulation of the `VRWebView` SDK.

## Support features

`VRWebView` mainly provides the following functions：

### Terminal Capabilities

- **Basic functions**：features like fullscreen, vibration, share, permission detect, access to albums etc. are not available at the browser.
- **Voice channel**：is limited to [WebRTC](https://webrtc.org/) compatibility, terminal device can proxy [WebRTC](https://webrtc.org/).

### Performance experience

- **Preload capacity**：Before turning on the VR page, you can preload some data, sticky resources and more.
- **First Rendering**(_partially supported_)：provides terminal rendering capability, pending seamless switching when front-end rendering is complete.
- **Proxy request**(_partially support_)：takes advantage of high client performance **HTTP** request capacity, and caches request results to avoid subsequent duplicate requests.

## "bridge" protocol

[`@realsee/jsbridge-x`](https://www.npmjs.com/package/@realsee/jsbridge-x) is implemented `VRWebView` The frontend SDK for messaging and data exchange between the container and its embedded web page.

For more details, please move by way： **["bridge" protocol - introduce](/docs/webview/jsbridge/intro)**.

:::tip Reminder
Due to the inconsistent implementation mechanism of `WebView` of each terminal (iOS [WKWebView](https://developer.apple.com/documentation/webkit/wkwebview), Android [WebView](https://developer.android.com/reference/android/webkit/WebView), WeChat applet [web-view](https://developers.weixin.qq.com/miniprogram/dev/component/web-view.html) , etc.), although `@realsee/jsbridge-x` has tried to smooth out the differences between them, but due to the differences in platforms, please refer to the API corresponding to each version for details.
:::
