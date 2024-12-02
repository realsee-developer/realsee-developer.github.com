---
title: 序章
---

**Watch online は**、 [WebSocket](https://developer.mozilla.org/zh-CN/docs/Web/API/WebSocket)と[WebRTC](https://webrtc.org/)に基づく Ruoshi のリアルタイム通信機能です。ブラウザ側SDKとサーバー側VRTCサービスをコアに、コンテナ側SDK(iOS/Android/WeChatアプレット)でクロスプラットフォームのビジネスシナリオに対応。これらのツールとサービスに基づいて、開発者はスクリーン ツー スクリーンやリアルタイム音声などの機能をサポートするアプリケーションを開発できます。

## 製品アーキテクチャ

- **ブラウザ SDK**
    - [@realsee/five](../3d-space/get-started/00.rendering-engine.md)レンダリング エンジン
    - [@realsee/live](./preparation/3.live-controller.md)コントローラーを見てみましょう
    - [@realsee/jsbridge - x](../../webview/jsbridge/intro.md) "ブリッジ" プロトコル
- **クライアント コンテナー SDK** (クロスプラットフォーム コンテナー)
    - for iOS
    - for Android
    - for WeChat MiniProgram
- **サーバー API**
    - HTTP
    - WebSocket

<figure>
  <div style="{{display:" background: justifycontent: alignitems:>
    <div style="{{flex:1}}"><img style="{{width:'100%'}}" src="//vrlab-public.ljcdn.com/common/file/web/5ccab87f-edda-4a4c-864b-6a7f9738fa8c.png"></div>
  </div>
  <figcaption>図 1: サービス アーキテクチャを見てみましょう</figcaption></figure>
