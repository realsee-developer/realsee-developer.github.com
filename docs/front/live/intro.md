---
title: 简介
---

**线上带看** 是如视基于 [WebSocket](https://developer.mozilla.org/zh-CN/docs/Web/API/WebSocket) 和 [WebRTC](https://webrtc.org/) 实现的实时通信能力。以浏览器端 SDK 和服务端 VRTC 服务为核心，搭配容器端 SDK（iOS / Android / 微信小程序）支持跨平台业务场景。基于这些工具和服务，开发者可以开发支持诸如画面同屏、实时语音等功能的应用。

## 产品架构

- **浏览器 SDK**
  - [@realsee/five](../3d-space/get-started/00.rendering-engine.md) 渲染引擎
  - [@realsee/live](./preparation/3.live-controller.md) 带看控制器
  - [@realsee/jsbridge-x](../../webview/jsbridge/intro.md) "桥"协议
- **客户端容器 SDK** (cross-platform container)
  - for iOS
  - for Android
  - for WeChat MiniProgram
- **服务端 API**
  - HTTP
  - WebSocket

<figure>
  <div style={{display: 'flex',     background: 'white',
    justifyContent: 'center',
    alignItems: 'center',}}>
    <div style={{flex:1}}><img style={{width:'100%'}} src="//vrlab-public.ljcdn.com/common/file/web/5ccab87f-edda-4a4c-864b-6a7f9738fa8c.png" /></div>
  </div>
  <figcaption>图一：带看服务架构</figcaption>
</figure>
