---
title: Browser "bridge" implementation
---

:::info
does not exist because the browser itself is the full version of WebViewBut in order to ensure consistency in business source logic, we also simulate a jsBridge concept in the browser environment.**This chapter will give you a detailed idea of how to implement browser "bridge" in your own code based on `@realsee/jsbridge-x`.**
:::

`@realsee/jsbridge-x` `jsBridge` is based on `JSBridgeProtocol` implemented with subscriber mode, first you need to introduce Subscripbe and JSBridgeProtocol interfaces.Created a class named JSBridgeBrowser based on Subscripbe and JSBridgeProtocol

```ts
import { Subscribe } from "@realsee/jsbridge-x/lib/shared-utils/Subscribe";
import { JSBridgeProtocol } from "@realsee/jsbridge-x/lib/typings/JSBridgeProtocol";
import { WebViewEventMap } from "@realsee/jsbridge-x/lib/typings/WebViewEventMap";

export class BrowserJsbridge
  extends Subscribe<WebViewEventMap>
  implements JSBridgeProtocol {
  //  write it here
}
```

Next, you can implement the method by using the `JSBridgeProtocol`.

:::tip
If you have installed `@realsee/jsbridge-x` , you can see the full JSBridgeProtocol `JSBridgeProtocol` interface statements in `@realsee/jsbridge-x/lib/typeings/JSBridgeProtocol.d.ts` Statement file. 
Also available at the direct point **[Interface JSBridgeProtocol document description](https://unpkg.com/@realsee/jsbridge-x/docs/interfaces/jsBridge.JSBridgeProtocol.html)** 
When viewing the document link, the required version number can be changed to view the required version. https://unpkg.com/@realsee/jsbridge-x**{版本号}**/docs/interfaces/jsBridge.JSBridgeProtocol.html
:::

## Full Example

```ts title="JSBridgeBrowser.ts"
import { Subscribe } from "@realsee/jsbridge-x/lib/shared-utils/Subscribe";
import { DeviceInfo } from "@realsee/jsbridge-x/lib/typings/DeviceInfo";
import { OpenWebViewEnum } from "@realsee/jsbridge-x/lib/typings/OpenWebViewEnum";
import { ShareConfig } from "@realsee/jsbridge-x/lib/typings/ShareConfig";
import { UserInfo } from "@realsee/jsbridge-x/lib/typings/UserInfo";
import { WebViewEventMap } from "@realsee/jsbridge-x/lib/typings/WebViewEventMap";
import {
  WebViewState,
  OrientationEnum,
} from "@realsee/jsbridge-x/lib/typings/WebViewState";
import { WebViewTypeEnum } from "@realsee/jsbridge-x/lib/typings/WebViewTypeEnum";
import {
  JSBridgeProtocol,
  JSBridgeReturnType,
} from "@realsee/jsbridge-x/lib/typings/JSBridgeProtocol";

export class JSBridgeBrowser
  extends Subscribe<WebViewEventMap>
  implements JSBridgeProtocol
{
  actionShare(
    shareConfig: Partial<ShareConfig>
  ): Promise<JSBridgeReturnType<boolean>> {
    return Promise.resolve([false, null]);
  }

  callAndBackfeed<T>(
    schemeUrl: string
  ): Promise<JSBridgeReturnType<false | T>> {
    return Promise.resolve([false, null]);
  }

  callAndListen<T>(
    schemeUrl: string,
    callback: (data: T) => void
  ): Promise<JSBridgeReturnType<false | (() => void)>> {
    return Promise.resolve([false, null]);
  }

  closeLoading(): Promise<JSBridgeReturnType<boolean>> {
    return Promise.resolve([false, null]);
  }

  closeWebView(): Promise<JSBridgeReturnType<boolean>> {
    return Promise.resolve([false, null]);
  }

  createCacheProxyUrl(urls: string | string[]): string[] {
    return [];
  }

  detectMicro(): Promise<JSBridgeReturnType<boolean>> {
    return Promise.resolve([false, null]);
  }

  getBangsHeight(): Promise<JSBridgeReturnType<number | false>> {
    return Promise.resolve([false, null]);
  }

  getDeviceInfo(): Promise<JSBridgeReturnType<DeviceInfo | false>> {
    return Promise.resolve([false, null]);
  }

  getUserInfo(): Promise<JSBridgeReturnType<UserInfo | false>> {
    return Promise.resolve([false, null]);
  }

  getWebViewState(): Promise<JSBridgeReturnType<WebViewState | false>> {
    return Promise.resolve([false, null]);
  }

  keepScreenLight(enable: boolean): Promise<JSBridgeReturnType<boolean>> {
    return Promise.resolve([false, null]);
  }

  loadProgress(progress: number): Promise<JSBridgeReturnType<boolean>> {
    return Promise.resolve([false, null]);
  }

  login(): Promise<JSBridgeReturnType<UserInfo | false>> {
    return Promise.resolve([false, null]);
  }

  logout(): Promise<JSBridgeReturnType<boolean>> {
    return Promise.resolve([false, null]);
  }

  minimize(): Promise<JSBridgeReturnType<boolean>> {
    return Promise.resolve([false, null]);
  }

  openWebView(
    url: string,
    way: OpenWebViewEnum
  ): Promise<JSBridgeReturnType<boolean>> {
    return Promise.resolve([false, null]);
  }

  preload(urls: string[]): Promise<JSBridgeReturnType<boolean>> {
    return Promise.resolve([false, null]);
  }

  ready(): Promise<JSBridgeReturnType<boolean>> {
    return Promise.resolve([false, null]);
  }

  saveImage2Album(base64: string): Promise<JSBridgeReturnType<boolean>> {
    return Promise.resolve([false, null]);
  }

  setLeftTopBackButton(enable: boolean): Promise<JSBridgeReturnType<boolean>> {
    return Promise.resolve([false, null]);
  }

  setOrientation(
    orientation: OrientationEnum
  ): Promise<JSBridgeReturnType<boolean>> {
    return Promise.resolve([false, null]);
  }

  shock(duration: number | undefined): Promise<JSBridgeReturnType<boolean>> {
    return Promise.resolve([false, null]);
  }

  webViewType: WebViewTypeEnum = WebViewTypeEnum.Browser;
}
```
