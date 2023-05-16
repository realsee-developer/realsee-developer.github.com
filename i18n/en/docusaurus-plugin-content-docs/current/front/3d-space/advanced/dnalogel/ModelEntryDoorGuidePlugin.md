---
title: Model Indoor Guide
---

## **ModelEntryDoorGuidePlugin**

## Function Description

**Model Entry Door Boot Plugin** integrates a set of models that can view model entry-door identifiers in model status

Details below：

- In model morphology, use dynamic models to identify the gates of the space.

## Effect Display

Click the**space overview**button to view the model entrance door in the space overview mode.

```mdx-code-block
<div className="docs-vr-normal">
  <iframe className="docs-vr-iframe" src="https://realsee-developer.github.io/dnalogel/src/ModelEntryDoorGuidePlugin/index.html"></iframe>
</div>
```

## Install reference

**Please choose `yarn` or `npm` installation method：as needed**

```bash npm2yarn
npm install @realsee/dnalogel
```

**By es reference：**

```tsx
import { ModelEntryDoorGuidePlugin } from "@realsee/dnalogel"
```

## Development Guides

### Initialize

When initializing the `Five` instance, configure `ModelEntryDoorGuidePlugin` in the initialization plug-in parameters.

```ts
import { Five } from '@realsee/five'
import { ModelEntryDoorGuidePlugin } from "@realsee/dnalogel";

const five = new Five({
    plugins: [
        [
            ModelEntryDoorGuidePlugin,
            'modelEntryDoorGuidePlugin', // custom plugin name
            {
                // parameter configuration
            }
        ]
    ]
})
```

### React initialization

When creating `FiveProvider` , configure `ModelEntryDoorGuidePlugin` in the initialization plug-in parameters.

```ts
import { ModelEntryDoorGuidePlugin } from "@realsee/dnalogel";
import { createFiveProvider, FiveCanvas } from "@realsee/five/react";

const FiveProvider = createFiveProvider({
    plugins: [
        [
            ModelEntryDoorGuidePlugin,
            'modelEntryDoorGuidePlugin', // custom plugin name
            {
                // parameter configuration
            }
        ]
    ]
});
```

### Vue initialization

When using `FiveProvider` , configure `ModelEntryDoorGuidePlugin` in the initialization plug-in parameters.

```vue
<template>
  <FiveProvider :fiveInitArgs="fiveInitArgs">
  </FiveProvider>
</template>
<script setup>
import ModelEntryDoorGuidePlugin from "@realsee/dnalogel/libs/ModelEntryDoorGuidePlugin";
import { FiveProvider, FiveCanvas } from "@realsee/five/vue";
const fiveInitArgs = {
    plugins: [
        [
            ModelEntryDoorGuidePlugin,
            'modelEntryDoorGuidePlugin', // Custom plugin name
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
// Get an instance of a plugin, where `modelChassisCompassPlugin` is a custom name for initializing
const pluginInstance = five.plugins.modelEntryDoorGuidePlugin 

// Call `load` method to load model house labels
pluginInstance.load(modelEntryDoorGuidePluginData)
```

### Core approach

- `load(data: ModelEntryDoorGuidePluginData)` Loading plugin data

> You need to manually load the plug-in data, please read[Realsee Open Platform API](https://open-platform.realsee.com/developer/open/api#/)for the data source.

- `enable: (config?: { animationEnable?: boolean /** 是否开启动态效果 */ }) => void` enable plugins

- `disable: () => void` disabled plugins

## demo source reference

[demo source reference](https://github.com/realsee-developer/dnalogel/tree/main/examples/src)
