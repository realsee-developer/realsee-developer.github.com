---
title: Event listener
---

`@realsee/jsbridge-x` is available to users `on` to listen to events. Example：

```ts
// iOS/Android
import JSBridge from "@realsee/jsbridge-x/lib/app";
// or miniprogram
// import JSBridge from '@realsee/jsbridge-x/lib/miniprogram'

const jsBridge = new JSBridge({});

// Listen if jsBridge completes initialization
jsBridge.on("evtName", callback);
```

## Container Status Listening

Listen to the current container status changes with `webViewStateChange` events.

```ts
jsBridge.on("webViewStateChange", (webViewState: WebViewState) => {
  // Processing Business Logic here
});
```

WebViewState describes the status of the current WebView：

```ts title="WebViewState 类型声明"
/**
 * Current WebView status.
 */
export interface WebViewState {
  /**
   * Whether it is in the active state：For example, the App is in the inactive state when it is switched to the background
   */
  active: boolean;
  /**
   * The current horizontal and vertical screen orientation
   */
  orientation: OrientationEnum;
  /**
   * minimized
   */
  minimized: boolean;
}
```

```ts title="WebView 横竖屏朝向枚举"
/**
 * WebView in landscape portrait.
 */
export enum OrientationEnum {
  /**
   * Landscape
   */
  Landscape = "Landscape",
  /**
   * Vertical
   */
  Portrait = "Portrait",
}
```

## Error listening

Listen to error messages via `error`.

```ts
jsBridge.on("error", (error: WebViewErrorInfo) => {
  // Processing Business Logic here
});
```

```ts title="WebView 错误信息声明"
export face WebViewErrorInfoInfo has
  errorCode: string
  errorMsg: string
}
```

## Full amount of documentation

:::tip
**[For full event monitoring, please refer to EventMap](https://unpkg.com/@realsee/jsbridge-x/docs/modules/jsBridge.html#EventMap) of @realsee/jsbridge-x detailed documentation.**
:::
