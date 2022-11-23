---
title: Introduction
---

**Online** is seen in real time communication capacity based on [WebSocket](https://developer.mozilla.org/zh-CN/docs/Web/API/WebSocket) and [WebRTC](https://webrtc.org/).With browser SDK and server VRTC services as its core, twinning containers support cross-platform business scenes (iOS / Android / Microlet).Based on these tools and services, developers can develop applications that support functions such as screen and voice in real time.


## Product Structure

- **Browser SDK**
    - [@realsee/five](../3d-space/get-started/00.rendering-engine.md) rendering engine
    - [@realsee/live](./preparation/3.live-controller.md) with watching controller
    - [@realsee/jsbridge-x](../../webview/jsbridge/intro.md) "bridge" protocol
- **Client container SDK** (cross-platform container)
    - for iOS
    - for Android
    - for WeChat MiniProgram
- **Server API**
    - HTTP
    - WebSocket

<figure>
  <div style={{display: 'flex',     background: 'white',
    justifyContent: 'center',
    alignItems: 'center',}}>
    <div style={{flex:1}}><img style={{width:'100%'}} src="//vrlab-public.ljcdn.com/common/file/web/5ccab87f-edda-4a4c-864b-6a7f9738fa8c.png" /></div>
  </div>
  <figcaption>Figure I：See the structure of services</figcaption>
</figure>




