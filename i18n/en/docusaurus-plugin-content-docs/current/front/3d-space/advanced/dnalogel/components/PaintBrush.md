---
title: Add brush feature
---

## **PaintBrush**

Minimum support repository：`@realsee/dnalogel@2.0.0-alpha.34`

## Function Description

**Brush Component** provides the ability to draw in the content area.

## Effect Display

Tap **to turn on brush: paintbrush_selector:** button, to draw

```mdx-code-block
import {PlaygroundCard} from '@site/src/components/Playground';

<div className="docs-vr-normal">
  <iframe className="docs-vr-iframe" src="https://realsee-developer.github.io/dnalogel/src/PaintBrush/index.html"></iframe>
</div>
```

## Install reference

**Please choose `yarn` or `npm` installation method：as needed**

```bash npm2yarn
npm install @realsee/dnalogel
```

**By es reference：**

```tsx
import { PaintBrush } from "@realsee/dnalogel/components"
```

## Development Guides

### Initialize

Initialize brush instances as needed.

```ts
const paintBrushInstance = new PaintBrush({
    // container? HTMLDivElement
    // currentColor: string // '#ff0000', // brush color
    // DPR? number@@0,
    //onClickClose? () => void, // exit callback
    //onClickUndo? () => void, // Undo callback
    // onUndoText? string, // Undo button text, defaults to "Undo"
    // onExitText?: string // exit button, default to "Exit"
})
```

### Open brush

The brush can be enabled by calling `show()` method.

```ts
paintBrushInstance.show()
```

### Event listener

- already listening events `readyChange: (ready: boolean) => void`

```ts
paintBrushInstance.on('readyChange', ready => {
    // true || false
})
```

- State listener event `stateChange: (state: PaintBrushAction, userAction: boolean) => void`

```ts
paintBrushInstance.on('stateChange', (state: PaintBrushAction, userAction: boolean) => {
    /**
     * state. ype enum value：
     * export enum PaintBrushTypeEnum {
     * Drawline='Drawline',
     * Undo='Undo',
     * Exit='Exit',
     * }
     * **/
})
```

### Core approach

- `setCurrentColor(color: string)` Change brush color

## demo source reference

[demo source reference](https://github.com/realsee-developer/dnalogel/tree/main/examples/src)
