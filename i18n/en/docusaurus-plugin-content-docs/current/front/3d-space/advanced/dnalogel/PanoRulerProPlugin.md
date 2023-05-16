---
title: Add panorama Pro🌟
---

## **PanoRulerProPlugin**

:::info
Panorama Scale Pro depends, for example, on the open API to get Ruler Data Pro, you can refer to [Open API](https://open-platform.realsee.com/developer/open/api/#/) to learn how to get Panorama Scale Data Pro. Panorama API interface for panorama data Pro:：`/open/v1/plugin/PangRuler Proplugin` ::

## Function Description

**Panorama ruler plugin** Provides dimensions for marking key outlines of listings in panorama mode.

Details below：

- Provide information about the size of the critical profile of the house in the panoramic mode such as the height, width and depth of the partition.
- Compared to normal scales, there is an increase in physical identification and wall shield identification, a dashed area treated and styled optimization appears to be more space; currently, only the scene VR is supported; only single-floor buildings collected by Galohua, only for house space less than 200 mm, no rough room, a pre-run need to be specified, and an up-end entry.
- Shows only the rubric line below the center of the current view.
- When moving points and changing perspectives, the rubric line will follow the move and change.
- Value bubbles length is adaptive：depending on the content of the value is adaptable to the length of the bubble and supports the value content being configured according to special needs, such as the value has the need for inch units.
- If the ruler is less than the numerical bubble length of that scale, the ruler shall not be displayed.

## Diff point to panorama scale

### Optimize Points

1. Higher level data are more refined：based on the bottom of the front line, with the 1.0 rubric layer having an error of around 10cm, which is one of the main pain points in the 1.0 rugged by algorithm to reduce the error to less than 3cm.
2. Identifier location is more accurate： 2.0 ruler is identified based on wall algorithms and its display location is more marked to the real wall line.
3. Demo better at：2.0 ruler increases object recognition and wall mask identification, dashed blocks are processed and styled optimized and looks more spatial

### Limitations

1. Only scenes that support vision VR are currently supported.
2. Only single-floor buildings collected by Galohua are supported.
3. Only applies to residential space of less than 200 metres and does not support rough houses.
4. It can be used only after[is contacted with the VR range specified for data production as in](https://home.realsee.com/developer/contact)for data production.

## Example effect

<div className="docs-vr-normal">
  <iframe className="docs-vr-iframe" src="https://realsee-developer.github.io/dnalogel/src/PanoRulerProPlugin/index.html"></iframe>
</div>

## Install reference

**Please choose `yarn` or `npm` installation method：as needed**

```bash npm2yarn
npm install @realsee/dnalogel
```

**By es reference：**

```tsx
import { PanoRulerProPlugin } from "@realsee/dnalogel";
```

## Development Guides

### Initialize

When initializing `Five` instances, configure `PanoRulerProPlugin` in initialize plugin parameters.

```ts
import { Five } from "@realsee/five";
import { PanoRulerProPlugin } from "@realsee/dnalogel";

const five = new Five({
  plugins: [
    [
      PanoRulerProPlugin,
      "panoRulerProPlugin", // custom plugin name
      {
        // parameter configuration
      },
    ],
  ],
});
```

### React initialization

When creating `FiveProvider` , configure `PanoRulerProPlugin` in initialize plugin parameters.

```ts
import { PanoRulerProPlugin } from "@realsee/dnalogel";
import { createFiveProvider, FiveCanvas } from "@realsee/five/react";

const FiveProvider = createFiveProvider({
  plugins: [
    [
      PanoRulerProPlugin,
      "panoRulerProPlugin", // custom plugin name
      {
        // parameter configuration
      },
    ],
  ],
});
```

### Vue initialization

When using `FiveProvider` , configure `PanoRulerProPlugin` in initialize plugin parameters.

```vue
<template>
  <FiveProvider :fiveInitArgs="fiveInitArgs"> </FiveProvider>
</template>
<script setup>
import PanoRulerProPlugin from "@realsee/dnalogel/libs/PanoRulerProPlugin";
import { FiveProvider, FiveCanvas } from "@realsee/five/vue";
const fiveInitArgs = {
  plugins: [
    [
      PanoRulerProPlugin,
      "panoRulerProPlugin", // Custom plugin name
      {
        // Parameter configuration
      },
    ],
  ],
};
</script>
```

### Load data

```ts
// Get an instance of a plugin, where `panoRulerProPlugin` is a custom name upon initialization
const pluginInstance = five.plugins.panoRulerProPlugin;

// call `load` method to load panorama data
pluginInstance.load(data, {
  distanceText: (distance) => `approximately ${distance.toFixed(1)}m`,
});
```

### Core approach

- `load: (serverData: PanoRulerProPluginDatas) => Promise<boolean>` Loading plugin data

> You need to load plugin data manually. Please read[to develop the API](https://open-platform.realsee.com/developer/open/api/#/)

- `enable: () => void` Open ruler

- `disable: () => void` closing ruler

## demo source reference

[demo source reference](https://github.com/realsee-developer/dnalogel/tree/main/examples/src)
