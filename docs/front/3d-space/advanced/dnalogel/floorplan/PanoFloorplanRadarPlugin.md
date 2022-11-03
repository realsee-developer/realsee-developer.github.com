---
title: 📦 全景户型雷达图
---

## **PanoFloorplanRadarPlugin**

:::tip 此插件强依赖于**户型图数据**，请率先了解如何获取户型图数据。
:::

## 示例效果

```mdx-code-block
<div className="docs-vr-normal">
  <iframe className="docs-vr-iframe" src="https://realsee.js.org/dnalogel/src/PanoFloorplanRadarPlugin/index.html"></iframe>
</div>

<PlaygroundCard
    url='https://stackblitz.com/edit/panofloorplanradarplugin'
 />
```

## 功能说明

**全景户型雷达图插件** 提供了在全景模式下展示二维户型图的功能。

支持的特性有：

- 雷达指引：以"雷达"图标的方式展示当前点位的位置和朝向。
- 户型图自适应填充：最小边大小自动计算，保障展示在 DOM 容器中心。
- 全景模式下走点出现楼层变更时会自动切换至当前楼层的户型图。
- 配置 `hoverEnable` 为 `true` (默认配置)时，鼠标 `hover` 相关分间会高亮。

## 安装引用

**请按需选择 `yarn` 或 `npm` 安装方式：**

```bash npm2yarn
npm install @realsee/dnalogel
```

**通过 es 引用：**

```tsx
import { PanoFloorplanRadarPlugin } from "@realsee/dnalogel"
```

## 开发指南

### 初始化

在初始化 `Five` 实例的时候，将 `PanoFloorplanRadarPlugin` 配置在初始化插件参数即可。

```ts
import Five  from '@realsee/five'
import { PanoFloorplanRadarPlugin } from "@realsee/dnalogel"

// 初始化 five 实例
const five = new Five({
    plugins: [
     [PanoFloorplanRadarPlugin, 'panoFloorplanRadar', {
     //初始化参数
        }]
    ]
})
```

### React 初始化

在创建 FiveProvider 组件时将 `PanoFloorplanRadarPlugin` 配置在初始化插件参数即可。

```ts
import { createFiveProvider } from '@realsee/five/react'
import { PanoFloorplanRadarPlugin } from "@realsee/dnalogel"

// 创建 FiveProvider 组件
const FiveProvider = createFiveProvider({
    plugins: [
        [PanoFloorplanRadarPlugin, "panoFloorplanRadar", {
            // 初始化参数
        }]
    ]
})
```

### Vue 初始化

在使用 `FiveProvider` 时，将 `PanoFloorplanRadarPlugin` 配置在初始化插件参数即可。

```vue
<template>
  <FiveProvider :fiveInitArgs="fiveInitArgs">
  </FiveProvider>
</template>
<script setup>
import  PanoFloorplanRadarPlugin from "@realsee/dnalogel/libs/PanoFloorplanRadarPlugin";
import { FiveProvider, FiveCanvas } from "@realsee/five/vue";
const fiveInitArgs = {
    plugins: [
        [
            PanoFloorplanRadarPlugin,
            'panoFloorplanRadarPlugin', // 自定义插件名称
            {
                // 参数配置
            }
        ]
    ]
}
</script>
```

### 载入数据

```ts
// 获取插件实例
const pluginInstance = five.plugins.panoFloorplanRadar
// 载入数据
pluginInstance.load(floorplanServerData)
```

### 核心方法

**PanoFloorplanRadarPlugin** 提供的核心方法有：

- `async load(data: FloorplanServerData)` 载入户型图数据；

> 您需要手动载入户型图数据，[FloorplanServerData] 的数据来源请阅读[如视开放平台 API](https://open-platform.realsee.com/developer/open/api/#/)。

- `appendTo(wrapper: Element)` 挂载 DOM 节点；

> 将户型图DOM模块载入您的 HTML 结构中。

- `setState(state: Partial<State>, options: BaseOptions = {})` 更改插件 State；

- `changeConfigs(config: Config, userAction = true)` 修改插件配置信息

- `setExtraObjectsWith3DPositions(data: FloorplanExtraObject3D[])` 在雷达图上展示额外内容

- `async show(options: BaseOptions = {})` 展示户型图数据；

- `async hide(options: BaseOptions = {})` 隐藏户型图数据；

- `enable(options: BaseOptions = {})` 启用插件；

- `disable(options: BaseOptions = {})` 禁用插件；

### 在雷达图上展示额外内容

对于一些三维场景中的物体，我们可以在雷达图上用一些特殊的图标进行展示

`setExtraObjectsWith3DPositions(data: FloorplanExtraObject3D[])` 设置在户型图上展示的三维物体列表。

三维数据的结构如下

```ts
// 能够映射到雷达图上的三维物体
export interface FloorplanExtraObject3D {
  id: string
  // [x, y, z]
  position: number[]
}
```

### 配置参数

- `wrapper: string | Element` 插件挂载的 DOM 节点。

- `hoverEnable?: boolean` 否开启鼠标 `hover` 高亮分间。

配置样例参考：

```ts

import { PanoFloorplanRadarPlugin } from "@realsee/dnalogel"
import { Five, FivePluginInit } from '@realsee/five'

const five = new Five({
  plugins: [
    [
      PanoFloorplanRadarPlugin,
      'floorpalnRadar',
      { 
          wrapper: '.floorplan-radar-wrapper', 
          configs: {
              hoverEnable: true
          }
      }
    ],
  ],
})

```

## demo 源码参考

[demo 源码参考](https://github.com/realsee-developer/dnalogel/tree/main/examples/src)
