---
title: Model "Widget"
--- 

## **ModelViewPlugins**

The model "Small Window" renders **Five** 's**Space Overview Mode** `Five.Mode.Floorplan` into a DOM node in the form of "Small Window", which can achieve the coexistence state of the panorama and the model.

## Example effect

<div className="docs-vr-normal">
  <iframe className="docs-vr-iframe" src="https://realsee.js.org/dnalogel/src/ModelViewPlugin/index.html"></iframe>
</div>

## Install reference

```tsx
import {  ModelViewPlugin } from "@realsee/dnalogel"
```

## Development Guides

### Initialize
When initializing the `Five` instance, configure `ModelViewPlugin` in the initialization plug-in parameters.

```ts
import { Five } from '@realsee/five'
import { ModelViewPlugin } from "@realsee/dnalogel";

const five = new Five({
    plugins: [
        [
            ModelViewPlugin,
            'modelViewPlugin', // custom plugin name
            {
                // parameter configuration
            }
        ]
    ]
})
```

### React initialization
When creating `FiveProvider` , configure `ModelViewPlugin` in the initialization plug-in parameters.

```ts
import { ModelViewPlugin } from "@realsee/dnalogel";
import { createFiveProvider, FiveCanvas } from "@realsee/five/react";

const FiveProvider = createFiveProvider({
    plugins: [
        [
            ModelViewPlugin,
            'modelViewPlugin', // custom plugin name
            {
                // parameter configuration
            }
        ]
    ]
});
```

### Vue initialization
When creating `FiveProvider` , configure `ModelViewPlugin` in the initialization plug-in parameters.

```vue
<template>
  <FiveProvider :fiveInitArgs="fiveInitArgs">
  </FiveProvider>
</template>
<script setup>
import ModelViewPlugin from "@realsee/dnalogel/libs/ModelViewPlugin"
import { FiveProvider, FiveCanvas } from "@realsee/five/vue";
const fiveInitArgs = {
    plugins: [
        [
            ModelViewPlugin,
            'modelViewPlugin', // Custom plugin name
            {
                // Parameter configuration
            }
        ]
    ]
}
</script>
```

### Node Mount

Obtain the reference of the `ModelViewPlugin` instance through`five.plugins.modelViewPlugin`.This plugin provides two methods：

- `appendTo(element: HTMLElement, size?: { width?: number; height?: number }): void`: mount rendering content to related `DOM` node
- `refresh(size?: { width?: number; height?: number }): void` : Force refresh, rerender once.

Mount DOM nodes via `appendTo`

```ts
five.plugins.modelViewPlugin.appendTo(wrapperElement)

// refresh method use sample
// five.plugins.modelViewPlugin.refresh ({ width: 160, height: 180 })
```

## demo source reference

[demo source reference](https://github.com/realsee-developer/dnalogel/tree/main/examples/src)
