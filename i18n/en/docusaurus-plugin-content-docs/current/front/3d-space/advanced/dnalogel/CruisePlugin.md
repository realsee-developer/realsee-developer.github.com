---
title: Add Path Roaming
---

## **CruisePlugins**

## Function Description

CruisePlugin provides the ability to roaming preview by path in a panorama mode.

## Effect Display

Drag VR to rotate the path guide effect and click "Start roaming" to preview the current path.

<div className="docs-vr-normal">
  <iframe className="docs-vr-iframe" src="https://realsee.js.org/dnalogel/src/CruisePlugin/index.html"></iframe>
</div>

## Install reference

```tsx
import { CruisePlugin } from "@realsee/dnalogel"
```

## Development Guides

### Initialize

When initializing `Five` instances, configure `CruisePlugin` in initialize plugin parameters.

```ts
import { Five } from '@realsee/five'
import { CruisePlugin } from "@realsee/dnalogel";

const five = new Five({
    plugins: [
        [
            CruisePlugin,
            'cruisePlugin', // Custom plugin name
        ]
    ]
})
```

### React initialization

When creating `FiveProvider` , configure `CruisePlugin` in initialize plugin parameters.

```ts
import { CruisePlugin } from "@realsee/dnalogel";
import { createFiveProvider, FiveCanvas } from "@realsee/five/react";

const FiveProvider = createFiveProvider({
    plugins: [
        [
            CruisePlugin,
            'cruisePlugin', // Custom plugin name
        ]
    ]
});
```

### Vue initialization

When `FiveProvider` , configure `CruisePlugin` in initialize plugin parameters.

```vue
<template>
  <FiveProvider :fiveInitArgs="fiveInitArgs">
  </FiveProvider>
</template>
<script setup>
import CruisePlugin from "@realsee/dnalogel/libs/CruisePlugin";
import { FiveProvider, FiveCanvas } from "@realsee/five/vue";
const fiveInitArgs = {
    plugins: [
        [
            CruisePlugin,
            'cruisePlugin', // custom plugin name
        ]
    ]
}
</script>
```

### Load data

You need**loading path roaming data**to see the correct effect：

```tsx
// Custom path data
const currentGuideLine = [0, 1, 2, 3, 4, 5];
// Load path data
five.plugins.cruisePlugin.load({ 
    panoIndexList: currentGuideLine,
    moveToFirstPanoEffect: 'montage',
    stay: 1000,
})
// Start roaming
five.plugins.cruisePlugin.play();
```

### Core approach

- `load(serverData: PluginServerData | PluginServerData['data'])` Loading plugin data

> You need to manually load the plug-in data, please read[Realsee Open Platform API](https://open-platform.realsee.com/developer/open/api#/)for the data source.

- `play: (options?: { userAction?: boolean }) => void` to start roaming

- `playFrom: (options: { userAction?: boolean; index?: number; id?: string }) => void` roaming from a certain node

- `playFromStart: (options?: { userAction?: boolean }) => void` from first node

- `pause: (options?: { userAction?: boolean }) => void` paused roaming

- `setState: (state: Partial<PluginState>, options?: BaseOptions & Record<string, any>) => void` set roaming parameters

- `show: (options?: { userAction?: boolean }) => void` show roaming path

- `hide: (options?: { userAction?: boolean }) => void` hidden roaming path

- `enable: (options?: { userAction?: boolean }) => void` enable plugins

- `disable: (options?: { userAction?: boolean }) => void` Disable plugin

- `dispose: () => void` destroyed plugin

## demo source reference

[demo source reference](https://github.com/realsee-developer/dnalogel/tree/main/examples/src)
