---
title: 添加画笔功能
---

## **PaintBrush**

最低支持版本库：`@realsee/dnalogel@2.0.0-alpha.34`

## 功能说明

**画笔组件** 提供在内容区进行手绘的能力。

## 效果展示

点击 **开启画笔🖌️** 按钮，可进行绘写。

```mdx-code-block
import {PlaygroundCard} from '@site/src/components/Playground';

<div className="docs-vr-normal">
  <iframe className="docs-vr-iframe" src="https://realsee.js.org/dnalogel/src/PaintBrush/index.html"></iframe>
</div>
```

## 安装引用

**请按需选择 `yarn` 或 `npm` 安装方式：**

```bash npm2yarn
npm install @realsee/dnalogel
```

**通过 es 引用：**

```tsx
import { PaintBrush } from "@realsee/dnalogel/components"
```

## 开发指南

### 初始化

按需初始化画笔实例。

```ts
const paintBrushInstance = new PaintBrush({
    // container?: HTMLDivElement
    // currentColor: string // '#ff0000',  // 画笔颜色
    // DPR?: number,
    // onClickClose?: () => void, // 退出回调
    // onClickUndo?: () => void, // 撤销回调
    // onUndoText?: string, // 撤销按钮文字，默认为"撤销"
    // onExitText?: string // 退出按钮文字，默认为"退出"
})
```

### 开启画笔

通过调用 `show()` 方法可开启画笔。

```ts
paintBrushInstance.show()
```

### 事件监听

- ready 监听事件 `readyChange: (ready: boolean) => void`

```ts
paintBrushInstance.on('readyChange', ready => {
    // true || false
})
```

- 状态监听事件 `stateChange: (state: PaintBrushAction, userAction: boolean) => void`

```ts
paintBrushInstance.on('stateChange', (state: PaintBrushAction, userAction: boolean) => {
    /**
     * state.type 枚举值：
     * export enum PaintBrushTypeEnum {
     * Drawline='Drawline',
     * Undo='Undo',
     * Exit='Exit',
     * }
     * */
})
```

### 核心方法

- `setCurrentColor(color: string)` 修改画笔颜色

## demo 源码参考

[demo 源码参考](https://github.com/realsee-developer/dnalogel/tree/main/examples/src)
