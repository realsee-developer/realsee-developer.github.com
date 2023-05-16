---
title: 模型分间标签
---

## **ModelRoomLabelPlugin**

## 功能说明

**模型分间标签插件** 集成了一套能够在模型状态下快速查看房间名称 & 快速访问房间全景的交互。

详细功能点如下：

- 在模型态下，用标签展示对应的房屋名称。
- 当标签标记的房间被其他房屋所遮挡时，自动隐藏此标签。
- 移动模型时，对应标签也能跟随模型移动。
- 点击标签时，从模型状态切换到全景，并移动到对应的房间中心的点位上。
- 切换到房间时，相机视角会朝向房间中心。

## 效果展示

点击**空间总览**按钮，查看空间总览模态下的房屋标签效果。

```mdx-code-block
import {PlaygroundCard} from '@site/src/components/Playground';

<div className="docs-vr-normal">
  <iframe className="docs-vr-iframe" src="https://realsee-developer.github.io/dnalogel/src/ModelRoomLabelPlugin/index.html"></iframe>
</div>

<PlaygroundCard
    url='https://stackblitz.com/edit/modelroomlabelplugin?file=index.tsx'
 />
```

## 安装引用

**请按需选择 `yarn` 或 `npm` 安装方式：**

```bash npm2yarn
npm install @realsee/dnalogel
```

**通过 es 引用：**

```tsx
import { ModelRoomLabelPlugin } from "@realsee/dnagel";
```

## 开发指南

### 初始化

在初始化 `Five` 实例时，将 `ModelRoomLabelPlugin` 配置在初始化插件参数即可。

```ts
import { Five } from "@realsee/five";
import { ModelRoomLabelPlugin } from "@realsee/dnalogel";

const five = new Five({
  plugins: [
    [
      ModelRoomLabelPlugin,
      "modelRoomLabelPlugin", // 自定义插件名称
      {
        // 参数配置
      },
    ],
  ],
});
```

### React 初始化

在创建 `FiveProvider` 时，将 `ModelRoomLabelPlugin` 配置在初始化插件参数即可。

```ts
import { ModelRoomLabelPlugin } from "@realsee/dnalogel";
import { createFiveProvider, FiveCanvas } from "@realsee/five/react";

const FiveProvider = createFiveProvider({
  plugins: [
    [
      ModelRoomLabelPlugin,
      "modelRoomLabelPlugin", // 自定义插件名称
      {
        // 参数配置
      },
    ],
  ],
});
```

### Vue 初始化

在使用 `FiveProvider` 时，将 `ModelRoomLabelPlugin` 配置在初始化插件参数即可。

```vue
<template>
  <FiveProvider :fiveInitArgs="fiveInitArgs"> </FiveProvider>
</template>
<script setup>
import ModelRoomLabelPlugin from "@realsee/dnalogel/libs/ModelRoomLabelPlugin";
import { FiveProvider, FiveCanvas } from "@realsee/five/vue";
const fiveInitArgs = {
  plugins: [
    [
      ModelRoomLabelPlugin,
      "modelRoomLabelPlugin", // 自定义插件名称
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
// 获取插件实例,其中 `modelRoomLabelPlugin` 是初始化时自定义的名称
const pluginInstance = five.plugins.modelRoomLabel;

// 调用 `load` 方法载入模型房屋标签数据
pluginInstance.load(modelRoomLabels);
```

### 节点挂载

```ts
// 调用 appendTo(wrapper: Element) 方法挂载 DOM 节点
five.plugins.modelRoomLabel.appendTo(wrapper);

// 示例
React.useEffect(() => {
  // plugin-full-screen-container 即为提前准备好的挂载节点
  const wrapper = document.querySelector(".plugin-full-screen-container");
  if (wrapper) {
    five.plugins.modelRoomLabelPlugin.appendTo(wrapper);
  }
}, []);
```

### 核心方法

- `load(data: ModelRoomLabelPluginData)` 载入插件数据

> 您需要手动载入插件数据，数据来源请阅读[如视开放平台 API](https://open-platform.realsee.com/developer/open/api#/)。

- `appendTo(wrapper: Element)` 挂载 DOM 节点

> 您可以将插件 DOM 模块载入您的 HTML 结构中。

## demo 源码参考

[demo 源码参考](https://github.com/realsee-developer/dnalogel/tree/main/examples/src)
