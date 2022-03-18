---
title: 内置接口
---

:::tip
**[点击此处可查看内置接口全量文档](https://unpkg.com/@realsee/jsbridge-x/docs/interfaces/jsBridge.JSBridgeProtocol.html) 。**
:::

### webViewType
- `webViewType: WebViewTypeEnum` WebView 类型

### ready
- `ready: () => Promise<JSBridgeReturnType<boolean>>` 判断 jsBridge 是否就绪

### loadProgress
- `loadProgress: (progress: number) => Promise<JSBridgeReturnType<boolean>>` 控制进度条

### closeLoading
- `closeLoading: () => Promise<JSBridgeReturnType<boolean>>` 关闭进度条

### getDeviceInfo
- `getDeviceInfo: () => Promise<JSBridgeReturnType<DeviceInfo | false>>` 获取容器设备信息

### getWebViewState
- `getWebViewState: () => Promise<JSBridgeReturnType<WebViewState | false>>` 获取最新 WebView 状态

### setLeftTopBackButton
- `setLeftTopBackButton: (enable: boolean) => Promise<JSBridgeReturnType<boolean>>` 设置左上角隐藏返回按钮（仅 iOS 端有效）

### login
- `login: () => Promise<JSBridgeReturnType<UserInfo | false>>` 登录

登录成功后返回当前登录用户的信息。

### logout
- `logout: () => Promise<JSBridgeReturnType<boolean>>` 登出

### getUserInfo
- `getUserInfo: () => Promise<JSBridgeReturnType<UserInfo | false>>` 获取用户信息（已登录情况下）

### openWebView
- `openWebView: (url: string, way: OpenWebViewEnum) => Promise<JSBridgeReturnType<boolean>>` 打开新的 WebView

### closeWebView
- `closeWebView: () => Promise<JSBridgeReturnType<boolean>>` 关闭当前 WebView

### getBangsHeight
- `getBangsHeight: () => Promise<JSBridgeReturnType<number | false>>` 获取 "刘海" \ "挖孔" 占用屏幕的高度

### setOrientation
- `setOrientation: (orientation: OrientationEnum) => Promise<JSBridgeReturnType<boolean>>` 设置横竖屏

### keepScreenLight
- `keepScreenLight: (enable: boolean) => Promise<JSBridgeReturnType<boolean>>` 保持屏幕常亮

### shock
- `shock: (duration?: number) => Promise<JSBridgeReturnType<boolean>>` 震动

duration 表示震动的时间/次数；Android 端表示震动多少**秒**，iOS 端表示震动多少**次**。

> 参数 `duration` 在 iOS 端表示震动次数；在 Android 端表示震动时长（单位：秒）。

### minimize
- `minimize: () => Promise<JSBridgeReturnType<boolean>>` 最小化（"小窗"模式）。

### saveImage2Album
- `saveImage2Album: (base64: string) => Promise<JSBridgeReturnType<boolean>>` 保存图片至相册

### detectMicro
- `detectMicro: () => Promise<JSBridgeReturnType<boolean>>` 检测麦克风授权

如果麦克风没有授权，此方法会自动弹窗引导用户开启授权。

### actionShare
- `actionShare: (shareConfig: Partial<ShareConfig>) => Promise<JSBridgeReturnType<boolean>>` 分享

### preload
- `preload: (urls: string[]) => Promise<JSBridgeReturnType<boolean>>` 静态资源预载

:::caution 注意
- 此方法仅对 iOS VRWebView \ Android VRWebView 有效。
- 请求结果会被客户端缓存，即第二次之后的请求 **可能** 直接读缓存值，不会执行 HTTP 请求。
:::

### createCacheProxyUrl
- `createCacheProxyUrl: (urls: string | string[]) => string[]` 生成代理请求链接
