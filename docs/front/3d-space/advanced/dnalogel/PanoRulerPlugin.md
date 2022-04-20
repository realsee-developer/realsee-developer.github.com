---
title: 全景标尺
---

## **PanoRulerPlugin**

## 功能说明

**全景标尺插件** 提供在全景模式下标注房源关键轮廓的尺寸。

详细功能点如下：
- 提供在全景模式下标注房源关键轮廓的尺寸，比如分间的层高、面宽和径深等信息；支持实景VR和虚景VR的场景。
- 只展示当前视角下靠近中心位置的标尺线。
- 移动走点及变换视角时，标尺线会跟随移动和变换。
- 数值气泡长度自适应：根据数值内容自适应气泡长度，同时支持数值内容根据特殊需求配置，比如海外数值有英寸单位的需求。
- 若标尺线长度低于该标尺的数值气泡长度，则不展示该标尺线。

## 效果展示

点击**空间总览**按钮，查看空间总览模态下的全景标尺效果。

```mdx-code-block
import {PlaygroundCard} from '@site/src/components/Playground';

<div className="docs-vr-normal">
  <iframe className="docs-vr-iframe" src=""></iframe>
</div>

<PlaygroundCard
    url=''
 />
```


## 安装引用

**请按需选择 `yarn` 或 `npm` 安装方式：**

```bash npm2yarn
npm install @realsee/dnalogel
```

**通过 es 引用：**

```tsx
import { PanoRulerPlugin } from "@realsee/dnalogel"
```

## 开发指南

### 初始化

> 方法1：在初始化 `Five` 实例时，将 `PanoRulerPlugin` 配置在初始化插件参数即可。

```ts
import { Five } from '@realsee/five'
import { PanoRulerPlugin } from "@realsee/dnalogel";

const five = new Five({
    plugins: [
        [
            PanoRulerPlugin,
            'panoRulerPlugin', // 自定义插件名称
            {
                // 参数配置
            }
        ]
    ]
})
```

> 方法2：在创建 `FiveProvider` 时，将 `PanoRulerPlugin` 配置在初始化插件参数即可。

```ts
import { PanoRulerPlugin } from "@realsee/dnalogel";
import { createFiveProvider, FiveCanvas } from "@realsee/five/react";

const FiveProvider = createFiveProvider({
    plugins: [
        [
            PanoRulerPlugin,
            'panoRulerPlugin', // 自定义插件名称
            {
                // 参数配置
            }
        ]
    ]
});
```

### 载入数据

```ts
// 获取插件实例,其中 `panoRulerPlugin` 是初始化时自定义的名称
const pluginInstance = five.plugins.panoRulerPlugin

// 调用 `load` 方法载入全景标尺数据
pluginInstance.load(roomInfo, roomRules, { distanceText: (distance) => `约 ${distance.toFixed(1)}米` })
```

### 核心方法

- `load: (roomInfo?: RoomInfo, roomRules?: RoomRules, options?: PanoRulerPluginOptions) => Promise<boolean>` 载入插件数据

> 您需要手动载入插件数据，数据来源请阅读[如视开发者中心服务端 API](http://developers.realsee.com/docs/#/docs/five/server/README)。
 
- `enable: () => void` 打开标尺

- `disable: () => void` 关闭标尺


