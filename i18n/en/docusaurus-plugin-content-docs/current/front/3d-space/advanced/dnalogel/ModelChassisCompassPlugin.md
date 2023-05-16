---
title: Model Booster Compass
---

## **ModelChassisCompassPlugin**

## Function Description

**Model Booster Compass Plugin** integrates a set of compass decks that can view model directions in model status

Details below：

- In a model state, use the compass model to identify the physical direction of the model.

## Effect Display

Click the**Space Overview**button to view the model chassis compass in the space overview mode.

```mdx-code-block
<div className="docs-vr-normal">
  <iframe className="docs-vr-iframe" src="https://realsee-developer.github.io/dnalogel/src/ModelChassisCompassPlugin/index.html"></iframe>
</div>
```

## Install reference

**Please choose `yarn` or `npm` installation method：as needed**

```bash npm2yarn
npm install @realsee/dnalogel
```

**By es reference：**

```tsx
import { ModelChassisCompassPlugin } from "@realsee/dnalogel"
```

## Development Guides

### Initialize

When initializing the `Five` instance, configure `ModelChassisCompassPlugin` in the initialization plug-in parameters.

```ts
import { Five } from '@realsee/five'
import { ModelChassisCompassPlugin } from "@realsee/dnalogel";

const five = new Five({
    plugins: [
        [
            ModelChassisCompassPlugin,
            'modelChassisCompassPlugin', // custom plugin name
            {
                // parameter configuration
            }
        ]
    ]
})
```

### React initialization

When creating `FiveProvider` , configure `ModelChassisCompassPlugin` in the initialization plug-in parameters.

```ts
import { ModelChassisCompassPlugin } from "@realsee/dnalogel";
import { createFiveProvider, FiveCanvas } from "@realsee/five/react";

const FiveProvider = createFiveProvider({
    plugins: [
        [
            ModelChassisCompassPlugin,
            'modelChassisCompassPlugin', // custom plugin name
            {
                // parameter configuration
            }
        ]
    ]
});
```

### Vue initialization

When using `FiveProvider` , configure `ModelChassisCompassPlugin` in the initialization plug-in parameters.

```vue
<template>
  <FiveProvider :fiveInitArgs="fiveInitArgs">
  </FiveProvider>
</template>
<script setup>
import ModelChassisCompassPlugin from "@realsee/dnalogel/libs/ModelChassisCompassPlugin";
import { FiveProvider, FiveCanvas } from "@realsee/five/vue";
const fiveInitArgs = {
    plugins: [
        [
            ModelChassisCompassPlugin,
            'modelChassisCompassPlugin', // Custom plugin name
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
// Get an instance of a plugin, where `modelChassisCompassPlugin` is a custom name upon initialization
const pluginInstance = five.plugins.modelChassisCompassPlugin 

// call the `load` method to load model housing labels
pluginInstance.load(modelChassisCompassPluginData)
```

### Core approach

- `load(data: ModelChassisCompassPluginData)` Loading plugin data

> You need to manually load the plug-in data, please read[Realsee Open Platform API](https://open-platform.realsee.com/developer/open/api#/)for the data source.

- `enable: () => void` enable plugins

- `disable: () => void` disabled plugins

## demo source reference

[demo source reference](https://github.com/realsee-developer/dnalogel/tree/main/examples/src)
