---
title: 添加路径漫游
---

## **CruisePlugin**

## 功能说明

CruisePlugin 提供在全景模态下根据路径进行漫游预览的能力。

## 效果展示

拖动 VR ，旋转视角即可看到路径引导效果，点击“开始漫游”，即可根据当前路径进行漫游预览。

<div className="docs-vr-normal">
  <iframe className="docs-vr-iframe" src="https://realsee.js.org/dnalogel/src/CruisePlugin/index.html"></iframe>
</div>

## 安装引用

```tsx
import { CruisePlugin } from "@realsee/dnalogel"
```

## 开发指南

### 初始化
在初始化 `Five` 实例时，将 `CruisePlugin` 配置在初始化插件参数即可。

```ts
import { Five } from '@realsee/five'
import { CruisePlugin } from "@realsee/dnalogel";

const five = new Five({
    plugins: [
        [
            CruisePlugin,
            'cruisePlugin', // 自定义插件名称
        ]
    ]
})
```

### React 初始化
在创建 `FiveProvider` 时，将 `CruisePlugin` 配置在初始化插件参数即可。

```ts
import { CruisePlugin } from "@realsee/dnalogel";
import { createFiveProvider, FiveCanvas } from "@realsee/five/react";

const FiveProvider = createFiveProvider({
    plugins: [
        [
            CruisePlugin,
            'cruisePlugin', // 自定义插件名称
        ]
    ]
});
```

### Vue 初始化
在 `FiveProvider` 时，将 `CruisePlugin` 配置在初始化插件参数即可。
```Vue
<template>
  <FiveProvider :fiveInitArgs="fiveInitArgs">
  </FiveProvider>
</template>
<script setup>
import  CruisePlugin from "@realsee/dnalogel/libs/CruisePlugin";
import { FiveProvider, FiveCanvas } from "@realsee/five/vue";
const fiveInitArgs = {
    plugins: [
        [
            CruisePlugin,
            'cruisePlugin', // 自定义插件名称
        ]
    ]
}
</script>
```

### 载入数据

您需要**载入路径漫游数据**方可看到正确效果：

```tsx
// 自定义路径数据
const currentGuideLine =  [0, 1, 2, 3, 4, 5];
// 载入路径数据
five.plugins.cruisePlugin.load({ 
    panoIndexList: currentGuideLine,
    moveToFirstPanoEffect: 'montage',
    stay: 1000,
})
// 开始漫游
five.plugins.cruisePlugin.play();
```

### 核心方法

- `load(serverData: PluginServerData | PluginServerData['data'])` 载入插件数据

> 您需要手动载入插件数据，数据来源请阅读[如视开发者中心服务端 API](http://developers.realsee.com/docs/#/docs/five/server/README)。

- `play: (options?: { userAction?: boolean }) => void` 开始漫游

- `playFrom: (options: { userAction?: boolean; index?: number; id?: string }) => void` 从某一节点开始漫游

- `playFromStart: (options?: { userAction?: boolean }) => void` 从第一个节点开始漫游

- `pause: (options?: { userAction?: boolean }) => void` 暂停漫游

- `setState: (state: Partial<PluginState>, options?: BaseOptions & Record<string, any>) => void` 设置漫游参数

- `show: (options?: { userAction?: boolean }) => void` 显示漫游路径

- `hide: (options?: { userAction?: boolean }) => void` 隐藏漫游路径

- `enable: (options?: { userAction?: boolean }) => void` 启用插件

- `disable: (options?: { userAction?: boolean }) => void` 禁用插件

- `dispose: () => void` 销毁插件


## demo 源码参考

[demo 源码参考](https://github.com/realsee-developer/dnalogel/tree/main/examples/src)
