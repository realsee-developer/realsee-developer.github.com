---
title: 微信小程序语音
---

:::tip 提示
微信小程序语音的集成文档仅针对微信小程序开发人员。其他端开发人员无需做额外处理，只要保证各端语音跑通，则天然支持多端语音带看。
:::

## 环境要求

- 微信 App iOS 最低版本要求：7.0.9
- 微信 App Android 最低版本要求：7.0.8
- 小程序基础库最低版本要求：2.10.0
- 由于小程序测试号不具备 `<live-pusher>` 和 `<live-player>` 的使用权限，需要申请常规小程序账号进行开发。
- 由于微信开发者工具不支持原生组件（即 `<live-pusher>` 和 `<live-player>` 标签），需要在真机上进行运行体验。
- 不支持 uniapp 等开发框架，请使用原生小程序开发环境。

## 开发准备

### 1、权限开通

:::warning 警告
开发时务必开通小程序类目与推拉流标签权限，如不开通则无法正常使用。
:::

- 小程序推拉流标签不支持个人小程序，只支持企业类小程序。
- 小程序推拉流标签使用权限暂时只开放给有限[类目](https://developers.weixin.qq.com/miniprogram/dev/component/live-pusher.html)。
- 符合类目要求的小程序，需要在【微信公众平台】>【开发】>【开发管理】>【接口设置】中自助开通该组件权限，如下图所示：
  <!-- ![check](../../../../assets/wx/check.png) -->

### 2、申请 SDK 接入密钥

请跳转至 [开发者控制台](https://developers.realsee.com/console) 申请。

### 3、添加合法域名

**request 合法域名**: `https://cloud.tencent.com;https://yun.tim.qq.com;https://app-gateway-realsee.ke.com;`

**socket 合法域名**: `wss://ws.realsee.cn;wss://ws.realsee.com;`

## SDK 下载

通过 [SDK 资源](https://vrlab-static.ljcdn.com/release/web/sdk/vrwebview-miniprogram.3af4ce43.zip) 下载 `rs-wx-vrsdk.zip` 文件，解压后直接引用

## 接入指南

### 1、创建 page.wxml

创建符合您业务场景 WXML 文件模板 page.wxml

```html
<!-- 引入 sdk 里的wxml模板 -->
<include src="path-to/rs-wx-vrsdk/index.wxml" />
```

### 2、创建 page.js

```javascript title="page.js"
// 从 sdk 里引入 vrPage 对象
import vrPage from "path-to/rs-wx-vrsdk/index";
// 从 sdk 里引入 TRTC 对象，或引入自己接入的 trtc-wx 对象
import TRTC from "path-to/trtc-wx";

// 将 TRTC 挂载到 vrPage 上
vrPage.TRTC = TRTC;

// 进行SDK初始化参数配置
vrPage.vrOptions = {
  app: {
    key: "your app key",
    secret: "your app secret",
    // gateway的挂载点
    gateway: "https://app-gateway-realsee.ke.com", // 生产环境
    // sdk启动接口
    startup: "/sdk/open/startup/cold.json",
    // 语音签名接口
    sign: "/sdk/open/live/voice/sign.json",
  },
};

/** 请实现以下接口 */

// 获取用户标识 带看下该接口必须实现
vrPage.getUserIdentifier = async () => "";

// 进行登录
vrPage.login = async () => "";

// 与webview进行通信
vrPage.bindMessage = (message) => {
  // message消息体结构：{ id: 随机消息id, data: 消息的数据 }
  // data的数据结构，请通信双方自行协商定义
};

// 退出当前小程序页面
vrPage.exit = () => {};

// 进行分享数据传递
vrPage.share = (shareObj) => {};

// 将vrPage对象传递给微信原生的Page对象即可
Page(vrPage);
```

### 3、使用方式

```js
// 将vr链接作为小程序⻚面的url参数即可，请注意需要使用 encodeURIComponent
wx.navigateTo({
  url: `/page?url=encodeURIComponent(${vrUrl})`,
});
```
