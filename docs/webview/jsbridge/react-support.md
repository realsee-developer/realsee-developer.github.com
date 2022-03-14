---
title: React 支持
---

`@realsee/jsbridge-x` 有完整的 [TypeScript Generics](https://www.typescriptlang.org/docs/handbook/2/generics.html) 和 [React Hooks](https://reactjs.org/docs/hooks-intro.html) 支持，如果您的技术栈基于 TypeScript 和 React 可以参考如下方式更优雅地使用 @realsee/jsbridge-x。

## 创建 JSBridge 实例

从 `@realsee/jsbridge-x` 中分别 import 客户端以及微信小程序的 bridge 类。

:::tip
如果您在浏览器端也需要使用 `@realsee/jsbridge-x` ，则需要先按照 `@realsee/jsbridge-x` 的 jsBridge 协议，实现 browser "桥"。
假设您自行开发的浏览器"桥"类文件名为 `JSBridgeBrowser.ts`
:::


```tsx
import { JSBridgeApp } from '@realsee/jsbridge-x/lib/app' // 客户端
import { JSBridgeMiniprogram } from '@realsee/jsbridge-x/lib/miniprogram' // 微信小程序
import { JSBridgeBrowser } from './JSBridgeBrowser' // 注意，浏览器桥需要您自行实现

import { isApp, isMiniprogram } from './utils/deviceDetect'

let bridgeInstance

// 根据端的类型初始化 jsBridge 实例
if (isApp) bridgeInstance = new JSBridgeApp()
else if (isMiniprogram) bridgeInstance = new JSBridgeMiniprogram()
else bridgeInstance = new JSBridgeBrowser()
```

## 集成"桥"至 React Context 上下文

通过 `JSBridgeContext` 将 "桥" 集成至 React 的 Context 上下文。

```tsx
import { JSBridgeApp } from '@realsee/jsbridge-x/lib/app' // 客户端
import { JSBridgeMiniprogram } from '@realsee/jsbridge-x/lib/miniprogram' // 微信小程序
import { JSBridgeBrowser } from './JSBridgeBrowser' // 注意，浏览器桥需要您自行实现
// highlight-start
import { JSBridgeContext } from "@realsee/jsbridge-x/lib/react"
// highlight-end

import { isApp, isMiniprogram } from './utils/deviceDetect'

let bridgeInstance

// 根据端的类型初始化 jsBridge 实例
if (isApp) bridgeInstance = new JSBridgeApp()
else if (isMiniprogram) bridgeInstance = new JSBridgeMiniprogram()
else bridgeInstance = new JSBridgeBrowser()


ReactDOM.render(
    <React.StrictMode>
        // highlight-start
        <JSBridgeContext.Provider value={bridgeInstance}>
            <YourApp />
        </JSBridgeContext.Provider>
        // highlight-end
    </React.StrictMode>,
document.getElementById('root')
);
```

## 使用"桥"

接下来，您可以在任何被 `JSBridgeContext.Provider` 包裹的组件里使用"桥"提供的相关方法。

比如，获取 "刘海" \ "挖孔" 占用屏幕的高度：

```tsx
import { useBangsHeightState } from "@realsee/jsbridge-x/lib/react/hooks"

function DemoApp() {
    const bandHeight = useBangsHeightState()
    
    return null
}
```

关闭 loading :
```ts
import { useJSBridgeAction } from "@realsee/jsbridge-x/lib/react/hooks"

function DemoApp() {
    const { closeLoading } = useJSBridgeAction()
    
    React.useEffect(() => {
        Promise.resolve().then(closeLoading)
    }, [])
    
    return null
}
```

## 全量文档

:::tip
**[更多详细 API 使用请参考 @realsee/jsbrdige-x 全量文档](https://unpkg.com/@realsee/jsbridge-x/docs/index.html) 。**
:::
