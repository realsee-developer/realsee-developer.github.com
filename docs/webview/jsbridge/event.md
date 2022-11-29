---
title: 事件监听
---

`@realsee/jsbridge-x` 提供给用户 `on` 方法，以监听事件。
形如：

```ts
// iOS/Android
import JSBridge from "@realsee/jsbridge-x/lib/app";
// 或 微信小程序
// import JSBridge from '@realsee/jsbridge-x/lib/miniprogram'

const jsBridge = new JSBridge({});

// 监听 jsBridge 是否完成初始化
jsBridge.on("evtName", callback);
```

## 容器状态变更监听

通过 `webViewStateChange` 事件监听当前容器状态变更情况。

```ts
jsBridge.on("webViewStateChange", (webViewState: WebViewState) => {
  // 在此处理业务逻辑
});
```

WebViewState 描述了当前 WebView 的状态：

```ts title="WebViewState 类型声明"
/**
 * 当前的 WebView 状态。
 */
export interface WebViewState {
  /**
   * 是否处在激活状态：比如 App 切到后台就处在非激活状态
   */
  active: boolean;
  /**
   * 当前横竖屏方向
   */
  orientation: OrientationEnum;
  /**
   * 最小化
   */
  minimized: boolean;
}
```

```ts title="WebView 横竖屏朝向枚举"
/**
 * WebView 横竖屏朝向。
 */
export enum OrientationEnum {
  /**
   * 横屏
   */
  Landscape = "Landscape",
  /**
   * 竖屏
   */
  Portrait = "Portrait",
}
```

## 错误监听

通过 `error` 事件监听错误信息。

```ts
jsBridge.on("error", (error: WebViewErrorInfo) => {
  // 在此处理业务逻辑
});
```

```ts title="WebView 错误信息声明"
export interface WebViewErrorInfo {
  errorCode: string;
  errorMsg: string;
}
```

## 全量文档

:::tip
**[全量事件监听请参考 @realsee/jsbridge-x 详细文档之 EventMap](https://unpkg.com/@realsee/jsbridge-x/docs/modules/jsBridge.html#EventMap) 。**
:::
