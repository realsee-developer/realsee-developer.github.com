---
title: 浏览器 "桥" 实现
---

:::info
由于浏览器本身就是 WebView 的完整版，并不存在所谓的 jsBridge。但为了保障业务源码逻辑的统一性，我们在浏览器环境下也模拟出一个 jsBridge 概念。**本章将为您详细讲解如何基于 `@realsee/jsbridge-x` 在您自己的代码中实现浏览器 "桥" 。**
:::

`@realsee/jsbridge-x` 的 `jsBridge` 都是基于 `JSBridgeProtocol` 与订阅发布者模式实现的，首先，您需要引入 Subscribe 类以及 JSBridgeProtocol 接口。基于 Subscribe 和 JSBridgeProtocol 创建名为 JSBridgeBrowser 的类。

```ts
import { Subscribe } from '@realsee/jsbridge-x/lib/shared-utils/Subscribe'
import { JSBridgeProtocol } from '@realsee/jsbridge-x/lib/typings/JSBridgeProtocol'
import { WebViewEventMap } from '@realsee/jsbridge-x/lib/typings/WebViewEventMap'

export class BrowserJsbridge extends Subscribe<WebViewEventMap> implements JSBridgeProtocol {
    // 在此撰写所需方法
}
```

接下来，您可以按照 `JSBridgeProtocol` 接口声明，实现相应方法。

:::tip
如果您已经安装 `@realsee/jsbridge-x` ,则可以在 `@realsee/jsbridge-x/lib/typings/JSBridgeProtocol.d.ts` 声明文件中看到完整的 `JSBridgeProtocol` 接口声明。
也可以直接点 **[Interface JSBridgeProtocol 文档说明](https://unpkg.com/@realsee/jsbridge-x/docs/interfaces/jsBridge.JSBridgeProtocol.html)** 查看。
查看文档链接时，可在按需修改版本号，查看所需版本的文档。 https://unpkg.com/@realsee/jsbridge-x**{版本号}**/docs/interfaces/jsBridge.JSBridgeProtocol.html
:::


## 完整示例

```ts title="JSBridgeBrowser.ts"
import { Subscribe } from '@realsee/jsbridge-x/lib/shared-utils/Subscribe'
import { DeviceInfo } from '@realsee/jsbridge-x/lib/typings/DeviceInfo'
import { OpenWebViewEnum } from '@realsee/jsbridge-x/lib/typings/OpenWebViewEnum'
import { ShareConfig } from '@realsee/jsbridge-x/lib/typings/ShareConfig'
import { UserInfo } from '@realsee/jsbridge-x/lib/typings/UserInfo'
import { WebViewEventMap } from '@realsee/jsbridge-x/lib/typings/WebViewEventMap'
import { WebViewState, OrientationEnum } from '@realsee/jsbridge-x/lib/typings/WebViewState'
import { WebViewTypeEnum } from '@realsee/jsbridge-x/lib/typings/WebViewTypeEnum'
import { JSBridgeProtocol, JSBridgeReturnType } from '@realsee/jsbridge-x/lib/typings/JSBridgeProtocol'

export class JSBridgeBrowser extends Subscribe<WebViewEventMap> implements JSBridgeProtocol {
    actionShare(shareConfig: Partial<ShareConfig>): Promise<JSBridgeReturnType<boolean>> {
        return Promise.resolve([false, null]);
    }

    callAndBackfeed<T>(schemeUrl: string): Promise<JSBridgeReturnType<false | T>> {
        return Promise.resolve([false, null]);
    }

    callAndListen<T>(schemeUrl: string, callback: (data: T) => void): Promise<JSBridgeReturnType<false | (() => void)>> {
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

    openWebView(url: string, way: OpenWebViewEnum): Promise<JSBridgeReturnType<boolean>> {
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

    setOrientation(orientation: OrientationEnum): Promise<JSBridgeReturnType<boolean>> {
        return Promise.resolve([false, null]);
    }

    shock(duration: number | undefined): Promise<JSBridgeReturnType<boolean>> {
        return Promise.resolve([false, null]);
    }

    webViewType: WebViewTypeEnum = WebViewTypeEnum.Browser
}

```
