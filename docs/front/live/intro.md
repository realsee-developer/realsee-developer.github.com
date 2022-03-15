---
title: 简介
---

**线上带看** 是如视基于 [WebSocket](https://developer.mozilla.org/zh-CN/docs/Web/API/WebSocket) 和 [WebRTC](https://webrtc.org/) 实现的实时通信能力。以浏览器端 SDK 和服务端 VRTC 服务为核心，搭配容器端 SDK（iOS / Android / 微信小程序）支持跨平台业务场景。基于这些工具和服务，开发者可以开发支持诸如画面同屏、实时语音等功能的应用。


## 产品架构

- **浏览器 SDK**
    - @realsee/five 渲染引擎
    - @realsee/live 带看控制器
    - @realsee/jsbridge-x "桥"协议
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
    <div style={{flex:1}}><img style={{width:'100%'}} src="//vrlab-public.ljcdn.com/common/file/web/b8e0ccf8-a022-401c-a094-23f2f6058c2a.png
" /></div>
  </div>
  <figcaption>图一：带看服务架构</figcaption>
</figure>




