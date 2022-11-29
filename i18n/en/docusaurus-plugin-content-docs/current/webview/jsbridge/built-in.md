---
title: Built-in interface
---

:::tip
**[Click here to view the internal interface full-volume document](https://unpkg.com/@realsee/jsbridge-x/docs/interfaces/jsBridge.JSBridgeProtocol.html).**
:::

### webViewType

- `webViewType: WebViewTypeEnum` WebView Type

### ready

- `ready: () => Promise<JSBridgeReturnType<boolean>>` judge whether jsBridge is ready

### loadProgress

- `loadProgress: (progress: number) => Promise<JSBridgeReturnType<boolean>>` Control progress bar

### closeLoading

- `closeLoading: () => Promise<JSBridgeReturnType<boolean>>` Close progress bar

### getDeviceInfo

- `getDeviceInfo: () => Promise<JSBridgeReturnType<DeviceInfo | false>>` Get information on container devices

### getWebViewState

- `getWebViewState: () => Promise<JSBridgeReturnType<WebViewState | false>>` Get the latest WebView status

### setLeftTopBackButton

- `setLeftTopBackButton: (enable: boolean) => Promise<JSBridgeReturnType<boolean>>` Set Hidden Back button in the upper left corner (only iOS is valid)

### login

- `login: () => Promise<JSBridgeReturnType<UserInfo | false>>` Login

Successfully logged in to current login user.

### logout

- `logout: () => Promise<JSBridgeReturnType<boolean>>` Logout

### getUserInfo

- `getUserInfo: () => Promise<JSBridgeReturnType<UserInfo | false>>` Get user information (logged in)

### openWebView

- `openWebView: (url: string, way: OpenWebViewEnum) => Promise<JSBridgeReturnType<boolean>>` Open new WebView

### closeWebView

- `closeWebView: () => Promise<JSBridgeReturnType<boolean>>` Close current WebView

### getBangsHeight

- `getBangsHeight: () => Promise<JSBridgeReturnType<number | false>>` Get "Liu Ha" \"Dig Holes" to take up the height of the screen

### setOrientation

- `setOrientation: (orientation: OrientationEnum) => Promise<JSBridgeReturnType<boolean>>` set horizontal portrait

### keepScreenLight

- `keepScreenLight: (enable: boolean) => Promise<JSBridgeReturnType<boolean>>` Keep screen on

### shock

- `shock: (duration?: number) => Promise<JSBridgeReturnType<boolean>>` Vibrate

duration indicates the time/number of vibrations; the Android terminal indicates **the number of vibrations in**, and the iOS terminal indicates **the number of vibrations in**.

> Parameter `duration` indicates the number of vibrations on the iOS site; on Android it indicates the duration of vibration (unit：seconds).

### minimize

- `minimize: () => Promise<JSBridgeReturnType<boolean>>` Minimized ("Widget" mode).

### saveImage2Album

- `saveImage2Album: (base64: string) => Promise<JSBridgeReturnType<boolean>>` Save image to album

### detectMicro

- `detectMicro: () => Promise<JSBridgeReturnType<boolean>>` Detect microphone license

If the microphone is not authorized, this method will automatically lead the user to enable the permission.

### actionShare

- `actionShare: (shareConfig: Partial<ShareConfig>) => Promise<JSBridgeReturnType<boolean>>` Share

### preload

- `preload: (urls: string[]) => Promise<JSBridgeReturnType<boolean>>` Static resources preload

:::caution

- This method is only valid for iOS VRWebView \Android VRWebView.
- The request result will be cached by the client, that is, the second subsequent request **may** read the cache values directly, and do not perform the HTTP request.
  :::

### createCacheProxyUrl

- `createCacheProxyUrl: (urls: string | string[]) => string[]` Generate proxy request link
