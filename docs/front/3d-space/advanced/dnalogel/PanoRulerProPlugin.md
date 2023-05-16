---
title: 添加全景标尺Pro🌟️
---

## **PanoRulerProPlugin**

:::info
全景标尺 Pro 依赖如视 open API 获取标尺数据 Pro，您可以参考 [开放 API](https://open-platform.realsee.com/developer/open/api/#/) 了解如何获取全景标尺数据 Pro。
全景标尺数据 Pro 的 open API 对应接口为：`/open/v1/plugin/PangRulerProPlugin`
:::

## 功能说明

**全景标尺插件** 提供在全景模式下标注房源关键轮廓的尺寸。

详细功能点如下：

- 提供在全景模式下标注房源关键轮廓的尺寸，比如分间的层高、面宽和径深等信息。
- 相比于普通标尺，增加了物体识别和墙体遮挡识别，将遮挡部位进行虚线处理，并进行了样式优化，看起来更有空间感；目前仅支持实景 VR 的场景，仅支持伽罗华采集的单楼层房源、仅适用于 200 平米以下的家居空间、不支持毛坯房、需要指定范围预跑，再打开端上入口。
- 只展示当前视角下靠近中心位置的标尺线。
- 移动走点及变换视角时，标尺线会跟随移动和变换。
- 数值气泡长度自适应：根据数值内容自适应气泡长度，同时支持数值内容根据特殊需求配置，比如数值有英寸单位的需求。
- 若标尺线长度低于该标尺的数值气泡长度，则不展示该标尺线。

## 与全景标尺的差异点

### 优化点

1. 层高数据更精准：根据之前线下测量数据，1.0 标尺层高误差在 10cm 左右，是 1.0 标尺的主要痛点之一，2.0 标尺通过算法优化将误差缩小至 3cm 以内。
2. 标识位置更准确： 2.0 标尺根据墙线算法识别优化，标尺的展示位置更贴合真实墙线。
3. 展示体验更好：2.0 标尺增加了物体识别和墙体遮挡识别，将遮挡部位进行虚线处理，并进行了样式优化，看起来更有空间感。

### 限制条件

1. 目前仅支持实景 VR 的场景。
2. 仅支持伽罗华采集的单楼层房源。
3. 仅适用于 200 平米以下的家居空间、不支持毛坯房。
4. 需要[联系如视](https://home.realsee.com/developer/contact)指定数据生产的 VR 范围进行数据生产后才可使用。

## 示例效果

<div className="docs-vr-normal">
  <iframe className="docs-vr-iframe" src="https://realsee-developer.github.io/dnalogel/src/PanoRulerProPlugin/index.html"></iframe>
</div>

## 安装引用

**请按需选择 `yarn` 或 `npm` 安装方式：**

```bash npm2yarn
npm install @realsee/dnalogel
```

**通过 es 引用：**

```tsx
import { PanoRulerProPlugin } from "@realsee/dnalogel";
```

## 开发指南

### 初始化

在初始化 `Five` 实例时，将 `PanoRulerProPlugin` 配置在初始化插件参数即可。

```ts
import { Five } from "@realsee/five";
import { PanoRulerProPlugin } from "@realsee/dnalogel";

const five = new Five({
  plugins: [
    [
      PanoRulerProPlugin,
      "panoRulerProPlugin", // 自定义插件名称
      {
        // 参数配置
      },
    ],
  ],
});
```

### React 初始化

在创建 `FiveProvider` 时，将 `PanoRulerProPlugin` 配置在初始化插件参数即可。

```ts
import { PanoRulerProPlugin } from "@realsee/dnalogel";
import { createFiveProvider, FiveCanvas } from "@realsee/five/react";

const FiveProvider = createFiveProvider({
  plugins: [
    [
      PanoRulerProPlugin,
      "panoRulerProPlugin", // 自定义插件名称
      {
        // 参数配置
      },
    ],
  ],
});
```

### Vue 初始化

在使用 `FiveProvider` 时，将 `PanoRulerProPlugin` 配置在初始化插件参数即可。

```vue
<template>
  <FiveProvider :fiveInitArgs="fiveInitArgs"> </FiveProvider>
</template>
<script setup>
import PanoRulerProPlugin from "@realsee/dnalogel/libs/PanoRulerProPlugin";
import { FiveProvider, FiveCanvas } from "@realsee/five/vue";
const fiveInitArgs = {
  plugins: [
    [
      PanoRulerProPlugin,
      "panoRulerProPlugin", // 自定义插件名称
      {
        // 参数配置
      },
    ],
  ],
};
</script>
```

### 载入数据

```ts
// 获取插件实例,其中 `panoRulerProPlugin` 是初始化时自定义的名称
const pluginInstance = five.plugins.panoRulerProPlugin;

// 调用 `load` 方法载入全景标尺数据
pluginInstance.load(data, {
  distanceText: (distance) => `约 ${distance.toFixed(1)}米`,
});
```

### 核心方法

- `load: (serverData: PanoRulerProPluginDatas) => Promise<boolean>` 载入插件数据

> 您需要手动载入插件数据，数据来源请阅读[开发 API](https://open-platform.realsee.com/developer/open/api/#/)。

- `enable: () => void` 打开标尺

- `disable: () => void` 关闭标尺

## demo 源码参考

[demo 源码参考](https://github.com/realsee-developer/dnalogel/tree/main/examples/src)
