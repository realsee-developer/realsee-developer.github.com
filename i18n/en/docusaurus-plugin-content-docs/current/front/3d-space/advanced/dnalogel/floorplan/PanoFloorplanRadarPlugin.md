---
title: '📦 panorama radar map'
---

## **PanoFloorplanRadarPlugin**

:::tip This plugin is dependent on**household diagram data**, please learn how to get household chart data first.
:::

## Example effect

```mdx-code-block
<div className="docs-vr-normal">
  <iframe className="docs-vr-iframe" src="https://realsee.js.org/dnalogel/src/PanoFloorplanRadarPlugin/index.html"></iframe>
</div>

<PlaygroundCard
    url='https://stackblitz.com/edit/panofloorplanradarplugin'
 />
```

## Function Description

**House Type Radar Map Plug-in** provides the function of displaying a two-dimensional house type map in the panorama mode.

Supported features are：

- Radar guidelines：show the location and direction of the current point in a "radar" icon.
- Household chart adaptive fill：minimum size is automatically calculated to ensure display in DOM container center.
- Changes to the floors in the panorama mode will automatically switch to the household chart of the current floor.
- When configuring `hoverEnable` to `true` (default configuration), the mouse `hover` will be highlighted between the relevant segments.

## Install reference

**Please choose `yarn` or `npm` installation method：as needed**

```bash npm2yarn
npm install @realsee/dnalogel
```

**By es reference：**

```tsx
import { PanoFloorplanRadarPlugin } from "@realsee/dnalogel"
```

## Development Guides

### Initialize

When initializing `Five` instances, configure `PanoFloorplanRadarPlugin` in initialize plugin parameters.

```ts
import Five from '@realsee/five'
import { PanoFloorplanRadarPlugin } from "@realsee/dnalogel"

// initialize five instances
const five = new Five({
    plugins: [
     [PanoFloorplanRadarPlugin, 'panoFloorplanRadar', {
     //initialize parameter
        }]
    ]
})
```

### React initialization

The `PanoFloorplanRadarPlugin` configuration is sufficient to initialize plugin parameters when creating the FiveProvider component.

```ts
import { createFiveProvider } from '@realsee/five/react'
import { PanoFloorplanRadarPlugin } from "@realsee/dnalogel"

// Create FiveProvider component
const FiveProvider = createFiveProvider({
    plugins: [
        [PanoFloorplanRadarPlugin, "panoFloorplanRadar", {
            // Initialize parameter
        }]
    ]
})
```

### Vue initialization

When using `FiveProvider` , configure `PanoFloorplanRadarPlugin` in initialize plugin parameters.

```vue
<template>
  <FiveProvider :fiveInitArgs="fiveInitArgs">
  </FiveProvider>
</template>
<script setup>
import PanoFloorplanRadarPlugin from "@realsee/dnalogel/libs/PanoFloorplanRadarPlugin";
import { FiveProvider, FiveCanvas } from "@realsee/five/vue";
const fiveInitArgs = {
    plugins: [
        [
            PanoFloorplanRadarPlugin,
            'panoFloorplanRadarPlugin', // Custom plugin name
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
// Get plugin instance
const pluginInstance = five.plugins.panoFloorplanRadar
// loading data
pluginInstance.load(floorplanServerData)
```

### Core approach

**There are：core methods provided by PanoFloorplanRadarPlugin**

- `async load(data: FloorplanServerData)` Load household graph;

> You need to manually load the floor plan data, please read[for the data source of[FloorplanServerData] such as the open platform API](https://open-platform.realsee.com/developer/open/api/#/).

- `appendTo(wrapper: Element)` Mount DOM nodes;

> Load the household chart DOM module into your HTML structure.

- `setState(state: Partial<State>options: BaseOptions = {})` Change plugin State;

- `changeConfigs(config: Config, userAction = true)` modify plugin configuration information

- `setExtraObjectsWith3DPositions(data: FloorplanExtraObject3D[])` Show extra content on radar

- `async show(options: BaseOptions = {})` Shows household charts;

- `async hide(options: BaseOptions = {})` Hide household graph;

- `enable(options: BaseOptions = {})` Enable plugins;

- `disable(options: BaseOptions = {})` Disable plugins;

### Show extra content on radar

For objects in some three-dimensional scenarios, we can show them with special icons on radar

`setExtraObjectsWith3DPositions(data: FloorplanExtraObject3D[])` sets the list of three-dimensional objects displayed on the household map.

The structure of three-dimensional data is as follows:

```ts
// 3D objects capable of mapping 3D objects on radar charts
export interface FloorplanExtraObject3D {
  id: string
  // [x, y, z]
  position: number[]
}
```

### Configure Parameters

- `wrapper: string | Element` plugin mounted DOM node.

- `hoverEnable?: boolean` Do not turn on mouse `hover` Highlights.

Configure Sample Reference：

```ts

import { PanoFloorplanRadarPlugin } from "@realsee/dnalogel"
import { Five, FivePluginInit } from '@realsee/five'

const five = new Five({
  plugins: [
    [
      PanoFloorplanRadarPlugin,
      'floorpalnRadar',
      { 
          wrapper: '.floorplan-radar-wrapper', 
          configs: {
              hoverEnable: true
          }
      }
    ],
  ],
})

```

## demo source reference

[demo source reference](https://github.com/realsee-developer/dnalogel/tree/main/examples/src)
