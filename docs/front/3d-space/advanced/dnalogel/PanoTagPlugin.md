---
title: 添加全景标签
---

## **PanoTagPlugin**

## 功能说明

**全景标签插件** 提供在全景模式下标注房源不同位置标签信息。

详细功能点如下：

- 标签共分为“音频标签(Audio)”、“文本标签(Text)”、“图文标签(ImageText)”、“VR跳转标签(Link)”、“营销标签(Marketing)”、“图片视频贴片(MediaPlane)”等6类。
- 标签按照维度类型(DimensionType)可以分为：“2D(Two)”和“3D(Three)”两种。
- 按照点位类型(PointType)来分，标签又可以分为：点标记(PointTag)和平面标记(PlaneTag)两种。
- 用户可以自由组合上述标签分类属性，根据自己的业务类型，创造更加适合的全景标签。

## 示例效果

<div className="docs-vr-normal">
  <iframe className="docs-vr-iframe" src="https://realsee.js.org/dnalogel/src/PanoTagPlugin/index.html"></iframe>
</div>

## 安装引用

**请按需选择 `yarn` 或 `npm` 安装方式：**

```bash npm2yarn
npm install @realsee/dnalogel
```

**通过 es 引用：**

```tsx
import { PanoTagPlugin } from "@realsee/dnalogel"
```

## 开发指南

### 初始化

在初始化 `Five` 实例时，将 `PanoTagPlugin` 配置在初始化插件参数即可。

```ts
import { Five } from '@realsee/five'
import { PanoTagPlugin } from "@realsee/dnalogel";

const five = new Five({
    plugins: [
        [
            PanoTagPlugin,
            'panoTagPlugin', // 自定义插件名称
            {
                // 参数配置
            }
        ]
    ]
})
```

### React 初始化

在创建 `FiveProvider` 时，将 `PanoTagPlugin` 配置在初始化插件参数即可。

```ts
import { PanoTagPlugin } from "@realsee/dnalogel";
import { createFiveProvider, FiveCanvas } from "@realsee/five/react";

const FiveProvider = createFiveProvider({
    plugins: [
        [
            PanoTagPlugin,
            'panoTagPlugin', // 自定义插件名称
            {
                // 参数配置
            }
        ]
    ]
});
```

### Vue 初始化

在使用 `FiveProvider` 时，将 `PanoTagPlugin` 配置在初始化插件参数即可。

```vue
<template>
  <FiveProvider :fiveInitArgs="fiveInitArgs">
  </FiveProvider>
</template>
<script setup>
import  PanoTagPlugin from "@realsee/dnalogel/libs/PanoTagPlugin";
import { FiveProvider, FiveCanvas } from "@realsee/five/vue";
const fiveInitArgs = {
    plugins: [
        [
            PanoTagPlugin,
            'panoTagPlugin', // 自定义插件名称
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
// 获取插件实例,其中 `panoTagPlugin` 是初始化时自定义的名称
const panoTagPluginInstance = five.plugins.panoTagPlugin

// 调用 `load` 方法载入全景标签数据
panoTagPluginInstance.load(tagsData, config)
```

### 核心方法

- `load:(data: Tags, config?: AddTagConfig) => void` 载入插件数据

- `addTag:(tag: Tag | Tag[], config?: AddTagConfig) => void` 添加标签

- `clearTags: () => void` 清空所有标签

- `async show: (params?: { userAction?: boolean; withAnimation?: boolean }) => void` 显示标签

- `async hide: (params?: { userAction?: boolean; withAnimation?: boolean }) => void` 隐藏标签

- `enable: (params?: { userAction?: boolean }) => void` 允许使用插件

- `disable: (params?: { userAction?: boolean }) => void` 禁止使用插件

- `dispose: () => void` 销毁插件

- `setState: (state: Partial<State>, params: { userAction?: boolean; visibleWithAnimation?: boolean }) => void` 更新插件状态

- `changeTagNormalById: (id: TagId, normal: ArrayPosition) => void` 修改标签位置信息

- `changeDataById: (id: TagId, data: PartialDeep<Tag<C>['data']>, deepMerge = true) => void` 改变data

- `changeTagById: (id: TagId,tag: PartialDeep<{ [P in keyof Pick<Tag<C>, 'enabled' | 'style' | 'dimensionType' | 'contentType' | 'data' | 'normal'>]: Tag[P] }>,deepMerge = true,) => void` 改变tag任意属性

- `destroyTagById: (id: TagId | TagId[]) => void` 销毁tag

- `pauseCurrentMedia: () => void` 暂停当前标签内进行的所有多媒体

## demo 源码参考

[demo 源码参考](https://github.com/realsee-developer/dnalogel/tree/main/examples/src)
