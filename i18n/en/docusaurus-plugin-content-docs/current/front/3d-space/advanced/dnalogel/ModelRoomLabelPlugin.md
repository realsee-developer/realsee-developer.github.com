---
title: Model Label
---

## **ModelRoomLabelPlugin**

## Function Description

**Model partition label plug-in** Integrate a set of interactions that can quickly view the room name in the model state & Quickly access the room panorama.

Details below：

- In model form, display the corresponding house name with a tag.
- Automatically hide the tag when the tagged room is covered by other houses.
- Tags can also follow the model when moving the model.
- When clicking on the tab, switch from model state to panorama and move to the point of the corresponding room center.
- When switching to a room, the camera perspective moves towards the room centre.

## Effect Display

Click the**Overview**button to view the house label effect in the space overview mode.

```mdx-code-block
import {PlaygroundCard} from '@site/src/components/Playground';

<div className="docs-vr-normal">
  <iframe className="docs-vr-iframe" src="https://realsee-developer.github.io/dnalogel/src/ModelRoomLabelPlugin/index.html"></iframe>
</div>

<PlaygroundCard
    url='https://stackblitz.com/edit/modelroomlabelplugin?file=index.tsx'
 />
```

## Install reference

**Please choose `yarn` or `npm` installation method：as needed**

```bash npm2yarn
npm install @realsee/dnalogel
```

**By es reference：**

```tsx
import { ModelRoomLabelPlugin } from "@realsee/dnagel";
```

## Development Guides

### Initialize

When initializing the `Five` instance, configure `ModelRoomLabelPlugin` in the initialization plug-in parameters.

```ts
import { Five } from "@realsee/five";
import { ModelRoomLabelPlugin } from "@realsee/dnalogel";

const five = new Five({
  plugins: [
    [
      ModelRoomLabelPlugin,
      "modelRoomLabelPlugin", // custom plugin name
      {
        // parameter configuration
      },
    ],
  ],
});
```

### React initialization

When creating `FiveProvider` , configure `ModelRoomLabelPlugin` in the initialization plug-in parameters.

```ts
import { ModelRoomLabelPlugin } from "@realsee/dnalogel";
import { createFiveProvider, FiveCanvas } from "@realsee/five/react";

const FiveProvider = createFiveProvider({
  plugins: [
    [
      ModelRoomLabelPlugin,
      "modelRoomLabelPlugin", // custom plugin name
      {
        // parameter configuration
      },
    ],
  ],
});
```

### Vue initialization

When using `FiveProvider` , configure `ModelRoomLabelPlugin` in the initialization plug-in parameters.

```vue
<template>
  <FiveProvider :fiveInitArgs="fiveInitArgs"> </FiveProvider>
</template>
<script setup>
import ModelRoomLabelPlugin from "@realsee/dnalogel/libs/ModelRoomLabelPlugin";
import { FiveProvider, FiveCanvas } from "@realsee/five/vue";
const fiveInitArgs = {
  plugins: [
    [
      ModelRoomLabelPlugin,
      "modelRoomLabelPlugin", // Custom plugin name
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
// Get an instance of a plugin, where ``modelRoomLabelPlugin` is a custom name upon initialization
const pluginInstance = five.plugins.modelRoomLabel;

// call the `load` method to load model house tag data
pluginInstance.load(modelRoomLabels);
```

### Node Mount

```ts
// Call appendTo(wrapper: Element) method to mount DOM nodes
five.plugins.modelRoomLabel.appendTo(wrapper);

// Example
React.useEffect(() => {
  ///plugin-full-screen-container is a preprepared mount node
  const wrapper = document.querySelector(".plugin-full-screen-container");
  if (wrapper) {
    five.plugins.modelRoomLabelPlugin.appendTo(wrapper);
  }
}, []);
```

### Core approach

- `load(data: ModelRoomLabelPluginData)` Loading plugin data

> You need to manually load the plug-in data, please read[Realsee Open Platform API](https://open-platform.realsee.com/developer/open/api#/)for the data source.

- `appendTo(wrapper: Element)` Mount DOM nodes

> You can load the plugin DOM module into your HTML structure.

## demo source reference

[demo source reference](https://github.com/realsee-developer/dnalogel/tree/main/examples/src)
