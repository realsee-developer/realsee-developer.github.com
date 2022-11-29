---
title: Add Path Booting
---

## **GuideLinePlugin**

## Function Description

GuideLinePlugin provides the ability to render action paths in a panorama mode.

## Effect Display

Drag VR, rotate the angle to see the path bootstrap effect.

<div className="docs-vr-normal">
  <iframe className="docs-vr-iframe" src="https://realsee.js.org/dnalogel/src/GuideLinePlugin/index.html"></iframe>
</div>

## Install reference

```tsx
import { GuideLinePlugin } from "@realsee/dnalogel"
```

## Development Guides

### Initialize

When initializing the `Five` instance, configure `GuideLinePlugin` in the initialization plug-in parameters.

```ts
import { Five } from '@realsee/five'
import { GuideLinePlugin } from "@realsee/dnalogel";

const five = new Five({
    plugins: [
        [
            GuideLinePlugin,
            'guideLinePlugin', // Custom plugin name
        ]
    ]
})
```

### React initialization

When creating `FiveProvider` , configure `GuideLinePlugin` in the initialization plug-in parameters.

```ts
import { GuideLinePlugin } from "@realsee/dnalogel";
import { createFiveProvider, FiveCanvas } from "@realsee/five/react";

const FiveProvider = createFiveProvider({
    plugins: [
        [
            GuideLinePlugin,
            'guideLinePlugin', // Custom plugin name
        ]
    ]
});
```

### Vue initialization

When `FiveProvider` , configure `GuideLinePlugin` in the initialization plug-in parameters.

```vue
<template>
  <FiveProvider :fiveInitArgs="fiveInitArgs">
  </FiveProvider>
</template>
<script setup>
import GuideLinePlugin from "@realsee/dnalogel/libs/GuideLinePlugin";
import { FiveProvider, FiveCanvas } from "@realsee/five/vue";
const fiveInitArgs = {
    plugins: [
        [
            GuideLinePlugin ,
            'guideLinePlugin', // custom plugin name
        ]
    ]
}
</script>
```

### Load data

You need**to load path planning data**to see the correct effect：

```tsx
// Custom path data
const guideLineServerData = [{
    panoIndexList: [0, 1, 2, 3, 4, 5],
    //arrowTextUrl: '', // Custom Path arrow on
}]
// Load path data
five.plugins.guideLinePlugin.load({ routes: guideLineServerData }, { visible: true })
```

### Core approach

- `load(serverData: PluginServerData | PluginData)` Loading plugin data

> You need to manually load the plug-in data, please read[Realsee Open Platform API](https://open-platform.realsee.com/developer/open/api#/)for the data source.

- `show: (options?: { userAction?: boolean }) => void` display path

- `hide: (options?: { userAction?: boolean }) => void` hidden path

- `enable: (options?: { userAction?: boolean }) => void` enable plugins

- `disable: (options?: { userAction?: boolean }) => void` Disable plugin

- `dispose: () => void` destroyed plugin

## demo source reference

[demo source reference](https://github.com/realsee-developer/dnalogel/tree/main/examples/src)
