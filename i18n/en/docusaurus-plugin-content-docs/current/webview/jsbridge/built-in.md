---
title: Built-in interface
---

:::tip
**[Click here to view the internal interface full-volume document](https://unpkg.com/@realsee/jsbridge-x/docs/interfaces/jsBridge.JSBridgeProtocol.html).**
:::

### webViewType
- `webViewType: WebViewTypeEnum` WebView Type

### already available
- `ready: () => Promis<JSBridgeReturnType<boolean>>` judge whether jsBridge is ready

### Load Progress
- `loadProgress: (progress: number@@1) => Promis<JSBridgeReturnType<boolean>>` Control progress bar

### closeLoading
- `closeLoading: () => Promis<JSBridgeReturnType<boolean>>` Close progress bar

### getDeviceInfo
- `getDeviceInfo: () => Promis<JSBridgeReturnType<DeviceInfo | false>>` Get information on container devices

### getWebViewState
- `getWebViewState: () => Promis<JSBridgeReturnType<WebViewState | false>>` Get the latest WebView status

### setLeftTopBackButton
- `setLeftTopBackButton: (enable: boolean) => Promis<JSBridgeReturnType<boolean>>` Set Hidden Back button in the upper left corner (only iOS is valid)

### login
- `login: () => Promis<JSBridgeReturnType<UserInfo | false>>` Login

Successfully logged in to current login user.

### Logout
- `logout: () => Promis<JSBridgeReturnType<boolean>>` Logout

### getUserInfo
- `getUserInfo: () => Promis<JSBridgeReturnType<UserInfo | false>>` Get user information (logged in)

### openWebView
- `openWebView: (url: string, way: OpenWebViewEnum) => Promiss<JSBridgeReturnType<boolean>>` Open new WebView

### closeWebView
- `closeWebView: () => Promis<JSBridgeReturnType<boolean>>` Close current WebView

### getBangsHeight
- `getBangsHeight: () => Promis<JSBridgeReturnType<number | false>>` Get "Liu Ha" \"Dig Holes" to take up the height of the screen

### setOrientation
- `setOrientation: (orientation: OrientationEnum) => Promis<JSBridgeReturnType<boolean>>` set horizontal portrait

### KeepScreenLight
- `KeepScreenLight: (enable: boolean) => Promise<JSBridgeReturnType<boolean>>` Keep screen on

### shock
- `shock: (duration?: number@@1) => Promis<JSBridgeReturnType<boolean>>` Vibrate

duration indicates the time/number of vibrations; the Android terminal indicates the number of vibrations in****, and the iOS terminal indicates the number of vibrations in****.

> Parameter `duration` indicates the number of vibrations on the iOS site; on Android it indicates the duration of vibration (unit：seconds).

### Minimize
- `minimize: () => Promis<JSBridgeReturnType<boolean>>` Minimized ("Widget" mode).

### saveImage2Album
- `saveImage2Album: (base64: string) => Promis<JSBridgeReturnType<boolean>>` Save image to album

### DetMicro
- `DetectMicro: () => Promis<JSBridgeReturnType<boolean>>` Detect microphone license

If the microphone is not authorized, this method will automatically lead the user to enable the permission.

### Action Share
- `ActionShare: (shareConfig: Partial<ShareConfig>) => Promis<JSBridgeReturnType<boolean>>` Share

### Preload
- `preload: (urls: string[]) => Promis<JSBridgeReturnType<boolean>>` Static resources preload

:::caution
- This method is only valid for iOS VRWebView \Android VRWebView.
- The request result will be cached by the client, that is, the second subsequent request **may** read the cache values directly, and do not perform the HTTP request.
:::

### createCacheProxyUrl
- `createCacheProxyUrl: (urls: string | string[]) => string[]` Generate proxy request link
