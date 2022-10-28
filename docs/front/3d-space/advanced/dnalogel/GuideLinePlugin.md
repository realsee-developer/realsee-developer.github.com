---
title: 添加路径引导
---

## **GuideLinePlugin**

## 功能说明

GuideLinePlugin 提供在全景模态下渲染出行动路径的能力。

## 效果展示

拖动 VR ，旋转视角即可看到路径引导效果。

<div className="docs-vr-normal">
  <iframe className="docs-vr-iframe" src="https://realsee.js.org/dnalogel/src/GuideLinePlugin/index.html"></iframe>
</div>

## 安装引用

```tsx
import { GuideLinePlugin } from "@realsee/dnalogel"
```

## 开发指南

### 初始化
在初始化 `Five` 实例时，将 `GuideLinePlugin` 配置在初始化插件参数即可。

```ts
import { Five } from '@realsee/five'
import { GuideLinePlugin } from "@realsee/dnalogel";

const five = new Five({
    plugins: [
        [
            GuideLinePlugin,
            'guideLinePlugin', // 自定义插件名称
        ]
    ]
})
```

### React 初始化
在创建 `FiveProvider` 时，将 `GuideLinePlugin` 配置在初始化插件参数即可。

```ts
import { GuideLinePlugin } from "@realsee/dnalogel";
import { createFiveProvider, FiveCanvas } from "@realsee/five/react";

const FiveProvider = createFiveProvider({
    plugins: [
        [
            GuideLinePlugin,
            'guideLinePlugin', // 自定义插件名称
        ]
    ]
});
```

### Vue 初始化
在 `FiveProvider` 时，将 `GuideLinePlugin` 配置在初始化插件参数即可。
```Vue
<template>
  <FiveProvider :fiveInitArgs="fiveInitArgs">
  </FiveProvider>
</template>
<script setup>
import  GuideLinePlugin from "@realsee/dnalogel/libs/GuideLinePlugin";
import { FiveProvider, FiveCanvas } from "@realsee/five/vue";
const fiveInitArgs = {
    plugins: [
        [
            GuideLinePlugin,
            'guideLinePlugin', // 自定义插件名称
        ]
    ]
}
</script>
```

### 载入数据

您需要**载入路径规划数据数据**方可看到正确效果：

```tsx
// 自定义路径数据
const guideLineServerData = [{ 
    panoIndexList: [0, 1, 2, 3, 4, 5],
    // arrowTextureUrl: '', // 自定义路径箭头icon
}]
// 载入路径数据
five.plugins.guideLinePlugin.load({ routes: guideLineServerData }, { visible: true })
```

### 核心方法

- `load(data: PluginServerData)` 载入插件数据

> 您需要手动载入插件数据，数据来源请阅读[如视开发者中心服务端 API](http://developers.realsee.com/docs/#/docs/five/server/README)。

- `enable: (options?: { userAction?: boolean }) => void` 启用插件

- `disable: (options?: { userAction?: boolean }) => void` 禁用插件

- `show: (options?: { userAction?: boolean }) => void` 显示路径

- `hide: (options?: { userAction?: boolean }) => void` 隐藏路径

## demo 源码参考

[demo 源码参考](https://github.com/realsee-developer/dnalogel/tree/main/examples/src)
