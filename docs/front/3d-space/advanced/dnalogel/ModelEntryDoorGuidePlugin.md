---
title: 模型入户门引导
---

## **ModelEntryDoorGuidePlugin**

## 功能说明

**模型入户门引导插件** 集成了一套能够在模型状态下查看模型入户门标识的模型

详细功能点如下：

- 在模型态下，使用动态模型标识空间的入户门。

## 效果展示

点击**空间总览**按钮，查看空间总览模态下的模型入户门。

```mdx-code-block
<div className="docs-vr-normal">
  <iframe className="docs-vr-iframe" src="https://realsee-developer.github.io/dnalogel/src/ModelEntryDoorGuidePlugin/index.html"></iframe>
</div>
```

## 安装引用

**请按需选择 `yarn` 或 `npm` 安装方式：**

```bash npm2yarn
npm install @realsee/dnalogel
```

**通过 es 引用：**

```tsx
import { ModelEntryDoorGuidePlugin } from "@realsee/dnalogel"
```

## 开发指南

### 初始化

在初始化 `Five` 实例时，将 `ModelEntryDoorGuidePlugin` 配置在初始化插件参数即可。

```ts
import { Five } from '@realsee/five'
import { ModelEntryDoorGuidePlugin } from "@realsee/dnalogel";

const five = new Five({
    plugins: [
        [
            ModelEntryDoorGuidePlugin,
            'modelEntryDoorGuidePlugin', // 自定义插件名称
            {
                // 参数配置
            }
        ]
    ]
})
```

### React 初始化

在创建 `FiveProvider` 时，将 `ModelEntryDoorGuidePlugin` 配置在初始化插件参数即可。

```ts
import { ModelEntryDoorGuidePlugin } from "@realsee/dnalogel";
import { createFiveProvider, FiveCanvas } from "@realsee/five/react";

const FiveProvider = createFiveProvider({
    plugins: [
        [
            ModelEntryDoorGuidePlugin,
            'modelEntryDoorGuidePlugin', // 自定义插件名称
            {
                // 参数配置
            }
        ]
    ]
});
```

### Vue 初始化

在使用 `FiveProvider` 时，将 `ModelEntryDoorGuidePlugin` 配置在初始化插件参数即可。

```vue
<template>
  <FiveProvider :fiveInitArgs="fiveInitArgs">
  </FiveProvider>
</template>
<script setup>
import ModelEntryDoorGuidePlugin from "@realsee/dnalogel/libs/ModelEntryDoorGuidePlugin";
import { FiveProvider, FiveCanvas } from "@realsee/five/vue";
const fiveInitArgs = {
    plugins: [
        [
            ModelEntryDoorGuidePlugin,
            'modelEntryDoorGuidePlugin', // 自定义插件名称
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
// 获取插件实例,其中 `modelChassisCompassPlugin` 是初始化时自定义的名称
const pluginInstance = five.plugins.modelEntryDoorGuidePlugin 

// 调用 `load` 方法载入模型房屋标签数据
pluginInstance.load(modelEntryDoorGuidePluginData)
```

### 核心方法

- `load(data: ModelEntryDoorGuidePluginData)` 载入插件数据

> 您需要手动载入插件数据，数据来源请阅读[如视开放平台 API](https://open-platform.realsee.com/developer/open/api#/)。

- `enable: (config?: { animationEnable?: boolean /** 是否开启动态效果 */ }) => void` 启用插件

- `disable: () => void` 禁用插件

## demo 源码参考

[demo 源码参考](https://github.com/realsee-developer/dnalogel/tree/main/examples/src)
