---
title: '📦 overview model household chart'
---

## **TopviewFloorplanPlugin**

:::tip This plugin is dependent on**household diagram data**, please learn how to get household chart data first.
:::

## Example effect

Tap**to view model**button to see the home map display in subview model status.

```mdx-code-block
<div className="docs-vr-normal">
  <iframe className="docs-vr-iframe" src="https://realsee.js.org/dnalogel/src/TopviewFloorplanPlugin/index.html"></iframe>
</div>
```

## Function Description

**Overview model household diagram plugin** seamlessly integrates a set of household diagrams based on VR 3D model status.

Its function is a simplified version of Model Floor Plan Plugin [ModelFloorplanPlugin](ModelFloorplanPlugin.md) , only**display capabilities**, related usage and API can directly refer to [ModelFloorplanPlugin](ModelFloorplanPlugin.md).

**Distinction：**

**Overview model household image plugin** is bound to `live` instance `Mode` status：when `five.mode` is `Five.Mode.Topview` when animation is executed, the two-dimensional household pattern module is shown automatically.When it is not in the state of`Five.Mode.Topview` , the two-dimensional floor plan module is automatically hidden.

So you can use `five.mode` to indirectly control display and hide the two-dimensional household map module.The other successful medical APIs are exactly the same.

## Install reference

**Please choose `yarn` or `npm` installation method：as needed**

```bash npm2yarn
npm install @realsee/dnalogel
```

**By es reference：**

```tsx
import { TopviewFloorplanPlugin } from "@realsee/dnagel"
```

## Development Guides

### Initialize

When initializing `Five` instances, configure `TopviewFloorplanPlugin` in initialize plugin parameters.

```ts
import { Five } from '@realsee/five'

const five = new Five({
    plugins: [
        [
            TopviewFloorplanPlugin,
            'topviewFloorplanPlugin', // custom plugin name
            {
                // example parameter configuration
                selector: '. plugin-full-screen-container', // Replace with your container node
                hoverEnable: true
                /** Whether to enable the zoom in and out and drag functions, the default is false */
                // gestureEnable?: boolean 
            }
        ]
    ]
})
```

### React initialization

When creating `FiveProvider` , configure `TopviewFloorplanPlugin` in initialize plugin parameters.

```ts
import { TopviewFloorplanPlugin } from "@realsee/dnalogel";
import { createFiveProvider, FiveCanvas } from "@realsee/five/react";

const FiveProvider = createFiveProvider({
    plugins: [
        [
            TopviewFloorplanPlugin,
            'topviewFloorplanPlugin', // Custom plugin name
            {
                // Example parameter configuration
                selector: '. lugin-full-screen-container', // Replace with your container node
                hoverEnable: true
                /** Enable zoom and drag feature, Consider false */
                // gestureEnable? boolean 
            }
        ]
    ]
});
```

### Vue initialization

When using `FiveProvider` , configure `TopviewFloorplanPlugin` in initialize plugin parameters.

```vue
<template>
  <FiveProvider :fiveInitArgs="fiveInitArgs">
  </FiveProvider>
</template>
<script setup>
import TopviewFloorplanPlugin from "@realsee/dnalogel/libs/TopviewFloorplanPlugin";
import { FiveProvider, FiveCanvas } from "@realsee/five/vue";
const fiveInitArgs = {
    plugins: [
        [
            TopviewFloorplanPlugin,
            'topviewFloorplanPlugin', // Custom plugin name
            {
                // Parameter configuration
            }
        ]
    ]
}
</script>
```

### Load data

```ts
// Gets an instance of a plugin, where `topviewFloorplanPlugin` is a custom name on initialization
const pluginInstance = five.plugins.topviewFloorplanPlugin 

// Call `load` method to load household diagram data
pluginInstance.load(floorplanServerData)
```

### Core approach

**There are：core methods provided by TopviewFloorplanPlugin**

- `load(data: FloorplanServerData)` Load household chart data

> You need to manually load the floor plan data, please read[for the data source of[FloorplanServerData] such as the open platform API](https://open-platform.realsee.com/developer/open/api#/).

- `appendTo(wrapper: Element)` Mount DOM nodes

> Load the household chart DOM module into your HTML structure.

## demo source reference

[demo source reference](https://github.com/realsee-developer/dnalogel/tree/main/examples/src)
