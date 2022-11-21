---
title: 添加全景标签
---

## **PanoTagPlugin**

## 功能说明

**全景标签插件** 提供在全景模式下标注房源不同位置标签信息。

详细功能点如下：

- 标签共分为“音频标签(Audio)”、“文本标签(Text)”、“图文标签(ImageText)”、“VR跳转标签(Link)”、“营销标签(Marketing)”、“图片视频贴片(MediaPlane)”、“自定义标签(Custom)”等。
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
import PanoTagPlugin from "@realsee/dnalogel/libs/PanoTagPlugin";
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
const pluginInstance = five.plugins.panoTagPlugin

// 调用 `load` 方法载入全景标签数据
pluginInstance.load(tagsData, config)
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

## 添加自定义标签

标签中有一个标签类型叫做“自定义标签”，使用这个标签类型，开发者可以根据自己的业务需要，自定义添加任意符合规范的标签样式。

可以参考下面的例子：

```ts
  // 添加自定义标签
  const addCustomerTag = () => {
    // 自定义Element
    const ele = document.createElement('div');
    ele.innerText = "这是一个自定义的标签";
    ele.style.color = "red";
    ele.style.width = "200px";
    ele.style.border = "1px solid #000";

    const tagData: Tag = {
      id: "03338b76-b64a-4e90-37fb-44e3c0ffeb88",
      pointType: "PointTag",
      dimensionType: "2D",
      position: [-1.7882169929208833, 1.022040232156752, -2.339700937271118],
      data: {
        text: "自定义标签"
      },
      element: ele,
      // ContentType设置为Custom
      contentType: "Custom"
    }
    pluginInstance.addTag(tagData);
  }
```

## 数据结构

插件中最重要的一个结构是 `Tag`，添加标签，修改标签信息等操作都需要使用，其对应的数据结构如下：

``` typescript

export type Tag<
  C extends ContentType = any,
  P extends PointType = any,
  D extends DimensionType = any,
  CustomDataType extends Object = {},
> = {
  /** 开启/禁用 */
  enabled?: boolean
  /** 唯一标识 */
  id: TagId
  /** 一个点的标签/4个点的标签 */
  pointType: P
  /** 2维/3维类型 */
  dimensionType: D
  /** 内容类型，根据内容类型展示对应UI */
  contentType: C
  /** 点 */
  position: P extends PointType.PointTag ? Position : P extends PointType.PlaneTag ? [Position, Position, Position, Position] : any
  /** 自定义标签内容 */
  element?: string | Element | ElementRenderer
  /** 标签数据 */
  data: C extends ContentType.Custom ? CustomDataType : ContentTypeMap[C]
  /** 「展开/收起」 「可见/不可见」 的策略配置 */
  config?: TagConfig<C, P, D, CustomDataType>
  /** 法向量 */
  normal?: Position
  /** 样式 */
  style?: {
    /** 小圆点样式 */
    point?: { style: 'Default' } | { style: 'CustomIcon'; iconUrl: string } | { style: 'noPoint' }
    /** 收起的时候的动画延时，单位：ms */
    foldedPointDelay?: number
  }
} & (D extends DimensionType.Three ? (P extends PointType.PointTag ? { normal: Position } : unknown) : unknown) /** 三维标签需要法向量 */

```

标签类型定义

```typescript
export enum ContentType {
  /** 音频标签 */
  Audio = 'Audio',
  /** 文本标签 */
  Text = 'Text',
  /** 图文标签 */
  ImageText = 'ImageText',
  /** VR跳转标签 */
  Link = 'Link',
  /** 营销标签 */
  Marketing = 'Marketing',
  /** 图片视频贴片 */
  MediaPlane = 'MediaPlane',
  /** 其他/自定义标签 */
  Custom = 'Custom',
}
```

标签维度类型定义

```typescript
export enum DimensionType {
  Two = '2D',
  Three = '3D',
}
```

标签点位类型定义

```typescript
export enum PointType {
  PointTag = 'PointTag',
  PlaneTag = 'PlaneTag',
}

```

## demo 源码参考

[demo 源码参考](https://github.com/realsee-developer/dnalogel/tree/main/examples/src)
