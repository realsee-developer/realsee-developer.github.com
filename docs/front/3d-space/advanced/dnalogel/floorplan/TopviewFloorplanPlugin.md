---
title: 📦 俯视模型户型图
---

## **TopviewFloorplanPlugin**

:::tip 此插件强依赖于**户型图数据**，请率先了解如何获取户型图数据。
:::

## 示例效果

点击**俯视模型**按钮，查看俯视模型状态下的户型图展示效果。

```mdx-code-block
<div className="docs-vr-normal">
  <iframe className="docs-vr-iframe" src="https://realsee.js.org/dnalogel/src/TopviewFloorplanPlugin/index.html"></iframe>
</div>
```

## 功能说明

**俯视模型户型图插件** 无缝集成了一套基于 VR 3D 模型状态下户型图交互。

其功能为 [模型户型图插件 ModelFloorplanPlugin](ModelFloorplanPlugin.md) 的简版，仅**展示能力**，相关用法和 API 可直接参考 [ModelFloorplanPlugin](ModelFloorplanPlugin.md)。

**区别**

**俯视模型户型图插件** 与 `five` 实例的 `Mode` 状态做了绑定：当 `five.mode` 为 `Five.Mode.Topview` 且动画执行完毕时，会自动展示二维户型图模块。当不处在`Five.Mode.Topview` 状态时，则自动隐藏二维户型图模块。

因此，您可以操作 `five.mode` 来间接控制二维户型图模块的展示和隐藏。其他功能及 API 完全一致。


## 安装引用

**请按需选择 `yarn` 或 `npm` 安装方式：**

```bash npm2yarn
npm install @realsee/dnalogel
```

**通过 es 引用：**

```tsx
import { TopviewFloorplanPlugin } from "@realsee/dnalogel"
```

## 开发指南

### 初始化

> 方法1：在初始化 `Five` 实例时，将 `TopviewFloorplanPlugin` 配置在初始化插件参数即可。

```ts
import { Five } from '@realsee/five'

const five = new Five({
    plugins: [
        [
            TopviewFloorplanPlugin,
            'topviewFloorplanPlugin', // 自定义插件名称
            {
                // 示例参数配置
                selector: '.plugin-full-screen-container',  // 替换成您的容器节点
                hoverEnable: true
                /** 是否开启放大缩小和拖动功能，默认为 false */
                // gestureEnable?: boolean 
            }
        ]
    ]
})
```

> 方法2：在创建 `FiveProvider` 时，将 `TopviewFloorplanPlugin` 配置在初始化插件参数即可。

```ts
import { TopviewFloorplanPlugin } from "@realsee/dnalogel";
import { createFiveProvider, FiveCanvas } from "@realsee/five/react";

const FiveProvider = createFiveProvider({
    plugins: [
        [
            TopviewFloorplanPlugin,
            'topviewFloorplanPlugin', // 自定义插件名称
            {
                // 示例参数配置
                selector: '.plugin-full-screen-container',  // 替换成您的容器节点
                hoverEnable: true
                /** 是否开启放大缩小和拖动功能，默认为 false */
                // gestureEnable?: boolean 
            }
        ]
    ]
});
```

### 载入数据

```ts
// 获取插件实例,其中 `topviewFloorplanPlugin` 是初始化时自定义的名称
const pluginInstance = five.plugins.topviewFloorplanPlugin 

// 调用 `load` 方法载入户型图数据
pluginInstance.load(floorplanServerData)
```

### 核心方法

**TopviewFloorplanPlugin** 提供的核心方法有：

- `load(data: FloorplanServerData)` 载入户型图数据

> 您需要手动载入户型图数据，[FloorplanServerData] 的数据来源请阅读[如视开发者中心服务端 API](http://developers.realsee.com/docs/#/docs/five/server/README)。

- `appendTo(wrapper: Element)` 挂载 DOM 节点

> 将户型图DOM模块载入您的 HTML 结构中。

## demo 源码参考

[demo 源码参考](https://github.com/realsee-developer/dnalogel/tree/main/examples/src)
