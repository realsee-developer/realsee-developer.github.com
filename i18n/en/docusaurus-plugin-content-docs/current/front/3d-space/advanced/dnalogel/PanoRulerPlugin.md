---
title: 'Add panorama size: glowing_star:'
---

## **PanoRuler Plugins**

:::info
Panorama ruler depends, for example, on the open API to fetch scale data, you can refer to [Open API](https://open-platform.realsee.com/developer/open/api/#/) to learn how to get panorama scale data. Panorama data open API interface is：`/open/v1/entity/pano_ruler/plugin`
:::

## Function Description

**Panorama ruler plugin** Provides dimensions for marking key outlines of listings in panorama mode.

Details below：

- Provides information on the size of the critical profile of the house in panoramic mode such as the height, area width and depth of the partition; supports scenes of vision VR and vision VR.
- Shows only the rubric line below the center of the current view.
- When moving points and changing perspectives, the rubric line will follow the move and change.
- Value bubbles length is adaptive：depending on the content of the value is adaptable to the length of the bubble and supports the value content being configured according to special needs, such as the value has the need for inch units.
- If the ruler is less than the numerical bubble length of that scale, the ruler shall not be displayed.

## Example effect

<div className="docs-vr-normal">
  <iframe className="docs-vr-iframe" src="https://realsee.js.org/dnalogel/src/PanoRulerPlugin/index.html"></iframe>
</div>

## Install reference

**Please choose `yarn` or `npm` installation method：as needed**

```bash npm2yarn
npm install @realsee/dnalogel
```

**By es reference：**

```tsx
import { PanoRulerPlugin } from "@realsee/dnalogel"
```

## Development Guides

### Initialize

When initializing `Five` instances, configure `PanoRuler Plugin` in initialize plugin parameters.

```ts
import { Five } from '@realsee/five'
import { PanoRulerPlugin } from "@realsee/dnalogel";

const five = new Five({
    plugins: [
        [
            PanoRulerPlugin,
            'panoRulerPlugin', // custom plugin name
            {
                // parameter configuration
            }
        ]
    ]
})
```

### React initialization

When creating `FiveProvider` , configure `PanoRuler Plugin` in initialize plugin parameters.

```ts
import { PanoRulerPlugin } from "@realsee/dnalogel";
import { createFiveProvider, FiveCanvas } from "@realsee/five/react";

const FiveProvider = createFiveProvider({
    plugins: [
        [
            PanoRulerPlugin,
            'panoRulerPlugin', // custom plugin name
            {
                // parameter configuration
            }
        ]
    ]
});
```

### Vue initialization

When using `FiveProvider` , configure `PanoRuler Plugin` in initialize plugin parameters.

```vue
<template>
  <FiveProvider :fiveInitArgs="fiveInitArgs">
  </FiveProvider>
</template>
<script setup>
import PanoRulerPlugin from "@realsee/dnalogel/libs/PanoRulerPlugin";
import { FiveProvider, FiveCanvas } from "@realsee/five/vue";
const fiveInitArgs = {
    plugins: [
        [
            PanoRulerPlugin ,
            'panoRulerPlugin', // Custom plugin name
            {
                // compassImageUrl: '' // Configure steering wheel image
            }
        ]
    ]
}
</script>
```

### Load data

```ts
// Get an instance of a plugin, where `panoRuler Plugin` is the custom name upon initialization
const pluginInstance = five.plugins.panoRulerPlugin

// call the `load` method to load panorama data
pluginInstance.load(roomInfo, roomRules, { distanceText: (distance) => `around ${distance.toFixed(1)}m`
```

:::tip
**distanceText caption：**

For example, the default value of the scale data output unit is**m**. If you need other units, you can change the unit description and add unified description information by passing in the `distanceText` callback method.Example**centimeter**：

```ts
pluginInstance.load(roomInfo, roomRules, { distanceText: (distance) => `about ${(distance * 100).toFixed(2)}cm`)
```

The callback parameter `distance` needs to be processed as **distance * 100** to achieve the purpose of converting meters into centimeters.`toFixed()` is used to set the reserved digits after the decimal point.

Effect Display： ![img.png](http://vrlab-public.ljcdn.com/common/file/web/75037dde-01a3-4954-b452-9d39b2592e0b.png)
:::

### Core approach

- `load: (roomInfo?: RoomInfo, roomRules?: RoomRules, options?: PanoRulerPluginOptions) => Promise<boolean>` Loading plugin data

> You need to load plugin data manually. Please read[to develop the API](https://open-platform.realsee.com/developer/open/api/#/)

- `enable: () => void` Open ruler

- `disable: () => void` closing ruler

## demo source reference

[demo source reference](https://github.com/realsee-developer/dnalogel/tree/main/examples/src)
